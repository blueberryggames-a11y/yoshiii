var gI=Object.defineProperty;var yI=(t,e,n)=>e in t?gI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var dy=(t,e,n)=>yI(t,typeof e!="symbol"?e+"":e,n);function vI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function _I(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var P0={exports:{}},pd={},N0={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ml=Symbol.for("react.element"),wI=Symbol.for("react.portal"),xI=Symbol.for("react.fragment"),EI=Symbol.for("react.strict_mode"),TI=Symbol.for("react.profiler"),II=Symbol.for("react.provider"),SI=Symbol.for("react.context"),AI=Symbol.for("react.forward_ref"),kI=Symbol.for("react.suspense"),bI=Symbol.for("react.memo"),RI=Symbol.for("react.lazy"),hy=Symbol.iterator;function CI(t){return t===null||typeof t!="object"?null:(t=hy&&t[hy]||t["@@iterator"],typeof t=="function"?t:null)}var D0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L0=Object.assign,O0={};function Bo(t,e,n){this.props=t,this.context=e,this.refs=O0,this.updater=n||D0}Bo.prototype.isReactComponent={};Bo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Bo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function j0(){}j0.prototype=Bo.prototype;function Lp(t,e,n){this.props=t,this.context=e,this.refs=O0,this.updater=n||D0}var Op=Lp.prototype=new j0;Op.constructor=Lp;L0(Op,Bo.prototype);Op.isPureReactComponent=!0;var fy=Array.isArray,M0=Object.prototype.hasOwnProperty,jp={current:null},V0={key:!0,ref:!0,__self:!0,__source:!0};function U0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)M0.call(e,r)&&!V0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),d=0;d<a;d++)u[d]=arguments[d+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ml,type:t,key:s,ref:o,props:i,_owner:jp.current}}function PI(t,e){return{$$typeof:Ml,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Mp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ml}function NI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var py=/\/+/g;function dh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?NI(""+t.key):e.toString(36)}function Ju(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ml:case wI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+dh(o,0):r,fy(i)?(n="",t!=null&&(n=t.replace(py,"$&/")+"/"),Ju(i,e,n,"",function(d){return d})):i!=null&&(Mp(i)&&(i=PI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(py,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",fy(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+dh(s,a);o+=Ju(s,e,n,u,i)}else if(u=CI(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+dh(s,a++),o+=Ju(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Au(t,e,n){if(t==null)return t;var r=[],i=0;return Ju(t,r,"","",function(s){return e.call(n,s,i++)}),r}function DI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ut={current:null},Zu={transition:null},LI={ReactCurrentDispatcher:Ut,ReactCurrentBatchConfig:Zu,ReactCurrentOwner:jp};function F0(){throw Error("act(...) is not supported in production builds of React.")}ce.Children={map:Au,forEach:function(t,e,n){Au(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Au(t,function(){e++}),e},toArray:function(t){return Au(t,function(e){return e})||[]},only:function(t){if(!Mp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ce.Component=Bo;ce.Fragment=xI;ce.Profiler=TI;ce.PureComponent=Lp;ce.StrictMode=EI;ce.Suspense=kI;ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=LI;ce.act=F0;ce.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=L0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=jp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)M0.call(e,u)&&!V0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var d=0;d<u;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:Ml,type:t.type,key:i,ref:s,props:r,_owner:o}};ce.createContext=function(t){return t={$$typeof:SI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:II,_context:t},t.Consumer=t};ce.createElement=U0;ce.createFactory=function(t){var e=U0.bind(null,t);return e.type=t,e};ce.createRef=function(){return{current:null}};ce.forwardRef=function(t){return{$$typeof:AI,render:t}};ce.isValidElement=Mp;ce.lazy=function(t){return{$$typeof:RI,_payload:{_status:-1,_result:t},_init:DI}};ce.memo=function(t,e){return{$$typeof:bI,type:t,compare:e===void 0?null:e}};ce.startTransition=function(t){var e=Zu.transition;Zu.transition={};try{t()}finally{Zu.transition=e}};ce.unstable_act=F0;ce.useCallback=function(t,e){return Ut.current.useCallback(t,e)};ce.useContext=function(t){return Ut.current.useContext(t)};ce.useDebugValue=function(){};ce.useDeferredValue=function(t){return Ut.current.useDeferredValue(t)};ce.useEffect=function(t,e){return Ut.current.useEffect(t,e)};ce.useId=function(){return Ut.current.useId()};ce.useImperativeHandle=function(t,e,n){return Ut.current.useImperativeHandle(t,e,n)};ce.useInsertionEffect=function(t,e){return Ut.current.useInsertionEffect(t,e)};ce.useLayoutEffect=function(t,e){return Ut.current.useLayoutEffect(t,e)};ce.useMemo=function(t,e){return Ut.current.useMemo(t,e)};ce.useReducer=function(t,e,n){return Ut.current.useReducer(t,e,n)};ce.useRef=function(t){return Ut.current.useRef(t)};ce.useState=function(t){return Ut.current.useState(t)};ce.useSyncExternalStore=function(t,e,n){return Ut.current.useSyncExternalStore(t,e,n)};ce.useTransition=function(){return Ut.current.useTransition()};ce.version="18.3.1";N0.exports=ce;var R=N0.exports;const z0=_I(R),OI=vI({__proto__:null,default:z0},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jI=R,MI=Symbol.for("react.element"),VI=Symbol.for("react.fragment"),UI=Object.prototype.hasOwnProperty,FI=jI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zI={key:!0,ref:!0,__self:!0,__source:!0};function B0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)UI.call(e,r)&&!zI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:MI,type:t,key:s,ref:o,props:i,_owner:FI.current}}pd.Fragment=VI;pd.jsx=B0;pd.jsxs=B0;P0.exports=pd;var c=P0.exports,lf={},$0={exports:{}},ln={},W0={exports:{}},H0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(q,ee){var ne=q.length;q.push(ee);e:for(;0<ne;){var we=ne-1>>>1,X=q[we];if(0<i(X,ee))q[we]=ee,q[ne]=X,ne=we;else break e}}function n(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var ee=q[0],ne=q.pop();if(ne!==ee){q[0]=ne;e:for(var we=0,X=q.length,pe=X>>>1;we<pe;){var J=2*(we+1)-1,Je=q[J],Tn=J+1,In=q[Tn];if(0>i(Je,ne))Tn<X&&0>i(In,Je)?(q[we]=In,q[Tn]=ne,we=Tn):(q[we]=Je,q[J]=ne,we=J);else if(Tn<X&&0>i(In,ne))q[we]=In,q[Tn]=ne,we=Tn;else break e}}return ee}function i(q,ee){var ne=q.sortIndex-ee.sortIndex;return ne!==0?ne:q.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],d=[],f=1,m=null,g=3,I=!1,C=!1,k=!1,P=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(q){for(var ee=n(d);ee!==null;){if(ee.callback===null)r(d);else if(ee.startTime<=q)r(d),ee.sortIndex=ee.expirationTime,e(u,ee);else break;ee=n(d)}}function O(q){if(k=!1,S(q),!C)if(n(u)!==null)C=!0,Xt(j);else{var ee=n(d);ee!==null&&ht(O,ee.startTime-q)}}function j(q,ee){C=!1,k&&(k=!1,E(y),y=-1),I=!0;var ne=g;try{for(S(ee),m=n(u);m!==null&&(!(m.expirationTime>ee)||q&&!N());){var we=m.callback;if(typeof we=="function"){m.callback=null,g=m.priorityLevel;var X=we(m.expirationTime<=ee);ee=t.unstable_now(),typeof X=="function"?m.callback=X:m===n(u)&&r(u),S(ee)}else r(u);m=n(u)}if(m!==null)var pe=!0;else{var J=n(d);J!==null&&ht(O,J.startTime-ee),pe=!1}return pe}finally{m=null,g=ne,I=!1}}var D=!1,x=null,y=-1,T=5,A=-1;function N(){return!(t.unstable_now()-A<T)}function M(){if(x!==null){var q=t.unstable_now();A=q;var ee=!0;try{ee=x(!0,q)}finally{ee?b():(D=!1,x=null)}}else D=!1}var b;if(typeof _=="function")b=function(){_(M)};else if(typeof MessageChannel<"u"){var Ke=new MessageChannel,Xe=Ke.port2;Ke.port1.onmessage=M,b=function(){Xe.postMessage(null)}}else b=function(){P(M,0)};function Xt(q){x=q,D||(D=!0,b())}function ht(q,ee){y=P(function(){q(t.unstable_now())},ee)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(q){q.callback=null},t.unstable_continueExecution=function(){C||I||(C=!0,Xt(j))},t.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<q?Math.floor(1e3/q):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(q){switch(g){case 1:case 2:case 3:var ee=3;break;default:ee=g}var ne=g;g=ee;try{return q()}finally{g=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(q,ee){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var ne=g;g=q;try{return ee()}finally{g=ne}},t.unstable_scheduleCallback=function(q,ee,ne){var we=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?we+ne:we):ne=we,q){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=ne+X,q={id:f++,callback:ee,priorityLevel:q,startTime:ne,expirationTime:X,sortIndex:-1},ne>we?(q.sortIndex=ne,e(d,q),n(u)===null&&q===n(d)&&(k?(E(y),y=-1):k=!0,ht(O,ne-we))):(q.sortIndex=X,e(u,q),C||I||(C=!0,Xt(j))),q},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(q){var ee=g;return function(){var ne=g;g=ee;try{return q.apply(this,arguments)}finally{g=ne}}}})(H0);W0.exports=H0;var BI=W0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $I=R,an=BI;function W(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var q0=new Set,sl={};function Es(t,e){So(t,e),So(t+"Capture",e)}function So(t,e){for(sl[t]=e,t=0;t<e.length;t++)q0.add(e[t])}var Sr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uf=Object.prototype.hasOwnProperty,WI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,my={},gy={};function HI(t){return uf.call(gy,t)?!0:uf.call(my,t)?!1:WI.test(t)?gy[t]=!0:(my[t]=!0,!1)}function qI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function GI(t,e,n,r){if(e===null||typeof e>"u"||qI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ft(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var _t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_t[t]=new Ft(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];_t[e]=new Ft(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){_t[t]=new Ft(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_t[t]=new Ft(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_t[t]=new Ft(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){_t[t]=new Ft(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){_t[t]=new Ft(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){_t[t]=new Ft(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){_t[t]=new Ft(t,5,!1,t.toLowerCase(),null,!1,!1)});var Vp=/[\-:]([a-z])/g;function Up(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Vp,Up);_t[e]=new Ft(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Vp,Up);_t[e]=new Ft(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Vp,Up);_t[e]=new Ft(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){_t[t]=new Ft(t,1,!1,t.toLowerCase(),null,!1,!1)});_t.xlinkHref=new Ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){_t[t]=new Ft(t,1,!1,t.toLowerCase(),null,!0,!0)});function Fp(t,e,n,r){var i=_t.hasOwnProperty(e)?_t[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(GI(e,n,i,r)&&(n=null),r||i===null?HI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Dr=$I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ku=Symbol.for("react.element"),Zs=Symbol.for("react.portal"),eo=Symbol.for("react.fragment"),zp=Symbol.for("react.strict_mode"),cf=Symbol.for("react.profiler"),G0=Symbol.for("react.provider"),K0=Symbol.for("react.context"),Bp=Symbol.for("react.forward_ref"),df=Symbol.for("react.suspense"),hf=Symbol.for("react.suspense_list"),$p=Symbol.for("react.memo"),ei=Symbol.for("react.lazy"),Q0=Symbol.for("react.offscreen"),yy=Symbol.iterator;function xa(t){return t===null||typeof t!="object"?null:(t=yy&&t[yy]||t["@@iterator"],typeof t=="function"?t:null)}var Be=Object.assign,hh;function La(t){if(hh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);hh=e&&e[1]||""}return`
`+hh+t}var fh=!1;function ph(t,e){if(!t||fh)return"";fh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{fh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?La(t):""}function KI(t){switch(t.tag){case 5:return La(t.type);case 16:return La("Lazy");case 13:return La("Suspense");case 19:return La("SuspenseList");case 0:case 2:case 15:return t=ph(t.type,!1),t;case 11:return t=ph(t.type.render,!1),t;case 1:return t=ph(t.type,!0),t;default:return""}}function ff(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case eo:return"Fragment";case Zs:return"Portal";case cf:return"Profiler";case zp:return"StrictMode";case df:return"Suspense";case hf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case K0:return(t.displayName||"Context")+".Consumer";case G0:return(t._context.displayName||"Context")+".Provider";case Bp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $p:return e=t.displayName||null,e!==null?e:ff(t.type)||"Memo";case ei:e=t._payload,t=t._init;try{return ff(t(e))}catch{}}return null}function QI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ff(e);case 8:return e===zp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ai(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Y0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function YI(t){var e=Y0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function bu(t){t._valueTracker||(t._valueTracker=YI(t))}function X0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Y0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ec(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function pf(t,e){var n=e.checked;return Be({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function vy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ai(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function J0(t,e){e=e.checked,e!=null&&Fp(t,"checked",e,!1)}function mf(t,e){J0(t,e);var n=Ai(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?gf(t,e.type,n):e.hasOwnProperty("defaultValue")&&gf(t,e.type,Ai(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function _y(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function gf(t,e,n){(e!=="number"||Ec(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Oa=Array.isArray;function po(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ai(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function yf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(W(91));return Be({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function wy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(W(92));if(Oa(n)){if(1<n.length)throw Error(W(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ai(n)}}function Z0(t,e){var n=Ai(e.value),r=Ai(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function xy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ew(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ew(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ru,tw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ru=Ru||document.createElement("div"),Ru.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ru.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ol(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ha={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},XI=["Webkit","ms","Moz","O"];Object.keys(Ha).forEach(function(t){XI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ha[e]=Ha[t]})});function nw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ha.hasOwnProperty(t)&&Ha[t]?(""+e).trim():e+"px"}function rw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=nw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var JI=Be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _f(t,e){if(e){if(JI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(W(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(W(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(W(61))}if(e.style!=null&&typeof e.style!="object")throw Error(W(62))}}function wf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xf=null;function Wp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ef=null,mo=null,go=null;function Ey(t){if(t=Fl(t)){if(typeof Ef!="function")throw Error(W(280));var e=t.stateNode;e&&(e=_d(e),Ef(t.stateNode,t.type,e))}}function iw(t){mo?go?go.push(t):go=[t]:mo=t}function sw(){if(mo){var t=mo,e=go;if(go=mo=null,Ey(t),e)for(t=0;t<e.length;t++)Ey(e[t])}}function ow(t,e){return t(e)}function aw(){}var mh=!1;function lw(t,e,n){if(mh)return t(e,n);mh=!0;try{return ow(t,e,n)}finally{mh=!1,(mo!==null||go!==null)&&(aw(),sw())}}function al(t,e){var n=t.stateNode;if(n===null)return null;var r=_d(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(W(231,e,typeof n));return n}var Tf=!1;if(Sr)try{var Ea={};Object.defineProperty(Ea,"passive",{get:function(){Tf=!0}}),window.addEventListener("test",Ea,Ea),window.removeEventListener("test",Ea,Ea)}catch{Tf=!1}function ZI(t,e,n,r,i,s,o,a,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(f){this.onError(f)}}var qa=!1,Tc=null,Ic=!1,If=null,eS={onError:function(t){qa=!0,Tc=t}};function tS(t,e,n,r,i,s,o,a,u){qa=!1,Tc=null,ZI.apply(eS,arguments)}function nS(t,e,n,r,i,s,o,a,u){if(tS.apply(this,arguments),qa){if(qa){var d=Tc;qa=!1,Tc=null}else throw Error(W(198));Ic||(Ic=!0,If=d)}}function Ts(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function uw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ty(t){if(Ts(t)!==t)throw Error(W(188))}function rS(t){var e=t.alternate;if(!e){if(e=Ts(t),e===null)throw Error(W(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ty(i),t;if(s===r)return Ty(i),e;s=s.sibling}throw Error(W(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(W(189))}}if(n.alternate!==r)throw Error(W(190))}if(n.tag!==3)throw Error(W(188));return n.stateNode.current===n?t:e}function cw(t){return t=rS(t),t!==null?dw(t):null}function dw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=dw(t);if(e!==null)return e;t=t.sibling}return null}var hw=an.unstable_scheduleCallback,Iy=an.unstable_cancelCallback,iS=an.unstable_shouldYield,sS=an.unstable_requestPaint,Ye=an.unstable_now,oS=an.unstable_getCurrentPriorityLevel,Hp=an.unstable_ImmediatePriority,fw=an.unstable_UserBlockingPriority,Sc=an.unstable_NormalPriority,aS=an.unstable_LowPriority,pw=an.unstable_IdlePriority,md=null,Gn=null;function lS(t){if(Gn&&typeof Gn.onCommitFiberRoot=="function")try{Gn.onCommitFiberRoot(md,t,void 0,(t.current.flags&128)===128)}catch{}}var Pn=Math.clz32?Math.clz32:dS,uS=Math.log,cS=Math.LN2;function dS(t){return t>>>=0,t===0?32:31-(uS(t)/cS|0)|0}var Cu=64,Pu=4194304;function ja(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ac(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ja(a):(s&=o,s!==0&&(r=ja(s)))}else o=n&~i,o!==0?r=ja(o):s!==0&&(r=ja(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Pn(e),i=1<<n,r|=t[n],e&=~i;return r}function hS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Pn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=hS(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Sf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mw(){var t=Cu;return Cu<<=1,!(Cu&4194240)&&(Cu=64),t}function gh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Vl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Pn(e),t[e]=n}function pS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Pn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function qp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Pn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ee=0;function gw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var yw,Gp,vw,_w,ww,Af=!1,Nu=[],hi=null,fi=null,pi=null,ll=new Map,ul=new Map,ni=[],mS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sy(t,e){switch(t){case"focusin":case"focusout":hi=null;break;case"dragenter":case"dragleave":fi=null;break;case"mouseover":case"mouseout":pi=null;break;case"pointerover":case"pointerout":ll.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ul.delete(e.pointerId)}}function Ta(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Fl(e),e!==null&&Gp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function gS(t,e,n,r,i){switch(e){case"focusin":return hi=Ta(hi,t,e,n,r,i),!0;case"dragenter":return fi=Ta(fi,t,e,n,r,i),!0;case"mouseover":return pi=Ta(pi,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ll.set(s,Ta(ll.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ul.set(s,Ta(ul.get(s)||null,t,e,n,r,i)),!0}return!1}function xw(t){var e=rs(t.target);if(e!==null){var n=Ts(e);if(n!==null){if(e=n.tag,e===13){if(e=uw(n),e!==null){t.blockedOn=e,ww(t.priority,function(){vw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ec(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=kf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);xf=r,n.target.dispatchEvent(r),xf=null}else return e=Fl(n),e!==null&&Gp(e),t.blockedOn=n,!1;e.shift()}return!0}function Ay(t,e,n){ec(t)&&n.delete(e)}function yS(){Af=!1,hi!==null&&ec(hi)&&(hi=null),fi!==null&&ec(fi)&&(fi=null),pi!==null&&ec(pi)&&(pi=null),ll.forEach(Ay),ul.forEach(Ay)}function Ia(t,e){t.blockedOn===e&&(t.blockedOn=null,Af||(Af=!0,an.unstable_scheduleCallback(an.unstable_NormalPriority,yS)))}function cl(t){function e(i){return Ia(i,t)}if(0<Nu.length){Ia(Nu[0],t);for(var n=1;n<Nu.length;n++){var r=Nu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(hi!==null&&Ia(hi,t),fi!==null&&Ia(fi,t),pi!==null&&Ia(pi,t),ll.forEach(e),ul.forEach(e),n=0;n<ni.length;n++)r=ni[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ni.length&&(n=ni[0],n.blockedOn===null);)xw(n),n.blockedOn===null&&ni.shift()}var yo=Dr.ReactCurrentBatchConfig,kc=!0;function vS(t,e,n,r){var i=Ee,s=yo.transition;yo.transition=null;try{Ee=1,Kp(t,e,n,r)}finally{Ee=i,yo.transition=s}}function _S(t,e,n,r){var i=Ee,s=yo.transition;yo.transition=null;try{Ee=4,Kp(t,e,n,r)}finally{Ee=i,yo.transition=s}}function Kp(t,e,n,r){if(kc){var i=kf(t,e,n,r);if(i===null)Ah(t,e,r,bc,n),Sy(t,r);else if(gS(i,t,e,n,r))r.stopPropagation();else if(Sy(t,r),e&4&&-1<mS.indexOf(t)){for(;i!==null;){var s=Fl(i);if(s!==null&&yw(s),s=kf(t,e,n,r),s===null&&Ah(t,e,r,bc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ah(t,e,r,null,n)}}var bc=null;function kf(t,e,n,r){if(bc=null,t=Wp(r),t=rs(t),t!==null)if(e=Ts(t),e===null)t=null;else if(n=e.tag,n===13){if(t=uw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return bc=t,null}function Ew(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(oS()){case Hp:return 1;case fw:return 4;case Sc:case aS:return 16;case pw:return 536870912;default:return 16}default:return 16}}var li=null,Qp=null,tc=null;function Tw(){if(tc)return tc;var t,e=Qp,n=e.length,r,i="value"in li?li.value:li.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return tc=i.slice(t,1<r?1-r:void 0)}function nc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Du(){return!0}function ky(){return!1}function un(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Du:ky,this.isPropagationStopped=ky,this}return Be(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Du)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Du)},persist:function(){},isPersistent:Du}),e}var $o={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yp=un($o),Ul=Be({},$o,{view:0,detail:0}),wS=un(Ul),yh,vh,Sa,gd=Be({},Ul,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Sa&&(Sa&&t.type==="mousemove"?(yh=t.screenX-Sa.screenX,vh=t.screenY-Sa.screenY):vh=yh=0,Sa=t),yh)},movementY:function(t){return"movementY"in t?t.movementY:vh}}),by=un(gd),xS=Be({},gd,{dataTransfer:0}),ES=un(xS),TS=Be({},Ul,{relatedTarget:0}),_h=un(TS),IS=Be({},$o,{animationName:0,elapsedTime:0,pseudoElement:0}),SS=un(IS),AS=Be({},$o,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),kS=un(AS),bS=Be({},$o,{data:0}),Ry=un(bS),RS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},CS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},PS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function NS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=PS[t])?!!e[t]:!1}function Xp(){return NS}var DS=Be({},Ul,{key:function(t){if(t.key){var e=RS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=nc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?CS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xp,charCode:function(t){return t.type==="keypress"?nc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?nc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),LS=un(DS),OS=Be({},gd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cy=un(OS),jS=Be({},Ul,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xp}),MS=un(jS),VS=Be({},$o,{propertyName:0,elapsedTime:0,pseudoElement:0}),US=un(VS),FS=Be({},gd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zS=un(FS),BS=[9,13,27,32],Jp=Sr&&"CompositionEvent"in window,Ga=null;Sr&&"documentMode"in document&&(Ga=document.documentMode);var $S=Sr&&"TextEvent"in window&&!Ga,Iw=Sr&&(!Jp||Ga&&8<Ga&&11>=Ga),Py=" ",Ny=!1;function Sw(t,e){switch(t){case"keyup":return BS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Aw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var to=!1;function WS(t,e){switch(t){case"compositionend":return Aw(e);case"keypress":return e.which!==32?null:(Ny=!0,Py);case"textInput":return t=e.data,t===Py&&Ny?null:t;default:return null}}function HS(t,e){if(to)return t==="compositionend"||!Jp&&Sw(t,e)?(t=Tw(),tc=Qp=li=null,to=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Iw&&e.locale!=="ko"?null:e.data;default:return null}}var qS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!qS[t.type]:e==="textarea"}function kw(t,e,n,r){iw(r),e=Rc(e,"onChange"),0<e.length&&(n=new Yp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ka=null,dl=null;function GS(t){Vw(t,0)}function yd(t){var e=io(t);if(X0(e))return t}function KS(t,e){if(t==="change")return e}var bw=!1;if(Sr){var wh;if(Sr){var xh="oninput"in document;if(!xh){var Ly=document.createElement("div");Ly.setAttribute("oninput","return;"),xh=typeof Ly.oninput=="function"}wh=xh}else wh=!1;bw=wh&&(!document.documentMode||9<document.documentMode)}function Oy(){Ka&&(Ka.detachEvent("onpropertychange",Rw),dl=Ka=null)}function Rw(t){if(t.propertyName==="value"&&yd(dl)){var e=[];kw(e,dl,t,Wp(t)),lw(GS,e)}}function QS(t,e,n){t==="focusin"?(Oy(),Ka=e,dl=n,Ka.attachEvent("onpropertychange",Rw)):t==="focusout"&&Oy()}function YS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yd(dl)}function XS(t,e){if(t==="click")return yd(e)}function JS(t,e){if(t==="input"||t==="change")return yd(e)}function ZS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Dn=typeof Object.is=="function"?Object.is:ZS;function hl(t,e){if(Dn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!uf.call(e,i)||!Dn(t[i],e[i]))return!1}return!0}function jy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function My(t,e){var n=jy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jy(n)}}function Cw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Cw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Pw(){for(var t=window,e=Ec();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ec(t.document)}return e}function Zp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function eA(t){var e=Pw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Cw(n.ownerDocument.documentElement,n)){if(r!==null&&Zp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=My(n,s);var o=My(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var tA=Sr&&"documentMode"in document&&11>=document.documentMode,no=null,bf=null,Qa=null,Rf=!1;function Vy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rf||no==null||no!==Ec(r)||(r=no,"selectionStart"in r&&Zp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qa&&hl(Qa,r)||(Qa=r,r=Rc(bf,"onSelect"),0<r.length&&(e=new Yp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=no)))}function Lu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ro={animationend:Lu("Animation","AnimationEnd"),animationiteration:Lu("Animation","AnimationIteration"),animationstart:Lu("Animation","AnimationStart"),transitionend:Lu("Transition","TransitionEnd")},Eh={},Nw={};Sr&&(Nw=document.createElement("div").style,"AnimationEvent"in window||(delete ro.animationend.animation,delete ro.animationiteration.animation,delete ro.animationstart.animation),"TransitionEvent"in window||delete ro.transitionend.transition);function vd(t){if(Eh[t])return Eh[t];if(!ro[t])return t;var e=ro[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Nw)return Eh[t]=e[n];return t}var Dw=vd("animationend"),Lw=vd("animationiteration"),Ow=vd("animationstart"),jw=vd("transitionend"),Mw=new Map,Uy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ni(t,e){Mw.set(t,e),Es(e,[t])}for(var Th=0;Th<Uy.length;Th++){var Ih=Uy[Th],nA=Ih.toLowerCase(),rA=Ih[0].toUpperCase()+Ih.slice(1);Ni(nA,"on"+rA)}Ni(Dw,"onAnimationEnd");Ni(Lw,"onAnimationIteration");Ni(Ow,"onAnimationStart");Ni("dblclick","onDoubleClick");Ni("focusin","onFocus");Ni("focusout","onBlur");Ni(jw,"onTransitionEnd");So("onMouseEnter",["mouseout","mouseover"]);So("onMouseLeave",["mouseout","mouseover"]);So("onPointerEnter",["pointerout","pointerover"]);So("onPointerLeave",["pointerout","pointerover"]);Es("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Es("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Es("onBeforeInput",["compositionend","keypress","textInput","paste"]);Es("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Es("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Es("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iA=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ma));function Fy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,nS(r,e,void 0,t),t.currentTarget=null}function Vw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,d=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Fy(i,a,d),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,d=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Fy(i,a,d),s=u}}}if(Ic)throw t=If,Ic=!1,If=null,t}function Pe(t,e){var n=e[Lf];n===void 0&&(n=e[Lf]=new Set);var r=t+"__bubble";n.has(r)||(Uw(e,t,2,!1),n.add(r))}function Sh(t,e,n){var r=0;e&&(r|=4),Uw(n,t,r,e)}var Ou="_reactListening"+Math.random().toString(36).slice(2);function fl(t){if(!t[Ou]){t[Ou]=!0,q0.forEach(function(n){n!=="selectionchange"&&(iA.has(n)||Sh(n,!1,t),Sh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ou]||(e[Ou]=!0,Sh("selectionchange",!1,e))}}function Uw(t,e,n,r){switch(Ew(e)){case 1:var i=vS;break;case 4:i=_S;break;default:i=Kp}n=i.bind(null,e,n,t),i=void 0,!Tf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ah(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=rs(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}lw(function(){var d=s,f=Wp(n),m=[];e:{var g=Mw.get(t);if(g!==void 0){var I=Yp,C=t;switch(t){case"keypress":if(nc(n)===0)break e;case"keydown":case"keyup":I=LS;break;case"focusin":C="focus",I=_h;break;case"focusout":C="blur",I=_h;break;case"beforeblur":case"afterblur":I=_h;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=by;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=ES;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=MS;break;case Dw:case Lw:case Ow:I=SS;break;case jw:I=US;break;case"scroll":I=wS;break;case"wheel":I=zS;break;case"copy":case"cut":case"paste":I=kS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Cy}var k=(e&4)!==0,P=!k&&t==="scroll",E=k?g!==null?g+"Capture":null:g;k=[];for(var _=d,S;_!==null;){S=_;var O=S.stateNode;if(S.tag===5&&O!==null&&(S=O,E!==null&&(O=al(_,E),O!=null&&k.push(pl(_,O,S)))),P)break;_=_.return}0<k.length&&(g=new I(g,C,null,n,f),m.push({event:g,listeners:k}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",g&&n!==xf&&(C=n.relatedTarget||n.fromElement)&&(rs(C)||C[Ar]))break e;if((I||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,I?(C=n.relatedTarget||n.toElement,I=d,C=C?rs(C):null,C!==null&&(P=Ts(C),C!==P||C.tag!==5&&C.tag!==6)&&(C=null)):(I=null,C=d),I!==C)){if(k=by,O="onMouseLeave",E="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(k=Cy,O="onPointerLeave",E="onPointerEnter",_="pointer"),P=I==null?g:io(I),S=C==null?g:io(C),g=new k(O,_+"leave",I,n,f),g.target=P,g.relatedTarget=S,O=null,rs(f)===d&&(k=new k(E,_+"enter",C,n,f),k.target=S,k.relatedTarget=P,O=k),P=O,I&&C)t:{for(k=I,E=C,_=0,S=k;S;S=Ks(S))_++;for(S=0,O=E;O;O=Ks(O))S++;for(;0<_-S;)k=Ks(k),_--;for(;0<S-_;)E=Ks(E),S--;for(;_--;){if(k===E||E!==null&&k===E.alternate)break t;k=Ks(k),E=Ks(E)}k=null}else k=null;I!==null&&zy(m,g,I,k,!1),C!==null&&P!==null&&zy(m,P,C,k,!0)}}e:{if(g=d?io(d):window,I=g.nodeName&&g.nodeName.toLowerCase(),I==="select"||I==="input"&&g.type==="file")var j=KS;else if(Dy(g))if(bw)j=JS;else{j=YS;var D=QS}else(I=g.nodeName)&&I.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=XS);if(j&&(j=j(t,d))){kw(m,j,n,f);break e}D&&D(t,g,d),t==="focusout"&&(D=g._wrapperState)&&D.controlled&&g.type==="number"&&gf(g,"number",g.value)}switch(D=d?io(d):window,t){case"focusin":(Dy(D)||D.contentEditable==="true")&&(no=D,bf=d,Qa=null);break;case"focusout":Qa=bf=no=null;break;case"mousedown":Rf=!0;break;case"contextmenu":case"mouseup":case"dragend":Rf=!1,Vy(m,n,f);break;case"selectionchange":if(tA)break;case"keydown":case"keyup":Vy(m,n,f)}var x;if(Jp)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else to?Sw(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Iw&&n.locale!=="ko"&&(to||y!=="onCompositionStart"?y==="onCompositionEnd"&&to&&(x=Tw()):(li=f,Qp="value"in li?li.value:li.textContent,to=!0)),D=Rc(d,y),0<D.length&&(y=new Ry(y,t,null,n,f),m.push({event:y,listeners:D}),x?y.data=x:(x=Aw(n),x!==null&&(y.data=x)))),(x=$S?WS(t,n):HS(t,n))&&(d=Rc(d,"onBeforeInput"),0<d.length&&(f=new Ry("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:d}),f.data=x))}Vw(m,e)})}function pl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Rc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=al(t,n),s!=null&&r.unshift(pl(t,s,i)),s=al(t,e),s!=null&&r.push(pl(t,s,i))),t=t.return}return r}function Ks(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,d=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&d!==null&&(a=d,i?(u=al(n,s),u!=null&&o.unshift(pl(n,u,a))):i||(u=al(n,s),u!=null&&o.push(pl(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var sA=/\r\n?/g,oA=/\u0000|\uFFFD/g;function By(t){return(typeof t=="string"?t:""+t).replace(sA,`
`).replace(oA,"")}function ju(t,e,n){if(e=By(e),By(t)!==e&&n)throw Error(W(425))}function Cc(){}var Cf=null,Pf=null;function Nf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Df=typeof setTimeout=="function"?setTimeout:void 0,aA=typeof clearTimeout=="function"?clearTimeout:void 0,$y=typeof Promise=="function"?Promise:void 0,lA=typeof queueMicrotask=="function"?queueMicrotask:typeof $y<"u"?function(t){return $y.resolve(null).then(t).catch(uA)}:Df;function uA(t){setTimeout(function(){throw t})}function kh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),cl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);cl(e)}function mi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Wy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Wo=Math.random().toString(36).slice(2),Wn="__reactFiber$"+Wo,ml="__reactProps$"+Wo,Ar="__reactContainer$"+Wo,Lf="__reactEvents$"+Wo,cA="__reactListeners$"+Wo,dA="__reactHandles$"+Wo;function rs(t){var e=t[Wn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ar]||n[Wn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Wy(t);t!==null;){if(n=t[Wn])return n;t=Wy(t)}return e}t=n,n=t.parentNode}return null}function Fl(t){return t=t[Wn]||t[Ar],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function io(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(W(33))}function _d(t){return t[ml]||null}var Of=[],so=-1;function Di(t){return{current:t}}function Le(t){0>so||(t.current=Of[so],Of[so]=null,so--)}function Re(t,e){so++,Of[so]=t.current,t.current=e}var ki={},Pt=Di(ki),Kt=Di(!1),ds=ki;function Ao(t,e){var n=t.type.contextTypes;if(!n)return ki;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Qt(t){return t=t.childContextTypes,t!=null}function Pc(){Le(Kt),Le(Pt)}function Hy(t,e,n){if(Pt.current!==ki)throw Error(W(168));Re(Pt,e),Re(Kt,n)}function Fw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(W(108,QI(t)||"Unknown",i));return Be({},n,r)}function Nc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ki,ds=Pt.current,Re(Pt,t),Re(Kt,Kt.current),!0}function qy(t,e,n){var r=t.stateNode;if(!r)throw Error(W(169));n?(t=Fw(t,e,ds),r.__reactInternalMemoizedMergedChildContext=t,Le(Kt),Le(Pt),Re(Pt,t)):Le(Kt),Re(Kt,n)}var gr=null,wd=!1,bh=!1;function zw(t){gr===null?gr=[t]:gr.push(t)}function hA(t){wd=!0,zw(t)}function Li(){if(!bh&&gr!==null){bh=!0;var t=0,e=Ee;try{var n=gr;for(Ee=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}gr=null,wd=!1}catch(i){throw gr!==null&&(gr=gr.slice(t+1)),hw(Hp,Li),i}finally{Ee=e,bh=!1}}return null}var oo=[],ao=0,Dc=null,Lc=0,mn=[],gn=0,hs=null,yr=1,vr="";function Zi(t,e){oo[ao++]=Lc,oo[ao++]=Dc,Dc=t,Lc=e}function Bw(t,e,n){mn[gn++]=yr,mn[gn++]=vr,mn[gn++]=hs,hs=t;var r=yr;t=vr;var i=32-Pn(r)-1;r&=~(1<<i),n+=1;var s=32-Pn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,yr=1<<32-Pn(e)+i|n<<i|r,vr=s+t}else yr=1<<s|n<<i|r,vr=t}function em(t){t.return!==null&&(Zi(t,1),Bw(t,1,0))}function tm(t){for(;t===Dc;)Dc=oo[--ao],oo[ao]=null,Lc=oo[--ao],oo[ao]=null;for(;t===hs;)hs=mn[--gn],mn[gn]=null,vr=mn[--gn],mn[gn]=null,yr=mn[--gn],mn[gn]=null}var on=null,rn=null,je=!1,Cn=null;function $w(t,e){var n=yn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Gy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,on=t,rn=mi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,on=t,rn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=hs!==null?{id:yr,overflow:vr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=yn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,on=t,rn=null,!0):!1;default:return!1}}function jf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Mf(t){if(je){var e=rn;if(e){var n=e;if(!Gy(t,e)){if(jf(t))throw Error(W(418));e=mi(n.nextSibling);var r=on;e&&Gy(t,e)?$w(r,n):(t.flags=t.flags&-4097|2,je=!1,on=t)}}else{if(jf(t))throw Error(W(418));t.flags=t.flags&-4097|2,je=!1,on=t}}}function Ky(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;on=t}function Mu(t){if(t!==on)return!1;if(!je)return Ky(t),je=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Nf(t.type,t.memoizedProps)),e&&(e=rn)){if(jf(t))throw Ww(),Error(W(418));for(;e;)$w(t,e),e=mi(e.nextSibling)}if(Ky(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(W(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){rn=mi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}rn=null}}else rn=on?mi(t.stateNode.nextSibling):null;return!0}function Ww(){for(var t=rn;t;)t=mi(t.nextSibling)}function ko(){rn=on=null,je=!1}function nm(t){Cn===null?Cn=[t]:Cn.push(t)}var fA=Dr.ReactCurrentBatchConfig;function Aa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(W(309));var r=n.stateNode}if(!r)throw Error(W(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(W(284));if(!n._owner)throw Error(W(290,t))}return t}function Vu(t,e){throw t=Object.prototype.toString.call(e),Error(W(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Qy(t){var e=t._init;return e(t._payload)}function Hw(t){function e(E,_){if(t){var S=E.deletions;S===null?(E.deletions=[_],E.flags|=16):S.push(_)}}function n(E,_){if(!t)return null;for(;_!==null;)e(E,_),_=_.sibling;return null}function r(E,_){for(E=new Map;_!==null;)_.key!==null?E.set(_.key,_):E.set(_.index,_),_=_.sibling;return E}function i(E,_){return E=_i(E,_),E.index=0,E.sibling=null,E}function s(E,_,S){return E.index=S,t?(S=E.alternate,S!==null?(S=S.index,S<_?(E.flags|=2,_):S):(E.flags|=2,_)):(E.flags|=1048576,_)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function a(E,_,S,O){return _===null||_.tag!==6?(_=Oh(S,E.mode,O),_.return=E,_):(_=i(_,S),_.return=E,_)}function u(E,_,S,O){var j=S.type;return j===eo?f(E,_,S.props.children,O,S.key):_!==null&&(_.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===ei&&Qy(j)===_.type)?(O=i(_,S.props),O.ref=Aa(E,_,S),O.return=E,O):(O=uc(S.type,S.key,S.props,null,E.mode,O),O.ref=Aa(E,_,S),O.return=E,O)}function d(E,_,S,O){return _===null||_.tag!==4||_.stateNode.containerInfo!==S.containerInfo||_.stateNode.implementation!==S.implementation?(_=jh(S,E.mode,O),_.return=E,_):(_=i(_,S.children||[]),_.return=E,_)}function f(E,_,S,O,j){return _===null||_.tag!==7?(_=us(S,E.mode,O,j),_.return=E,_):(_=i(_,S),_.return=E,_)}function m(E,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Oh(""+_,E.mode,S),_.return=E,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ku:return S=uc(_.type,_.key,_.props,null,E.mode,S),S.ref=Aa(E,null,_),S.return=E,S;case Zs:return _=jh(_,E.mode,S),_.return=E,_;case ei:var O=_._init;return m(E,O(_._payload),S)}if(Oa(_)||xa(_))return _=us(_,E.mode,S,null),_.return=E,_;Vu(E,_)}return null}function g(E,_,S,O){var j=_!==null?_.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return j!==null?null:a(E,_,""+S,O);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ku:return S.key===j?u(E,_,S,O):null;case Zs:return S.key===j?d(E,_,S,O):null;case ei:return j=S._init,g(E,_,j(S._payload),O)}if(Oa(S)||xa(S))return j!==null?null:f(E,_,S,O,null);Vu(E,S)}return null}function I(E,_,S,O,j){if(typeof O=="string"&&O!==""||typeof O=="number")return E=E.get(S)||null,a(_,E,""+O,j);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case ku:return E=E.get(O.key===null?S:O.key)||null,u(_,E,O,j);case Zs:return E=E.get(O.key===null?S:O.key)||null,d(_,E,O,j);case ei:var D=O._init;return I(E,_,S,D(O._payload),j)}if(Oa(O)||xa(O))return E=E.get(S)||null,f(_,E,O,j,null);Vu(_,O)}return null}function C(E,_,S,O){for(var j=null,D=null,x=_,y=_=0,T=null;x!==null&&y<S.length;y++){x.index>y?(T=x,x=null):T=x.sibling;var A=g(E,x,S[y],O);if(A===null){x===null&&(x=T);break}t&&x&&A.alternate===null&&e(E,x),_=s(A,_,y),D===null?j=A:D.sibling=A,D=A,x=T}if(y===S.length)return n(E,x),je&&Zi(E,y),j;if(x===null){for(;y<S.length;y++)x=m(E,S[y],O),x!==null&&(_=s(x,_,y),D===null?j=x:D.sibling=x,D=x);return je&&Zi(E,y),j}for(x=r(E,x);y<S.length;y++)T=I(x,E,y,S[y],O),T!==null&&(t&&T.alternate!==null&&x.delete(T.key===null?y:T.key),_=s(T,_,y),D===null?j=T:D.sibling=T,D=T);return t&&x.forEach(function(N){return e(E,N)}),je&&Zi(E,y),j}function k(E,_,S,O){var j=xa(S);if(typeof j!="function")throw Error(W(150));if(S=j.call(S),S==null)throw Error(W(151));for(var D=j=null,x=_,y=_=0,T=null,A=S.next();x!==null&&!A.done;y++,A=S.next()){x.index>y?(T=x,x=null):T=x.sibling;var N=g(E,x,A.value,O);if(N===null){x===null&&(x=T);break}t&&x&&N.alternate===null&&e(E,x),_=s(N,_,y),D===null?j=N:D.sibling=N,D=N,x=T}if(A.done)return n(E,x),je&&Zi(E,y),j;if(x===null){for(;!A.done;y++,A=S.next())A=m(E,A.value,O),A!==null&&(_=s(A,_,y),D===null?j=A:D.sibling=A,D=A);return je&&Zi(E,y),j}for(x=r(E,x);!A.done;y++,A=S.next())A=I(x,E,y,A.value,O),A!==null&&(t&&A.alternate!==null&&x.delete(A.key===null?y:A.key),_=s(A,_,y),D===null?j=A:D.sibling=A,D=A);return t&&x.forEach(function(M){return e(E,M)}),je&&Zi(E,y),j}function P(E,_,S,O){if(typeof S=="object"&&S!==null&&S.type===eo&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case ku:e:{for(var j=S.key,D=_;D!==null;){if(D.key===j){if(j=S.type,j===eo){if(D.tag===7){n(E,D.sibling),_=i(D,S.props.children),_.return=E,E=_;break e}}else if(D.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===ei&&Qy(j)===D.type){n(E,D.sibling),_=i(D,S.props),_.ref=Aa(E,D,S),_.return=E,E=_;break e}n(E,D);break}else e(E,D);D=D.sibling}S.type===eo?(_=us(S.props.children,E.mode,O,S.key),_.return=E,E=_):(O=uc(S.type,S.key,S.props,null,E.mode,O),O.ref=Aa(E,_,S),O.return=E,E=O)}return o(E);case Zs:e:{for(D=S.key;_!==null;){if(_.key===D)if(_.tag===4&&_.stateNode.containerInfo===S.containerInfo&&_.stateNode.implementation===S.implementation){n(E,_.sibling),_=i(_,S.children||[]),_.return=E,E=_;break e}else{n(E,_);break}else e(E,_);_=_.sibling}_=jh(S,E.mode,O),_.return=E,E=_}return o(E);case ei:return D=S._init,P(E,_,D(S._payload),O)}if(Oa(S))return C(E,_,S,O);if(xa(S))return k(E,_,S,O);Vu(E,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,_!==null&&_.tag===6?(n(E,_.sibling),_=i(_,S),_.return=E,E=_):(n(E,_),_=Oh(S,E.mode,O),_.return=E,E=_),o(E)):n(E,_)}return P}var bo=Hw(!0),qw=Hw(!1),Oc=Di(null),jc=null,lo=null,rm=null;function im(){rm=lo=jc=null}function sm(t){var e=Oc.current;Le(Oc),t._currentValue=e}function Vf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function vo(t,e){jc=t,rm=lo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Gt=!0),t.firstContext=null)}function _n(t){var e=t._currentValue;if(rm!==t)if(t={context:t,memoizedValue:e,next:null},lo===null){if(jc===null)throw Error(W(308));lo=t,jc.dependencies={lanes:0,firstContext:t}}else lo=lo.next=t;return e}var is=null;function om(t){is===null?is=[t]:is.push(t)}function Gw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,om(e)):(n.next=i.next,i.next=n),e.interleaved=n,kr(t,r)}function kr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ti=!1;function am(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Er(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function gi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ye&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,kr(t,n)}return i=r.interleaved,i===null?(e.next=e,om(r)):(e.next=i.next,i.next=e),r.interleaved=e,kr(t,n)}function rc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qp(t,n)}}function Yy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Mc(t,e,n,r){var i=t.updateQueue;ti=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,d=u.next;u.next=null,o===null?s=d:o.next=d,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=d:a.next=d,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,f=d=u=null,a=s;do{var g=a.lane,I=a.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:I,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var C=t,k=a;switch(g=e,I=n,k.tag){case 1:if(C=k.payload,typeof C=="function"){m=C.call(I,m,g);break e}m=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=k.payload,g=typeof C=="function"?C.call(I,m,g):C,g==null)break e;m=Be({},m,g);break e;case 2:ti=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else I={eventTime:I,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(d=f=I,u=m):f=f.next=I,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ps|=o,t.lanes=o,t.memoizedState=m}}function Xy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(W(191,i));i.call(r)}}}var zl={},Kn=Di(zl),gl=Di(zl),yl=Di(zl);function ss(t){if(t===zl)throw Error(W(174));return t}function lm(t,e){switch(Re(yl,e),Re(gl,t),Re(Kn,zl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=vf(e,t)}Le(Kn),Re(Kn,e)}function Ro(){Le(Kn),Le(gl),Le(yl)}function Qw(t){ss(yl.current);var e=ss(Kn.current),n=vf(e,t.type);e!==n&&(Re(gl,t),Re(Kn,n))}function um(t){gl.current===t&&(Le(Kn),Le(gl))}var Ue=Di(0);function Vc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Rh=[];function cm(){for(var t=0;t<Rh.length;t++)Rh[t]._workInProgressVersionPrimary=null;Rh.length=0}var ic=Dr.ReactCurrentDispatcher,Ch=Dr.ReactCurrentBatchConfig,fs=0,Fe=null,it=null,ut=null,Uc=!1,Ya=!1,vl=0,pA=0;function Tt(){throw Error(W(321))}function dm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Dn(t[n],e[n]))return!1;return!0}function hm(t,e,n,r,i,s){if(fs=s,Fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ic.current=t===null||t.memoizedState===null?vA:_A,t=n(r,i),Ya){s=0;do{if(Ya=!1,vl=0,25<=s)throw Error(W(301));s+=1,ut=it=null,e.updateQueue=null,ic.current=wA,t=n(r,i)}while(Ya)}if(ic.current=Fc,e=it!==null&&it.next!==null,fs=0,ut=it=Fe=null,Uc=!1,e)throw Error(W(300));return t}function fm(){var t=vl!==0;return vl=0,t}function $n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ut===null?Fe.memoizedState=ut=t:ut=ut.next=t,ut}function wn(){if(it===null){var t=Fe.alternate;t=t!==null?t.memoizedState:null}else t=it.next;var e=ut===null?Fe.memoizedState:ut.next;if(e!==null)ut=e,it=t;else{if(t===null)throw Error(W(310));it=t,t={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},ut===null?Fe.memoizedState=ut=t:ut=ut.next=t}return ut}function _l(t,e){return typeof e=="function"?e(t):e}function Ph(t){var e=wn(),n=e.queue;if(n===null)throw Error(W(311));n.lastRenderedReducer=t;var r=it,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,d=s;do{var f=d.lane;if((fs&f)===f)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var m={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(a=u=m,o=r):u=u.next=m,Fe.lanes|=f,ps|=f}d=d.next}while(d!==null&&d!==s);u===null?o=r:u.next=a,Dn(r,e.memoizedState)||(Gt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Fe.lanes|=s,ps|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Nh(t){var e=wn(),n=e.queue;if(n===null)throw Error(W(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Dn(s,e.memoizedState)||(Gt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Yw(){}function Xw(t,e){var n=Fe,r=wn(),i=e(),s=!Dn(r.memoizedState,i);if(s&&(r.memoizedState=i,Gt=!0),r=r.queue,pm(ex.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ut!==null&&ut.memoizedState.tag&1){if(n.flags|=2048,wl(9,Zw.bind(null,n,r,i,e),void 0,null),ct===null)throw Error(W(349));fs&30||Jw(n,e,i)}return i}function Jw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Zw(t,e,n,r){e.value=n,e.getSnapshot=r,tx(e)&&nx(t)}function ex(t,e,n){return n(function(){tx(e)&&nx(t)})}function tx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Dn(t,n)}catch{return!0}}function nx(t){var e=kr(t,1);e!==null&&Nn(e,t,1,-1)}function Jy(t){var e=$n();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_l,lastRenderedState:t},e.queue=t,t=t.dispatch=yA.bind(null,Fe,t),[e.memoizedState,t]}function wl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function rx(){return wn().memoizedState}function sc(t,e,n,r){var i=$n();Fe.flags|=t,i.memoizedState=wl(1|e,n,void 0,r===void 0?null:r)}function xd(t,e,n,r){var i=wn();r=r===void 0?null:r;var s=void 0;if(it!==null){var o=it.memoizedState;if(s=o.destroy,r!==null&&dm(r,o.deps)){i.memoizedState=wl(e,n,s,r);return}}Fe.flags|=t,i.memoizedState=wl(1|e,n,s,r)}function Zy(t,e){return sc(8390656,8,t,e)}function pm(t,e){return xd(2048,8,t,e)}function ix(t,e){return xd(4,2,t,e)}function sx(t,e){return xd(4,4,t,e)}function ox(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ax(t,e,n){return n=n!=null?n.concat([t]):null,xd(4,4,ox.bind(null,e,t),n)}function mm(){}function lx(t,e){var n=wn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function ux(t,e){var n=wn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function cx(t,e,n){return fs&21?(Dn(n,e)||(n=mw(),Fe.lanes|=n,ps|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Gt=!0),t.memoizedState=n)}function mA(t,e){var n=Ee;Ee=n!==0&&4>n?n:4,t(!0);var r=Ch.transition;Ch.transition={};try{t(!1),e()}finally{Ee=n,Ch.transition=r}}function dx(){return wn().memoizedState}function gA(t,e,n){var r=vi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},hx(t))fx(e,n);else if(n=Gw(t,e,n,r),n!==null){var i=jt();Nn(n,t,r,i),px(n,e,r)}}function yA(t,e,n){var r=vi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(hx(t))fx(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Dn(a,o)){var u=e.interleaved;u===null?(i.next=i,om(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Gw(t,e,i,r),n!==null&&(i=jt(),Nn(n,t,r,i),px(n,e,r))}}function hx(t){var e=t.alternate;return t===Fe||e!==null&&e===Fe}function fx(t,e){Ya=Uc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function px(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qp(t,n)}}var Fc={readContext:_n,useCallback:Tt,useContext:Tt,useEffect:Tt,useImperativeHandle:Tt,useInsertionEffect:Tt,useLayoutEffect:Tt,useMemo:Tt,useReducer:Tt,useRef:Tt,useState:Tt,useDebugValue:Tt,useDeferredValue:Tt,useTransition:Tt,useMutableSource:Tt,useSyncExternalStore:Tt,useId:Tt,unstable_isNewReconciler:!1},vA={readContext:_n,useCallback:function(t,e){return $n().memoizedState=[t,e===void 0?null:e],t},useContext:_n,useEffect:Zy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,sc(4194308,4,ox.bind(null,e,t),n)},useLayoutEffect:function(t,e){return sc(4194308,4,t,e)},useInsertionEffect:function(t,e){return sc(4,2,t,e)},useMemo:function(t,e){var n=$n();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=$n();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=gA.bind(null,Fe,t),[r.memoizedState,t]},useRef:function(t){var e=$n();return t={current:t},e.memoizedState=t},useState:Jy,useDebugValue:mm,useDeferredValue:function(t){return $n().memoizedState=t},useTransition:function(){var t=Jy(!1),e=t[0];return t=mA.bind(null,t[1]),$n().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Fe,i=$n();if(je){if(n===void 0)throw Error(W(407));n=n()}else{if(n=e(),ct===null)throw Error(W(349));fs&30||Jw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Zy(ex.bind(null,r,s,t),[t]),r.flags|=2048,wl(9,Zw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=$n(),e=ct.identifierPrefix;if(je){var n=vr,r=yr;n=(r&~(1<<32-Pn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=vl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=pA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},_A={readContext:_n,useCallback:lx,useContext:_n,useEffect:pm,useImperativeHandle:ax,useInsertionEffect:ix,useLayoutEffect:sx,useMemo:ux,useReducer:Ph,useRef:rx,useState:function(){return Ph(_l)},useDebugValue:mm,useDeferredValue:function(t){var e=wn();return cx(e,it.memoizedState,t)},useTransition:function(){var t=Ph(_l)[0],e=wn().memoizedState;return[t,e]},useMutableSource:Yw,useSyncExternalStore:Xw,useId:dx,unstable_isNewReconciler:!1},wA={readContext:_n,useCallback:lx,useContext:_n,useEffect:pm,useImperativeHandle:ax,useInsertionEffect:ix,useLayoutEffect:sx,useMemo:ux,useReducer:Nh,useRef:rx,useState:function(){return Nh(_l)},useDebugValue:mm,useDeferredValue:function(t){var e=wn();return it===null?e.memoizedState=t:cx(e,it.memoizedState,t)},useTransition:function(){var t=Nh(_l)[0],e=wn().memoizedState;return[t,e]},useMutableSource:Yw,useSyncExternalStore:Xw,useId:dx,unstable_isNewReconciler:!1};function bn(t,e){if(t&&t.defaultProps){e=Be({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Uf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Be({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ed={isMounted:function(t){return(t=t._reactInternals)?Ts(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=jt(),i=vi(t),s=Er(r,i);s.payload=e,n!=null&&(s.callback=n),e=gi(t,s,i),e!==null&&(Nn(e,t,i,r),rc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=jt(),i=vi(t),s=Er(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=gi(t,s,i),e!==null&&(Nn(e,t,i,r),rc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=jt(),r=vi(t),i=Er(n,r);i.tag=2,e!=null&&(i.callback=e),e=gi(t,i,r),e!==null&&(Nn(e,t,r,n),rc(e,t,r))}};function ev(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!hl(n,r)||!hl(i,s):!0}function mx(t,e,n){var r=!1,i=ki,s=e.contextType;return typeof s=="object"&&s!==null?s=_n(s):(i=Qt(e)?ds:Pt.current,r=e.contextTypes,s=(r=r!=null)?Ao(t,i):ki),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ed,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function tv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ed.enqueueReplaceState(e,e.state,null)}function Ff(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},am(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=_n(s):(s=Qt(e)?ds:Pt.current,i.context=Ao(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Uf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ed.enqueueReplaceState(i,i.state,null),Mc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Co(t,e){try{var n="",r=e;do n+=KI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Dh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function zf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var xA=typeof WeakMap=="function"?WeakMap:Map;function gx(t,e,n){n=Er(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Bc||(Bc=!0,Xf=r),zf(t,e)},n}function yx(t,e,n){n=Er(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){zf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){zf(t,e),typeof r!="function"&&(yi===null?yi=new Set([this]):yi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function nv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new xA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=OA.bind(null,t,e,n),e.then(t,t))}function rv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function iv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Er(-1,1),e.tag=2,gi(n,e,1))),n.lanes|=1),t)}var EA=Dr.ReactCurrentOwner,Gt=!1;function Ot(t,e,n,r){e.child=t===null?qw(e,null,n,r):bo(e,t.child,n,r)}function sv(t,e,n,r,i){n=n.render;var s=e.ref;return vo(e,i),r=hm(t,e,n,r,s,i),n=fm(),t!==null&&!Gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,br(t,e,i)):(je&&n&&em(e),e.flags|=1,Ot(t,e,r,i),e.child)}function ov(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Tm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,vx(t,e,s,r,i)):(t=uc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:hl,n(o,r)&&t.ref===e.ref)return br(t,e,i)}return e.flags|=1,t=_i(s,r),t.ref=e.ref,t.return=e,e.child=t}function vx(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(hl(s,r)&&t.ref===e.ref)if(Gt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Gt=!0);else return e.lanes=t.lanes,br(t,e,i)}return Bf(t,e,n,r,i)}function _x(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Re(co,nn),nn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Re(co,nn),nn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Re(co,nn),nn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Re(co,nn),nn|=r;return Ot(t,e,i,n),e.child}function wx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Bf(t,e,n,r,i){var s=Qt(n)?ds:Pt.current;return s=Ao(e,s),vo(e,i),n=hm(t,e,n,r,s,i),r=fm(),t!==null&&!Gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,br(t,e,i)):(je&&r&&em(e),e.flags|=1,Ot(t,e,n,i),e.child)}function av(t,e,n,r,i){if(Qt(n)){var s=!0;Nc(e)}else s=!1;if(vo(e,i),e.stateNode===null)oc(t,e),mx(e,n,r),Ff(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=_n(d):(d=Qt(n)?ds:Pt.current,d=Ao(e,d));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==d)&&tv(e,o,r,d),ti=!1;var g=e.memoizedState;o.state=g,Mc(e,r,o,i),u=e.memoizedState,a!==r||g!==u||Kt.current||ti?(typeof f=="function"&&(Uf(e,n,f,r),u=e.memoizedState),(a=ti||ev(e,n,a,r,g,u,d))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=d,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Kw(t,e),a=e.memoizedProps,d=e.type===e.elementType?a:bn(e.type,a),o.props=d,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=_n(u):(u=Qt(n)?ds:Pt.current,u=Ao(e,u));var I=n.getDerivedStateFromProps;(f=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==m||g!==u)&&tv(e,o,r,u),ti=!1,g=e.memoizedState,o.state=g,Mc(e,r,o,i);var C=e.memoizedState;a!==m||g!==C||Kt.current||ti?(typeof I=="function"&&(Uf(e,n,I,r),C=e.memoizedState),(d=ti||ev(e,n,d,r,g,C,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return $f(t,e,n,r,s,i)}function $f(t,e,n,r,i,s){wx(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&qy(e,n,!1),br(t,e,s);r=e.stateNode,EA.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=bo(e,t.child,null,s),e.child=bo(e,null,a,s)):Ot(t,e,a,s),e.memoizedState=r.state,i&&qy(e,n,!0),e.child}function xx(t){var e=t.stateNode;e.pendingContext?Hy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Hy(t,e.context,!1),lm(t,e.containerInfo)}function lv(t,e,n,r,i){return ko(),nm(i),e.flags|=256,Ot(t,e,n,r),e.child}var Wf={dehydrated:null,treeContext:null,retryLane:0};function Hf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ex(t,e,n){var r=e.pendingProps,i=Ue.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Re(Ue,i&1),t===null)return Mf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Sd(o,r,0,null),t=us(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Hf(n),e.memoizedState=Wf,t):gm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return TA(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=_i(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=_i(a,s):(s=us(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Hf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Wf,r}return s=t.child,t=s.sibling,r=_i(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function gm(t,e){return e=Sd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Uu(t,e,n,r){return r!==null&&nm(r),bo(e,t.child,null,n),t=gm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function TA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Dh(Error(W(422))),Uu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Sd({mode:"visible",children:r.children},i,0,null),s=us(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&bo(e,t.child,null,o),e.child.memoizedState=Hf(o),e.memoizedState=Wf,s);if(!(e.mode&1))return Uu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(W(419)),r=Dh(s,r,void 0),Uu(t,e,o,r)}if(a=(o&t.childLanes)!==0,Gt||a){if(r=ct,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,kr(t,i),Nn(r,t,i,-1))}return Em(),r=Dh(Error(W(421))),Uu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=jA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,rn=mi(i.nextSibling),on=e,je=!0,Cn=null,t!==null&&(mn[gn++]=yr,mn[gn++]=vr,mn[gn++]=hs,yr=t.id,vr=t.overflow,hs=e),e=gm(e,r.children),e.flags|=4096,e)}function uv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Vf(t.return,e,n)}function Lh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Tx(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ot(t,e,r.children,n),r=Ue.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&uv(t,n,e);else if(t.tag===19)uv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Re(Ue,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Vc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Lh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Vc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Lh(e,!0,n,null,s);break;case"together":Lh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function oc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function br(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ps|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(W(153));if(e.child!==null){for(t=e.child,n=_i(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_i(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function IA(t,e,n){switch(e.tag){case 3:xx(e),ko();break;case 5:Qw(e);break;case 1:Qt(e.type)&&Nc(e);break;case 4:lm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Re(Oc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Re(Ue,Ue.current&1),e.flags|=128,null):n&e.child.childLanes?Ex(t,e,n):(Re(Ue,Ue.current&1),t=br(t,e,n),t!==null?t.sibling:null);Re(Ue,Ue.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Tx(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Re(Ue,Ue.current),r)break;return null;case 22:case 23:return e.lanes=0,_x(t,e,n)}return br(t,e,n)}var Ix,qf,Sx,Ax;Ix=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qf=function(){};Sx=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ss(Kn.current);var s=null;switch(n){case"input":i=pf(t,i),r=pf(t,r),s=[];break;case"select":i=Be({},i,{value:void 0}),r=Be({},r,{value:void 0}),s=[];break;case"textarea":i=yf(t,i),r=yf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Cc)}_f(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var a=i[d];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(sl.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var u=r[d];if(a=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==a&&(u!=null||a!=null))if(d==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(sl.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&Pe("scroll",t),s||a===u||(s=[])):(s=s||[]).push(d,u))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};Ax=function(t,e,n,r){n!==r&&(e.flags|=4)};function ka(t,e){if(!je)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function It(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function SA(t,e,n){var r=e.pendingProps;switch(tm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return It(e),null;case 1:return Qt(e.type)&&Pc(),It(e),null;case 3:return r=e.stateNode,Ro(),Le(Kt),Le(Pt),cm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Mu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Cn!==null&&(ep(Cn),Cn=null))),qf(t,e),It(e),null;case 5:um(e);var i=ss(yl.current);if(n=e.type,t!==null&&e.stateNode!=null)Sx(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(W(166));return It(e),null}if(t=ss(Kn.current),Mu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Wn]=e,r[ml]=s,t=(e.mode&1)!==0,n){case"dialog":Pe("cancel",r),Pe("close",r);break;case"iframe":case"object":case"embed":Pe("load",r);break;case"video":case"audio":for(i=0;i<Ma.length;i++)Pe(Ma[i],r);break;case"source":Pe("error",r);break;case"img":case"image":case"link":Pe("error",r),Pe("load",r);break;case"details":Pe("toggle",r);break;case"input":vy(r,s),Pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Pe("invalid",r);break;case"textarea":wy(r,s),Pe("invalid",r)}_f(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ju(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ju(r.textContent,a,t),i=["children",""+a]):sl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Pe("scroll",r)}switch(n){case"input":bu(r),_y(r,s,!0);break;case"textarea":bu(r),xy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Cc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ew(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Wn]=e,t[ml]=r,Ix(t,e,!1,!1),e.stateNode=t;e:{switch(o=wf(n,r),n){case"dialog":Pe("cancel",t),Pe("close",t),i=r;break;case"iframe":case"object":case"embed":Pe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ma.length;i++)Pe(Ma[i],t);i=r;break;case"source":Pe("error",t),i=r;break;case"img":case"image":case"link":Pe("error",t),Pe("load",t),i=r;break;case"details":Pe("toggle",t),i=r;break;case"input":vy(t,r),i=pf(t,r),Pe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Be({},r,{value:void 0}),Pe("invalid",t);break;case"textarea":wy(t,r),i=yf(t,r),Pe("invalid",t);break;default:i=r}_f(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?rw(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&tw(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ol(t,u):typeof u=="number"&&ol(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(sl.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Pe("scroll",t):u!=null&&Fp(t,s,u,o))}switch(n){case"input":bu(t),_y(t,r,!1);break;case"textarea":bu(t),xy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ai(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?po(t,!!r.multiple,s,!1):r.defaultValue!=null&&po(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Cc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return It(e),null;case 6:if(t&&e.stateNode!=null)Ax(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(W(166));if(n=ss(yl.current),ss(Kn.current),Mu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Wn]=e,(s=r.nodeValue!==n)&&(t=on,t!==null))switch(t.tag){case 3:ju(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ju(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Wn]=e,e.stateNode=r}return It(e),null;case 13:if(Le(Ue),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(je&&rn!==null&&e.mode&1&&!(e.flags&128))Ww(),ko(),e.flags|=98560,s=!1;else if(s=Mu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(W(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(W(317));s[Wn]=e}else ko(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;It(e),s=!1}else Cn!==null&&(ep(Cn),Cn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ue.current&1?st===0&&(st=3):Em())),e.updateQueue!==null&&(e.flags|=4),It(e),null);case 4:return Ro(),qf(t,e),t===null&&fl(e.stateNode.containerInfo),It(e),null;case 10:return sm(e.type._context),It(e),null;case 17:return Qt(e.type)&&Pc(),It(e),null;case 19:if(Le(Ue),s=e.memoizedState,s===null)return It(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ka(s,!1);else{if(st!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Vc(t),o!==null){for(e.flags|=128,ka(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Re(Ue,Ue.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ye()>Po&&(e.flags|=128,r=!0,ka(s,!1),e.lanes=4194304)}else{if(!r)if(t=Vc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ka(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!je)return It(e),null}else 2*Ye()-s.renderingStartTime>Po&&n!==1073741824&&(e.flags|=128,r=!0,ka(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ye(),e.sibling=null,n=Ue.current,Re(Ue,r?n&1|2:n&1),e):(It(e),null);case 22:case 23:return xm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?nn&1073741824&&(It(e),e.subtreeFlags&6&&(e.flags|=8192)):It(e),null;case 24:return null;case 25:return null}throw Error(W(156,e.tag))}function AA(t,e){switch(tm(e),e.tag){case 1:return Qt(e.type)&&Pc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ro(),Le(Kt),Le(Pt),cm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return um(e),null;case 13:if(Le(Ue),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(W(340));ko()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Le(Ue),null;case 4:return Ro(),null;case 10:return sm(e.type._context),null;case 22:case 23:return xm(),null;case 24:return null;default:return null}}var Fu=!1,bt=!1,kA=typeof WeakSet=="function"?WeakSet:Set,Q=null;function uo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){qe(t,e,r)}else n.current=null}function Gf(t,e,n){try{n()}catch(r){qe(t,e,r)}}var cv=!1;function bA(t,e){if(Cf=kc,t=Pw(),Zp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,d=0,f=0,m=t,g=null;t:for(;;){for(var I;m!==n||i!==0&&m.nodeType!==3||(a=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(I=m.firstChild)!==null;)g=m,m=I;for(;;){if(m===t)break t;if(g===n&&++d===i&&(a=o),g===s&&++f===r&&(u=o),(I=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=I}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pf={focusedElem:t,selectionRange:n},kc=!1,Q=e;Q!==null;)if(e=Q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Q=t;else for(;Q!==null;){e=Q;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var k=C.memoizedProps,P=C.memoizedState,E=e.stateNode,_=E.getSnapshotBeforeUpdate(e.elementType===e.type?k:bn(e.type,k),P);E.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(W(163))}}catch(O){qe(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,Q=t;break}Q=e.return}return C=cv,cv=!1,C}function Xa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Gf(e,n,s)}i=i.next}while(i!==r)}}function Td(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Kf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function kx(t){var e=t.alternate;e!==null&&(t.alternate=null,kx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Wn],delete e[ml],delete e[Lf],delete e[cA],delete e[dA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function bx(t){return t.tag===5||t.tag===3||t.tag===4}function dv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||bx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Cc));else if(r!==4&&(t=t.child,t!==null))for(Qf(t,e,n),t=t.sibling;t!==null;)Qf(t,e,n),t=t.sibling}function Yf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Yf(t,e,n),t=t.sibling;t!==null;)Yf(t,e,n),t=t.sibling}var pt=null,Rn=!1;function Gr(t,e,n){for(n=n.child;n!==null;)Rx(t,e,n),n=n.sibling}function Rx(t,e,n){if(Gn&&typeof Gn.onCommitFiberUnmount=="function")try{Gn.onCommitFiberUnmount(md,n)}catch{}switch(n.tag){case 5:bt||uo(n,e);case 6:var r=pt,i=Rn;pt=null,Gr(t,e,n),pt=r,Rn=i,pt!==null&&(Rn?(t=pt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):pt.removeChild(n.stateNode));break;case 18:pt!==null&&(Rn?(t=pt,n=n.stateNode,t.nodeType===8?kh(t.parentNode,n):t.nodeType===1&&kh(t,n),cl(t)):kh(pt,n.stateNode));break;case 4:r=pt,i=Rn,pt=n.stateNode.containerInfo,Rn=!0,Gr(t,e,n),pt=r,Rn=i;break;case 0:case 11:case 14:case 15:if(!bt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Gf(n,e,o),i=i.next}while(i!==r)}Gr(t,e,n);break;case 1:if(!bt&&(uo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){qe(n,e,a)}Gr(t,e,n);break;case 21:Gr(t,e,n);break;case 22:n.mode&1?(bt=(r=bt)||n.memoizedState!==null,Gr(t,e,n),bt=r):Gr(t,e,n);break;default:Gr(t,e,n)}}function hv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new kA),e.forEach(function(r){var i=MA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function kn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:pt=a.stateNode,Rn=!1;break e;case 3:pt=a.stateNode.containerInfo,Rn=!0;break e;case 4:pt=a.stateNode.containerInfo,Rn=!0;break e}a=a.return}if(pt===null)throw Error(W(160));Rx(s,o,i),pt=null,Rn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){qe(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Cx(e,t),e=e.sibling}function Cx(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kn(e,t),zn(t),r&4){try{Xa(3,t,t.return),Td(3,t)}catch(k){qe(t,t.return,k)}try{Xa(5,t,t.return)}catch(k){qe(t,t.return,k)}}break;case 1:kn(e,t),zn(t),r&512&&n!==null&&uo(n,n.return);break;case 5:if(kn(e,t),zn(t),r&512&&n!==null&&uo(n,n.return),t.flags&32){var i=t.stateNode;try{ol(i,"")}catch(k){qe(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&J0(i,s),wf(a,o);var d=wf(a,s);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?rw(i,m):f==="dangerouslySetInnerHTML"?tw(i,m):f==="children"?ol(i,m):Fp(i,f,m,d)}switch(a){case"input":mf(i,s);break;case"textarea":Z0(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var I=s.value;I!=null?po(i,!!s.multiple,I,!1):g!==!!s.multiple&&(s.defaultValue!=null?po(i,!!s.multiple,s.defaultValue,!0):po(i,!!s.multiple,s.multiple?[]:"",!1))}i[ml]=s}catch(k){qe(t,t.return,k)}}break;case 6:if(kn(e,t),zn(t),r&4){if(t.stateNode===null)throw Error(W(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){qe(t,t.return,k)}}break;case 3:if(kn(e,t),zn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{cl(e.containerInfo)}catch(k){qe(t,t.return,k)}break;case 4:kn(e,t),zn(t);break;case 13:kn(e,t),zn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(_m=Ye())),r&4&&hv(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(bt=(d=bt)||f,kn(e,t),bt=d):kn(e,t),zn(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!f&&t.mode&1)for(Q=t,f=t.child;f!==null;){for(m=Q=f;Q!==null;){switch(g=Q,I=g.child,g.tag){case 0:case 11:case 14:case 15:Xa(4,g,g.return);break;case 1:uo(g,g.return);var C=g.stateNode;if(typeof C.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(k){qe(r,n,k)}}break;case 5:uo(g,g.return);break;case 22:if(g.memoizedState!==null){pv(m);continue}}I!==null?(I.return=g,Q=I):pv(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=nw("display",o))}catch(k){qe(t,t.return,k)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(k){qe(t,t.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:kn(e,t),zn(t),r&4&&hv(t);break;case 21:break;default:kn(e,t),zn(t)}}function zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(bx(n)){var r=n;break e}n=n.return}throw Error(W(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ol(i,""),r.flags&=-33);var s=dv(t);Yf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=dv(t);Qf(t,a,o);break;default:throw Error(W(161))}}catch(u){qe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function RA(t,e,n){Q=t,Px(t)}function Px(t,e,n){for(var r=(t.mode&1)!==0;Q!==null;){var i=Q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Fu;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||bt;a=Fu;var d=bt;if(Fu=o,(bt=u)&&!d)for(Q=i;Q!==null;)o=Q,u=o.child,o.tag===22&&o.memoizedState!==null?mv(i):u!==null?(u.return=o,Q=u):mv(i);for(;s!==null;)Q=s,Px(s),s=s.sibling;Q=i,Fu=a,bt=d}fv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Q=s):fv(t)}}function fv(t){for(;Q!==null;){var e=Q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:bt||Td(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!bt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:bn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Xy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Xy(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&cl(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(W(163))}bt||e.flags&512&&Kf(e)}catch(g){qe(e,e.return,g)}}if(e===t){Q=null;break}if(n=e.sibling,n!==null){n.return=e.return,Q=n;break}Q=e.return}}function pv(t){for(;Q!==null;){var e=Q;if(e===t){Q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Q=n;break}Q=e.return}}function mv(t){for(;Q!==null;){var e=Q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Td(4,e)}catch(u){qe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){qe(e,i,u)}}var s=e.return;try{Kf(e)}catch(u){qe(e,s,u)}break;case 5:var o=e.return;try{Kf(e)}catch(u){qe(e,o,u)}}}catch(u){qe(e,e.return,u)}if(e===t){Q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Q=a;break}Q=e.return}}var CA=Math.ceil,zc=Dr.ReactCurrentDispatcher,ym=Dr.ReactCurrentOwner,vn=Dr.ReactCurrentBatchConfig,ye=0,ct=null,tt=null,yt=0,nn=0,co=Di(0),st=0,xl=null,ps=0,Id=0,vm=0,Ja=null,Ht=null,_m=0,Po=1/0,mr=null,Bc=!1,Xf=null,yi=null,zu=!1,ui=null,$c=0,Za=0,Jf=null,ac=-1,lc=0;function jt(){return ye&6?Ye():ac!==-1?ac:ac=Ye()}function vi(t){return t.mode&1?ye&2&&yt!==0?yt&-yt:fA.transition!==null?(lc===0&&(lc=mw()),lc):(t=Ee,t!==0||(t=window.event,t=t===void 0?16:Ew(t.type)),t):1}function Nn(t,e,n,r){if(50<Za)throw Za=0,Jf=null,Error(W(185));Vl(t,n,r),(!(ye&2)||t!==ct)&&(t===ct&&(!(ye&2)&&(Id|=n),st===4&&ri(t,yt)),Yt(t,r),n===1&&ye===0&&!(e.mode&1)&&(Po=Ye()+500,wd&&Li()))}function Yt(t,e){var n=t.callbackNode;fS(t,e);var r=Ac(t,t===ct?yt:0);if(r===0)n!==null&&Iy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Iy(n),e===1)t.tag===0?hA(gv.bind(null,t)):zw(gv.bind(null,t)),lA(function(){!(ye&6)&&Li()}),n=null;else{switch(gw(r)){case 1:n=Hp;break;case 4:n=fw;break;case 16:n=Sc;break;case 536870912:n=pw;break;default:n=Sc}n=Ux(n,Nx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Nx(t,e){if(ac=-1,lc=0,ye&6)throw Error(W(327));var n=t.callbackNode;if(_o()&&t.callbackNode!==n)return null;var r=Ac(t,t===ct?yt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Wc(t,r);else{e=r;var i=ye;ye|=2;var s=Lx();(ct!==t||yt!==e)&&(mr=null,Po=Ye()+500,ls(t,e));do try{DA();break}catch(a){Dx(t,a)}while(!0);im(),zc.current=s,ye=i,tt!==null?e=0:(ct=null,yt=0,e=st)}if(e!==0){if(e===2&&(i=Sf(t),i!==0&&(r=i,e=Zf(t,i))),e===1)throw n=xl,ls(t,0),ri(t,r),Yt(t,Ye()),n;if(e===6)ri(t,r);else{if(i=t.current.alternate,!(r&30)&&!PA(i)&&(e=Wc(t,r),e===2&&(s=Sf(t),s!==0&&(r=s,e=Zf(t,s))),e===1))throw n=xl,ls(t,0),ri(t,r),Yt(t,Ye()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(W(345));case 2:es(t,Ht,mr);break;case 3:if(ri(t,r),(r&130023424)===r&&(e=_m+500-Ye(),10<e)){if(Ac(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){jt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Df(es.bind(null,t,Ht,mr),e);break}es(t,Ht,mr);break;case 4:if(ri(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Pn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*CA(r/1960))-r,10<r){t.timeoutHandle=Df(es.bind(null,t,Ht,mr),r);break}es(t,Ht,mr);break;case 5:es(t,Ht,mr);break;default:throw Error(W(329))}}}return Yt(t,Ye()),t.callbackNode===n?Nx.bind(null,t):null}function Zf(t,e){var n=Ja;return t.current.memoizedState.isDehydrated&&(ls(t,e).flags|=256),t=Wc(t,e),t!==2&&(e=Ht,Ht=n,e!==null&&ep(e)),t}function ep(t){Ht===null?Ht=t:Ht.push.apply(Ht,t)}function PA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Dn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ri(t,e){for(e&=~vm,e&=~Id,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Pn(e),r=1<<n;t[n]=-1,e&=~r}}function gv(t){if(ye&6)throw Error(W(327));_o();var e=Ac(t,0);if(!(e&1))return Yt(t,Ye()),null;var n=Wc(t,e);if(t.tag!==0&&n===2){var r=Sf(t);r!==0&&(e=r,n=Zf(t,r))}if(n===1)throw n=xl,ls(t,0),ri(t,e),Yt(t,Ye()),n;if(n===6)throw Error(W(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,es(t,Ht,mr),Yt(t,Ye()),null}function wm(t,e){var n=ye;ye|=1;try{return t(e)}finally{ye=n,ye===0&&(Po=Ye()+500,wd&&Li())}}function ms(t){ui!==null&&ui.tag===0&&!(ye&6)&&_o();var e=ye;ye|=1;var n=vn.transition,r=Ee;try{if(vn.transition=null,Ee=1,t)return t()}finally{Ee=r,vn.transition=n,ye=e,!(ye&6)&&Li()}}function xm(){nn=co.current,Le(co)}function ls(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,aA(n)),tt!==null)for(n=tt.return;n!==null;){var r=n;switch(tm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Pc();break;case 3:Ro(),Le(Kt),Le(Pt),cm();break;case 5:um(r);break;case 4:Ro();break;case 13:Le(Ue);break;case 19:Le(Ue);break;case 10:sm(r.type._context);break;case 22:case 23:xm()}n=n.return}if(ct=t,tt=t=_i(t.current,null),yt=nn=e,st=0,xl=null,vm=Id=ps=0,Ht=Ja=null,is!==null){for(e=0;e<is.length;e++)if(n=is[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}is=null}return t}function Dx(t,e){do{var n=tt;try{if(im(),ic.current=Fc,Uc){for(var r=Fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Uc=!1}if(fs=0,ut=it=Fe=null,Ya=!1,vl=0,ym.current=null,n===null||n.return===null){st=1,xl=e,tt=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=yt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,f=a,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var I=rv(o);if(I!==null){I.flags&=-257,iv(I,o,a,s,e),I.mode&1&&nv(s,d,e),e=I,u=d;var C=e.updateQueue;if(C===null){var k=new Set;k.add(u),e.updateQueue=k}else C.add(u);break e}else{if(!(e&1)){nv(s,d,e),Em();break e}u=Error(W(426))}}else if(je&&a.mode&1){var P=rv(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),iv(P,o,a,s,e),nm(Co(u,a));break e}}s=u=Co(u,a),st!==4&&(st=2),Ja===null?Ja=[s]:Ja.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=gx(s,u,e);Yy(s,E);break e;case 1:a=u;var _=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(yi===null||!yi.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=yx(s,a,e);Yy(s,O);break e}}s=s.return}while(s!==null)}jx(n)}catch(j){e=j,tt===n&&n!==null&&(tt=n=n.return);continue}break}while(!0)}function Lx(){var t=zc.current;return zc.current=Fc,t===null?Fc:t}function Em(){(st===0||st===3||st===2)&&(st=4),ct===null||!(ps&268435455)&&!(Id&268435455)||ri(ct,yt)}function Wc(t,e){var n=ye;ye|=2;var r=Lx();(ct!==t||yt!==e)&&(mr=null,ls(t,e));do try{NA();break}catch(i){Dx(t,i)}while(!0);if(im(),ye=n,zc.current=r,tt!==null)throw Error(W(261));return ct=null,yt=0,st}function NA(){for(;tt!==null;)Ox(tt)}function DA(){for(;tt!==null&&!iS();)Ox(tt)}function Ox(t){var e=Vx(t.alternate,t,nn);t.memoizedProps=t.pendingProps,e===null?jx(t):tt=e,ym.current=null}function jx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=AA(n,e),n!==null){n.flags&=32767,tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{st=6,tt=null;return}}else if(n=SA(n,e,nn),n!==null){tt=n;return}if(e=e.sibling,e!==null){tt=e;return}tt=e=t}while(e!==null);st===0&&(st=5)}function es(t,e,n){var r=Ee,i=vn.transition;try{vn.transition=null,Ee=1,LA(t,e,n,r)}finally{vn.transition=i,Ee=r}return null}function LA(t,e,n,r){do _o();while(ui!==null);if(ye&6)throw Error(W(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(W(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(pS(t,s),t===ct&&(tt=ct=null,yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zu||(zu=!0,Ux(Sc,function(){return _o(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=vn.transition,vn.transition=null;var o=Ee;Ee=1;var a=ye;ye|=4,ym.current=null,bA(t,n),Cx(n,t),eA(Pf),kc=!!Cf,Pf=Cf=null,t.current=n,RA(n),sS(),ye=a,Ee=o,vn.transition=s}else t.current=n;if(zu&&(zu=!1,ui=t,$c=i),s=t.pendingLanes,s===0&&(yi=null),lS(n.stateNode),Yt(t,Ye()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Bc)throw Bc=!1,t=Xf,Xf=null,t;return $c&1&&t.tag!==0&&_o(),s=t.pendingLanes,s&1?t===Jf?Za++:(Za=0,Jf=t):Za=0,Li(),null}function _o(){if(ui!==null){var t=gw($c),e=vn.transition,n=Ee;try{if(vn.transition=null,Ee=16>t?16:t,ui===null)var r=!1;else{if(t=ui,ui=null,$c=0,ye&6)throw Error(W(331));var i=ye;for(ye|=4,Q=t.current;Q!==null;){var s=Q,o=s.child;if(Q.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var d=a[u];for(Q=d;Q!==null;){var f=Q;switch(f.tag){case 0:case 11:case 15:Xa(8,f,s)}var m=f.child;if(m!==null)m.return=f,Q=m;else for(;Q!==null;){f=Q;var g=f.sibling,I=f.return;if(kx(f),f===d){Q=null;break}if(g!==null){g.return=I,Q=g;break}Q=I}}}var C=s.alternate;if(C!==null){var k=C.child;if(k!==null){C.child=null;do{var P=k.sibling;k.sibling=null,k=P}while(k!==null)}}Q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Q=o;else e:for(;Q!==null;){if(s=Q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Xa(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,Q=E;break e}Q=s.return}}var _=t.current;for(Q=_;Q!==null;){o=Q;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,Q=S;else e:for(o=_;Q!==null;){if(a=Q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Td(9,a)}}catch(j){qe(a,a.return,j)}if(a===o){Q=null;break e}var O=a.sibling;if(O!==null){O.return=a.return,Q=O;break e}Q=a.return}}if(ye=i,Li(),Gn&&typeof Gn.onPostCommitFiberRoot=="function")try{Gn.onPostCommitFiberRoot(md,t)}catch{}r=!0}return r}finally{Ee=n,vn.transition=e}}return!1}function yv(t,e,n){e=Co(n,e),e=gx(t,e,1),t=gi(t,e,1),e=jt(),t!==null&&(Vl(t,1,e),Yt(t,e))}function qe(t,e,n){if(t.tag===3)yv(t,t,n);else for(;e!==null;){if(e.tag===3){yv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yi===null||!yi.has(r))){t=Co(n,t),t=yx(e,t,1),e=gi(e,t,1),t=jt(),e!==null&&(Vl(e,1,t),Yt(e,t));break}}e=e.return}}function OA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=jt(),t.pingedLanes|=t.suspendedLanes&n,ct===t&&(yt&n)===n&&(st===4||st===3&&(yt&130023424)===yt&&500>Ye()-_m?ls(t,0):vm|=n),Yt(t,e)}function Mx(t,e){e===0&&(t.mode&1?(e=Pu,Pu<<=1,!(Pu&130023424)&&(Pu=4194304)):e=1);var n=jt();t=kr(t,e),t!==null&&(Vl(t,e,n),Yt(t,n))}function jA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Mx(t,n)}function MA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(W(314))}r!==null&&r.delete(e),Mx(t,n)}var Vx;Vx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Kt.current)Gt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Gt=!1,IA(t,e,n);Gt=!!(t.flags&131072)}else Gt=!1,je&&e.flags&1048576&&Bw(e,Lc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;oc(t,e),t=e.pendingProps;var i=Ao(e,Pt.current);vo(e,n),i=hm(null,e,r,t,i,n);var s=fm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qt(r)?(s=!0,Nc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,am(e),i.updater=Ed,e.stateNode=i,i._reactInternals=e,Ff(e,r,t,n),e=$f(null,e,r,!0,s,n)):(e.tag=0,je&&s&&em(e),Ot(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(oc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=UA(r),t=bn(r,t),i){case 0:e=Bf(null,e,r,t,n);break e;case 1:e=av(null,e,r,t,n);break e;case 11:e=sv(null,e,r,t,n);break e;case 14:e=ov(null,e,r,bn(r.type,t),n);break e}throw Error(W(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bn(r,i),Bf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bn(r,i),av(t,e,r,i,n);case 3:e:{if(xx(e),t===null)throw Error(W(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Kw(t,e),Mc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Co(Error(W(423)),e),e=lv(t,e,r,n,i);break e}else if(r!==i){i=Co(Error(W(424)),e),e=lv(t,e,r,n,i);break e}else for(rn=mi(e.stateNode.containerInfo.firstChild),on=e,je=!0,Cn=null,n=qw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ko(),r===i){e=br(t,e,n);break e}Ot(t,e,r,n)}e=e.child}return e;case 5:return Qw(e),t===null&&Mf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Nf(r,i)?o=null:s!==null&&Nf(r,s)&&(e.flags|=32),wx(t,e),Ot(t,e,o,n),e.child;case 6:return t===null&&Mf(e),null;case 13:return Ex(t,e,n);case 4:return lm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=bo(e,null,r,n):Ot(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bn(r,i),sv(t,e,r,i,n);case 7:return Ot(t,e,e.pendingProps,n),e.child;case 8:return Ot(t,e,e.pendingProps.children,n),e.child;case 12:return Ot(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Re(Oc,r._currentValue),r._currentValue=o,s!==null)if(Dn(s.value,o)){if(s.children===i.children&&!Kt.current){e=br(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Er(-1,n&-n),u.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?u.next=u:(u.next=f.next,f.next=u),d.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Vf(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(W(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Vf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ot(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,vo(e,n),i=_n(i),r=r(i),e.flags|=1,Ot(t,e,r,n),e.child;case 14:return r=e.type,i=bn(r,e.pendingProps),i=bn(r.type,i),ov(t,e,r,i,n);case 15:return vx(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bn(r,i),oc(t,e),e.tag=1,Qt(r)?(t=!0,Nc(e)):t=!1,vo(e,n),mx(e,r,i),Ff(e,r,i,n),$f(null,e,r,!0,t,n);case 19:return Tx(t,e,n);case 22:return _x(t,e,n)}throw Error(W(156,e.tag))};function Ux(t,e){return hw(t,e)}function VA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(t,e,n,r){return new VA(t,e,n,r)}function Tm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function UA(t){if(typeof t=="function")return Tm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Bp)return 11;if(t===$p)return 14}return 2}function _i(t,e){var n=t.alternate;return n===null?(n=yn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function uc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Tm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case eo:return us(n.children,i,s,e);case zp:o=8,i|=8;break;case cf:return t=yn(12,n,e,i|2),t.elementType=cf,t.lanes=s,t;case df:return t=yn(13,n,e,i),t.elementType=df,t.lanes=s,t;case hf:return t=yn(19,n,e,i),t.elementType=hf,t.lanes=s,t;case Q0:return Sd(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case G0:o=10;break e;case K0:o=9;break e;case Bp:o=11;break e;case $p:o=14;break e;case ei:o=16,r=null;break e}throw Error(W(130,t==null?t:typeof t,""))}return e=yn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function us(t,e,n,r){return t=yn(7,t,r,e),t.lanes=n,t}function Sd(t,e,n,r){return t=yn(22,t,r,e),t.elementType=Q0,t.lanes=n,t.stateNode={isHidden:!1},t}function Oh(t,e,n){return t=yn(6,t,null,e),t.lanes=n,t}function jh(t,e,n){return e=yn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function FA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gh(0),this.expirationTimes=gh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Im(t,e,n,r,i,s,o,a,u){return t=new FA(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=yn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},am(s),t}function zA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Fx(t){if(!t)return ki;t=t._reactInternals;e:{if(Ts(t)!==t||t.tag!==1)throw Error(W(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(W(171))}if(t.tag===1){var n=t.type;if(Qt(n))return Fw(t,n,e)}return e}function zx(t,e,n,r,i,s,o,a,u){return t=Im(n,r,!0,t,i,s,o,a,u),t.context=Fx(null),n=t.current,r=jt(),i=vi(n),s=Er(r,i),s.callback=e??null,gi(n,s,i),t.current.lanes=i,Vl(t,i,r),Yt(t,r),t}function Ad(t,e,n,r){var i=e.current,s=jt(),o=vi(i);return n=Fx(n),e.context===null?e.context=n:e.pendingContext=n,e=Er(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=gi(i,e,o),t!==null&&(Nn(t,i,o,s),rc(t,i,o)),o}function Hc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function vv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Sm(t,e){vv(t,e),(t=t.alternate)&&vv(t,e)}function BA(){return null}var Bx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Am(t){this._internalRoot=t}kd.prototype.render=Am.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(W(409));Ad(t,e,null,null)};kd.prototype.unmount=Am.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ms(function(){Ad(null,t,null,null)}),e[Ar]=null}};function kd(t){this._internalRoot=t}kd.prototype.unstable_scheduleHydration=function(t){if(t){var e=_w();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ni.length&&e!==0&&e<ni[n].priority;n++);ni.splice(n,0,t),n===0&&xw(t)}};function km(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function _v(){}function $A(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=Hc(o);s.call(d)}}var o=zx(e,r,t,0,null,!1,!1,"",_v);return t._reactRootContainer=o,t[Ar]=o.current,fl(t.nodeType===8?t.parentNode:t),ms(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var d=Hc(u);a.call(d)}}var u=Im(t,0,!1,null,null,!1,!1,"",_v);return t._reactRootContainer=u,t[Ar]=u.current,fl(t.nodeType===8?t.parentNode:t),ms(function(){Ad(e,u,n,r)}),u}function Rd(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Hc(o);a.call(u)}}Ad(e,o,t,i)}else o=$A(n,e,t,i,r);return Hc(o)}yw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ja(e.pendingLanes);n!==0&&(qp(e,n|1),Yt(e,Ye()),!(ye&6)&&(Po=Ye()+500,Li()))}break;case 13:ms(function(){var r=kr(t,1);if(r!==null){var i=jt();Nn(r,t,1,i)}}),Sm(t,1)}};Gp=function(t){if(t.tag===13){var e=kr(t,134217728);if(e!==null){var n=jt();Nn(e,t,134217728,n)}Sm(t,134217728)}};vw=function(t){if(t.tag===13){var e=vi(t),n=kr(t,e);if(n!==null){var r=jt();Nn(n,t,e,r)}Sm(t,e)}};_w=function(){return Ee};ww=function(t,e){var n=Ee;try{return Ee=t,e()}finally{Ee=n}};Ef=function(t,e,n){switch(e){case"input":if(mf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=_d(r);if(!i)throw Error(W(90));X0(r),mf(r,i)}}}break;case"textarea":Z0(t,n);break;case"select":e=n.value,e!=null&&po(t,!!n.multiple,e,!1)}};ow=wm;aw=ms;var WA={usingClientEntryPoint:!1,Events:[Fl,io,_d,iw,sw,wm]},ba={findFiberByHostInstance:rs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},HA={bundleType:ba.bundleType,version:ba.version,rendererPackageName:ba.rendererPackageName,rendererConfig:ba.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=cw(t),t===null?null:t.stateNode},findFiberByHostInstance:ba.findFiberByHostInstance||BA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bu.isDisabled&&Bu.supportsFiber)try{md=Bu.inject(HA),Gn=Bu}catch{}}ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=WA;ln.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!km(e))throw Error(W(200));return zA(t,e,null,n)};ln.createRoot=function(t,e){if(!km(t))throw Error(W(299));var n=!1,r="",i=Bx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Im(t,1,!1,null,null,n,!1,r,i),t[Ar]=e.current,fl(t.nodeType===8?t.parentNode:t),new Am(e)};ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(W(188)):(t=Object.keys(t).join(","),Error(W(268,t)));return t=cw(e),t=t===null?null:t.stateNode,t};ln.flushSync=function(t){return ms(t)};ln.hydrate=function(t,e,n){if(!bd(e))throw Error(W(200));return Rd(null,t,e,!0,n)};ln.hydrateRoot=function(t,e,n){if(!km(t))throw Error(W(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Bx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=zx(e,null,t,1,n??null,i,!1,s,o),t[Ar]=e.current,fl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new kd(e)};ln.render=function(t,e,n){if(!bd(e))throw Error(W(200));return Rd(null,t,e,!1,n)};ln.unmountComponentAtNode=function(t){if(!bd(t))throw Error(W(40));return t._reactRootContainer?(ms(function(){Rd(null,null,t,!1,function(){t._reactRootContainer=null,t[Ar]=null})}),!0):!1};ln.unstable_batchedUpdates=wm;ln.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!bd(n))throw Error(W(200));if(t==null||t._reactInternals===void 0)throw Error(W(38));return Rd(t,e,n,!1,r)};ln.version="18.3.1-next-f1338f8080-20240426";function $x(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($x)}catch(t){console.error(t)}}$x(),$0.exports=ln;var qA=$0.exports,wv=qA;lf.createRoot=wv.createRoot,lf.hydrateRoot=wv.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function El(){return El=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},El.apply(null,arguments)}var ci;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ci||(ci={}));const xv="popstate";function GA(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:u=""}=Is(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),tp("",{pathname:o,search:a,hash:u},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let u=i.location.href,d=u.indexOf("#");a=d===-1?u:u.slice(0,d)}return a+"#"+(typeof s=="string"?s:qc(s))}function r(i,s){bm(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return QA(e,n,r,t)}function ze(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function bm(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function KA(){return Math.random().toString(36).substr(2,8)}function Ev(t,e){return{usr:t.state,key:t.key,idx:e}}function tp(t,e,n,r){return n===void 0&&(n=null),El({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Is(e):e,{state:n,key:e&&e.key||r||KA()})}function qc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Is(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function QA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=ci.Pop,u=null,d=f();d==null&&(d=0,o.replaceState(El({},o.state,{idx:d}),""));function f(){return(o.state||{idx:null}).idx}function m(){a=ci.Pop;let P=f(),E=P==null?null:P-d;d=P,u&&u({action:a,location:k.location,delta:E})}function g(P,E){a=ci.Push;let _=tp(k.location,P,E);n&&n(_,P),d=f()+1;let S=Ev(_,d),O=k.createHref(_);try{o.pushState(S,"",O)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(O)}s&&u&&u({action:a,location:k.location,delta:1})}function I(P,E){a=ci.Replace;let _=tp(k.location,P,E);n&&n(_,P),d=f();let S=Ev(_,d),O=k.createHref(_);o.replaceState(S,"",O),s&&u&&u({action:a,location:k.location,delta:0})}function C(P){let E=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof P=="string"?P:qc(P);return _=_.replace(/ $/,"%20"),ze(E,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,E)}let k={get action(){return a},get location(){return t(i,o)},listen(P){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(xv,m),u=P,()=>{i.removeEventListener(xv,m),u=null}},createHref(P){return e(i,P)},createURL:C,encodeLocation(P){let E=C(P);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:g,replace:I,go(P){return o.go(P)}};return k}var Tv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Tv||(Tv={}));function YA(t,e,n){return n===void 0&&(n="/"),XA(t,e,n)}function XA(t,e,n,r){let i=typeof e=="string"?Is(e):e,s=No(i.pathname||"/",n);if(s==null)return null;let o=Wx(t);JA(o);let a=null,u=uk(s);for(let d=0;a==null&&d<o.length;++d)a=ak(o[d],u);return a}function Wx(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(ze(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=wi([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(ze(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Wx(s.children,e,f,d)),!(s.path==null&&!s.index)&&e.push({path:d,score:sk(d,s.index),routesMeta:f})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of Hx(s.path))i(s,o,u)}),e}function Hx(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Hx(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function JA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:ok(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ZA=/^:[\w-]+$/,ek=3,tk=2,nk=1,rk=10,ik=-2,Iv=t=>t==="*";function sk(t,e){let n=t.split("/"),r=n.length;return n.some(Iv)&&(r+=ik),e&&(r+=tk),n.filter(i=>!Iv(i)).reduce((i,s)=>i+(ZA.test(s)?ek:s===""?nk:rk),r)}function ok(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function ak(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],d=a===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",m=np({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},f),g=u.route;if(!m)return null;Object.assign(i,m.params),o.push({params:i,pathname:wi([s,m.pathname]),pathnameBase:hk(wi([s,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(s=wi([s,m.pathnameBase]))}return o}function np(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=lk(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((d,f,m)=>{let{paramName:g,isOptional:I}=f;if(g==="*"){let k=a[m]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const C=a[m];return I&&!C?d[g]=void 0:d[g]=(C||"").replace(/%2F/g,"/"),d},{}),pathname:s,pathnameBase:o,pattern:t}}function lk(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),bm(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function uk(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return bm(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function No(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function ck(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Is(t):t,s;return n?(n=qx(n),n.startsWith("/")?s=Sv(n.substring(1),"/"):s=Sv(n,e)):s=e,{pathname:s,search:fk(r),hash:pk(i)}}function Sv(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Mh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function dk(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Rm(t,e){let n=dk(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Cm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Is(t):(i=El({},t),ze(!i.pathname||!i.pathname.includes("?"),Mh("?","pathname","search",i)),ze(!i.pathname||!i.pathname.includes("#"),Mh("#","pathname","hash",i)),ze(!i.search||!i.search.includes("#"),Mh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let m=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}a=m>=0?e[m]:"/"}let u=ck(i,a),d=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||f)&&(u.pathname+="/"),u}const qx=t=>t.replace(/\/\/+/g,"/"),wi=t=>qx(t.join("/")),hk=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),fk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,pk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function mk(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Gx=["post","put","patch","delete"];new Set(Gx);const gk=["get",...Gx];new Set(gk);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tl(){return Tl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Tl.apply(null,arguments)}const Cd=R.createContext(null),Kx=R.createContext(null),Lr=R.createContext(null),Pd=R.createContext(null),Or=R.createContext({outlet:null,matches:[],isDataRoute:!1}),Qx=R.createContext(null);function yk(t,e){let{relative:n}=e===void 0?{}:e;Ho()||ze(!1);let{basename:r,navigator:i}=R.useContext(Lr),{hash:s,pathname:o,search:a}=Nd(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:wi([r,o])),i.createHref({pathname:u,search:a,hash:s})}function Ho(){return R.useContext(Pd)!=null}function Ss(){return Ho()||ze(!1),R.useContext(Pd).location}function Yx(t){R.useContext(Lr).static||R.useLayoutEffect(t)}function jr(){let{isDataRoute:t}=R.useContext(Or);return t?Ck():vk()}function vk(){Ho()||ze(!1);let t=R.useContext(Cd),{basename:e,future:n,navigator:r}=R.useContext(Lr),{matches:i}=R.useContext(Or),{pathname:s}=Ss(),o=JSON.stringify(Rm(i,n.v7_relativeSplatPath)),a=R.useRef(!1);return Yx(()=>{a.current=!0}),R.useCallback(function(d,f){if(f===void 0&&(f={}),!a.current)return;if(typeof d=="number"){r.go(d);return}let m=Cm(d,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:wi([e,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[e,r,o,s,t])}function Xx(){let{matches:t}=R.useContext(Or),e=t[t.length-1];return e?e.params:{}}function Nd(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=R.useContext(Lr),{matches:i}=R.useContext(Or),{pathname:s}=Ss(),o=JSON.stringify(Rm(i,r.v7_relativeSplatPath));return R.useMemo(()=>Cm(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function _k(t,e){return wk(t,e)}function wk(t,e,n,r){Ho()||ze(!1);let{navigator:i}=R.useContext(Lr),{matches:s}=R.useContext(Or),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let d=Ss(),f;if(e){var m;let P=typeof e=="string"?Is(e):e;u==="/"||(m=P.pathname)!=null&&m.startsWith(u)||ze(!1),f=P}else f=d;let g=f.pathname||"/",I=g;if(u!=="/"){let P=u.replace(/^\//,"").split("/");I="/"+g.replace(/^\//,"").split("/").slice(P.length).join("/")}let C=YA(t,{pathname:I}),k=Sk(C&&C.map(P=>Object.assign({},P,{params:Object.assign({},a,P.params),pathname:wi([u,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?u:wi([u,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),s,n,r);return e&&k?R.createElement(Pd.Provider,{value:{location:Tl({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:ci.Pop}},k):k}function xk(){let t=Rk(),e=mk(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},e),n?R.createElement("pre",{style:i},n):null,null)}const Ek=R.createElement(xk,null);class Tk extends R.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?R.createElement(Or.Provider,{value:this.props.routeContext},R.createElement(Qx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ik(t){let{routeContext:e,match:n,children:r}=t,i=R.useContext(Cd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),R.createElement(Or.Provider,{value:e},r)}function Sk(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let f=o.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id])!==void 0);f>=0||ze(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let m=o[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=f),m.route.id){let{loaderData:g,errors:I}=n,C=m.route.loader&&g[m.route.id]===void 0&&(!I||I[m.route.id]===void 0);if(m.route.lazy||C){u=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((f,m,g)=>{let I,C=!1,k=null,P=null;n&&(I=a&&m.route.id?a[m.route.id]:void 0,k=m.route.errorElement||Ek,u&&(d<0&&g===0?(Pk("route-fallback"),C=!0,P=null):d===g&&(C=!0,P=m.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,g+1)),_=()=>{let S;return I?S=k:C?S=P:m.route.Component?S=R.createElement(m.route.Component,null):m.route.element?S=m.route.element:S=f,R.createElement(Ik,{match:m,routeContext:{outlet:f,matches:E,isDataRoute:n!=null},children:S})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?R.createElement(Tk,{location:n.location,revalidation:n.revalidation,component:k,error:I,children:_(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):_()},null)}var Jx=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Jx||{}),Zx=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Zx||{});function Ak(t){let e=R.useContext(Cd);return e||ze(!1),e}function kk(t){let e=R.useContext(Kx);return e||ze(!1),e}function bk(t){let e=R.useContext(Or);return e||ze(!1),e}function eE(t){let e=bk(),n=e.matches[e.matches.length-1];return n.route.id||ze(!1),n.route.id}function Rk(){var t;let e=R.useContext(Qx),n=kk(),r=eE();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Ck(){let{router:t}=Ak(Jx.UseNavigateStable),e=eE(Zx.UseNavigateStable),n=R.useRef(!1);return Yx(()=>{n.current=!0}),R.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Tl({fromRouteId:e},s)))},[t,e])}const Av={};function Pk(t,e,n){Av[t]||(Av[t]=!0)}function Nk(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Dk(t){let{to:e,replace:n,state:r,relative:i}=t;Ho()||ze(!1);let{future:s,static:o}=R.useContext(Lr),{matches:a}=R.useContext(Or),{pathname:u}=Ss(),d=jr(),f=Cm(e,Rm(a,s.v7_relativeSplatPath),u,i==="path"),m=JSON.stringify(f);return R.useEffect(()=>d(JSON.parse(m),{replace:n,state:r,relative:i}),[d,m,i,n,r]),null}function en(t){ze(!1)}function Lk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ci.Pop,navigator:s,static:o=!1,future:a}=t;Ho()&&ze(!1);let u=e.replace(/^\/*/,"/"),d=R.useMemo(()=>({basename:u,navigator:s,static:o,future:Tl({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=Is(r));let{pathname:f="/",search:m="",hash:g="",state:I=null,key:C="default"}=r,k=R.useMemo(()=>{let P=No(f,u);return P==null?null:{location:{pathname:P,search:m,hash:g,state:I,key:C},navigationType:i}},[u,f,m,g,I,C,i]);return k==null?null:R.createElement(Lr.Provider,{value:d},R.createElement(Pd.Provider,{children:n,value:k}))}function Ok(t){let{children:e,location:n}=t;return _k(rp(e),n)}new Promise(()=>{});function rp(t,e){e===void 0&&(e=[]);let n=[];return R.Children.forEach(t,(r,i)=>{if(!R.isValidElement(r))return;let s=[...e,i];if(r.type===R.Fragment){n.push.apply(n,rp(r.props.children,s));return}r.type!==en&&ze(!1),!r.props.index||!r.props.children||ze(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=rp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gc(){return Gc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Gc.apply(null,arguments)}function tE(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}function jk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Mk(t,e){return t.button===0&&(!e||e==="_self")&&!jk(t)}function ip(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let r=t[n];return e.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function Vk(t,e){let n=ip(t);return e&&e.forEach((r,i)=>{n.has(i)||e.getAll(i).forEach(s=>{n.append(i,s)})}),n}const Uk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Fk=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],zk="6";try{window.__reactRouterVersion=zk}catch{}const Bk=R.createContext({isTransitioning:!1}),$k="startTransition",kv=OI[$k];function Wk(t){let{basename:e,children:n,future:r,window:i}=t,s=R.useRef();s.current==null&&(s.current=GA({window:i,v5Compat:!0}));let o=s.current,[a,u]=R.useState({action:o.action,location:o.location}),{v7_startTransition:d}=r||{},f=R.useCallback(m=>{d&&kv?kv(()=>u(m)):u(m)},[u,d]);return R.useLayoutEffect(()=>o.listen(f),[o,f]),R.useEffect(()=>Nk(r),[r]),R.createElement(Lk,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const Hk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ne=R.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:d,preventScrollReset:f,viewTransition:m}=e,g=tE(e,Uk),{basename:I}=R.useContext(Lr),C,k=!1;if(typeof d=="string"&&qk.test(d)&&(C=d,Hk))try{let S=new URL(window.location.href),O=d.startsWith("//")?new URL(S.protocol+d):new URL(d),j=No(O.pathname,I);O.origin===S.origin&&j!=null?d=j+O.search+O.hash:k=!0}catch{}let P=yk(d,{relative:i}),E=Qk(d,{replace:o,state:a,target:u,preventScrollReset:f,relative:i,viewTransition:m});function _(S){r&&r(S),S.defaultPrevented||E(S)}return R.createElement("a",Gc({},g,{href:C||P,onClick:k||s?r:_,ref:n,target:u}))}),Gk=R.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:u,viewTransition:d,children:f}=e,m=tE(e,Fk),g=Nd(u,{relative:m.relative}),I=Ss(),C=R.useContext(Kx),{navigator:k,basename:P}=R.useContext(Lr),E=C!=null&&Yk(g)&&d===!0,_=k.encodeLocation?k.encodeLocation(g).pathname:g.pathname,S=I.pathname,O=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;i||(S=S.toLowerCase(),O=O?O.toLowerCase():null,_=_.toLowerCase()),O&&P&&(O=No(O,P)||O);const j=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let D=S===_||!o&&S.startsWith(_)&&S.charAt(j)==="/",x=O!=null&&(O===_||!o&&O.startsWith(_)&&O.charAt(_.length)==="/"),y={isActive:D,isPending:x,isTransitioning:E},T=D?r:void 0,A;typeof s=="function"?A=s(y):A=[s,D?"active":null,x?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let N=typeof a=="function"?a(y):a;return R.createElement(Ne,Gc({},m,{"aria-current":T,className:A,ref:n,style:N,to:u,viewTransition:d}),typeof f=="function"?f(y):f)});var sp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(sp||(sp={}));var bv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(bv||(bv={}));function Kk(t){let e=R.useContext(Cd);return e||ze(!1),e}function Qk(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,u=jr(),d=Ss(),f=Nd(t,{relative:o});return R.useCallback(m=>{if(Mk(m,n)){m.preventDefault();let g=r!==void 0?r:qc(d)===qc(f);u(t,{replace:g,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[d,u,f,r,i,n,t,s,o,a])}function nE(t){let e=R.useRef(ip(t)),n=R.useRef(!1),r=Ss(),i=R.useMemo(()=>Vk(r.search,n.current?null:e.current),[r.search]),s=jr(),o=R.useCallback((a,u)=>{const d=ip(typeof a=="function"?a(i):a);n.current=!0,s("?"+d,u)},[s,i]);return[i,o]}function Yk(t,e){e===void 0&&(e={});let n=R.useContext(Bk);n==null&&ze(!1);let{basename:r}=Kk(sp.useViewTransitionState),i=Nd(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=No(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=No(n.nextLocation.pathname,r)||n.nextLocation.pathname;return np(i.pathname,o)!=null||np(i.pathname,s)!=null}/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xk=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),rE=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Jk={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zk=R.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...a},u)=>R.createElement("svg",{ref:u,...Jk,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:rE("lucide",i),...a},[...o.map(([d,f])=>R.createElement(d,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=(t,e)=>{const n=R.forwardRef(({className:r,...i},s)=>R.createElement(Zk,{ref:s,iconNode:e,className:rE(`lucide-${Xk(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iE=se("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sE=se("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=se("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=se("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=se("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=se("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=se("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=se("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oE=se("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=se("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=se("Dices",[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2",key:"6agr2n"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",key:"1o487t"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 14h.01",key:"ssrbsk"}],["path",{d:"M15 6h.01",key:"cblpky"}],["path",{d:"M18 9h.01",key:"2061c0"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aE=se("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=se("Film",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=se("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lE=se("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=se("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=se("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=se("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=se("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=se("ListFilter",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=se("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uE=se("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cE=se("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=se("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=se("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=se("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=se("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dE=se("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=se("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=se("Reply",[["polyline",{points:"9 17 4 12 9 7",key:"hvgpf2"}],["path",{d:"M20 18v-2a4 4 0 0 0-4-4H4",key:"5vmcpk"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=se("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=se("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=se("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=se("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hE=se("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=se("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=se("ThumbsDown",[["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",key:"m61m77"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=se("ThumbsUp",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fE=se("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=se("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=se("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=se("Tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pE=se("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mE=se("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $l=se("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var Pv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Tb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},yE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,d=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|a>>4;let g=(a&15)<<2|d>>6,I=d&63;u||(I=64,o||(g=64)),r.push(n[f],n[m],n[g],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(gE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Tb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||d==null||m==null)throw new Ib;const g=s<<2|a>>4;if(r.push(g),d!==64){const I=a<<4&240|d>>2;if(r.push(I),m!==64){const C=d<<6&192|m;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ib extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sb=function(t){const e=gE(t);return yE.encodeByteArray(e,!0)},Qc=function(t){return Sb(t).replace(/\./g,"")},vE=function(t){try{return yE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ab(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb=()=>Ab().__FIREBASE_DEFAULTS__,bb=()=>{if(typeof process>"u"||typeof Pv>"u")return;const t=Pv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Rb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vE(t[1]);return e&&JSON.parse(e)},Ld=()=>{try{return kb()||bb()||Rb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_E=t=>{var e,n;return(n=(e=Ld())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Cb=t=>{const e=_E(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},wE=()=>{var t;return(t=Ld())===null||t===void 0?void 0:t.config},xE=t=>{var e;return(e=Ld())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Qc(JSON.stringify(n)),Qc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Db(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Nt())}function Lb(){var t;const e=(t=Ld())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ob(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function jb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Mb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vb(){const t=Nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ub(){return!Lb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Fb(){try{return typeof indexedDB=="object"}catch{return!1}}function zb(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb="FirebaseError";class Mr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Bb,Object.setPrototypeOf(this,Mr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wl.prototype.create)}}class Wl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?$b(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Mr(i,a,r)}}function $b(t,e){return t.replace(Wb,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Wb=/\{\$([^}]+)}/g;function Hb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Yc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Nv(s)&&Nv(o)){if(!Yc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Nv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Va(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ua(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function qb(t,e){const n=new Gb(t,e);return n.subscribe.bind(n)}class Gb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Kb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Vh),i.error===void 0&&(i.error=Vh),i.complete===void 0&&(i.complete=Vh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Kb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Vh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(t){return t&&t._delegate?t._delegate:t}class gs{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Pb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xb(e))try{this.getOrInitializeService({instanceIdentifier:ts})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ts){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ts){return this.instances.has(e)}getOptions(e=ts){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ts){return this.component?this.component.multipleInstances?e:ts:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yb(t){return t===ts?void 0:t}function Xb(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Qb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const Zb={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},eR=fe.INFO,tR={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},nR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=tR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dm{constructor(e){this.name=e,this._logLevel=eR,this._logHandler=nR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const rR=(t,e)=>e.some(n=>t instanceof n);let Dv,Lv;function iR(){return Dv||(Dv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sR(){return Lv||(Lv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const EE=new WeakMap,op=new WeakMap,TE=new WeakMap,Uh=new WeakMap,Lm=new WeakMap;function oR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(xi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&EE.set(n,t)}).catch(()=>{}),Lm.set(e,t),e}function aR(t){if(op.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});op.set(t,e)}let ap={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return op.get(t);if(e==="objectStoreNames")return t.objectStoreNames||TE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function lR(t){ap=t(ap)}function uR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Fh(this),e,...n);return TE.set(r,e.sort?e.sort():[e]),xi(r)}:sR().includes(t)?function(...e){return t.apply(Fh(this),e),xi(EE.get(this))}:function(...e){return xi(t.apply(Fh(this),e))}}function cR(t){return typeof t=="function"?uR(t):(t instanceof IDBTransaction&&aR(t),rR(t,iR())?new Proxy(t,ap):t)}function xi(t){if(t instanceof IDBRequest)return oR(t);if(Uh.has(t))return Uh.get(t);const e=cR(t);return e!==t&&(Uh.set(t,e),Lm.set(e,t)),e}const Fh=t=>Lm.get(t);function dR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=xi(o);return r&&o.addEventListener("upgradeneeded",u=>{r(xi(o.result),u.oldVersion,u.newVersion,xi(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),a}const hR=["get","getKey","getAll","getAllKeys","count"],fR=["put","add","delete","clear"],zh=new Map;function Ov(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zh.get(e))return zh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=fR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||hR.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(a.shift())),(await Promise.all([d[n](...a),i&&u.done]))[0]};return zh.set(e,s),s}lR(t=>({...t,get:(e,n,r)=>Ov(e,n)||t.get(e,n,r),has:(e,n)=>!!Ov(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(mR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function mR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const lp="@firebase/app",jv="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new Dm("@firebase/app"),gR="@firebase/app-compat",yR="@firebase/analytics-compat",vR="@firebase/analytics",_R="@firebase/app-check-compat",wR="@firebase/app-check",xR="@firebase/auth",ER="@firebase/auth-compat",TR="@firebase/database",IR="@firebase/data-connect",SR="@firebase/database-compat",AR="@firebase/functions",kR="@firebase/functions-compat",bR="@firebase/installations",RR="@firebase/installations-compat",CR="@firebase/messaging",PR="@firebase/messaging-compat",NR="@firebase/performance",DR="@firebase/performance-compat",LR="@firebase/remote-config",OR="@firebase/remote-config-compat",jR="@firebase/storage",MR="@firebase/storage-compat",VR="@firebase/firestore",UR="@firebase/vertexai-preview",FR="@firebase/firestore-compat",zR="firebase",BR="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up="[DEFAULT]",$R={[lp]:"fire-core",[gR]:"fire-core-compat",[vR]:"fire-analytics",[yR]:"fire-analytics-compat",[wR]:"fire-app-check",[_R]:"fire-app-check-compat",[xR]:"fire-auth",[ER]:"fire-auth-compat",[TR]:"fire-rtdb",[IR]:"fire-data-connect",[SR]:"fire-rtdb-compat",[AR]:"fire-fn",[kR]:"fire-fn-compat",[bR]:"fire-iid",[RR]:"fire-iid-compat",[CR]:"fire-fcm",[PR]:"fire-fcm-compat",[NR]:"fire-perf",[DR]:"fire-perf-compat",[LR]:"fire-rc",[OR]:"fire-rc-compat",[jR]:"fire-gcs",[MR]:"fire-gcs-compat",[VR]:"fire-fst",[FR]:"fire-fst-compat",[UR]:"fire-vertex","fire-js":"fire-js",[zR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il=new Map,WR=new Map,cp=new Map;function Mv(t,e){try{t.container.addComponent(e)}catch(n){Rr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Do(t){const e=t.name;if(cp.has(e))return Rr.debug(`There were multiple attempts to register component ${e}.`),!1;cp.set(e,t);for(const n of Il.values())Mv(n,t);for(const n of WR.values())Mv(n,t);return!0}function Om(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function qn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ei=new Wl("app","Firebase",HR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ei.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go=BR;function IE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:up,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ei.create("bad-app-name",{appName:String(i)});if(n||(n=wE()),!n)throw Ei.create("no-options");const s=Il.get(i);if(s){if(Yc(n,s.options)&&Yc(r,s.config))return s;throw Ei.create("duplicate-app",{appName:i})}const o=new Jb(i);for(const u of cp.values())o.addComponent(u);const a=new qR(n,r,o);return Il.set(i,a),a}function SE(t=up){const e=Il.get(t);if(!e&&t===up&&wE())return IE();if(!e)throw Ei.create("no-app",{appName:t});return e}function Vv(){return Array.from(Il.values())}function Ti(t,e,n){var r;let i=(r=$R[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rr.warn(a.join(" "));return}Do(new gs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR="firebase-heartbeat-database",KR=1,Sl="firebase-heartbeat-store";let Bh=null;function AE(){return Bh||(Bh=dR(GR,KR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Sl)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ei.create("idb-open",{originalErrorMessage:t.message})})),Bh}async function QR(t){try{const n=(await AE()).transaction(Sl),r=await n.objectStore(Sl).get(kE(t));return await n.done,r}catch(e){if(e instanceof Mr)Rr.warn(e.message);else{const n=Ei.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rr.warn(n.message)}}}async function Uv(t,e){try{const r=(await AE()).transaction(Sl,"readwrite");await r.objectStore(Sl).put(e,kE(t)),await r.done}catch(n){if(n instanceof Mr)Rr.warn(n.message);else{const r=Ei.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Rr.warn(r.message)}}}function kE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR=1024,XR=30*24*60*60*1e3;class JR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new eC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Fv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=XR}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Rr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Fv(),{heartbeatsToSend:r,unsentEntries:i}=ZR(this._heartbeatsCache.heartbeats),s=Qc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Rr.warn(n),""}}}function Fv(){return new Date().toISOString().substring(0,10)}function ZR(t,e=YR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),zv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),zv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class eC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fb()?zb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await QR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Uv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Uv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function zv(t){return Qc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(t){Do(new gs("platform-logger",e=>new pR(e),"PRIVATE")),Do(new gs("heartbeat",e=>new JR(e),"PRIVATE")),Ti(lp,jv,t),Ti(lp,jv,"esm2017"),Ti("fire-js","")}tC("");function jm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function bE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nC=bE,RE=new Wl("auth","Firebase",bE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc=new Dm("@firebase/auth");function rC(t,...e){Xc.logLevel<=fe.WARN&&Xc.warn(`Auth (${Go}): ${t}`,...e)}function cc(t,...e){Xc.logLevel<=fe.ERROR&&Xc.error(`Auth (${Go}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t,...e){throw Mm(t,...e)}function Qn(t,...e){return Mm(t,...e)}function CE(t,e,n){const r=Object.assign(Object.assign({},nC()),{[e]:n});return new Wl("auth","Firebase",r).create(e,{appName:t.name})}function Tr(t){return CE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Mm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return RE.create(t,...e)}function re(t,e,...n){if(!t)throw Mm(e,...n)}function _r(t){const e="INTERNAL ASSERTION FAILED: "+t;throw cc(e),new Error(e)}function Cr(t,e){t||_r(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function iC(){return Bv()==="http:"||Bv()==="https:"}function Bv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iC()||jb()||"connection"in navigator)?navigator.onLine:!0}function oC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,n){this.shortDelay=e,this.longDelay=n,Cr(n>e,"Short delay should be less than long delay!"),this.isMobile=Db()||Mb()}get(){return sC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(t,e){Cr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_r("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_r("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_r("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC=new ql(3e4,6e4);function Vr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function nr(t,e,n,r,i={}){return NE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Hl(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},s);return Ob()||(d.referrerPolicy="no-referrer"),PE.fetch()(DE(t,t.config.apiHost,n,a),d)})}async function NE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},aC),e);try{const i=new cC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw $u(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,d]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw $u(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw $u(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw $u(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw CE(t,f,d);Ln(t,f)}}catch(i){if(i instanceof Mr)throw i;Ln(t,"network-request-failed",{message:String(i)})}}async function Gl(t,e,n,r,i={}){const s=await nr(t,e,n,r,i);return"mfaPendingCredential"in s&&Ln(t,"multi-factor-auth-required",{_serverResponse:s}),s}function DE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Vm(t.config,i):`${t.config.apiScheme}://${i}`}function uC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class cC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Qn(this.auth,"network-request-failed")),lC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $u(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Qn(t,e,r);return i.customData._tokenResponse=n,i}function $v(t){return t!==void 0&&t.enterprise!==void 0}class dC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return uC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function hC(t,e){return nr(t,"GET","/v2/recaptchaConfig",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fC(t,e){return nr(t,"POST","/v1/accounts:delete",e)}async function LE(t,e){return nr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pC(t,e=!1){const n=Ge(t),r=await n.getIdToken(e),i=Um(r);re(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:el($h(i.auth_time)),issuedAtTime:el($h(i.iat)),expirationTime:el($h(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function $h(t){return Number(t)*1e3}function Um(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return cc("JWT malformed, contained fewer than 3 sections"),null;try{const i=vE(n);return i?JSON.parse(i):(cc("Failed to decode base64 JWT payload"),null)}catch(i){return cc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Wv(t){const e=Um(t);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Mr&&mC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function mC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=el(this.lastLoginAt),this.creationTime=el(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Lo(t,LE(n,{idToken:r}));re(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?OE(s.providerUserInfo):[],a=vC(t.providerData,o),u=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),f=u?d:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new hp(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function yC(t){const e=Ge(t);await Jc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function OE(t){return t.map(e=>{var{providerId:n}=e,r=jm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _C(t,e){const n=await NE(t,{},async()=>{const r=Hl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=DE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",PE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function wC(t,e){return nr(t,"POST","/v2/accounts:revokeToken",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){re(e.length!==0,"internal-error");const n=Wv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await _C(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new wo;return r&&(re(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(re(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(re(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wo,this.toJSON())}_performRefresh(){return _r("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(t,e){re(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class wr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=jm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new hp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Lo(this,this.stsTokenManager.getToken(this.auth,e));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return pC(this,e)}reload(){return yC(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new wr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Jc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qn(this.auth.app))return Promise.reject(Tr(this.auth));const e=await this.getIdToken();return await Lo(this,fC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,d,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,I=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,E=(d=n.createdAt)!==null&&d!==void 0?d:void 0,_=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:S,emailVerified:O,isAnonymous:j,providerData:D,stsTokenManager:x}=n;re(S&&x,e,"internal-error");const y=wo.fromJSON(this.name,x);re(typeof S=="string",e,"internal-error"),Kr(m,e.name),Kr(g,e.name),re(typeof O=="boolean",e,"internal-error"),re(typeof j=="boolean",e,"internal-error"),Kr(I,e.name),Kr(C,e.name),Kr(k,e.name),Kr(P,e.name),Kr(E,e.name),Kr(_,e.name);const T=new wr({uid:S,auth:e,email:g,emailVerified:O,displayName:m,isAnonymous:j,photoURL:C,phoneNumber:I,tenantId:k,stsTokenManager:y,createdAt:E,lastLoginAt:_});return D&&Array.isArray(D)&&(T.providerData=D.map(A=>Object.assign({},A))),P&&(T._redirectEventId=P),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new wo;i.updateFromServerResponse(n);const s=new wr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Jc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];re(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?OE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new wo;a.updateFromIdToken(r);const u=new wr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new hp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv=new Map;function xr(t){Cr(t instanceof Function,"Expected a class definition");let e=Hv.get(t);return e?(Cr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Hv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}jE.type="NONE";const qv=jE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(t,e,n){return`firebase:${t}:${e}:${n}`}class xo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=dc(this.userKey,i.apiKey,s),this.fullPersistenceKey=dc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?wr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new xo(xr(qv),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||xr(qv);const o=dc(r,e.config.apiKey,e.name);let a=null;for(const d of n)try{const f=await d._get(o);if(f){const m=wr._fromJSON(e,f);d!==s&&(a=m),s=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new xo(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(o)}catch{}})),new xo(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(FE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ME(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(BE(e))return"Blackberry";if($E(e))return"Webos";if(VE(e))return"Safari";if((e.includes("chrome/")||UE(e))&&!e.includes("edge/"))return"Chrome";if(zE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ME(t=Nt()){return/firefox\//i.test(t)}function VE(t=Nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function UE(t=Nt()){return/crios\//i.test(t)}function FE(t=Nt()){return/iemobile/i.test(t)}function zE(t=Nt()){return/android/i.test(t)}function BE(t=Nt()){return/blackberry/i.test(t)}function $E(t=Nt()){return/webos/i.test(t)}function Fm(t=Nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function xC(t=Nt()){var e;return Fm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function EC(){return Vb()&&document.documentMode===10}function WE(t=Nt()){return Fm(t)||zE(t)||$E(t)||BE(t)||/windows phone/i.test(t)||FE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE(t,e=[]){let n;switch(t){case"Browser":n=Gv(Nt());break;case"Worker":n=`${Gv(Nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Go}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IC(t,e={}){return nr(t,"GET","/v2/passwordPolicy",Vr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC=6;class AC{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:SC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kv(this),this.idTokenSubscription=new Kv(this),this.beforeStateQueue=new TC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=RE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await xo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await LE(this,{idToken:e}),r=await wr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(qn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Jc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qn(this.app))return Promise.reject(Tr(this));const n=e?Ge(e):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qn(this.app)?Promise.reject(Tr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qn(this.app)?Promise.reject(Tr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await IC(this),n=new AC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await wC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xr(e)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await xo.create(this,[xr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=HE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&rC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Oi(t){return Ge(t)}class Kv{constructor(e){this.auth=e,this.observer=null,this.addObserver=qb(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Od={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bC(t){Od=t}function qE(t){return Od.loadJS(t)}function RC(){return Od.recaptchaEnterpriseScript}function CC(){return Od.gapiScript}function PC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const NC="recaptcha-enterprise",DC="NO_RECAPTCHA";class LC{constructor(e){this.type=NC,this.auth=Oi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{hC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const d=new dC(u);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,o(d.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;$v(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(d=>{o(d)}).catch(()=>{o(DC)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&$v(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=RC();u.length!==0&&(u+=a),qE(u).then(()=>{i(a,s,o)}).catch(d=>{o(d)})}}).catch(a=>{o(a)})})}}async function Qv(t,e,n,r=!1){const i=new LC(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Zc(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Qv(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Qv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OC(t,e){const n=Om(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Yc(s,e??{}))return i;Ln(i,"already-initialized")}return n.initialize({options:e})}function jC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function MC(t,e,n){const r=Oi(t);re(r._canInitEmulator,r,"emulator-config-failed"),re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=GE(e),{host:o,port:a}=VC(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),UC()}function GE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function VC(t){const e=GE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Yv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Yv(o)}}}function Yv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function UC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _r("not implemented")}_getIdTokenResponse(e){return _r("not implemented")}_linkToIdToken(e,n){return _r("not implemented")}_getReauthenticationResolver(e){return _r("not implemented")}}async function FC(t,e){return nr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zC(t,e){return Gl(t,"POST","/v1/accounts:signInWithPassword",Vr(t,e))}async function BC(t,e){return nr(t,"POST","/v1/accounts:sendOobCode",Vr(t,e))}async function $C(t,e){return BC(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WC(t,e){return Gl(t,"POST","/v1/accounts:signInWithEmailLink",Vr(t,e))}async function HC(t,e){return Gl(t,"POST","/v1/accounts:signInWithEmailLink",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al extends zm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Al(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Al(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zc(e,n,"signInWithPassword",zC);case"emailLink":return WC(e,{email:this._email,oobCode:this._password});default:Ln(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zc(e,r,"signUpPassword",FC);case"emailLink":return HC(e,{idToken:n,email:this._email,oobCode:this._password});default:Ln(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eo(t,e){return Gl(t,"POST","/v1/accounts:signInWithIdp",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qC="http://localhost";class ys extends zm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ys(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=jm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ys(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Eo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Eo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Eo(e,n)}buildRequest(){const e={requestUri:qC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Hl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function KC(t){const e=Va(Ua(t)).link,n=e?Va(Ua(e)).deep_link_id:null,r=Va(Ua(t)).deep_link_id;return(r?Va(Ua(r)).link:null)||r||n||e||t}class Bm{constructor(e){var n,r,i,s,o,a;const u=Va(Ua(e)),d=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,m=GC((i=u.mode)!==null&&i!==void 0?i:null);re(d&&f&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=KC(e);try{return new Bm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(){this.providerId=Ko.PROVIDER_ID}static credential(e,n){return Al._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Bm.parseLink(n);return re(r,"argument-error"),Al._fromEmailAndCode(e,r.code,r.tenantId)}}Ko.PROVIDER_ID="password";Ko.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ko.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl extends KE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends Kl{constructor(){super("facebook.com")}static credential(e){return ys._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ii.credentialFromTaggedObject(e)}static credentialFromError(e){return ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ii.credential(e.oauthAccessToken)}catch{return null}}}ii.FACEBOOK_SIGN_IN_METHOD="facebook.com";ii.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends Kl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ys._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return si.credentialFromTaggedObject(e)}static credentialFromError(e){return si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return si.credential(n,r)}catch{return null}}}si.GOOGLE_SIGN_IN_METHOD="google.com";si.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends Kl{constructor(){super("github.com")}static credential(e){return ys._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return oi.credential(e.oauthAccessToken)}catch{return null}}}oi.GITHUB_SIGN_IN_METHOD="github.com";oi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends Kl{constructor(){super("twitter.com")}static credential(e,n){return ys._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ai.credentialFromTaggedObject(e)}static credentialFromError(e){return ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ai.credential(n,r)}catch{return null}}}ai.TWITTER_SIGN_IN_METHOD="twitter.com";ai.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QC(t,e){return Gl(t,"POST","/v1/accounts:signUp",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await wr._fromIdTokenResponse(e,r,i),o=Xv(r);return new vs({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Xv(r);return new vs({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Xv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed extends Mr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ed.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ed(e,n,r,i)}}function QE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ed._fromErrorAndOperation(t,s,e,r):s})}async function YC(t,e,n=!1){const r=await Lo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XC(t,e,n=!1){const{auth:r}=t;if(qn(r.app))return Promise.reject(Tr(r));const i="reauthenticate";try{const s=await Lo(t,QE(r,i,e,t),n);re(s.idToken,r,"internal-error");const o=Um(s.idToken);re(o,r,"internal-error");const{sub:a}=o;return re(t.uid===a,r,"user-mismatch"),vs._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ln(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YE(t,e,n=!1){if(qn(t.app))return Promise.reject(Tr(t));const r="signIn",i=await QE(t,r,e),s=await vs._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function JC(t,e){return YE(Oi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XE(t){const e=Oi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ZC(t,e,n){const r=Oi(t);await Zc(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",$C)}async function eP(t,e,n){if(qn(t.app))return Promise.reject(Tr(t));const r=Oi(t),o=await Zc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",QC).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&XE(t),u}),a=await vs._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function tP(t,e,n){return qn(t.app)?Promise.reject(Tr(t)):JC(Ge(t),Ko.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&XE(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nP(t,e){return nr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JE(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ge(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Lo(r,nP(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function rP(t,e,n,r){return Ge(t).onIdTokenChanged(e,n,r)}function iP(t,e,n){return Ge(t).beforeAuthStateChanged(e,n)}function sP(t,e,n,r){return Ge(t).onAuthStateChanged(e,n,r)}function oP(t){return Ge(t).signOut()}const td="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(td,"1"),this.storage.removeItem(td),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP=1e3,lP=10;class e1 extends ZE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=WE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);EC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,lP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},aP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}e1.type="LOCAL";const uP=e1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1 extends ZE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}t1.type="SESSION";const n1=t1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new jd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async d=>d(n.origin,s)),u=await cP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const d=$m("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===d)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(){return window}function hP(t){Yn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r1(){return typeof Yn().WorkerGlobalScope<"u"&&typeof Yn().importScripts=="function"}async function fP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function mP(){return r1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1="firebaseLocalStorageDb",gP=1,nd="firebaseLocalStorage",s1="fbase_key";class Ql{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Md(t,e){return t.transaction([nd],e?"readwrite":"readonly").objectStore(nd)}function yP(){const t=indexedDB.deleteDatabase(i1);return new Ql(t).toPromise()}function fp(){const t=indexedDB.open(i1,gP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(nd,{keyPath:s1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(nd)?e(r):(r.close(),await yP(),e(await fp()))})})}async function Jv(t,e,n){const r=Md(t,!0).put({[s1]:e,value:n});return new Ql(r).toPromise()}async function vP(t,e){const n=Md(t,!1).get(e),r=await new Ql(n).toPromise();return r===void 0?null:r.value}function Zv(t,e){const n=Md(t,!0).delete(e);return new Ql(n).toPromise()}const _P=800,wP=3;class o1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>wP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return r1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jd._getInstance(mP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await fP(),!this.activeServiceWorker)return;this.sender=new dP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fp();return await Jv(e,td,"1"),await Zv(e,td),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>vP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Md(i,!1).getAll();return new Ql(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_P)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}o1.type="LOCAL";const xP=o1;new ql(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EP(t,e){return e?xr(e):(re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm extends zm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Eo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Eo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Eo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function TP(t){return YE(t.auth,new Wm(t),t.bypassAuthState)}function IP(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),XC(n,new Wm(t),t.bypassAuthState)}async function SP(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),YC(n,new Wm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TP;case"linkViaPopup":case"linkViaRedirect":return SP;case"reauthViaPopup":case"reauthViaRedirect":return IP;default:Ln(this.auth,"internal-error")}}resolve(e){Cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP=new ql(2e3,1e4);class ho extends a1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ho.currentPopupAction&&ho.currentPopupAction.cancel(),ho.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){Cr(this.filter.length===1,"Popup operations only handle one event");const e=$m();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ho.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,AP.get())};e()}}ho.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kP="pendingRedirect",hc=new Map;class bP extends a1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=hc.get(this.auth._key());if(!e){try{const r=await RP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}hc.set(this.auth._key(),e)}return this.bypassAuthState||hc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RP(t,e){const n=NP(e),r=PP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function CP(t,e){hc.set(t._key(),e)}function PP(t){return xr(t._redirectPersistence)}function NP(t){return dc(kP,t.config.apiKey,t.name)}async function DP(t,e,n=!1){if(qn(t.app))return Promise.reject(Tr(t));const r=Oi(t),i=EP(r,e),o=await new bP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP=10*60*1e3;class OP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!l1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Qn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=LP&&this.cachedEventUids.clear(),this.cachedEventUids.has(e_(e))}saveEventToCache(e){this.cachedEventUids.add(e_(e)),this.lastProcessedEventTime=Date.now()}}function e_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function l1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return l1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MP(t,e={}){return nr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,UP=/^https?/;async function FP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await MP(t);for(const n of e)try{if(zP(n))return}catch{}Ln(t,"unauthorized-domain")}function zP(t){const e=dp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!UP.test(n))return!1;if(VP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BP=new ql(3e4,6e4);function t_(){const t=Yn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $P(t){return new Promise((e,n)=>{var r,i,s;function o(){t_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{t_(),n(Qn(t,"network-request-failed"))},timeout:BP.get()})}if(!((i=(r=Yn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Yn().gapi)===null||s===void 0)&&s.load)o();else{const a=PC("iframefcb");return Yn()[a]=()=>{gapi.load?o():n(Qn(t,"network-request-failed"))},qE(`${CC()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw fc=null,e})}let fc=null;function WP(t){return fc=fc||$P(t),fc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP=new ql(5e3,15e3),qP="__/auth/iframe",GP="emulator/auth/iframe",KP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function YP(t){const e=t.config;re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Vm(e,GP):`https://${t.config.authDomain}/${qP}`,r={apiKey:e.apiKey,appName:t.name,v:Go},i=QP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Hl(r).slice(1)}`}async function XP(t){const e=await WP(t),n=Yn().gapi;return re(n,t,"internal-error"),e.open({where:document.body,url:YP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Qn(t,"network-request-failed"),a=Yn().setTimeout(()=>{s(o)},HP.get());function u(){Yn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZP=500,eN=600,tN="_blank",nN="http://localhost";class n_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rN(t,e,n,r=ZP,i=eN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},JP),{width:r.toString(),height:i.toString(),top:s,left:o}),d=Nt().toLowerCase();n&&(a=UE(d)?tN:n),ME(d)&&(e=e||nN,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[I,C])=>`${g}${I}=${C},`,"");if(xC(d)&&a!=="_self")return iN(e||"",a),new n_(null);const m=window.open(e||"",a,f);re(m,t,"popup-blocked");try{m.focus()}catch{}return new n_(m)}function iN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sN="__/auth/handler",oN="emulator/auth/handler",aN=encodeURIComponent("fac");async function r_(t,e,n,r,i,s){re(t.config.authDomain,t,"auth-domain-config-required"),re(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Go,eventId:i};if(e instanceof KE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Hb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Kl){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const u=await t._getAppCheckToken(),d=u?`#${aN}=${encodeURIComponent(u)}`:"";return`${lN(t)}?${Hl(a).slice(1)}${d}`}function lN({config:t}){return t.emulator?Vm(t,oN):`https://${t.authDomain}/${sN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh="webStorageSupport";class uN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=n1,this._completeRedirectFn=DP,this._overrideRedirectResult=CP}async _openPopup(e,n,r,i){var s;Cr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await r_(e,n,r,dp(),i);return rN(e,o,$m())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await r_(e,n,r,dp(),i);return hP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Cr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await XP(e),r=new OP(e);return n.register("authEvent",i=>(re(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wh,{type:Wh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Wh];o!==void 0&&n(!!o),Ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=FP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return WE()||VE()||Fm()}}const cN=uN;var i_="@firebase/auth",s_="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fN(t){Do(new gs("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;re(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:HE(t)},d=new kC(r,i,s,u);return jC(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Do(new gs("auth-internal",e=>{const n=Oi(e.getProvider("auth").getImmediate());return(r=>new dN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ti(i_,s_,hN(t)),Ti(i_,s_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pN=5*60,mN=xE("authIdTokenMaxAge")||pN;let o_=null;const gN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>mN)return;const i=n==null?void 0:n.token;o_!==i&&(o_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function yN(t=SE()){const e=Om(t,"auth");if(e.isInitialized())return e.getImmediate();const n=OC(t,{popupRedirectResolver:cN,persistence:[xP,uP,n1]}),r=xE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=gN(s.toString());iP(n,o,()=>o(n.currentUser)),rP(n,a=>o(a))}}const i=_E("auth");return i&&MC(n,`http://${i}`),n}function vN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}bC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Qn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",vN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fN("Browser");var a_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cs,u1;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,y){function T(){}T.prototype=y.prototype,x.D=y.prototype,x.prototype=new T,x.prototype.constructor=x,x.C=function(A,N,M){for(var b=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)b[Ke-2]=arguments[Ke];return y.prototype[N].apply(A,b)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(x,y,T){T||(T=0);var A=Array(16);if(typeof y=="string")for(var N=0;16>N;++N)A[N]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(N=0;16>N;++N)A[N]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=x.g[0],T=x.g[1],N=x.g[2];var M=x.g[3],b=y+(M^T&(N^M))+A[0]+3614090360&4294967295;y=T+(b<<7&4294967295|b>>>25),b=M+(N^y&(T^N))+A[1]+3905402710&4294967295,M=y+(b<<12&4294967295|b>>>20),b=N+(T^M&(y^T))+A[2]+606105819&4294967295,N=M+(b<<17&4294967295|b>>>15),b=T+(y^N&(M^y))+A[3]+3250441966&4294967295,T=N+(b<<22&4294967295|b>>>10),b=y+(M^T&(N^M))+A[4]+4118548399&4294967295,y=T+(b<<7&4294967295|b>>>25),b=M+(N^y&(T^N))+A[5]+1200080426&4294967295,M=y+(b<<12&4294967295|b>>>20),b=N+(T^M&(y^T))+A[6]+2821735955&4294967295,N=M+(b<<17&4294967295|b>>>15),b=T+(y^N&(M^y))+A[7]+4249261313&4294967295,T=N+(b<<22&4294967295|b>>>10),b=y+(M^T&(N^M))+A[8]+1770035416&4294967295,y=T+(b<<7&4294967295|b>>>25),b=M+(N^y&(T^N))+A[9]+2336552879&4294967295,M=y+(b<<12&4294967295|b>>>20),b=N+(T^M&(y^T))+A[10]+4294925233&4294967295,N=M+(b<<17&4294967295|b>>>15),b=T+(y^N&(M^y))+A[11]+2304563134&4294967295,T=N+(b<<22&4294967295|b>>>10),b=y+(M^T&(N^M))+A[12]+1804603682&4294967295,y=T+(b<<7&4294967295|b>>>25),b=M+(N^y&(T^N))+A[13]+4254626195&4294967295,M=y+(b<<12&4294967295|b>>>20),b=N+(T^M&(y^T))+A[14]+2792965006&4294967295,N=M+(b<<17&4294967295|b>>>15),b=T+(y^N&(M^y))+A[15]+1236535329&4294967295,T=N+(b<<22&4294967295|b>>>10),b=y+(N^M&(T^N))+A[1]+4129170786&4294967295,y=T+(b<<5&4294967295|b>>>27),b=M+(T^N&(y^T))+A[6]+3225465664&4294967295,M=y+(b<<9&4294967295|b>>>23),b=N+(y^T&(M^y))+A[11]+643717713&4294967295,N=M+(b<<14&4294967295|b>>>18),b=T+(M^y&(N^M))+A[0]+3921069994&4294967295,T=N+(b<<20&4294967295|b>>>12),b=y+(N^M&(T^N))+A[5]+3593408605&4294967295,y=T+(b<<5&4294967295|b>>>27),b=M+(T^N&(y^T))+A[10]+38016083&4294967295,M=y+(b<<9&4294967295|b>>>23),b=N+(y^T&(M^y))+A[15]+3634488961&4294967295,N=M+(b<<14&4294967295|b>>>18),b=T+(M^y&(N^M))+A[4]+3889429448&4294967295,T=N+(b<<20&4294967295|b>>>12),b=y+(N^M&(T^N))+A[9]+568446438&4294967295,y=T+(b<<5&4294967295|b>>>27),b=M+(T^N&(y^T))+A[14]+3275163606&4294967295,M=y+(b<<9&4294967295|b>>>23),b=N+(y^T&(M^y))+A[3]+4107603335&4294967295,N=M+(b<<14&4294967295|b>>>18),b=T+(M^y&(N^M))+A[8]+1163531501&4294967295,T=N+(b<<20&4294967295|b>>>12),b=y+(N^M&(T^N))+A[13]+2850285829&4294967295,y=T+(b<<5&4294967295|b>>>27),b=M+(T^N&(y^T))+A[2]+4243563512&4294967295,M=y+(b<<9&4294967295|b>>>23),b=N+(y^T&(M^y))+A[7]+1735328473&4294967295,N=M+(b<<14&4294967295|b>>>18),b=T+(M^y&(N^M))+A[12]+2368359562&4294967295,T=N+(b<<20&4294967295|b>>>12),b=y+(T^N^M)+A[5]+4294588738&4294967295,y=T+(b<<4&4294967295|b>>>28),b=M+(y^T^N)+A[8]+2272392833&4294967295,M=y+(b<<11&4294967295|b>>>21),b=N+(M^y^T)+A[11]+1839030562&4294967295,N=M+(b<<16&4294967295|b>>>16),b=T+(N^M^y)+A[14]+4259657740&4294967295,T=N+(b<<23&4294967295|b>>>9),b=y+(T^N^M)+A[1]+2763975236&4294967295,y=T+(b<<4&4294967295|b>>>28),b=M+(y^T^N)+A[4]+1272893353&4294967295,M=y+(b<<11&4294967295|b>>>21),b=N+(M^y^T)+A[7]+4139469664&4294967295,N=M+(b<<16&4294967295|b>>>16),b=T+(N^M^y)+A[10]+3200236656&4294967295,T=N+(b<<23&4294967295|b>>>9),b=y+(T^N^M)+A[13]+681279174&4294967295,y=T+(b<<4&4294967295|b>>>28),b=M+(y^T^N)+A[0]+3936430074&4294967295,M=y+(b<<11&4294967295|b>>>21),b=N+(M^y^T)+A[3]+3572445317&4294967295,N=M+(b<<16&4294967295|b>>>16),b=T+(N^M^y)+A[6]+76029189&4294967295,T=N+(b<<23&4294967295|b>>>9),b=y+(T^N^M)+A[9]+3654602809&4294967295,y=T+(b<<4&4294967295|b>>>28),b=M+(y^T^N)+A[12]+3873151461&4294967295,M=y+(b<<11&4294967295|b>>>21),b=N+(M^y^T)+A[15]+530742520&4294967295,N=M+(b<<16&4294967295|b>>>16),b=T+(N^M^y)+A[2]+3299628645&4294967295,T=N+(b<<23&4294967295|b>>>9),b=y+(N^(T|~M))+A[0]+4096336452&4294967295,y=T+(b<<6&4294967295|b>>>26),b=M+(T^(y|~N))+A[7]+1126891415&4294967295,M=y+(b<<10&4294967295|b>>>22),b=N+(y^(M|~T))+A[14]+2878612391&4294967295,N=M+(b<<15&4294967295|b>>>17),b=T+(M^(N|~y))+A[5]+4237533241&4294967295,T=N+(b<<21&4294967295|b>>>11),b=y+(N^(T|~M))+A[12]+1700485571&4294967295,y=T+(b<<6&4294967295|b>>>26),b=M+(T^(y|~N))+A[3]+2399980690&4294967295,M=y+(b<<10&4294967295|b>>>22),b=N+(y^(M|~T))+A[10]+4293915773&4294967295,N=M+(b<<15&4294967295|b>>>17),b=T+(M^(N|~y))+A[1]+2240044497&4294967295,T=N+(b<<21&4294967295|b>>>11),b=y+(N^(T|~M))+A[8]+1873313359&4294967295,y=T+(b<<6&4294967295|b>>>26),b=M+(T^(y|~N))+A[15]+4264355552&4294967295,M=y+(b<<10&4294967295|b>>>22),b=N+(y^(M|~T))+A[6]+2734768916&4294967295,N=M+(b<<15&4294967295|b>>>17),b=T+(M^(N|~y))+A[13]+1309151649&4294967295,T=N+(b<<21&4294967295|b>>>11),b=y+(N^(T|~M))+A[4]+4149444226&4294967295,y=T+(b<<6&4294967295|b>>>26),b=M+(T^(y|~N))+A[11]+3174756917&4294967295,M=y+(b<<10&4294967295|b>>>22),b=N+(y^(M|~T))+A[2]+718787259&4294967295,N=M+(b<<15&4294967295|b>>>17),b=T+(M^(N|~y))+A[9]+3951481745&4294967295,x.g[0]=x.g[0]+y&4294967295,x.g[1]=x.g[1]+(N+(b<<21&4294967295|b>>>11))&4294967295,x.g[2]=x.g[2]+N&4294967295,x.g[3]=x.g[3]+M&4294967295}r.prototype.u=function(x,y){y===void 0&&(y=x.length);for(var T=y-this.blockSize,A=this.B,N=this.h,M=0;M<y;){if(N==0)for(;M<=T;)i(this,x,M),M+=this.blockSize;if(typeof x=="string"){for(;M<y;)if(A[N++]=x.charCodeAt(M++),N==this.blockSize){i(this,A),N=0;break}}else for(;M<y;)if(A[N++]=x[M++],N==this.blockSize){i(this,A),N=0;break}}this.h=N,this.o+=y},r.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var y=1;y<x.length-8;++y)x[y]=0;var T=8*this.o;for(y=x.length-8;y<x.length;++y)x[y]=T&255,T/=256;for(this.u(x),x=Array(16),y=T=0;4>y;++y)for(var A=0;32>A;A+=8)x[T++]=this.g[y]>>>A&255;return x};function s(x,y){var T=a;return Object.prototype.hasOwnProperty.call(T,x)?T[x]:T[x]=y(x)}function o(x,y){this.h=y;for(var T=[],A=!0,N=x.length-1;0<=N;N--){var M=x[N]|0;A&&M==y||(T[N]=M,A=!1)}this.g=T}var a={};function u(x){return-128<=x&&128>x?s(x,function(y){return new o([y|0],0>y?-1:0)}):new o([x|0],0>x?-1:0)}function d(x){if(isNaN(x)||!isFinite(x))return m;if(0>x)return P(d(-x));for(var y=[],T=1,A=0;x>=T;A++)y[A]=x/T|0,T*=4294967296;return new o(y,0)}function f(x,y){if(x.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(x.charAt(0)=="-")return P(f(x.substring(1),y));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=d(Math.pow(y,8)),A=m,N=0;N<x.length;N+=8){var M=Math.min(8,x.length-N),b=parseInt(x.substring(N,N+M),y);8>M?(M=d(Math.pow(y,M)),A=A.j(M).add(d(b))):(A=A.j(T),A=A.add(d(b)))}return A}var m=u(0),g=u(1),I=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-P(this).m();for(var x=0,y=1,T=0;T<this.g.length;T++){var A=this.i(T);x+=(0<=A?A:4294967296+A)*y,y*=4294967296}return x},t.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(C(this))return"0";if(k(this))return"-"+P(this).toString(x);for(var y=d(Math.pow(x,6)),T=this,A="";;){var N=O(T,y).g;T=E(T,N.j(y));var M=((0<T.g.length?T.g[0]:T.h)>>>0).toString(x);if(T=N,C(T))return M+A;for(;6>M.length;)M="0"+M;A=M+A}},t.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function C(x){if(x.h!=0)return!1;for(var y=0;y<x.g.length;y++)if(x.g[y]!=0)return!1;return!0}function k(x){return x.h==-1}t.l=function(x){return x=E(this,x),k(x)?-1:C(x)?0:1};function P(x){for(var y=x.g.length,T=[],A=0;A<y;A++)T[A]=~x.g[A];return new o(T,~x.h).add(g)}t.abs=function(){return k(this)?P(this):this},t.add=function(x){for(var y=Math.max(this.g.length,x.g.length),T=[],A=0,N=0;N<=y;N++){var M=A+(this.i(N)&65535)+(x.i(N)&65535),b=(M>>>16)+(this.i(N)>>>16)+(x.i(N)>>>16);A=b>>>16,M&=65535,b&=65535,T[N]=b<<16|M}return new o(T,T[T.length-1]&-2147483648?-1:0)};function E(x,y){return x.add(P(y))}t.j=function(x){if(C(this)||C(x))return m;if(k(this))return k(x)?P(this).j(P(x)):P(P(this).j(x));if(k(x))return P(this.j(P(x)));if(0>this.l(I)&&0>x.l(I))return d(this.m()*x.m());for(var y=this.g.length+x.g.length,T=[],A=0;A<2*y;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(var N=0;N<x.g.length;N++){var M=this.i(A)>>>16,b=this.i(A)&65535,Ke=x.i(N)>>>16,Xe=x.i(N)&65535;T[2*A+2*N]+=b*Xe,_(T,2*A+2*N),T[2*A+2*N+1]+=M*Xe,_(T,2*A+2*N+1),T[2*A+2*N+1]+=b*Ke,_(T,2*A+2*N+1),T[2*A+2*N+2]+=M*Ke,_(T,2*A+2*N+2)}for(A=0;A<y;A++)T[A]=T[2*A+1]<<16|T[2*A];for(A=y;A<2*y;A++)T[A]=0;return new o(T,0)};function _(x,y){for(;(x[y]&65535)!=x[y];)x[y+1]+=x[y]>>>16,x[y]&=65535,y++}function S(x,y){this.g=x,this.h=y}function O(x,y){if(C(y))throw Error("division by zero");if(C(x))return new S(m,m);if(k(x))return y=O(P(x),y),new S(P(y.g),P(y.h));if(k(y))return y=O(x,P(y)),new S(P(y.g),y.h);if(30<x.g.length){if(k(x)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var T=g,A=y;0>=A.l(x);)T=j(T),A=j(A);var N=D(T,1),M=D(A,1);for(A=D(A,2),T=D(T,2);!C(A);){var b=M.add(A);0>=b.l(x)&&(N=N.add(T),M=b),A=D(A,1),T=D(T,1)}return y=E(x,N.j(y)),new S(N,y)}for(N=m;0<=x.l(y);){for(T=Math.max(1,Math.floor(x.m()/y.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),M=d(T),b=M.j(y);k(b)||0<b.l(x);)T-=A,M=d(T),b=M.j(y);C(M)&&(M=g),N=N.add(M),x=E(x,b)}return new S(N,x)}t.A=function(x){return O(this,x).h},t.and=function(x){for(var y=Math.max(this.g.length,x.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)&x.i(A);return new o(T,this.h&x.h)},t.or=function(x){for(var y=Math.max(this.g.length,x.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)|x.i(A);return new o(T,this.h|x.h)},t.xor=function(x){for(var y=Math.max(this.g.length,x.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)^x.i(A);return new o(T,this.h^x.h)};function j(x){for(var y=x.g.length+1,T=[],A=0;A<y;A++)T[A]=x.i(A)<<1|x.i(A-1)>>>31;return new o(T,x.h)}function D(x,y){var T=y>>5;y%=32;for(var A=x.g.length-T,N=[],M=0;M<A;M++)N[M]=0<y?x.i(M+T)>>>y|x.i(M+T+1)<<32-y:x.i(M+T);return new o(N,x.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,u1=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=f,cs=o}).apply(typeof a_<"u"?a_:typeof self<"u"?self:typeof window<"u"?window:{});var Wu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var c1,Fa,d1,pc,pp,h1,f1,p1;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,p){return l==Array.prototype||l==Object.prototype||(l[h]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Wu=="object"&&Wu];for(var h=0;h<l.length;++h){var p=l[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(l,h){if(h)e:{var p=r;l=l.split(".");for(var v=0;v<l.length-1;v++){var V=l[v];if(!(V in p))break e;p=p[V]}l=l[l.length-1],v=p[l],h=h(v),h!=v&&h!=null&&e(p,l,{configurable:!0,writable:!0,value:h})}}function s(l,h){l instanceof String&&(l+="");var p=0,v=!1,V={next:function(){if(!v&&p<l.length){var U=p++;return{value:h(U,l[U]),done:!1}}return v=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}i("Array.prototype.values",function(l){return l||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function d(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function f(l,h,p){return l.call.apply(l.bind,arguments)}function m(l,h,p){if(!l)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,v),l.apply(h,V)}}return function(){return l.apply(h,arguments)}}function g(l,h,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function I(l,h){var p=Array.prototype.slice.call(arguments,1);return function(){var v=p.slice();return v.push.apply(v,arguments),l.apply(this,v)}}function C(l,h){function p(){}p.prototype=h.prototype,l.aa=h.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(v,V,U){for(var G=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)G[ke-2]=arguments[ke];return h.prototype[V].apply(v,G)}}function k(l){const h=l.length;if(0<h){const p=Array(h);for(let v=0;v<h;v++)p[v]=l[v];return p}return[]}function P(l,h){for(let p=1;p<arguments.length;p++){const v=arguments[p];if(u(v)){const V=l.length||0,U=v.length||0;l.length=V+U;for(let G=0;G<U;G++)l[V+G]=v[G]}else l.push(v)}}class E{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function _(l){return/^[\s\xa0]*$/.test(l)}function S(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function O(l){return O[" "](l),l}O[" "]=function(){};var j=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function D(l,h,p){for(const v in l)h.call(p,l[v],v,l)}function x(l,h){for(const p in l)h.call(void 0,l[p],p,l)}function y(l){const h={};for(const p in l)h[p]=l[p];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(l,h){let p,v;for(let V=1;V<arguments.length;V++){v=arguments[V];for(p in v)l[p]=v[p];for(let U=0;U<T.length;U++)p=T[U],Object.prototype.hasOwnProperty.call(v,p)&&(l[p]=v[p])}}function N(l){var h=1;l=l.split(":");const p=[];for(;0<h&&l.length;)p.push(l.shift()),h--;return l.length&&p.push(l.join(":")),p}function M(l){a.setTimeout(()=>{throw l},0)}function b(){var l=ee;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class Ke{constructor(){this.h=this.g=null}add(h,p){const v=Xe.get();v.set(h,p),this.h?this.h.next=v:this.g=v,this.h=v}}var Xe=new E(()=>new Xt,l=>l.reset());class Xt{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let ht,q=!1,ee=new Ke,ne=()=>{const l=a.Promise.resolve(void 0);ht=()=>{l.then(we)}};var we=()=>{for(var l;l=b();){try{l.h.call(l.g)}catch(p){M(p)}var h=Xe;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}q=!1};function X(){this.s=this.s,this.C=this.C}X.prototype.s=!1,X.prototype.ma=function(){this.s||(this.s=!0,this.N())},X.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var J=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,h),a.removeEventListener("test",p,h)}catch{}return l}();function Je(l,h){if(pe.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,v=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(j){e:{try{O(h.nodeName);var V=!0;break e}catch{}V=!1}V||(h=null)}}else p=="mouseover"?h=l.fromElement:p=="mouseout"&&(h=l.toElement);this.relatedTarget=h,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Tn[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Je.aa.h.call(this)}}C(Je,pe);var Tn={2:"touch",3:"pen",4:"mouse"};Je.prototype.h=function(){Je.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var In="closure_listenable_"+(1e6*Math.random()|0),th=0;function nh(l,h,p,v,V){this.listener=l,this.proxy=null,this.src=h,this.type=p,this.capture=!!v,this.ha=V,this.key=++th,this.da=this.fa=!1}function bs(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Vi(l){this.src=l,this.g={},this.h=0}Vi.prototype.add=function(l,h,p,v,V){var U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);var G=Rs(l,h,v,V);return-1<G?(h=l[G],p||(h.fa=!1)):(h=new nh(h,this.src,U,!!v,V),h.fa=p,l.push(h)),h};function ta(l,h){var p=h.type;if(p in l.g){var v=l.g[p],V=Array.prototype.indexOf.call(v,h,void 0),U;(U=0<=V)&&Array.prototype.splice.call(v,V,1),U&&(bs(h),l.g[p].length==0&&(delete l.g[p],l.h--))}}function Rs(l,h,p,v){for(var V=0;V<l.length;++V){var U=l[V];if(!U.da&&U.listener==h&&U.capture==!!p&&U.ha==v)return V}return-1}var Ie="closure_lm_"+(1e6*Math.random()|0),Ui={};function Ae(l,h,p,v,V){if(Array.isArray(h)){for(var U=0;U<h.length;U++)Ae(l,h[U],p,v,V);return null}return p=ra(p),l&&l[In]?l.K(h,p,d(v)?!!v.capture:!1,V):na(l,h,p,!1,v,V)}function na(l,h,p,v,V,U){if(!h)throw Error("Invalid event type");var G=d(V)?!!V.capture:!!V,ke=Fi(l);if(ke||(l[Ie]=ke=new Vi(l)),p=ke.add(h,p,v,G,U),p.proxy)return p;if(v=cn(),p.proxy=v,v.src=l,v.listener=p,l.addEventListener)J||(V=G),V===void 0&&(V=!1),l.addEventListener(h.toString(),v,V);else if(l.attachEvent)l.attachEvent(Sn(h.toString()),v);else if(l.addListener&&l.removeListener)l.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return p}function cn(){function l(p){return h.call(l.src,l.listener,p)}const h=cu;return l}function Fr(l,h,p,v,V){if(Array.isArray(h))for(var U=0;U<h.length;U++)Fr(l,h[U],p,v,V);else v=d(v)?!!v.capture:!!v,p=ra(p),l&&l[In]?(l=l.i,h=String(h).toString(),h in l.g&&(U=l.g[h],p=Rs(U,p,v,V),-1<p&&(bs(U[p]),Array.prototype.splice.call(U,p,1),U.length==0&&(delete l.g[h],l.h--)))):l&&(l=Fi(l))&&(h=l.g[h.toString()],l=-1,h&&(l=Rs(h,p,v,V)),(p=-1<l?h[l]:null)&&Cs(p))}function Cs(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[In])ta(h.i,l);else{var p=l.type,v=l.proxy;h.removeEventListener?h.removeEventListener(p,v,l.capture):h.detachEvent?h.detachEvent(Sn(p),v):h.addListener&&h.removeListener&&h.removeListener(v),(p=Fi(h))?(ta(p,l),p.h==0&&(p.src=null,h[Ie]=null)):bs(l)}}}function Sn(l){return l in Ui?Ui[l]:Ui[l]="on"+l}function cu(l,h){if(l.da)l=!0;else{h=new Je(h,this);var p=l.listener,v=l.ha||l.src;l.fa&&Cs(l),l=p.call(v,h)}return l}function Fi(l){return l=l[Ie],l instanceof Vi?l:null}var Ps="__closure_events_fn_"+(1e9*Math.random()>>>0);function ra(l){return typeof l=="function"?l:(l[Ps]||(l[Ps]=function(h){return l.handleEvent(h)}),l[Ps])}function Ce(){X.call(this),this.i=new Vi(this),this.M=this,this.F=null}C(Ce,X),Ce.prototype[In]=!0,Ce.prototype.removeEventListener=function(l,h,p,v){Fr(this,l,h,p,v)};function Ve(l,h){var p,v=l.F;if(v)for(p=[];v;v=v.F)p.push(v);if(l=l.M,v=h.type||h,typeof h=="string")h=new pe(h,l);else if(h instanceof pe)h.target=h.target||l;else{var V=h;h=new pe(v,l),A(h,V)}if(V=!0,p)for(var U=p.length-1;0<=U;U--){var G=h.g=p[U];V=dn(G,v,!0,h)&&V}if(G=h.g=l,V=dn(G,v,!0,h)&&V,V=dn(G,v,!1,h)&&V,p)for(U=0;U<p.length;U++)G=h.g=p[U],V=dn(G,v,!1,h)&&V}Ce.prototype.N=function(){if(Ce.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var p=l.g[h],v=0;v<p.length;v++)bs(p[v]);delete l.g[h],l.h--}}this.F=null},Ce.prototype.K=function(l,h,p,v){return this.i.add(String(l),h,!1,p,v)},Ce.prototype.L=function(l,h,p,v){return this.i.add(String(l),h,!0,p,v)};function dn(l,h,p,v){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var V=!0,U=0;U<h.length;++U){var G=h[U];if(G&&!G.da&&G.capture==p){var ke=G.listener,ft=G.ha||G.src;G.fa&&ta(l.i,G),V=ke.call(ft,v)!==!1&&V}}return V&&!v.defaultPrevented}function Ns(l,h,p){if(typeof l=="function")p&&(l=g(l,p));else if(l&&typeof l.handleEvent=="function")l=g(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function zi(l){l.g=Ns(()=>{l.g=null,l.i&&(l.i=!1,zi(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class Ds extends X{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:zi(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ir(l){X.call(this),this.h=l,this.g={}}C(ir,X);var sr=[];function Bi(l){D(l.g,function(h,p){this.g.hasOwnProperty(p)&&Cs(h)},l),l.g={}}ir.prototype.N=function(){ir.aa.N.call(this),Bi(this)},ir.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zr=a.JSON.stringify,du=a.JSON.parse,hu=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Ls(){}Ls.prototype.h=null;function Os(l){return l.h||(l.h=l.i())}function js(){}var hn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function jn(){pe.call(this,"d")}C(jn,pe);function Ms(){pe.call(this,"c")}C(Ms,pe);var Mn={},ia=null;function $i(){return ia=ia||new Ce}Mn.La="serverreachability";function sa(l){pe.call(this,Mn.La,l)}C(sa,pe);function Vn(l){const h=$i();Ve(h,new sa(h))}Mn.STAT_EVENT="statevent";function Wi(l,h){pe.call(this,Mn.STAT_EVENT,l),this.stat=h}C(Wi,pe);function be(l){const h=$i();Ve(h,new Wi(h,l))}Mn.Ma="timingevent";function or(l,h){pe.call(this,Mn.Ma,l),this.size=h}C(or,pe);function ar(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function lr(){this.g=!0}lr.prototype.xa=function(){this.g=!1};function rh(l,h,p,v,V,U){l.info(function(){if(l.g)if(U)for(var G="",ke=U.split("&"),ft=0;ft<ke.length;ft++){var ve=ke[ft].split("=");if(1<ve.length){var xt=ve[0];ve=ve[1];var Et=xt.split("_");G=2<=Et.length&&Et[1]=="type"?G+(xt+"="+ve+"&"):G+(xt+"=redacted&")}}else G=null;else G=U;return"XMLHTTP REQ ("+v+") [attempt "+V+"]: "+h+`
`+p+`
`+G})}function fu(l,h,p,v,V,U,G){l.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+V+"]: "+h+`
`+p+`
`+U+" "+G})}function Un(l,h,p,v){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+oa(l,p)+(v?" "+v:"")})}function pu(l,h){l.info(function(){return"TIMEOUT: "+h})}lr.prototype.info=function(){};function oa(l,h){if(!l.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var v=p[l];if(!(2>v.length)){var V=v[1];if(Array.isArray(V)&&!(1>V.length)){var U=V[0];if(U!="noop"&&U!="stop"&&U!="close")for(var G=1;G<V.length;G++)V[G]=""}}}}return zr(p)}catch{return h}}var Vs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Br={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},aa;function Us(){}C(Us,Ls),Us.prototype.g=function(){return new XMLHttpRequest},Us.prototype.i=function(){return{}},aa=new Us;function xe(l,h,p,v){this.j=l,this.i=h,this.l=p,this.R=v||1,this.U=new ir(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ur}function ur(){this.i=null,this.g="",this.h=!1}var mu={},Fs={};function Hi(l,h,p){l.L=1,l.v=Qi(Bt(h)),l.m=p,l.P=!0,la(l,null)}function la(l,h){l.F=Date.now(),zs(l),l.A=Bt(l.v);var p=l.A,v=l.R;Array.isArray(v)||(v=[String(v)]),Z(p.i,"t",v),l.C=0,p=l.j.J,l.h=new ur,l.g=ay(l.j,p?h:null,!l.m),0<l.O&&(l.M=new Ds(g(l.Y,l,l.g),l.O)),h=l.U,p=l.g,v=l.ca;var V="readystatechange";Array.isArray(V)||(V&&(sr[0]=V.toString()),V=sr);for(var U=0;U<V.length;U++){var G=Ae(p,V[U],v||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=l.H?y(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),Vn(),rh(l.i,l.u,l.A,l.l,l.R,l.m)}xe.prototype.ca=function(l){l=l.target;const h=this.M;h&&pr(l)==3?h.j():this.Y(l)},xe.prototype.Y=function(l){try{if(l==this.g)e:{const Et=pr(this.g);var h=this.g.Ba();const Gs=this.g.Z();if(!(3>Et)&&(Et!=3||this.g&&(this.h.h||this.g.oa()||Yg(this.g)))){this.J||Et!=4||h==7||(h==8||0>=Gs?Vn(3):Vn(2)),ca(this);var p=this.g.Z();this.X=p;t:if(ua(this)){var v=Yg(this.g);l="";var V=v.length,U=pr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fn(this),zt(this);var G="";break t}this.h.i=new a.TextDecoder}for(h=0;h<V;h++)this.h.h=!0,l+=this.h.i.decode(v[h],{stream:!(U&&h==V-1)});v.length=0,this.h.g+=l,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=p==200,fu(this.i,this.u,this.A,this.l,this.R,Et,p),this.o){if(this.T&&!this.K){t:{if(this.g){var ke,ft=this.g;if((ke=ft.g?ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(ke)){var ve=ke;break t}}ve=null}if(p=ve)Un(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$r(this,p);else{this.o=!1,this.s=3,be(12),Fn(this),zt(this);break e}}if(this.P){p=!0;let An;for(;!this.J&&this.C<G.length;)if(An=ih(this,G),An==Fs){Et==4&&(this.s=4,be(14),p=!1),Un(this.i,this.l,null,"[Incomplete Response]");break}else if(An==mu){this.s=4,be(15),Un(this.i,this.l,G,"[Invalid Chunk]"),p=!1;break}else Un(this.i,this.l,An,null),$r(this,An);if(ua(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Et!=4||G.length!=0||this.h.h||(this.s=1,be(16),p=!1),this.o=this.o&&p,!p)Un(this.i,this.l,G,"[Invalid Chunked Response]"),Fn(this),zt(this);else if(0<G.length&&!this.W){this.W=!0;var xt=this.j;xt.g==this&&xt.ba&&!xt.M&&(xt.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),uh(xt),xt.M=!0,be(11))}}else Un(this.i,this.l,G,null),$r(this,G);Et==4&&Fn(this),this.o&&!this.J&&(Et==4?ry(this.j,this):(this.o=!1,zs(this)))}else pI(this.g),p==400&&0<G.indexOf("Unknown SID")?(this.s=3,be(12)):(this.s=0,be(13)),Fn(this),zt(this)}}}catch{}finally{}};function ua(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function ih(l,h){var p=l.C,v=h.indexOf(`
`,p);return v==-1?Fs:(p=Number(h.substring(p,v)),isNaN(p)?mu:(v+=1,v+p>h.length?Fs:(h=h.slice(v,v+p),l.C=v+p,h)))}xe.prototype.cancel=function(){this.J=!0,Fn(this)};function zs(l){l.S=Date.now()+l.I,gu(l,l.I)}function gu(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=ar(g(l.ba,l),h)}function ca(l){l.B&&(a.clearTimeout(l.B),l.B=null)}xe.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(pu(this.i,this.A),this.L!=2&&(Vn(),be(17)),Fn(this),this.s=2,zt(this)):gu(this,this.S-l)};function zt(l){l.j.G==0||l.J||ry(l.j,l)}function Fn(l){ca(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,Bi(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function $r(l,h){try{var p=l.j;if(p.G!=0&&(p.g==l||ha(p.h,l))){if(!l.K&&ha(p.h,l)&&p.G==3){try{var v=p.Da.g.parse(h)}catch{v=null}if(Array.isArray(v)&&v.length==3){var V=v;if(V[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)Tu(p),xu(p);else break e;lh(p),be(18)}}else p.za=V[1],0<p.za-p.T&&37500>V[2]&&p.F&&p.v==0&&!p.C&&(p.C=ar(g(p.Za,p),6e3));if(1>=da(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Ji(p,11)}else if((l.K||p.g==l)&&Tu(p),!_(h))for(V=p.Da.g.parse(h),h=0;h<V.length;h++){let ve=V[h];if(p.T=ve[0],ve=ve[1],p.G==2)if(ve[0]=="c"){p.K=ve[1],p.ia=ve[2];const xt=ve[3];xt!=null&&(p.la=xt,p.j.info("VER="+p.la));const Et=ve[4];Et!=null&&(p.Aa=Et,p.j.info("SVER="+p.Aa));const Gs=ve[5];Gs!=null&&typeof Gs=="number"&&0<Gs&&(v=1.5*Gs,p.L=v,p.j.info("backChannelRequestTimeoutMs_="+v)),v=p;const An=l.g;if(An){const Su=An.g?An.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Su){var U=v.h;U.g||Su.indexOf("spdy")==-1&&Su.indexOf("quic")==-1&&Su.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Bs(U,U.h),U.h=null))}if(v.D){const ch=An.g?An.g.getResponseHeader("X-HTTP-Session-Id"):null;ch&&(v.ya=ch,Se(v.I,v.D,ch))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),v=p;var G=l;if(v.qa=oy(v,v.J?v.ia:null,v.W),G.K){fa(v.h,G);var ke=G,ft=v.L;ft&&(ke.I=ft),ke.B&&(ca(ke),zs(ke)),v.g=G}else ty(v);0<p.i.length&&Eu(p)}else ve[0]!="stop"&&ve[0]!="close"||Ji(p,7);else p.G==3&&(ve[0]=="stop"||ve[0]=="close"?ve[0]=="stop"?Ji(p,7):ah(p):ve[0]!="noop"&&p.l&&p.l.ta(ve),p.v=0)}}Vn(4)}catch{}}var cr=class{constructor(l,h){this.g=l,this.map=h}};function yu(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function qi(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function da(l){return l.h?1:l.g?l.g.size:0}function ha(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function Bs(l,h){l.g?l.g.add(h):l.h=h}function fa(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}yu.prototype.cancel=function(){if(this.i=Gi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Gi(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const p of l.g.values())h=h.concat(p.D);return h}return k(l.i)}function pa(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],p=l.length,v=0;v<p;v++)h.push(l[v]);return h}h=[],p=0;for(v in l)h[p++]=l[v];return h}function $s(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var p=0;p<l;p++)h.push(p);return h}h=[],p=0;for(const v in l)h[p++]=v;return h}}}function dr(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var p=$s(l),v=pa(l),V=v.length,U=0;U<V;U++)h.call(void 0,v[U],p&&p[U],l)}var Wr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fn(l,h){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var v=l[p].indexOf("="),V=null;if(0<=v){var U=l[p].substring(0,v);V=l[p].substring(v+1)}else U=l[p];h(U,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function hr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof hr){this.h=l.h,Ws(this,l.j),this.o=l.o,this.g=l.g,Ki(this,l.s),this.l=l.l;var h=l.i,p=new w;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),fr(this,p),this.m=l.m}else l&&(h=String(l).match(Wr))?(this.h=!1,Ws(this,h[1]||"",!0),this.o=Yi(h[2]||""),this.g=Yi(h[3]||"",!0),Ki(this,h[4]),this.l=Yi(h[5]||"",!0),fr(this,h[6]||"",!0),this.m=Yi(h[7]||"")):(this.h=!1,this.i=new w(null,this.h))}hr.prototype.toString=function(){var l=[],h=this.j;h&&l.push(Hr(h,vu,!0),":");var p=this.g;return(p||h=="file")&&(l.push("//"),(h=this.o)&&l.push(Hr(h,vu,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(Hr(p,p.charAt(0)=="/"?Hs:_u,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",Hr(p,$)),l.join("")};function Bt(l){return new hr(l)}function Ws(l,h,p){l.j=p?Yi(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function Ki(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function fr(l,h,p){h instanceof w?(l.i=h,de(l.i,l.h)):(p||(h=Hr(h,ma)),l.i=new w(h,l.h))}function Se(l,h,p){l.i.set(h,p)}function Qi(l){return Se(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Yi(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Hr(l,h,p){return typeof l=="string"?(l=encodeURI(l).replace(h,sh),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function sh(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var vu=/[#\/\?@]/g,_u=/[#\?:]/g,Hs=/[#\?]/g,ma=/[#\?@]/g,$=/#/g;function w(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function L(l){l.g||(l.g=new Map,l.h=0,l.i&&fn(l.i,function(h,p){l.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=w.prototype,t.add=function(l,h){L(this),this.i=null,l=oe(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(h),this.h+=1,this};function z(l,h){L(l),h=oe(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function H(l,h){return L(l),h=oe(l,h),l.g.has(h)}t.forEach=function(l,h){L(this),this.g.forEach(function(p,v){p.forEach(function(V){l.call(h,V,v,this)},this)},this)},t.na=function(){L(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let v=0;v<h.length;v++){const V=l[v];for(let U=0;U<V.length;U++)p.push(h[v])}return p},t.V=function(l){L(this);let h=[];if(typeof l=="string")H(this,l)&&(h=h.concat(this.g.get(oe(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)h=h.concat(l[p])}return h},t.set=function(l,h){return L(this),this.i=null,l=oe(this,l),H(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function Z(l,h,p){z(l,h),0<p.length&&(l.i=null,l.g.set(oe(l,h),k(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var v=h[p];const U=encodeURIComponent(String(v)),G=this.V(v);for(v=0;v<G.length;v++){var V=U;G[v]!==""&&(V+="="+encodeURIComponent(String(G[v]))),l.push(V)}}return this.i=l.join("&")};function oe(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function de(l,h){h&&!l.j&&(L(l),l.i=null,l.g.forEach(function(p,v){var V=v.toLowerCase();v!=V&&(z(this,v),Z(this,V,p))},l)),l.j=h}function Oe(l,h){const p=new lr;if(a.Image){const v=new Image;v.onload=I(We,p,"TestLoadImage: loaded",!0,h,v),v.onerror=I(We,p,"TestLoadImage: error",!1,h,v),v.onabort=I(We,p,"TestLoadImage: abort",!1,h,v),v.ontimeout=I(We,p,"TestLoadImage: timeout",!1,h,v),a.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=l}else h(!1)}function $t(l,h){const p=new lr,v=new AbortController,V=setTimeout(()=>{v.abort(),We(p,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:v.signal}).then(U=>{clearTimeout(V),U.ok?We(p,"TestPingServer: ok",!0,h):We(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(V),We(p,"TestPingServer: error",!1,h)})}function We(l,h,p,v,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),v(p)}catch{}}function qr(){this.g=new hu}function ga(l,h,p){const v=p||"";try{dr(l,function(V,U){let G=V;d(V)&&(G=zr(V)),h.push(v+U+"="+encodeURIComponent(G))})}catch(V){throw h.push(v+"type="+encodeURIComponent("_badmap")),V}}function Ze(l){this.l=l.Ub||null,this.j=l.eb||!1}C(Ze,Ls),Ze.prototype.g=function(){return new Xi(this.l,this.j)},Ze.prototype.i=function(l){return function(){return l}}({});function Xi(l,h){Ce.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Xi,Ce),t=Xi.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,va(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ya(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,va(this)),this.g&&(this.readyState=3,va(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Wg(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Wg(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?ya(this):va(this),this.readyState==3&&Wg(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,ya(this))},t.Qa=function(l){this.g&&(this.response=l,ya(this))},t.ga=function(){this.g&&ya(this)};function ya(l){l.readyState=4,l.l=null,l.j=null,l.v=null,va(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=h.next();return l.join(`\r
`)};function va(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Xi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Hg(l){let h="";return D(l,function(p,v){h+=v,h+=":",h+=p,h+=`\r
`}),h}function oh(l,h,p){e:{for(v in p){var v=!1;break e}v=!0}v||(p=Hg(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):Se(l,h,p))}function He(l){Ce.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(He,Ce);var hI=/^https?$/i,fI=["POST","PUT"];t=He.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,p,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():aa.g(),this.v=this.o?Os(this.o):Os(aa),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(U){qg(this,U);return}if(l=p||"",p=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var V in v)p.set(V,v[V]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const U of v.keys())p.set(U,v.get(U));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(p.keys()).find(U=>U.toLowerCase()=="content-type"),V=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(fI,h,void 0))||v||V||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,G]of p)this.g.setRequestHeader(U,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Qg(this),this.u=!0,this.g.send(l),this.u=!1}catch(U){qg(this,U)}};function qg(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,Gg(l),wu(l)}function Gg(l){l.A||(l.A=!0,Ve(l,"complete"),Ve(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Ve(this,"complete"),Ve(this,"abort"),wu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wu(this,!0)),He.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Kg(this):this.bb())},t.bb=function(){Kg(this)};function Kg(l){if(l.h&&typeof o<"u"&&(!l.v[1]||pr(l)!=4||l.Z()!=2)){if(l.u&&pr(l)==4)Ns(l.Ea,0,l);else if(Ve(l,"readystatechange"),pr(l)==4){l.h=!1;try{const G=l.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var v;if(v=G===0){var V=String(l.D).match(Wr)[1]||null;!V&&a.self&&a.self.location&&(V=a.self.location.protocol.slice(0,-1)),v=!hI.test(V?V.toLowerCase():"")}p=v}if(p)Ve(l,"complete"),Ve(l,"success");else{l.m=6;try{var U=2<pr(l)?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.Z()+"]",Gg(l)}}finally{wu(l)}}}}function wu(l,h){if(l.g){Qg(l);const p=l.g,v=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||Ve(l,"ready");try{p.onreadystatechange=v}catch{}}}function Qg(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function pr(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<pr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),du(h)}};function Yg(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function pI(l){const h={};l=(l.g&&2<=pr(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<l.length;v++){if(_(l[v]))continue;var p=N(l[v]);const V=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const U=h[V]||[];h[V]=U,U.push(p)}x(h,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function _a(l,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||h}function Xg(l){this.Aa=0,this.i=[],this.j=new lr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=_a("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=_a("baseRetryDelayMs",5e3,l),this.cb=_a("retryDelaySeedMs",1e4,l),this.Wa=_a("forwardChannelMaxRetries",2,l),this.wa=_a("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new yu(l&&l.concurrentRequestLimit),this.Da=new qr,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Xg.prototype,t.la=8,t.G=1,t.connect=function(l,h,p,v){be(0),this.W=l,this.H=h||{},p&&v!==void 0&&(this.H.OSID=p,this.H.OAID=v),this.F=this.X,this.I=oy(this,null,this.W),Eu(this)};function ah(l){if(Jg(l),l.G==3){var h=l.U++,p=Bt(l.I);if(Se(p,"SID",l.K),Se(p,"RID",h),Se(p,"TYPE","terminate"),wa(l,p),h=new xe(l,l.j,h),h.L=2,h.v=Qi(Bt(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=h.v,p=!0),p||(h.g=ay(h.j,null),h.g.ea(h.v)),h.F=Date.now(),zs(h)}sy(l)}function xu(l){l.g&&(uh(l),l.g.cancel(),l.g=null)}function Jg(l){xu(l),l.u&&(a.clearTimeout(l.u),l.u=null),Tu(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Eu(l){if(!qi(l.h)&&!l.s){l.s=!0;var h=l.Ga;ht||ne(),q||(ht(),q=!0),ee.add(h,l),l.B=0}}function mI(l,h){return da(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=ar(g(l.Ga,l,h),iy(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const V=new xe(this,this.j,l);let U=this.o;if(this.S&&(U?(U=y(U),A(U,this.S)):U=this.S),this.m!==null||this.O||(V.H=U,U=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var v=this.i[p];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(h+=v,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=ey(this,V,h),p=Bt(this.I),Se(p,"RID",l),Se(p,"CVER",22),this.D&&Se(p,"X-HTTP-Session-Id",this.D),wa(this,p),U&&(this.O?h="headers="+encodeURIComponent(String(Hg(U)))+"&"+h:this.m&&oh(p,this.m,U)),Bs(this.h,V),this.Ua&&Se(p,"TYPE","init"),this.P?(Se(p,"$req",h),Se(p,"SID","null"),V.T=!0,Hi(V,p,null)):Hi(V,p,h),this.G=2}}else this.G==3&&(l?Zg(this,l):this.i.length==0||qi(this.h)||Zg(this))};function Zg(l,h){var p;h?p=h.l:p=l.U++;const v=Bt(l.I);Se(v,"SID",l.K),Se(v,"RID",p),Se(v,"AID",l.T),wa(l,v),l.m&&l.o&&oh(v,l.m,l.o),p=new xe(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),h&&(l.i=h.D.concat(l.i)),h=ey(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Bs(l.h,p),Hi(p,v,h)}function wa(l,h){l.H&&D(l.H,function(p,v){Se(h,v,p)}),l.l&&dr({},function(p,v){Se(h,v,p)})}function ey(l,h,p){p=Math.min(l.i.length,p);var v=l.l?g(l.l.Na,l.l,l):null;e:{var V=l.i;let U=-1;for(;;){const G=["count="+p];U==-1?0<p?(U=V[0].g,G.push("ofs="+U)):U=0:G.push("ofs="+U);let ke=!0;for(let ft=0;ft<p;ft++){let ve=V[ft].g;const xt=V[ft].map;if(ve-=U,0>ve)U=Math.max(0,V[ft].g-100),ke=!1;else try{ga(xt,G,"req"+ve+"_")}catch{v&&v(xt)}}if(ke){v=G.join("&");break e}}}return l=l.i.splice(0,p),h.D=l,v}function ty(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;ht||ne(),q||(ht(),q=!0),ee.add(h,l),l.v=0}}function lh(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=ar(g(l.Fa,l),iy(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,ny(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=ar(g(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,be(10),xu(this),ny(this))};function uh(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function ny(l){l.g=new xe(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=Bt(l.qa);Se(h,"RID","rpc"),Se(h,"SID",l.K),Se(h,"AID",l.T),Se(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&Se(h,"TO",l.ja),Se(h,"TYPE","xmlhttp"),wa(l,h),l.m&&l.o&&oh(h,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=Qi(Bt(h)),p.m=null,p.P=!0,la(p,l)}t.Za=function(){this.C!=null&&(this.C=null,xu(this),lh(this),be(19))};function Tu(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function ry(l,h){var p=null;if(l.g==h){Tu(l),uh(l),l.g=null;var v=2}else if(ha(l.h,h))p=h.D,fa(l.h,h),v=1;else return;if(l.G!=0){if(h.o)if(v==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var V=l.B;v=$i(),Ve(v,new or(v,p)),Eu(l)}else ty(l);else if(V=h.s,V==3||V==0&&0<h.X||!(v==1&&mI(l,h)||v==2&&lh(l)))switch(p&&0<p.length&&(h=l.h,h.i=h.i.concat(p)),V){case 1:Ji(l,5);break;case 4:Ji(l,10);break;case 3:Ji(l,6);break;default:Ji(l,2)}}}function iy(l,h){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*h}function Ji(l,h){if(l.j.info("Error code "+h),h==2){var p=g(l.fb,l),v=l.Xa;const V=!v;v=new hr(v||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ws(v,"https"),Qi(v),V?Oe(v.toString(),p):$t(v.toString(),p)}else be(2);l.G=0,l.l&&l.l.sa(h),sy(l),Jg(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),be(2)):(this.j.info("Failed to ping google.com"),be(1))};function sy(l){if(l.G=0,l.ka=[],l.l){const h=Gi(l.h);(h.length!=0||l.i.length!=0)&&(P(l.ka,h),P(l.ka,l.i),l.h.i.length=0,k(l.i),l.i.length=0),l.l.ra()}}function oy(l,h,p){var v=p instanceof hr?Bt(p):new hr(p);if(v.g!="")h&&(v.g=h+"."+v.g),Ki(v,v.s);else{var V=a.location;v=V.protocol,h=h?h+"."+V.hostname:V.hostname,V=+V.port;var U=new hr(null);v&&Ws(U,v),h&&(U.g=h),V&&Ki(U,V),p&&(U.l=p),v=U}return p=l.D,h=l.ya,p&&h&&Se(v,p,h),Se(v,"VER",l.la),wa(l,v),v}function ay(l,h,p){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new He(new Ze({eb:p})):new He(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ly(){}t=ly.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Iu(){}Iu.prototype.g=function(l,h){return new Jt(l,h)};function Jt(l,h){Ce.call(this),this.g=new Xg(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!_(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!_(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new qs(this)}C(Jt,Ce),Jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Jt.prototype.close=function(){ah(this.g)},Jt.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=zr(l),l=p);h.i.push(new cr(h.Ya++,l)),h.G==3&&Eu(h)},Jt.prototype.N=function(){this.g.l=null,delete this.j,ah(this.g),delete this.g,Jt.aa.N.call(this)};function uy(l){jn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const p in h){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}C(uy,jn);function cy(){Ms.call(this),this.status=1}C(cy,Ms);function qs(l){this.g=l}C(qs,ly),qs.prototype.ua=function(){Ve(this.g,"a")},qs.prototype.ta=function(l){Ve(this.g,new uy(l))},qs.prototype.sa=function(l){Ve(this.g,new cy)},qs.prototype.ra=function(){Ve(this.g,"b")},Iu.prototype.createWebChannel=Iu.prototype.g,Jt.prototype.send=Jt.prototype.o,Jt.prototype.open=Jt.prototype.m,Jt.prototype.close=Jt.prototype.close,p1=function(){return new Iu},f1=function(){return $i()},h1=Mn,pp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Vs.NO_ERROR=0,Vs.TIMEOUT=8,Vs.HTTP_ERROR=6,pc=Vs,Br.COMPLETE="complete",d1=Br,js.EventType=hn,hn.OPEN="a",hn.CLOSE="b",hn.ERROR="c",hn.MESSAGE="d",Ce.prototype.listen=Ce.prototype.K,Fa=js,He.prototype.listenOnce=He.prototype.L,He.prototype.getLastError=He.prototype.Ka,He.prototype.getLastErrorCode=He.prototype.Ba,He.prototype.getStatus=He.prototype.Z,He.prototype.getResponseJson=He.prototype.Oa,He.prototype.getResponseText=He.prototype.oa,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Ha,c1=He}).apply(typeof Wu<"u"?Wu:typeof self<"u"?self:typeof window<"u"?window:{});const l_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}kt.UNAUTHENTICATED=new kt(null),kt.GOOGLE_CREDENTIALS=new kt("google-credentials-uid"),kt.FIRST_PARTY=new kt("first-party-uid"),kt.MOCK_USER=new kt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qo="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=new Dm("@firebase/firestore");function Ra(){return _s.logLevel}function Y(t,...e){if(_s.logLevel<=fe.DEBUG){const n=e.map(Hm);_s.debug(`Firestore (${Qo}): ${t}`,...n)}}function Pr(t,...e){if(_s.logLevel<=fe.ERROR){const n=e.map(Hm);_s.error(`Firestore (${Qo}): ${t}`,...n)}}function Oo(t,...e){if(_s.logLevel<=fe.WARN){const n=e.map(Hm);_s.warn(`Firestore (${Qo}): ${t}`,...n)}}function Hm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(t="Unexpected state"){const e=`FIRESTORE (${Qo}) INTERNAL ASSERTION FAILED: `+t;throw Pr(e),new Error(e)}function Te(t,e){t||ie()}function le(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Mr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _N{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(kt.UNAUTHENTICATED))}shutdown(){}}class wN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class xN{constructor(e){this.t=e,this.currentUser=kt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Te(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Ir;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ir,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ir)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string"),new m1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string"),new kt(e)}}class EN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=kt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class TN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new EN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(kt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class IN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class SN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Te(this.o===void 0);const r=s=>{s.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Te(typeof n.token=="string"),this.R=n.token,new IN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=AN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function _e(t,e){return t<e?-1:t>e?1:0}function jo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return at.fromMillis(Date.now())}static fromDate(e){return at.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new at(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ae(e)}static min(){return new ae(new at(0,0))}static max(){return new ae(new at(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,n,r){n===void 0?n=0:n>e.length&&ie(),r===void 0?r=e.length-n:r>e.length-n&&ie(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return kl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof kl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class De extends kl{construct(e,n,r){return new De(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new De(n)}static emptyPath(){return new De([])}}const kN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends kl{construct(e,n,r){return new gt(e,n,r)}static isValidIdentifier(e){return kN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new gt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new K(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new K(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new K(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new K(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gt(n)}static emptyPath(){return new gt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(De.fromString(e))}static fromName(e){return new te(De.fromString(e).popFirst(5))}static empty(){return new te(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new De(e.slice()))}}function bN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ae.fromTimestamp(r===1e9?new at(n+1,0):new at(n,r));return new bi(i,te.empty(),e)}function RN(t){return new bi(t.readTime,t.key,-1)}class bi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new bi(ae.min(),te.empty(),-1)}static max(){return new bi(ae.max(),te.empty(),-1)}}function CN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=te.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class NN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yl(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==PN)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ie(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(i=>i?B.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new B((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const d=u;n(e[d]).next(f=>{o[d]=f,++a,a===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new B((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function DN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Xl(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}qm.oe=-1;function Vd(t){return t==null}function rd(t){return t===0&&1/t==-1/0}function LN(t){return typeof t=="number"&&Number.isInteger(t)&&!rd(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function As(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function y1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n){this.comparator=e,this.root=n||mt.EMPTY}insert(e,n){return new $e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,mt.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,mt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Hu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Hu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Hu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Hu(this.root,e,this.comparator,!0)}}class Hu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class mt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??mt.RED,this.left=i??mt.EMPTY,this.right=s??mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new mt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return mt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return mt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ie();const e=this.left.check();if(e!==this.right.check())throw ie();return e+(this.isRed()?0:1)}}mt.EMPTY=null,mt.RED=!0,mt.BLACK=!1;mt.EMPTY=new class{constructor(){this.size=0}get key(){throw ie()}get value(){throw ie()}get color(){throw ie()}get left(){throw ie()}get right(){throw ie()}copy(e,n,r,i,s){return this}insert(e,n,r){return new mt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new c_(this.data.getIterator())}getIteratorFrom(e){return new c_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof vt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new vt(this.comparator);return n.data=e,n}}class c_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.fields=e,e.sort(gt.comparator)}static empty(){return new sn([])}unionWith(e){let n=new vt(gt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new sn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return jo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new v1("Invalid base64 string: "+s):s}}(e);return new wt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new wt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}wt.EMPTY_BYTE_STRING=new wt("");const ON=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ri(t){if(Te(!!t),typeof t=="string"){let e=0;const n=ON.exec(t);if(Te(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Qe(t.seconds),nanos:Qe(t.nanos)}}function Qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ws(t){return typeof t=="string"?wt.fromBase64String(t):wt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Km(t){const e=t.mapValue.fields.__previous_value__;return Gm(e)?Km(e):e}function bl(t){const e=Ri(t.mapValue.fields.__local_write_time__.timestampValue);return new at(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(e,n,r,i,s,o,a,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=d}}class Rl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Rl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Rl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu={mapValue:{}};function xs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Gm(t)?4:VN(t)?9007199254740991:MN(t)?10:11:ie()}function Zn(t,e){if(t===e)return!0;const n=xs(t);if(n!==xs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return bl(t).isEqual(bl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ri(i.timestampValue),a=Ri(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ws(i.bytesValue).isEqual(ws(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Qe(i.geoPointValue.latitude)===Qe(s.geoPointValue.latitude)&&Qe(i.geoPointValue.longitude)===Qe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Qe(i.integerValue)===Qe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Qe(i.doubleValue),a=Qe(s.doubleValue);return o===a?rd(o)===rd(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return jo(t.arrayValue.values||[],e.arrayValue.values||[],Zn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(u_(o)!==u_(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Zn(o[u],a[u])))return!1;return!0}(t,e);default:return ie()}}function Cl(t,e){return(t.values||[]).find(n=>Zn(n,e))!==void 0}function Mo(t,e){if(t===e)return 0;const n=xs(t),r=xs(e);if(n!==r)return _e(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Qe(s.integerValue||s.doubleValue),u=Qe(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return d_(t.timestampValue,e.timestampValue);case 4:return d_(bl(t),bl(e));case 5:return _e(t.stringValue,e.stringValue);case 6:return function(s,o){const a=ws(s),u=ws(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let d=0;d<a.length&&d<u.length;d++){const f=_e(a[d],u[d]);if(f!==0)return f}return _e(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=_e(Qe(s.latitude),Qe(o.latitude));return a!==0?a:_e(Qe(s.longitude),Qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return h_(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,d,f;const m=s.fields||{},g=o.fields||{},I=(a=m.value)===null||a===void 0?void 0:a.arrayValue,C=(u=g.value)===null||u===void 0?void 0:u.arrayValue,k=_e(((d=I==null?void 0:I.values)===null||d===void 0?void 0:d.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:h_(I,C)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===qu.mapValue&&o===qu.mapValue)return 0;if(s===qu.mapValue)return 1;if(o===qu.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),d=o.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=_e(u[m],f[m]);if(g!==0)return g;const I=Mo(a[u[m]],d[f[m]]);if(I!==0)return I}return _e(u.length,f.length)}(t.mapValue,e.mapValue);default:throw ie()}}function d_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=Ri(t),r=Ri(e),i=_e(n.seconds,r.seconds);return i!==0?i:_e(n.nanos,r.nanos)}function h_(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Mo(n[i],r[i]);if(s)return s}return _e(n.length,r.length)}function Vo(t){return mp(t)}function mp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ri(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ws(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return te.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=mp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${mp(n.fields[o])}`;return i+"}"}(t.mapValue):ie()}function f_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function gp(t){return!!t&&"integerValue"in t}function Qm(t){return!!t&&"arrayValue"in t}function p_(t){return!!t&&"nullValue"in t}function m_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function mc(t){return!!t&&"mapValue"in t}function MN(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function tl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return As(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=tl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=tl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function VN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.value=e}static empty(){return new qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!mc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=tl(n)}setAll(e){let n=gt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=tl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());mc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Zn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];mc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){As(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new qt(tl(this.value))}}function _1(t){const e=[];return As(t.fields,(n,r)=>{const i=new gt([n]);if(mc(r)){const s=_1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new sn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Rt(e,0,ae.min(),ae.min(),ae.min(),qt.empty(),0)}static newFoundDocument(e,n,r,i){return new Rt(e,1,n,ae.min(),r,i,0)}static newNoDocument(e,n){return new Rt(e,2,n,ae.min(),ae.min(),qt.empty(),0)}static newUnknownDocument(e,n){return new Rt(e,3,n,ae.min(),ae.min(),qt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e,n){this.position=e,this.inclusive=n}}function g_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=te.comparator(te.fromName(o.referenceValue),n.key):r=Mo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function y_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,n="asc"){this.field=e,this.dir=n}}function UN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{}class nt extends w1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new zN(e,n,r):n==="array-contains"?new WN(e,r):n==="in"?new HN(e,r):n==="not-in"?new qN(e,r):n==="array-contains-any"?new GN(e,r):new nt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new BN(e,r):new $N(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Mo(n,this.value)):n!==null&&xs(this.value)===xs(n)&&this.matchesComparison(Mo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class On extends w1{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new On(e,n)}matches(e){return x1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function x1(t){return t.op==="and"}function E1(t){return FN(t)&&x1(t)}function FN(t){for(const e of t.filters)if(e instanceof On)return!1;return!0}function yp(t){if(t instanceof nt)return t.field.canonicalString()+t.op.toString()+Vo(t.value);if(E1(t))return t.filters.map(e=>yp(e)).join(",");{const e=t.filters.map(n=>yp(n)).join(",");return`${t.op}(${e})`}}function T1(t,e){return t instanceof nt?function(r,i){return i instanceof nt&&r.op===i.op&&r.field.isEqual(i.field)&&Zn(r.value,i.value)}(t,e):t instanceof On?function(r,i){return i instanceof On&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&T1(o,i.filters[a]),!0):!1}(t,e):void ie()}function I1(t){return t instanceof nt?function(n){return`${n.field.canonicalString()} ${n.op} ${Vo(n.value)}`}(t):t instanceof On?function(n){return n.op.toString()+" {"+n.getFilters().map(I1).join(" ,")+"}"}(t):"Filter"}class zN extends nt{constructor(e,n,r){super(e,n,r),this.key=te.fromName(r.referenceValue)}matches(e){const n=te.comparator(e.key,this.key);return this.matchesComparison(n)}}class BN extends nt{constructor(e,n){super(e,"in",n),this.keys=S1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $N extends nt{constructor(e,n){super(e,"not-in",n),this.keys=S1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function S1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>te.fromName(r.referenceValue))}class WN extends nt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Qm(n)&&Cl(n.arrayValue,this.value)}}class HN extends nt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Cl(this.value.arrayValue,n)}}class qN extends nt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Cl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Cl(this.value.arrayValue,n)}}class GN extends nt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Qm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Cl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function v_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new KN(t,e,n,r,i,s,o)}function Ym(t){const e=le(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>yp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Vd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Vo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Vo(r)).join(",")),e.ue=n}return e.ue}function Xm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!UN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!T1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!y_(t.startAt,e.startAt)&&y_(t.endAt,e.endAt)}function vp(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function QN(t,e,n,r,i,s,o,a){return new Yo(t,e,n,r,i,s,o,a)}function Ud(t){return new Yo(t)}function __(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function A1(t){return t.collectionGroup!==null}function nl(t){const e=le(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new vt(gt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(a=a.add(d.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Pl(s,r))}),n.has(gt.keyField().canonicalString())||e.ce.push(new Pl(gt.keyField(),r))}return e.ce}function Xn(t){const e=le(t);return e.le||(e.le=YN(e,nl(t))),e.le}function YN(t,e){if(t.limitType==="F")return v_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Pl(i.field,s)});const n=t.endAt?new id(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new id(t.startAt.position,t.startAt.inclusive):null;return v_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function _p(t,e){const n=t.filters.concat([e]);return new Yo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function sd(t,e,n){return new Yo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Fd(t,e){return Xm(Xn(t),Xn(e))&&t.limitType===e.limitType}function k1(t){return`${Ym(Xn(t))}|lt:${t.limitType}`}function Qs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>I1(i)).join(", ")}]`),Vd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Vo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Vo(i)).join(",")),`Target(${r})`}(Xn(t))}; limitType=${t.limitType})`}function zd(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):te.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of nl(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const d=g_(o,a,u);return o.inclusive?d<=0:d<0}(r.startAt,nl(r),i)||r.endAt&&!function(o,a,u){const d=g_(o,a,u);return o.inclusive?d>=0:d>0}(r.endAt,nl(r),i))}(t,e)}function XN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function b1(t){return(e,n)=>{let r=!1;for(const i of nl(t)){const s=JN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function JN(t,e,n){const r=t.field.isKeyField()?te.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),d=a.data.field(s);return u!==null&&d!==null?Mo(u,d):ie()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ie()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){As(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return y1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZN=new $e(te.comparator);function Nr(){return ZN}const R1=new $e(te.comparator);function za(...t){let e=R1;for(const n of t)e=e.insert(n.key,n);return e}function C1(t){let e=R1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function os(){return rl()}function P1(){return rl()}function rl(){return new Xo(t=>t.toString(),(t,e)=>t.isEqual(e))}const e2=new $e(te.comparator),t2=new vt(te.comparator);function he(...t){let e=t2;for(const n of t)e=e.add(n);return e}const n2=new vt(_e);function r2(){return n2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rd(e)?"-0":e}}function N1(t){return{integerValue:""+t}}function D1(t,e){return LN(e)?N1(e):Jm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(){this._=void 0}}function i2(t,e,n){return t instanceof Nl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Gm(s)&&(s=Km(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Dl?O1(t,e):t instanceof Ll?j1(t,e):function(i,s){const o=L1(i,s),a=w_(o)+w_(i.Pe);return gp(o)&&gp(i.Pe)?N1(a):Jm(i.serializer,a)}(t,e)}function s2(t,e,n){return t instanceof Dl?O1(t,e):t instanceof Ll?j1(t,e):n}function L1(t,e){return t instanceof Ol?function(r){return gp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Nl extends Bd{}class Dl extends Bd{constructor(e){super(),this.elements=e}}function O1(t,e){const n=M1(e);for(const r of t.elements)n.some(i=>Zn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ll extends Bd{constructor(e){super(),this.elements=e}}function j1(t,e){let n=M1(e);for(const r of t.elements)n=n.filter(i=>!Zn(i,r));return{arrayValue:{values:n}}}class Ol extends Bd{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function w_(t){return Qe(t.integerValue||t.doubleValue)}function M1(t){return Qm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e,n){this.field=e,this.transform=n}}function o2(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Dl&&i instanceof Dl||r instanceof Ll&&i instanceof Ll?jo(r.elements,i.elements,Zn):r instanceof Ol&&i instanceof Ol?Zn(r.Pe,i.Pe):r instanceof Nl&&i instanceof Nl}(t.transform,e.transform)}class a2{constructor(e,n){this.version=e,this.transformResults=n}}class Mt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Mt}static exists(e){return new Mt(void 0,e)}static updateTime(e){return new Mt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function gc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class $d{}function U1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Wd(t.key,Mt.none()):new Jl(t.key,t.data,Mt.none());{const n=t.data,r=qt.empty();let i=new vt(gt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ji(t.key,r,new sn(i.toArray()),Mt.none())}}function l2(t,e,n){t instanceof Jl?function(i,s,o){const a=i.value.clone(),u=E_(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ji?function(i,s,o){if(!gc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=E_(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(F1(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function il(t,e,n,r){return t instanceof Jl?function(s,o,a,u){if(!gc(s.precondition,o))return a;const d=s.value.clone(),f=T_(s.fieldTransforms,u,o);return d.setAll(f),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof ji?function(s,o,a,u){if(!gc(s.precondition,o))return a;const d=T_(s.fieldTransforms,u,o),f=o.data;return f.setAll(F1(s)),f.setAll(d),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,a){return gc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function u2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=L1(r.transform,i||null);s!=null&&(n===null&&(n=qt.empty()),n.set(r.field,s))}return n||null}function x_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&jo(r,i,(s,o)=>o2(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Jl extends $d{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ji extends $d{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function F1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function E_(t,e,n){const r=new Map;Te(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,s2(o,a,n[i]))}return r}function T_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,i2(s,o,e))}return r}class Wd extends $d{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class c2 extends $d{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&l2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=il(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=il(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=P1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=U1(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ae.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),he())}isEqual(e){return this.batchId===e.batchId&&jo(this.mutations,e.mutations,(n,r)=>x_(n,r))&&jo(this.baseMutations,e.baseMutations,(n,r)=>x_(n,r))}}class Zm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Te(e.mutations.length===r.length);let i=function(){return e2}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Zm(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et,me;function p2(t){switch(t){default:return ie();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function z1(t){if(t===void 0)return Pr("GRPC error has no .code"),F.UNKNOWN;switch(t){case et.OK:return F.OK;case et.CANCELLED:return F.CANCELLED;case et.UNKNOWN:return F.UNKNOWN;case et.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case et.INTERNAL:return F.INTERNAL;case et.UNAVAILABLE:return F.UNAVAILABLE;case et.UNAUTHENTICATED:return F.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case et.NOT_FOUND:return F.NOT_FOUND;case et.ALREADY_EXISTS:return F.ALREADY_EXISTS;case et.PERMISSION_DENIED:return F.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case et.ABORTED:return F.ABORTED;case et.OUT_OF_RANGE:return F.OUT_OF_RANGE;case et.UNIMPLEMENTED:return F.UNIMPLEMENTED;case et.DATA_LOSS:return F.DATA_LOSS;default:return ie()}}(me=et||(et={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m2(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g2=new cs([4294967295,4294967295],0);function I_(t){const e=m2().encode(t),n=new u1;return n.update(e),new Uint8Array(n.digest())}function S_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new cs([n,r],0),new cs([i,s],0)]}class eg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ba(`Invalid padding: ${n}`);if(r<0)throw new Ba(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ba(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ba(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=cs.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(cs.fromNumber(r)));return i.compare(g2)===1&&(i=new cs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=I_(e),[r,i]=S_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new eg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=I_(e),[r,i]=S_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ba extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Zl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Hd(ae.min(),i,new $e(_e),Nr(),he())}}class Zl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Zl(r,n,he(),he(),he())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class B1{constructor(e,n){this.targetId=e,this.me=n}}class $1{constructor(e,n,r=wt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class A_{constructor(){this.fe=0,this.ge=b_(),this.pe=wt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=he(),n=he(),r=he();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ie()}}),new Zl(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=b_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Te(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class y2{constructor(e){this.Le=e,this.Be=new Map,this.ke=Nr(),this.qe=k_(),this.Qe=new $e(_e)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ie()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(vp(s))if(r===0){const o=new te(s.path);this.Ue(n,o,Rt.newNoDocument(o,ae.min()))}else Te(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=ws(r).toUint8Array()}catch(u){if(u instanceof v1)return Oo("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new eg(o,i,s)}catch(u){return Oo(u instanceof Ba?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&vp(a.target)){const u=new te(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Rt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=he();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Hd(e,n,this.Qe,this.ke,r);return this.ke=Nr(),this.qe=k_(),this.Qe=new $e(_e),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new A_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new vt(_e),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new A_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function k_(){return new $e(te.comparator)}function b_(){return new $e(te.comparator)}const v2={asc:"ASCENDING",desc:"DESCENDING"},_2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},w2={and:"AND",or:"OR"};class x2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function wp(t,e){return t.useProto3Json||Vd(e)?e:{value:e}}function od(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function W1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function E2(t,e){return od(t,e.toTimestamp())}function Jn(t){return Te(!!t),ae.fromTimestamp(function(n){const r=Ri(n);return new at(r.seconds,r.nanos)}(t))}function tg(t,e){return xp(t,e).canonicalString()}function xp(t,e){const n=function(i){return new De(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function H1(t){const e=De.fromString(t);return Te(Y1(e)),e}function Ep(t,e){return tg(t.databaseId,e.path)}function Hh(t,e){const n=H1(e);if(n.get(1)!==t.databaseId.projectId)throw new K(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new te(G1(n))}function q1(t,e){return tg(t.databaseId,e)}function T2(t){const e=H1(t);return e.length===4?De.emptyPath():G1(e)}function Tp(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function G1(t){return Te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function R_(t,e,n){return{name:Ep(t,e),fields:n.value.mapValue.fields}}function I2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:ie()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,f){return d.useProto3Json?(Te(f===void 0||typeof f=="string"),wt.fromBase64String(f||"")):(Te(f===void 0||f instanceof Buffer||f instanceof Uint8Array),wt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(d){const f=d.code===void 0?F.UNKNOWN:z1(d.code);return new K(f,d.message||"")}(o);n=new $1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Hh(t,r.document.name),s=Jn(r.document.updateTime),o=r.document.createTime?Jn(r.document.createTime):ae.min(),a=new qt({mapValue:{fields:r.document.fields}}),u=Rt.newFoundDocument(i,s,o,a),d=r.targetIds||[],f=r.removedTargetIds||[];n=new yc(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Hh(t,r.document),s=r.readTime?Jn(r.readTime):ae.min(),o=Rt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new yc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Hh(t,r.document),s=r.removedTargetIds||[];n=new yc([],s,i,null)}else{if(!("filter"in e))return ie();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new f2(i,s),a=r.targetId;n=new B1(a,o)}}return n}function S2(t,e){let n;if(e instanceof Jl)n={update:R_(t,e.key,e.value)};else if(e instanceof Wd)n={delete:Ep(t,e.key)};else if(e instanceof ji)n={update:R_(t,e.key,e.data),updateMask:L2(e.fieldMask)};else{if(!(e instanceof c2))return ie();n={verify:Ep(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Nl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Dl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ll)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ol)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw ie()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:E2(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ie()}(t,e.precondition)),n}function A2(t,e){return t&&t.length>0?(Te(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Jn(i.updateTime):Jn(s);return o.isEqual(ae.min())&&(o=Jn(s)),new a2(o,i.transformResults||[])}(n,e))):[]}function k2(t,e){return{documents:[q1(t,e.path)]}}function b2(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=q1(t,i);const s=function(d){if(d.length!==0)return Q1(On.create(d,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(d){if(d.length!==0)return d.map(f=>function(g){return{field:Ys(g.field),direction:P2(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=wp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:i}}function R2(t){let e=T2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Te(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const g=K1(m);return g instanceof On&&E1(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(C){return new Pl(Xs(C.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(n.orderBy));let a=null;n.limit&&(a=function(m){let g;return g=typeof m=="object"?m.value:m,Vd(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,I=m.values||[];return new id(I,g)}(n.startAt));let d=null;return n.endAt&&(d=function(m){const g=!m.before,I=m.values||[];return new id(I,g)}(n.endAt)),QN(e,i,o,s,a,"F",u,d)}function C2(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ie()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function K1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Xs(n.unaryFilter.field);return nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Xs(n.unaryFilter.field);return nt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Xs(n.unaryFilter.field);return nt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Xs(n.unaryFilter.field);return nt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ie()}}(t):t.fieldFilter!==void 0?function(n){return nt.create(Xs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ie()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return On.create(n.compositeFilter.filters.map(r=>K1(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ie()}}(n.compositeFilter.op))}(t):ie()}function P2(t){return v2[t]}function N2(t){return _2[t]}function D2(t){return w2[t]}function Ys(t){return{fieldPath:t.canonicalString()}}function Xs(t){return gt.fromServerFormat(t.fieldPath)}function Q1(t){return t instanceof nt?function(n){if(n.op==="=="){if(m_(n.value))return{unaryFilter:{field:Ys(n.field),op:"IS_NAN"}};if(p_(n.value))return{unaryFilter:{field:Ys(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(m_(n.value))return{unaryFilter:{field:Ys(n.field),op:"IS_NOT_NAN"}};if(p_(n.value))return{unaryFilter:{field:Ys(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ys(n.field),op:N2(n.op),value:n.value}}}(t):t instanceof On?function(n){const r=n.getFilters().map(i=>Q1(i));return r.length===1?r[0]:{compositeFilter:{op:D2(n.op),filters:r}}}(t):ie()}function L2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Y1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n,r,i,s=ae.min(),o=ae.min(),a=wt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new di(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(e){this.ct=e}}function j2(t){const e=R2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?sd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(){this.un=new V2}addToCollectionParentIndex(e,n){return this.un.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(bi.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(bi.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class V2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new vt(De.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new vt(De.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Uo(0)}static kn(){return new Uo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(){this.changes=new Xo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Rt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&il(r.mutation,i,sn.empty(),at.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,n,r=he()){const i=os();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=za();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=os();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,he()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Nr();const o=rl(),a=function(){return rl()}();return n.forEach((u,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof ji)?s=s.insert(d.key,d):f!==void 0?(o.set(d.key,f.mutation.getFieldMask()),il(f.mutation,d,f.mutation.getFieldMask(),at.now())):o.set(d.key,sn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((d,f)=>o.set(d,f)),n.forEach((d,f)=>{var m;return a.set(d,new F2(f,(m=o.get(d))!==null&&m!==void 0?m:null))}),a))}recalculateAndSaveOverlays(e,n){const r=rl();let i=new $e((o,a)=>o-a),s=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let f=r.get(u)||sn.empty();f=a.applyToLocalView(d,f),r.set(u,f);const m=(i.get(a.batchId)||he()).add(u);i=i.insert(a.batchId,m)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),d=u.key,f=u.value,m=P1();f.forEach(g=>{if(!s.has(g)){const I=U1(n.get(g),r.get(g));I!==null&&m.set(g,I),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,m))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return te.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):A1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):B.resolve(os());let a=-1,u=s;return o.next(d=>B.forEach(d,(f,m)=>(a<m.largestBatchId&&(a=m.largestBatchId),s.get(f)?B.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,u,d,he())).next(f=>({batchId:a,changes:C1(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new te(n)).next(r=>{let i=za();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=za();return this.indexManager.getCollectionParents(e,s).next(a=>B.forEach(a,u=>{const d=function(m,g){return new Yo(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,d)=>{const f=d.getKey();o.get(f)===null&&(o=o.insert(f,Rt.newInvalidDocument(f)))});let a=za();return o.forEach((u,d)=>{const f=s.get(u);f!==void 0&&il(f.mutation,d,sn.empty(),at.now()),zd(n,d)&&(a=a.insert(u,d))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return B.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Jn(i.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:j2(i.bundledQuery),readTime:Jn(i.readTime)}}(n)),B.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(){this.overlays=new $e(te.comparator),this.Ir=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=os();return B.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const i=os(),s=n.length+1,o=new te(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return B.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new $e((d,f)=>d-f);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let f=s.get(d.largestBatchId);f===null&&(f=os(),s=s.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const a=os(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>a.set(d,f)),!(a.size()>=i)););return B.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new h2(n,r));let s=this.Ir.get(n);s===void 0&&(s=he(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(){this.sessionToken=wt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(){this.Tr=new vt(lt.Er),this.dr=new vt(lt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new lt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new lt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new te(new De([])),r=new lt(n,e),i=new lt(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new te(new De([])),r=new lt(n,e),i=new lt(n,e+1);let s=he();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new lt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class lt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return te.comparator(e.key,n.key)||_e(e.wr,n.wr)}static Ar(e,n){return _e(e.wr,n.wr)||te.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new vt(lt.Er)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new d2(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new lt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return B.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new lt(n,0),i=new lt(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),B.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new vt(_e);return n.forEach(i=>{const s=new lt(i,0),o=new lt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),B.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;te.isDocumentKey(s)||(s=s.child(""));const o=new lt(new te(s),0);let a=new vt(_e);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(a=a.add(u.wr)),!0)},o),B.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Te(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return B.forEach(n.mutations,i=>{const s=new lt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new lt(n,0),i=this.br.firstAfterOrEqual(r);return B.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(e){this.Mr=e,this.docs=function(){return new $e(te.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():Rt.newInvalidDocument(n))}getEntries(e,n){let r=Nr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Rt.newInvalidDocument(i))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Nr();const o=n.path,a=new te(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||CN(RN(f),r)<=0||(i.has(f.key)||zd(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return B.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ie()}Or(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new G2(this)}getSize(e){return B.resolve(this.size)}}class G2 extends U2{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K2{constructor(e){this.persistence=e,this.Nr=new Xo(n=>Ym(n),Xm),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ng,this.targetCount=0,this.kr=Uo.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),B.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Uo(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.Kn(n),B.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),B.waitFor(s).next(()=>i)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),B.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{constructor(e,n){this.qr={},this.overlays={},this.Qr=new qm(0),this.Kr=!1,this.Kr=!0,this.$r=new W2,this.referenceDelegate=e(this),this.Ur=new K2(this),this.indexManager=new M2,this.remoteDocumentCache=function(i){return new q2(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new O2(n),this.Gr=new B2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new $2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new H2(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const i=new Y2(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return B.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class Y2 extends NN{constructor(e){super(),this.currentSequenceNumber=e}}class rg{constructor(e){this.persistence=e,this.Jr=new ng,this.Yr=null}static Zr(e){return new rg(e)}get Xr(){if(this.Yr)return this.Yr;throw ie()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),B.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.Xr,r=>{const i=te.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,ae.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return B.or([()=>B.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=he(),i=he();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ig(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Ub()?8:DN(Nt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new X2;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Ra()<=fe.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",Qs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),B.resolve()):(Ra()<=fe.DEBUG&&Y("QueryEngine","Query:",Qs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ra()<=fe.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",Qs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xn(n))):B.resolve())}Yi(e,n){if(__(n))return B.resolve(null);let r=Xn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=sd(n,null,"F"),r=Xn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=he(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(n,a);return this.ns(n,d,o,u.readTime)?this.Yi(e,sd(n,null,"F")):this.rs(e,d,n,u)}))})))}Zi(e,n,r,i){return __(n)||i.isEqual(ae.min())?B.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?B.resolve(null):(Ra()<=fe.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Qs(n)),this.rs(e,o,n,bN(i,-1)).next(a=>a))})}ts(e,n){let r=new vt(b1(e));return n.forEach((i,s)=>{zd(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Ra()<=fe.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",Qs(n)),this.Ji.getDocumentsMatchingQuery(e,n,bi.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new $e(_e),this._s=new Xo(s=>Ym(s),Xm),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new z2(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function eD(t,e,n,r){return new Z2(t,e,n,r)}async function X1(t,e){const n=le(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=he();for(const d of i){o.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of s){a.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:o,addedBatchIds:a}))})})}function tD(t,e){const n=le(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,d,f){const m=d.batch,g=m.keys();let I=B.resolve();return g.forEach(C=>{I=I.next(()=>f.getEntry(u,C)).next(k=>{const P=d.docVersions.get(C);Te(P!==null),k.version.compareTo(P)<0&&(m.applyToRemoteDocument(k,d),k.isValidDocument()&&(k.setReadTime(d.commitVersion),f.addEntry(k)))})}),I.next(()=>a.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=he();for(let d=0;d<a.mutationResults.length;++d)a.mutationResults[d].transformResults.length>0&&(u=u.add(a.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function J1(t){const e=le(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function nD(t,e){const n=le(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((f,m)=>{const g=i.get(m);if(!g)return;a.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,m)));let I=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?I=I.withResumeToken(wt.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,r)),i=i.insert(m,I),function(k,P,E){return k.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(g,I,f)&&a.push(n.Ur.updateTargetData(s,I))});let u=Nr(),d=he();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),a.push(rD(s,o,e.documentUpdates).next(f=>{u=f.Ps,d=f.Is})),!r.isEqual(ae.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(m=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(f)}return B.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,d)).next(()=>u)}).then(s=>(n.os=i,s))}function rD(t,e,n){let r=he(),i=he();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Nr();return n.forEach((a,u)=>{const d=s.get(a);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(ae.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):Y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",d.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function iD(t,e){const n=le(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function sD(t,e){const n=le(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,B.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new di(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Ip(t,e,n){const r=le(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Xl(o))throw o;Y("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function C_(t,e,n){const r=le(t);let i=ae.min(),s=he();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,f){const m=le(u),g=m._s.get(f);return g!==void 0?B.resolve(m.os.get(g)):m.Ur.getTargetData(d,f)}(r,o,Xn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:ae.min(),n?s:he())).next(a=>(oD(r,XN(e),a),{documents:a,Ts:s})))}function oD(t,e,n){let r=t.us.get(e)||ae.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class P_{constructor(){this.activeTargetIds=r2()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class aD{constructor(){this.so=new P_,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new P_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gu=null;function qh(){return Gu===null?Gu=function(){return 268435456+Math.round(2147483648*Math.random())}():Gu++,"0x"+Gu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St="WebChannelConnection";class dD extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=qh(),u=this.xo(n,r.toUriEncodedString());Y("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,s,o),this.No(n,u,d,i).then(f=>(Y("RestConnection",`Received RPC '${n}' ${a}: `,f),f),f=>{throw Oo("RestConnection",`RPC '${n}' ${a} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=uD[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=qh();return new Promise((o,a)=>{const u=new c1;u.setWithCredentials(!0),u.listenOnce(d1.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case pc.NO_ERROR:const f=u.getResponseJson();Y(St,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case pc.TIMEOUT:Y(St,`RPC '${e}' ${s} timed out`),a(new K(F.DEADLINE_EXCEEDED,"Request time out"));break;case pc.HTTP_ERROR:const m=u.getStatus();if(Y(St,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const I=g==null?void 0:g.error;if(I&&I.status&&I.message){const C=function(P){const E=P.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(E)>=0?E:F.UNKNOWN}(I.status);a(new K(C,I.message))}else a(new K(F.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new K(F.UNAVAILABLE,"Connection failed."));break;default:ie()}}finally{Y(St,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);Y(St,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",d,r,15)})}Bo(e,n,r){const i=qh(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=p1(),a=f1(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");Y(St,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=o.createWebChannel(f,u);let g=!1,I=!1;const C=new cD({Io:P=>{I?Y(St,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(g||(Y(St,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),Y(St,`RPC '${e}' stream ${i} sending:`,P),m.send(P))},To:()=>m.close()}),k=(P,E,_)=>{P.listen(E,S=>{try{_(S)}catch(O){setTimeout(()=>{throw O},0)}})};return k(m,Fa.EventType.OPEN,()=>{I||(Y(St,`RPC '${e}' stream ${i} transport opened.`),C.yo())}),k(m,Fa.EventType.CLOSE,()=>{I||(I=!0,Y(St,`RPC '${e}' stream ${i} transport closed`),C.So())}),k(m,Fa.EventType.ERROR,P=>{I||(I=!0,Oo(St,`RPC '${e}' stream ${i} transport errored:`,P),C.So(new K(F.UNAVAILABLE,"The operation could not be completed")))}),k(m,Fa.EventType.MESSAGE,P=>{var E;if(!I){const _=P.data[0];Te(!!_);const S=_,O=S.error||((E=S[0])===null||E===void 0?void 0:E.error);if(O){Y(St,`RPC '${e}' stream ${i} received error:`,O);const j=O.status;let D=function(T){const A=et[T];if(A!==void 0)return z1(A)}(j),x=O.message;D===void 0&&(D=F.INTERNAL,x="Unknown error status: "+j+" with message "+O.message),I=!0,C.So(new K(D,x)),m.close()}else Y(St,`RPC '${e}' stream ${i} received:`,_),C.bo(_)}}),k(a,h1.STAT_EVENT,P=>{P.stat===pp.PROXY?Y(St,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===pp.NOPROXY&&Y(St,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function Gh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(t){return new x2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&Y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e,n,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Z1(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(Pr(n.toString()),Pr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new K(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hD extends eT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=I2(this.serializer,e),r=function(s){if(!("targetChange"in s))return ae.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ae.min():o.readTime?Jn(o.readTime):ae.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Tp(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=vp(u)?{documents:k2(s,u)}:{query:b2(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=W1(s,o.resumeToken);const d=wp(s,o.expectedCount);d!==null&&(a.expectedCount=d)}else if(o.snapshotVersion.compareTo(ae.min())>0){a.readTime=od(s,o.snapshotVersion.toTimestamp());const d=wp(s,o.expectedCount);d!==null&&(a.expectedCount=d)}return a}(this.serializer,e);const r=C2(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Tp(this.serializer),n.removeTarget=e,this.a_(n)}}class fD extends eT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Te(!!e.streamToken),this.lastStreamToken=e.streamToken,Te(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=A2(e.writeResults,e.commitTime),r=Jn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Tp(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>S2(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new K(F.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,xp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(F.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,xp(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(F.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class mD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Pr(n),this.D_=!1):Y("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{ks(this)&&(Y("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=le(u);d.L_.add(4),await eu(d),d.q_.set("Unknown"),d.L_.delete(4),await Gd(d)}(this))})}),this.q_=new mD(r,i)}}async function Gd(t){if(ks(t))for(const e of t.B_)await e(!0)}async function eu(t){for(const e of t.B_)await e(!1)}function tT(t,e){const n=le(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),lg(n)?ag(n):Jo(n).r_()&&og(n,e))}function sg(t,e){const n=le(t),r=Jo(n);n.N_.delete(e),r.r_()&&nT(n,e),n.N_.size===0&&(r.r_()?r.o_():ks(n)&&n.q_.set("Unknown"))}function og(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ae.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Jo(t).A_(e)}function nT(t,e){t.Q_.xe(e),Jo(t).R_(e)}function ag(t){t.Q_=new y2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Jo(t).start(),t.q_.v_()}function lg(t){return ks(t)&&!Jo(t).n_()&&t.N_.size>0}function ks(t){return le(t).L_.size===0}function rT(t){t.Q_=void 0}async function yD(t){t.q_.set("Online")}async function vD(t){t.N_.forEach((e,n)=>{og(t,e)})}async function _D(t,e){rT(t),lg(t)?(t.q_.M_(e),ag(t)):t.q_.set("Unknown")}async function wD(t,e,n){if(t.q_.set("Online"),e instanceof $1&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){Y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ad(t,r)}else if(e instanceof yc?t.Q_.Ke(e):e instanceof B1?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ae.min()))try{const r=await J1(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(d);f&&s.N_.set(d,f.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,d)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(wt.EMPTY_BYTE_STRING,f.snapshotVersion)),nT(s,u);const m=new di(f.target,u,d,f.sequenceNumber);og(s,m)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){Y("RemoteStore","Failed to raise snapshot:",r),await ad(t,r)}}async function ad(t,e,n){if(!Xl(e))throw e;t.L_.add(1),await eu(t),t.q_.set("Offline"),n||(n=()=>J1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Y("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Gd(t)})}function iT(t,e){return e().catch(n=>ad(t,n,e))}async function Kd(t){const e=le(t),n=Ci(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;xD(e);)try{const i=await iD(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,ED(e,i)}catch(i){await ad(e,i)}sT(e)&&oT(e)}function xD(t){return ks(t)&&t.O_.length<10}function ED(t,e){t.O_.push(e);const n=Ci(t);n.r_()&&n.V_&&n.m_(e.mutations)}function sT(t){return ks(t)&&!Ci(t).n_()&&t.O_.length>0}function oT(t){Ci(t).start()}async function TD(t){Ci(t).p_()}async function ID(t){const e=Ci(t);for(const n of t.O_)e.m_(n.mutations)}async function SD(t,e,n){const r=t.O_.shift(),i=Zm.from(r,e,n);await iT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Kd(t)}async function AD(t,e){e&&Ci(t).V_&&await async function(r,i){if(function(o){return p2(o)&&o!==F.ABORTED}(i.code)){const s=r.O_.shift();Ci(r).s_(),await iT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Kd(r)}}(t,e),sT(t)&&oT(t)}async function D_(t,e){const n=le(t);n.asyncQueue.verifyOperationInProgress(),Y("RemoteStore","RemoteStore received new credentials");const r=ks(n);n.L_.add(3),await eu(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Gd(n)}async function kD(t,e){const n=le(t);e?(n.L_.delete(2),await Gd(n)):e||(n.L_.add(2),await eu(n),n.q_.set("Unknown"))}function Jo(t){return t.K_||(t.K_=function(n,r,i){const s=le(n);return s.w_(),new hD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:yD.bind(null,t),Ro:vD.bind(null,t),mo:_D.bind(null,t),d_:wD.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),lg(t)?ag(t):t.q_.set("Unknown")):(await t.K_.stop(),rT(t))})),t.K_}function Ci(t){return t.U_||(t.U_=function(n,r,i){const s=le(n);return s.w_(),new fD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:TD.bind(null,t),mo:AD.bind(null,t),f_:ID.bind(null,t),g_:SD.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Kd(t)):(await t.U_.stop(),t.O_.length>0&&(Y("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ir,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new ug(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cg(t,e){if(Pr("AsyncQueue",`${e}: ${t}`),Xl(t))return new K(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e){this.comparator=e?(n,r)=>e(n,r)||te.comparator(n.key,r.key):(n,r)=>te.comparator(n.key,r.key),this.keyedMap=za(),this.sortedSet=new $e(this.comparator)}static emptySet(e){return new To(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof To)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new To;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(){this.W_=new $e(te.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ie():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Fo{constructor(e,n,r,i,s,o,a,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Fo(e,n,To.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class RD{constructor(){this.queries=O_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=le(n),s=i.queries;i.queries=O_(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new K(F.ABORTED,"Firestore shutting down"))}}function O_(){return new Xo(t=>k1(t),Fd)}async function dg(t,e){const n=le(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new bD,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=cg(o,`Initialization of query '${Qs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&fg(n)}async function hg(t,e){const n=le(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function CD(t,e){const n=le(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&fg(n)}function PD(t,e,n){const r=le(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function fg(t){t.Y_.forEach(e=>{e.next()})}var Sp,j_;(j_=Sp||(Sp={})).ea="default",j_.Cache="cache";class pg{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Fo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Fo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Sp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e){this.key=e}}class lT{constructor(e){this.key=e}}class ND{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=he(),this.mutatedKeys=he(),this.Aa=b1(e),this.Ra=new To(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new L_,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const g=i.get(f),I=zd(this.query,m)?m:null,C=!!g&&this.mutatedKeys.has(g.key),k=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let P=!1;g&&I?g.data.isEqual(I.data)?C!==k&&(r.track({type:3,doc:I}),P=!0):this.ga(g,I)||(r.track({type:2,doc:I}),P=!0,(u&&this.Aa(I,u)>0||d&&this.Aa(I,d)<0)&&(a=!0)):!g&&I?(r.track({type:0,doc:I}),P=!0):g&&!I&&(r.track({type:1,doc:g}),P=!0,(u||d)&&(a=!0)),P&&(I?(o=o.add(I),s=k?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,m)=>function(I,C){const k=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie()}};return k(I)-k(C)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,d=u!==this.Ea;return this.Ea=u,o.length!==0||d?{snapshot:new Fo(this.query,e.Ra,s,o,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new L_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=he(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new lT(r))}),this.da.forEach(r=>{e.has(r)||n.push(new aT(r))}),n}ba(e){this.Ta=e.Ts,this.da=he();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Fo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class DD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class LD{constructor(e){this.key=e,this.va=!1}}class OD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Xo(a=>k1(a),Fd),this.Ma=new Map,this.xa=new Set,this.Oa=new $e(te.comparator),this.Na=new Map,this.La=new ng,this.Ba={},this.ka=new Map,this.qa=Uo.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function jD(t,e,n=!0){const r=pT(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await uT(r,e,n,!0),i}async function MD(t,e){const n=pT(t);await uT(n,e,!0,!1)}async function uT(t,e,n,r){const i=await sD(t.localStore,Xn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await VD(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&tT(t.remoteStore,i),a}async function VD(t,e,n,r,i){t.Ka=(m,g,I)=>async function(k,P,E,_){let S=P.view.ma(E);S.ns&&(S=await C_(k.localStore,P.query,!1).then(({documents:x})=>P.view.ma(x,S)));const O=_&&_.targetChanges.get(P.targetId),j=_&&_.targetMismatches.get(P.targetId)!=null,D=P.view.applyChanges(S,k.isPrimaryClient,O,j);return V_(k,P.targetId,D.wa),D.snapshot}(t,m,g,I);const s=await C_(t.localStore,e,!0),o=new ND(e,s.Ts),a=o.ma(s.documents),u=Zl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),d=o.applyChanges(a,t.isPrimaryClient,u);V_(t,n,d.wa);const f=new DD(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function UD(t,e,n){const r=le(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Fd(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ip(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&sg(r.remoteStore,i.targetId),Ap(r,i.targetId)}).catch(Yl)):(Ap(r,i.targetId),await Ip(r.localStore,i.targetId,!0))}async function FD(t,e){const n=le(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),sg(n.remoteStore,r.targetId))}async function zD(t,e,n){const r=KD(t);try{const i=await function(o,a){const u=le(o),d=at.now(),f=a.reduce((I,C)=>I.add(C.key),he());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let C=Nr(),k=he();return u.cs.getEntries(I,f).next(P=>{C=P,C.forEach((E,_)=>{_.isValidDocument()||(k=k.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,C)).next(P=>{m=P;const E=[];for(const _ of a){const S=u2(_,m.get(_.key).overlayedDocument);S!=null&&E.push(new ji(_.key,S,_1(S.value.mapValue),Mt.exists(!0)))}return u.mutationQueue.addMutationBatch(I,d,E,a)}).next(P=>{g=P;const E=P.applyToLocalDocumentSet(m,k);return u.documentOverlayCache.saveOverlays(I,P.batchId,E)})}).then(()=>({batchId:g.batchId,changes:C1(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let d=o.Ba[o.currentUser.toKey()];d||(d=new $e(_e)),d=d.insert(a,u),o.Ba[o.currentUser.toKey()]=d}(r,i.batchId,n),await tu(r,i.changes),await Kd(r.remoteStore)}catch(i){const s=cg(i,"Failed to persist write");n.reject(s)}}async function cT(t,e){const n=le(t);try{const r=await nD(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(Te(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?Te(o.va):i.removedDocuments.size>0&&(Te(o.va),o.va=!1))}),await tu(n,r,e)}catch(r){await Yl(r)}}function M_(t,e,n){const r=le(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=le(o);u.onlineState=a;let d=!1;u.queries.forEach((f,m)=>{for(const g of m.j_)g.Z_(a)&&(d=!0)}),d&&fg(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function BD(t,e,n){const r=le(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new $e(te.comparator);o=o.insert(s,Rt.newNoDocument(s,ae.min()));const a=he().add(s),u=new Hd(ae.min(),new Map,new $e(_e),o,a);await cT(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),mg(r)}else await Ip(r.localStore,e,!1).then(()=>Ap(r,e,n)).catch(Yl)}async function $D(t,e){const n=le(t),r=e.batch.batchId;try{const i=await tD(n.localStore,e);hT(n,r,null),dT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await tu(n,i)}catch(i){await Yl(i)}}async function WD(t,e,n){const r=le(t);try{const i=await function(o,a){const u=le(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,a).next(m=>(Te(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(d,m))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(r.localStore,e);hT(r,e,n),dT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await tu(r,i)}catch(i){await Yl(i)}}function dT(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function hT(t,e,n){const r=le(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Ap(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||fT(t,r)})}function fT(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(sg(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),mg(t))}function V_(t,e,n){for(const r of n)r instanceof aT?(t.La.addReference(r.key,e),HD(t,r)):r instanceof lT?(Y("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||fT(t,r.key)):ie()}function HD(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Y("SyncEngine","New document in limbo: "+n),t.xa.add(r),mg(t))}function mg(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new te(De.fromString(e)),r=t.qa.next();t.Na.set(r,new LD(n)),t.Oa=t.Oa.insert(n,r),tT(t.remoteStore,new di(Xn(Ud(n.path)),r,"TargetPurposeLimboResolution",qm.oe))}}async function tu(t,e,n){const r=le(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(d=>{var f;if((d||n)&&r.isPrimaryClient){const m=d?!d.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){i.push(d);const m=ig.Wi(u.targetId,d);s.push(m)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,d){const f=le(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>B.forEach(d,g=>B.forEach(g.$i,I=>f.persistence.referenceDelegate.addReference(m,g.targetId,I)).next(()=>B.forEach(g.Ui,I=>f.persistence.referenceDelegate.removeReference(m,g.targetId,I)))))}catch(m){if(!Xl(m))throw m;Y("LocalStore","Failed to update sequence numbers: "+m)}for(const m of d){const g=m.targetId;if(!m.fromCache){const I=f.os.get(g),C=I.snapshotVersion,k=I.withLastLimboFreeSnapshotVersion(C);f.os=f.os.insert(g,k)}}}(r.localStore,s))}async function qD(t,e){const n=le(t);if(!n.currentUser.isEqual(e)){Y("SyncEngine","User change. New user:",e.toKey());const r=await X1(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new K(F.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await tu(n,r.hs)}}function GD(t,e){const n=le(t),r=n.Na.get(e);if(r&&r.va)return he().add(r.key);{let i=he();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function pT(t){const e=le(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=cT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=GD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=BD.bind(null,e),e.Ca.d_=CD.bind(null,e.eventManager),e.Ca.$a=PD.bind(null,e.eventManager),e}function KD(t){const e=le(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$D.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=WD.bind(null,e),e}class ld{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=qd(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return eD(this.persistence,new J2,e.initialUser,this.serializer)}Ga(e){return new Q2(rg.Zr,this.serializer)}Wa(e){return new aD}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ld.provider={build:()=>new ld};class kp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>M_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=qD.bind(null,this.syncEngine),await kD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new RD}()}createDatastore(e){const n=qd(e.databaseInfo.databaseId),r=function(s){return new dD(s)}(e.databaseInfo);return function(s,o,a,u){return new pD(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new gD(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>M_(this.syncEngine,n,0),function(){return N_.D()?new N_:new lD}())}createSyncEngine(e,n){return function(i,s,o,a,u,d,f){const m=new OD(i,s,o,a,u,d);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=le(i);Y("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await eu(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}kp.provider={build:()=>new kp};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Pr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=kt.UNAUTHENTICATED,this.clientId=g1.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{Y("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Y("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ir;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=cg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Kh(t,e){t.asyncQueue.verifyOperationInProgress(),Y("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await X1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function U_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await YD(t);Y("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>D_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>D_(e.remoteStore,i)),t._onlineComponents=e}async function YD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y("FirestoreClient","Using user provided OfflineComponentProvider");try{await Kh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===F.FAILED_PRECONDITION||i.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Oo("Error using user provided cache. Falling back to memory cache: "+n),await Kh(t,new ld)}}else Y("FirestoreClient","Using default OfflineComponentProvider"),await Kh(t,new ld);return t._offlineComponents}async function mT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y("FirestoreClient","Using user provided OnlineComponentProvider"),await U_(t,t._uninitializedComponentsProvider._online)):(Y("FirestoreClient","Using default OnlineComponentProvider"),await U_(t,new kp))),t._onlineComponents}function XD(t){return mT(t).then(e=>e.syncEngine)}async function ud(t){const e=await mT(t),n=e.eventManager;return n.onListen=jD.bind(null,e.syncEngine),n.onUnlisten=UD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=MD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=FD.bind(null,e.syncEngine),n}function JD(t,e,n={}){const r=new Ir;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,d){const f=new gg({next:g=>{f.Za(),o.enqueueAndForget(()=>hg(s,m));const I=g.docs.has(a);!I&&g.fromCache?d.reject(new K(F.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&g.fromCache&&u&&u.source==="server"?d.reject(new K(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(g)},error:g=>d.reject(g)}),m=new pg(Ud(a.path),f,{includeMetadataChanges:!0,_a:!0});return dg(s,m)}(await ud(t),t.asyncQueue,e,n,r)),r.promise}function ZD(t,e,n={}){const r=new Ir;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,d){const f=new gg({next:g=>{f.Za(),o.enqueueAndForget(()=>hg(s,m)),g.fromCache&&u.source==="server"?d.reject(new K(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(g)},error:g=>d.reject(g)}),m=new pg(a,f,{includeMetadataChanges:!0,_a:!0});return dg(s,m)}(await ud(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(t,e,n){if(!n)throw new K(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function eL(t,e,n,r){if(e===!0&&r===!0)throw new K(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function z_(t){if(!te.isDocumentKey(t))throw new K(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function B_(t){if(te.isDocumentKey(t))throw new K(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Qd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ie()}function Vt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qd(t);throw new K(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function tL(t,e){if(e<=0)throw new K(F.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}eL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Yd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new _N;switch(r.type){case"firstParty":return new TN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=F_.get(n);r&&(Y("ComponentProvider","Removing Datastore"),F_.delete(n),r.terminate())}(this),Promise.resolve()}}function nL(t,e,n,r={}){var i;const s=(t=Vt(t,Yd))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Oo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=kt.MOCK_USER;else{a=Nb(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new K(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new kt(d)}t._authCredentials=new wN(new m1(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ur(this.firestore,e,this._query)}}class Ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ii(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}}class Ii extends Ur{constructor(e,n,r){super(e,n,Ud(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new te(e))}withConverter(e){return new Ii(this.firestore,e,this._path)}}function Zo(t,e,...n){if(t=Ge(t),yT("collection","path",e),t instanceof Yd){const r=De.fromString(e,...n);return B_(r),new Ii(t,null,r)}{if(!(t instanceof Ct||t instanceof Ii))throw new K(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return B_(r),new Ii(t.firestore,null,r)}}function Dt(t,e,...n){if(t=Ge(t),arguments.length===1&&(e=g1.newId()),yT("doc","path",e),t instanceof Yd){const r=De.fromString(e,...n);return z_(r),new Ct(t,null,new te(r))}{if(!(t instanceof Ct||t instanceof Ii))throw new K(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return z_(r),new Ct(t.firestore,t instanceof Ii?t.converter:null,new te(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Z1(this,"async_queue_retry"),this.Vu=()=>{const r=Gh();r&&Y("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Gh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Gh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Ir;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Xl(e))throw e;Y("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Pr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=ug.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&ie()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function H_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class er extends Yd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new W_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new W_(e),this._firestoreClient=void 0,await e}}}function rL(t,e){const n=typeof t=="object"?t:SE(),r=typeof t=="string"?t:"(default)",i=Om(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Cb("firestore");s&&nL(i,...s)}return i}function nu(t){if(t._terminated)throw new K(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||iL(t),t._firestoreClient}function iL(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,d,f){return new jN(a,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,gT(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new QD(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zo(wt.fromBase64String(e))}catch(n){throw new K(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new zo(wt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sL=/^__.*__$/;class oL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ji(e,this.data,this.fieldMask,n,this.fieldTransforms):new Jl(e,this.data,n,this.fieldTransforms)}}class vT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ji(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function _T(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ie()}}class _g{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new _g(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return cd(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(_T(this.Cu)&&sL.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class aL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||qd(e)}Qu(e,n,r,i=!1){return new _g({Cu:e,methodName:n,qu:r,path:gt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function su(t){const e=t._freezeSettings(),n=qd(t._databaseId);return new aL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function wg(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Tg("Data must be an object, but it was:",o,r);const a=ET(r,o);let u,d;if(s.merge)u=new sn(o.fieldMask),d=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const g=bp(e,m,n);if(!o.contains(g))throw new K(F.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);IT(f,g)||f.push(g)}u=new sn(f),d=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,d=o.fieldTransforms;return new oL(new qt(a),u,d)}class Xd extends iu{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Xd}}class xg extends iu{_toFieldTransform(e){return new V1(e.path,new Nl)}isEqual(e){return e instanceof xg}}class Eg extends iu{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new Ol(e.serializer,D1(e.serializer,this.$u));return new V1(e.path,n)}isEqual(e){return e instanceof Eg&&this.$u===e.$u}}function wT(t,e,n,r){const i=t.Qu(1,e,n);Tg("Data must be an object, but it was:",i,r);const s=[],o=qt.empty();As(r,(u,d)=>{const f=Ig(e,u,n);d=Ge(d);const m=i.Nu(f);if(d instanceof Xd)s.push(f);else{const g=ou(d,m);g!=null&&(s.push(f),o.set(f,g))}});const a=new sn(s);return new vT(o,a,i.fieldTransforms)}function xT(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[bp(e,r,n)],u=[i];if(s.length%2!=0)throw new K(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)a.push(bp(e,s[g])),u.push(s[g+1]);const d=[],f=qt.empty();for(let g=a.length-1;g>=0;--g)if(!IT(d,a[g])){const I=a[g];let C=u[g];C=Ge(C);const k=o.Nu(I);if(C instanceof Xd)d.push(I);else{const P=ou(C,k);P!=null&&(d.push(I),f.set(I,P))}}const m=new sn(d);return new vT(f,m,o.fieldTransforms)}function lL(t,e,n,r=!1){return ou(n,t.Qu(r?4:3,e))}function ou(t,e){if(TT(t=Ge(t)))return Tg("Unsupported field value:",e,t),ET(t,e);if(t instanceof iu)return function(r,i){if(!_T(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=ou(a,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Ge(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return D1(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=at.fromDate(r);return{timestampValue:od(i.serializer,s)}}if(r instanceof at){const s=new at(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:od(i.serializer,s)}}if(r instanceof yg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof zo)return{bytesValue:W1(i.serializer,r._byteString)};if(r instanceof Ct){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:tg(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof vg)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return Jm(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Qd(r)}`)}(t,e)}function ET(t,e){const n={};return y1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):As(t,(r,i)=>{const s=ou(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function TT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof at||t instanceof yg||t instanceof zo||t instanceof Ct||t instanceof iu||t instanceof vg)}function Tg(t,e,n){if(!TT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Qd(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function bp(t,e,n){if((e=Ge(e))instanceof ru)return e._internalPath;if(typeof e=="string")return Ig(t,e);throw cd("Field path arguments must be of type string or ",t,!1,void 0,n)}const uL=new RegExp("[~\\*/\\[\\]]");function Ig(t,e,n){if(e.search(uL)>=0)throw cd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ru(...e.split("."))._internalPath}catch{throw cd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function cd(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new K(F.INVALID_ARGUMENT,a+t+u)}function IT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Sg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class cL extends ST{data(){return super.data()}}function Sg(t,e){return typeof e=="string"?Ig(t,e):e instanceof ru?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ag{}class kg extends Ag{}function bg(t,e,...n){let r=[];e instanceof Ag&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Cg).length,a=s.filter(u=>u instanceof Rg).length;if(o>1||o>0&&a>0)throw new K(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Rg extends kg{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Rg(e,n,r)}_apply(e){const n=this._parse(e);return bT(e._query,n),new Ur(e.firestore,e.converter,_p(e._query,n))}_parse(e){const n=su(e.firestore);return function(s,o,a,u,d,f,m){let g;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new K(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){G_(m,f);const I=[];for(const C of m)I.push(q_(u,s,C));g={arrayValue:{values:I}}}else g=q_(u,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||G_(m,f),g=lL(a,o,m,f==="in"||f==="not-in");return nt.create(d,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Cg extends Ag{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Cg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:On.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)bT(o,u),o=_p(o,u)}(e._query,n),new Ur(e.firestore,e.converter,_p(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Pg extends kg{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Pg(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new K(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new K(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Pl(s,o)}(e._query,this._field,this._direction);return new Ur(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Yo(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Ng(t,e="asc"){const n=e,r=Sg("orderBy",t);return Pg._create(r,n)}class Dg extends kg{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Dg(e,n,r)}_apply(e){return new Ur(e.firestore,e.converter,sd(e._query,this._limit,this._limitType))}}function kT(t){return tL("limit",t),Dg._create("limit",t,"F")}function q_(t,e,n){if(typeof(n=Ge(n))=="string"){if(n==="")throw new K(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!A1(e)&&n.indexOf("/")!==-1)throw new K(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(De.fromString(n));if(!te.isDocumentKey(r))throw new K(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return f_(t,new te(r))}if(n instanceof Ct)return f_(t,n._key);throw new K(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qd(n)}.`)}function G_(t,e){if(!Array.isArray(t)||t.length===0)throw new K(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function bT(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new K(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class dL{convertValue(e,n="none"){switch(xs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ws(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ie()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return As(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Qe(o.doubleValue));return new vg(s)}convertGeoPoint(e){return new yg(Qe(e.latitude),Qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Km(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(bl(e));default:return null}}convertTimestamp(e){const n=Ri(e);return new at(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=De.fromString(e);Te(Y1(r));const i=new Rl(r.get(1),r.get(3)),s=new te(r.popFirst(5));return i.isEqual(n)||Pr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class RT extends ST{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new vc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Sg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class vc extends RT{data(e={}){return super.data(e)}}class CT{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new $a(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new vc(this._firestore,this._userDataWriter,r.key,r,new $a(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new vc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new $a(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new vc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new $a(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return a.type!==0&&(d=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),f=o.indexOf(a.doc.key)),{type:hL(a.type),doc:u,oldIndex:d,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function hL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(t){t=Vt(t,Ct);const e=Vt(t.firestore,er);return JD(nu(e),t._key).then(n=>DT(e,t,n))}class Og extends dL{constructor(e){super(),this.firestore=e}convertBytes(e){return new zo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function jg(t){t=Vt(t,Ur);const e=Vt(t.firestore,er),n=nu(e),r=new Og(e);return AT(t._query),ZD(n,t._query).then(i=>new CT(e,r,t,i))}function au(t,e,n){t=Vt(t,Ct);const r=Vt(t.firestore,er),i=Lg(t.converter,e,n);return lu(r,[wg(su(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Mt.none())])}function fL(t,e,n,...r){t=Vt(t,Ct);const i=Vt(t.firestore,er),s=su(i);let o;return o=typeof(e=Ge(e))=="string"||e instanceof ru?xT(s,"updateDoc",t._key,e,n,r):wT(s,"updateDoc",t._key,e),lu(i,[o.toMutation(t._key,Mt.exists(!0))])}function Zd(t){return lu(Vt(t.firestore,er),[new Wd(t._key,Mt.none())])}function PT(t,e){const n=Vt(t.firestore,er),r=Dt(t),i=Lg(t.converter,e);return lu(n,[wg(su(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Mt.exists(!1))]).then(()=>r)}function NT(t,...e){var n,r,i;t=Ge(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||H_(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(H_(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let u,d,f;if(t instanceof Ct)d=Vt(t.firestore,er),f=Ud(t._key.path),u={next:m=>{e[o]&&e[o](DT(d,t,m))},error:e[o+1],complete:e[o+2]};else{const m=Vt(t,Ur);d=Vt(m.firestore,er),f=m._query;const g=new Og(d);u={next:I=>{e[o]&&e[o](new CT(d,g,m,I))},error:e[o+1],complete:e[o+2]},AT(t._query)}return function(g,I,C,k){const P=new gg(k),E=new pg(I,P,C);return g.asyncQueue.enqueueAndForget(async()=>dg(await ud(g),E)),()=>{P.Za(),g.asyncQueue.enqueueAndForget(async()=>hg(await ud(g),E))}}(nu(d),f,a,u)}function lu(t,e){return function(r,i){const s=new Ir;return r.asyncQueue.enqueueAndForget(async()=>zD(await XD(r),i,s)),s.promise}(nu(t),e)}function DT(t,e,n){const r=n.docs.get(e._key),i=new Og(t);return new RT(t,i,e._key,r,new $a(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pL{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=su(e)}set(e,n,r){this._verifyNotCommitted();const i=Qh(e,this._firestore),s=Lg(i.converter,n,r),o=wg(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Mt.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Qh(e,this._firestore);let o;return o=typeof(n=Ge(n))=="string"||n instanceof ru?xT(this._dataReader,"WriteBatch.update",s._key,n,r,i):wT(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Mt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Qh(e,this._firestore);return this._mutations=this._mutations.concat(new Wd(n._key,Mt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new K(F.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Qh(t,e){if((t=Ge(t)).firestore!==e)throw new K(F.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function Mi(){return new xg("serverTimestamp")}function K_(t){return new Eg("increment",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mL(t){return nu(t=Vt(t,er)),new pL(t,e=>lu(t,e))}(function(e,n=!0){(function(i){Qo=i})(Go),Do(new gs("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new er(new xN(r.getProvider("auth-internal")),new SN(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new K(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rl(d.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Ti(l_,"4.7.3",e),Ti(l_,"4.7.3","esm2017")})();var gL="firebase",yL="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ti(gL,yL,"app");const _c={apiKey:"AIzaSyCqWiCyTRyy0DC5DURAulfDpdCJSt8a0Bw",authDomain:"hoshii-a4717.firebaseapp.com",projectId:"hoshii-a4717",storageBucket:"hoshii-a4717.firebasestorage.app",messagingSenderId:"1016457575048",appId:"1:1016457575048:web:ad2c75e86127181db2bd3d"},tr=!!(_c.apiKey&&_c.projectId&&_c.appId);let Yh=null,Pi=null,Me=null;tr&&(Yh=Vv().length?Vv()[0]:IE(_c),Pi=yN(Yh),Me=rL(Yh));function ea(){if(!tr||!Pi)throw new Error("Firebase is not configured. Add your credentials to a .env file (see README).")}async function vL(t,e,n){ea();const r=await eP(Pi,t,e);return n&&await JE(r.user,{displayName:n}),await au(Dt(Me,"users",r.user.uid),{uid:r.user.uid,displayName:n||t.split("@")[0],email:t,avatarUrl:null,createdAt:Mi()}),r.user}async function _L(t,e){return ea(),(await tP(Pi,t,e)).user}async function wL(){ea(),await oP(Pi)}async function xL(t){ea(),await ZC(Pi,t)}async function EL(t,{displayName:e,photoURL:n}){ea(),await JE(t,{displayName:e,photoURL:n}),await au(Dt(Me,"users",t.uid),{displayName:e??t.displayName,avatarUrl:n??t.photoURL},{merge:!0})}async function TL(t){ea();const e=await Jd(Dt(Me,"users",t));return e.exists()?e.data():null}function IL(t){return!tr||!Pi?(t(null),()=>{}):sP(Pi,t)}const LT=R.createContext(null);function SL({children:t}){const[e,n]=R.useState(null),[r,i]=R.useState(!0);R.useEffect(()=>{const o=IL(a=>{n(a),i(!1)});return()=>o&&o()},[]);const s={user:e,loading:r,signIn:_L,signUp:vL,signOut:wL,resetPassword:xL};return c.jsx(LT.Provider,{value:s,children:t})}function rr(){const t=R.useContext(LT);if(!t)throw new Error("useAuth must be used within AuthProvider");return t}const AL="https://public-reach-trend.ngrok-free.dev".replace(/\/+$/,""),kL={Accept:"application/json","ngrok-skip-browser-warning":"1"},dd=new Map,Qr=new Map,Mg="hoshii:yl:",OT="hoshii:al:",Xh=4*1024*1024,bL=500*1024,as={byId:{soft:6*60*60*1e3,hard:7*24*60*60*1e3},list:{soft:60*60*1e3,hard:24*60*60*1e3},trending:{soft:30*60*1e3,hard:6*60*60*1e3},schedule:{soft:30*60*1e3,hard:6*60*60*1e3},search:{soft:5*60*1e3,hard:30*60*1e3},suggestion:{soft:60*1e3,hard:10*60*1e3}};class Hn extends Error{constructor(e,{status:n=0,code:r=null,retryAfter:i=null}={}){super(e),this.name="ApiError",this.status=n,this.code=r,this.retryAfter=i}}function RL(t){let e=5381;for(let n=0;n<t.length;n++)e=(e<<5)+e+t.charCodeAt(n)|0;return(e>>>0).toString(36)}function CL(t,e){const n={};if(e)for(const r of Object.keys(e).sort())e[r]!==void 0&&e[r]!==null&&e[r]!==""&&(n[r]=e[r]);return Mg+RL(t+"|"+JSON.stringify(n))}function PL(t){const e=dd.get(t);if(e)return e;try{const n=localStorage.getItem(t);if(!n)return null;const r=JSON.parse(n);return!r||typeof r.t!="number"?(localStorage.removeItem(t),null):(dd.set(t,r),r)}catch{return null}}function Q_(t,e){const n={t:Date.now(),v:e};dd.set(t,n);try{const r=JSON.stringify(n);if(r.length>bL)return;localStorage.setItem(t,r),Y_()}catch(r){r&&(r.name==="QuotaExceededError"||r.code===22)&&Y_(!0)}}function Y_(t=!1){try{const e=[];let n=0;for(let s=0;s<localStorage.length;s++){const o=localStorage.key(s);if(!o||!o.startsWith(Mg))continue;const a=localStorage.getItem(o);if(a){n+=a.length;try{const u=JSON.parse(a);e.push({k:o,t:u.t||0,size:a.length})}catch{localStorage.removeItem(o)}}}if(!t&&n<Xh)return;e.sort((s,o)=>s.t-o.t);const r=t?Xh*.5:Xh*.8;let i=0;for(const s of e){if(n-i<r)break;localStorage.removeItem(s.k),i+=s.size}}catch{}}function NL(){dd.clear();try{const t=[];for(let e=0;e<localStorage.length;e++){const n=localStorage.key(e);n&&(n.startsWith(Mg)||n.startsWith(OT))&&t.push(n)}t.forEach(e=>localStorage.removeItem(e))}catch{}}try{const t=[];for(let e=0;e<localStorage.length;e++){const n=localStorage.key(e);n&&n.startsWith(OT)&&t.push(n)}t.forEach(e=>localStorage.removeItem(e))}catch{}const jT=t=>new Promise(e=>setTimeout(e,t));function DL(t,e){const n=new URL(AL+t);if(e)for(const[r,i]of Object.entries(e))i==null||i===""||n.searchParams.set(r,String(i));return n.toString()}async function jl(t,{params:e,method:n="GET",body:r,signal:i}={},s=0){const o={...kL};r!==void 0&&(o["Content-Type"]="application/json");let a;try{a=await fetch(DL(t,e),{method:n,headers:o,body:r!==void 0?JSON.stringify(r):void 0,signal:i})}catch(f){throw(f==null?void 0:f.name)==="AbortError"?f:new Hn("Could not reach the YumeList API. The server may be offline, or CORS is blocking the request.",{code:"NETWORK"})}if(a.status===429){const f=Number(a.headers.get("Retry-After"))||30;if(s===0&&f<=8&&!(i!=null&&i.aborted))return await jT((f+.25)*1e3),jl(t,{params:e,method:n,body:r,signal:i},s+1);throw new Hn(`YumeList rate limit reached. Try again in ~${f}s.`,{status:429,code:"RATE_LIMITED",retryAfter:f})}const u=a.headers.get("content-type")||"";let d=null;if(u.includes("json"))try{d=await a.json()}catch{d=null}else if(a.ok)throw new Hn("YumeList returned a non-JSON response. Is the ngrok tunnel up and the skip-warning header allowed?",{status:a.status,code:"NOT_JSON"});if(!a.ok){const f=d==null?void 0:d.error,m=(f==null?void 0:f.code)||null;throw a.status===503&&m==="API_DISABLED"?new Hn("The YumeList API is temporarily switched off.",{status:503,code:m}):new Hn((f==null?void 0:f.message)||`YumeList request failed (${a.status})`,{status:a.status,code:m})}return d}async function fo(t,e,n={}){const{signal:r,ttl:i=as.list,skipCache:s=!1}=n,o=CL(t,e),a=Date.now();if(!s){const d=PL(o);if(d){const f=a-d.t;if(f<i.soft)return d.v;if(f<i.hard){if(!Qr.has(o)){const m=jl(t,{params:e}).then(g=>(Q_(o,g),g)).catch(()=>{}).finally(()=>Qr.delete(o));Qr.set(o,m)}return d.v}}}if(!r&&Qr.has(o))return Qr.get(o);const u=jl(t,{params:e,signal:r}).then(d=>(s||Q_(o,d),d));return r||(Qr.set(o,u),u.then(()=>Qr.delete(o),()=>Qr.delete(o))),u}const ue=(...t)=>t.find(e=>e!=null&&e!=="");function LL(t){if(!t)return null;if(typeof t=="string")return{extraLarge:t,large:t,medium:t};const e=ue(t.extraLarge,t.xl,t.large,t.original,t.url,t.medium),n=ue(t.large,t.extraLarge,t.url,t.medium,t.original),r=ue(t.medium,t.large,t.url,t.extraLarge);return!e&&!n&&!r?null:{extraLarge:e||n||r,large:n||e||r,medium:r||n||e,color:t.color}}function X_(t){if(!t)return null;if(typeof t=="object")return t.year?{year:t.year,month:t.month||null,day:t.day||null}:null;const e=new Date(t);return Number.isNaN(e.getTime())?null:{year:e.getUTCFullYear(),month:e.getUTCMonth()+1,day:e.getUTCDate()}}function J_(t){const e=Number(t);return!Number.isFinite(e)||e<=0?null:e<=10?Math.round(e*10):Math.round(e)}function wc(t){return t?String(t).trim().toUpperCase().replace(/[\s-]+/g,"_"):null}function OL(t){return t?typeof t=="string"?{romaji:t,english:t,native:null,userPreferred:t}:{romaji:ue(t.romaji,t.userPreferred,t.english,t.default)||null,english:ue(t.english,t.en)||null,native:ue(t.native,t.japanese)||null,userPreferred:ue(t.userPreferred,t.romaji,t.english)||null}:{romaji:null,english:null,native:null,userPreferred:null}}function jL(t){if(!t)return null;if(typeof t=="string"){const r=t.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{6,})/);return r?{id:r[1],site:"youtube"}:null}const e=String(ue(t.site,t.provider,"youtube")).toLowerCase(),n=ue(t.id,t.videoId,t.key);return n?{id:n,site:e,thumbnail:t.thumbnail}:null}function ML(t){let e=[];return Array.isArray(t)?e=t:t!=null&&t.nodes?e=t.nodes:t!=null&&t.edges&&(e=t.edges.map(r=>r.node||r)),{nodes:e.map(r=>{const i=(r==null?void 0:r.studio)||r,s=typeof i=="string"?i:ue(i==null?void 0:i.name,i==null?void 0:i.title);return s?{id:typeof i=="object"?i.id:void 0,name:s}:null}).filter(Boolean)}}function VL(t){if(t==null||t==="")return null;if(typeof t=="number")return t>1e12?Math.floor(t/1e3):t;const e=new Date(t).getTime();return Number.isNaN(e)?null:Math.floor(e/1e3)}function UL(t){if(!t)return null;const e=VL(ue(t.airingAt,t.at,t.date,t.time));return e?{episode:ue(t.episode,t.number,t.ep)??null,airingAt:e,timeUntilAiring:Math.max(0,e-Math.floor(Date.now()/1e3))}:null}function xc(t){var d,f;if(!t||typeof t!="object")return null;const e=t.ids||{},n=ue(e.yumelist,t.id)??null,r=ue(e.anilist,t.anilistId,t.anilist_id)??null,i=ue(e.mal,t.malId,t.mal_id)??null,s=LL(ue(t.coverImage,t.cover,t.coverUrl,t.image,t.poster)),o=ue(t.bannerImage,t.banner,t.bannerUrl),a=(t.genres||[]).map(m=>typeof m=="string"?m:ue(m==null?void 0:m.name,m==null?void 0:m.title)).filter(Boolean),u=ue(t.episodes,t.episodeCount,t.totalEpisodes);return{id:r??(n!=null?`y${n}`:null),anilistId:r!=null?Number(r):null,yumelistId:n!=null?Number(n):null,malId:i!=null?Number(i):null,slug:t.slug||null,title:OL(t.title),description:ue(t.description,t.synopsis)||null,coverImage:s,bannerImage:o?typeof o=="string"?o:ue(o.url,o.large):null,format:wc(ue(t.format,t.type)),status:wc(t.status),season:wc(t.season),seasonYear:ue(t.seasonYear,t.year)??null,episodes:typeof u=="number"?u:Number(u)||null,duration:ue(t.duration,t.episodeDuration)??null,averageScore:J_(ue(t.averageScore,t.score,t.rating)),meanScore:J_(ue(t.meanScore,t.score)),popularity:ue(t.popularity)??null,favourites:ue(t.favourites,t.favorites)??null,genres:a,isAdult:!!t.isAdult,countryOfOrigin:ue(t.countryOfOrigin,t.country)??null,startDate:X_(ue(t.startDate,t.startedAt,(d=t.aired)==null?void 0:d.from)),endDate:X_(ue(t.endDate,t.endedAt,(f=t.aired)==null?void 0:f.to)),trailer:jL(t.trailer),studios:ML(t.studios),nextAiringEpisode:UL(ue(t.nextAiringEpisode,t.nextAiring)),externalLinks:i!=null?[{id:"mal",site:"MyAnimeList",type:"INFO",url:`https://myanimelist.net/anime/${i}`}]:[]}}function Rp(t){const e=t==null?void 0:t.data;return Array.isArray(e)?e:Array.isArray(t)?t:[]}function FL(t,{page:e,perPage:n},r){const i=(t==null?void 0:t.pagination)||{},s=i.total??r.length,o=i.limit||n;return{pageInfo:{total:s,currentPage:i.page||e,lastPage:i.totalPages||Math.max(1,Math.ceil(s/o)),hasNextPage:!!i.hasNextPage,perPage:o},media:r}}const Z_=new Set(["done","completed","complete","success","succeeded","finished","ready","imported"]),zL=new Set(["failed","error","errored","cancelled","canceled"]),Ku=new Map,e0=new Map,BL=5*60*1e3,$L=2500,WL=40;function HL(t){const e=String(t),n=e0.get(e);if(n&&Date.now()-n<BL)return Promise.reject(new Hn("This anime could not be imported into YumeList.",{code:"IMPORT_FAILED"}));if(Ku.has(e))return Ku.get(e);const r=(async()=>{var u;const i=await jl("/api/request",{method:"POST",body:{query:e}}),s=(i==null?void 0:i.data)??i??{},o=ue(s.job,s.jobId,s.id),a=o&&typeof o=="object"?ue(o.id,o.jobId):o;if(a)for(let d=0;d<WL;d++){await jT($L);let f;try{f=await jl(`/api/request/${encodeURIComponent(a)}`)}catch(I){if((I==null?void 0:I.status)===404)return;throw I}const m=(f==null?void 0:f.data)??f??{},g=String(ue(m.status,m.state,"")).toLowerCase();if(zL.has(g)||m.error&&!Z_.has(g)){const I=typeof m.error=="string"?m.error:((u=m.error)==null?void 0:u.message)||m.message;throw new Hn(I||"YumeList could not import this anime.",{code:"IMPORT_FAILED"})}if(Z_.has(g)||m.done===!0||m.finished===!0||Number(m.progress)>=100)return}})().catch(i=>{throw e0.set(e,Date.now()),i}).finally(()=>Ku.delete(e));return Ku.set(e,r),r}function qL(t){if(!t)return null;const e=String(t).trim(),n=e.match(/anilist\.co\/anime\/(\d+)/i);return n?Number(n[1]):/^\d{1,8}$/.test(e)?Number(e):null}const t0=t=>String(t).trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""),GL={POPULARITY_DESC:"popularity",TRENDING_DESC:"popularity",SCORE_DESC:"score",START_DATE_DESC:"newest",TITLE_ROMAJI:"title"};async function En({query:t,page:e=1,perPage:n=30,genre:r,tag:i,year:s,season:o,status:a,format:u,sort:d=["POPULARITY_DESC"],minimumScore:f,country:m,isAdult:g=!1,signal:I,isSuggestion:C=!1,noCache:k=!1}={}){const P=Math.min(100,Math.max(1,n)),E=!!(r||i||s||o||a||u),_={q:t?String(t).trim():void 0,genre:r?t0(r):void 0,tag:i?t0(i):void 0,year:s||void 0,season:o||void 0,status:a||void 0,type:u||void 0,sort:GL[Array.isArray(d)?d[0]:d]||"popularity",page:e,limit:P},S={signal:I,ttl:C?as.suggestion:as.search,skipCache:k};let O;try{O=await fo("/api/v1/search",_,S)}catch(x){if(!_.q&&!E&&((x==null?void 0:x.status)===400||(x==null?void 0:x.status)===422))O=await fo("/api/v1/anime",{page:e,limit:P},S);else throw x}let j=Rp(O).map(xc).filter(Boolean);const D=FL(O,{page:e,perPage:P},j);if(!C&&j.length===0&&e===1&&!E){const x=qL(t);if(x)try{const y=await Vg(x,{light:!0});if(y)return{pageInfo:{total:1,currentPage:1,lastPage:1,hasNextPage:!1,perPage:P},media:[y]}}catch(y){if((y==null?void 0:y.name)==="AbortError")throw y;console.warn("Auto-import from search failed:",y.message)}}return g||(j=j.filter(x=>!x.isAdult)),f&&(j=j.filter(x=>(x.averageScore||0)>f)),{...D,media:j}}function KL(t){const e=String(t);return/^\d+$/.test(e)?{path:`/api/v1/anime/anilist/${e}`,anilistId:Number(e)}:/^y\d+$/.test(e)?{path:`/api/v1/anime/${e.slice(1)}`,anilistId:null}:{path:`/api/v1/anime/slug/${encodeURIComponent(e)}`,anilistId:null}}async function Vg(t,{onImporting:e,light:n=!1}={}){const{path:r,anilistId:i}=KL(t);let s;try{s=await fo(r,null,{ttl:as.byId})}catch(g){if((g==null?void 0:g.status)!==404||i==null)throw(g==null?void 0:g.status)===404?new Hn("Anime not found.",{status:404,code:"NOT_FOUND"}):g;e==null||e(!0);try{await HL(i),s=await fo(r,null,{ttl:as.byId,skipCache:!0})}catch(I){throw(I==null?void 0:I.status)===404?new Hn("Anime not found, and YumeList could not import it.",{status:404,code:"NOT_FOUND"}):I}finally{e==null||e(!1)}}const o=xc((s==null?void 0:s.data)??s);if(!o)throw new Hn("Anime not found.",{status:404,code:"NOT_FOUND"});if(n||o.yumelistId==null)return o;const a=o.yumelistId,[u,d]=await Promise.allSettled([fo(`/api/v1/anime/${a}/relations`,null,{ttl:as.byId}),fo(`/api/v1/anime/${a}/recommendations`,{limit:12},{ttl:as.byId})]),f=u.status==="fulfilled"?Rp(u.value):[];o.relations={edges:f.map(g=>{const I=xc(ue(g.anime,g.node,g.related,g.media,g.target,g));return I?{relationType:wc(ue(g.relationType,g.relation,g.type)),node:I}:null}).filter(Boolean)};const m=d.status==="fulfilled"?Rp(d.value):[];return o.recommendations={nodes:m.map(g=>{const I=xc(g.anime||g);return I?(I.reasons=g.reasons||[],{mediaRecommendation:I}):null}).filter(Boolean)},o}async function hd(t=1,e=30){const n=await En({page:t,perPage:e,status:"RELEASING",sort:["POPULARITY_DESC"]});return n.media.length?n:En({page:t,perPage:e,sort:["POPULARITY_DESC"]})}async function MT(t=1,e=30){return En({page:t,perPage:e,sort:["POPULARITY_DESC"]})}async function VT(t=1,e=30){return En({page:t,perPage:e,sort:["SCORE_DESC"]})}async function UT(t=1,e=30){const n=new Date().getFullYear();return En({page:t,perPage:e,year:n,sort:["POPULARITY_DESC"]})}async function QL(t=1,e=30){return En({page:t,perPage:e,status:"RELEASING",sort:["POPULARITY_DESC"]})}async function YL(t=1,e=30){return En({page:t,perPage:e,status:"NOT_YET_RELEASED",sort:["POPULARITY_DESC"]})}async function XL(t=1,e=30){return En({page:t,perPage:e,format:"MOVIE",sort:["POPULARITY_DESC"]})}async function JL({page:t=1,perPage:e=50,airingAtGreater:n,airingAtLesser:r}={}){const i=await En({page:t,perPage:100,status:"RELEASING",sort:["POPULARITY_DESC"],isAdult:!0}),s=i.media.filter(o=>{var a;return(a=o.nextAiringEpisode)==null?void 0:a.airingAt}).filter(o=>{const a=o.nextAiringEpisode.airingAt;return(!n||a>=n)&&(!r||a<=r)}).sort((o,a)=>o.nextAiringEpisode.airingAt-a.nextAiringEpisode.airingAt).slice(0,e).map(o=>({id:`${o.id}-${o.nextAiringEpisode.episode}`,episode:o.nextAiringEpisode.episode,airingAt:o.nextAiringEpisode.airingAt,timeUntilAiring:o.nextAiringEpisode.timeUntilAiring,media:o}));return{pageInfo:i.pageInfo,airingSchedules:s}}async function ZL(){const t=Math.floor(Math.random()*5)+1,n=(await En({page:t,perPage:30,sort:["POPULARITY_DESC"]})).media||[];if(!n.length)throw new Error("No anime found");return n[Math.floor(Math.random()*n.length)]}const FT=["Action","Adventure","Comedy","Drama","Ecchi","Fantasy","Horror","Mahou Shoujo","Mecha","Music","Mystery","Psychological","Romance","Sci-Fi","Slice of Life","Sports","Supernatural","Thriller"],eO=["TV","TV_SHORT","MOVIE","SPECIAL","OVA","ONA","MUSIC"],tO=["WINTER","SPRING","SUMMER","FALL"],nO=[{value:"POPULARITY_DESC",label:"Popularity"},{value:"TRENDING_DESC",label:"Trending"},{value:"SCORE_DESC",label:"Highest Rated"},{value:"START_DATE_DESC",label:"Newest"},{value:"TITLE_ROMAJI",label:"Title A-Z"}];function uu({open:t,onClose:e,initialMode:n="login"}){const{signIn:r,signUp:i,resetPassword:s}=rr(),[o,a]=R.useState(n),[u,d]=R.useState(""),[f,m]=R.useState(""),[g,I]=R.useState(""),[C,k]=R.useState(!1),[P,E]=R.useState(""),[_,S]=R.useState("");if(R.useEffect(()=>{t&&(a(n),E(""),S(""))},[t,n]),R.useEffect(()=>{const j=D=>D.key==="Escape"&&e();return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[e]),!t)return null;const O=async j=>{j.preventDefault(),E(""),S(""),k(!0);try{if(!tr)throw new Error("Firebase not configured. See README.");o==="login"?(await r(u,f),e()):o==="signup"?(await i(u,f,g),e()):o==="reset"&&(await s(u),S("Password reset email sent."))}catch(D){E(D.message||"Something went wrong")}finally{k(!1)}};return c.jsx("div",{className:"modal-backdrop",onClick:e,children:c.jsxs("div",{className:"modal glass",onClick:j=>j.stopPropagation(),role:"dialog","aria-modal":"true",children:[c.jsxs("div",{className:"modal-head",children:[c.jsxs("h2",{children:[o==="login"&&"Welcome back",o==="signup"&&"Create your account",o==="reset"&&"Reset password"]}),c.jsx("button",{className:"icon-btn",onClick:e,"aria-label":"Close",children:c.jsx($l,{size:18})})]}),!tr&&c.jsxs("div",{className:"notice",children:["Firebase isn't configured yet. Add your keys to ",c.jsx("code",{children:".env"})," — see the README for setup steps."]}),c.jsxs("form",{onSubmit:O,className:"modal-form",children:[o==="signup"&&c.jsxs("label",{children:["Display name",c.jsx("input",{value:g,onChange:j=>I(j.target.value),placeholder:"Your name",required:!0,minLength:2})]}),c.jsxs("label",{children:["Email",c.jsx("input",{type:"email",value:u,onChange:j=>d(j.target.value),placeholder:"you@example.com",required:!0})]}),o!=="reset"&&c.jsxs("label",{children:["Password",c.jsx("input",{type:"password",value:f,onChange:j=>m(j.target.value),placeholder:"••••••••",required:!0,minLength:6})]}),P&&c.jsx("div",{className:"error",children:P}),_&&c.jsx("div",{className:"info",children:_}),c.jsxs("button",{className:"btn primary full",disabled:C,type:"submit",children:[C&&c.jsx(xn,{size:16,className:"spin"}),o==="login"?"Log In":o==="signup"?"Create Account":"Send Reset Email"]})]}),c.jsxs("div",{className:"modal-foot",children:[o==="login"&&c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"link-btn",onClick:()=>a("reset"),children:"Forgot password?"}),c.jsx("span",{className:"muted",children:"New here? "}),c.jsx("button",{className:"link-btn accent",onClick:()=>a("signup"),children:"Sign up"})]}),o==="signup"&&c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"muted",children:"Have an account? "}),c.jsx("button",{className:"link-btn accent",onClick:()=>a("login"),children:"Log in"})]}),o==="reset"&&c.jsx("button",{className:"link-btn accent",onClick:()=>a("login"),children:"Back to login"})]}),c.jsx("style",{children:`
          .modal-backdrop {
            position: fixed; inset: 0; z-index: 300;
            background: rgba(0,0,0,0.6); backdrop-filter: blur(8px);
            display: flex; align-items: center; justify-content: center; padding: 20px;
            animation: fadeIn 0.2s ease;
          }
          .modal {
            width: 100%; max-width: 420px; border-radius: 16px;
            padding: 24px; animation: fadeIn 0.25s ease;
          }
          .modal-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
          .modal-head h2 { margin: 0; font-size: 20px; }
          .modal-form { display: flex; flex-direction: column; gap: 14px; }
          .modal-form label { display: flex; flex-direction: column; gap: 6px; font-size: 13px; color: var(--text-dim); font-weight: 500; }
          .modal-form input {
            background: var(--panel-2); border: 1px solid var(--border);
            border-radius: 10px; padding: 12px 14px; color: var(--text);
            font-size: 14px; outline: none; transition: var(--transition);
          }
          .modal-form input:focus { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-soft); }
          .full { width: 100%; justify-content: center; padding: 12px; }
          .error { padding: 10px; background: rgba(248,113,113,0.12); border: 1px solid rgba(248,113,113,0.35); color: var(--danger); border-radius: 8px; font-size: 13px; }
          .info { padding: 10px; background: var(--accent-soft); border: 1px solid var(--accent); border-radius: 8px; font-size: 13px; color: var(--accent); }
          .notice { padding: 10px; background: rgba(96,165,250,0.1); border: 1px solid rgba(96,165,250,0.3); border-radius: 8px; font-size: 12px; color: var(--blue); margin-bottom: 16px; }
          .notice code { background: rgba(0,0,0,0.3); padding: 1px 5px; border-radius: 4px; }
          .modal-foot { margin-top: 18px; display: flex; align-items: center; justify-content: center; gap: 6px; font-size: 13px; }
          .link-btn { background: transparent; border: none; color: var(--text-dim); font-size: 13px; padding: 2px; }
          .link-btn.accent { color: var(--accent); font-weight: 600; }
          .link-btn:hover { text-decoration: underline; }
          .spin { animation: spin 0.9s linear infinite; }
          @keyframes spin { to { transform: rotate(360deg); } }
        `})]})})}function rO({onMenu:t}){const e=jr(),{user:n,signOut:r}=rr(),[i,s]=R.useState(""),[o,a]=R.useState([]),[u,d]=R.useState(!1),[f,m]=R.useState(!1),[g,I]=R.useState(!1),[C,k]=R.useState(-1),P=R.useRef(null),E=R.useRef(null),_=R.useRef(null);R.useEffect(()=>{if(!i.trim()){a([]),d(!1);return}const D=setTimeout(async()=>{_.current&&_.current.abort();const x=new AbortController;_.current=x;try{const y=await En({query:i,perPage:8,signal:x.signal,isSuggestion:!0});a(y.media||[]),d(!0),k(-1)}catch(y){y.name!=="AbortError"&&console.warn(y)}},300);return()=>clearTimeout(D)},[i]),R.useEffect(()=>{const D=x=>{P.current&&!P.current.contains(x.target)&&d(!1),E.current&&!E.current.contains(x.target)&&m(!1)};return document.addEventListener("mousedown",D),()=>document.removeEventListener("mousedown",D)},[]),R.useEffect(()=>{const D=x=>{var y,T;x.key==="/"&&!["INPUT","TEXTAREA"].includes((y=document.activeElement)==null?void 0:y.tagName)&&(x.preventDefault(),(T=document.getElementById("hoshii-search"))==null||T.focus())};return document.addEventListener("keydown",D),()=>document.removeEventListener("keydown",D)},[]);const S=D=>{D==null||D.preventDefault(),i.trim()&&(e(`/search?query=${encodeURIComponent(i.trim())}`),d(!1))},O=D=>{if(!(!u||!o.length))if(D.key==="ArrowDown")D.preventDefault(),k(x=>Math.min(x+1,o.length-1));else if(D.key==="ArrowUp")D.preventDefault(),k(x=>Math.max(x-1,0));else if(D.key==="Enter"&&C>=0){D.preventDefault();const x=o[C];e(`/anime/${x.id}`),d(!1),s("")}else D.key==="Escape"&&d(!1)},j=async()=>{try{const D=await ZL();D&&e(`/anime/${D.id}`)}catch(D){console.warn(D)}};return c.jsxs(c.Fragment,{children:[c.jsxs("header",{className:"nav",children:[c.jsx("button",{className:"icon-btn",onClick:t,"aria-label":"Open menu",children:c.jsx(hb,{size:22})}),c.jsxs(Ne,{to:"/",className:"brand","aria-label":"Hoshii home",children:[c.jsxs("svg",{width:"26",height:"26",viewBox:"0 0 64 64","aria-hidden":"true",children:[c.jsx("path",{d:"M20 14v36M20 32h14M44 14v36",stroke:"var(--accent)",strokeWidth:"6",strokeLinecap:"round",fill:"none"}),c.jsx("circle",{cx:"44",cy:"20",r:"3",fill:"var(--accent)"})]}),c.jsxs("span",{className:"brand-text",children:["HOSHII",c.jsx("em",{children:".tv"})]})]}),c.jsxs("form",{className:"nav-search",onSubmit:S,ref:P,children:[c.jsx(Kc,{size:18,className:"search-icon"}),c.jsx("input",{id:"hoshii-search",type:"text",placeholder:"Search Anime",value:i,onChange:D=>s(D.target.value),onFocus:()=>i&&d(!0),onKeyDown:O,autoComplete:"off","aria-label":"Search anime"}),i&&c.jsx("button",{type:"button",className:"icon-btn sm","aria-label":"Clear",onClick:()=>{s(""),a([]),d(!1)},children:c.jsx($l,{size:16})}),c.jsx("span",{className:"kbd",children:"/"}),c.jsx("button",{type:"submit",className:"icon-btn sm","aria-label":"Search",children:c.jsx(Kc,{size:16})}),c.jsx("button",{type:"button",className:"icon-btn sm","aria-label":"Random anime",onClick:j,children:c.jsx(ib,{size:16})}),u&&o.length>0&&c.jsx("div",{className:"suggest glass",children:o.map((D,x)=>{var y,T,A,N;return c.jsxs("button",{className:`suggest-row ${x===C?"active":""}`,onMouseEnter:()=>k(x),onClick:()=>{e(`/anime/${D.id}`),d(!1),s("")},children:[c.jsx("img",{src:(y=D.coverImage)==null?void 0:y.large,alt:"",loading:"lazy"}),c.jsxs("div",{className:"suggest-info",children:[c.jsx("span",{className:"suggest-title",children:((T=D.title)==null?void 0:T.english)||((A=D.title)==null?void 0:A.userPreferred)||((N=D.title)==null?void 0:N.romaji)}),c.jsxs("span",{className:"suggest-meta",children:[D.seasonYear||"—"," · ",D.format||"—",D.averageScore?` · ★ ${D.averageScore}`:""]})]})]},D.id)})})]}),c.jsx("div",{className:"nav-right",ref:E,children:n?c.jsxs(c.Fragment,{children:[c.jsxs("button",{className:"avatar-btn",onClick:()=>m(D=>!D),"aria-label":"Open profile menu",children:[n.photoURL?c.jsx("img",{src:n.photoURL,alt:""}):c.jsx("span",{className:"avatar-fallback",children:(n.displayName||n.email||"U")[0].toUpperCase()}),c.jsx(Dd,{size:14})]}),f&&c.jsxs("div",{className:"dropdown glass",onClick:()=>m(!1),children:[c.jsxs(Ne,{to:"/profile",className:"dropdown-item",children:[c.jsx(mE,{size:16})," Profile"]}),c.jsxs(Ne,{to:"/history",className:"dropdown-item",children:[c.jsx(lE,{size:16})," Watch History"]}),c.jsxs(Ne,{to:"/watchlist",className:"dropdown-item",children:[c.jsx(iE,{size:16})," Watchlist"]}),c.jsxs(Ne,{to:"/settings",className:"dropdown-item",children:[c.jsx(hE,{size:16})," Settings"]}),c.jsxs("button",{className:"dropdown-item danger",onClick:async()=>{await r(),e("/")},children:[c.jsx(cE,{size:16})," Log Out"]})]})]}):c.jsxs("div",{className:"auth-buttons",children:[c.jsxs("button",{className:"btn ghost sm",onClick:()=>I(!0),children:[c.jsx(uE,{size:16})," Log In"]}),c.jsxs("button",{className:"btn primary sm",onClick:()=>I(!0),children:[c.jsx(pE,{size:16})," Sign Up"]})]})})]}),c.jsx(uu,{open:g,onClose:()=>I(!1)}),c.jsx("style",{children:`
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; gap: 16px;
          height: var(--navbar-h);
          padding: 0 20px;
          background: rgba(8,8,12,0.75);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-soft);
        }
        .icon-btn {
          display: inline-flex; align-items: center; justify-content: center;
          width: 38px; height: 38px; border-radius: 10px;
          background: transparent; border: 1px solid transparent;
          color: var(--text); transition: var(--transition);
        }
        .icon-btn:hover { background: var(--panel-2); border-color: var(--border); }
        .icon-btn.sm { width: 30px; height: 30px; }
        .brand { display: flex; align-items: center; gap: 8px; font-weight: 800; letter-spacing: 0.5px; }
        .brand-text { font-size: 18px; }
        .brand-text em { color: var(--accent); font-style: normal; font-weight: 600; font-size: 11px; }
        .nav-search {
          position: relative; flex: 1; max-width: 720px; margin: 0 auto;
          display: flex; align-items: center; gap: 6px;
          background: var(--panel); border: 1px solid var(--border);
          border-radius: 12px; padding: 0 8px 0 14px; height: 44px;
          transition: var(--transition);
        }
        .nav-search:focus-within { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-soft); }
        .nav-search input {
          flex: 1; background: transparent; border: none; outline: none;
          color: var(--text); font-size: 14px;
        }
        .search-icon { color: var(--text-muted); flex-shrink: 0; }
        .kbd {
          font-size: 11px; font-weight: 600; padding: 2px 6px; border-radius: 6px;
          background: var(--panel-2); color: var(--text-muted);
          border: 1px solid var(--border);
        }
        .suggest {
          position: absolute; top: calc(100% + 8px); left: 0; right: 0;
          border-radius: 12px; padding: 6px; z-index: 200;
          max-height: 420px; overflow-y: auto;
          animation: fadeIn 0.15s ease;
        }
        .suggest-row {
          display: flex; gap: 10px; align-items: center;
          padding: 8px; width: 100%; text-align: left;
          background: transparent; border: none; color: var(--text);
          border-radius: 8px; transition: var(--transition);
        }
        .suggest-row:hover, .suggest-row.active { background: var(--accent-soft); }
        .suggest-row img { width: 40px; height: 56px; object-fit: cover; border-radius: 6px; }
        .suggest-info { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
        .suggest-title { font-weight: 600; font-size: 13px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .suggest-meta { font-size: 11px; color: var(--text-muted); }
        .nav-right { display: flex; align-items: center; gap: 8px; position: relative; }
        .auth-buttons { display: flex; gap: 6px; }
        .btn.sm { padding: 8px 12px; font-size: 13px; }
        .avatar-btn {
          display: flex; align-items: center; gap: 6px;
          background: var(--panel); border: 1px solid var(--border);
          border-radius: 10px; padding: 4px 8px 4px 4px; color: var(--text);
          transition: var(--transition);
        }
        .avatar-btn:hover { border-color: var(--accent); }
        .avatar-btn img { width: 28px; height: 28px; border-radius: 8px; object-fit: cover; }
        .avatar-fallback {
          width: 28px; height: 28px; border-radius: 8px;
          background: linear-gradient(135deg, var(--accent-strong), var(--accent));
          color: #0b0b12; font-weight: 700;
          display: flex; align-items: center; justify-content: center; font-size: 13px;
        }
        .dropdown {
          position: absolute; right: 0; top: calc(100% + 8px);
          min-width: 220px; padding: 6px; border-radius: 12px; z-index: 200;
          animation: fadeIn 0.15s ease;
        }
        .dropdown-item {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 12px; border-radius: 8px;
          background: transparent; border: none; color: var(--text);
          font-size: 13px; font-weight: 500; width: 100%; text-align: left;
          transition: var(--transition);
        }
        .dropdown-item:hover { background: var(--accent-soft); }
        .dropdown-item.danger { color: var(--danger); }
        @media (max-width: 720px) {
          .nav { padding: 0 12px; gap: 8px; }
          .brand-text { display: none; }
          .auth-buttons .btn span { display: none; }
          .kbd { display: none; }
        }
      `})]})}const iO=[{to:"/",label:"Home",icon:ab,end:!0},{to:"/trending",label:"Trending",icon:xb},{to:"/search",label:"Search",icon:Kc},{to:"/seasonal",label:"Seasonal Anime",icon:rb},{to:"/schedule",label:"Schedule",icon:sE},{to:"/history",label:"Watch History",icon:lE},{to:"/watchlist",label:"Watchlist",icon:iE},{to:"/settings",label:"Settings",icon:hE},{to:"/profile",label:"Profile",icon:mE}];function sO({open:t,onClose:e}){const{user:n}=rr();return R.useEffect(()=>{const r=i=>i.key==="Escape"&&e();return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[e]),c.jsxs(c.Fragment,{children:[c.jsx("div",{className:`sidebar-backdrop ${t?"show":""}`,onClick:e,"aria-hidden":"true"}),c.jsxs("aside",{className:`sidebar ${t?"open":""}`,"aria-hidden":!t,children:[c.jsxs("div",{className:"sidebar-head",children:[c.jsxs("div",{className:"sidebar-brand",children:[c.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 64 64","aria-hidden":"true",children:[c.jsx("path",{d:"M20 14v36M20 32h14M44 14v36",stroke:"var(--accent)",strokeWidth:"6",strokeLinecap:"round",fill:"none"}),c.jsx("circle",{cx:"44",cy:"20",r:"3",fill:"var(--accent)"})]}),c.jsx("span",{children:"HOSHII"})]}),c.jsx("button",{className:"icon-btn",onClick:e,"aria-label":"Close menu",children:c.jsx($l,{size:18})})]}),c.jsx("nav",{className:"sidebar-nav",children:iO.map(({to:r,label:i,icon:s,end:o})=>c.jsxs(Gk,{to:r,end:o,className:({isActive:a})=>`sidebar-link ${a?"active":""}`,onClick:e,children:[c.jsx(s,{size:18}),c.jsx("span",{children:i})]},r))}),c.jsxs("div",{className:"sidebar-foot",children:[c.jsx("div",{className:"sidebar-user",children:n?c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"avatar-sm",children:n.photoURL?c.jsx("img",{src:n.photoURL,alt:""}):(n.displayName||n.email||"U")[0].toUpperCase()}),c.jsxs("div",{className:"meta",children:[c.jsx("span",{className:"name",children:n.displayName||"User"}),c.jsx("span",{className:"email",children:n.email})]})]}):c.jsx("span",{className:"muted",children:"Not signed in"})}),c.jsx("div",{className:"version",children:"Hoshii · v1.0.0"})]})]}),c.jsx("style",{children:`
        .sidebar-backdrop {
          position: fixed; inset: 0; background: rgba(0,0,0,0.55);
          backdrop-filter: blur(6px);
          opacity: 0; pointer-events: none; transition: var(--transition); z-index: 150;
        }
        .sidebar-backdrop.show { opacity: 1; pointer-events: auto; }
        .sidebar {
          position: fixed; top: 0; left: 0; bottom: 0; width: 280px;
          background: rgba(14,14,20,0.96);
          backdrop-filter: blur(24px);
          border-right: 1px solid var(--border);
          transform: translateX(-100%);
          transition: transform 0.3s cubic-bezier(.4,0,.2,1);
          display: flex; flex-direction: column; z-index: 200;
        }
        .sidebar.open { transform: translateX(0); }
        .sidebar-head {
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 20px; border-bottom: 1px solid var(--border-soft);
        }
        .sidebar-brand { display: flex; align-items: center; gap: 10px; font-weight: 800; letter-spacing: 0.5px; }
        .sidebar-nav { flex: 1; padding: 12px; display: flex; flex-direction: column; gap: 4px; overflow-y: auto; }
        .sidebar-link {
          display: flex; align-items: center; gap: 12px;
          padding: 11px 14px; border-radius: 10px;
          color: var(--text-dim); font-weight: 600; font-size: 14px;
          border-left: 2px solid transparent;
          transition: var(--transition);
        }
        .sidebar-link:hover { background: var(--panel); color: var(--text); }
        .sidebar-link.active {
          background: var(--accent-soft); color: var(--text);
          border-left-color: var(--accent);
        }
        .sidebar-foot {
          padding: 14px 20px; border-top: 1px solid var(--border-soft);
          display: flex; flex-direction: column; gap: 12px;
        }
        .sidebar-user { display: flex; align-items: center; gap: 10px; }
        .avatar-sm {
          width: 34px; height: 34px; border-radius: 10px;
          background: linear-gradient(135deg, var(--accent-strong), var(--accent));
          color: #0b0b12; font-weight: 700; display: flex; align-items: center; justify-content: center;
          overflow: hidden;
        }
        .avatar-sm img { width: 100%; height: 100%; object-fit: cover; }
        .sidebar-user .meta { display: flex; flex-direction: column; min-width: 0; }
        .sidebar-user .name { font-size: 13px; font-weight: 600; }
        .sidebar-user .email { font-size: 11px; color: var(--text-muted); overflow: hidden; text-overflow: ellipsis; }
        .version { font-size: 11px; color: var(--text-muted); text-align: center; }
      `})]})}function oO(){return c.jsxs("footer",{className:"footer",children:[c.jsxs("div",{className:"container footer-grid",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"footer-brand",children:[c.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 64 64","aria-hidden":"true",children:[c.jsx("path",{d:"M20 14v36M20 32h14M44 14v36",stroke:"var(--accent)",strokeWidth:"6",strokeLinecap:"round",fill:"none"}),c.jsx("circle",{cx:"44",cy:"20",r:"3",fill:"var(--accent)"})]}),c.jsx("span",{children:"HOSHII"})]}),c.jsx("p",{className:"muted footer-desc",children:"Hoshii is an anime discovery interface. Anime metadata is provided by the YumeList API. Hoshii does not host or stream any video files."})]}),c.jsxs("div",{children:[c.jsx("h4",{children:"Browse"}),c.jsx(Ne,{to:"/",children:"Home"}),c.jsx(Ne,{to:"/trending",children:"Trending"}),c.jsx(Ne,{to:"/schedule",children:"Schedule"})]}),c.jsxs("div",{children:[c.jsx("h4",{children:"Account"}),c.jsx(Ne,{to:"/profile",children:"Profile"}),c.jsx(Ne,{to:"/watchlist",children:"Watchlist"}),c.jsx(Ne,{to:"/settings",children:"Settings"})]}),c.jsxs("div",{children:[c.jsx("h4",{children:"About"}),c.jsx("a",{href:"https://public-reach-trend.ngrok-free.dev",target:"_blank",rel:"noreferrer",children:"YumeList"}),c.jsx("a",{href:"https://github.com",target:"_blank",rel:"noreferrer",children:"GitHub"}),c.jsx(Ne,{to:"/search",children:"Search"})]})]}),c.jsxs("div",{className:"container footer-bottom",children:[c.jsxs("span",{className:"muted-2",children:["© ",new Date().getFullYear()," Hoshii"]}),c.jsx("span",{className:"muted-2",children:"Data provided by YumeList"})]}),c.jsx("style",{children:`
        .footer {
          margin-top: 60px;
          border-top: 1px solid var(--border-soft);
          background: var(--bg-soft);
          padding: 40px 0 20px;
        }
        .footer-grid {
          display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 32px;
        }
        .footer-grid h4 { font-size: 13px; margin: 0 0 12px; letter-spacing: 0.05em; text-transform: uppercase; color: var(--text-dim); }
        .footer-grid a { display: block; padding: 4px 0; color: var(--text-dim); font-size: 13px; }
        .footer-grid a:hover { color: var(--accent); }
        .footer-brand { display: flex; align-items: center; gap: 10px; font-weight: 800; margin-bottom: 12px; }
        .footer-desc { font-size: 13px; max-width: 420px; line-height: 1.6; }
        .footer-bottom {
          margin-top: 32px; padding-top: 20px; border-top: 1px solid var(--border-soft);
          display: flex; justify-content: space-between; font-size: 12px;
        }
        @media (max-width: 720px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
      `})]})}function aO({children:t}){const[e,n]=R.useState(!1);return c.jsxs(c.Fragment,{children:[c.jsx(rO,{onMenu:()=>n(!0)}),c.jsx(sO,{open:e,onClose:()=>n(!1)}),c.jsx("main",{children:t}),c.jsx(oO,{})]})}function lO({items:t=[]}){var I,C,k,P;const e=jr(),[n,r]=R.useState(0),[i,s]=R.useState(!1),[o,a]=R.useState(!1),u=R.useRef(null);if(R.useEffect(()=>{if(!(i||o||t.length<=1))return u.current=setInterval(()=>{r(E=>(E+1)%t.length)},8e3),()=>clearInterval(u.current)},[i,o,t.length]),!t.length)return null;const d=t[n],f=((I=d.title)==null?void 0:I.userPreferred)||((C=d.title)==null?void 0:C.english)||((k=d.title)==null?void 0:k.romaji),m=d.bannerImage||((P=d.coverImage)==null?void 0:P.extraLarge),g=(d.description||"").replace(/<[^>]*>/g,"").replace(/&quot;/g,'"').replace(/&amp;/g,"&");return c.jsxs("div",{className:"hero",onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[c.jsx("div",{className:"hero-bg",style:{backgroundImage:`url(${m})`}}),c.jsx("div",{className:"hero-shade"}),c.jsxs("div",{className:"hero-content container",children:[c.jsxs("div",{className:"hero-meta",children:[d.format&&c.jsx("span",{className:"pill",children:d.format}),d.averageScore&&c.jsxs("span",{className:"pill gold",children:[c.jsx(Nm,{size:12})," ",d.averageScore]}),d.duration&&c.jsxs("span",{className:"pill",children:[c.jsx(oE,{size:12})," ",d.duration," mins"]})]}),c.jsx("h1",{children:f}),c.jsxs("p",{className:"hero-desc",children:[g.slice(0,320),g.length>320?"…":""]}),c.jsxs("div",{className:"hero-actions",children:[c.jsxs("button",{className:"btn",onClick:()=>e(`/anime/${d.id}`),children:[c.jsx(lb,{size:16})," Details"]}),c.jsxs("button",{className:"btn primary",onClick:()=>e(`/watch/${d.id}`),children:[c.jsx(Pm,{size:16})," Watch Now"]})]})]}),t.length>1&&c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"hero-nav left","aria-label":"Previous",onClick:()=>{r(E=>(E-1+t.length)%t.length),s(!0)},children:c.jsx(Bl,{size:22})}),c.jsx("button",{className:"hero-nav right","aria-label":"Next",onClick:()=>{r(E=>(E+1)%t.length),s(!0)},children:c.jsx(qo,{size:22})}),c.jsx("div",{className:"hero-dots",children:t.map((E,_)=>c.jsx("button",{className:_===n?"active":"",onClick:()=>{r(_),s(!0)},"aria-label":`Go to slide ${_+1}`},_))})]}),c.jsx("style",{children:`
        .hero {
          position: relative; width: 100%; aspect-ratio: 21/9; min-height: 380px; max-height: 620px;
          overflow: hidden; border-bottom: 1px solid var(--border-soft);
        }
        .hero-bg {
          position: absolute; inset: 0;
          background-size: cover; background-position: center;
          filter: blur(1px);
          transform: scale(1.03);
        }
        .hero-shade {
          position: absolute; inset: 0;
          background:
            linear-gradient(to top, rgba(8,8,12,0.98) 0%, rgba(8,8,12,0.5) 40%, rgba(8,8,12,0.2) 70%, rgba(8,8,12,0.7) 100%),
            linear-gradient(to right, rgba(8,8,12,0.85) 0%, transparent 60%);
        }
        .hero-content {
          position: absolute; left: 0; right: 0; bottom: 40px;
          max-width: 720px; padding: 0 40px;
          display: flex; flex-direction: column; gap: 12px;
          animation: fadeIn 0.5s ease;
        }
        .hero-meta { display: flex; gap: 8px; flex-wrap: wrap; }
        .pill {
          display: inline-flex; align-items: center; gap: 5px;
          background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15);
          color: #fff; font-size: 12px; font-weight: 600;
          padding: 5px 10px; border-radius: 999px; backdrop-filter: blur(8px);
        }
        .pill.gold { color: #fcd34d; border-color: rgba(252,211,77,0.3); }
        .hero h1 {
          margin: 0; font-size: clamp(28px, 4.5vw, 52px); font-weight: 800;
          letter-spacing: -0.02em; line-height: 1.05;
          text-shadow: 0 4px 30px rgba(0,0,0,0.7);
        }
        .hero-desc { margin: 0; font-size: 14px; line-height: 1.6; color: #d6d6e2; max-width: 640px; }
        .hero-actions { display: flex; gap: 10px; margin-top: 8px; flex-wrap: wrap; }
        .hero-nav {
          position: absolute; top: 50%; transform: translateY(-50%);
          background: rgba(0,0,0,0.5); color: #fff; border: 1px solid rgba(255,255,255,0.15);
          width: 44px; height: 44px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: opacity 0.25s;
        }
        .hero:hover .hero-nav { opacity: 1; }
        .hero-nav.left { left: 16px; }
        .hero-nav.right { right: 16px; }
        .hero-nav:hover { background: var(--accent); color: #0b0b12; }
        .hero-dots {
          position: absolute; bottom: 18px; left: 50%; transform: translateX(-50%);
          display: flex; gap: 6px;
        }
        .hero-dots button {
          width: 24px; height: 4px; border-radius: 4px; border: none;
          background: rgba(255,255,255,0.25); transition: var(--transition);
        }
        .hero-dots button.active { background: var(--accent); width: 32px; }
        @media (max-width: 720px) {
          .hero { aspect-ratio: 4/5; min-height: 460px; }
          .hero-content { padding: 0 20px; bottom: 20px; }
          .hero-desc { display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; }
        }
      `})]})}function uO(){const t=jr(),e=R.useRef(null),n=r=>{e.current&&e.current.scrollBy({left:r*400,behavior:"smooth"})};return c.jsxs("div",{className:"genre-bar",children:[c.jsx("button",{className:"genre-nav",onClick:()=>n(-1),"aria-label":"Scroll left",children:c.jsx(Bl,{size:18})}),c.jsx("div",{className:"genre-scroll",ref:e,children:FT.map(r=>c.jsx("button",{className:"genre-chip",onClick:()=>t(`/search?genre=${encodeURIComponent(r)}`),children:r},r))}),c.jsx("button",{className:"genre-nav",onClick:()=>n(1),"aria-label":"Scroll right",children:c.jsx(qo,{size:18})}),c.jsx("style",{children:`
        .genre-bar {
          display: flex; align-items: center; gap: 8px;
          margin: 24px 0 8px;
        }
        .genre-scroll {
          flex: 1; display: flex; gap: 8px; overflow-x: auto;
          scrollbar-width: none; scroll-behavior: smooth;
        }
        .genre-scroll::-webkit-scrollbar { display: none; }
        .genre-chip {
          flex: 0 0 auto; padding: 8px 16px; border-radius: 999px;
          background: var(--panel); border: 1px solid var(--border);
          color: var(--text-dim); font-weight: 600; font-size: 13px;
          transition: var(--transition);
        }
        .genre-chip:hover {
          background: var(--accent-soft); color: var(--text); border-color: var(--accent);
          transform: translateY(-1px);
        }
        .genre-nav {
          flex-shrink: 0; width: 34px; height: 34px; border-radius: 50%;
          background: var(--panel); border: 1px solid var(--border); color: var(--text);
          display: flex; align-items: center; justify-content: center;
          transition: var(--transition);
        }
        .genre-nav:hover { background: var(--accent-soft); border-color: var(--accent); }
      `})]})}function fd({anime:t,showMeta:e=!0}){var i,s,o,a,u,d;if(!t)return null;const n=((i=t.title)==null?void 0:i.english)||((s=t.title)==null?void 0:s.userPreferred)||((o=t.title)==null?void 0:o.romaji)||"Untitled",r=((a=t.coverImage)==null?void 0:a.extraLarge)||((u=t.coverImage)==null?void 0:u.large)||((d=t.coverImage)==null?void 0:d.medium);return c.jsxs(Ne,{to:`/anime/${t.id}`,className:"anime-card",children:[c.jsxs("div",{className:"poster",children:[r?c.jsx("img",{src:r,alt:n,loading:"lazy"}):c.jsx("div",{className:"poster-fallback",children:n[0]}),c.jsx("div",{className:"overlay",children:c.jsxs("span",{className:"quick-view",children:[c.jsx(Pm,{size:14})," Quick View"]})}),t.averageScore?c.jsxs("span",{className:"score",children:[c.jsx(Nm,{size:12})," ",t.averageScore]}):null]}),c.jsxs("div",{className:"info",children:[c.jsx("h3",{className:"title",title:n,children:n}),e&&c.jsxs("div",{className:"meta",children:[t.format&&c.jsxs("span",{children:[c.jsx(sb,{size:11})," ",t.format]}),t.seasonYear&&c.jsxs("span",{children:[c.jsx(sE,{size:11})," ",t.seasonYear]}),t.episodes?c.jsxs("span",{children:[c.jsx(cb,{size:11})," ",t.episodes," EP"]}):null]})]}),c.jsx("style",{children:`
        .anime-card {
          display: flex; flex-direction: column; gap: 8px;
          transition: transform 0.25s cubic-bezier(.4,0,.2,1);
          position: relative;
        }
        .anime-card:hover { transform: translateY(-4px); }
        .poster {
          position: relative; aspect-ratio: 2/3; border-radius: 12px;
          overflow: hidden; background: var(--panel);
          border: 1px solid var(--border-soft);
          transition: var(--transition);
        }
        .anime-card:hover .poster { border-color: var(--accent); box-shadow: 0 8px 30px rgba(167,139,250,0.15); }
        .poster img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
        .anime-card:hover .poster img { transform: scale(1.06); }
        .poster-fallback {
          width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;
          font-size: 40px; font-weight: 800; color: var(--text-muted);
        }
        .overlay {
          position: absolute; inset: 0; display: flex; align-items: flex-end; justify-content: center;
          background: linear-gradient(to top, rgba(0,0,0,0.85), transparent 55%);
          opacity: 0; transition: opacity 0.25s ease;
        }
        .anime-card:hover .overlay { opacity: 1; }
        .quick-view {
          display: inline-flex; align-items: center; gap: 6px;
          background: var(--accent); color: #0b0b12; font-weight: 700; font-size: 12px;
          padding: 8px 14px; border-radius: 8px; margin-bottom: 12px;
          transform: translateY(8px); transition: transform 0.25s ease;
        }
        .anime-card:hover .quick-view { transform: translateY(0); }
        .score {
          position: absolute; top: 8px; right: 8px;
          display: inline-flex; align-items: center; gap: 3px;
          background: rgba(0,0,0,0.75); color: #fcd34d;
          font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 6px;
          backdrop-filter: blur(4px);
        }
        .info { min-width: 0; }
        .title {
          font-size: 13px; font-weight: 600; margin: 0; line-height: 1.3;
          display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .meta { display: flex; flex-wrap: wrap; gap: 8px; font-size: 11px; color: var(--text-muted); margin-top: 4px; }
        .meta span { display: inline-flex; align-items: center; gap: 3px; }
      `})]})}function Jh({w:t="100%",h:e=16,r:n=8,style:r={}}){return c.jsx("div",{className:"skeleton",style:{width:t,height:e,borderRadius:n,...r},"aria-hidden":"true"})}function zT(){return c.jsxs("div",{className:"skeleton-card",children:[c.jsx(Jh,{h:260,r:12}),c.jsx(Jh,{h:14,w:"80%",style:{marginTop:10}}),c.jsx(Jh,{h:12,w:"50%",style:{marginTop:6}}),c.jsx("style",{children:`
        .skeleton-card { display: flex; flex-direction: column; }
        .skeleton {
          background: linear-gradient(90deg, #14141d 0%, #1e1e2a 50%, #14141d 100%);
          background-size: 200% 100%;
          animation: shimmer 1.4s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `})]})}function cO({count:t=12}){return c.jsx("div",{className:"anime-grid",children:Array.from({length:t}).map((e,n)=>c.jsx(zT,{},n))})}function eh({anime:t=[],loading:e=!1,error:n=null,empty:r="No anime found."}){return e?c.jsx(cO,{count:12}):n?c.jsxs("div",{className:"empty-state",children:["Failed to load: ",n.message||"Unknown error"]}):t.length?c.jsxs("div",{className:"anime-grid",children:[t.map(i=>c.jsx(fd,{anime:i},i.id)),c.jsx("style",{children:`
        .anime-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 16px;
        }
        @media (max-width: 720px) {
          .anime-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
        }
        @media (min-width: 1200px) {
          .anime-grid { grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); }
        }
        .empty-state {
          padding: 60px 20px; text-align: center; color: var(--text-muted);
          border: 1px dashed var(--border); border-radius: 12px;
        }
      `})]}):c.jsx("div",{className:"empty-state",children:r})}function Lt(){if(!tr||!Me)throw new Error("Firebase is not configured. Add your credentials to a .env file (see README).")}async function Ug(t,e,n="PLANNED"){var i,s,o,a,u;Lt();const r=Dt(Me,"users",t,"watchlist",String(e.id));await au(r,{animeId:e.id,title:((i=e.title)==null?void 0:i.userPreferred)||((s=e.title)==null?void 0:s.romaji)||((o=e.title)==null?void 0:o.english),coverImage:((a=e.coverImage)==null?void 0:a.large)||((u=e.coverImage)==null?void 0:u.extraLarge),format:e.format,episodes:e.episodes||null,score:e.averageScore||null,seasonYear:e.seasonYear||null,status:n,addedAt:Mi()},{merge:!0})}async function Fg(t,e){Lt(),await Zd(Dt(Me,"users",t,"watchlist",String(e)))}async function zg(t){return Lt(),(await jg(Zo(Me,"users",t,"watchlist"))).docs.map(n=>({id:n.id,...n.data()}))}async function BT(t,e){Lt();const n=await Jd(Dt(Me,"users",t,"watchlist",String(e)));return n.exists()?n.data():null}async function $T(t,e){var n,r,i,s;Lt(),await au(Dt(Me,"users",t,"favorites",String(e.id)),{animeId:e.id,title:((n=e.title)==null?void 0:n.userPreferred)||((r=e.title)==null?void 0:r.romaji),coverImage:((i=e.coverImage)==null?void 0:i.large)||((s=e.coverImage)==null?void 0:s.extraLarge),addedAt:Mi()})}async function WT(t,e){Lt(),await Zd(Dt(Me,"users",t,"favorites",String(e)))}async function HT(t){return Lt(),(await jg(Zo(Me,"users",t,"favorites"))).docs.map(n=>({id:n.id,...n.data()}))}async function qT(t,e){Lt();const n=`${e.animeId}_${e.episode}`;await au(Dt(Me,"users",t,"history",n),{...e,updatedAt:Mi()},{merge:!0})}async function GT(t){Lt();const e=bg(Zo(Me,"users",t,"history"),Ng("updatedAt","desc"),kT(50));return(await jg(e)).docs.map(r=>({id:r.id,...r.data()}))}async function KT(t,e){Lt(),await Zd(Dt(Me,"users",t,"history",e))}const QT=t=>Zo(Me,"animeComments",String(t),"comments");async function YT({animeId:t,episode:e,user:n,text:r,parentId:i=null}){Lt();const s=Mi();await PT(QT(t),{authorId:n.uid,authorName:n.displayName||"Anonymous",authorAvatar:n.photoURL||null,text:r,episode:e??null,parentId:i,likeCount:0,createdAt:s,updatedAt:s})}async function XT(t,e,n){Lt(),await fL(Dt(Me,"animeComments",String(t),"comments",e),{text:n,updatedAt:Mi()})}async function JT(t,e){Lt(),await Zd(Dt(Me,"animeComments",String(t),"comments",e))}async function ZT({animeId:t,commentId:e,user:n,text:r}){Lt();const i=Mi();await PT(Zo(Me,"animeComments",String(t),"comments",e,"replies"),{authorId:n.uid,authorName:n.displayName||"Anonymous",authorAvatar:n.photoURL||null,text:r,likeCount:0,createdAt:i,updatedAt:i})}function eI(t,e){if(!tr)return e([]),()=>{};const n=bg(QT(t),Ng("createdAt","desc"),kT(200));return NT(n,r=>{e(r.docs.map(i=>({id:i.id,...i.data()})))},r=>{console.error("comments subscription error",r),e([])})}function tI(t,e,n){if(!tr)return n([]),()=>{};const r=bg(Zo(Me,"animeComments",String(t),"comments",e,"replies"),Ng("createdAt","asc"));return NT(r,i=>{n(i.docs.map(s=>({id:s.id,...s.data()})))})}async function Bg({animeId:t,commentId:e,uid:n}){Lt();const r=Dt(Me,"animeComments",String(t),"comments",e,"likes",n),i=Dt(Me,"animeComments",String(t),"comments",e),s=await Jd(r),o=mL(Me);s.exists()?(o.delete(r),o.update(i,{likeCount:K_(-1)})):(o.set(r,{uid:n,createdAt:Mi()}),o.update(i,{likeCount:K_(1)})),await o.commit()}async function nI({animeId:t,commentId:e,uid:n}){return Lt(),(await Jd(Dt(Me,"animeComments",String(t),"comments",e,"likes",n))).exists()}const n0=Object.freeze(Object.defineProperty({__proto__:null,addFavorite:$T,addToWatchlist:Ug,deleteComment:JT,deleteHistoryEntry:KT,editComment:XT,getFavorites:HT,getHistory:GT,getWatchlist:zg,hasLiked:nI,isInWatchlist:BT,postComment:YT,postReply:ZT,removeFavorite:WT,removeFromWatchlist:Fg,saveHistory:qT,subscribeComments:eI,subscribeReplies:tI,toggleLike:Bg},Symbol.toStringTag,{value:"Module"})),rI="hoshii:history";function Qu(){try{const t=localStorage.getItem(rI);return t?JSON.parse(t):[]}catch{return[]}}function r0(t){localStorage.setItem(rI,JSON.stringify(t))}function $g(){const{user:t}=rr(),[e,n]=R.useState(()=>Qu()),[r,i]=R.useState(!1);R.useEffect(()=>{let a=!0;return t?(i(!0),GT(t.uid).then(u=>{a&&n(u)}).catch(()=>{}).finally(()=>{a&&i(!1)})):n(Qu()),()=>{a=!1}},[t]);const s=R.useCallback(async a=>{const u={...a,updatedAt:Date.now()};if(t)try{await qT(t.uid,u)}catch(d){console.warn("history save failed",d)}else{const f=Qu().filter(m=>!(m.animeId===a.animeId&&m.episode===a.episode));f.unshift(u),r0(f.slice(0,60))}n(d=>{const f=d.filter(m=>!(m.animeId===a.animeId&&m.episode===a.episode));return[u,...f].slice(0,60)})},[t]),o=R.useCallback(async(a,u)=>{if(t){const d=`${a}_${u}`;try{await KT(t.uid,d)}catch{}}else{const d=Qu().filter(f=>!(f.animeId===a&&f.episode===u));r0(d)}n(d=>d.filter(f=>!(f.animeId===a&&f.episode===u)))},[t]);return{history:e,loading:r,addEntry:s,removeEntry:o}}function dO(){const[t,e]=R.useState([]),[n,r]=R.useState("POPULAR"),[i,s]=R.useState({media:[]}),[o,a]=R.useState(!0),[u,d]=R.useState(null),[f,m]=R.useState({}),[g,I]=R.useState(!0),{history:C}=$g();return R.useEffect(()=>{let k=!0;return(async()=>{try{const P=await hd(1,30);if(!k)return;e((P.media||[]).slice(0,5))}catch(P){console.warn(P)}})(),()=>{k=!1}},[]),R.useEffect(()=>{let k=!0;return a(!0),d(null),{POPULAR:MT,TRENDING:hd,TOP:VT,NEWEST:UT}[n](1,24).then(E=>{k&&(s(E),a(!1))}).catch(E=>{k&&(d(E),a(!1))}),()=>{k=!1}},[n]),R.useEffect(()=>{let k=!0;return I(!0),(async()=>{const P={},E=[["airing",QL],["upcoming",YL],["movies",XL]];for(const[_,S]of E){try{const O=await S(1,12);P[_]=O.media||[]}catch{P[_]=[]}if(!k)return}k&&(m(P),I(!1))})(),()=>{k=!1}},[]),c.jsxs("div",{className:"page home",children:[c.jsx(lO,{items:t}),c.jsxs("div",{className:"container",children:[c.jsx(uO,{}),C.length>0&&c.jsxs("section",{className:"section",children:[c.jsxs("div",{className:"section-head",children:[c.jsx("h2",{children:"Continue Watching"}),c.jsxs(Ne,{to:"/history",className:"btn ghost sm",children:["View all ",c.jsx(qo,{size:14})]})]}),c.jsx("div",{className:"history-row",children:C.slice(0,6).map(k=>c.jsxs(Ne,{to:`/watch/${k.animeId}/${k.episode}`,className:"history-card",children:[c.jsxs("div",{className:"thumb",style:{backgroundImage:`url(${k.image})`},children:[c.jsxs("span",{className:"ep-badge",children:["EP ",k.episode]}),c.jsx("div",{className:"progress",children:c.jsx("div",{className:"progress-fill",style:{width:`${Math.min(100,(k.position||0)/(k.duration||1)*100)}%`}})})]}),c.jsx("p",{className:"history-title",children:k.title})]},k.id||`${k.animeId}-${k.episode}`))})]}),c.jsxs("section",{className:"section",children:[c.jsxs("div",{className:"section-head",children:[c.jsx("h2",{children:"Browse Anime"}),c.jsx("div",{className:"tabs",children:[{key:"NEWEST",label:"Newest"},{key:"POPULAR",label:"Popular"},{key:"TOP",label:"Top Rated"},{key:"TRENDING",label:"Trending"}].map(k=>c.jsx("button",{className:k.key===n?"active":"",onClick:()=>r(k.key),children:k.label},k.key))})]}),c.jsx(eh,{anime:i.media||[],loading:o,error:u})]}),c.jsxs("div",{className:"two-col",children:[c.jsxs("div",{className:"main-col",children:[c.jsx(Zh,{title:"Currently Airing",items:f.airing,loading:g}),c.jsx(Zh,{title:"Upcoming",items:f.upcoming,loading:g}),c.jsx(Zh,{title:"Top Movies",items:f.movies,loading:g})]}),c.jsxs("aside",{className:"right-col",children:[c.jsx(i0,{title:"Top Airing",children:(f.airing||[]).slice(0,6).map(k=>c.jsx(s0,{anime:k},k.id))}),c.jsx(i0,{title:"Trending Now",children:t.slice(0,6).map(k=>c.jsx(s0,{anime:k},k.id))})]})]})]}),c.jsx("style",{children:`
        .home { padding-top: 0; }
        .section { margin-top: 36px; }
        .history-row {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 14px;
        }
        .history-card { display: flex; flex-direction: column; gap: 8px; }
        .thumb {
          position: relative; aspect-ratio: 16/9; border-radius: 10px;
          background-size: cover; background-position: center;
          background-color: var(--panel); border: 1px solid var(--border-soft);
          overflow: hidden; transition: var(--transition);
        }
        .history-card:hover .thumb { border-color: var(--accent); }
        .ep-badge {
          position: absolute; top: 8px; left: 8px;
          background: rgba(0,0,0,0.75); color: #fff;
          font-size: 10px; font-weight: 700; padding: 3px 7px;
          border-radius: 5px; backdrop-filter: blur(4px);
        }
        .progress {
          position: absolute; left: 0; right: 0; bottom: 0; height: 3px;
          background: rgba(0,0,0,0.55);
        }
        .progress-fill { height: 100%; background: var(--accent); }
        .history-title {
          margin: 0; font-size: 13px; font-weight: 600;
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .two-col {
          display: grid; grid-template-columns: minmax(0, 1fr) 320px;
          gap: 28px; margin-top: 36px;
        }
        @media (max-width: 1000px) { .two-col { grid-template-columns: 1fr; } }
        .main-col { min-width: 0; }
        .right-col { display: flex; flex-direction: column; gap: 16px; }
        .btn.sm { padding: 6px 10px; font-size: 12px; }
      `})]})}function Zh({title:t,items:e,loading:n}){return c.jsxs("section",{className:"section",children:[c.jsx("div",{className:"section-head",children:c.jsx("h2",{children:t})}),n?c.jsx("div",{className:"anime-grid",children:Array.from({length:6}).map((r,i)=>c.jsx(zT,{},i))}):c.jsx("div",{className:"anime-grid",children:e==null?void 0:e.map(r=>c.jsx(fd,{anime:r},r.id))})]})}function i0({title:t,children:e}){return c.jsxs("div",{className:"sidebar-panel glass",children:[c.jsx("h3",{children:t}),c.jsx("div",{className:"mini-list",children:e}),c.jsx("style",{children:`
        .sidebar-panel { border-radius: var(--radius); padding: 14px; }
        .sidebar-panel h3 {
          margin: 0 0 12px; font-size: 14px; letter-spacing: 0.05em;
          text-transform: uppercase; color: var(--text-dim);
        }
        .mini-list { display: flex; flex-direction: column; gap: 8px; }
      `})]})}function s0({anime:t}){var n,r,i,s;const e=((n=t.title)==null?void 0:n.english)||((r=t.title)==null?void 0:r.userPreferred)||((i=t.title)==null?void 0:i.romaji);return c.jsxs(Ne,{to:`/anime/${t.id}`,className:"mini-row",children:[c.jsx("img",{src:(s=t.coverImage)==null?void 0:s.large,alt:"",loading:"lazy"}),c.jsxs("div",{className:"mini-info",children:[c.jsx("span",{className:"mini-title",children:e}),c.jsxs("span",{className:"mini-meta",children:[t.format," · ",t.seasonYear||"—",t.averageScore?` · ★ ${t.averageScore}`:""]})]}),c.jsx("style",{children:`
        .mini-row {
          display: flex; gap: 10px; padding: 6px; border-radius: 8px;
          transition: var(--transition);
        }
        .mini-row:hover { background: var(--panel-2); }
        .mini-row img {
          width: 44px; height: 62px; object-fit: cover;
          border-radius: 6px; flex-shrink: 0;
        }
        .mini-info {
          min-width: 0; display: flex; flex-direction: column; gap: 3px;
          justify-content: center;
        }
        .mini-title {
          font-size: 12.5px; font-weight: 600; line-height: 1.25;
          display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .mini-meta { font-size: 10.5px; color: var(--text-muted); }
      `})]})}function hO({filters:t,onChange:e,onApply:n,onReset:r}){const[i,s]=R.useState(!1),o=(d,f)=>e({...t,[d]:f}),a=t.year||"",u=Array.from({length:60},(d,f)=>new Date().getFullYear()+5-f);return c.jsxs("div",{className:"filter-panel",children:[c.jsxs("div",{className:"filters-row",children:[c.jsx(Yr,{label:"Genre",value:t.genre||"",onChange:d=>o("genre",d),options:[{value:"",label:"Any Genre"},...FT.map(d=>({value:d,label:d}))]}),c.jsx(Yr,{label:"Year",value:a,onChange:d=>o("year",d?Number(d):""),options:[{value:"",label:"Any Year"},...u.map(d=>({value:d,label:String(d)}))]}),c.jsx(Yr,{label:"Status",value:t.status||"",onChange:d=>o("status",d),options:[{value:"",label:"Any Status"},{value:"RELEASING",label:"Airing"},{value:"FINISHED",label:"Finished"},{value:"NOT_YET_RELEASED",label:"Upcoming"},{value:"CANCELLED",label:"Cancelled"},{value:"HIATUS",label:"Hiatus"}]}),c.jsx(Yr,{label:"Format",value:t.format||"",onChange:d=>o("format",d),options:[{value:"",label:"Any Format"},...eO.map(d=>({value:d,label:d.replace("_"," ")}))]}),c.jsx(Yr,{label:"Sort",value:t.sort||"POPULARITY_DESC",onChange:d=>o("sort",d),options:nO})]}),i&&c.jsxs("div",{className:"filters-row",children:[c.jsx(Yr,{label:"Season",value:t.season||"",onChange:d=>o("season",d),options:[{value:"",label:"Any Season"},...tO.map(d=>({value:d,label:d}))]}),c.jsx(Yr,{label:"Min Score",value:t.minimumScore||"",onChange:d=>o("minimumScore",d?Number(d):""),options:[{value:"",label:"Any Score"},...[90,80,70,60,50].map(d=>({value:d,label:`${d}+`}))]}),c.jsx(Yr,{label:"Country",value:t.country||"",onChange:d=>o("country",d),options:[{value:"",label:"Any Country"},{value:"JP",label:"Japan"},{value:"KR",label:"South Korea"},{value:"CN",label:"China"},{value:"TW",label:"Taiwan"}]}),c.jsxs("label",{className:"checkbox-label",children:[c.jsx("input",{type:"checkbox",checked:!!t.isAdult,onChange:d=>o("isAdult",d.target.checked)}),"Include adult"]})]}),c.jsxs("div",{className:"filters-actions",children:[c.jsx("button",{className:"btn primary",onClick:n,children:"Apply Filters"}),c.jsxs("button",{className:"btn ghost",onClick:r,children:[c.jsx($l,{size:14})," Reset"]}),c.jsxs("button",{className:"btn ghost",onClick:()=>s(d=>!d),children:[c.jsx(Dd,{size:14,style:{transform:i?"rotate(180deg)":"none",transition:"transform 0.2s"}}),i?"Collapse":"Expand"," Filters"]})]}),c.jsx("style",{children:`
        .filter-panel {
          background: var(--panel); border: 1px solid var(--border);
          border-radius: var(--radius); padding: 16px; display: flex; flex-direction: column; gap: 12px;
        }
        .filters-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; }
        .filters-actions { display: flex; gap: 8px; flex-wrap: wrap; }
        .checkbox-label {
          display: flex; align-items: center; gap: 8px;
          font-size: 13px; color: var(--text-dim);
          padding: 10px 12px; background: var(--panel-2); border: 1px solid var(--border);
          border-radius: 10px;
        }
      `})]})}function Yr({label:t,value:e,onChange:n,options:r}){return c.jsxs("label",{className:"select-wrap",children:[c.jsx("span",{className:"select-label",children:t}),c.jsx("select",{value:e,onChange:i=>n(i.target.value),children:r.map(i=>c.jsx("option",{value:i.value,children:i.label},i.value))}),c.jsx(Dd,{size:14,className:"select-arrow"}),c.jsx("style",{children:`
        .select-wrap {
          position: relative; display: flex; flex-direction: column; gap: 4px;
          background: var(--panel-2); border: 1px solid var(--border);
          border-radius: 10px; padding: 6px 34px 6px 12px; cursor: pointer;
        }
        .select-label {
          font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em;
          color: var(--text-muted); font-weight: 600;
        }
        .select-wrap select {
          background: transparent; border: none; color: var(--text);
          font-size: 13px; font-weight: 500; outline: none; appearance: none;
          padding: 2px 0; cursor: pointer;
        }
        .select-arrow {
          position: absolute; right: 12px; bottom: 12px; color: var(--text-muted); pointer-events: none;
        }
      `})]})}function fO(){var _,S,O;const[t,e]=nE(),[n,r]=R.useState(()=>o0(t)),[i,s]=R.useState(null),[o,a]=R.useState(!1),[u,d]=R.useState(null),[f,m]=R.useState(Number(t.get("page")||1)),g=R.useRef(null);R.useEffect(()=>{r(o0(t)),m(Number(t.get("page")||1))},[t.toString()]),R.useEffect(()=>{g.current&&g.current.abort();const j=new AbortController;return g.current=j,a(!0),d(null),En({query:n.query,genre:n.genre,tag:n.tag,year:n.year,season:n.season,status:n.status,format:n.format,sort:n.sort?[n.sort]:["POPULARITY_DESC"],minimumScore:n.minimumScore,country:n.country,isAdult:!!n.isAdult,page:f,perPage:30,signal:j.signal}).then(D=>{j.signal.aborted||s(D)}).catch(D=>{D.name!=="AbortError"&&d(D)}).finally(()=>{j.signal.aborted||a(!1)}),()=>j.abort()},[n,f]);const I=()=>{const j=new URLSearchParams;n.query&&j.set("query",n.query),n.genre&&j.set("genre",n.genre),n.tag&&j.set("tag",n.tag),n.year&&j.set("year",String(n.year)),n.season&&j.set("season",n.season),n.status&&j.set("status",n.status),n.format&&j.set("format",n.format),n.sort&&j.set("sort",n.sort),n.minimumScore&&j.set("minimumScore",String(n.minimumScore)),n.country&&j.set("country",n.country),n.isAdult&&j.set("isAdult","1"),f>1&&j.set("page",String(f)),e(j)},C=()=>{r({sort:"POPULARITY_DESC"}),m(1),e(new URLSearchParams)},k=((_=i==null?void 0:i.pageInfo)==null?void 0:_.total)||0,P=((S=i==null?void 0:i.pageInfo)==null?void 0:S.lastPage)||1,E=((O=i==null?void 0:i.pageInfo)==null?void 0:O.currentPage)||f;return c.jsxs("div",{className:"page",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"search-head",children:[c.jsxs("div",{children:[c.jsx("h1",{children:"Search Anime"}),i&&c.jsxs("p",{className:"muted",children:[k.toLocaleString()," results"]})]}),c.jsx("input",{className:"search-input",value:n.query||"",onChange:j=>r(D=>({...D,query:j.target.value})),onKeyDown:j=>j.key==="Enter"&&I(),placeholder:"Search by title…"})]}),c.jsx(hO,{filters:n,onChange:r,onApply:()=>{m(1),I()},onReset:C}),c.jsx("div",{className:"results-wrap",children:c.jsx(eh,{anime:(i==null?void 0:i.media)||[],loading:o,error:u,empty:"No anime matched your filters."})}),i&&P>1&&c.jsxs("div",{className:"pagination",children:[c.jsxs("button",{className:"btn ghost",disabled:E<=1,onClick:()=>{m(j=>Math.max(1,j-1)),window.scrollTo({top:0})},children:[c.jsx(Bl,{size:14})," Prev"]}),c.jsxs("span",{className:"muted",children:["Page ",E," / ",P]}),c.jsxs("button",{className:"btn ghost",disabled:E>=P,onClick:()=>{m(j=>j+1),window.scrollTo({top:0})},children:["Next ",c.jsx(qo,{size:14})]})]})]}),c.jsx("style",{children:`
        .search-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 16px; flex-wrap: wrap; margin-bottom: 16px; }
        .search-head h1 { margin: 0 0 4px; font-size: 28px; }
        .search-head p { margin: 0; font-size: 13px; }
        .search-input {
          background: var(--panel); border: 1px solid var(--border);
          border-radius: 10px; padding: 12px 16px; color: var(--text);
          font-size: 14px; outline: none; width: 100%; max-width: 380px;
          transition: var(--transition);
        }
        .search-input:focus { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-soft); }
        .results-wrap { margin-top: 20px; }
        .pagination { display: flex; align-items: center; justify-content: center; gap: 14px; margin-top: 32px; }
      `})]})}function o0(t){return{query:t.get("query")||"",genre:t.get("genre")||"",tag:t.get("tag")||"",year:t.get("year")?Number(t.get("year")):"",season:t.get("season")||"",status:t.get("status")||"",format:t.get("format")||"",sort:t.get("sort")||"POPULARITY_DESC",minimumScore:t.get("minimumScore")?Number(t.get("minimumScore")):"",country:t.get("country")||"",isAdult:t.get("isAdult")==="1"}}/*! @license DOMPurify 3.4.16 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.16/LICENSE */function a0(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function pO(t){if(Array.isArray(t))return t}function mO(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,i,s,o,a=[],u=!0,d=!1;try{if(s=(n=n.call(t)).next,e!==0)for(;!(u=(r=s.call(n)).done)&&(a.push(r.value),a.length!==e);u=!0);}catch(f){d=!0,i=f}finally{try{if(!u&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(d)throw i}}return a}}function gO(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */function yO(t,e){return pO(t)||mO(t,e)||vO(t,e)||gO()}function vO(t,e){if(t){if(typeof t=="string")return a0(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a0(t,e):void 0}}const iI=Object.entries,l0=Object.setPrototypeOf,_O=Object.isFrozen,wO=Object.getPrototypeOf,xO=Object.getOwnPropertyDescriptor;let ot=Object.freeze,dt=Object.seal,Js=Object.create,sI=typeof Reflect<"u"&&Reflect,Cp=sI.apply,Pp=sI.construct;ot||(ot=function(e){return e});dt||(dt=function(e){return e});Cp||(Cp=function(e,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),s=2;s<r;s++)i[s-2]=arguments[s];return e.apply(n,i)});Pp||(Pp=function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return new e(...r)});const ns=rt(Array.prototype.forEach),EO=rt(Array.prototype.lastIndexOf),u0=rt(Array.prototype.pop),Ca=rt(Array.prototype.push),TO=rt(Array.prototype.splice),Io=Array.isArray,Wa=rt(String.prototype.toLowerCase),ef=rt(String.prototype.toString),c0=rt(String.prototype.match),Pa=rt(String.prototype.replace),d0=rt(String.prototype.indexOf),IO=rt(String.prototype.trim),SO=rt(Number.prototype.toString),AO=rt(Boolean.prototype.toString),h0=typeof BigInt>"u"?null:rt(BigInt.prototype.toString),f0=typeof Symbol>"u"?null:rt(Symbol.prototype.toString),Wt=rt(Object.prototype.hasOwnProperty),Na=rt(Object.prototype.toString),At=rt(RegExp.prototype.test),Xr=kO(TypeError);function rt(t){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return Cp(t,e,r)}}function kO(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return Pp(t,n)}}function ge(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Wa;if(l0&&l0(t,null),!Io(e))return t;let r=e.length;for(;r--;){let i=e[r];if(typeof i=="string"){const s=n(i);s!==i&&(_O(e)||(e[r]=s),i=s)}t[i]=!0}return t}function bO(t){for(let e=0;e<t.length;e++)Wt(t,e)||(t[e]=null);return t}function tn(t){const e=Js(null);for(const r of iI(t)){var n=yO(r,2);const i=n[0],s=n[1];Wt(t,i)&&(Io(s)?e[i]=bO(s):s&&typeof s=="object"&&s.constructor===Object?e[i]=tn(s):e[i]=s)}return e}function RO(t){switch(typeof t){case"string":return t;case"number":return SO(t);case"boolean":return AO(t);case"bigint":return h0?h0(t):"0";case"symbol":return f0?f0(t):"Symbol()";case"undefined":return Na(t);case"function":case"object":{if(t===null)return Na(t);const e=t,n=pn(e,"toString");if(typeof n=="function"){const r=n(e);return typeof r=="string"?r:Na(r)}return Na(t)}default:return Na(t)}}function pn(t,e){for(;t!==null;){const r=xO(t,e);if(r){if(r.get)return rt(r.get);if(typeof r.value=="function")return rt(r.value)}t=wO(t)}function n(){return null}return n}function CO(t){try{return At(t,""),!0}catch{return!1}}const p0=ot(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),tf=ot(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),nf=ot(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),PO=ot(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),rf=ot(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),NO=ot(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),m0=ot(["#text"]),g0=ot(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),sf=ot(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","pointer-events","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","vector-effect","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),y0=ot(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Yu=ot(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),DO=dt(/{{[\w\W]*|^[\w\W]*}}/g),LO=dt(/<%[\w\W]*|^[\w\W]*%>/g),OO=dt(/\${[\w\W]*/g),jO=dt(/^data-[\-\w.\u00B7-\uFFFF]+$/),MO=dt(/^aria-[\-\w]+$/),v0=dt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),VO=dt(/^(?:\w+script|data):/i),UO=dt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),FO=dt(/^html$/i),zO=dt(/^[a-z][.\w]*(-[.\w]+)+$/i),_0=dt(/<[/\w!]/g),w0=dt(/<[/\w]/g),BO=dt(/<\/no(script|embed|frames)/i),$O=dt(/\/>/i),Zt={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},oI=["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"],WO=ot(ge({},oI)),HO=function(){const t={};return ns(oI,e=>{t[e]=dt(new RegExp("</"+e+"(?=[\\t\\n\\f\\r />])","i"))}),ot(t)}(),qO=function(){return typeof window>"u"?null:window},GO=function(e,n){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let r=null;const i="data-tt-policy-suffix";n&&n.hasAttribute(i)&&(r=n.getAttribute(i));const s="dompurify"+(r?"#"+r:"");try{return e.createPolicy(s,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return console.warn("TrustedTypes policy "+s+" could not be created."),null}},x0=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},Jr=function(e,n,r,i){return Wt(e,n)&&Io(e[n])?ge(i.base?tn(i.base):{},e[n],i.transform):r},of=function(e,n,r){const i=Wt(e,n)?e[n]:void 0;return i&&typeof i=="object"?tn(i):r()};function aI(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:qO();const e=$=>aI($);if(e.version="3.4.16",e.removed=[],!t||!t.document||t.document.nodeType!==Zt.document||!t.Element)return e.isSupported=!1,e;let n=t.document;const r=n,i=r.currentScript;t.DocumentFragment;const s=t.HTMLTemplateElement,o=t.Node,a=t.Element,u=t.NodeFilter;t.NamedNodeMap===void 0&&(t.NamedNodeMap||t.MozNamedAttrMap),t.HTMLFormElement;const d=t.DOMParser,f=t.trustedTypes,m=a.prototype,g=pn(m,"cloneNode"),I=pn(m,"remove"),C=pn(m,"removeAttributeNode"),k=pn(m,"nextSibling"),P=pn(m,"childNodes"),E=pn(m,"parentNode"),_=pn(m,"shadowRoot"),S=pn(m,"attributes"),O=o&&o.prototype?pn(o.prototype,"nodeType"):null,j=o&&o.prototype?pn(o.prototype,"nodeName"):null,D=o&&o.prototype?pn(o.prototype,"ownerDocument"):null,x=function(w){return O?O(w):w.nodeType},y=function(w){return j?j(w):w.nodeName};if(typeof s=="function"){const $=n.createElement("template");$.content&&$.content.ownerDocument&&(n=$.content.ownerDocument)}let T,A="",N,M=!1,b=0;const Ke=function(){if(b>0)throw Xr('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},Xe=function(w){Ke(),b++;try{return T.createHTML(w)}finally{b--}},Xt=function(w){Ke(),b++;try{return T.createScriptURL(w)}finally{b--}},ht=function(){return M||(N=GO(f,i),M=!0),N},q=n,ee=q.implementation,ne=q.createNodeIterator,we=q.createDocumentFragment,X=q.getElementsByTagName,pe=r.importNode;let J=x0();e.isSupported=typeof iI=="function"&&typeof E=="function"&&ee&&ee.createHTMLDocument!==void 0;const Je=DO,Tn=LO,In=OO,th=jO,nh=MO,bs=VO,Vi=UO,ta=zO;let Rs=v0,Ie=null;const Ui=ge({},[...p0,...tf,...nf,...rf,...m0]);let Ae=null;const na=ge({},[...g0,...sf,...y0,...Yu]);let cn=Object.seal(Js(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Fr=null,Cs=null;const Sn=Object.seal(Js(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let cu=!0,Fi=!0,Ps=!1,ra=!0,Ce=!1,Ve=!0,dn=!1,Ns=!1,zi=null,Ds=null,ir=!1,sr=!1,Bi=!1,zr=!1,du=!0,hu=!1;const Ls="user-content-";let Os=!0,js=!1,hn={},jn=null;const Ms=ge({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]);let Mn=null;const ia=ge({},["audio","video","img","source","image","track"]);let $i=null;const sa=ge({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Vn="http://www.w3.org/1998/Math/MathML",Wi="http://www.w3.org/2000/svg",be="http://www.w3.org/1999/xhtml";let or=be,ar=!1,lr=null;const rh=ge({},[Vn,Wi,be],ef),fu=ot(["mi","mo","mn","ms","mtext"]);let Un=ge({},fu);const pu=ot(["annotation-xml"]);let oa=ge({},pu);const Vs=ge({},["title","style","font","a","script"]);let Br=null;const aa=["application/xhtml+xml","text/html"],Us="text/html";let xe=null,ur=null;const mu=n.createElement("form"),Fs=function(w){return w instanceof RegExp||w instanceof Function},Hi=function(){let w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(ur&&ur===w)return;(!w||typeof w!="object")&&(w={}),w=tn(w),Br=aa.indexOf(w.PARSER_MEDIA_TYPE)===-1?Us:w.PARSER_MEDIA_TYPE,xe=Br==="application/xhtml+xml"?ef:Wa,Ie=Jr(w,"ALLOWED_TAGS",Ui,{transform:xe}),Ae=Jr(w,"ALLOWED_ATTR",na,{transform:xe}),lr=Jr(w,"ALLOWED_NAMESPACES",rh,{transform:ef}),$i=Jr(w,"ADD_URI_SAFE_ATTR",sa,{transform:xe,base:sa}),Mn=Jr(w,"ADD_DATA_URI_TAGS",ia,{transform:xe,base:ia}),jn=Jr(w,"FORBID_CONTENTS",Ms,{transform:xe}),Fr=Jr(w,"FORBID_TAGS",tn({}),{transform:xe}),Cs=Jr(w,"FORBID_ATTR",tn({}),{transform:xe}),hn=Wt(w,"USE_PROFILES")?w.USE_PROFILES&&typeof w.USE_PROFILES=="object"?tn(w.USE_PROFILES):w.USE_PROFILES:!1,cu=w.ALLOW_ARIA_ATTR!==!1,Fi=w.ALLOW_DATA_ATTR!==!1,Ps=w.ALLOW_UNKNOWN_PROTOCOLS||!1,ra=w.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Ce=w.SAFE_FOR_TEMPLATES||!1,Ve=w.SAFE_FOR_XML!==!1,dn=w.WHOLE_DOCUMENT||!1,sr=w.RETURN_DOM||!1,Bi=w.RETURN_DOM_FRAGMENT||!1,zr=w.RETURN_TRUSTED_TYPE||!1,ir=w.FORCE_BODY||!1,du=w.SANITIZE_DOM!==!1,hu=w.SANITIZE_NAMED_PROPS||!1,Os=w.KEEP_CONTENT!==!1,js=w.IN_PLACE||!1,Rs=CO(w.ALLOWED_URI_REGEXP)?w.ALLOWED_URI_REGEXP:v0,or=typeof w.NAMESPACE=="string"?w.NAMESPACE:be,Un=of(w,"MATHML_TEXT_INTEGRATION_POINTS",()=>ge({},fu)),oa=of(w,"HTML_INTEGRATION_POINTS",()=>ge({},pu));const L=of(w,"CUSTOM_ELEMENT_HANDLING",()=>Js(null));if(cn=Js(null),Wt(L,"tagNameCheck")&&Fs(L.tagNameCheck)&&(cn.tagNameCheck=L.tagNameCheck),Wt(L,"attributeNameCheck")&&Fs(L.attributeNameCheck)&&(cn.attributeNameCheck=L.attributeNameCheck),Wt(L,"allowCustomizedBuiltInElements")&&typeof L.allowCustomizedBuiltInElements=="boolean"&&(cn.allowCustomizedBuiltInElements=L.allowCustomizedBuiltInElements),dt(cn),Ce&&(Fi=!1),Bi&&(sr=!0),hn&&(Ie=ge({},m0),Ae=Js(null),hn.html===!0&&(ge(Ie,p0),ge(Ae,g0)),hn.svg===!0&&(ge(Ie,tf),ge(Ae,sf),ge(Ae,Yu)),hn.svgFilters===!0&&(ge(Ie,nf),ge(Ae,sf),ge(Ae,Yu)),hn.mathMl===!0&&(ge(Ie,rf),ge(Ae,y0),ge(Ae,Yu))),Sn.tagCheck=null,Sn.attributeCheck=null,Wt(w,"ADD_TAGS")&&(typeof w.ADD_TAGS=="function"?Sn.tagCheck=w.ADD_TAGS:Io(w.ADD_TAGS)&&(Ie===Ui&&(Ie=tn(Ie)),ge(Ie,w.ADD_TAGS,xe))),Wt(w,"ADD_ATTR")&&(typeof w.ADD_ATTR=="function"?Sn.attributeCheck=w.ADD_ATTR:Io(w.ADD_ATTR)&&(Ae===na&&(Ae=tn(Ae)),ge(Ae,w.ADD_ATTR,xe))),Wt(w,"ADD_FORBID_CONTENTS")&&Io(w.ADD_FORBID_CONTENTS)&&(jn===Ms&&(jn=tn(jn)),ge(jn,w.ADD_FORBID_CONTENTS,xe)),Os&&(Ie["#text"]=!0),dn&&ge(Ie,["html","head","body"]),Ie.table&&(ge(Ie,["tbody"]),delete Fr.tbody),w.TRUSTED_TYPES_POLICY){if(typeof w.TRUSTED_TYPES_POLICY.createHTML!="function")throw Xr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof w.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Xr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const z=T;T=w.TRUSTED_TYPES_POLICY;try{A=Xe("")}catch(H){throw T=z,H}}else w.TRUSTED_TYPES_POLICY===null?(T=void 0,A=""):(T===void 0&&(T=ht()),T&&typeof A=="string"&&(A=Xe("")));ot&&ot(w),ur=w},la=ge({},[...tf,...nf,...PO]),ua=ge({},[...rf,...NO]),ih=function(w,L,z){return L.namespaceURI===be?w==="svg":L.namespaceURI===Vn?w==="svg"&&(z==="annotation-xml"||Un[z]):!!la[w]},zs=function(w,L,z){return L.namespaceURI===be?w==="math":L.namespaceURI===Wi?w==="math"&&oa[z]:!!ua[w]},gu=function(w,L,z){return L.namespaceURI===Wi&&!oa[z]||L.namespaceURI===Vn&&!Un[z]?!1:!ua[w]&&(Vs[w]||!la[w])},ca=function(w){let L=E(w);(!L||!L.tagName)&&(L={namespaceURI:or,tagName:"template"});const z=Wa(w.tagName),H=Wa(L.tagName);return lr[w.namespaceURI]?w.namespaceURI===Wi?ih(z,L,H):w.namespaceURI===Vn?zs(z,L,H):w.namespaceURI===be?gu(z,L,H):!!(Br==="application/xhtml+xml"&&lr[w.namespaceURI]):!1},zt=function(w){Ca(e.removed,{element:w});try{E(w).removeChild(w)}catch{if(I(w),!E(w))throw Xr("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},Fn=function(w,L,z){try{C(w,L)}catch{try{w.removeAttribute(z)}catch{}}},$r=function(w){qi(w);const L=P(w);if(L){const H=[];ns(L,Z=>{Ca(H,Z)}),ns(H,Z=>{try{I(Z)}catch{}})}const z=S(w);if(z)for(let H=z.length-1;H>=0;--H){const Z=z[H],oe=Z&&Z.name;typeof oe=="string"&&Fn(w,Z,oe)}},cr=function(w,L,z){if(!z)try{z=L.getAttributeNode(w)}catch{z=null}Ca(e.removed,{attribute:z||null,from:L});try{z?C(L,z):L.removeAttribute(w)}catch{try{L.removeAttribute(w)}catch{}}if(w==="is")if(sr||Bi)try{zt(L)}catch{}else try{L.setAttribute(w,"")}catch{}},yu=function(w){const L=S(w);if(L)for(let z=L.length-1;z>=0;--z){const H=L[z],Z=H&&H.name;typeof Z!="string"||Ae[xe(Z)]||Fn(w,H,Z)}},qi=function(w){const L=[w];for(;L.length>0;){const z=L.pop();x(z)===Zt.element&&yu(z);const H=P(z);if(H)for(let Z=H.length-1;Z>=0;--Z)L.push(H[Z])}},da=function(w,L){return Ve?w==="patchsrc"?!0:w==="for"&&L!=="label"&&L!=="output":!1},ha=function(w){if(!Ve)return;const L=[w];for(;L.length>0;){const z=L.pop(),H=x(z);if(H===Zt.processingInstruction||H===Zt.comment&&At(w0,z.data)){try{I(z)}catch{}continue}if(H===Zt.element){const oe=z,de=xe(y(z));try{oe.hasAttribute&&oe.hasAttribute("patchsrc")&&oe.removeAttribute("patchsrc"),oe.hasAttribute&&oe.hasAttribute("for")&&da("for",de)&&oe.removeAttribute("for")}catch{}}const Z=P(z);if(Z)for(let oe=Z.length-1;oe>=0;--oe)L.push(Z[oe])}},Bs=function(w){let L=null,z=null;if(ir)w="<remove></remove>"+w;else{const oe=c0(w,/^[\r\n\t ]+/);z=oe&&oe[0]}Br==="application/xhtml+xml"&&or===be&&(w='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+w+"</body></html>");const H=T?Xe(w):w;if(or===be)try{L=new d().parseFromString(H,Br)}catch{}if(!L||!L.documentElement){L=ee.createDocument(or,"template",null);try{L.documentElement.innerHTML=ar?A:H}catch{}}const Z=L.body||L.documentElement;return w&&z&&Z.insertBefore(n.createTextNode(z),Z.childNodes[0]||null),or===be?X.call(L,dn?"html":"body")[0]:dn?L.documentElement:Z},fa=function(w){const L=D?D(w):w.ownerDocument;return ne.call(L||w,w,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT|u.SHOW_PROCESSING_INSTRUCTION|u.SHOW_CDATA_SECTION,null)},Gi=function(w){return w=Pa(w,Je," "),w=Pa(w,Tn," "),w=Pa(w,In," "),w},pa=function(w){var L;w.normalize();const z=D?D(w):w.ownerDocument,H=ne.call(z||w,w,u.SHOW_TEXT|u.SHOW_COMMENT|u.SHOW_CDATA_SECTION|u.SHOW_PROCESSING_INSTRUCTION,null);let Z=H.nextNode();for(;Z;)Z.data=Gi(Z.data),Z=H.nextNode();const oe=(L=w.querySelectorAll)===null||L===void 0?void 0:L.call(w,"template");oe&&ns(oe,de=>{dr(de.content)&&pa(de.content)})},$s=function(w){const L=j?j(w):null;return typeof L!="string"||xe(L)!=="form"?!1:typeof w.nodeName!="string"||typeof w.textContent!="string"||typeof w.removeChild!="function"||w.attributes!==S(w)||typeof w.removeAttribute!="function"||typeof w.removeAttributeNode!="function"||typeof w.getAttributeNode!="function"||typeof w.setAttribute!="function"||typeof w.namespaceURI!="string"||typeof w.insertBefore!="function"||typeof w.hasChildNodes!="function"||w.nodeType!==O(w)||w.childNodes!==P(w)},dr=function(w){if(!O||typeof w!="object"||w===null)return!1;try{return O(w)===Zt.documentFragment}catch{return!1}},Wr=function(w){if(!O||typeof w!="object"||w===null)return!1;try{return typeof O(w)=="number"}catch{return!1}};function fn($,w,L){$.length!==0&&ns($,z=>{z.call(e,w,L,ur)})}const hr=function(w,L){return!!(Ve&&w.hasChildNodes()&&!Wr(w.firstElementChild)&&At(_0,w.textContent)&&At(_0,w.innerHTML)||Ve&&w.namespaceURI===be&&WO[L]&&(Wr(w.firstElementChild)||typeof w.textContent=="string"&&At(HO[L],w.textContent))||w.nodeType===Zt.processingInstruction||Ve&&w.nodeType===Zt.comment&&At(w0,w.data))},Bt=function(w,L){if(w instanceof RegExp)return At(w,L);if(w instanceof Function){for(var z=arguments.length,H=new Array(z>2?z-2:0),Z=2;Z<z;Z++)H[Z-2]=arguments[Z];return!!w(L,...H)}return!1},Ws=function(w,L,z){if(!Fr[L]&&Hr(L)&&Bt(cn.tagNameCheck,L))return!1;if(Os&&!jn[L]){const H=E(w),Z=P(w);if(Z&&H){const oe=Z.length;for(let de=oe-1;de>=0;--de){const Oe=w===z?g(Z[de],!0):Z[de];H.insertBefore(Oe,k(w))}}}return zt(w),!0},Ki=function(w,L,z,H){return w.length===0?L:L===z||L===H?tn(L):L},fr=function(w,L){return w===L||E(w)!==null?!1:(js&&qi(w),!0)},Se=function(w,L){if(fn(J.beforeSanitizeElements,w,null),fr(w,L))return!0;if($s(w))return zt(w),!0;const z=xe(y(w));if(Ie=Ki(J.uponSanitizeElement,Ie,Ui,zi),fn(J.uponSanitizeElement,w,{tagName:z,allowedTags:Ie}),fr(w,L))return!0;if(hr(w,z))return zt(w),!0;if(Fr[z]||!(Sn.tagCheck instanceof Function&&Sn.tagCheck(z))&&!Ie[z]){const H=Ws(w,z,L);return H===!1&&(fn(J.afterSanitizeElements,w,null),fr(w,L))?!0:H}if(x(w)===Zt.element&&!ca(w)||(z==="noscript"||z==="noembed"||z==="noframes")&&At(BO,w.innerHTML))return zt(w),!0;if(Ce&&w.nodeType===Zt.text){const H=Gi(w.textContent);w.textContent!==H&&(Ca(e.removed,{element:w.cloneNode()}),w.textContent=H)}return fn(J.afterSanitizeElements,w,null),fr(w,L)},Qi=function(w,L,z){if(Cs[L]||da(L,w)||du&&(L==="id"||L==="name")&&(z in n||z in mu))return!1;const H=Ae[L]||Sn.attributeCheck instanceof Function&&Sn.attributeCheck(L,w);return Fi&&At(th,L)||cu&&At(nh,L)?!0:H?$i[L]||At(Rs,Pa(z,Vi,""))||(L==="src"||L==="xlink:href"||L==="href")&&w!=="script"&&d0(z,"data:")===0&&Mn[w]||Ps&&!At(bs,Pa(z,Vi,""))?!0:!z:Hr(w)&&Bt(cn.tagNameCheck,w)&&Bt(cn.attributeNameCheck,L,w)||L==="is"&&cn.allowCustomizedBuiltInElements&&Bt(cn.tagNameCheck,z)},Yi=ge({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),Hr=function(w){return!Yi[Wa(w)]&&At(ta,w)},sh=function(w,L,z,H){if(T&&typeof f=="object"&&typeof f.getAttributeType=="function"&&!z)switch(f.getAttributeType(w,L)){case"TrustedHTML":return Xe(H);case"TrustedScriptURL":return Xt(H)}return H},vu=function(w,L,z,H){try{return z?w.setAttributeNS(z,L,H):w.setAttribute(L,H),$s(w)?(zt(w),!1):!0}catch{return cr(L,w),!1}},_u=function(w,L){if(fn(J.beforeSanitizeAttributes,w,null),fr(w,L))return;const z=w.attributes;if(!z||$s(w))return;Ae=Ki(J.uponSanitizeAttribute,Ae,na,Ds);const H={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Ae,forceKeepAttr:void 0};let Z=z.length;const oe=xe(w.nodeName);for(;Z--;){const de=z[Z],Oe=de.name,$t=de.namespaceURI,We=de.value,qr=xe(Oe),ga=We;let Ze=Oe==="value"?ga:IO(ga),Xi=!1;if(H.attrName=qr,H.attrValue=Ze,H.keepAttr=!0,H.forceKeepAttr=void 0,fn(J.uponSanitizeAttribute,w,H),Ze=H.attrValue,hu&&(qr==="id"||qr==="name")&&d0(Ze,Ls)!==0&&(cr(Oe,w,de),Ze=Ls+Ze,Xi=!0),Ve&&At(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,Ze)){cr(Oe,w,de);continue}if(qr==="attributename"&&c0(Ze,"href")){cr(Oe,w,de);continue}if(!H.forceKeepAttr){if(!H.keepAttr){cr(Oe,w,de);continue}if(!ra&&At($O,Ze)){cr(Oe,w,de);continue}if(Ce&&(Ze=Gi(Ze)),!Qi(oe,qr,Ze)){cr(Oe,w,de);continue}Ze=sh(oe,qr,$t,Ze),Ze!==ga&&vu(w,Oe,$t,Ze)&&Xi&&u0(e.removed)}}fn(J.afterSanitizeAttributes,w,null),fr(w,L)},Hs=function(w){let L=null;const z=fa(w);for(fn(J.beforeSanitizeShadowDOM,w,null);L=z.nextNode();)if(fn(J.uponSanitizeShadowNode,L,null),Se(L,w),_u(L,w),dr(L.content)&&Hs(L.content),x(L)===Zt.element){const H=_(L);dr(H)&&(ma(H),Hs(H))}fn(J.afterSanitizeShadowDOM,w,null)},ma=function(w){const L=[{node:w,shadow:null}];for(;L.length>0;){const z=L.pop();if(z.shadow){Hs(z.shadow);continue}const H=z.node,Z=x(H)===Zt.element,oe=P(H);if(oe)for(let de=oe.length-1;de>=0;--de)L.push({node:oe[de],shadow:null});if(Z){const de=j?j(H):null;if(typeof de=="string"&&xe(de)==="template"){const Oe=H.content;dr(Oe)&&L.push({node:Oe,shadow:null})}}if(Z){const de=_(H);dr(de)&&L.push({node:null,shadow:de},{node:de,shadow:null})}}};return e.sanitize=function($){let w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},L=null,z=null,H=null,Z=null;if(ar=!$,ar&&($="<!-->"),typeof $!="string"&&!Wr($)&&($=RO($),typeof $!="string"))throw Xr("dirty is not a string, aborting");if(!e.isSupported)return $;Ns?(Ie=zi,Ae=Ds):Hi(w),(J.uponSanitizeElement.length>0||J.uponSanitizeAttribute.length>0)&&(Ie=tn(Ie)),J.uponSanitizeAttribute.length>0&&(Ae=tn(Ae)),e.removed=[];const oe=js&&typeof $!="string"&&Wr($);if(oe){ha($);const $t=y($);if(typeof $t=="string"){const We=xe($t);if(!Ie[We]||Fr[We])throw $r($),Xr("root node is forbidden and cannot be sanitized in-place")}if($s($))throw $r($),Xr("root node is clobbered and cannot be sanitized in-place");try{ma($)}catch(We){throw $r($),We}}else if(Wr($))L=Bs("<!---->"),z=L.ownerDocument.importNode($,!0),z.nodeType===Zt.element&&z.nodeName==="BODY"||z.nodeName==="HTML"?L=z:L.appendChild(z),ma(L);else{if(!sr&&!Ce&&!dn&&$.indexOf("<")===-1)return T&&zr?Xe($):$;if(L=Bs($),!L)return sr?null:zr?A:""}L&&ir&&zt(L.firstChild);const de=oe?$:L;try{const $t=fa(de);for(;H=$t.nextNode();)Se(H,de),_u(H,de),dr(H.content)&&Hs(H.content)}catch($t){throw oe&&($r($),ns(e.removed,We=>{We.element&&qi(We.element)})),$t}if(oe){let $t=!1;if(ns(e.removed,We=>{We.element&&(We.element===$&&($t=!0),qi(We.element))}),$t)throw Xr("a node selected for removal could not be safely returned; refusing to sanitize in place");return Ce&&pa($),$}if(sr){if(Ce&&pa(L),Bi)for(Z=we.call(L.ownerDocument);L.firstChild;)Z.appendChild(L.firstChild);else Z=L;return(Ae.shadowroot||Ae.shadowrootmode)&&(Z=pe.call(r,Z,!0)),Z}let Oe=dn?L.outerHTML:L.innerHTML;return dn&&Ie["!doctype"]&&L.ownerDocument&&L.ownerDocument.doctype&&L.ownerDocument.doctype.name&&At(FO,L.ownerDocument.doctype.name)&&(Oe="<!DOCTYPE "+L.ownerDocument.doctype.name+`>
`+Oe),Ce&&(Oe=Gi(Oe)),T&&zr?Xe(Oe):Oe},e.setConfig=function(){let $=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Hi($),Ns=!0,zi=Ie,Ds=Ae},e.clearConfig=function(){ur=null,Ns=!1,zi=null,Ds=null,T=N,A=""},e.isValidAttribute=function($,w,L){ur||Hi({});const z=xe($),H=xe(w);return Qi(z,H,L)},e.addHook=function($,w){typeof w=="function"&&Wt(J,$)&&Ca(J[$],w)},e.removeHook=function($,w){if(Wt(J,$)){if(w!==void 0){const L=EO(J[$],w);return L===-1?void 0:TO(J[$],L,1)[0]}return u0(J[$])}},e.removeHooks=function($){Wt(J,$)&&(J[$]=[])},e.removeAllHooks=function(){J=x0()},e}var lI=aI();function KO(){var A,N,M,b,Ke,Xe,Xt,ht,q,ee,ne,we,X,pe;const{id:t}=Xx(),e=jr(),{user:n}=rr(),[r,i]=R.useState(null),[s,o]=R.useState(!0),[a,u]=R.useState(null),[d,f]=R.useState(!1),[m,g]=R.useState(!1),[I,C]=R.useState(!1),[k,P]=R.useState(!1),[E,_]=R.useState(!1);if(R.useEffect(()=>{let J=!0;return o(!0),u(null),Vg(t,{onImporting:Je=>J&&_(Je)}).then(Je=>{J&&(i(Je),o(!1))}).catch(Je=>{J&&(u(Je),o(!1))}),()=>{J=!1}},[t]),R.useEffect(()=>{!n||!r||BT(n.uid,r.id).then(f).catch(()=>{})},[n,r]),s)return c.jsxs("div",{className:"container page",children:[c.jsx(xn,{className:"spin",size:32}),E&&c.jsx("p",{className:"muted",children:"Adding this anime to YumeList… this can take a few seconds."})]});if(a)return c.jsx("div",{className:"container page",children:c.jsxs("div",{className:"empty-state",children:["Failed to load anime: ",a.message]})});if(!r)return null;const S=((A=r.title)==null?void 0:A.english)||((N=r.title)==null?void 0:N.userPreferred)||((M=r.title)==null?void 0:M.romaji),O=r.bannerImage||((b=r.coverImage)==null?void 0:b.extraLarge),j=lI.sanitize(r.description||"<p>No description available.</p>"),D=(((Ke=r.recommendations)==null?void 0:Ke.nodes)||[]).map(J=>J.mediaRecommendation).filter(Boolean),x=(((Xe=r.relations)==null?void 0:Xe.edges)||[]).map(J=>J.node).filter(Boolean),y=async()=>{if(!n)return C(!0);P(!0);try{d?(await Fg(n.uid,r.id),f(!1)):(await Ug(n.uid,r,"PLANNED"),f(!0))}catch(J){console.warn(J)}P(!1)},T=async()=>{if(!n)return C(!0);P(!0);try{m?(await WT(n.uid,r.id),g(!1)):(await $T(n.uid,r),g(!0))}catch(J){console.warn(J)}P(!1)};return(Xt=r.externalLinks)==null||Xt.find(J=>J.site==="MyAnimeList"),c.jsxs("div",{className:"page details",children:[c.jsxs("div",{className:"details-hero",style:{backgroundImage:`url(${O})`},children:[c.jsx("div",{className:"details-overlay"}),c.jsxs("div",{className:"container details-hero-inner",children:[c.jsx("div",{className:"details-cover",children:c.jsx("img",{src:(ht=r.coverImage)==null?void 0:ht.extraLarge,alt:S})}),c.jsxs("div",{className:"details-info",children:[c.jsx("h1",{children:S}),((q=r.title)==null?void 0:q.native)&&c.jsx("p",{className:"native",children:r.title.native}),c.jsxs("div",{className:"details-meta",children:[r.format&&c.jsx("span",{className:"pill",children:r.format}),r.seasonYear&&c.jsxs("span",{className:"pill",children:[r.season," ",r.seasonYear]}),r.averageScore&&c.jsxs("span",{className:"pill gold",children:[c.jsx(Nm,{size:12})," ",r.averageScore]}),r.episodes&&c.jsxs("span",{className:"pill",children:[r.episodes," Episodes"]}),r.status&&c.jsx("span",{className:"pill",children:r.status.replace("_"," ")})]}),c.jsx("div",{className:"genre-list",children:(r.genres||[]).map(J=>c.jsx("span",{className:"chip",children:J},J))}),c.jsx("div",{className:"description",dangerouslySetInnerHTML:{__html:j}}),c.jsxs("div",{className:"details-actions",children:[c.jsxs("button",{className:"btn primary",onClick:()=>e(`/watch/${r.id}`),children:[c.jsx(Pm,{size:16})," Watch Now"]}),c.jsxs("button",{className:"btn",onClick:y,disabled:k,children:[c.jsx(dE,{size:16})," ",d?"In Watchlist":"Add to Watchlist"]}),c.jsxs("button",{className:"btn",onClick:T,disabled:k,children:[c.jsx(ob,{size:16,fill:m?"currentColor":"none"})," ",m?"Favorited":"Favorite"]}),((ee=r.trailer)==null?void 0:ee.id)&&r.trailer.site==="youtube"&&c.jsxs("a",{className:"btn",href:`https://www.youtube.com/watch?v=${r.trailer.id}`,target:"_blank",rel:"noreferrer",children:[c.jsx(aE,{size:16})," Trailer"]})]})]})]})]}),c.jsx("div",{className:"container details-body",children:c.jsxs("div",{className:"details-main",children:[c.jsxs("div",{className:"info-grid",children:[c.jsx(Bn,{label:"Format",value:r.format}),c.jsx(Bn,{label:"Status",value:(ne=r.status)==null?void 0:ne.replace("_"," ")}),c.jsx(Bn,{label:"Episodes",value:r.episodes}),c.jsx(Bn,{label:"Duration",value:r.duration?`${r.duration} min`:null}),c.jsx(Bn,{label:"Start Date",value:E0(r.startDate)}),c.jsx(Bn,{label:"End Date",value:E0(r.endDate)}),c.jsx(Bn,{label:"Studios",value:(((we=r.studios)==null?void 0:we.nodes)||[]).map(J=>J.name).join(", ")}),c.jsx(Bn,{label:"Country",value:r.countryOfOrigin}),c.jsx(Bn,{label:"Popularity",value:(X=r.popularity)==null?void 0:X.toLocaleString()}),c.jsx(Bn,{label:"Favorites",value:(pe=r.favourites)==null?void 0:pe.toLocaleString()})]}),(D.length>0||x.length>0)&&c.jsxs("section",{style:{marginTop:32},children:[c.jsx("div",{className:"section-head",children:c.jsx("h2",{children:"Recommendations"})}),c.jsx(eh,{anime:[...D,...x].slice(0,12)})]})]})}),c.jsx(uu,{open:I,onClose:()=>C(!1)}),c.jsx("style",{children:`
        .details-hero {
          position: relative; aspect-ratio: 21/9; min-height: 420px;
          background-size: cover; background-position: center;
        }
        .details-overlay {
          position: absolute; inset: 0;
          background:
            linear-gradient(to bottom, rgba(8,8,12,0.55), rgba(8,8,12,0.98)),
            linear-gradient(to right, rgba(8,8,12,0.85), transparent);
        }
        .details-hero-inner {
          position: relative; height: 100%; display: flex; gap: 32px;
          align-items: flex-end; padding-bottom: 32px; flex-wrap: wrap;
        }
        .details-cover {
          width: 200px; flex-shrink: 0; border-radius: 14px; overflow: hidden;
          border: 1px solid var(--border); box-shadow: var(--shadow);
        }
        .details-cover img { width: 100%; aspect-ratio: 2/3; object-fit: cover; }
        .details-info { flex: 1; min-width: 260px; display: flex; flex-direction: column; gap: 10px; }
        .details-info h1 {
          margin: 0; font-size: clamp(24px, 3vw, 40px);
          font-weight: 800; letter-spacing: -0.02em;
        }
        .native { margin: 0; font-size: 13px; color: var(--text-dim); }
        .details-meta { display: flex; flex-wrap: wrap; gap: 8px; }
        .pill {
          display: inline-flex; align-items: center; gap: 5px;
          background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15);
          padding: 5px 10px; border-radius: 999px; font-size: 12px; font-weight: 600;
        }
        .pill.gold { color: #fcd34d; }
        .genre-list { display: flex; flex-wrap: wrap; gap: 6px; }
        .description { font-size: 14px; line-height: 1.65; color: var(--text-dim); max-width: 780px; }
        .description p { margin: 0 0 8px; }
        .details-actions { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 8px; }
        .details-body { margin-top: 40px; }
        .details-main { max-width: 1000px; }
        .info-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 14px; background: var(--panel); border: 1px solid var(--border);
          border-radius: var(--radius); padding: 20px;
        }
        .info-cell { display: flex; flex-direction: column; gap: 4px; }
        .info-cell .lbl {
          font-size: 11px; color: var(--text-muted); text-transform: uppercase;
          letter-spacing: 0.05em; font-weight: 600;
        }
        .info-cell .val { font-size: 14px; font-weight: 600; }
        @media (max-width: 720px) {
          .details-hero { aspect-ratio: auto; padding: 40px 0 24px; }
          .details-hero-inner { padding: 0 20px; }
          .details-cover { width: 130px; }
        }
        .spin { animation: spin 0.9s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `})]})}function Bn({label:t,value:e}){return c.jsxs("div",{className:"info-cell",children:[c.jsx("span",{className:"lbl",children:t}),c.jsx("span",{className:"val",children:e||"—"})]})}function E0(t){return!t||!t.year?null:`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][(t.month||1)-1]} ${t.day||1}, ${t.year}`}function QO({url:t,title:e,onProgress:n,onComplete:r,onError:i}){const s=R.useRef(null),[o,a]=R.useState(!0),[u,d]=R.useState(null),f=R.useRef(Date.now()),m=R.useRef(0);return R.useEffect(()=>{a(!0),d(null),f.current=Date.now(),m.current=0},[t]),R.useEffect(()=>{const g=I=>{const C=/^https:\/\/([a-z0-9-]+\.)*megaplay\.buzz$/.test(I.origin),k=/^https:\/\/([a-z0-9-]+\.)*filmu\.in$/.test(I.origin);if(!C&&!k)return;let P=I.data;if(typeof P=="string")try{P=JSON.parse(P)}catch{return}!P||typeof P!="object"||(P.event==="time"&&typeof P.time=="number"&&(n&&n(P.time,P.duration||0),m.current=Date.now()),P.event==="complete"&&r&&r(),P.event==="error"&&(d("The player reported a playback error."),i&&i(P)),P.type==="watching-log"&&typeof P.currentTime=="number"&&(n&&n(P.currentTime,P.duration||0),m.current=Date.now()))};return window.addEventListener("message",g),()=>window.removeEventListener("message",g)},[n,r,i]),R.useEffect(()=>{const g=setInterval(()=>{if(!n)return;if(Date.now()-m.current>15e3){const C=Math.floor((Date.now()-f.current)/1e3);n(C,0)}},2e4);return()=>clearInterval(g)},[n]),t?c.jsxs("div",{className:"embed-player",children:[o&&c.jsxs("div",{className:"player-overlay",children:[c.jsx(xn,{size:40,className:"spin"}),c.jsx("p",{children:"Loading stream…"})]}),u&&c.jsxs("div",{className:"player-overlay error",children:[c.jsx(Cv,{size:36}),c.jsx("p",{children:u}),c.jsxs("button",{className:"btn sm",onClick:()=>window.location.reload(),children:[c.jsx(mb,{size:14})," Reload"]})]}),c.jsx("iframe",{ref:s,src:t,title:e||"Anime stream",onLoad:()=>a(!1),frameBorder:"0",scrolling:"no",allowFullScreen:!0,allow:"autoplay; encrypted-media; picture-in-picture; fullscreen; clipboard-write"}),c.jsx("style",{children:`
        .embed-player {
          position: relative; width: 100%; aspect-ratio: 16/9;
          background: #000; border-radius: 14px; overflow: hidden;
          border: 1px solid var(--border);
        }
        .embed-player iframe {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
        }
        .player-overlay {
          position: absolute; inset: 0; z-index: 2;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 12px;
          background: rgba(0,0,0,0.85); color: var(--accent);
          backdrop-filter: blur(6px);
        }
        .player-overlay p { margin: 0; color: var(--text-dim); font-size: 13px; }
        .player-overlay.error { color: var(--danger); }
        .btn.sm { padding: 6px 12px; font-size: 12px; }
        .spin { animation: spin 0.9s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `})]}):c.jsxs("div",{className:"player-empty",children:[c.jsx(Cv,{size:36}),c.jsx("h3",{children:"No stream available for this episode"}),c.jsx("p",{className:"muted",children:"Try switching servers above, or pick a different episode."}),c.jsx("style",{children:`
          .player-empty {
            aspect-ratio: 16/9; display: flex; flex-direction: column;
            align-items: center; justify-content: center; gap: 10px;
            background: linear-gradient(135deg, #0e0e16, #16161f);
            border: 1px solid var(--border); border-radius: 14px;
            padding: 40px; text-align: center;
          }
          .player-empty svg { color: var(--accent); }
          .player-empty h3 { margin: 0; font-size: 18px; }
          .player-empty p { margin: 0; max-width: 420px; font-size: 13px; line-height: 1.6; }
        `})]})}const YO="https://anikotoapi.site",Np=new Map,T0=1e3*60*60;function Dp(t){return`anikoto:${t}`}function XO(t){const e=Dp(t),n=Np.get(e);if(n&&Date.now()-n.t<T0)return n.v;try{const r=sessionStorage.getItem(e);if(!r)return null;const i=JSON.parse(r);return Date.now()-i.t>T0?(sessionStorage.removeItem(e),null):(Np.set(e,i),i.v)}catch{return null}}function JO(t,e){const n={t:Date.now(),v:e};Np.set(Dp(t),n);try{sessionStorage.setItem(Dp(t),JSON.stringify(n))}catch{}}async function ZO(t,{signal:e}={}){const n=XO(t);if(n)return n;const r=await fetch(`${YO}${t}`,{signal:e,headers:{Accept:"application/json"}});if(r.status===429)throw new Error("Anikoto rate limit reached. Try again shortly.");if(r.status===403)throw new Error("Anikoto blocked this request.");if(!r.ok)throw new Error(`Anikoto request failed (${r.status})`);const i=await r.json();return JO(t,i),i}async function ej(t,e){if(!t)throw new Error("Series id is required");return ZO(`/series/${encodeURIComponent(t)}`,e)}function I0(t,e){var s,o,a;const n=(t==null?void 0:t.episodes)||((s=t==null?void 0:t.data)==null?void 0:s.episodes)||((o=t==null?void 0:t.series)==null?void 0:o.episodes)||((a=t==null?void 0:t.result)==null?void 0:a.episodes)||[];if(!Array.isArray(n)||n.length===0)return null;const r=Number(e),i=n.find(u=>Number(u.episode)===r||Number(u.number)===r||Number(u.ep)===r);return i||(r>=1&&r<=n.length?n[r-1]:null)}function tj(t){if(!t)return null;const e=t.episode_embed_id||t.embed_id||t.embedId||t.id||t.episodeId;return e?String(e).replace(/^ep_/,""):null}const Si=[{id:"megaplay",label:"MegaPlay",languages:["sub","dub"],buildUrl({anilistId:t,episode:e,language:n,anikotoEpisode:r}){const i=tj(r);return i?`https://megaplay.buzz/stream/s-2/${i}/${n}`:t&&e?`https://megaplay.buzz/stream/ani/${t}/${e}/${n}`:null}},{id:"filmu",label:"FilmU",languages:["sub","dub"],buildUrl({anilistId:t,episode:e,language:n}){return!t||!e?null:`https://embed.filmu.in/anime/${t}/1/${e}`}}],nj=Object.fromEntries(Si.map(t=>[t.id,t]));function rj(t){return nj[t]||Si[0]}function ij({providerId:t,language:e,onProviderChange:n,onLanguageChange:r,status:i}){const[s,o]=R.useState(!1),a=R.useRef(null);R.useEffect(()=>{const d=f=>{a.current&&!a.current.contains(f.target)&&o(!1)};return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[]);const u=Si.find(d=>d.id===t)||Si[0];return c.jsxs("div",{className:"server-selector",ref:a,children:[c.jsxs("button",{className:"server-btn",onClick:()=>o(d=>!d),"aria-haspopup":"listbox","aria-expanded":s,children:[c.jsx(vb,{size:14}),c.jsx("span",{className:"label",children:u.label}),c.jsx("span",{className:"status-dot","data-status":i||"idle"}),c.jsx(Dd,{size:14,className:s?"rot":""})]}),c.jsx("div",{className:"language-toggle",role:"group","aria-label":"Language",children:u.languages.map(d=>c.jsxs("button",{className:d===e?"active":"",onClick:()=>r(d),children:[c.jsx(ub,{size:12}),d.toUpperCase()]},d))}),s&&c.jsxs("div",{className:"server-menu glass",role:"listbox",children:[c.jsx("div",{className:"menu-head",children:"Servers"}),Si.map(d=>c.jsxs("button",{className:`server-item ${d.id===u.id?"active":""}`,role:"option","aria-selected":d.id===u.id,onClick:()=>{n(d.id),o(!1)},children:[c.jsxs("div",{className:"item-info",children:[c.jsx("span",{className:"item-label",children:d.label}),c.jsx("span",{className:"item-langs",children:d.languages.map(f=>f.toUpperCase()).join(" · ")})]}),d.id===u.id&&c.jsx(eb,{size:14})]},d.id)),c.jsx("div",{className:"menu-foot",children:"Both servers are third-party embeds. Hoshii does not host video."})]}),c.jsx("style",{children:`
        .server-selector {
          position: relative; display: flex; align-items: center; gap: 8px;
        }
        .server-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--panel); border: 1px solid var(--border);
          color: var(--text); font-size: 13px; font-weight: 600;
          padding: 8px 12px; border-radius: 10px; transition: var(--transition);
        }
        .server-btn:hover { border-color: var(--accent); }
        .server-btn .label { min-width: 60px; text-align: left; }
        .server-btn svg.rot { transform: rotate(180deg); }
        .status-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--text-muted); flex-shrink: 0;
        }
        .status-dot[data-status='ready'] { background: #4ade80; }
        .status-dot[data-status='loading'] { background: #fcd34d; }
        .status-dot[data-status='error'] { background: var(--danger); }
        .language-toggle {
          display: inline-flex; background: var(--panel); border: 1px solid var(--border);
          border-radius: 10px; padding: 3px; gap: 2px;
        }
        .language-toggle button {
          display: inline-flex; align-items: center; gap: 4px;
          background: transparent; border: none; color: var(--text-dim);
          font-weight: 700; font-size: 11px; padding: 6px 10px; border-radius: 7px;
          transition: var(--transition);
        }
        .language-toggle button.active { background: var(--accent-soft); color: var(--accent); }
        .language-toggle button:hover:not(.active) { color: var(--text); }
        .server-menu {
          position: absolute; top: calc(100% + 8px); left: 0;
          min-width: 260px; border-radius: 12px; padding: 6px; z-index: 50;
          animation: fadeIn 0.15s ease;
        }
        .menu-head {
          font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em;
          color: var(--text-muted); padding: 8px 10px 4px; font-weight: 700;
        }
        .server-item {
          display: flex; align-items: center; justify-content: space-between;
          width: 100%; padding: 10px 12px; border-radius: 8px;
          background: transparent; border: none; color: var(--text);
          text-align: left; transition: var(--transition);
        }
        .server-item:hover { background: var(--accent-soft); }
        .server-item.active { background: var(--accent-soft); color: var(--accent); }
        .item-info { display: flex; flex-direction: column; gap: 2px; }
        .item-label { font-size: 13px; font-weight: 600; }
        .item-langs { font-size: 10px; color: var(--text-muted); letter-spacing: 0.06em; }
        .menu-foot {
          font-size: 10.5px; color: var(--text-muted); padding: 8px 12px 6px;
          border-top: 1px solid var(--border-soft); margin-top: 4px; line-height: 1.5;
        }
      `})]})}const sj="modulepreload",oj=function(t){return"/"+t},S0={},A0=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=oj(u),u in S0)return;S0[u]=!0;const d=u.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":sj,d||(m.as="script"),m.crossOrigin="",m.href=u,a&&m.setAttribute("nonce",a),document.head.appendChild(m),d)return new Promise((g,I)=>{m.addEventListener("load",g),m.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};function uI({comment:t,animeId:e,user:n,onLike:r,onEdit:i,onDelete:s,depth:o=0}){const[a,u]=R.useState(o===0),[d,f]=R.useState([]),[m,g]=R.useState(""),[I,C]=R.useState(!1),[k,P]=R.useState(!1),[E,_]=R.useState(t.text),[S,O]=R.useState(!1);R.useEffect(()=>{if(!a)return;const y=tI(e,t.id,f);return()=>y()},[a,e,t.id]),R.useEffect(()=>{if(!n){O(!1);return}nI({animeId:e,commentId:t.id,uid:n.uid}).then(O).catch(()=>{})},[n,e,t.id]);const j=async()=>{if(n&&m.trim()){C(!0);try{await ZT({animeId:e,commentId:t.id,user:n,text:m.trim()}),g("")}catch(y){console.warn(y)}finally{C(!1)}}},D=async()=>{E.trim()&&(await i(E.trim()),P(!1))},x=n&&t.authorId===n.uid;return c.jsxs("div",{className:`comment ${o>0?"nested":""}`,children:[c.jsxs("div",{className:"comment-head",children:[c.jsx("div",{className:"avatar-sm",children:t.authorAvatar?c.jsx("img",{src:t.authorAvatar,alt:""}):(t.authorName||"U")[0].toUpperCase()}),c.jsxs("div",{className:"name-row",children:[c.jsx("span",{className:"name",children:t.authorName||"Anonymous"}),c.jsx("span",{className:"dot",children:"•"}),c.jsx("span",{className:"time",children:aj(t.createdAt)})]})]}),c.jsx("div",{className:"comment-body",children:k?c.jsxs("div",{className:"edit-wrap",children:[c.jsx("textarea",{value:E,onChange:y=>_(y.target.value),rows:3}),c.jsxs("div",{className:"edit-actions",children:[c.jsx("button",{className:"btn ghost",onClick:()=>P(!1),children:"Cancel"}),c.jsx("button",{className:"btn primary",onClick:D,children:"Save"})]})]}):c.jsx("p",{className:"text",children:t.text})}),c.jsxs("div",{className:"comment-actions",children:[c.jsxs("button",{className:`action ${S?"active":""}`,onClick:async()=>{if(!n){r==null||r();return}await(r==null?void 0:r()),O(y=>!y)},children:[c.jsx(wb,{size:13})," ",t.likeCount||0]}),c.jsx("button",{className:"action",disabled:!0,children:c.jsx(_b,{size:13})}),o<2&&c.jsxs("button",{className:"action",onClick:()=>u(y=>!y),children:[c.jsx(gb,{size:13})," Reply"]}),x&&!k&&c.jsxs(c.Fragment,{children:[c.jsxs("button",{className:"action",onClick:()=>P(!0),children:[c.jsx(pb,{size:12})," Edit"]}),c.jsxs("button",{className:"action danger",onClick:s,children:[c.jsx(fE,{size:12})," Delete"]})]})]}),o<2&&a&&c.jsxs("div",{className:"replies-wrap",children:[d.length>0&&c.jsx("div",{className:"replies",children:d.map(y=>c.jsx(uI,{comment:y,animeId:e,user:n,depth:o+1,onLike:async()=>{if(n)try{await Bg({animeId:e,commentId:y.id,uid:n.uid})}catch(T){console.warn(T)}},onEdit:async T=>{const{editComment:A}=await A0(async()=>{const{editComment:N}=await Promise.resolve().then(()=>n0);return{editComment:N}},void 0);await A(e,y.id,T)},onDelete:async()=>{const{deleteComment:T}=await A0(async()=>{const{deleteComment:A}=await Promise.resolve().then(()=>n0);return{deleteComment:A}},void 0);confirm("Delete this reply?")&&await T(e,y.id)}},y.id))}),n&&c.jsxs("div",{className:"reply-editor",children:[c.jsx("input",{value:m,onChange:y=>g(y.target.value),placeholder:"Write a reply...",onKeyDown:y=>y.key==="Enter"&&j()}),c.jsxs("button",{className:"btn primary sm",onClick:j,disabled:I,children:[I&&c.jsx(xn,{size:12,className:"spin"})," Reply"]})]})]}),c.jsx("style",{children:`
        .comment { padding: 12px 0; }
        .comment.nested {
          padding-left: 20px; margin-left: 14px;
          border-left: 1px solid var(--border-soft);
        }
        .comment-head { display: flex; align-items: center; gap: 10px; }
        .avatar-sm {
          width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, var(--accent-strong), var(--accent)); color: #0b0b12; font-weight: 700;
          font-size: 13px; overflow: hidden; flex-shrink: 0;
        }
        .avatar-sm img { width: 100%; height: 100%; object-fit: cover; }
        .name-row { display: flex; align-items: center; gap: 6px; font-size: 13px; }
        .name { font-weight: 600; }
        .dot, .time { color: var(--text-muted); font-size: 12px; }
        .comment-body { margin: 8px 0 8px 42px; }
        .text { margin: 0; font-size: 14px; line-height: 1.55; color: var(--text); white-space: pre-wrap; word-wrap: break-word; }
        .edit-wrap { display: flex; flex-direction: column; gap: 8px; }
        .edit-wrap textarea {
          background: var(--panel-2); border: 1px solid var(--border); border-radius: 8px;
          padding: 10px; color: var(--text); font-family: inherit; font-size: 14px; resize: vertical;
        }
        .edit-actions { display: flex; gap: 8px; justify-content: flex-end; }
        .comment-actions { display: flex; gap: 4px; margin-left: 42px; }
        .action {
          background: transparent; border: none; color: var(--text-dim);
          display: inline-flex; align-items: center; gap: 5px;
          padding: 5px 8px; border-radius: 6px; font-size: 12px; font-weight: 500;
          transition: var(--transition);
        }
        .action:hover:not(:disabled) { background: var(--panel-2); color: var(--text); }
        .action.active { color: var(--accent); }
        .action.danger { color: var(--danger); }
        .action:disabled { opacity: 0.5; cursor: default; }
        .replies-wrap { margin-left: 42px; margin-top: 6px; animation: fadeIn 0.2s ease; }
        .replies { display: flex; flex-direction: column; }
        .reply-editor { display: flex; gap: 8px; margin-top: 8px; }
        .reply-editor input {
          flex: 1; background: var(--panel-2); border: 1px solid var(--border);
          border-radius: 8px; padding: 8px 12px; color: var(--text); font-family: inherit; font-size: 13px;
          outline: none;
        }
        .reply-editor input:focus { border-color: var(--accent); }
        .btn.sm { padding: 6px 12px; font-size: 12px; }
        .spin { animation: spin 0.9s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `})]})}function aj(t){if(!t)return"just now";const e=t.seconds?new Date(t.seconds*1e3):new Date(t),n=Math.floor((Date.now()-e.getTime())/1e3);return n<60?"just now":n<3600?`${Math.floor(n/60)} minutes ago`:n<86400?`${Math.floor(n/3600)} hours ago`:n<2592e3?`${Math.floor(n/86400)} days ago`:n<31536e3?`${Math.floor(n/2592e3)} months ago`:`${Math.floor(n/31536e3)} years ago`}function lj({animeId:t,episode:e,animeTitle:n}){const{user:r}=rr(),[i,s]=R.useState([]),[o,a]=R.useState(!0),[u,d]=R.useState("newest"),[f,m]=R.useState(""),[g,I]=R.useState(!1),[C,k]=R.useState(""),[P,E]=R.useState(!1);R.useEffect(()=>{if(!tr){a(!1);return}a(!0);const j=eI(t,D=>{s(D),a(!1)});return()=>j()},[t]);const _=R.useMemo(()=>{const j=[...i];return u==="newest"&&j.sort((D,x)=>{var y,T;return(((y=x.createdAt)==null?void 0:y.seconds)||0)-(((T=D.createdAt)==null?void 0:T.seconds)||0)}),u==="oldest"&&j.sort((D,x)=>{var y,T;return(((y=D.createdAt)==null?void 0:y.seconds)||0)-(((T=x.createdAt)==null?void 0:T.seconds)||0)}),u==="top"&&j.sort((D,x)=>(x.likeCount||0)-(D.likeCount||0)),j},[i,u]),S=async()=>{if(!r){E(!0);return}if(f.trim()){I(!0),k("");try{await YT({animeId:t,episode:e,user:r,text:f.trim()}),m("")}catch(j){k(j.message||"Failed to post comment.")}finally{I(!1)}}},O=i.length+i.reduce((j,D)=>j+(D.replyCount||0),0);return c.jsxs("section",{className:"comments",children:[c.jsxs("div",{className:"comments-head",children:[c.jsxs("div",{children:[c.jsx("h2",{children:"The Anime Community"}),c.jsxs("p",{className:"muted",children:["Discuss ",n,e?` — Episode ${e}`:""]})]}),c.jsxs("span",{className:"chip",children:[c.jsx(fb,{size:14})," ",O," Comments"]})]}),c.jsxs("div",{className:"comments-toolbar",children:[c.jsxs("button",{className:"ghost-link",type:"button",children:[c.jsx(nb,{size:14})," Rules"]}),c.jsx("button",{className:"ghost-link",type:"button",children:"FAQ"}),c.jsx("div",{className:"spacer"}),c.jsxs("label",{className:"sort-label",children:["Sort by:",c.jsxs("select",{value:u,onChange:j=>d(j.target.value),children:[c.jsx("option",{value:"newest",children:"Newest"}),c.jsx("option",{value:"oldest",children:"Oldest"}),c.jsx("option",{value:"top",children:"Top"})]})]})]}),!tr&&c.jsxs("div",{className:"notice",children:["Firebase isn't configured. Add your keys to ",c.jsx("code",{children:".env"})," to enable comments."]}),c.jsx("div",{className:"comment-editor glass",children:r?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"editor-user",children:[c.jsx("div",{className:"avatar-sm",children:r.photoURL?c.jsx("img",{src:r.photoURL,alt:""}):(r.displayName||"U")[0].toUpperCase()}),c.jsx("span",{children:r.displayName||"User"})]}),c.jsx("textarea",{placeholder:"Share your thoughts...",value:f,onChange:j=>m(j.target.value),rows:3,maxLength:3e3}),C&&c.jsx("div",{className:"error",children:C}),c.jsxs("div",{className:"editor-actions",children:[c.jsxs("span",{className:"muted-2",children:[f.length," / 3000"]}),c.jsxs("button",{className:"btn primary",onClick:S,disabled:g||!f.trim(),children:[g&&c.jsx(xn,{size:14,className:"spin"})," Post Comment"]})]})]}):c.jsxs("div",{className:"logged-out",children:[c.jsx("p",{children:"Log in to comment"}),c.jsxs("div",{className:"btn-row",children:[c.jsxs("button",{className:"btn",onClick:()=>E(!0),children:[c.jsx(uE,{size:14})," Log In"]}),c.jsxs("button",{className:"btn primary",onClick:()=>E(!0),children:[c.jsx(pE,{size:14})," Sign Up"]})]})]})}),o?c.jsxs("div",{className:"loading-row",children:[c.jsx(xn,{size:20,className:"spin"})," Loading comments…"]}):_.length===0?c.jsx("div",{className:"empty-state",children:"No comments yet. Be the first to share your thoughts."}):c.jsx("div",{className:"comment-list",children:_.map(j=>c.jsx(uI,{comment:j,animeId:t,user:r,onLike:async()=>{if(!r){E(!0);return}try{await Bg({animeId:t,commentId:j.id,uid:r.uid})}catch(D){console.warn(D)}},onEdit:async D=>{await XT(t,j.id,D)},onDelete:async()=>{confirm("Delete this comment?")&&await JT(t,j.id)}},j.id))}),c.jsx(uu,{open:P,onClose:()=>E(!1)}),c.jsx("style",{children:`
        .comments {
          background: var(--panel); border: 1px solid var(--border);
          border-radius: var(--radius); padding: 22px; margin-top: 24px;
        }
        .comments-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
        .comments-head h2 { margin: 0 0 4px; font-size: 20px; }
        .comments-head p { margin: 0; font-size: 13px; }
        .comments-toolbar {
          display: flex; align-items: center; gap: 14px; margin: 16px 0;
          padding-bottom: 14px; border-bottom: 1px solid var(--border-soft);
        }
        .ghost-link { background: transparent; border: none; color: var(--text-dim); font-size: 13px; display: inline-flex; align-items: center; gap: 6px; }
        .ghost-link:hover { color: var(--accent); }
        .spacer { flex: 1; }
        .sort-label { font-size: 13px; color: var(--text-dim); display: inline-flex; align-items: center; gap: 8px; }
        .sort-label select { background: var(--panel-2); color: var(--text); border: 1px solid var(--border); border-radius: 8px; padding: 6px 10px; font-size: 13px; }
        .comment-editor { border-radius: 12px; padding: 14px; display: flex; flex-direction: column; gap: 10px; }
        .editor-user { display: flex; align-items: center; gap: 10px; font-size: 13px; font-weight: 600; }
        .avatar-sm {
          width: 30px; height: 30px; border-radius: 8px; display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, var(--accent-strong), var(--accent)); color: #0b0b12; font-weight: 700; overflow: hidden;
        }
        .avatar-sm img { width: 100%; height: 100%; object-fit: cover; }
        .comment-editor textarea {
          background: transparent; border: none; outline: none; color: var(--text);
          font-family: inherit; font-size: 14px; resize: vertical; min-height: 60px;
        }
        .editor-actions { display: flex; align-items: center; justify-content: space-between; }
        .logged-out { display: flex; flex-direction: column; align-items: center; gap: 12px; padding: 12px; }
        .logged-out p { margin: 0; font-weight: 600; }
        .btn-row { display: flex; gap: 10px; }
        .comment-list { display: flex; flex-direction: column; gap: 6px; margin-top: 18px; }
        .loading-row { display: flex; align-items: center; gap: 10px; padding: 30px; justify-content: center; color: var(--text-muted); }
        .notice { padding: 10px; background: rgba(96,165,250,0.1); border: 1px solid rgba(96,165,250,0.3); border-radius: 8px; font-size: 12px; color: var(--blue); }
        .notice code { background: rgba(0,0,0,0.3); padding: 1px 5px; border-radius: 4px; }
        .error { color: var(--danger); font-size: 13px; }
        .spin { animation: spin 0.9s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `})]})}function uj({animeId:t,totalEpisodes:e,currentEpisode:n}){const[r,i]=R.useState(""),s=R.useMemo(()=>{const a=Number(e)||0;return a?Array.from({length:a},(u,d)=>d+1):[]},[e]),o=R.useMemo(()=>r.trim()?s.filter(a=>String(a).includes(r.trim())):s,[s,r]);return c.jsxs("div",{className:"episode-sidebar glass",children:[c.jsx("div",{className:"ep-header",children:c.jsxs("div",{className:"ep-range",children:[c.jsx(db,{size:13}),c.jsx("span",{children:s.length?`1 – ${s.length}`:"No episodes"})]})}),c.jsxs("div",{className:"ep-search",children:[c.jsx(Kc,{size:14}),c.jsx("input",{value:r,onChange:a=>i(a.target.value),placeholder:"Filter episodes…","aria-label":"Filter episodes"})]}),s.length===0?c.jsx("p",{className:"ep-empty muted",children:"YumeList doesn't have an episode count for this title yet."}):c.jsxs("div",{className:"ep-grid",role:"list",children:[o.map(a=>c.jsx(Ne,{to:`/watch/${t}/${a}`,role:"listitem",className:`ep-btn ${a===Number(n)?"active":""}`,"aria-current":a===Number(n)?"page":void 0,children:a},a)),o.length===0&&c.jsx("p",{className:"ep-empty muted",children:"No matching episodes."})]}),c.jsx("style",{children:`
        .episode-sidebar { border-radius: var(--radius); padding: 14px; }
        .ep-header {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 10px;
        }
        .ep-range {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 12px; font-weight: 700; letter-spacing: 0.04em;
          color: var(--text-dim); background: var(--panel-2);
          border: 1px solid var(--border); border-radius: 8px;
          padding: 6px 10px;
        }
        .ep-search {
          display: flex; align-items: center; gap: 8px;
          background: var(--panel-2); border: 1px solid var(--border);
          border-radius: 8px; padding: 8px 10px; margin-bottom: 10px;
          transition: var(--transition);
        }
        .ep-search:focus-within { border-color: var(--accent); }
        .ep-search svg { color: var(--text-muted); flex-shrink: 0; }
        .ep-search input {
          flex: 1; min-width: 0; background: transparent; border: none;
          outline: none; color: var(--text); font-size: 13px;
        }
        .ep-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(42px, 1fr));
          gap: 6px;
          max-height: 260px; overflow-y: auto;
          padding-right: 4px;
        }
        .ep-btn {
          display: flex; align-items: center; justify-content: center;
          aspect-ratio: 1 / 1; border-radius: 8px;
          background: var(--panel-2); border: 1px solid var(--border);
          color: var(--text-dim); font-size: 13px; font-weight: 600;
          transition: var(--transition);
        }
        .ep-btn:hover {
          border-color: var(--accent); color: var(--text);
          transform: translateY(-1px);
        }
        .ep-btn.active {
          background: var(--accent);
          border-color: var(--accent);
          color: #0b0b12;
          font-weight: 800;
          box-shadow: 0 6px 18px rgba(167,139,250,0.35);
        }
        .ep-empty {
          grid-column: 1 / -1; font-size: 12px; margin: 4px 0;
        }
      `})]})}function cj({providerId:t,anilistId:e,episode:n,language:r}){const[i,s]=R.useState({url:null,status:"idle",error:null,source:null}),o=R.useRef(null),a=R.useRef(new Map);return R.useEffect(()=>{if(!e||!n)return;o.current&&o.current.abort();const u=new AbortController;o.current=u;const d=rj(t);return s({url:null,status:"loading",error:null,source:null}),(async()=>{try{let f=null;if(d.id==="megaplay"){const g=a.current.get(String(e));if(g)f=I0(g,n);else try{const I=await ej(e,{signal:u.signal});a.current.set(String(e),I),f=I0(I,n)}catch(I){console.warn("Anikoto lookup failed:",I.message)}}if(u.signal.aborted)return;const m=d.buildUrl({anilistId:e,episode:n,language:r,anikotoEpisode:f});if(!m){s({url:null,status:"error",error:`No source available on ${d.label} for episode ${n}. Try the other server.`,source:d.id});return}s({url:m,status:"ready",error:null,source:d.id})}catch(f){if(f.name==="AbortError")return;s({url:null,status:"error",error:f.message,source:d.id})}})(),()=>u.abort()},[t,e,n,r]),i}const Xu={accent:"#a78bfa",reducedMotion:!1,autoplay:!0,autoNext:!0,subtitleLang:"en",streamProvider:"megaplay",streamLanguage:"sub"},cI=R.createContext(null);function dj({children:t}){const[e,n]=R.useState(()=>{try{const s=localStorage.getItem("hoshii:settings");return s?{...Xu,...JSON.parse(s)}:Xu}catch{return Xu}});R.useEffect(()=>{localStorage.setItem("hoshii:settings",JSON.stringify(e)),document.documentElement.style.setProperty("--accent",e.accent),document.documentElement.style.setProperty("--accent-soft",hj(e.accent,.15))},[e]);const r=s=>n(o=>({...o,...s})),i=()=>n(Xu);return c.jsx(cI.Provider,{value:{settings:e,update:r,reset:i},children:t})}function hj(t,e){const n=t.replace("#",""),r=parseInt(n.length===3?n.split("").map(a=>a+a).join(""):n,16),i=r>>16&255,s=r>>8&255,o=r&255;return`rgba(${i},${s},${o},${e})`}function dI(){const t=R.useContext(cI);if(!t)throw new Error("useSettings must be used within SettingsProvider");return t}function k0(){var N,M,b,Ke,Xe,Xt,ht,q,ee,ne,we;const{animeId:t,episode:e}=Xx(),n=jr(),{user:r}=rr(),{settings:i,update:s}=dI(),{addEntry:o}=$g(),[a,u]=R.useState(null),[d,f]=R.useState(!0),[m,g]=R.useState(null),[I,C]=R.useState(!1),k=Number(e||1),P=i.streamLanguage||"sub",E=i.streamProvider||"megaplay";R.useEffect(()=>{let X=!0;return f(!0),g(null),Vg(t,{onImporting:pe=>X&&C(pe)}).then(pe=>{X&&(u(pe),f(!1))}).catch(pe=>{X&&(g(pe),f(!1))}),()=>{X=!1}},[t]);const _=cj({providerId:E,anilistId:a==null?void 0:a.anilistId,episode:k,language:P});if(d)return c.jsxs("div",{className:"container page",children:[c.jsx(xn,{size:32,className:"spin"}),I&&c.jsx("p",{className:"muted",children:"Adding this anime to YumeList… this can take a few seconds."})]});if(m)return c.jsx("div",{className:"container page",children:c.jsxs("div",{className:"empty-state",children:["Failed to load: ",m.message]})});if(!a)return null;const S=((N=a.title)==null?void 0:N.english)||((M=a.title)==null?void 0:M.userPreferred)||((b=a.title)==null?void 0:b.romaji),O=a.episodes||0,j=lI.sanitize(a.description||""),D=(((Ke=a.recommendations)==null?void 0:Ke.nodes)||[]).map(X=>X.mediaRecommendation).filter(Boolean),x=(((Xe=a.relations)==null?void 0:Xe.edges)||[]).map(X=>X.node).filter(Boolean),y=(Xt=a.externalLinks)==null?void 0:Xt.find(X=>X.site==="MyAnimeList"),T=async(X,pe)=>{var J,Je;X&&await o({animeId:a.id,title:S,episode:k,position:X,duration:pe||0,image:((J=a.coverImage)==null?void 0:J.extraLarge)||((Je=a.coverImage)==null?void 0:Je.large),provider:E,language:P})},A=()=>{i.autoNext&&(!O||k<O)&&n(`/watch/${a.id}/${k+1}`)};return c.jsxs("div",{className:"page watch",children:[c.jsxs("div",{className:"container watch-grid",children:[c.jsxs("div",{className:"watch-main",children:[c.jsxs("div",{className:"watch-title-bar",children:[c.jsxs("div",{children:[c.jsx("h1",{children:S}),c.jsxs("p",{className:"muted",children:["Episode ",k,O?` of ${O}`:""]})]}),c.jsx(ij,{providerId:E,language:P,status:_.status,onProviderChange:X=>s({streamProvider:X}),onLanguageChange:X=>s({streamLanguage:X})})]}),c.jsx(QO,{url:_.url,title:`${S} — Episode ${k}`,onProgress:T,onComplete:A}),_.error&&_.status==="error"&&c.jsxs("div",{className:"stream-warning",children:[c.jsx(tb,{size:16}),c.jsx("span",{children:_.error})]}),c.jsxs("div",{className:"ep-nav-bar",children:[c.jsxs("button",{className:"btn ghost sm",disabled:k<=1,onClick:()=>n(`/watch/${a.id}/${k-1}`),children:[c.jsx(Bl,{size:14})," Previous Episode"]}),c.jsxs("button",{className:"btn ghost sm",disabled:O?k>=O:!1,onClick:()=>n(`/watch/${a.id}/${k+1}`),children:["Next Episode ",c.jsx(qo,{size:14})]})]}),c.jsxs("div",{className:"anime-info-card glass",children:[c.jsx("img",{src:(ht=a.coverImage)==null?void 0:ht.extraLarge,alt:S}),c.jsxs("div",{className:"anime-info-body",children:[c.jsx("h2",{children:S}),((q=a.title)==null?void 0:q.native)&&c.jsx("p",{className:"native",children:a.title.native}),c.jsx("div",{className:"genre-list",children:(a.genres||[]).map(X=>c.jsx("span",{className:"chip",children:X},X))}),c.jsx("div",{className:"description",dangerouslySetInnerHTML:{__html:j}}),c.jsxs("div",{className:"info-grid",children:[c.jsx(Zr,{label:"Format",value:a.format}),c.jsx(Zr,{label:"Season",value:a.season&&a.seasonYear?`${a.season} ${a.seasonYear}`:null}),c.jsx(Zr,{label:"Status",value:(ee=a.status)==null?void 0:ee.replace("_"," ")}),c.jsx(Zr,{label:"Episodes",value:a.episodes}),c.jsx(Zr,{label:"Score",value:a.averageScore?`${a.averageScore} / 100`:null}),c.jsx(Zr,{label:"Duration",value:a.duration?`${a.duration} min`:null}),c.jsx(Zr,{label:"Studios",value:(((ne=a.studios)==null?void 0:ne.nodes)||[]).map(X=>X.name).join(", ")}),c.jsx(Zr,{label:"Country",value:a.countryOfOrigin})]}),c.jsxs("div",{className:"actions-row",children:[((we=a.trailer)==null?void 0:we.id)&&a.trailer.site==="youtube"&&c.jsxs("a",{className:"btn sm",href:`https://www.youtube.com/watch?v=${a.trailer.id}`,target:"_blank",rel:"noreferrer",children:[c.jsx(aE,{size:14})," Trailer"]}),c.jsxs("button",{className:"btn sm",onClick:()=>r?Ug(r.uid,a,"WATCHING"):null,disabled:!r,children:[c.jsx(dE,{size:14})," Watchlist"]}),y&&c.jsxs("a",{className:"btn sm",href:y.url,target:"_blank",rel:"noreferrer",children:[c.jsx(Eb,{size:14})," MyAnimeList"]})]})]})]}),c.jsx(lj,{animeId:a.id,episode:k,animeTitle:S})]}),c.jsxs("aside",{className:"watch-side",children:[c.jsx(uj,{animeId:a.id,totalEpisodes:O,currentEpisode:k}),c.jsx(b0,{title:"Related Anime",children:(x.length?x:D).slice(0,8).map(X=>c.jsx(fd,{anime:X,showMeta:!1},X.id))}),c.jsx(b0,{title:"Recommendations",children:D.slice(0,8).map(X=>c.jsx(fd,{anime:X,showMeta:!1},X.id))})]})]}),c.jsx("style",{children:`
        .watch-grid { display: grid; grid-template-columns: minmax(0, 1fr) 320px; gap: 24px; }
        @media (max-width: 1000px) { .watch-grid { grid-template-columns: 1fr; } }
        .watch-main { display: flex; flex-direction: column; gap: 16px; min-width: 0; }
        .watch-title-bar {
          display: flex; align-items: center; justify-content: space-between;
          gap: 12px; flex-wrap: wrap;
        }
        .watch-title-bar h1 { margin: 0 0 4px; font-size: 22px; }
        .stream-warning {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 14px; border-radius: 10px;
          background: rgba(248,113,113,0.1);
          border: 1px solid rgba(248,113,113,0.3);
          color: var(--danger); font-size: 13px;
        }
        .ep-nav-bar { display: flex; gap: 8px; justify-content: space-between; }
        .anime-info-card {
          border-radius: var(--radius); padding: 18px;
          display: grid; grid-template-columns: 160px 1fr; gap: 20px;
        }
        @media (max-width: 600px) { .anime-info-card { grid-template-columns: 1fr; } }
        .anime-info-card img {
          width: 100%; border-radius: 12px; aspect-ratio: 2/3; object-fit: cover;
        }
        .anime-info-body { display: flex; flex-direction: column; gap: 12px; min-width: 0; }
        .anime-info-body h2 { margin: 0; font-size: 22px; }
        .native { margin: 0; font-size: 13px; color: var(--text-dim); }
        .genre-list { display: flex; flex-wrap: wrap; gap: 6px; }
        .description { font-size: 13.5px; line-height: 1.6; color: var(--text-dim); }
        .description p { margin: 0 0 8px; }
        .info-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 12px;
        }
        .info-cell { display: flex; flex-direction: column; gap: 2px; }
        .info-cell .lbl {
          font-size: 10.5px; color: var(--text-muted); text-transform: uppercase;
          letter-spacing: 0.05em; font-weight: 700;
        }
        .info-cell .val { font-size: 13px; font-weight: 600; }
        .actions-row { display: flex; gap: 6px; flex-wrap: wrap; }
        .btn.sm { padding: 6px 12px; font-size: 12px; }
        .watch-side { display: flex; flex-direction: column; gap: 16px; }
        .spin { animation: spin 0.9s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `})]})}function Zr({label:t,value:e}){return c.jsxs("div",{className:"info-cell",children:[c.jsx("span",{className:"lbl",children:t}),c.jsx("span",{className:"val",children:e||"—"})]})}function b0({title:t,children:e}){return c.jsxs("div",{className:"side-panel glass",children:[c.jsx("h3",{children:t}),c.jsx("div",{className:"side-grid",children:e}),c.jsx("style",{children:`
        .side-panel { border-radius: var(--radius); padding: 14px; }
        .side-panel h3 {
          margin: 0 0 12px; font-size: 13px; letter-spacing: 0.05em;
          text-transform: uppercase; color: var(--text-dim);
        }
        .side-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
      `})]})}const R0=[{key:"TRENDING",label:"Trending",fn:hd},{key:"POPULAR",label:"Popular",fn:MT},{key:"TOP",label:"Highest Rated",fn:VT},{key:"NEWEST",label:"Newest",fn:UT}];function fj(){var m;const[t,e]=nE(),[n,r]=R.useState(t.get("sort")||"TRENDING"),[i,s]=R.useState(Number(t.get("page")||1)),[o,a]=R.useState(null),[u,d]=R.useState(!0);R.useEffect(()=>{const g=new URLSearchParams;n!=="TRENDING"&&g.set("sort",n),i>1&&g.set("page",String(i)),e(g)},[n,i]),R.useEffect(()=>{var C;let g=!0;return d(!0),(((C=R0.find(k=>k.key===n))==null?void 0:C.fn)||hd)(i,30).then(k=>{g&&(a(k),d(!1))}).catch(()=>{g&&d(!1)}),()=>{g=!1}},[n,i]);const f=((m=o==null?void 0:o.pageInfo)==null?void 0:m.lastPage)||1;return c.jsxs("div",{className:"page",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"search-head",children:[c.jsx("h1",{children:"Trending"}),c.jsx("div",{className:"tabs",children:R0.map(g=>c.jsx("button",{className:g.key===n?"active":"",onClick:()=>{r(g.key),s(1)},children:g.label},g.key))})]}),c.jsx(eh,{anime:(o==null?void 0:o.media)||[],loading:u}),f>1&&c.jsxs("div",{className:"pagination",children:[c.jsxs("button",{className:"btn ghost",disabled:i<=1,onClick:()=>s(g=>g-1),children:[c.jsx(Bl,{size:14})," Prev"]}),c.jsxs("span",{className:"muted",children:["Page ",i," / ",f]}),c.jsxs("button",{className:"btn ghost",disabled:i>=f,onClick:()=>s(g=>g+1),children:["Next ",c.jsx(qo,{size:14})]})]})]}),c.jsx("style",{children:`
        .search-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; margin-bottom: 20px; }
        .search-head h1 { margin: 0; font-size: 28px; }
        .pagination { display: flex; align-items: center; justify-content: center; gap: 14px; margin-top: 32px; }
      `})]})}const Da=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function pj(){const[t,e]=R.useState(null),[n,r]=R.useState(!0),[i,s]=R.useState(new Date().getDay());R.useEffect(()=>{let a=!0;r(!0);const u=Math.floor(Date.now()/1e3),d=u+60*60*24*7;return JL({perPage:100,airingAtGreater:u,airingAtLesser:d}).then(f=>{a&&(e(f),r(!1))}).catch(()=>{a&&r(!1)}),()=>{a=!1}},[]);const o=R.useMemo(()=>{const a=new Map;return Da.forEach(u=>a.set(u,[])),((t==null?void 0:t.airingSchedules)||[]).forEach(u=>{const d=new Date(u.airingAt*1e3),f=Da[d.getDay()];a.get(f).push(u)}),a},[t]);return c.jsxs("div",{className:"page",children:[c.jsxs("div",{className:"container",children:[c.jsx("div",{className:"search-head",children:c.jsxs("div",{children:[c.jsx("h1",{children:"Airing Schedule"}),c.jsx("p",{className:"muted",children:"Times shown in your local timezone."})]})}),c.jsx("div",{className:"day-tabs",children:Da.map((a,u)=>c.jsxs("button",{className:u===i?"active":"",onClick:()=>s(u),children:[a,c.jsx("span",{className:"count",children:(o.get(a)||[]).length})]},a))}),n?c.jsxs("div",{className:"loading-row",children:[c.jsx(xn,{size:24,className:"spin"})," Loading schedule…"]}):c.jsxs("div",{className:"schedule-list",children:[(o.get(Da[i])||[]).map(a=>{var f;const u=new Date(a.airingAt*1e3).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),d=a.media.title.english||a.media.title.userPreferred||a.media.title.romaji;return c.jsxs(Ne,{to:`/anime/${a.media.id}`,className:"schedule-row",children:[c.jsxs("span",{className:"time",children:[c.jsx(oE,{size:12})," ",u]}),c.jsx("img",{src:(f=a.media.coverImage)==null?void 0:f.large,alt:"",loading:"lazy"}),c.jsxs("div",{className:"info",children:[c.jsx("span",{className:"title",children:d}),c.jsxs("span",{className:"muted",children:["Episode ",a.episode," · ",a.media.format]})]}),c.jsxs("span",{className:"ep-badge",children:["EP ",a.episode]})]},a.id)}),(o.get(Da[i])||[]).length===0&&c.jsx("div",{className:"empty-state",children:"No airings this day."})]})]}),c.jsx("style",{children:`
        .search-head { margin-bottom: 20px; }
        .search-head h1 { margin: 0 0 4px; font-size: 28px; }
        .day-tabs {
          display: flex; gap: 6px; overflow-x: auto;
          padding-bottom: 8px; margin-bottom: 20px;
          scrollbar-width: none;
        }
        .day-tabs::-webkit-scrollbar { display: none; }
        .day-tabs button {
          flex: 0 0 auto; display: inline-flex; align-items: center; gap: 6px;
          padding: 10px 16px; border-radius: 10px; border: 1px solid var(--border);
          background: var(--panel); color: var(--text-dim);
          font-weight: 600; font-size: 13px; transition: var(--transition);
        }
        .day-tabs button:hover { color: var(--text); }
        .day-tabs button.active {
          background: var(--accent-soft); color: var(--text);
          border-color: var(--accent);
        }
        .day-tabs .count { font-size: 11px; color: var(--text-muted); }
        .schedule-list { display: flex; flex-direction: column; gap: 6px; }
        .schedule-row {
          display: flex; align-items: center; gap: 14px;
          padding: 10px 14px; border-radius: 12px;
          background: var(--panel); border: 1px solid var(--border-soft);
          transition: var(--transition);
        }
        .schedule-row:hover {
          border-color: var(--accent); background: var(--panel-2);
        }
        .schedule-row img {
          width: 48px; height: 68px; border-radius: 8px; object-fit: cover;
        }
        .schedule-row .time {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 12px; font-weight: 700; color: var(--cyan); width: 70px;
        }
        .schedule-row .info {
          flex: 1; display: flex; flex-direction: column; gap: 3px; min-width: 0;
        }
        .schedule-row .title {
          font-weight: 600; font-size: 14px;
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .ep-badge {
          background: var(--accent-soft); color: var(--accent);
          font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 6px;
        }
        .loading-row {
          display: flex; align-items: center; justify-content: center;
          gap: 10px; padding: 60px; color: var(--text-muted);
        }
        .spin { animation: spin 0.9s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `})]})}function mj(){var O,j;const{user:t}=rr(),[e,n]=R.useState(null),[r,i]=R.useState([]),[s,o]=R.useState([]),[a,u]=R.useState(!0),[d,f]=R.useState(!1),[m,g]=R.useState(!1),[I,C]=R.useState(""),[k,P]=R.useState(""),[E,_]=R.useState(!1);if(R.useEffect(()=>{if(!t){u(!1);return}u(!0),Promise.all([TL(t.uid),zg(t.uid).catch(()=>[]),HT(t.uid).catch(()=>[])]).then(([D,x,y])=>{n(D),i(x),o(y),C(t.displayName||""),P(t.photoURL||"")}).finally(()=>u(!1))},[t]),!t)return c.jsxs("div",{className:"page container",children:[c.jsxs("div",{className:"empty-state",children:[c.jsx("h2",{children:"Profile"}),c.jsx("p",{children:"Sign in to view your profile."}),c.jsx("button",{className:"btn primary",onClick:()=>f(!0),children:"Sign In"})]}),c.jsx(uu,{open:d,onClose:()=>f(!1)})]});const S=async()=>{_(!0);try{await EL(t,{displayName:I,photoURL:k||null}),g(!1)}catch(D){console.warn(D)}_(!1)};return c.jsxs("div",{className:"page container",children:[a?c.jsxs("div",{className:"loading-row",children:[c.jsx(xn,{size:24,className:"spin"})," Loading profile…"]}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"profile-head glass",children:[c.jsx("div",{className:"avatar-lg",children:t.photoURL?c.jsx("img",{src:t.photoURL,alt:""}):(t.displayName||"U")[0].toUpperCase()}),c.jsx("div",{className:"profile-info",children:m?c.jsxs(c.Fragment,{children:[c.jsx("input",{value:I,onChange:D=>C(D.target.value),placeholder:"Display name"}),c.jsx("input",{value:k,onChange:D=>P(D.target.value),placeholder:"Avatar image URL"}),c.jsxs("div",{className:"btn-row",children:[c.jsxs("button",{className:"btn primary",onClick:S,disabled:E,children:[E&&c.jsx(xn,{size:14,className:"spin"})," ",c.jsx(yb,{size:14})," Save"]}),c.jsx("button",{className:"btn ghost",onClick:()=>g(!1),children:"Cancel"})]})]}):c.jsxs(c.Fragment,{children:[c.jsx("h1",{children:t.displayName||"User"}),c.jsx("p",{className:"muted",children:t.email}),(e==null?void 0:e.createdAt)&&c.jsxs("p",{className:"muted-2",children:["Joined ",((j=(O=e.createdAt).toDate)==null?void 0:j.call(O).toLocaleDateString())||"recently"]}),c.jsx("button",{className:"btn ghost sm",onClick:()=>g(!0),children:"Edit Profile"})]})})]}),c.jsxs("section",{style:{marginTop:32},children:[c.jsx("div",{className:"section-head",children:c.jsx("h2",{children:"Favorites"})}),s.length===0?c.jsx("div",{className:"empty-state",children:"No favorites yet."}):c.jsx("div",{className:"mini-grid",children:s.map(D=>c.jsxs(Ne,{to:`/anime/${D.id}`,className:"mini-card",children:[c.jsx("img",{src:D.coverImage,alt:D.title}),c.jsx("span",{children:D.title})]},D.id))})]}),c.jsxs("section",{style:{marginTop:32},children:[c.jsx("div",{className:"section-head",children:c.jsx("h2",{children:"Watchlist"})}),r.length===0?c.jsx("div",{className:"empty-state",children:"Your watchlist is empty."}):c.jsx("div",{className:"mini-grid",children:r.map(D=>c.jsxs(Ne,{to:`/anime/${D.id}`,className:"mini-card",children:[c.jsx("img",{src:D.coverImage,alt:D.title}),c.jsx("span",{children:D.title})]},D.id))})]})]}),c.jsx("style",{children:`
        .profile-head { display: flex; gap: 24px; padding: 24px; border-radius: var(--radius); align-items: center; flex-wrap: wrap; }
        .avatar-lg {
          width: 96px; height: 96px; border-radius: 20px;
          background: linear-gradient(135deg, var(--accent-strong), var(--accent));
          color: #0b0b12; display: flex; align-items: center; justify-content: center;
          font-size: 36px; font-weight: 800; overflow: hidden; flex-shrink: 0;
        }
        .avatar-lg img { width: 100%; height: 100%; object-fit: cover; }
        .profile-info { display: flex; flex-direction: column; gap: 6px; min-width: 0; flex: 1; }
        .profile-info h1 { margin: 0; font-size: 26px; }
        .profile-info p { margin: 0; font-size: 13px; }
        .profile-info input {
          background: var(--panel-2); border: 1px solid var(--border);
          border-radius: 8px; padding: 8px 12px; color: var(--text); font-size: 14px;
          max-width: 340px; outline: none;
        }
        .btn-row { display: flex; gap: 8px; margin-top: 6px; }
        .btn.sm { padding: 6px 12px; font-size: 12px; }
        .mini-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 12px; }
        .mini-card { display: flex; flex-direction: column; gap: 6px; }
        .mini-card img { width: 100%; aspect-ratio: 2/3; border-radius: 10px; object-fit: cover; }
        .mini-card span { font-size: 12px; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .loading-row { display: flex; align-items: center; gap: 10px; padding: 60px; justify-content: center; color: var(--text-muted); }
        .spin { animation: spin 0.9s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `})]})}function gj(){const{user:t}=rr(),[e,n]=R.useState([]),[r,i]=R.useState(!0),[s,o]=R.useState(!1);if(R.useEffect(()=>{if(!t){i(!1);return}i(!0),zg(t.uid).then(n).catch(()=>{}).finally(()=>i(!1))},[t]),!t)return c.jsxs("div",{className:"page container",children:[c.jsxs("div",{className:"empty-state",children:[c.jsx("h2",{children:"Your Watchlist"}),c.jsx("p",{children:"Sign in to save and track anime."}),c.jsx("button",{className:"btn primary",onClick:()=>o(!0),children:"Sign In"})]}),c.jsx(uu,{open:s,onClose:()=>o(!1)})]});const a=async u=>{await Fg(t.uid,u),n(d=>d.filter(f=>f.id!==u))};return c.jsxs("div",{className:"page container",children:[c.jsx("h1",{children:"Your Watchlist"}),r?c.jsxs("div",{className:"loading-row",children:[c.jsx(xn,{size:24,className:"spin"})," Loading…"]}):e.length===0?c.jsxs("div",{className:"empty-state",children:[c.jsx("p",{children:"Your watchlist is empty."}),c.jsx(Ne,{className:"btn primary",to:"/search",children:"Browse Anime"})]}):c.jsx("div",{className:"watchlist-grid",children:e.map(u=>c.jsxs("div",{className:"watchlist-card",children:[c.jsxs(Ne,{to:`/anime/${u.id}`,children:[c.jsx("img",{src:u.coverImage,alt:u.title,loading:"lazy"}),c.jsxs("div",{className:"wc-info",children:[c.jsx("span",{className:"wc-title",children:u.title}),c.jsxs("span",{className:"muted",children:[u.format," · ",u.seasonYear," · ",u.status]})]})]}),c.jsx("button",{className:"wc-remove",onClick:()=>a(u.id),"aria-label":"Remove",children:c.jsx(fE,{size:14})})]},u.id))}),c.jsx("style",{children:`
        h1 { margin: 0 0 20px; font-size: 28px; }
        .watchlist-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 16px; }
        .watchlist-card { position: relative; background: var(--panel); border: 1px solid var(--border); border-radius: 12px; overflow: hidden; transition: var(--transition); }
        .watchlist-card:hover { border-color: var(--accent); }
        .watchlist-card img { width: 100%; aspect-ratio: 2/3; object-fit: cover; }
        .wc-info { padding: 10px; display: flex; flex-direction: column; gap: 4px; }
        .wc-title { font-size: 13px; font-weight: 600; line-height: 1.3; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .wc-remove {
          position: absolute; top: 8px; right: 8px;
          background: rgba(0,0,0,0.7); color: var(--danger); border: none;
          width: 30px; height: 30px; border-radius: 8px; display: flex; align-items: center; justify-content: center;
          transition: var(--transition); opacity: 0;
        }
        .watchlist-card:hover .wc-remove { opacity: 1; }
        .wc-remove:hover { background: rgba(248,113,113,0.2); }
        .loading-row { display: flex; align-items: center; gap: 10px; padding: 60px; justify-content: center; color: var(--text-muted); }
        .spin { animation: spin 0.9s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `})]})}function yj(){const{history:t,loading:e,removeEntry:n}=$g();return c.jsxs("div",{className:"page container",children:[c.jsx("h1",{children:"Watch History"}),e?c.jsxs("div",{className:"loading-row",children:[c.jsx(xn,{size:24,className:"spin"})," Loading…"]}):t.length===0?c.jsxs("div",{className:"empty-state",children:[c.jsx("p",{children:"No watch history yet."}),c.jsx(Ne,{className:"btn primary",to:"/",children:"Browse Anime"})]}):c.jsx("div",{className:"history-grid",children:t.map(r=>{const i=r.duration?Math.min(100,r.position/r.duration*100):0;return c.jsxs("div",{className:"history-card",children:[c.jsxs(Ne,{to:`/watch/${r.animeId}/${r.episode}`,children:[c.jsxs("div",{className:"thumb",style:{backgroundImage:`url(${r.image})`},children:[c.jsxs("span",{className:"ep-badge",children:["EP ",r.episode]}),c.jsx("div",{className:"progress",children:c.jsx("div",{className:"progress-fill",style:{width:`${i}%`}})})]}),c.jsx("p",{className:"title",children:r.title}),c.jsxs("p",{className:"meta",children:[C0(r.position)," / ",C0(r.duration)]})]}),c.jsx("button",{className:"remove",onClick:()=>n(r.animeId,r.episode),"aria-label":"Remove",children:c.jsx($l,{size:14})})]},r.id||`${r.animeId}-${r.episode}`)})}),c.jsx("style",{children:`
        h1 { margin: 0 0 20px; font-size: 28px; }
        .history-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 16px; }
        .history-card { position: relative; }
        .history-card .thumb {
          aspect-ratio: 16/9; border-radius: 10px; background-size: cover; background-position: center;
          background-color: var(--panel); border: 1px solid var(--border); overflow: hidden;
          transition: var(--transition);
        }
        .history-card:hover .thumb { border-color: var(--accent); }
        .ep-badge {
          position: absolute; top: 8px; left: 8px; background: rgba(0,0,0,0.75); color: #fff;
          font-size: 10px; font-weight: 700; padding: 3px 7px; border-radius: 5px; backdrop-filter: blur(4px);
        }
        .progress { position: absolute; left: 0; right: 0; bottom: 0; height: 3px; background: rgba(0,0,0,0.5); }
        .progress-fill { height: 100%; background: var(--accent); }
        .title { margin: 8px 0 4px; font-size: 13px; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .meta { margin: 0; font-size: 11px; color: var(--text-muted); }
        .remove {
          position: absolute; top: 8px; right: 8px;
          background: rgba(0,0,0,0.75); color: #fff; border: none;
          width: 26px; height: 26px; border-radius: 6px; display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: var(--transition);
        }
        .history-card:hover .remove { opacity: 1; }
        .loading-row { display: flex; align-items: center; gap: 10px; padding: 60px; justify-content: center; color: var(--text-muted); }
        .spin { animation: spin 0.9s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `})]})}function C0(t){if(!t||!isFinite(t))return"0:00";const e=Math.floor(t/60),n=Math.floor(t%60).toString().padStart(2,"0");return`${e}:${n}`}const vj=[{name:"Lavender",value:"#a78bfa"},{name:"Cyan",value:"#67e8f9"},{name:"Blue",value:"#60a5fa"},{name:"Pink",value:"#f472b6"},{name:"Green",value:"#4ade80"},{name:"Orange",value:"#fb923c"}];function _j(){const{settings:t,update:e,reset:n}=dI(),{user:r,signOut:i}=rr(),s=jr(),o=Array.from(new Set(Si.flatMap(a=>a.languages)));return c.jsxs("div",{className:"page container settings",children:[c.jsx("h1",{children:"Settings"}),c.jsxs("section",{className:"settings-card glass",children:[c.jsx("h2",{children:"Appearance"}),c.jsxs("div",{className:"setting-row",children:[c.jsxs("div",{children:[c.jsx("label",{children:"Accent color"}),c.jsx("p",{className:"muted",children:"Choose the highlight color used throughout Hoshii."})]}),c.jsx("div",{className:"accent-swatches",children:vj.map(a=>c.jsx("button",{className:`swatch ${t.accent===a.value?"active":""}`,style:{background:a.value},onClick:()=>e({accent:a.value}),"aria-label":a.name},a.value))})]}),c.jsxs("div",{className:"setting-row",children:[c.jsxs("div",{children:[c.jsx("label",{children:"Reduced motion"}),c.jsx("p",{className:"muted",children:"Disable animations and transitions."})]}),c.jsx(af,{checked:t.reducedMotion,onChange:a=>e({reducedMotion:a})})]})]}),c.jsxs("section",{className:"settings-card glass",children:[c.jsx("h2",{children:"Playback"}),c.jsxs("div",{className:"setting-row",children:[c.jsxs("div",{children:[c.jsx("label",{children:"Autoplay"}),c.jsx("p",{className:"muted",children:"Start playing as soon as the page loads."})]}),c.jsx(af,{checked:t.autoplay,onChange:a=>e({autoplay:a})})]}),c.jsxs("div",{className:"setting-row",children:[c.jsxs("div",{children:[c.jsx("label",{children:"Auto Next"}),c.jsx("p",{className:"muted",children:"Automatically continue to the next episode."})]}),c.jsx(af,{checked:t.autoNext,onChange:a=>e({autoNext:a})})]}),c.jsxs("div",{className:"setting-row",children:[c.jsxs("div",{children:[c.jsx("label",{children:"Subtitle Language"}),c.jsx("p",{className:"muted",children:"Default subtitle track when available."})]}),c.jsxs("select",{value:t.subtitleLang,onChange:a=>e({subtitleLang:a.target.value}),children:[c.jsx("option",{value:"en",children:"English"}),c.jsx("option",{value:"es",children:"Spanish"}),c.jsx("option",{value:"fr",children:"French"}),c.jsx("option",{value:"off",children:"Off"})]})]})]}),c.jsxs("section",{className:"settings-card glass",children:[c.jsx("h2",{children:"Streaming"}),c.jsxs("div",{className:"setting-row",children:[c.jsxs("div",{children:[c.jsx("label",{children:"Default server"}),c.jsx("p",{className:"muted",children:"Preferred embed provider on the watch page."})]}),c.jsx("select",{value:t.streamProvider||"megaplay",onChange:a=>e({streamProvider:a.target.value}),children:Si.map(a=>c.jsx("option",{value:a.id,children:a.label},a.id))})]}),c.jsxs("div",{className:"setting-row",children:[c.jsxs("div",{children:[c.jsx("label",{children:"Default language"}),c.jsx("p",{className:"muted",children:"Sub or dub, when the selected server supports it."})]}),c.jsx("select",{value:t.streamLanguage||"sub",onChange:a=>e({streamLanguage:a.target.value}),children:o.map(a=>c.jsx("option",{value:a,children:a.charAt(0).toUpperCase()+a.slice(1)},a))})]}),c.jsxs("div",{className:"setting-row",children:[c.jsxs("div",{children:[c.jsx("label",{children:"Available servers"}),c.jsx("p",{className:"muted",children:"Hoshii embeds third-party players. It never hosts or proxies video."})]}),c.jsx("div",{className:"server-pills",children:Si.map(a=>c.jsxs("span",{className:"chip",children:[a.label,c.jsx("span",{className:"langs",children:a.languages.map(u=>u.toUpperCase()).join(" · ")})]},a.id))})]})]}),c.jsxs("section",{className:"settings-card glass",children:[c.jsx("h2",{children:"Data"}),c.jsxs("div",{className:"setting-row",children:[c.jsxs("div",{children:[c.jsx("label",{children:"Clear anime data cache"}),c.jsx("p",{className:"muted",children:"Forces the next page load to re-fetch all anime data from YumeList. Cached entries are otherwise refreshed automatically in the background."})]}),c.jsxs("button",{className:"btn",onClick:()=>{NL(),alert("Anime data cache cleared. Reload to fetch fresh data.")},children:[c.jsx(Rv,{size:14})," Clear"]})]}),c.jsxs("div",{className:"setting-row",children:[c.jsxs("div",{children:[c.jsx("label",{children:"Clear local cache"}),c.jsx("p",{className:"muted",children:"Removes locally stored settings, cache, and logged-out watch history."})]}),c.jsxs("button",{className:"btn",onClick:()=>{confirm("Clear local cache and preferences?")&&(localStorage.clear(),n())},children:[c.jsx(Rv,{size:14})," Clear"]})]}),r&&c.jsxs("div",{className:"setting-row",children:[c.jsxs("div",{children:[c.jsx("label",{children:"Log out"}),c.jsx("p",{className:"muted",children:"Sign out of your Hoshii account."})]}),c.jsxs("button",{className:"btn",onClick:async()=>{await i(),s("/")},children:[c.jsx(cE,{size:14})," Log Out"]})]})]}),c.jsx("style",{children:`
        h1 { margin: 0 0 20px; font-size: 28px; }
        .settings { display: flex; flex-direction: column; gap: 20px; }
        .settings-card { border-radius: var(--radius); padding: 22px; }
        .settings-card h2 {
          margin: 0 0 16px; font-size: 16px; letter-spacing: 0.02em;
        }
        .setting-row {
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; padding: 14px 0; border-top: 1px solid var(--border-soft);
          flex-wrap: wrap;
        }
        .setting-row:first-of-type { border-top: none; }
        .setting-row label {
          font-weight: 600; font-size: 14px; display: block; margin-bottom: 4px;
        }
        .setting-row p { margin: 0; font-size: 12.5px; max-width: 440px; }
        .setting-row select {
          background: var(--panel-2); border: 1px solid var(--border);
          border-radius: 8px; padding: 8px 12px; color: var(--text);
          font-size: 13px; outline: none; transition: var(--transition);
        }
        .setting-row select:focus { border-color: var(--accent); }
        .accent-swatches { display: flex; gap: 8px; }
        .swatch {
          width: 30px; height: 30px; border-radius: 50%;
          border: 2px solid transparent; transition: var(--transition);
        }
        .swatch.active { border-color: var(--text); transform: scale(1.1); }
        .server-pills { display: flex; gap: 8px; flex-wrap: wrap; }
        .server-pills .chip {
          background: var(--panel-2); border: 1px solid var(--border);
          color: var(--text-dim); font-weight: 600; padding: 6px 10px;
          border-radius: 999px; display: inline-flex; align-items: center; gap: 8px;
        }
        .server-pills .langs {
          font-size: 10px; color: var(--text-muted);
          letter-spacing: 0.06em; font-weight: 700;
        }
      `})]})}function af({checked:t,onChange:e}){return c.jsxs("button",{className:`toggle ${t?"on":""}`,onClick:()=>e(!t),role:"switch","aria-checked":t,children:[c.jsx("span",{className:"knob"}),c.jsx("style",{children:`
        .toggle {
          width: 46px; height: 26px; border-radius: 999px;
          background: var(--panel-2); border: 1px solid var(--border);
          padding: 2px; display: flex; align-items: center;
          transition: var(--transition); position: relative;
        }
        .toggle .knob {
          width: 20px; height: 20px; border-radius: 50%;
          background: var(--text-dim); transition: var(--transition);
        }
        .toggle.on { background: var(--accent); border-color: var(--accent); }
        .toggle.on .knob { background: #0b0b12; transform: translateX(20px); }
      `})]})}class wj extends R.Component{constructor(){super(...arguments);dy(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}componentDidCatch(n,r){console.error("ErrorBoundary",n,r)}render(){var n;return this.state.error?c.jsxs("div",{className:"container",style:{padding:80},children:[c.jsx("h1",{children:"Something went wrong"}),c.jsx("p",{className:"muted",children:String(((n=this.state.error)==null?void 0:n.message)||this.state.error)}),c.jsx("button",{className:"btn primary",onClick:()=>location.reload(),children:"Reload"})]}):this.props.children}}function xj(){return c.jsx(wj,{children:c.jsx(aO,{children:c.jsxs(Ok,{children:[c.jsx(en,{path:"/",element:c.jsx(dO,{})}),c.jsx(en,{path:"/search",element:c.jsx(fO,{})}),c.jsx(en,{path:"/anime/:id",element:c.jsx(KO,{})}),c.jsx(en,{path:"/watch/:animeId",element:c.jsx(k0,{})}),c.jsx(en,{path:"/watch/:animeId/:episode",element:c.jsx(k0,{})}),c.jsx(en,{path:"/trending",element:c.jsx(fj,{})}),c.jsx(en,{path:"/schedule",element:c.jsx(pj,{})}),c.jsx(en,{path:"/profile",element:c.jsx(mj,{})}),c.jsx(en,{path:"/watchlist",element:c.jsx(gj,{})}),c.jsx(en,{path:"/history",element:c.jsx(yj,{})}),c.jsx(en,{path:"/settings",element:c.jsx(_j,{})}),c.jsx(en,{path:"*",element:c.jsx(Dk,{to:"/",replace:!0})})]})})})}lf.createRoot(document.getElementById("root")).render(c.jsx(z0.StrictMode,{children:c.jsx(Wk,{children:c.jsx(dj,{children:c.jsx(SL,{children:c.jsx(xj,{})})})})}));
