/*!
 * w-comor-hapi-server v1.0.31
 * (c) 2018-2021 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("@hapi/hapi")):"function"==typeof define&&define.amd?define(["@hapi/hapi"],r):(t="undefined"!=typeof globalThis?globalThis:t||self)["w-comor-hapi-server"]=r(t["@hapi/hapi"])}(this,(function(t){"use strict";function r(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var e=r(t);function n(t,r,e,n,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void e(t)}u.done?r(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,a){var i=t.apply(r,e);function u(t){n(i,o,a,u,c,"next",t)}function c(t){n(i,o,a,u,c,"throw",t)}u(void 0)}))}}function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function u(t){var r={exports:{}};return t(r,r.exports),r.exports}var c=u((function(t){var r=function(t){var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function f(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{f({},"")}catch(t){f=function(t,r,e){return t[r]=e}}function s(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,a=Object.create(o.prototype),i=new k(n||[]);return a._invoke=function(t,r,e){var n=v;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw a;return F()}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var u=S(i,e);if(u){if(u===b)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===v)throw n=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=h;var c=l(t,r,e);if("normal"===c.type){if(n=e.done?y:p,c.arg===b)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n=y,e.method="throw",e.arg=c.arg)}}}(t,e,i),a}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var v="suspendedStart",p="suspendedYield",h="executing",y="completed",b={};function d(){}function g(){}function j(){}var _={};f(_,i,(function(){return this}));var w=Object.getPrototypeOf,m=w&&w(w(P([])));m&&m!==e&&n.call(m,i)&&(_=m);var O=j.prototype=d.prototype=Object.create(_);function x(t){["next","throw","return"].forEach((function(r){f(t,r,(function(t){return this._invoke(r,t)}))}))}function A(t,r){function e(o,i,u,c){var f=l(t[o],t,i);if("throw"!==f.type){var s=f.arg,v=s.value;return v&&"object"===a(v)&&n.call(v,"__await")?r.resolve(v.__await).then((function(t){e("next",t,u,c)}),(function(t){e("throw",t,u,c)})):r.resolve(v).then((function(t){s.value=t,u(s)}),(function(t){return e("throw",t,u,c)}))}c(f.arg)}var o;this._invoke=function(t,n){function a(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(a,a):a()}}function S(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,S(t,e),"throw"===e.method))return b;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return b}var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,b;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,b):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,b)}function E(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function L(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:r,done:!0}}return g.prototype=j,f(O,"constructor",j),f(j,"constructor",g),g.displayName=f(j,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,j):(t.__proto__=j,f(t,c,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},x(A.prototype),f(A.prototype,u,(function(){return this})),t.AsyncIterator=A,t.async=function(r,e,n,o,a){void 0===a&&(a=Promise);var i=new A(s(r,e,n,o),a);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(O),f(O,c,"Generator"),f(O,i,(function(){return this})),f(O,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=P,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return u.type="throw",u.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),f=n.call(i,"finallyLoc");if(c&&f){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,b):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),b},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),L(e),b}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;L(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),b}},t}(t.exports);try{regeneratorRuntime=r}catch(t){"object"===("undefined"==typeof globalThis?"undefined":a(globalThis))?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}})),f=c;var s=function(){this.__data__=[],this.size=0};var l=function(t,r){return t===r||t!=t&&r!=r};var v=function(t,r){for(var e=t.length;e--;)if(l(t[e][0],r))return e;return-1},p=Array.prototype.splice;var h=function(t){var r=this.__data__,e=v(r,t);return!(e<0)&&(e==r.length-1?r.pop():p.call(r,e,1),--this.size,!0)};var y=function(t){var r=this.__data__,e=v(r,t);return e<0?void 0:r[e][1]};var b=function(t){return v(this.__data__,t)>-1};var d=function(t,r){var e=this.__data__,n=v(e,t);return n<0?(++this.size,e.push([t,r])):e[n][1]=r,this};function g(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}g.prototype.clear=s,g.prototype.delete=h,g.prototype.get=y,g.prototype.has=b,g.prototype.set=d;var j=g;var _=function(){this.__data__=new j,this.size=0};var w=function(t){var r=this.__data__,e=r.delete(t);return this.size=r.size,e};var m=function(t){return this.__data__.get(t)};var O=function(t){return this.__data__.has(t)},x="object"==a(i)&&i&&i.Object===Object&&i,A="object"==("undefined"==typeof self?"undefined":a(self))&&self&&self.Object===Object&&self,S=x||A||Function("return this")(),E=S.Symbol,L=Object.prototype,k=L.hasOwnProperty,P=L.toString,F=E?E.toStringTag:void 0;var N=function(t){var r=k.call(t,F),e=t[F];try{t[F]=void 0;var n=!0}catch(t){}var o=P.call(t);return n&&(r?t[F]=e:delete t[F]),o},z=Object.prototype.toString;var I=function(t){return z.call(t)},T=E?E.toStringTag:void 0;var U=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":T&&T in Object(t)?N(t):I(t)};var M=function(t){var r=a(t);return null!=t&&("object"==r||"function"==r)};var B,$=function(t){if(!M(t))return!1;var r=U(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},C=S["__core-js_shared__"],D=(B=/[^.]+$/.exec(C&&C.keys&&C.keys.IE_PROTO||""))?"Symbol(src)_1."+B:"";var G=function(t){return!!D&&D in t},R=Function.prototype.toString;var V=function(t){if(null!=t){try{return R.call(t)}catch(t){}try{return t+""}catch(t){}}return""},W=/^\[object .+?Constructor\]$/,q=Function.prototype,H=Object.prototype,Y=q.toString,J=H.hasOwnProperty,K=RegExp("^"+Y.call(J).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Q=function(t){return!(!M(t)||G(t))&&($(t)?K:W).test(V(t))};var X=function(t,r){return null==t?void 0:t[r]};var Z=function(t,r){var e=X(t,r);return Q(e)?e:void 0},tt=Z(S,"Map"),rt=Z(Object,"create");var et=function(){this.__data__=rt?rt(null):{},this.size=0};var nt=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r},ot=Object.prototype.hasOwnProperty;var at=function(t){var r=this.__data__;if(rt){var e=r[t];return"__lodash_hash_undefined__"===e?void 0:e}return ot.call(r,t)?r[t]:void 0},it=Object.prototype.hasOwnProperty;var ut=function(t){var r=this.__data__;return rt?void 0!==r[t]:it.call(r,t)};var ct=function(t,r){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=rt&&void 0===r?"__lodash_hash_undefined__":r,this};function ft(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}ft.prototype.clear=et,ft.prototype.delete=nt,ft.prototype.get=at,ft.prototype.has=ut,ft.prototype.set=ct;var st=ft;var lt=function(){this.size=0,this.__data__={hash:new st,map:new(tt||j),string:new st}};var vt=function(t){var r=a(t);return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t};var pt=function(t,r){var e=t.__data__;return vt(r)?e["string"==typeof r?"string":"hash"]:e.map};var ht=function(t){var r=pt(this,t).delete(t);return this.size-=r?1:0,r};var yt=function(t){return pt(this,t).get(t)};var bt=function(t){return pt(this,t).has(t)};var dt=function(t,r){var e=pt(this,t),n=e.size;return e.set(t,r),this.size+=e.size==n?0:1,this};function gt(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}gt.prototype.clear=lt,gt.prototype.delete=ht,gt.prototype.get=yt,gt.prototype.has=bt,gt.prototype.set=dt;var jt=gt;var _t=function(t,r){var e=this.__data__;if(e instanceof j){var n=e.__data__;if(!tt||n.length<199)return n.push([t,r]),this.size=++e.size,this;e=this.__data__=new jt(n)}return e.set(t,r),this.size=e.size,this};function wt(t){var r=this.__data__=new j(t);this.size=r.size}wt.prototype.clear=_,wt.prototype.delete=w,wt.prototype.get=m,wt.prototype.has=O,wt.prototype.set=_t;var mt=wt;var Ot=function(t,r){for(var e=-1,n=null==t?0:t.length;++e<n&&!1!==r(t[e],e,t););return t},xt=function(){try{var t=Z(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();var At=function(t,r,e){"__proto__"==r&&xt?xt(t,r,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[r]=e},St=Object.prototype.hasOwnProperty;var Et=function(t,r,e){var n=t[r];St.call(t,r)&&l(n,e)&&(void 0!==e||r in t)||At(t,r,e)};var Lt=function(t,r,e,n){var o=!e;e||(e={});for(var a=-1,i=r.length;++a<i;){var u=r[a],c=n?n(e[u],t[u],u,e,t):void 0;void 0===c&&(c=t[u]),o?At(e,u,c):Et(e,u,c)}return e};var kt=function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n};var Pt=function(t){return null!=t&&"object"==a(t)};var Ft=function(t){return Pt(t)&&"[object Arguments]"==U(t)},Nt=Object.prototype,zt=Nt.hasOwnProperty,It=Nt.propertyIsEnumerable,Tt=Ft(function(){return arguments}())?Ft:function(t){return Pt(t)&&zt.call(t,"callee")&&!It.call(t,"callee")},Ut=Tt,Mt=Array.isArray;var Bt=function(){return!1},$t=u((function(t,r){var e=r&&!r.nodeType&&r,n=e&&t&&!t.nodeType&&t,o=n&&n.exports===e?S.Buffer:void 0,a=(o?o.isBuffer:void 0)||Bt;t.exports=a})),Ct=/^(?:0|[1-9]\d*)$/;var Dt=function(t,r){var e=a(t);return!!(r=null==r?9007199254740991:r)&&("number"==e||"symbol"!=e&&Ct.test(t))&&t>-1&&t%1==0&&t<r};var Gt=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},Rt={};Rt["[object Float32Array]"]=Rt["[object Float64Array]"]=Rt["[object Int8Array]"]=Rt["[object Int16Array]"]=Rt["[object Int32Array]"]=Rt["[object Uint8Array]"]=Rt["[object Uint8ClampedArray]"]=Rt["[object Uint16Array]"]=Rt["[object Uint32Array]"]=!0,Rt["[object Arguments]"]=Rt["[object Array]"]=Rt["[object ArrayBuffer]"]=Rt["[object Boolean]"]=Rt["[object DataView]"]=Rt["[object Date]"]=Rt["[object Error]"]=Rt["[object Function]"]=Rt["[object Map]"]=Rt["[object Number]"]=Rt["[object Object]"]=Rt["[object RegExp]"]=Rt["[object Set]"]=Rt["[object String]"]=Rt["[object WeakMap]"]=!1;var Vt=function(t){return Pt(t)&&Gt(t.length)&&!!Rt[U(t)]};var Wt=function(t){return function(r){return t(r)}},qt=u((function(t,r){var e=r&&!r.nodeType&&r,n=e&&t&&!t.nodeType&&t,o=n&&n.exports===e&&x.process,a=function(){try{var t=n&&n.require&&n.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=a})),Ht=qt&&qt.isTypedArray,Yt=Ht?Wt(Ht):Vt,Jt=Object.prototype.hasOwnProperty;var Kt=function(t,r){var e=Mt(t),n=!e&&Ut(t),o=!e&&!n&&$t(t),a=!e&&!n&&!o&&Yt(t),i=e||n||o||a,u=i?kt(t.length,String):[],c=u.length;for(var f in t)!r&&!Jt.call(t,f)||i&&("length"==f||o&&("offset"==f||"parent"==f)||a&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||Dt(f,c))||u.push(f);return u},Qt=Object.prototype;var Xt=function(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||Qt)};var Zt=function(t,r){return function(e){return t(r(e))}},tr=Zt(Object.keys,Object),rr=Object.prototype.hasOwnProperty;var er=function(t){if(!Xt(t))return tr(t);var r=[];for(var e in Object(t))rr.call(t,e)&&"constructor"!=e&&r.push(e);return r};var nr=function(t){return null!=t&&Gt(t.length)&&!$(t)};var or=function(t){return nr(t)?Kt(t):er(t)};var ar=function(t,r){return t&&Lt(r,or(r),t)};var ir=function(t){var r=[];if(null!=t)for(var e in Object(t))r.push(e);return r},ur=Object.prototype.hasOwnProperty;var cr=function(t){if(!M(t))return ir(t);var r=Xt(t),e=[];for(var n in t)("constructor"!=n||!r&&ur.call(t,n))&&e.push(n);return e};var fr=function(t){return nr(t)?Kt(t,!0):cr(t)};var sr=function(t,r){return t&&Lt(r,fr(r),t)},lr=u((function(t,r){var e=r&&!r.nodeType&&r,n=e&&t&&!t.nodeType&&t,o=n&&n.exports===e?S.Buffer:void 0,a=o?o.allocUnsafe:void 0;t.exports=function(t,r){if(r)return t.slice();var e=t.length,n=a?a(e):new t.constructor(e);return t.copy(n),n}}));var vr=function(t,r){var e=-1,n=t.length;for(r||(r=Array(n));++e<n;)r[e]=t[e];return r};var pr=function(t,r){for(var e=-1,n=null==t?0:t.length,o=0,a=[];++e<n;){var i=t[e];r(i,e,t)&&(a[o++]=i)}return a};var hr=function(){return[]},yr=Object.prototype.propertyIsEnumerable,br=Object.getOwnPropertySymbols,dr=br?function(t){return null==t?[]:(t=Object(t),pr(br(t),(function(r){return yr.call(t,r)})))}:hr;var gr=function(t,r){return Lt(t,dr(t),r)};var jr=function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t},_r=Zt(Object.getPrototypeOf,Object),wr=Object.getOwnPropertySymbols?function(t){for(var r=[];t;)jr(r,dr(t)),t=_r(t);return r}:hr;var mr=function(t,r){return Lt(t,wr(t),r)};var Or=function(t,r,e){var n=r(t);return Mt(t)?n:jr(n,e(t))};var xr=function(t){return Or(t,or,dr)};var Ar=function(t){return Or(t,fr,wr)},Sr=Z(S,"DataView"),Er=Z(S,"Promise"),Lr=Z(S,"Set"),kr=Z(S,"WeakMap"),Pr="[object Map]",Fr="[object Promise]",Nr="[object Set]",zr="[object WeakMap]",Ir="[object DataView]",Tr=V(Sr),Ur=V(tt),Mr=V(Er),Br=V(Lr),$r=V(kr),Cr=U;(Sr&&Cr(new Sr(new ArrayBuffer(1)))!=Ir||tt&&Cr(new tt)!=Pr||Er&&Cr(Er.resolve())!=Fr||Lr&&Cr(new Lr)!=Nr||kr&&Cr(new kr)!=zr)&&(Cr=function(t){var r=U(t),e="[object Object]"==r?t.constructor:void 0,n=e?V(e):"";if(n)switch(n){case Tr:return Ir;case Ur:return Pr;case Mr:return Fr;case Br:return Nr;case $r:return zr}return r});var Dr=Cr,Gr=Object.prototype.hasOwnProperty;var Rr=function(t){var r=t.length,e=new t.constructor(r);return r&&"string"==typeof t[0]&&Gr.call(t,"index")&&(e.index=t.index,e.input=t.input),e},Vr=S.Uint8Array;var Wr=function(t){var r=new t.constructor(t.byteLength);return new Vr(r).set(new Vr(t)),r};var qr=function(t,r){var e=r?Wr(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)},Hr=/\w*$/;var Yr=function(t){var r=new t.constructor(t.source,Hr.exec(t));return r.lastIndex=t.lastIndex,r},Jr=E?E.prototype:void 0,Kr=Jr?Jr.valueOf:void 0;var Qr=function(t){return Kr?Object(Kr.call(t)):{}};var Xr=function(t,r){var e=r?Wr(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)};var Zr=function(t,r,e){var n=t.constructor;switch(r){case"[object ArrayBuffer]":return Wr(t);case"[object Boolean]":case"[object Date]":return new n(+t);case"[object DataView]":return qr(t,e);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Xr(t,e);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(t);case"[object RegExp]":return Yr(t);case"[object Symbol]":return Qr(t)}},te=Object.create,re=function(){function t(){}return function(r){if(!M(r))return{};if(te)return te(r);t.prototype=r;var e=new t;return t.prototype=void 0,e}}();var ee=function(t){return"function"!=typeof t.constructor||Xt(t)?{}:re(_r(t))};var ne=function(t){return Pt(t)&&"[object Map]"==Dr(t)},oe=qt&&qt.isMap,ae=oe?Wt(oe):ne;var ie=function(t){return Pt(t)&&"[object Set]"==Dr(t)},ue=qt&&qt.isSet,ce=ue?Wt(ue):ie,fe="[object Arguments]",se="[object Function]",le="[object Object]",ve={};ve[fe]=ve["[object Array]"]=ve["[object ArrayBuffer]"]=ve["[object DataView]"]=ve["[object Boolean]"]=ve["[object Date]"]=ve["[object Float32Array]"]=ve["[object Float64Array]"]=ve["[object Int8Array]"]=ve["[object Int16Array]"]=ve["[object Int32Array]"]=ve["[object Map]"]=ve["[object Number]"]=ve[le]=ve["[object RegExp]"]=ve["[object Set]"]=ve["[object String]"]=ve["[object Symbol]"]=ve["[object Uint8Array]"]=ve["[object Uint8ClampedArray]"]=ve["[object Uint16Array]"]=ve["[object Uint32Array]"]=!0,ve["[object Error]"]=ve[se]=ve["[object WeakMap]"]=!1;var pe=function t(r,e,n,o,a,i){var u,c=1&e,f=2&e,s=4&e;if(n&&(u=a?n(r,o,a,i):n(r)),void 0!==u)return u;if(!M(r))return r;var l=Mt(r);if(l){if(u=Rr(r),!c)return vr(r,u)}else{var v=Dr(r),p=v==se||"[object GeneratorFunction]"==v;if($t(r))return lr(r,c);if(v==le||v==fe||p&&!a){if(u=f||p?{}:ee(r),!c)return f?mr(r,sr(u,r)):gr(r,ar(u,r))}else{if(!ve[v])return a?r:{};u=Zr(r,v,c)}}i||(i=new mt);var h=i.get(r);if(h)return h;i.set(r,u),ce(r)?r.forEach((function(o){u.add(t(o,e,n,o,r,i))})):ae(r)&&r.forEach((function(o,a){u.set(a,t(o,e,n,a,r,i))}));var y=l?void 0:(s?f?Ar:xr:f?fr:or)(r);return Ot(y||r,(function(o,a){y&&(o=r[a=o]),Et(u,a,t(o,e,n,a,r,i))})),u};var he=function(t){return pe(t,5)};var ye=function(t){return"symbol"==a(t)||Pt(t)&&"[object Symbol]"==U(t)},be=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,de=/^\w*$/;var ge=function(t,r){if(Mt(t))return!1;var e=a(t);return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!ye(t))||(de.test(t)||!be.test(t)||null!=r&&t in Object(r))};function je(t,r){if("function"!=typeof t||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var e=function e(){var n=arguments,o=r?r.apply(this,n):n[0],a=e.cache;if(a.has(o))return a.get(o);var i=t.apply(this,n);return e.cache=a.set(o,i)||a,i};return e.cache=new(je.Cache||jt),e}je.Cache=jt;var _e=je;var we=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,me=/\\(\\)?/g,Oe=function(t){var r=_e(t,(function(t){return 500===e.size&&e.clear(),t})),e=r.cache;return r}((function(t){var r=[];return 46===t.charCodeAt(0)&&r.push(""),t.replace(we,(function(t,e,n,o){r.push(n?o.replace(me,"$1"):e||t)})),r}));var xe=function(t,r){for(var e=-1,n=null==t?0:t.length,o=Array(n);++e<n;)o[e]=r(t[e],e,t);return o},Ae=E?E.prototype:void 0,Se=Ae?Ae.toString:void 0;var Ee=function t(r){if("string"==typeof r)return r;if(Mt(r))return xe(r,t)+"";if(ye(r))return Se?Se.call(r):"";var e=r+"";return"0"==e&&1/r==-Infinity?"-0":e};var Le=function(t){return null==t?"":Ee(t)};var ke=function(t,r){return Mt(t)?t:ge(t,r)?[t]:Oe(Le(t))};var Pe=function(t){if("string"==typeof t||ye(t))return t;var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r};var Fe=function(t,r){for(var e=0,n=(r=ke(r,t)).length;null!=t&&e<n;)t=t[Pe(r[e++])];return e&&e==n?t:void 0};var Ne=function(t,r,e){var n=null==t?void 0:Fe(t,r);return void 0===n?e:n};var ze=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this};var Ie=function(t){return this.__data__.has(t)};function Te(t){var r=-1,e=null==t?0:t.length;for(this.__data__=new jt;++r<e;)this.add(t[r])}Te.prototype.add=Te.prototype.push=ze,Te.prototype.has=Ie;var Ue=Te;var Me=function(t,r){for(var e=-1,n=null==t?0:t.length;++e<n;)if(r(t[e],e,t))return!0;return!1};var Be=function(t,r){return t.has(r)};var $e=function(t,r,e,n,o,a){var i=1&e,u=t.length,c=r.length;if(u!=c&&!(i&&c>u))return!1;var f=a.get(t),s=a.get(r);if(f&&s)return f==r&&s==t;var l=-1,v=!0,p=2&e?new Ue:void 0;for(a.set(t,r),a.set(r,t);++l<u;){var h=t[l],y=r[l];if(n)var b=i?n(y,h,l,r,t,a):n(h,y,l,t,r,a);if(void 0!==b){if(b)continue;v=!1;break}if(p){if(!Me(r,(function(t,r){if(!Be(p,r)&&(h===t||o(h,t,e,n,a)))return p.push(r)}))){v=!1;break}}else if(h!==y&&!o(h,y,e,n,a)){v=!1;break}}return a.delete(t),a.delete(r),v};var Ce=function(t){var r=-1,e=Array(t.size);return t.forEach((function(t,n){e[++r]=[n,t]})),e};var De=function(t){var r=-1,e=Array(t.size);return t.forEach((function(t){e[++r]=t})),e},Ge=E?E.prototype:void 0,Re=Ge?Ge.valueOf:void 0;var Ve=function(t,r,e,n,o,a,i){switch(e){case"[object DataView]":if(t.byteLength!=r.byteLength||t.byteOffset!=r.byteOffset)return!1;t=t.buffer,r=r.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=r.byteLength||!a(new Vr(t),new Vr(r)));case"[object Boolean]":case"[object Date]":case"[object Number]":return l(+t,+r);case"[object Error]":return t.name==r.name&&t.message==r.message;case"[object RegExp]":case"[object String]":return t==r+"";case"[object Map]":var u=Ce;case"[object Set]":var c=1&n;if(u||(u=De),t.size!=r.size&&!c)return!1;var f=i.get(t);if(f)return f==r;n|=2,i.set(t,r);var s=$e(u(t),u(r),n,o,a,i);return i.delete(t),s;case"[object Symbol]":if(Re)return Re.call(t)==Re.call(r)}return!1},We=Object.prototype.hasOwnProperty;var qe=function(t,r,e,n,o,a){var i=1&e,u=xr(t),c=u.length;if(c!=xr(r).length&&!i)return!1;for(var f=c;f--;){var s=u[f];if(!(i?s in r:We.call(r,s)))return!1}var l=a.get(t),v=a.get(r);if(l&&v)return l==r&&v==t;var p=!0;a.set(t,r),a.set(r,t);for(var h=i;++f<c;){var y=t[s=u[f]],b=r[s];if(n)var d=i?n(b,y,s,r,t,a):n(y,b,s,t,r,a);if(!(void 0===d?y===b||o(y,b,e,n,a):d)){p=!1;break}h||(h="constructor"==s)}if(p&&!h){var g=t.constructor,j=r.constructor;g==j||!("constructor"in t)||!("constructor"in r)||"function"==typeof g&&g instanceof g&&"function"==typeof j&&j instanceof j||(p=!1)}return a.delete(t),a.delete(r),p},He="[object Arguments]",Ye="[object Array]",Je="[object Object]",Ke=Object.prototype.hasOwnProperty;var Qe=function(t,r,e,n,o,a){var i=Mt(t),u=Mt(r),c=i?Ye:Dr(t),f=u?Ye:Dr(r),s=(c=c==He?Je:c)==Je,l=(f=f==He?Je:f)==Je,v=c==f;if(v&&$t(t)){if(!$t(r))return!1;i=!0,s=!1}if(v&&!s)return a||(a=new mt),i||Yt(t)?$e(t,r,e,n,o,a):Ve(t,r,c,e,n,o,a);if(!(1&e)){var p=s&&Ke.call(t,"__wrapped__"),h=l&&Ke.call(r,"__wrapped__");if(p||h){var y=p?t.value():t,b=h?r.value():r;return a||(a=new mt),o(y,b,e,n,a)}}return!!v&&(a||(a=new mt),qe(t,r,e,n,o,a))};var Xe=function t(r,e,n,o,a){return r===e||(null==r||null==e||!Pt(r)&&!Pt(e)?r!=r&&e!=e:Qe(r,e,n,o,t,a))};var Ze=function(t,r,e,n){var o=e.length,a=o,i=!n;if(null==t)return!a;for(t=Object(t);o--;){var u=e[o];if(i&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++o<a;){var c=(u=e[o])[0],f=t[c],s=u[1];if(i&&u[2]){if(void 0===f&&!(c in t))return!1}else{var l=new mt;if(n)var v=n(f,s,c,t,r,l);if(!(void 0===v?Xe(s,f,3,n,l):v))return!1}}return!0};var tn=function(t){return t==t&&!M(t)};var rn=function(t){for(var r=or(t),e=r.length;e--;){var n=r[e],o=t[n];r[e]=[n,o,tn(o)]}return r};var en=function(t,r){return function(e){return null!=e&&(e[t]===r&&(void 0!==r||t in Object(e)))}};var nn=function(t){var r=rn(t);return 1==r.length&&r[0][2]?en(r[0][0],r[0][1]):function(e){return e===t||Ze(e,t,r)}};var on=function(t,r){return null!=t&&r in Object(t)};var an=function(t,r,e){for(var n=-1,o=(r=ke(r,t)).length,a=!1;++n<o;){var i=Pe(r[n]);if(!(a=null!=t&&e(t,i)))break;t=t[i]}return a||++n!=o?a:!!(o=null==t?0:t.length)&&Gt(o)&&Dt(i,o)&&(Mt(t)||Ut(t))};var un=function(t,r){return null!=t&&an(t,r,on)};var cn=function(t,r){return ge(t)&&tn(r)?en(Pe(t),r):function(e){var n=Ne(e,t);return void 0===n&&n===r?un(e,t):Xe(r,n,3)}};var fn=function(t){return t};var sn=function(t){return function(r){return null==r?void 0:r[t]}};var ln=function(t){return function(r){return Fe(r,t)}};var vn=function(t){return ge(t)?sn(Pe(t)):ln(t)};var pn=function(t){return"function"==typeof t?t:null==t?fn:"object"==a(t)?Mt(t)?cn(t[0],t[1]):nn(t):vn(t)};var hn=function(t,r,e,n){for(var o=t.length,a=e+(n?1:-1);n?a--:++a<o;)if(r(t[a],a,t))return a;return-1};var yn=function(t){return t!=t};var bn=function(t,r,e){for(var n=e-1,o=t.length;++n<o;)if(t[n]===r)return n;return-1};var dn=function(t,r,e){return r==r?bn(t,r,e):hn(t,yn,e)};var gn=function(t,r){return!!(null==t?0:t.length)&&dn(t,r,0)>-1};var jn=function(t,r,e){for(var n=-1,o=null==t?0:t.length;++n<o;)if(e(r,t[n]))return!0;return!1};var _n=function(){},wn=Lr&&1/De(new Lr([,-0]))[1]==1/0?function(t){return new Lr(t)}:_n;var mn=function(t,r,e){var n=-1,o=gn,a=t.length,i=!0,u=[],c=u;if(e)i=!1,o=jn;else if(a>=200){var f=r?null:wn(t);if(f)return De(f);i=!1,o=Be,c=new Ue}else c=r?[]:u;t:for(;++n<a;){var s=t[n],l=r?r(s):s;if(s=e||0!==s?s:0,i&&l==l){for(var v=c.length;v--;)if(c[v]===l)continue t;r&&c.push(l),u.push(s)}else o(c,l,e)||(c!==u&&c.push(l),u.push(s))}return u};var On=function(t,r){return t&&t.length?mn(t,pn(r)):[]};var xn=function(t,r){return Xe(t,r)};var An=function(t){return function(r,e,n){for(var o=-1,a=Object(r),i=n(r),u=i.length;u--;){var c=i[t?u:++o];if(!1===e(a[c],c,a))break}return r}}();var Sn=function(t,r){return function(e,n){if(null==e)return e;if(!nr(e))return t(e,n);for(var o=e.length,a=r?o:-1,i=Object(e);(r?a--:++a<o)&&!1!==n(i[a],a,i););return e}}((function(t,r){return t&&An(t,r,or)}));var En=function(t){return"function"==typeof t?t:fn};var Ln=function(t,r){return(Mt(t)?Ot:Sn)(t,En(r))};function kn(){var t,r,e=new Promise((function(){t=arguments[0],r=arguments[1]}));return e.resolve=t,e.reject=r,e}var Pn=/\s/;var Fn=function(t){for(var r=t.length;r--&&Pn.test(t.charAt(r)););return r},Nn=/^\s+/;var zn=function(t){return t?t.slice(0,Fn(t)+1).replace(Nn,""):t},In=/^[-+]0x[0-9a-f]+$/i,Tn=/^0b[01]+$/i,Un=/^0o[0-7]+$/i,Mn=parseInt;var Bn=function(t){if("number"==typeof t)return t;if(ye(t))return NaN;if(M(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=M(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=zn(t);var e=Tn.test(t);return e||Un.test(t)?Mn(t.slice(2),e?2:8):In.test(t)?NaN:+t},$n=1/0;var Cn=function(t){return t?(t=Bn(t))===$n||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0};var Dn=function(t){var r=Cn(t),e=r%1;return r==r?e?r-e:r:0};var Gn=function(t){return"number"==typeof t&&t==Dn(t)};function Rn(t){return"[object String]"===Object.prototype.toString.call(t)}function Vn(t){return!(!Rn(t)||""===t)}function Wn(t){var r=!1;return Vn(t)?r=!isNaN(Number(t)):function(t){return"[object Number]"===Object.prototype.toString.call(t)}(t)&&(r=!0),r}function qn(t){return Wn(t)?Cn(t):0}var Hn=S.isFinite,Yn=Math.min;var Jn=function(t){var r=Math[t];return function(t,e){if(t=Bn(t),(e=null==e?0:Yn(Dn(e),292))&&Hn(t)){var n=(Le(t)+"e").split("e"),o=r(n[0]+"e"+(+n[1]+e));return+((n=(Le(o)+"e").split("e"))[0]+"e"+(+n[1]-e))}return r(t)}}("round");function Kn(t){if(!Wn(t))return 0;t=qn(t);var r=Jn(t);return"0"===String(r)?0:r}function Qn(t){return!!function(t){return!!Wn(t)&&(t=qn(t),Gn(t))}(t)&&Kn(t)>0}var Xn="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),Zn=Xn.length;function to(t){return"[object Object]"===Object.prototype.toString.call(t)}function ro(t){var r=Object.prototype.toString.call(t);return"[object Function]"===r||"[object AsyncFunction]"===r}function eo(t){return"[object Array]"===Object.prototype.toString.call(t)}function no(t){return!!function(t){return"[object Undefined]"===Object.prototype.toString.call(t)}(t)||(!!function(t){return"[object Null]"===Object.prototype.toString.call(t)}(t)||(!!function(t){if(to(t)){for(var r in t)return!1;return!0}return!1}(t)||(!!function(t){return!(!Rn(t)||""!==t)}(t)||!!function(t){return!!eo(t)&&0===t.length}(t))))}function oo(t,r){function e(t){return eo(t)?t:[t]}if(no(t))return!1;if(0===(t=e(t)).length)return!1;if(no(t))return!1;if(0===(r=e(r)).length)return!1;for(var n=0;n<t.length;n++)for(var o=0;o<r.length;o++)if(xn(t[n],r[o]))return!0;return!1}return function(t){var r=[],n=[];(t=he(t)).port||(t.port=8080),t.apiName||(t.apiName="api"),t.routes||(t.routes=[]);var a,i,u=[];function c(r){var e=kn();return ro(t.authenticate)?t.authenticate(r).then((function(t){e.resolve(t)})):e.resolve(!0),e}function s(){return(s=o(f.mark((function r(e){var n,o,a,i;return f.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=Ne(e,"token",""),r.next=3,c(n);case 3:if(!r.sent){r.next=25;break}if(o=Ne(e,"func",""),a=Ne(e,"input"),"getFuncs"!==o){r.next=15;break}if(!ro(t.filterFuncs)){r.next=12;break}return r.next=11,t.filterFuncs(n,u);case 11:u=r.sent;case 12:e.output={sys:"sys",funcs:u},r.next=23;break;case 15:if(!oo(u,o)){r.next=22;break}return r.next=18,t.funcs[o](a);case 18:i=r.sent,e.output=i,r.next=23;break;case 22:e.output={err:"can not find: ".concat(o)};case 23:r.next=26;break;case 25:e.output={err:"can not authenticate token: ".concat(n)};case 26:return delete e.input,r.abrupt("return",JSON.stringify(e));case 28:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function l(r){if(ro(t.onClientChange)){var e=On(r,"clientId");xn(n,e)||(n=e,t.onClientChange(n,t))}}i="funcs",to(a=t)&&(Vn(i)||Wn(i))&&i in a&&(u=or(t.funcs));var v={path:"/"+t.apiName,method:"POST",options:{payload:{maxBytes:1048576e3,timeout:18e4,multipart:!0},timeout:{socket:3e5}},handler:function(t,e){var n=kn(),o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:32,r=[];t=Qn(t)?Kn(t):32;for(var e=0;e<t;e++)r[e]=Xn[0|Math.random()*Zn];return r.join("")}(),a=Ne(t.payload,"clientId"),i={headers:t.headers,info:t.info};return r.push({clientId:a,connId:o,data:i}),l(r),function(t){return s.apply(this,arguments)}(t.payload).then((function(t){n.resolve(t)})).catch((function(t){n.reject(t)})).finally((function(){l(r=r.filter((function(t){return t.connId!==o})))})),n}};function p(){return(p=o(f.mark((function r(){var n;return f.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(n=e.default.server({port:t.port,routes:{cors:!0}})).route(v),Ln(t.routes,(function(t){n.route(t)})),r.next=5,n.start();case 5:console.log("Server running at: ".concat(n.info.uri));case 6:case"end":return r.stop()}}),r)})))).apply(this,arguments)}t.serverHapi?t.serverHapi.route(v):function(){p.apply(this,arguments)}()}}));
//# sourceMappingURL=w-comor-hapi-server.umd.js.map
