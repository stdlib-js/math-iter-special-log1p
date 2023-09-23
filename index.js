// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterLog1p=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var l=Math.abs,f=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,y=/e\+(\d)$/,b=/e-(\d)$/,v=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,w=/\.0*e/,h=/(\..*[^0])0*e/;function m(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":l(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,h,"$1e"),n=s.call(n,w,"e"),n=s.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,y,"e+0$1"),n=s.call(n,b,"e-0$1"),r.alternate&&(n=s.call(n,v,"$1."),n=s.call(n,g,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===p.call(r.specifier)?p.call(n):f.call(n)}function j(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function _(r,t,e){var n=t-r.length;return n<0?r:r=e?r+j(n):j(n)+r}var S=String.fromCharCode,A=isNaN,E=Array.isArray;function T(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function O(r){var t,e,n,i,a,l,f,p,s;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",f=1,p=0;p<r.length;p++)if(c(n=r[p]))l+=n;else{if(t=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(i=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,A(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!A(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(a)?String(n.arg):S(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),l+=n.arg||"",f+=1}return l}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function P(r){var t,e,n,o;for(e=[],o=0,n=F.exec(r);n;)(t=r.slice(o,F.lastIndex-n[0].length)).length&&e.push(t),e.push(x(n)),o=F.lastIndex,n=F.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function V(r){return"string"==typeof r}function k(r){var t,e,n;if(!V(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=P(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return O.apply(null,e)}var U,B=Object.prototype,N=B.toString,I=B.__defineGetter__,C=B.__defineSetter__,L=B.__lookupGetter__,G=B.__lookupSetter__;U=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===N.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(L.call(r,t)||G.call(r,t)?(n=r.__proto__,r.__proto__=B,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&I&&I.call(r,t,e.get),a&&C&&C.call(r,t,e.set),r};var R=U;function $(r,t,e){R(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var M=/./;function X(r){return"boolean"==typeof r}function Z(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var W=Z();function Y(){return W&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var q=Object.prototype.hasOwnProperty;function D(r,t){return null!=r&&q.call(r,t)}var H="function"==typeof Symbol?Symbol:void 0,J="function"==typeof H?H.toStringTag:"";var K=Y()?function(r){var t,e,n;if(null==r)return z.call(r);e=r[J],t=D(r,J);try{r[J]=void 0}catch(t){return z.call(r)}return n=z.call(r),t?r[J]=e:delete r[J],n}:function(r){return z.call(r)},Q=Boolean,rr=Boolean.prototype.toString;var tr=Y();function er(r){return"object"==typeof r&&(r instanceof Q||(tr?function(r){try{return rr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===K(r)))}function nr(r){return X(r)||er(r)}function or(){return new Function("return this;")()}$(nr,"isPrimitive",X),$(nr,"isObject",er);var ir="object"==typeof self?self:null,ar="object"==typeof window?window:null,ur="object"==typeof global?global:null,cr="object"==typeof globalThis?globalThis:null;var lr=function(r){if(arguments.length){if(!X(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return or()}if(cr)return cr;if(ir)return ir;if(ar)return ar;if(ur)return ur;throw new Error("unexpected error. Unable to resolve global object.")}(),fr=lr.document&&lr.document.childNodes,pr=Int8Array;function sr(){return/^\s*function\s*([^(]*)/i}var yr=/^\s*function\s*([^(]*)/i;$(sr,"REGEXP",yr);var br=Z();var vr=Object.prototype.toString;var gr="function"==typeof H?H.toStringTag:"";var dr,wr=br&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return vr.call(r);e=r[gr],t=D(r,gr);try{r[gr]=void 0}catch(t){return vr.call(r)}return n=vr.call(r),t?r[gr]=e:delete r[gr],n}:function(r){return vr.call(r)};dr=Array.isArray?Array.isArray:function(r){return"[object Array]"===wr(r)};var hr=dr;function mr(r){return null!==r&&"object"==typeof r}var jr=function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!hr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(mr);function _r(r){var t,e,n,o;if(("Object"===(e=K(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=yr.exec(n.toString()))return t[1]}return mr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}$(mr,"isObjectLikeArray",jr);var Sr="function"==typeof M||"object"==typeof pr||"function"==typeof fr?function(r){return _r(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?_r(r).toLowerCase():t};function Ar(r){return"function"===Sr(r)}var Er=/./,Tr="function"==typeof Object.defineProperty?Object.defineProperty:null;var Or,Fr=Object.defineProperty,xr=Object.prototype,Pr=xr.toString,Vr=xr.__defineGetter__,kr=xr.__defineSetter__,Ur=xr.__lookupGetter__,Br=xr.__lookupSetter__;Or=function(){try{return Tr({},"x",{}),!0}catch(r){return!1}}()?Fr:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===Pr.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===Pr.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(Ur.call(r,t)||Br.call(r,t)?(n=r.__proto__,r.__proto__=xr,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Vr&&Vr.call(r,t,e.get),a&&kr&&kr.call(r,t,e.set),r};var Nr=Or;function Ir(r,t,e){Nr(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Cr(r){return"boolean"==typeof r}var Lr=Z();function Gr(){return Lr&&"symbol"==typeof Symbol.toStringTag}var Rr=Object.prototype.toString;var $r="function"==typeof H?H.toStringTag:"";var Mr=Gr()?function(r){var t,e,n;if(null==r)return Rr.call(r);e=r[$r],t=D(r,$r);try{r[$r]=void 0}catch(t){return Rr.call(r)}return n=Rr.call(r),t?r[$r]=e:delete r[$r],n}:function(r){return Rr.call(r)},Xr=Boolean.prototype.toString;var Zr=Gr();function Wr(r){return"object"==typeof r&&(r instanceof Q||(Zr?function(r){try{return Xr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Mr(r)))}function Yr(r){return Cr(r)||Wr(r)}function zr(){return new Function("return this;")()}Ir(Yr,"isPrimitive",Cr),Ir(Yr,"isObject",Wr);var qr="object"==typeof self?self:null,Dr="object"==typeof window?window:null,Hr="object"==typeof global?global:null,Jr="object"==typeof globalThis?globalThis:null;var Kr=function(r){if(arguments.length){if(!Cr(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return zr()}if(Jr)return Jr;if(qr)return qr;if(Dr)return Dr;if(Hr)return Hr;throw new Error("unexpected error. Unable to resolve global object.")}(),Qr=Kr.document&&Kr.document.childNodes,rt=Int8Array;function tt(){return/^\s*function\s*([^(]*)/i}var et=/^\s*function\s*([^(]*)/i;function nt(r){return null!==r&&"object"==typeof r}Ir(tt,"REGEXP",et);var ot=function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!hr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(nt);function it(r){var t,e,n,o;if(("Object"===(e=Mr(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=et.exec(n.toString()))return t[1]}return nt(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}Ir(nt,"isObjectLikeArray",ot);var at="function"==typeof Er||"object"==typeof rt||"function"==typeof Qr?function(r){return it(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?it(r).toLowerCase():t};function ut(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&function(r){return"function"===at(r)}(r.next)}function ct(r){return"number"==typeof r}var lt=Number,ft=lt.prototype.toString;var pt=Y();function st(r){return"object"==typeof r&&(r instanceof lt||(pt?function(r){try{return ft.call(r),!0}catch(r){return!1}}(r):"[object Number]"===K(r)))}function yt(r){return ct(r)||st(r)}$(yt,"isPrimitive",ct),$(yt,"isObject",st);var bt="function"==typeof H&&"symbol"==typeof H("foo")&&D(H,"iterator")&&"symbol"==typeof H.iterator?Symbol.iterator:null;var vt=/./,gt="function"==typeof Object.defineProperty?Object.defineProperty:null;var dt,wt=Object.defineProperty,ht=Object.prototype,mt=ht.toString,jt=ht.__defineGetter__,_t=ht.__defineSetter__,St=ht.__lookupGetter__,At=ht.__lookupSetter__;dt=function(){try{return gt({},"x",{}),!0}catch(r){return!1}}()?wt:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===mt.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===mt.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(St.call(r,t)||At.call(r,t)?(n=r.__proto__,r.__proto__=ht,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&jt&&jt.call(r,t,e.get),a&&_t&&_t.call(r,t,e.set),r};var Et=dt;function Tt(r,t,e){Et(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Ot(r){return"boolean"==typeof r}var Ft=Z();function xt(){return Ft&&"symbol"==typeof Symbol.toStringTag}var Pt=Object.prototype.toString;var Vt="function"==typeof H?H.toStringTag:"";var kt=xt()?function(r){var t,e,n;if(null==r)return Pt.call(r);e=r[Vt],t=D(r,Vt);try{r[Vt]=void 0}catch(t){return Pt.call(r)}return n=Pt.call(r),t?r[Vt]=e:delete r[Vt],n}:function(r){return Pt.call(r)},Ut=Boolean.prototype.toString;var Bt=xt();function Nt(r){return"object"==typeof r&&(r instanceof Q||(Bt?function(r){try{return Ut.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===kt(r)))}function It(r){return Ot(r)||Nt(r)}function Ct(){return new Function("return this;")()}Tt(It,"isPrimitive",Ot),Tt(It,"isObject",Nt);var Lt="object"==typeof self?self:null,Gt="object"==typeof window?window:null,Rt="object"==typeof global?global:null,$t="object"==typeof globalThis?globalThis:null;var Mt=function(r){if(arguments.length){if(!Ot(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Ct()}if($t)return $t;if(Lt)return Lt;if(Gt)return Gt;if(Rt)return Rt;throw new Error("unexpected error. Unable to resolve global object.")}(),Xt=Mt.document&&Mt.document.childNodes,Zt=Int8Array;function Wt(){return/^\s*function\s*([^(]*)/i}var Yt=/^\s*function\s*([^(]*)/i;function zt(r){return null!==r&&"object"==typeof r}Tt(Wt,"REGEXP",Yt);var qt=function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!hr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(zt);function Dt(r){var t,e,n,o;if(("Object"===(e=kt(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Yt.exec(n.toString()))return t[1]}return zt(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}Tt(zt,"isObjectLikeArray",qt);var Ht="function"==typeof vt||"object"==typeof Zt||"function"==typeof Xt?function(r){return Dt(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Dt(r).toLowerCase():t};function Jt(r){return"function"===Ht(r)}var Kt=Object,Qt=/./,re="function"==typeof Object.defineProperty?Object.defineProperty:null;var te,ee=Object.defineProperty,ne=Object.prototype,oe=ne.toString,ie=ne.__defineGetter__,ae=ne.__defineSetter__,ue=ne.__lookupGetter__,ce=ne.__lookupSetter__;te=function(){try{return re({},"x",{}),!0}catch(r){return!1}}()?ee:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===oe.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===oe.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(ue.call(r,t)||ce.call(r,t)?(n=r.__proto__,r.__proto__=ne,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&ie&&ie.call(r,t,e.get),a&&ae&&ae.call(r,t,e.set),r};var le=te;function fe(r,t,e){le(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function pe(r){return"boolean"==typeof r}var se=Z();function ye(){return se&&"symbol"==typeof Symbol.toStringTag}var be=Object.prototype.toString;var ve="function"==typeof H?H.toStringTag:"";var ge=ye()?function(r){var t,e,n;if(null==r)return be.call(r);e=r[ve],t=D(r,ve);try{r[ve]=void 0}catch(t){return be.call(r)}return n=be.call(r),t?r[ve]=e:delete r[ve],n}:function(r){return be.call(r)},de=Boolean.prototype.toString;var we=ye();function he(r){return"object"==typeof r&&(r instanceof Q||(we?function(r){try{return de.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===ge(r)))}function me(r){return pe(r)||he(r)}function je(){return new Function("return this;")()}fe(me,"isPrimitive",pe),fe(me,"isObject",he);var _e="object"==typeof self?self:null,Se="object"==typeof window?window:null,Ae="object"==typeof global?global:null,Ee="object"==typeof globalThis?globalThis:null;var Te=function(r){if(arguments.length){if(!pe(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return je()}if(Ee)return Ee;if(_e)return _e;if(Se)return Se;if(Ae)return Ae;throw new Error("unexpected error. Unable to resolve global object.")}(),Oe=Te.document&&Te.document.childNodes,Fe=Int8Array;function xe(){return/^\s*function\s*([^(]*)/i}var Pe=/^\s*function\s*([^(]*)/i;function Ve(r){return null!==r&&"object"==typeof r}fe(xe,"REGEXP",Pe);var ke=function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!hr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(Ve);function Ue(r){var t,e,n,o;if(("Object"===(e=ge(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Pe.exec(n.toString()))return t[1]}return Ve(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}fe(Ve,"isObjectLikeArray",ke);var Be="function"==typeof Qt||"object"==typeof Fe||"function"==typeof Oe?function(r){return Ue(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Ue(r).toLowerCase():t};var Ne,Ie,Ce=Object.getPrototypeOf;Ie=Object.getPrototypeOf,Ne="function"===Be(Ie)?Ce:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===ge(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Le=Ne;var Ge=Object.prototype;function Re(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!hr(r)}(r)&&(t=function(r){return null==r?null:(r=Kt(r),Le(r))}(r),!t||!D(r,"constructor")&&D(t,"constructor")&&Jt(t.constructor)&&"[object Function]"===kt(t.constructor)&&D(t,"isPrototypeOf")&&Jt(t.isPrototypeOf)&&(t===Ge||function(r){var t;for(t in r)if(!D(r,t))return!1;return!0}(r)))}function $e(r,t){return Re(t)?(D(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(k("invalid argument. Options argument must be an object. Value: `%s`.",t))}function Me(r,t,e){var n,o,i,a;if(!ut(r))throw new TypeError(k("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!Ar(t))throw new TypeError(k("invalid argument. Second argument must be a function. Value: `%s`.",t));if(n={invalid:NaN},arguments.length>2&&(i=$e(n,e)))throw i;return $(o={},"next",u),$(o,"return",c),bt&&Ar(r[bt])&&$(o,bt,l),o;function u(){var e;return a?{done:!0}:(e=r.next()).done?(a=!0,e):{value:ct(e.value)?t(e.value):n.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return Me(r[bt](),t,n)}}var Xe=Z();var Ze=Object.prototype.toString;var We="function"==typeof H?H.toStringTag:"";var Ye=Xe&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return Ze.call(r);e=r[We],t=D(r,We);try{r[We]=void 0}catch(t){return Ze.call(r)}return n=Ze.call(r),t?r[We]=e:delete r[We],n}:function(r){return Ze.call(r)},ze="function"==typeof Uint32Array;var qe="function"==typeof Uint32Array?Uint32Array:null;var De,He="function"==typeof Uint32Array?Uint32Array:void 0;De=function(){var r,t;if("function"!=typeof qe)return!1;try{r=function(r){return ze&&r instanceof Uint32Array||"[object Uint32Array]"===Ye(r)}(t=new qe(t=[1,3.14,-3.14,4294967296,4294967297]))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?He:function(){throw new Error("not implemented")};var Je=De,Ke=Z();var Qe=Object.prototype.toString;var rn="function"==typeof H?H.toStringTag:"";var tn=Ke&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return Qe.call(r);e=r[rn],t=D(r,rn);try{r[rn]=void 0}catch(t){return Qe.call(r)}return n=Qe.call(r),t?r[rn]=e:delete r[rn],n}:function(r){return Qe.call(r)},en="function"==typeof Float64Array;var nn="function"==typeof Float64Array?Float64Array:null;var on,an="function"==typeof Float64Array?Float64Array:void 0;on=function(){var r,t;if("function"!=typeof nn)return!1;try{r=function(r){return en&&r instanceof Float64Array||"[object Float64Array]"===tn(r)}(t=new nn([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?an:function(){throw new Error("not implemented")};var un=on,cn=Z();var ln=Object.prototype.toString;var fn="function"==typeof H?H.toStringTag:"";var pn=cn&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return ln.call(r);e=r[fn],t=D(r,fn);try{r[fn]=void 0}catch(t){return ln.call(r)}return n=ln.call(r),t?r[fn]=e:delete r[fn],n}:function(r){return ln.call(r)},sn="function"==typeof Uint8Array;var yn="function"==typeof Uint8Array?Uint8Array:null;var bn,vn="function"==typeof Uint8Array?Uint8Array:void 0;bn=function(){var r,t;if("function"!=typeof yn)return!1;try{r=function(r){return sn&&r instanceof Uint8Array||"[object Uint8Array]"===pn(r)}(t=new yn(t=[1,3.14,-3.14,256,257]))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?vn:function(){throw new Error("not implemented")};var gn=bn,dn=Z();var wn=Object.prototype.toString;var hn="function"==typeof H?H.toStringTag:"";var mn=dn&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return wn.call(r);e=r[hn],t=D(r,hn);try{r[hn]=void 0}catch(t){return wn.call(r)}return n=wn.call(r),t?r[hn]=e:delete r[hn],n}:function(r){return wn.call(r)},jn="function"==typeof Uint16Array;var _n="function"==typeof Uint16Array?Uint16Array:null;var Sn,An="function"==typeof Uint16Array?Uint16Array:void 0;Sn=function(){var r,t;if("function"!=typeof _n)return!1;try{r=function(r){return jn&&r instanceof Uint16Array||"[object Uint16Array]"===mn(r)}(t=new _n(t=[1,3.14,-3.14,65536,65537]))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?An:function(){throw new Error("not implemented")};var En,Tn={uint16:Sn,uint8:gn};(En=new Tn.uint16(1))[0]=4660;var On=52===new Tn.uint8(En.buffer)[0],Fn=!0===On?1:0,xn=new un(1),Pn=new Je(xn.buffer);function Vn(r){return xn[0]=r,Pn[Fn]}var kn=Z();var Un=Object.prototype.toString;var Bn="function"==typeof H?H.toStringTag:"";var Nn=kn&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return Un.call(r);e=r[Bn],t=D(r,Bn);try{r[Bn]=void 0}catch(t){return Un.call(r)}return n=Un.call(r),t?r[Bn]=e:delete r[Bn],n}:function(r){return Un.call(r)},In="function"==typeof Float64Array;var Cn="function"==typeof Float64Array?Float64Array:null;var Ln,Gn="function"==typeof Float64Array?Float64Array:void 0;Ln=function(){var r,t;if("function"!=typeof Cn)return!1;try{r=function(r){return In&&r instanceof Float64Array||"[object Float64Array]"===Nn(r)}(t=new Cn([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Gn:function(){throw new Error("not implemented")};var Rn=!0===On?1:0,$n=new Ln(1),Mn=new Je($n.buffer);function Xn(r,t){return $n[0]=r,Mn[Rn]=t>>>0,$n[0]}var Zn=Number.POSITIVE_INFINITY,Wn=Number.NEGATIVE_INFINITY;var Yn=.6931471803691238,zn=1.9082149292705877e-10;function qn(r){var t,e,n,o,i,a,u,c,l,f;if(r<-1||function(r){return r!=r}(r))return NaN;if(-1===r)return Wn;if(r===Zn)return r;if(0===r)return r;if(f=1,(n=r<0?-r:r)<.41421356237309503){if(n<1.862645149230957e-9)return n<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(f=0,o=r,e=1)}return 0!==f&&(n<9007199254740992?(i=(f=((e=Vn(l=1+r))>>20)-1023)>0?1-(l-r):r-(l-1),i/=l):(f=((e=Vn(l=r))>>20)-1023,i=0),(e&=1048575)<434334?l=Xn(l,1072693248|e):(f+=1,l=Xn(l,1071644672|e),e=1048576-e>>2),o=l-1),t=.5*o*o,0===e?0===o?f*Yn+(i+=f*zn):f*Yn-((c=t*(1-.6666666666666666*o))-(f*zn+i)-o):(c=(u=(a=o/(2+o))*a)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===f?o-(t-a*(t+c)):f*Yn-(t-(a*(t+c)+(f*zn+i))-o))}return function(r){return Me(r,qn)}}));
//# sourceMappingURL=index.js.map
