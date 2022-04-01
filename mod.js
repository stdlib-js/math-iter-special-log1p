// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(n){var e=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(t,n,e.get?e:{enumerable:!0,get:function(){return r[n]}})})),t}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return t({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,c=o.__lookupGetter__,f=o.__lookupSetter__;var l=function(r,t,n){var e,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(c.call(r,t)||f.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),y="get"in n,v="set"in n,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,t,n.get),v&&a&&a.call(r,t,n.set),r},y=e,v=l,p=n()?y:v;var b=function(r,t,n){p(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})},s=b,m=/./;var d=function(r){return"boolean"==typeof r};var j=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var w=function(){return j&&"symbol"==typeof Symbol.toStringTag},_=Object.prototype.toString,A=_;var g=function(r){return A.call(r)},h=Object.prototype.hasOwnProperty;var O=function(r,t){return null!=r&&h.call(r,t)},E="function"==typeof Symbol?Symbol.toStringTag:"",U=O,S=E,P=_;var N=g,F=function(r){var t,n,e;if(null==r)return P.call(r);n=r[S],t=U(r,S);try{r[S]=void 0}catch(t){return P.call(r)}return e=P.call(r),t?r[S]=n:delete r[S],e},T=w()?F:N,I=Boolean.prototype.toString;var V=T,x=function(r){try{return I.call(r),!0}catch(r){return!1}},B=w();var G=function(r){return"object"==typeof r&&(r instanceof Boolean||(B?x(r):"[object Boolean]"===V(r)))},k=d,M=G;var C=s,L=function(r){return k(r)||M(r)},R=G;C(L,"isPrimitive",d),C(L,"isObject",R);var X="object"==typeof self?self:null,Y="object"==typeof window?window:null,z=L.isPrimitive,D=function(){return new Function("return this;")()},q=X,H=Y,J=r(Object.freeze({__proto__:null}));var K=function(r){if(arguments.length){if(!z(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return D()}if(q)return q;if(H)return H;if(J)return J;throw new Error("unexpected error. Unable to resolve global object.")},Q=K(),W=Q.document&&Q.document.childNodes,Z=Int8Array,$=m,rr=W,tr=Z;var nr=function(){return"function"==typeof $||"object"==typeof tr||"function"==typeof rr};var er=function(){return/^\s*function\s*([^(]*)/i},or=er;s(or,"REGEXP",er());var ur=or,ir=T;var ar=Array.isArray?Array.isArray:function(r){return"[object Array]"===ir(r)},cr=ar;var fr=function(r){return null!==r&&"object"==typeof r};s(fr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!cr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(fr));var lr=fr;var yr=T,vr=ur.REGEXP,pr=function(r){return lr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var br=function(r){var t,n,e;if(("Object"===(n=yr(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=vr.exec(e.toString()))return t[1]}return pr(r)?"Buffer":n},sr=br;var mr=br;var dr=function(r){var t;return null===r?"null":"object"===(t=typeof r)?sr(r).toLowerCase():t},jr=function(r){return mr(r).toLowerCase()},wr=nr()?jr:dr;var _r=function(r){return"function"===wr(r)},Ar=_r;var gr=function(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&Ar(r.next)};var hr=function(r){return"number"==typeof r},Or=Number,Er=Or.prototype.toString;var Ur=T,Sr=Or,Pr=function(r){try{return Er.call(r),!0}catch(r){return!1}},Nr=w();var Fr=function(r){return"object"==typeof r&&(r instanceof Sr||(Nr?Pr(r):"[object Number]"===Ur(r)))},Tr=hr,Ir=Fr;var Vr=s,xr=function(r){return Tr(r)||Ir(r)},Br=Fr;Vr(xr,"isPrimitive",hr),Vr(xr,"isObject",Br);var Gr=xr,kr=O;var Mr=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&kr(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,Cr=ar;var Lr=function(r){return"object"==typeof r&&null!==r&&!Cr(r)},Rr=Object.getPrototypeOf;var Xr=function(r){return r.__proto__},Yr=T,zr=Xr;var Dr=function(r){var t=zr(r);return t||null===t?t:"[object Function]"===Yr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},qr=Rr,Hr=Dr,Jr=_r(Object.getPrototypeOf)?qr:Hr;var Kr=Lr,Qr=_r,Wr=function(r){return null==r?null:(r=Object(r),Jr(r))},Zr=O,$r=T,rt=Object.prototype;var tt=function(r){var t;return!!Kr(r)&&(!(t=Wr(r))||!Zr(r,"constructor")&&Zr(t,"constructor")&&Qr(t.constructor)&&"[object Function]"===$r(t.constructor)&&Zr(t,"isPrototypeOf")&&Qr(t.isPrototypeOf)&&(t===rt||function(r){var t;for(t in r)if(!Zr(r,t))return!1;return!0}(r)))},nt=tt,et=O;var ot=s,ut=_r,it=gr,at=Gr.isPrimitive,ct=Mr,ft=function(r,t){return nt(t)?(et(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")};var lt=function r(t,n,e){var o,u,i,a;if(!it(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!ut(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");if(o={invalid:NaN},arguments.length>2&&(i=ft(o,e)))throw i;return ot(u={},"next",c),ot(u,"return",f),ct&&ut(t[ct])&&ot(u,ct,l),u;function c(){var r;return a?{done:!0}:(r=t.next()).done?(a=!0,r):{value:at(r.value)?n(r.value):o.invalid,done:!1}}function f(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return r(t[ct](),n,o)}},yt=lt;var vt=function(r){return r!=r},pt=T,bt="function"==typeof Uint32Array;var st="function"==typeof Uint32Array?Uint32Array:null,mt=function(r){return bt&&r instanceof Uint32Array||"[object Uint32Array]"===pt(r)},dt=st;var jt=function(){var r,t;if("function"!=typeof dt)return!1;try{t=new dt(t=[1,3.14,-3.14,4294967296,4294967297]),r=mt(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var wt="function"==typeof Uint32Array?Uint32Array:void 0,_t=function(){throw new Error("not implemented")},At=jt()?wt:_t,gt=T,ht="function"==typeof Float64Array;var Ot="function"==typeof Float64Array?Float64Array:null,Et=function(r){return ht&&r instanceof Float64Array||"[object Float64Array]"===gt(r)},Ut=Ot;var St=function(){var r,t;if("function"!=typeof Ut)return!1;try{t=new Ut([1,3.14,-3.14,NaN]),r=Et(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var Pt="function"==typeof Float64Array?Float64Array:void 0,Nt=function(){throw new Error("not implemented")},Ft=St()?Pt:Nt,Tt=T,It="function"==typeof Uint8Array;var Vt="function"==typeof Uint8Array?Uint8Array:null,xt=function(r){return It&&r instanceof Uint8Array||"[object Uint8Array]"===Tt(r)},Bt=Vt;var Gt=function(){var r,t;if("function"!=typeof Bt)return!1;try{t=new Bt(t=[1,3.14,-3.14,256,257]),r=xt(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var kt="function"==typeof Uint8Array?Uint8Array:void 0,Mt=function(){throw new Error("not implemented")},Ct=Gt()?kt:Mt,Lt=T,Rt="function"==typeof Uint16Array;var Xt="function"==typeof Uint16Array?Uint16Array:null,Yt=function(r){return Rt&&r instanceof Uint16Array||"[object Uint16Array]"===Lt(r)},zt=Xt;var Dt=function(){var r,t;if("function"!=typeof zt)return!1;try{t=new zt(t=[1,3.14,-3.14,65536,65537]),r=Yt(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var qt,Ht="function"==typeof Uint16Array?Uint16Array:void 0,Jt=function(){throw new Error("not implemented")},Kt={uint16:Dt()?Ht:Jt,uint8:Ct};(qt=new Kt.uint16(1))[0]=4660;var Qt=52===new Kt.uint8(qt.buffer)[0],Wt=At,Zt=!0===Qt?1:0,$t=new Ft(1),rn=new Wt($t.buffer);var tn=function(r){return $t[0]=r,rn[Zt]},nn=At,en=!0===Qt?1:0,on=new Ft(1),un=new nn(on.buffer);var an=function(r,t){return on[0]=r,un[en]=t>>>0,on[0]},cn=an,fn=Number.POSITIVE_INFINITY,ln=Or.NEGATIVE_INFINITY;var yn=vt,vn=tn,pn=cn,bn=fn,sn=ln,mn=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))},dn=.6931471803691238,jn=1.9082149292705877e-10;var wn=function(r){var t,n,e,o,u,i,a,c,f,l;if(r<-1||yn(r))return NaN;if(-1===r)return sn;if(r===bn)return r;if(0===r)return r;if(l=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,o=r,n=1)}return 0!==l&&(e<9007199254740992?(u=(l=((n=vn(f=1+r))>>20)-1023)>0?1-(f-r):r-(f-1),u/=f):(l=((n=vn(f=r))>>20)-1023,u=0),(n&=1048575)<434334?f=pn(f,1072693248|n):(l+=1,f=pn(f,1071644672|n),n=1048576-n>>2),o=f-1),t=.5*o*o,0===n?0===o?l*dn+(u+=l*jn):l*dn-((c=t*(1-.6666666666666666*o))-(l*jn+u)-o):(c=(a=(i=o/(2+o))*i)*mn(a),0===l?o-(t-i*(t+c)):l*dn-(t-(i*(t+c)+(l*jn+u))-o))},_n=yt,An=wn;var gn=function(r){return _n(r,An)},hn=gn;export{hn as default};
//# sourceMappingURL=mod.js.map