import axios from 'axios'
import get from 'lodash/get'
import set from 'lodash/set'
import genPm from 'wsemi/src/genPm.mjs'
import isfun from 'wsemi/src/isfun.mjs'
import haskey from 'wsemi/src/haskey.mjs'
import clearXSS from 'wsemi/src/clearXSS.mjs'
import genID from 'wsemi/src/genID.mjs'


/**
 * 建立http API使用者(Node.js與Browser)端物件
 *
 * @param {Object} opt 輸入設定參數物件
 * @param {String} [opt.url='http://localhost:8080/api'] 輸入http API伺服器網址，預設為'http://localhost:8080/api'
 * @param {String} [opt.token='*'] 輸入使用者認證用token，預設為'*'
 * @param {Function} opt.error 輸入監聽error函數
 * @param {Function} opt.reconn 輸入監聽reconn函數
 * @returns {Promise} 回傳Promise，resolve為映射伺服器端可用函數之物件，各函數輸入皆為單一物件，各函數回傳皆為Promise，用resolve與reject處理回傳結果
 * @example
 *
 * import HtClient from 'w-comor-hapi/dist/ws-client-node.umd.js'
 *
 * //opt
 * let opt = {
 *     url: 'http://localhost:8080/api',
 *     token: '*',
 *         error: function(err) {
 *             console.log('client: error:', err)
 *         },
 *         reconn: function() {
 *             console.log('client: reconn')
 *         },
 * }
 *
 * //HtClient
 * new HtClient(opt)
 *     .then(function(wo) {
 *         console.log('client: funcs: ', wo)
 *
 *         function core(ps) {
 *             wo.group.plus(ps)
 *                 .then(function(r) {
 *                     console.log('client: plus(' + JSON.stringify(ps) + ')=' + r)
 *                 })
 *                 .catch(function(err) {
 *                     console.log('client: plus: catch: ', err)
 *                 })
 *             wo.group.div(ps)
 *                 .then(function(r) {
 *                     console.log('client: div(' + JSON.stringify(ps) + ')=' + r)
 *                 })
 *                 .catch(function(err) {
 *                     console.log('client: div: catch: ', err)
 *                 })
 *             wo.add(ps)
 *                 .then(function(r) {
 *                     console.log(`client: add(${JSON.stringify(ps)})=${r}`)
 *                 })
 *                 .catch(function(err) {
 *                     console.log('client: add: catch: ', err)
 *                  })
 *             wo.minu(ps)
 *                 .then(function(r) {
 *                     console.log(`client: minu(${JSON.stringify(ps)})=${r}`)
 *                 })
 *                 .catch(function(err) {
 *                     console.log('client: minu: catch: ', err)
 *                  })
 *         }
 *
 *         let i = 100
 *         setInterval(function() {
 *             i += 1
 *             core({
 *                 p1: i,
 *                 p2: 10,
 *             })
 *         }, 1000)
 *
 *     })
 *     .catch(function(err) {
 *         console.log('client: catch', err)
 *     })
 *
 */
function HtClient(opt) {
    let pm = genPm()
    let wo = {} //回傳操作物件
    let clientId = genID() //供伺服器識別真實連線使用者


    function core() {


        //default
        if (!opt.url) {
            opt.url = 'http://localhost:8080/api'
        }
        if (!opt.token) {
            opt.token = '*'
        }


        //aj
        function aj(data, mode) {
            let pmm = genPm()

            //data to json string
            // if (mode !== 'upload file') {
            //     data = JSON.stringify(data)
            // }

            //clearXSS
            data = clearXSS(data)

            //s
            let s = {
                method: 'POST',
                url: opt.url,
                data: data,
                // onUploadProgress: function(ev) {
                //     let p = ev.loaded
                //     let r = 0
                //     if (ev.lengthComputable) {
                //         r = (ev.loaded * 100) / ev.total
                //     }
                //     if (isfun(opt.onUploadProgress)) {
                //         opt.onUploadProgress(Math.floor(r), r, p, 'upload')
                //     }
                // },
                // onDownloadProgress: function (ev) {
                //     let p = ev.loaded
                //     let r = 0
                //     if (ispint(opt.downloadFileSize)) {
                //         r = (ev.loaded * 100) / (opt.downloadFileSize * 1024)
                //     }
                //     if (isfun(opt.onDownloadProgress)) {
                //         opt.onDownloadProgress(Math.floor(r), r, p, 'download')
                //     }
                // },
            }

            //add Content-Type
            if (mode === 'upload file') {
                s['headers'] = {
                    'Content-Type': 'multipart/form-data'
                }
            }

            //add responseType
            if (mode === 'download file') {
                s['responseType'] = 'blob'
            }

            //axios
            axios(s)
                .then(function(res) {
                    //console.log('aj then', res, res.data.output)
                    pmm.resolve(res.data.output)
                })
                .catch(function(res) {
                    //console.log('aj catch', res)
                    let err = get(res, 'response.data')
                    if (err) {
                        res = err
                    }
                    else {
                        res = 'can not connection'
                    }
                    pmm.reject(res)
                })

            return pmm
        }


        //execFunction
        function execFunction(func, input = null) {

            //data
            let data = {
                clientId: clientId,
                token: opt.token,
                func: func,
                input: input,
            }

            //mode
            let mode = ''
            if (get(input, 'mode')) {
                mode = input.mode
            }

            //aj
            return aj(data, mode)
        }


        //getFuncs
        execFunction('getFuncs')
            .then(function (data) {

                //get sys funcs
                if (get(data, 'sys') === 'sys' && haskey(data, 'funcs')) {

                    //funcs
                    let funcs = data['funcs']

                    //clear wo
                    wo = {}

                    //bind funcs
                    for (let i = 0; i < funcs.length; i++) {

                        //func
                        let func = funcs[i]

                        //add func
                        let f = function(input) {
                            return execFunction(func, input)
                        }
                        set(wo, func, f)

                    }

                    //resolve
                    pm.resolve(wo)

                }
                else {
                    let err = 'no funcs'
                    if (isfun(opt.error)) {
                        opt.error(err)
                    }
                    reconn()
                    //pm.reject(err) //不能reject否則無法reconn
                }

            })
            .catch(function(err) {
                if (isfun(opt.error)) {
                    opt.error(err)
                }
                reconn()
                //pm.reject(err) //不能reject否則無法reconn
            })


    }


    function reconn() {
        setTimeout(function() {
            if (isfun(opt.reconn)) {
                opt.reconn()
            }
            core()
        }, 1000)
    }


    //core
    core()


    return pm
}


export default HtClient
