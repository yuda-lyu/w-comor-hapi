import Hapi from '@hapi/hapi'
//import Inert from '@hapi/inert' //提供靜態檔案
import cloneDeep from 'lodash/cloneDeep'
import keys from 'lodash/keys'
import genPm from 'wsemi/src/genPm.mjs'
import genID from 'wsemi/src/genID.mjs'
import haskey from 'wsemi/src/haskey.mjs'
import getdtvstr from 'wsemi/src/getdtvstr.mjs'
import getdtv from 'wsemi/src/getdtv.mjs'
import isfun from 'wsemi/src/isfun.mjs'
import arrhas from 'wsemi/src/arrhas.mjs'


/**
 * 建立http API伺服器
 *
 * @param {Object} opt 輸入設定參數物件
 * @param {Integer} [opt.serverHapi] 輸入hapi伺服器，本服務將自動加入api至route。使用外部hapi伺服器時，需開啟跨域功能，或是使用nginx反向代理轉入api請求
 * @param {Integer} [opt.port=8080] 輸入http API伺服器所在port，預設8080
 * @param {String} [opt.apiName='api'] 輸入http API伺服器網址的api名稱，預設'api'
 * @param {Function} opt.authenticate 輸入使用者身份認證函數，供伺服器端驗證之用，函數會傳入使用者端連線之token參數，回傳為Promise，resolve(true)為驗證通過，resolve(false)為驗證不通過
 * @param {Object} opt.funcs 輸入伺服器端供使用者端呼叫之函數物件，各key為函數名稱，對應value為函數本體。各函數之輸入需為單一物件，而各函數回傳皆為Promise，可通過resolve與reject回傳結果
 * @example
 *
 * import HtServer from 'w-comor-hapi/dist/ht-server.umd.js'
 *
 * function random(min, max) {
 *     return Math.floor(Math.random() * max) + min
 * }
 *
 * let opt = {
 *     port: 8080,
 *     apiName: 'api',
 *     authenticate: async function(token) {
 *         //使用token驗證使用者身份
 *         return new Promise(function(resolve, reject) {
 *             setTimeout(function() {
 *                 resolve(true)
 *             }, 1000)
 *         })
 *     },
 *     filterFuncs: async function(token, funcs) {
 *         //使用token驗證使用者身份與過濾可用funcs
 *         return new Promise(function(resolve, reject) {
 *             funcs = funcs.filter(function(v) {
 *                 return v.indexOf('Hide') < 0
 *             })
 *             resolve(funcs)
 *         })
 *     },
 *     onClientChange: function(clients, opt) {
 *         console.log(`Server[port:${opt.port}] now clients: ${clients.length}`)
 *     },
 *     funcs: {
 *         add: function({ p1, p2 }) {
 *             return new Promise(function(resolve, reject) {
 *                 setTimeout(function() {
 *                     resolve(p1 + p2)
 *                 }, random(100, 3000))
 *             })
 *         },
 *         addHide: function({ p1, p2 }) {
 *             return new Promise(function(resolve, reject) {
 *                 setTimeout(function() {
 *                     resolve(p1 + p2)
 *                 }, random(100, 3000))
 *             })
 *         },
 *         minu: function({ p1, p2 }) {
 *             return new Promise(function(resolve, reject) {
 *                 setTimeout(function() {
 *                     resolve(p1 - p2)
 *                 }, random(100, 3000))
 *             })
 *         },
 *     },
 * }
 *
 * new HtServer(opt)
 *
 */
function HtServer(opt) {
    let clients = []


    //cloneDeep
    opt = cloneDeep(opt)


    //default
    if (!opt.port) {
        opt.port = 8080
    }
    if (!opt.apiName) {
        opt.apiName = 'api'
    }


    //funcs
    let funcs = []
    if (haskey(opt, 'funcs')) {
        funcs = keys(opt['funcs'])
    }


    //authenticate
    function authenticate(token) {
        let pm = genPm()
        if (isfun(opt.authenticate)) {
            opt.authenticate(token)
                .then(function(vd) {
                    pm.resolve(vd)
                })
        }
        else {
            pm.resolve(true)
        }
        return pm
    }


    //execFunction
    async function execFunction(data) {
        console.log(`Server[port:${opt.port}][api:${opt.apiName}]: `, data)

        //token
        let token = getdtvstr(data, 'token')

        //vd
        let vd = await authenticate(token)

        //check
        if (vd) {

            //func
            let func = getdtvstr(data, 'func')

            //input
            let input = getdtv(data, 'input')

            //getFuncs
            if (func === 'getFuncs') {

                if (isfun(opt.filterFuncs)) {
                    funcs = await opt.filterFuncs(token, funcs)
                }

                //data
                data = { output: { sys: 'sys', funcs: funcs } }

            }
            //call
            else if (arrhas(funcs, func)) {

                //call func in opt.funcs
                let output = await opt['funcs'][func](input)

                //add output
                data['output'] = output

            }
            else {
                //return no func

                //add output
                data['output'] = { err: `can not find: ${func}` }

            }
        }
        else {
            //return no authenticate

            //add output
            data['output'] = { err: `can not authenticate token: ${token}` }

        }

        //return data
        return JSON.stringify(data)

    }


    //api
    let api = {
        path: '/' + opt.apiName,
        method: 'POST',
        handler: function (req, res) {
            let pm = genPm()

            //id
            let id = genID()

            //push
            clients.push({
                id: id,
                data: req,
            })
            console.log('push', id)
            if (isfun(opt.onClientChange)) {
                opt.onClientChange(clients, opt)
            }

            //data
            let data = req.payload

            //execFunction
            execFunction(data)
                .then(function(r) {
                    pm.resolve(r)
                })
                .catch(function(r) {
                    pm.reject(r)
                })
                .finally(function() {

                    //remove
                    console.log('remove', id)
                    clients = clients.filter(function(c) {
                        return c.id !== id
                    })
                    if (isfun(opt.onClientChange)) {
                        opt.onClientChange(clients, opt)
                    }

                })

            return pm
        },
    }


    async function newServer() {

        //server
        let server = Hapi.server({
            port: opt.port,
            //host: 'localhost',
            routes: {
                cors: true
            },
        })

        //register inert
        //await server.register(Inert)

        //route
        server.route(api)

        //start
        await server.start()

        console.log(`Server running at: ${server.info.uri}`)

    }


    //serverHapi
    if (opt.serverHapi) {

        //add route
        opt.serverHapi.route(api)

    }
    else {

        //newServer
        newServer()

    }


}


export default HtServer
