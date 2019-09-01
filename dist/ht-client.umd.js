/*!
 * ht-client v1.0.15
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */(function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("axios")):"function"==typeof define&&define.amd?define(["axios"],t):(e=e||self,e["ht-client"]=t(e.axios))})(this,function(e){'use strict';var re=String.prototype;function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function o(e,t){return t={exports:{}},e(t,t.exports),t.exports}function r(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":we&&we in Object(e)?me(e):_e(e)}function n(e){return null!=e&&"object"==t(e)}function i(e){return"symbol"==t(e)||ke(e)&&Ae(e)=="[object Symbol]"}function a(e,o){if(ie(e))return!1;var r=t(e);return!!("number"==r||"symbol"==r||"boolean"==r||null==e||Se(e))||Te.test(e)||!ve.test(e)||null!=o&&e in Object(o)}function s(e){var o=t(e);return null!=e&&("object"==o||"function"==o)}function l(e){return!!Fe&&Fe in e}function c(e){var t=-1,o=null==e?0:e.length;for(this.clear();++t<o;){var r=e[t];this.set(r[0],r[1])}}function d(e){var t=-1,o=null==e?0:e.length;for(this.clear();++t<o;){var r=e[t];this.set(r[0],r[1])}}function p(e){var o=t(e);return"string"==o||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==e:null===e}function g(e){var t=-1,o=null==e?0:e.length;for(this.clear();++t<o;){var r=e[t];this.set(r[0],r[1])}}function u(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var o=function o(){var r=arguments,n=t?t.apply(this,r):r[0],i=o.cache;if(i.has(n))return i.get(n);var a=e.apply(this,r);return o.cache=i.set(n,a)||i,a};return o.cache=new(u.Cache||st),o}function f(e){if("string"==typeof e)return e;if(ie(e))return pt(e,f)+"";if(Se(e))return ft?ft.call(e):"";var t=e+"";return"0"==t&&1/e==-gt?"-0":t}function b(e,t,o){var r=e[t];kt.call(e,t)&&Je(r,o)&&(o!==void 0||t in e)||wt(e,t,o)}function h(e,o){var r=t(e);return o=null==o?9007199254740991:o,!!o&&("number"==r||"symbol"!=r&&vt.test(e))&&-1<e&&0==e%1&&e<o}function y(){var e,t,o=new Promise(function(){e=arguments[0],t=arguments[1]});return o.resolve=e,o.reject=t,o}function m(e){var t=Object.prototype.toString.call(e);return"[object Function]"===t||"[object AsyncFunction]"===t}function j(e){var t=Object.prototype.toString.call(e);return"[object Object]"===t}function x(e){var t=Object.prototype.toString.call(e);return"[object String]"===t}function _(e){return!!(x(e)&&""!==e)}function w(e,t){return!!j(e)&&!!_(t)&&t in e}function A(e){var t=this.__data__=new rt(e);this.size=t.size}function k(e,t,o,r,n,i){var a,s=1&t,l=2&t;if(o&&(a=n?o(e,r,n,i):o(e)),void 0!==a)return a;if(!Ie(e))return e;var c=ie(e);if(!c){var d=rr(e),p="[object Function]"==d||"[object GeneratorFunction]"==d;if(Dt(e))return mo(e,s);if("[object Object]"!=d&&"[object Arguments]"!=d&&(!p||n)){if(!Tr[d])return n?e:{};a=yr(e,d,s)}else if(a=l||p?{}:xr(e),!s)return l?Eo(e,yo(a,e)):To(e,po(a,e))}else if(a=ar(e),!s)return jo(e,a);i||(i=new lo);var g=i.get(e);if(g)return g;i.set(e,a),vr(e)?e.forEach(function(r){a.add(k(r,t,o,r,e,i))}):Ar(e)&&e.forEach(function(r,n){a.set(n,k(r,t,o,n,e,i))});var u=4&t?l?Bo:Vo:l?keysIn:ro,f=c?void 0:u(e);return zt(f||e,function(r,n){f&&(n=r,r=e[n]),St(a,n,k(r,t,o,n,e,i))}),a}function S(){return{"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,"animation-duration":!1,"animation-fill-mode":!1,"animation-iteration-count":!1,"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,azimuth:!1,"backface-visibility":!1,background:!0,"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,"border-bottom-style":!0,"border-bottom-width":!0,"border-collapse":!0,"border-color":!0,"border-image":!0,"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,"border-style":!0,"border-top":!0,"border-top-color":!0,"border-top-left-radius":!0,"border-top-right-radius":!0,"border-top-style":!0,"border-top-width":!0,"border-width":!0,bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,"column-rule-color":!1,"column-rule-style":!1,"column-rule-width":!1,"column-span":!1,"column-width":!1,columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,float:!1,"float-offset":!1,"flood-color":!1,"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,"grid-auto-columns":!1,"grid-auto-flow":!1,"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,"lighting-color":!0,"line-box-contain":!1,"line-break":!1,"line-grid":!1,"line-height":!1,"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,"mask-box-width":!1,"mask-clip":!1,"mask-image":!1,"mask-origin":!1,"mask-position":!1,"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,"overflow-x":!1,"overflow-y":!1,padding:!0,"padding-bottom":!0,"padding-left":!0,"padding-right":!0,"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,"shape-image-threshold":!1,"shape-outside":!1,"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,"text-emphasis-position":!0,"text-emphasis-style":!0,"text-height":!0,"text-indent":!0,"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,"voice-range":!1,"voice-rate":!1,"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1}}function v(e){return e===void 0||null===e}function T(e){var t={};for(var o in e)t[o]=e[o];return t}function I(e){e=T(e||{}),e.whiteList=e.whiteList||Cr.whiteList,e.onAttr=e.onAttr||Cr.onAttr,e.onIgnoreAttr=e.onIgnoreAttr||Cr.onIgnoreAttr,e.safeAttrValue=e.safeAttrValue||Cr.safeAttrValue,this.options=e}function O(){return{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","loop","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],sup:[],strong:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","loop","preload","src","height","width"]}}function z(e){return e.replace(Mr,"&lt;").replace(Nr,"&gt;")}function C(e){return e.replace(Rr,"&quot;")}function F(e){return e.replace(Hr,"\"")}function P(e){return e.replace(Xr,function(e,t){var o=String.fromCharCode;return"x"===t[0]||"X"===t[0]?o(parseInt(t.substr(1),16)):o(parseInt(t,10))})}function E(e){return e.replace(qr,":").replace($r," ")}function L(e){for(var t="",o=0,r=e.length;o<r;o++)t+=32>e.charCodeAt(o)?" ":e.charAt(o);return Br.trim(t)}function V(e){return e=F(e),e=P(e),e=E(e),e=L(e),e}function B(e){return e=C(e),e=z(e),e}function U(e){var t=Br.spaceIndex(e);if(-1===t)var o=e.slice(1,-1);else var o=e.slice(1,t+1);return o=Br.trim(o).toLowerCase(),"/"===o.slice(0,1)&&(o=o.slice(1)),"/"===o.slice(-1)&&(o=o.slice(0,-1)),o}function D(e){return"</"===e.slice(0,2)}function W(e,t){for(;t<e.length;t++){var o=e[t];if(" "!==o)return"="===o?t:-1}}function M(e,t){for(;0<t;t--){var o=e[t];if(" "!==o)return"="===o?t:-1}}function N(e){return!(("\""!==e[0]||"\""!==e[e.length-1])&&("'"!==e[0]||"'"!==e[e.length-1]))}function R(e){return N(e)?e.substr(1,e.length-2):e}function H(e){return e===void 0||null===e}function X(e){var t=Br.spaceIndex(e);if(-1===t)return{html:"",closing:"/"===e[e.length-2]};e=Br.trim(e.slice(t+1,-1));var o="/"===e[e.length-1];return o&&(e=Br.trim(e.slice(0,-1))),{html:e,closing:o}}function q(e){var t={};for(var o in e)t[o]=e[o];return t}function $(e){e=q(e||{}),e.stripIgnoreTag&&(e.onIgnoreTag&&console.error("Notes: cannot use these two options \"stripIgnoreTag\" and \"onIgnoreTag\" at the same time"),e.onIgnoreTag=Jr.onIgnoreTagStripAll),e.whiteList=e.whiteList||Jr.whiteList,e.onTag=e.onTag||Jr.onTag,e.onTagAttr=e.onTagAttr||Jr.onTagAttr,e.onIgnoreTag=e.onIgnoreTag||Jr.onIgnoreTag,e.onIgnoreTagAttr=e.onIgnoreTagAttr||Jr.onIgnoreTagAttr,e.safeAttrValue=e.safeAttrValue||Jr.safeAttrValue,e.escapeHtml=e.escapeHtml||Jr.escapeHtml,this.options=e,!1===e.css?this.cssFilter=!1:(e.css=e.css||{},this.cssFilter=new on(e.css))}function Q(e){var t=Object.prototype.toString.call(e);return"[object Array]"===t}function G(e){function r(e){return sn(e,{onIgnoreTagAttr:function(e,t,o){if("style"===t)return t+"=\""+sn.escapeAttrValue(o)+"\""}})}function n(e){return Q(e)||j(e)?(so(e,function(t,o){e[o]=n(t)}),e):x(e)?r(e):e}var i=n(Ir(e));return i}function Y(e){var t=Object.prototype.toString.call(e);return"[object Number]"===t}function Z(e){var t=!1;return _(e)?t=!isNaN(+e):Y(e)&&(t=!0),t}function K(e){if(!Z(e))return 0;var t=mn(e);return t}function J(e){return!!Z(e)&&(e=K(e),xn(e))}function ee(e){if(!Z(e))return 0;e=K(e);var t=kn(e);return"0"===t+""?0:t}function te(e){if(!J(e))return!1;var t=0<ee(e);return t}function oe(){var e,t=0<arguments.length&&arguments[0]!==void 0?arguments[0]:32,o=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],n=[],a=o.length;if(te(t))for(e=0;e<t;e++)n[e]=o[0|Math.random()*a];else if("rfc4122"===t){n[8]=n[13]=n[18]=n[23]="-",n[14]="4";var s;for(e=0;36>e;e++)n[e]||(s=0|16*Math.random(),n[e]=o[19===e?8|3&s:s])}else return"";var l=n.join("");return l}e=e&&e.hasOwnProperty("default")?e["default"]:e;var ne=Array.isArray,ie=ne,ae="undefined"==typeof globalThis?"undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?{}:self:global:window:globalThis,se="object"==t(ae)&&ae&&ae.Object===Object&&ae,le=se,ce="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,de=le||ce||Function("return this")(),pe=de,ge=pe.Symbol,ue=ge,fe=Object.prototype,be=fe.hasOwnProperty,he=fe.toString,ye=ue?ue.toStringTag:void 0,me=function(e){var t=be.call(e,ye),o=e[ye];try{e[ye]=void 0;var r=!0}catch(t){}var n=he.call(e);return r&&(t?e[ye]=o:delete e[ye]),n},je=Object.prototype,xe=je.toString,_e=function(e){return xe.call(e)},we=ue?ue.toStringTag:void 0,Ae=r,ke=n,Se=i,ve=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Te=/^\w*$/,Ie=s,Oe=function(e){if(!Ie(e))return!1;var t=Ae(e);return t=="[object Function]"||t=="[object GeneratorFunction]"||t=="[object AsyncFunction]"||t=="[object Proxy]"},ze=pe["__core-js_shared__"],Ce=ze,Fe=function(){var e=/[^.]+$/.exec(Ce&&Ce.keys&&Ce.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Pe=Function.prototype,Ee=Pe.toString,Le=function(e){if(null!=e){try{return Ee.call(e)}catch(t){}try{return e+""}catch(t){}}return""},Ve=/[\\^$.*+?()[\]{}|]/g,Be=/^\[object .+?Constructor\]$/,Ue=Function.prototype,De=Object.prototype,We=Ue.toString,Me=De.hasOwnProperty,Ne=RegExp("^"+We.call(Me).replace(Ve,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Re=function(e){if(!Ie(e)||l(e))return!1;var t=Oe(e)?Ne:Be;return t.test(Le(e))},He=function(e,t){return null==e?void 0:e[t]},Xe=function(e,t){var o=He(e,t);return Re(o)?o:void 0},qe=Xe(Object,"create"),$e=qe,Qe=Object.prototype,Ge=Qe.hasOwnProperty,Ye=Object.prototype,Ze=Ye.hasOwnProperty;c.prototype.clear=function(){this.__data__=$e?$e(null):{},this.size=0},c.prototype["delete"]=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},c.prototype.get=function(e){var t=this.__data__;if($e){var o=t[e];return o==="__lodash_hash_undefined__"?void 0:o}return Ge.call(t,e)?t[e]:void 0},c.prototype.has=function(e){var t=this.__data__;return $e?t[e]!==void 0:Ze.call(t,e)},c.prototype.set=function(e,t){var o=this.__data__;return this.size+=this.has(e)?0:1,o[e]=$e&&void 0===t?"__lodash_hash_undefined__":t,this};var Ke=c,Je=function(e,t){return e===t||e!==e&&t!==t},et=function(e,t){for(var o=e.length;o--;)if(Je(e[o][0],t))return o;return-1},tt=Array.prototype,ot=tt.splice;d.prototype.clear=function(){this.__data__=[],this.size=0},d.prototype["delete"]=function(e){var t=this.__data__,o=et(t,e);if(0>o)return!1;var r=t.length-1;return o==r?t.pop():ot.call(t,o,1),--this.size,!0},d.prototype.get=function(e){var t=this.__data__,o=et(t,e);return 0>o?void 0:t[o][1]},d.prototype.has=function(e){return-1<et(this.__data__,e)},d.prototype.set=function(e,t){var o=this.__data__,r=et(o,e);return 0>r?(++this.size,o.push([e,t])):o[r][1]=t,this};var rt=d,nt=Xe(pe,"Map"),it=nt,at=function(e,t){var o=e.__data__;return p(t)?o["string"==typeof t?"string":"hash"]:o.map};g.prototype.clear=function(){this.size=0,this.__data__={hash:new Ke,map:new(it||rt),string:new Ke}},g.prototype["delete"]=function(e){var t=at(this,e)["delete"](e);return this.size-=t?1:0,t},g.prototype.get=function(e){return at(this,e).get(e)},g.prototype.has=function(e){return at(this,e).has(e)},g.prototype.set=function(e,t){var o=at(this,e),r=o.size;return o.set(e,t),this.size+=o.size==r?0:1,this};var st=g;u.Cache=st;var lt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ct=/\\(\\)?/g,dt=function(e){var t=u(e,function(e){return 500===o.size&&o.clear(),e}),o=t.cache;return t}(function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(lt,function(e,o,r,n){t.push(r?n.replace(ct,"$1"):o||e)}),t}),pt=function(e,t){for(var o=-1,r=null==e?0:e.length,n=Array(r);++o<r;)n[o]=t(e[o],o,e);return n},gt=1/0,ut=ue?ue.prototype:void 0,ft=ut?ut.toString:void 0,bt=function(e){return null==e?"":f(e)},ht=function(e,t){return ie(e)?e:a(e,t)?[e]:dt(bt(e))},yt=function(e){if("string"==typeof e||Se(e))return e;var t=e+"";return"0"==t&&1/e==-(1/0)?"-0":t},mt=function(e,t){t=ht(t,e);for(var o=0,r=t.length;null!=e&&o<r;)e=e[yt(t[o++])];return o&&o==r?e:void 0},jt=function(e,t,o){var r=null==e?void 0:mt(e,t);return r===void 0?o:r},xt=function(){try{var e=Xe(Object,"defineProperty");return e({},"",{}),e}catch(t){}}(),_t=xt,wt=function(e,t,o){"__proto__"==t&&_t?_t(e,t,{configurable:!0,enumerable:!0,value:o,writable:!0}):e[t]=o},At=Object.prototype,kt=At.hasOwnProperty,St=b,vt=/^(?:0|[1-9]\d*)$/,Tt=h,It=function(e,t,o,r){if(!Ie(e))return e;t=ht(t,e);for(var n=-1,i=t.length,a=e;null!=a&&++n<i;){var s=yt(t[n]),l=o;if(n!=i-1){var c=a[s];l=r?r(c,s,a):void 0,l===void 0&&(l=Ie(c)?c:Tt(t[n+1])?[]:{})}St(a,s,l),a=a[s]}return e},Ot=function(e,t,o){return null==e?e:It(e,t,o)},zt=function(e,t){for(var o=-1,r=null==e?0:e.length;++o<r&&!(!1===t(e[o],o,e)););return e},Ct=function(e){return function(t,o,r){for(var n=-1,i=Object(t),a=r(t),s=a.length;s--;){var l=a[e?s:++n];if(!1===o(i[l],l,i))break}return t}}(),Ft=function(e,t){for(var o=-1,r=Array(e);++o<e;)r[o]=t(o);return r},Pt=function(e){return ke(e)&&Ae(e)=="[object Arguments]"},Et=Object.prototype,Lt=Et.hasOwnProperty,Vt=Et.propertyIsEnumerable,Bt=Pt(function(){return arguments}())?Pt:function(e){return ke(e)&&Lt.call(e,"callee")&&!Vt.call(e,"callee")},Ut=function(){return!1},Dt=o(function(e,t){var o=t&&!t.nodeType&&t,r=o&&!0&&e&&!e.nodeType&&e,n=r&&r.exports===o,i=n?pe.Buffer:void 0,a=i?i.isBuffer:void 0;e.exports=a||Ut}),Wt=function(e){return"number"==typeof e&&-1<e&&0==e%1&&e<=9007199254740991},Mt={};Mt["[object Float32Array]"]=Mt["[object Float64Array]"]=Mt["[object Int8Array]"]=Mt["[object Int16Array]"]=Mt["[object Int32Array]"]=Mt["[object Uint8Array]"]=Mt["[object Uint8ClampedArray]"]=Mt["[object Uint16Array]"]=Mt["[object Uint32Array]"]=!0,Mt["[object Arguments]"]=Mt["[object Array]"]=Mt["[object ArrayBuffer]"]=Mt["[object Boolean]"]=Mt["[object DataView]"]=Mt["[object Date]"]=Mt["[object Error]"]=Mt["[object Function]"]=Mt["[object Map]"]=Mt["[object Number]"]=Mt["[object Object]"]=Mt["[object RegExp]"]=Mt["[object Set]"]=Mt["[object String]"]=Mt["[object WeakMap]"]=!1;var Nt=function(e){return function(t){return e(t)}},Rt=o(function(e,t){var o=t&&!t.nodeType&&t,r=o&&!0&&e&&!e.nodeType&&e,n=r&&r.exports===o,i=n&&le.process,a=function(){try{var e=r&&r.require&&r.require("util").types;return e?e:i&&i.binding&&i.binding("util")}catch(t){}}();e.exports=a}),Ht=Rt&&Rt.isTypedArray,Xt=Ht?Nt(Ht):function(e){return ke(e)&&Wt(e.length)&&!!Mt[Ae(e)]},qt=Object.prototype,$t=qt.hasOwnProperty,Qt=function(e,t){var o=ie(e),r=!o&&Bt(e),n=!o&&!r&&Dt(e),i=!o&&!r&&!n&&Xt(e),a=o||r||n||i,s=a?Ft(e.length,String):[],l=s.length;for(var c in e)(t||$t.call(e,c))&&!(a&&("length"==c||n&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Tt(c,l)))&&s.push(c);return s},Gt=Object.prototype,Yt=function(e){var t=e&&e.constructor,o="function"==typeof t&&t.prototype||Gt;return e===o},Zt=function(e,t){return function(o){return e(t(o))}},Kt=Zt(Object.keys,Object),Jt=Object.prototype,eo=Jt.hasOwnProperty,to=function(e){if(!Yt(e))return Kt(e);var t=[];for(var o in Object(e))eo.call(e,o)&&"constructor"!=o&&t.push(o);return t},oo=function(e){return null!=e&&Wt(e.length)&&!Oe(e)},ro=function(e){return oo(e)?Qt(e):to(e)},no=function(e,t){return function(o,r){if(null==o)return o;if(!oo(o))return e(o,r);for(var n=o.length,i=t?n:-1,a=Object(o);(t?i--:++i<n)&&!(!1===r(a[i],i,a)););return o}}(function(e,t){return e&&Ct(e,t,ro)}),io=function(e){return e},ao=function(e){return"function"==typeof e?e:io},so=function(e,t){var o=ie(e)?zt:no;return o(e,ao(t))};A.prototype.clear=function(){this.__data__=new rt,this.size=0},A.prototype["delete"]=function(e){var t=this.__data__,o=t["delete"](e);return this.size=t.size,o},A.prototype.get=function(e){return this.__data__.get(e)},A.prototype.has=function(e){return this.__data__.has(e)},A.prototype.set=function(e,t){var o=this.__data__;if(o instanceof rt){var r=o.__data__;if(!it||199>r.length)return r.push([e,t]),this.size=++o.size,this;o=this.__data__=new st(r)}return o.set(e,t),this.size=o.size,this};var lo=A,co=function(e,t,o,r){var n=!o;o||(o={});for(var i=-1,a=t.length;++i<a;){var s=t[i],l=r?r(o[s],e[s],s,o,e):void 0;l===void 0&&(l=e[s]),n?wt(o,s,l):St(o,s,l)}return o},po=function(e,t){return e&&co(t,ro(t),e)},go=function(e){var t=[];if(null!=e)for(var o in Object(e))t.push(o);return t},uo=Object.prototype,fo=uo.hasOwnProperty,bo=function(e){if(!Ie(e))return go(e);var t=Yt(e),o=[];for(var r in e)("constructor"!=r||!t&&fo.call(e,r))&&o.push(r);return o},ho=function(e){return oo(e)?Qt(e,!0):bo(e)},yo=function(e,t){return e&&co(t,ho(t),e)},mo=o(function(e,t){var o=t&&!t.nodeType&&t,r=o&&!0&&e&&!e.nodeType&&e,n=r&&r.exports===o,i=n?pe.Buffer:void 0,a=i?i.allocUnsafe:void 0;e.exports=function(e,t){if(t)return e.slice();var o=e.length,r=a?a(o):new e.constructor(o);return e.copy(r),r}}),jo=function(e,t){var o=-1,r=e.length;for(t||(t=Array(r));++o<r;)t[o]=e[o];return t},xo=function(e,t){for(var o=-1,r=null==e?0:e.length,n=0,i=[];++o<r;){var a=e[o];t(a,o,e)&&(i[n++]=a)}return i},_o=function(){return[]},wo=Object.prototype,Ao=wo.propertyIsEnumerable,ko=Object.getOwnPropertySymbols,So=ko?function(e){return null==e?[]:(e=Object(e),xo(ko(e),function(t){return Ao.call(e,t)}))}:_o,vo=So,To=function(e,t){return co(e,vo(e),t)},Io=function(e,t){for(var o=-1,r=t.length,n=e.length;++o<r;)e[n+o]=t[o];return e},Oo=Zt(Object.getPrototypeOf,Object),zo=Oo,Co=Object.getOwnPropertySymbols,Fo=Co?function(e){for(var t=[];e;)Io(t,vo(e)),e=zo(e);return t}:_o,Po=Fo,Eo=function(e,t){return co(e,Po(e),t)},Lo=function(e,t,o){var r=t(e);return ie(e)?r:Io(r,o(e))},Vo=function(e){return Lo(e,ro,vo)},Bo=function(e){return Lo(e,ho,Po)},Uo=Xe(pe,"DataView"),Do=Uo,Wo=Xe(pe,"Promise"),Mo=Wo,No=Xe(pe,"Set"),Ro=No,Ho=Xe(pe,"WeakMap"),Xo=Ho,qo="[object Map]",$o="[object Promise]",Qo="[object Set]",Go="[object WeakMap]",Yo="[object DataView]",Zo=Le(Do),Ko=Le(it),Jo=Le(Mo),er=Le(Ro),tr=Le(Xo),or=Ae;(Do&&or(new Do(new ArrayBuffer(1)))!=Yo||it&&or(new it)!=qo||Mo&&or(Mo.resolve())!=$o||Ro&&or(new Ro)!=Qo||Xo&&or(new Xo)!=Go)&&(or=function(e){var t=Ae(e),o=t=="[object Object]"?e.constructor:void 0,r=o?Le(o):"";if(r)switch(r){case Zo:return Yo;case Ko:return qo;case Jo:return $o;case er:return Qo;case tr:return Go;}return t});var rr=or,nr=Object.prototype,ir=nr.hasOwnProperty,ar=function(e){var t=e.length,o=new e.constructor(t);return t&&"string"==typeof e[0]&&ir.call(e,"index")&&(o.index=e.index,o.input=e.input),o},sr=pe.Uint8Array,lr=sr,cr=function(e){var t=new e.constructor(e.byteLength);return new lr(t).set(new lr(e)),t},dr=function(e,t){var o=t?cr(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.byteLength)},pr=/\w*$/,gr=function(e){var t=new e.constructor(e.source,pr.exec(e));return t.lastIndex=e.lastIndex,t},ur=ue?ue.prototype:void 0,fr=ur?ur.valueOf:void 0,br=function(e){return fr?Object(fr.call(e)):{}},hr=function(e,t){var o=t?cr(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.length)},yr=function(e,t,o){var r=e.constructor;return"[object ArrayBuffer]"===t?cr(e):"[object Boolean]"===t||"[object Date]"===t?new r(+e):"[object DataView]"===t?dr(e,o):"[object Float32Array]"===t||"[object Float64Array]"===t||"[object Int8Array]"===t||"[object Int16Array]"===t||"[object Int32Array]"===t||"[object Uint8Array]"===t||"[object Uint8ClampedArray]"===t||"[object Uint16Array]"===t||"[object Uint32Array]"===t?hr(e,o):"[object Map]"===t?new r:"[object Number]"===t||"[object String]"===t?new r(e):"[object RegExp]"===t?gr(e):"[object Set]"===t?new r:"[object Symbol]"===t?br(e):void 0},mr=Object.create,jr=function(){function e(){}return function(t){if(!Ie(t))return{};if(mr)return mr(t);e.prototype=t;var o=new e;return e.prototype=void 0,o}}(),xr=function(e){return"function"!=typeof e.constructor||Yt(e)?{}:jr(zo(e))},_r=Rt&&Rt.isMap,wr=_r?Nt(_r):function(e){return ke(e)&&rr(e)=="[object Map]"},Ar=wr,kr=Rt&&Rt.isSet,Sr=kr?Nt(kr):function(e){return ke(e)&&rr(e)=="[object Set]"},vr=Sr,Tr={};Tr["[object Arguments]"]=Tr["[object Array]"]=Tr["[object ArrayBuffer]"]=Tr["[object DataView]"]=Tr["[object Boolean]"]=Tr["[object Date]"]=Tr["[object Float32Array]"]=Tr["[object Float64Array]"]=Tr["[object Int8Array]"]=Tr["[object Int16Array]"]=Tr["[object Int32Array]"]=Tr["[object Map]"]=Tr["[object Number]"]=Tr["[object Object]"]=Tr["[object RegExp]"]=Tr["[object Set]"]=Tr["[object String]"]=Tr["[object Symbol]"]=Tr["[object Uint8Array]"]=Tr["[object Uint8ClampedArray]"]=Tr["[object Uint16Array]"]=Tr["[object Uint32Array]"]=!0,Tr["[object Error]"]=Tr["[object Function]"]=Tr["[object WeakMap]"]=!1;var Ir=function(e){return k(e,5)},Or=/javascript\s*\:/img,zr=S(),Cr={whiteList:zr,getDefaultWhiteList:S,onAttr:function(){},onIgnoreAttr:function(){},safeAttrValue:function(e,t){return Or.test(t)?"":t}},Fr={indexOf:function(e,t){var o,r;if(Array.prototype.indexOf)return e.indexOf(t);for(o=0,r=e.length;o<r;o++)if(e[o]===t)return o;return-1},forEach:function(e,t,o){var r,n;if(Array.prototype.forEach)return e.forEach(t,o);for(r=0,n=e.length;r<n;r++)t.call(o,e[r],r,e)},trim:function(e){return re.trim?e.trim():e.replace(/(^\s*)|(\s*$)/g,"")},trimRight:function(e){return re.trimRight?e.trimRight():e.replace(/(\s*$)/g,"")}},Pr=function(e,t){function o(){if(!n){var o=Fr.trim(e.slice(a,s)),r=o.indexOf(":");if(-1!==r){var i=Fr.trim(o.slice(0,r)),c=Fr.trim(o.slice(r+1));if(i){var d=t(a,l.length,i,c,o);d&&(l+=d+"; ")}}}a=s+1}e=Fr.trimRight(e),";"!==e[e.length-1]&&(e+=";");for(var r=e.length,n=!1,a=0,s=0,l="";s<r;s++){var d=e[s];if("/"===d&&"*"===e[s+1]){var c=e.indexOf("*/",s+2);if(-1===c)break;s=c+1,a=s+1,n=!1}else if("("===d)n=!0;else if(")"===d)n=!1;else if(!(";"===d))"\n"===d&&o();else if(n);else o()}return Fr.trim(l)};I.prototype.process=function(e){if(e=e||"",e=e.toString(),!e)return"";var t=this,o=t.options,r=o.whiteList,n=o.onAttr,i=o.onIgnoreAttr,a=o.safeAttrValue,s=Pr(e,function(e,t,o,s,l){var c=r[o],d=!1;if(!0===c?d=c:"function"==typeof c?d=c(s):c instanceof RegExp&&(d=c.test(s)),!0!==d&&(d=!1),s=a(o,s),!!s){var p={position:t,sourcePosition:e,source:l,isWhite:d};if(d){var g=n(o,s,p);return v(g)?o+":"+s:g}var g=i(o,s,p);if(!v(g))return g}});return s};var Er=I,Lr=o(function(e,t){function o(e,t){var o=new Er(t);return o.process(e)}for(var r in t=e.exports=o,t.FilterCSS=Er,Cr)t[r]=Cr[r];"undefined"!=typeof window&&(window.filterCSS=e.exports)}),Vr=Lr.FilterCSS,Br={indexOf:function(e,t){var o,r;if(Array.prototype.indexOf)return e.indexOf(t);for(o=0,r=e.length;o<r;o++)if(e[o]===t)return o;return-1},forEach:function(e,t,o){var r,n;if(Array.prototype.forEach)return e.forEach(t,o);for(r=0,n=e.length;r<n;r++)t.call(o,e[r],r,e)},trim:function(e){return re.trim?e.trim():e.replace(/(^\s*)|(\s*$)/g,"")},spaceIndex:function(e){var t=/\s|\n|\t/,o=t.exec(e);return o?o.index:-1}},Ur=Lr.FilterCSS,Dr=Lr.getDefaultWhiteList,Wr=new Ur,Mr=/</g,Nr=/>/g,Rr=/"/g,Hr=/&quot;/g,Xr=/&#([a-zA-Z0-9]*);?/gim,qr=/&colon;?/gim,$r=/&newline;?/gim,Qr=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,Gr=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,Yr=/u\s*r\s*l\s*\(.*/gi,Zr=/<!--[\s\S]*?-->/g,Kr=O(),Jr={whiteList:Kr,getDefaultWhiteList:O,onTag:function(){},onIgnoreTag:function(){},onTagAttr:function(){},onIgnoreTagAttr:function(){},safeAttrValue:function(e,t,o,r){if(o=V(o),"href"===t||"src"===t){if(o=Br.trim(o),"#"===o)return"#";if("http://"!==o.substr(0,7)&&"https://"!==o.substr(0,8)&&"mailto:"!==o.substr(0,7)&&"tel:"!==o.substr(0,4)&&"#"!==o[0]&&"/"!==o[0])return""}else if("background"===t){if(Qr.lastIndex=0,Qr.test(o))return"";}else if("style"===t){if(Gr.lastIndex=0,Gr.test(o))return"";if(Yr.lastIndex=0,Yr.test(o)&&(Qr.lastIndex=0,Qr.test(o)))return"";!1!==r&&(r=r||Wr,o=r.process(o))}return o=B(o),o},escapeHtml:z,escapeQuote:C,unescapeQuote:F,escapeHtmlEntities:P,escapeDangerHtml5Entities:E,clearNonPrintableCharacter:L,friendlyAttrValue:V,escapeAttrValue:B,onIgnoreTagStripAll:function(){return""},StripTagBody:function(e,t){function o(t){return!!r||-1!==Br.indexOf(e,t)}"function"!=typeof t&&(t=function(){});var r=!Array.isArray(e),n=[],i=!1;return{onIgnoreTag:function(e,r,a){if(o(e)){if(a.isClosing){var s=a.position+10;return n.push([!1===i?a.position:i,s]),i=!1,"[/removed]"}return i||(i=a.position),"[removed]"}return t(e,r,a)},remove:function(e){var t="",o=0;return Br.forEach(n,function(r){t+=e.slice(o,r[0]),o=r[1]}),t+=e.slice(o),t}}},stripCommentTag:function(e){return e.replace(Zr,"")},stripBlankChar:function(e){var t=e.split("");return t=t.filter(function(e){var t=e.charCodeAt(0);return 127!==t&&(!(31>=t)||10===t||13===t)}),t.join("")},cssFilter:Wr,getDefaultCSSWhiteList:Dr},en=/[^a-zA-Z0-9_:\.\-]/gim,tn={parseTag:function(e,t,o){"user strict";var r="",n=0,i=!1,a=!1,s=0,l=e.length,d="",p="";for(s=0;s<l;s++){var g=e.charAt(s);if(!1===i){if("<"===g){i=s;continue}}else if(!1===a){if("<"===g){r+=o(e.slice(n,s)),i=s,n=s;continue}if(">"===g){r+=o(e.slice(n,i)),p=e.slice(i,s+1),d=U(p),r+=t(i,r.length,d,p,D(p)),n=s+1,i=!1;continue}if(("\""===g||"'"===g)&&"="===e.charAt(s-1)){a=g;continue}}else if(g===a){a=!1;continue}}return n<e.length&&(r+=o(e.substr(n))),r},parseAttr:function(e,t){"user strict";function o(e,o){if(e=Br.trim(e),e=e.replace(en,"").toLowerCase(),!(1>e.length)){var r=t(e,o||"");r&&n.push(r)}}for(var r=0,n=[],a=!1,s=e.length,l=0;l<s;l++){var d,p,g=e.charAt(l);if(!1===a&&"="===g){a=e.slice(r,l),r=l+1;continue}if(!1!==a&&l===r&&("\""===g||"'"===g)&&"="===e.charAt(l-1))if(p=e.indexOf(g,l+1),-1===p)break;else{d=Br.trim(e.slice(r+1,p)),o(a,d),a=!1,l=p,r=l+1;continue}if(/\s|\n|\t/.test(g))if(e=e.replace(/\s|\n|\t/g," "),!1===a){if(p=W(e,l),-1===p){d=Br.trim(e.slice(r,l)),o(d),a=!1,r=l+1;continue}else{l=p-1;continue}}else if(p=M(e,l-1),-1===p){d=Br.trim(e.slice(r,l)),d=R(d),o(a,d),a=!1,r=l+1;continue}else continue}return r<e.length&&(!1===a?o(e.slice(r)):o(a,R(Br.trim(e.slice(r))))),Br.trim(n.join(" "))}},on=Lr.FilterCSS,rn=tn.parseTag,nn=tn.parseAttr;$.prototype.process=function(e){if(e=e||"",e=e.toString(),!e)return"";var t=this,o=t.options,r=o.whiteList,n=o.onTag,i=o.onIgnoreTag,a=o.onTagAttr,s=o.onIgnoreTagAttr,l=o.safeAttrValue,c=o.escapeHtml,d=t.cssFilter;o.stripBlankChar&&(e=Jr.stripBlankChar(e)),o.allowCommentTag||(e=Jr.stripCommentTag(e));var p=!1;if(o.stripIgnoreTagBody){var p=Jr.StripTagBody(o.stripIgnoreTagBody,i);i=p.onIgnoreTag}var g=rn(e,function(e,t,o,p,g){var u={sourcePosition:e,position:t,isClosing:g,isWhite:r.hasOwnProperty(o)},f=n(o,p,u);if(!H(f))return f;if(u.isWhite){if(u.isClosing)return"</"+o+">";var b=X(p),h=r[o],y=nn(b.html,function(e,t){var r=-1!==Br.indexOf(h,e),n=a(o,e,t,r);if(!H(n))return n;if(r)return t=l(o,e,t,d),t?e+"=\""+t+"\"":e;var n=s(o,e,t,r);return H(n)?void 0:n}),p="<"+o;return y&&(p+=" "+y),b.closing&&(p+=" /"),p+=">",p}var f=i(o,p,u);return H(f)?c(p):f},c);return p&&(g=p.remove(g)),g};var an=$,sn=o(function(e,t){function o(e,t){var o=new an(t);return o.process(e)}for(var r in t=e.exports=o,t.filterXSS=o,t.FilterXSS=an,Jr)t[r]=Jr[r];for(var r in tn)t[r]=tn[r];"undefined"!=typeof window&&(window.filterXSS=e.exports),function(){return"undefined"!=typeof self&&"undefined"!=typeof DedicatedWorkerGlobalScope&&self instanceof DedicatedWorkerGlobalScope}()&&(self.filterXSS=e.exports)}),ln=sn.filterXSS,cn=sn.FilterXSS,dn=0/0,pn=/^\s+|\s+$/g,gn=/^[-+]0x[0-9a-f]+$/i,un=/^0b[01]+$/i,fn=/^0o[0-7]+$/i,bn=parseInt,hn=function(e){if("number"==typeof e)return e;if(Se(e))return dn;if(Ie(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Ie(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(pn,"");var o=un.test(e);return o||fn.test(e)?bn(e.slice(2),o?2:8):gn.test(e)?dn:+e},yn=1/0,mn=function(e){if(!e)return 0===e?e:0;if(e=hn(e),e===yn||e===-yn){var t=0>e?-1:1;return 1.7976931348623157e+308*t}return e===e?e:0},jn=function(e){var t=mn(e),o=t%1;return t===t?o?t-o:t:0},xn=function(e){return"number"==typeof e&&e==jn(e)},_n=pe.isFinite,wn=Math.min,An=function(e){var t=Math[e];return function(e,o){if(e=hn(e),o=null==o?0:wn(jn(o),292),o&&_n(e)){var r=(bt(e)+"e").split("e"),n=t(r[0]+"e"+(+r[1]+o));return r=(bt(n)+"e").split("e"),+(r[0]+"e"+(+r[1]-o))}return t(e)}}("round"),kn=An;return function(t){function o(){function o(o,r){var n=y();o=G(o);var i={method:"POST",url:t.url,data:o};return"upload file"===r&&(i.headers={"Content-Type":"multipart/form-data"}),"download file"===r&&(i.responseType="blob"),e(i).then(function(e){n.resolve(e.data.output)})["catch"](function(e){var t=jt(e,"response.data");e=t?t:"can not connection",n.reject(e)}),n}function s(e){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,n={clientId:i,token:t.token,func:e,input:r},a="";return jt(r,"mode")&&(a=r.mode),o(n,a)}t.url||(t.url="http://localhost:8080/api"),t.token||(t.token="*"),s("getFuncs").then(function(e){if("sys"===jt(e,"sys")&&w(e,"funcs")){var o=e.funcs;a={};for(var l=function(e){var t=o[e];Ot(a,t,function(e){return s(t,e)})},c=0;c<o.length;c++)l(c);n.resolve(a)}else{m(t.error)&&t.error("no funcs"),r()}})["catch"](function(e){m(t.error)&&t.error(e),r()})}function r(){setTimeout(function(){m(t.reconn)&&t.reconn(),o()},1e3)}var n=y(),a={},i=oe();return o(),n}});
//# sourceMappingURL=ht-client.umd.js.map
