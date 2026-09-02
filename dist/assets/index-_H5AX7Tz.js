(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function f0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var jm={exports:{}},jl={},Xm={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qo=Symbol.for("react.element"),d0=Symbol.for("react.portal"),h0=Symbol.for("react.fragment"),p0=Symbol.for("react.strict_mode"),m0=Symbol.for("react.profiler"),g0=Symbol.for("react.provider"),_0=Symbol.for("react.context"),v0=Symbol.for("react.forward_ref"),x0=Symbol.for("react.suspense"),y0=Symbol.for("react.memo"),S0=Symbol.for("react.lazy"),Gd=Symbol.iterator;function E0(t){return t===null||typeof t!="object"?null:(t=Gd&&t[Gd]||t["@@iterator"],typeof t=="function"?t:null)}var qm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ym=Object.assign,$m={};function Gs(t,e,n){this.props=t,this.context=e,this.refs=$m,this.updater=n||qm}Gs.prototype.isReactComponent={};Gs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Gs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Km(){}Km.prototype=Gs.prototype;function Nf(t,e,n){this.props=t,this.context=e,this.refs=$m,this.updater=n||qm}var Uf=Nf.prototype=new Km;Uf.constructor=Nf;Ym(Uf,Gs.prototype);Uf.isPureReactComponent=!0;var Wd=Array.isArray,Zm=Object.prototype.hasOwnProperty,If={current:null},Qm={key:!0,ref:!0,__self:!0,__source:!0};function Jm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Zm.call(e,i)&&!Qm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:qo,type:t,key:s,ref:o,props:r,_owner:If.current}}function M0(t,e){return{$$typeof:qo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Of(t){return typeof t=="object"&&t!==null&&t.$$typeof===qo}function w0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var jd=/\/+/g;function _c(t,e){return typeof t=="object"&&t!==null&&t.key!=null?w0(""+t.key):e.toString(36)}function $a(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case qo:case d0:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+_c(o,0):i,Wd(r)?(n="",t!=null&&(n=t.replace(jd,"$&/")+"/"),$a(r,e,n,"",function(c){return c})):r!=null&&(Of(r)&&(r=M0(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(jd,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Wd(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+_c(s,a);o+=$a(s,e,n,l,r)}else if(l=E0(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+_c(s,a++),o+=$a(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function la(t,e,n){if(t==null)return t;var i=[],r=0;return $a(t,i,"","",function(s){return e.call(n,s,r++)}),i}function T0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Zt={current:null},Ka={transition:null},A0={ReactCurrentDispatcher:Zt,ReactCurrentBatchConfig:Ka,ReactCurrentOwner:If};function eg(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:la,forEach:function(t,e,n){la(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return la(t,function(){e++}),e},toArray:function(t){return la(t,function(e){return e})||[]},only:function(t){if(!Of(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=Gs;Xe.Fragment=h0;Xe.Profiler=m0;Xe.PureComponent=Nf;Xe.StrictMode=p0;Xe.Suspense=x0;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A0;Xe.act=eg;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Ym({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=If.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Zm.call(e,l)&&!Qm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:qo,type:t.type,key:r,ref:s,props:i,_owner:o}};Xe.createContext=function(t){return t={$$typeof:_0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:g0,_context:t},t.Consumer=t};Xe.createElement=Jm;Xe.createFactory=function(t){var e=Jm.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:v0,render:t}};Xe.isValidElement=Of;Xe.lazy=function(t){return{$$typeof:S0,_payload:{_status:-1,_result:t},_init:T0}};Xe.memo=function(t,e){return{$$typeof:y0,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=Ka.transition;Ka.transition={};try{t()}finally{Ka.transition=e}};Xe.unstable_act=eg;Xe.useCallback=function(t,e){return Zt.current.useCallback(t,e)};Xe.useContext=function(t){return Zt.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return Zt.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return Zt.current.useEffect(t,e)};Xe.useId=function(){return Zt.current.useId()};Xe.useImperativeHandle=function(t,e,n){return Zt.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return Zt.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return Zt.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return Zt.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return Zt.current.useReducer(t,e,n)};Xe.useRef=function(t){return Zt.current.useRef(t)};Xe.useState=function(t){return Zt.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return Zt.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return Zt.current.useTransition()};Xe.version="18.3.1";Xm.exports=Xe;var Le=Xm.exports;const R0=f0(Le);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C0=Le,b0=Symbol.for("react.element"),P0=Symbol.for("react.fragment"),L0=Object.prototype.hasOwnProperty,D0=C0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,N0={key:!0,ref:!0,__self:!0,__source:!0};function tg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)L0.call(e,i)&&!N0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:b0,type:t,key:s,ref:o,props:r,_owner:D0.current}}jl.Fragment=P0;jl.jsx=tg;jl.jsxs=tg;jm.exports=jl;var I=jm.exports,Ru={},ng={exports:{}},gn={},ig={exports:{}},rg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,X){var j=D.length;D.push(X);e:for(;0<j;){var ee=j-1>>>1,ge=D[ee];if(0<r(ge,X))D[ee]=X,D[j]=ge,j=ee;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var X=D[0],j=D.pop();if(j!==X){D[0]=j;e:for(var ee=0,ge=D.length,Pe=ge>>>1;ee<Pe;){var q=2*(ee+1)-1,ae=D[q],te=q+1,re=D[te];if(0>r(ae,j))te<ge&&0>r(re,ae)?(D[ee]=re,D[te]=j,ee=te):(D[ee]=ae,D[q]=j,ee=q);else if(te<ge&&0>r(re,j))D[ee]=re,D[te]=j,ee=te;else break e}}return X}function r(D,X){var j=D.sortIndex-X.sortIndex;return j!==0?j:D.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,d=null,h=3,m=!1,v=!1,x=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var X=n(c);X!==null;){if(X.callback===null)i(c);else if(X.startTime<=D)i(c),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(c)}}function S(D){if(x=!1,g(D),!v)if(n(l)!==null)v=!0,Z(C);else{var X=n(c);X!==null&&J(S,X.startTime-D)}}function C(D,X){v=!1,x&&(x=!1,u(L),L=-1),m=!0;var j=h;try{for(g(X),d=n(l);d!==null&&(!(d.expirationTime>X)||D&&!U());){var ee=d.callback;if(typeof ee=="function"){d.callback=null,h=d.priorityLevel;var ge=ee(d.expirationTime<=X);X=t.unstable_now(),typeof ge=="function"?d.callback=ge:d===n(l)&&i(l),g(X)}else i(l);d=n(l)}if(d!==null)var Pe=!0;else{var q=n(c);q!==null&&J(S,q.startTime-X),Pe=!1}return Pe}finally{d=null,h=j,m=!1}}var R=!1,T=null,L=-1,w=5,E=-1;function U(){return!(t.unstable_now()-E<w)}function W(){if(T!==null){var D=t.unstable_now();E=D;var X=!0;try{X=T(!0,D)}finally{X?P():(R=!1,T=null)}}else R=!1}var P;if(typeof _=="function")P=function(){_(W)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,Y=z.port2;z.port1.onmessage=W,P=function(){Y.postMessage(null)}}else P=function(){p(W,0)};function Z(D){T=D,R||(R=!0,P())}function J(D,X){L=p(function(){D(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,Z(C))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(h){case 1:case 2:case 3:var X=3;break;default:X=h}var j=h;h=X;try{return D()}finally{h=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,X){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var j=h;h=D;try{return X()}finally{h=j}},t.unstable_scheduleCallback=function(D,X,j){var ee=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?ee+j:ee):j=ee,D){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=j+ge,D={id:f++,callback:X,priorityLevel:D,startTime:j,expirationTime:ge,sortIndex:-1},j>ee?(D.sortIndex=j,e(c,D),n(l)===null&&D===n(c)&&(x?(u(L),L=-1):x=!0,J(S,j-ee))):(D.sortIndex=ge,e(l,D),v||m||(v=!0,Z(C))),D},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(D){var X=h;return function(){var j=h;h=X;try{return D.apply(this,arguments)}finally{h=j}}}})(rg);ig.exports=rg;var U0=ig.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I0=Le,mn=U0;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sg=new Set,Co={};function Or(t,e){Ps(t,e),Ps(t+"Capture",e)}function Ps(t,e){for(Co[t]=e,t=0;t<e.length;t++)sg.add(e[t])}var mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cu=Object.prototype.hasOwnProperty,O0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xd={},qd={};function F0(t){return Cu.call(qd,t)?!0:Cu.call(Xd,t)?!1:O0.test(t)?qd[t]=!0:(Xd[t]=!0,!1)}function k0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function B0(t,e,n,i){if(e===null||typeof e>"u"||k0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Qt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){It[t]=new Qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];It[e]=new Qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){It[t]=new Qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){It[t]=new Qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){It[t]=new Qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){It[t]=new Qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){It[t]=new Qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){It[t]=new Qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){It[t]=new Qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ff=/[\-:]([a-z])/g;function kf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ff,kf);It[e]=new Qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ff,kf);It[e]=new Qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ff,kf);It[e]=new Qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){It[t]=new Qt(t,1,!1,t.toLowerCase(),null,!1,!1)});It.xlinkHref=new Qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){It[t]=new Qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Bf(t,e,n,i){var r=It.hasOwnProperty(e)?It[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(B0(e,n,r,i)&&(n=null),i||r===null?F0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var xi=I0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ca=Symbol.for("react.element"),ls=Symbol.for("react.portal"),cs=Symbol.for("react.fragment"),zf=Symbol.for("react.strict_mode"),bu=Symbol.for("react.profiler"),og=Symbol.for("react.provider"),ag=Symbol.for("react.context"),Hf=Symbol.for("react.forward_ref"),Pu=Symbol.for("react.suspense"),Lu=Symbol.for("react.suspense_list"),Vf=Symbol.for("react.memo"),Pi=Symbol.for("react.lazy"),lg=Symbol.for("react.offscreen"),Yd=Symbol.iterator;function Js(t){return t===null||typeof t!="object"?null:(t=Yd&&t[Yd]||t["@@iterator"],typeof t=="function"?t:null)}var mt=Object.assign,vc;function po(t){if(vc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vc=e&&e[1]||""}return`
`+vc+t}var xc=!1;function yc(t,e){if(!t||xc)return"";xc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{xc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?po(t):""}function z0(t){switch(t.tag){case 5:return po(t.type);case 16:return po("Lazy");case 13:return po("Suspense");case 19:return po("SuspenseList");case 0:case 2:case 15:return t=yc(t.type,!1),t;case 11:return t=yc(t.type.render,!1),t;case 1:return t=yc(t.type,!0),t;default:return""}}function Du(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case cs:return"Fragment";case ls:return"Portal";case bu:return"Profiler";case zf:return"StrictMode";case Pu:return"Suspense";case Lu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ag:return(t.displayName||"Context")+".Consumer";case og:return(t._context.displayName||"Context")+".Provider";case Hf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vf:return e=t.displayName||null,e!==null?e:Du(t.type)||"Memo";case Pi:e=t._payload,t=t._init;try{return Du(t(e))}catch{}}return null}function H0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Du(e);case 8:return e===zf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function $i(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function cg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function V0(t){var e=cg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ua(t){t._valueTracker||(t._valueTracker=V0(t))}function ug(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=cg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function dl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Nu(t,e){var n=e.checked;return mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function $d(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=$i(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function fg(t,e){e=e.checked,e!=null&&Bf(t,"checked",e,!1)}function Uu(t,e){fg(t,e);var n=$i(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Iu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Iu(t,e.type,$i(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Kd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Iu(t,e,n){(e!=="number"||dl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var mo=Array.isArray;function Ss(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+$i(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Ou(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Zd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(mo(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:$i(n)}}function dg(t,e){var n=$i(e.value),i=$i(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Qd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function hg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?hg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var fa,pg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(fa=fa||document.createElement("div"),fa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=fa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function bo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var xo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},G0=["Webkit","ms","Moz","O"];Object.keys(xo).forEach(function(t){G0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),xo[e]=xo[t]})});function mg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||xo.hasOwnProperty(t)&&xo[t]?(""+e).trim():e+"px"}function gg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=mg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var W0=mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ku(t,e){if(e){if(W0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function Bu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zu=null;function Gf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hu=null,Es=null,Ms=null;function Jd(t){if(t=Ko(t)){if(typeof Hu!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=Kl(e),Hu(t.stateNode,t.type,e))}}function _g(t){Es?Ms?Ms.push(t):Ms=[t]:Es=t}function vg(){if(Es){var t=Es,e=Ms;if(Ms=Es=null,Jd(t),e)for(t=0;t<e.length;t++)Jd(e[t])}}function xg(t,e){return t(e)}function yg(){}var Sc=!1;function Sg(t,e,n){if(Sc)return t(e,n);Sc=!0;try{return xg(t,e,n)}finally{Sc=!1,(Es!==null||Ms!==null)&&(yg(),vg())}}function Po(t,e){var n=t.stateNode;if(n===null)return null;var i=Kl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var Vu=!1;if(mi)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){Vu=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{Vu=!1}function j0(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var yo=!1,hl=null,pl=!1,Gu=null,X0={onError:function(t){yo=!0,hl=t}};function q0(t,e,n,i,r,s,o,a,l){yo=!1,hl=null,j0.apply(X0,arguments)}function Y0(t,e,n,i,r,s,o,a,l){if(q0.apply(this,arguments),yo){if(yo){var c=hl;yo=!1,hl=null}else throw Error(oe(198));pl||(pl=!0,Gu=c)}}function Fr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Eg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function eh(t){if(Fr(t)!==t)throw Error(oe(188))}function $0(t){var e=t.alternate;if(!e){if(e=Fr(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return eh(r),t;if(s===i)return eh(r),e;s=s.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function Mg(t){return t=$0(t),t!==null?wg(t):null}function wg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=wg(t);if(e!==null)return e;t=t.sibling}return null}var Tg=mn.unstable_scheduleCallback,th=mn.unstable_cancelCallback,K0=mn.unstable_shouldYield,Z0=mn.unstable_requestPaint,_t=mn.unstable_now,Q0=mn.unstable_getCurrentPriorityLevel,Wf=mn.unstable_ImmediatePriority,Ag=mn.unstable_UserBlockingPriority,ml=mn.unstable_NormalPriority,J0=mn.unstable_LowPriority,Rg=mn.unstable_IdlePriority,Xl=null,Kn=null;function ex(t){if(Kn&&typeof Kn.onCommitFiberRoot=="function")try{Kn.onCommitFiberRoot(Xl,t,void 0,(t.current.flags&128)===128)}catch{}}var kn=Math.clz32?Math.clz32:ix,tx=Math.log,nx=Math.LN2;function ix(t){return t>>>=0,t===0?32:31-(tx(t)/nx|0)|0}var da=64,ha=4194304;function go(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=go(a):(s&=o,s!==0&&(i=go(s)))}else o=n&~r,o!==0?i=go(o):s!==0&&(i=go(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-kn(e),r=1<<n,i|=t[n],e&=~r;return i}function rx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-kn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=rx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Wu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Cg(){var t=da;return da<<=1,!(da&4194240)&&(da=64),t}function Ec(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Yo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-kn(e),t[e]=n}function ox(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-kn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function jf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-kn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var tt=0;function bg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Pg,Xf,Lg,Dg,Ng,ju=!1,pa=[],Bi=null,zi=null,Hi=null,Lo=new Map,Do=new Map,Ni=[],ax="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nh(t,e){switch(t){case"focusin":case"focusout":Bi=null;break;case"dragenter":case"dragleave":zi=null;break;case"mouseover":case"mouseout":Hi=null;break;case"pointerover":case"pointerout":Lo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(e.pointerId)}}function to(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ko(e),e!==null&&Xf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function lx(t,e,n,i,r){switch(e){case"focusin":return Bi=to(Bi,t,e,n,i,r),!0;case"dragenter":return zi=to(zi,t,e,n,i,r),!0;case"mouseover":return Hi=to(Hi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Lo.set(s,to(Lo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Do.set(s,to(Do.get(s)||null,t,e,n,i,r)),!0}return!1}function Ug(t){var e=gr(t.target);if(e!==null){var n=Fr(e);if(n!==null){if(e=n.tag,e===13){if(e=Eg(n),e!==null){t.blockedOn=e,Ng(t.priority,function(){Lg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Za(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);zu=i,n.target.dispatchEvent(i),zu=null}else return e=Ko(n),e!==null&&Xf(e),t.blockedOn=n,!1;e.shift()}return!0}function ih(t,e,n){Za(t)&&n.delete(e)}function cx(){ju=!1,Bi!==null&&Za(Bi)&&(Bi=null),zi!==null&&Za(zi)&&(zi=null),Hi!==null&&Za(Hi)&&(Hi=null),Lo.forEach(ih),Do.forEach(ih)}function no(t,e){t.blockedOn===e&&(t.blockedOn=null,ju||(ju=!0,mn.unstable_scheduleCallback(mn.unstable_NormalPriority,cx)))}function No(t){function e(r){return no(r,t)}if(0<pa.length){no(pa[0],t);for(var n=1;n<pa.length;n++){var i=pa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Bi!==null&&no(Bi,t),zi!==null&&no(zi,t),Hi!==null&&no(Hi,t),Lo.forEach(e),Do.forEach(e),n=0;n<Ni.length;n++)i=Ni[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ni.length&&(n=Ni[0],n.blockedOn===null);)Ug(n),n.blockedOn===null&&Ni.shift()}var ws=xi.ReactCurrentBatchConfig,_l=!0;function ux(t,e,n,i){var r=tt,s=ws.transition;ws.transition=null;try{tt=1,qf(t,e,n,i)}finally{tt=r,ws.transition=s}}function fx(t,e,n,i){var r=tt,s=ws.transition;ws.transition=null;try{tt=4,qf(t,e,n,i)}finally{tt=r,ws.transition=s}}function qf(t,e,n,i){if(_l){var r=Xu(t,e,n,i);if(r===null)Dc(t,e,i,vl,n),nh(t,i);else if(lx(r,t,e,n,i))i.stopPropagation();else if(nh(t,i),e&4&&-1<ax.indexOf(t)){for(;r!==null;){var s=Ko(r);if(s!==null&&Pg(s),s=Xu(t,e,n,i),s===null&&Dc(t,e,i,vl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Dc(t,e,i,null,n)}}var vl=null;function Xu(t,e,n,i){if(vl=null,t=Gf(i),t=gr(t),t!==null)if(e=Fr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Eg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return vl=t,null}function Ig(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Q0()){case Wf:return 1;case Ag:return 4;case ml:case J0:return 16;case Rg:return 536870912;default:return 16}default:return 16}}var Oi=null,Yf=null,Qa=null;function Og(){if(Qa)return Qa;var t,e=Yf,n=e.length,i,r="value"in Oi?Oi.value:Oi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Qa=r.slice(t,1<i?1-i:void 0)}function Ja(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ma(){return!0}function rh(){return!1}function _n(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ma:rh,this.isPropagationStopped=rh,this}return mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ma)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ma)},persist:function(){},isPersistent:ma}),e}var Ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$f=_n(Ws),$o=mt({},Ws,{view:0,detail:0}),dx=_n($o),Mc,wc,io,ql=mt({},$o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==io&&(io&&t.type==="mousemove"?(Mc=t.screenX-io.screenX,wc=t.screenY-io.screenY):wc=Mc=0,io=t),Mc)},movementY:function(t){return"movementY"in t?t.movementY:wc}}),sh=_n(ql),hx=mt({},ql,{dataTransfer:0}),px=_n(hx),mx=mt({},$o,{relatedTarget:0}),Tc=_n(mx),gx=mt({},Ws,{animationName:0,elapsedTime:0,pseudoElement:0}),_x=_n(gx),vx=mt({},Ws,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xx=_n(vx),yx=mt({},Ws,{data:0}),oh=_n(yx),Sx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ex={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Mx[t])?!!e[t]:!1}function Kf(){return wx}var Tx=mt({},$o,{key:function(t){if(t.key){var e=Sx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ja(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ex[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kf,charCode:function(t){return t.type==="keypress"?Ja(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ja(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ax=_n(Tx),Rx=mt({},ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ah=_n(Rx),Cx=mt({},$o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kf}),bx=_n(Cx),Px=mt({},Ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lx=_n(Px),Dx=mt({},ql,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Nx=_n(Dx),Ux=[9,13,27,32],Zf=mi&&"CompositionEvent"in window,So=null;mi&&"documentMode"in document&&(So=document.documentMode);var Ix=mi&&"TextEvent"in window&&!So,Fg=mi&&(!Zf||So&&8<So&&11>=So),lh=" ",ch=!1;function kg(t,e){switch(t){case"keyup":return Ux.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var us=!1;function Ox(t,e){switch(t){case"compositionend":return Bg(e);case"keypress":return e.which!==32?null:(ch=!0,lh);case"textInput":return t=e.data,t===lh&&ch?null:t;default:return null}}function Fx(t,e){if(us)return t==="compositionend"||!Zf&&kg(t,e)?(t=Og(),Qa=Yf=Oi=null,us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Fg&&e.locale!=="ko"?null:e.data;default:return null}}var kx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!kx[t.type]:e==="textarea"}function zg(t,e,n,i){_g(i),e=xl(e,"onChange"),0<e.length&&(n=new $f("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Eo=null,Uo=null;function Bx(t){Zg(t,0)}function Yl(t){var e=hs(t);if(ug(e))return t}function zx(t,e){if(t==="change")return e}var Hg=!1;if(mi){var Ac;if(mi){var Rc="oninput"in document;if(!Rc){var fh=document.createElement("div");fh.setAttribute("oninput","return;"),Rc=typeof fh.oninput=="function"}Ac=Rc}else Ac=!1;Hg=Ac&&(!document.documentMode||9<document.documentMode)}function dh(){Eo&&(Eo.detachEvent("onpropertychange",Vg),Uo=Eo=null)}function Vg(t){if(t.propertyName==="value"&&Yl(Uo)){var e=[];zg(e,Uo,t,Gf(t)),Sg(Bx,e)}}function Hx(t,e,n){t==="focusin"?(dh(),Eo=e,Uo=n,Eo.attachEvent("onpropertychange",Vg)):t==="focusout"&&dh()}function Vx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yl(Uo)}function Gx(t,e){if(t==="click")return Yl(e)}function Wx(t,e){if(t==="input"||t==="change")return Yl(e)}function jx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zn=typeof Object.is=="function"?Object.is:jx;function Io(t,e){if(zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Cu.call(e,r)||!zn(t[r],e[r]))return!1}return!0}function hh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ph(t,e){var n=hh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hh(n)}}function Gg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Gg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Wg(){for(var t=window,e=dl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=dl(t.document)}return e}function Qf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Xx(t){var e=Wg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Gg(n.ownerDocument.documentElement,n)){if(i!==null&&Qf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=ph(n,s);var o=ph(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var qx=mi&&"documentMode"in document&&11>=document.documentMode,fs=null,qu=null,Mo=null,Yu=!1;function mh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yu||fs==null||fs!==dl(i)||(i=fs,"selectionStart"in i&&Qf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Mo&&Io(Mo,i)||(Mo=i,i=xl(qu,"onSelect"),0<i.length&&(e=new $f("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=fs)))}function ga(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ds={animationend:ga("Animation","AnimationEnd"),animationiteration:ga("Animation","AnimationIteration"),animationstart:ga("Animation","AnimationStart"),transitionend:ga("Transition","TransitionEnd")},Cc={},jg={};mi&&(jg=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function $l(t){if(Cc[t])return Cc[t];if(!ds[t])return t;var e=ds[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in jg)return Cc[t]=e[n];return t}var Xg=$l("animationend"),qg=$l("animationiteration"),Yg=$l("animationstart"),$g=$l("transitionend"),Kg=new Map,gh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(t,e){Kg.set(t,e),Or(e,[t])}for(var bc=0;bc<gh.length;bc++){var Pc=gh[bc],Yx=Pc.toLowerCase(),$x=Pc[0].toUpperCase()+Pc.slice(1);er(Yx,"on"+$x)}er(Xg,"onAnimationEnd");er(qg,"onAnimationIteration");er(Yg,"onAnimationStart");er("dblclick","onDoubleClick");er("focusin","onFocus");er("focusout","onBlur");er($g,"onTransitionEnd");Ps("onMouseEnter",["mouseout","mouseover"]);Ps("onMouseLeave",["mouseout","mouseover"]);Ps("onPointerEnter",["pointerout","pointerover"]);Ps("onPointerLeave",["pointerout","pointerover"]);Or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Or("onBeforeInput",["compositionend","keypress","textInput","paste"]);Or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kx=new Set("cancel close invalid load scroll toggle".split(" ").concat(_o));function _h(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Y0(i,e,void 0,t),t.currentTarget=null}function Zg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;_h(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;_h(r,a,c),s=l}}}if(pl)throw t=Gu,pl=!1,Gu=null,t}function at(t,e){var n=e[Ju];n===void 0&&(n=e[Ju]=new Set);var i=t+"__bubble";n.has(i)||(Qg(e,t,2,!1),n.add(i))}function Lc(t,e,n){var i=0;e&&(i|=4),Qg(n,t,i,e)}var _a="_reactListening"+Math.random().toString(36).slice(2);function Oo(t){if(!t[_a]){t[_a]=!0,sg.forEach(function(n){n!=="selectionchange"&&(Kx.has(n)||Lc(n,!1,t),Lc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[_a]||(e[_a]=!0,Lc("selectionchange",!1,e))}}function Qg(t,e,n,i){switch(Ig(e)){case 1:var r=ux;break;case 4:r=fx;break;default:r=qf}n=r.bind(null,e,n,t),r=void 0,!Vu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Dc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=gr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Sg(function(){var c=s,f=Gf(n),d=[];e:{var h=Kg.get(t);if(h!==void 0){var m=$f,v=t;switch(t){case"keypress":if(Ja(n)===0)break e;case"keydown":case"keyup":m=Ax;break;case"focusin":v="focus",m=Tc;break;case"focusout":v="blur",m=Tc;break;case"beforeblur":case"afterblur":m=Tc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=sh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=px;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=bx;break;case Xg:case qg:case Yg:m=_x;break;case $g:m=Lx;break;case"scroll":m=dx;break;case"wheel":m=Nx;break;case"copy":case"cut":case"paste":m=xx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=ah}var x=(e&4)!==0,p=!x&&t==="scroll",u=x?h!==null?h+"Capture":null:h;x=[];for(var _=c,g;_!==null;){g=_;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,u!==null&&(S=Po(_,u),S!=null&&x.push(Fo(_,S,g)))),p)break;_=_.return}0<x.length&&(h=new m(h,v,null,n,f),d.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==zu&&(v=n.relatedTarget||n.fromElement)&&(gr(v)||v[gi]))break e;if((m||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=c,v=v?gr(v):null,v!==null&&(p=Fr(v),v!==p||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=c),m!==v)){if(x=sh,S="onMouseLeave",u="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=ah,S="onPointerLeave",u="onPointerEnter",_="pointer"),p=m==null?h:hs(m),g=v==null?h:hs(v),h=new x(S,_+"leave",m,n,f),h.target=p,h.relatedTarget=g,S=null,gr(f)===c&&(x=new x(u,_+"enter",v,n,f),x.target=g,x.relatedTarget=p,S=x),p=S,m&&v)t:{for(x=m,u=v,_=0,g=x;g;g=zr(g))_++;for(g=0,S=u;S;S=zr(S))g++;for(;0<_-g;)x=zr(x),_--;for(;0<g-_;)u=zr(u),g--;for(;_--;){if(x===u||u!==null&&x===u.alternate)break t;x=zr(x),u=zr(u)}x=null}else x=null;m!==null&&vh(d,h,m,x,!1),v!==null&&p!==null&&vh(d,p,v,x,!0)}}e:{if(h=c?hs(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var C=zx;else if(uh(h))if(Hg)C=Wx;else{C=Vx;var R=Hx}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=Gx);if(C&&(C=C(t,c))){zg(d,C,n,f);break e}R&&R(t,h,c),t==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&Iu(h,"number",h.value)}switch(R=c?hs(c):window,t){case"focusin":(uh(R)||R.contentEditable==="true")&&(fs=R,qu=c,Mo=null);break;case"focusout":Mo=qu=fs=null;break;case"mousedown":Yu=!0;break;case"contextmenu":case"mouseup":case"dragend":Yu=!1,mh(d,n,f);break;case"selectionchange":if(qx)break;case"keydown":case"keyup":mh(d,n,f)}var T;if(Zf)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else us?kg(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Fg&&n.locale!=="ko"&&(us||L!=="onCompositionStart"?L==="onCompositionEnd"&&us&&(T=Og()):(Oi=f,Yf="value"in Oi?Oi.value:Oi.textContent,us=!0)),R=xl(c,L),0<R.length&&(L=new oh(L,t,null,n,f),d.push({event:L,listeners:R}),T?L.data=T:(T=Bg(n),T!==null&&(L.data=T)))),(T=Ix?Ox(t,n):Fx(t,n))&&(c=xl(c,"onBeforeInput"),0<c.length&&(f=new oh("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=T))}Zg(d,e)})}function Fo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function xl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Po(t,n),s!=null&&i.unshift(Fo(t,s,r)),s=Po(t,e),s!=null&&i.push(Fo(t,s,r))),t=t.return}return i}function zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function vh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Po(n,s),l!=null&&o.unshift(Fo(n,l,a))):r||(l=Po(n,s),l!=null&&o.push(Fo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Zx=/\r\n?/g,Qx=/\u0000|\uFFFD/g;function xh(t){return(typeof t=="string"?t:""+t).replace(Zx,`
`).replace(Qx,"")}function va(t,e,n){if(e=xh(e),xh(t)!==e&&n)throw Error(oe(425))}function yl(){}var $u=null,Ku=null;function Zu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Qu=typeof setTimeout=="function"?setTimeout:void 0,Jx=typeof clearTimeout=="function"?clearTimeout:void 0,yh=typeof Promise=="function"?Promise:void 0,ey=typeof queueMicrotask=="function"?queueMicrotask:typeof yh<"u"?function(t){return yh.resolve(null).then(t).catch(ty)}:Qu;function ty(t){setTimeout(function(){throw t})}function Nc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),No(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);No(e)}function Vi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Sh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var js=Math.random().toString(36).slice(2),qn="__reactFiber$"+js,ko="__reactProps$"+js,gi="__reactContainer$"+js,Ju="__reactEvents$"+js,ny="__reactListeners$"+js,iy="__reactHandles$"+js;function gr(t){var e=t[qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[gi]||n[qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Sh(t);t!==null;){if(n=t[qn])return n;t=Sh(t)}return e}t=n,n=t.parentNode}return null}function Ko(t){return t=t[qn]||t[gi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function hs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function Kl(t){return t[ko]||null}var ef=[],ps=-1;function tr(t){return{current:t}}function ct(t){0>ps||(t.current=ef[ps],ef[ps]=null,ps--)}function st(t,e){ps++,ef[ps]=t.current,t.current=e}var Ki={},Xt=tr(Ki),nn=tr(!1),Rr=Ki;function Ls(t,e){var n=t.type.contextTypes;if(!n)return Ki;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function rn(t){return t=t.childContextTypes,t!=null}function Sl(){ct(nn),ct(Xt)}function Eh(t,e,n){if(Xt.current!==Ki)throw Error(oe(168));st(Xt,e),st(nn,n)}function Jg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,H0(t)||"Unknown",r));return mt({},n,i)}function El(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ki,Rr=Xt.current,st(Xt,t),st(nn,nn.current),!0}function Mh(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=Jg(t,e,Rr),i.__reactInternalMemoizedMergedChildContext=t,ct(nn),ct(Xt),st(Xt,t)):ct(nn),st(nn,n)}var ci=null,Zl=!1,Uc=!1;function e_(t){ci===null?ci=[t]:ci.push(t)}function ry(t){Zl=!0,e_(t)}function nr(){if(!Uc&&ci!==null){Uc=!0;var t=0,e=tt;try{var n=ci;for(tt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ci=null,Zl=!1}catch(r){throw ci!==null&&(ci=ci.slice(t+1)),Tg(Wf,nr),r}finally{tt=e,Uc=!1}}return null}var ms=[],gs=0,Ml=null,wl=0,Sn=[],En=0,Cr=null,fi=1,di="";function fr(t,e){ms[gs++]=wl,ms[gs++]=Ml,Ml=t,wl=e}function t_(t,e,n){Sn[En++]=fi,Sn[En++]=di,Sn[En++]=Cr,Cr=t;var i=fi;t=di;var r=32-kn(i)-1;i&=~(1<<r),n+=1;var s=32-kn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,fi=1<<32-kn(e)+r|n<<r|i,di=s+t}else fi=1<<s|n<<r|i,di=t}function Jf(t){t.return!==null&&(fr(t,1),t_(t,1,0))}function ed(t){for(;t===Ml;)Ml=ms[--gs],ms[gs]=null,wl=ms[--gs],ms[gs]=null;for(;t===Cr;)Cr=Sn[--En],Sn[En]=null,di=Sn[--En],Sn[En]=null,fi=Sn[--En],Sn[En]=null}var pn=null,hn=null,ft=!1,In=null;function n_(t,e){var n=wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function wh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,pn=t,hn=Vi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,pn=t,hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Cr!==null?{id:fi,overflow:di}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,pn=t,hn=null,!0):!1;default:return!1}}function tf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function nf(t){if(ft){var e=hn;if(e){var n=e;if(!wh(t,e)){if(tf(t))throw Error(oe(418));e=Vi(n.nextSibling);var i=pn;e&&wh(t,e)?n_(i,n):(t.flags=t.flags&-4097|2,ft=!1,pn=t)}}else{if(tf(t))throw Error(oe(418));t.flags=t.flags&-4097|2,ft=!1,pn=t}}}function Th(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pn=t}function xa(t){if(t!==pn)return!1;if(!ft)return Th(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Zu(t.type,t.memoizedProps)),e&&(e=hn)){if(tf(t))throw i_(),Error(oe(418));for(;e;)n_(t,e),e=Vi(e.nextSibling)}if(Th(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){hn=Vi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}hn=null}}else hn=pn?Vi(t.stateNode.nextSibling):null;return!0}function i_(){for(var t=hn;t;)t=Vi(t.nextSibling)}function Ds(){hn=pn=null,ft=!1}function td(t){In===null?In=[t]:In.push(t)}var sy=xi.ReactCurrentBatchConfig;function ro(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function ya(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ah(t){var e=t._init;return e(t._payload)}function r_(t){function e(u,_){if(t){var g=u.deletions;g===null?(u.deletions=[_],u.flags|=16):g.push(_)}}function n(u,_){if(!t)return null;for(;_!==null;)e(u,_),_=_.sibling;return null}function i(u,_){for(u=new Map;_!==null;)_.key!==null?u.set(_.key,_):u.set(_.index,_),_=_.sibling;return u}function r(u,_){return u=Xi(u,_),u.index=0,u.sibling=null,u}function s(u,_,g){return u.index=g,t?(g=u.alternate,g!==null?(g=g.index,g<_?(u.flags|=2,_):g):(u.flags|=2,_)):(u.flags|=1048576,_)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,_,g,S){return _===null||_.tag!==6?(_=Hc(g,u.mode,S),_.return=u,_):(_=r(_,g),_.return=u,_)}function l(u,_,g,S){var C=g.type;return C===cs?f(u,_,g.props.children,S,g.key):_!==null&&(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Pi&&Ah(C)===_.type)?(S=r(_,g.props),S.ref=ro(u,_,g),S.return=u,S):(S=ol(g.type,g.key,g.props,null,u.mode,S),S.ref=ro(u,_,g),S.return=u,S)}function c(u,_,g,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=Vc(g,u.mode,S),_.return=u,_):(_=r(_,g.children||[]),_.return=u,_)}function f(u,_,g,S,C){return _===null||_.tag!==7?(_=wr(g,u.mode,S,C),_.return=u,_):(_=r(_,g),_.return=u,_)}function d(u,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Hc(""+_,u.mode,g),_.return=u,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ca:return g=ol(_.type,_.key,_.props,null,u.mode,g),g.ref=ro(u,null,_),g.return=u,g;case ls:return _=Vc(_,u.mode,g),_.return=u,_;case Pi:var S=_._init;return d(u,S(_._payload),g)}if(mo(_)||Js(_))return _=wr(_,u.mode,g,null),_.return=u,_;ya(u,_)}return null}function h(u,_,g,S){var C=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(u,_,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ca:return g.key===C?l(u,_,g,S):null;case ls:return g.key===C?c(u,_,g,S):null;case Pi:return C=g._init,h(u,_,C(g._payload),S)}if(mo(g)||Js(g))return C!==null?null:f(u,_,g,S,null);ya(u,g)}return null}function m(u,_,g,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(g)||null,a(_,u,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ca:return u=u.get(S.key===null?g:S.key)||null,l(_,u,S,C);case ls:return u=u.get(S.key===null?g:S.key)||null,c(_,u,S,C);case Pi:var R=S._init;return m(u,_,g,R(S._payload),C)}if(mo(S)||Js(S))return u=u.get(g)||null,f(_,u,S,C,null);ya(_,S)}return null}function v(u,_,g,S){for(var C=null,R=null,T=_,L=_=0,w=null;T!==null&&L<g.length;L++){T.index>L?(w=T,T=null):w=T.sibling;var E=h(u,T,g[L],S);if(E===null){T===null&&(T=w);break}t&&T&&E.alternate===null&&e(u,T),_=s(E,_,L),R===null?C=E:R.sibling=E,R=E,T=w}if(L===g.length)return n(u,T),ft&&fr(u,L),C;if(T===null){for(;L<g.length;L++)T=d(u,g[L],S),T!==null&&(_=s(T,_,L),R===null?C=T:R.sibling=T,R=T);return ft&&fr(u,L),C}for(T=i(u,T);L<g.length;L++)w=m(T,u,L,g[L],S),w!==null&&(t&&w.alternate!==null&&T.delete(w.key===null?L:w.key),_=s(w,_,L),R===null?C=w:R.sibling=w,R=w);return t&&T.forEach(function(U){return e(u,U)}),ft&&fr(u,L),C}function x(u,_,g,S){var C=Js(g);if(typeof C!="function")throw Error(oe(150));if(g=C.call(g),g==null)throw Error(oe(151));for(var R=C=null,T=_,L=_=0,w=null,E=g.next();T!==null&&!E.done;L++,E=g.next()){T.index>L?(w=T,T=null):w=T.sibling;var U=h(u,T,E.value,S);if(U===null){T===null&&(T=w);break}t&&T&&U.alternate===null&&e(u,T),_=s(U,_,L),R===null?C=U:R.sibling=U,R=U,T=w}if(E.done)return n(u,T),ft&&fr(u,L),C;if(T===null){for(;!E.done;L++,E=g.next())E=d(u,E.value,S),E!==null&&(_=s(E,_,L),R===null?C=E:R.sibling=E,R=E);return ft&&fr(u,L),C}for(T=i(u,T);!E.done;L++,E=g.next())E=m(T,u,L,E.value,S),E!==null&&(t&&E.alternate!==null&&T.delete(E.key===null?L:E.key),_=s(E,_,L),R===null?C=E:R.sibling=E,R=E);return t&&T.forEach(function(W){return e(u,W)}),ft&&fr(u,L),C}function p(u,_,g,S){if(typeof g=="object"&&g!==null&&g.type===cs&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ca:e:{for(var C=g.key,R=_;R!==null;){if(R.key===C){if(C=g.type,C===cs){if(R.tag===7){n(u,R.sibling),_=r(R,g.props.children),_.return=u,u=_;break e}}else if(R.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Pi&&Ah(C)===R.type){n(u,R.sibling),_=r(R,g.props),_.ref=ro(u,R,g),_.return=u,u=_;break e}n(u,R);break}else e(u,R);R=R.sibling}g.type===cs?(_=wr(g.props.children,u.mode,S,g.key),_.return=u,u=_):(S=ol(g.type,g.key,g.props,null,u.mode,S),S.ref=ro(u,_,g),S.return=u,u=S)}return o(u);case ls:e:{for(R=g.key;_!==null;){if(_.key===R)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(u,_.sibling),_=r(_,g.children||[]),_.return=u,u=_;break e}else{n(u,_);break}else e(u,_);_=_.sibling}_=Vc(g,u.mode,S),_.return=u,u=_}return o(u);case Pi:return R=g._init,p(u,_,R(g._payload),S)}if(mo(g))return v(u,_,g,S);if(Js(g))return x(u,_,g,S);ya(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(n(u,_.sibling),_=r(_,g),_.return=u,u=_):(n(u,_),_=Hc(g,u.mode,S),_.return=u,u=_),o(u)):n(u,_)}return p}var Ns=r_(!0),s_=r_(!1),Tl=tr(null),Al=null,_s=null,nd=null;function id(){nd=_s=Al=null}function rd(t){var e=Tl.current;ct(Tl),t._currentValue=e}function rf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ts(t,e){Al=t,nd=_s=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(tn=!0),t.firstContext=null)}function Rn(t){var e=t._currentValue;if(nd!==t)if(t={context:t,memoizedValue:e,next:null},_s===null){if(Al===null)throw Error(oe(308));_s=t,Al.dependencies={lanes:0,firstContext:t}}else _s=_s.next=t;return e}var _r=null;function sd(t){_r===null?_r=[t]:_r.push(t)}function o_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,sd(e)):(n.next=r.next,r.next=n),e.interleaved=n,_i(t,i)}function _i(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Li=!1;function od(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function a_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function pi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Gi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,_i(t,n)}return r=i.interleaved,r===null?(e.next=e,sd(i)):(e.next=r.next,r.next=e),i.interleaved=e,_i(t,n)}function el(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,jf(t,n)}}function Rh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Rl(t,e,n,i){var r=t.updateQueue;Li=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=c=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,x=a;switch(h=e,m=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(m,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,h=typeof v=="function"?v.call(m,d,h):v,h==null)break e;d=mt({},d,h);break e;case 2:Li=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=m,l=d):f=f.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Pr|=o,t.lanes=o,t.memoizedState=d}}function Ch(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var Zo={},Zn=tr(Zo),Bo=tr(Zo),zo=tr(Zo);function vr(t){if(t===Zo)throw Error(oe(174));return t}function ad(t,e){switch(st(zo,e),st(Bo,t),st(Zn,Zo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Fu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Fu(e,t)}ct(Zn),st(Zn,e)}function Us(){ct(Zn),ct(Bo),ct(zo)}function l_(t){vr(zo.current);var e=vr(Zn.current),n=Fu(e,t.type);e!==n&&(st(Bo,t),st(Zn,n))}function ld(t){Bo.current===t&&(ct(Zn),ct(Bo))}var ht=tr(0);function Cl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ic=[];function cd(){for(var t=0;t<Ic.length;t++)Ic[t]._workInProgressVersionPrimary=null;Ic.length=0}var tl=xi.ReactCurrentDispatcher,Oc=xi.ReactCurrentBatchConfig,br=0,pt=null,Mt=null,bt=null,bl=!1,wo=!1,Ho=0,oy=0;function kt(){throw Error(oe(321))}function ud(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!zn(t[n],e[n]))return!1;return!0}function fd(t,e,n,i,r,s){if(br=s,pt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tl.current=t===null||t.memoizedState===null?uy:fy,t=n(i,r),wo){s=0;do{if(wo=!1,Ho=0,25<=s)throw Error(oe(301));s+=1,bt=Mt=null,e.updateQueue=null,tl.current=dy,t=n(i,r)}while(wo)}if(tl.current=Pl,e=Mt!==null&&Mt.next!==null,br=0,bt=Mt=pt=null,bl=!1,e)throw Error(oe(300));return t}function dd(){var t=Ho!==0;return Ho=0,t}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?pt.memoizedState=bt=t:bt=bt.next=t,bt}function Cn(){if(Mt===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=Mt.next;var e=bt===null?pt.memoizedState:bt.next;if(e!==null)bt=e,Mt=t;else{if(t===null)throw Error(oe(310));Mt=t,t={memoizedState:Mt.memoizedState,baseState:Mt.baseState,baseQueue:Mt.baseQueue,queue:Mt.queue,next:null},bt===null?pt.memoizedState=bt=t:bt=bt.next=t}return bt}function Vo(t,e){return typeof e=="function"?e(t):e}function Fc(t){var e=Cn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=Mt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((br&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,pt.lanes|=f,Pr|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,zn(i,e.memoizedState)||(tn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,pt.lanes|=s,Pr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function kc(t){var e=Cn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);zn(s,e.memoizedState)||(tn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function c_(){}function u_(t,e){var n=pt,i=Cn(),r=e(),s=!zn(i.memoizedState,r);if(s&&(i.memoizedState=r,tn=!0),i=i.queue,hd(h_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||bt!==null&&bt.memoizedState.tag&1){if(n.flags|=2048,Go(9,d_.bind(null,n,i,r,e),void 0,null),Lt===null)throw Error(oe(349));br&30||f_(n,e,r)}return r}function f_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function d_(t,e,n,i){e.value=n,e.getSnapshot=i,p_(e)&&m_(t)}function h_(t,e,n){return n(function(){p_(e)&&m_(t)})}function p_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!zn(t,n)}catch{return!0}}function m_(t){var e=_i(t,1);e!==null&&Bn(e,t,1,-1)}function bh(t){var e=Wn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:t},e.queue=t,t=t.dispatch=cy.bind(null,pt,t),[e.memoizedState,t]}function Go(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function g_(){return Cn().memoizedState}function nl(t,e,n,i){var r=Wn();pt.flags|=t,r.memoizedState=Go(1|e,n,void 0,i===void 0?null:i)}function Ql(t,e,n,i){var r=Cn();i=i===void 0?null:i;var s=void 0;if(Mt!==null){var o=Mt.memoizedState;if(s=o.destroy,i!==null&&ud(i,o.deps)){r.memoizedState=Go(e,n,s,i);return}}pt.flags|=t,r.memoizedState=Go(1|e,n,s,i)}function Ph(t,e){return nl(8390656,8,t,e)}function hd(t,e){return Ql(2048,8,t,e)}function __(t,e){return Ql(4,2,t,e)}function v_(t,e){return Ql(4,4,t,e)}function x_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function y_(t,e,n){return n=n!=null?n.concat([t]):null,Ql(4,4,x_.bind(null,e,t),n)}function pd(){}function S_(t,e){var n=Cn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ud(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function E_(t,e){var n=Cn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ud(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function M_(t,e,n){return br&21?(zn(n,e)||(n=Cg(),pt.lanes|=n,Pr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,tn=!0),t.memoizedState=n)}function ay(t,e){var n=tt;tt=n!==0&&4>n?n:4,t(!0);var i=Oc.transition;Oc.transition={};try{t(!1),e()}finally{tt=n,Oc.transition=i}}function w_(){return Cn().memoizedState}function ly(t,e,n){var i=ji(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},T_(t))A_(e,n);else if(n=o_(t,e,n,i),n!==null){var r=Kt();Bn(n,t,i,r),R_(n,e,i)}}function cy(t,e,n){var i=ji(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(T_(t))A_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,zn(a,o)){var l=e.interleaved;l===null?(r.next=r,sd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=o_(t,e,r,i),n!==null&&(r=Kt(),Bn(n,t,i,r),R_(n,e,i))}}function T_(t){var e=t.alternate;return t===pt||e!==null&&e===pt}function A_(t,e){wo=bl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function R_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,jf(t,n)}}var Pl={readContext:Rn,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},uy={readContext:Rn,useCallback:function(t,e){return Wn().memoizedState=[t,e===void 0?null:e],t},useContext:Rn,useEffect:Ph,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,nl(4194308,4,x_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return nl(4,2,t,e)},useMemo:function(t,e){var n=Wn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Wn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ly.bind(null,pt,t),[i.memoizedState,t]},useRef:function(t){var e=Wn();return t={current:t},e.memoizedState=t},useState:bh,useDebugValue:pd,useDeferredValue:function(t){return Wn().memoizedState=t},useTransition:function(){var t=bh(!1),e=t[0];return t=ay.bind(null,t[1]),Wn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=pt,r=Wn();if(ft){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),Lt===null)throw Error(oe(349));br&30||f_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Ph(h_.bind(null,i,s,t),[t]),i.flags|=2048,Go(9,d_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Wn(),e=Lt.identifierPrefix;if(ft){var n=di,i=fi;n=(i&~(1<<32-kn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ho++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=oy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},fy={readContext:Rn,useCallback:S_,useContext:Rn,useEffect:hd,useImperativeHandle:y_,useInsertionEffect:__,useLayoutEffect:v_,useMemo:E_,useReducer:Fc,useRef:g_,useState:function(){return Fc(Vo)},useDebugValue:pd,useDeferredValue:function(t){var e=Cn();return M_(e,Mt.memoizedState,t)},useTransition:function(){var t=Fc(Vo)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:c_,useSyncExternalStore:u_,useId:w_,unstable_isNewReconciler:!1},dy={readContext:Rn,useCallback:S_,useContext:Rn,useEffect:hd,useImperativeHandle:y_,useInsertionEffect:__,useLayoutEffect:v_,useMemo:E_,useReducer:kc,useRef:g_,useState:function(){return kc(Vo)},useDebugValue:pd,useDeferredValue:function(t){var e=Cn();return Mt===null?e.memoizedState=t:M_(e,Mt.memoizedState,t)},useTransition:function(){var t=kc(Vo)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:c_,useSyncExternalStore:u_,useId:w_,unstable_isNewReconciler:!1};function Nn(t,e){if(t&&t.defaultProps){e=mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function sf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Jl={isMounted:function(t){return(t=t._reactInternals)?Fr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=ji(t),s=pi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Gi(t,s,r),e!==null&&(Bn(e,t,r,i),el(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=ji(t),s=pi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Gi(t,s,r),e!==null&&(Bn(e,t,r,i),el(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Kt(),i=ji(t),r=pi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Gi(t,r,i),e!==null&&(Bn(e,t,i,n),el(e,t,i))}};function Lh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Io(n,i)||!Io(r,s):!0}function C_(t,e,n){var i=!1,r=Ki,s=e.contextType;return typeof s=="object"&&s!==null?s=Rn(s):(r=rn(e)?Rr:Xt.current,i=e.contextTypes,s=(i=i!=null)?Ls(t,r):Ki),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Jl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Dh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Jl.enqueueReplaceState(e,e.state,null)}function of(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},od(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Rn(s):(s=rn(e)?Rr:Xt.current,r.context=Ls(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(sf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Jl.enqueueReplaceState(r,r.state,null),Rl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Is(t,e){try{var n="",i=e;do n+=z0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Bc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function af(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var hy=typeof WeakMap=="function"?WeakMap:Map;function b_(t,e,n){n=pi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Dl||(Dl=!0,_f=i),af(t,e)},n}function P_(t,e,n){n=pi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){af(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){af(t,e),typeof i!="function"&&(Wi===null?Wi=new Set([this]):Wi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Nh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new hy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Ry.bind(null,t,e,n),e.then(t,t))}function Uh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ih(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=pi(-1,1),e.tag=2,Gi(n,e,1))),n.lanes|=1),t)}var py=xi.ReactCurrentOwner,tn=!1;function Yt(t,e,n,i){e.child=t===null?s_(e,null,n,i):Ns(e,t.child,n,i)}function Oh(t,e,n,i,r){n=n.render;var s=e.ref;return Ts(e,r),i=fd(t,e,n,i,s,r),n=dd(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,vi(t,e,r)):(ft&&n&&Jf(e),e.flags|=1,Yt(t,e,i,r),e.child)}function Fh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Ed(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,L_(t,e,s,i,r)):(t=ol(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Io,n(o,i)&&t.ref===e.ref)return vi(t,e,r)}return e.flags|=1,t=Xi(s,i),t.ref=e.ref,t.return=e,e.child=t}function L_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Io(s,i)&&t.ref===e.ref)if(tn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(tn=!0);else return e.lanes=t.lanes,vi(t,e,r)}return lf(t,e,n,i,r)}function D_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(xs,dn),dn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,st(xs,dn),dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,st(xs,dn),dn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,st(xs,dn),dn|=i;return Yt(t,e,r,n),e.child}function N_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function lf(t,e,n,i,r){var s=rn(n)?Rr:Xt.current;return s=Ls(e,s),Ts(e,r),n=fd(t,e,n,i,s,r),i=dd(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,vi(t,e,r)):(ft&&i&&Jf(e),e.flags|=1,Yt(t,e,n,r),e.child)}function kh(t,e,n,i,r){if(rn(n)){var s=!0;El(e)}else s=!1;if(Ts(e,r),e.stateNode===null)il(t,e),C_(e,n,i),of(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Rn(c):(c=rn(n)?Rr:Xt.current,c=Ls(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Dh(e,o,i,c),Li=!1;var h=e.memoizedState;o.state=h,Rl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||nn.current||Li?(typeof f=="function"&&(sf(e,n,f,i),l=e.memoizedState),(a=Li||Lh(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,a_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Nn(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Rn(l):(l=rn(n)?Rr:Xt.current,l=Ls(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Dh(e,o,i,l),Li=!1,h=e.memoizedState,o.state=h,Rl(e,i,o,r);var v=e.memoizedState;a!==d||h!==v||nn.current||Li?(typeof m=="function"&&(sf(e,n,m,i),v=e.memoizedState),(c=Li||Lh(e,n,c,i,h,v,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return cf(t,e,n,i,s,r)}function cf(t,e,n,i,r,s){N_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Mh(e,n,!1),vi(t,e,s);i=e.stateNode,py.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ns(e,t.child,null,s),e.child=Ns(e,null,a,s)):Yt(t,e,a,s),e.memoizedState=i.state,r&&Mh(e,n,!0),e.child}function U_(t){var e=t.stateNode;e.pendingContext?Eh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Eh(t,e.context,!1),ad(t,e.containerInfo)}function Bh(t,e,n,i,r){return Ds(),td(r),e.flags|=256,Yt(t,e,n,i),e.child}var uf={dehydrated:null,treeContext:null,retryLane:0};function ff(t){return{baseLanes:t,cachePool:null,transitions:null}}function I_(t,e,n){var i=e.pendingProps,r=ht.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),st(ht,r&1),t===null)return nf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=nc(o,i,0,null),t=wr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ff(n),e.memoizedState=uf,t):md(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return my(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Xi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Xi(a,s):(s=wr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?ff(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=uf,i}return s=t.child,t=s.sibling,i=Xi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function md(t,e){return e=nc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Sa(t,e,n,i){return i!==null&&td(i),Ns(e,t.child,null,n),t=md(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function my(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Bc(Error(oe(422))),Sa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=nc({mode:"visible",children:i.children},r,0,null),s=wr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ns(e,t.child,null,o),e.child.memoizedState=ff(o),e.memoizedState=uf,s);if(!(e.mode&1))return Sa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(oe(419)),i=Bc(s,i,void 0),Sa(t,e,o,i)}if(a=(o&t.childLanes)!==0,tn||a){if(i=Lt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,_i(t,r),Bn(i,t,r,-1))}return Sd(),i=Bc(Error(oe(421))),Sa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Cy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,hn=Vi(r.nextSibling),pn=e,ft=!0,In=null,t!==null&&(Sn[En++]=fi,Sn[En++]=di,Sn[En++]=Cr,fi=t.id,di=t.overflow,Cr=e),e=md(e,i.children),e.flags|=4096,e)}function zh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),rf(t.return,e,n)}function zc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function O_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Yt(t,e,i.children,n),i=ht.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zh(t,n,e);else if(t.tag===19)zh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(st(ht,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Cl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),zc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Cl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}zc(e,!0,n,null,s);break;case"together":zc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function il(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Pr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=Xi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Xi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function gy(t,e,n){switch(e.tag){case 3:U_(e),Ds();break;case 5:l_(e);break;case 1:rn(e.type)&&El(e);break;case 4:ad(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(Tl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(ht,ht.current&1),e.flags|=128,null):n&e.child.childLanes?I_(t,e,n):(st(ht,ht.current&1),t=vi(t,e,n),t!==null?t.sibling:null);st(ht,ht.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return O_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(ht,ht.current),i)break;return null;case 22:case 23:return e.lanes=0,D_(t,e,n)}return vi(t,e,n)}var F_,df,k_,B_;F_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};df=function(){};k_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,vr(Zn.current);var s=null;switch(n){case"input":r=Nu(t,r),i=Nu(t,i),s=[];break;case"select":r=mt({},r,{value:void 0}),i=mt({},i,{value:void 0}),s=[];break;case"textarea":r=Ou(t,r),i=Ou(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=yl)}ku(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Co.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Co.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&at("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};B_=function(t,e,n,i){n!==i&&(e.flags|=4)};function so(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function _y(t,e,n){var i=e.pendingProps;switch(ed(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return rn(e.type)&&Sl(),Bt(e),null;case 3:return i=e.stateNode,Us(),ct(nn),ct(Xt),cd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(xa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,In!==null&&(yf(In),In=null))),df(t,e),Bt(e),null;case 5:ld(e);var r=vr(zo.current);if(n=e.type,t!==null&&e.stateNode!=null)k_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return Bt(e),null}if(t=vr(Zn.current),xa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[qn]=e,i[ko]=s,t=(e.mode&1)!==0,n){case"dialog":at("cancel",i),at("close",i);break;case"iframe":case"object":case"embed":at("load",i);break;case"video":case"audio":for(r=0;r<_o.length;r++)at(_o[r],i);break;case"source":at("error",i);break;case"img":case"image":case"link":at("error",i),at("load",i);break;case"details":at("toggle",i);break;case"input":$d(i,s),at("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},at("invalid",i);break;case"textarea":Zd(i,s),at("invalid",i)}ku(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&va(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&va(i.textContent,a,t),r=["children",""+a]):Co.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&at("scroll",i)}switch(n){case"input":ua(i),Kd(i,s,!0);break;case"textarea":ua(i),Qd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=yl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=hg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[qn]=e,t[ko]=i,F_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Bu(n,i),n){case"dialog":at("cancel",t),at("close",t),r=i;break;case"iframe":case"object":case"embed":at("load",t),r=i;break;case"video":case"audio":for(r=0;r<_o.length;r++)at(_o[r],t);r=i;break;case"source":at("error",t),r=i;break;case"img":case"image":case"link":at("error",t),at("load",t),r=i;break;case"details":at("toggle",t),r=i;break;case"input":$d(t,i),r=Nu(t,i),at("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=mt({},i,{value:void 0}),at("invalid",t);break;case"textarea":Zd(t,i),r=Ou(t,i),at("invalid",t);break;default:r=i}ku(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?gg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&pg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&bo(t,l):typeof l=="number"&&bo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Co.hasOwnProperty(s)?l!=null&&s==="onScroll"&&at("scroll",t):l!=null&&Bf(t,s,l,o))}switch(n){case"input":ua(t),Kd(t,i,!1);break;case"textarea":ua(t),Qd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+$i(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ss(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ss(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=yl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Bt(e),null;case 6:if(t&&e.stateNode!=null)B_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=vr(zo.current),vr(Zn.current),xa(e)){if(i=e.stateNode,n=e.memoizedProps,i[qn]=e,(s=i.nodeValue!==n)&&(t=pn,t!==null))switch(t.tag){case 3:va(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&va(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[qn]=e,e.stateNode=i}return Bt(e),null;case 13:if(ct(ht),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&hn!==null&&e.mode&1&&!(e.flags&128))i_(),Ds(),e.flags|=98560,s=!1;else if(s=xa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[qn]=e}else Ds(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Bt(e),s=!1}else In!==null&&(yf(In),In=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ht.current&1?wt===0&&(wt=3):Sd())),e.updateQueue!==null&&(e.flags|=4),Bt(e),null);case 4:return Us(),df(t,e),t===null&&Oo(e.stateNode.containerInfo),Bt(e),null;case 10:return rd(e.type._context),Bt(e),null;case 17:return rn(e.type)&&Sl(),Bt(e),null;case 19:if(ct(ht),s=e.memoizedState,s===null)return Bt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)so(s,!1);else{if(wt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Cl(t),o!==null){for(e.flags|=128,so(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return st(ht,ht.current&1|2),e.child}t=t.sibling}s.tail!==null&&_t()>Os&&(e.flags|=128,i=!0,so(s,!1),e.lanes=4194304)}else{if(!i)if(t=Cl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),so(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ft)return Bt(e),null}else 2*_t()-s.renderingStartTime>Os&&n!==1073741824&&(e.flags|=128,i=!0,so(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=_t(),e.sibling=null,n=ht.current,st(ht,i?n&1|2:n&1),e):(Bt(e),null);case 22:case 23:return yd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?dn&1073741824&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function vy(t,e){switch(ed(e),e.tag){case 1:return rn(e.type)&&Sl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Us(),ct(nn),ct(Xt),cd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ld(e),null;case 13:if(ct(ht),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));Ds()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ct(ht),null;case 4:return Us(),null;case 10:return rd(e.type._context),null;case 22:case 23:return yd(),null;case 24:return null;default:return null}}var Ea=!1,Gt=!1,xy=typeof WeakSet=="function"?WeakSet:Set,_e=null;function vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){gt(t,e,i)}else n.current=null}function hf(t,e,n){try{n()}catch(i){gt(t,e,i)}}var Hh=!1;function yy(t,e){if($u=_l,t=Wg(),Qf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,d=t,h=null;t:for(;;){for(var m;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++f===i&&(l=o),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ku={focusedElem:t,selectionRange:n},_l=!1,_e=e;_e!==null;)if(e=_e,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,_e=t;else for(;_e!==null;){e=_e;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,p=v.memoizedState,u=e.stateNode,_=u.getSnapshotBeforeUpdate(e.elementType===e.type?x:Nn(e.type,x),p);u.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(S){gt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,_e=t;break}_e=e.return}return v=Hh,Hh=!1,v}function To(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&hf(e,n,s)}r=r.next}while(r!==i)}}function ec(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function pf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function z_(t){var e=t.alternate;e!==null&&(t.alternate=null,z_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[qn],delete e[ko],delete e[Ju],delete e[ny],delete e[iy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function H_(t){return t.tag===5||t.tag===3||t.tag===4}function Vh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||H_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function mf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=yl));else if(i!==4&&(t=t.child,t!==null))for(mf(t,e,n),t=t.sibling;t!==null;)mf(t,e,n),t=t.sibling}function gf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(gf(t,e,n),t=t.sibling;t!==null;)gf(t,e,n),t=t.sibling}var Dt=null,Un=!1;function Mi(t,e,n){for(n=n.child;n!==null;)V_(t,e,n),n=n.sibling}function V_(t,e,n){if(Kn&&typeof Kn.onCommitFiberUnmount=="function")try{Kn.onCommitFiberUnmount(Xl,n)}catch{}switch(n.tag){case 5:Gt||vs(n,e);case 6:var i=Dt,r=Un;Dt=null,Mi(t,e,n),Dt=i,Un=r,Dt!==null&&(Un?(t=Dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Dt.removeChild(n.stateNode));break;case 18:Dt!==null&&(Un?(t=Dt,n=n.stateNode,t.nodeType===8?Nc(t.parentNode,n):t.nodeType===1&&Nc(t,n),No(t)):Nc(Dt,n.stateNode));break;case 4:i=Dt,r=Un,Dt=n.stateNode.containerInfo,Un=!0,Mi(t,e,n),Dt=i,Un=r;break;case 0:case 11:case 14:case 15:if(!Gt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&hf(n,e,o),r=r.next}while(r!==i)}Mi(t,e,n);break;case 1:if(!Gt&&(vs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){gt(n,e,a)}Mi(t,e,n);break;case 21:Mi(t,e,n);break;case 22:n.mode&1?(Gt=(i=Gt)||n.memoizedState!==null,Mi(t,e,n),Gt=i):Mi(t,e,n);break;default:Mi(t,e,n)}}function Gh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new xy),e.forEach(function(i){var r=by.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function bn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Dt=a.stateNode,Un=!1;break e;case 3:Dt=a.stateNode.containerInfo,Un=!0;break e;case 4:Dt=a.stateNode.containerInfo,Un=!0;break e}a=a.return}if(Dt===null)throw Error(oe(160));V_(s,o,r),Dt=null,Un=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){gt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)G_(e,t),e=e.sibling}function G_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(bn(e,t),Vn(t),i&4){try{To(3,t,t.return),ec(3,t)}catch(x){gt(t,t.return,x)}try{To(5,t,t.return)}catch(x){gt(t,t.return,x)}}break;case 1:bn(e,t),Vn(t),i&512&&n!==null&&vs(n,n.return);break;case 5:if(bn(e,t),Vn(t),i&512&&n!==null&&vs(n,n.return),t.flags&32){var r=t.stateNode;try{bo(r,"")}catch(x){gt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&fg(r,s),Bu(a,o);var c=Bu(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?gg(r,d):f==="dangerouslySetInnerHTML"?pg(r,d):f==="children"?bo(r,d):Bf(r,f,d,c)}switch(a){case"input":Uu(r,s);break;case"textarea":dg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ss(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ss(r,!!s.multiple,s.defaultValue,!0):Ss(r,!!s.multiple,s.multiple?[]:"",!1))}r[ko]=s}catch(x){gt(t,t.return,x)}}break;case 6:if(bn(e,t),Vn(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){gt(t,t.return,x)}}break;case 3:if(bn(e,t),Vn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{No(e.containerInfo)}catch(x){gt(t,t.return,x)}break;case 4:bn(e,t),Vn(t);break;case 13:bn(e,t),Vn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(vd=_t())),i&4&&Gh(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Gt=(c=Gt)||f,bn(e,t),Gt=c):bn(e,t),Vn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(_e=t,f=t.child;f!==null;){for(d=_e=f;_e!==null;){switch(h=_e,m=h.child,h.tag){case 0:case 11:case 14:case 15:To(4,h,h.return);break;case 1:vs(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){gt(i,n,x)}}break;case 5:vs(h,h.return);break;case 22:if(h.memoizedState!==null){jh(d);continue}}m!==null?(m.return=h,_e=m):jh(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=mg("display",o))}catch(x){gt(t,t.return,x)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){gt(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:bn(e,t),Vn(t),i&4&&Gh(t);break;case 21:break;default:bn(e,t),Vn(t)}}function Vn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(H_(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(bo(r,""),i.flags&=-33);var s=Vh(t);gf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Vh(t);mf(t,a,o);break;default:throw Error(oe(161))}}catch(l){gt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Sy(t,e,n){_e=t,W_(t)}function W_(t,e,n){for(var i=(t.mode&1)!==0;_e!==null;){var r=_e,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ea;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Gt;a=Ea;var c=Gt;if(Ea=o,(Gt=l)&&!c)for(_e=r;_e!==null;)o=_e,l=o.child,o.tag===22&&o.memoizedState!==null?Xh(r):l!==null?(l.return=o,_e=l):Xh(r);for(;s!==null;)_e=s,W_(s),s=s.sibling;_e=r,Ea=a,Gt=c}Wh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,_e=s):Wh(t)}}function Wh(t){for(;_e!==null;){var e=_e;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Gt||ec(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Gt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Nn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ch(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ch(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&No(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}Gt||e.flags&512&&pf(e)}catch(h){gt(e,e.return,h)}}if(e===t){_e=null;break}if(n=e.sibling,n!==null){n.return=e.return,_e=n;break}_e=e.return}}function jh(t){for(;_e!==null;){var e=_e;if(e===t){_e=null;break}var n=e.sibling;if(n!==null){n.return=e.return,_e=n;break}_e=e.return}}function Xh(t){for(;_e!==null;){var e=_e;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ec(4,e)}catch(l){gt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){gt(e,r,l)}}var s=e.return;try{pf(e)}catch(l){gt(e,s,l)}break;case 5:var o=e.return;try{pf(e)}catch(l){gt(e,o,l)}}}catch(l){gt(e,e.return,l)}if(e===t){_e=null;break}var a=e.sibling;if(a!==null){a.return=e.return,_e=a;break}_e=e.return}}var Ey=Math.ceil,Ll=xi.ReactCurrentDispatcher,gd=xi.ReactCurrentOwner,An=xi.ReactCurrentBatchConfig,$e=0,Lt=null,Et=null,Ut=0,dn=0,xs=tr(0),wt=0,Wo=null,Pr=0,tc=0,_d=0,Ao=null,en=null,vd=0,Os=1/0,li=null,Dl=!1,_f=null,Wi=null,Ma=!1,Fi=null,Nl=0,Ro=0,vf=null,rl=-1,sl=0;function Kt(){return $e&6?_t():rl!==-1?rl:rl=_t()}function ji(t){return t.mode&1?$e&2&&Ut!==0?Ut&-Ut:sy.transition!==null?(sl===0&&(sl=Cg()),sl):(t=tt,t!==0||(t=window.event,t=t===void 0?16:Ig(t.type)),t):1}function Bn(t,e,n,i){if(50<Ro)throw Ro=0,vf=null,Error(oe(185));Yo(t,n,i),(!($e&2)||t!==Lt)&&(t===Lt&&(!($e&2)&&(tc|=n),wt===4&&Ui(t,Ut)),sn(t,i),n===1&&$e===0&&!(e.mode&1)&&(Os=_t()+500,Zl&&nr()))}function sn(t,e){var n=t.callbackNode;sx(t,e);var i=gl(t,t===Lt?Ut:0);if(i===0)n!==null&&th(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&th(n),e===1)t.tag===0?ry(qh.bind(null,t)):e_(qh.bind(null,t)),ey(function(){!($e&6)&&nr()}),n=null;else{switch(bg(i)){case 1:n=Wf;break;case 4:n=Ag;break;case 16:n=ml;break;case 536870912:n=Rg;break;default:n=ml}n=Q_(n,j_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function j_(t,e){if(rl=-1,sl=0,$e&6)throw Error(oe(327));var n=t.callbackNode;if(As()&&t.callbackNode!==n)return null;var i=gl(t,t===Lt?Ut:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ul(t,i);else{e=i;var r=$e;$e|=2;var s=q_();(Lt!==t||Ut!==e)&&(li=null,Os=_t()+500,Mr(t,e));do try{Ty();break}catch(a){X_(t,a)}while(!0);id(),Ll.current=s,$e=r,Et!==null?e=0:(Lt=null,Ut=0,e=wt)}if(e!==0){if(e===2&&(r=Wu(t),r!==0&&(i=r,e=xf(t,r))),e===1)throw n=Wo,Mr(t,0),Ui(t,i),sn(t,_t()),n;if(e===6)Ui(t,i);else{if(r=t.current.alternate,!(i&30)&&!My(r)&&(e=Ul(t,i),e===2&&(s=Wu(t),s!==0&&(i=s,e=xf(t,s))),e===1))throw n=Wo,Mr(t,0),Ui(t,i),sn(t,_t()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:dr(t,en,li);break;case 3:if(Ui(t,i),(i&130023424)===i&&(e=vd+500-_t(),10<e)){if(gl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Kt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Qu(dr.bind(null,t,en,li),e);break}dr(t,en,li);break;case 4:if(Ui(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-kn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=_t()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ey(i/1960))-i,10<i){t.timeoutHandle=Qu(dr.bind(null,t,en,li),i);break}dr(t,en,li);break;case 5:dr(t,en,li);break;default:throw Error(oe(329))}}}return sn(t,_t()),t.callbackNode===n?j_.bind(null,t):null}function xf(t,e){var n=Ao;return t.current.memoizedState.isDehydrated&&(Mr(t,e).flags|=256),t=Ul(t,e),t!==2&&(e=en,en=n,e!==null&&yf(e)),t}function yf(t){en===null?en=t:en.push.apply(en,t)}function My(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!zn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ui(t,e){for(e&=~_d,e&=~tc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-kn(e),i=1<<n;t[n]=-1,e&=~i}}function qh(t){if($e&6)throw Error(oe(327));As();var e=gl(t,0);if(!(e&1))return sn(t,_t()),null;var n=Ul(t,e);if(t.tag!==0&&n===2){var i=Wu(t);i!==0&&(e=i,n=xf(t,i))}if(n===1)throw n=Wo,Mr(t,0),Ui(t,e),sn(t,_t()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,dr(t,en,li),sn(t,_t()),null}function xd(t,e){var n=$e;$e|=1;try{return t(e)}finally{$e=n,$e===0&&(Os=_t()+500,Zl&&nr())}}function Lr(t){Fi!==null&&Fi.tag===0&&!($e&6)&&As();var e=$e;$e|=1;var n=An.transition,i=tt;try{if(An.transition=null,tt=1,t)return t()}finally{tt=i,An.transition=n,$e=e,!($e&6)&&nr()}}function yd(){dn=xs.current,ct(xs)}function Mr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Jx(n)),Et!==null)for(n=Et.return;n!==null;){var i=n;switch(ed(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Sl();break;case 3:Us(),ct(nn),ct(Xt),cd();break;case 5:ld(i);break;case 4:Us();break;case 13:ct(ht);break;case 19:ct(ht);break;case 10:rd(i.type._context);break;case 22:case 23:yd()}n=n.return}if(Lt=t,Et=t=Xi(t.current,null),Ut=dn=e,wt=0,Wo=null,_d=tc=Pr=0,en=Ao=null,_r!==null){for(e=0;e<_r.length;e++)if(n=_r[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}_r=null}return t}function X_(t,e){do{var n=Et;try{if(id(),tl.current=Pl,bl){for(var i=pt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}bl=!1}if(br=0,bt=Mt=pt=null,wo=!1,Ho=0,gd.current=null,n===null||n.return===null){wt=1,Wo=e,Et=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ut,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=Uh(o);if(m!==null){m.flags&=-257,Ih(m,o,a,s,e),m.mode&1&&Nh(s,c,e),e=m,l=c;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){Nh(s,c,e),Sd();break e}l=Error(oe(426))}}else if(ft&&a.mode&1){var p=Uh(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Ih(p,o,a,s,e),td(Is(l,a));break e}}s=l=Is(l,a),wt!==4&&(wt=2),Ao===null?Ao=[s]:Ao.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=b_(s,l,e);Rh(s,u);break e;case 1:a=l;var _=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Wi===null||!Wi.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=P_(s,a,e);Rh(s,S);break e}}s=s.return}while(s!==null)}$_(n)}catch(C){e=C,Et===n&&n!==null&&(Et=n=n.return);continue}break}while(!0)}function q_(){var t=Ll.current;return Ll.current=Pl,t===null?Pl:t}function Sd(){(wt===0||wt===3||wt===2)&&(wt=4),Lt===null||!(Pr&268435455)&&!(tc&268435455)||Ui(Lt,Ut)}function Ul(t,e){var n=$e;$e|=2;var i=q_();(Lt!==t||Ut!==e)&&(li=null,Mr(t,e));do try{wy();break}catch(r){X_(t,r)}while(!0);if(id(),$e=n,Ll.current=i,Et!==null)throw Error(oe(261));return Lt=null,Ut=0,wt}function wy(){for(;Et!==null;)Y_(Et)}function Ty(){for(;Et!==null&&!K0();)Y_(Et)}function Y_(t){var e=Z_(t.alternate,t,dn);t.memoizedProps=t.pendingProps,e===null?$_(t):Et=e,gd.current=null}function $_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=vy(n,e),n!==null){n.flags&=32767,Et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{wt=6,Et=null;return}}else if(n=_y(n,e,dn),n!==null){Et=n;return}if(e=e.sibling,e!==null){Et=e;return}Et=e=t}while(e!==null);wt===0&&(wt=5)}function dr(t,e,n){var i=tt,r=An.transition;try{An.transition=null,tt=1,Ay(t,e,n,i)}finally{An.transition=r,tt=i}return null}function Ay(t,e,n,i){do As();while(Fi!==null);if($e&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ox(t,s),t===Lt&&(Et=Lt=null,Ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ma||(Ma=!0,Q_(ml,function(){return As(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=An.transition,An.transition=null;var o=tt;tt=1;var a=$e;$e|=4,gd.current=null,yy(t,n),G_(n,t),Xx(Ku),_l=!!$u,Ku=$u=null,t.current=n,Sy(n),Z0(),$e=a,tt=o,An.transition=s}else t.current=n;if(Ma&&(Ma=!1,Fi=t,Nl=r),s=t.pendingLanes,s===0&&(Wi=null),ex(n.stateNode),sn(t,_t()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Dl)throw Dl=!1,t=_f,_f=null,t;return Nl&1&&t.tag!==0&&As(),s=t.pendingLanes,s&1?t===vf?Ro++:(Ro=0,vf=t):Ro=0,nr(),null}function As(){if(Fi!==null){var t=bg(Nl),e=An.transition,n=tt;try{if(An.transition=null,tt=16>t?16:t,Fi===null)var i=!1;else{if(t=Fi,Fi=null,Nl=0,$e&6)throw Error(oe(331));var r=$e;for($e|=4,_e=t.current;_e!==null;){var s=_e,o=s.child;if(_e.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(_e=c;_e!==null;){var f=_e;switch(f.tag){case 0:case 11:case 15:To(8,f,s)}var d=f.child;if(d!==null)d.return=f,_e=d;else for(;_e!==null;){f=_e;var h=f.sibling,m=f.return;if(z_(f),f===c){_e=null;break}if(h!==null){h.return=m,_e=h;break}_e=m}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var p=x.sibling;x.sibling=null,x=p}while(x!==null)}}_e=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,_e=o;else e:for(;_e!==null;){if(s=_e,s.flags&2048)switch(s.tag){case 0:case 11:case 15:To(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,_e=u;break e}_e=s.return}}var _=t.current;for(_e=_;_e!==null;){o=_e;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,_e=g;else e:for(o=_;_e!==null;){if(a=_e,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ec(9,a)}}catch(C){gt(a,a.return,C)}if(a===o){_e=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,_e=S;break e}_e=a.return}}if($e=r,nr(),Kn&&typeof Kn.onPostCommitFiberRoot=="function")try{Kn.onPostCommitFiberRoot(Xl,t)}catch{}i=!0}return i}finally{tt=n,An.transition=e}}return!1}function Yh(t,e,n){e=Is(n,e),e=b_(t,e,1),t=Gi(t,e,1),e=Kt(),t!==null&&(Yo(t,1,e),sn(t,e))}function gt(t,e,n){if(t.tag===3)Yh(t,t,n);else for(;e!==null;){if(e.tag===3){Yh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Wi===null||!Wi.has(i))){t=Is(n,t),t=P_(e,t,1),e=Gi(e,t,1),t=Kt(),e!==null&&(Yo(e,1,t),sn(e,t));break}}e=e.return}}function Ry(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Kt(),t.pingedLanes|=t.suspendedLanes&n,Lt===t&&(Ut&n)===n&&(wt===4||wt===3&&(Ut&130023424)===Ut&&500>_t()-vd?Mr(t,0):_d|=n),sn(t,e)}function K_(t,e){e===0&&(t.mode&1?(e=ha,ha<<=1,!(ha&130023424)&&(ha=4194304)):e=1);var n=Kt();t=_i(t,e),t!==null&&(Yo(t,e,n),sn(t,n))}function Cy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),K_(t,n)}function by(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),K_(t,n)}var Z_;Z_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||nn.current)tn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return tn=!1,gy(t,e,n);tn=!!(t.flags&131072)}else tn=!1,ft&&e.flags&1048576&&t_(e,wl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;il(t,e),t=e.pendingProps;var r=Ls(e,Xt.current);Ts(e,n),r=fd(null,e,i,t,r,n);var s=dd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,rn(i)?(s=!0,El(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,od(e),r.updater=Jl,e.stateNode=r,r._reactInternals=e,of(e,i,t,n),e=cf(null,e,i,!0,s,n)):(e.tag=0,ft&&s&&Jf(e),Yt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(il(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ly(i),t=Nn(i,t),r){case 0:e=lf(null,e,i,t,n);break e;case 1:e=kh(null,e,i,t,n);break e;case 11:e=Oh(null,e,i,t,n);break e;case 14:e=Fh(null,e,i,Nn(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),lf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),kh(t,e,i,r,n);case 3:e:{if(U_(e),t===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,a_(t,e),Rl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Is(Error(oe(423)),e),e=Bh(t,e,i,n,r);break e}else if(i!==r){r=Is(Error(oe(424)),e),e=Bh(t,e,i,n,r);break e}else for(hn=Vi(e.stateNode.containerInfo.firstChild),pn=e,ft=!0,In=null,n=s_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ds(),i===r){e=vi(t,e,n);break e}Yt(t,e,i,n)}e=e.child}return e;case 5:return l_(e),t===null&&nf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Zu(i,r)?o=null:s!==null&&Zu(i,s)&&(e.flags|=32),N_(t,e),Yt(t,e,o,n),e.child;case 6:return t===null&&nf(e),null;case 13:return I_(t,e,n);case 4:return ad(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ns(e,null,i,n):Yt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Oh(t,e,i,r,n);case 7:return Yt(t,e,e.pendingProps,n),e.child;case 8:return Yt(t,e,e.pendingProps.children,n),e.child;case 12:return Yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,st(Tl,i._currentValue),i._currentValue=o,s!==null)if(zn(s.value,o)){if(s.children===r.children&&!nn.current){e=vi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=pi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),rf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(oe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),rf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Yt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ts(e,n),r=Rn(r),i=i(r),e.flags|=1,Yt(t,e,i,n),e.child;case 14:return i=e.type,r=Nn(i,e.pendingProps),r=Nn(i.type,r),Fh(t,e,i,r,n);case 15:return L_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),il(t,e),e.tag=1,rn(i)?(t=!0,El(e)):t=!1,Ts(e,n),C_(e,i,r),of(e,i,r,n),cf(null,e,i,!0,t,n);case 19:return O_(t,e,n);case 22:return D_(t,e,n)}throw Error(oe(156,e.tag))};function Q_(t,e){return Tg(t,e)}function Py(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(t,e,n,i){return new Py(t,e,n,i)}function Ed(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ly(t){if(typeof t=="function")return Ed(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Hf)return 11;if(t===Vf)return 14}return 2}function Xi(t,e){var n=t.alternate;return n===null?(n=wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ol(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Ed(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case cs:return wr(n.children,r,s,e);case zf:o=8,r|=8;break;case bu:return t=wn(12,n,e,r|2),t.elementType=bu,t.lanes=s,t;case Pu:return t=wn(13,n,e,r),t.elementType=Pu,t.lanes=s,t;case Lu:return t=wn(19,n,e,r),t.elementType=Lu,t.lanes=s,t;case lg:return nc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case og:o=10;break e;case ag:o=9;break e;case Hf:o=11;break e;case Vf:o=14;break e;case Pi:o=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=wn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function wr(t,e,n,i){return t=wn(7,t,i,e),t.lanes=n,t}function nc(t,e,n,i){return t=wn(22,t,i,e),t.elementType=lg,t.lanes=n,t.stateNode={isHidden:!1},t}function Hc(t,e,n){return t=wn(6,t,null,e),t.lanes=n,t}function Vc(t,e,n){return e=wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Dy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ec(0),this.expirationTimes=Ec(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ec(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Md(t,e,n,i,r,s,o,a,l){return t=new Dy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=wn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},od(s),t}function Ny(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ls,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function J_(t){if(!t)return Ki;t=t._reactInternals;e:{if(Fr(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(rn(n))return Jg(t,n,e)}return e}function ev(t,e,n,i,r,s,o,a,l){return t=Md(n,i,!0,t,r,s,o,a,l),t.context=J_(null),n=t.current,i=Kt(),r=ji(n),s=pi(i,r),s.callback=e??null,Gi(n,s,r),t.current.lanes=r,Yo(t,r,i),sn(t,i),t}function ic(t,e,n,i){var r=e.current,s=Kt(),o=ji(r);return n=J_(n),e.context===null?e.context=n:e.pendingContext=n,e=pi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Gi(r,e,o),t!==null&&(Bn(t,r,o,s),el(t,r,o)),o}function Il(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $h(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function wd(t,e){$h(t,e),(t=t.alternate)&&$h(t,e)}function Uy(){return null}var tv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Td(t){this._internalRoot=t}rc.prototype.render=Td.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));ic(t,e,null,null)};rc.prototype.unmount=Td.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Lr(function(){ic(null,t,null,null)}),e[gi]=null}};function rc(t){this._internalRoot=t}rc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Dg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ni.length&&e!==0&&e<Ni[n].priority;n++);Ni.splice(n,0,t),n===0&&Ug(t)}};function Ad(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function sc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Kh(){}function Iy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Il(o);s.call(c)}}var o=ev(e,i,t,0,null,!1,!1,"",Kh);return t._reactRootContainer=o,t[gi]=o.current,Oo(t.nodeType===8?t.parentNode:t),Lr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Il(l);a.call(c)}}var l=Md(t,0,!1,null,null,!1,!1,"",Kh);return t._reactRootContainer=l,t[gi]=l.current,Oo(t.nodeType===8?t.parentNode:t),Lr(function(){ic(e,l,n,i)}),l}function oc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Il(o);a.call(l)}}ic(e,o,t,r)}else o=Iy(n,e,t,r,i);return Il(o)}Pg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=go(e.pendingLanes);n!==0&&(jf(e,n|1),sn(e,_t()),!($e&6)&&(Os=_t()+500,nr()))}break;case 13:Lr(function(){var i=_i(t,1);if(i!==null){var r=Kt();Bn(i,t,1,r)}}),wd(t,1)}};Xf=function(t){if(t.tag===13){var e=_i(t,134217728);if(e!==null){var n=Kt();Bn(e,t,134217728,n)}wd(t,134217728)}};Lg=function(t){if(t.tag===13){var e=ji(t),n=_i(t,e);if(n!==null){var i=Kt();Bn(n,t,e,i)}wd(t,e)}};Dg=function(){return tt};Ng=function(t,e){var n=tt;try{return tt=t,e()}finally{tt=n}};Hu=function(t,e,n){switch(e){case"input":if(Uu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Kl(i);if(!r)throw Error(oe(90));ug(i),Uu(i,r)}}}break;case"textarea":dg(t,n);break;case"select":e=n.value,e!=null&&Ss(t,!!n.multiple,e,!1)}};xg=xd;yg=Lr;var Oy={usingClientEntryPoint:!1,Events:[Ko,hs,Kl,_g,vg,xd]},oo={findFiberByHostInstance:gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fy={bundleType:oo.bundleType,version:oo.version,rendererPackageName:oo.rendererPackageName,rendererConfig:oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Mg(t),t===null?null:t.stateNode},findFiberByHostInstance:oo.findFiberByHostInstance||Uy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wa.isDisabled&&wa.supportsFiber)try{Xl=wa.inject(Fy),Kn=wa}catch{}}gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Oy;gn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ad(e))throw Error(oe(200));return Ny(t,e,null,n)};gn.createRoot=function(t,e){if(!Ad(t))throw Error(oe(299));var n=!1,i="",r=tv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Md(t,1,!1,null,null,n,!1,i,r),t[gi]=e.current,Oo(t.nodeType===8?t.parentNode:t),new Td(e)};gn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=Mg(e),t=t===null?null:t.stateNode,t};gn.flushSync=function(t){return Lr(t)};gn.hydrate=function(t,e,n){if(!sc(e))throw Error(oe(200));return oc(null,t,e,!0,n)};gn.hydrateRoot=function(t,e,n){if(!Ad(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=tv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ev(e,null,t,1,n??null,r,!1,s,o),t[gi]=e.current,Oo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new rc(e)};gn.render=function(t,e,n){if(!sc(e))throw Error(oe(200));return oc(null,t,e,!1,n)};gn.unmountComponentAtNode=function(t){if(!sc(t))throw Error(oe(40));return t._reactRootContainer?(Lr(function(){oc(null,null,t,!1,function(){t._reactRootContainer=null,t[gi]=null})}),!0):!1};gn.unstable_batchedUpdates=xd;gn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!sc(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return oc(t,e,n,!1,i)};gn.version="18.3.1-next-f1338f8080-20240426";function nv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nv)}catch(t){console.error(t)}}nv(),ng.exports=gn;var ky=ng.exports,Zh=ky;Ru.createRoot=Zh.createRoot,Ru.hydrateRoot=Zh.hydrateRoot;function iv(t,e){return function(){return t.apply(e,arguments)}}const{toString:By}=Object.prototype,{getPrototypeOf:Fs}=Object,{iterator:Qo,toStringTag:rv}=Symbol,Ol=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),jo=(t,e)=>{let n=t;const i=[];for(;n!=null&&n!==Object.prototype;){if(i.indexOf(n)!==-1)return!1;if(i.push(n),Ol(n,e))return!0;n=Fs(n)}return!1},zy=(t,e)=>t!=null&&jo(t,e)?t[e]:void 0,Rd=(t=>e=>{const n=By.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Hn=t=>(t=t.toLowerCase(),e=>Rd(e)===t),ac=t=>e=>typeof e===t,{isArray:Dr}=Array,ks=ac("undefined");function Xs(t){return t!==null&&!ks(t)&&t.constructor!==null&&!ks(t.constructor)&&on(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const sv=Hn("ArrayBuffer");function Hy(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&sv(t.buffer),e}const Vy=ac("string"),on=ac("function"),ov=ac("number"),qs=t=>t!==null&&typeof t=="object",Gy=t=>t===!0||t===!1,al=t=>{if(!qs(t))return!1;const e=Fs(t);return(e===null||e===Object.prototype||Fs(e)===null)&&!jo(t,rv)&&!jo(t,Qo)},Wy=t=>{if(!qs(t)||Xs(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},jy=Hn("Date"),Xy=Hn("File"),qy=t=>!!(t&&typeof t.uri<"u"),Yy=t=>t&&typeof t.getParts<"u",$y=Hn("Blob"),Ky=Hn("FileList"),Zy=t=>qs(t)&&on(t.pipe);function Qy(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Qh=Qy(),Jh=typeof Qh.FormData<"u"?Qh.FormData:void 0,Jy=t=>{if(!t)return!1;if(Jh&&t instanceof Jh)return!0;const e=Fs(t);if(!e||e===Object.prototype||!on(t.append))return!1;const n=Rd(t);return n==="formdata"||n==="object"&&on(t.toString)&&t.toString()==="[object FormData]"},eS=Hn("URLSearchParams"),[tS,nS,iS,rS]=["ReadableStream","Request","Response","Headers"].map(Hn),sS=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Jo(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),Dr(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{if(Xs(t))return;const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(i=0;i<o;i++)a=s[i],e.call(null,t[a],a,t)}}function av(t,e){if(Xs(t))return null;e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const xr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,lv=t=>!ks(t)&&t!==xr;function Sf(...t){const{caseless:e,skipUndefined:n}=lv(this)&&this||{},i={},r=(s,o)=>{if(o==="__proto__"||o==="constructor"||o==="prototype")return;const a=e&&typeof o=="string"&&av(i,o)||o,l=Ol(i,a)?i[a]:void 0;al(l)&&al(s)?i[a]=Sf(l,s):al(s)?i[a]=Sf({},s):Dr(s)?i[a]=s.slice():(!n||!ks(s))&&(i[a]=s)};for(let s=0,o=t.length;s<o;s++){const a=t[s];if(!a||Xs(a)||(Jo(a,r),typeof a!="object"||Dr(a)))continue;const l=Object.getOwnPropertySymbols(a);for(let c=0;c<l.length;c++){const f=l[c];_S.call(a,f)&&r(a[f],f)}}return i}const oS=(t,e,n,{allOwnKeys:i}={})=>(Jo(e,(r,s)=>{n&&on(r)?Object.defineProperty(t,s,{__proto__:null,value:iv(r,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,s,{__proto__:null,value:r,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),t),aS=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),lS=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),Object.defineProperty(t.prototype,"constructor",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{__proto__:null,value:e.prototype}),n&&Object.assign(t.prototype,n)},cS=(t,e,n,i)=>{let r,s,o;const a={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)o=r[s],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Fs(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},uS=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},fS=t=>{if(!t)return null;if(Dr(t))return t;let e=t.length;if(!ov(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},dS=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Fs(Uint8Array)),hS=(t,e)=>{const i=(t&&t[Qo]).call(t);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(t,s[0],s[1])}},pS=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},mS=Hn("HTMLFormElement"),gS=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),{propertyIsEnumerable:_S}=Object.prototype,vS=Hn("RegExp"),cv=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Jo(n,(r,s)=>{let o;(o=e(r,s,t))!==!1&&(i[s]=o||r)}),Object.defineProperties(t,i)},xS=t=>{cv(t,(e,n)=>{if(on(t)&&["arguments","caller","callee"].includes(n))return!1;const i=t[n];if(on(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},yS=(t,e)=>{const n={},i=r=>{r.forEach(s=>{n[s]=!0})};return Dr(t)?i(t):i(String(t).split(e)),n},SS=()=>{},ES=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function MS(t){return!!(t&&on(t.append)&&t[rv]==="FormData"&&t[Qo])}const wS=t=>{const e=new WeakSet,n=i=>{if(qs(i)){if(e.has(i))return;if(Xs(i))return i;if(!("toJSON"in i)){e.add(i);const r=Dr(i)?[]:{};return Jo(i,(s,o)=>{const a=n(s);!ks(a)&&(r[o]=a)}),e.delete(i),r}}return i};return n(t)},TS=Hn("AsyncFunction"),AS=t=>t&&(qs(t)||on(t))&&on(t.then)&&on(t.catch),uv=((t,e)=>t?setImmediate:e?((n,i)=>(xr.addEventListener("message",({source:r,data:s})=>{r===xr&&s===n&&i.length&&i.shift()()},!1),r=>{i.push(r),xr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",on(xr.postMessage)),RS=typeof queueMicrotask<"u"?queueMicrotask.bind(xr):typeof process<"u"&&process.nextTick||uv,fv=t=>t!=null&&on(t[Qo]),CS=t=>t!=null&&jo(t,Qo)&&fv(t),N={isArray:Dr,isArrayBuffer:sv,isBuffer:Xs,isFormData:Jy,isArrayBufferView:Hy,isString:Vy,isNumber:ov,isBoolean:Gy,isObject:qs,isPlainObject:al,isEmptyObject:Wy,isReadableStream:tS,isRequest:nS,isResponse:iS,isHeaders:rS,isUndefined:ks,isDate:jy,isFile:Xy,isReactNativeBlob:qy,isReactNative:Yy,isBlob:$y,isRegExp:vS,isFunction:on,isStream:Zy,isURLSearchParams:eS,isTypedArray:dS,isFileList:Ky,forEach:Jo,merge:Sf,extend:oS,trim:sS,stripBOM:aS,inherits:lS,toFlatObject:cS,kindOf:Rd,kindOfTest:Hn,endsWith:uS,toArray:fS,forEachEntry:hS,matchAll:pS,isHTMLForm:mS,hasOwnProperty:Ol,hasOwnProp:Ol,hasOwnInPrototypeChain:jo,getSafeProp:zy,reduceDescriptors:cv,freezeMethods:xS,toObjectSet:yS,toCamelCase:gS,noop:SS,toFiniteNumber:ES,findKey:av,global:xr,isContextDefined:lv,isSpecCompliantForm:MS,toJSONObject:wS,isAsyncFn:TS,isThenable:AS,setImmediate:uv,asap:RS,isIterable:fv,isSafeIterable:CS},bS=N.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),PS=t=>{const e={};let n,i,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim(),!(!n||e[n]&&bS[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e};function LS(t){let e=0,n=t.length;for(;e<n;){const i=t.charCodeAt(e);if(i!==9&&i!==32)break;e+=1}for(;n>e;){const i=t.charCodeAt(n-1);if(i!==9&&i!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}const DS=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),NS=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function Cd(t,e){return N.isArray(t)?t.map(n=>Cd(n,e)):LS(String(t).replace(e,""))}const US=t=>Cd(t,DS),IS=t=>Cd(t,NS);function dv(t){const e=Object.create(null);return N.forEach(t.toJSON(),(n,i)=>{e[i]=IS(n)}),e}const ep=Symbol("internals");function ao(t){return t&&String(t).trim().toLowerCase()}function ll(t){return t===!1||t==null?t:N.isArray(t)?t.map(ll):US(String(t))}function OS(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const FS=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Gc(t,e,n,i,r){if(N.isFunction(i))return i.call(this,e,n);if(r&&(e=n),!!N.isString(e)){if(N.isString(i))return e.indexOf(i)!==-1;if(N.isRegExp(i))return i.test(e)}}function kS(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function BS(t,e){const n=N.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{__proto__:null,value:function(r,s,o){return this[i].call(this,e,r,s,o)},configurable:!0})})}let Wt=class{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function s(a,l,c){const f=ao(l);if(!f)return;const d=N.findKey(r,f);(!d||r[d]===void 0||c===!0||c===void 0&&r[d]!==!1)&&(r[d||l]=ll(a))}const o=(a,l)=>N.forEach(a,(c,f)=>s(c,f,l));if(N.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(N.isString(e)&&(e=e.trim())&&!FS(e))o(PS(e),n);else if(N.isObject(e)&&N.isSafeIterable(e)){let a=Object.create(null),l,c;for(const f of e){if(!N.isArray(f))throw new TypeError("Object iterator must return a key-value pair");c=f[0],N.hasOwnProp(a,c)?(l=a[c],a[c]=N.isArray(l)?[...l,f[1]]:[l,f[1]]):a[c]=f[1]}o(a,n)}else e!=null&&s(n,e,i);return this}get(e,n){if(e=ao(e),e){const i=N.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return OS(r);if(N.isFunction(n))return n.call(this,r,i);if(N.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=ao(e),e){const i=N.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||Gc(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function s(o){if(o=ao(o),o){const a=N.findKey(i,o);a&&(!n||Gc(i,i[a],a,n))&&(delete i[a],r=!0)}}return N.isArray(e)?e.forEach(s):s(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const s=n[i];(!e||Gc(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const n=this,i={};return N.forEach(this,(r,s)=>{const o=N.findKey(i,s);if(o){n[o]=ll(r),delete n[s];return}const a=e?kS(s):String(s).trim();a!==s&&delete n[s],n[a]=ll(r),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return N.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&N.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[ep]=this[ep]={accessors:{}}).accessors,r=this.prototype;function s(o){const a=ao(o);i[a]||(BS(r,o),i[a]=!0)}return N.isArray(e)?e.forEach(s):s(e),this}};Wt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);N.reduceDescriptors(Wt.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});N.freezeMethods(Wt);const zS="[REDACTED ****]";function HS(t){if(N.hasOwnProp(t,"toJSON"))return!0;let e=Object.getPrototypeOf(t);for(;e&&e!==Object.prototype;){if(N.hasOwnProp(e,"toJSON"))return!0;e=Object.getPrototypeOf(e)}return!1}function VS(t,e){const n=new Set(e.map(s=>String(s).toLowerCase())),i=[],r=s=>{if(s===null||typeof s!="object"||N.isBuffer(s))return s;if(i.indexOf(s)!==-1)return;s instanceof Wt&&(s=s.toJSON()),i.push(s);let o;if(N.isArray(s))o=[],s.forEach((a,l)=>{const c=r(a);N.isUndefined(c)||(o[l]=c)});else{if(!N.isPlainObject(s)&&HS(s))return i.pop(),s;o=Object.create(null);for(const[a,l]of Object.entries(s)){const c=n.has(a.toLowerCase())?zS:r(l);N.isUndefined(c)||(o[a]=c)}}return i.pop(),o};return r(t)}let de=class hv extends Error{static from(e,n,i,r,s,o){const a=new hv(e.message,n||e.code,i,r,s);return Object.defineProperty(a,"cause",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),a.name=e.name,e.status!=null&&a.status==null&&(a.status=e.status),o&&Object.assign(a,o),a}constructor(e,n,i,r,s){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),i&&(this.config=i),r&&(this.request=r),s&&(this.response=s,this.status=s.status)}toJSON(){const e=this.config,n=e&&N.hasOwnProp(e,"redact")?e.redact:void 0,i=N.isArray(n)&&n.length>0?VS(e,n):N.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i,code:this.code,status:this.status}}};de.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";de.ERR_BAD_OPTION="ERR_BAD_OPTION";de.ECONNABORTED="ECONNABORTED";de.ETIMEDOUT="ETIMEDOUT";de.ECONNREFUSED="ECONNREFUSED";de.ERR_NETWORK="ERR_NETWORK";de.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";de.ERR_DEPRECATED="ERR_DEPRECATED";de.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";de.ERR_BAD_REQUEST="ERR_BAD_REQUEST";de.ERR_CANCELED="ERR_CANCELED";de.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";de.ERR_INVALID_URL="ERR_INVALID_URL";de.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const GS=null,pv=100;function Ef(t){return N.isPlainObject(t)||N.isArray(t)}function mv(t){return N.endsWith(t,"[]")?t.slice(0,-2):t}function Wc(t,e,n){return t?t.concat(e).map(function(r,s){return r=mv(r),!n&&s?"["+r+"]":r}).join(n?".":""):e}function WS(t){return N.isArray(t)&&!t.some(Ef)}const jS=N.toFlatObject(N,{},null,function(e){return/^is[A-Z]/.test(e)});function lc(t,e,n){if(!N.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=N.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,g){return!N.isUndefined(g[_])});const i=n.metaTokens,r=n.visitor||v,s=n.dots,o=n.indexes,a=n.Blob||typeof Blob<"u"&&Blob,l=n.maxDepth===void 0?pv:n.maxDepth,c=a&&N.isSpecCompliantForm(e),f=[];if(!N.isFunction(r))throw new TypeError("visitor must be a function");function d(u){if(u===null)return"";if(N.isDate(u))return u.toISOString();if(N.isBoolean(u))return u.toString();if(!c&&N.isBlob(u))throw new de("Blob is not supported. Use a Buffer instead.");if(N.isArrayBuffer(u)||N.isTypedArray(u)){if(c&&typeof a=="function")return new a([u]);if(typeof Buffer<"u")return Buffer.from(u);throw new de("Blob is not supported. Use a Buffer instead.",de.ERR_NOT_SUPPORT)}return u}function h(u){if(u>l)throw new de("Object is too deeply nested ("+u+" levels). Max depth: "+l,de.ERR_FORM_DATA_DEPTH_EXCEEDED)}function m(u,_){if(l===1/0)return JSON.stringify(u);const g=[];return JSON.stringify(u,function(C,R){if(!N.isObject(R))return R;for(;g.length&&g[g.length-1]!==this;)g.pop();return g.push(R),h(_+g.length-1),R})}function v(u,_,g){let S=u;if(N.isReactNative(e)&&N.isReactNativeBlob(u))return e.append(Wc(g,_,s),d(u)),!1;if(u&&!g&&typeof u=="object"){if(N.endsWith(_,"{}"))_=i?_:_.slice(0,-2),u=m(u,1);else if(N.isArray(u)&&WS(u)||(N.isFileList(u)||N.endsWith(_,"[]"))&&(S=N.toArray(u)))return _=mv(_),S.forEach(function(R,T){!(N.isUndefined(R)||R===null)&&e.append(o===!0?Wc([_],T,s):o===null?_:_+"[]",d(R))}),!1}return Ef(u)?!0:(e.append(Wc(g,_,s),d(u)),!1)}const x=Object.assign(jS,{defaultVisitor:v,convertValue:d,isVisitable:Ef});function p(u,_,g=0){if(!N.isUndefined(u)){if(h(g),f.indexOf(u)!==-1)throw new Error("Circular reference detected in "+_.join("."));f.push(u),N.forEach(u,function(C,R){(!(N.isUndefined(C)||C===null)&&r.call(e,C,N.isString(R)?R.trim():R,_,x))===!0&&p(C,_?_.concat(R):[R],g+1)}),f.pop()}}if(!N.isObject(t))throw new TypeError("data must be an object");return p(t),e}function tp(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(t).replace(/[!'()~]|%20/g,function(i){return e[i]})}function bd(t,e){this._pairs=[],t&&lc(t,this,e)}const gv=bd.prototype;gv.append=function(e,n){this._pairs.push([e,n])};gv.toString=function(e){const n=e?i=>e.call(this,i,tp):tp;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function XS(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function _v(t,e,n){if(!e)return t;t=t||"";const i=N.isFunction(n)?{serialize:n}:n,r=N.getSafeProp(i,"encode")||XS,s=N.getSafeProp(i,"serialize");let o;if(s?o=s(e,i):o=N.isURLSearchParams(e)?e.toString():new bd(e,i).toString(r),o){const a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}class np{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){N.forEach(this.handlers,function(i){i!==null&&e(i)})}}const Pd={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},qS=typeof URLSearchParams<"u"?URLSearchParams:bd,YS=typeof FormData<"u"?FormData:null,$S=typeof Blob<"u"?Blob:null,KS={isBrowser:!0,classes:{URLSearchParams:qS,FormData:YS,Blob:$S},protocols:["http","https","file","blob","url","data"]},Ld=typeof window<"u"&&typeof document<"u",Mf=typeof navigator=="object"&&navigator||void 0,ZS=Ld&&(!Mf||["ReactNative","NativeScript","NS"].indexOf(Mf.product)<0),QS=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",JS=Ld&&window.location.href||"http://localhost",eE=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ld,hasStandardBrowserEnv:ZS,hasStandardBrowserWebWorkerEnv:QS,navigator:Mf,origin:JS},Symbol.toStringTag,{value:"Module"})),Nt={...eE,...KS};function tE(t,e){return lc(t,new Nt.classes.URLSearchParams,{visitor:function(n,i,r,s){return Nt.isNode&&N.isBuffer(n)?(this.append(i,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...e})}const ip=pv;function vv(t){if(t>ip)throw new de("FormData field is too deeply nested ("+t+" levels). Max depth: "+ip,de.ERR_FORM_DATA_DEPTH_EXCEEDED)}function nE(t){const e=[],n=/\w+|\[(\w*)]/g;let i;for(;(i=n.exec(t))!==null;)vv(e.length),e.push(i[0]==="[]"?"":i[1]||i[0]);return e}function iE(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}function xv(t){function e(n,i,r,s){vv(s);let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&N.isArray(r)?r.length:o,l?(N.hasOwnProp(r,o)?r[o]=N.isArray(r[o])?r[o].concat(i):[r[o],i]:r[o]=i,!a):((!N.hasOwnProp(r,o)||!N.isObject(r[o]))&&(r[o]=[]),e(n,i,r[o],s)&&N.isArray(r[o])&&(r[o]=iE(r[o])),!a)}if(N.isFormData(t)&&N.isFunction(t.entries)){const n={};return N.forEachEntry(t,(i,r)=>{e(nE(i),r,n,0)}),n}return null}const Hr=(t,e)=>t!=null&&N.hasOwnProp(t,e)?t[e]:void 0;function rE(t,e,n){if(N.isString(t))try{return(e||JSON.parse)(t),N.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const ea={transitional:Pd,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,s=N.isObject(e);if(s&&N.isHTMLForm(e)&&(e=new FormData(e)),N.isFormData(e))return r?JSON.stringify(xv(e)):e;if(N.isArrayBuffer(e)||N.isBuffer(e)||N.isStream(e)||N.isFile(e)||N.isBlob(e)||N.isReadableStream(e))return e;if(N.isArrayBufferView(e))return e.buffer;if(N.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){const l=Hr(this,"formSerializer");if(i.indexOf("application/x-www-form-urlencoded")>-1)return tE(e,l).toString();if((a=N.isFileList(e))||i.indexOf("multipart/form-data")>-1){const c=Hr(this,"env"),f=c&&c.FormData;return lc(a?{"files[]":e}:e,f&&new f,l)}}return s||r?(n.setContentType("application/json",!1),rE(e)):e}],transformResponse:[function(e){const n=Hr(this,"transitional")||ea.transitional,i=n&&n.forcedJSONParsing,r=Hr(this,"responseType"),s=r==="json";if(N.isResponse(e)||N.isReadableStream(e))return e;if(e&&N.isString(e)&&(i&&!r||s)){const a=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e,Hr(this,"parseReviver"))}catch(l){if(a)throw l.name==="SyntaxError"?de.from(l,de.ERR_BAD_RESPONSE,this,null,Hr(this,"response")):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Nt.classes.FormData,Blob:Nt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};N.forEach(["delete","get","head","post","put","patch","query"],t=>{ea.headers[t]={}});function jc(t,e){const n=this||ea,i=e||n,r=Wt.from(i.headers);let s=i.data;return N.forEach(t,function(a){s=a.call(n,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function yv(t){return!!(t&&t.__CANCEL__)}let ta=class extends de{constructor(e,n,i){super(e??"canceled",de.ERR_CANCELED,n,i),this.name="CanceledError",this.__CANCEL__=!0}};function Sv(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new de("Request failed with status code "+n.status,n.status>=400&&n.status<500?de.ERR_BAD_REQUEST:de.ERR_BAD_RESPONSE,n.config,n.request,n))}function sE(t){const e=/^([-+\w]{1,25}):(?:\/\/)?/.exec(t);return e&&e[1]||""}function oE(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),f=i[s];o||(o=c),n[r]=l,i[r]=c;let d=s,h=0;for(;d!==r;)h+=n[d++],d=d%t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),c-o<e)return;const m=f&&c-f;return m?Math.round(h*1e3/m):void 0}}function aE(t,e){let n=0,i=1e3/e,r,s;const o=(c,f=Date.now())=>{n=f,r=null,s&&(clearTimeout(s),s=null),t(...c)};return[(...c)=>{const f=Date.now(),d=f-n;d>=i?o(c,f):(r=c,s||(s=setTimeout(()=>{s=null,o(r)},i-d)))},()=>r&&o(r)]}const Fl=(t,e,n=3)=>{let i=0;const r=oE(50,250);return aE(s=>{if(!s||typeof s.loaded!="number")return;const o=s.loaded,a=s.lengthComputable?s.total:void 0,l=a!=null?Math.min(o,a):o,c=Math.max(0,l-i),f=r(c);i=Math.max(i,l);const d={loaded:l,total:a,progress:a?l/a:void 0,bytes:c,rate:f||void 0,estimated:f&&a?(a-l)/f:void 0,event:s,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(d)},n)},rp=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},sp=t=>(...e)=>N.asap(()=>t(...e)),lE=Nt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Nt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Nt.origin),Nt.navigator&&/(msie|trident)/i.test(Nt.navigator.userAgent)):()=>!0,cE=Nt.hasStandardBrowserEnv?{write(t,e,n,i,r,s,o){if(typeof document>"u")return;const a=[`${t}=${encodeURIComponent(e)}`];N.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),N.isString(i)&&a.push(`path=${i}`),N.isString(r)&&a.push(`domain=${r}`),s===!0&&a.push("secure"),N.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.split(";");for(let n=0;n<e.length;n++){const i=e[n].replace(/^\s+/,""),r=i.indexOf("=");if(r!==-1&&i.slice(0,r)===t)try{return decodeURIComponent(i.slice(r+1))}catch{return i.slice(r+1)}}return null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function uE(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function fE(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}const dE=/^https?:(?!\/\/)/i,hE=/[\t\n\r]/g;function pE(t){let e=0;for(;e<t.length&&t.charCodeAt(e)<=32;)e++;return t.slice(e)}function mE(t){return pE(t).replace(hE,"")}function op(t,e){if(typeof t=="string"&&dE.test(mE(t)))throw new de('Invalid URL: missing "//" after protocol',de.ERR_INVALID_URL,e)}function Ev(t,e,n,i){op(e,i);let r=!uE(e);return t&&(r||n===!1)?(op(t,i),fE(t,e)):e}const ap=t=>t instanceof Wt?{...t}:t;function Nr(t,e){t=t||{},e=e||{};const n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function i(f,d,h,m){return N.isPlainObject(f)&&N.isPlainObject(d)?N.merge.call({caseless:m},f,d):N.isPlainObject(d)?N.merge({},d):N.isArray(d)?d.slice():d}function r(f,d,h,m){if(N.isUndefined(d)){if(!N.isUndefined(f))return i(void 0,f,h,m)}else return i(f,d,h,m)}function s(f,d){if(!N.isUndefined(d))return i(void 0,d)}function o(f,d){if(N.isUndefined(d)){if(!N.isUndefined(f))return i(void 0,f)}else return i(void 0,d)}function a(f){const d=N.hasOwnProp(e,"transitional")?e.transitional:void 0;if(!N.isUndefined(d))if(N.isPlainObject(d)){if(N.hasOwnProp(d,f))return d[f]}else return;const h=N.hasOwnProp(t,"transitional")?t.transitional:void 0;if(N.isPlainObject(h)&&N.hasOwnProp(h,f))return h[f]}function l(f,d,h){if(N.hasOwnProp(e,h))return i(f,d);if(N.hasOwnProp(t,h))return i(void 0,f)}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:l,headers:(f,d,h)=>r(ap(f),ap(d),h,!0)};return N.forEach(Object.keys({...t,...e}),function(d){if(d==="__proto__"||d==="constructor"||d==="prototype")return;const h=N.hasOwnProp(c,d)?c[d]:r,m=N.hasOwnProp(t,d)?t[d]:void 0,v=N.hasOwnProp(e,d)?e[d]:void 0,x=h(m,v,d);N.isUndefined(x)&&h!==l||(n[d]=x)}),N.hasOwnProp(e,"validateStatus")&&N.isUndefined(e.validateStatus)&&a("validateStatusUndefinedResolves")===!1&&(N.hasOwnProp(t,"validateStatus")?n.validateStatus=i(void 0,t.validateStatus):delete n.validateStatus),n}const gE=["content-type","content-length"];function _E(t,e,n){if(n!=="content-only"){t.set(e);return}Object.entries(e||{}).forEach(([i,r])=>{gE.includes(i.toLowerCase())&&t.set(i,r)})}const vE=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16)));function Mv(t){const e=Nr({},t),n=h=>N.hasOwnProp(e,h)?e[h]:void 0,i=n("data");let r=n("withXSRFToken");const s=n("xsrfHeaderName"),o=n("xsrfCookieName");let a=n("headers");const l=n("auth"),c=n("baseURL"),f=n("allowAbsoluteUrls"),d=n("url");if(e.headers=a=Wt.from(a),e.url=_v(Ev(c,d,f,e),n("params"),n("paramsSerializer")),l){const h=N.getSafeProp(l,"username")||"",m=N.getSafeProp(l,"password")||"";try{a.set("Authorization","Basic "+btoa(h+":"+(m?vE(m):"")))}catch(v){throw de.from(v,de.ERR_BAD_OPTION_VALUE,t)}}if(N.isFormData(i)&&(Nt.hasStandardBrowserEnv||Nt.hasStandardBrowserWebWorkerEnv||N.isReactNative(i)?a.setContentType(void 0):N.isFunction(i.getHeaders)&&_E(a,i.getHeaders(),n("formDataHeaderPolicy"))),Nt.hasStandardBrowserEnv&&(N.isFunction(r)&&(r=r(e)),r===!0||r==null&&lE(e.url))){const m=s&&o&&cE.read(o);m&&a.set(s,m)}return e}const xE=typeof XMLHttpRequest<"u",yE=xE&&function(t){return new Promise(function(n,i){const r=Mv(t);let s=r.data;const o=Wt.from(r.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=r,f,d,h,m,v;function x(){m&&m(),v&&v(),r.cancelToken&&r.cancelToken.unsubscribe(f),r.signal&&r.signal.removeEventListener("abort",f)}let p=new XMLHttpRequest;p.open(r.method.toUpperCase(),r.url,!0),p.timeout=r.timeout;function u(){if(!p)return;const g=Wt.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),C={data:!a||a==="text"||a==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:g,config:t,request:p};Sv(function(T){n(T),x()},function(T){i(T),x()},C),p=null}"onloadend"in p?p.onloadend=u:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.startsWith("file:"))||setTimeout(u)},p.onabort=function(){p&&(i(new de("Request aborted",de.ECONNABORTED,t,p)),x(),p=null)},p.onerror=function(S){const C=S&&S.message?S.message:"Network Error",R=new de(C,de.ERR_NETWORK,t,p);R.event=S||null,i(R),x(),p=null},p.ontimeout=function(){let S=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const C=r.transitional||Pd;r.timeoutErrorMessage&&(S=r.timeoutErrorMessage),i(new de(S,C.clarifyTimeoutError?de.ETIMEDOUT:de.ECONNABORTED,t,p)),x(),p=null},s===void 0&&o.setContentType(null),"setRequestHeader"in p&&N.forEach(dv(o),function(S,C){p.setRequestHeader(C,S)}),N.isUndefined(r.withCredentials)||(p.withCredentials=!!r.withCredentials),a&&a!=="json"&&(p.responseType=r.responseType),c&&([h,v]=Fl(c,!0),p.addEventListener("progress",h)),l&&p.upload&&([d,m]=Fl(l),p.upload.addEventListener("progress",d),p.upload.addEventListener("loadend",m)),(r.cancelToken||r.signal)&&(f=g=>{p&&(i(!g||g.type?new ta(null,t,p):g),p.abort(),x(),p=null)},r.cancelToken&&r.cancelToken.subscribe(f),r.signal&&(r.signal.aborted?f():r.signal.addEventListener("abort",f)));const _=sE(r.url);if(_&&!Nt.protocols.includes(_)){i(new de("Unsupported protocol "+_+":",de.ERR_BAD_REQUEST,t)),x();return}p.send(s||null)})},SE=(t,e)=>{if(t=t?t.filter(Boolean):[],!e&&!t.length)return;const n=new AbortController;let i=!1;const r=function(l){if(!i){i=!0,o();const c=l instanceof Error?l:this.reason;n.abort(c instanceof de?c:new ta(c instanceof Error?c.message:c))}};let s=e&&setTimeout(()=>{s=null,r(new de(`timeout of ${e}ms exceeded`,de.ETIMEDOUT))},e);const o=()=>{t&&(s&&clearTimeout(s),s=null,t.forEach(l=>{l.unsubscribe?l.unsubscribe(r):l.removeEventListener("abort",r)}),t=null)};t.forEach(l=>l.addEventListener("abort",r,{once:!0}));const{signal:a}=n;return a.unsubscribe=()=>N.asap(o),a},EE=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,r;for(;i<n;)r=i+e,yield t.slice(i,r),i=r},ME=async function*(t,e){for await(const n of wE(t))yield*EE(n,e)},wE=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},lp=(t,e,n,i)=>{const r=ME(t,e);let s=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:f}=await r.next();if(c){a(),l.close();return}let d=f.byteLength;if(n){let h=s+=d;n(h)}l.enqueue(new Uint8Array(f))}catch(c){throw a(c),c}},cancel(l){return a(l),r.return()}},{highWaterMark:2})},kl=t=>t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102,TE=(t,e,n)=>e+2<n&&kl(t.charCodeAt(e+1))&&kl(t.charCodeAt(e+2));function AE(t){if(!t||typeof t!="string"||!t.startsWith("data:"))return 0;const e=t.indexOf(",");if(e<0)return 0;const n=t.slice(5,e),i=t.slice(e+1);if(/;base64/i.test(n)){let o=i.length;const a=i.length;for(let m=0;m<a;m++)if(i.charCodeAt(m)===37&&m+2<a){const v=i.charCodeAt(m+1),x=i.charCodeAt(m+2);kl(v)&&kl(x)&&(o-=2,m+=2)}let l=0,c=a-1;const f=m=>m>=2&&i.charCodeAt(m-2)===37&&i.charCodeAt(m-1)===51&&(i.charCodeAt(m)===68||i.charCodeAt(m)===100);c>=0&&(i.charCodeAt(c)===61?(l++,c--):f(c)&&(l++,c-=3)),l===1&&c>=0&&(i.charCodeAt(c)===61||f(c))&&l++;const h=Math.floor(o/4)*3-(l||0);return h>0?h:0}let s=0;for(let o=0,a=i.length;o<a;o++){const l=i.charCodeAt(o);if(l===37&&TE(i,o,a))s+=1,o+=2;else if(l<128)s+=1;else if(l<2048)s+=2;else if(l>=55296&&l<=56319&&o+1<a){const c=i.charCodeAt(o+1);c>=56320&&c<=57343?(s+=4,o++):s+=3}else s+=3}return s}const Dd="1.18.1",cp=64*1024,{isFunction:Ta}=N,RE=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16))),up=t=>{if(!N.isString(t))return t;try{return decodeURIComponent(t)}catch{return t}},fp=(t,...e)=>{try{return!!t(...e)}catch{return!1}},CE=t=>{const e=t.indexOf("://");let n=t;return e!==-1&&(n=n.slice(e+3)),n.includes("@")||n.includes(":")},bE=t=>{const e=N.global!==void 0&&N.global!==null?N.global:globalThis,{ReadableStream:n,TextEncoder:i}=e;t=N.merge.call({skipUndefined:!0},{Request:e.Request,Response:e.Response},t);const{fetch:r,Request:s,Response:o}=t,a=r?Ta(r):typeof fetch=="function",l=Ta(s),c=Ta(o);if(!a)return!1;const f=a&&Ta(n),d=a&&(typeof i=="function"?(u=>_=>u.encode(_))(new i):async u=>new Uint8Array(await new s(u).arrayBuffer())),h=l&&f&&fp(()=>{let u=!1;const _=new s(Nt.origin,{body:new n,method:"POST",get duplex(){return u=!0,"half"}}),g=_.headers.has("Content-Type");return _.body!=null&&_.body.cancel(),u&&!g}),m=c&&f&&fp(()=>N.isReadableStream(new o("").body)),v={stream:m&&(u=>u.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(u=>{!v[u]&&(v[u]=(_,g)=>{let S=_&&_[u];if(S)return S.call(_);throw new de(`Response type '${u}' is not supported`,de.ERR_NOT_SUPPORT,g)})});const x=async u=>{if(u==null)return 0;if(N.isBlob(u))return u.size;if(N.isSpecCompliantForm(u))return(await new s(Nt.origin,{method:"POST",body:u}).arrayBuffer()).byteLength;if(N.isArrayBufferView(u)||N.isArrayBuffer(u))return u.byteLength;if(N.isURLSearchParams(u)&&(u=u+""),N.isString(u))return(await d(u)).byteLength},p=async(u,_)=>{const g=N.toFiniteNumber(u.getContentLength());return g??x(_)};return async u=>{let{url:_,method:g,data:S,signal:C,cancelToken:R,timeout:T,onDownloadProgress:L,onUploadProgress:w,responseType:E,headers:U,withCredentials:W="same-origin",fetchOptions:P,maxContentLength:z,maxBodyLength:Y}=Mv(u);const Z=N.isNumber(z)&&z>-1,J=N.isNumber(Y)&&Y>-1,D=te=>N.hasOwnProp(u,te)?u[te]:void 0;let X=r||fetch;E=E?(E+"").toLowerCase():"text";let j=SE([C,R&&R.toAbortSignal()],T),ee=null;const ge=j&&j.unsubscribe&&(()=>{j.unsubscribe()});let Pe,q=null;const ae=()=>new de("Request body larger than maxBodyLength limit",de.ERR_BAD_REQUEST,u,ee);try{let te;const re=D("auth");if(re){const le=N.getSafeProp(re,"username")||"",Te=N.getSafeProp(re,"password")||"";te={username:le,password:Te}}if(CE(_)){const le=new URL(_,Nt.origin);if(!te&&(le.username||le.password)){const Te=up(le.username),Ye=up(le.password);te={username:Te,password:Ye}}(le.username||le.password)&&(le.username="",le.password="",_=le.href)}if(te&&(U.delete("authorization"),U.set("Authorization","Basic "+btoa(RE((te.username||"")+":"+(te.password||""))))),Z&&typeof _=="string"&&_.startsWith("data:")&&AE(_)>z)throw new de("maxContentLength size of "+z+" exceeded",de.ERR_BAD_RESPONSE,u,ee);if(J&&g!=="get"&&g!=="head"){const le=await x(S);if(typeof le=="number"&&isFinite(le)&&(Pe=le,le>Y))throw ae()}const Ce=J&&(N.isReadableStream(S)||N.isStream(S)),Oe=(le,Te,Ye)=>lp(le,cp,b=>{if(J&&b>Y)throw q=ae();Te&&Te(b)},Ye);if(h&&g!=="get"&&g!=="head"&&(w||Ce)){if(Pe=Pe??await p(U,S),Pe!==0||Ce){let le=new s(_,{method:"POST",body:S,duplex:"half"}),Te;if(N.isFormData(S)&&(Te=le.headers.get("content-type"))&&U.setContentType(Te),le.body){const[Ye,b]=w&&rp(Pe,Fl(sp(w)))||[];S=Oe(le.body,Ye,b)}}}else if(Ce&&!l&&f&&g!=="get"&&g!=="head")S=Oe(S);else if(Ce&&l&&!h&&g!=="get"&&g!=="head")throw new de("Stream request bodies are not supported by the current fetch implementation",de.ERR_NOT_SUPPORT,u,ee);N.isString(W)||(W=W?"include":"omit");const B=l&&"credentials"in s.prototype;if(N.isFormData(S)){const le=U.getContentType();le&&/^multipart\/form-data/i.test(le)&&!/boundary=/i.test(le)&&U.delete("content-type")}U.set("User-Agent","axios/"+Dd,!1);const Ze={...P,signal:j,method:g.toUpperCase(),headers:dv(U.normalize()),body:S,duplex:"half",credentials:B?W:void 0};ee=l&&new s(_,Ze);let xe=await(l?X(ee,P):X(_,Ze));const Qe=Wt.from(xe.headers);if(Z){const le=N.toFiniteNumber(Qe.getContentLength());if(le!=null&&le>z)throw new de("maxContentLength size of "+z+" exceeded",de.ERR_BAD_RESPONSE,u,ee)}const Me=m&&(E==="stream"||E==="response");if(m&&xe.body&&(L||Z||Me&&ge)){const le={};["status","statusText","headers"].forEach(Q=>{le[Q]=xe[Q]});const Te=N.toFiniteNumber(Qe.getContentLength()),[Ye,b]=L&&rp(Te,Fl(sp(L),!0))||[];let M=0;const $=Q=>{if(Z&&(M=Q,M>z))throw new de("maxContentLength size of "+z+" exceeded",de.ERR_BAD_RESPONSE,u,ee);Ye&&Ye(Q)};xe=new o(lp(xe.body,cp,$,()=>{b&&b(),ge&&ge()}),le)}E=E||"text";let be=await v[N.findKey(v,E)||"text"](xe,u);if(Z&&!m&&!Me){let le;if(be!=null&&(typeof be.byteLength=="number"?le=be.byteLength:typeof be.size=="number"?le=be.size:typeof be=="string"&&(le=typeof i=="function"?new i().encode(be).byteLength:be.length)),typeof le=="number"&&le>z)throw new de("maxContentLength size of "+z+" exceeded",de.ERR_BAD_RESPONSE,u,ee)}return!Me&&ge&&ge(),await new Promise((le,Te)=>{Sv(le,Te,{data:be,headers:Wt.from(xe.headers),status:xe.status,statusText:xe.statusText,config:u,request:ee})})}catch(te){if(ge&&ge(),j&&j.aborted&&j.reason instanceof de){const re=j.reason;throw re.config=u,ee&&(re.request=ee),te!==re&&Object.defineProperty(re,"cause",{__proto__:null,value:te,writable:!0,enumerable:!1,configurable:!0}),re}if(q)throw ee&&!q.request&&(q.request=ee),q;if(te instanceof de)throw ee&&!te.request&&(te.request=ee),te;if(te&&te.name==="TypeError"&&/Load failed|fetch/i.test(te.message)){const re=new de("Network Error",de.ERR_NETWORK,u,ee,te&&te.response);throw Object.defineProperty(re,"cause",{__proto__:null,value:te.cause||te,writable:!0,enumerable:!1,configurable:!0}),re}throw de.from(te,te&&te.code,u,ee,te&&te.response)}}},PE=new Map,wv=t=>{let e=t&&t.env||{};const{fetch:n,Request:i,Response:r}=e,s=[i,r,n];let o=s.length,a=o,l,c,f=PE;for(;a--;)l=s[a],c=f.get(l),c===void 0&&f.set(l,c=a?new Map:bE(e)),f=c;return c};wv();const Nd={http:GS,xhr:yE,fetch:{get:wv}};N.forEach(Nd,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{__proto__:null,value:e})}catch{}Object.defineProperty(t,"adapterName",{__proto__:null,value:e})}});const dp=t=>`- ${t}`,LE=t=>N.isFunction(t)||t===null||t===!1;function DE(t,e){t=N.isArray(t)?t:[t];const{length:n}=t;let i,r;const s={};for(let o=0;o<n;o++){i=t[o];let a;if(r=i,!LE(i)&&(r=Nd[(a=String(i)).toLowerCase()],r===void 0))throw new de(`Unknown adapter '${a}'`);if(r&&(N.isFunction(r)||(r=r.get(e))))break;s[a||"#"+o]=r}if(!r){const o=Object.entries(s).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=n?o.length>1?`since :
`+o.map(dp).join(`
`):" "+dp(o[0]):"as no adapter specified";throw new de("There is no suitable adapter to dispatch the request "+a,de.ERR_NOT_SUPPORT)}return r}const Tv={getAdapter:DE,adapters:Nd};function Xc(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new ta(null,t)}function hp(t){return Xc(t),t.headers=Wt.from(t.headers),t.data=jc.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Tv.getAdapter(t.adapter||ea.adapter,t)(t).then(function(i){Xc(t),t.response=i;try{i.data=jc.call(t,t.transformResponse,i)}finally{delete t.response}return i.headers=Wt.from(i.headers),i},function(i){if(!yv(i)&&(Xc(t),i&&i.response)){t.response=i.response;try{i.response.data=jc.call(t,t.transformResponse,i.response)}finally{delete t.response}i.response.headers=Wt.from(i.response.headers)}return Promise.reject(i)})}const cc={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{cc[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const pp={};cc.transitional=function(e,n,i){function r(s,o){return"[Axios v"+Dd+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return(s,o,a)=>{if(e===!1)throw new de(r(o," has been removed"+(n?" in "+n:"")),de.ERR_DEPRECATED);return n&&!pp[o]&&(pp[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};cc.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function NE(t,e,n){if(typeof t!="object"||t===null)throw new de("options must be an object",de.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],o=Object.prototype.hasOwnProperty.call(e,s)?e[s]:void 0;if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new de("option "+s+" must be "+l,de.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new de("Unknown option "+s,de.ERR_BAD_OPTION)}}const cl={assertOptions:NE,validators:cc},zt=cl.validators;let Tr=class{constructor(e){this.defaults=e||{},this.interceptors={request:new np,response:new np}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=(()=>{if(!r.stack)return"";const o=r.stack.indexOf(`
`);return o===-1?"":r.stack.slice(o+1)})();try{if(!i.stack)i.stack=s;else if(s){const o=s.indexOf(`
`),a=o===-1?-1:s.indexOf(`
`,o+1),l=a===-1?"":s.slice(a+1);String(i.stack).endsWith(l)||(i.stack+=`
`+s)}}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Nr(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:s}=n;i!==void 0&&cl.assertOptions(i,{silentJSONParsing:zt.transitional(zt.boolean),forcedJSONParsing:zt.transitional(zt.boolean),clarifyTimeoutError:zt.transitional(zt.boolean),legacyInterceptorReqResOrdering:zt.transitional(zt.boolean),advertiseZstdAcceptEncoding:zt.transitional(zt.boolean),validateStatusUndefinedResolves:zt.transitional(zt.boolean)},!1),r!=null&&(N.isFunction(r)?n.paramsSerializer={serialize:r}:cl.assertOptions(r,{encode:zt.function,serialize:zt.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),cl.assertOptions(n,{baseUrl:zt.spelling("baseURL"),withXsrfToken:zt.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&N.merge(s.common,s[n.method]);s&&N.forEach(["delete","get","head","post","put","patch","query","common"],v=>{delete s[v]}),n.headers=Wt.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(x){if(typeof x.runWhen=="function"&&x.runWhen(n)===!1)return;l=l&&x.synchronous;const p=n.transitional||Pd;p&&p.legacyInterceptorReqResOrdering?a.unshift(x.fulfilled,x.rejected):a.push(x.fulfilled,x.rejected)});const c=[];this.interceptors.response.forEach(function(x){c.push(x.fulfilled,x.rejected)});let f,d=0,h;if(!l){const v=[hp.bind(this),void 0];for(v.unshift(...a),v.push(...c),h=v.length,f=Promise.resolve(n);d<h;)f=f.then(v[d++],v[d++]);return f}h=a.length;let m=n;for(;d<h;){const v=a[d++],x=a[d++];try{m=v(m)}catch(p){x.call(this,p);break}}try{f=hp.call(this,m)}catch(v){return Promise.reject(v)}for(d=0,h=c.length;d<h;)f=f.then(c[d++],c[d++]);return f}getUri(e){e=Nr(this.defaults,e);const n=Ev(e.baseURL,e.url,e.allowAbsoluteUrls,e);return _v(n,e.params,e.paramsSerializer)}};N.forEach(["delete","get","head","options"],function(e){Tr.prototype[e]=function(n,i){return this.request(Nr(i||{},{method:e,url:n,data:i&&N.hasOwnProp(i,"data")?i.data:void 0}))}});N.forEach(["post","put","patch","query"],function(e){function n(i){return function(s,o,a){return this.request(Nr(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Tr.prototype[e]=n(),e!=="query"&&(Tr.prototype[e+"Form"]=n(!0))});let UE=class Av{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const o=new Promise(a=>{i.subscribe(a),s=a}).then(r);return o.cancel=function(){i.unsubscribe(s)},o},e(function(s,o,a){i.reason||(i.reason=new ta(s,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Av(function(r){e=r}),cancel:e}}};function IE(t){return function(n){return t.apply(null,n)}}function OE(t){return N.isObject(t)&&t.isAxiosError===!0}const wf={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(wf).forEach(([t,e])=>{wf[e]=t});function Rv(t){const e=new Tr(t),n=iv(Tr.prototype.request,e);return N.extend(n,Tr.prototype,e,{allOwnKeys:!0}),N.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return Rv(Nr(t,r))},n}const rt=Rv(ea);rt.Axios=Tr;rt.CanceledError=ta;rt.CancelToken=UE;rt.isCancel=yv;rt.VERSION=Dd;rt.toFormData=lc;rt.AxiosError=de;rt.Cancel=rt.CanceledError;rt.all=function(e){return Promise.all(e)};rt.spread=IE;rt.isAxiosError=OE;rt.mergeConfig=Nr;rt.AxiosHeaders=Wt;rt.formToJSON=t=>xv(N.isHTMLForm(t)?new FormData(t):t);rt.getAdapter=Tv.getAdapter;rt.HttpStatusCode=wf;rt.default=rt;const{Axios:xC,AxiosError:yC,CanceledError:SC,isCancel:EC,CancelToken:MC,VERSION:wC,all:TC,Cancel:AC,isAxiosError:RC,spread:CC,toFormData:bC,AxiosHeaders:PC,HttpStatusCode:LC,formToJSON:DC,getAdapter:NC,mergeConfig:UC,create:IC}=rt,Vr=[{id:"U",label:"Top",hint:"White center up",emoji:"⬆️"},{id:"R",label:"Right",hint:"Blue center right",emoji:"➡️"},{id:"F",label:"Front",hint:"Red center facing",emoji:"🔲"},{id:"D",label:"Bottom",hint:"Yellow center down",emoji:"⬇️"},{id:"L",label:"Left",hint:"Green center left",emoji:"⬅️"},{id:"B",label:"Back",hint:"Orange center back",emoji:"🔄"}],FE={W:"#f0f0f0",Y:"#ffd700",R:"#ef4444",O:"#f97316",B:"#3b82f6",G:"#22c55e"};function kE({faceColors:t,onFaceDetected:e,onSolved:n,onStateBuilt:i}){var w,E,U,W;const r=Le.useRef(null),s=Le.useRef(null),o=Le.useRef(null),[a,l]=Le.useState("U"),[c,f]=Le.useState(!1),[d,h]=Le.useState(!1),[m,v]=Le.useState(null),[x,p]=Le.useState(!1),[u,_]=Le.useState(!1),g=Object.keys(t),S=g.length===6,C=Le.useCallback(async()=>{v(null);try{const P=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:1280},height:{ideal:720},facingMode:"environment"}});o.current=P,r.current&&(r.current.srcObject=P,r.current.onloadedmetadata=()=>r.current.play()),p(!0)}catch{v("Camera access denied. Please allow camera permissions and refresh.")}},[]),R=Le.useCallback(()=>{o.current&&(o.current.getTracks().forEach(P=>P.stop()),o.current=null),p(!1)},[]);Le.useEffect(()=>(C(),()=>R()),[]);const T=Le.useCallback(async()=>{var j,ee;if(!r.current||!s.current)return;f(!0),v(null),_(!0),setTimeout(()=>_(!1),300);const P=r.current,z=s.current,Y=z.getContext("2d"),Z=Math.min(P.videoWidth,P.videoHeight),J=(P.videoWidth-Z)/2,D=(P.videoHeight-Z)/2;z.width=300,z.height=300,Y.drawImage(P,J,D,Z,Z,0,0,300,300);const X=z.toDataURL("image/jpeg",.85);try{const ge=await rt.post("/api/detect",{image:X,face:a});e(a,ge.data.colors);const Pe=Vr.find(q=>!{...t,[a]:!0}[q.id]);Pe&&l(Pe.id)}catch(ge){v(((ee=(j=ge.response)==null?void 0:j.data)==null?void 0:ee.detail)||"Color detection failed. Try better lighting.")}finally{f(!1)}},[a,t,e]),L=Le.useCallback(async()=>{var P,z;if(S){h(!0),v(null);try{const Z=(await rt.post("/api/build-state",{faces:t})).data.cube_state;i(Z);const J=Date.now(),D=await rt.post("/api/solve",{cube_state:Z}),X=Date.now()-J;n(D.data.solution,D.data.solve_time_ms||X)}catch(Y){v(((z=(P=Y.response)==null?void 0:P.data)==null?void 0:z.detail)||"Solve failed. Re-scan the cube.")}finally{h(!1)}}},[S,t,i,n]);return I.jsxs("div",{className:"camera-layout",children:[I.jsxs("div",{className:"camera-panel glass animate-fade-in",children:[I.jsxs("div",{className:"camera-header",children:[I.jsx("h2",{children:"Camera Capture"}),I.jsxs("span",{className:"badge badge-purple",children:[g.length,"/6 faces"]})]}),I.jsxs("div",{className:"camera-viewport",children:[u&&I.jsx("div",{className:"capture-flash"}),I.jsx("video",{ref:r,className:"camera-video",playsInline:!0,muted:!0}),I.jsx("canvas",{ref:s,style:{display:"none"}}),I.jsx("div",{className:"overlay-grid",children:Array.from({length:9}).map((P,z)=>I.jsx("div",{className:"grid-cell"},z))}),I.jsx("div",{className:"corner-marker tl"}),I.jsx("div",{className:"corner-marker tr"}),I.jsx("div",{className:"corner-marker bl"}),I.jsx("div",{className:"corner-marker br"}),I.jsxs("div",{className:"face-label",children:[I.jsx("span",{children:(w=Vr.find(P=>P.id===a))==null?void 0:w.emoji}),I.jsxs("span",{children:["Showing: ",I.jsxs("strong",{children:[(E=Vr.find(P=>P.id===a))==null?void 0:E.label," Face"]})]}),I.jsx("span",{className:"face-hint",children:(U=Vr.find(P=>P.id===a))==null?void 0:U.hint})]})]}),I.jsx("div",{className:"camera-controls",children:I.jsx("button",{id:"capture-btn",className:"btn btn-primary btn-lg capture-btn",onClick:T,disabled:c||!x,children:c?I.jsxs(I.Fragment,{children:[I.jsx("div",{className:"spinner"})," Detecting…"]}):I.jsxs(I.Fragment,{children:["📸 Capture ",(W=Vr.find(P=>P.id===a))==null?void 0:W.label," Face"]})})}),m&&I.jsxs("div",{className:"error-msg animate-fade-in",children:["⚠️ ",m]})]}),I.jsxs("div",{className:"camera-sidebar",children:[I.jsxs("div",{className:"face-selector glass animate-fade-in",children:[I.jsx("h3",{children:"Faces"}),I.jsx("div",{className:"face-grid",children:Vr.map(P=>{const z=t[P.id],Y=P.id===a;return I.jsxs("button",{id:`face-btn-${P.id}`,className:`face-btn ${Y?"active":""} ${z?"captured":""}`,onClick:()=>l(P.id),children:[I.jsx("span",{className:"face-emoji",children:P.emoji}),I.jsx("span",{className:"face-name",children:P.label}),I.jsx("span",{className:`face-status ${z?"done":""}`,children:z?"✓":"○"}),z&&I.jsx("div",{className:"face-preview",children:t[P.id].map((Z,J)=>{var D;return I.jsx("div",{className:"preview-sticker",style:{background:FE[((D=Object.entries({W:"U",B:"R",R:"F",Y:"D",G:"L",O:"B"}).find(([,X])=>X===Z))==null?void 0:D[0])||"W"]||"#666"}},J)})})]},P.id)})})]}),I.jsxs("div",{className:"solve-section glass animate-fade-in",children:[I.jsxs("div",{className:"solve-progress",children:[I.jsxs("div",{className:"progress-label",children:[I.jsx("span",{children:"Cube Scanned"}),I.jsxs("span",{children:[g.length,"/6"]})]}),I.jsx("div",{className:"progress-bar",children:I.jsx("div",{className:"progress-fill",style:{width:`${g.length/6*100}%`}})})]}),I.jsx("button",{id:"solve-btn",className:"btn btn-primary btn-lg",style:{width:"100%"},onClick:L,disabled:!S||d,children:d?I.jsxs(I.Fragment,{children:[I.jsx("div",{className:"spinner"})," Solving…"]}):I.jsx(I.Fragment,{children:"🧩 Solve Cube"})}),!S&&I.jsx("p",{className:"solve-hint",children:"Capture all 6 faces to enable solving"})]}),I.jsxs("div",{className:"instructions glass animate-fade-in",children:[I.jsx("h4",{children:"How to scan"}),I.jsxs("ol",{className:"steps-list",children:[I.jsxs("li",{children:["Hold the cube with the ",I.jsx("strong",{children:"White face up"}),", ",I.jsx("strong",{children:"Red face toward you"})]}),I.jsx("li",{children:"Select a face tab and align the 3×3 grid with the stickers"}),I.jsxs("li",{children:["Click ",I.jsx("em",{children:"Capture"})," — colors are auto-detected"]}),I.jsx("li",{children:"Rotate the cube and scan all 6 faces"}),I.jsxs("li",{children:["Click ",I.jsx("em",{children:"Solve Cube"})," for the solution!"]})]})]})]})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ud="164",Gr={ROTATE:0,DOLLY:1,PAN:2},Wr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},BE=0,mp=1,zE=2,Cv=1,HE=2,ai=3,Zi=0,an=1,ui=2,qi=0,Rs=1,gp=2,_p=3,vp=4,VE=5,pr=100,GE=101,WE=102,jE=103,XE=104,qE=200,YE=201,$E=202,KE=203,Tf=204,Af=205,ZE=206,QE=207,JE=208,eM=209,tM=210,nM=211,iM=212,rM=213,sM=214,oM=0,aM=1,lM=2,Bl=3,cM=4,uM=5,fM=6,dM=7,bv=0,hM=1,pM=2,Yi=0,mM=1,gM=2,_M=3,vM=4,xM=5,yM=6,SM=7,Pv=300,Bs=301,zs=302,Rf=303,Cf=304,uc=306,bf=1e3,yr=1001,Pf=1002,Tn=1003,EM=1004,Aa=1005,On=1006,qc=1007,Sr=1008,Qi=1009,MM=1010,wM=1011,Lv=1012,Dv=1013,Hs=1014,ki=1015,fc=1016,Nv=1017,Uv=1018,na=1020,TM=35902,AM=1021,RM=1022,$n=1023,CM=1024,bM=1025,Cs=1026,Xo=1027,PM=1028,Iv=1029,LM=1030,Ov=1031,Fv=1033,Yc=33776,$c=33777,Kc=33778,Zc=33779,xp=35840,yp=35841,Sp=35842,Ep=35843,Mp=36196,wp=37492,Tp=37496,Ap=37808,Rp=37809,Cp=37810,bp=37811,Pp=37812,Lp=37813,Dp=37814,Np=37815,Up=37816,Ip=37817,Op=37818,Fp=37819,kp=37820,Bp=37821,Qc=36492,zp=36494,Hp=36495,DM=36283,Vp=36284,Gp=36285,Wp=36286,NM=3200,UM=3201,kv=0,IM=1,Ii="",jn="srgb",ir="srgb-linear",Id="display-p3",dc="display-p3-linear",zl="linear",lt="srgb",Hl="rec709",Vl="p3",jr=7680,jp=519,OM=512,FM=513,kM=514,Bv=515,BM=516,zM=517,HM=518,VM=519,Xp=35044,qp="300 es",hi=2e3,Gl=2001;class kr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ul=Math.PI/180,Lf=180/Math.PI;function ia(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[t&255]+Ht[t>>8&255]+Ht[t>>16&255]+Ht[t>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function $t(t,e,n){return Math.max(e,Math.min(n,t))}function GM(t,e){return(t%e+e)%e}function Jc(t,e,n){return(1-n)*t+n*e}function lo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const WM={DEG2RAD:ul};class De{constructor(e=0,n=0){De.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,n,i,r,s,o,a,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],m=i[5],v=i[8],x=r[0],p=r[3],u=r[6],_=r[1],g=r[4],S=r[7],C=r[2],R=r[5],T=r[8];return s[0]=o*x+a*_+l*C,s[3]=o*p+a*g+l*R,s[6]=o*u+a*S+l*T,s[1]=c*x+f*_+d*C,s[4]=c*p+f*g+d*R,s[7]=c*u+f*S+d*T,s[2]=h*x+m*_+v*C,s[5]=h*p+m*g+v*R,s[8]=h*u+m*S+v*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=f*o-a*c,h=a*l-f*s,m=c*s-o*l,v=n*d+i*h+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=d*x,e[1]=(r*c-f*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(f*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=m*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(eu.makeScale(e,n)),this}rotate(e){return this.premultiply(eu.makeRotation(-e)),this}translate(e,n){return this.premultiply(eu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const eu=new Ve;function zv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Wl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function jM(){const t=Wl("canvas");return t.style.display="block",t}const Yp={};function XM(t){t in Yp||(Yp[t]=!0,console.warn(t))}const $p=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Kp=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ra={[ir]:{transfer:zl,primaries:Hl,toReference:t=>t,fromReference:t=>t},[jn]:{transfer:lt,primaries:Hl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[dc]:{transfer:zl,primaries:Vl,toReference:t=>t.applyMatrix3(Kp),fromReference:t=>t.applyMatrix3($p)},[Id]:{transfer:lt,primaries:Vl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Kp),fromReference:t=>t.applyMatrix3($p).convertLinearToSRGB()}},qM=new Set([ir,dc]),it={enabled:!0,_workingColorSpace:ir,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!qM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ra[e].toReference,r=Ra[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ra[t].primaries},getTransfer:function(t){return t===Ii?zl:Ra[t].transfer}};function bs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function tu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Xr;class YM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xr===void 0&&(Xr=Wl("canvas")),Xr.width=e.width,Xr.height=e.height;const i=Xr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Xr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Wl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=bs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(bs(n[i]/255)*255):n[i]=bs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $M=0;class Hv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$M++}),this.uuid=ia(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(nu(r[o].image)):s.push(nu(r[o]))}else s=nu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function nu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?YM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let KM=0;class ln extends kr{constructor(e=ln.DEFAULT_IMAGE,n=ln.DEFAULT_MAPPING,i=yr,r=yr,s=On,o=Sr,a=$n,l=Qi,c=ln.DEFAULT_ANISOTROPY,f=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:KM++}),this.uuid=ia(),this.name="",this.source=new Hv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bf:e.x=e.x-Math.floor(e.x);break;case yr:e.x=e.x<0?0:1;break;case Pf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bf:e.y=e.y-Math.floor(e.y);break;case yr:e.y=e.y<0?0:1;break;case Pf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Pv;ln.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,n=0,i=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],h=l[1],m=l[5],v=l[9],x=l[2],p=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-x)<.01&&Math.abs(v-p)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+x)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,S=(m+1)/2,C=(u+1)/2,R=(f+h)/4,T=(d+x)/4,L=(v+p)/4;return g>S&&g>C?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=R/i,s=T/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=R/r,s=L/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=T/s,r=L/s),this.set(i,r,s,n),this}let _=Math.sqrt((p-v)*(p-v)+(d-x)*(d-x)+(h-f)*(h-f));return Math.abs(_)<.001&&(_=1),this.x=(p-v)/_,this.y=(d-x)/_,this.z=(h-f)/_,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ZM extends kr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new ln(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Hv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ur extends ZM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Vv extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class QM extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ir{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],m=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=v,e[n+3]=x;return}if(d!==x||l!==h||c!==m||f!==v){let p=1-a;const u=l*h+c*m+f*v+d*x,_=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const C=Math.sqrt(g),R=Math.atan2(C,u*_);p=Math.sin(p*R)/C,a=Math.sin(a*R)/C}const S=a*_;if(l=l*p+h*S,c=c*p+m*S,f=f*p+v*S,d=d*p+x*S,p===1-a){const C=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=C,c*=C,f*=C,d*=C}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[o],h=s[o+1],m=s[o+2],v=s[o+3];return e[n]=a*v+f*d+l*m-c*h,e[n+1]=l*v+f*h+c*d-a*m,e[n+2]=c*v+f*m+a*h-l*d,e[n+3]=f*v-a*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),d=a(s/2),h=l(i/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*f*d+c*m*v,this._y=c*m*d-h*f*v,this._z=c*f*v+h*m*d,this._w=c*f*d-h*m*v;break;case"YXZ":this._x=h*f*d+c*m*v,this._y=c*m*d-h*f*v,this._z=c*f*v-h*m*d,this._w=c*f*d+h*m*v;break;case"ZXY":this._x=h*f*d-c*m*v,this._y=c*m*d+h*f*v,this._z=c*f*v+h*m*d,this._w=c*f*d-h*m*v;break;case"ZYX":this._x=h*f*d-c*m*v,this._y=c*m*d+h*f*v,this._z=c*f*v-h*m*d,this._w=c*f*d+h*m*v;break;case"YZX":this._x=h*f*d+c*m*v,this._y=c*m*d+h*f*v,this._z=c*f*v-h*m*d,this._w=c*f*d-h*m*v;break;case"XZY":this._x=h*f*d-c*m*v,this._y=c*m*d-h*f*v,this._z=c*f*v+h*m*d,this._w=c*f*d+h*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),d=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Zp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Zp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*f,this.y=i+l*f+a*c-s*d,this.z=r+l*d+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return iu.copy(this).projectOnVector(e),this.sub(iu)}reflect(e){return this.sub(iu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const iu=new O,Zp=new Ir;class ra{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Pn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Pn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Pn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Pn):Pn.fromBufferAttribute(s,o),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ca.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ca.copy(i.boundingBox)),Ca.applyMatrix4(e.matrixWorld),this.union(Ca)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(co),ba.subVectors(this.max,co),qr.subVectors(e.a,co),Yr.subVectors(e.b,co),$r.subVectors(e.c,co),wi.subVectors(Yr,qr),Ti.subVectors($r,Yr),sr.subVectors(qr,$r);let n=[0,-wi.z,wi.y,0,-Ti.z,Ti.y,0,-sr.z,sr.y,wi.z,0,-wi.x,Ti.z,0,-Ti.x,sr.z,0,-sr.x,-wi.y,wi.x,0,-Ti.y,Ti.x,0,-sr.y,sr.x,0];return!ru(n,qr,Yr,$r,ba)||(n=[1,0,0,0,1,0,0,0,1],!ru(n,qr,Yr,$r,ba))?!1:(Pa.crossVectors(wi,Ti),n=[Pa.x,Pa.y,Pa.z],ru(n,qr,Yr,$r,ba))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ni=[new O,new O,new O,new O,new O,new O,new O,new O],Pn=new O,Ca=new ra,qr=new O,Yr=new O,$r=new O,wi=new O,Ti=new O,sr=new O,co=new O,ba=new O,Pa=new O,or=new O;function ru(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){or.fromArray(t,s);const a=r.x*Math.abs(or.x)+r.y*Math.abs(or.y)+r.z*Math.abs(or.z),l=e.dot(or),c=n.dot(or),f=i.dot(or);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const JM=new ra,uo=new O,su=new O;class Od{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):JM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;uo.subVectors(e,this.center);const n=uo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(uo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(su.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(uo.copy(e.center).add(su)),this.expandByPoint(uo.copy(e.center).sub(su))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ii=new O,ou=new O,La=new O,Ai=new O,au=new O,Da=new O,lu=new O;class Gv{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,n),ii.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ou.copy(e).add(n).multiplyScalar(.5),La.copy(n).sub(e).normalize(),Ai.copy(this.origin).sub(ou);const s=e.distanceTo(n)*.5,o=-this.direction.dot(La),a=Ai.dot(this.direction),l=-Ai.dot(La),c=Ai.lengthSq(),f=Math.abs(1-o*o);let d,h,m,v;if(f>0)if(d=o*l-a,h=o*a-l,v=s*f,d>=0)if(h>=-v)if(h<=v){const x=1/f;d*=x,h*=x,m=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h<=-v?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c):h<=v?(d=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ou).addScaledVector(La,h),m}intersectSphere(e,n){ii.subVectors(e.center,this.origin);const i=ii.dot(this.direction),r=ii.dot(ii)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,n,i,r,s){au.subVectors(n,e),Da.subVectors(i,e),lu.crossVectors(au,Da);let o=this.direction.dot(lu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ai.subVectors(this.origin,e);const l=a*this.direction.dot(Da.crossVectors(Ai,Da));if(l<0)return null;const c=a*this.direction.dot(au.cross(Ai));if(c<0||l+c>o)return null;const f=-a*Ai.dot(lu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,n,i,r,s,o,a,l,c,f,d,h,m,v,x,p){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,d,h,m,v,x,p)}set(e,n,i,r,s,o,a,l,c,f,d,h,m,v,x,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=m,u[7]=v,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Kr.setFromMatrixColumn(e,0).length(),s=1/Kr.setFromMatrixColumn(e,1).length(),o=1/Kr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,m=o*d,v=a*f,x=a*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=m+v*c,n[5]=h-x*c,n[9]=-a*l,n[2]=x-h*c,n[6]=v+m*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,m=l*d,v=c*f,x=c*d;n[0]=h+x*a,n[4]=v*a-m,n[8]=o*c,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=m*a-v,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,m=l*d,v=c*f,x=c*d;n[0]=h-x*a,n[4]=-o*d,n[8]=v+m*a,n[1]=m+v*a,n[5]=o*f,n[9]=x-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,m=o*d,v=a*f,x=a*d;n[0]=l*f,n[4]=v*c-m,n[8]=h*c+x,n[1]=l*d,n[5]=x*c+h,n[9]=m*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,v=a*l,x=a*c;n[0]=l*f,n[4]=x-h*d,n[8]=v*d+m,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=m*d+v,n[10]=h-x*d}else if(e.order==="XZY"){const h=o*l,m=o*c,v=a*l,x=a*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+x,n[5]=o*f,n[9]=m*d-v,n[2]=v*d-m,n[6]=a*f,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ew,e,tw)}lookAt(e,n,i){const r=this.elements;return un.subVectors(e,n),un.lengthSq()===0&&(un.z=1),un.normalize(),Ri.crossVectors(i,un),Ri.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Ri.crossVectors(i,un)),Ri.normalize(),Na.crossVectors(un,Ri),r[0]=Ri.x,r[4]=Na.x,r[8]=un.x,r[1]=Ri.y,r[5]=Na.y,r[9]=un.y,r[2]=Ri.z,r[6]=Na.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],m=i[13],v=i[2],x=i[6],p=i[10],u=i[14],_=i[3],g=i[7],S=i[11],C=i[15],R=r[0],T=r[4],L=r[8],w=r[12],E=r[1],U=r[5],W=r[9],P=r[13],z=r[2],Y=r[6],Z=r[10],J=r[14],D=r[3],X=r[7],j=r[11],ee=r[15];return s[0]=o*R+a*E+l*z+c*D,s[4]=o*T+a*U+l*Y+c*X,s[8]=o*L+a*W+l*Z+c*j,s[12]=o*w+a*P+l*J+c*ee,s[1]=f*R+d*E+h*z+m*D,s[5]=f*T+d*U+h*Y+m*X,s[9]=f*L+d*W+h*Z+m*j,s[13]=f*w+d*P+h*J+m*ee,s[2]=v*R+x*E+p*z+u*D,s[6]=v*T+x*U+p*Y+u*X,s[10]=v*L+x*W+p*Z+u*j,s[14]=v*w+x*P+p*J+u*ee,s[3]=_*R+g*E+S*z+C*D,s[7]=_*T+g*U+S*Y+C*X,s[11]=_*L+g*W+S*Z+C*j,s[15]=_*w+g*P+S*J+C*ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],d=e[6],h=e[10],m=e[14],v=e[3],x=e[7],p=e[11],u=e[15];return v*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*m-i*l*m)+x*(+n*l*m-n*c*h+s*o*h-r*o*m+r*c*f-s*l*f)+p*(+n*c*d-n*a*m-s*o*d+i*o*m+s*a*f-i*c*f)+u*(-r*a*f-n*l*d+n*a*h+r*o*d-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=e[9],h=e[10],m=e[11],v=e[12],x=e[13],p=e[14],u=e[15],_=d*p*c-x*h*c+x*l*m-a*p*m-d*l*u+a*h*u,g=v*h*c-f*p*c-v*l*m+o*p*m+f*l*u-o*h*u,S=f*x*c-v*d*c+v*a*m-o*x*m-f*a*u+o*d*u,C=v*d*l-f*x*l-v*a*h+o*x*h+f*a*p-o*d*p,R=n*_+i*g+r*S+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return e[0]=_*T,e[1]=(x*h*s-d*p*s-x*r*m+i*p*m+d*r*u-i*h*u)*T,e[2]=(a*p*s-x*l*s+x*r*c-i*p*c-a*r*u+i*l*u)*T,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*m-i*l*m)*T,e[4]=g*T,e[5]=(f*p*s-v*h*s+v*r*m-n*p*m-f*r*u+n*h*u)*T,e[6]=(v*l*s-o*p*s-v*r*c+n*p*c+o*r*u-n*l*u)*T,e[7]=(o*h*s-f*l*s+f*r*c-n*h*c-o*r*m+n*l*m)*T,e[8]=S*T,e[9]=(v*d*s-f*x*s-v*i*m+n*x*m+f*i*u-n*d*u)*T,e[10]=(o*x*s-v*a*s+v*i*c-n*x*c-o*i*u+n*a*u)*T,e[11]=(f*a*s-o*d*s-f*i*c+n*d*c+o*i*m-n*a*m)*T,e[12]=C*T,e[13]=(f*x*r-v*d*r+v*i*h-n*x*h-f*i*p+n*d*p)*T,e[14]=(v*a*r-o*x*r-v*i*l+n*x*l+o*i*p-n*a*p)*T,e[15]=(o*d*r-f*a*r+f*i*l-n*d*l-o*i*h+n*a*h)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,d=a+a,h=s*c,m=s*f,v=s*d,x=o*f,p=o*d,u=a*d,_=l*c,g=l*f,S=l*d,C=i.x,R=i.y,T=i.z;return r[0]=(1-(x+u))*C,r[1]=(m+S)*C,r[2]=(v-g)*C,r[3]=0,r[4]=(m-S)*R,r[5]=(1-(h+u))*R,r[6]=(p+_)*R,r[7]=0,r[8]=(v+g)*T,r[9]=(p-_)*T,r[10]=(1-(h+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Kr.set(r[0],r[1],r[2]).length();const o=Kr.set(r[4],r[5],r[6]).length(),a=Kr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ln.copy(this);const c=1/s,f=1/o,d=1/a;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=f,Ln.elements[5]*=f,Ln.elements[6]*=f,Ln.elements[8]*=d,Ln.elements[9]*=d,Ln.elements[10]*=d,n.setFromRotationMatrix(Ln),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=hi){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let m,v;if(a===hi)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Gl)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=hi){const l=this.elements,c=1/(n-e),f=1/(i-r),d=1/(o-s),h=(n+e)*c,m=(i+r)*f;let v,x;if(a===hi)v=(o+s)*d,x=-2*d;else if(a===Gl)v=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Kr=new O,Ln=new vt,ew=new O(0,0,0),tw=new O(1,1,1),Ri=new O,Na=new O,un=new O,Qp=new vt,Jp=new Ir;class Jn{constructor(e=0,n=0,i=0,r=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],d=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin($t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Qp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Jp.setFromEuler(this),this.setFromQuaternion(Jp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class Wv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nw=0;const em=new O,Zr=new Ir,ri=new vt,Ua=new O,fo=new O,iw=new O,rw=new Ir,tm=new O(1,0,0),nm=new O(0,1,0),im=new O(0,0,1),rm={type:"added"},sw={type:"removed"},Qr={type:"childadded",child:null},cu={type:"childremoved",child:null};class jt extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nw++}),this.uuid=ia(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new O,n=new Jn,i=new Ir,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new Ve}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Zr.setFromAxisAngle(e,n),this.quaternion.multiply(Zr),this}rotateOnWorldAxis(e,n){return Zr.setFromAxisAngle(e,n),this.quaternion.premultiply(Zr),this}rotateX(e){return this.rotateOnAxis(tm,e)}rotateY(e){return this.rotateOnAxis(nm,e)}rotateZ(e){return this.rotateOnAxis(im,e)}translateOnAxis(e,n){return em.copy(e).applyQuaternion(this.quaternion),this.position.add(em.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(tm,e)}translateY(e){return this.translateOnAxis(nm,e)}translateZ(e){return this.translateOnAxis(im,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ua.copy(e):Ua.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(fo,Ua,this.up):ri.lookAt(Ua,fo,this.up),this.quaternion.setFromRotationMatrix(ri),r&&(ri.extractRotation(r.matrixWorld),Zr.setFromRotationMatrix(ri),this.quaternion.premultiply(Zr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rm),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(sw),cu.child=e,this.dispatchEvent(cu),cu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rm),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,e,iw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,rw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}jt.DEFAULT_UP=new O(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new O,si=new O,uu=new O,oi=new O,Jr=new O,es=new O,sm=new O,fu=new O,du=new O,hu=new O;class Yn{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Dn.subVectors(e,n),r.cross(Dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Dn.subVectors(r,n),si.subVectors(i,n),uu.subVectors(e,n);const o=Dn.dot(Dn),a=Dn.dot(si),l=Dn.dot(uu),c=si.dot(si),f=si.dot(uu),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,m=(c*l-a*f)*h,v=(o*f-a*l)*h;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,oi.x),l.addScaledVector(o,oi.y),l.addScaledVector(a,oi.z),l)}static isFrontFacing(e,n,i,r){return Dn.subVectors(i,n),si.subVectors(e,n),Dn.cross(si).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Dn.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Yn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Yn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Jr.subVectors(r,i),es.subVectors(s,i),fu.subVectors(e,i);const l=Jr.dot(fu),c=es.dot(fu);if(l<=0&&c<=0)return n.copy(i);du.subVectors(e,r);const f=Jr.dot(du),d=es.dot(du);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Jr,o);hu.subVectors(e,s);const m=Jr.dot(hu),v=es.dot(hu);if(v>=0&&m<=v)return n.copy(s);const x=m*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(es,a);const p=f*v-m*d;if(p<=0&&d-f>=0&&m-v>=0)return sm.subVectors(s,r),a=(d-f)/(d-f+(m-v)),n.copy(r).addScaledVector(sm,a);const u=1/(p+x+h);return o=x*u,a=h*u,n.copy(i).addScaledVector(Jr,o).addScaledVector(es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},Ia={h:0,s:0,l:0};function pu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=GM(e,1),n=$t(n,0,1),i=$t(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=pu(o,s,e+1/3),this.g=pu(o,s,e),this.b=pu(o,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,n=jn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=jn){const i=jv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}copyLinearToSRGB(e){return this.r=tu(e.r),this.g=tu(e.g),this.b=tu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return it.fromWorkingColorSpace(Vt.copy(this),e),Math.round($t(Vt.r*255,0,255))*65536+Math.round($t(Vt.g*255,0,255))*256+Math.round($t(Vt.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.fromWorkingColorSpace(Vt.copy(this),n);const i=Vt.r,r=Vt.g,s=Vt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=it.workingColorSpace){return it.fromWorkingColorSpace(Vt.copy(this),n),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=jn){it.fromWorkingColorSpace(Vt.copy(this),e);const n=Vt.r,i=Vt.g,r=Vt.b;return e!==jn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+n,Ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ci),e.getHSL(Ia);const i=Jc(Ci.h,Ia.h,n),r=Jc(Ci.s,Ia.s,n),s=Jc(Ci.l,Ia.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new Je;Je.NAMES=jv;let ow=0;class sa extends kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ow++}),this.uuid=ia(),this.name="",this.type="Material",this.blending=Rs,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tf,this.blendDst=Af,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Bl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(i.blending=this.blending),this.side!==Zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Tf&&(i.blendSrc=this.blendSrc),this.blendDst!==Af&&(i.blendDst=this.blendDst),this.blendEquation!==pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Bl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==jr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==jr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Xv extends sa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=bv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new O,Oa=new De;class Qn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Xp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return XM("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Oa.fromBufferAttribute(this,n),Oa.applyMatrix3(e),this.setXY(n,Oa.x,Oa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=lo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=lo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=lo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=lo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=lo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xp&&(e.usage=this.usage),e}}class qv extends Qn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Yv extends Qn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ar extends Qn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let aw=0;const yn=new vt,mu=new jt,ts=new O,fn=new ra,ho=new ra,Ct=new O;class Br extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aw++}),this.uuid=ia(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zv(e)?Yv:qv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,n,i){return yn.makeTranslation(e,n,i),this.applyMatrix4(yn),this}scale(e,n,i){return yn.makeScale(e,n,i),this.applyMatrix4(yn),this}lookAt(e){return mu.lookAt(e),mu.updateMatrix(),this.applyMatrix4(mu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ar(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ra);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Od);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ho.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(fn.min,ho.min),fn.expandByPoint(Ct),Ct.addVectors(fn.max,ho.max),fn.expandByPoint(Ct)):(fn.expandByPoint(ho.min),fn.expandByPoint(ho.max))}fn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ct));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Ct.fromBufferAttribute(a,c),l&&(ts.fromBufferAttribute(e,c),Ct.add(ts)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new O,l[L]=new O;const c=new O,f=new O,d=new O,h=new De,m=new De,v=new De,x=new O,p=new O;function u(L,w,E){c.fromBufferAttribute(i,L),f.fromBufferAttribute(i,w),d.fromBufferAttribute(i,E),h.fromBufferAttribute(s,L),m.fromBufferAttribute(s,w),v.fromBufferAttribute(s,E),f.sub(c),d.sub(c),m.sub(h),v.sub(h);const U=1/(m.x*v.y-v.x*m.y);isFinite(U)&&(x.copy(f).multiplyScalar(v.y).addScaledVector(d,-m.y).multiplyScalar(U),p.copy(d).multiplyScalar(m.x).addScaledVector(f,-v.x).multiplyScalar(U),a[L].add(x),a[w].add(x),a[E].add(x),l[L].add(p),l[w].add(p),l[E].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let L=0,w=_.length;L<w;++L){const E=_[L],U=E.start,W=E.count;for(let P=U,z=U+W;P<z;P+=3)u(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const g=new O,S=new O,C=new O,R=new O;function T(L){C.fromBufferAttribute(r,L),R.copy(C);const w=a[L];g.copy(w),g.sub(C.multiplyScalar(C.dot(w))).normalize(),S.crossVectors(R,w);const U=S.dot(l[L])<0?-1:1;o.setXYZW(L,g.x,g.y,g.z,U)}for(let L=0,w=_.length;L<w;++L){const E=_[L],U=E.start,W=E.count;for(let P=U,z=U+W;P<z;P+=3)T(e.getX(P+0)),T(e.getX(P+1)),T(e.getX(P+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,f=new O,d=new O;if(e)for(let h=0,m=e.count;h<m;h+=3){const v=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,p),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(f),l.add(f),c.add(f),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ct.fromBufferAttribute(e,n),Ct.normalize(),e.setXYZ(n,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,d=a.normalized,h=new c.constructor(l.length*f);let m=0,v=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*f;for(let u=0;u<f;u++)h[v++]=c[m++]}return new Qn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Br,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,d=c.length;f<d;f++){const h=c[f],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let h=0,m=d.length;h<m;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const om=new vt,ar=new Gv,Fa=new Od,am=new O,ns=new O,is=new O,rs=new O,gu=new O,ka=new O,Ba=new De,za=new De,Ha=new De,lm=new O,cm=new O,um=new O,Va=new O,Ga=new O;class Fn extends jt{constructor(e=new Br,n=new Xv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ka.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],d=s[l];f!==0&&(gu.fromBufferAttribute(d,e),o?ka.addScaledVector(gu,f):ka.addScaledVector(gu.sub(n),f))}n.add(ka)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fa.copy(i.boundingSphere),Fa.applyMatrix4(s),ar.copy(e.ray).recast(e.near),!(Fa.containsPoint(ar.origin)===!1&&(ar.intersectSphere(Fa,am)===null||ar.origin.distanceToSquared(am)>(e.far-e.near)**2))&&(om.copy(s).invert(),ar.copy(e.ray).applyMatrix4(om),!(i.boundingBox!==null&&ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ar)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const p=h[v],u=o[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=_,C=g;S<C;S+=3){const R=a.getX(S),T=a.getX(S+1),L=a.getX(S+2);r=Wa(this,u,e,i,c,f,d,R,T,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=v,u=x;p<u;p+=3){const _=a.getX(p),g=a.getX(p+1),S=a.getX(p+2);r=Wa(this,o,e,i,c,f,d,_,g,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const p=h[v],u=o[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=_,C=g;S<C;S+=3){const R=S,T=S+1,L=S+2;r=Wa(this,u,e,i,c,f,d,R,T,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=v,u=x;p<u;p+=3){const _=p,g=p+1,S=p+2;r=Wa(this,o,e,i,c,f,d,_,g,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function lw(t,e,n,i,r,s,o,a){let l;if(e.side===an?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Zi,a),l===null)return null;Ga.copy(a),Ga.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ga);return c<n.near||c>n.far?null:{distance:c,point:Ga.clone(),object:t}}function Wa(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,ns),t.getVertexPosition(l,is),t.getVertexPosition(c,rs);const f=lw(t,e,n,i,ns,is,rs,Va);if(f){r&&(Ba.fromBufferAttribute(r,a),za.fromBufferAttribute(r,l),Ha.fromBufferAttribute(r,c),f.uv=Yn.getInterpolation(Va,ns,is,rs,Ba,za,Ha,new De)),s&&(Ba.fromBufferAttribute(s,a),za.fromBufferAttribute(s,l),Ha.fromBufferAttribute(s,c),f.uv1=Yn.getInterpolation(Va,ns,is,rs,Ba,za,Ha,new De)),o&&(lm.fromBufferAttribute(o,a),cm.fromBufferAttribute(o,l),um.fromBufferAttribute(o,c),f.normal=Yn.getInterpolation(Va,ns,is,rs,lm,cm,um,new O),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new O,materialIndex:0};Yn.getNormal(ns,is,rs,d.normal),f.face=d}return f}class Ys extends Br{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],d=[];let h=0,m=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ar(c,3)),this.setAttribute("normal",new Ar(f,3)),this.setAttribute("uv",new Ar(d,2));function v(x,p,u,_,g,S,C,R,T,L,w){const E=S/T,U=C/L,W=S/2,P=C/2,z=R/2,Y=T+1,Z=L+1;let J=0,D=0;const X=new O;for(let j=0;j<Z;j++){const ee=j*U-P;for(let ge=0;ge<Y;ge++){const Pe=ge*E-W;X[x]=Pe*_,X[p]=ee*g,X[u]=z,c.push(X.x,X.y,X.z),X[x]=0,X[p]=0,X[u]=R>0?1:-1,f.push(X.x,X.y,X.z),d.push(ge/T),d.push(1-j/L),J+=1}}for(let j=0;j<L;j++)for(let ee=0;ee<T;ee++){const ge=h+ee+Y*j,Pe=h+ee+Y*(j+1),q=h+(ee+1)+Y*(j+1),ae=h+(ee+1)+Y*j;l.push(ge,Pe,ae),l.push(Pe,q,ae),D+=6}a.addGroup(m,D,w),m+=D,h+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function qt(t){const e={};for(let n=0;n<t.length;n++){const i=Vs(t[n]);for(const r in i)e[r]=i[r]}return e}function cw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function $v(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const uw={clone:Vs,merge:qt};var fw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends sa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fw,this.fragmentShader=dw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=cw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Kv extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=hi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bi=new O,fm=new De,dm=new De;class Mn extends Kv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Lf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ul*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lf*2*Math.atan(Math.tan(ul*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,n){return this.getViewBounds(e,fm,dm),n.subVectors(dm,fm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ul*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ss=-90,os=1;class hw extends jt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Mn(ss,os,e,n);r.layers=this.layers,this.add(r);const s=new Mn(ss,os,e,n);s.layers=this.layers,this.add(s);const o=new Mn(ss,os,e,n);o.layers=this.layers,this.add(o);const a=new Mn(ss,os,e,n);a.layers=this.layers,this.add(a);const l=new Mn(ss,os,e,n);l.layers=this.layers,this.add(l);const c=new Mn(ss,os,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Zv extends ln{constructor(e,n,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:Bs,super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pw extends Ur{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Zv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:On}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ys(5,5,5),s=new Ji({name:"CubemapFromEquirect",uniforms:Vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:qi});s.uniforms.tEquirect.value=n;const o=new Fn(r,s),a=n.minFilter;return n.minFilter===Sr&&(n.minFilter=On),new hw(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const _u=new O,mw=new O,gw=new Ve;class Di{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=_u.subVectors(i,n).cross(mw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(_u),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||gw.getNormalMatrix(e),r=this.coplanarPoint(_u).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new Od,ja=new O;class Fd{constructor(e=new Di,n=new Di,i=new Di,r=new Di,s=new Di,o=new Di){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=hi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],d=r[6],h=r[7],m=r[8],v=r[9],x=r[10],p=r[11],u=r[12],_=r[13],g=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,p-m,S-u).normalize(),i[1].setComponents(l+s,h+c,p+m,S+u).normalize(),i[2].setComponents(l+o,h+f,p+v,S+_).normalize(),i[3].setComponents(l-o,h-f,p-v,S-_).normalize(),i[4].setComponents(l-a,h-d,p-x,S-g).normalize(),n===hi)i[5].setComponents(l+a,h+d,p+x,S+g).normalize();else if(n===Gl)i[5].setComponents(a,d,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ja.x=r.normal.x>0?e.max.x:e.min.x,ja.y=r.normal.y>0?e.max.y:e.min.y,ja.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ja)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function _w(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,f),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const f=l.array,d=l._updateRange,h=l.updateRanges;if(t.bindBuffer(c,a),d.count===-1&&h.length===0&&t.bufferSubData(c,0,f),h.length!==0){for(let m=0,v=h.length;m<v;m++){const x=h[m];t.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}d.count!==-1&&(t.bufferSubData(c,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class oa extends Br{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,d=e/a,h=n/l,m=[],v=[],x=[],p=[];for(let u=0;u<f;u++){const _=u*h-o;for(let g=0;g<c;g++){const S=g*d-s;v.push(S,-_,0),x.push(0,0,1),p.push(g/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<a;_++){const g=_+c*u,S=_+c*(u+1),C=_+1+c*(u+1),R=_+1+c*u;m.push(g,S,R),m.push(S,C,R)}this.setIndex(m),this.setAttribute("position",new Ar(v,3)),this.setAttribute("normal",new Ar(x,3)),this.setAttribute("uv",new Ar(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.width,e.height,e.widthSegments,e.heightSegments)}}var vw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ew=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ww=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Aw=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Rw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Cw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Lw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Dw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Nw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Uw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Iw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ow=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,zw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Hw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Vw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ww=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yw="gl_FragColor = linearToOutputTexel( gl_FragColor );",$w=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Kw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Zw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,oT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,uT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_T=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ST=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ET=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,RT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,NT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,UT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,IT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,OT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,FT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,HT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,GT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,XT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$T=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ZT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,eA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,aA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _A=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,TA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,AA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,RA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,DA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,OA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,BA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,VA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,XA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$A=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:vw,alphahash_pars_fragment:xw,alphamap_fragment:yw,alphamap_pars_fragment:Sw,alphatest_fragment:Ew,alphatest_pars_fragment:Mw,aomap_fragment:ww,aomap_pars_fragment:Tw,batching_pars_vertex:Aw,batching_vertex:Rw,begin_vertex:Cw,beginnormal_vertex:bw,bsdfs:Pw,iridescence_fragment:Lw,bumpmap_pars_fragment:Dw,clipping_planes_fragment:Nw,clipping_planes_pars_fragment:Uw,clipping_planes_pars_vertex:Iw,clipping_planes_vertex:Ow,color_fragment:Fw,color_pars_fragment:kw,color_pars_vertex:Bw,color_vertex:zw,common:Hw,cube_uv_reflection_fragment:Vw,defaultnormal_vertex:Gw,displacementmap_pars_vertex:Ww,displacementmap_vertex:jw,emissivemap_fragment:Xw,emissivemap_pars_fragment:qw,colorspace_fragment:Yw,colorspace_pars_fragment:$w,envmap_fragment:Kw,envmap_common_pars_fragment:Zw,envmap_pars_fragment:Qw,envmap_pars_vertex:Jw,envmap_physical_pars_fragment:uT,envmap_vertex:eT,fog_vertex:tT,fog_pars_vertex:nT,fog_fragment:iT,fog_pars_fragment:rT,gradientmap_pars_fragment:sT,lightmap_pars_fragment:oT,lights_lambert_fragment:aT,lights_lambert_pars_fragment:lT,lights_pars_begin:cT,lights_toon_fragment:fT,lights_toon_pars_fragment:dT,lights_phong_fragment:hT,lights_phong_pars_fragment:pT,lights_physical_fragment:mT,lights_physical_pars_fragment:gT,lights_fragment_begin:_T,lights_fragment_maps:vT,lights_fragment_end:xT,logdepthbuf_fragment:yT,logdepthbuf_pars_fragment:ST,logdepthbuf_pars_vertex:ET,logdepthbuf_vertex:MT,map_fragment:wT,map_pars_fragment:TT,map_particle_fragment:AT,map_particle_pars_fragment:RT,metalnessmap_fragment:CT,metalnessmap_pars_fragment:bT,morphinstance_vertex:PT,morphcolor_vertex:LT,morphnormal_vertex:DT,morphtarget_pars_vertex:NT,morphtarget_vertex:UT,normal_fragment_begin:IT,normal_fragment_maps:OT,normal_pars_fragment:FT,normal_pars_vertex:kT,normal_vertex:BT,normalmap_pars_fragment:zT,clearcoat_normal_fragment_begin:HT,clearcoat_normal_fragment_maps:VT,clearcoat_pars_fragment:GT,iridescence_pars_fragment:WT,opaque_fragment:jT,packing:XT,premultiplied_alpha_fragment:qT,project_vertex:YT,dithering_fragment:$T,dithering_pars_fragment:KT,roughnessmap_fragment:ZT,roughnessmap_pars_fragment:QT,shadowmap_pars_fragment:JT,shadowmap_pars_vertex:eA,shadowmap_vertex:tA,shadowmask_pars_fragment:nA,skinbase_vertex:iA,skinning_pars_vertex:rA,skinning_vertex:sA,skinnormal_vertex:oA,specularmap_fragment:aA,specularmap_pars_fragment:lA,tonemapping_fragment:cA,tonemapping_pars_fragment:uA,transmission_fragment:fA,transmission_pars_fragment:dA,uv_pars_fragment:hA,uv_pars_vertex:pA,uv_vertex:mA,worldpos_vertex:gA,background_vert:_A,background_frag:vA,backgroundCube_vert:xA,backgroundCube_frag:yA,cube_vert:SA,cube_frag:EA,depth_vert:MA,depth_frag:wA,distanceRGBA_vert:TA,distanceRGBA_frag:AA,equirect_vert:RA,equirect_frag:CA,linedashed_vert:bA,linedashed_frag:PA,meshbasic_vert:LA,meshbasic_frag:DA,meshlambert_vert:NA,meshlambert_frag:UA,meshmatcap_vert:IA,meshmatcap_frag:OA,meshnormal_vert:FA,meshnormal_frag:kA,meshphong_vert:BA,meshphong_frag:zA,meshphysical_vert:HA,meshphysical_frag:VA,meshtoon_vert:GA,meshtoon_frag:WA,points_vert:jA,points_frag:XA,shadow_vert:qA,shadow_frag:YA,sprite_vert:$A,sprite_frag:KA},fe={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Xn={basic:{uniforms:qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Je(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:qt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:qt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Je(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:qt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:qt([fe.points,fe.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:qt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:qt([fe.common,fe.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:qt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:qt([fe.sprite,fe.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:qt([fe.common,fe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:qt([fe.lights,fe.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Xn.physical={uniforms:qt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Xa={r:0,b:0,g:0},cr=new Jn,ZA=new vt;function QA(t,e,n,i,r,s,o){const a=new Je(0);let l=s===!0?0:1,c,f,d=null,h=0,m=null;function v(_){let g=_.isScene===!0?_.background:null;return g&&g.isTexture&&(g=(_.backgroundBlurriness>0?n:e).get(g)),g}function x(_){let g=!1;const S=v(_);S===null?u(a,l):S&&S.isColor&&(u(S,1),g=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function p(_,g){const S=v(g);S&&(S.isCubeTexture||S.mapping===uc)?(f===void 0&&(f=new Fn(new Ys(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:Vs(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(C,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),cr.copy(g.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),f.material.uniforms.envMap.value=S,f.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(ZA.makeRotationFromEuler(cr)),f.material.toneMapped=it.getTransfer(S.colorSpace)!==lt,(d!==S||h!==S.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,d=S,h=S.version,m=t.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Fn(new oa(2,2),new Ji({name:"BackgroundMaterial",uniforms:Vs(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=it.getTransfer(S.colorSpace)!==lt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||h!==S.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,d=S,h=S.version,m=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function u(_,g){_.getRGB(Xa,$v(t)),i.buffers.color.setClear(Xa.r,Xa.g,Xa.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(_,g=1){a.set(_),l=g,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,u(a,l)},render:x,addToRenderList:p}}function JA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(E,U,W,P,z){let Y=!1;const Z=d(P,W,U);s!==Z&&(s=Z,c(s.object)),Y=m(E,P,W,z),Y&&v(E,P,W,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,S(E,U,W,P),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return t.createVertexArray()}function c(E){return t.bindVertexArray(E)}function f(E){return t.deleteVertexArray(E)}function d(E,U,W){const P=W.wireframe===!0;let z=i[E.id];z===void 0&&(z={},i[E.id]=z);let Y=z[U.id];Y===void 0&&(Y={},z[U.id]=Y);let Z=Y[P];return Z===void 0&&(Z=h(l()),Y[P]=Z),Z}function h(E){const U=[],W=[],P=[];for(let z=0;z<n;z++)U[z]=0,W[z]=0,P[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:W,attributeDivisors:P,object:E,attributes:{},index:null}}function m(E,U,W,P){const z=s.attributes,Y=U.attributes;let Z=0;const J=W.getAttributes();for(const D in J)if(J[D].location>=0){const j=z[D];let ee=Y[D];if(ee===void 0&&(D==="instanceMatrix"&&E.instanceMatrix&&(ee=E.instanceMatrix),D==="instanceColor"&&E.instanceColor&&(ee=E.instanceColor)),j===void 0||j.attribute!==ee||ee&&j.data!==ee.data)return!0;Z++}return s.attributesNum!==Z||s.index!==P}function v(E,U,W,P){const z={},Y=U.attributes;let Z=0;const J=W.getAttributes();for(const D in J)if(J[D].location>=0){let j=Y[D];j===void 0&&(D==="instanceMatrix"&&E.instanceMatrix&&(j=E.instanceMatrix),D==="instanceColor"&&E.instanceColor&&(j=E.instanceColor));const ee={};ee.attribute=j,j&&j.data&&(ee.data=j.data),z[D]=ee,Z++}s.attributes=z,s.attributesNum=Z,s.index=P}function x(){const E=s.newAttributes;for(let U=0,W=E.length;U<W;U++)E[U]=0}function p(E){u(E,0)}function u(E,U){const W=s.newAttributes,P=s.enabledAttributes,z=s.attributeDivisors;W[E]=1,P[E]===0&&(t.enableVertexAttribArray(E),P[E]=1),z[E]!==U&&(t.vertexAttribDivisor(E,U),z[E]=U)}function _(){const E=s.newAttributes,U=s.enabledAttributes;for(let W=0,P=U.length;W<P;W++)U[W]!==E[W]&&(t.disableVertexAttribArray(W),U[W]=0)}function g(E,U,W,P,z,Y,Z){Z===!0?t.vertexAttribIPointer(E,U,W,z,Y):t.vertexAttribPointer(E,U,W,P,z,Y)}function S(E,U,W,P){x();const z=P.attributes,Y=W.getAttributes(),Z=U.defaultAttributeValues;for(const J in Y){const D=Y[J];if(D.location>=0){let X=z[J];if(X===void 0&&(J==="instanceMatrix"&&E.instanceMatrix&&(X=E.instanceMatrix),J==="instanceColor"&&E.instanceColor&&(X=E.instanceColor)),X!==void 0){const j=X.normalized,ee=X.itemSize,ge=e.get(X);if(ge===void 0)continue;const Pe=ge.buffer,q=ge.type,ae=ge.bytesPerElement,te=q===t.INT||q===t.UNSIGNED_INT||X.gpuType===Dv;if(X.isInterleavedBufferAttribute){const re=X.data,Ce=re.stride,Oe=X.offset;if(re.isInstancedInterleavedBuffer){for(let B=0;B<D.locationSize;B++)u(D.location+B,re.meshPerAttribute);E.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let B=0;B<D.locationSize;B++)p(D.location+B);t.bindBuffer(t.ARRAY_BUFFER,Pe);for(let B=0;B<D.locationSize;B++)g(D.location+B,ee/D.locationSize,q,j,Ce*ae,(Oe+ee/D.locationSize*B)*ae,te)}else{if(X.isInstancedBufferAttribute){for(let re=0;re<D.locationSize;re++)u(D.location+re,X.meshPerAttribute);E.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let re=0;re<D.locationSize;re++)p(D.location+re);t.bindBuffer(t.ARRAY_BUFFER,Pe);for(let re=0;re<D.locationSize;re++)g(D.location+re,ee/D.locationSize,q,j,ee*ae,ee/D.locationSize*re*ae,te)}}else if(Z!==void 0){const j=Z[J];if(j!==void 0)switch(j.length){case 2:t.vertexAttrib2fv(D.location,j);break;case 3:t.vertexAttrib3fv(D.location,j);break;case 4:t.vertexAttrib4fv(D.location,j);break;default:t.vertexAttrib1fv(D.location,j)}}}}_()}function C(){L();for(const E in i){const U=i[E];for(const W in U){const P=U[W];for(const z in P)f(P[z].object),delete P[z];delete U[W]}delete i[E]}}function R(E){if(i[E.id]===void 0)return;const U=i[E.id];for(const W in U){const P=U[W];for(const z in P)f(P[z].object),delete P[z];delete U[W]}delete i[E.id]}function T(E){for(const U in i){const W=i[U];if(W[E.id]===void 0)continue;const P=W[E.id];for(const z in P)f(P[z].object),delete P[z];delete W[E.id]}}function L(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:p,disableUnusedAttributes:_}}function e1(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function o(c,f,d){d!==0&&(t.drawArraysInstanced(i,c,f,d),n.update(f,i,d))}function a(c,f,d){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<d;m++)this.render(c[m],f[m]);else{h.multiDrawArraysWEBGL(i,c,0,f,0,d);let m=0;for(let v=0;v<d;v++)m+=f[v];n.update(m,i,1)}}function l(c,f,d,h){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)o(c[v],f[v],h[v]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,f,0,h,0,d);let v=0;for(let x=0;x<d;x++)v+=f[x];for(let x=0;x<h.length;x++)n.update(v,i,h[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function t1(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==$n&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const T=R===fc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Qi&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ki&&!T)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),u=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=m>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:u,maxVaryings:_,maxFragmentUniforms:g,vertexTextures:S,maxSamples:C}}function n1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Di,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,m){const v=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,u=t.get(d);if(!r||v===null||v.length===0||s&&!p)s?f(null):c();else{const _=s?0:i,g=_*4;let S=u.clippingState||null;l.value=S,S=f(v,h,g,m);for(let C=0;C!==g;++C)S[C]=n[C];u.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,m,v){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,v!==!0||p===null){const u=m+x*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<u)&&(p=new Float32Array(u));for(let g=0,S=m;g!==x;++g,S+=4)o.copy(d[g]).applyMatrix4(_,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function i1(t){let e=new WeakMap;function n(o,a){return a===Rf?o.mapping=Bs:a===Cf&&(o.mapping=zs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Rf||a===Cf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new pw(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Jv extends Kv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ys=4,hm=[.125,.215,.35,.446,.526,.582],mr=20,vu=new Jv,pm=new Je;let xu=null,yu=0,Su=0,Eu=!1;const hr=(1+Math.sqrt(5))/2,as=1/hr,mm=[new O(-hr,as,0),new O(hr,as,0),new O(-as,0,hr),new O(as,0,hr),new O(0,hr,-as),new O(0,hr,as),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class gm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){xu=this._renderer.getRenderTarget(),yu=this._renderer.getActiveCubeFace(),Su=this._renderer.getActiveMipmapLevel(),Eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xu,yu,Su),this._renderer.xr.enabled=Eu,e.scissorTest=!1,qa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Bs||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xu=this._renderer.getRenderTarget(),yu=this._renderer.getActiveCubeFace(),Su=this._renderer.getActiveMipmapLevel(),Eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:On,minFilter:On,generateMipmaps:!1,type:fc,format:$n,colorSpace:ir,depthBuffer:!1},r=_m(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_m(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=r1(s)),this._blurMaterial=s1(s,e,n)}return r}_compileMaterial(e){const n=new Fn(this._lodPlanes[0],e);this._renderer.compile(n,vu)}_sceneToCubeUV(e,n,i,r){const a=new Mn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(pm),f.toneMapping=Yi,f.autoClear=!1;const m=new Xv({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),v=new Fn(new Ys,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(pm),x=!0);for(let u=0;u<6;u++){const _=u%3;_===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):_===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const g=this._cubeSize;qa(r,_*g,u>2?g:0,g,g),f.setRenderTarget(r),x&&f.render(v,a),f.render(e,a)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Bs||e.mapping===zs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Fn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;qa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,vu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=mm[(r-s-1)%mm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new Fn(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*mr-1),x=s/v,p=isFinite(s)?1+Math.floor(f*x):mr;p>mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${mr}`);const u=[];let _=0;for(let T=0;T<mr;++T){const L=T/x,w=Math.exp(-L*L/2);u.push(w),T===0?_+=w:T<p&&(_+=2*w)}for(let T=0;T<u.length;T++)u[T]=u[T]/_;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:g}=this;h.dTheta.value=v,h.mipInt.value=g-i;const S=this._sizeLods[r],C=3*S*(r>g-ys?r-g+ys:0),R=4*(this._cubeSize-S);qa(n,C,R,3*S,2*S),l.setRenderTarget(n),l.render(d,vu)}}function r1(t){const e=[],n=[],i=[];let r=t;const s=t-ys+1+hm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ys?l=hm[o-t+ys-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],m=6,v=6,x=3,p=2,u=1,_=new Float32Array(x*v*m),g=new Float32Array(p*v*m),S=new Float32Array(u*v*m);for(let R=0;R<m;R++){const T=R%3*2/3-1,L=R>2?0:-1,w=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];_.set(w,x*v*R),g.set(h,p*v*R);const E=[R,R,R,R,R,R];S.set(E,u*v*R)}const C=new Br;C.setAttribute("position",new Qn(_,x)),C.setAttribute("uv",new Qn(g,p)),C.setAttribute("faceIndex",new Qn(S,u)),e.push(C),r>ys&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function _m(t,e,n){const i=new Ur(t,e,n);return i.texture.mapping=uc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function s1(t,e,n){const i=new Float32Array(mr),r=new O(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function vm(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function xm(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function kd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function o1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Rf||l===Cf,f=l===Bs||l===zs;if(c||f){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new gm(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return c&&m&&m.height>0||f&&m&&r(m)?(n===null&&(n=new gm(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function a1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function l1(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const x=h.morphAttributes[v];for(let p=0,u=x.length;p<u;p++)e.remove(x[p])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const v in h)e.update(h[v],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const v in m){const x=m[v];for(let p=0,u=x.length;p<u;p++)e.update(x[p],t.ARRAY_BUFFER)}}function c(d){const h=[],m=d.index,v=d.attributes.position;let x=0;if(m!==null){const _=m.array;x=m.version;for(let g=0,S=_.length;g<S;g+=3){const C=_[g+0],R=_[g+1],T=_[g+2];h.push(C,R,R,T,T,C)}}else if(v!==void 0){const _=v.array;x=v.version;for(let g=0,S=_.length/3-1;g<S;g+=3){const C=g+0,R=g+1,T=g+2;h.push(C,R,R,T,T,C)}}else return;const p=new(zv(h)?Yv:qv)(h,1);p.version=x;const u=s.get(d);u&&e.remove(u),s.set(d,p)}function f(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function c1(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,m){t.drawElements(i,m,s,h*o),n.update(m,i,1)}function c(h,m,v){v!==0&&(t.drawElementsInstanced(i,m,s,h*o,v),n.update(m,i,v))}function f(h,m,v){if(v===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let p=0;p<v;p++)this.render(h[p]/o,m[p]);else{x.multiDrawElementsWEBGL(i,m,0,s,h,0,v);let p=0;for(let u=0;u<v;u++)p+=m[u];n.update(p,i,1)}}function d(h,m,v,x){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<h.length;u++)c(h[u]/o,m[u],x[u]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,x,0,v);let u=0;for(let _=0;_<v;_++)u+=m[_];for(let _=0;_<x.length;_++)n.update(u,i,x[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function u1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function f1(t,e,n){const i=new WeakMap,r=new Pt;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let E=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var m=E;h!==void 0&&h.texture.dispose();const v=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let S=0;v===!0&&(S=1),x===!0&&(S=2),p===!0&&(S=3);let C=a.attributes.position.count*S,R=1;C>e.maxTextureSize&&(R=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const T=new Float32Array(C*R*4*d),L=new Vv(T,C,R,d);L.type=ki,L.needsUpdate=!0;const w=S*4;for(let U=0;U<d;U++){const W=u[U],P=_[U],z=g[U],Y=C*R*4*U;for(let Z=0;Z<W.count;Z++){const J=Z*w;v===!0&&(r.fromBufferAttribute(W,Z),T[Y+J+0]=r.x,T[Y+J+1]=r.y,T[Y+J+2]=r.z,T[Y+J+3]=0),x===!0&&(r.fromBufferAttribute(P,Z),T[Y+J+4]=r.x,T[Y+J+5]=r.y,T[Y+J+6]=r.z,T[Y+J+7]=0),p===!0&&(r.fromBufferAttribute(z,Z),T[Y+J+8]=r.x,T[Y+J+9]=r.y,T[Y+J+10]=r.z,T[Y+J+11]=z.itemSize===4?r.w:1)}}h={count:d,texture:L,size:new De(C,R)},i.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let p=0;p<c.length;p++)v+=c[p];const x=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function d1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class e0 extends ln{constructor(e,n,i,r,s,o,a,l,c,f){if(f=f!==void 0?f:Cs,f!==Cs&&f!==Xo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Cs&&(i=Hs),i===void 0&&f===Xo&&(i=na),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Tn,this.minFilter=l!==void 0?l:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const t0=new ln,n0=new e0(1,1);n0.compareFunction=Bv;const i0=new Vv,r0=new QM,s0=new Zv,ym=[],Sm=[],Em=new Float32Array(16),Mm=new Float32Array(9),wm=new Float32Array(4);function $s(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=ym[r];if(s===void 0&&(s=new Float32Array(r),ym[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Tt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function At(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function hc(t,e){let n=Sm[e];n===void 0&&(n=new Int32Array(e),Sm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function h1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function p1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2fv(this.addr,e),At(n,e)}}function m1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tt(n,e))return;t.uniform3fv(this.addr,e),At(n,e)}}function g1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4fv(this.addr,e),At(n,e)}}function _1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;wm.set(i),t.uniformMatrix2fv(this.addr,!1,wm),At(n,i)}}function v1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;Mm.set(i),t.uniformMatrix3fv(this.addr,!1,Mm),At(n,i)}}function x1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;Em.set(i),t.uniformMatrix4fv(this.addr,!1,Em),At(n,i)}}function y1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function S1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2iv(this.addr,e),At(n,e)}}function E1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3iv(this.addr,e),At(n,e)}}function M1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4iv(this.addr,e),At(n,e)}}function w1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function T1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2uiv(this.addr,e),At(n,e)}}function A1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3uiv(this.addr,e),At(n,e)}}function R1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4uiv(this.addr,e),At(n,e)}}function C1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?n0:t0;n.setTexture2D(e||s,r)}function b1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||r0,r)}function P1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||s0,r)}function L1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||i0,r)}function D1(t){switch(t){case 5126:return h1;case 35664:return p1;case 35665:return m1;case 35666:return g1;case 35674:return _1;case 35675:return v1;case 35676:return x1;case 5124:case 35670:return y1;case 35667:case 35671:return S1;case 35668:case 35672:return E1;case 35669:case 35673:return M1;case 5125:return w1;case 36294:return T1;case 36295:return A1;case 36296:return R1;case 35678:case 36198:case 36298:case 36306:case 35682:return C1;case 35679:case 36299:case 36307:return b1;case 35680:case 36300:case 36308:case 36293:return P1;case 36289:case 36303:case 36311:case 36292:return L1}}function N1(t,e){t.uniform1fv(this.addr,e)}function U1(t,e){const n=$s(e,this.size,2);t.uniform2fv(this.addr,n)}function I1(t,e){const n=$s(e,this.size,3);t.uniform3fv(this.addr,n)}function O1(t,e){const n=$s(e,this.size,4);t.uniform4fv(this.addr,n)}function F1(t,e){const n=$s(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function k1(t,e){const n=$s(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function B1(t,e){const n=$s(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function z1(t,e){t.uniform1iv(this.addr,e)}function H1(t,e){t.uniform2iv(this.addr,e)}function V1(t,e){t.uniform3iv(this.addr,e)}function G1(t,e){t.uniform4iv(this.addr,e)}function W1(t,e){t.uniform1uiv(this.addr,e)}function j1(t,e){t.uniform2uiv(this.addr,e)}function X1(t,e){t.uniform3uiv(this.addr,e)}function q1(t,e){t.uniform4uiv(this.addr,e)}function Y1(t,e,n){const i=this.cache,r=e.length,s=hc(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||t0,s[o])}function $1(t,e,n){const i=this.cache,r=e.length,s=hc(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||r0,s[o])}function K1(t,e,n){const i=this.cache,r=e.length,s=hc(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||s0,s[o])}function Z1(t,e,n){const i=this.cache,r=e.length,s=hc(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||i0,s[o])}function Q1(t){switch(t){case 5126:return N1;case 35664:return U1;case 35665:return I1;case 35666:return O1;case 35674:return F1;case 35675:return k1;case 35676:return B1;case 5124:case 35670:return z1;case 35667:case 35671:return H1;case 35668:case 35672:return V1;case 35669:case 35673:return G1;case 5125:return W1;case 36294:return j1;case 36295:return X1;case 36296:return q1;case 35678:case 36198:case 36298:case 36306:case 35682:return Y1;case 35679:case 36299:case 36307:return $1;case 35680:case 36300:case 36308:case 36293:return K1;case 36289:case 36303:case 36311:case 36292:return Z1}}class J1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=D1(n.type)}}class eR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Q1(n.type)}}class tR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Mu=/(\w+)(\])?(\[|\.)?/g;function Tm(t,e){t.seq.push(e),t.map[e.id]=e}function nR(t,e,n){const i=t.name,r=i.length;for(Mu.lastIndex=0;;){const s=Mu.exec(i),o=Mu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Tm(n,c===void 0?new J1(a,t,e):new eR(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new tR(a),Tm(n,d)),n=d}}}class fl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);nR(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Am(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const iR=37297;let rR=0;function sR(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function oR(t){const e=it.getPrimaries(it.workingColorSpace),n=it.getPrimaries(t);let i;switch(e===n?i="":e===Vl&&n===Hl?i="LinearDisplayP3ToLinearSRGB":e===Hl&&n===Vl&&(i="LinearSRGBToLinearDisplayP3"),t){case ir:case dc:return[i,"LinearTransferOETF"];case jn:case Id:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Rm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+sR(t.getShaderSource(e),o)}else return r}function aR(t,e){const n=oR(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function lR(t,e){let n;switch(e){case mM:n="Linear";break;case gM:n="Reinhard";break;case _M:n="OptimizedCineon";break;case vM:n="ACESFilmic";break;case yM:n="AgX";break;case SM:n="Neutral";break;case xM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function cR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vo).join(`
`)}function uR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function fR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function vo(t){return t!==""}function Cm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Df(t){return t.replace(dR,pR)}const hR=new Map;function pR(t,e){let n=He[e];if(n===void 0){const i=hR.get(e);if(i!==void 0)n=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Df(n)}const mR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pm(t){return t.replace(mR,gR)}function gR(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Lm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _R(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Cv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===HE?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function vR(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Bs:case zs:e="ENVMAP_TYPE_CUBE";break;case uc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xR(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case zs:e="ENVMAP_MODE_REFRACTION";break}return e}function yR(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case bv:e="ENVMAP_BLENDING_MULTIPLY";break;case hM:e="ENVMAP_BLENDING_MIX";break;case pM:e="ENVMAP_BLENDING_ADD";break}return e}function SR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ER(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=_R(n),c=vR(n),f=xR(n),d=yR(n),h=SR(n),m=cR(n),v=uR(s),x=r.createProgram();let p,u,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(vo).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(vo).join(`
`),u.length>0&&(u+=`
`)):(p=[Lm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vo).join(`
`),u=[Lm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Yi?"#define TONE_MAPPING":"",n.toneMapping!==Yi?He.tonemapping_pars_fragment:"",n.toneMapping!==Yi?lR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,aR("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(vo).join(`
`)),o=Df(o),o=Cm(o,n),o=bm(o,n),a=Df(a),a=Cm(a,n),a=bm(a,n),o=Pm(o),a=Pm(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",n.glslVersion===qp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===qp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const g=_+p+o,S=_+u+a,C=Am(r,r.VERTEX_SHADER,g),R=Am(r,r.FRAGMENT_SHADER,S);r.attachShader(x,C),r.attachShader(x,R),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function T(U){if(t.debug.checkShaderErrors){const W=r.getProgramInfoLog(x).trim(),P=r.getShaderInfoLog(C).trim(),z=r.getShaderInfoLog(R).trim();let Y=!0,Z=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Y=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,C,R);else{const J=Rm(r,C,"vertex"),D=Rm(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+W+`
`+J+`
`+D)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(P===""||z==="")&&(Z=!1);Z&&(U.diagnostics={runnable:Y,programLog:W,vertexShader:{log:P,prefix:p},fragmentShader:{log:z,prefix:u}})}r.deleteShader(C),r.deleteShader(R),L=new fl(r,x),w=fR(r,x)}let L;this.getUniforms=function(){return L===void 0&&T(this),L};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(x,iR)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=rR++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=R,this}let MR=0;class wR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new TR(e),n.set(e,i)),i}}class TR{constructor(e){this.id=MR++,this.code=e,this.usedTimes=0}}function AR(t,e,n,i,r,s,o){const a=new Wv,l=new wR,c=new Set,f=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function p(w,E,U,W,P){const z=W.fog,Y=P.geometry,Z=w.isMeshStandardMaterial?W.environment:null,J=(w.isMeshStandardMaterial?n:e).get(w.envMap||Z),D=J&&J.mapping===uc?J.image.height:null,X=v[w.type];w.precision!==null&&(m=r.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const j=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ee=j!==void 0?j.length:0;let ge=0;Y.morphAttributes.position!==void 0&&(ge=1),Y.morphAttributes.normal!==void 0&&(ge=2),Y.morphAttributes.color!==void 0&&(ge=3);let Pe,q,ae,te;if(X){const Ke=Xn[X];Pe=Ke.vertexShader,q=Ke.fragmentShader}else Pe=w.vertexShader,q=w.fragmentShader,l.update(w),ae=l.getVertexShaderID(w),te=l.getFragmentShaderID(w);const re=t.getRenderTarget(),Ce=P.isInstancedMesh===!0,Oe=P.isBatchedMesh===!0,B=!!w.map,Ze=!!w.matcap,xe=!!J,Qe=!!w.aoMap,Me=!!w.lightMap,be=!!w.bumpMap,le=!!w.normalMap,Te=!!w.displacementMap,Ye=!!w.emissiveMap,b=!!w.metalnessMap,M=!!w.roughnessMap,$=w.anisotropy>0,Q=w.clearcoat>0,ie=w.dispersion>0,se=w.iridescence>0,we=w.sheen>0,pe=w.transmission>0,he=$&&!!w.anisotropyMap,Ne=Q&&!!w.clearcoatMap,ue=Q&&!!w.clearcoatNormalMap,Ee=Q&&!!w.clearcoatRoughnessMap,qe=se&&!!w.iridescenceMap,Ae=se&&!!w.iridescenceThicknessMap,ve=we&&!!w.sheenColorMap,Fe=we&&!!w.sheenRoughnessMap,Ge=!!w.specularMap,nt=!!w.specularColorMap,Be=!!w.specularIntensityMap,y=pe&&!!w.transmissionMap,F=pe&&!!w.thicknessMap,H=!!w.gradientMap,ne=!!w.alphaMap,ce=w.alphaTest>0,ke=!!w.alphaHash,We=!!w.extensions;let dt=Yi;w.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(dt=t.toneMapping);const Rt={shaderID:X,shaderType:w.type,shaderName:w.name,vertexShader:Pe,fragmentShader:q,defines:w.defines,customVertexShaderID:ae,customFragmentShaderID:te,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Oe,instancing:Ce,instancingColor:Ce&&P.instanceColor!==null,instancingMorph:Ce&&P.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:re===null?t.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:ir,alphaToCoverage:!!w.alphaToCoverage,map:B,matcap:Ze,envMap:xe,envMapMode:xe&&J.mapping,envMapCubeUVHeight:D,aoMap:Qe,lightMap:Me,bumpMap:be,normalMap:le,displacementMap:h&&Te,emissiveMap:Ye,normalMapObjectSpace:le&&w.normalMapType===IM,normalMapTangentSpace:le&&w.normalMapType===kv,metalnessMap:b,roughnessMap:M,anisotropy:$,anisotropyMap:he,clearcoat:Q,clearcoatMap:Ne,clearcoatNormalMap:ue,clearcoatRoughnessMap:Ee,dispersion:ie,iridescence:se,iridescenceMap:qe,iridescenceThicknessMap:Ae,sheen:we,sheenColorMap:ve,sheenRoughnessMap:Fe,specularMap:Ge,specularColorMap:nt,specularIntensityMap:Be,transmission:pe,transmissionMap:y,thicknessMap:F,gradientMap:H,opaque:w.transparent===!1&&w.blending===Rs&&w.alphaToCoverage===!1,alphaMap:ne,alphaTest:ce,alphaHash:ke,combine:w.combine,mapUv:B&&x(w.map.channel),aoMapUv:Qe&&x(w.aoMap.channel),lightMapUv:Me&&x(w.lightMap.channel),bumpMapUv:be&&x(w.bumpMap.channel),normalMapUv:le&&x(w.normalMap.channel),displacementMapUv:Te&&x(w.displacementMap.channel),emissiveMapUv:Ye&&x(w.emissiveMap.channel),metalnessMapUv:b&&x(w.metalnessMap.channel),roughnessMapUv:M&&x(w.roughnessMap.channel),anisotropyMapUv:he&&x(w.anisotropyMap.channel),clearcoatMapUv:Ne&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:ue&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:qe&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&x(w.sheenRoughnessMap.channel),specularMapUv:Ge&&x(w.specularMap.channel),specularColorMapUv:nt&&x(w.specularColorMap.channel),specularIntensityMapUv:Be&&x(w.specularIntensityMap.channel),transmissionMapUv:y&&x(w.transmissionMap.channel),thicknessMapUv:F&&x(w.thicknessMap.channel),alphaMapUv:ne&&x(w.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(le||$),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!Y.attributes.uv&&(B||ne),fog:!!z,useFog:w.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:P.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ge,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:dt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:B&&w.map.isVideoTexture===!0&&it.getTransfer(w.map.colorSpace)===lt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ui,flipSided:w.side===an,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:We&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:We&&w.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Rt.vertexUv1s=c.has(1),Rt.vertexUv2s=c.has(2),Rt.vertexUv3s=c.has(3),c.clear(),Rt}function u(w){const E=[];if(w.shaderID?E.push(w.shaderID):(E.push(w.customVertexShaderID),E.push(w.customFragmentShaderID)),w.defines!==void 0)for(const U in w.defines)E.push(U),E.push(w.defines[U]);return w.isRawShaderMaterial===!1&&(_(E,w),g(E,w),E.push(t.outputColorSpace)),E.push(w.customProgramCacheKey),E.join()}function _(w,E){w.push(E.precision),w.push(E.outputColorSpace),w.push(E.envMapMode),w.push(E.envMapCubeUVHeight),w.push(E.mapUv),w.push(E.alphaMapUv),w.push(E.lightMapUv),w.push(E.aoMapUv),w.push(E.bumpMapUv),w.push(E.normalMapUv),w.push(E.displacementMapUv),w.push(E.emissiveMapUv),w.push(E.metalnessMapUv),w.push(E.roughnessMapUv),w.push(E.anisotropyMapUv),w.push(E.clearcoatMapUv),w.push(E.clearcoatNormalMapUv),w.push(E.clearcoatRoughnessMapUv),w.push(E.iridescenceMapUv),w.push(E.iridescenceThicknessMapUv),w.push(E.sheenColorMapUv),w.push(E.sheenRoughnessMapUv),w.push(E.specularMapUv),w.push(E.specularColorMapUv),w.push(E.specularIntensityMapUv),w.push(E.transmissionMapUv),w.push(E.thicknessMapUv),w.push(E.combine),w.push(E.fogExp2),w.push(E.sizeAttenuation),w.push(E.morphTargetsCount),w.push(E.morphAttributeCount),w.push(E.numDirLights),w.push(E.numPointLights),w.push(E.numSpotLights),w.push(E.numSpotLightMaps),w.push(E.numHemiLights),w.push(E.numRectAreaLights),w.push(E.numDirLightShadows),w.push(E.numPointLightShadows),w.push(E.numSpotLightShadows),w.push(E.numSpotLightShadowsWithMaps),w.push(E.numLightProbes),w.push(E.shadowMapType),w.push(E.toneMapping),w.push(E.numClippingPlanes),w.push(E.numClipIntersection),w.push(E.depthPacking)}function g(w,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),w.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),w.push(a.mask)}function S(w){const E=v[w.type];let U;if(E){const W=Xn[E];U=uw.clone(W.uniforms)}else U=w.uniforms;return U}function C(w,E){let U;for(let W=0,P=f.length;W<P;W++){const z=f[W];if(z.cacheKey===E){U=z,++U.usedTimes;break}}return U===void 0&&(U=new ER(t,E,w,s),f.push(U)),U}function R(w){if(--w.usedTimes===0){const E=f.indexOf(w);f[E]=f[f.length-1],f.pop(),w.destroy()}}function T(w){l.remove(w)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:S,acquireProgram:C,releaseProgram:R,releaseShaderCache:T,programs:f,dispose:L}}function RR(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function CR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Dm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Nm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,m,v,x,p){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:h,material:m,groupOrder:v,renderOrder:d.renderOrder,z:x,group:p},t[e]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=m,u.groupOrder=v,u.renderOrder=d.renderOrder,u.z=x,u.group=p),e++,u}function a(d,h,m,v,x,p){const u=o(d,h,m,v,x,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(d,h,m,v,x,p){const u=o(d,h,m,v,x,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||CR),i.length>1&&i.sort(h||Dm),r.length>1&&r.sort(h||Dm)}function f(){for(let d=e,h=t.length;d<h;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function bR(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Nm,t.set(i,[o])):r>=s.length?(o=new Nm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function PR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new Je};break;case"SpotLight":n={position:new O,direction:new O,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function LR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let DR=0;function NR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function UR(t){const e=new PR,n=LR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const r=new O,s=new vt,o=new vt;function a(c,f){let d=0,h=0,m=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let v=0,x=0,p=0,u=0,_=0,g=0,S=0,C=0,R=0,T=0,L=0;c.sort(NR);const w=f===!0?Math.PI:1;for(let U=0,W=c.length;U<W;U++){const P=c[U],z=P.color,Y=P.intensity,Z=P.distance,J=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=z.r*Y*w,h+=z.g*Y*w,m+=z.b*Y*w;else if(P.isLightProbe){for(let D=0;D<9;D++)i.probe[D].addScaledVector(P.sh.coefficients[D],Y);L++}else if(P.isDirectionalLight){const D=e.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity*w),P.castShadow){const X=P.shadow,j=n.get(P);j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,i.directionalShadow[v]=j,i.directionalShadowMap[v]=J,i.directionalShadowMatrix[v]=P.shadow.matrix,g++}i.directional[v]=D,v++}else if(P.isSpotLight){const D=e.get(P);D.position.setFromMatrixPosition(P.matrixWorld),D.color.copy(z).multiplyScalar(Y*w),D.distance=Z,D.coneCos=Math.cos(P.angle),D.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),D.decay=P.decay,i.spot[p]=D;const X=P.shadow;if(P.map&&(i.spotLightMap[R]=P.map,R++,X.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[p]=X.matrix,P.castShadow){const j=n.get(P);j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,i.spotShadow[p]=j,i.spotShadowMap[p]=J,C++}p++}else if(P.isRectAreaLight){const D=e.get(P);D.color.copy(z).multiplyScalar(Y),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),i.rectArea[u]=D,u++}else if(P.isPointLight){const D=e.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity*w),D.distance=P.distance,D.decay=P.decay,P.castShadow){const X=P.shadow,j=n.get(P);j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,j.shadowCameraNear=X.camera.near,j.shadowCameraFar=X.camera.far,i.pointShadow[x]=j,i.pointShadowMap[x]=J,i.pointShadowMatrix[x]=P.shadow.matrix,S++}i.point[x]=D,x++}else if(P.isHemisphereLight){const D=e.get(P);D.skyColor.copy(P.color).multiplyScalar(Y*w),D.groundColor.copy(P.groundColor).multiplyScalar(Y*w),i.hemi[_]=D,_++}}u>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=m;const E=i.hash;(E.directionalLength!==v||E.pointLength!==x||E.spotLength!==p||E.rectAreaLength!==u||E.hemiLength!==_||E.numDirectionalShadows!==g||E.numPointShadows!==S||E.numSpotShadows!==C||E.numSpotMaps!==R||E.numLightProbes!==L)&&(i.directional.length=v,i.spot.length=p,i.rectArea.length=u,i.point.length=x,i.hemi.length=_,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=C+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=L,E.directionalLength=v,E.pointLength=x,E.spotLength=p,E.rectAreaLength=u,E.hemiLength=_,E.numDirectionalShadows=g,E.numPointShadows=S,E.numSpotShadows=C,E.numSpotMaps=R,E.numLightProbes=L,i.version=DR++)}function l(c,f){let d=0,h=0,m=0,v=0,x=0;const p=f.matrixWorldInverse;for(let u=0,_=c.length;u<_;u++){const g=c[u];if(g.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),d++}else if(g.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),m++}else if(g.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(g.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(g.width*.5,0,0),S.halfHeight.set(0,g.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(g.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(p),h++}else if(g.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(g.matrixWorld),S.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:i}}function Um(t){const e=new UR(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(f){e.setup(n,f)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function IR(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Um(t),e.set(r,[a])):s>=o.length?(a=new Um(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class OR extends sa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=NM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class FR extends sa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zR(t,e,n){let i=new Fd;const r=new De,s=new De,o=new Pt,a=new OR({depthPacking:UM}),l=new FR,c={},f=n.maxTextureSize,d={[Zi]:an,[an]:Zi,[ui]:ui},h=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:kR,fragmentShader:BR}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const v=new Br;v.setAttribute("position",new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Fn(v,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cv;let u=this.type;this.render=function(R,T,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const w=t.getRenderTarget(),E=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),W=t.state;W.setBlending(qi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const P=u!==ai&&this.type===ai,z=u===ai&&this.type!==ai;for(let Y=0,Z=R.length;Y<Z;Y++){const J=R[Y],D=J.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const X=D.getFrameExtents();if(r.multiply(X),s.copy(D.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/X.x),r.x=s.x*X.x,D.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/X.y),r.y=s.y*X.y,D.mapSize.y=s.y)),D.map===null||P===!0||z===!0){const ee=this.type!==ai?{minFilter:Tn,magFilter:Tn}:{};D.map!==null&&D.map.dispose(),D.map=new Ur(r.x,r.y,ee),D.map.texture.name=J.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const j=D.getViewportCount();for(let ee=0;ee<j;ee++){const ge=D.getViewport(ee);o.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),W.viewport(o),D.updateMatrices(J,ee),i=D.getFrustum(),S(T,L,D.camera,J,this.type)}D.isPointLightShadow!==!0&&this.type===ai&&_(D,L),D.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(w,E,U)};function _(R,T){const L=e.update(x);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ur(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(T,null,L,h,x,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(T,null,L,m,x,null)}function g(R,T,L,w){let E=null;const U=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(U!==void 0)E=U;else if(E=L.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const W=E.uuid,P=T.uuid;let z=c[W];z===void 0&&(z={},c[W]=z);let Y=z[P];Y===void 0&&(Y=E.clone(),z[P]=Y,T.addEventListener("dispose",C)),E=Y}if(E.visible=T.visible,E.wireframe=T.wireframe,w===ai?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:d[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,L.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const W=t.properties.get(E);W.light=L}return E}function S(R,T,L,w,E){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===ai)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const P=e.update(R),z=R.material;if(Array.isArray(z)){const Y=P.groups;for(let Z=0,J=Y.length;Z<J;Z++){const D=Y[Z],X=z[D.materialIndex];if(X&&X.visible){const j=g(R,X,w,E);R.onBeforeShadow(t,R,T,L,P,j,D),t.renderBufferDirect(L,null,P,j,R,D),R.onAfterShadow(t,R,T,L,P,j,D)}}}else if(z.visible){const Y=g(R,z,w,E);R.onBeforeShadow(t,R,T,L,P,Y,null),t.renderBufferDirect(L,null,P,Y,R,null),R.onAfterShadow(t,R,T,L,P,Y,null)}}const W=R.children;for(let P=0,z=W.length;P<z;P++)S(W[P],T,L,w,E)}function C(R){R.target.removeEventListener("dispose",C);for(const L in c){const w=c[L],E=R.target.uuid;E in w&&(w[E].dispose(),delete w[E])}}}function HR(t){function e(){let y=!1;const F=new Pt;let H=null;const ne=new Pt(0,0,0,0);return{setMask:function(ce){H!==ce&&!y&&(t.colorMask(ce,ce,ce,ce),H=ce)},setLocked:function(ce){y=ce},setClear:function(ce,ke,We,dt,Rt){Rt===!0&&(ce*=dt,ke*=dt,We*=dt),F.set(ce,ke,We,dt),ne.equals(F)===!1&&(t.clearColor(ce,ke,We,dt),ne.copy(F))},reset:function(){y=!1,H=null,ne.set(-1,0,0,0)}}}function n(){let y=!1,F=null,H=null,ne=null;return{setTest:function(ce){ce?te(t.DEPTH_TEST):re(t.DEPTH_TEST)},setMask:function(ce){F!==ce&&!y&&(t.depthMask(ce),F=ce)},setFunc:function(ce){if(H!==ce){switch(ce){case oM:t.depthFunc(t.NEVER);break;case aM:t.depthFunc(t.ALWAYS);break;case lM:t.depthFunc(t.LESS);break;case Bl:t.depthFunc(t.LEQUAL);break;case cM:t.depthFunc(t.EQUAL);break;case uM:t.depthFunc(t.GEQUAL);break;case fM:t.depthFunc(t.GREATER);break;case dM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}H=ce}},setLocked:function(ce){y=ce},setClear:function(ce){ne!==ce&&(t.clearDepth(ce),ne=ce)},reset:function(){y=!1,F=null,H=null,ne=null}}}function i(){let y=!1,F=null,H=null,ne=null,ce=null,ke=null,We=null,dt=null,Rt=null;return{setTest:function(Ke){y||(Ke?te(t.STENCIL_TEST):re(t.STENCIL_TEST))},setMask:function(Ke){F!==Ke&&!y&&(t.stencilMask(Ke),F=Ke)},setFunc:function(Ke,xt,ot){(H!==Ke||ne!==xt||ce!==ot)&&(t.stencilFunc(Ke,xt,ot),H=Ke,ne=xt,ce=ot)},setOp:function(Ke,xt,ot){(ke!==Ke||We!==xt||dt!==ot)&&(t.stencilOp(Ke,xt,ot),ke=Ke,We=xt,dt=ot)},setLocked:function(Ke){y=Ke},setClear:function(Ke){Rt!==Ke&&(t.clearStencil(Ke),Rt=Ke)},reset:function(){y=!1,F=null,H=null,ne=null,ce=null,ke=null,We=null,dt=null,Rt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},f={},d=new WeakMap,h=[],m=null,v=!1,x=null,p=null,u=null,_=null,g=null,S=null,C=null,R=new Je(0,0,0),T=0,L=!1,w=null,E=null,U=null,W=null,P=null;const z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,Z=0;const J=t.getParameter(t.VERSION);J.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(J)[1]),Y=Z>=1):J.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Y=Z>=2);let D=null,X={};const j=t.getParameter(t.SCISSOR_BOX),ee=t.getParameter(t.VIEWPORT),ge=new Pt().fromArray(j),Pe=new Pt().fromArray(ee);function q(y,F,H,ne){const ce=new Uint8Array(4),ke=t.createTexture();t.bindTexture(y,ke),t.texParameteri(y,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(y,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let We=0;We<H;We++)y===t.TEXTURE_3D||y===t.TEXTURE_2D_ARRAY?t.texImage3D(F,0,t.RGBA,1,1,ne,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D(F+We,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return ke}const ae={};ae[t.TEXTURE_2D]=q(t.TEXTURE_2D,t.TEXTURE_2D,1),ae[t.TEXTURE_CUBE_MAP]=q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[t.TEXTURE_2D_ARRAY]=q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ae[t.TEXTURE_3D]=q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),te(t.DEPTH_TEST),s.setFunc(Bl),be(!1),le(mp),te(t.CULL_FACE),Qe(qi);function te(y){c[y]!==!0&&(t.enable(y),c[y]=!0)}function re(y){c[y]!==!1&&(t.disable(y),c[y]=!1)}function Ce(y,F){return f[y]!==F?(t.bindFramebuffer(y,F),f[y]=F,y===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=F),y===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=F),!0):!1}function Oe(y,F){let H=h,ne=!1;if(y){H=d.get(F),H===void 0&&(H=[],d.set(F,H));const ce=y.textures;if(H.length!==ce.length||H[0]!==t.COLOR_ATTACHMENT0){for(let ke=0,We=ce.length;ke<We;ke++)H[ke]=t.COLOR_ATTACHMENT0+ke;H.length=ce.length,ne=!0}}else H[0]!==t.BACK&&(H[0]=t.BACK,ne=!0);ne&&t.drawBuffers(H)}function B(y){return m!==y?(t.useProgram(y),m=y,!0):!1}const Ze={[pr]:t.FUNC_ADD,[GE]:t.FUNC_SUBTRACT,[WE]:t.FUNC_REVERSE_SUBTRACT};Ze[jE]=t.MIN,Ze[XE]=t.MAX;const xe={[qE]:t.ZERO,[YE]:t.ONE,[$E]:t.SRC_COLOR,[Tf]:t.SRC_ALPHA,[tM]:t.SRC_ALPHA_SATURATE,[JE]:t.DST_COLOR,[ZE]:t.DST_ALPHA,[KE]:t.ONE_MINUS_SRC_COLOR,[Af]:t.ONE_MINUS_SRC_ALPHA,[eM]:t.ONE_MINUS_DST_COLOR,[QE]:t.ONE_MINUS_DST_ALPHA,[nM]:t.CONSTANT_COLOR,[iM]:t.ONE_MINUS_CONSTANT_COLOR,[rM]:t.CONSTANT_ALPHA,[sM]:t.ONE_MINUS_CONSTANT_ALPHA};function Qe(y,F,H,ne,ce,ke,We,dt,Rt,Ke){if(y===qi){v===!0&&(re(t.BLEND),v=!1);return}if(v===!1&&(te(t.BLEND),v=!0),y!==VE){if(y!==x||Ke!==L){if((p!==pr||g!==pr)&&(t.blendEquation(t.FUNC_ADD),p=pr,g=pr),Ke)switch(y){case Rs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gp:t.blendFunc(t.ONE,t.ONE);break;case _p:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case vp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}else switch(y){case Rs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case _p:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case vp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}u=null,_=null,S=null,C=null,R.set(0,0,0),T=0,x=y,L=Ke}return}ce=ce||F,ke=ke||H,We=We||ne,(F!==p||ce!==g)&&(t.blendEquationSeparate(Ze[F],Ze[ce]),p=F,g=ce),(H!==u||ne!==_||ke!==S||We!==C)&&(t.blendFuncSeparate(xe[H],xe[ne],xe[ke],xe[We]),u=H,_=ne,S=ke,C=We),(dt.equals(R)===!1||Rt!==T)&&(t.blendColor(dt.r,dt.g,dt.b,Rt),R.copy(dt),T=Rt),x=y,L=!1}function Me(y,F){y.side===ui?re(t.CULL_FACE):te(t.CULL_FACE);let H=y.side===an;F&&(H=!H),be(H),y.blending===Rs&&y.transparent===!1?Qe(qi):Qe(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),s.setFunc(y.depthFunc),s.setTest(y.depthTest),s.setMask(y.depthWrite),r.setMask(y.colorWrite);const ne=y.stencilWrite;o.setTest(ne),ne&&(o.setMask(y.stencilWriteMask),o.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),o.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),Ye(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?te(t.SAMPLE_ALPHA_TO_COVERAGE):re(t.SAMPLE_ALPHA_TO_COVERAGE)}function be(y){w!==y&&(y?t.frontFace(t.CW):t.frontFace(t.CCW),w=y)}function le(y){y!==BE?(te(t.CULL_FACE),y!==E&&(y===mp?t.cullFace(t.BACK):y===zE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):re(t.CULL_FACE),E=y}function Te(y){y!==U&&(Y&&t.lineWidth(y),U=y)}function Ye(y,F,H){y?(te(t.POLYGON_OFFSET_FILL),(W!==F||P!==H)&&(t.polygonOffset(F,H),W=F,P=H)):re(t.POLYGON_OFFSET_FILL)}function b(y){y?te(t.SCISSOR_TEST):re(t.SCISSOR_TEST)}function M(y){y===void 0&&(y=t.TEXTURE0+z-1),D!==y&&(t.activeTexture(y),D=y)}function $(y,F,H){H===void 0&&(D===null?H=t.TEXTURE0+z-1:H=D);let ne=X[H];ne===void 0&&(ne={type:void 0,texture:void 0},X[H]=ne),(ne.type!==y||ne.texture!==F)&&(D!==H&&(t.activeTexture(H),D=H),t.bindTexture(y,F||ae[y]),ne.type=y,ne.texture=F)}function Q(){const y=X[D];y!==void 0&&y.type!==void 0&&(t.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)}function ie(){try{t.compressedTexImage2D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function se(){try{t.compressedTexImage3D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function we(){try{t.texSubImage2D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function pe(){try{t.texSubImage3D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function he(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Ne(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ue(){try{t.texStorage2D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Ee(){try{t.texStorage3D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function qe(){try{t.texImage2D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Ae(){try{t.texImage3D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ve(y){ge.equals(y)===!1&&(t.scissor(y.x,y.y,y.z,y.w),ge.copy(y))}function Fe(y){Pe.equals(y)===!1&&(t.viewport(y.x,y.y,y.z,y.w),Pe.copy(y))}function Ge(y,F){let H=l.get(F);H===void 0&&(H=new WeakMap,l.set(F,H));let ne=H.get(y);ne===void 0&&(ne=t.getUniformBlockIndex(F,y.name),H.set(y,ne))}function nt(y,F){const ne=l.get(F).get(y);a.get(F)!==ne&&(t.uniformBlockBinding(F,ne,y.__bindingPointIndex),a.set(F,ne))}function Be(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},D=null,X={},f={},d=new WeakMap,h=[],m=null,v=!1,x=null,p=null,u=null,_=null,g=null,S=null,C=null,R=new Je(0,0,0),T=0,L=!1,w=null,E=null,U=null,W=null,P=null,ge.set(0,0,t.canvas.width,t.canvas.height),Pe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:te,disable:re,bindFramebuffer:Ce,drawBuffers:Oe,useProgram:B,setBlending:Qe,setMaterial:Me,setFlipSided:be,setCullFace:le,setLineWidth:Te,setPolygonOffset:Ye,setScissorTest:b,activeTexture:M,bindTexture:$,unbindTexture:Q,compressedTexImage2D:ie,compressedTexImage3D:se,texImage2D:qe,texImage3D:Ae,updateUBOMapping:Ge,uniformBlockBinding:nt,texStorage2D:ue,texStorage3D:Ee,texSubImage2D:we,texSubImage3D:pe,compressedTexSubImage2D:he,compressedTexSubImage3D:Ne,scissor:ve,viewport:Fe,reset:Be}}function VR(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new De,f=new WeakMap;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,M){return m?new OffscreenCanvas(b,M):Wl("canvas")}function x(b,M,$){let Q=1;const ie=Ye(b);if((ie.width>$||ie.height>$)&&(Q=$/Math.max(ie.width,ie.height)),Q<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const se=Math.floor(Q*ie.width),we=Math.floor(Q*ie.height);d===void 0&&(d=v(se,we));const pe=M?v(se,we):d;return pe.width=se,pe.height=we,pe.getContext("2d").drawImage(b,0,0,se,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+se+"x"+we+")."),pe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),b;return b}function p(b){return b.generateMipmaps&&b.minFilter!==Tn&&b.minFilter!==On}function u(b){t.generateMipmap(b)}function _(b,M,$,Q,ie=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let se=M;if(M===t.RED&&($===t.FLOAT&&(se=t.R32F),$===t.HALF_FLOAT&&(se=t.R16F),$===t.UNSIGNED_BYTE&&(se=t.R8)),M===t.RED_INTEGER&&($===t.UNSIGNED_BYTE&&(se=t.R8UI),$===t.UNSIGNED_SHORT&&(se=t.R16UI),$===t.UNSIGNED_INT&&(se=t.R32UI),$===t.BYTE&&(se=t.R8I),$===t.SHORT&&(se=t.R16I),$===t.INT&&(se=t.R32I)),M===t.RG&&($===t.FLOAT&&(se=t.RG32F),$===t.HALF_FLOAT&&(se=t.RG16F),$===t.UNSIGNED_BYTE&&(se=t.RG8)),M===t.RG_INTEGER&&($===t.UNSIGNED_BYTE&&(se=t.RG8UI),$===t.UNSIGNED_SHORT&&(se=t.RG16UI),$===t.UNSIGNED_INT&&(se=t.RG32UI),$===t.BYTE&&(se=t.RG8I),$===t.SHORT&&(se=t.RG16I),$===t.INT&&(se=t.RG32I)),M===t.RGB&&$===t.UNSIGNED_INT_5_9_9_9_REV&&(se=t.RGB9_E5),M===t.RGBA){const we=ie?zl:it.getTransfer(Q);$===t.FLOAT&&(se=t.RGBA32F),$===t.HALF_FLOAT&&(se=t.RGBA16F),$===t.UNSIGNED_BYTE&&(se=we===lt?t.SRGB8_ALPHA8:t.RGBA8),$===t.UNSIGNED_SHORT_4_4_4_4&&(se=t.RGBA4),$===t.UNSIGNED_SHORT_5_5_5_1&&(se=t.RGB5_A1)}return(se===t.R16F||se===t.R32F||se===t.RG16F||se===t.RG32F||se===t.RGBA16F||se===t.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function g(b,M){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==Tn&&b.minFilter!==On?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function S(b){const M=b.target;M.removeEventListener("dispose",S),R(M),M.isVideoTexture&&f.delete(M)}function C(b){const M=b.target;M.removeEventListener("dispose",C),L(M)}function R(b){const M=i.get(b);if(M.__webglInit===void 0)return;const $=b.source,Q=h.get($);if(Q){const ie=Q[M.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&T(b),Object.keys(Q).length===0&&h.delete($)}i.remove(b)}function T(b){const M=i.get(b);t.deleteTexture(M.__webglTexture);const $=b.source,Q=h.get($);delete Q[M.__cacheKey],o.memory.textures--}function L(b){const M=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let ie=0;ie<M.__webglFramebuffer[Q].length;ie++)t.deleteFramebuffer(M.__webglFramebuffer[Q][ie]);else t.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)t.deleteFramebuffer(M.__webglFramebuffer[Q]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const $=b.textures;for(let Q=0,ie=$.length;Q<ie;Q++){const se=i.get($[Q]);se.__webglTexture&&(t.deleteTexture(se.__webglTexture),o.memory.textures--),i.remove($[Q])}i.remove(b)}let w=0;function E(){w=0}function U(){const b=w;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),w+=1,b}function W(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function P(b,M){const $=i.get(b);if(b.isVideoTexture&&le(b),b.isRenderTargetTexture===!1&&b.version>0&&$.__version!==b.version){const Q=b.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge($,b,M);return}}n.bindTexture(t.TEXTURE_2D,$.__webglTexture,t.TEXTURE0+M)}function z(b,M){const $=i.get(b);if(b.version>0&&$.__version!==b.version){ge($,b,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,$.__webglTexture,t.TEXTURE0+M)}function Y(b,M){const $=i.get(b);if(b.version>0&&$.__version!==b.version){ge($,b,M);return}n.bindTexture(t.TEXTURE_3D,$.__webglTexture,t.TEXTURE0+M)}function Z(b,M){const $=i.get(b);if(b.version>0&&$.__version!==b.version){Pe($,b,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture,t.TEXTURE0+M)}const J={[bf]:t.REPEAT,[yr]:t.CLAMP_TO_EDGE,[Pf]:t.MIRRORED_REPEAT},D={[Tn]:t.NEAREST,[EM]:t.NEAREST_MIPMAP_NEAREST,[Aa]:t.NEAREST_MIPMAP_LINEAR,[On]:t.LINEAR,[qc]:t.LINEAR_MIPMAP_NEAREST,[Sr]:t.LINEAR_MIPMAP_LINEAR},X={[OM]:t.NEVER,[VM]:t.ALWAYS,[FM]:t.LESS,[Bv]:t.LEQUAL,[kM]:t.EQUAL,[HM]:t.GEQUAL,[BM]:t.GREATER,[zM]:t.NOTEQUAL};function j(b,M){if(M.type===ki&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===On||M.magFilter===qc||M.magFilter===Aa||M.magFilter===Sr||M.minFilter===On||M.minFilter===qc||M.minFilter===Aa||M.minFilter===Sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,J[M.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,J[M.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,J[M.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,D[M.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,D[M.minFilter]),M.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,X[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Tn||M.minFilter!==Aa&&M.minFilter!==Sr||M.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ee(b,M){let $=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",S));const Q=M.source;let ie=h.get(Q);ie===void 0&&(ie={},h.set(Q,ie));const se=W(M);if(se!==b.__cacheKey){ie[se]===void 0&&(ie[se]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,$=!0),ie[se].usedTimes++;const we=ie[b.__cacheKey];we!==void 0&&(ie[b.__cacheKey].usedTimes--,we.usedTimes===0&&T(M)),b.__cacheKey=se,b.__webglTexture=ie[se].texture}return $}function ge(b,M,$){let Q=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=t.TEXTURE_3D);const ie=ee(b,M),se=M.source;n.bindTexture(Q,b.__webglTexture,t.TEXTURE0+$);const we=i.get(se);if(se.version!==we.__version||ie===!0){n.activeTexture(t.TEXTURE0+$);const pe=it.getPrimaries(it.workingColorSpace),he=M.colorSpace===Ii?null:it.getPrimaries(M.colorSpace),Ne=M.colorSpace===Ii||pe===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let ue=x(M.image,!1,r.maxTextureSize);ue=Te(M,ue);const Ee=s.convert(M.format,M.colorSpace),qe=s.convert(M.type);let Ae=_(M.internalFormat,Ee,qe,M.colorSpace,M.isVideoTexture);j(Q,M);let ve;const Fe=M.mipmaps,Ge=M.isVideoTexture!==!0,nt=we.__version===void 0||ie===!0,Be=se.dataReady,y=g(M,ue);if(M.isDepthTexture)Ae=t.DEPTH_COMPONENT16,M.type===ki?Ae=t.DEPTH_COMPONENT32F:M.type===Hs?Ae=t.DEPTH_COMPONENT24:M.type===na&&(Ae=t.DEPTH24_STENCIL8),nt&&(Ge?n.texStorage2D(t.TEXTURE_2D,1,Ae,ue.width,ue.height):n.texImage2D(t.TEXTURE_2D,0,Ae,ue.width,ue.height,0,Ee,qe,null));else if(M.isDataTexture)if(Fe.length>0){Ge&&nt&&n.texStorage2D(t.TEXTURE_2D,y,Ae,Fe[0].width,Fe[0].height);for(let F=0,H=Fe.length;F<H;F++)ve=Fe[F],Ge?Be&&n.texSubImage2D(t.TEXTURE_2D,F,0,0,ve.width,ve.height,Ee,qe,ve.data):n.texImage2D(t.TEXTURE_2D,F,Ae,ve.width,ve.height,0,Ee,qe,ve.data);M.generateMipmaps=!1}else Ge?(nt&&n.texStorage2D(t.TEXTURE_2D,y,Ae,ue.width,ue.height),Be&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue.width,ue.height,Ee,qe,ue.data)):n.texImage2D(t.TEXTURE_2D,0,Ae,ue.width,ue.height,0,Ee,qe,ue.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ge&&nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,y,Ae,Fe[0].width,Fe[0].height,ue.depth);for(let F=0,H=Fe.length;F<H;F++)ve=Fe[F],M.format!==$n?Ee!==null?Ge?Be&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,F,0,0,0,ve.width,ve.height,ue.depth,Ee,ve.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,F,Ae,ve.width,ve.height,ue.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?Be&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,F,0,0,0,ve.width,ve.height,ue.depth,Ee,qe,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,F,Ae,ve.width,ve.height,ue.depth,0,Ee,qe,ve.data)}else{Ge&&nt&&n.texStorage2D(t.TEXTURE_2D,y,Ae,Fe[0].width,Fe[0].height);for(let F=0,H=Fe.length;F<H;F++)ve=Fe[F],M.format!==$n?Ee!==null?Ge?Be&&n.compressedTexSubImage2D(t.TEXTURE_2D,F,0,0,ve.width,ve.height,Ee,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,F,Ae,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?Be&&n.texSubImage2D(t.TEXTURE_2D,F,0,0,ve.width,ve.height,Ee,qe,ve.data):n.texImage2D(t.TEXTURE_2D,F,Ae,ve.width,ve.height,0,Ee,qe,ve.data)}else if(M.isDataArrayTexture)Ge?(nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,y,Ae,ue.width,ue.height,ue.depth),Be&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Ee,qe,ue.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ae,ue.width,ue.height,ue.depth,0,Ee,qe,ue.data);else if(M.isData3DTexture)Ge?(nt&&n.texStorage3D(t.TEXTURE_3D,y,Ae,ue.width,ue.height,ue.depth),Be&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Ee,qe,ue.data)):n.texImage3D(t.TEXTURE_3D,0,Ae,ue.width,ue.height,ue.depth,0,Ee,qe,ue.data);else if(M.isFramebufferTexture){if(nt)if(Ge)n.texStorage2D(t.TEXTURE_2D,y,Ae,ue.width,ue.height);else{let F=ue.width,H=ue.height;for(let ne=0;ne<y;ne++)n.texImage2D(t.TEXTURE_2D,ne,Ae,F,H,0,Ee,qe,null),F>>=1,H>>=1}}else if(Fe.length>0){if(Ge&&nt){const F=Ye(Fe[0]);n.texStorage2D(t.TEXTURE_2D,y,Ae,F.width,F.height)}for(let F=0,H=Fe.length;F<H;F++)ve=Fe[F],Ge?Be&&n.texSubImage2D(t.TEXTURE_2D,F,0,0,Ee,qe,ve):n.texImage2D(t.TEXTURE_2D,F,Ae,Ee,qe,ve);M.generateMipmaps=!1}else if(Ge){if(nt){const F=Ye(ue);n.texStorage2D(t.TEXTURE_2D,y,Ae,F.width,F.height)}Be&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ee,qe,ue)}else n.texImage2D(t.TEXTURE_2D,0,Ae,Ee,qe,ue);p(M)&&u(Q),we.__version=se.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function Pe(b,M,$){if(M.image.length!==6)return;const Q=ee(b,M),ie=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+$);const se=i.get(ie);if(ie.version!==se.__version||Q===!0){n.activeTexture(t.TEXTURE0+$);const we=it.getPrimaries(it.workingColorSpace),pe=M.colorSpace===Ii?null:it.getPrimaries(M.colorSpace),he=M.colorSpace===Ii||we===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Ne=M.isCompressedTexture||M.image[0].isCompressedTexture,ue=M.image[0]&&M.image[0].isDataTexture,Ee=[];for(let H=0;H<6;H++)!Ne&&!ue?Ee[H]=x(M.image[H],!0,r.maxCubemapSize):Ee[H]=ue?M.image[H].image:M.image[H],Ee[H]=Te(M,Ee[H]);const qe=Ee[0],Ae=s.convert(M.format,M.colorSpace),ve=s.convert(M.type),Fe=_(M.internalFormat,Ae,ve,M.colorSpace),Ge=M.isVideoTexture!==!0,nt=se.__version===void 0||Q===!0,Be=ie.dataReady;let y=g(M,qe);j(t.TEXTURE_CUBE_MAP,M);let F;if(Ne){Ge&&nt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,y,Fe,qe.width,qe.height);for(let H=0;H<6;H++){F=Ee[H].mipmaps;for(let ne=0;ne<F.length;ne++){const ce=F[ne];M.format!==$n?Ae!==null?Ge?Be&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,ne,0,0,ce.width,ce.height,Ae,ce.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,ne,Fe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?Be&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,ne,0,0,ce.width,ce.height,Ae,ve,ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,ne,Fe,ce.width,ce.height,0,Ae,ve,ce.data)}}}else{if(F=M.mipmaps,Ge&&nt){F.length>0&&y++;const H=Ye(Ee[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,y,Fe,H.width,H.height)}for(let H=0;H<6;H++)if(ue){Ge?Be&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,Ee[H].width,Ee[H].height,Ae,ve,Ee[H].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,Fe,Ee[H].width,Ee[H].height,0,Ae,ve,Ee[H].data);for(let ne=0;ne<F.length;ne++){const ke=F[ne].image[H].image;Ge?Be&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,ne+1,0,0,ke.width,ke.height,Ae,ve,ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,ne+1,Fe,ke.width,ke.height,0,Ae,ve,ke.data)}}else{Ge?Be&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,Ae,ve,Ee[H]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,Fe,Ae,ve,Ee[H]);for(let ne=0;ne<F.length;ne++){const ce=F[ne];Ge?Be&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,ne+1,0,0,Ae,ve,ce.image[H]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,ne+1,Fe,Ae,ve,ce.image[H])}}}p(M)&&u(t.TEXTURE_CUBE_MAP),se.__version=ie.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function q(b,M,$,Q,ie,se){const we=s.convert($.format,$.colorSpace),pe=s.convert($.type),he=_($.internalFormat,we,pe,$.colorSpace);if(!i.get(M).__hasExternalTextures){const ue=Math.max(1,M.width>>se),Ee=Math.max(1,M.height>>se);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,se,he,ue,Ee,M.depth,0,we,pe,null):n.texImage2D(ie,se,he,ue,Ee,0,we,pe,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),be(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,ie,i.get($).__webglTexture,0,Me(M)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,ie,i.get($).__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ae(b,M,$){if(t.bindRenderbuffer(t.RENDERBUFFER,b),M.depthBuffer&&!M.stencilBuffer){let Q=t.DEPTH_COMPONENT24;if($||be(M)){const ie=M.depthTexture;ie&&ie.isDepthTexture&&(ie.type===ki?Q=t.DEPTH_COMPONENT32F:ie.type===Hs&&(Q=t.DEPTH_COMPONENT24));const se=Me(M);be(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,Q,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,se,Q,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,Q,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,b)}else if(M.depthBuffer&&M.stencilBuffer){const Q=Me(M);$&&be(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Q,t.DEPTH24_STENCIL8,M.width,M.height):be(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Q,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,b)}else{const Q=M.textures;for(let ie=0;ie<Q.length;ie++){const se=Q[ie],we=s.convert(se.format,se.colorSpace),pe=s.convert(se.type),he=_(se.internalFormat,we,pe,se.colorSpace),Ne=Me(M);$&&be(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ne,he,M.width,M.height):be(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ne,he,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,he,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function te(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),P(M.depthTexture,0);const Q=i.get(M.depthTexture).__webglTexture,ie=Me(M);if(M.depthTexture.format===Cs)be(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(M.depthTexture.format===Xo)be(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function re(b){const M=i.get(b),$=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");te(M.__webglFramebuffer,b)}else if($){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]=t.createRenderbuffer(),ae(M.__webglDepthbuffer[Q],b,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),ae(M.__webglDepthbuffer,b,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ce(b,M,$){const Q=i.get(b);M!==void 0&&q(Q.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),$!==void 0&&re(b)}function Oe(b){const M=b.texture,$=i.get(b),Q=i.get(M);b.addEventListener("dispose",C);const ie=b.textures,se=b.isWebGLCubeRenderTarget===!0,we=ie.length>1;if(we||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=M.version,o.memory.textures++),se){$.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer[pe]=[];for(let he=0;he<M.mipmaps.length;he++)$.__webglFramebuffer[pe][he]=t.createFramebuffer()}else $.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer=[];for(let pe=0;pe<M.mipmaps.length;pe++)$.__webglFramebuffer[pe]=t.createFramebuffer()}else $.__webglFramebuffer=t.createFramebuffer();if(we)for(let pe=0,he=ie.length;pe<he;pe++){const Ne=i.get(ie[pe]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=t.createTexture(),o.memory.textures++)}if(b.samples>0&&be(b)===!1){$.__webglMultisampledFramebuffer=t.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let pe=0;pe<ie.length;pe++){const he=ie[pe];$.__webglColorRenderbuffer[pe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,$.__webglColorRenderbuffer[pe]);const Ne=s.convert(he.format,he.colorSpace),ue=s.convert(he.type),Ee=_(he.internalFormat,Ne,ue,he.colorSpace,b.isXRRenderTarget===!0),qe=Me(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,qe,Ee,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,$.__webglColorRenderbuffer[pe])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&($.__webglDepthRenderbuffer=t.createRenderbuffer(),ae($.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(se){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),j(t.TEXTURE_CUBE_MAP,M);for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0)for(let he=0;he<M.mipmaps.length;he++)q($.__webglFramebuffer[pe][he],b,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,he);else q($.__webglFramebuffer[pe],b,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);p(M)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(we){for(let pe=0,he=ie.length;pe<he;pe++){const Ne=ie[pe],ue=i.get(Ne);n.bindTexture(t.TEXTURE_2D,ue.__webglTexture),j(t.TEXTURE_2D,Ne),q($.__webglFramebuffer,b,Ne,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,0),p(Ne)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let pe=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(pe=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,Q.__webglTexture),j(pe,M),M.mipmaps&&M.mipmaps.length>0)for(let he=0;he<M.mipmaps.length;he++)q($.__webglFramebuffer[he],b,M,t.COLOR_ATTACHMENT0,pe,he);else q($.__webglFramebuffer,b,M,t.COLOR_ATTACHMENT0,pe,0);p(M)&&u(pe),n.unbindTexture()}b.depthBuffer&&re(b)}function B(b){const M=b.textures;for(let $=0,Q=M.length;$<Q;$++){const ie=M[$];if(p(ie)){const se=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,we=i.get(ie).__webglTexture;n.bindTexture(se,we),u(se),n.unbindTexture()}}}const Ze=[],xe=[];function Qe(b){if(b.samples>0){if(be(b)===!1){const M=b.textures,$=b.width,Q=b.height;let ie=t.COLOR_BUFFER_BIT;const se=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,we=i.get(b),pe=M.length>1;if(pe)for(let he=0;he<M.length;he++)n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let he=0;he<M.length;he++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),pe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,we.__webglColorRenderbuffer[he]);const Ne=i.get(M[he]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ne,0)}t.blitFramebuffer(0,0,$,Q,0,0,$,Q,ie,t.NEAREST),l===!0&&(Ze.length=0,xe.length=0,Ze.push(t.COLOR_ATTACHMENT0+he),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Ze.push(se),xe.push(se),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,xe)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ze))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),pe)for(let he=0;he<M.length;he++){n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,we.__webglColorRenderbuffer[he]);const Ne=i.get(M[he]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,Ne,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const M=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Me(b){return Math.min(r.maxSamples,b.samples)}function be(b){const M=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function le(b){const M=o.render.frame;f.get(b)!==M&&(f.set(b,M),b.update())}function Te(b,M){const $=b.colorSpace,Q=b.format,ie=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||$!==ir&&$!==Ii&&(it.getTransfer($)===lt?(Q!==$n||ie!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),M}function Ye(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=E,this.setTexture2D=P,this.setTexture2DArray=z,this.setTexture3D=Y,this.setTextureCube=Z,this.rebindTextures=Ce,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=q,this.useMultisampledRTT=be}function GR(t,e){function n(i,r=Ii){let s;const o=it.getTransfer(r);if(i===Qi)return t.UNSIGNED_BYTE;if(i===Nv)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Uv)return t.UNSIGNED_SHORT_5_5_5_1;if(i===TM)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===MM)return t.BYTE;if(i===wM)return t.SHORT;if(i===Lv)return t.UNSIGNED_SHORT;if(i===Dv)return t.INT;if(i===Hs)return t.UNSIGNED_INT;if(i===ki)return t.FLOAT;if(i===fc)return t.HALF_FLOAT;if(i===AM)return t.ALPHA;if(i===RM)return t.RGB;if(i===$n)return t.RGBA;if(i===CM)return t.LUMINANCE;if(i===bM)return t.LUMINANCE_ALPHA;if(i===Cs)return t.DEPTH_COMPONENT;if(i===Xo)return t.DEPTH_STENCIL;if(i===PM)return t.RED;if(i===Iv)return t.RED_INTEGER;if(i===LM)return t.RG;if(i===Ov)return t.RG_INTEGER;if(i===Fv)return t.RGBA_INTEGER;if(i===Yc||i===$c||i===Kc||i===Zc)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Yc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$c)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Kc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Yc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$c)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Kc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xp||i===yp||i===Sp||i===Ep)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===xp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yp)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sp)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ep)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Mp||i===wp||i===Tp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Mp||i===wp)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Tp)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ap||i===Rp||i===Cp||i===bp||i===Pp||i===Lp||i===Dp||i===Np||i===Up||i===Ip||i===Op||i===Fp||i===kp||i===Bp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ap)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rp)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cp)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bp)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pp)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Lp)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Dp)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Np)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Up)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ip)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Op)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fp)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kp)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bp)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qc||i===zp||i===Hp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Qc)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===DM||i===Vp||i===Gp||i===Wp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Qc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Vp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===na?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class WR extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Er extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jR={type:"move"};class wu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Er,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Er,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Er,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),u=this._getHandJoint(c,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),m=.02,v=.005;c.inputState.pinching&&h>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jR)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Er;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const XR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class YR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new ln,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new Ji({vertexShader:XR,fragmentShader:qR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Fn(new oa(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class $R extends kr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,d=null,h=null,m=null,v=null;const x=new YR,p=n.getContextAttributes();let u=null,_=null;const g=[],S=[],C=new De;let R=null;const T=new Mn;T.layers.enable(1),T.viewport=new Pt;const L=new Mn;L.layers.enable(2),L.viewport=new Pt;const w=[T,L],E=new WR;E.layers.enable(1),E.layers.enable(2);let U=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ae=g[q];return ae===void 0&&(ae=new wu,g[q]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(q){let ae=g[q];return ae===void 0&&(ae=new wu,g[q]=ae),ae.getGripSpace()},this.getHand=function(q){let ae=g[q];return ae===void 0&&(ae=new wu,g[q]=ae),ae.getHandSpace()};function P(q){const ae=S.indexOf(q.inputSource);if(ae===-1)return;const te=g[ae];te!==void 0&&(te.update(q.inputSource,q.frame,c||o),te.dispatchEvent({type:q.type,data:q.inputSource}))}function z(){r.removeEventListener("select",P),r.removeEventListener("selectstart",P),r.removeEventListener("selectend",P),r.removeEventListener("squeeze",P),r.removeEventListener("squeezestart",P),r.removeEventListener("squeezeend",P),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",Y);for(let q=0;q<g.length;q++){const ae=S[q];ae!==null&&(S[q]=null,g[q].disconnect(ae))}U=null,W=null,x.reset(),e.setRenderTarget(u),m=null,h=null,d=null,r=null,_=null,Pe.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",P),r.addEventListener("selectstart",P),r.addEventListener("selectend",P),r.addEventListener("squeeze",P),r.addEventListener("squeezestart",P),r.addEventListener("squeezeend",P),r.addEventListener("end",z),r.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ae={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,ae),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new Ur(m.framebufferWidth,m.framebufferHeight,{format:$n,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ae=null,te=null,re=null;p.depth&&(re=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ae=p.stencil?Xo:Cs,te=p.stencil?na:Hs);const Ce={colorFormat:n.RGBA8,depthFormat:re,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(Ce),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new Ur(h.textureWidth,h.textureHeight,{format:$n,type:Qi,depthTexture:new e0(h.textureWidth,h.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Pe.setContext(r),Pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Y(q){for(let ae=0;ae<q.removed.length;ae++){const te=q.removed[ae],re=S.indexOf(te);re>=0&&(S[re]=null,g[re].disconnect(te))}for(let ae=0;ae<q.added.length;ae++){const te=q.added[ae];let re=S.indexOf(te);if(re===-1){for(let Oe=0;Oe<g.length;Oe++)if(Oe>=S.length){S.push(te),re=Oe;break}else if(S[Oe]===null){S[Oe]=te,re=Oe;break}if(re===-1)break}const Ce=g[re];Ce&&Ce.connect(te)}}const Z=new O,J=new O;function D(q,ae,te){Z.setFromMatrixPosition(ae.matrixWorld),J.setFromMatrixPosition(te.matrixWorld);const re=Z.distanceTo(J),Ce=ae.projectionMatrix.elements,Oe=te.projectionMatrix.elements,B=Ce[14]/(Ce[10]-1),Ze=Ce[14]/(Ce[10]+1),xe=(Ce[9]+1)/Ce[5],Qe=(Ce[9]-1)/Ce[5],Me=(Ce[8]-1)/Ce[0],be=(Oe[8]+1)/Oe[0],le=B*Me,Te=B*be,Ye=re/(-Me+be),b=Ye*-Me;ae.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(b),q.translateZ(Ye),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const M=B+Ye,$=Ze+Ye,Q=le-b,ie=Te+(re-b),se=xe*Ze/$*M,we=Qe*Ze/$*M;q.projectionMatrix.makePerspective(Q,ie,se,we,M,$),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function X(q,ae){ae===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ae.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;x.texture!==null&&(q.near=x.depthNear,q.far=x.depthFar),E.near=L.near=T.near=q.near,E.far=L.far=T.far=q.far,(U!==E.near||W!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),U=E.near,W=E.far,T.near=U,T.far=W,L.near=U,L.far=W,T.updateProjectionMatrix(),L.updateProjectionMatrix(),q.updateProjectionMatrix());const ae=q.parent,te=E.cameras;X(E,ae);for(let re=0;re<te.length;re++)X(te[re],ae);te.length===2?D(E,T,L):E.projectionMatrix.copy(T.projectionMatrix),j(q,E,ae)};function j(q,ae,te){te===null?q.matrix.copy(ae.matrixWorld):(q.matrix.copy(te.matrixWorld),q.matrix.invert(),q.matrix.multiply(ae.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ae.projectionMatrix),q.projectionMatrixInverse.copy(ae.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Lf*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null};let ee=null;function ge(q,ae){if(f=ae.getViewerPose(c||o),v=ae,f!==null){const te=f.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let re=!1;te.length!==E.cameras.length&&(E.cameras.length=0,re=!0);for(let Oe=0;Oe<te.length;Oe++){const B=te[Oe];let Ze=null;if(m!==null)Ze=m.getViewport(B);else{const Qe=d.getViewSubImage(h,B);Ze=Qe.viewport,Oe===0&&(e.setRenderTargetTextures(_,Qe.colorTexture,h.ignoreDepthValues?void 0:Qe.depthStencilTexture),e.setRenderTarget(_))}let xe=w[Oe];xe===void 0&&(xe=new Mn,xe.layers.enable(Oe),xe.viewport=new Pt,w[Oe]=xe),xe.matrix.fromArray(B.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(B.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Oe===0&&(E.matrix.copy(xe.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),re===!0&&E.cameras.push(xe)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Oe=d.getDepthInformation(te[0]);Oe&&Oe.isValid&&Oe.texture&&x.init(e,Oe,r.renderState)}}for(let te=0;te<g.length;te++){const re=S[te],Ce=g[te];re!==null&&Ce!==void 0&&Ce.update(re,ae,c||o)}x.render(e,E),ee&&ee(q,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),v=null}const Pe=new Qv;Pe.setAnimationLoop(ge),this.setAnimationLoop=function(q){ee=q},this.dispose=function(){}}}const ur=new Jn,KR=new vt;function ZR(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,$v(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,_,g,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),d(p,u)):u.isMeshPhongMaterial?(s(p,u),f(p,u)):u.isMeshStandardMaterial?(s(p,u),h(p,u),u.isMeshPhysicalMaterial&&m(p,u,S)):u.isMeshMatcapMaterial?(s(p,u),v(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),x(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,_,g):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===an&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===an&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const _=e.get(u),g=_.envMap,S=_.envMapRotation;if(g&&(p.envMap.value=g,ur.copy(S),ur.x*=-1,ur.y*=-1,ur.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),p.envMapRotation.value.setFromMatrix4(KR.makeRotationFromEuler(ur)),p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const C=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*C,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,_,g){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*_,p.scale.value=g*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function f(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,_){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===an&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){const _=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function QR(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,g){const S=g.program;i.uniformBlockBinding(_,S)}function c(_,g){let S=r[_.id];S===void 0&&(v(_),S=f(_),r[_.id]=S,_.addEventListener("dispose",p));const C=g.program;i.updateUBOMapping(_,C);const R=e.render.frame;s[_.id]!==R&&(h(_),s[_.id]=R)}function f(_){const g=d();_.__bindingPointIndex=g;const S=t.createBuffer(),C=_.__size,R=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,C,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,S),S}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const g=r[_.id],S=_.uniforms,C=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let R=0,T=S.length;R<T;R++){const L=Array.isArray(S[R])?S[R]:[S[R]];for(let w=0,E=L.length;w<E;w++){const U=L[w];if(m(U,R,w,C)===!0){const W=U.__offset,P=Array.isArray(U.value)?U.value:[U.value];let z=0;for(let Y=0;Y<P.length;Y++){const Z=P[Y],J=x(Z);typeof Z=="number"||typeof Z=="boolean"?(U.__data[0]=Z,t.bufferSubData(t.UNIFORM_BUFFER,W+z,U.__data)):Z.isMatrix3?(U.__data[0]=Z.elements[0],U.__data[1]=Z.elements[1],U.__data[2]=Z.elements[2],U.__data[3]=0,U.__data[4]=Z.elements[3],U.__data[5]=Z.elements[4],U.__data[6]=Z.elements[5],U.__data[7]=0,U.__data[8]=Z.elements[6],U.__data[9]=Z.elements[7],U.__data[10]=Z.elements[8],U.__data[11]=0):(Z.toArray(U.__data,z),z+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,U.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,g,S,C){const R=_.value,T=g+"_"+S;if(C[T]===void 0)return typeof R=="number"||typeof R=="boolean"?C[T]=R:C[T]=R.clone(),!0;{const L=C[T];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return C[T]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function v(_){const g=_.uniforms;let S=0;const C=16;for(let T=0,L=g.length;T<L;T++){const w=Array.isArray(g[T])?g[T]:[g[T]];for(let E=0,U=w.length;E<U;E++){const W=w[E],P=Array.isArray(W.value)?W.value:[W.value];for(let z=0,Y=P.length;z<Y;z++){const Z=P[z],J=x(Z),D=S%C;D!==0&&C-D<J.boundary&&(S+=C-D),W.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=S,S+=J.storage}}}const R=S%C;return R>0&&(S+=C-R),_.__size=S,_.__cache={},this}function x(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function p(_){const g=_.target;g.removeEventListener("dispose",p);const S=o.indexOf(g.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function u(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class JR{constructor(e={}){const{canvas:n=jM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const m=new Uint32Array(4),v=new Int32Array(4);let x=null,p=null;const u=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jn,this._useLegacyLights=!1,this.toneMapping=Yi,this.toneMappingExposure=1;const g=this;let S=!1,C=0,R=0,T=null,L=-1,w=null;const E=new Pt,U=new Pt;let W=null;const P=new Je(0);let z=0,Y=n.width,Z=n.height,J=1,D=null,X=null;const j=new Pt(0,0,Y,Z),ee=new Pt(0,0,Y,Z);let ge=!1;const Pe=new Fd;let q=!1,ae=!1;const te=new vt,re=new O,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Oe(){return T===null?J:1}let B=i;function Ze(A,k){return n.getContext(A,k)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ud}`),n.addEventListener("webglcontextlost",y,!1),n.addEventListener("webglcontextrestored",F,!1),n.addEventListener("webglcontextcreationerror",H,!1),B===null){const k="webgl2";if(B=Ze(k,A),B===null)throw Ze(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let xe,Qe,Me,be,le,Te,Ye,b,M,$,Q,ie,se,we,pe,he,Ne,ue,Ee,qe,Ae,ve,Fe,Ge;function nt(){xe=new a1(B),xe.init(),ve=new GR(B,xe),Qe=new t1(B,xe,e,ve),Me=new HR(B),be=new u1(B),le=new RR,Te=new VR(B,xe,Me,le,Qe,ve,be),Ye=new i1(g),b=new o1(g),M=new _w(B),Fe=new JA(B,M),$=new l1(B,M,be,Fe),Q=new d1(B,$,M,be),Ee=new f1(B,Qe,Te),he=new n1(le),ie=new AR(g,Ye,b,xe,Qe,Fe,he),se=new ZR(g,le),we=new bR,pe=new IR(xe),ue=new QA(g,Ye,b,Me,Q,h,l),Ne=new zR(g,Q,Qe),Ge=new QR(B,be,Qe,Me),qe=new e1(B,xe,be),Ae=new c1(B,xe,be),be.programs=ie.programs,g.capabilities=Qe,g.extensions=xe,g.properties=le,g.renderLists=we,g.shadowMap=Ne,g.state=Me,g.info=be}nt();const Be=new $R(g,B);this.xr=Be,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=xe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=xe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(A){A!==void 0&&(J=A,this.setSize(Y,Z,!1))},this.getSize=function(A){return A.set(Y,Z)},this.setSize=function(A,k,K=!0){if(Be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=A,Z=k,n.width=Math.floor(A*J),n.height=Math.floor(k*J),K===!0&&(n.style.width=A+"px",n.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(Y*J,Z*J).floor()},this.setDrawingBufferSize=function(A,k,K){Y=A,Z=k,J=K,n.width=Math.floor(A*K),n.height=Math.floor(k*K),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(E)},this.getViewport=function(A){return A.copy(j)},this.setViewport=function(A,k,K,V){A.isVector4?j.set(A.x,A.y,A.z,A.w):j.set(A,k,K,V),Me.viewport(E.copy(j).multiplyScalar(J).round())},this.getScissor=function(A){return A.copy(ee)},this.setScissor=function(A,k,K,V){A.isVector4?ee.set(A.x,A.y,A.z,A.w):ee.set(A,k,K,V),Me.scissor(U.copy(ee).multiplyScalar(J).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(A){Me.setScissorTest(ge=A)},this.setOpaqueSort=function(A){D=A},this.setTransparentSort=function(A){X=A},this.getClearColor=function(A){return A.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(A=!0,k=!0,K=!0){let V=0;if(A){let G=!1;if(T!==null){const me=T.texture.format;G=me===Fv||me===Ov||me===Iv}if(G){const me=T.texture.type,ye=me===Qi||me===Hs||me===Lv||me===na||me===Nv||me===Uv,Se=ue.getClearColor(),Re=ue.getClearAlpha(),Ue=Se.r,ze=Se.g,je=Se.b;ye?(m[0]=Ue,m[1]=ze,m[2]=je,m[3]=Re,B.clearBufferuiv(B.COLOR,0,m)):(v[0]=Ue,v[1]=ze,v[2]=je,v[3]=Re,B.clearBufferiv(B.COLOR,0,v))}else V|=B.COLOR_BUFFER_BIT}k&&(V|=B.DEPTH_BUFFER_BIT),K&&(V|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",y,!1),n.removeEventListener("webglcontextrestored",F,!1),n.removeEventListener("webglcontextcreationerror",H,!1),we.dispose(),pe.dispose(),le.dispose(),Ye.dispose(),b.dispose(),Q.dispose(),Fe.dispose(),Ge.dispose(),ie.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",Ke),Be.removeEventListener("sessionend",xt),ot.stop()};function y(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=be.autoReset,k=Ne.enabled,K=Ne.autoUpdate,V=Ne.needsUpdate,G=Ne.type;nt(),be.autoReset=A,Ne.enabled=k,Ne.autoUpdate=K,Ne.needsUpdate=V,Ne.type=G}function H(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ne(A){const k=A.target;k.removeEventListener("dispose",ne),ce(k)}function ce(A){ke(A),le.remove(A)}function ke(A){const k=le.get(A).programs;k!==void 0&&(k.forEach(function(K){ie.releaseProgram(K)}),A.isShaderMaterial&&ie.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,K,V,G,me){k===null&&(k=Ce);const ye=G.isMesh&&G.matrixWorld.determinant()<0,Se=a0(A,k,K,V,G);Me.setMaterial(V,ye);let Re=K.index,Ue=1;if(V.wireframe===!0){if(Re=$.getWireframeAttribute(K),Re===void 0)return;Ue=2}const ze=K.drawRange,je=K.attributes.position;let yt=ze.start*Ue,Ot=(ze.start+ze.count)*Ue;me!==null&&(yt=Math.max(yt,me.start*Ue),Ot=Math.min(Ot,(me.start+me.count)*Ue)),Re!==null?(yt=Math.max(yt,0),Ot=Math.min(Ot,Re.count)):je!=null&&(yt=Math.max(yt,0),Ot=Math.min(Ot,je.count));const cn=Ot-yt;if(cn<0||cn===1/0)return;Fe.setup(G,V,Se,K,Re);let ti,et=qe;if(Re!==null&&(ti=M.get(Re),et=Ae,et.setIndex(ti)),G.isMesh)V.wireframe===!0?(Me.setLineWidth(V.wireframeLinewidth*Oe()),et.setMode(B.LINES)):et.setMode(B.TRIANGLES);else if(G.isLine){let Ie=V.linewidth;Ie===void 0&&(Ie=1),Me.setLineWidth(Ie*Oe()),G.isLineSegments?et.setMode(B.LINES):G.isLineLoop?et.setMode(B.LINE_LOOP):et.setMode(B.LINE_STRIP)}else G.isPoints?et.setMode(B.POINTS):G.isSprite&&et.setMode(B.TRIANGLES);if(G.isBatchedMesh)G._multiDrawInstances!==null?et.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances):et.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)et.renderInstances(yt,cn,G.count);else if(K.isInstancedBufferGeometry){const Ie=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Zs=Math.min(K.instanceCount,Ie);et.renderInstances(yt,cn,Zs)}else et.render(yt,cn)};function We(A,k,K){A.transparent===!0&&A.side===ui&&A.forceSinglePass===!1?(A.side=an,A.needsUpdate=!0,aa(A,k,K),A.side=Zi,A.needsUpdate=!0,aa(A,k,K),A.side=ui):aa(A,k,K)}this.compile=function(A,k,K=null){K===null&&(K=A),p=pe.get(K),p.init(k),_.push(p),K.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),A!==K&&A.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights(g._useLegacyLights);const V=new Set;return A.traverse(function(G){const me=G.material;if(me)if(Array.isArray(me))for(let ye=0;ye<me.length;ye++){const Se=me[ye];We(Se,K,G),V.add(Se)}else We(me,K,G),V.add(me)}),_.pop(),p=null,V},this.compileAsync=function(A,k,K=null){const V=this.compile(A,k,K);return new Promise(G=>{function me(){if(V.forEach(function(ye){le.get(ye).currentProgram.isReady()&&V.delete(ye)}),V.size===0){G(A);return}setTimeout(me,10)}xe.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let dt=null;function Rt(A){dt&&dt(A)}function Ke(){ot.stop()}function xt(){ot.start()}const ot=new Qv;ot.setAnimationLoop(Rt),typeof self<"u"&&ot.setContext(self),this.setAnimationLoop=function(A){dt=A,Be.setAnimationLoop(A),A===null?ot.stop():ot.start()},Be.addEventListener("sessionstart",Ke),Be.addEventListener("sessionend",xt),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(k),k=Be.getCamera()),A.isScene===!0&&A.onBeforeRender(g,A,k,T),p=pe.get(A,_.length),p.init(k),_.push(p),te.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Pe.setFromProjectionMatrix(te),ae=this.localClippingEnabled,q=he.init(this.clippingPlanes,ae),x=we.get(A,u.length),x.init(),u.push(x),yi(A,k,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(D,X);const K=Be.enabled===!1||Be.isPresenting===!1||Be.hasDepthSensing()===!1;K&&ue.addToRenderList(x,A),this.info.render.frame++,q===!0&&he.beginShadows();const V=p.state.shadowsArray;Ne.render(V,A,k),q===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=x.opaque,me=x.transmissive;if(p.setupLights(g._useLegacyLights),k.isArrayCamera){const ye=k.cameras;if(me.length>0)for(let Se=0,Re=ye.length;Se<Re;Se++){const Ue=ye[Se];Si(G,me,A,Ue)}K&&ue.render(A);for(let Se=0,Re=ye.length;Se<Re;Se++){const Ue=ye[Se];vn(x,A,Ue,Ue.viewport)}}else me.length>0&&Si(G,me,A,k),K&&ue.render(A),vn(x,A,k);T!==null&&(Te.updateMultisampleRenderTarget(T),Te.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(g,A,k),Fe.resetDefaultState(),L=-1,w=null,_.pop(),_.length>0?(p=_[_.length-1],q===!0&&he.setGlobalState(g.clippingPlanes,p.state.camera)):p=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function yi(A,k,K,V){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Pe.intersectsSprite(A)){V&&re.setFromMatrixPosition(A.matrixWorld).applyMatrix4(te);const ye=Q.update(A),Se=A.material;Se.visible&&x.push(A,ye,Se,K,re.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Pe.intersectsObject(A))){const ye=Q.update(A),Se=A.material;if(V&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),re.copy(A.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),re.copy(ye.boundingSphere.center)),re.applyMatrix4(A.matrixWorld).applyMatrix4(te)),Array.isArray(Se)){const Re=ye.groups;for(let Ue=0,ze=Re.length;Ue<ze;Ue++){const je=Re[Ue],yt=Se[je.materialIndex];yt&&yt.visible&&x.push(A,ye,yt,K,re.z,je)}}else Se.visible&&x.push(A,ye,Se,K,re.z,null)}}const me=A.children;for(let ye=0,Se=me.length;ye<Se;ye++)yi(me[ye],k,K,V)}function vn(A,k,K,V){const G=A.opaque,me=A.transmissive,ye=A.transparent;p.setupLightsView(K),q===!0&&he.setGlobalState(g.clippingPlanes,K),V&&Me.viewport(E.copy(V)),G.length>0&&ei(G,k,K),me.length>0&&ei(me,k,K),ye.length>0&&ei(ye,k,K),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Si(A,k,K,V){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Ur(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float")?fc:Qi,minFilter:Sr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const me=p.state.transmissionRenderTarget[V.id],ye=V.viewport||E;me.setSize(ye.z,ye.w);const Se=g.getRenderTarget();g.setRenderTarget(me),g.getClearColor(P),z=g.getClearAlpha(),z<1&&g.setClearColor(16777215,.5),g.clear();const Re=g.toneMapping;g.toneMapping=Yi;const Ue=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),q===!0&&he.setGlobalState(g.clippingPlanes,V),ei(A,K,V),Te.updateMultisampleRenderTarget(me),Te.updateRenderTargetMipmap(me),xe.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let je=0,yt=k.length;je<yt;je++){const Ot=k[je],cn=Ot.object,ti=Ot.geometry,et=Ot.material,Ie=Ot.group;if(et.side===ui&&cn.layers.test(V.layers)){const Zs=et.side;et.side=an,et.needsUpdate=!0,Ks(cn,K,V,ti,et,Ie),et.side=Zs,et.needsUpdate=!0,ze=!0}}ze===!0&&(Te.updateMultisampleRenderTarget(me),Te.updateRenderTargetMipmap(me))}g.setRenderTarget(Se),g.setClearColor(P,z),Ue!==void 0&&(V.viewport=Ue),g.toneMapping=Re}function ei(A,k,K){const V=k.isScene===!0?k.overrideMaterial:null;for(let G=0,me=A.length;G<me;G++){const ye=A[G],Se=ye.object,Re=ye.geometry,Ue=V===null?ye.material:V,ze=ye.group;Se.layers.test(K.layers)&&Ks(Se,k,K,Re,Ue,ze)}}function Ks(A,k,K,V,G,me){A.onBeforeRender(g,k,K,V,G,me),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(g,k,K,V,A,me),G.transparent===!0&&G.side===ui&&G.forceSinglePass===!1?(G.side=an,G.needsUpdate=!0,g.renderBufferDirect(K,k,V,G,A,me),G.side=Zi,G.needsUpdate=!0,g.renderBufferDirect(K,k,V,G,A,me),G.side=ui):g.renderBufferDirect(K,k,V,G,A,me),A.onAfterRender(g,k,K,V,G,me)}function aa(A,k,K){k.isScene!==!0&&(k=Ce);const V=le.get(A),G=p.state.lights,me=p.state.shadowsArray,ye=G.state.version,Se=ie.getParameters(A,G.state,me,k,K),Re=ie.getProgramCacheKey(Se);let Ue=V.programs;V.environment=A.isMeshStandardMaterial?k.environment:null,V.fog=k.fog,V.envMap=(A.isMeshStandardMaterial?b:Ye).get(A.envMap||V.environment),V.envMapRotation=V.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Ue===void 0&&(A.addEventListener("dispose",ne),Ue=new Map,V.programs=Ue);let ze=Ue.get(Re);if(ze!==void 0){if(V.currentProgram===ze&&V.lightsStateVersion===ye)return zd(A,Se),ze}else Se.uniforms=ie.getUniforms(A),A.onBuild(K,Se,g),A.onBeforeCompile(Se,g),ze=ie.acquireProgram(Se,Re),Ue.set(Re,ze),V.uniforms=Se.uniforms;const je=V.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(je.clippingPlanes=he.uniform),zd(A,Se),V.needsLights=c0(A),V.lightsStateVersion=ye,V.needsLights&&(je.ambientLightColor.value=G.state.ambient,je.lightProbe.value=G.state.probe,je.directionalLights.value=G.state.directional,je.directionalLightShadows.value=G.state.directionalShadow,je.spotLights.value=G.state.spot,je.spotLightShadows.value=G.state.spotShadow,je.rectAreaLights.value=G.state.rectArea,je.ltc_1.value=G.state.rectAreaLTC1,je.ltc_2.value=G.state.rectAreaLTC2,je.pointLights.value=G.state.point,je.pointLightShadows.value=G.state.pointShadow,je.hemisphereLights.value=G.state.hemi,je.directionalShadowMap.value=G.state.directionalShadowMap,je.directionalShadowMatrix.value=G.state.directionalShadowMatrix,je.spotShadowMap.value=G.state.spotShadowMap,je.spotLightMatrix.value=G.state.spotLightMatrix,je.spotLightMap.value=G.state.spotLightMap,je.pointShadowMap.value=G.state.pointShadowMap,je.pointShadowMatrix.value=G.state.pointShadowMatrix),V.currentProgram=ze,V.uniformsList=null,ze}function Bd(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=fl.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function zd(A,k){const K=le.get(A);K.outputColorSpace=k.outputColorSpace,K.batching=k.batching,K.instancing=k.instancing,K.instancingColor=k.instancingColor,K.instancingMorph=k.instancingMorph,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function a0(A,k,K,V,G){k.isScene!==!0&&(k=Ce),Te.resetTextureUnits();const me=k.fog,ye=V.isMeshStandardMaterial?k.environment:null,Se=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ir,Re=(V.isMeshStandardMaterial?b:Ye).get(V.envMap||ye),Ue=V.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ze=!!K.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),je=!!K.morphAttributes.position,yt=!!K.morphAttributes.normal,Ot=!!K.morphAttributes.color;let cn=Yi;V.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(cn=g.toneMapping);const ti=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,et=ti!==void 0?ti.length:0,Ie=le.get(V),Zs=p.state.lights;if(q===!0&&(ae===!0||A!==w)){const xn=A===w&&V.id===L;he.setState(V,A,xn)}let ut=!1;V.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Zs.state.version||Ie.outputColorSpace!==Se||G.isBatchedMesh&&Ie.batching===!1||!G.isBatchedMesh&&Ie.batching===!0||G.isInstancedMesh&&Ie.instancing===!1||!G.isInstancedMesh&&Ie.instancing===!0||G.isSkinnedMesh&&Ie.skinning===!1||!G.isSkinnedMesh&&Ie.skinning===!0||G.isInstancedMesh&&Ie.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ie.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ie.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ie.instancingMorph===!1&&G.morphTexture!==null||Ie.envMap!==Re||V.fog===!0&&Ie.fog!==me||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==he.numPlanes||Ie.numIntersection!==he.numIntersection)||Ie.vertexAlphas!==Ue||Ie.vertexTangents!==ze||Ie.morphTargets!==je||Ie.morphNormals!==yt||Ie.morphColors!==Ot||Ie.toneMapping!==cn||Ie.morphTargetsCount!==et)&&(ut=!0):(ut=!0,Ie.__version=V.version);let rr=Ie.currentProgram;ut===!0&&(rr=aa(V,k,G));let Hd=!1,Qs=!1,pc=!1;const Ft=rr.getUniforms(),Ei=Ie.uniforms;if(Me.useProgram(rr.program)&&(Hd=!0,Qs=!0,pc=!0),V.id!==L&&(L=V.id,Qs=!0),Hd||w!==A){Ft.setValue(B,"projectionMatrix",A.projectionMatrix),Ft.setValue(B,"viewMatrix",A.matrixWorldInverse);const xn=Ft.map.cameraPosition;xn!==void 0&&xn.setValue(B,re.setFromMatrixPosition(A.matrixWorld)),Qe.logarithmicDepthBuffer&&Ft.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ft.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,Qs=!0,pc=!0)}if(G.isSkinnedMesh){Ft.setOptional(B,G,"bindMatrix"),Ft.setOptional(B,G,"bindMatrixInverse");const xn=G.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),Ft.setValue(B,"boneTexture",xn.boneTexture,Te))}G.isBatchedMesh&&(Ft.setOptional(B,G,"batchingTexture"),Ft.setValue(B,"batchingTexture",G._matricesTexture,Te));const mc=K.morphAttributes;if((mc.position!==void 0||mc.normal!==void 0||mc.color!==void 0)&&Ee.update(G,K,rr),(Qs||Ie.receiveShadow!==G.receiveShadow)&&(Ie.receiveShadow=G.receiveShadow,Ft.setValue(B,"receiveShadow",G.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Ei.envMap.value=Re,Ei.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&k.environment!==null&&(Ei.envMapIntensity.value=k.environmentIntensity),Qs&&(Ft.setValue(B,"toneMappingExposure",g.toneMappingExposure),Ie.needsLights&&l0(Ei,pc),me&&V.fog===!0&&se.refreshFogUniforms(Ei,me),se.refreshMaterialUniforms(Ei,V,J,Z,p.state.transmissionRenderTarget[A.id]),fl.upload(B,Bd(Ie),Ei,Te)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(fl.upload(B,Bd(Ie),Ei,Te),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ft.setValue(B,"center",G.center),Ft.setValue(B,"modelViewMatrix",G.modelViewMatrix),Ft.setValue(B,"normalMatrix",G.normalMatrix),Ft.setValue(B,"modelMatrix",G.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const xn=V.uniformsGroups;for(let gc=0,u0=xn.length;gc<u0;gc++){const Vd=xn[gc];Ge.update(Vd,rr),Ge.bind(Vd,rr)}}return rr}function l0(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function c0(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,k,K){le.get(A.texture).__webglTexture=k,le.get(A.depthTexture).__webglTexture=K;const V=le.get(A);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=K===void 0,V.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,k){const K=le.get(A);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,K=0){T=A,C=k,R=K;let V=!0,G=null,me=!1,ye=!1;if(A){const Re=le.get(A);Re.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(B.FRAMEBUFFER,null),V=!1):Re.__webglFramebuffer===void 0?Te.setupRenderTarget(A):Re.__hasExternalTextures&&Te.rebindTextures(A,le.get(A.texture).__webglTexture,le.get(A.depthTexture).__webglTexture);const Ue=A.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(ye=!0);const ze=le.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ze[k])?G=ze[k][K]:G=ze[k],me=!0):A.samples>0&&Te.useMultisampledRTT(A)===!1?G=le.get(A).__webglMultisampledFramebuffer:Array.isArray(ze)?G=ze[K]:G=ze,E.copy(A.viewport),U.copy(A.scissor),W=A.scissorTest}else E.copy(j).multiplyScalar(J).floor(),U.copy(ee).multiplyScalar(J).floor(),W=ge;if(Me.bindFramebuffer(B.FRAMEBUFFER,G)&&V&&Me.drawBuffers(A,G),Me.viewport(E),Me.scissor(U),Me.setScissorTest(W),me){const Re=le.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+k,Re.__webglTexture,K)}else if(ye){const Re=le.get(A.texture),Ue=k||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Re.__webglTexture,K||0,Ue)}L=-1},this.readRenderTargetPixels=function(A,k,K,V,G,me,ye){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=le.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ye!==void 0&&(Se=Se[ye]),Se){Me.bindFramebuffer(B.FRAMEBUFFER,Se);try{const Re=A.texture,Ue=Re.format,ze=Re.type;if(!Qe.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-V&&K>=0&&K<=A.height-G&&B.readPixels(k,K,V,G,ve.convert(Ue),ve.convert(ze),me)}finally{const Re=T!==null?le.get(T).__webglFramebuffer:null;Me.bindFramebuffer(B.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(A,k,K=0){const V=Math.pow(2,-K),G=Math.floor(k.image.width*V),me=Math.floor(k.image.height*V);Te.setTexture2D(k,0),B.copyTexSubImage2D(B.TEXTURE_2D,K,0,0,A.x,A.y,G,me),Me.unbindTexture()},this.copyTextureToTexture=function(A,k,K,V=0){const G=k.image.width,me=k.image.height,ye=ve.convert(K.format),Se=ve.convert(K.type);Te.setTexture2D(K,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,K.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,K.unpackAlignment),k.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,V,A.x,A.y,G,me,ye,Se,k.image.data):k.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,V,A.x,A.y,k.mipmaps[0].width,k.mipmaps[0].height,ye,k.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,V,A.x,A.y,ye,Se,k.image),V===0&&K.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(A,k,K,V,G=0){const me=A.max.x-A.min.x,ye=A.max.y-A.min.y,Se=A.max.z-A.min.z,Re=ve.convert(V.format),Ue=ve.convert(V.type);let ze;if(V.isData3DTexture)Te.setTexture3D(V,0),ze=B.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)Te.setTexture2DArray(V,0),ze=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment);const je=B.getParameter(B.UNPACK_ROW_LENGTH),yt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Ot=B.getParameter(B.UNPACK_SKIP_PIXELS),cn=B.getParameter(B.UNPACK_SKIP_ROWS),ti=B.getParameter(B.UNPACK_SKIP_IMAGES),et=K.isCompressedTexture?K.mipmaps[G]:K.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,et.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,et.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,A.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,A.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,A.min.z),K.isDataTexture||K.isData3DTexture?B.texSubImage3D(ze,G,k.x,k.y,k.z,me,ye,Se,Re,Ue,et.data):V.isCompressedArrayTexture?B.compressedTexSubImage3D(ze,G,k.x,k.y,k.z,me,ye,Se,Re,et.data):B.texSubImage3D(ze,G,k.x,k.y,k.z,me,ye,Se,Re,Ue,et),B.pixelStorei(B.UNPACK_ROW_LENGTH,je),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,yt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ot),B.pixelStorei(B.UNPACK_SKIP_ROWS,cn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ti),G===0&&V.generateMipmaps&&B.generateMipmap(ze),Me.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Te.setTextureCube(A,0):A.isData3DTexture?Te.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Te.setTexture2DArray(A,0):Te.setTexture2D(A,0),Me.unbindTexture()},this.resetState=function(){C=0,R=0,T=null,Me.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Id?"display-p3":"srgb",n.unpackColorSpace=it.workingColorSpace===dc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class eC extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Im extends sa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kv,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class o0 extends jt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Tu=new vt,Om=new O,Fm=new O;class tC{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fd,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Om.setFromMatrixPosition(e.matrixWorld),n.position.copy(Om),Fm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Fm),n.updateMatrixWorld(),Tu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Tu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class nC extends tC{constructor(){super(new Jv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class km extends o0{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new nC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class iC extends o0{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Bm{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos($t(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ud}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ud);const zm={type:"change"},Au={type:"start"},Hm={type:"end"},Ya=new Gv,Vm=new Di,rC=Math.cos(70*WM.DEG2RAD);class sC extends kr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gr.ROTATE,MIDDLE:Gr.DOLLY,RIGHT:Gr.PAN},this.touches={ONE:Wr.ROTATE,TWO:Wr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(y){y.addEventListener("keydown",Ne),this._domElementKeyEvents=y},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ne),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(zm),i.update(),s=r.NONE},this.update=function(){const y=new O,F=new Ir().setFromUnitVectors(e.up,new O(0,1,0)),H=F.clone().invert(),ne=new O,ce=new Ir,ke=new O,We=2*Math.PI;return function(Rt=null){const Ke=i.object.position;y.copy(Ke).sub(i.target),y.applyQuaternion(F),a.setFromVector3(y),i.autoRotate&&s===r.NONE&&W(E(Rt)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let xt=i.minAzimuthAngle,ot=i.maxAzimuthAngle;isFinite(xt)&&isFinite(ot)&&(xt<-Math.PI?xt+=We:xt>Math.PI&&(xt-=We),ot<-Math.PI?ot+=We:ot>Math.PI&&(ot-=We),xt<=ot?a.theta=Math.max(xt,Math.min(ot,a.theta)):a.theta=a.theta>(xt+ot)/2?Math.max(xt,a.theta):Math.min(ot,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(f,i.dampingFactor):i.target.add(f),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let yi=!1;if(i.zoomToCursor&&R||i.object.isOrthographicCamera)a.radius=j(a.radius);else{const vn=a.radius;a.radius=j(a.radius*c),yi=vn!=a.radius}if(y.setFromSpherical(a),y.applyQuaternion(H),Ke.copy(i.target).add(y),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,f.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),f.set(0,0,0)),i.zoomToCursor&&R){let vn=null;if(i.object.isPerspectiveCamera){const Si=y.length();vn=j(Si*c);const ei=Si-vn;i.object.position.addScaledVector(S,ei),i.object.updateMatrixWorld(),yi=!!ei}else if(i.object.isOrthographicCamera){const Si=new O(C.x,C.y,0);Si.unproject(i.object);const ei=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),yi=ei!==i.object.zoom;const Ks=new O(C.x,C.y,0);Ks.unproject(i.object),i.object.position.sub(Ks).add(Si),i.object.updateMatrixWorld(),vn=y.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;vn!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(vn).add(i.object.position):(Ya.origin.copy(i.object.position),Ya.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Ya.direction))<rC?e.lookAt(i.target):(Vm.setFromNormalAndCoplanarPoint(i.object.up,i.target),Ya.intersectPlane(Vm,i.target))))}else if(i.object.isOrthographicCamera){const vn=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),vn!==i.object.zoom&&(i.object.updateProjectionMatrix(),yi=!0)}return c=1,R=!1,yi||ne.distanceToSquared(i.object.position)>o||8*(1-ce.dot(i.object.quaternion))>o||ke.distanceToSquared(i.target)>o?(i.dispatchEvent(zm),ne.copy(i.object.position),ce.copy(i.object.quaternion),ke.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",qe),i.domElement.removeEventListener("pointerdown",b),i.domElement.removeEventListener("pointercancel",$),i.domElement.removeEventListener("wheel",se),i.domElement.removeEventListener("pointermove",M),i.domElement.removeEventListener("pointerup",$),i.domElement.getRootNode().removeEventListener("keydown",pe,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Ne),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Bm,l=new Bm;let c=1;const f=new O,d=new De,h=new De,m=new De,v=new De,x=new De,p=new De,u=new De,_=new De,g=new De,S=new O,C=new De;let R=!1;const T=[],L={};let w=!1;function E(y){return y!==null?2*Math.PI/60*i.autoRotateSpeed*y:2*Math.PI/60/60*i.autoRotateSpeed}function U(y){const F=Math.abs(y*.01);return Math.pow(.95,i.zoomSpeed*F)}function W(y){l.theta-=y}function P(y){l.phi-=y}const z=function(){const y=new O;return function(H,ne){y.setFromMatrixColumn(ne,0),y.multiplyScalar(-H),f.add(y)}}(),Y=function(){const y=new O;return function(H,ne){i.screenSpacePanning===!0?y.setFromMatrixColumn(ne,1):(y.setFromMatrixColumn(ne,0),y.crossVectors(i.object.up,y)),y.multiplyScalar(H),f.add(y)}}(),Z=function(){const y=new O;return function(H,ne){const ce=i.domElement;if(i.object.isPerspectiveCamera){const ke=i.object.position;y.copy(ke).sub(i.target);let We=y.length();We*=Math.tan(i.object.fov/2*Math.PI/180),z(2*H*We/ce.clientHeight,i.object.matrix),Y(2*ne*We/ce.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(z(H*(i.object.right-i.object.left)/i.object.zoom/ce.clientWidth,i.object.matrix),Y(ne*(i.object.top-i.object.bottom)/i.object.zoom/ce.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function J(y){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=y:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function D(y){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=y:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function X(y,F){if(!i.zoomToCursor)return;R=!0;const H=i.domElement.getBoundingClientRect(),ne=y-H.left,ce=F-H.top,ke=H.width,We=H.height;C.x=ne/ke*2-1,C.y=-(ce/We)*2+1,S.set(C.x,C.y,1).unproject(i.object).sub(i.object.position).normalize()}function j(y){return Math.max(i.minDistance,Math.min(i.maxDistance,y))}function ee(y){d.set(y.clientX,y.clientY)}function ge(y){X(y.clientX,y.clientX),u.set(y.clientX,y.clientY)}function Pe(y){v.set(y.clientX,y.clientY)}function q(y){h.set(y.clientX,y.clientY),m.subVectors(h,d).multiplyScalar(i.rotateSpeed);const F=i.domElement;W(2*Math.PI*m.x/F.clientHeight),P(2*Math.PI*m.y/F.clientHeight),d.copy(h),i.update()}function ae(y){_.set(y.clientX,y.clientY),g.subVectors(_,u),g.y>0?J(U(g.y)):g.y<0&&D(U(g.y)),u.copy(_),i.update()}function te(y){x.set(y.clientX,y.clientY),p.subVectors(x,v).multiplyScalar(i.panSpeed),Z(p.x,p.y),v.copy(x),i.update()}function re(y){X(y.clientX,y.clientY),y.deltaY<0?D(U(y.deltaY)):y.deltaY>0&&J(U(y.deltaY)),i.update()}function Ce(y){let F=!1;switch(y.code){case i.keys.UP:y.ctrlKey||y.metaKey||y.shiftKey?P(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(0,i.keyPanSpeed),F=!0;break;case i.keys.BOTTOM:y.ctrlKey||y.metaKey||y.shiftKey?P(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(0,-i.keyPanSpeed),F=!0;break;case i.keys.LEFT:y.ctrlKey||y.metaKey||y.shiftKey?W(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(i.keyPanSpeed,0),F=!0;break;case i.keys.RIGHT:y.ctrlKey||y.metaKey||y.shiftKey?W(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(-i.keyPanSpeed,0),F=!0;break}F&&(y.preventDefault(),i.update())}function Oe(y){if(T.length===1)d.set(y.pageX,y.pageY);else{const F=nt(y),H=.5*(y.pageX+F.x),ne=.5*(y.pageY+F.y);d.set(H,ne)}}function B(y){if(T.length===1)v.set(y.pageX,y.pageY);else{const F=nt(y),H=.5*(y.pageX+F.x),ne=.5*(y.pageY+F.y);v.set(H,ne)}}function Ze(y){const F=nt(y),H=y.pageX-F.x,ne=y.pageY-F.y,ce=Math.sqrt(H*H+ne*ne);u.set(0,ce)}function xe(y){i.enableZoom&&Ze(y),i.enablePan&&B(y)}function Qe(y){i.enableZoom&&Ze(y),i.enableRotate&&Oe(y)}function Me(y){if(T.length==1)h.set(y.pageX,y.pageY);else{const H=nt(y),ne=.5*(y.pageX+H.x),ce=.5*(y.pageY+H.y);h.set(ne,ce)}m.subVectors(h,d).multiplyScalar(i.rotateSpeed);const F=i.domElement;W(2*Math.PI*m.x/F.clientHeight),P(2*Math.PI*m.y/F.clientHeight),d.copy(h)}function be(y){if(T.length===1)x.set(y.pageX,y.pageY);else{const F=nt(y),H=.5*(y.pageX+F.x),ne=.5*(y.pageY+F.y);x.set(H,ne)}p.subVectors(x,v).multiplyScalar(i.panSpeed),Z(p.x,p.y),v.copy(x)}function le(y){const F=nt(y),H=y.pageX-F.x,ne=y.pageY-F.y,ce=Math.sqrt(H*H+ne*ne);_.set(0,ce),g.set(0,Math.pow(_.y/u.y,i.zoomSpeed)),J(g.y),u.copy(_);const ke=(y.pageX+F.x)*.5,We=(y.pageY+F.y)*.5;X(ke,We)}function Te(y){i.enableZoom&&le(y),i.enablePan&&be(y)}function Ye(y){i.enableZoom&&le(y),i.enableRotate&&Me(y)}function b(y){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(y.pointerId),i.domElement.addEventListener("pointermove",M),i.domElement.addEventListener("pointerup",$)),!Fe(y)&&(Ae(y),y.pointerType==="touch"?ue(y):Q(y)))}function M(y){i.enabled!==!1&&(y.pointerType==="touch"?Ee(y):ie(y))}function $(y){switch(ve(y),T.length){case 0:i.domElement.releasePointerCapture(y.pointerId),i.domElement.removeEventListener("pointermove",M),i.domElement.removeEventListener("pointerup",$),i.dispatchEvent(Hm),s=r.NONE;break;case 1:const F=T[0],H=L[F];ue({pointerId:F,pageX:H.x,pageY:H.y});break}}function Q(y){let F;switch(y.button){case 0:F=i.mouseButtons.LEFT;break;case 1:F=i.mouseButtons.MIDDLE;break;case 2:F=i.mouseButtons.RIGHT;break;default:F=-1}switch(F){case Gr.DOLLY:if(i.enableZoom===!1)return;ge(y),s=r.DOLLY;break;case Gr.ROTATE:if(y.ctrlKey||y.metaKey||y.shiftKey){if(i.enablePan===!1)return;Pe(y),s=r.PAN}else{if(i.enableRotate===!1)return;ee(y),s=r.ROTATE}break;case Gr.PAN:if(y.ctrlKey||y.metaKey||y.shiftKey){if(i.enableRotate===!1)return;ee(y),s=r.ROTATE}else{if(i.enablePan===!1)return;Pe(y),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Au)}function ie(y){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;q(y);break;case r.DOLLY:if(i.enableZoom===!1)return;ae(y);break;case r.PAN:if(i.enablePan===!1)return;te(y);break}}function se(y){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(y.preventDefault(),i.dispatchEvent(Au),re(we(y)),i.dispatchEvent(Hm))}function we(y){const F=y.deltaMode,H={clientX:y.clientX,clientY:y.clientY,deltaY:y.deltaY};switch(F){case 1:H.deltaY*=16;break;case 2:H.deltaY*=100;break}return y.ctrlKey&&!w&&(H.deltaY*=10),H}function pe(y){y.key==="Control"&&(w=!0,i.domElement.getRootNode().addEventListener("keyup",he,{passive:!0,capture:!0}))}function he(y){y.key==="Control"&&(w=!1,i.domElement.getRootNode().removeEventListener("keyup",he,{passive:!0,capture:!0}))}function Ne(y){i.enabled===!1||i.enablePan===!1||Ce(y)}function ue(y){switch(Ge(y),T.length){case 1:switch(i.touches.ONE){case Wr.ROTATE:if(i.enableRotate===!1)return;Oe(y),s=r.TOUCH_ROTATE;break;case Wr.PAN:if(i.enablePan===!1)return;B(y),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Wr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;xe(y),s=r.TOUCH_DOLLY_PAN;break;case Wr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Qe(y),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Au)}function Ee(y){switch(Ge(y),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Me(y),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;be(y),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Te(y),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ye(y),i.update();break;default:s=r.NONE}}function qe(y){i.enabled!==!1&&y.preventDefault()}function Ae(y){T.push(y.pointerId)}function ve(y){delete L[y.pointerId];for(let F=0;F<T.length;F++)if(T[F]==y.pointerId){T.splice(F,1);return}}function Fe(y){for(let F=0;F<T.length;F++)if(T[F]==y.pointerId)return!0;return!1}function Ge(y){let F=L[y.pointerId];F===void 0&&(F=new De,L[y.pointerId]=F),F.set(y.pageX,y.pageY)}function nt(y){const F=y.pointerId===T[0]?T[1]:T[0];return L[F]}i.domElement.addEventListener("contextmenu",qe),i.domElement.addEventListener("pointerdown",b),i.domElement.addEventListener("pointercancel",$),i.domElement.addEventListener("wheel",se,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",pe,{passive:!0,capture:!0}),this.update()}}const Gn={U:15790320,R:3900150,F:15680580,D:16766720,L:2278750,B:16347926},oC=350;function aC(t){const e={},n=["U","R","F","D","L","B"];for(const r of n){if(!t[r]){e[r]=()=>Gn[r];continue}e[r]=(s,o)=>{const a=s*3+o,l=t[r][a]||r;return Gn[l]||Gn[r]}}const i={};for(let r=0;r<3;r++)for(let s=0;s<3;s++){const o=s-1,a=r-1,l=`${o},1,${a}`;i[l]||(i[l]={});const c=e.U?typeof e.U=="function"?e.U(r,s):e.U:Gn.U;i[l].U=c}for(let r=0;r<3;r++)for(let s=0;s<3;s++){const o=s-1,a=-(r-1),l=`${o},-1,${a}`;i[l]||(i[l]={});const c=e.D?typeof e.D=="function"?e.D(r,s):e.D:Gn.D;i[l].D=c}for(let r=0;r<3;r++)for(let s=0;s<3;s++){const o=-(r-1),a=-(s-1),l=`1,${o},${a}`;i[l]||(i[l]={});const c=e.R?typeof e.R=="function"?e.R(r,s):e.R:Gn.R;i[l].R=c}for(let r=0;r<3;r++)for(let s=0;s<3;s++){const o=-(r-1),a=s-1,l=`-1,${o},${a}`;i[l]||(i[l]={});const c=e.L?typeof e.L=="function"?e.L(r,s):e.L:Gn.L;i[l].L=c}for(let r=0;r<3;r++)for(let s=0;s<3;s++){const o=-(r-1),l=`${s-1},${o},1`;i[l]||(i[l]={});const c=e.F?typeof e.F=="function"?e.F(r,s):e.F:Gn.F;i[l].F=c}for(let r=0;r<3;r++)for(let s=0;s<3;s++){const o=-(r-1),l=`${-(s-1)},${o},-1`;i[l]||(i[l]={});const c=e.B?typeof e.B=="function"?e.B(r,s):e.B:Gn.B;i[l].B=c}return i}const lC={U:{axis:new O(0,1,0),angle:-Math.PI/2,filter:t=>t.position.y>.4},"U'":{axis:new O(0,1,0),angle:Math.PI/2,filter:t=>t.position.y>.4},U2:{axis:new O(0,1,0),angle:-Math.PI,filter:t=>t.position.y>.4},D:{axis:new O(0,1,0),angle:Math.PI/2,filter:t=>t.position.y<-.4},"D'":{axis:new O(0,1,0),angle:-Math.PI/2,filter:t=>t.position.y<-.4},D2:{axis:new O(0,1,0),angle:Math.PI,filter:t=>t.position.y<-.4},R:{axis:new O(1,0,0),angle:-Math.PI/2,filter:t=>t.position.x>.4},"R'":{axis:new O(1,0,0),angle:Math.PI/2,filter:t=>t.position.x>.4},R2:{axis:new O(1,0,0),angle:-Math.PI,filter:t=>t.position.x>.4},L:{axis:new O(1,0,0),angle:Math.PI/2,filter:t=>t.position.x<-.4},"L'":{axis:new O(1,0,0),angle:-Math.PI/2,filter:t=>t.position.x<-.4},L2:{axis:new O(1,0,0),angle:Math.PI,filter:t=>t.position.x<-.4},F:{axis:new O(0,0,1),angle:-Math.PI/2,filter:t=>t.position.z>.4},"F'":{axis:new O(0,0,1),angle:Math.PI/2,filter:t=>t.position.z>.4},F2:{axis:new O(0,0,1),angle:-Math.PI,filter:t=>t.position.z>.4},B:{axis:new O(0,0,1),angle:Math.PI/2,filter:t=>t.position.z<-.4},"B'":{axis:new O(0,0,1),angle:-Math.PI/2,filter:t=>t.position.z<-.4},B2:{axis:new O(0,0,1),angle:Math.PI,filter:t=>t.position.z<-.4}};function cC({faceColors:t,solution:e}){const n=Le.useRef(null),i=Le.useRef(null),r=Le.useRef(null),s=Le.useRef(null),o=Le.useRef(null),[a,l]=Le.useState(0),[c,f]=Le.useState(!1),[d,h]=Le.useState(!1),[m,v]=Le.useState(1);Le.useEffect(()=>{const S=n.current;if(!S)return;const C=S.clientWidth,R=S.clientHeight,T=new JR({antialias:!0,alpha:!0});T.setSize(C,R),T.setPixelRatio(Math.min(window.devicePixelRatio,2)),T.shadowMap.enabled=!0,S.appendChild(T.domElement);const L=new eC;i.current=L;const w=new Mn(45,C/R,.1,100);w.position.set(4,3,5);const E=new iC(16777215,.7);L.add(E);const U=new km(16777215,.8);U.position.set(5,8,5),U.castShadow=!0,L.add(U);const W=new km(7103487,.3);W.position.set(-5,-3,-5),L.add(W);const P=new sC(w,T.domElement);P.enableDamping=!0,P.dampingFactor=.08,P.minDistance=4,P.maxDistance=12,x(L,t);function z(){o.current=requestAnimationFrame(z),P.update(),T.render(L,w)}z();const Y=new ResizeObserver(()=>{const Z=S.clientWidth,J=S.clientHeight;T.setSize(Z,J),w.aspect=Z/J,w.updateProjectionMatrix()});return Y.observe(S),()=>{cancelAnimationFrame(o.current),Y.disconnect(),T.dispose(),S.removeChild(T.domElement)}},[t]);function x(S,C){r.current&&S.remove(r.current);const R=aC(C||{}),T=new Er;r.current=T;const L=1,w=.06,E=L*.82;for(let U=-1;U<=1;U++)for(let W=-1;W<=1;W++)for(let P=-1;P<=1;P++){if(U===0&&W===0&&P===0)continue;const z=new Er;z.position.set(U*(L+w),W*(L+w),P*(L+w));const Y=new Ys(L*.94,L*.94,L*.94),Z=new Im({color:1118481,roughness:.8}),J=new Fn(Y,Z);J.receiveShadow=!0,z.add(J);const D=`${U},${W},${P}`,X=R[D]||{},j=[{face:"U",pos:[0,L*.5,0],rot:[-Math.PI/2,0,0]},{face:"D",pos:[0,-L*.5,0],rot:[Math.PI/2,0,0]},{face:"R",pos:[L*.5,0,0],rot:[0,Math.PI/2,0]},{face:"L",pos:[-L*.5,0,0],rot:[0,-Math.PI/2,0]},{face:"F",pos:[0,0,L*.5],rot:[0,0,0]},{face:"B",pos:[0,0,-L*.5],rot:[0,Math.PI,0]}];for(const{face:ee,pos:ge,rot:Pe}of j){if(!(ee==="U"&&W===1||ee==="D"&&W===-1||ee==="R"&&U===1||ee==="L"&&U===-1||ee==="F"&&P===1||ee==="B"&&P===-1))continue;const ae=X[ee]??Gn[ee],te=new oa(E,E),re=new Im({color:ae,roughness:.3,metalness:.05}),Ce=new Fn(te,re);Ce.position.set(...ge),Ce.rotation.set(...Pe),Ce.position.multiplyScalar(1.01),z.add(Ce)}T.add(z)}S.add(T)}const p=Le.useCallback((S,C)=>{const R=lC[S];if(!R||!r.current){C==null||C();return}const T=r.current,L=T.children.filter(R.filter),w=new Er;i.current.add(w);for(const z of L)T.remove(z),w.add(z);const E=R.angle,U=oC/m,W=performance.now(),P=z=>{const Y=Math.min((z-W)/U,1),Z=Y<.5?2*Y*Y:-1+(4-2*Y)*Y,J=E*Z;if(w.setRotationFromAxisAngle(R.axis,J),Y<1)s.current=requestAnimationFrame(P);else{w.setRotationFromAxisAngle(R.axis,E),w.updateMatrixWorld();for(const D of[...w.children])w.remove(D),D.applyMatrix4(w.matrixWorld),T.add(D);i.current.remove(w),C==null||C()}};s.current=requestAnimationFrame(P)},[m]),u=Le.useCallback(()=>{d||a>=e.length||(h(!0),p(e[a],()=>{l(S=>S+1),h(!1)}))},[d,a,e,p]),_=Le.useCallback(()=>{if(d||a<=0)return;const S=e[a-1];let C=S;S.endsWith("'")?C=S.slice(0,-1):S.endsWith("2")?C=S:C=S+"'",h(!0),p(C,()=>{l(R=>R-1),h(!1)})},[d,a,e,p]);Le.useEffect(()=>{if(!c)return;if(a>=e.length){f(!1);return}if(d)return;const S=setTimeout(()=>{u()},50);return()=>clearTimeout(S)},[c,a,d,e,u]);const g=e.length;return I.jsxs("div",{className:"visualizer-wrapper animate-fade-in",children:[I.jsxs("div",{className:"viz-header",children:[I.jsx("h2",{children:"3D Cube Visualizer"}),I.jsxs("div",{className:"viz-meta",children:[I.jsxs("span",{className:"badge badge-purple",children:["Move ",a,"/",g]}),g>0&&I.jsxs("span",{className:"badge badge-green",children:[g," moves"]})]})]}),I.jsx("div",{ref:n,className:"three-canvas"}),e.length>0&&I.jsxs("div",{className:"viz-controls glass",children:[I.jsx("button",{id:"step-back-btn",className:"btn btn-secondary btn-sm",onClick:_,disabled:a===0||d,"data-tooltip":"Step backward",children:"⏮"}),I.jsx("button",{id:"play-pause-btn",className:"btn btn-primary btn-sm",onClick:()=>f(S=>!S),disabled:a>=g&&!c,children:c?"⏸ Pause":"▶ Play"}),I.jsx("button",{id:"step-fwd-btn",className:"btn btn-secondary btn-sm",onClick:u,disabled:a>=g||d,"data-tooltip":"Step forward",children:"⏭"}),I.jsxs("div",{className:"speed-control",children:[I.jsx("span",{children:"Speed"}),I.jsx("input",{id:"speed-slider",type:"range",min:"0.5",max:"3",step:"0.5",value:m,onChange:S=>v(parseFloat(S.target.value))}),I.jsxs("span",{children:[m,"×"]})]})]}),e.length===0&&I.jsxs("div",{className:"viz-empty",children:[I.jsx("div",{className:"empty-icon",children:"🎲"}),I.jsx("p",{children:"Scan your cube and solve it to see the 3D walkthrough"})]})]})}const Gm=[{id:"U",label:"Top (U)",defaultColor:"W"},{id:"R",label:"Right (R)",defaultColor:"B"},{id:"F",label:"Front (F)",defaultColor:"R"},{id:"D",label:"Bottom (D)",defaultColor:"Y"},{id:"L",label:"Left (L)",defaultColor:"G"},{id:"B",label:"Back (B)",defaultColor:"O"}],Wm=[{id:"W",hex:"#f0f0f0",label:"White"},{id:"Y",hex:"#ffd700",label:"Yellow"},{id:"R",hex:"#ef4444",label:"Red"},{id:"O",hex:"#f97316",label:"Orange"},{id:"B",hex:"#3b82f6",label:"Blue"},{id:"G",hex:"#22c55e",label:"Green"}];function uC({onSolved:t,onStateBuilt:e}){const n=()=>{const u={};return Gm.forEach(_=>{u[_.id]=Array(9).fill("W"),u[_.id][4]=_.defaultColor}),u},[i,r]=Le.useState(n()),[s,o]=Le.useState(0),[a,l]=Le.useState("W"),[c,f]=Le.useState(!1),[d,h]=Le.useState(null),m=Gm[s],v=u=>{u!==4&&r(_=>{const g=[..._[m.id]];return g[u]=a,{..._,[m.id]:g}})},x=()=>{window.confirm("Are you sure you want to reset all manually inputted faces?")&&(r(n()),o(0),h(null))},p=async()=>{var g,S;f(!0),h(null);const u={W:"U",Y:"D",R:"F",O:"B",B:"R",G:"L"},_={};Object.keys(i).forEach(C=>{_[C]=i[C].map(R=>u[R]||"U")});try{const R=(await rt.post("/api/build-state",{faces:_})).data.cube_state;e&&e(R);const T=Date.now(),L=await rt.post("/api/solve",{cube_state:R}),w=Date.now()-T;t&&t(L.data.solution,L.data.solve_time_ms||w)}catch(C){h(((S=(g=C.response)==null?void 0:g.data)==null?void 0:S.detail)||"Solve failed. Please check if your cube colors are valid.")}finally{f(!1)}};return I.jsxs("div",{className:"manual-input-panel glass animate-fade-in",children:[I.jsxs("div",{className:"manual-header",children:[I.jsx("h2",{children:"Manual Color Input"}),I.jsxs("span",{className:"badge badge-purple",children:[s+1," / 6 Faces"]})]}),d&&I.jsxs("div",{className:"error-msg",children:["⚠️ ",d]}),I.jsxs("div",{className:"manual-content",children:[I.jsxs("div",{className:"palette-section",children:[I.jsx("h3",{children:"1. Select a Color"}),I.jsx("div",{className:"color-palette",children:Wm.map(u=>I.jsx("button",{className:`palette-btn ${a===u.id?"active":""}`,style:{backgroundColor:u.hex},onClick:()=>l(u.id),title:u.label},u.id))})]}),I.jsxs("div",{className:"grid-section",children:[I.jsxs("div",{className:"grid-header",children:[I.jsxs("h3",{children:["2. Tap to Paint: ",m.label]}),I.jsx("p",{className:"hint",children:"Center piece is fixed."})]}),I.jsx("div",{className:"cube-grid",children:i[m.id].map((u,_)=>{var C;const g=((C=Wm.find(R=>R.id===u))==null?void 0:C.hex)||"#ccc",S=_===4;return I.jsx("button",{className:`grid-sticker ${S?"center-sticker":""}`,style:{backgroundColor:g},onClick:()=>v(_)},_)})})]})]}),I.jsxs("div",{className:"manual-controls",children:[I.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>o(u=>Math.max(0,u-1)),disabled:s===0||c,children:"Previous"}),I.jsx("button",{className:"btn btn-danger btn-sm",onClick:x,disabled:c,children:"Reset All"}),s<5?I.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>o(u=>Math.min(5,u+1)),disabled:c,children:"Next Face"}):I.jsx("button",{className:"btn btn-primary btn-sm solve-btn-glow",onClick:p,disabled:c,children:c?I.jsxs(I.Fragment,{children:[I.jsx("span",{className:"spinner"})," Solving..."]}):"🎲 Solve Cube"})]})]})}function fC({solution:t,solveTime:e,cubeState:n}){return!t||t.length===0?I.jsx("div",{className:"solve-panel glass animate-fade-in",children:I.jsxs("div",{className:"panel-empty",children:[I.jsx("h3",{children:"No Solution Yet"}),I.jsx("p",{children:"Scan your cube to generate a solution sequence."})]})}):I.jsxs("div",{className:"solve-panel glass animate-fade-in",children:[I.jsxs("div",{className:"panel-header",children:[I.jsx("h3",{children:"Solution Sequence"}),e!==null&&I.jsxs("span",{className:"badge badge-purple","data-tooltip":"Calculation time",children:["⏱ ",e,"ms"]})]}),I.jsx("div",{className:"moves-container",children:I.jsx("div",{className:"moves-grid",children:t.map((i,r)=>I.jsxs("div",{className:"move-card",children:[I.jsx("span",{className:"move-num",children:r+1}),I.jsx("span",{className:"move-notation",children:i})]},r))})}),I.jsxs("div",{className:"panel-footer",children:[I.jsxs("div",{className:"stat-row",children:[I.jsx("span",{className:"stat-label",children:"Total Moves:"}),I.jsx("span",{className:"stat-value",children:t.length})]}),I.jsxs("div",{className:"stat-row",children:[I.jsx("span",{className:"stat-label",children:"Algorithm:"}),I.jsx("span",{className:"stat-value",children:"Kociemba Two-Phase"})]})]})]})}function dC(){const[t,e]=Le.useState([]),[n,i]=Le.useState(!0),[r,s]=Le.useState(null);Le.useEffect(()=>{o()},[]);const o=async()=>{try{i(!0);const l=await rt.get("/api/history");e(l.data.history),s(null)}catch{s("Failed to load history.")}finally{i(!1)}},a=async()=>{if(window.confirm("Are you sure you want to clear all solve history?"))try{await rt.delete("/api/history"),e([])}catch{s("Failed to clear history.")}};return n?I.jsx("div",{className:"history-log glass animate-fade-in",children:I.jsxs("div",{className:"history-loading",children:[I.jsx("div",{className:"spinner"}),I.jsx("p",{children:"Loading past solves..."})]})}):I.jsxs("div",{className:"history-log glass animate-fade-in",children:[I.jsxs("div",{className:"history-header",children:[I.jsx("h2",{children:"Solve History"}),t.length>0&&I.jsx("button",{className:"btn btn-danger btn-sm",onClick:a,children:"Clear All"})]}),r&&I.jsx("div",{className:"error-msg",children:r}),t.length===0&&!r?I.jsxs("div",{className:"history-empty",children:[I.jsx("span",{className:"empty-icon",children:"📜"}),I.jsx("p",{children:"No solves recorded yet."})]}):I.jsx("div",{className:"history-list",children:t.map(l=>I.jsxs("div",{className:"history-card",children:[I.jsxs("div",{className:"history-card-header",children:[I.jsx("span",{className:"history-time",children:new Date(l.timestamp).toLocaleString()}),I.jsxs("div",{className:"history-stats",children:[I.jsxs("span",{className:"badge badge-green",children:[l.move_count," moves"]}),l.duration_ms&&I.jsxs("span",{className:"badge badge-purple",children:[l.duration_ms,"ms"]})]})]}),I.jsxs("div",{className:"history-solution",children:[I.jsx("strong",{children:"Solution:"})," ",I.jsx("span",{className:"solution-text",children:l.solution})]})]},l.id))})]})}const hC=[{id:"scan",label:"Scan Cube",icon:"📷"},{id:"manual",label:"Manual Input",icon:"✍️"},{id:"solve",label:"3D Solver",icon:"🎲"},{id:"history",label:"History",icon:"📜"}],pC={W:"U",B:"R",R:"F",Y:"D",G:"L",O:"B"};function mC(){const[t,e]=Le.useState("scan"),[n,i]=Le.useState({}),[r,s]=Le.useState(""),[o,a]=Le.useState([]),[l,c]=Le.useState(null),[f,d]=Le.useState(0),h=Object.keys(n).length;function m(p,u){const _=u.map(g=>pC[g]||"U");i(g=>({...g,[p]:_}))}function v(p,u){a(p),c(u),e("solve"),d(_=>_+1)}function x(){i({}),s(""),a([]),c(null),e("scan")}return I.jsxs("div",{className:"app",children:[I.jsx("div",{className:"bg-grid"}),I.jsx("div",{className:"bg-orb bg-orb-1"}),I.jsx("div",{className:"bg-orb bg-orb-2"}),I.jsx("header",{className:"header",children:I.jsxs("div",{className:"header-inner",children:[I.jsxs("div",{className:"logo",children:[I.jsx("span",{className:"logo-icon",children:"⬡"}),I.jsx("span",{className:"gradient-text",children:"CubeSolve"})]}),I.jsx("nav",{className:"tab-nav",children:hC.map(p=>I.jsxs("button",{id:`tab-${p.id}`,className:`tab-btn ${t===p.id?"active":""}`,onClick:()=>e(p.id),children:[I.jsx("span",{className:"tab-icon",children:p.icon}),I.jsx("span",{children:p.label}),p.id==="scan"&&h>0&&I.jsxs("span",{className:"tab-badge",children:[h,"/6"]})]},p.id))}),I.jsx("button",{id:"reset-btn",className:"btn btn-secondary btn-sm",onClick:x,children:"↺ Reset"})]})}),I.jsxs("main",{className:"main-content",children:[t==="scan"&&I.jsx(kE,{faceColors:n,onFaceDetected:m,onSolved:v,onStateBuilt:s},"camera"),t==="manual"&&I.jsx(uC,{},"manual"),t==="solve"&&I.jsxs("div",{className:"solve-layout",children:[I.jsx(cC,{faceColors:n,solution:o},"viz"),I.jsx(fC,{solution:o,solveTime:l,cubeState:r},"panel")]}),t==="history"&&I.jsx(dC,{},f)]})]})}Ru.createRoot(document.getElementById("root")).render(I.jsx(R0.StrictMode,{children:I.jsx(mC,{})}));
