# w-comor-hapi
A http communicator in nodejs and browser. Mapping functions from nodejs to other end points, like a simple RPC.

![language](https://img.shields.io/badge/language-JavaScript-orange.svg) 
[![npm version](http://img.shields.io/npm/v/w-comor-hapi.svg?style=flat)](https://npmjs.org/package/w-comor-hapi) 
[![Build Status](https://travis-ci.org/yuda-lyu/w-comor-hapi.svg?branch=master)](https://travis-ci.org/yuda-lyu/w-comor-hapi) 
[![license](https://img.shields.io/npm/l/w-comor-hapi.svg?style=flat)](https://npmjs.org/package/w-comor-hapi) 
[![gzip file size](http://img.badgesize.io/yuda-lyu/w-comor-hapi/master/dist/ht-server.umd.js.svg?compression=gzip)](https://github.com/yuda-lyu/w-comor-hapi)
[![npm download](https://img.shields.io/npm/dt/w-comor-hapi.svg)](https://npmjs.org/package/w-comor-hapi) 
[![jsdelivr download](https://img.shields.io/jsdelivr/npm/hm/w-comor-hapi.svg)](https://www.jsdelivr.com/package/npm/w-comor-hapi)

## Documentation
To view documentation or get support, visit [docs](https://yuda-lyu.github.io/w-comor-hapi/global.html).

## Parts
`w-comor-hapi` includes 2 parts: 
* `ht-server`: for nodejs server
* `ht-client`: for nodejs or browser client

## Installation
### Using npm(ES6 module):
> **Note:** `ht-server` depends on `@hapi/hapi` and `ht-client` depends on `axios`.
```alias
npm i w-comor-hapi
```
#### Example for `ht-server`:
> **Link:** [[dev source code](https://github.com/yuda-lyu/w-comor-hapi/blob/master/srv.mjs)]
```alias
import HtServer from 'w-comor-hapi/dist/ht-server.umd.js'

function random(min, max) {
    return Math.floor(Math.random() * max) + min
}

let opt = {
    port: 8080,
    apiName: 'api',
    authenticate: async function(token) { 
        //authenticate user by token
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve(true)
            }, 1000)
        })
    },
    filterFuncs: async function(token, funcs) {
        //resolve funcs by authenticating user
        return new Promise(function(resolve, reject) {
            funcs = funcs.filter(function(v) {
                return v.indexOf('Hide') < 0
            })
            resolve(funcs)
        })
    },
    onClientChange: function(clients, opt) {
        console.log(`Server[port:${opt.port}] now clients: ${clients.length}`)
    },
    funcs: {
        'group.plus': function({ p1, p2 }) {
            return new Promise(function(resolve, reject) {
                setTimeout(function() {
                    resolve(p1 * p2)
                }, random(100, 3000))
            })
        },
        'group.div': function({ p1, p2 }) {
            return new Promise(function(resolve, reject) {
                setTimeout(function() {
                    resolve(p1 / p2)
                }, random(100, 3000))
            })
        },
        'add': function({ p1, p2 }) {
            return new Promise(function(resolve, reject) {
                setTimeout(function() {
                    resolve(p1 + p2)
                }, random(100, 3000))
            })
        },
        'addHide': function({ p1, p2 }) {
            return new Promise(function(resolve, reject) {
                setTimeout(function() {
                    resolve(p1 + p2)
                }, random(100, 3000))
            })
        },
        'minu': function({ p1, p2 }) {
            return new Promise(function(resolve, reject) {
                setTimeout(function() {
                    resolve(p1 - p2)
                }, random(100, 3000))
            })
        },
    },
    routes: [
        {
            method: 'GET',
            path: '/code',
            handler: function (req, res) {
                //console.log(req)
                return 'get code query: ' + JSON.stringify(req.query)
                //http://localhost:8080/code?a=1&bb=23.45
                // => get code query: {"a":"1","bb":"23.45"}
            }
        },
    ],
}

new HtServer(opt)
```
#### Example for `ht-client`:
> **Link:** [[dev source code](https://github.com/yuda-lyu/w-comor-hapi/blob/master/scla.mjs)]
```alias
import HtClient from 'w-comor-hapi/dist/ht-client.umd.js'

//opt
let opt = {
    url: 'http://localhost:8080/api',
    token: '*',
    error: function(err) {
        console.log('client nodejs: error:', err)
    },
    reconn: function() {
        console.log('client nodejs: reconn')
    },
}

//HtClient
new HtClient(opt)
    .then(function(wo) {
        console.log('client nodejs: funcs: ', wo)
        
        function core(ps) {
            wo.group.plus(ps)
                .then(function(r) {
                    console.log('client nodejs: plus(' + JSON.stringify(ps) + ')=' + r)
                })
                .catch(function(err) {
                    console.log('client nodejs: plus: catch: ', err)
                })
            wo.group.div(ps)
                .then(function(r) {
                    console.log('client nodejs: div(' + JSON.stringify(ps) + ')=' + r)
                })
                .catch(function(err) {
                    console.log('client nodejs: div: catch: ', err)
                })
            wo.add(ps)
                .then(function(r) {
                    console.log('client nodejs: add(' + JSON.stringify(ps) + ')=' + r)
                })
                .catch(function(err) {
                    console.log('client nodejs: add: catch: ', err)
                })
            wo.minu(ps)
                .then(function(r) {
                    console.log('client nodejs: minu(' + JSON.stringify(ps) + ')=' + r)
                })
                .catch(function(err) {
                    console.log('client nodejs: minu: catch: ', err)
                })
        }

        let i = 100
        setInterval(function() {
            i += 1
            core({
                p1: i,
                p2: 10,
            })
        }, 1000)

    })
    .catch(function(err) {
        console.log('client nodejs: catch: ', err)
    })
```

### In a browser(UMD module):
> **Note:** `ht-client` depends on `axios`.

[Optional] Add script with nomodule for IE11.
```alias
<script nomodule src="https://cdn.jsdelivr.net/npm/@babel/polyfill/dist/polyfill.min.js"></script>
```
[Necessary] Add script for axios.
```alias
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```
[Necessary] Add script for ht-client.
```alias
<script src="https://cdn.jsdelivr.net/npm/w-comor-hapi@1.0.5/dist/ht-client.umd.js"></script>
```
#### Example for `ht-client`:
> **Link:** [[dev source code](https://github.com/yuda-lyu/w-comor-hapi/blob/master/web.html)]
```alias
//opt
let opt = {
    url: 'http://localhost:8080/api',
    token: '*',
    error: function(err) {
        console.log('client web: error:', err)
    },
    reconn: function() {
        console.log('client web: reconn')
    },
}

//HtClient
let HtClient = window['ht-client']
new HtClient(opt)
    .then(function(wo) {
        console.log('client web: funcs: ', wo)
        
        function core(ps) {
            wo.group.plus(ps)
                .then(function(r) {
                    console.log('client web: plus(' + JSON.stringify(ps) + ')=' + r)
                })
                .catch(function(err) {
                    console.log('client web: plus: catch: ', err)
                })
            wo.group.div(ps)
                .then(function(r) {
                    console.log('client web: div(' + JSON.stringify(ps) + ')=' + r)
                })
                .catch(function(err) {
                    console.log('client web: div: catch: ', err)
                })
            wo.add(ps)
                .then(function(r) {
                    console.log('client web: add('+JSON.stringify(ps)+')='+r)
                })
                .catch(function(err) {
                    console.log('client web: add: catch: ', err)
                })
            wo.minu(ps)
                .then(function(r) {
                    console.log('client web: minu('+JSON.stringify(ps)+')='+r)
                })
                .catch(function(err) {
                    console.log('client web: minu: catch: ', err)
                })
        }

        let i = 100
        setInterval(function() {
            i += 1
            core({
                p1: i,
                p2: 10,
            })
        }, 1000)

    })
    .catch(function(err) {
        console.log('client web: catch: ', err)
    })
```