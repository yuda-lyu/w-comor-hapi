import Hapi from '@hapi/hapi'
//import Inert from '@hapi/inert' //提供靜態檔案
import cloneDeep from 'lodash/cloneDeep'
import keys from 'lodash/keys'
import get from 'lodash/get'
import uniqBy from 'lodash/uniqBy'
import isEqual from 'lodash/isEqual'
import each from 'lodash/each'
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
 * @param {Object} [opt.serverHapi={}] 輸入hapi伺服器物件，若提供，本服務將自動加入api至route。使用外部hapi伺服器時，需開啟跨域功能，或是使用nginx反向代理轉入api請求
 * @param {Integer} [opt.port=8080] 輸入http API伺服器所在port，預設8080
 * @param {String} [opt.apiName='api'] 輸入http API伺服器網址的api名稱，預設'api'
 * @param {Function} opt.authenticate 輸入使用者身份認證函數，供伺服器端驗證之用，函數會傳入使用者端連線之token參數，回傳為Promise，resolve(true)為驗證通過，resolve(false)為驗證不通過
 * @param {Object} [opt.funcs={}] 輸入伺服器端供使用者端呼叫之函數物件，各key為函數名稱，對應value為函數本體。各函數之輸入需為單一物件，而各函數回傳皆為Promise，可通過resolve與reject回傳結果，預設{}
 * @param {Array} [opt.routes=[]] 輸入伺服器額外掛載routes陣列，預設[]
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
 *     authenticate: function(token) {
 *         //使用token驗證使用者身份
 *         return new Promise(function(resolve, reject) {
 *             setTimeout(function() {
 *                 resolve(true)
 *             }, 1000)
 *         })
 *     },
 *     filterFuncs: function(token, funcs) {
 *         //使用token驗證使用者身份與過濾可用funcs
 *         return new Promise(function(resolve, reject) {
 *             funcs = funcs.filter(function(v) {
 *                 return v.indexOf('Hide') < 0
 *             })
 *             resolve(funcs)
 *         })
 *     },
 *     onClientChange: function(conns, opt) {
 *         console.log(`Server[port:${opt.port}] now conns: ${conns.length}`)
 *     },
 *     funcs: {
 *         'group.plus': function({ p1, p2 }) {
 *             return new Promise(function(resolve, reject) {
 *                 setTimeout(function() {
 *                     resolve(p1 * p2)
 *                 }, random(100, 3000))
 *             })
 *         },
 *         'group.div': function({ p1, p2 }) {
 *             return new Promise(function(resolve, reject) {
 *                 setTimeout(function() {
 *                     resolve(p1 / p2)
 *                 }, random(100, 3000))
 *             })
 *         },
 *         'add': function({ p1, p2 }) {
 *             return new Promise(function(resolve, reject) {
 *                 setTimeout(function() {
 *                     resolve(p1 + p2)
 *                 }, random(100, 3000))
 *             })
 *         },
 *         'addHide': function({ p1, p2 }) {
 *             return new Promise(function(resolve, reject) {
 *                 setTimeout(function() {
 *                     resolve(p1 + p2)
 *                 }, random(100, 3000))
 *             })
 *         },
 *         'minu': function({ p1, p2 }) {
 *             return new Promise(function(resolve, reject) {
 *                 setTimeout(function() {
 *                     resolve(p1 - p2)
 *                 }, random(100, 3000))
 *             })
 *         },
 *     },
 *     routes: [
 *         {
 *             method: 'GET',
 *             path: '/code',
 *             handler: function (req, res) {
 *                 //console.log(req)
 *                 return 'get code query: ' + JSON.stringify(req.query)
 *                 //http://localhost:8080/code?a=1&bb=23.45
 *                 // => get code query: {"a":"1","bb":"23.45"}
 *             }
 *         },
 *     ],
 * }
 *
 * new HtServer(opt)
 *
 */
function HtServer(opt) {
    let conns = []
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
    if (!opt.routes) {
        opt.routes = []
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
        //console.log(`Server[port:${opt.port}][api:${opt.apiName}]: `, data)

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

                //add output
                data['output'] = { sys: 'sys', funcs: funcs }

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

        //delete input, 因input可能很大故回傳數據不包含原input
        delete data['input']

        //return data
        return JSON.stringify(data)

    }


    //changeConns
    function changeConns(conns) {
        if (isfun(opt.onClientChange)) {
            let clients_new = uniqBy(conns, 'clientId')
            if (!isEqual(clients, clients_new)) {
                clients = clients_new
                opt.onClientChange(clients, opt)
            }
        }
    }


    //api
    let api = {
        path: '/' + opt.apiName,
        method: 'POST',
        handler: function (req, res) {
            let pm = genPm()

            //connId
            let connId = genID()

            //clientId
            let clientId = get(req.payload, 'clientId')

            //client
            let client = {
                headers: req.headers,
                info: req.info,
            }

            //push
            conns.push({
                clientId: clientId,
                connId: connId,
                data: client,
            })
            changeConns(conns)

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
                    conns = conns.filter(function(c) {
                        return c.connId !== connId
                    })
                    changeConns(conns)

                })

            return pm
        },
    }


    async function startServer() {

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

        //route api
        server.route(api)

        //add routes
        each(opt.routes, function(v) {
            server.route(v)
        })

        //start
        await server.start()

        console.log(`Server running at: ${server.info.uri}`)

    }


    if (opt.serverHapi) {
        opt.serverHapi.route(api)
    }
    else {
        startServer()
    }


}


export default HtServer
