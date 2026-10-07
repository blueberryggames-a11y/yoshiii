var wI=Object.defineProperty;var xI=(t,e,n)=>e in t?wI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var fy=(t,e,n)=>xI(t,typeof e!="symbol"?e+"":e,n);function EI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function TI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var L0={exports:{}},gd={},O0={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vl=Symbol.for("react.element"),II=Symbol.for("react.portal"),SI=Symbol.for("react.fragment"),AI=Symbol.for("react.strict_mode"),kI=Symbol.for("react.profiler"),bI=Symbol.for("react.provider"),RI=Symbol.for("react.context"),CI=Symbol.for("react.forward_ref"),PI=Symbol.for("react.suspense"),NI=Symbol.for("react.memo"),DI=Symbol.for("react.lazy"),py=Symbol.iterator;function LI(t){return t===null||typeof t!="object"?null:(t=py&&t[py]||t["@@iterator"],typeof t=="function"?t:null)}var j0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M0=Object.assign,V0={};function Bo(t,e,n){this.props=t,this.context=e,this.refs=V0,this.updater=n||j0}Bo.prototype.isReactComponent={};Bo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Bo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function U0(){}U0.prototype=Bo.prototype;function jp(t,e,n){this.props=t,this.context=e,this.refs=V0,this.updater=n||j0}var Mp=jp.prototype=new U0;Mp.constructor=jp;M0(Mp,Bo.prototype);Mp.isPureReactComponent=!0;var my=Array.isArray,F0=Object.prototype.hasOwnProperty,Vp={current:null},z0={key:!0,ref:!0,__self:!0,__source:!0};function $0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)F0.call(e,r)&&!z0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),d=0;d<a;d++)u[d]=arguments[d+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Vl,type:t,key:s,ref:o,props:i,_owner:Vp.current}}function OI(t,e){return{$$typeof:Vl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Up(t){return typeof t=="object"&&t!==null&&t.$$typeof===Vl}function jI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var gy=/\/+/g;function fh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?jI(""+t.key):e.toString(36)}function Zu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Vl:case II:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+fh(o,0):r,my(i)?(n="",t!=null&&(n=t.replace(gy,"$&/")+"/"),Zu(i,e,n,"",function(d){return d})):i!=null&&(Up(i)&&(i=OI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(gy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",my(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+fh(s,a);o+=Zu(s,e,n,u,i)}else if(u=LI(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+fh(s,a++),o+=Zu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ku(t,e,n){if(t==null)return t;var r=[],i=0;return Zu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function MI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ut={current:null},ec={transition:null},VI={ReactCurrentDispatcher:Ut,ReactCurrentBatchConfig:ec,ReactCurrentOwner:Vp};function B0(){throw Error("act(...) is not supported in production builds of React.")}ce.Children={map:ku,forEach:function(t,e,n){ku(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ku(t,function(){e++}),e},toArray:function(t){return ku(t,function(e){return e})||[]},only:function(t){if(!Up(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ce.Component=Bo;ce.Fragment=SI;ce.Profiler=kI;ce.PureComponent=jp;ce.StrictMode=AI;ce.Suspense=PI;ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=VI;ce.act=B0;ce.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=M0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Vp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)F0.call(e,u)&&!z0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var d=0;d<u;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:Vl,type:t.type,key:i,ref:s,props:r,_owner:o}};ce.createContext=function(t){return t={$$typeof:RI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:bI,_context:t},t.Consumer=t};ce.createElement=$0;ce.createFactory=function(t){var e=$0.bind(null,t);return e.type=t,e};ce.createRef=function(){return{current:null}};ce.forwardRef=function(t){return{$$typeof:CI,render:t}};ce.isValidElement=Up;ce.lazy=function(t){return{$$typeof:DI,_payload:{_status:-1,_result:t},_init:MI}};ce.memo=function(t,e){return{$$typeof:NI,type:t,compare:e===void 0?null:e}};ce.startTransition=function(t){var e=ec.transition;ec.transition={};try{t()}finally{ec.transition=e}};ce.unstable_act=B0;ce.useCallback=function(t,e){return Ut.current.useCallback(t,e)};ce.useContext=function(t){return Ut.current.useContext(t)};ce.useDebugValue=function(){};ce.useDeferredValue=function(t){return Ut.current.useDeferredValue(t)};ce.useEffect=function(t,e){return Ut.current.useEffect(t,e)};ce.useId=function(){return Ut.current.useId()};ce.useImperativeHandle=function(t,e,n){return Ut.current.useImperativeHandle(t,e,n)};ce.useInsertionEffect=function(t,e){return Ut.current.useInsertionEffect(t,e)};ce.useLayoutEffect=function(t,e){return Ut.current.useLayoutEffect(t,e)};ce.useMemo=function(t,e){return Ut.current.useMemo(t,e)};ce.useReducer=function(t,e,n){return Ut.current.useReducer(t,e,n)};ce.useRef=function(t){return Ut.current.useRef(t)};ce.useState=function(t){return Ut.current.useState(t)};ce.useSyncExternalStore=function(t,e,n){return Ut.current.useSyncExternalStore(t,e,n)};ce.useTransition=function(){return Ut.current.useTransition()};ce.version="18.3.1";O0.exports=ce;var R=O0.exports;const W0=TI(R),UI=EI({__proto__:null,default:W0},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FI=R,zI=Symbol.for("react.element"),$I=Symbol.for("react.fragment"),BI=Object.prototype.hasOwnProperty,WI=FI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,HI={key:!0,ref:!0,__self:!0,__source:!0};function H0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)BI.call(e,r)&&!HI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:zI,type:t,key:s,ref:o,props:i,_owner:WI.current}}gd.Fragment=$I;gd.jsx=H0;gd.jsxs=H0;L0.exports=gd;var c=L0.exports,cf={},q0={exports:{}},ln={},G0={exports:{}},K0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(q,ee){var ne=q.length;q.push(ee);e:for(;0<ne;){var we=ne-1>>>1,X=q[we];if(0<i(X,ee))q[we]=ee,q[ne]=X,ne=we;else break e}}function n(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var ee=q[0],ne=q.pop();if(ne!==ee){q[0]=ne;e:for(var we=0,X=q.length,pe=X>>>1;we<pe;){var J=2*(we+1)-1,Je=q[J],Tn=J+1,In=q[Tn];if(0>i(Je,ne))Tn<X&&0>i(In,Je)?(q[we]=In,q[Tn]=ne,we=Tn):(q[we]=Je,q[J]=ne,we=J);else if(Tn<X&&0>i(In,ne))q[we]=In,q[Tn]=ne,we=Tn;else break e}}return ee}function i(q,ee){var ne=q.sortIndex-ee.sortIndex;return ne!==0?ne:q.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],d=[],f=1,m=null,g=3,I=!1,C=!1,k=!1,P=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(q){for(var ee=n(d);ee!==null;){if(ee.callback===null)r(d);else if(ee.startTime<=q)r(d),ee.sortIndex=ee.expirationTime,e(u,ee);else break;ee=n(d)}}function O(q){if(k=!1,S(q),!C)if(n(u)!==null)C=!0,Xt(j);else{var ee=n(d);ee!==null&&ht(O,ee.startTime-q)}}function j(q,ee){C=!1,k&&(k=!1,E(y),y=-1),I=!0;var ne=g;try{for(S(ee),m=n(u);m!==null&&(!(m.expirationTime>ee)||q&&!N());){var we=m.callback;if(typeof we=="function"){m.callback=null,g=m.priorityLevel;var X=we(m.expirationTime<=ee);ee=t.unstable_now(),typeof X=="function"?m.callback=X:m===n(u)&&r(u),S(ee)}else r(u);m=n(u)}if(m!==null)var pe=!0;else{var J=n(d);J!==null&&ht(O,J.startTime-ee),pe=!1}return pe}finally{m=null,g=ne,I=!1}}var D=!1,x=null,y=-1,T=5,A=-1;function N(){return!(t.unstable_now()-A<T)}function M(){if(x!==null){var q=t.unstable_now();A=q;var ee=!0;try{ee=x(!0,q)}finally{ee?b():(D=!1,x=null)}}else D=!1}var b;if(typeof _=="function")b=function(){_(M)};else if(typeof MessageChannel<"u"){var Ke=new MessageChannel,Xe=Ke.port2;Ke.port1.onmessage=M,b=function(){Xe.postMessage(null)}}else b=function(){P(M,0)};function Xt(q){x=q,D||(D=!0,b())}function ht(q,ee){y=P(function(){q(t.unstable_now())},ee)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(q){q.callback=null},t.unstable_continueExecution=function(){C||I||(C=!0,Xt(j))},t.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<q?Math.floor(1e3/q):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(q){switch(g){case 1:case 2:case 3:var ee=3;break;default:ee=g}var ne=g;g=ee;try{return q()}finally{g=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(q,ee){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var ne=g;g=q;try{return ee()}finally{g=ne}},t.unstable_scheduleCallback=function(q,ee,ne){var we=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?we+ne:we):ne=we,q){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=ne+X,q={id:f++,callback:ee,priorityLevel:q,startTime:ne,expirationTime:X,sortIndex:-1},ne>we?(q.sortIndex=ne,e(d,q),n(u)===null&&q===n(d)&&(k?(E(y),y=-1):k=!0,ht(O,ne-we))):(q.sortIndex=X,e(u,q),C||I||(C=!0,Xt(j))),q},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(q){var ee=g;return function(){var ne=g;g=ee;try{return q.apply(this,arguments)}finally{g=ne}}}})(K0);G0.exports=K0;var qI=G0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var GI=R,an=qI;function W(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Q0=new Set,ol={};function Es(t,e){Ao(t,e),Ao(t+"Capture",e)}function Ao(t,e){for(ol[t]=e,t=0;t<e.length;t++)Q0.add(e[t])}var Sr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),df=Object.prototype.hasOwnProperty,KI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yy={},vy={};function QI(t){return df.call(vy,t)?!0:df.call(yy,t)?!1:KI.test(t)?vy[t]=!0:(yy[t]=!0,!1)}function YI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function XI(t,e,n,r){if(e===null||typeof e>"u"||YI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ft(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var _t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_t[t]=new Ft(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];_t[e]=new Ft(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){_t[t]=new Ft(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_t[t]=new Ft(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_t[t]=new Ft(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){_t[t]=new Ft(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){_t[t]=new Ft(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){_t[t]=new Ft(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){_t[t]=new Ft(t,5,!1,t.toLowerCase(),null,!1,!1)});var Fp=/[\-:]([a-z])/g;function zp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Fp,zp);_t[e]=new Ft(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Fp,zp);_t[e]=new Ft(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Fp,zp);_t[e]=new Ft(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){_t[t]=new Ft(t,1,!1,t.toLowerCase(),null,!1,!1)});_t.xlinkHref=new Ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){_t[t]=new Ft(t,1,!1,t.toLowerCase(),null,!0,!0)});function $p(t,e,n,r){var i=_t.hasOwnProperty(e)?_t[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(XI(e,n,i,r)&&(n=null),r||i===null?QI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Dr=GI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bu=Symbol.for("react.element"),Zs=Symbol.for("react.portal"),eo=Symbol.for("react.fragment"),Bp=Symbol.for("react.strict_mode"),hf=Symbol.for("react.profiler"),Y0=Symbol.for("react.provider"),X0=Symbol.for("react.context"),Wp=Symbol.for("react.forward_ref"),ff=Symbol.for("react.suspense"),pf=Symbol.for("react.suspense_list"),Hp=Symbol.for("react.memo"),ei=Symbol.for("react.lazy"),J0=Symbol.for("react.offscreen"),_y=Symbol.iterator;function Ea(t){return t===null||typeof t!="object"?null:(t=_y&&t[_y]||t["@@iterator"],typeof t=="function"?t:null)}var $e=Object.assign,ph;function Oa(t){if(ph===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ph=e&&e[1]||""}return`
`+ph+t}var mh=!1;function gh(t,e){if(!t||mh)return"";mh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{mh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Oa(t):""}function JI(t){switch(t.tag){case 5:return Oa(t.type);case 16:return Oa("Lazy");case 13:return Oa("Suspense");case 19:return Oa("SuspenseList");case 0:case 2:case 15:return t=gh(t.type,!1),t;case 11:return t=gh(t.type.render,!1),t;case 1:return t=gh(t.type,!0),t;default:return""}}function mf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case eo:return"Fragment";case Zs:return"Portal";case hf:return"Profiler";case Bp:return"StrictMode";case ff:return"Suspense";case pf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case X0:return(t.displayName||"Context")+".Consumer";case Y0:return(t._context.displayName||"Context")+".Provider";case Wp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Hp:return e=t.displayName||null,e!==null?e:mf(t.type)||"Memo";case ei:e=t._payload,t=t._init;try{return mf(t(e))}catch{}}return null}function ZI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mf(e);case 8:return e===Bp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ai(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Z0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function eS(t){var e=Z0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ru(t){t._valueTracker||(t._valueTracker=eS(t))}function ew(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Z0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Tc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function gf(t,e){var n=e.checked;return $e({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function wy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ai(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function tw(t,e){e=e.checked,e!=null&&$p(t,"checked",e,!1)}function yf(t,e){tw(t,e);var n=Ai(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?vf(t,e.type,n):e.hasOwnProperty("defaultValue")&&vf(t,e.type,Ai(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function xy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function vf(t,e,n){(e!=="number"||Tc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ja=Array.isArray;function mo(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ai(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function _f(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(W(91));return $e({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ey(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(W(92));if(ja(n)){if(1<n.length)throw Error(W(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ai(n)}}function nw(t,e){var n=Ai(e.value),r=Ai(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ty(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function rw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?rw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Cu,iw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Cu=Cu||document.createElement("div"),Cu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Cu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function al(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var qa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tS=["Webkit","ms","Moz","O"];Object.keys(qa).forEach(function(t){tS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),qa[e]=qa[t]})});function sw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||qa.hasOwnProperty(t)&&qa[t]?(""+e).trim():e+"px"}function ow(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=sw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var nS=$e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xf(t,e){if(e){if(nS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(W(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(W(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(W(61))}if(e.style!=null&&typeof e.style!="object")throw Error(W(62))}}function Ef(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tf=null;function qp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var If=null,go=null,yo=null;function Iy(t){if(t=zl(t)){if(typeof If!="function")throw Error(W(280));var e=t.stateNode;e&&(e=xd(e),If(t.stateNode,t.type,e))}}function aw(t){go?yo?yo.push(t):yo=[t]:go=t}function lw(){if(go){var t=go,e=yo;if(yo=go=null,Iy(t),e)for(t=0;t<e.length;t++)Iy(e[t])}}function uw(t,e){return t(e)}function cw(){}var yh=!1;function dw(t,e,n){if(yh)return t(e,n);yh=!0;try{return uw(t,e,n)}finally{yh=!1,(go!==null||yo!==null)&&(cw(),lw())}}function ll(t,e){var n=t.stateNode;if(n===null)return null;var r=xd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(W(231,e,typeof n));return n}var Sf=!1;if(Sr)try{var Ta={};Object.defineProperty(Ta,"passive",{get:function(){Sf=!0}}),window.addEventListener("test",Ta,Ta),window.removeEventListener("test",Ta,Ta)}catch{Sf=!1}function rS(t,e,n,r,i,s,o,a,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(f){this.onError(f)}}var Ga=!1,Ic=null,Sc=!1,Af=null,iS={onError:function(t){Ga=!0,Ic=t}};function sS(t,e,n,r,i,s,o,a,u){Ga=!1,Ic=null,rS.apply(iS,arguments)}function oS(t,e,n,r,i,s,o,a,u){if(sS.apply(this,arguments),Ga){if(Ga){var d=Ic;Ga=!1,Ic=null}else throw Error(W(198));Sc||(Sc=!0,Af=d)}}function Ts(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function hw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Sy(t){if(Ts(t)!==t)throw Error(W(188))}function aS(t){var e=t.alternate;if(!e){if(e=Ts(t),e===null)throw Error(W(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Sy(i),t;if(s===r)return Sy(i),e;s=s.sibling}throw Error(W(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(W(189))}}if(n.alternate!==r)throw Error(W(190))}if(n.tag!==3)throw Error(W(188));return n.stateNode.current===n?t:e}function fw(t){return t=aS(t),t!==null?pw(t):null}function pw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=pw(t);if(e!==null)return e;t=t.sibling}return null}var mw=an.unstable_scheduleCallback,Ay=an.unstable_cancelCallback,lS=an.unstable_shouldYield,uS=an.unstable_requestPaint,Ye=an.unstable_now,cS=an.unstable_getCurrentPriorityLevel,Gp=an.unstable_ImmediatePriority,gw=an.unstable_UserBlockingPriority,Ac=an.unstable_NormalPriority,dS=an.unstable_LowPriority,yw=an.unstable_IdlePriority,yd=null,Gn=null;function hS(t){if(Gn&&typeof Gn.onCommitFiberRoot=="function")try{Gn.onCommitFiberRoot(yd,t,void 0,(t.current.flags&128)===128)}catch{}}var Pn=Math.clz32?Math.clz32:mS,fS=Math.log,pS=Math.LN2;function mS(t){return t>>>=0,t===0?32:31-(fS(t)/pS|0)|0}var Pu=64,Nu=4194304;function Ma(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function kc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ma(a):(s&=o,s!==0&&(r=Ma(s)))}else o=n&~i,o!==0?r=Ma(o):s!==0&&(r=Ma(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Pn(e),i=1<<n,r|=t[n],e&=~i;return r}function gS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Pn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=gS(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function kf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function vw(){var t=Pu;return Pu<<=1,!(Pu&4194240)&&(Pu=64),t}function vh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ul(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Pn(e),t[e]=n}function vS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Pn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Kp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Pn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ee=0;function _w(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ww,Qp,xw,Ew,Tw,bf=!1,Du=[],hi=null,fi=null,pi=null,ul=new Map,cl=new Map,ni=[],_S="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ky(t,e){switch(t){case"focusin":case"focusout":hi=null;break;case"dragenter":case"dragleave":fi=null;break;case"mouseover":case"mouseout":pi=null;break;case"pointerover":case"pointerout":ul.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":cl.delete(e.pointerId)}}function Ia(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=zl(e),e!==null&&Qp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function wS(t,e,n,r,i){switch(e){case"focusin":return hi=Ia(hi,t,e,n,r,i),!0;case"dragenter":return fi=Ia(fi,t,e,n,r,i),!0;case"mouseover":return pi=Ia(pi,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ul.set(s,Ia(ul.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,cl.set(s,Ia(cl.get(s)||null,t,e,n,r,i)),!0}return!1}function Iw(t){var e=rs(t.target);if(e!==null){var n=Ts(e);if(n!==null){if(e=n.tag,e===13){if(e=hw(n),e!==null){t.blockedOn=e,Tw(t.priority,function(){xw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function tc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Rf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Tf=r,n.target.dispatchEvent(r),Tf=null}else return e=zl(n),e!==null&&Qp(e),t.blockedOn=n,!1;e.shift()}return!0}function by(t,e,n){tc(t)&&n.delete(e)}function xS(){bf=!1,hi!==null&&tc(hi)&&(hi=null),fi!==null&&tc(fi)&&(fi=null),pi!==null&&tc(pi)&&(pi=null),ul.forEach(by),cl.forEach(by)}function Sa(t,e){t.blockedOn===e&&(t.blockedOn=null,bf||(bf=!0,an.unstable_scheduleCallback(an.unstable_NormalPriority,xS)))}function dl(t){function e(i){return Sa(i,t)}if(0<Du.length){Sa(Du[0],t);for(var n=1;n<Du.length;n++){var r=Du[n];r.blockedOn===t&&(r.blockedOn=null)}}for(hi!==null&&Sa(hi,t),fi!==null&&Sa(fi,t),pi!==null&&Sa(pi,t),ul.forEach(e),cl.forEach(e),n=0;n<ni.length;n++)r=ni[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ni.length&&(n=ni[0],n.blockedOn===null);)Iw(n),n.blockedOn===null&&ni.shift()}var vo=Dr.ReactCurrentBatchConfig,bc=!0;function ES(t,e,n,r){var i=Ee,s=vo.transition;vo.transition=null;try{Ee=1,Yp(t,e,n,r)}finally{Ee=i,vo.transition=s}}function TS(t,e,n,r){var i=Ee,s=vo.transition;vo.transition=null;try{Ee=4,Yp(t,e,n,r)}finally{Ee=i,vo.transition=s}}function Yp(t,e,n,r){if(bc){var i=Rf(t,e,n,r);if(i===null)bh(t,e,r,Rc,n),ky(t,r);else if(wS(i,t,e,n,r))r.stopPropagation();else if(ky(t,r),e&4&&-1<_S.indexOf(t)){for(;i!==null;){var s=zl(i);if(s!==null&&ww(s),s=Rf(t,e,n,r),s===null&&bh(t,e,r,Rc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else bh(t,e,r,null,n)}}var Rc=null;function Rf(t,e,n,r){if(Rc=null,t=qp(r),t=rs(t),t!==null)if(e=Ts(t),e===null)t=null;else if(n=e.tag,n===13){if(t=hw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Rc=t,null}function Sw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cS()){case Gp:return 1;case gw:return 4;case Ac:case dS:return 16;case yw:return 536870912;default:return 16}default:return 16}}var li=null,Xp=null,nc=null;function Aw(){if(nc)return nc;var t,e=Xp,n=e.length,r,i="value"in li?li.value:li.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return nc=i.slice(t,1<r?1-r:void 0)}function rc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Lu(){return!0}function Ry(){return!1}function un(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Lu:Ry,this.isPropagationStopped=Ry,this}return $e(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Lu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Lu)},persist:function(){},isPersistent:Lu}),e}var Wo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jp=un(Wo),Fl=$e({},Wo,{view:0,detail:0}),IS=un(Fl),_h,wh,Aa,vd=$e({},Fl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Aa&&(Aa&&t.type==="mousemove"?(_h=t.screenX-Aa.screenX,wh=t.screenY-Aa.screenY):wh=_h=0,Aa=t),_h)},movementY:function(t){return"movementY"in t?t.movementY:wh}}),Cy=un(vd),SS=$e({},vd,{dataTransfer:0}),AS=un(SS),kS=$e({},Fl,{relatedTarget:0}),xh=un(kS),bS=$e({},Wo,{animationName:0,elapsedTime:0,pseudoElement:0}),RS=un(bS),CS=$e({},Wo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),PS=un(CS),NS=$e({},Wo,{data:0}),Py=un(NS),DS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},LS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},OS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=OS[t])?!!e[t]:!1}function Zp(){return jS}var MS=$e({},Fl,{key:function(t){if(t.key){var e=DS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=rc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?LS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zp,charCode:function(t){return t.type==="keypress"?rc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?rc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),VS=un(MS),US=$e({},vd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ny=un(US),FS=$e({},Fl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zp}),zS=un(FS),$S=$e({},Wo,{propertyName:0,elapsedTime:0,pseudoElement:0}),BS=un($S),WS=$e({},vd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),HS=un(WS),qS=[9,13,27,32],em=Sr&&"CompositionEvent"in window,Ka=null;Sr&&"documentMode"in document&&(Ka=document.documentMode);var GS=Sr&&"TextEvent"in window&&!Ka,kw=Sr&&(!em||Ka&&8<Ka&&11>=Ka),Dy=" ",Ly=!1;function bw(t,e){switch(t){case"keyup":return qS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var to=!1;function KS(t,e){switch(t){case"compositionend":return Rw(e);case"keypress":return e.which!==32?null:(Ly=!0,Dy);case"textInput":return t=e.data,t===Dy&&Ly?null:t;default:return null}}function QS(t,e){if(to)return t==="compositionend"||!em&&bw(t,e)?(t=Aw(),nc=Xp=li=null,to=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return kw&&e.locale!=="ko"?null:e.data;default:return null}}var YS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Oy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!YS[t.type]:e==="textarea"}function Cw(t,e,n,r){aw(r),e=Cc(e,"onChange"),0<e.length&&(n=new Jp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Qa=null,hl=null;function XS(t){zw(t,0)}function _d(t){var e=io(t);if(ew(e))return t}function JS(t,e){if(t==="change")return e}var Pw=!1;if(Sr){var Eh;if(Sr){var Th="oninput"in document;if(!Th){var jy=document.createElement("div");jy.setAttribute("oninput","return;"),Th=typeof jy.oninput=="function"}Eh=Th}else Eh=!1;Pw=Eh&&(!document.documentMode||9<document.documentMode)}function My(){Qa&&(Qa.detachEvent("onpropertychange",Nw),hl=Qa=null)}function Nw(t){if(t.propertyName==="value"&&_d(hl)){var e=[];Cw(e,hl,t,qp(t)),dw(XS,e)}}function ZS(t,e,n){t==="focusin"?(My(),Qa=e,hl=n,Qa.attachEvent("onpropertychange",Nw)):t==="focusout"&&My()}function eA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _d(hl)}function tA(t,e){if(t==="click")return _d(e)}function nA(t,e){if(t==="input"||t==="change")return _d(e)}function rA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Dn=typeof Object.is=="function"?Object.is:rA;function fl(t,e){if(Dn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!df.call(e,i)||!Dn(t[i],e[i]))return!1}return!0}function Vy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Uy(t,e){var n=Vy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vy(n)}}function Dw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Dw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Lw(){for(var t=window,e=Tc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Tc(t.document)}return e}function tm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function iA(t){var e=Lw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Dw(n.ownerDocument.documentElement,n)){if(r!==null&&tm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Uy(n,s);var o=Uy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var sA=Sr&&"documentMode"in document&&11>=document.documentMode,no=null,Cf=null,Ya=null,Pf=!1;function Fy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pf||no==null||no!==Tc(r)||(r=no,"selectionStart"in r&&tm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ya&&fl(Ya,r)||(Ya=r,r=Cc(Cf,"onSelect"),0<r.length&&(e=new Jp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=no)))}function Ou(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ro={animationend:Ou("Animation","AnimationEnd"),animationiteration:Ou("Animation","AnimationIteration"),animationstart:Ou("Animation","AnimationStart"),transitionend:Ou("Transition","TransitionEnd")},Ih={},Ow={};Sr&&(Ow=document.createElement("div").style,"AnimationEvent"in window||(delete ro.animationend.animation,delete ro.animationiteration.animation,delete ro.animationstart.animation),"TransitionEvent"in window||delete ro.transitionend.transition);function wd(t){if(Ih[t])return Ih[t];if(!ro[t])return t;var e=ro[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ow)return Ih[t]=e[n];return t}var jw=wd("animationend"),Mw=wd("animationiteration"),Vw=wd("animationstart"),Uw=wd("transitionend"),Fw=new Map,zy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ni(t,e){Fw.set(t,e),Es(e,[t])}for(var Sh=0;Sh<zy.length;Sh++){var Ah=zy[Sh],oA=Ah.toLowerCase(),aA=Ah[0].toUpperCase()+Ah.slice(1);Ni(oA,"on"+aA)}Ni(jw,"onAnimationEnd");Ni(Mw,"onAnimationIteration");Ni(Vw,"onAnimationStart");Ni("dblclick","onDoubleClick");Ni("focusin","onFocus");Ni("focusout","onBlur");Ni(Uw,"onTransitionEnd");Ao("onMouseEnter",["mouseout","mouseover"]);Ao("onMouseLeave",["mouseout","mouseover"]);Ao("onPointerEnter",["pointerout","pointerover"]);Ao("onPointerLeave",["pointerout","pointerover"]);Es("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Es("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Es("onBeforeInput",["compositionend","keypress","textInput","paste"]);Es("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Es("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Es("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Va="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lA=new Set("cancel close invalid load scroll toggle".split(" ").concat(Va));function $y(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,oS(r,e,void 0,t),t.currentTarget=null}function zw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,d=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;$y(i,a,d),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,d=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;$y(i,a,d),s=u}}}if(Sc)throw t=Af,Sc=!1,Af=null,t}function Pe(t,e){var n=e[jf];n===void 0&&(n=e[jf]=new Set);var r=t+"__bubble";n.has(r)||($w(e,t,2,!1),n.add(r))}function kh(t,e,n){var r=0;e&&(r|=4),$w(n,t,r,e)}var ju="_reactListening"+Math.random().toString(36).slice(2);function pl(t){if(!t[ju]){t[ju]=!0,Q0.forEach(function(n){n!=="selectionchange"&&(lA.has(n)||kh(n,!1,t),kh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ju]||(e[ju]=!0,kh("selectionchange",!1,e))}}function $w(t,e,n,r){switch(Sw(e)){case 1:var i=ES;break;case 4:i=TS;break;default:i=Yp}n=i.bind(null,e,n,t),i=void 0,!Sf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function bh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=rs(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}dw(function(){var d=s,f=qp(n),m=[];e:{var g=Fw.get(t);if(g!==void 0){var I=Jp,C=t;switch(t){case"keypress":if(rc(n)===0)break e;case"keydown":case"keyup":I=VS;break;case"focusin":C="focus",I=xh;break;case"focusout":C="blur",I=xh;break;case"beforeblur":case"afterblur":I=xh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Cy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=AS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=zS;break;case jw:case Mw:case Vw:I=RS;break;case Uw:I=BS;break;case"scroll":I=IS;break;case"wheel":I=HS;break;case"copy":case"cut":case"paste":I=PS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Ny}var k=(e&4)!==0,P=!k&&t==="scroll",E=k?g!==null?g+"Capture":null:g;k=[];for(var _=d,S;_!==null;){S=_;var O=S.stateNode;if(S.tag===5&&O!==null&&(S=O,E!==null&&(O=ll(_,E),O!=null&&k.push(ml(_,O,S)))),P)break;_=_.return}0<k.length&&(g=new I(g,C,null,n,f),m.push({event:g,listeners:k}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",g&&n!==Tf&&(C=n.relatedTarget||n.fromElement)&&(rs(C)||C[Ar]))break e;if((I||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,I?(C=n.relatedTarget||n.toElement,I=d,C=C?rs(C):null,C!==null&&(P=Ts(C),C!==P||C.tag!==5&&C.tag!==6)&&(C=null)):(I=null,C=d),I!==C)){if(k=Cy,O="onMouseLeave",E="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(k=Ny,O="onPointerLeave",E="onPointerEnter",_="pointer"),P=I==null?g:io(I),S=C==null?g:io(C),g=new k(O,_+"leave",I,n,f),g.target=P,g.relatedTarget=S,O=null,rs(f)===d&&(k=new k(E,_+"enter",C,n,f),k.target=S,k.relatedTarget=P,O=k),P=O,I&&C)t:{for(k=I,E=C,_=0,S=k;S;S=Ks(S))_++;for(S=0,O=E;O;O=Ks(O))S++;for(;0<_-S;)k=Ks(k),_--;for(;0<S-_;)E=Ks(E),S--;for(;_--;){if(k===E||E!==null&&k===E.alternate)break t;k=Ks(k),E=Ks(E)}k=null}else k=null;I!==null&&By(m,g,I,k,!1),C!==null&&P!==null&&By(m,P,C,k,!0)}}e:{if(g=d?io(d):window,I=g.nodeName&&g.nodeName.toLowerCase(),I==="select"||I==="input"&&g.type==="file")var j=JS;else if(Oy(g))if(Pw)j=nA;else{j=eA;var D=ZS}else(I=g.nodeName)&&I.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=tA);if(j&&(j=j(t,d))){Cw(m,j,n,f);break e}D&&D(t,g,d),t==="focusout"&&(D=g._wrapperState)&&D.controlled&&g.type==="number"&&vf(g,"number",g.value)}switch(D=d?io(d):window,t){case"focusin":(Oy(D)||D.contentEditable==="true")&&(no=D,Cf=d,Ya=null);break;case"focusout":Ya=Cf=no=null;break;case"mousedown":Pf=!0;break;case"contextmenu":case"mouseup":case"dragend":Pf=!1,Fy(m,n,f);break;case"selectionchange":if(sA)break;case"keydown":case"keyup":Fy(m,n,f)}var x;if(em)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else to?bw(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(kw&&n.locale!=="ko"&&(to||y!=="onCompositionStart"?y==="onCompositionEnd"&&to&&(x=Aw()):(li=f,Xp="value"in li?li.value:li.textContent,to=!0)),D=Cc(d,y),0<D.length&&(y=new Py(y,t,null,n,f),m.push({event:y,listeners:D}),x?y.data=x:(x=Rw(n),x!==null&&(y.data=x)))),(x=GS?KS(t,n):QS(t,n))&&(d=Cc(d,"onBeforeInput"),0<d.length&&(f=new Py("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:d}),f.data=x))}zw(m,e)})}function ml(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Cc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ll(t,n),s!=null&&r.unshift(ml(t,s,i)),s=ll(t,e),s!=null&&r.push(ml(t,s,i))),t=t.return}return r}function Ks(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function By(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,d=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&d!==null&&(a=d,i?(u=ll(n,s),u!=null&&o.unshift(ml(n,u,a))):i||(u=ll(n,s),u!=null&&o.push(ml(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var uA=/\r\n?/g,cA=/\u0000|\uFFFD/g;function Wy(t){return(typeof t=="string"?t:""+t).replace(uA,`
`).replace(cA,"")}function Mu(t,e,n){if(e=Wy(e),Wy(t)!==e&&n)throw Error(W(425))}function Pc(){}var Nf=null,Df=null;function Lf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Of=typeof setTimeout=="function"?setTimeout:void 0,dA=typeof clearTimeout=="function"?clearTimeout:void 0,Hy=typeof Promise=="function"?Promise:void 0,hA=typeof queueMicrotask=="function"?queueMicrotask:typeof Hy<"u"?function(t){return Hy.resolve(null).then(t).catch(fA)}:Of;function fA(t){setTimeout(function(){throw t})}function Rh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),dl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);dl(e)}function mi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function qy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ho=Math.random().toString(36).slice(2),Wn="__reactFiber$"+Ho,gl="__reactProps$"+Ho,Ar="__reactContainer$"+Ho,jf="__reactEvents$"+Ho,pA="__reactListeners$"+Ho,mA="__reactHandles$"+Ho;function rs(t){var e=t[Wn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ar]||n[Wn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=qy(t);t!==null;){if(n=t[Wn])return n;t=qy(t)}return e}t=n,n=t.parentNode}return null}function zl(t){return t=t[Wn]||t[Ar],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function io(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(W(33))}function xd(t){return t[gl]||null}var Mf=[],so=-1;function Di(t){return{current:t}}function Le(t){0>so||(t.current=Mf[so],Mf[so]=null,so--)}function Re(t,e){so++,Mf[so]=t.current,t.current=e}var ki={},Pt=Di(ki),Kt=Di(!1),ds=ki;function ko(t,e){var n=t.type.contextTypes;if(!n)return ki;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Qt(t){return t=t.childContextTypes,t!=null}function Nc(){Le(Kt),Le(Pt)}function Gy(t,e,n){if(Pt.current!==ki)throw Error(W(168));Re(Pt,e),Re(Kt,n)}function Bw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(W(108,ZI(t)||"Unknown",i));return $e({},n,r)}function Dc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ki,ds=Pt.current,Re(Pt,t),Re(Kt,Kt.current),!0}function Ky(t,e,n){var r=t.stateNode;if(!r)throw Error(W(169));n?(t=Bw(t,e,ds),r.__reactInternalMemoizedMergedChildContext=t,Le(Kt),Le(Pt),Re(Pt,t)):Le(Kt),Re(Kt,n)}var gr=null,Ed=!1,Ch=!1;function Ww(t){gr===null?gr=[t]:gr.push(t)}function gA(t){Ed=!0,Ww(t)}function Li(){if(!Ch&&gr!==null){Ch=!0;var t=0,e=Ee;try{var n=gr;for(Ee=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}gr=null,Ed=!1}catch(i){throw gr!==null&&(gr=gr.slice(t+1)),mw(Gp,Li),i}finally{Ee=e,Ch=!1}}return null}var oo=[],ao=0,Lc=null,Oc=0,mn=[],gn=0,hs=null,yr=1,vr="";function Zi(t,e){oo[ao++]=Oc,oo[ao++]=Lc,Lc=t,Oc=e}function Hw(t,e,n){mn[gn++]=yr,mn[gn++]=vr,mn[gn++]=hs,hs=t;var r=yr;t=vr;var i=32-Pn(r)-1;r&=~(1<<i),n+=1;var s=32-Pn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,yr=1<<32-Pn(e)+i|n<<i|r,vr=s+t}else yr=1<<s|n<<i|r,vr=t}function nm(t){t.return!==null&&(Zi(t,1),Hw(t,1,0))}function rm(t){for(;t===Lc;)Lc=oo[--ao],oo[ao]=null,Oc=oo[--ao],oo[ao]=null;for(;t===hs;)hs=mn[--gn],mn[gn]=null,vr=mn[--gn],mn[gn]=null,yr=mn[--gn],mn[gn]=null}var on=null,rn=null,je=!1,Cn=null;function qw(t,e){var n=yn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Qy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,on=t,rn=mi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,on=t,rn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=hs!==null?{id:yr,overflow:vr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=yn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,on=t,rn=null,!0):!1;default:return!1}}function Vf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Uf(t){if(je){var e=rn;if(e){var n=e;if(!Qy(t,e)){if(Vf(t))throw Error(W(418));e=mi(n.nextSibling);var r=on;e&&Qy(t,e)?qw(r,n):(t.flags=t.flags&-4097|2,je=!1,on=t)}}else{if(Vf(t))throw Error(W(418));t.flags=t.flags&-4097|2,je=!1,on=t}}}function Yy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;on=t}function Vu(t){if(t!==on)return!1;if(!je)return Yy(t),je=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Lf(t.type,t.memoizedProps)),e&&(e=rn)){if(Vf(t))throw Gw(),Error(W(418));for(;e;)qw(t,e),e=mi(e.nextSibling)}if(Yy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(W(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){rn=mi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}rn=null}}else rn=on?mi(t.stateNode.nextSibling):null;return!0}function Gw(){for(var t=rn;t;)t=mi(t.nextSibling)}function bo(){rn=on=null,je=!1}function im(t){Cn===null?Cn=[t]:Cn.push(t)}var yA=Dr.ReactCurrentBatchConfig;function ka(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(W(309));var r=n.stateNode}if(!r)throw Error(W(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(W(284));if(!n._owner)throw Error(W(290,t))}return t}function Uu(t,e){throw t=Object.prototype.toString.call(e),Error(W(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Xy(t){var e=t._init;return e(t._payload)}function Kw(t){function e(E,_){if(t){var S=E.deletions;S===null?(E.deletions=[_],E.flags|=16):S.push(_)}}function n(E,_){if(!t)return null;for(;_!==null;)e(E,_),_=_.sibling;return null}function r(E,_){for(E=new Map;_!==null;)_.key!==null?E.set(_.key,_):E.set(_.index,_),_=_.sibling;return E}function i(E,_){return E=_i(E,_),E.index=0,E.sibling=null,E}function s(E,_,S){return E.index=S,t?(S=E.alternate,S!==null?(S=S.index,S<_?(E.flags|=2,_):S):(E.flags|=2,_)):(E.flags|=1048576,_)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function a(E,_,S,O){return _===null||_.tag!==6?(_=Mh(S,E.mode,O),_.return=E,_):(_=i(_,S),_.return=E,_)}function u(E,_,S,O){var j=S.type;return j===eo?f(E,_,S.props.children,O,S.key):_!==null&&(_.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===ei&&Xy(j)===_.type)?(O=i(_,S.props),O.ref=ka(E,_,S),O.return=E,O):(O=cc(S.type,S.key,S.props,null,E.mode,O),O.ref=ka(E,_,S),O.return=E,O)}function d(E,_,S,O){return _===null||_.tag!==4||_.stateNode.containerInfo!==S.containerInfo||_.stateNode.implementation!==S.implementation?(_=Vh(S,E.mode,O),_.return=E,_):(_=i(_,S.children||[]),_.return=E,_)}function f(E,_,S,O,j){return _===null||_.tag!==7?(_=us(S,E.mode,O,j),_.return=E,_):(_=i(_,S),_.return=E,_)}function m(E,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Mh(""+_,E.mode,S),_.return=E,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case bu:return S=cc(_.type,_.key,_.props,null,E.mode,S),S.ref=ka(E,null,_),S.return=E,S;case Zs:return _=Vh(_,E.mode,S),_.return=E,_;case ei:var O=_._init;return m(E,O(_._payload),S)}if(ja(_)||Ea(_))return _=us(_,E.mode,S,null),_.return=E,_;Uu(E,_)}return null}function g(E,_,S,O){var j=_!==null?_.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return j!==null?null:a(E,_,""+S,O);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case bu:return S.key===j?u(E,_,S,O):null;case Zs:return S.key===j?d(E,_,S,O):null;case ei:return j=S._init,g(E,_,j(S._payload),O)}if(ja(S)||Ea(S))return j!==null?null:f(E,_,S,O,null);Uu(E,S)}return null}function I(E,_,S,O,j){if(typeof O=="string"&&O!==""||typeof O=="number")return E=E.get(S)||null,a(_,E,""+O,j);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case bu:return E=E.get(O.key===null?S:O.key)||null,u(_,E,O,j);case Zs:return E=E.get(O.key===null?S:O.key)||null,d(_,E,O,j);case ei:var D=O._init;return I(E,_,S,D(O._payload),j)}if(ja(O)||Ea(O))return E=E.get(S)||null,f(_,E,O,j,null);Uu(_,O)}return null}function C(E,_,S,O){for(var j=null,D=null,x=_,y=_=0,T=null;x!==null&&y<S.length;y++){x.index>y?(T=x,x=null):T=x.sibling;var A=g(E,x,S[y],O);if(A===null){x===null&&(x=T);break}t&&x&&A.alternate===null&&e(E,x),_=s(A,_,y),D===null?j=A:D.sibling=A,D=A,x=T}if(y===S.length)return n(E,x),je&&Zi(E,y),j;if(x===null){for(;y<S.length;y++)x=m(E,S[y],O),x!==null&&(_=s(x,_,y),D===null?j=x:D.sibling=x,D=x);return je&&Zi(E,y),j}for(x=r(E,x);y<S.length;y++)T=I(x,E,y,S[y],O),T!==null&&(t&&T.alternate!==null&&x.delete(T.key===null?y:T.key),_=s(T,_,y),D===null?j=T:D.sibling=T,D=T);return t&&x.forEach(function(N){return e(E,N)}),je&&Zi(E,y),j}function k(E,_,S,O){var j=Ea(S);if(typeof j!="function")throw Error(W(150));if(S=j.call(S),S==null)throw Error(W(151));for(var D=j=null,x=_,y=_=0,T=null,A=S.next();x!==null&&!A.done;y++,A=S.next()){x.index>y?(T=x,x=null):T=x.sibling;var N=g(E,x,A.value,O);if(N===null){x===null&&(x=T);break}t&&x&&N.alternate===null&&e(E,x),_=s(N,_,y),D===null?j=N:D.sibling=N,D=N,x=T}if(A.done)return n(E,x),je&&Zi(E,y),j;if(x===null){for(;!A.done;y++,A=S.next())A=m(E,A.value,O),A!==null&&(_=s(A,_,y),D===null?j=A:D.sibling=A,D=A);return je&&Zi(E,y),j}for(x=r(E,x);!A.done;y++,A=S.next())A=I(x,E,y,A.value,O),A!==null&&(t&&A.alternate!==null&&x.delete(A.key===null?y:A.key),_=s(A,_,y),D===null?j=A:D.sibling=A,D=A);return t&&x.forEach(function(M){return e(E,M)}),je&&Zi(E,y),j}function P(E,_,S,O){if(typeof S=="object"&&S!==null&&S.type===eo&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case bu:e:{for(var j=S.key,D=_;D!==null;){if(D.key===j){if(j=S.type,j===eo){if(D.tag===7){n(E,D.sibling),_=i(D,S.props.children),_.return=E,E=_;break e}}else if(D.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===ei&&Xy(j)===D.type){n(E,D.sibling),_=i(D,S.props),_.ref=ka(E,D,S),_.return=E,E=_;break e}n(E,D);break}else e(E,D);D=D.sibling}S.type===eo?(_=us(S.props.children,E.mode,O,S.key),_.return=E,E=_):(O=cc(S.type,S.key,S.props,null,E.mode,O),O.ref=ka(E,_,S),O.return=E,E=O)}return o(E);case Zs:e:{for(D=S.key;_!==null;){if(_.key===D)if(_.tag===4&&_.stateNode.containerInfo===S.containerInfo&&_.stateNode.implementation===S.implementation){n(E,_.sibling),_=i(_,S.children||[]),_.return=E,E=_;break e}else{n(E,_);break}else e(E,_);_=_.sibling}_=Vh(S,E.mode,O),_.return=E,E=_}return o(E);case ei:return D=S._init,P(E,_,D(S._payload),O)}if(ja(S))return C(E,_,S,O);if(Ea(S))return k(E,_,S,O);Uu(E,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,_!==null&&_.tag===6?(n(E,_.sibling),_=i(_,S),_.return=E,E=_):(n(E,_),_=Mh(S,E.mode,O),_.return=E,E=_),o(E)):n(E,_)}return P}var Ro=Kw(!0),Qw=Kw(!1),jc=Di(null),Mc=null,lo=null,sm=null;function om(){sm=lo=Mc=null}function am(t){var e=jc.current;Le(jc),t._currentValue=e}function Ff(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function _o(t,e){Mc=t,sm=lo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Gt=!0),t.firstContext=null)}function _n(t){var e=t._currentValue;if(sm!==t)if(t={context:t,memoizedValue:e,next:null},lo===null){if(Mc===null)throw Error(W(308));lo=t,Mc.dependencies={lanes:0,firstContext:t}}else lo=lo.next=t;return e}var is=null;function lm(t){is===null?is=[t]:is.push(t)}function Yw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,lm(e)):(n.next=i.next,i.next=n),e.interleaved=n,kr(t,r)}function kr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ti=!1;function um(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Er(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function gi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ye&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,kr(t,n)}return i=r.interleaved,i===null?(e.next=e,lm(r)):(e.next=i.next,i.next=e),r.interleaved=e,kr(t,n)}function ic(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Kp(t,n)}}function Jy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Vc(t,e,n,r){var i=t.updateQueue;ti=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,d=u.next;u.next=null,o===null?s=d:o.next=d,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=d:a.next=d,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,f=d=u=null,a=s;do{var g=a.lane,I=a.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:I,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var C=t,k=a;switch(g=e,I=n,k.tag){case 1:if(C=k.payload,typeof C=="function"){m=C.call(I,m,g);break e}m=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=k.payload,g=typeof C=="function"?C.call(I,m,g):C,g==null)break e;m=$e({},m,g);break e;case 2:ti=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else I={eventTime:I,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(d=f=I,u=m):f=f.next=I,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ps|=o,t.lanes=o,t.memoizedState=m}}function Zy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(W(191,i));i.call(r)}}}var $l={},Kn=Di($l),yl=Di($l),vl=Di($l);function ss(t){if(t===$l)throw Error(W(174));return t}function cm(t,e){switch(Re(vl,e),Re(yl,t),Re(Kn,$l),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:wf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=wf(e,t)}Le(Kn),Re(Kn,e)}function Co(){Le(Kn),Le(yl),Le(vl)}function Jw(t){ss(vl.current);var e=ss(Kn.current),n=wf(e,t.type);e!==n&&(Re(yl,t),Re(Kn,n))}function dm(t){yl.current===t&&(Le(Kn),Le(yl))}var Ue=Di(0);function Uc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ph=[];function hm(){for(var t=0;t<Ph.length;t++)Ph[t]._workInProgressVersionPrimary=null;Ph.length=0}var sc=Dr.ReactCurrentDispatcher,Nh=Dr.ReactCurrentBatchConfig,fs=0,Fe=null,it=null,ut=null,Fc=!1,Xa=!1,_l=0,vA=0;function Tt(){throw Error(W(321))}function fm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Dn(t[n],e[n]))return!1;return!0}function pm(t,e,n,r,i,s){if(fs=s,Fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,sc.current=t===null||t.memoizedState===null?EA:TA,t=n(r,i),Xa){s=0;do{if(Xa=!1,_l=0,25<=s)throw Error(W(301));s+=1,ut=it=null,e.updateQueue=null,sc.current=IA,t=n(r,i)}while(Xa)}if(sc.current=zc,e=it!==null&&it.next!==null,fs=0,ut=it=Fe=null,Fc=!1,e)throw Error(W(300));return t}function mm(){var t=_l!==0;return _l=0,t}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ut===null?Fe.memoizedState=ut=t:ut=ut.next=t,ut}function wn(){if(it===null){var t=Fe.alternate;t=t!==null?t.memoizedState:null}else t=it.next;var e=ut===null?Fe.memoizedState:ut.next;if(e!==null)ut=e,it=t;else{if(t===null)throw Error(W(310));it=t,t={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},ut===null?Fe.memoizedState=ut=t:ut=ut.next=t}return ut}function wl(t,e){return typeof e=="function"?e(t):e}function Dh(t){var e=wn(),n=e.queue;if(n===null)throw Error(W(311));n.lastRenderedReducer=t;var r=it,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,d=s;do{var f=d.lane;if((fs&f)===f)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var m={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(a=u=m,o=r):u=u.next=m,Fe.lanes|=f,ps|=f}d=d.next}while(d!==null&&d!==s);u===null?o=r:u.next=a,Dn(r,e.memoizedState)||(Gt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Fe.lanes|=s,ps|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Lh(t){var e=wn(),n=e.queue;if(n===null)throw Error(W(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Dn(s,e.memoizedState)||(Gt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Zw(){}function ex(t,e){var n=Fe,r=wn(),i=e(),s=!Dn(r.memoizedState,i);if(s&&(r.memoizedState=i,Gt=!0),r=r.queue,gm(rx.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ut!==null&&ut.memoizedState.tag&1){if(n.flags|=2048,xl(9,nx.bind(null,n,r,i,e),void 0,null),ct===null)throw Error(W(349));fs&30||tx(n,e,i)}return i}function tx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function nx(t,e,n,r){e.value=n,e.getSnapshot=r,ix(e)&&sx(t)}function rx(t,e,n){return n(function(){ix(e)&&sx(t)})}function ix(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Dn(t,n)}catch{return!0}}function sx(t){var e=kr(t,1);e!==null&&Nn(e,t,1,-1)}function ev(t){var e=Bn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wl,lastRenderedState:t},e.queue=t,t=t.dispatch=xA.bind(null,Fe,t),[e.memoizedState,t]}function xl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ox(){return wn().memoizedState}function oc(t,e,n,r){var i=Bn();Fe.flags|=t,i.memoizedState=xl(1|e,n,void 0,r===void 0?null:r)}function Td(t,e,n,r){var i=wn();r=r===void 0?null:r;var s=void 0;if(it!==null){var o=it.memoizedState;if(s=o.destroy,r!==null&&fm(r,o.deps)){i.memoizedState=xl(e,n,s,r);return}}Fe.flags|=t,i.memoizedState=xl(1|e,n,s,r)}function tv(t,e){return oc(8390656,8,t,e)}function gm(t,e){return Td(2048,8,t,e)}function ax(t,e){return Td(4,2,t,e)}function lx(t,e){return Td(4,4,t,e)}function ux(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function cx(t,e,n){return n=n!=null?n.concat([t]):null,Td(4,4,ux.bind(null,e,t),n)}function ym(){}function dx(t,e){var n=wn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function hx(t,e){var n=wn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function fx(t,e,n){return fs&21?(Dn(n,e)||(n=vw(),Fe.lanes|=n,ps|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Gt=!0),t.memoizedState=n)}function _A(t,e){var n=Ee;Ee=n!==0&&4>n?n:4,t(!0);var r=Nh.transition;Nh.transition={};try{t(!1),e()}finally{Ee=n,Nh.transition=r}}function px(){return wn().memoizedState}function wA(t,e,n){var r=vi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},mx(t))gx(e,n);else if(n=Yw(t,e,n,r),n!==null){var i=jt();Nn(n,t,r,i),yx(n,e,r)}}function xA(t,e,n){var r=vi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(mx(t))gx(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Dn(a,o)){var u=e.interleaved;u===null?(i.next=i,lm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Yw(t,e,i,r),n!==null&&(i=jt(),Nn(n,t,r,i),yx(n,e,r))}}function mx(t){var e=t.alternate;return t===Fe||e!==null&&e===Fe}function gx(t,e){Xa=Fc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function yx(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Kp(t,n)}}var zc={readContext:_n,useCallback:Tt,useContext:Tt,useEffect:Tt,useImperativeHandle:Tt,useInsertionEffect:Tt,useLayoutEffect:Tt,useMemo:Tt,useReducer:Tt,useRef:Tt,useState:Tt,useDebugValue:Tt,useDeferredValue:Tt,useTransition:Tt,useMutableSource:Tt,useSyncExternalStore:Tt,useId:Tt,unstable_isNewReconciler:!1},EA={readContext:_n,useCallback:function(t,e){return Bn().memoizedState=[t,e===void 0?null:e],t},useContext:_n,useEffect:tv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,oc(4194308,4,ux.bind(null,e,t),n)},useLayoutEffect:function(t,e){return oc(4194308,4,t,e)},useInsertionEffect:function(t,e){return oc(4,2,t,e)},useMemo:function(t,e){var n=Bn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Bn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=wA.bind(null,Fe,t),[r.memoizedState,t]},useRef:function(t){var e=Bn();return t={current:t},e.memoizedState=t},useState:ev,useDebugValue:ym,useDeferredValue:function(t){return Bn().memoizedState=t},useTransition:function(){var t=ev(!1),e=t[0];return t=_A.bind(null,t[1]),Bn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Fe,i=Bn();if(je){if(n===void 0)throw Error(W(407));n=n()}else{if(n=e(),ct===null)throw Error(W(349));fs&30||tx(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,tv(rx.bind(null,r,s,t),[t]),r.flags|=2048,xl(9,nx.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Bn(),e=ct.identifierPrefix;if(je){var n=vr,r=yr;n=(r&~(1<<32-Pn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=_l++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=vA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},TA={readContext:_n,useCallback:dx,useContext:_n,useEffect:gm,useImperativeHandle:cx,useInsertionEffect:ax,useLayoutEffect:lx,useMemo:hx,useReducer:Dh,useRef:ox,useState:function(){return Dh(wl)},useDebugValue:ym,useDeferredValue:function(t){var e=wn();return fx(e,it.memoizedState,t)},useTransition:function(){var t=Dh(wl)[0],e=wn().memoizedState;return[t,e]},useMutableSource:Zw,useSyncExternalStore:ex,useId:px,unstable_isNewReconciler:!1},IA={readContext:_n,useCallback:dx,useContext:_n,useEffect:gm,useImperativeHandle:cx,useInsertionEffect:ax,useLayoutEffect:lx,useMemo:hx,useReducer:Lh,useRef:ox,useState:function(){return Lh(wl)},useDebugValue:ym,useDeferredValue:function(t){var e=wn();return it===null?e.memoizedState=t:fx(e,it.memoizedState,t)},useTransition:function(){var t=Lh(wl)[0],e=wn().memoizedState;return[t,e]},useMutableSource:Zw,useSyncExternalStore:ex,useId:px,unstable_isNewReconciler:!1};function bn(t,e){if(t&&t.defaultProps){e=$e({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function zf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:$e({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Id={isMounted:function(t){return(t=t._reactInternals)?Ts(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=jt(),i=vi(t),s=Er(r,i);s.payload=e,n!=null&&(s.callback=n),e=gi(t,s,i),e!==null&&(Nn(e,t,i,r),ic(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=jt(),i=vi(t),s=Er(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=gi(t,s,i),e!==null&&(Nn(e,t,i,r),ic(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=jt(),r=vi(t),i=Er(n,r);i.tag=2,e!=null&&(i.callback=e),e=gi(t,i,r),e!==null&&(Nn(e,t,r,n),ic(e,t,r))}};function nv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!fl(n,r)||!fl(i,s):!0}function vx(t,e,n){var r=!1,i=ki,s=e.contextType;return typeof s=="object"&&s!==null?s=_n(s):(i=Qt(e)?ds:Pt.current,r=e.contextTypes,s=(r=r!=null)?ko(t,i):ki),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Id,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function rv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Id.enqueueReplaceState(e,e.state,null)}function $f(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},um(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=_n(s):(s=Qt(e)?ds:Pt.current,i.context=ko(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(zf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Id.enqueueReplaceState(i,i.state,null),Vc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Po(t,e){try{var n="",r=e;do n+=JI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Oh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Bf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var SA=typeof WeakMap=="function"?WeakMap:Map;function _x(t,e,n){n=Er(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Bc||(Bc=!0,Zf=r),Bf(t,e)},n}function wx(t,e,n){n=Er(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Bf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Bf(t,e),typeof r!="function"&&(yi===null?yi=new Set([this]):yi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function iv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new SA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=UA.bind(null,t,e,n),e.then(t,t))}function sv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ov(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Er(-1,1),e.tag=2,gi(n,e,1))),n.lanes|=1),t)}var AA=Dr.ReactCurrentOwner,Gt=!1;function Ot(t,e,n,r){e.child=t===null?Qw(e,null,n,r):Ro(e,t.child,n,r)}function av(t,e,n,r,i){n=n.render;var s=e.ref;return _o(e,i),r=pm(t,e,n,r,s,i),n=mm(),t!==null&&!Gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,br(t,e,i)):(je&&n&&nm(e),e.flags|=1,Ot(t,e,r,i),e.child)}function lv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Sm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,xx(t,e,s,r,i)):(t=cc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:fl,n(o,r)&&t.ref===e.ref)return br(t,e,i)}return e.flags|=1,t=_i(s,r),t.ref=e.ref,t.return=e,e.child=t}function xx(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(fl(s,r)&&t.ref===e.ref)if(Gt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Gt=!0);else return e.lanes=t.lanes,br(t,e,i)}return Wf(t,e,n,r,i)}function Ex(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Re(co,nn),nn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Re(co,nn),nn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Re(co,nn),nn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Re(co,nn),nn|=r;return Ot(t,e,i,n),e.child}function Tx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Wf(t,e,n,r,i){var s=Qt(n)?ds:Pt.current;return s=ko(e,s),_o(e,i),n=pm(t,e,n,r,s,i),r=mm(),t!==null&&!Gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,br(t,e,i)):(je&&r&&nm(e),e.flags|=1,Ot(t,e,n,i),e.child)}function uv(t,e,n,r,i){if(Qt(n)){var s=!0;Dc(e)}else s=!1;if(_o(e,i),e.stateNode===null)ac(t,e),vx(e,n,r),$f(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=_n(d):(d=Qt(n)?ds:Pt.current,d=ko(e,d));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==d)&&rv(e,o,r,d),ti=!1;var g=e.memoizedState;o.state=g,Vc(e,r,o,i),u=e.memoizedState,a!==r||g!==u||Kt.current||ti?(typeof f=="function"&&(zf(e,n,f,r),u=e.memoizedState),(a=ti||nv(e,n,a,r,g,u,d))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=d,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Xw(t,e),a=e.memoizedProps,d=e.type===e.elementType?a:bn(e.type,a),o.props=d,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=_n(u):(u=Qt(n)?ds:Pt.current,u=ko(e,u));var I=n.getDerivedStateFromProps;(f=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==m||g!==u)&&rv(e,o,r,u),ti=!1,g=e.memoizedState,o.state=g,Vc(e,r,o,i);var C=e.memoizedState;a!==m||g!==C||Kt.current||ti?(typeof I=="function"&&(zf(e,n,I,r),C=e.memoizedState),(d=ti||nv(e,n,d,r,g,C,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Hf(t,e,n,r,s,i)}function Hf(t,e,n,r,i,s){Tx(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ky(e,n,!1),br(t,e,s);r=e.stateNode,AA.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ro(e,t.child,null,s),e.child=Ro(e,null,a,s)):Ot(t,e,a,s),e.memoizedState=r.state,i&&Ky(e,n,!0),e.child}function Ix(t){var e=t.stateNode;e.pendingContext?Gy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Gy(t,e.context,!1),cm(t,e.containerInfo)}function cv(t,e,n,r,i){return bo(),im(i),e.flags|=256,Ot(t,e,n,r),e.child}var qf={dehydrated:null,treeContext:null,retryLane:0};function Gf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Sx(t,e,n){var r=e.pendingProps,i=Ue.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Re(Ue,i&1),t===null)return Uf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=kd(o,r,0,null),t=us(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Gf(n),e.memoizedState=qf,t):vm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return kA(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=_i(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=_i(a,s):(s=us(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Gf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=qf,r}return s=t.child,t=s.sibling,r=_i(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function vm(t,e){return e=kd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Fu(t,e,n,r){return r!==null&&im(r),Ro(e,t.child,null,n),t=vm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function kA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Oh(Error(W(422))),Fu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=kd({mode:"visible",children:r.children},i,0,null),s=us(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ro(e,t.child,null,o),e.child.memoizedState=Gf(o),e.memoizedState=qf,s);if(!(e.mode&1))return Fu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(W(419)),r=Oh(s,r,void 0),Fu(t,e,o,r)}if(a=(o&t.childLanes)!==0,Gt||a){if(r=ct,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,kr(t,i),Nn(r,t,i,-1))}return Im(),r=Oh(Error(W(421))),Fu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=FA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,rn=mi(i.nextSibling),on=e,je=!0,Cn=null,t!==null&&(mn[gn++]=yr,mn[gn++]=vr,mn[gn++]=hs,yr=t.id,vr=t.overflow,hs=e),e=vm(e,r.children),e.flags|=4096,e)}function dv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ff(t.return,e,n)}function jh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ax(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ot(t,e,r.children,n),r=Ue.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&dv(t,n,e);else if(t.tag===19)dv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Re(Ue,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Uc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),jh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Uc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}jh(e,!0,n,null,s);break;case"together":jh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ac(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function br(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ps|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(W(153));if(e.child!==null){for(t=e.child,n=_i(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_i(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bA(t,e,n){switch(e.tag){case 3:Ix(e),bo();break;case 5:Jw(e);break;case 1:Qt(e.type)&&Dc(e);break;case 4:cm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Re(jc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Re(Ue,Ue.current&1),e.flags|=128,null):n&e.child.childLanes?Sx(t,e,n):(Re(Ue,Ue.current&1),t=br(t,e,n),t!==null?t.sibling:null);Re(Ue,Ue.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Ax(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Re(Ue,Ue.current),r)break;return null;case 22:case 23:return e.lanes=0,Ex(t,e,n)}return br(t,e,n)}var kx,Kf,bx,Rx;kx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Kf=function(){};bx=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ss(Kn.current);var s=null;switch(n){case"input":i=gf(t,i),r=gf(t,r),s=[];break;case"select":i=$e({},i,{value:void 0}),r=$e({},r,{value:void 0}),s=[];break;case"textarea":i=_f(t,i),r=_f(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Pc)}xf(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var a=i[d];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(ol.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var u=r[d];if(a=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==a&&(u!=null||a!=null))if(d==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(ol.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&Pe("scroll",t),s||a===u||(s=[])):(s=s||[]).push(d,u))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};Rx=function(t,e,n,r){n!==r&&(e.flags|=4)};function ba(t,e){if(!je)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function It(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function RA(t,e,n){var r=e.pendingProps;switch(rm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return It(e),null;case 1:return Qt(e.type)&&Nc(),It(e),null;case 3:return r=e.stateNode,Co(),Le(Kt),Le(Pt),hm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Vu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Cn!==null&&(np(Cn),Cn=null))),Kf(t,e),It(e),null;case 5:dm(e);var i=ss(vl.current);if(n=e.type,t!==null&&e.stateNode!=null)bx(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(W(166));return It(e),null}if(t=ss(Kn.current),Vu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Wn]=e,r[gl]=s,t=(e.mode&1)!==0,n){case"dialog":Pe("cancel",r),Pe("close",r);break;case"iframe":case"object":case"embed":Pe("load",r);break;case"video":case"audio":for(i=0;i<Va.length;i++)Pe(Va[i],r);break;case"source":Pe("error",r);break;case"img":case"image":case"link":Pe("error",r),Pe("load",r);break;case"details":Pe("toggle",r);break;case"input":wy(r,s),Pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Pe("invalid",r);break;case"textarea":Ey(r,s),Pe("invalid",r)}xf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Mu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Mu(r.textContent,a,t),i=["children",""+a]):ol.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Pe("scroll",r)}switch(n){case"input":Ru(r),xy(r,s,!0);break;case"textarea":Ru(r),Ty(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Pc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=rw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Wn]=e,t[gl]=r,kx(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ef(n,r),n){case"dialog":Pe("cancel",t),Pe("close",t),i=r;break;case"iframe":case"object":case"embed":Pe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Va.length;i++)Pe(Va[i],t);i=r;break;case"source":Pe("error",t),i=r;break;case"img":case"image":case"link":Pe("error",t),Pe("load",t),i=r;break;case"details":Pe("toggle",t),i=r;break;case"input":wy(t,r),i=gf(t,r),Pe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=$e({},r,{value:void 0}),Pe("invalid",t);break;case"textarea":Ey(t,r),i=_f(t,r),Pe("invalid",t);break;default:i=r}xf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?ow(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&iw(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&al(t,u):typeof u=="number"&&al(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ol.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Pe("scroll",t):u!=null&&$p(t,s,u,o))}switch(n){case"input":Ru(t),xy(t,r,!1);break;case"textarea":Ru(t),Ty(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ai(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?mo(t,!!r.multiple,s,!1):r.defaultValue!=null&&mo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Pc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return It(e),null;case 6:if(t&&e.stateNode!=null)Rx(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(W(166));if(n=ss(vl.current),ss(Kn.current),Vu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Wn]=e,(s=r.nodeValue!==n)&&(t=on,t!==null))switch(t.tag){case 3:Mu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Mu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Wn]=e,e.stateNode=r}return It(e),null;case 13:if(Le(Ue),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(je&&rn!==null&&e.mode&1&&!(e.flags&128))Gw(),bo(),e.flags|=98560,s=!1;else if(s=Vu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(W(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(W(317));s[Wn]=e}else bo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;It(e),s=!1}else Cn!==null&&(np(Cn),Cn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ue.current&1?st===0&&(st=3):Im())),e.updateQueue!==null&&(e.flags|=4),It(e),null);case 4:return Co(),Kf(t,e),t===null&&pl(e.stateNode.containerInfo),It(e),null;case 10:return am(e.type._context),It(e),null;case 17:return Qt(e.type)&&Nc(),It(e),null;case 19:if(Le(Ue),s=e.memoizedState,s===null)return It(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ba(s,!1);else{if(st!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Uc(t),o!==null){for(e.flags|=128,ba(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Re(Ue,Ue.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ye()>No&&(e.flags|=128,r=!0,ba(s,!1),e.lanes=4194304)}else{if(!r)if(t=Uc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ba(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!je)return It(e),null}else 2*Ye()-s.renderingStartTime>No&&n!==1073741824&&(e.flags|=128,r=!0,ba(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ye(),e.sibling=null,n=Ue.current,Re(Ue,r?n&1|2:n&1),e):(It(e),null);case 22:case 23:return Tm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?nn&1073741824&&(It(e),e.subtreeFlags&6&&(e.flags|=8192)):It(e),null;case 24:return null;case 25:return null}throw Error(W(156,e.tag))}function CA(t,e){switch(rm(e),e.tag){case 1:return Qt(e.type)&&Nc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Co(),Le(Kt),Le(Pt),hm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return dm(e),null;case 13:if(Le(Ue),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(W(340));bo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Le(Ue),null;case 4:return Co(),null;case 10:return am(e.type._context),null;case 22:case 23:return Tm(),null;case 24:return null;default:return null}}var zu=!1,bt=!1,PA=typeof WeakSet=="function"?WeakSet:Set,Q=null;function uo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){qe(t,e,r)}else n.current=null}function Qf(t,e,n){try{n()}catch(r){qe(t,e,r)}}var hv=!1;function NA(t,e){if(Nf=bc,t=Lw(),tm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,d=0,f=0,m=t,g=null;t:for(;;){for(var I;m!==n||i!==0&&m.nodeType!==3||(a=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(I=m.firstChild)!==null;)g=m,m=I;for(;;){if(m===t)break t;if(g===n&&++d===i&&(a=o),g===s&&++f===r&&(u=o),(I=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=I}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Df={focusedElem:t,selectionRange:n},bc=!1,Q=e;Q!==null;)if(e=Q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Q=t;else for(;Q!==null;){e=Q;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var k=C.memoizedProps,P=C.memoizedState,E=e.stateNode,_=E.getSnapshotBeforeUpdate(e.elementType===e.type?k:bn(e.type,k),P);E.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(W(163))}}catch(O){qe(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,Q=t;break}Q=e.return}return C=hv,hv=!1,C}function Ja(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Qf(e,n,s)}i=i.next}while(i!==r)}}function Sd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Yf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Cx(t){var e=t.alternate;e!==null&&(t.alternate=null,Cx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Wn],delete e[gl],delete e[jf],delete e[pA],delete e[mA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Px(t){return t.tag===5||t.tag===3||t.tag===4}function fv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Px(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Pc));else if(r!==4&&(t=t.child,t!==null))for(Xf(t,e,n),t=t.sibling;t!==null;)Xf(t,e,n),t=t.sibling}function Jf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Jf(t,e,n),t=t.sibling;t!==null;)Jf(t,e,n),t=t.sibling}var pt=null,Rn=!1;function Gr(t,e,n){for(n=n.child;n!==null;)Nx(t,e,n),n=n.sibling}function Nx(t,e,n){if(Gn&&typeof Gn.onCommitFiberUnmount=="function")try{Gn.onCommitFiberUnmount(yd,n)}catch{}switch(n.tag){case 5:bt||uo(n,e);case 6:var r=pt,i=Rn;pt=null,Gr(t,e,n),pt=r,Rn=i,pt!==null&&(Rn?(t=pt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):pt.removeChild(n.stateNode));break;case 18:pt!==null&&(Rn?(t=pt,n=n.stateNode,t.nodeType===8?Rh(t.parentNode,n):t.nodeType===1&&Rh(t,n),dl(t)):Rh(pt,n.stateNode));break;case 4:r=pt,i=Rn,pt=n.stateNode.containerInfo,Rn=!0,Gr(t,e,n),pt=r,Rn=i;break;case 0:case 11:case 14:case 15:if(!bt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Qf(n,e,o),i=i.next}while(i!==r)}Gr(t,e,n);break;case 1:if(!bt&&(uo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){qe(n,e,a)}Gr(t,e,n);break;case 21:Gr(t,e,n);break;case 22:n.mode&1?(bt=(r=bt)||n.memoizedState!==null,Gr(t,e,n),bt=r):Gr(t,e,n);break;default:Gr(t,e,n)}}function pv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new PA),e.forEach(function(r){var i=zA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function kn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:pt=a.stateNode,Rn=!1;break e;case 3:pt=a.stateNode.containerInfo,Rn=!0;break e;case 4:pt=a.stateNode.containerInfo,Rn=!0;break e}a=a.return}if(pt===null)throw Error(W(160));Nx(s,o,i),pt=null,Rn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){qe(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Dx(e,t),e=e.sibling}function Dx(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kn(e,t),zn(t),r&4){try{Ja(3,t,t.return),Sd(3,t)}catch(k){qe(t,t.return,k)}try{Ja(5,t,t.return)}catch(k){qe(t,t.return,k)}}break;case 1:kn(e,t),zn(t),r&512&&n!==null&&uo(n,n.return);break;case 5:if(kn(e,t),zn(t),r&512&&n!==null&&uo(n,n.return),t.flags&32){var i=t.stateNode;try{al(i,"")}catch(k){qe(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&tw(i,s),Ef(a,o);var d=Ef(a,s);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?ow(i,m):f==="dangerouslySetInnerHTML"?iw(i,m):f==="children"?al(i,m):$p(i,f,m,d)}switch(a){case"input":yf(i,s);break;case"textarea":nw(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var I=s.value;I!=null?mo(i,!!s.multiple,I,!1):g!==!!s.multiple&&(s.defaultValue!=null?mo(i,!!s.multiple,s.defaultValue,!0):mo(i,!!s.multiple,s.multiple?[]:"",!1))}i[gl]=s}catch(k){qe(t,t.return,k)}}break;case 6:if(kn(e,t),zn(t),r&4){if(t.stateNode===null)throw Error(W(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){qe(t,t.return,k)}}break;case 3:if(kn(e,t),zn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{dl(e.containerInfo)}catch(k){qe(t,t.return,k)}break;case 4:kn(e,t),zn(t);break;case 13:kn(e,t),zn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(xm=Ye())),r&4&&pv(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(bt=(d=bt)||f,kn(e,t),bt=d):kn(e,t),zn(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!f&&t.mode&1)for(Q=t,f=t.child;f!==null;){for(m=Q=f;Q!==null;){switch(g=Q,I=g.child,g.tag){case 0:case 11:case 14:case 15:Ja(4,g,g.return);break;case 1:uo(g,g.return);var C=g.stateNode;if(typeof C.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(k){qe(r,n,k)}}break;case 5:uo(g,g.return);break;case 22:if(g.memoizedState!==null){gv(m);continue}}I!==null?(I.return=g,Q=I):gv(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=sw("display",o))}catch(k){qe(t,t.return,k)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(k){qe(t,t.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:kn(e,t),zn(t),r&4&&pv(t);break;case 21:break;default:kn(e,t),zn(t)}}function zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Px(n)){var r=n;break e}n=n.return}throw Error(W(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(al(i,""),r.flags&=-33);var s=fv(t);Jf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=fv(t);Xf(t,a,o);break;default:throw Error(W(161))}}catch(u){qe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function DA(t,e,n){Q=t,Lx(t)}function Lx(t,e,n){for(var r=(t.mode&1)!==0;Q!==null;){var i=Q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||zu;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||bt;a=zu;var d=bt;if(zu=o,(bt=u)&&!d)for(Q=i;Q!==null;)o=Q,u=o.child,o.tag===22&&o.memoizedState!==null?yv(i):u!==null?(u.return=o,Q=u):yv(i);for(;s!==null;)Q=s,Lx(s),s=s.sibling;Q=i,zu=a,bt=d}mv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Q=s):mv(t)}}function mv(t){for(;Q!==null;){var e=Q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:bt||Sd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!bt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:bn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Zy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Zy(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&dl(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(W(163))}bt||e.flags&512&&Yf(e)}catch(g){qe(e,e.return,g)}}if(e===t){Q=null;break}if(n=e.sibling,n!==null){n.return=e.return,Q=n;break}Q=e.return}}function gv(t){for(;Q!==null;){var e=Q;if(e===t){Q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Q=n;break}Q=e.return}}function yv(t){for(;Q!==null;){var e=Q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Sd(4,e)}catch(u){qe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){qe(e,i,u)}}var s=e.return;try{Yf(e)}catch(u){qe(e,s,u)}break;case 5:var o=e.return;try{Yf(e)}catch(u){qe(e,o,u)}}}catch(u){qe(e,e.return,u)}if(e===t){Q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Q=a;break}Q=e.return}}var LA=Math.ceil,$c=Dr.ReactCurrentDispatcher,_m=Dr.ReactCurrentOwner,vn=Dr.ReactCurrentBatchConfig,ye=0,ct=null,tt=null,yt=0,nn=0,co=Di(0),st=0,El=null,ps=0,Ad=0,wm=0,Za=null,Ht=null,xm=0,No=1/0,mr=null,Bc=!1,Zf=null,yi=null,$u=!1,ui=null,Wc=0,el=0,ep=null,lc=-1,uc=0;function jt(){return ye&6?Ye():lc!==-1?lc:lc=Ye()}function vi(t){return t.mode&1?ye&2&&yt!==0?yt&-yt:yA.transition!==null?(uc===0&&(uc=vw()),uc):(t=Ee,t!==0||(t=window.event,t=t===void 0?16:Sw(t.type)),t):1}function Nn(t,e,n,r){if(50<el)throw el=0,ep=null,Error(W(185));Ul(t,n,r),(!(ye&2)||t!==ct)&&(t===ct&&(!(ye&2)&&(Ad|=n),st===4&&ri(t,yt)),Yt(t,r),n===1&&ye===0&&!(e.mode&1)&&(No=Ye()+500,Ed&&Li()))}function Yt(t,e){var n=t.callbackNode;yS(t,e);var r=kc(t,t===ct?yt:0);if(r===0)n!==null&&Ay(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ay(n),e===1)t.tag===0?gA(vv.bind(null,t)):Ww(vv.bind(null,t)),hA(function(){!(ye&6)&&Li()}),n=null;else{switch(_w(r)){case 1:n=Gp;break;case 4:n=gw;break;case 16:n=Ac;break;case 536870912:n=yw;break;default:n=Ac}n=$x(n,Ox.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ox(t,e){if(lc=-1,uc=0,ye&6)throw Error(W(327));var n=t.callbackNode;if(wo()&&t.callbackNode!==n)return null;var r=kc(t,t===ct?yt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Hc(t,r);else{e=r;var i=ye;ye|=2;var s=Mx();(ct!==t||yt!==e)&&(mr=null,No=Ye()+500,ls(t,e));do try{MA();break}catch(a){jx(t,a)}while(!0);om(),$c.current=s,ye=i,tt!==null?e=0:(ct=null,yt=0,e=st)}if(e!==0){if(e===2&&(i=kf(t),i!==0&&(r=i,e=tp(t,i))),e===1)throw n=El,ls(t,0),ri(t,r),Yt(t,Ye()),n;if(e===6)ri(t,r);else{if(i=t.current.alternate,!(r&30)&&!OA(i)&&(e=Hc(t,r),e===2&&(s=kf(t),s!==0&&(r=s,e=tp(t,s))),e===1))throw n=El,ls(t,0),ri(t,r),Yt(t,Ye()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(W(345));case 2:es(t,Ht,mr);break;case 3:if(ri(t,r),(r&130023424)===r&&(e=xm+500-Ye(),10<e)){if(kc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){jt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Of(es.bind(null,t,Ht,mr),e);break}es(t,Ht,mr);break;case 4:if(ri(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Pn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*LA(r/1960))-r,10<r){t.timeoutHandle=Of(es.bind(null,t,Ht,mr),r);break}es(t,Ht,mr);break;case 5:es(t,Ht,mr);break;default:throw Error(W(329))}}}return Yt(t,Ye()),t.callbackNode===n?Ox.bind(null,t):null}function tp(t,e){var n=Za;return t.current.memoizedState.isDehydrated&&(ls(t,e).flags|=256),t=Hc(t,e),t!==2&&(e=Ht,Ht=n,e!==null&&np(e)),t}function np(t){Ht===null?Ht=t:Ht.push.apply(Ht,t)}function OA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Dn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ri(t,e){for(e&=~wm,e&=~Ad,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Pn(e),r=1<<n;t[n]=-1,e&=~r}}function vv(t){if(ye&6)throw Error(W(327));wo();var e=kc(t,0);if(!(e&1))return Yt(t,Ye()),null;var n=Hc(t,e);if(t.tag!==0&&n===2){var r=kf(t);r!==0&&(e=r,n=tp(t,r))}if(n===1)throw n=El,ls(t,0),ri(t,e),Yt(t,Ye()),n;if(n===6)throw Error(W(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,es(t,Ht,mr),Yt(t,Ye()),null}function Em(t,e){var n=ye;ye|=1;try{return t(e)}finally{ye=n,ye===0&&(No=Ye()+500,Ed&&Li())}}function ms(t){ui!==null&&ui.tag===0&&!(ye&6)&&wo();var e=ye;ye|=1;var n=vn.transition,r=Ee;try{if(vn.transition=null,Ee=1,t)return t()}finally{Ee=r,vn.transition=n,ye=e,!(ye&6)&&Li()}}function Tm(){nn=co.current,Le(co)}function ls(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,dA(n)),tt!==null)for(n=tt.return;n!==null;){var r=n;switch(rm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Nc();break;case 3:Co(),Le(Kt),Le(Pt),hm();break;case 5:dm(r);break;case 4:Co();break;case 13:Le(Ue);break;case 19:Le(Ue);break;case 10:am(r.type._context);break;case 22:case 23:Tm()}n=n.return}if(ct=t,tt=t=_i(t.current,null),yt=nn=e,st=0,El=null,wm=Ad=ps=0,Ht=Za=null,is!==null){for(e=0;e<is.length;e++)if(n=is[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}is=null}return t}function jx(t,e){do{var n=tt;try{if(om(),sc.current=zc,Fc){for(var r=Fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Fc=!1}if(fs=0,ut=it=Fe=null,Xa=!1,_l=0,_m.current=null,n===null||n.return===null){st=1,El=e,tt=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=yt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,f=a,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var I=sv(o);if(I!==null){I.flags&=-257,ov(I,o,a,s,e),I.mode&1&&iv(s,d,e),e=I,u=d;var C=e.updateQueue;if(C===null){var k=new Set;k.add(u),e.updateQueue=k}else C.add(u);break e}else{if(!(e&1)){iv(s,d,e),Im();break e}u=Error(W(426))}}else if(je&&a.mode&1){var P=sv(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),ov(P,o,a,s,e),im(Po(u,a));break e}}s=u=Po(u,a),st!==4&&(st=2),Za===null?Za=[s]:Za.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=_x(s,u,e);Jy(s,E);break e;case 1:a=u;var _=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(yi===null||!yi.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=wx(s,a,e);Jy(s,O);break e}}s=s.return}while(s!==null)}Ux(n)}catch(j){e=j,tt===n&&n!==null&&(tt=n=n.return);continue}break}while(!0)}function Mx(){var t=$c.current;return $c.current=zc,t===null?zc:t}function Im(){(st===0||st===3||st===2)&&(st=4),ct===null||!(ps&268435455)&&!(Ad&268435455)||ri(ct,yt)}function Hc(t,e){var n=ye;ye|=2;var r=Mx();(ct!==t||yt!==e)&&(mr=null,ls(t,e));do try{jA();break}catch(i){jx(t,i)}while(!0);if(om(),ye=n,$c.current=r,tt!==null)throw Error(W(261));return ct=null,yt=0,st}function jA(){for(;tt!==null;)Vx(tt)}function MA(){for(;tt!==null&&!lS();)Vx(tt)}function Vx(t){var e=zx(t.alternate,t,nn);t.memoizedProps=t.pendingProps,e===null?Ux(t):tt=e,_m.current=null}function Ux(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=CA(n,e),n!==null){n.flags&=32767,tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{st=6,tt=null;return}}else if(n=RA(n,e,nn),n!==null){tt=n;return}if(e=e.sibling,e!==null){tt=e;return}tt=e=t}while(e!==null);st===0&&(st=5)}function es(t,e,n){var r=Ee,i=vn.transition;try{vn.transition=null,Ee=1,VA(t,e,n,r)}finally{vn.transition=i,Ee=r}return null}function VA(t,e,n,r){do wo();while(ui!==null);if(ye&6)throw Error(W(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(W(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(vS(t,s),t===ct&&(tt=ct=null,yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$u||($u=!0,$x(Ac,function(){return wo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=vn.transition,vn.transition=null;var o=Ee;Ee=1;var a=ye;ye|=4,_m.current=null,NA(t,n),Dx(n,t),iA(Df),bc=!!Nf,Df=Nf=null,t.current=n,DA(n),uS(),ye=a,Ee=o,vn.transition=s}else t.current=n;if($u&&($u=!1,ui=t,Wc=i),s=t.pendingLanes,s===0&&(yi=null),hS(n.stateNode),Yt(t,Ye()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Bc)throw Bc=!1,t=Zf,Zf=null,t;return Wc&1&&t.tag!==0&&wo(),s=t.pendingLanes,s&1?t===ep?el++:(el=0,ep=t):el=0,Li(),null}function wo(){if(ui!==null){var t=_w(Wc),e=vn.transition,n=Ee;try{if(vn.transition=null,Ee=16>t?16:t,ui===null)var r=!1;else{if(t=ui,ui=null,Wc=0,ye&6)throw Error(W(331));var i=ye;for(ye|=4,Q=t.current;Q!==null;){var s=Q,o=s.child;if(Q.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var d=a[u];for(Q=d;Q!==null;){var f=Q;switch(f.tag){case 0:case 11:case 15:Ja(8,f,s)}var m=f.child;if(m!==null)m.return=f,Q=m;else for(;Q!==null;){f=Q;var g=f.sibling,I=f.return;if(Cx(f),f===d){Q=null;break}if(g!==null){g.return=I,Q=g;break}Q=I}}}var C=s.alternate;if(C!==null){var k=C.child;if(k!==null){C.child=null;do{var P=k.sibling;k.sibling=null,k=P}while(k!==null)}}Q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Q=o;else e:for(;Q!==null;){if(s=Q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ja(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,Q=E;break e}Q=s.return}}var _=t.current;for(Q=_;Q!==null;){o=Q;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,Q=S;else e:for(o=_;Q!==null;){if(a=Q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Sd(9,a)}}catch(j){qe(a,a.return,j)}if(a===o){Q=null;break e}var O=a.sibling;if(O!==null){O.return=a.return,Q=O;break e}Q=a.return}}if(ye=i,Li(),Gn&&typeof Gn.onPostCommitFiberRoot=="function")try{Gn.onPostCommitFiberRoot(yd,t)}catch{}r=!0}return r}finally{Ee=n,vn.transition=e}}return!1}function _v(t,e,n){e=Po(n,e),e=_x(t,e,1),t=gi(t,e,1),e=jt(),t!==null&&(Ul(t,1,e),Yt(t,e))}function qe(t,e,n){if(t.tag===3)_v(t,t,n);else for(;e!==null;){if(e.tag===3){_v(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yi===null||!yi.has(r))){t=Po(n,t),t=wx(e,t,1),e=gi(e,t,1),t=jt(),e!==null&&(Ul(e,1,t),Yt(e,t));break}}e=e.return}}function UA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=jt(),t.pingedLanes|=t.suspendedLanes&n,ct===t&&(yt&n)===n&&(st===4||st===3&&(yt&130023424)===yt&&500>Ye()-xm?ls(t,0):wm|=n),Yt(t,e)}function Fx(t,e){e===0&&(t.mode&1?(e=Nu,Nu<<=1,!(Nu&130023424)&&(Nu=4194304)):e=1);var n=jt();t=kr(t,e),t!==null&&(Ul(t,e,n),Yt(t,n))}function FA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Fx(t,n)}function zA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(W(314))}r!==null&&r.delete(e),Fx(t,n)}var zx;zx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Kt.current)Gt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Gt=!1,bA(t,e,n);Gt=!!(t.flags&131072)}else Gt=!1,je&&e.flags&1048576&&Hw(e,Oc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ac(t,e),t=e.pendingProps;var i=ko(e,Pt.current);_o(e,n),i=pm(null,e,r,t,i,n);var s=mm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qt(r)?(s=!0,Dc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,um(e),i.updater=Id,e.stateNode=i,i._reactInternals=e,$f(e,r,t,n),e=Hf(null,e,r,!0,s,n)):(e.tag=0,je&&s&&nm(e),Ot(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ac(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=BA(r),t=bn(r,t),i){case 0:e=Wf(null,e,r,t,n);break e;case 1:e=uv(null,e,r,t,n);break e;case 11:e=av(null,e,r,t,n);break e;case 14:e=lv(null,e,r,bn(r.type,t),n);break e}throw Error(W(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bn(r,i),Wf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bn(r,i),uv(t,e,r,i,n);case 3:e:{if(Ix(e),t===null)throw Error(W(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Xw(t,e),Vc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Po(Error(W(423)),e),e=cv(t,e,r,n,i);break e}else if(r!==i){i=Po(Error(W(424)),e),e=cv(t,e,r,n,i);break e}else for(rn=mi(e.stateNode.containerInfo.firstChild),on=e,je=!0,Cn=null,n=Qw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bo(),r===i){e=br(t,e,n);break e}Ot(t,e,r,n)}e=e.child}return e;case 5:return Jw(e),t===null&&Uf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Lf(r,i)?o=null:s!==null&&Lf(r,s)&&(e.flags|=32),Tx(t,e),Ot(t,e,o,n),e.child;case 6:return t===null&&Uf(e),null;case 13:return Sx(t,e,n);case 4:return cm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ro(e,null,r,n):Ot(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bn(r,i),av(t,e,r,i,n);case 7:return Ot(t,e,e.pendingProps,n),e.child;case 8:return Ot(t,e,e.pendingProps.children,n),e.child;case 12:return Ot(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Re(jc,r._currentValue),r._currentValue=o,s!==null)if(Dn(s.value,o)){if(s.children===i.children&&!Kt.current){e=br(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Er(-1,n&-n),u.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?u.next=u:(u.next=f.next,f.next=u),d.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Ff(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(W(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ff(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ot(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,_o(e,n),i=_n(i),r=r(i),e.flags|=1,Ot(t,e,r,n),e.child;case 14:return r=e.type,i=bn(r,e.pendingProps),i=bn(r.type,i),lv(t,e,r,i,n);case 15:return xx(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bn(r,i),ac(t,e),e.tag=1,Qt(r)?(t=!0,Dc(e)):t=!1,_o(e,n),vx(e,r,i),$f(e,r,i,n),Hf(null,e,r,!0,t,n);case 19:return Ax(t,e,n);case 22:return Ex(t,e,n)}throw Error(W(156,e.tag))};function $x(t,e){return mw(t,e)}function $A(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(t,e,n,r){return new $A(t,e,n,r)}function Sm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function BA(t){if(typeof t=="function")return Sm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wp)return 11;if(t===Hp)return 14}return 2}function _i(t,e){var n=t.alternate;return n===null?(n=yn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function cc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Sm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case eo:return us(n.children,i,s,e);case Bp:o=8,i|=8;break;case hf:return t=yn(12,n,e,i|2),t.elementType=hf,t.lanes=s,t;case ff:return t=yn(13,n,e,i),t.elementType=ff,t.lanes=s,t;case pf:return t=yn(19,n,e,i),t.elementType=pf,t.lanes=s,t;case J0:return kd(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Y0:o=10;break e;case X0:o=9;break e;case Wp:o=11;break e;case Hp:o=14;break e;case ei:o=16,r=null;break e}throw Error(W(130,t==null?t:typeof t,""))}return e=yn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function us(t,e,n,r){return t=yn(7,t,r,e),t.lanes=n,t}function kd(t,e,n,r){return t=yn(22,t,r,e),t.elementType=J0,t.lanes=n,t.stateNode={isHidden:!1},t}function Mh(t,e,n){return t=yn(6,t,null,e),t.lanes=n,t}function Vh(t,e,n){return e=yn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function WA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vh(0),this.expirationTimes=vh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Am(t,e,n,r,i,s,o,a,u){return t=new WA(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=yn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},um(s),t}function HA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Bx(t){if(!t)return ki;t=t._reactInternals;e:{if(Ts(t)!==t||t.tag!==1)throw Error(W(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(W(171))}if(t.tag===1){var n=t.type;if(Qt(n))return Bw(t,n,e)}return e}function Wx(t,e,n,r,i,s,o,a,u){return t=Am(n,r,!0,t,i,s,o,a,u),t.context=Bx(null),n=t.current,r=jt(),i=vi(n),s=Er(r,i),s.callback=e??null,gi(n,s,i),t.current.lanes=i,Ul(t,i,r),Yt(t,r),t}function bd(t,e,n,r){var i=e.current,s=jt(),o=vi(i);return n=Bx(n),e.context===null?e.context=n:e.pendingContext=n,e=Er(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=gi(i,e,o),t!==null&&(Nn(t,i,o,s),ic(t,i,o)),o}function qc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function wv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function km(t,e){wv(t,e),(t=t.alternate)&&wv(t,e)}function qA(){return null}var Hx=typeof reportError=="function"?reportError:function(t){console.error(t)};function bm(t){this._internalRoot=t}Rd.prototype.render=bm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(W(409));bd(t,e,null,null)};Rd.prototype.unmount=bm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ms(function(){bd(null,t,null,null)}),e[Ar]=null}};function Rd(t){this._internalRoot=t}Rd.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ew();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ni.length&&e!==0&&e<ni[n].priority;n++);ni.splice(n,0,t),n===0&&Iw(t)}};function Rm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Cd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function xv(){}function GA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=qc(o);s.call(d)}}var o=Wx(e,r,t,0,null,!1,!1,"",xv);return t._reactRootContainer=o,t[Ar]=o.current,pl(t.nodeType===8?t.parentNode:t),ms(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var d=qc(u);a.call(d)}}var u=Am(t,0,!1,null,null,!1,!1,"",xv);return t._reactRootContainer=u,t[Ar]=u.current,pl(t.nodeType===8?t.parentNode:t),ms(function(){bd(e,u,n,r)}),u}function Pd(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=qc(o);a.call(u)}}bd(e,o,t,i)}else o=GA(n,e,t,i,r);return qc(o)}ww=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ma(e.pendingLanes);n!==0&&(Kp(e,n|1),Yt(e,Ye()),!(ye&6)&&(No=Ye()+500,Li()))}break;case 13:ms(function(){var r=kr(t,1);if(r!==null){var i=jt();Nn(r,t,1,i)}}),km(t,1)}};Qp=function(t){if(t.tag===13){var e=kr(t,134217728);if(e!==null){var n=jt();Nn(e,t,134217728,n)}km(t,134217728)}};xw=function(t){if(t.tag===13){var e=vi(t),n=kr(t,e);if(n!==null){var r=jt();Nn(n,t,e,r)}km(t,e)}};Ew=function(){return Ee};Tw=function(t,e){var n=Ee;try{return Ee=t,e()}finally{Ee=n}};If=function(t,e,n){switch(e){case"input":if(yf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=xd(r);if(!i)throw Error(W(90));ew(r),yf(r,i)}}}break;case"textarea":nw(t,n);break;case"select":e=n.value,e!=null&&mo(t,!!n.multiple,e,!1)}};uw=Em;cw=ms;var KA={usingClientEntryPoint:!1,Events:[zl,io,xd,aw,lw,Em]},Ra={findFiberByHostInstance:rs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},QA={bundleType:Ra.bundleType,version:Ra.version,rendererPackageName:Ra.rendererPackageName,rendererConfig:Ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=fw(t),t===null?null:t.stateNode},findFiberByHostInstance:Ra.findFiberByHostInstance||qA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bu.isDisabled&&Bu.supportsFiber)try{yd=Bu.inject(QA),Gn=Bu}catch{}}ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KA;ln.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rm(e))throw Error(W(200));return HA(t,e,null,n)};ln.createRoot=function(t,e){if(!Rm(t))throw Error(W(299));var n=!1,r="",i=Hx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Am(t,1,!1,null,null,n,!1,r,i),t[Ar]=e.current,pl(t.nodeType===8?t.parentNode:t),new bm(e)};ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(W(188)):(t=Object.keys(t).join(","),Error(W(268,t)));return t=fw(e),t=t===null?null:t.stateNode,t};ln.flushSync=function(t){return ms(t)};ln.hydrate=function(t,e,n){if(!Cd(e))throw Error(W(200));return Pd(null,t,e,!0,n)};ln.hydrateRoot=function(t,e,n){if(!Rm(t))throw Error(W(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Hx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Wx(e,null,t,1,n??null,i,!1,s,o),t[Ar]=e.current,pl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Rd(e)};ln.render=function(t,e,n){if(!Cd(e))throw Error(W(200));return Pd(null,t,e,!1,n)};ln.unmountComponentAtNode=function(t){if(!Cd(t))throw Error(W(40));return t._reactRootContainer?(ms(function(){Pd(null,null,t,!1,function(){t._reactRootContainer=null,t[Ar]=null})}),!0):!1};ln.unstable_batchedUpdates=Em;ln.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Cd(n))throw Error(W(200));if(t==null||t._reactInternals===void 0)throw Error(W(38));return Pd(t,e,n,!1,r)};ln.version="18.3.1-next-f1338f8080-20240426";function qx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qx)}catch(t){console.error(t)}}qx(),q0.exports=ln;var YA=q0.exports,Ev=YA;cf.createRoot=Ev.createRoot,cf.hydrateRoot=Ev.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tl(){return Tl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Tl.apply(null,arguments)}var ci;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ci||(ci={}));const Tv="popstate";function XA(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:u=""}=Is(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),rp("",{pathname:o,search:a,hash:u},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let u=i.location.href,d=u.indexOf("#");a=d===-1?u:u.slice(0,d)}return a+"#"+(typeof s=="string"?s:Gc(s))}function r(i,s){Cm(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return ZA(e,n,r,t)}function ze(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Cm(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function JA(){return Math.random().toString(36).substr(2,8)}function Iv(t,e){return{usr:t.state,key:t.key,idx:e}}function rp(t,e,n,r){return n===void 0&&(n=null),Tl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Is(e):e,{state:n,key:e&&e.key||r||JA()})}function Gc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Is(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function ZA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=ci.Pop,u=null,d=f();d==null&&(d=0,o.replaceState(Tl({},o.state,{idx:d}),""));function f(){return(o.state||{idx:null}).idx}function m(){a=ci.Pop;let P=f(),E=P==null?null:P-d;d=P,u&&u({action:a,location:k.location,delta:E})}function g(P,E){a=ci.Push;let _=rp(k.location,P,E);n&&n(_,P),d=f()+1;let S=Iv(_,d),O=k.createHref(_);try{o.pushState(S,"",O)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(O)}s&&u&&u({action:a,location:k.location,delta:1})}function I(P,E){a=ci.Replace;let _=rp(k.location,P,E);n&&n(_,P),d=f();let S=Iv(_,d),O=k.createHref(_);o.replaceState(S,"",O),s&&u&&u({action:a,location:k.location,delta:0})}function C(P){let E=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof P=="string"?P:Gc(P);return _=_.replace(/ $/,"%20"),ze(E,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,E)}let k={get action(){return a},get location(){return t(i,o)},listen(P){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Tv,m),u=P,()=>{i.removeEventListener(Tv,m),u=null}},createHref(P){return e(i,P)},createURL:C,encodeLocation(P){let E=C(P);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:g,replace:I,go(P){return o.go(P)}};return k}var Sv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Sv||(Sv={}));function ek(t,e,n){return n===void 0&&(n="/"),tk(t,e,n)}function tk(t,e,n,r){let i=typeof e=="string"?Is(e):e,s=Do(i.pathname||"/",n);if(s==null)return null;let o=Gx(t);nk(o);let a=null,u=fk(s);for(let d=0;a==null&&d<o.length;++d)a=dk(o[d],u);return a}function Gx(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(ze(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=wi([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(ze(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Gx(s.children,e,f,d)),!(s.path==null&&!s.index)&&e.push({path:d,score:uk(d,s.index),routesMeta:f})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of Kx(s.path))i(s,o,u)}),e}function Kx(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Kx(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function nk(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:ck(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const rk=/^:[\w-]+$/,ik=3,sk=2,ok=1,ak=10,lk=-2,Av=t=>t==="*";function uk(t,e){let n=t.split("/"),r=n.length;return n.some(Av)&&(r+=lk),e&&(r+=sk),n.filter(i=>!Av(i)).reduce((i,s)=>i+(rk.test(s)?ik:s===""?ok:ak),r)}function ck(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function dk(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],d=a===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",m=ip({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},f),g=u.route;if(!m)return null;Object.assign(i,m.params),o.push({params:i,pathname:wi([s,m.pathname]),pathnameBase:gk(wi([s,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(s=wi([s,m.pathnameBase]))}return o}function ip(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=hk(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((d,f,m)=>{let{paramName:g,isOptional:I}=f;if(g==="*"){let k=a[m]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const C=a[m];return I&&!C?d[g]=void 0:d[g]=(C||"").replace(/%2F/g,"/"),d},{}),pathname:s,pathnameBase:o,pattern:t}}function hk(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Cm(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function fk(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Cm(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Do(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function pk(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Is(t):t,s;return n?(n=Qx(n),n.startsWith("/")?s=kv(n.substring(1),"/"):s=kv(n,e)):s=e,{pathname:s,search:yk(r),hash:vk(i)}}function kv(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Uh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function mk(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Pm(t,e){let n=mk(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Nm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Is(t):(i=Tl({},t),ze(!i.pathname||!i.pathname.includes("?"),Uh("?","pathname","search",i)),ze(!i.pathname||!i.pathname.includes("#"),Uh("#","pathname","hash",i)),ze(!i.search||!i.search.includes("#"),Uh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let m=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}a=m>=0?e[m]:"/"}let u=pk(i,a),d=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||f)&&(u.pathname+="/"),u}const Qx=t=>t.replace(/\/\/+/g,"/"),wi=t=>Qx(t.join("/")),gk=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),yk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,vk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function _k(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Yx=["post","put","patch","delete"];new Set(Yx);const wk=["get",...Yx];new Set(wk);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Il(){return Il=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Il.apply(null,arguments)}const Nd=R.createContext(null),Xx=R.createContext(null),Lr=R.createContext(null),Dd=R.createContext(null),Or=R.createContext({outlet:null,matches:[],isDataRoute:!1}),Jx=R.createContext(null);function xk(t,e){let{relative:n}=e===void 0?{}:e;qo()||ze(!1);let{basename:r,navigator:i}=R.useContext(Lr),{hash:s,pathname:o,search:a}=Ld(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:wi([r,o])),i.createHref({pathname:u,search:a,hash:s})}function qo(){return R.useContext(Dd)!=null}function Ss(){return qo()||ze(!1),R.useContext(Dd).location}function Zx(t){R.useContext(Lr).static||R.useLayoutEffect(t)}function jr(){let{isDataRoute:t}=R.useContext(Or);return t?Lk():Ek()}function Ek(){qo()||ze(!1);let t=R.useContext(Nd),{basename:e,future:n,navigator:r}=R.useContext(Lr),{matches:i}=R.useContext(Or),{pathname:s}=Ss(),o=JSON.stringify(Pm(i,n.v7_relativeSplatPath)),a=R.useRef(!1);return Zx(()=>{a.current=!0}),R.useCallback(function(d,f){if(f===void 0&&(f={}),!a.current)return;if(typeof d=="number"){r.go(d);return}let m=Nm(d,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:wi([e,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[e,r,o,s,t])}function eE(){let{matches:t}=R.useContext(Or),e=t[t.length-1];return e?e.params:{}}function Ld(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=R.useContext(Lr),{matches:i}=R.useContext(Or),{pathname:s}=Ss(),o=JSON.stringify(Pm(i,r.v7_relativeSplatPath));return R.useMemo(()=>Nm(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function Tk(t,e){return Ik(t,e)}function Ik(t,e,n,r){qo()||ze(!1);let{navigator:i}=R.useContext(Lr),{matches:s}=R.useContext(Or),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let d=Ss(),f;if(e){var m;let P=typeof e=="string"?Is(e):e;u==="/"||(m=P.pathname)!=null&&m.startsWith(u)||ze(!1),f=P}else f=d;let g=f.pathname||"/",I=g;if(u!=="/"){let P=u.replace(/^\//,"").split("/");I="/"+g.replace(/^\//,"").split("/").slice(P.length).join("/")}let C=ek(t,{pathname:I}),k=Rk(C&&C.map(P=>Object.assign({},P,{params:Object.assign({},a,P.params),pathname:wi([u,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?u:wi([u,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),s,n,r);return e&&k?R.createElement(Dd.Provider,{value:{location:Il({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:ci.Pop}},k):k}function Sk(){let t=Dk(),e=_k(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},e),n?R.createElement("pre",{style:i},n):null,null)}const Ak=R.createElement(Sk,null);class kk extends R.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?R.createElement(Or.Provider,{value:this.props.routeContext},R.createElement(Jx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function bk(t){let{routeContext:e,match:n,children:r}=t,i=R.useContext(Nd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),R.createElement(Or.Provider,{value:e},r)}function Rk(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let f=o.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id])!==void 0);f>=0||ze(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let m=o[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=f),m.route.id){let{loaderData:g,errors:I}=n,C=m.route.loader&&g[m.route.id]===void 0&&(!I||I[m.route.id]===void 0);if(m.route.lazy||C){u=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((f,m,g)=>{let I,C=!1,k=null,P=null;n&&(I=a&&m.route.id?a[m.route.id]:void 0,k=m.route.errorElement||Ak,u&&(d<0&&g===0?(Ok("route-fallback"),C=!0,P=null):d===g&&(C=!0,P=m.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,g+1)),_=()=>{let S;return I?S=k:C?S=P:m.route.Component?S=R.createElement(m.route.Component,null):m.route.element?S=m.route.element:S=f,R.createElement(bk,{match:m,routeContext:{outlet:f,matches:E,isDataRoute:n!=null},children:S})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?R.createElement(kk,{location:n.location,revalidation:n.revalidation,component:k,error:I,children:_(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):_()},null)}var tE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(tE||{}),nE=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(nE||{});function Ck(t){let e=R.useContext(Nd);return e||ze(!1),e}function Pk(t){let e=R.useContext(Xx);return e||ze(!1),e}function Nk(t){let e=R.useContext(Or);return e||ze(!1),e}function rE(t){let e=Nk(),n=e.matches[e.matches.length-1];return n.route.id||ze(!1),n.route.id}function Dk(){var t;let e=R.useContext(Jx),n=Pk(),r=rE();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Lk(){let{router:t}=Ck(tE.UseNavigateStable),e=rE(nE.UseNavigateStable),n=R.useRef(!1);return Zx(()=>{n.current=!0}),R.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Il({fromRouteId:e},s)))},[t,e])}const bv={};function Ok(t,e,n){bv[t]||(bv[t]=!0)}function jk(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Mk(t){let{to:e,replace:n,state:r,relative:i}=t;qo()||ze(!1);let{future:s,static:o}=R.useContext(Lr),{matches:a}=R.useContext(Or),{pathname:u}=Ss(),d=jr(),f=Nm(e,Pm(a,s.v7_relativeSplatPath),u,i==="path"),m=JSON.stringify(f);return R.useEffect(()=>d(JSON.parse(m),{replace:n,state:r,relative:i}),[d,m,i,n,r]),null}function en(t){ze(!1)}function Vk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ci.Pop,navigator:s,static:o=!1,future:a}=t;qo()&&ze(!1);let u=e.replace(/^\/*/,"/"),d=R.useMemo(()=>({basename:u,navigator:s,static:o,future:Il({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=Is(r));let{pathname:f="/",search:m="",hash:g="",state:I=null,key:C="default"}=r,k=R.useMemo(()=>{let P=Do(f,u);return P==null?null:{location:{pathname:P,search:m,hash:g,state:I,key:C},navigationType:i}},[u,f,m,g,I,C,i]);return k==null?null:R.createElement(Lr.Provider,{value:d},R.createElement(Dd.Provider,{children:n,value:k}))}function Uk(t){let{children:e,location:n}=t;return Tk(sp(e),n)}new Promise(()=>{});function sp(t,e){e===void 0&&(e=[]);let n=[];return R.Children.forEach(t,(r,i)=>{if(!R.isValidElement(r))return;let s=[...e,i];if(r.type===R.Fragment){n.push.apply(n,sp(r.props.children,s));return}r.type!==en&&ze(!1),!r.props.index||!r.props.children||ze(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=sp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Kc(){return Kc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Kc.apply(null,arguments)}function iE(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}function Fk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function zk(t,e){return t.button===0&&(!e||e==="_self")&&!Fk(t)}function op(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let r=t[n];return e.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function $k(t,e){let n=op(t);return e&&e.forEach((r,i)=>{n.has(i)||e.getAll(i).forEach(s=>{n.append(i,s)})}),n}const Bk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Wk=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Hk="6";try{window.__reactRouterVersion=Hk}catch{}const qk=R.createContext({isTransitioning:!1}),Gk="startTransition",Rv=UI[Gk];function Kk(t){let{basename:e,children:n,future:r,window:i}=t,s=R.useRef();s.current==null&&(s.current=XA({window:i,v5Compat:!0}));let o=s.current,[a,u]=R.useState({action:o.action,location:o.location}),{v7_startTransition:d}=r||{},f=R.useCallback(m=>{d&&Rv?Rv(()=>u(m)):u(m)},[u,d]);return R.useLayoutEffect(()=>o.listen(f),[o,f]),R.useEffect(()=>jk(r),[r]),R.createElement(Vk,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const Qk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Yk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ne=R.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:d,preventScrollReset:f,viewTransition:m}=e,g=iE(e,Bk),{basename:I}=R.useContext(Lr),C,k=!1;if(typeof d=="string"&&Yk.test(d)&&(C=d,Qk))try{let S=new URL(window.location.href),O=d.startsWith("//")?new URL(S.protocol+d):new URL(d),j=Do(O.pathname,I);O.origin===S.origin&&j!=null?d=j+O.search+O.hash:k=!0}catch{}let P=xk(d,{relative:i}),E=Zk(d,{replace:o,state:a,target:u,preventScrollReset:f,relative:i,viewTransition:m});function _(S){r&&r(S),S.defaultPrevented||E(S)}return R.createElement("a",Kc({},g,{href:C||P,onClick:k||s?r:_,ref:n,target:u}))}),Xk=R.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:u,viewTransition:d,children:f}=e,m=iE(e,Wk),g=Ld(u,{relative:m.relative}),I=Ss(),C=R.useContext(Xx),{navigator:k,basename:P}=R.useContext(Lr),E=C!=null&&eb(g)&&d===!0,_=k.encodeLocation?k.encodeLocation(g).pathname:g.pathname,S=I.pathname,O=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;i||(S=S.toLowerCase(),O=O?O.toLowerCase():null,_=_.toLowerCase()),O&&P&&(O=Do(O,P)||O);const j=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let D=S===_||!o&&S.startsWith(_)&&S.charAt(j)==="/",x=O!=null&&(O===_||!o&&O.startsWith(_)&&O.charAt(_.length)==="/"),y={isActive:D,isPending:x,isTransitioning:E},T=D?r:void 0,A;typeof s=="function"?A=s(y):A=[s,D?"active":null,x?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let N=typeof a=="function"?a(y):a;return R.createElement(Ne,Kc({},m,{"aria-current":T,className:A,ref:n,style:N,to:u,viewTransition:d}),typeof f=="function"?f(y):f)});var ap;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(ap||(ap={}));var Cv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Cv||(Cv={}));function Jk(t){let e=R.useContext(Nd);return e||ze(!1),e}function Zk(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,u=jr(),d=Ss(),f=Ld(t,{relative:o});return R.useCallback(m=>{if(zk(m,n)){m.preventDefault();let g=r!==void 0?r:Gc(d)===Gc(f);u(t,{replace:g,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[d,u,f,r,i,n,t,s,o,a])}function sE(t){let e=R.useRef(op(t)),n=R.useRef(!1),r=Ss(),i=R.useMemo(()=>$k(r.search,n.current?null:e.current),[r.search]),s=jr(),o=R.useCallback((a,u)=>{const d=op(typeof a=="function"?a(i):a);n.current=!0,s("?"+d,u)},[s,i]);return[i,o]}function eb(t,e){e===void 0&&(e={});let n=R.useContext(qk);n==null&&ze(!1);let{basename:r}=Jk(ap.useViewTransitionState),i=Ld(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Do(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Do(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ip(i.pathname,o)!=null||ip(i.pathname,s)!=null}/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),oE=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var nb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=R.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...a},u)=>R.createElement("svg",{ref:u,...nb,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:oE("lucide",i),...a},[...o.map(([d,f])=>R.createElement(d,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=(t,e)=>{const n=R.forwardRef(({className:r,...i},s)=>R.createElement(rb,{ref:s,iconNode:e,className:oE(`lucide-${tb(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aE=se("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lE=se("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=se("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=se("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=se("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=se("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=se("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=se("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uE=se("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=se("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=se("Dices",[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2",key:"6agr2n"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",key:"1o487t"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 14h.01",key:"ssrbsk"}],["path",{d:"M15 6h.01",key:"cblpky"}],["path",{d:"M18 9h.01",key:"2061c0"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cE=se("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=se("Film",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=se("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dE=se("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=se("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=se("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=se("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=se("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=se("ListFilter",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=se("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hE=se("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fE=se("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=se("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=se("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=se("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=se("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pE=se("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=se("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=se("Reply",[["polyline",{points:"9 17 4 12 9 7",key:"hvgpf2"}],["path",{d:"M20 18v-2a4 4 0 0 0-4-4H4",key:"5vmcpk"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=se("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=se("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=se("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=se("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mE=se("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=se("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=se("ThumbsDown",[["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",key:"m61m77"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=se("ThumbsUp",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gE=se("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=se("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=se("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=se("Tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yE=se("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vE=se("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=se("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var Dv={};/**
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
 */const _E=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},kb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},wE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,d=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|a>>4;let g=(a&15)<<2|d>>6,I=d&63;u||(I=64,o||(g=64)),r.push(n[f],n[m],n[g],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_E(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||d==null||m==null)throw new bb;const g=s<<2|a>>4;if(r.push(g),d!==64){const I=a<<4&240|d>>2;if(r.push(I),m!==64){const C=d<<6&192|m;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class bb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Rb=function(t){const e=_E(t);return wE.encodeByteArray(e,!0)},Yc=function(t){return Rb(t).replace(/\./g,"")},xE=function(t){try{return wE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Cb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Pb=()=>Cb().__FIREBASE_DEFAULTS__,Nb=()=>{if(typeof process>"u"||typeof Dv>"u")return;const t=Dv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Db=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&xE(t[1]);return e&&JSON.parse(e)},jd=()=>{try{return Pb()||Nb()||Db()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},EE=t=>{var e,n;return(n=(e=jd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Lb=t=>{const e=EE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},TE=()=>{var t;return(t=jd())===null||t===void 0?void 0:t.config},IE=t=>{var e;return(e=jd())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Ob{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function jb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Yc(JSON.stringify(n)),Yc(JSON.stringify(o)),""].join(".")}/**
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
 */function Nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Nt())}function Vb(){var t;const e=(t=jd())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ub(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Fb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function zb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $b(){const t=Nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Bb(){return!Vb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Wb(){try{return typeof indexedDB=="object"}catch{return!1}}function Hb(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const qb="FirebaseError";class Mr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=qb,Object.setPrototypeOf(this,Mr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hl.prototype.create)}}class Hl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Gb(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Mr(i,a,r)}}function Gb(t,e){return t.replace(Kb,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Kb=/\{\$([^}]+)}/g;function Qb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Lv(s)&&Lv(o)){if(!Xc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Lv(t){return t!==null&&typeof t=="object"}/**
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
 */function ql(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ua(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Fa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Yb(t,e){const n=new Xb(t,e);return n.subscribe.bind(n)}class Xb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Jb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Fh),i.error===void 0&&(i.error=Fh),i.complete===void 0&&(i.complete=Fh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Jb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fh(){}/**
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
 */class Zb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ob;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tR(e))try{this.getOrInitializeService({instanceIdentifier:ts})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ts){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ts){return this.instances.has(e)}getOptions(e=ts){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:eR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ts){return this.component?this.component.multipleInstances?e:ts:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eR(t){return t===ts?void 0:t}function tR(t){return t.instantiationMode==="EAGER"}/**
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
 */class nR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Zb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const rR={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},iR=fe.INFO,sR={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},oR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=sR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Om{constructor(e){this.name=e,this._logLevel=iR,this._logHandler=oR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const aR=(t,e)=>e.some(n=>t instanceof n);let Ov,jv;function lR(){return Ov||(Ov=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uR(){return jv||(jv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const SE=new WeakMap,lp=new WeakMap,AE=new WeakMap,zh=new WeakMap,jm=new WeakMap;function cR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(xi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&SE.set(n,t)}).catch(()=>{}),jm.set(e,t),e}function dR(t){if(lp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});lp.set(t,e)}let up={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return lp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||AE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function hR(t){up=t(up)}function fR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call($h(this),e,...n);return AE.set(r,e.sort?e.sort():[e]),xi(r)}:uR().includes(t)?function(...e){return t.apply($h(this),e),xi(SE.get(this))}:function(...e){return xi(t.apply($h(this),e))}}function pR(t){return typeof t=="function"?fR(t):(t instanceof IDBTransaction&&dR(t),aR(t,lR())?new Proxy(t,up):t)}function xi(t){if(t instanceof IDBRequest)return cR(t);if(zh.has(t))return zh.get(t);const e=pR(t);return e!==t&&(zh.set(t,e),jm.set(e,t)),e}const $h=t=>jm.get(t);function mR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=xi(o);return r&&o.addEventListener("upgradeneeded",u=>{r(xi(o.result),u.oldVersion,u.newVersion,xi(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),a}const gR=["get","getKey","getAll","getAllKeys","count"],yR=["put","add","delete","clear"],Bh=new Map;function Mv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Bh.get(e))return Bh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=yR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||gR.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(a.shift())),(await Promise.all([d[n](...a),i&&u.done]))[0]};return Bh.set(e,s),s}hR(t=>({...t,get:(e,n,r)=>Mv(e,n)||t.get(e,n,r),has:(e,n)=>!!Mv(e,n)||t.has(e,n)}));/**
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
 */class vR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_R(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function _R(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cp="@firebase/app",Vv="0.10.13";/**
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
 */const Rr=new Om("@firebase/app"),wR="@firebase/app-compat",xR="@firebase/analytics-compat",ER="@firebase/analytics",TR="@firebase/app-check-compat",IR="@firebase/app-check",SR="@firebase/auth",AR="@firebase/auth-compat",kR="@firebase/database",bR="@firebase/data-connect",RR="@firebase/database-compat",CR="@firebase/functions",PR="@firebase/functions-compat",NR="@firebase/installations",DR="@firebase/installations-compat",LR="@firebase/messaging",OR="@firebase/messaging-compat",jR="@firebase/performance",MR="@firebase/performance-compat",VR="@firebase/remote-config",UR="@firebase/remote-config-compat",FR="@firebase/storage",zR="@firebase/storage-compat",$R="@firebase/firestore",BR="@firebase/vertexai-preview",WR="@firebase/firestore-compat",HR="firebase",qR="10.14.1";/**
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
 */const dp="[DEFAULT]",GR={[cp]:"fire-core",[wR]:"fire-core-compat",[ER]:"fire-analytics",[xR]:"fire-analytics-compat",[IR]:"fire-app-check",[TR]:"fire-app-check-compat",[SR]:"fire-auth",[AR]:"fire-auth-compat",[kR]:"fire-rtdb",[bR]:"fire-data-connect",[RR]:"fire-rtdb-compat",[CR]:"fire-fn",[PR]:"fire-fn-compat",[NR]:"fire-iid",[DR]:"fire-iid-compat",[LR]:"fire-fcm",[OR]:"fire-fcm-compat",[jR]:"fire-perf",[MR]:"fire-perf-compat",[VR]:"fire-rc",[UR]:"fire-rc-compat",[FR]:"fire-gcs",[zR]:"fire-gcs-compat",[$R]:"fire-fst",[WR]:"fire-fst-compat",[BR]:"fire-vertex","fire-js":"fire-js",[HR]:"fire-js-all"};/**
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
 */const Sl=new Map,KR=new Map,hp=new Map;function Uv(t,e){try{t.container.addComponent(e)}catch(n){Rr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Lo(t){const e=t.name;if(hp.has(e))return Rr.debug(`There were multiple attempts to register component ${e}.`),!1;hp.set(e,t);for(const n of Sl.values())Uv(n,t);for(const n of KR.values())Uv(n,t);return!0}function Mm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function qn(t){return t.settings!==void 0}/**
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
 */const QR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ei=new Hl("app","Firebase",QR);/**
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
 */class YR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ei.create("app-deleted",{appName:this._name})}}/**
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
 */const Ko=qR;function kE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:dp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ei.create("bad-app-name",{appName:String(i)});if(n||(n=TE()),!n)throw Ei.create("no-options");const s=Sl.get(i);if(s){if(Xc(n,s.options)&&Xc(r,s.config))return s;throw Ei.create("duplicate-app",{appName:i})}const o=new nR(i);for(const u of hp.values())o.addComponent(u);const a=new YR(n,r,o);return Sl.set(i,a),a}function bE(t=dp){const e=Sl.get(t);if(!e&&t===dp&&TE())return kE();if(!e)throw Ei.create("no-app",{appName:t});return e}function Fv(){return Array.from(Sl.values())}function Ti(t,e,n){var r;let i=(r=GR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rr.warn(a.join(" "));return}Lo(new gs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const XR="firebase-heartbeat-database",JR=1,Al="firebase-heartbeat-store";let Wh=null;function RE(){return Wh||(Wh=mR(XR,JR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Al)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ei.create("idb-open",{originalErrorMessage:t.message})})),Wh}async function ZR(t){try{const n=(await RE()).transaction(Al),r=await n.objectStore(Al).get(CE(t));return await n.done,r}catch(e){if(e instanceof Mr)Rr.warn(e.message);else{const n=Ei.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rr.warn(n.message)}}}async function zv(t,e){try{const r=(await RE()).transaction(Al,"readwrite");await r.objectStore(Al).put(e,CE(t)),await r.done}catch(n){if(n instanceof Mr)Rr.warn(n.message);else{const r=Ei.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Rr.warn(r.message)}}}function CE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const eC=1024,tC=30*24*60*60*1e3;class nC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new iC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=$v();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=tC}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Rr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=$v(),{heartbeatsToSend:r,unsentEntries:i}=rC(this._heartbeatsCache.heartbeats),s=Yc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Rr.warn(n),""}}}function $v(){return new Date().toISOString().substring(0,10)}function rC(t,e=eC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Bv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Bv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class iC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wb()?Hb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ZR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Bv(t){return Yc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function sC(t){Lo(new gs("platform-logger",e=>new vR(e),"PRIVATE")),Lo(new gs("heartbeat",e=>new nC(e),"PRIVATE")),Ti(cp,Vv,t),Ti(cp,Vv,"esm2017"),Ti("fire-js","")}sC("");function Vm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function PE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oC=PE,NE=new Hl("auth","Firebase",PE());/**
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
 */const Jc=new Om("@firebase/auth");function aC(t,...e){Jc.logLevel<=fe.WARN&&Jc.warn(`Auth (${Ko}): ${t}`,...e)}function dc(t,...e){Jc.logLevel<=fe.ERROR&&Jc.error(`Auth (${Ko}): ${t}`,...e)}/**
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
 */function Ln(t,...e){throw Um(t,...e)}function Qn(t,...e){return Um(t,...e)}function DE(t,e,n){const r=Object.assign(Object.assign({},oC()),{[e]:n});return new Hl("auth","Firebase",r).create(e,{appName:t.name})}function Tr(t){return DE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Um(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return NE.create(t,...e)}function re(t,e,...n){if(!t)throw Um(e,...n)}function _r(t){const e="INTERNAL ASSERTION FAILED: "+t;throw dc(e),new Error(e)}function Cr(t,e){t||_r(e)}/**
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
 */function fp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function lC(){return Wv()==="http:"||Wv()==="https:"}function Wv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function uC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lC()||Fb()||"connection"in navigator)?navigator.onLine:!0}function cC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Gl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Cr(n>e,"Short delay should be less than long delay!"),this.isMobile=Mb()||zb()}get(){return uC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Fm(t,e){Cr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class LE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_r("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_r("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_r("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const dC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const hC=new Gl(3e4,6e4);function Vr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function nr(t,e,n,r,i={}){return OE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ql(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},s);return Ub()||(d.referrerPolicy="no-referrer"),LE.fetch()(jE(t,t.config.apiHost,n,a),d)})}async function OE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},dC),e);try{const i=new pC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Wu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,d]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Wu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Wu(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw DE(t,f,d);Ln(t,f)}}catch(i){if(i instanceof Mr)throw i;Ln(t,"network-request-failed",{message:String(i)})}}async function Kl(t,e,n,r,i={}){const s=await nr(t,e,n,r,i);return"mfaPendingCredential"in s&&Ln(t,"multi-factor-auth-required",{_serverResponse:s}),s}function jE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Fm(t.config,i):`${t.config.apiScheme}://${i}`}function fC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class pC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Qn(this.auth,"network-request-failed")),hC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Wu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Qn(t,e,r);return i.customData._tokenResponse=n,i}function Hv(t){return t!==void 0&&t.enterprise!==void 0}class mC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return fC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function gC(t,e){return nr(t,"GET","/v2/recaptchaConfig",Vr(t,e))}/**
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
 */async function yC(t,e){return nr(t,"POST","/v1/accounts:delete",e)}async function ME(t,e){return nr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function tl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vC(t,e=!1){const n=Ge(t),r=await n.getIdToken(e),i=zm(r);re(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:tl(Hh(i.auth_time)),issuedAtTime:tl(Hh(i.iat)),expirationTime:tl(Hh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Hh(t){return Number(t)*1e3}function zm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return dc("JWT malformed, contained fewer than 3 sections"),null;try{const i=xE(n);return i?JSON.parse(i):(dc("Failed to decode base64 JWT payload"),null)}catch(i){return dc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function qv(t){const e=zm(t);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Oo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Mr&&_C(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function _C({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class wC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class pp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=tl(this.lastLoginAt),this.creationTime=tl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Zc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Oo(t,ME(n,{idToken:r}));re(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?VE(s.providerUserInfo):[],a=EC(t.providerData,o),u=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),f=u?d:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new pp(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function xC(t){const e=Ge(t);await Zc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function EC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function VE(t){return t.map(e=>{var{providerId:n}=e,r=Vm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function TC(t,e){const n=await OE(t,{},async()=>{const r=ql({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=jE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",LE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function IC(t,e){return nr(t,"POST","/v2/accounts:revokeToken",Vr(t,e))}/**
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
 */class xo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){re(e.length!==0,"internal-error");const n=qv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await TC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new xo;return r&&(re(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(re(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(re(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xo,this.toJSON())}_performRefresh(){return _r("not implemented")}}/**
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
 */function Kr(t,e){re(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class wr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Vm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new pp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Oo(this,this.stsTokenManager.getToken(this.auth,e));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vC(this,e)}reload(){return xC(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new wr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Zc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qn(this.auth.app))return Promise.reject(Tr(this.auth));const e=await this.getIdToken();return await Oo(this,yC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,d,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,I=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,E=(d=n.createdAt)!==null&&d!==void 0?d:void 0,_=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:S,emailVerified:O,isAnonymous:j,providerData:D,stsTokenManager:x}=n;re(S&&x,e,"internal-error");const y=xo.fromJSON(this.name,x);re(typeof S=="string",e,"internal-error"),Kr(m,e.name),Kr(g,e.name),re(typeof O=="boolean",e,"internal-error"),re(typeof j=="boolean",e,"internal-error"),Kr(I,e.name),Kr(C,e.name),Kr(k,e.name),Kr(P,e.name),Kr(E,e.name),Kr(_,e.name);const T=new wr({uid:S,auth:e,email:g,emailVerified:O,displayName:m,isAnonymous:j,photoURL:C,phoneNumber:I,tenantId:k,stsTokenManager:y,createdAt:E,lastLoginAt:_});return D&&Array.isArray(D)&&(T.providerData=D.map(A=>Object.assign({},A))),P&&(T._redirectEventId=P),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new xo;i.updateFromServerResponse(n);const s=new wr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Zc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];re(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?VE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new xo;a.updateFromIdToken(r);const u=new wr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new pp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,d),u}}/**
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
 */const Gv=new Map;function xr(t){Cr(t instanceof Function,"Expected a class definition");let e=Gv.get(t);return e?(Cr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Gv.set(t,e),e)}/**
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
 */class UE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}UE.type="NONE";const Kv=UE;/**
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
 */function hc(t,e,n){return`firebase:${t}:${e}:${n}`}class Eo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=hc(this.userKey,i.apiKey,s),this.fullPersistenceKey=hc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?wr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Eo(xr(Kv),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||xr(Kv);const o=hc(r,e.config.apiKey,e.name);let a=null;for(const d of n)try{const f=await d._get(o);if(f){const m=wr._fromJSON(e,f);d!==s&&(a=m),s=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Eo(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(o)}catch{}})),new Eo(s,e,r))}}/**
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
 */function Qv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(BE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(FE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(HE(e))return"Blackberry";if(qE(e))return"Webos";if(zE(e))return"Safari";if((e.includes("chrome/")||$E(e))&&!e.includes("edge/"))return"Chrome";if(WE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function FE(t=Nt()){return/firefox\//i.test(t)}function zE(t=Nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $E(t=Nt()){return/crios\//i.test(t)}function BE(t=Nt()){return/iemobile/i.test(t)}function WE(t=Nt()){return/android/i.test(t)}function HE(t=Nt()){return/blackberry/i.test(t)}function qE(t=Nt()){return/webos/i.test(t)}function $m(t=Nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function SC(t=Nt()){var e;return $m(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function AC(){return $b()&&document.documentMode===10}function GE(t=Nt()){return $m(t)||WE(t)||qE(t)||HE(t)||/windows phone/i.test(t)||BE(t)}/**
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
 */function KE(t,e=[]){let n;switch(t){case"Browser":n=Qv(Nt());break;case"Worker":n=`${Qv(Nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ko}/${r}`}/**
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
 */class kC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function bC(t,e={}){return nr(t,"GET","/v2/passwordPolicy",Vr(t,e))}/**
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
 */const RC=6;class CC{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:RC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class PC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yv(this),this.idTokenSubscription=new Yv(this),this.beforeStateQueue=new kC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=NE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Eo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ME(this,{idToken:e}),r=await wr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(qn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Zc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=cC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qn(this.app))return Promise.reject(Tr(this));const n=e?Ge(e):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qn(this.app)?Promise.reject(Tr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qn(this.app)?Promise.reject(Tr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await bC(this),n=new CC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Hl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await IC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xr(e)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await Eo.create(this,[xr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=KE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&aC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Oi(t){return Ge(t)}class Yv{constructor(e){this.auth=e,this.observer=null,this.addObserver=Yb(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Md={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function NC(t){Md=t}function QE(t){return Md.loadJS(t)}function DC(){return Md.recaptchaEnterpriseScript}function LC(){return Md.gapiScript}function OC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const jC="recaptcha-enterprise",MC="NO_RECAPTCHA";class VC{constructor(e){this.type=jC,this.auth=Oi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{gC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const d=new mC(u);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,o(d.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;Hv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(d=>{o(d)}).catch(()=>{o(MC)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Hv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=DC();u.length!==0&&(u+=a),QE(u).then(()=>{i(a,s,o)}).catch(d=>{o(d)})}}).catch(a=>{o(a)})})}}async function Xv(t,e,n,r=!1){const i=new VC(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ed(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Xv(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Xv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function UC(t,e){const n=Mm(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Xc(s,e??{}))return i;Ln(i,"already-initialized")}return n.initialize({options:e})}function FC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function zC(t,e,n){const r=Oi(t);re(r._canInitEmulator,r,"emulator-config-failed"),re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=YE(e),{host:o,port:a}=$C(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),BC()}function YE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $C(t){const e=YE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Jv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Jv(o)}}}function Jv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function BC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Bm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _r("not implemented")}_getIdTokenResponse(e){return _r("not implemented")}_linkToIdToken(e,n){return _r("not implemented")}_getReauthenticationResolver(e){return _r("not implemented")}}async function WC(t,e){return nr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function HC(t,e){return Kl(t,"POST","/v1/accounts:signInWithPassword",Vr(t,e))}async function qC(t,e){return nr(t,"POST","/v1/accounts:sendOobCode",Vr(t,e))}async function GC(t,e){return qC(t,e)}/**
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
 */async function KC(t,e){return Kl(t,"POST","/v1/accounts:signInWithEmailLink",Vr(t,e))}async function QC(t,e){return Kl(t,"POST","/v1/accounts:signInWithEmailLink",Vr(t,e))}/**
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
 */class kl extends Bm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new kl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new kl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ed(e,n,"signInWithPassword",HC);case"emailLink":return KC(e,{email:this._email,oobCode:this._password});default:Ln(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ed(e,r,"signUpPassword",WC);case"emailLink":return QC(e,{idToken:n,email:this._email,oobCode:this._password});default:Ln(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function To(t,e){return Kl(t,"POST","/v1/accounts:signInWithIdp",Vr(t,e))}/**
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
 */const YC="http://localhost";class ys extends Bm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ys(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Vm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ys(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return To(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,To(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,To(e,n)}buildRequest(){const e={requestUri:YC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ql(n)}return e}}/**
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
 */function XC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function JC(t){const e=Ua(Fa(t)).link,n=e?Ua(Fa(e)).deep_link_id:null,r=Ua(Fa(t)).deep_link_id;return(r?Ua(Fa(r)).link:null)||r||n||e||t}class Wm{constructor(e){var n,r,i,s,o,a;const u=Ua(Fa(e)),d=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,m=XC((i=u.mode)!==null&&i!==void 0?i:null);re(d&&f&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=JC(e);try{return new Wm(n)}catch{return null}}}/**
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
 */class Qo{constructor(){this.providerId=Qo.PROVIDER_ID}static credential(e,n){return kl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Wm.parseLink(n);return re(r,"argument-error"),kl._fromEmailAndCode(e,r.code,r.tenantId)}}Qo.PROVIDER_ID="password";Qo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class XE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ql extends XE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ii extends Ql{constructor(){super("facebook.com")}static credential(e){return ys._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ii.credentialFromTaggedObject(e)}static credentialFromError(e){return ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ii.credential(e.oauthAccessToken)}catch{return null}}}ii.FACEBOOK_SIGN_IN_METHOD="facebook.com";ii.PROVIDER_ID="facebook.com";/**
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
 */class si extends Ql{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ys._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return si.credentialFromTaggedObject(e)}static credentialFromError(e){return si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return si.credential(n,r)}catch{return null}}}si.GOOGLE_SIGN_IN_METHOD="google.com";si.PROVIDER_ID="google.com";/**
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
 */class oi extends Ql{constructor(){super("github.com")}static credential(e){return ys._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return oi.credential(e.oauthAccessToken)}catch{return null}}}oi.GITHUB_SIGN_IN_METHOD="github.com";oi.PROVIDER_ID="github.com";/**
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
 */class ai extends Ql{constructor(){super("twitter.com")}static credential(e,n){return ys._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ai.credentialFromTaggedObject(e)}static credentialFromError(e){return ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ai.credential(n,r)}catch{return null}}}ai.TWITTER_SIGN_IN_METHOD="twitter.com";ai.PROVIDER_ID="twitter.com";/**
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
 */async function ZC(t,e){return Kl(t,"POST","/v1/accounts:signUp",Vr(t,e))}/**
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
 */class vs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await wr._fromIdTokenResponse(e,r,i),o=Zv(r);return new vs({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Zv(r);return new vs({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Zv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class td extends Mr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,td.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new td(e,n,r,i)}}function JE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?td._fromErrorAndOperation(t,s,e,r):s})}async function eP(t,e,n=!1){const r=await Oo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vs._forOperation(t,"link",r)}/**
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
 */async function tP(t,e,n=!1){const{auth:r}=t;if(qn(r.app))return Promise.reject(Tr(r));const i="reauthenticate";try{const s=await Oo(t,JE(r,i,e,t),n);re(s.idToken,r,"internal-error");const o=zm(s.idToken);re(o,r,"internal-error");const{sub:a}=o;return re(t.uid===a,r,"user-mismatch"),vs._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ln(r,"user-mismatch"),s}}/**
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
 */async function ZE(t,e,n=!1){if(qn(t.app))return Promise.reject(Tr(t));const r="signIn",i=await JE(t,r,e),s=await vs._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function nP(t,e){return ZE(Oi(t),e)}/**
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
 */async function e1(t){const e=Oi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function rP(t,e,n){const r=Oi(t);await ed(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",GC)}async function iP(t,e,n){if(qn(t.app))return Promise.reject(Tr(t));const r=Oi(t),o=await ed(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ZC).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&e1(t),u}),a=await vs._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function sP(t,e,n){return qn(t.app)?Promise.reject(Tr(t)):nP(Ge(t),Qo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&e1(t),r})}/**
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
 */async function oP(t,e){return nr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function t1(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ge(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Oo(r,oP(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function aP(t,e,n,r){return Ge(t).onIdTokenChanged(e,n,r)}function lP(t,e,n){return Ge(t).beforeAuthStateChanged(e,n)}function uP(t,e,n,r){return Ge(t).onAuthStateChanged(e,n,r)}function cP(t){return Ge(t).signOut()}const nd="__sak";/**
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
 */class n1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(nd,"1"),this.storage.removeItem(nd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const dP=1e3,hP=10;class r1 extends n1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=GE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);AC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,hP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},dP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}r1.type="LOCAL";const fP=r1;/**
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
 */class i1 extends n1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}i1.type="SESSION";const s1=i1;/**
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
 */function pP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Vd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Vd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async d=>d(n.origin,s)),u=await pP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vd.receivers=[];/**
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
 */function Hm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class mP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const d=Hm("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===d)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Yn(){return window}function gP(t){Yn().location.href=t}/**
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
 */function o1(){return typeof Yn().WorkerGlobalScope<"u"&&typeof Yn().importScripts=="function"}async function yP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function _P(){return o1()?self:null}/**
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
 */const a1="firebaseLocalStorageDb",wP=1,rd="firebaseLocalStorage",l1="fbase_key";class Yl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ud(t,e){return t.transaction([rd],e?"readwrite":"readonly").objectStore(rd)}function xP(){const t=indexedDB.deleteDatabase(a1);return new Yl(t).toPromise()}function mp(){const t=indexedDB.open(a1,wP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(rd,{keyPath:l1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(rd)?e(r):(r.close(),await xP(),e(await mp()))})})}async function e_(t,e,n){const r=Ud(t,!0).put({[l1]:e,value:n});return new Yl(r).toPromise()}async function EP(t,e){const n=Ud(t,!1).get(e),r=await new Yl(n).toPromise();return r===void 0?null:r.value}function t_(t,e){const n=Ud(t,!0).delete(e);return new Yl(n).toPromise()}const TP=800,IP=3;class u1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>IP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return o1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vd._getInstance(_P()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await yP(),!this.activeServiceWorker)return;this.sender=new mP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mp();return await e_(e,nd,"1"),await t_(e,nd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>e_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>EP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>t_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ud(i,!1).getAll();return new Yl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),TP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}u1.type="LOCAL";const SP=u1;new Gl(3e4,6e4);/**
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
 */function AP(t,e){return e?xr(e):(re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class qm extends Bm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return To(e,this._buildIdpRequest())}_linkToIdToken(e,n){return To(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return To(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function kP(t){return ZE(t.auth,new qm(t),t.bypassAuthState)}function bP(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),tP(n,new qm(t),t.bypassAuthState)}async function RP(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),eP(n,new qm(t),t.bypassAuthState)}/**
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
 */class c1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kP;case"linkViaPopup":case"linkViaRedirect":return RP;case"reauthViaPopup":case"reauthViaRedirect":return bP;default:Ln(this.auth,"internal-error")}}resolve(e){Cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const CP=new Gl(2e3,1e4);class ho extends c1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ho.currentPopupAction&&ho.currentPopupAction.cancel(),ho.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){Cr(this.filter.length===1,"Popup operations only handle one event");const e=Hm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ho.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,CP.get())};e()}}ho.currentPopupAction=null;/**
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
 */const PP="pendingRedirect",fc=new Map;class NP extends c1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fc.get(this.auth._key());if(!e){try{const r=await DP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fc.set(this.auth._key(),e)}return this.bypassAuthState||fc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function DP(t,e){const n=jP(e),r=OP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function LP(t,e){fc.set(t._key(),e)}function OP(t){return xr(t._redirectPersistence)}function jP(t){return hc(PP,t.config.apiKey,t.name)}async function MP(t,e,n=!1){if(qn(t.app))return Promise.reject(Tr(t));const r=Oi(t),i=AP(r,e),o=await new NP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const VP=10*60*1e3;class UP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!FP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!d1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Qn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=VP&&this.cachedEventUids.clear(),this.cachedEventUids.has(n_(e))}saveEventToCache(e){this.cachedEventUids.add(n_(e)),this.lastProcessedEventTime=Date.now()}}function n_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function d1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function FP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return d1(t);default:return!1}}/**
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
 */async function zP(t,e={}){return nr(t,"GET","/v1/projects",e)}/**
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
 */const $P=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BP=/^https?/;async function WP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zP(t);for(const n of e)try{if(HP(n))return}catch{}Ln(t,"unauthorized-domain")}function HP(t){const e=fp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!BP.test(n))return!1;if($P.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const qP=new Gl(3e4,6e4);function r_(){const t=Yn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function GP(t){return new Promise((e,n)=>{var r,i,s;function o(){r_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{r_(),n(Qn(t,"network-request-failed"))},timeout:qP.get()})}if(!((i=(r=Yn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Yn().gapi)===null||s===void 0)&&s.load)o();else{const a=OC("iframefcb");return Yn()[a]=()=>{gapi.load?o():n(Qn(t,"network-request-failed"))},QE(`${LC()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw pc=null,e})}let pc=null;function KP(t){return pc=pc||GP(t),pc}/**
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
 */const QP=new Gl(5e3,15e3),YP="__/auth/iframe",XP="emulator/auth/iframe",JP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ZP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eN(t){const e=t.config;re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fm(e,XP):`https://${t.config.authDomain}/${YP}`,r={apiKey:e.apiKey,appName:t.name,v:Ko},i=ZP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ql(r).slice(1)}`}async function tN(t){const e=await KP(t),n=Yn().gapi;return re(n,t,"internal-error"),e.open({where:document.body,url:eN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:JP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Qn(t,"network-request-failed"),a=Yn().setTimeout(()=>{s(o)},QP.get());function u(){Yn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const nN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rN=500,iN=600,sN="_blank",oN="http://localhost";class i_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aN(t,e,n,r=rN,i=iN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},nN),{width:r.toString(),height:i.toString(),top:s,left:o}),d=Nt().toLowerCase();n&&(a=$E(d)?sN:n),FE(d)&&(e=e||oN,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[I,C])=>`${g}${I}=${C},`,"");if(SC(d)&&a!=="_self")return lN(e||"",a),new i_(null);const m=window.open(e||"",a,f);re(m,t,"popup-blocked");try{m.focus()}catch{}return new i_(m)}function lN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const uN="__/auth/handler",cN="emulator/auth/handler",dN=encodeURIComponent("fac");async function s_(t,e,n,r,i,s){re(t.config.authDomain,t,"auth-domain-config-required"),re(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ko,eventId:i};if(e instanceof XE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Qb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Ql){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const u=await t._getAppCheckToken(),d=u?`#${dN}=${encodeURIComponent(u)}`:"";return`${hN(t)}?${ql(a).slice(1)}${d}`}function hN({config:t}){return t.emulator?Fm(t,cN):`https://${t.authDomain}/${uN}`}/**
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
 */const qh="webStorageSupport";class fN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=s1,this._completeRedirectFn=MP,this._overrideRedirectResult=LP}async _openPopup(e,n,r,i){var s;Cr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await s_(e,n,r,fp(),i);return aN(e,o,Hm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await s_(e,n,r,fp(),i);return gP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Cr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await tN(e),r=new UP(e);return n.register("authEvent",i=>(re(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qh,{type:qh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[qh];o!==void 0&&n(!!o),Ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=WP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return GE()||zE()||$m()}}const pN=fN;var o_="@firebase/auth",a_="1.7.9";/**
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
 */class mN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function gN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yN(t){Lo(new gs("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;re(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:KE(t)},d=new PC(r,i,s,u);return FC(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Lo(new gs("auth-internal",e=>{const n=Oi(e.getProvider("auth").getImmediate());return(r=>new mN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ti(o_,a_,gN(t)),Ti(o_,a_,"esm2017")}/**
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
 */const vN=5*60,_N=IE("authIdTokenMaxAge")||vN;let l_=null;const wN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>_N)return;const i=n==null?void 0:n.token;l_!==i&&(l_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function xN(t=bE()){const e=Mm(t,"auth");if(e.isInitialized())return e.getImmediate();const n=UC(t,{popupRedirectResolver:pN,persistence:[SP,fP,s1]}),r=IE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=wN(s.toString());lP(n,o,()=>o(n.currentUser)),aP(n,a=>o(a))}}const i=EE("auth");return i&&zC(n,`http://${i}`),n}function EN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}NC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Qn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",EN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yN("Browser");var u_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cs,h1;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,y){function T(){}T.prototype=y.prototype,x.D=y.prototype,x.prototype=new T,x.prototype.constructor=x,x.C=function(A,N,M){for(var b=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)b[Ke-2]=arguments[Ke];return y.prototype[N].apply(A,b)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(x,y,T){T||(T=0);var A=Array(16);if(typeof y=="string")for(var N=0;16>N;++N)A[N]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(N=0;16>N;++N)A[N]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=x.g[0],T=x.g[1],N=x.g[2];var M=x.g[3],b=y+(M^T&(N^M))+A[0]+3614090360&4294967295;y=T+(b<<7&4294967295|b>>>25),b=M+(N^y&(T^N))+A[1]+3905402710&4294967295,M=y+(b<<12&4294967295|b>>>20),b=N+(T^M&(y^T))+A[2]+606105819&4294967295,N=M+(b<<17&4294967295|b>>>15),b=T+(y^N&(M^y))+A[3]+3250441966&4294967295,T=N+(b<<22&4294967295|b>>>10),b=y+(M^T&(N^M))+A[4]+4118548399&4294967295,y=T+(b<<7&4294967295|b>>>25),b=M+(N^y&(T^N))+A[5]+1200080426&4294967295,M=y+(b<<12&4294967295|b>>>20),b=N+(T^M&(y^T))+A[6]+2821735955&4294967295,N=M+(b<<17&4294967295|b>>>15),b=T+(y^N&(M^y))+A[7]+4249261313&4294967295,T=N+(b<<22&4294967295|b>>>10),b=y+(M^T&(N^M))+A[8]+1770035416&4294967295,y=T+(b<<7&4294967295|b>>>25),b=M+(N^y&(T^N))+A[9]+2336552879&4294967295,M=y+(b<<12&4294967295|b>>>20),b=N+(T^M&(y^T))+A[10]+4294925233&4294967295,N=M+(b<<17&4294967295|b>>>15),b=T+(y^N&(M^y))+A[11]+2304563134&4294967295,T=N+(b<<22&4294967295|b>>>10),b=y+(M^T&(N^M))+A[12]+1804603682&4294967295,y=T+(b<<7&4294967295|b>>>25),b=M+(N^y&(T^N))+A[13]+4254626195&4294967295,M=y+(b<<12&4294967295|b>>>20),b=N+(T^M&(y^T))+A[14]+2792965006&4294967295,N=M+(b<<17&4294967295|b>>>15),b=T+(y^N&(M^y))+A[15]+1236535329&4294967295,T=N+(b<<22&4294967295|b>>>10),b=y+(N^M&(T^N))+A[1]+4129170786&4294967295,y=T+(b<<5&4294967295|b>>>27),b=M+(T^N&(y^T))+A[6]+3225465664&4294967295,M=y+(b<<9&4294967295|b>>>23),b=N+(y^T&(M^y))+A[11]+643717713&4294967295,N=M+(b<<14&4294967295|b>>>18),b=T+(M^y&(N^M))+A[0]+3921069994&4294967295,T=N+(b<<20&4294967295|b>>>12),b=y+(N^M&(T^N))+A[5]+3593408605&4294967295,y=T+(b<<5&4294967295|b>>>27),b=M+(T^N&(y^T))+A[10]+38016083&4294967295,M=y+(b<<9&4294967295|b>>>23),b=N+(y^T&(M^y))+A[15]+3634488961&4294967295,N=M+(b<<14&4294967295|b>>>18),b=T+(M^y&(N^M))+A[4]+3889429448&4294967295,T=N+(b<<20&4294967295|b>>>12),b=y+(N^M&(T^N))+A[9]+568446438&4294967295,y=T+(b<<5&4294967295|b>>>27),b=M+(T^N&(y^T))+A[14]+3275163606&4294967295,M=y+(b<<9&4294967295|b>>>23),b=N+(y^T&(M^y))+A[3]+4107603335&4294967295,N=M+(b<<14&4294967295|b>>>18),b=T+(M^y&(N^M))+A[8]+1163531501&4294967295,T=N+(b<<20&4294967295|b>>>12),b=y+(N^M&(T^N))+A[13]+2850285829&4294967295,y=T+(b<<5&4294967295|b>>>27),b=M+(T^N&(y^T))+A[2]+4243563512&4294967295,M=y+(b<<9&4294967295|b>>>23),b=N+(y^T&(M^y))+A[7]+1735328473&4294967295,N=M+(b<<14&4294967295|b>>>18),b=T+(M^y&(N^M))+A[12]+2368359562&4294967295,T=N+(b<<20&4294967295|b>>>12),b=y+(T^N^M)+A[5]+4294588738&4294967295,y=T+(b<<4&4294967295|b>>>28),b=M+(y^T^N)+A[8]+2272392833&4294967295,M=y+(b<<11&4294967295|b>>>21),b=N+(M^y^T)+A[11]+1839030562&4294967295,N=M+(b<<16&4294967295|b>>>16),b=T+(N^M^y)+A[14]+4259657740&4294967295,T=N+(b<<23&4294967295|b>>>9),b=y+(T^N^M)+A[1]+2763975236&4294967295,y=T+(b<<4&4294967295|b>>>28),b=M+(y^T^N)+A[4]+1272893353&4294967295,M=y+(b<<11&4294967295|b>>>21),b=N+(M^y^T)+A[7]+4139469664&4294967295,N=M+(b<<16&4294967295|b>>>16),b=T+(N^M^y)+A[10]+3200236656&4294967295,T=N+(b<<23&4294967295|b>>>9),b=y+(T^N^M)+A[13]+681279174&4294967295,y=T+(b<<4&4294967295|b>>>28),b=M+(y^T^N)+A[0]+3936430074&4294967295,M=y+(b<<11&4294967295|b>>>21),b=N+(M^y^T)+A[3]+3572445317&4294967295,N=M+(b<<16&4294967295|b>>>16),b=T+(N^M^y)+A[6]+76029189&4294967295,T=N+(b<<23&4294967295|b>>>9),b=y+(T^N^M)+A[9]+3654602809&4294967295,y=T+(b<<4&4294967295|b>>>28),b=M+(y^T^N)+A[12]+3873151461&4294967295,M=y+(b<<11&4294967295|b>>>21),b=N+(M^y^T)+A[15]+530742520&4294967295,N=M+(b<<16&4294967295|b>>>16),b=T+(N^M^y)+A[2]+3299628645&4294967295,T=N+(b<<23&4294967295|b>>>9),b=y+(N^(T|~M))+A[0]+4096336452&4294967295,y=T+(b<<6&4294967295|b>>>26),b=M+(T^(y|~N))+A[7]+1126891415&4294967295,M=y+(b<<10&4294967295|b>>>22),b=N+(y^(M|~T))+A[14]+2878612391&4294967295,N=M+(b<<15&4294967295|b>>>17),b=T+(M^(N|~y))+A[5]+4237533241&4294967295,T=N+(b<<21&4294967295|b>>>11),b=y+(N^(T|~M))+A[12]+1700485571&4294967295,y=T+(b<<6&4294967295|b>>>26),b=M+(T^(y|~N))+A[3]+2399980690&4294967295,M=y+(b<<10&4294967295|b>>>22),b=N+(y^(M|~T))+A[10]+4293915773&4294967295,N=M+(b<<15&4294967295|b>>>17),b=T+(M^(N|~y))+A[1]+2240044497&4294967295,T=N+(b<<21&4294967295|b>>>11),b=y+(N^(T|~M))+A[8]+1873313359&4294967295,y=T+(b<<6&4294967295|b>>>26),b=M+(T^(y|~N))+A[15]+4264355552&4294967295,M=y+(b<<10&4294967295|b>>>22),b=N+(y^(M|~T))+A[6]+2734768916&4294967295,N=M+(b<<15&4294967295|b>>>17),b=T+(M^(N|~y))+A[13]+1309151649&4294967295,T=N+(b<<21&4294967295|b>>>11),b=y+(N^(T|~M))+A[4]+4149444226&4294967295,y=T+(b<<6&4294967295|b>>>26),b=M+(T^(y|~N))+A[11]+3174756917&4294967295,M=y+(b<<10&4294967295|b>>>22),b=N+(y^(M|~T))+A[2]+718787259&4294967295,N=M+(b<<15&4294967295|b>>>17),b=T+(M^(N|~y))+A[9]+3951481745&4294967295,x.g[0]=x.g[0]+y&4294967295,x.g[1]=x.g[1]+(N+(b<<21&4294967295|b>>>11))&4294967295,x.g[2]=x.g[2]+N&4294967295,x.g[3]=x.g[3]+M&4294967295}r.prototype.u=function(x,y){y===void 0&&(y=x.length);for(var T=y-this.blockSize,A=this.B,N=this.h,M=0;M<y;){if(N==0)for(;M<=T;)i(this,x,M),M+=this.blockSize;if(typeof x=="string"){for(;M<y;)if(A[N++]=x.charCodeAt(M++),N==this.blockSize){i(this,A),N=0;break}}else for(;M<y;)if(A[N++]=x[M++],N==this.blockSize){i(this,A),N=0;break}}this.h=N,this.o+=y},r.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var y=1;y<x.length-8;++y)x[y]=0;var T=8*this.o;for(y=x.length-8;y<x.length;++y)x[y]=T&255,T/=256;for(this.u(x),x=Array(16),y=T=0;4>y;++y)for(var A=0;32>A;A+=8)x[T++]=this.g[y]>>>A&255;return x};function s(x,y){var T=a;return Object.prototype.hasOwnProperty.call(T,x)?T[x]:T[x]=y(x)}function o(x,y){this.h=y;for(var T=[],A=!0,N=x.length-1;0<=N;N--){var M=x[N]|0;A&&M==y||(T[N]=M,A=!1)}this.g=T}var a={};function u(x){return-128<=x&&128>x?s(x,function(y){return new o([y|0],0>y?-1:0)}):new o([x|0],0>x?-1:0)}function d(x){if(isNaN(x)||!isFinite(x))return m;if(0>x)return P(d(-x));for(var y=[],T=1,A=0;x>=T;A++)y[A]=x/T|0,T*=4294967296;return new o(y,0)}function f(x,y){if(x.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(x.charAt(0)=="-")return P(f(x.substring(1),y));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=d(Math.pow(y,8)),A=m,N=0;N<x.length;N+=8){var M=Math.min(8,x.length-N),b=parseInt(x.substring(N,N+M),y);8>M?(M=d(Math.pow(y,M)),A=A.j(M).add(d(b))):(A=A.j(T),A=A.add(d(b)))}return A}var m=u(0),g=u(1),I=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-P(this).m();for(var x=0,y=1,T=0;T<this.g.length;T++){var A=this.i(T);x+=(0<=A?A:4294967296+A)*y,y*=4294967296}return x},t.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(C(this))return"0";if(k(this))return"-"+P(this).toString(x);for(var y=d(Math.pow(x,6)),T=this,A="";;){var N=O(T,y).g;T=E(T,N.j(y));var M=((0<T.g.length?T.g[0]:T.h)>>>0).toString(x);if(T=N,C(T))return M+A;for(;6>M.length;)M="0"+M;A=M+A}},t.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function C(x){if(x.h!=0)return!1;for(var y=0;y<x.g.length;y++)if(x.g[y]!=0)return!1;return!0}function k(x){return x.h==-1}t.l=function(x){return x=E(this,x),k(x)?-1:C(x)?0:1};function P(x){for(var y=x.g.length,T=[],A=0;A<y;A++)T[A]=~x.g[A];return new o(T,~x.h).add(g)}t.abs=function(){return k(this)?P(this):this},t.add=function(x){for(var y=Math.max(this.g.length,x.g.length),T=[],A=0,N=0;N<=y;N++){var M=A+(this.i(N)&65535)+(x.i(N)&65535),b=(M>>>16)+(this.i(N)>>>16)+(x.i(N)>>>16);A=b>>>16,M&=65535,b&=65535,T[N]=b<<16|M}return new o(T,T[T.length-1]&-2147483648?-1:0)};function E(x,y){return x.add(P(y))}t.j=function(x){if(C(this)||C(x))return m;if(k(this))return k(x)?P(this).j(P(x)):P(P(this).j(x));if(k(x))return P(this.j(P(x)));if(0>this.l(I)&&0>x.l(I))return d(this.m()*x.m());for(var y=this.g.length+x.g.length,T=[],A=0;A<2*y;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(var N=0;N<x.g.length;N++){var M=this.i(A)>>>16,b=this.i(A)&65535,Ke=x.i(N)>>>16,Xe=x.i(N)&65535;T[2*A+2*N]+=b*Xe,_(T,2*A+2*N),T[2*A+2*N+1]+=M*Xe,_(T,2*A+2*N+1),T[2*A+2*N+1]+=b*Ke,_(T,2*A+2*N+1),T[2*A+2*N+2]+=M*Ke,_(T,2*A+2*N+2)}for(A=0;A<y;A++)T[A]=T[2*A+1]<<16|T[2*A];for(A=y;A<2*y;A++)T[A]=0;return new o(T,0)};function _(x,y){for(;(x[y]&65535)!=x[y];)x[y+1]+=x[y]>>>16,x[y]&=65535,y++}function S(x,y){this.g=x,this.h=y}function O(x,y){if(C(y))throw Error("division by zero");if(C(x))return new S(m,m);if(k(x))return y=O(P(x),y),new S(P(y.g),P(y.h));if(k(y))return y=O(x,P(y)),new S(P(y.g),y.h);if(30<x.g.length){if(k(x)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var T=g,A=y;0>=A.l(x);)T=j(T),A=j(A);var N=D(T,1),M=D(A,1);for(A=D(A,2),T=D(T,2);!C(A);){var b=M.add(A);0>=b.l(x)&&(N=N.add(T),M=b),A=D(A,1),T=D(T,1)}return y=E(x,N.j(y)),new S(N,y)}for(N=m;0<=x.l(y);){for(T=Math.max(1,Math.floor(x.m()/y.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),M=d(T),b=M.j(y);k(b)||0<b.l(x);)T-=A,M=d(T),b=M.j(y);C(M)&&(M=g),N=N.add(M),x=E(x,b)}return new S(N,x)}t.A=function(x){return O(this,x).h},t.and=function(x){for(var y=Math.max(this.g.length,x.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)&x.i(A);return new o(T,this.h&x.h)},t.or=function(x){for(var y=Math.max(this.g.length,x.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)|x.i(A);return new o(T,this.h|x.h)},t.xor=function(x){for(var y=Math.max(this.g.length,x.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)^x.i(A);return new o(T,this.h^x.h)};function j(x){for(var y=x.g.length+1,T=[],A=0;A<y;A++)T[A]=x.i(A)<<1|x.i(A-1)>>>31;return new o(T,x.h)}function D(x,y){var T=y>>5;y%=32;for(var A=x.g.length-T,N=[],M=0;M<A;M++)N[M]=0<y?x.i(M+T)>>>y|x.i(M+T+1)<<32-y:x.i(M+T);return new o(N,x.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,h1=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=f,cs=o}).apply(typeof u_<"u"?u_:typeof self<"u"?self:typeof window<"u"?window:{});var Hu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var f1,za,p1,mc,gp,m1,g1,y1;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,p){return l==Array.prototype||l==Object.prototype||(l[h]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Hu=="object"&&Hu];for(var h=0;h<l.length;++h){var p=l[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(l,h){if(h)e:{var p=r;l=l.split(".");for(var v=0;v<l.length-1;v++){var V=l[v];if(!(V in p))break e;p=p[V]}l=l[l.length-1],v=p[l],h=h(v),h!=v&&h!=null&&e(p,l,{configurable:!0,writable:!0,value:h})}}function s(l,h){l instanceof String&&(l+="");var p=0,v=!1,V={next:function(){if(!v&&p<l.length){var U=p++;return{value:h(U,l[U]),done:!1}}return v=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}i("Array.prototype.values",function(l){return l||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function d(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function f(l,h,p){return l.call.apply(l.bind,arguments)}function m(l,h,p){if(!l)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,v),l.apply(h,V)}}return function(){return l.apply(h,arguments)}}function g(l,h,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function I(l,h){var p=Array.prototype.slice.call(arguments,1);return function(){var v=p.slice();return v.push.apply(v,arguments),l.apply(this,v)}}function C(l,h){function p(){}p.prototype=h.prototype,l.aa=h.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(v,V,U){for(var G=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)G[ke-2]=arguments[ke];return h.prototype[V].apply(v,G)}}function k(l){const h=l.length;if(0<h){const p=Array(h);for(let v=0;v<h;v++)p[v]=l[v];return p}return[]}function P(l,h){for(let p=1;p<arguments.length;p++){const v=arguments[p];if(u(v)){const V=l.length||0,U=v.length||0;l.length=V+U;for(let G=0;G<U;G++)l[V+G]=v[G]}else l.push(v)}}class E{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function _(l){return/^[\s\xa0]*$/.test(l)}function S(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function O(l){return O[" "](l),l}O[" "]=function(){};var j=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function D(l,h,p){for(const v in l)h.call(p,l[v],v,l)}function x(l,h){for(const p in l)h.call(void 0,l[p],p,l)}function y(l){const h={};for(const p in l)h[p]=l[p];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(l,h){let p,v;for(let V=1;V<arguments.length;V++){v=arguments[V];for(p in v)l[p]=v[p];for(let U=0;U<T.length;U++)p=T[U],Object.prototype.hasOwnProperty.call(v,p)&&(l[p]=v[p])}}function N(l){var h=1;l=l.split(":");const p=[];for(;0<h&&l.length;)p.push(l.shift()),h--;return l.length&&p.push(l.join(":")),p}function M(l){a.setTimeout(()=>{throw l},0)}function b(){var l=ee;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class Ke{constructor(){this.h=this.g=null}add(h,p){const v=Xe.get();v.set(h,p),this.h?this.h.next=v:this.g=v,this.h=v}}var Xe=new E(()=>new Xt,l=>l.reset());class Xt{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let ht,q=!1,ee=new Ke,ne=()=>{const l=a.Promise.resolve(void 0);ht=()=>{l.then(we)}};var we=()=>{for(var l;l=b();){try{l.h.call(l.g)}catch(p){M(p)}var h=Xe;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}q=!1};function X(){this.s=this.s,this.C=this.C}X.prototype.s=!1,X.prototype.ma=function(){this.s||(this.s=!0,this.N())},X.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var J=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,h),a.removeEventListener("test",p,h)}catch{}return l}();function Je(l,h){if(pe.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,v=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(j){e:{try{O(h.nodeName);var V=!0;break e}catch{}V=!1}V||(h=null)}}else p=="mouseover"?h=l.fromElement:p=="mouseout"&&(h=l.toElement);this.relatedTarget=h,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Tn[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Je.aa.h.call(this)}}C(Je,pe);var Tn={2:"touch",3:"pen",4:"mouse"};Je.prototype.h=function(){Je.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var In="closure_listenable_"+(1e6*Math.random()|0),rh=0;function ih(l,h,p,v,V){this.listener=l,this.proxy=null,this.src=h,this.type=p,this.capture=!!v,this.ha=V,this.key=++rh,this.da=this.fa=!1}function bs(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Vi(l){this.src=l,this.g={},this.h=0}Vi.prototype.add=function(l,h,p,v,V){var U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);var G=Rs(l,h,v,V);return-1<G?(h=l[G],p||(h.fa=!1)):(h=new ih(h,this.src,U,!!v,V),h.fa=p,l.push(h)),h};function na(l,h){var p=h.type;if(p in l.g){var v=l.g[p],V=Array.prototype.indexOf.call(v,h,void 0),U;(U=0<=V)&&Array.prototype.splice.call(v,V,1),U&&(bs(h),l.g[p].length==0&&(delete l.g[p],l.h--))}}function Rs(l,h,p,v){for(var V=0;V<l.length;++V){var U=l[V];if(!U.da&&U.listener==h&&U.capture==!!p&&U.ha==v)return V}return-1}var Ie="closure_lm_"+(1e6*Math.random()|0),Ui={};function Ae(l,h,p,v,V){if(Array.isArray(h)){for(var U=0;U<h.length;U++)Ae(l,h[U],p,v,V);return null}return p=ia(p),l&&l[In]?l.K(h,p,d(v)?!!v.capture:!1,V):ra(l,h,p,!1,v,V)}function ra(l,h,p,v,V,U){if(!h)throw Error("Invalid event type");var G=d(V)?!!V.capture:!!V,ke=Fi(l);if(ke||(l[Ie]=ke=new Vi(l)),p=ke.add(h,p,v,G,U),p.proxy)return p;if(v=cn(),p.proxy=v,v.src=l,v.listener=p,l.addEventListener)J||(V=G),V===void 0&&(V=!1),l.addEventListener(h.toString(),v,V);else if(l.attachEvent)l.attachEvent(Sn(h.toString()),v);else if(l.addListener&&l.removeListener)l.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return p}function cn(){function l(p){return h.call(l.src,l.listener,p)}const h=du;return l}function Fr(l,h,p,v,V){if(Array.isArray(h))for(var U=0;U<h.length;U++)Fr(l,h[U],p,v,V);else v=d(v)?!!v.capture:!!v,p=ia(p),l&&l[In]?(l=l.i,h=String(h).toString(),h in l.g&&(U=l.g[h],p=Rs(U,p,v,V),-1<p&&(bs(U[p]),Array.prototype.splice.call(U,p,1),U.length==0&&(delete l.g[h],l.h--)))):l&&(l=Fi(l))&&(h=l.g[h.toString()],l=-1,h&&(l=Rs(h,p,v,V)),(p=-1<l?h[l]:null)&&Cs(p))}function Cs(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[In])na(h.i,l);else{var p=l.type,v=l.proxy;h.removeEventListener?h.removeEventListener(p,v,l.capture):h.detachEvent?h.detachEvent(Sn(p),v):h.addListener&&h.removeListener&&h.removeListener(v),(p=Fi(h))?(na(p,l),p.h==0&&(p.src=null,h[Ie]=null)):bs(l)}}}function Sn(l){return l in Ui?Ui[l]:Ui[l]="on"+l}function du(l,h){if(l.da)l=!0;else{h=new Je(h,this);var p=l.listener,v=l.ha||l.src;l.fa&&Cs(l),l=p.call(v,h)}return l}function Fi(l){return l=l[Ie],l instanceof Vi?l:null}var Ps="__closure_events_fn_"+(1e9*Math.random()>>>0);function ia(l){return typeof l=="function"?l:(l[Ps]||(l[Ps]=function(h){return l.handleEvent(h)}),l[Ps])}function Ce(){X.call(this),this.i=new Vi(this),this.M=this,this.F=null}C(Ce,X),Ce.prototype[In]=!0,Ce.prototype.removeEventListener=function(l,h,p,v){Fr(this,l,h,p,v)};function Ve(l,h){var p,v=l.F;if(v)for(p=[];v;v=v.F)p.push(v);if(l=l.M,v=h.type||h,typeof h=="string")h=new pe(h,l);else if(h instanceof pe)h.target=h.target||l;else{var V=h;h=new pe(v,l),A(h,V)}if(V=!0,p)for(var U=p.length-1;0<=U;U--){var G=h.g=p[U];V=dn(G,v,!0,h)&&V}if(G=h.g=l,V=dn(G,v,!0,h)&&V,V=dn(G,v,!1,h)&&V,p)for(U=0;U<p.length;U++)G=h.g=p[U],V=dn(G,v,!1,h)&&V}Ce.prototype.N=function(){if(Ce.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var p=l.g[h],v=0;v<p.length;v++)bs(p[v]);delete l.g[h],l.h--}}this.F=null},Ce.prototype.K=function(l,h,p,v){return this.i.add(String(l),h,!1,p,v)},Ce.prototype.L=function(l,h,p,v){return this.i.add(String(l),h,!0,p,v)};function dn(l,h,p,v){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var V=!0,U=0;U<h.length;++U){var G=h[U];if(G&&!G.da&&G.capture==p){var ke=G.listener,ft=G.ha||G.src;G.fa&&na(l.i,G),V=ke.call(ft,v)!==!1&&V}}return V&&!v.defaultPrevented}function Ns(l,h,p){if(typeof l=="function")p&&(l=g(l,p));else if(l&&typeof l.handleEvent=="function")l=g(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function zi(l){l.g=Ns(()=>{l.g=null,l.i&&(l.i=!1,zi(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class Ds extends X{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:zi(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ir(l){X.call(this),this.h=l,this.g={}}C(ir,X);var sr=[];function $i(l){D(l.g,function(h,p){this.g.hasOwnProperty(p)&&Cs(h)},l),l.g={}}ir.prototype.N=function(){ir.aa.N.call(this),$i(this)},ir.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zr=a.JSON.stringify,hu=a.JSON.parse,fu=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Ls(){}Ls.prototype.h=null;function Os(l){return l.h||(l.h=l.i())}function js(){}var hn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function jn(){pe.call(this,"d")}C(jn,pe);function Ms(){pe.call(this,"c")}C(Ms,pe);var Mn={},sa=null;function Bi(){return sa=sa||new Ce}Mn.La="serverreachability";function oa(l){pe.call(this,Mn.La,l)}C(oa,pe);function Vn(l){const h=Bi();Ve(h,new oa(h))}Mn.STAT_EVENT="statevent";function Wi(l,h){pe.call(this,Mn.STAT_EVENT,l),this.stat=h}C(Wi,pe);function be(l){const h=Bi();Ve(h,new Wi(h,l))}Mn.Ma="timingevent";function or(l,h){pe.call(this,Mn.Ma,l),this.size=h}C(or,pe);function ar(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function lr(){this.g=!0}lr.prototype.xa=function(){this.g=!1};function sh(l,h,p,v,V,U){l.info(function(){if(l.g)if(U)for(var G="",ke=U.split("&"),ft=0;ft<ke.length;ft++){var ve=ke[ft].split("=");if(1<ve.length){var xt=ve[0];ve=ve[1];var Et=xt.split("_");G=2<=Et.length&&Et[1]=="type"?G+(xt+"="+ve+"&"):G+(xt+"=redacted&")}}else G=null;else G=U;return"XMLHTTP REQ ("+v+") [attempt "+V+"]: "+h+`
`+p+`
`+G})}function pu(l,h,p,v,V,U,G){l.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+V+"]: "+h+`
`+p+`
`+U+" "+G})}function Un(l,h,p,v){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+aa(l,p)+(v?" "+v:"")})}function mu(l,h){l.info(function(){return"TIMEOUT: "+h})}lr.prototype.info=function(){};function aa(l,h){if(!l.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var v=p[l];if(!(2>v.length)){var V=v[1];if(Array.isArray(V)&&!(1>V.length)){var U=V[0];if(U!="noop"&&U!="stop"&&U!="close")for(var G=1;G<V.length;G++)V[G]=""}}}}return zr(p)}catch{return h}}var Vs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$r={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},la;function Us(){}C(Us,Ls),Us.prototype.g=function(){return new XMLHttpRequest},Us.prototype.i=function(){return{}},la=new Us;function xe(l,h,p,v){this.j=l,this.i=h,this.l=p,this.R=v||1,this.U=new ir(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ur}function ur(){this.i=null,this.g="",this.h=!1}var gu={},Fs={};function Hi(l,h,p){l.L=1,l.v=Qi($t(h)),l.m=p,l.P=!0,ua(l,null)}function ua(l,h){l.F=Date.now(),zs(l),l.A=$t(l.v);var p=l.A,v=l.R;Array.isArray(v)||(v=[String(v)]),Z(p.i,"t",v),l.C=0,p=l.j.J,l.h=new ur,l.g=uy(l.j,p?h:null,!l.m),0<l.O&&(l.M=new Ds(g(l.Y,l,l.g),l.O)),h=l.U,p=l.g,v=l.ca;var V="readystatechange";Array.isArray(V)||(V&&(sr[0]=V.toString()),V=sr);for(var U=0;U<V.length;U++){var G=Ae(p,V[U],v||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=l.H?y(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),Vn(),sh(l.i,l.u,l.A,l.l,l.R,l.m)}xe.prototype.ca=function(l){l=l.target;const h=this.M;h&&pr(l)==3?h.j():this.Y(l)},xe.prototype.Y=function(l){try{if(l==this.g)e:{const Et=pr(this.g);var h=this.g.Ba();const Gs=this.g.Z();if(!(3>Et)&&(Et!=3||this.g&&(this.h.h||this.g.oa()||Jg(this.g)))){this.J||Et!=4||h==7||(h==8||0>=Gs?Vn(3):Vn(2)),da(this);var p=this.g.Z();this.X=p;t:if(ca(this)){var v=Jg(this.g);l="";var V=v.length,U=pr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fn(this),zt(this);var G="";break t}this.h.i=new a.TextDecoder}for(h=0;h<V;h++)this.h.h=!0,l+=this.h.i.decode(v[h],{stream:!(U&&h==V-1)});v.length=0,this.h.g+=l,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=p==200,pu(this.i,this.u,this.A,this.l,this.R,Et,p),this.o){if(this.T&&!this.K){t:{if(this.g){var ke,ft=this.g;if((ke=ft.g?ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(ke)){var ve=ke;break t}}ve=null}if(p=ve)Un(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Br(this,p);else{this.o=!1,this.s=3,be(12),Fn(this),zt(this);break e}}if(this.P){p=!0;let An;for(;!this.J&&this.C<G.length;)if(An=oh(this,G),An==Fs){Et==4&&(this.s=4,be(14),p=!1),Un(this.i,this.l,null,"[Incomplete Response]");break}else if(An==gu){this.s=4,be(15),Un(this.i,this.l,G,"[Invalid Chunk]"),p=!1;break}else Un(this.i,this.l,An,null),Br(this,An);if(ca(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Et!=4||G.length!=0||this.h.h||(this.s=1,be(16),p=!1),this.o=this.o&&p,!p)Un(this.i,this.l,G,"[Invalid Chunked Response]"),Fn(this),zt(this);else if(0<G.length&&!this.W){this.W=!0;var xt=this.j;xt.g==this&&xt.ba&&!xt.M&&(xt.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),dh(xt),xt.M=!0,be(11))}}else Un(this.i,this.l,G,null),Br(this,G);Et==4&&Fn(this),this.o&&!this.J&&(Et==4?sy(this.j,this):(this.o=!1,zs(this)))}else vI(this.g),p==400&&0<G.indexOf("Unknown SID")?(this.s=3,be(12)):(this.s=0,be(13)),Fn(this),zt(this)}}}catch{}finally{}};function ca(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function oh(l,h){var p=l.C,v=h.indexOf(`
`,p);return v==-1?Fs:(p=Number(h.substring(p,v)),isNaN(p)?gu:(v+=1,v+p>h.length?Fs:(h=h.slice(v,v+p),l.C=v+p,h)))}xe.prototype.cancel=function(){this.J=!0,Fn(this)};function zs(l){l.S=Date.now()+l.I,yu(l,l.I)}function yu(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=ar(g(l.ba,l),h)}function da(l){l.B&&(a.clearTimeout(l.B),l.B=null)}xe.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(mu(this.i,this.A),this.L!=2&&(Vn(),be(17)),Fn(this),this.s=2,zt(this)):yu(this,this.S-l)};function zt(l){l.j.G==0||l.J||sy(l.j,l)}function Fn(l){da(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,$i(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function Br(l,h){try{var p=l.j;if(p.G!=0&&(p.g==l||fa(p.h,l))){if(!l.K&&fa(p.h,l)&&p.G==3){try{var v=p.Da.g.parse(h)}catch{v=null}if(Array.isArray(v)&&v.length==3){var V=v;if(V[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)Iu(p),Eu(p);else break e;ch(p),be(18)}}else p.za=V[1],0<p.za-p.T&&37500>V[2]&&p.F&&p.v==0&&!p.C&&(p.C=ar(g(p.Za,p),6e3));if(1>=ha(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Ji(p,11)}else if((l.K||p.g==l)&&Iu(p),!_(h))for(V=p.Da.g.parse(h),h=0;h<V.length;h++){let ve=V[h];if(p.T=ve[0],ve=ve[1],p.G==2)if(ve[0]=="c"){p.K=ve[1],p.ia=ve[2];const xt=ve[3];xt!=null&&(p.la=xt,p.j.info("VER="+p.la));const Et=ve[4];Et!=null&&(p.Aa=Et,p.j.info("SVER="+p.Aa));const Gs=ve[5];Gs!=null&&typeof Gs=="number"&&0<Gs&&(v=1.5*Gs,p.L=v,p.j.info("backChannelRequestTimeoutMs_="+v)),v=p;const An=l.g;if(An){const Au=An.g?An.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Au){var U=v.h;U.g||Au.indexOf("spdy")==-1&&Au.indexOf("quic")==-1&&Au.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&($s(U,U.h),U.h=null))}if(v.D){const hh=An.g?An.g.getResponseHeader("X-HTTP-Session-Id"):null;hh&&(v.ya=hh,Se(v.I,v.D,hh))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),v=p;var G=l;if(v.qa=ly(v,v.J?v.ia:null,v.W),G.K){pa(v.h,G);var ke=G,ft=v.L;ft&&(ke.I=ft),ke.B&&(da(ke),zs(ke)),v.g=G}else ry(v);0<p.i.length&&Tu(p)}else ve[0]!="stop"&&ve[0]!="close"||Ji(p,7);else p.G==3&&(ve[0]=="stop"||ve[0]=="close"?ve[0]=="stop"?Ji(p,7):uh(p):ve[0]!="noop"&&p.l&&p.l.ta(ve),p.v=0)}}Vn(4)}catch{}}var cr=class{constructor(l,h){this.g=l,this.map=h}};function vu(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function qi(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function ha(l){return l.h?1:l.g?l.g.size:0}function fa(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function $s(l,h){l.g?l.g.add(h):l.h=h}function pa(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}vu.prototype.cancel=function(){if(this.i=Gi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Gi(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const p of l.g.values())h=h.concat(p.D);return h}return k(l.i)}function ma(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],p=l.length,v=0;v<p;v++)h.push(l[v]);return h}h=[],p=0;for(v in l)h[p++]=l[v];return h}function Bs(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var p=0;p<l;p++)h.push(p);return h}h=[],p=0;for(const v in l)h[p++]=v;return h}}}function dr(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var p=Bs(l),v=ma(l),V=v.length,U=0;U<V;U++)h.call(void 0,v[U],p&&p[U],l)}var Wr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fn(l,h){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var v=l[p].indexOf("="),V=null;if(0<=v){var U=l[p].substring(0,v);V=l[p].substring(v+1)}else U=l[p];h(U,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function hr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof hr){this.h=l.h,Ws(this,l.j),this.o=l.o,this.g=l.g,Ki(this,l.s),this.l=l.l;var h=l.i,p=new w;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),fr(this,p),this.m=l.m}else l&&(h=String(l).match(Wr))?(this.h=!1,Ws(this,h[1]||"",!0),this.o=Yi(h[2]||""),this.g=Yi(h[3]||"",!0),Ki(this,h[4]),this.l=Yi(h[5]||"",!0),fr(this,h[6]||"",!0),this.m=Yi(h[7]||"")):(this.h=!1,this.i=new w(null,this.h))}hr.prototype.toString=function(){var l=[],h=this.j;h&&l.push(Hr(h,_u,!0),":");var p=this.g;return(p||h=="file")&&(l.push("//"),(h=this.o)&&l.push(Hr(h,_u,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(Hr(p,p.charAt(0)=="/"?Hs:wu,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",Hr(p,B)),l.join("")};function $t(l){return new hr(l)}function Ws(l,h,p){l.j=p?Yi(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function Ki(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function fr(l,h,p){h instanceof w?(l.i=h,de(l.i,l.h)):(p||(h=Hr(h,ga)),l.i=new w(h,l.h))}function Se(l,h,p){l.i.set(h,p)}function Qi(l){return Se(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Yi(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Hr(l,h,p){return typeof l=="string"?(l=encodeURI(l).replace(h,ah),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function ah(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var _u=/[#\/\?@]/g,wu=/[#\?:]/g,Hs=/[#\?]/g,ga=/[#\?@]/g,B=/#/g;function w(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function L(l){l.g||(l.g=new Map,l.h=0,l.i&&fn(l.i,function(h,p){l.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=w.prototype,t.add=function(l,h){L(this),this.i=null,l=oe(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(h),this.h+=1,this};function z(l,h){L(l),h=oe(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function H(l,h){return L(l),h=oe(l,h),l.g.has(h)}t.forEach=function(l,h){L(this),this.g.forEach(function(p,v){p.forEach(function(V){l.call(h,V,v,this)},this)},this)},t.na=function(){L(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let v=0;v<h.length;v++){const V=l[v];for(let U=0;U<V.length;U++)p.push(h[v])}return p},t.V=function(l){L(this);let h=[];if(typeof l=="string")H(this,l)&&(h=h.concat(this.g.get(oe(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)h=h.concat(l[p])}return h},t.set=function(l,h){return L(this),this.i=null,l=oe(this,l),H(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function Z(l,h,p){z(l,h),0<p.length&&(l.i=null,l.g.set(oe(l,h),k(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var v=h[p];const U=encodeURIComponent(String(v)),G=this.V(v);for(v=0;v<G.length;v++){var V=U;G[v]!==""&&(V+="="+encodeURIComponent(String(G[v]))),l.push(V)}}return this.i=l.join("&")};function oe(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function de(l,h){h&&!l.j&&(L(l),l.i=null,l.g.forEach(function(p,v){var V=v.toLowerCase();v!=V&&(z(this,v),Z(this,V,p))},l)),l.j=h}function Oe(l,h){const p=new lr;if(a.Image){const v=new Image;v.onload=I(We,p,"TestLoadImage: loaded",!0,h,v),v.onerror=I(We,p,"TestLoadImage: error",!1,h,v),v.onabort=I(We,p,"TestLoadImage: abort",!1,h,v),v.ontimeout=I(We,p,"TestLoadImage: timeout",!1,h,v),a.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=l}else h(!1)}function Bt(l,h){const p=new lr,v=new AbortController,V=setTimeout(()=>{v.abort(),We(p,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:v.signal}).then(U=>{clearTimeout(V),U.ok?We(p,"TestPingServer: ok",!0,h):We(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(V),We(p,"TestPingServer: error",!1,h)})}function We(l,h,p,v,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),v(p)}catch{}}function qr(){this.g=new fu}function ya(l,h,p){const v=p||"";try{dr(l,function(V,U){let G=V;d(V)&&(G=zr(V)),h.push(v+U+"="+encodeURIComponent(G))})}catch(V){throw h.push(v+"type="+encodeURIComponent("_badmap")),V}}function Ze(l){this.l=l.Ub||null,this.j=l.eb||!1}C(Ze,Ls),Ze.prototype.g=function(){return new Xi(this.l,this.j)},Ze.prototype.i=function(l){return function(){return l}}({});function Xi(l,h){Ce.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Xi,Ce),t=Xi.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,_a(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,va(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,_a(this)),this.g&&(this.readyState=3,_a(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;qg(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function qg(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?va(this):_a(this),this.readyState==3&&qg(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,va(this))},t.Qa=function(l){this.g&&(this.response=l,va(this))},t.ga=function(){this.g&&va(this)};function va(l){l.readyState=4,l.l=null,l.j=null,l.v=null,_a(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=h.next();return l.join(`\r
`)};function _a(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Xi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Gg(l){let h="";return D(l,function(p,v){h+=v,h+=":",h+=p,h+=`\r
`}),h}function lh(l,h,p){e:{for(v in p){var v=!1;break e}v=!0}v||(p=Gg(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):Se(l,h,p))}function He(l){Ce.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(He,Ce);var gI=/^https?$/i,yI=["POST","PUT"];t=He.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,p,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():la.g(),this.v=this.o?Os(this.o):Os(la),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(U){Kg(this,U);return}if(l=p||"",p=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var V in v)p.set(V,v[V]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const U of v.keys())p.set(U,v.get(U));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(p.keys()).find(U=>U.toLowerCase()=="content-type"),V=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(yI,h,void 0))||v||V||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,G]of p)this.g.setRequestHeader(U,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Xg(this),this.u=!0,this.g.send(l),this.u=!1}catch(U){Kg(this,U)}};function Kg(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,Qg(l),xu(l)}function Qg(l){l.A||(l.A=!0,Ve(l,"complete"),Ve(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Ve(this,"complete"),Ve(this,"abort"),xu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xu(this,!0)),He.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Yg(this):this.bb())},t.bb=function(){Yg(this)};function Yg(l){if(l.h&&typeof o<"u"&&(!l.v[1]||pr(l)!=4||l.Z()!=2)){if(l.u&&pr(l)==4)Ns(l.Ea,0,l);else if(Ve(l,"readystatechange"),pr(l)==4){l.h=!1;try{const G=l.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var v;if(v=G===0){var V=String(l.D).match(Wr)[1]||null;!V&&a.self&&a.self.location&&(V=a.self.location.protocol.slice(0,-1)),v=!gI.test(V?V.toLowerCase():"")}p=v}if(p)Ve(l,"complete"),Ve(l,"success");else{l.m=6;try{var U=2<pr(l)?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.Z()+"]",Qg(l)}}finally{xu(l)}}}}function xu(l,h){if(l.g){Xg(l);const p=l.g,v=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||Ve(l,"ready");try{p.onreadystatechange=v}catch{}}}function Xg(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function pr(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<pr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),hu(h)}};function Jg(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function vI(l){const h={};l=(l.g&&2<=pr(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<l.length;v++){if(_(l[v]))continue;var p=N(l[v]);const V=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const U=h[V]||[];h[V]=U,U.push(p)}x(h,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function wa(l,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||h}function Zg(l){this.Aa=0,this.i=[],this.j=new lr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=wa("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=wa("baseRetryDelayMs",5e3,l),this.cb=wa("retryDelaySeedMs",1e4,l),this.Wa=wa("forwardChannelMaxRetries",2,l),this.wa=wa("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new vu(l&&l.concurrentRequestLimit),this.Da=new qr,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Zg.prototype,t.la=8,t.G=1,t.connect=function(l,h,p,v){be(0),this.W=l,this.H=h||{},p&&v!==void 0&&(this.H.OSID=p,this.H.OAID=v),this.F=this.X,this.I=ly(this,null,this.W),Tu(this)};function uh(l){if(ey(l),l.G==3){var h=l.U++,p=$t(l.I);if(Se(p,"SID",l.K),Se(p,"RID",h),Se(p,"TYPE","terminate"),xa(l,p),h=new xe(l,l.j,h),h.L=2,h.v=Qi($t(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=h.v,p=!0),p||(h.g=uy(h.j,null),h.g.ea(h.v)),h.F=Date.now(),zs(h)}ay(l)}function Eu(l){l.g&&(dh(l),l.g.cancel(),l.g=null)}function ey(l){Eu(l),l.u&&(a.clearTimeout(l.u),l.u=null),Iu(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Tu(l){if(!qi(l.h)&&!l.s){l.s=!0;var h=l.Ga;ht||ne(),q||(ht(),q=!0),ee.add(h,l),l.B=0}}function _I(l,h){return ha(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=ar(g(l.Ga,l,h),oy(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const V=new xe(this,this.j,l);let U=this.o;if(this.S&&(U?(U=y(U),A(U,this.S)):U=this.S),this.m!==null||this.O||(V.H=U,U=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var v=this.i[p];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(h+=v,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=ny(this,V,h),p=$t(this.I),Se(p,"RID",l),Se(p,"CVER",22),this.D&&Se(p,"X-HTTP-Session-Id",this.D),xa(this,p),U&&(this.O?h="headers="+encodeURIComponent(String(Gg(U)))+"&"+h:this.m&&lh(p,this.m,U)),$s(this.h,V),this.Ua&&Se(p,"TYPE","init"),this.P?(Se(p,"$req",h),Se(p,"SID","null"),V.T=!0,Hi(V,p,null)):Hi(V,p,h),this.G=2}}else this.G==3&&(l?ty(this,l):this.i.length==0||qi(this.h)||ty(this))};function ty(l,h){var p;h?p=h.l:p=l.U++;const v=$t(l.I);Se(v,"SID",l.K),Se(v,"RID",p),Se(v,"AID",l.T),xa(l,v),l.m&&l.o&&lh(v,l.m,l.o),p=new xe(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),h&&(l.i=h.D.concat(l.i)),h=ny(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),$s(l.h,p),Hi(p,v,h)}function xa(l,h){l.H&&D(l.H,function(p,v){Se(h,v,p)}),l.l&&dr({},function(p,v){Se(h,v,p)})}function ny(l,h,p){p=Math.min(l.i.length,p);var v=l.l?g(l.l.Na,l.l,l):null;e:{var V=l.i;let U=-1;for(;;){const G=["count="+p];U==-1?0<p?(U=V[0].g,G.push("ofs="+U)):U=0:G.push("ofs="+U);let ke=!0;for(let ft=0;ft<p;ft++){let ve=V[ft].g;const xt=V[ft].map;if(ve-=U,0>ve)U=Math.max(0,V[ft].g-100),ke=!1;else try{ya(xt,G,"req"+ve+"_")}catch{v&&v(xt)}}if(ke){v=G.join("&");break e}}}return l=l.i.splice(0,p),h.D=l,v}function ry(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;ht||ne(),q||(ht(),q=!0),ee.add(h,l),l.v=0}}function ch(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=ar(g(l.Fa,l),oy(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,iy(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=ar(g(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,be(10),Eu(this),iy(this))};function dh(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function iy(l){l.g=new xe(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=$t(l.qa);Se(h,"RID","rpc"),Se(h,"SID",l.K),Se(h,"AID",l.T),Se(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&Se(h,"TO",l.ja),Se(h,"TYPE","xmlhttp"),xa(l,h),l.m&&l.o&&lh(h,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=Qi($t(h)),p.m=null,p.P=!0,ua(p,l)}t.Za=function(){this.C!=null&&(this.C=null,Eu(this),ch(this),be(19))};function Iu(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function sy(l,h){var p=null;if(l.g==h){Iu(l),dh(l),l.g=null;var v=2}else if(fa(l.h,h))p=h.D,pa(l.h,h),v=1;else return;if(l.G!=0){if(h.o)if(v==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var V=l.B;v=Bi(),Ve(v,new or(v,p)),Tu(l)}else ry(l);else if(V=h.s,V==3||V==0&&0<h.X||!(v==1&&_I(l,h)||v==2&&ch(l)))switch(p&&0<p.length&&(h=l.h,h.i=h.i.concat(p)),V){case 1:Ji(l,5);break;case 4:Ji(l,10);break;case 3:Ji(l,6);break;default:Ji(l,2)}}}function oy(l,h){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*h}function Ji(l,h){if(l.j.info("Error code "+h),h==2){var p=g(l.fb,l),v=l.Xa;const V=!v;v=new hr(v||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ws(v,"https"),Qi(v),V?Oe(v.toString(),p):Bt(v.toString(),p)}else be(2);l.G=0,l.l&&l.l.sa(h),ay(l),ey(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),be(2)):(this.j.info("Failed to ping google.com"),be(1))};function ay(l){if(l.G=0,l.ka=[],l.l){const h=Gi(l.h);(h.length!=0||l.i.length!=0)&&(P(l.ka,h),P(l.ka,l.i),l.h.i.length=0,k(l.i),l.i.length=0),l.l.ra()}}function ly(l,h,p){var v=p instanceof hr?$t(p):new hr(p);if(v.g!="")h&&(v.g=h+"."+v.g),Ki(v,v.s);else{var V=a.location;v=V.protocol,h=h?h+"."+V.hostname:V.hostname,V=+V.port;var U=new hr(null);v&&Ws(U,v),h&&(U.g=h),V&&Ki(U,V),p&&(U.l=p),v=U}return p=l.D,h=l.ya,p&&h&&Se(v,p,h),Se(v,"VER",l.la),xa(l,v),v}function uy(l,h,p){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new He(new Ze({eb:p})):new He(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function cy(){}t=cy.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Su(){}Su.prototype.g=function(l,h){return new Jt(l,h)};function Jt(l,h){Ce.call(this),this.g=new Zg(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!_(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!_(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new qs(this)}C(Jt,Ce),Jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Jt.prototype.close=function(){uh(this.g)},Jt.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=zr(l),l=p);h.i.push(new cr(h.Ya++,l)),h.G==3&&Tu(h)},Jt.prototype.N=function(){this.g.l=null,delete this.j,uh(this.g),delete this.g,Jt.aa.N.call(this)};function dy(l){jn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const p in h){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}C(dy,jn);function hy(){Ms.call(this),this.status=1}C(hy,Ms);function qs(l){this.g=l}C(qs,cy),qs.prototype.ua=function(){Ve(this.g,"a")},qs.prototype.ta=function(l){Ve(this.g,new dy(l))},qs.prototype.sa=function(l){Ve(this.g,new hy)},qs.prototype.ra=function(){Ve(this.g,"b")},Su.prototype.createWebChannel=Su.prototype.g,Jt.prototype.send=Jt.prototype.o,Jt.prototype.open=Jt.prototype.m,Jt.prototype.close=Jt.prototype.close,y1=function(){return new Su},g1=function(){return Bi()},m1=Mn,gp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Vs.NO_ERROR=0,Vs.TIMEOUT=8,Vs.HTTP_ERROR=6,mc=Vs,$r.COMPLETE="complete",p1=$r,js.EventType=hn,hn.OPEN="a",hn.CLOSE="b",hn.ERROR="c",hn.MESSAGE="d",Ce.prototype.listen=Ce.prototype.K,za=js,He.prototype.listenOnce=He.prototype.L,He.prototype.getLastError=He.prototype.Ka,He.prototype.getLastErrorCode=He.prototype.Ba,He.prototype.getStatus=He.prototype.Z,He.prototype.getResponseJson=He.prototype.Oa,He.prototype.getResponseText=He.prototype.oa,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Ha,f1=He}).apply(typeof Hu<"u"?Hu:typeof self<"u"?self:typeof window<"u"?window:{});const c_="@firebase/firestore";/**
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
 */let Yo="10.14.0";/**
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
 */const _s=new Om("@firebase/firestore");function Ca(){return _s.logLevel}function Y(t,...e){if(_s.logLevel<=fe.DEBUG){const n=e.map(Gm);_s.debug(`Firestore (${Yo}): ${t}`,...n)}}function Pr(t,...e){if(_s.logLevel<=fe.ERROR){const n=e.map(Gm);_s.error(`Firestore (${Yo}): ${t}`,...n)}}function jo(t,...e){if(_s.logLevel<=fe.WARN){const n=e.map(Gm);_s.warn(`Firestore (${Yo}): ${t}`,...n)}}function Gm(t){if(typeof t=="string")return t;try{/**
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
 */function ie(t="Unexpected state"){const e=`FIRESTORE (${Yo}) INTERNAL ASSERTION FAILED: `+t;throw Pr(e),new Error(e)}function Te(t,e){t||ie()}function le(t,e){return t}/**
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
 */class v1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class TN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(kt.UNAUTHENTICATED))}shutdown(){}}class IN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class SN{constructor(e){this.t=e,this.currentUser=kt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Te(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Ir;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ir,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ir)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string"),new v1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string"),new kt(e)}}class AN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=kt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class kN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new AN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(kt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Te(this.o===void 0);const r=s=>{s.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Te(typeof n.token=="string"),this.R=n.token,new bN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function CN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class _1{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=CN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function _e(t,e){return t<e?-1:t>e?1:0}function Mo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class bl{constructor(e,n,r){n===void 0?n=0:n>e.length&&ie(),r===void 0?r=e.length-n:r>e.length-n&&ie(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return bl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof bl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class De extends bl{construct(e,n,r){return new De(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new De(n)}static emptyPath(){return new De([])}}const PN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends bl{construct(e,n,r){return new gt(e,n,r)}static isValidIdentifier(e){return PN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new gt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new K(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new K(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new K(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new K(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gt(n)}static emptyPath(){return new gt([])}}/**
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
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(De.fromString(e))}static fromName(e){return new te(De.fromString(e).popFirst(5))}static empty(){return new te(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new De(e.slice()))}}function NN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ae.fromTimestamp(r===1e9?new at(n+1,0):new at(n,r));return new bi(i,te.empty(),e)}function DN(t){return new bi(t.readTime,t.key,-1)}class bi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new bi(ae.min(),te.empty(),-1)}static max(){return new bi(ae.max(),te.empty(),-1)}}function LN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=te.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
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
 */const ON="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Xl(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==ON)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ie(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(i=>i?$.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new $((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const d=u;n(e[d]).next(f=>{o[d]=f,++a,a===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new $((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function MN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Jl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Km{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Km.oe=-1;function Fd(t){return t==null}function id(t){return t===0&&1/t==-1/0}function VN(t){return typeof t=="number"&&Number.isInteger(t)&&!id(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function d_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function As(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function w1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Be{constructor(e,n){this.comparator=e,this.root=n||mt.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,mt.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,mt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qu(this.root,e,this.comparator,!1)}getReverseIterator(){return new qu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qu(this.root,e,this.comparator,!0)}}class qu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class mt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??mt.RED,this.left=i??mt.EMPTY,this.right=s??mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new mt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return mt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return mt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ie();const e=this.left.check();if(e!==this.right.check())throw ie();return e+(this.isRed()?0:1)}}mt.EMPTY=null,mt.RED=!0,mt.BLACK=!1;mt.EMPTY=new class{constructor(){this.size=0}get key(){throw ie()}get value(){throw ie()}get color(){throw ie()}get left(){throw ie()}get right(){throw ie()}copy(e,n,r,i,s){return this}insert(e,n,r){return new mt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class vt{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new h_(this.data.getIterator())}getIteratorFrom(e){return new h_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof vt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new vt(this.comparator);return n.data=e,n}}class h_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class sn{constructor(e){this.fields=e,e.sort(gt.comparator)}static empty(){return new sn([])}unionWith(e){let n=new vt(gt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new sn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Mo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class x1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class wt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new x1("Invalid base64 string: "+s):s}}(e);return new wt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new wt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}wt.EMPTY_BYTE_STRING=new wt("");const UN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ri(t){if(Te(!!t),typeof t=="string"){let e=0;const n=UN.exec(t);if(Te(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Qe(t.seconds),nanos:Qe(t.nanos)}}function Qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ws(t){return typeof t=="string"?wt.fromBase64String(t):wt.fromUint8Array(t)}/**
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
 */function Qm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ym(t){const e=t.mapValue.fields.__previous_value__;return Qm(e)?Ym(e):e}function Rl(t){const e=Ri(t.mapValue.fields.__local_write_time__.timestampValue);return new at(e.seconds,e.nanos)}/**
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
 */class FN{constructor(e,n,r,i,s,o,a,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=d}}class Cl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Cl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Cl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Gu={mapValue:{}};function xs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Qm(t)?4:$N(t)?9007199254740991:zN(t)?10:11:ie()}function Zn(t,e){if(t===e)return!0;const n=xs(t);if(n!==xs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Rl(t).isEqual(Rl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ri(i.timestampValue),a=Ri(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ws(i.bytesValue).isEqual(ws(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Qe(i.geoPointValue.latitude)===Qe(s.geoPointValue.latitude)&&Qe(i.geoPointValue.longitude)===Qe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Qe(i.integerValue)===Qe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Qe(i.doubleValue),a=Qe(s.doubleValue);return o===a?id(o)===id(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Mo(t.arrayValue.values||[],e.arrayValue.values||[],Zn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(d_(o)!==d_(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Zn(o[u],a[u])))return!1;return!0}(t,e);default:return ie()}}function Pl(t,e){return(t.values||[]).find(n=>Zn(n,e))!==void 0}function Vo(t,e){if(t===e)return 0;const n=xs(t),r=xs(e);if(n!==r)return _e(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Qe(s.integerValue||s.doubleValue),u=Qe(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return f_(t.timestampValue,e.timestampValue);case 4:return f_(Rl(t),Rl(e));case 5:return _e(t.stringValue,e.stringValue);case 6:return function(s,o){const a=ws(s),u=ws(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let d=0;d<a.length&&d<u.length;d++){const f=_e(a[d],u[d]);if(f!==0)return f}return _e(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=_e(Qe(s.latitude),Qe(o.latitude));return a!==0?a:_e(Qe(s.longitude),Qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return p_(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,d,f;const m=s.fields||{},g=o.fields||{},I=(a=m.value)===null||a===void 0?void 0:a.arrayValue,C=(u=g.value)===null||u===void 0?void 0:u.arrayValue,k=_e(((d=I==null?void 0:I.values)===null||d===void 0?void 0:d.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:p_(I,C)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Gu.mapValue&&o===Gu.mapValue)return 0;if(s===Gu.mapValue)return 1;if(o===Gu.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),d=o.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=_e(u[m],f[m]);if(g!==0)return g;const I=Vo(a[u[m]],d[f[m]]);if(I!==0)return I}return _e(u.length,f.length)}(t.mapValue,e.mapValue);default:throw ie()}}function f_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=Ri(t),r=Ri(e),i=_e(n.seconds,r.seconds);return i!==0?i:_e(n.nanos,r.nanos)}function p_(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Vo(n[i],r[i]);if(s)return s}return _e(n.length,r.length)}function Uo(t){return yp(t)}function yp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ri(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ws(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return te.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=yp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${yp(n.fields[o])}`;return i+"}"}(t.mapValue):ie()}function m_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function vp(t){return!!t&&"integerValue"in t}function Xm(t){return!!t&&"arrayValue"in t}function g_(t){return!!t&&"nullValue"in t}function y_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function gc(t){return!!t&&"mapValue"in t}function zN(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function nl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return As(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=nl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=nl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function $N(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class qt{constructor(e){this.value=e}static empty(){return new qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!gc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=nl(n)}setAll(e){let n=gt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=nl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());gc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Zn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];gc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){As(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new qt(nl(this.value))}}function E1(t){const e=[];return As(t.fields,(n,r)=>{const i=new gt([n]);if(gc(r)){const s=E1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new sn(e)}/**
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
 */class sd{constructor(e,n){this.position=e,this.inclusive=n}}function v_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=te.comparator(te.fromName(o.referenceValue),n.key):r=Vo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function __(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Nl{constructor(e,n="asc"){this.field=e,this.dir=n}}function BN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class T1{}class nt extends T1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new HN(e,n,r):n==="array-contains"?new KN(e,r):n==="in"?new QN(e,r):n==="not-in"?new YN(e,r):n==="array-contains-any"?new XN(e,r):new nt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new qN(e,r):new GN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Vo(n,this.value)):n!==null&&xs(this.value)===xs(n)&&this.matchesComparison(Vo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class On extends T1{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new On(e,n)}matches(e){return I1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function I1(t){return t.op==="and"}function S1(t){return WN(t)&&I1(t)}function WN(t){for(const e of t.filters)if(e instanceof On)return!1;return!0}function _p(t){if(t instanceof nt)return t.field.canonicalString()+t.op.toString()+Uo(t.value);if(S1(t))return t.filters.map(e=>_p(e)).join(",");{const e=t.filters.map(n=>_p(n)).join(",");return`${t.op}(${e})`}}function A1(t,e){return t instanceof nt?function(r,i){return i instanceof nt&&r.op===i.op&&r.field.isEqual(i.field)&&Zn(r.value,i.value)}(t,e):t instanceof On?function(r,i){return i instanceof On&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&A1(o,i.filters[a]),!0):!1}(t,e):void ie()}function k1(t){return t instanceof nt?function(n){return`${n.field.canonicalString()} ${n.op} ${Uo(n.value)}`}(t):t instanceof On?function(n){return n.op.toString()+" {"+n.getFilters().map(k1).join(" ,")+"}"}(t):"Filter"}class HN extends nt{constructor(e,n,r){super(e,n,r),this.key=te.fromName(r.referenceValue)}matches(e){const n=te.comparator(e.key,this.key);return this.matchesComparison(n)}}class qN extends nt{constructor(e,n){super(e,"in",n),this.keys=b1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class GN extends nt{constructor(e,n){super(e,"not-in",n),this.keys=b1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function b1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>te.fromName(r.referenceValue))}class KN extends nt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Xm(n)&&Pl(n.arrayValue,this.value)}}class QN extends nt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Pl(this.value.arrayValue,n)}}class YN extends nt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Pl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Pl(this.value.arrayValue,n)}}class XN extends nt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Xm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Pl(this.value.arrayValue,r))}}/**
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
 */class JN{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function w_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new JN(t,e,n,r,i,s,o)}function Jm(t){const e=le(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>_p(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Fd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Uo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Uo(r)).join(",")),e.ue=n}return e.ue}function Zm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!BN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!A1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!__(t.startAt,e.startAt)&&__(t.endAt,e.endAt)}function wp(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Xo{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ZN(t,e,n,r,i,s,o,a){return new Xo(t,e,n,r,i,s,o,a)}function zd(t){return new Xo(t)}function x_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function R1(t){return t.collectionGroup!==null}function rl(t){const e=le(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new vt(gt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(a=a.add(d.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Nl(s,r))}),n.has(gt.keyField().canonicalString())||e.ce.push(new Nl(gt.keyField(),r))}return e.ce}function Xn(t){const e=le(t);return e.le||(e.le=e2(e,rl(t))),e.le}function e2(t,e){if(t.limitType==="F")return w_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Nl(i.field,s)});const n=t.endAt?new sd(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new sd(t.startAt.position,t.startAt.inclusive):null;return w_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function xp(t,e){const n=t.filters.concat([e]);return new Xo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function od(t,e,n){return new Xo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function $d(t,e){return Zm(Xn(t),Xn(e))&&t.limitType===e.limitType}function C1(t){return`${Jm(Xn(t))}|lt:${t.limitType}`}function Qs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>k1(i)).join(", ")}]`),Fd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Uo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Uo(i)).join(",")),`Target(${r})`}(Xn(t))}; limitType=${t.limitType})`}function Bd(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):te.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of rl(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const d=v_(o,a,u);return o.inclusive?d<=0:d<0}(r.startAt,rl(r),i)||r.endAt&&!function(o,a,u){const d=v_(o,a,u);return o.inclusive?d>=0:d>0}(r.endAt,rl(r),i))}(t,e)}function t2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function P1(t){return(e,n)=>{let r=!1;for(const i of rl(t)){const s=n2(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function n2(t,e,n){const r=t.field.isKeyField()?te.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),d=a.data.field(s);return u!==null&&d!==null?Vo(u,d):ie()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ie()}}/**
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
 */class Jo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){As(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return w1(this.inner)}size(){return this.innerSize}}/**
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
 */const r2=new Be(te.comparator);function Nr(){return r2}const N1=new Be(te.comparator);function $a(...t){let e=N1;for(const n of t)e=e.insert(n.key,n);return e}function D1(t){let e=N1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function os(){return il()}function L1(){return il()}function il(){return new Jo(t=>t.toString(),(t,e)=>t.isEqual(e))}const i2=new Be(te.comparator),s2=new vt(te.comparator);function he(...t){let e=s2;for(const n of t)e=e.add(n);return e}const o2=new vt(_e);function a2(){return o2}/**
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
 */function eg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:id(e)?"-0":e}}function O1(t){return{integerValue:""+t}}function j1(t,e){return VN(e)?O1(e):eg(t,e)}/**
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
 */class Wd{constructor(){this._=void 0}}function l2(t,e,n){return t instanceof Dl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Qm(s)&&(s=Ym(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ll?V1(t,e):t instanceof Ol?U1(t,e):function(i,s){const o=M1(i,s),a=E_(o)+E_(i.Pe);return vp(o)&&vp(i.Pe)?O1(a):eg(i.serializer,a)}(t,e)}function u2(t,e,n){return t instanceof Ll?V1(t,e):t instanceof Ol?U1(t,e):n}function M1(t,e){return t instanceof jl?function(r){return vp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Dl extends Wd{}class Ll extends Wd{constructor(e){super(),this.elements=e}}function V1(t,e){const n=F1(e);for(const r of t.elements)n.some(i=>Zn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ol extends Wd{constructor(e){super(),this.elements=e}}function U1(t,e){let n=F1(e);for(const r of t.elements)n=n.filter(i=>!Zn(i,r));return{arrayValue:{values:n}}}class jl extends Wd{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function E_(t){return Qe(t.integerValue||t.doubleValue)}function F1(t){return Xm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class z1{constructor(e,n){this.field=e,this.transform=n}}function c2(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ll&&i instanceof Ll||r instanceof Ol&&i instanceof Ol?Mo(r.elements,i.elements,Zn):r instanceof jl&&i instanceof jl?Zn(r.Pe,i.Pe):r instanceof Dl&&i instanceof Dl}(t.transform,e.transform)}class d2{constructor(e,n){this.version=e,this.transformResults=n}}class Mt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Mt}static exists(e){return new Mt(void 0,e)}static updateTime(e){return new Mt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Hd{}function $1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new qd(t.key,Mt.none()):new Zl(t.key,t.data,Mt.none());{const n=t.data,r=qt.empty();let i=new vt(gt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ji(t.key,r,new sn(i.toArray()),Mt.none())}}function h2(t,e,n){t instanceof Zl?function(i,s,o){const a=i.value.clone(),u=I_(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ji?function(i,s,o){if(!yc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=I_(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(B1(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function sl(t,e,n,r){return t instanceof Zl?function(s,o,a,u){if(!yc(s.precondition,o))return a;const d=s.value.clone(),f=S_(s.fieldTransforms,u,o);return d.setAll(f),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof ji?function(s,o,a,u){if(!yc(s.precondition,o))return a;const d=S_(s.fieldTransforms,u,o),f=o.data;return f.setAll(B1(s)),f.setAll(d),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,a){return yc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function f2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=M1(r.transform,i||null);s!=null&&(n===null&&(n=qt.empty()),n.set(r.field,s))}return n||null}function T_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Mo(r,i,(s,o)=>c2(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Zl extends Hd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ji extends Hd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function B1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function I_(t,e,n){const r=new Map;Te(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,u2(o,a,n[i]))}return r}function S_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,l2(s,o,e))}return r}class qd extends Hd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class p2 extends Hd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class m2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&h2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=sl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=sl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=L1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=$1(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ae.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),he())}isEqual(e){return this.batchId===e.batchId&&Mo(this.mutations,e.mutations,(n,r)=>T_(n,r))&&Mo(this.baseMutations,e.baseMutations,(n,r)=>T_(n,r))}}class tg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Te(e.mutations.length===r.length);let i=function(){return i2}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new tg(e,n,r,i)}}/**
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
 */class g2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class y2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var et,me;function v2(t){switch(t){default:return ie();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function W1(t){if(t===void 0)return Pr("GRPC error has no .code"),F.UNKNOWN;switch(t){case et.OK:return F.OK;case et.CANCELLED:return F.CANCELLED;case et.UNKNOWN:return F.UNKNOWN;case et.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case et.INTERNAL:return F.INTERNAL;case et.UNAVAILABLE:return F.UNAVAILABLE;case et.UNAUTHENTICATED:return F.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case et.NOT_FOUND:return F.NOT_FOUND;case et.ALREADY_EXISTS:return F.ALREADY_EXISTS;case et.PERMISSION_DENIED:return F.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case et.ABORTED:return F.ABORTED;case et.OUT_OF_RANGE:return F.OUT_OF_RANGE;case et.UNIMPLEMENTED:return F.UNIMPLEMENTED;case et.DATA_LOSS:return F.DATA_LOSS;default:return ie()}}(me=et||(et={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function _2(){return new TextEncoder}/**
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
 */const w2=new cs([4294967295,4294967295],0);function A_(t){const e=_2().encode(t),n=new h1;return n.update(e),new Uint8Array(n.digest())}function k_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new cs([n,r],0),new cs([i,s],0)]}class ng{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ba(`Invalid padding: ${n}`);if(r<0)throw new Ba(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ba(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ba(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=cs.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(cs.fromNumber(r)));return i.compare(w2)===1&&(i=new cs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=A_(e),[r,i]=k_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new ng(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=A_(e),[r,i]=k_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ba extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Gd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,eu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Gd(ae.min(),i,new Be(_e),Nr(),he())}}class eu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new eu(r,n,he(),he(),he())}}/**
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
 */class vc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class H1{constructor(e,n){this.targetId=e,this.me=n}}class q1{constructor(e,n,r=wt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class b_{constructor(){this.fe=0,this.ge=C_(),this.pe=wt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=he(),n=he(),r=he();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ie()}}),new eu(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=C_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Te(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class x2{constructor(e){this.Le=e,this.Be=new Map,this.ke=Nr(),this.qe=R_(),this.Qe=new Be(_e)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ie()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(wp(s))if(r===0){const o=new te(s.path);this.Ue(n,o,Rt.newNoDocument(o,ae.min()))}else Te(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=ws(r).toUint8Array()}catch(u){if(u instanceof x1)return jo("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new ng(o,i,s)}catch(u){return jo(u instanceof Ba?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&wp(a.target)){const u=new te(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Rt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=he();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Gd(e,n,this.Qe,this.ke,r);return this.ke=Nr(),this.qe=R_(),this.Qe=new Be(_e),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new b_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new vt(_e),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new b_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function R_(){return new Be(te.comparator)}function C_(){return new Be(te.comparator)}const E2={asc:"ASCENDING",desc:"DESCENDING"},T2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},I2={and:"AND",or:"OR"};class S2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ep(t,e){return t.useProto3Json||Fd(e)?e:{value:e}}function ad(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function G1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function A2(t,e){return ad(t,e.toTimestamp())}function Jn(t){return Te(!!t),ae.fromTimestamp(function(n){const r=Ri(n);return new at(r.seconds,r.nanos)}(t))}function rg(t,e){return Tp(t,e).canonicalString()}function Tp(t,e){const n=function(i){return new De(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function K1(t){const e=De.fromString(t);return Te(Z1(e)),e}function Ip(t,e){return rg(t.databaseId,e.path)}function Gh(t,e){const n=K1(e);if(n.get(1)!==t.databaseId.projectId)throw new K(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new te(Y1(n))}function Q1(t,e){return rg(t.databaseId,e)}function k2(t){const e=K1(t);return e.length===4?De.emptyPath():Y1(e)}function Sp(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Y1(t){return Te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function P_(t,e,n){return{name:Ip(t,e),fields:n.value.mapValue.fields}}function b2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:ie()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,f){return d.useProto3Json?(Te(f===void 0||typeof f=="string"),wt.fromBase64String(f||"")):(Te(f===void 0||f instanceof Buffer||f instanceof Uint8Array),wt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(d){const f=d.code===void 0?F.UNKNOWN:W1(d.code);return new K(f,d.message||"")}(o);n=new q1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Gh(t,r.document.name),s=Jn(r.document.updateTime),o=r.document.createTime?Jn(r.document.createTime):ae.min(),a=new qt({mapValue:{fields:r.document.fields}}),u=Rt.newFoundDocument(i,s,o,a),d=r.targetIds||[],f=r.removedTargetIds||[];n=new vc(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Gh(t,r.document),s=r.readTime?Jn(r.readTime):ae.min(),o=Rt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new vc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Gh(t,r.document),s=r.removedTargetIds||[];n=new vc([],s,i,null)}else{if(!("filter"in e))return ie();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new y2(i,s),a=r.targetId;n=new H1(a,o)}}return n}function R2(t,e){let n;if(e instanceof Zl)n={update:P_(t,e.key,e.value)};else if(e instanceof qd)n={delete:Ip(t,e.key)};else if(e instanceof ji)n={update:P_(t,e.key,e.data),updateMask:V2(e.fieldMask)};else{if(!(e instanceof p2))return ie();n={verify:Ip(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Dl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ll)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ol)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof jl)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw ie()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:A2(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ie()}(t,e.precondition)),n}function C2(t,e){return t&&t.length>0?(Te(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Jn(i.updateTime):Jn(s);return o.isEqual(ae.min())&&(o=Jn(s)),new d2(o,i.transformResults||[])}(n,e))):[]}function P2(t,e){return{documents:[Q1(t,e.path)]}}function N2(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Q1(t,i);const s=function(d){if(d.length!==0)return J1(On.create(d,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(d){if(d.length!==0)return d.map(f=>function(g){return{field:Ys(g.field),direction:O2(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Ep(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:i}}function D2(t){let e=k2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Te(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const g=X1(m);return g instanceof On&&S1(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(C){return new Nl(Xs(C.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(n.orderBy));let a=null;n.limit&&(a=function(m){let g;return g=typeof m=="object"?m.value:m,Fd(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,I=m.values||[];return new sd(I,g)}(n.startAt));let d=null;return n.endAt&&(d=function(m){const g=!m.before,I=m.values||[];return new sd(I,g)}(n.endAt)),ZN(e,i,o,s,a,"F",u,d)}function L2(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ie()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function X1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Xs(n.unaryFilter.field);return nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Xs(n.unaryFilter.field);return nt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Xs(n.unaryFilter.field);return nt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Xs(n.unaryFilter.field);return nt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ie()}}(t):t.fieldFilter!==void 0?function(n){return nt.create(Xs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ie()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return On.create(n.compositeFilter.filters.map(r=>X1(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ie()}}(n.compositeFilter.op))}(t):ie()}function O2(t){return E2[t]}function j2(t){return T2[t]}function M2(t){return I2[t]}function Ys(t){return{fieldPath:t.canonicalString()}}function Xs(t){return gt.fromServerFormat(t.fieldPath)}function J1(t){return t instanceof nt?function(n){if(n.op==="=="){if(y_(n.value))return{unaryFilter:{field:Ys(n.field),op:"IS_NAN"}};if(g_(n.value))return{unaryFilter:{field:Ys(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(y_(n.value))return{unaryFilter:{field:Ys(n.field),op:"IS_NOT_NAN"}};if(g_(n.value))return{unaryFilter:{field:Ys(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ys(n.field),op:j2(n.op),value:n.value}}}(t):t instanceof On?function(n){const r=n.getFilters().map(i=>J1(i));return r.length===1?r[0]:{compositeFilter:{op:M2(n.op),filters:r}}}(t):ie()}function V2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Z1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class U2{constructor(e){this.ct=e}}function F2(t){const e=D2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?od(e,e.limit,"L"):e}/**
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
 */class z2{constructor(){this.un=new $2}addToCollectionParentIndex(e,n){return this.un.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(bi.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(bi.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class $2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new vt(De.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new vt(De.comparator)).toArray()}}/**
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
 */class Fo{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Fo(0)}static kn(){return new Fo(-1)}}/**
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
 */class B2{constructor(){this.changes=new Jo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Rt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class W2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class H2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&sl(r.mutation,i,sn.empty(),at.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,n,r=he()){const i=os();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=$a();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=os();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,he()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Nr();const o=il(),a=function(){return il()}();return n.forEach((u,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof ji)?s=s.insert(d.key,d):f!==void 0?(o.set(d.key,f.mutation.getFieldMask()),sl(f.mutation,d,f.mutation.getFieldMask(),at.now())):o.set(d.key,sn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((d,f)=>o.set(d,f)),n.forEach((d,f)=>{var m;return a.set(d,new W2(f,(m=o.get(d))!==null&&m!==void 0?m:null))}),a))}recalculateAndSaveOverlays(e,n){const r=il();let i=new Be((o,a)=>o-a),s=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let f=r.get(u)||sn.empty();f=a.applyToLocalView(d,f),r.set(u,f);const m=(i.get(a.batchId)||he()).add(u);i=i.insert(a.batchId,m)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),d=u.key,f=u.value,m=L1();f.forEach(g=>{if(!s.has(g)){const I=$1(n.get(g),r.get(g));I!==null&&m.set(g,I),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,m))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return te.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):R1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):$.resolve(os());let a=-1,u=s;return o.next(d=>$.forEach(d,(f,m)=>(a<m.largestBatchId&&(a=m.largestBatchId),s.get(f)?$.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,u,d,he())).next(f=>({batchId:a,changes:D1(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new te(n)).next(r=>{let i=$a();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=$a();return this.indexManager.getCollectionParents(e,s).next(a=>$.forEach(a,u=>{const d=function(m,g){return new Xo(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,d)=>{const f=d.getKey();o.get(f)===null&&(o=o.insert(f,Rt.newInvalidDocument(f)))});let a=$a();return o.forEach((u,d)=>{const f=s.get(u);f!==void 0&&sl(f.mutation,d,sn.empty(),at.now()),Bd(n,d)&&(a=a.insert(u,d))}),a})}}/**
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
 */class q2{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return $.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Jn(i.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:F2(i.bundledQuery),readTime:Jn(i.readTime)}}(n)),$.resolve()}}/**
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
 */class G2{constructor(){this.overlays=new Be(te.comparator),this.Ir=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=os();return $.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const i=os(),s=n.length+1,o=new te(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return $.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Be((d,f)=>d-f);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let f=s.get(d.largestBatchId);f===null&&(f=os(),s=s.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const a=os(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>a.set(d,f)),!(a.size()>=i)););return $.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new g2(n,r));let s=this.Ir.get(n);s===void 0&&(s=he(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class K2{constructor(){this.sessionToken=wt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
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
 */class ig{constructor(){this.Tr=new vt(lt.Er),this.dr=new vt(lt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new lt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new lt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new te(new De([])),r=new lt(n,e),i=new lt(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new te(new De([])),r=new lt(n,e),i=new lt(n,e+1);let s=he();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new lt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class lt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return te.comparator(e.key,n.key)||_e(e.wr,n.wr)}static Ar(e,n){return _e(e.wr,n.wr)||te.comparator(e.key,n.key)}}/**
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
 */class Q2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new vt(lt.Er)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new m2(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new lt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return $.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new lt(n,0),i=new lt(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),$.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new vt(_e);return n.forEach(i=>{const s=new lt(i,0),o=new lt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),$.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;te.isDocumentKey(s)||(s=s.child(""));const o=new lt(new te(s),0);let a=new vt(_e);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(a=a.add(u.wr)),!0)},o),$.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Te(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return $.forEach(n.mutations,i=>{const s=new lt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new lt(n,0),i=this.br.firstAfterOrEqual(r);return $.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Y2{constructor(e){this.Mr=e,this.docs=function(){return new Be(te.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():Rt.newInvalidDocument(n))}getEntries(e,n){let r=Nr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Rt.newInvalidDocument(i))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Nr();const o=n.path,a=new te(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||LN(DN(f),r)<=0||(i.has(f.key)||Bd(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return $.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ie()}Or(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new X2(this)}getSize(e){return $.resolve(this.size)}}class X2 extends B2{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class J2{constructor(e){this.persistence=e,this.Nr=new Jo(n=>Jm(n),Zm),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ig,this.targetCount=0,this.kr=Fo.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),$.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Fo(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Kn(n),$.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),$.waitFor(s).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),$.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.Br.containsKey(n))}}/**
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
 */class Z2{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Km(0),this.Kr=!1,this.Kr=!0,this.$r=new K2,this.referenceDelegate=e(this),this.Ur=new J2(this),this.indexManager=new z2,this.remoteDocumentCache=function(i){return new Y2(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new U2(n),this.Gr=new q2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new G2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new Q2(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const i=new eD(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return $.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class eD extends jN{constructor(e){super(),this.currentSequenceNumber=e}}class sg{constructor(e){this.persistence=e,this.Jr=new ig,this.Yr=null}static Zr(e){return new sg(e)}get Xr(){if(this.Yr)return this.Yr;throw ie()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),$.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Xr,r=>{const i=te.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,ae.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return $.or([()=>$.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class og{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=he(),i=he();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new og(e,n.fromCache,r,i)}}/**
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
 */class tD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class nD{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Bb()?8:MN(Nt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new tD;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Ca()<=fe.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",Qs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),$.resolve()):(Ca()<=fe.DEBUG&&Y("QueryEngine","Query:",Qs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ca()<=fe.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",Qs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xn(n))):$.resolve())}Yi(e,n){if(x_(n))return $.resolve(null);let r=Xn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=od(n,null,"F"),r=Xn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=he(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(n,a);return this.ns(n,d,o,u.readTime)?this.Yi(e,od(n,null,"F")):this.rs(e,d,n,u)}))})))}Zi(e,n,r,i){return x_(n)||i.isEqual(ae.min())?$.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?$.resolve(null):(Ca()<=fe.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Qs(n)),this.rs(e,o,n,NN(i,-1)).next(a=>a))})}ts(e,n){let r=new vt(P1(e));return n.forEach((i,s)=>{Bd(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Ca()<=fe.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",Qs(n)),this.Ji.getDocumentsMatchingQuery(e,n,bi.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class rD{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Be(_e),this._s=new Jo(s=>Jm(s),Zm),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new H2(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function iD(t,e,n,r){return new rD(t,e,n,r)}async function eT(t,e){const n=le(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=he();for(const d of i){o.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of s){a.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:o,addedBatchIds:a}))})})}function sD(t,e){const n=le(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,d,f){const m=d.batch,g=m.keys();let I=$.resolve();return g.forEach(C=>{I=I.next(()=>f.getEntry(u,C)).next(k=>{const P=d.docVersions.get(C);Te(P!==null),k.version.compareTo(P)<0&&(m.applyToRemoteDocument(k,d),k.isValidDocument()&&(k.setReadTime(d.commitVersion),f.addEntry(k)))})}),I.next(()=>a.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=he();for(let d=0;d<a.mutationResults.length;++d)a.mutationResults[d].transformResults.length>0&&(u=u.add(a.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function tT(t){const e=le(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function oD(t,e){const n=le(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((f,m)=>{const g=i.get(m);if(!g)return;a.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,m)));let I=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?I=I.withResumeToken(wt.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,r)),i=i.insert(m,I),function(k,P,E){return k.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(g,I,f)&&a.push(n.Ur.updateTargetData(s,I))});let u=Nr(),d=he();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),a.push(aD(s,o,e.documentUpdates).next(f=>{u=f.Ps,d=f.Is})),!r.isEqual(ae.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(m=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(f)}return $.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,d)).next(()=>u)}).then(s=>(n.os=i,s))}function aD(t,e,n){let r=he(),i=he();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Nr();return n.forEach((a,u)=>{const d=s.get(a);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(ae.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):Y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",d.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function lD(t,e){const n=le(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function uD(t,e){const n=le(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,$.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new di(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Ap(t,e,n){const r=le(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Jl(o))throw o;Y("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function N_(t,e,n){const r=le(t);let i=ae.min(),s=he();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,f){const m=le(u),g=m._s.get(f);return g!==void 0?$.resolve(m.os.get(g)):m.Ur.getTargetData(d,f)}(r,o,Xn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:ae.min(),n?s:he())).next(a=>(cD(r,t2(e),a),{documents:a,Ts:s})))}function cD(t,e,n){let r=t.us.get(e)||ae.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class D_{constructor(){this.activeTargetIds=a2()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class dD{constructor(){this.so=new D_,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new D_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class hD{_o(e){}shutdown(){}}/**
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
 */class L_{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ku=null;function Kh(){return Ku===null?Ku=function(){return 268435456+Math.round(2147483648*Math.random())}():Ku++,"0x"+Ku.toString(16)}/**
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
 */const fD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class pD{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const St="WebChannelConnection";class mD extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=Kh(),u=this.xo(n,r.toUriEncodedString());Y("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,s,o),this.No(n,u,d,i).then(f=>(Y("RestConnection",`Received RPC '${n}' ${a}: `,f),f),f=>{throw jo("RestConnection",`RPC '${n}' ${a} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Yo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=fD[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Kh();return new Promise((o,a)=>{const u=new f1;u.setWithCredentials(!0),u.listenOnce(p1.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case mc.NO_ERROR:const f=u.getResponseJson();Y(St,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case mc.TIMEOUT:Y(St,`RPC '${e}' ${s} timed out`),a(new K(F.DEADLINE_EXCEEDED,"Request time out"));break;case mc.HTTP_ERROR:const m=u.getStatus();if(Y(St,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const I=g==null?void 0:g.error;if(I&&I.status&&I.message){const C=function(P){const E=P.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(E)>=0?E:F.UNKNOWN}(I.status);a(new K(C,I.message))}else a(new K(F.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new K(F.UNAVAILABLE,"Connection failed."));break;default:ie()}}finally{Y(St,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);Y(St,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",d,r,15)})}Bo(e,n,r){const i=Kh(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=y1(),a=g1(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");Y(St,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=o.createWebChannel(f,u);let g=!1,I=!1;const C=new pD({Io:P=>{I?Y(St,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(g||(Y(St,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),Y(St,`RPC '${e}' stream ${i} sending:`,P),m.send(P))},To:()=>m.close()}),k=(P,E,_)=>{P.listen(E,S=>{try{_(S)}catch(O){setTimeout(()=>{throw O},0)}})};return k(m,za.EventType.OPEN,()=>{I||(Y(St,`RPC '${e}' stream ${i} transport opened.`),C.yo())}),k(m,za.EventType.CLOSE,()=>{I||(I=!0,Y(St,`RPC '${e}' stream ${i} transport closed`),C.So())}),k(m,za.EventType.ERROR,P=>{I||(I=!0,jo(St,`RPC '${e}' stream ${i} transport errored:`,P),C.So(new K(F.UNAVAILABLE,"The operation could not be completed")))}),k(m,za.EventType.MESSAGE,P=>{var E;if(!I){const _=P.data[0];Te(!!_);const S=_,O=S.error||((E=S[0])===null||E===void 0?void 0:E.error);if(O){Y(St,`RPC '${e}' stream ${i} received error:`,O);const j=O.status;let D=function(T){const A=et[T];if(A!==void 0)return W1(A)}(j),x=O.message;D===void 0&&(D=F.INTERNAL,x="Unknown error status: "+j+" with message "+O.message),I=!0,C.So(new K(D,x)),m.close()}else Y(St,`RPC '${e}' stream ${i} received:`,_),C.bo(_)}}),k(a,m1.STAT_EVENT,P=>{P.stat===gp.PROXY?Y(St,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===gp.NOPROXY&&Y(St,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function Qh(){return typeof document<"u"?document:null}/**
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
 */function Kd(t){return new S2(t,!0)}/**
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
 */class nT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&Y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class rT{constructor(e,n,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new nT(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(Pr(n.toString()),Pr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new K(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gD extends rT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=b2(this.serializer,e),r=function(s){if(!("targetChange"in s))return ae.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ae.min():o.readTime?Jn(o.readTime):ae.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Sp(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=wp(u)?{documents:P2(s,u)}:{query:N2(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=G1(s,o.resumeToken);const d=Ep(s,o.expectedCount);d!==null&&(a.expectedCount=d)}else if(o.snapshotVersion.compareTo(ae.min())>0){a.readTime=ad(s,o.snapshotVersion.toTimestamp());const d=Ep(s,o.expectedCount);d!==null&&(a.expectedCount=d)}return a}(this.serializer,e);const r=L2(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Sp(this.serializer),n.removeTarget=e,this.a_(n)}}class yD extends rT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Te(!!e.streamToken),this.lastStreamToken=e.streamToken,Te(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=C2(e.writeResults,e.commitTime),r=Jn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Sp(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>R2(this.serializer,r))};this.a_(n)}}/**
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
 */class vD extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new K(F.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Tp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(F.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Tp(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(F.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class _D{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class wD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{ks(this)&&(Y("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=le(u);d.L_.add(4),await tu(d),d.q_.set("Unknown"),d.L_.delete(4),await Qd(d)}(this))})}),this.q_=new _D(r,i)}}async function Qd(t){if(ks(t))for(const e of t.B_)await e(!0)}async function tu(t){for(const e of t.B_)await e(!1)}function iT(t,e){const n=le(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),cg(n)?ug(n):Zo(n).r_()&&lg(n,e))}function ag(t,e){const n=le(t),r=Zo(n);n.N_.delete(e),r.r_()&&sT(n,e),n.N_.size===0&&(r.r_()?r.o_():ks(n)&&n.q_.set("Unknown"))}function lg(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ae.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Zo(t).A_(e)}function sT(t,e){t.Q_.xe(e),Zo(t).R_(e)}function ug(t){t.Q_=new x2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Zo(t).start(),t.q_.v_()}function cg(t){return ks(t)&&!Zo(t).n_()&&t.N_.size>0}function ks(t){return le(t).L_.size===0}function oT(t){t.Q_=void 0}async function xD(t){t.q_.set("Online")}async function ED(t){t.N_.forEach((e,n)=>{lg(t,e)})}async function TD(t,e){oT(t),cg(t)?(t.q_.M_(e),ug(t)):t.q_.set("Unknown")}async function ID(t,e,n){if(t.q_.set("Online"),e instanceof q1&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){Y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ld(t,r)}else if(e instanceof vc?t.Q_.Ke(e):e instanceof H1?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ae.min()))try{const r=await tT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(d);f&&s.N_.set(d,f.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,d)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(wt.EMPTY_BYTE_STRING,f.snapshotVersion)),sT(s,u);const m=new di(f.target,u,d,f.sequenceNumber);lg(s,m)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){Y("RemoteStore","Failed to raise snapshot:",r),await ld(t,r)}}async function ld(t,e,n){if(!Jl(e))throw e;t.L_.add(1),await tu(t),t.q_.set("Offline"),n||(n=()=>tT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Y("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Qd(t)})}function aT(t,e){return e().catch(n=>ld(t,n,e))}async function Yd(t){const e=le(t),n=Ci(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;SD(e);)try{const i=await lD(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,AD(e,i)}catch(i){await ld(e,i)}lT(e)&&uT(e)}function SD(t){return ks(t)&&t.O_.length<10}function AD(t,e){t.O_.push(e);const n=Ci(t);n.r_()&&n.V_&&n.m_(e.mutations)}function lT(t){return ks(t)&&!Ci(t).n_()&&t.O_.length>0}function uT(t){Ci(t).start()}async function kD(t){Ci(t).p_()}async function bD(t){const e=Ci(t);for(const n of t.O_)e.m_(n.mutations)}async function RD(t,e,n){const r=t.O_.shift(),i=tg.from(r,e,n);await aT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Yd(t)}async function CD(t,e){e&&Ci(t).V_&&await async function(r,i){if(function(o){return v2(o)&&o!==F.ABORTED}(i.code)){const s=r.O_.shift();Ci(r).s_(),await aT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Yd(r)}}(t,e),lT(t)&&uT(t)}async function O_(t,e){const n=le(t);n.asyncQueue.verifyOperationInProgress(),Y("RemoteStore","RemoteStore received new credentials");const r=ks(n);n.L_.add(3),await tu(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Qd(n)}async function PD(t,e){const n=le(t);e?(n.L_.delete(2),await Qd(n)):e||(n.L_.add(2),await tu(n),n.q_.set("Unknown"))}function Zo(t){return t.K_||(t.K_=function(n,r,i){const s=le(n);return s.w_(),new gD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:xD.bind(null,t),Ro:ED.bind(null,t),mo:TD.bind(null,t),d_:ID.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),cg(t)?ug(t):t.q_.set("Unknown")):(await t.K_.stop(),oT(t))})),t.K_}function Ci(t){return t.U_||(t.U_=function(n,r,i){const s=le(n);return s.w_(),new yD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:kD.bind(null,t),mo:CD.bind(null,t),f_:bD.bind(null,t),g_:RD.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Yd(t)):(await t.U_.stop(),t.O_.length>0&&(Y("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class dg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ir,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new dg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hg(t,e){if(Pr("AsyncQueue",`${e}: ${t}`),Jl(t))return new K(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Io{constructor(e){this.comparator=e?(n,r)=>e(n,r)||te.comparator(n.key,r.key):(n,r)=>te.comparator(n.key,r.key),this.keyedMap=$a(),this.sortedSet=new Be(this.comparator)}static emptySet(e){return new Io(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Io)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Io;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class j_{constructor(){this.W_=new Be(te.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ie():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class zo{constructor(e,n,r,i,s,o,a,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new zo(e,n,Io.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$d(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class ND{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class DD{constructor(){this.queries=M_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=le(n),s=i.queries;i.queries=M_(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new K(F.ABORTED,"Firestore shutting down"))}}function M_(){return new Jo(t=>C1(t),$d)}async function fg(t,e){const n=le(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new ND,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=hg(o,`Initialization of query '${Qs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&mg(n)}async function pg(t,e){const n=le(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function LD(t,e){const n=le(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&mg(n)}function OD(t,e,n){const r=le(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function mg(t){t.Y_.forEach(e=>{e.next()})}var kp,V_;(V_=kp||(kp={})).ea="default",V_.Cache="cache";class gg{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new zo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=zo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==kp.Cache}}/**
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
 */class cT{constructor(e){this.key=e}}class dT{constructor(e){this.key=e}}class jD{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=he(),this.mutatedKeys=he(),this.Aa=P1(e),this.Ra=new Io(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new j_,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const g=i.get(f),I=Bd(this.query,m)?m:null,C=!!g&&this.mutatedKeys.has(g.key),k=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let P=!1;g&&I?g.data.isEqual(I.data)?C!==k&&(r.track({type:3,doc:I}),P=!0):this.ga(g,I)||(r.track({type:2,doc:I}),P=!0,(u&&this.Aa(I,u)>0||d&&this.Aa(I,d)<0)&&(a=!0)):!g&&I?(r.track({type:0,doc:I}),P=!0):g&&!I&&(r.track({type:1,doc:g}),P=!0,(u||d)&&(a=!0)),P&&(I?(o=o.add(I),s=k?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,m)=>function(I,C){const k=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie()}};return k(I)-k(C)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,d=u!==this.Ea;return this.Ea=u,o.length!==0||d?{snapshot:new zo(this.query,e.Ra,s,o,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new j_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=he(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new dT(r))}),this.da.forEach(r=>{e.has(r)||n.push(new cT(r))}),n}ba(e){this.Ta=e.Ts,this.da=he();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return zo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class MD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class VD{constructor(e){this.key=e,this.va=!1}}class UD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Jo(a=>C1(a),$d),this.Ma=new Map,this.xa=new Set,this.Oa=new Be(te.comparator),this.Na=new Map,this.La=new ig,this.Ba={},this.ka=new Map,this.qa=Fo.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function FD(t,e,n=!0){const r=yT(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await hT(r,e,n,!0),i}async function zD(t,e){const n=yT(t);await hT(n,e,!0,!1)}async function hT(t,e,n,r){const i=await uD(t.localStore,Xn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await $D(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&iT(t.remoteStore,i),a}async function $D(t,e,n,r,i){t.Ka=(m,g,I)=>async function(k,P,E,_){let S=P.view.ma(E);S.ns&&(S=await N_(k.localStore,P.query,!1).then(({documents:x})=>P.view.ma(x,S)));const O=_&&_.targetChanges.get(P.targetId),j=_&&_.targetMismatches.get(P.targetId)!=null,D=P.view.applyChanges(S,k.isPrimaryClient,O,j);return F_(k,P.targetId,D.wa),D.snapshot}(t,m,g,I);const s=await N_(t.localStore,e,!0),o=new jD(e,s.Ts),a=o.ma(s.documents),u=eu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),d=o.applyChanges(a,t.isPrimaryClient,u);F_(t,n,d.wa);const f=new MD(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function BD(t,e,n){const r=le(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!$d(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ap(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&ag(r.remoteStore,i.targetId),bp(r,i.targetId)}).catch(Xl)):(bp(r,i.targetId),await Ap(r.localStore,i.targetId,!0))}async function WD(t,e){const n=le(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ag(n.remoteStore,r.targetId))}async function HD(t,e,n){const r=JD(t);try{const i=await function(o,a){const u=le(o),d=at.now(),f=a.reduce((I,C)=>I.add(C.key),he());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let C=Nr(),k=he();return u.cs.getEntries(I,f).next(P=>{C=P,C.forEach((E,_)=>{_.isValidDocument()||(k=k.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,C)).next(P=>{m=P;const E=[];for(const _ of a){const S=f2(_,m.get(_.key).overlayedDocument);S!=null&&E.push(new ji(_.key,S,E1(S.value.mapValue),Mt.exists(!0)))}return u.mutationQueue.addMutationBatch(I,d,E,a)}).next(P=>{g=P;const E=P.applyToLocalDocumentSet(m,k);return u.documentOverlayCache.saveOverlays(I,P.batchId,E)})}).then(()=>({batchId:g.batchId,changes:D1(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let d=o.Ba[o.currentUser.toKey()];d||(d=new Be(_e)),d=d.insert(a,u),o.Ba[o.currentUser.toKey()]=d}(r,i.batchId,n),await nu(r,i.changes),await Yd(r.remoteStore)}catch(i){const s=hg(i,"Failed to persist write");n.reject(s)}}async function fT(t,e){const n=le(t);try{const r=await oD(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(Te(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?Te(o.va):i.removedDocuments.size>0&&(Te(o.va),o.va=!1))}),await nu(n,r,e)}catch(r){await Xl(r)}}function U_(t,e,n){const r=le(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=le(o);u.onlineState=a;let d=!1;u.queries.forEach((f,m)=>{for(const g of m.j_)g.Z_(a)&&(d=!0)}),d&&mg(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function qD(t,e,n){const r=le(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Be(te.comparator);o=o.insert(s,Rt.newNoDocument(s,ae.min()));const a=he().add(s),u=new Gd(ae.min(),new Map,new Be(_e),o,a);await fT(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),yg(r)}else await Ap(r.localStore,e,!1).then(()=>bp(r,e,n)).catch(Xl)}async function GD(t,e){const n=le(t),r=e.batch.batchId;try{const i=await sD(n.localStore,e);mT(n,r,null),pT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await nu(n,i)}catch(i){await Xl(i)}}async function KD(t,e,n){const r=le(t);try{const i=await function(o,a){const u=le(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,a).next(m=>(Te(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(d,m))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(r.localStore,e);mT(r,e,n),pT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await nu(r,i)}catch(i){await Xl(i)}}function pT(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function mT(t,e,n){const r=le(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function bp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||gT(t,r)})}function gT(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(ag(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),yg(t))}function F_(t,e,n){for(const r of n)r instanceof cT?(t.La.addReference(r.key,e),QD(t,r)):r instanceof dT?(Y("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||gT(t,r.key)):ie()}function QD(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Y("SyncEngine","New document in limbo: "+n),t.xa.add(r),yg(t))}function yg(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new te(De.fromString(e)),r=t.qa.next();t.Na.set(r,new VD(n)),t.Oa=t.Oa.insert(n,r),iT(t.remoteStore,new di(Xn(zd(n.path)),r,"TargetPurposeLimboResolution",Km.oe))}}async function nu(t,e,n){const r=le(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(d=>{var f;if((d||n)&&r.isPrimaryClient){const m=d?!d.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){i.push(d);const m=og.Wi(u.targetId,d);s.push(m)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,d){const f=le(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>$.forEach(d,g=>$.forEach(g.$i,I=>f.persistence.referenceDelegate.addReference(m,g.targetId,I)).next(()=>$.forEach(g.Ui,I=>f.persistence.referenceDelegate.removeReference(m,g.targetId,I)))))}catch(m){if(!Jl(m))throw m;Y("LocalStore","Failed to update sequence numbers: "+m)}for(const m of d){const g=m.targetId;if(!m.fromCache){const I=f.os.get(g),C=I.snapshotVersion,k=I.withLastLimboFreeSnapshotVersion(C);f.os=f.os.insert(g,k)}}}(r.localStore,s))}async function YD(t,e){const n=le(t);if(!n.currentUser.isEqual(e)){Y("SyncEngine","User change. New user:",e.toKey());const r=await eT(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new K(F.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await nu(n,r.hs)}}function XD(t,e){const n=le(t),r=n.Na.get(e);if(r&&r.va)return he().add(r.key);{let i=he();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function yT(t){const e=le(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=fT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=XD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qD.bind(null,e),e.Ca.d_=LD.bind(null,e.eventManager),e.Ca.$a=OD.bind(null,e.eventManager),e}function JD(t){const e=le(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=GD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=KD.bind(null,e),e}class ud{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Kd(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return iD(this.persistence,new nD,e.initialUser,this.serializer)}Ga(e){return new Z2(sg.Zr,this.serializer)}Wa(e){return new dD}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ud.provider={build:()=>new ud};class Rp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>U_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=YD.bind(null,this.syncEngine),await PD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new DD}()}createDatastore(e){const n=Kd(e.databaseInfo.databaseId),r=function(s){return new mD(s)}(e.databaseInfo);return function(s,o,a,u){return new vD(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new wD(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>U_(this.syncEngine,n,0),function(){return L_.D()?new L_:new hD}())}createSyncEngine(e,n){return function(i,s,o,a,u,d,f){const m=new UD(i,s,o,a,u,d);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=le(i);Y("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await tu(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Rp.provider={build:()=>new Rp};/**
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
 */class vg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Pr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class ZD{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=kt.UNAUTHENTICATED,this.clientId=_1.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{Y("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Y("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ir;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=hg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Yh(t,e){t.asyncQueue.verifyOperationInProgress(),Y("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await eT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function z_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await eL(t);Y("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>O_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>O_(e.remoteStore,i)),t._onlineComponents=e}async function eL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y("FirestoreClient","Using user provided OfflineComponentProvider");try{await Yh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===F.FAILED_PRECONDITION||i.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;jo("Error using user provided cache. Falling back to memory cache: "+n),await Yh(t,new ud)}}else Y("FirestoreClient","Using default OfflineComponentProvider"),await Yh(t,new ud);return t._offlineComponents}async function vT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y("FirestoreClient","Using user provided OnlineComponentProvider"),await z_(t,t._uninitializedComponentsProvider._online)):(Y("FirestoreClient","Using default OnlineComponentProvider"),await z_(t,new Rp))),t._onlineComponents}function tL(t){return vT(t).then(e=>e.syncEngine)}async function cd(t){const e=await vT(t),n=e.eventManager;return n.onListen=FD.bind(null,e.syncEngine),n.onUnlisten=BD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=zD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=WD.bind(null,e.syncEngine),n}function nL(t,e,n={}){const r=new Ir;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,d){const f=new vg({next:g=>{f.Za(),o.enqueueAndForget(()=>pg(s,m));const I=g.docs.has(a);!I&&g.fromCache?d.reject(new K(F.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&g.fromCache&&u&&u.source==="server"?d.reject(new K(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(g)},error:g=>d.reject(g)}),m=new gg(zd(a.path),f,{includeMetadataChanges:!0,_a:!0});return fg(s,m)}(await cd(t),t.asyncQueue,e,n,r)),r.promise}function rL(t,e,n={}){const r=new Ir;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,d){const f=new vg({next:g=>{f.Za(),o.enqueueAndForget(()=>pg(s,m)),g.fromCache&&u.source==="server"?d.reject(new K(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(g)},error:g=>d.reject(g)}),m=new gg(a,f,{includeMetadataChanges:!0,_a:!0});return fg(s,m)}(await cd(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function _T(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const $_=new Map;/**
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
 */function wT(t,e,n){if(!n)throw new K(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function iL(t,e,n,r){if(e===!0&&r===!0)throw new K(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function B_(t){if(!te.isDocumentKey(t))throw new K(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function W_(t){if(te.isDocumentKey(t))throw new K(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Xd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ie()}function Vt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xd(t);throw new K(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function sL(t,e){if(e<=0)throw new K(F.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class H_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}iL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_T((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Jd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new H_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new H_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new TN;switch(r.type){case"firstParty":return new kN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=$_.get(n);r&&(Y("ComponentProvider","Removing Datastore"),$_.delete(n),r.terminate())}(this),Promise.resolve()}}function oL(t,e,n,r={}){var i;const s=(t=Vt(t,Jd))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&jo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=kt.MOCK_USER;else{a=jb(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new K(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new kt(d)}t._authCredentials=new IN(new v1(a,u))}}/**
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
 */class Ur{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ur(this.firestore,e,this._query)}}class Ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ii(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}}class Ii extends Ur{constructor(e,n,r){super(e,n,zd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new te(e))}withConverter(e){return new Ii(this.firestore,e,this._path)}}function ea(t,e,...n){if(t=Ge(t),wT("collection","path",e),t instanceof Jd){const r=De.fromString(e,...n);return W_(r),new Ii(t,null,r)}{if(!(t instanceof Ct||t instanceof Ii))throw new K(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return W_(r),new Ii(t.firestore,null,r)}}function Dt(t,e,...n){if(t=Ge(t),arguments.length===1&&(e=_1.newId()),wT("doc","path",e),t instanceof Jd){const r=De.fromString(e,...n);return B_(r),new Ct(t,null,new te(r))}{if(!(t instanceof Ct||t instanceof Ii))throw new K(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return B_(r),new Ct(t.firestore,t instanceof Ii?t.converter:null,new te(r))}}/**
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
 */class q_{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new nT(this,"async_queue_retry"),this.Vu=()=>{const r=Qh();r&&Y("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Qh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Qh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Ir;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Jl(e))throw e;Y("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Pr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=dg.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&ie()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function G_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class er extends Jd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new q_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new q_(e),this._firestoreClient=void 0,await e}}}function aL(t,e){const n=typeof t=="object"?t:bE(),r=typeof t=="string"?t:"(default)",i=Mm(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Lb("firestore");s&&oL(i,...s)}return i}function ru(t){if(t._terminated)throw new K(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||lL(t),t._firestoreClient}function lL(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,d,f){return new FN(a,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,_T(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new ZD(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class $o{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $o(wt.fromBase64String(e))}catch(n){throw new K(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new $o(wt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class iu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class su{constructor(e){this._methodName=e}}/**
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
 */class _g{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}/**
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
 */class wg{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const uL=/^__.*__$/;class cL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ji(e,this.data,this.fieldMask,n,this.fieldTransforms):new Zl(e,this.data,n,this.fieldTransforms)}}class xT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ji(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ET(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ie()}}class xg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new xg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return dd(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(ET(this.Cu)&&uL.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class dL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Kd(e)}Qu(e,n,r,i=!1){return new xg({Cu:e,methodName:n,qu:r,path:gt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ou(t){const e=t._freezeSettings(),n=Kd(t._databaseId);return new dL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Eg(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Sg("Data must be an object, but it was:",o,r);const a=ST(r,o);let u,d;if(s.merge)u=new sn(o.fieldMask),d=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const g=Cp(e,m,n);if(!o.contains(g))throw new K(F.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);kT(f,g)||f.push(g)}u=new sn(f),d=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,d=o.fieldTransforms;return new cL(new qt(a),u,d)}class Zd extends su{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Zd}}class Tg extends su{_toFieldTransform(e){return new z1(e.path,new Dl)}isEqual(e){return e instanceof Tg}}class Ig extends su{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new jl(e.serializer,j1(e.serializer,this.$u));return new z1(e.path,n)}isEqual(e){return e instanceof Ig&&this.$u===e.$u}}function TT(t,e,n,r){const i=t.Qu(1,e,n);Sg("Data must be an object, but it was:",i,r);const s=[],o=qt.empty();As(r,(u,d)=>{const f=Ag(e,u,n);d=Ge(d);const m=i.Nu(f);if(d instanceof Zd)s.push(f);else{const g=au(d,m);g!=null&&(s.push(f),o.set(f,g))}});const a=new sn(s);return new xT(o,a,i.fieldTransforms)}function IT(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[Cp(e,r,n)],u=[i];if(s.length%2!=0)throw new K(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)a.push(Cp(e,s[g])),u.push(s[g+1]);const d=[],f=qt.empty();for(let g=a.length-1;g>=0;--g)if(!kT(d,a[g])){const I=a[g];let C=u[g];C=Ge(C);const k=o.Nu(I);if(C instanceof Zd)d.push(I);else{const P=au(C,k);P!=null&&(d.push(I),f.set(I,P))}}const m=new sn(d);return new xT(f,m,o.fieldTransforms)}function hL(t,e,n,r=!1){return au(n,t.Qu(r?4:3,e))}function au(t,e){if(AT(t=Ge(t)))return Sg("Unsupported field value:",e,t),ST(t,e);if(t instanceof su)return function(r,i){if(!ET(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=au(a,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Ge(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return j1(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=at.fromDate(r);return{timestampValue:ad(i.serializer,s)}}if(r instanceof at){const s=new at(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ad(i.serializer,s)}}if(r instanceof _g)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof $o)return{bytesValue:G1(i.serializer,r._byteString)};if(r instanceof Ct){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:rg(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof wg)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return eg(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Xd(r)}`)}(t,e)}function ST(t,e){const n={};return w1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):As(t,(r,i)=>{const s=au(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function AT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof at||t instanceof _g||t instanceof $o||t instanceof Ct||t instanceof su||t instanceof wg)}function Sg(t,e,n){if(!AT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Xd(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Cp(t,e,n){if((e=Ge(e))instanceof iu)return e._internalPath;if(typeof e=="string")return Ag(t,e);throw dd("Field path arguments must be of type string or ",t,!1,void 0,n)}const fL=new RegExp("[~\\*/\\[\\]]");function Ag(t,e,n){if(e.search(fL)>=0)throw dd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new iu(...e.split("."))._internalPath}catch{throw dd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function dd(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new K(F.INVALID_ARGUMENT,a+t+u)}function kT(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class bT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new pL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(kg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class pL extends bT{data(){return super.data()}}function kg(t,e){return typeof e=="string"?Ag(t,e):e instanceof iu?e._internalPath:e._delegate._internalPath}/**
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
 */function RT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bg{}class Rg extends bg{}function Cg(t,e,...n){let r=[];e instanceof bg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Ng).length,a=s.filter(u=>u instanceof Pg).length;if(o>1||o>0&&a>0)throw new K(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Pg extends Rg{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Pg(e,n,r)}_apply(e){const n=this._parse(e);return PT(e._query,n),new Ur(e.firestore,e.converter,xp(e._query,n))}_parse(e){const n=ou(e.firestore);return function(s,o,a,u,d,f,m){let g;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new K(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Q_(m,f);const I=[];for(const C of m)I.push(K_(u,s,C));g={arrayValue:{values:I}}}else g=K_(u,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Q_(m,f),g=hL(a,o,m,f==="in"||f==="not-in");return nt.create(d,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Ng extends bg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ng(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:On.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)PT(o,u),o=xp(o,u)}(e._query,n),new Ur(e.firestore,e.converter,xp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Dg extends Rg{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Dg(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new K(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new K(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Nl(s,o)}(e._query,this._field,this._direction);return new Ur(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Xo(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Lg(t,e="asc"){const n=e,r=kg("orderBy",t);return Dg._create(r,n)}class Og extends Rg{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Og(e,n,r)}_apply(e){return new Ur(e.firestore,e.converter,od(e._query,this._limit,this._limitType))}}function CT(t){return sL("limit",t),Og._create("limit",t,"F")}function K_(t,e,n){if(typeof(n=Ge(n))=="string"){if(n==="")throw new K(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!R1(e)&&n.indexOf("/")!==-1)throw new K(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(De.fromString(n));if(!te.isDocumentKey(r))throw new K(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return m_(t,new te(r))}if(n instanceof Ct)return m_(t,n._key);throw new K(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xd(n)}.`)}function Q_(t,e){if(!Array.isArray(t)||t.length===0)throw new K(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function PT(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new K(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class mL{convertValue(e,n="none"){switch(xs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ws(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ie()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return As(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Qe(o.doubleValue));return new wg(s)}convertGeoPoint(e){return new _g(Qe(e.latitude),Qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ym(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Rl(e));default:return null}}convertTimestamp(e){const n=Ri(e);return new at(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=De.fromString(e);Te(Z1(r));const i=new Cl(r.get(1),r.get(3)),s=new te(r.popFirst(5));return i.isEqual(n)||Pr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function jg(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Wa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class NT extends bT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new _c(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(kg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class _c extends NT{data(e={}){return super.data(e)}}class DT{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Wa(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new _c(this._firestore,this._userDataWriter,r.key,r,new Wa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new _c(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Wa(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new _c(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Wa(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return a.type!==0&&(d=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),f=o.indexOf(a.doc.key)),{type:gL(a.type),doc:u,oldIndex:d,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function gL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie()}}/**
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
 */function eh(t){t=Vt(t,Ct);const e=Vt(t.firestore,er);return nL(ru(e),t._key).then(n=>jT(e,t,n))}class Mg extends mL{constructor(e){super(),this.firestore=e}convertBytes(e){return new $o(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function Vg(t){t=Vt(t,Ur);const e=Vt(t.firestore,er),n=ru(e),r=new Mg(e);return RT(t._query),rL(n,t._query).then(i=>new DT(e,r,t,i))}function lu(t,e,n){t=Vt(t,Ct);const r=Vt(t.firestore,er),i=jg(t.converter,e,n);return uu(r,[Eg(ou(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Mt.none())])}function yL(t,e,n,...r){t=Vt(t,Ct);const i=Vt(t.firestore,er),s=ou(i);let o;return o=typeof(e=Ge(e))=="string"||e instanceof iu?IT(s,"updateDoc",t._key,e,n,r):TT(s,"updateDoc",t._key,e),uu(i,[o.toMutation(t._key,Mt.exists(!0))])}function th(t){return uu(Vt(t.firestore,er),[new qd(t._key,Mt.none())])}function LT(t,e){const n=Vt(t.firestore,er),r=Dt(t),i=jg(t.converter,e);return uu(n,[Eg(ou(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Mt.exists(!1))]).then(()=>r)}function OT(t,...e){var n,r,i;t=Ge(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||G_(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(G_(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let u,d,f;if(t instanceof Ct)d=Vt(t.firestore,er),f=zd(t._key.path),u={next:m=>{e[o]&&e[o](jT(d,t,m))},error:e[o+1],complete:e[o+2]};else{const m=Vt(t,Ur);d=Vt(m.firestore,er),f=m._query;const g=new Mg(d);u={next:I=>{e[o]&&e[o](new DT(d,g,m,I))},error:e[o+1],complete:e[o+2]},RT(t._query)}return function(g,I,C,k){const P=new vg(k),E=new gg(I,P,C);return g.asyncQueue.enqueueAndForget(async()=>fg(await cd(g),E)),()=>{P.Za(),g.asyncQueue.enqueueAndForget(async()=>pg(await cd(g),E))}}(ru(d),f,a,u)}function uu(t,e){return function(r,i){const s=new Ir;return r.asyncQueue.enqueueAndForget(async()=>HD(await tL(r),i,s)),s.promise}(ru(t),e)}function jT(t,e,n){const r=n.docs.get(e._key),i=new Mg(t);return new NT(t,i,e._key,r,new Wa(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */class vL{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=ou(e)}set(e,n,r){this._verifyNotCommitted();const i=Xh(e,this._firestore),s=jg(i.converter,n,r),o=Eg(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Mt.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Xh(e,this._firestore);let o;return o=typeof(n=Ge(n))=="string"||n instanceof iu?IT(this._dataReader,"WriteBatch.update",s._key,n,r,i):TT(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Mt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Xh(e,this._firestore);return this._mutations=this._mutations.concat(new qd(n._key,Mt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new K(F.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Xh(t,e){if((t=Ge(t)).firestore!==e)throw new K(F.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function Mi(){return new Tg("serverTimestamp")}function Y_(t){return new Ig("increment",t)}/**
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
 */function _L(t){return ru(t=Vt(t,er)),new vL(t,e=>uu(t,e))}(function(e,n=!0){(function(i){Yo=i})(Ko),Lo(new gs("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new er(new SN(r.getProvider("auth-internal")),new RN(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new K(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Cl(d.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Ti(c_,"4.7.3",e),Ti(c_,"4.7.3","esm2017")})();var wL="firebase",xL="10.14.1";/**
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
 */Ti(wL,xL,"app");const wc={apiKey:"AIzaSyCqWiCyTRyy0DC5DURAulfDpdCJSt8a0Bw",authDomain:"hoshii-a4717.firebaseapp.com",projectId:"hoshii-a4717",storageBucket:"hoshii-a4717.firebasestorage.app",messagingSenderId:"1016457575048",appId:"1:1016457575048:web:ad2c75e86127181db2bd3d"},tr=!!(wc.apiKey&&wc.projectId&&wc.appId);let Jh=null,Pi=null,Me=null;tr&&(Jh=Fv().length?Fv()[0]:kE(wc),Pi=xN(Jh),Me=aL(Jh));function ta(){if(!tr||!Pi)throw new Error("Firebase is not configured. Add your credentials to a .env file (see README).")}async function EL(t,e,n){ta();const r=await iP(Pi,t,e);return n&&await t1(r.user,{displayName:n}),await lu(Dt(Me,"users",r.user.uid),{uid:r.user.uid,displayName:n||t.split("@")[0],email:t,avatarUrl:null,createdAt:Mi()}),r.user}async function TL(t,e){return ta(),(await sP(Pi,t,e)).user}async function IL(){ta(),await cP(Pi)}async function SL(t){ta(),await rP(Pi,t)}async function AL(t,{displayName:e,photoURL:n}){ta(),await t1(t,{displayName:e,photoURL:n}),await lu(Dt(Me,"users",t.uid),{displayName:e??t.displayName,avatarUrl:n??t.photoURL},{merge:!0})}async function kL(t){ta();const e=await eh(Dt(Me,"users",t));return e.exists()?e.data():null}function bL(t){return!tr||!Pi?(t(null),()=>{}):uP(Pi,t)}const MT=R.createContext(null);function RL({children:t}){const[e,n]=R.useState(null),[r,i]=R.useState(!0);R.useEffect(()=>{const o=bL(a=>{n(a),i(!1)});return()=>o&&o()},[]);const s={user:e,loading:r,signIn:TL,signUp:EL,signOut:IL,resetPassword:SL};return c.jsx(MT.Provider,{value:s,children:t})}function rr(){const t=R.useContext(MT);if(!t)throw new Error("useAuth must be used within AuthProvider");return t}const VT="https://public-reach-trend.ngrok-free.dev".replace(/\/+$/,""),CL={Accept:"application/json","ngrok-skip-browser-warning":"1"},hd=new Map,Qr=new Map,Ug="hoshii:yl:",UT="hoshii:al:",Zh=4*1024*1024,PL=500*1024,as={byId:{soft:6*60*60*1e3,hard:7*24*60*60*1e3},list:{soft:60*60*1e3,hard:24*60*60*1e3},trending:{soft:30*60*1e3,hard:6*60*60*1e3},schedule:{soft:30*60*1e3,hard:6*60*60*1e3},search:{soft:5*60*1e3,hard:30*60*1e3},suggestion:{soft:60*1e3,hard:10*60*1e3}};class Hn extends Error{constructor(e,{status:n=0,code:r=null,retryAfter:i=null}={}){super(e),this.name="ApiError",this.status=n,this.code=r,this.retryAfter=i}}function NL(t){let e=5381;for(let n=0;n<t.length;n++)e=(e<<5)+e+t.charCodeAt(n)|0;return(e>>>0).toString(36)}function DL(t,e){const n={};if(e)for(const r of Object.keys(e).sort())e[r]!==void 0&&e[r]!==null&&e[r]!==""&&(n[r]=e[r]);return Ug+NL(t+"|"+JSON.stringify(n))}function LL(t){const e=hd.get(t);if(e)return e;try{const n=localStorage.getItem(t);if(!n)return null;const r=JSON.parse(n);return!r||typeof r.t!="number"?(localStorage.removeItem(t),null):(hd.set(t,r),r)}catch{return null}}function X_(t,e){const n={t:Date.now(),v:e};hd.set(t,n);try{const r=JSON.stringify(n);if(r.length>PL)return;localStorage.setItem(t,r),J_()}catch(r){r&&(r.name==="QuotaExceededError"||r.code===22)&&J_(!0)}}function J_(t=!1){try{const e=[];let n=0;for(let s=0;s<localStorage.length;s++){const o=localStorage.key(s);if(!o||!o.startsWith(Ug))continue;const a=localStorage.getItem(o);if(a){n+=a.length;try{const u=JSON.parse(a);e.push({k:o,t:u.t||0,size:a.length})}catch{localStorage.removeItem(o)}}}if(!t&&n<Zh)return;e.sort((s,o)=>s.t-o.t);const r=t?Zh*.5:Zh*.8;let i=0;for(const s of e){if(n-i<r)break;localStorage.removeItem(s.k),i+=s.size}}catch{}}function OL(){hd.clear();try{const t=[];for(let e=0;e<localStorage.length;e++){const n=localStorage.key(e);n&&(n.startsWith(Ug)||n.startsWith(UT))&&t.push(n)}t.forEach(e=>localStorage.removeItem(e))}catch{}}try{const t=[];for(let e=0;e<localStorage.length;e++){const n=localStorage.key(e);n&&n.startsWith(UT)&&t.push(n)}t.forEach(e=>localStorage.removeItem(e))}catch{}const FT=t=>new Promise(e=>setTimeout(e,t));function jL(t,e){const n=new URL(VT+t);if(e)for(const[r,i]of Object.entries(e))i==null||i===""||n.searchParams.set(r,String(i));return n.toString()}async function Ml(t,{params:e,method:n="GET",body:r,signal:i}={},s=0){const o={...CL};r!==void 0&&(o["Content-Type"]="application/json");let a;try{a=await fetch(jL(t,e),{method:n,headers:o,body:r!==void 0?JSON.stringify(r):void 0,signal:i})}catch(f){throw(f==null?void 0:f.name)==="AbortError"?f:new Hn("Could not reach the YumeList API. The server may be offline, or CORS is blocking the request.",{code:"NETWORK"})}if(a.status===429){const f=Number(a.headers.get("Retry-After"))||30;if(s===0&&f<=8&&!(i!=null&&i.aborted))return await FT((f+.25)*1e3),Ml(t,{params:e,method:n,body:r,signal:i},s+1);throw new Hn(`YumeList rate limit reached. Try again in ~${f}s.`,{status:429,code:"RATE_LIMITED",retryAfter:f})}const u=a.headers.get("content-type")||"";let d=null;if(u.includes("json"))try{d=await a.json()}catch{d=null}else if(a.ok)throw new Hn("YumeList returned a non-JSON response. Is the ngrok tunnel up and the skip-warning header allowed?",{status:a.status,code:"NOT_JSON"});if(!a.ok){const f=d==null?void 0:d.error,m=(f==null?void 0:f.code)||null;throw a.status===503&&m==="API_DISABLED"?new Hn("The YumeList API is temporarily switched off.",{status:503,code:m}):new Hn((f==null?void 0:f.message)||`YumeList request failed (${a.status})`,{status:a.status,code:m})}return d}async function fo(t,e,n={}){const{signal:r,ttl:i=as.list,skipCache:s=!1}=n,o=DL(t,e),a=Date.now();if(!s){const d=LL(o);if(d){const f=a-d.t;if(f<i.soft)return d.v;if(f<i.hard){if(!Qr.has(o)){const m=Ml(t,{params:e}).then(g=>(X_(o,g),g)).catch(()=>{}).finally(()=>Qr.delete(o));Qr.set(o,m)}return d.v}}}if(!r&&Qr.has(o))return Qr.get(o);const u=Ml(t,{params:e,signal:r}).then(d=>(s||X_(o,d),d));return r||(Qr.set(o,u),u.then(()=>Qr.delete(o),()=>Qr.delete(o))),u}const ue=(...t)=>t.find(e=>e!=null&&e!=="");function po(t){return!t||typeof t!="string"||/^(https?:)?\/\//i.test(t)||t.startsWith("data:")?t:VT+(t.startsWith("/")?"":"/")+t}function Z_(t,e){if(!Array.isArray(t))return null;const n=t.find(r=>String(r==null?void 0:r.type).toUpperCase()===e&&(r==null?void 0:r.url));return n?po(n.url):null}function ML(t){if(!t)return null;if(typeof t=="string"){const i=po(t);return{extraLarge:i,large:i,medium:i}}const e=ue(t.extraLarge,t.xl,t.large,t.original,t.url,t.medium),n=ue(t.large,t.extraLarge,t.url,t.medium,t.original),r=ue(t.medium,t.large,t.url,t.extraLarge);return!e&&!n&&!r?null:{extraLarge:po(e||n||r),large:po(n||e||r),medium:po(r||n||e),color:t.color}}function e0(t){if(!t)return null;if(typeof t=="object")return t.year?{year:t.year,month:t.month||null,day:t.day||null}:null;const e=new Date(t);return Number.isNaN(e.getTime())?null:{year:e.getUTCFullYear(),month:e.getUTCMonth()+1,day:e.getUTCDate()}}function t0(t){const e=Number(t);return!Number.isFinite(e)||e<=0?null:e<=10?Math.round(e*10):Math.round(e)}function xc(t){return t?String(t).trim().toUpperCase().replace(/[\s-]+/g,"_"):null}function VL(t){return t?typeof t=="string"?{romaji:t,english:t,native:null,userPreferred:t}:{romaji:ue(t.romaji,t.userPreferred,t.english,t.default)||null,english:ue(t.english,t.en)||null,native:ue(t.native,t.japanese)||null,userPreferred:ue(t.userPreferred,t.romaji,t.english)||null}:{romaji:null,english:null,native:null,userPreferred:null}}function UL(t){if(!t)return null;if(typeof t=="string"){const r=t.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{6,})/);return r?{id:r[1],site:"youtube"}:null}const e=String(ue(t.site,t.provider,"youtube")).toLowerCase(),n=ue(t.id,t.videoId,t.key);return n?{id:n,site:e,thumbnail:t.thumbnail}:null}function FL(t){let e=[];return Array.isArray(t)?e=t:t!=null&&t.nodes?e=t.nodes:t!=null&&t.edges&&(e=t.edges.map(r=>r.node||r)),{nodes:e.map(r=>{const i=(r==null?void 0:r.studio)||r,s=typeof i=="string"?i:ue(i==null?void 0:i.name,i==null?void 0:i.title);return s?{id:typeof i=="object"?i.id:void 0,name:s}:null}).filter(Boolean)}}function zL(t){if(t==null||t==="")return null;if(typeof t=="number")return t>1e12?Math.floor(t/1e3):t;const e=new Date(t).getTime();return Number.isNaN(e)?null:Math.floor(e/1e3)}function $L(t){if(!t)return null;const e=zL(ue(t.airingAt,t.at,t.date,t.time));return e?{episode:ue(t.episode,t.number,t.ep)??null,airingAt:e,timeUntilAiring:Math.max(0,e-Math.floor(Date.now()/1e3))}:null}function Ec(t){var d,f;if(!t||typeof t!="object")return null;const e=t.ids||{},n=ue(e.yumelist,t.id)??null,r=ue(e.anilist,t.anilistId,t.anilist_id)??null,i=ue(e.mal,t.malId,t.mal_id)??null,s=ML(ue(Z_(t.images,"COVER"),t.coverImage,t.cover,t.coverUrl,t.image,t.poster)),o=ue(Z_(t.images,"BANNER"),t.bannerImage,t.banner,t.bannerUrl),a=(t.genres||[]).map(m=>typeof m=="string"?m:ue(m==null?void 0:m.name,m==null?void 0:m.title)).filter(Boolean),u=ue(t.episodes,t.episodeCount,t.totalEpisodes);return{id:r??(n!=null?`y${n}`:null),anilistId:r!=null?Number(r):null,yumelistId:n!=null?Number(n):null,malId:i!=null?Number(i):null,slug:t.slug||null,title:VL(t.title),description:ue(t.description,t.synopsis)||null,coverImage:s,bannerImage:o?po(typeof o=="string"?o:ue(o.url,o.large)):null,format:xc(ue(t.format,t.type)),status:xc(t.status),season:xc(t.season),seasonYear:ue(t.seasonYear,t.year)??null,episodes:typeof u=="number"?u:Number(u)||null,duration:ue(t.duration,t.episodeDuration)??null,averageScore:t0(ue(t.averageScore,t.score,t.rating)),meanScore:t0(ue(t.meanScore,t.score)),popularity:ue(t.popularity)??null,favourites:ue(t.favourites,t.favorites)??null,genres:a,isAdult:!!t.isAdult,countryOfOrigin:ue(t.countryOfOrigin,t.country)??null,startDate:e0(ue(t.startDate,t.airedFrom,t.startedAt,(d=t.aired)==null?void 0:d.from)),endDate:e0(ue(t.endDate,t.airedTo,t.endedAt,(f=t.aired)==null?void 0:f.to)),trailer:UL(t.trailer),studios:FL(t.studios),nextAiringEpisode:$L(ue(t.nextAiringEpisode,t.nextAiring)),externalLinks:i!=null?[{id:"mal",site:"MyAnimeList",type:"INFO",url:`https://myanimelist.net/anime/${i}`}]:[]}}function Pp(t){const e=t==null?void 0:t.data;return Array.isArray(e)?e:Array.isArray(t)?t:[]}function BL(t,{page:e,perPage:n},r){const i=(t==null?void 0:t.pagination)||{},s=i.total??r.length,o=i.limit||n;return{pageInfo:{total:s,currentPage:i.page||e,lastPage:i.totalPages||Math.max(1,Math.ceil(s/o)),hasNextPage:!!i.hasNextPage,perPage:o},media:r}}const n0=new Set(["done","completed","complete","success","succeeded","finished","ready","imported"]),WL=new Set(["failed","error","errored","cancelled","canceled"]),Qu=new Map,r0=new Map,HL=5*60*1e3,qL=2500,GL=40;function KL(t){const e=String(t),n=r0.get(e);if(n&&Date.now()-n<HL)return Promise.reject(new Hn("This anime could not be imported into YumeList.",{code:"IMPORT_FAILED"}));if(Qu.has(e))return Qu.get(e);const r=(async()=>{var u;const i=await Ml("/api/request",{method:"POST",body:{query:e}}),s=(i==null?void 0:i.data)??i??{},o=ue(s.job,s.jobId,s.id),a=o&&typeof o=="object"?ue(o.id,o.jobId):o;if(a)for(let d=0;d<GL;d++){await FT(qL);let f;try{f=await Ml(`/api/request/${encodeURIComponent(a)}`)}catch(I){if((I==null?void 0:I.status)===404)return;throw I}const m=(f==null?void 0:f.data)??f??{},g=String(ue(m.status,m.state,"")).toLowerCase();if(WL.has(g)||m.error&&!n0.has(g)){const I=typeof m.error=="string"?m.error:((u=m.error)==null?void 0:u.message)||m.message;throw new Hn(I||"YumeList could not import this anime.",{code:"IMPORT_FAILED"})}if(n0.has(g)||m.done===!0||m.finished===!0||Number(m.progress)>=100)return}})().catch(i=>{throw r0.set(e,Date.now()),i}).finally(()=>Qu.delete(e));return Qu.set(e,r),r}function QL(t){if(!t)return null;const e=String(t).trim(),n=e.match(/anilist\.co\/anime\/(\d+)/i);return n?Number(n[1]):/^\d{1,8}$/.test(e)?Number(e):null}const i0=t=>String(t).trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""),YL={POPULARITY_DESC:"popularity",TRENDING_DESC:"popularity",SCORE_DESC:"score",START_DATE_DESC:"newest",TITLE_ROMAJI:"title"};async function En({query:t,page:e=1,perPage:n=30,genre:r,tag:i,year:s,season:o,status:a,format:u,sort:d=["POPULARITY_DESC"],minimumScore:f,country:m,isAdult:g=!1,signal:I,isSuggestion:C=!1,noCache:k=!1}={}){const P=Math.min(100,Math.max(1,n)),E=!!(r||i||s||o||a||u),_={q:t?String(t).trim():void 0,genre:r?i0(r):void 0,tag:i?i0(i):void 0,year:s||void 0,season:o||void 0,status:a||void 0,type:u||void 0,sort:YL[Array.isArray(d)?d[0]:d]||"popularity",page:e,limit:P},S={signal:I,ttl:C?as.suggestion:as.search,skipCache:k};let O;try{O=await fo("/api/v1/search",_,S)}catch(x){if(!_.q&&!E&&((x==null?void 0:x.status)===400||(x==null?void 0:x.status)===422))O=await fo("/api/v1/anime",{page:e,limit:P},S);else throw x}let j=Pp(O).map(Ec).filter(Boolean);const D=BL(O,{page:e,perPage:P},j);if(!C&&j.length===0&&e===1&&!E){const x=QL(t);if(x)try{const y=await Fg(x,{light:!0});if(y)return{pageInfo:{total:1,currentPage:1,lastPage:1,hasNextPage:!1,perPage:P},media:[y]}}catch(y){if((y==null?void 0:y.name)==="AbortError")throw y;console.warn("Auto-import from search failed:",y.message)}}return g||(j=j.filter(x=>!x.isAdult)),f&&(j=j.filter(x=>(x.averageScore||0)>f)),{...D,media:j}}function XL(t){const e=String(t);return/^\d+$/.test(e)?{path:`/api/v1/anime/anilist/${e}`,anilistId:Number(e)}:/^y\d+$/.test(e)?{path:`/api/v1/anime/${e.slice(1)}`,anilistId:null}:{path:`/api/v1/anime/slug/${encodeURIComponent(e)}`,anilistId:null}}async function Fg(t,{onImporting:e,light:n=!1}={}){const{path:r,anilistId:i}=XL(t);let s;try{s=await fo(r,null,{ttl:as.byId})}catch(g){if((g==null?void 0:g.status)!==404||i==null)throw(g==null?void 0:g.status)===404?new Hn("Anime not found.",{status:404,code:"NOT_FOUND"}):g;e==null||e(!0);try{await KL(i),s=await fo(r,null,{ttl:as.byId,skipCache:!0})}catch(I){throw(I==null?void 0:I.status)===404?new Hn("Anime not found, and YumeList could not import it.",{status:404,code:"NOT_FOUND"}):I}finally{e==null||e(!1)}}const o=Ec((s==null?void 0:s.data)??s);if(!o)throw new Hn("Anime not found.",{status:404,code:"NOT_FOUND"});if(n||o.yumelistId==null)return o;const a=o.yumelistId,[u,d]=await Promise.allSettled([fo(`/api/v1/anime/${a}/relations`,null,{ttl:as.byId}),fo(`/api/v1/anime/${a}/recommendations`,{limit:12},{ttl:as.byId})]),f=u.status==="fulfilled"?Pp(u.value):[];o.relations={edges:f.map(g=>{const I=Ec(ue(g.anime,g.node,g.related,g.media,g.target,g));return I?{relationType:xc(ue(g.relationType,g.relation,g.type)),node:I}:null}).filter(Boolean)};const m=d.status==="fulfilled"?Pp(d.value):[];return o.recommendations={nodes:m.map(g=>{const I=Ec(g.anime||g);return I?(I.reasons=g.reasons||[],{mediaRecommendation:I}):null}).filter(Boolean)},o}function fd(t,{short:e=!1}={}){const n=t==null?void 0:t.nextAiringEpisode;if(!(n!=null&&n.airingAt))return null;const r=n.airingAt*1e3-Date.now();if(r<=0)return null;const i=(d,f)=>`${d} ${f}${d===1?"":"s"}`,s=864e5,o=36e5,a=6e4,u=r>=s?`in ${i(Math.floor(r/s),"day")}`:r>=o?`in ${i(Math.floor(r/o),"hour")}`:r>=a?`in ${i(Math.floor(r/a),"minute")}`:"any moment now";return e?`Ep ${n.episode} · ${u}`:`Ep ${n.episode} airing ${u}`}async function pd(t=1,e=30){const n=await En({page:t,perPage:e,status:"RELEASING",sort:["POPULARITY_DESC"]});return n.media.length?n:En({page:t,perPage:e,sort:["POPULARITY_DESC"]})}async function zT(t=1,e=30){return En({page:t,perPage:e,sort:["POPULARITY_DESC"]})}async function $T(t=1,e=30){return En({page:t,perPage:e,sort:["SCORE_DESC"]})}async function BT(t=1,e=30){const n=new Date().getFullYear();return En({page:t,perPage:e,year:n,sort:["POPULARITY_DESC"]})}async function JL(t=1,e=30){return En({page:t,perPage:e,status:"RELEASING",sort:["POPULARITY_DESC"]})}async function ZL(t=1,e=30){return En({page:t,perPage:e,status:"NOT_YET_RELEASED",sort:["POPULARITY_DESC"]})}async function eO(t=1,e=30){return En({page:t,perPage:e,format:"MOVIE",sort:["POPULARITY_DESC"]})}async function tO({page:t=1,perPage:e=50,airingAtGreater:n,airingAtLesser:r}={}){const i=await En({page:t,perPage:100,status:"RELEASING",sort:["POPULARITY_DESC"],isAdult:!0}),s=i.media.filter(o=>{var a;return(a=o.nextAiringEpisode)==null?void 0:a.airingAt}).filter(o=>{const a=o.nextAiringEpisode.airingAt;return(!n||a>=n)&&(!r||a<=r)}).sort((o,a)=>o.nextAiringEpisode.airingAt-a.nextAiringEpisode.airingAt).slice(0,e).map(o=>({id:`${o.id}-${o.nextAiringEpisode.episode}`,episode:o.nextAiringEpisode.episode,airingAt:o.nextAiringEpisode.airingAt,timeUntilAiring:o.nextAiringEpisode.timeUntilAiring,media:o}));return{pageInfo:i.pageInfo,airingSchedules:s}}async function nO(){const t=Math.floor(Math.random()*5)+1,n=(await En({page:t,perPage:30,sort:["POPULARITY_DESC"]})).media||[];if(!n.length)throw new Error("No anime found");return n[Math.floor(Math.random()*n.length)]}const WT=["Action","Adventure","Comedy","Drama","Ecchi","Fantasy","Horror","Mahou Shoujo","Mecha","Music","Mystery","Psychological","Romance","Sci-Fi","Slice of Life","Sports","Supernatural","Thriller"],rO=["TV","TV_SHORT","MOVIE","SPECIAL","OVA","ONA","MUSIC"],iO=["WINTER","SPRING","SUMMER","FALL"],sO=[{value:"POPULARITY_DESC",label:"Popularity"},{value:"TRENDING_DESC",label:"Trending"},{value:"SCORE_DESC",label:"Highest Rated"},{value:"START_DATE_DESC",label:"Newest"},{value:"TITLE_ROMAJI",label:"Title A-Z"}];function cu({open:t,onClose:e,initialMode:n="login"}){const{signIn:r,signUp:i,resetPassword:s}=rr(),[o,a]=R.useState(n),[u,d]=R.useState(""),[f,m]=R.useState(""),[g,I]=R.useState(""),[C,k]=R.useState(!1),[P,E]=R.useState(""),[_,S]=R.useState("");if(R.useEffect(()=>{t&&(a(n),E(""),S(""))},[t,n]),R.useEffect(()=>{const j=D=>D.key==="Escape"&&e();return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[e]),!t)return null;const O=async j=>{j.preventDefault(),E(""),S(""),k(!0);try{if(!tr)throw new Error("Firebase not configured. See README.");o==="login"?(await r(u,f),e()):o==="signup"?(await i(u,f,g),e()):o==="reset"&&(await s(u),S("Password reset email sent."))}catch(D){E(D.message||"Something went wrong")}finally{k(!1)}};return c.jsx("div",{className:"modal-backdrop",onClick:e,children:c.jsxs("div",{className:"modal glass",onClick:j=>j.stopPropagation(),role:"dialog","aria-modal":"true",children:[c.jsxs("div",{className:"modal-head",children:[c.jsxs("h2",{children:[o==="login"&&"Welcome back",o==="signup"&&"Create your account",o==="reset"&&"Reset password"]}),c.jsx("button",{className:"icon-btn",onClick:e,"aria-label":"Close",children:c.jsx(Wl,{size:18})})]}),!tr&&c.jsxs("div",{className:"notice",children:["Firebase isn't configured yet. Add your keys to ",c.jsx("code",{children:".env"})," — see the README for setup steps."]}),c.jsxs("form",{onSubmit:O,className:"modal-form",children:[o==="signup"&&c.jsxs("label",{children:["Display name",c.jsx("input",{value:g,onChange:j=>I(j.target.value),placeholder:"Your name",required:!0,minLength:2})]}),c.jsxs("label",{children:["Email",c.jsx("input",{type:"email",value:u,onChange:j=>d(j.target.value),placeholder:"you@example.com",required:!0})]}),o!=="reset"&&c.jsxs("label",{children:["Password",c.jsx("input",{type:"password",value:f,onChange:j=>m(j.target.value),placeholder:"••••••••",required:!0,minLength:6})]}),P&&c.jsx("div",{className:"error",children:P}),_&&c.jsx("div",{className:"info",children:_}),c.jsxs("button",{className:"btn primary full",disabled:C,type:"submit",children:[C&&c.jsx(xn,{size:16,className:"spin"}),o==="login"?"Log In":o==="signup"?"Create Account":"Send Reset Email"]})]}),c.jsxs("div",{className:"modal-foot",children:[o==="login"&&c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"link-btn",onClick:()=>a("reset"),children:"Forgot password?"}),c.jsx("span",{className:"muted",children:"New here? "}),c.jsx("button",{className:"link-btn accent",onClick:()=>a("signup"),children:"Sign up"})]}),o==="signup"&&c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"muted",children:"Have an account? "}),c.jsx("button",{className:"link-btn accent",onClick:()=>a("login"),children:"Log in"})]}),o==="reset"&&c.jsx("button",{className:"link-btn accent",onClick:()=>a("login"),children:"Back to login"})]}),c.jsx("style",{children:`
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
        `})]})})}function oO({onMenu:t}){const e=jr(),{user:n,signOut:r}=rr(),[i,s]=R.useState(""),[o,a]=R.useState([]),[u,d]=R.useState(!1),[f,m]=R.useState(!1),[g,I]=R.useState(!1),[C,k]=R.useState(-1),P=R.useRef(null),E=R.useRef(null),_=R.useRef(null);R.useEffect(()=>{if(!i.trim()){a([]),d(!1);return}const D=setTimeout(async()=>{_.current&&_.current.abort();const x=new AbortController;_.current=x;try{const y=await En({query:i,perPage:8,signal:x.signal,isSuggestion:!0});a(y.media||[]),d(!0),k(-1)}catch(y){y.name!=="AbortError"&&console.warn(y)}},300);return()=>clearTimeout(D)},[i]),R.useEffect(()=>{const D=x=>{P.current&&!P.current.contains(x.target)&&d(!1),E.current&&!E.current.contains(x.target)&&m(!1)};return document.addEventListener("mousedown",D),()=>document.removeEventListener("mousedown",D)},[]),R.useEffect(()=>{const D=x=>{var y,T;x.key==="/"&&!["INPUT","TEXTAREA"].includes((y=document.activeElement)==null?void 0:y.tagName)&&(x.preventDefault(),(T=document.getElementById("hoshii-search"))==null||T.focus())};return document.addEventListener("keydown",D),()=>document.removeEventListener("keydown",D)},[]);const S=D=>{D==null||D.preventDefault(),i.trim()&&(e(`/search?query=${encodeURIComponent(i.trim())}`),d(!1))},O=D=>{if(!(!u||!o.length))if(D.key==="ArrowDown")D.preventDefault(),k(x=>Math.min(x+1,o.length-1));else if(D.key==="ArrowUp")D.preventDefault(),k(x=>Math.max(x-1,0));else if(D.key==="Enter"&&C>=0){D.preventDefault();const x=o[C];e(`/anime/${x.id}`),d(!1),s("")}else D.key==="Escape"&&d(!1)},j=async()=>{try{const D=await nO();D&&e(`/anime/${D.id}`)}catch(D){console.warn(D)}};return c.jsxs(c.Fragment,{children:[c.jsxs("header",{className:"nav",children:[c.jsx("button",{className:"icon-btn",onClick:t,"aria-label":"Open menu",children:c.jsx(gb,{size:22})}),c.jsxs(Ne,{to:"/",className:"brand","aria-label":"Hoshii home",children:[c.jsxs("svg",{width:"26",height:"26",viewBox:"0 0 64 64","aria-hidden":"true",children:[c.jsx("path",{d:"M20 14v36M20 32h14M44 14v36",stroke:"var(--accent)",strokeWidth:"6",strokeLinecap:"round",fill:"none"}),c.jsx("circle",{cx:"44",cy:"20",r:"3",fill:"var(--accent)"})]}),c.jsxs("span",{className:"brand-text",children:["HOSHII",c.jsx("em",{children:".tv"})]})]}),c.jsxs("form",{className:"nav-search",onSubmit:S,ref:P,children:[c.jsx(Qc,{size:18,className:"search-icon"}),c.jsx("input",{id:"hoshii-search",type:"text",placeholder:"Search Anime",value:i,onChange:D=>s(D.target.value),onFocus:()=>i&&d(!0),onKeyDown:O,autoComplete:"off","aria-label":"Search anime"}),i&&c.jsx("button",{type:"button",className:"icon-btn sm","aria-label":"Clear",onClick:()=>{s(""),a([]),d(!1)},children:c.jsx(Wl,{size:16})}),c.jsx("span",{className:"kbd",children:"/"}),c.jsx("button",{type:"submit",className:"icon-btn sm","aria-label":"Search",children:c.jsx(Qc,{size:16})}),c.jsx("button",{type:"button",className:"icon-btn sm","aria-label":"Random anime",onClick:j,children:c.jsx(lb,{size:16})}),u&&o.length>0&&c.jsx("div",{className:"suggest glass",children:o.map((D,x)=>{var y,T,A,N;return c.jsxs("button",{className:`suggest-row ${x===C?"active":""}`,onMouseEnter:()=>k(x),onClick:()=>{e(`/anime/${D.id}`),d(!1),s("")},children:[c.jsx("img",{src:(y=D.coverImage)==null?void 0:y.large,alt:"",loading:"lazy"}),c.jsxs("div",{className:"suggest-info",children:[c.jsx("span",{className:"suggest-title",children:((T=D.title)==null?void 0:T.english)||((A=D.title)==null?void 0:A.userPreferred)||((N=D.title)==null?void 0:N.romaji)}),c.jsxs("span",{className:"suggest-meta",children:[D.seasonYear||"—"," · ",D.format||"—",D.averageScore?` · ★ ${D.averageScore}`:""]})]})]},D.id)})})]}),c.jsx("div",{className:"nav-right",ref:E,children:n?c.jsxs(c.Fragment,{children:[c.jsxs("button",{className:"avatar-btn",onClick:()=>m(D=>!D),"aria-label":"Open profile menu",children:[n.photoURL?c.jsx("img",{src:n.photoURL,alt:""}):c.jsx("span",{className:"avatar-fallback",children:(n.displayName||n.email||"U")[0].toUpperCase()}),c.jsx(Od,{size:14})]}),f&&c.jsxs("div",{className:"dropdown glass",onClick:()=>m(!1),children:[c.jsxs(Ne,{to:"/profile",className:"dropdown-item",children:[c.jsx(vE,{size:16})," Profile"]}),c.jsxs(Ne,{to:"/history",className:"dropdown-item",children:[c.jsx(dE,{size:16})," Watch History"]}),c.jsxs(Ne,{to:"/watchlist",className:"dropdown-item",children:[c.jsx(aE,{size:16})," Watchlist"]}),c.jsxs(Ne,{to:"/settings",className:"dropdown-item",children:[c.jsx(mE,{size:16})," Settings"]}),c.jsxs("button",{className:"dropdown-item danger",onClick:async()=>{await r(),e("/")},children:[c.jsx(fE,{size:16})," Log Out"]})]})]}):c.jsxs("div",{className:"auth-buttons",children:[c.jsxs("button",{className:"btn ghost sm",onClick:()=>I(!0),children:[c.jsx(hE,{size:16})," Log In"]}),c.jsxs("button",{className:"btn primary sm",onClick:()=>I(!0),children:[c.jsx(yE,{size:16})," Sign Up"]})]})})]}),c.jsx(cu,{open:g,onClose:()=>I(!1)}),c.jsx("style",{children:`
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
      `})]})}const aO=[{to:"/",label:"Home",icon:db,end:!0},{to:"/trending",label:"Trending",icon:Sb},{to:"/search",label:"Search",icon:Qc},{to:"/seasonal",label:"Seasonal Anime",icon:ab},{to:"/schedule",label:"Schedule",icon:lE},{to:"/history",label:"Watch History",icon:dE},{to:"/watchlist",label:"Watchlist",icon:aE},{to:"/settings",label:"Settings",icon:mE},{to:"/profile",label:"Profile",icon:vE}];function lO({open:t,onClose:e}){const{user:n}=rr();return R.useEffect(()=>{const r=i=>i.key==="Escape"&&e();return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[e]),c.jsxs(c.Fragment,{children:[c.jsx("div",{className:`sidebar-backdrop ${t?"show":""}`,onClick:e,"aria-hidden":"true"}),c.jsxs("aside",{className:`sidebar ${t?"open":""}`,"aria-hidden":!t,children:[c.jsxs("div",{className:"sidebar-head",children:[c.jsxs("div",{className:"sidebar-brand",children:[c.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 64 64","aria-hidden":"true",children:[c.jsx("path",{d:"M20 14v36M20 32h14M44 14v36",stroke:"var(--accent)",strokeWidth:"6",strokeLinecap:"round",fill:"none"}),c.jsx("circle",{cx:"44",cy:"20",r:"3",fill:"var(--accent)"})]}),c.jsx("span",{children:"HOSHII"})]}),c.jsx("button",{className:"icon-btn",onClick:e,"aria-label":"Close menu",children:c.jsx(Wl,{size:18})})]}),c.jsx("nav",{className:"sidebar-nav",children:aO.map(({to:r,label:i,icon:s,end:o})=>c.jsxs(Xk,{to:r,end:o,className:({isActive:a})=>`sidebar-link ${a?"active":""}`,onClick:e,children:[c.jsx(s,{size:18}),c.jsx("span",{children:i})]},r))}),c.jsxs("div",{className:"sidebar-foot",children:[c.jsx("div",{className:"sidebar-user",children:n?c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"avatar-sm",children:n.photoURL?c.jsx("img",{src:n.photoURL,alt:""}):(n.displayName||n.email||"U")[0].toUpperCase()}),c.jsxs("div",{className:"meta",children:[c.jsx("span",{className:"name",children:n.displayName||"User"}),c.jsx("span",{className:"email",children:n.email})]})]}):c.jsx("span",{className:"muted",children:"Not signed in"})}),c.jsx("div",{className:"version",children:"Hoshii · v1.0.0"})]})]}),c.jsx("style",{children:`
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
      `})]})}function uO(){return c.jsxs("footer",{className:"footer",children:[c.jsxs("div",{className:"container footer-grid",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"footer-brand",children:[c.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 64 64","aria-hidden":"true",children:[c.jsx("path",{d:"M20 14v36M20 32h14M44 14v36",stroke:"var(--accent)",strokeWidth:"6",strokeLinecap:"round",fill:"none"}),c.jsx("circle",{cx:"44",cy:"20",r:"3",fill:"var(--accent)"})]}),c.jsx("span",{children:"HOSHII"})]}),c.jsx("p",{className:"muted footer-desc",children:"Hoshii is an anime discovery interface. Anime metadata is provided by the YumeList API. Hoshii does not host or stream any video files."})]}),c.jsxs("div",{children:[c.jsx("h4",{children:"Browse"}),c.jsx(Ne,{to:"/",children:"Home"}),c.jsx(Ne,{to:"/trending",children:"Trending"}),c.jsx(Ne,{to:"/schedule",children:"Schedule"})]}),c.jsxs("div",{children:[c.jsx("h4",{children:"Account"}),c.jsx(Ne,{to:"/profile",children:"Profile"}),c.jsx(Ne,{to:"/watchlist",children:"Watchlist"}),c.jsx(Ne,{to:"/settings",children:"Settings"})]}),c.jsxs("div",{children:[c.jsx("h4",{children:"About"}),c.jsx("a",{href:"https://public-reach-trend.ngrok-free.dev",target:"_blank",rel:"noreferrer",children:"YumeList"}),c.jsx("a",{href:"https://github.com",target:"_blank",rel:"noreferrer",children:"GitHub"}),c.jsx(Ne,{to:"/search",children:"Search"})]})]}),c.jsxs("div",{className:"container footer-bottom",children:[c.jsxs("span",{className:"muted-2",children:["© ",new Date().getFullYear()," Hoshii"]}),c.jsx("span",{className:"muted-2",children:"Data provided by YumeList"})]}),c.jsx("style",{children:`
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
      `})]})}function cO({children:t}){const[e,n]=R.useState(!1);return c.jsxs(c.Fragment,{children:[c.jsx(oO,{onMenu:()=>n(!0)}),c.jsx(lO,{open:e,onClose:()=>n(!1)}),c.jsx("main",{children:t}),c.jsx(uO,{})]})}function dO({items:t=[]}){var I,C,k,P;const e=jr(),[n,r]=R.useState(0),[i,s]=R.useState(!1),[o,a]=R.useState(!1),u=R.useRef(null);if(R.useEffect(()=>{if(!(i||o||t.length<=1))return u.current=setInterval(()=>{r(E=>(E+1)%t.length)},8e3),()=>clearInterval(u.current)},[i,o,t.length]),!t.length)return null;const d=t[n],f=((I=d.title)==null?void 0:I.userPreferred)||((C=d.title)==null?void 0:C.english)||((k=d.title)==null?void 0:k.romaji),m=d.bannerImage||((P=d.coverImage)==null?void 0:P.extraLarge),g=(d.description||"").replace(/<[^>]*>/g,"").replace(/&quot;/g,'"').replace(/&amp;/g,"&");return c.jsxs("div",{className:"hero",onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[c.jsx("div",{className:"hero-bg",style:{backgroundImage:`url(${m})`}}),c.jsx("div",{className:"hero-shade"}),c.jsxs("div",{className:"hero-content container",children:[c.jsxs("div",{className:"hero-meta",children:[d.format&&c.jsx("span",{className:"pill",children:d.format}),d.averageScore&&c.jsxs("span",{className:"pill gold",children:[c.jsx(Lm,{size:12})," ",d.averageScore]}),d.duration&&c.jsxs("span",{className:"pill",children:[c.jsx(uE,{size:12})," ",d.duration," mins"]})]}),c.jsx("h1",{children:f}),c.jsxs("p",{className:"hero-desc",children:[g.slice(0,320),g.length>320?"…":""]}),c.jsxs("div",{className:"hero-actions",children:[c.jsxs("button",{className:"btn",onClick:()=>e(`/anime/${d.id}`),children:[c.jsx(hb,{size:16})," Details"]}),c.jsxs("button",{className:"btn primary",onClick:()=>e(`/watch/${d.id}`),children:[c.jsx(Dm,{size:16})," Watch Now"]})]})]}),t.length>1&&c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"hero-nav left","aria-label":"Previous",onClick:()=>{r(E=>(E-1+t.length)%t.length),s(!0)},children:c.jsx(Bl,{size:22})}),c.jsx("button",{className:"hero-nav right","aria-label":"Next",onClick:()=>{r(E=>(E+1)%t.length),s(!0)},children:c.jsx(Go,{size:22})}),c.jsx("div",{className:"hero-dots",children:t.map((E,_)=>c.jsx("button",{className:_===n?"active":"",onClick:()=>{r(_),s(!0)},"aria-label":`Go to slide ${_+1}`},_))})]}),c.jsx("style",{children:`
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
      `})]})}function hO(){const t=jr(),e=R.useRef(null),n=r=>{e.current&&e.current.scrollBy({left:r*400,behavior:"smooth"})};return c.jsxs("div",{className:"genre-bar",children:[c.jsx("button",{className:"genre-nav",onClick:()=>n(-1),"aria-label":"Scroll left",children:c.jsx(Bl,{size:18})}),c.jsx("div",{className:"genre-scroll",ref:e,children:WT.map(r=>c.jsx("button",{className:"genre-chip",onClick:()=>t(`/search?genre=${encodeURIComponent(r)}`),children:r},r))}),c.jsx("button",{className:"genre-nav",onClick:()=>n(1),"aria-label":"Scroll right",children:c.jsx(Go,{size:18})}),c.jsx("style",{children:`
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
      `})]})}function md({anime:t,showMeta:e=!0}){var i,s,o,a,u,d;if(!t)return null;const n=((i=t.title)==null?void 0:i.english)||((s=t.title)==null?void 0:s.userPreferred)||((o=t.title)==null?void 0:o.romaji)||"Untitled",r=((a=t.coverImage)==null?void 0:a.extraLarge)||((u=t.coverImage)==null?void 0:u.large)||((d=t.coverImage)==null?void 0:d.medium);return c.jsxs(Ne,{to:`/anime/${t.id}`,className:"anime-card",children:[c.jsxs("div",{className:"poster",children:[r?c.jsx("img",{src:r,alt:n,loading:"lazy"}):c.jsx("div",{className:"poster-fallback",children:n[0]}),c.jsx("div",{className:"overlay",children:c.jsxs("span",{className:"quick-view",children:[c.jsx(Dm,{size:14})," Quick View"]})}),t.averageScore?c.jsxs("span",{className:"score",children:[c.jsx(Lm,{size:12})," ",t.averageScore]}):null]}),c.jsxs("div",{className:"info",children:[c.jsx("h3",{className:"title",title:n,children:n}),e&&c.jsxs("div",{className:"meta",children:[t.format&&c.jsxs("span",{children:[c.jsx(ub,{size:11})," ",t.format]}),t.seasonYear&&c.jsxs("span",{children:[c.jsx(lE,{size:11})," ",t.seasonYear]}),t.episodes?c.jsxs("span",{children:[c.jsx(pb,{size:11})," ",t.episodes," EP"]}):null]}),fd(t)&&c.jsx("div",{className:"airing",children:fd(t,{short:!0})})]}),c.jsx("style",{children:`
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
        .airing { font-size: 11px; font-weight: 700; color: var(--cyan, #5eead4); margin-top: 3px; }
      `})]})}function ef({w:t="100%",h:e=16,r:n=8,style:r={}}){return c.jsx("div",{className:"skeleton",style:{width:t,height:e,borderRadius:n,...r},"aria-hidden":"true"})}function HT(){return c.jsxs("div",{className:"skeleton-card",children:[c.jsx(ef,{h:260,r:12}),c.jsx(ef,{h:14,w:"80%",style:{marginTop:10}}),c.jsx(ef,{h:12,w:"50%",style:{marginTop:6}}),c.jsx("style",{children:`
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
      `})]})}function fO({count:t=12}){return c.jsx("div",{className:"anime-grid",children:Array.from({length:t}).map((e,n)=>c.jsx(HT,{},n))})}function nh({anime:t=[],loading:e=!1,error:n=null,empty:r="No anime found."}){return e?c.jsx(fO,{count:12}):n?c.jsxs("div",{className:"empty-state",children:["Failed to load: ",n.message||"Unknown error"]}):t.length?c.jsxs("div",{className:"anime-grid",children:[t.map(i=>c.jsx(md,{anime:i},i.id)),c.jsx("style",{children:`
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
      `})]}):c.jsx("div",{className:"empty-state",children:r})}function Lt(){if(!tr||!Me)throw new Error("Firebase is not configured. Add your credentials to a .env file (see README).")}async function zg(t,e,n="PLANNED"){var i,s,o,a,u;Lt();const r=Dt(Me,"users",t,"watchlist",String(e.id));await lu(r,{animeId:e.id,title:((i=e.title)==null?void 0:i.userPreferred)||((s=e.title)==null?void 0:s.romaji)||((o=e.title)==null?void 0:o.english),coverImage:((a=e.coverImage)==null?void 0:a.large)||((u=e.coverImage)==null?void 0:u.extraLarge),format:e.format,episodes:e.episodes||null,score:e.averageScore||null,seasonYear:e.seasonYear||null,status:n,addedAt:Mi()},{merge:!0})}async function $g(t,e){Lt(),await th(Dt(Me,"users",t,"watchlist",String(e)))}async function Bg(t){return Lt(),(await Vg(ea(Me,"users",t,"watchlist"))).docs.map(n=>({id:n.id,...n.data()}))}async function qT(t,e){Lt();const n=await eh(Dt(Me,"users",t,"watchlist",String(e)));return n.exists()?n.data():null}async function GT(t,e){var n,r,i,s;Lt(),await lu(Dt(Me,"users",t,"favorites",String(e.id)),{animeId:e.id,title:((n=e.title)==null?void 0:n.userPreferred)||((r=e.title)==null?void 0:r.romaji),coverImage:((i=e.coverImage)==null?void 0:i.large)||((s=e.coverImage)==null?void 0:s.extraLarge),addedAt:Mi()})}async function KT(t,e){Lt(),await th(Dt(Me,"users",t,"favorites",String(e)))}async function QT(t){return Lt(),(await Vg(ea(Me,"users",t,"favorites"))).docs.map(n=>({id:n.id,...n.data()}))}async function YT(t,e){Lt();const n=`${e.animeId}_${e.episode}`;await lu(Dt(Me,"users",t,"history",n),{...e,updatedAt:Mi()},{merge:!0})}async function XT(t){Lt();const e=Cg(ea(Me,"users",t,"history"),Lg("updatedAt","desc"),CT(50));return(await Vg(e)).docs.map(r=>({id:r.id,...r.data()}))}async function JT(t,e){Lt(),await th(Dt(Me,"users",t,"history",e))}const ZT=t=>ea(Me,"animeComments",String(t),"comments");async function eI({animeId:t,episode:e,user:n,text:r,parentId:i=null}){Lt();const s=Mi();await LT(ZT(t),{authorId:n.uid,authorName:n.displayName||"Anonymous",authorAvatar:n.photoURL||null,text:r,episode:e??null,parentId:i,likeCount:0,createdAt:s,updatedAt:s})}async function tI(t,e,n){Lt(),await yL(Dt(Me,"animeComments",String(t),"comments",e),{text:n,updatedAt:Mi()})}async function nI(t,e){Lt(),await th(Dt(Me,"animeComments",String(t),"comments",e))}async function rI({animeId:t,commentId:e,user:n,text:r}){Lt();const i=Mi();await LT(ea(Me,"animeComments",String(t),"comments",e,"replies"),{authorId:n.uid,authorName:n.displayName||"Anonymous",authorAvatar:n.photoURL||null,text:r,likeCount:0,createdAt:i,updatedAt:i})}function iI(t,e){if(!tr)return e([]),()=>{};const n=Cg(ZT(t),Lg("createdAt","desc"),CT(200));return OT(n,r=>{e(r.docs.map(i=>({id:i.id,...i.data()})))},r=>{console.error("comments subscription error",r),e([])})}function sI(t,e,n){if(!tr)return n([]),()=>{};const r=Cg(ea(Me,"animeComments",String(t),"comments",e,"replies"),Lg("createdAt","asc"));return OT(r,i=>{n(i.docs.map(s=>({id:s.id,...s.data()})))})}async function Wg({animeId:t,commentId:e,uid:n}){Lt();const r=Dt(Me,"animeComments",String(t),"comments",e,"likes",n),i=Dt(Me,"animeComments",String(t),"comments",e),s=await eh(r),o=_L(Me);s.exists()?(o.delete(r),o.update(i,{likeCount:Y_(-1)})):(o.set(r,{uid:n,createdAt:Mi()}),o.update(i,{likeCount:Y_(1)})),await o.commit()}async function oI({animeId:t,commentId:e,uid:n}){return Lt(),(await eh(Dt(Me,"animeComments",String(t),"comments",e,"likes",n))).exists()}const s0=Object.freeze(Object.defineProperty({__proto__:null,addFavorite:GT,addToWatchlist:zg,deleteComment:nI,deleteHistoryEntry:JT,editComment:tI,getFavorites:QT,getHistory:XT,getWatchlist:Bg,hasLiked:oI,isInWatchlist:qT,postComment:eI,postReply:rI,removeFavorite:KT,removeFromWatchlist:$g,saveHistory:YT,subscribeComments:iI,subscribeReplies:sI,toggleLike:Wg},Symbol.toStringTag,{value:"Module"})),aI="hoshii:history";function Yu(){try{const t=localStorage.getItem(aI);return t?JSON.parse(t):[]}catch{return[]}}function o0(t){localStorage.setItem(aI,JSON.stringify(t))}function Hg(){const{user:t}=rr(),[e,n]=R.useState(()=>Yu()),[r,i]=R.useState(!1);R.useEffect(()=>{let a=!0;return t?(i(!0),XT(t.uid).then(u=>{a&&n(u)}).catch(()=>{}).finally(()=>{a&&i(!1)})):n(Yu()),()=>{a=!1}},[t]);const s=R.useCallback(async a=>{const u={...a,updatedAt:Date.now()};if(t)try{await YT(t.uid,u)}catch(d){console.warn("history save failed",d)}else{const f=Yu().filter(m=>!(m.animeId===a.animeId&&m.episode===a.episode));f.unshift(u),o0(f.slice(0,60))}n(d=>{const f=d.filter(m=>!(m.animeId===a.animeId&&m.episode===a.episode));return[u,...f].slice(0,60)})},[t]),o=R.useCallback(async(a,u)=>{if(t){const d=`${a}_${u}`;try{await JT(t.uid,d)}catch{}}else{const d=Yu().filter(f=>!(f.animeId===a&&f.episode===u));o0(d)}n(d=>d.filter(f=>!(f.animeId===a&&f.episode===u)))},[t]);return{history:e,loading:r,addEntry:s,removeEntry:o}}function pO(){const[t,e]=R.useState([]),[n,r]=R.useState("POPULAR"),[i,s]=R.useState({media:[]}),[o,a]=R.useState(!0),[u,d]=R.useState(null),[f,m]=R.useState({}),[g,I]=R.useState(!0),{history:C}=Hg();return R.useEffect(()=>{let k=!0;return(async()=>{try{const P=await pd(1,30);if(!k)return;e((P.media||[]).slice(0,5))}catch(P){console.warn(P)}})(),()=>{k=!1}},[]),R.useEffect(()=>{let k=!0;return a(!0),d(null),{POPULAR:zT,TRENDING:pd,TOP:$T,NEWEST:BT}[n](1,24).then(E=>{k&&(s(E),a(!1))}).catch(E=>{k&&(d(E),a(!1))}),()=>{k=!1}},[n]),R.useEffect(()=>{let k=!0;return I(!0),(async()=>{const P={},E=[["airing",JL],["upcoming",ZL],["movies",eO]];for(const[_,S]of E){try{const O=await S(1,12);P[_]=O.media||[]}catch{P[_]=[]}if(!k)return}k&&(m(P),I(!1))})(),()=>{k=!1}},[]),c.jsxs("div",{className:"page home",children:[c.jsx(dO,{items:t}),c.jsxs("div",{className:"container",children:[c.jsx(hO,{}),C.length>0&&c.jsxs("section",{className:"section",children:[c.jsxs("div",{className:"section-head",children:[c.jsx("h2",{children:"Continue Watching"}),c.jsxs(Ne,{to:"/history",className:"btn ghost sm",children:["View all ",c.jsx(Go,{size:14})]})]}),c.jsx("div",{className:"history-row",children:C.slice(0,6).map(k=>c.jsxs(Ne,{to:`/watch/${k.animeId}/${k.episode}`,className:"history-card",children:[c.jsxs("div",{className:"thumb",style:{backgroundImage:`url(${k.image})`},children:[c.jsxs("span",{className:"ep-badge",children:["EP ",k.episode]}),c.jsx("div",{className:"progress",children:c.jsx("div",{className:"progress-fill",style:{width:`${Math.min(100,(k.position||0)/(k.duration||1)*100)}%`}})})]}),c.jsx("p",{className:"history-title",children:k.title})]},k.id||`${k.animeId}-${k.episode}`))})]}),c.jsxs("section",{className:"section",children:[c.jsxs("div",{className:"section-head",children:[c.jsx("h2",{children:"Browse Anime"}),c.jsx("div",{className:"tabs",children:[{key:"NEWEST",label:"Newest"},{key:"POPULAR",label:"Popular"},{key:"TOP",label:"Top Rated"},{key:"TRENDING",label:"Trending"}].map(k=>c.jsx("button",{className:k.key===n?"active":"",onClick:()=>r(k.key),children:k.label},k.key))})]}),c.jsx(nh,{anime:i.media||[],loading:o,error:u})]}),c.jsxs("div",{className:"two-col",children:[c.jsxs("div",{className:"main-col",children:[c.jsx(tf,{title:"Currently Airing",items:f.airing,loading:g}),c.jsx(tf,{title:"Upcoming",items:f.upcoming,loading:g}),c.jsx(tf,{title:"Top Movies",items:f.movies,loading:g})]}),c.jsxs("aside",{className:"right-col",children:[c.jsx(a0,{title:"Top Airing",children:(f.airing||[]).slice(0,6).map(k=>c.jsx(l0,{anime:k},k.id))}),c.jsx(a0,{title:"Trending Now",children:t.slice(0,6).map(k=>c.jsx(l0,{anime:k},k.id))})]})]})]}),c.jsx("style",{children:`
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
      `})]})}function tf({title:t,items:e,loading:n}){return c.jsxs("section",{className:"section",children:[c.jsx("div",{className:"section-head",children:c.jsx("h2",{children:t})}),n?c.jsx("div",{className:"anime-grid",children:Array.from({length:6}).map((r,i)=>c.jsx(HT,{},i))}):c.jsx("div",{className:"anime-grid",children:e==null?void 0:e.map(r=>c.jsx(md,{anime:r},r.id))})]})}function a0({title:t,children:e}){return c.jsxs("div",{className:"sidebar-panel glass",children:[c.jsx("h3",{children:t}),c.jsx("div",{className:"mini-list",children:e}),c.jsx("style",{children:`
        .sidebar-panel { border-radius: var(--radius); padding: 14px; }
        .sidebar-panel h3 {
          margin: 0 0 12px; font-size: 14px; letter-spacing: 0.05em;
          text-transform: uppercase; color: var(--text-dim);
        }
        .mini-list { display: flex; flex-direction: column; gap: 8px; }
      `})]})}function l0({anime:t}){var n,r,i,s;const e=((n=t.title)==null?void 0:n.english)||((r=t.title)==null?void 0:r.userPreferred)||((i=t.title)==null?void 0:i.romaji);return c.jsxs(Ne,{to:`/anime/${t.id}`,className:"mini-row",children:[c.jsx("img",{src:(s=t.coverImage)==null?void 0:s.large,alt:"",loading:"lazy"}),c.jsxs("div",{className:"mini-info",children:[c.jsx("span",{className:"mini-title",children:e}),c.jsxs("span",{className:"mini-meta",children:[t.format," · ",t.seasonYear||"—",t.averageScore?` · ★ ${t.averageScore}`:""]})]}),c.jsx("style",{children:`
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
      `})]})}function mO({filters:t,onChange:e,onApply:n,onReset:r}){const[i,s]=R.useState(!1),o=(d,f)=>e({...t,[d]:f}),a=t.year||"",u=Array.from({length:60},(d,f)=>new Date().getFullYear()+5-f);return c.jsxs("div",{className:"filter-panel",children:[c.jsxs("div",{className:"filters-row",children:[c.jsx(Yr,{label:"Genre",value:t.genre||"",onChange:d=>o("genre",d),options:[{value:"",label:"Any Genre"},...WT.map(d=>({value:d,label:d}))]}),c.jsx(Yr,{label:"Year",value:a,onChange:d=>o("year",d?Number(d):""),options:[{value:"",label:"Any Year"},...u.map(d=>({value:d,label:String(d)}))]}),c.jsx(Yr,{label:"Status",value:t.status||"",onChange:d=>o("status",d),options:[{value:"",label:"Any Status"},{value:"RELEASING",label:"Airing"},{value:"FINISHED",label:"Finished"},{value:"NOT_YET_RELEASED",label:"Upcoming"},{value:"CANCELLED",label:"Cancelled"},{value:"HIATUS",label:"Hiatus"}]}),c.jsx(Yr,{label:"Format",value:t.format||"",onChange:d=>o("format",d),options:[{value:"",label:"Any Format"},...rO.map(d=>({value:d,label:d.replace("_"," ")}))]}),c.jsx(Yr,{label:"Sort",value:t.sort||"POPULARITY_DESC",onChange:d=>o("sort",d),options:sO})]}),i&&c.jsxs("div",{className:"filters-row",children:[c.jsx(Yr,{label:"Season",value:t.season||"",onChange:d=>o("season",d),options:[{value:"",label:"Any Season"},...iO.map(d=>({value:d,label:d}))]}),c.jsx(Yr,{label:"Min Score",value:t.minimumScore||"",onChange:d=>o("minimumScore",d?Number(d):""),options:[{value:"",label:"Any Score"},...[90,80,70,60,50].map(d=>({value:d,label:`${d}+`}))]}),c.jsx(Yr,{label:"Country",value:t.country||"",onChange:d=>o("country",d),options:[{value:"",label:"Any Country"},{value:"JP",label:"Japan"},{value:"KR",label:"South Korea"},{value:"CN",label:"China"},{value:"TW",label:"Taiwan"}]}),c.jsxs("label",{className:"checkbox-label",children:[c.jsx("input",{type:"checkbox",checked:!!t.isAdult,onChange:d=>o("isAdult",d.target.checked)}),"Include adult"]})]}),c.jsxs("div",{className:"filters-actions",children:[c.jsx("button",{className:"btn primary",onClick:n,children:"Apply Filters"}),c.jsxs("button",{className:"btn ghost",onClick:r,children:[c.jsx(Wl,{size:14})," Reset"]}),c.jsxs("button",{className:"btn ghost",onClick:()=>s(d=>!d),children:[c.jsx(Od,{size:14,style:{transform:i?"rotate(180deg)":"none",transition:"transform 0.2s"}}),i?"Collapse":"Expand"," Filters"]})]}),c.jsx("style",{children:`
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
      `})]})}function Yr({label:t,value:e,onChange:n,options:r}){return c.jsxs("label",{className:"select-wrap",children:[c.jsx("span",{className:"select-label",children:t}),c.jsx("select",{value:e,onChange:i=>n(i.target.value),children:r.map(i=>c.jsx("option",{value:i.value,children:i.label},i.value))}),c.jsx(Od,{size:14,className:"select-arrow"}),c.jsx("style",{children:`
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
      `})]})}function gO(){var _,S,O;const[t,e]=sE(),[n,r]=R.useState(()=>u0(t)),[i,s]=R.useState(null),[o,a]=R.useState(!1),[u,d]=R.useState(null),[f,m]=R.useState(Number(t.get("page")||1)),g=R.useRef(null);R.useEffect(()=>{r(u0(t)),m(Number(t.get("page")||1))},[t.toString()]),R.useEffect(()=>{g.current&&g.current.abort();const j=new AbortController;return g.current=j,a(!0),d(null),En({query:n.query,genre:n.genre,tag:n.tag,year:n.year,season:n.season,status:n.status,format:n.format,sort:n.sort?[n.sort]:["POPULARITY_DESC"],minimumScore:n.minimumScore,country:n.country,isAdult:!!n.isAdult,page:f,perPage:30,signal:j.signal}).then(D=>{j.signal.aborted||s(D)}).catch(D=>{D.name!=="AbortError"&&d(D)}).finally(()=>{j.signal.aborted||a(!1)}),()=>j.abort()},[n,f]);const I=()=>{const j=new URLSearchParams;n.query&&j.set("query",n.query),n.genre&&j.set("genre",n.genre),n.tag&&j.set("tag",n.tag),n.year&&j.set("year",String(n.year)),n.season&&j.set("season",n.season),n.status&&j.set("status",n.status),n.format&&j.set("format",n.format),n.sort&&j.set("sort",n.sort),n.minimumScore&&j.set("minimumScore",String(n.minimumScore)),n.country&&j.set("country",n.country),n.isAdult&&j.set("isAdult","1"),f>1&&j.set("page",String(f)),e(j)},C=()=>{r({sort:"POPULARITY_DESC"}),m(1),e(new URLSearchParams)},k=((_=i==null?void 0:i.pageInfo)==null?void 0:_.total)||0,P=((S=i==null?void 0:i.pageInfo)==null?void 0:S.lastPage)||1,E=((O=i==null?void 0:i.pageInfo)==null?void 0:O.currentPage)||f;return c.jsxs("div",{className:"page",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"search-head",children:[c.jsxs("div",{children:[c.jsx("h1",{children:"Search Anime"}),i&&c.jsxs("p",{className:"muted",children:[k.toLocaleString()," results"]})]}),c.jsx("input",{className:"search-input",value:n.query||"",onChange:j=>r(D=>({...D,query:j.target.value})),onKeyDown:j=>j.key==="Enter"&&I(),placeholder:"Search by title…"})]}),c.jsx(mO,{filters:n,onChange:r,onApply:()=>{m(1),I()},onReset:C}),c.jsx("div",{className:"results-wrap",children:c.jsx(nh,{anime:(i==null?void 0:i.media)||[],loading:o,error:u,empty:"No anime matched your filters."})}),i&&P>1&&c.jsxs("div",{className:"pagination",children:[c.jsxs("button",{className:"btn ghost",disabled:E<=1,onClick:()=>{m(j=>Math.max(1,j-1)),window.scrollTo({top:0})},children:[c.jsx(Bl,{size:14})," Prev"]}),c.jsxs("span",{className:"muted",children:["Page ",E," / ",P]}),c.jsxs("button",{className:"btn ghost",disabled:E>=P,onClick:()=>{m(j=>j+1),window.scrollTo({top:0})},children:["Next ",c.jsx(Go,{size:14})]})]})]}),c.jsx("style",{children:`
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
      `})]})}function u0(t){return{query:t.get("query")||"",genre:t.get("genre")||"",tag:t.get("tag")||"",year:t.get("year")?Number(t.get("year")):"",season:t.get("season")||"",status:t.get("status")||"",format:t.get("format")||"",sort:t.get("sort")||"POPULARITY_DESC",minimumScore:t.get("minimumScore")?Number(t.get("minimumScore")):"",country:t.get("country")||"",isAdult:t.get("isAdult")==="1"}}/*! @license DOMPurify 3.4.16 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.16/LICENSE */function c0(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function yO(t){if(Array.isArray(t))return t}function vO(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,i,s,o,a=[],u=!0,d=!1;try{if(s=(n=n.call(t)).next,e!==0)for(;!(u=(r=s.call(n)).done)&&(a.push(r.value),a.length!==e);u=!0);}catch(f){d=!0,i=f}finally{try{if(!u&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(d)throw i}}return a}}function _O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */function wO(t,e){return yO(t)||vO(t,e)||xO(t,e)||_O()}function xO(t,e){if(t){if(typeof t=="string")return c0(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c0(t,e):void 0}}const lI=Object.entries,d0=Object.setPrototypeOf,EO=Object.isFrozen,TO=Object.getPrototypeOf,IO=Object.getOwnPropertyDescriptor;let ot=Object.freeze,dt=Object.seal,Js=Object.create,uI=typeof Reflect<"u"&&Reflect,Np=uI.apply,Dp=uI.construct;ot||(ot=function(e){return e});dt||(dt=function(e){return e});Np||(Np=function(e,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),s=2;s<r;s++)i[s-2]=arguments[s];return e.apply(n,i)});Dp||(Dp=function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return new e(...r)});const ns=rt(Array.prototype.forEach),SO=rt(Array.prototype.lastIndexOf),h0=rt(Array.prototype.pop),Pa=rt(Array.prototype.push),AO=rt(Array.prototype.splice),So=Array.isArray,Ha=rt(String.prototype.toLowerCase),nf=rt(String.prototype.toString),f0=rt(String.prototype.match),Na=rt(String.prototype.replace),p0=rt(String.prototype.indexOf),kO=rt(String.prototype.trim),bO=rt(Number.prototype.toString),RO=rt(Boolean.prototype.toString),m0=typeof BigInt>"u"?null:rt(BigInt.prototype.toString),g0=typeof Symbol>"u"?null:rt(Symbol.prototype.toString),Wt=rt(Object.prototype.hasOwnProperty),Da=rt(Object.prototype.toString),At=rt(RegExp.prototype.test),Xr=CO(TypeError);function rt(t){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return Np(t,e,r)}}function CO(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return Dp(t,n)}}function ge(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ha;if(d0&&d0(t,null),!So(e))return t;let r=e.length;for(;r--;){let i=e[r];if(typeof i=="string"){const s=n(i);s!==i&&(EO(e)||(e[r]=s),i=s)}t[i]=!0}return t}function PO(t){for(let e=0;e<t.length;e++)Wt(t,e)||(t[e]=null);return t}function tn(t){const e=Js(null);for(const r of lI(t)){var n=wO(r,2);const i=n[0],s=n[1];Wt(t,i)&&(So(s)?e[i]=PO(s):s&&typeof s=="object"&&s.constructor===Object?e[i]=tn(s):e[i]=s)}return e}function NO(t){switch(typeof t){case"string":return t;case"number":return bO(t);case"boolean":return RO(t);case"bigint":return m0?m0(t):"0";case"symbol":return g0?g0(t):"Symbol()";case"undefined":return Da(t);case"function":case"object":{if(t===null)return Da(t);const e=t,n=pn(e,"toString");if(typeof n=="function"){const r=n(e);return typeof r=="string"?r:Da(r)}return Da(t)}default:return Da(t)}}function pn(t,e){for(;t!==null;){const r=IO(t,e);if(r){if(r.get)return rt(r.get);if(typeof r.value=="function")return rt(r.value)}t=TO(t)}function n(){return null}return n}function DO(t){try{return At(t,""),!0}catch{return!1}}const y0=ot(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),rf=ot(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),sf=ot(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),LO=ot(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),of=ot(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),OO=ot(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),v0=ot(["#text"]),_0=ot(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),af=ot(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","pointer-events","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","vector-effect","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),w0=ot(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Xu=ot(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),jO=dt(/{{[\w\W]*|^[\w\W]*}}/g),MO=dt(/<%[\w\W]*|^[\w\W]*%>/g),VO=dt(/\${[\w\W]*/g),UO=dt(/^data-[\-\w.\u00B7-\uFFFF]+$/),FO=dt(/^aria-[\-\w]+$/),x0=dt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),zO=dt(/^(?:\w+script|data):/i),$O=dt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),BO=dt(/^html$/i),WO=dt(/^[a-z][.\w]*(-[.\w]+)+$/i),E0=dt(/<[/\w!]/g),T0=dt(/<[/\w]/g),HO=dt(/<\/no(script|embed|frames)/i),qO=dt(/\/>/i),Zt={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},cI=["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"],GO=ot(ge({},cI)),KO=function(){const t={};return ns(cI,e=>{t[e]=dt(new RegExp("</"+e+"(?=[\\t\\n\\f\\r />])","i"))}),ot(t)}(),QO=function(){return typeof window>"u"?null:window},YO=function(e,n){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let r=null;const i="data-tt-policy-suffix";n&&n.hasAttribute(i)&&(r=n.getAttribute(i));const s="dompurify"+(r?"#"+r:"");try{return e.createPolicy(s,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return console.warn("TrustedTypes policy "+s+" could not be created."),null}},I0=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},Jr=function(e,n,r,i){return Wt(e,n)&&So(e[n])?ge(i.base?tn(i.base):{},e[n],i.transform):r},lf=function(e,n,r){const i=Wt(e,n)?e[n]:void 0;return i&&typeof i=="object"?tn(i):r()};function dI(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:QO();const e=B=>dI(B);if(e.version="3.4.16",e.removed=[],!t||!t.document||t.document.nodeType!==Zt.document||!t.Element)return e.isSupported=!1,e;let n=t.document;const r=n,i=r.currentScript;t.DocumentFragment;const s=t.HTMLTemplateElement,o=t.Node,a=t.Element,u=t.NodeFilter;t.NamedNodeMap===void 0&&(t.NamedNodeMap||t.MozNamedAttrMap),t.HTMLFormElement;const d=t.DOMParser,f=t.trustedTypes,m=a.prototype,g=pn(m,"cloneNode"),I=pn(m,"remove"),C=pn(m,"removeAttributeNode"),k=pn(m,"nextSibling"),P=pn(m,"childNodes"),E=pn(m,"parentNode"),_=pn(m,"shadowRoot"),S=pn(m,"attributes"),O=o&&o.prototype?pn(o.prototype,"nodeType"):null,j=o&&o.prototype?pn(o.prototype,"nodeName"):null,D=o&&o.prototype?pn(o.prototype,"ownerDocument"):null,x=function(w){return O?O(w):w.nodeType},y=function(w){return j?j(w):w.nodeName};if(typeof s=="function"){const B=n.createElement("template");B.content&&B.content.ownerDocument&&(n=B.content.ownerDocument)}let T,A="",N,M=!1,b=0;const Ke=function(){if(b>0)throw Xr('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},Xe=function(w){Ke(),b++;try{return T.createHTML(w)}finally{b--}},Xt=function(w){Ke(),b++;try{return T.createScriptURL(w)}finally{b--}},ht=function(){return M||(N=YO(f,i),M=!0),N},q=n,ee=q.implementation,ne=q.createNodeIterator,we=q.createDocumentFragment,X=q.getElementsByTagName,pe=r.importNode;let J=I0();e.isSupported=typeof lI=="function"&&typeof E=="function"&&ee&&ee.createHTMLDocument!==void 0;const Je=jO,Tn=MO,In=VO,rh=UO,ih=FO,bs=zO,Vi=$O,na=WO;let Rs=x0,Ie=null;const Ui=ge({},[...y0,...rf,...sf,...of,...v0]);let Ae=null;const ra=ge({},[..._0,...af,...w0,...Xu]);let cn=Object.seal(Js(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Fr=null,Cs=null;const Sn=Object.seal(Js(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let du=!0,Fi=!0,Ps=!1,ia=!0,Ce=!1,Ve=!0,dn=!1,Ns=!1,zi=null,Ds=null,ir=!1,sr=!1,$i=!1,zr=!1,hu=!0,fu=!1;const Ls="user-content-";let Os=!0,js=!1,hn={},jn=null;const Ms=ge({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]);let Mn=null;const sa=ge({},["audio","video","img","source","image","track"]);let Bi=null;const oa=ge({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Vn="http://www.w3.org/1998/Math/MathML",Wi="http://www.w3.org/2000/svg",be="http://www.w3.org/1999/xhtml";let or=be,ar=!1,lr=null;const sh=ge({},[Vn,Wi,be],nf),pu=ot(["mi","mo","mn","ms","mtext"]);let Un=ge({},pu);const mu=ot(["annotation-xml"]);let aa=ge({},mu);const Vs=ge({},["title","style","font","a","script"]);let $r=null;const la=["application/xhtml+xml","text/html"],Us="text/html";let xe=null,ur=null;const gu=n.createElement("form"),Fs=function(w){return w instanceof RegExp||w instanceof Function},Hi=function(){let w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(ur&&ur===w)return;(!w||typeof w!="object")&&(w={}),w=tn(w),$r=la.indexOf(w.PARSER_MEDIA_TYPE)===-1?Us:w.PARSER_MEDIA_TYPE,xe=$r==="application/xhtml+xml"?nf:Ha,Ie=Jr(w,"ALLOWED_TAGS",Ui,{transform:xe}),Ae=Jr(w,"ALLOWED_ATTR",ra,{transform:xe}),lr=Jr(w,"ALLOWED_NAMESPACES",sh,{transform:nf}),Bi=Jr(w,"ADD_URI_SAFE_ATTR",oa,{transform:xe,base:oa}),Mn=Jr(w,"ADD_DATA_URI_TAGS",sa,{transform:xe,base:sa}),jn=Jr(w,"FORBID_CONTENTS",Ms,{transform:xe}),Fr=Jr(w,"FORBID_TAGS",tn({}),{transform:xe}),Cs=Jr(w,"FORBID_ATTR",tn({}),{transform:xe}),hn=Wt(w,"USE_PROFILES")?w.USE_PROFILES&&typeof w.USE_PROFILES=="object"?tn(w.USE_PROFILES):w.USE_PROFILES:!1,du=w.ALLOW_ARIA_ATTR!==!1,Fi=w.ALLOW_DATA_ATTR!==!1,Ps=w.ALLOW_UNKNOWN_PROTOCOLS||!1,ia=w.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Ce=w.SAFE_FOR_TEMPLATES||!1,Ve=w.SAFE_FOR_XML!==!1,dn=w.WHOLE_DOCUMENT||!1,sr=w.RETURN_DOM||!1,$i=w.RETURN_DOM_FRAGMENT||!1,zr=w.RETURN_TRUSTED_TYPE||!1,ir=w.FORCE_BODY||!1,hu=w.SANITIZE_DOM!==!1,fu=w.SANITIZE_NAMED_PROPS||!1,Os=w.KEEP_CONTENT!==!1,js=w.IN_PLACE||!1,Rs=DO(w.ALLOWED_URI_REGEXP)?w.ALLOWED_URI_REGEXP:x0,or=typeof w.NAMESPACE=="string"?w.NAMESPACE:be,Un=lf(w,"MATHML_TEXT_INTEGRATION_POINTS",()=>ge({},pu)),aa=lf(w,"HTML_INTEGRATION_POINTS",()=>ge({},mu));const L=lf(w,"CUSTOM_ELEMENT_HANDLING",()=>Js(null));if(cn=Js(null),Wt(L,"tagNameCheck")&&Fs(L.tagNameCheck)&&(cn.tagNameCheck=L.tagNameCheck),Wt(L,"attributeNameCheck")&&Fs(L.attributeNameCheck)&&(cn.attributeNameCheck=L.attributeNameCheck),Wt(L,"allowCustomizedBuiltInElements")&&typeof L.allowCustomizedBuiltInElements=="boolean"&&(cn.allowCustomizedBuiltInElements=L.allowCustomizedBuiltInElements),dt(cn),Ce&&(Fi=!1),$i&&(sr=!0),hn&&(Ie=ge({},v0),Ae=Js(null),hn.html===!0&&(ge(Ie,y0),ge(Ae,_0)),hn.svg===!0&&(ge(Ie,rf),ge(Ae,af),ge(Ae,Xu)),hn.svgFilters===!0&&(ge(Ie,sf),ge(Ae,af),ge(Ae,Xu)),hn.mathMl===!0&&(ge(Ie,of),ge(Ae,w0),ge(Ae,Xu))),Sn.tagCheck=null,Sn.attributeCheck=null,Wt(w,"ADD_TAGS")&&(typeof w.ADD_TAGS=="function"?Sn.tagCheck=w.ADD_TAGS:So(w.ADD_TAGS)&&(Ie===Ui&&(Ie=tn(Ie)),ge(Ie,w.ADD_TAGS,xe))),Wt(w,"ADD_ATTR")&&(typeof w.ADD_ATTR=="function"?Sn.attributeCheck=w.ADD_ATTR:So(w.ADD_ATTR)&&(Ae===ra&&(Ae=tn(Ae)),ge(Ae,w.ADD_ATTR,xe))),Wt(w,"ADD_FORBID_CONTENTS")&&So(w.ADD_FORBID_CONTENTS)&&(jn===Ms&&(jn=tn(jn)),ge(jn,w.ADD_FORBID_CONTENTS,xe)),Os&&(Ie["#text"]=!0),dn&&ge(Ie,["html","head","body"]),Ie.table&&(ge(Ie,["tbody"]),delete Fr.tbody),w.TRUSTED_TYPES_POLICY){if(typeof w.TRUSTED_TYPES_POLICY.createHTML!="function")throw Xr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof w.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Xr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const z=T;T=w.TRUSTED_TYPES_POLICY;try{A=Xe("")}catch(H){throw T=z,H}}else w.TRUSTED_TYPES_POLICY===null?(T=void 0,A=""):(T===void 0&&(T=ht()),T&&typeof A=="string"&&(A=Xe("")));ot&&ot(w),ur=w},ua=ge({},[...rf,...sf,...LO]),ca=ge({},[...of,...OO]),oh=function(w,L,z){return L.namespaceURI===be?w==="svg":L.namespaceURI===Vn?w==="svg"&&(z==="annotation-xml"||Un[z]):!!ua[w]},zs=function(w,L,z){return L.namespaceURI===be?w==="math":L.namespaceURI===Wi?w==="math"&&aa[z]:!!ca[w]},yu=function(w,L,z){return L.namespaceURI===Wi&&!aa[z]||L.namespaceURI===Vn&&!Un[z]?!1:!ca[w]&&(Vs[w]||!ua[w])},da=function(w){let L=E(w);(!L||!L.tagName)&&(L={namespaceURI:or,tagName:"template"});const z=Ha(w.tagName),H=Ha(L.tagName);return lr[w.namespaceURI]?w.namespaceURI===Wi?oh(z,L,H):w.namespaceURI===Vn?zs(z,L,H):w.namespaceURI===be?yu(z,L,H):!!($r==="application/xhtml+xml"&&lr[w.namespaceURI]):!1},zt=function(w){Pa(e.removed,{element:w});try{E(w).removeChild(w)}catch{if(I(w),!E(w))throw Xr("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},Fn=function(w,L,z){try{C(w,L)}catch{try{w.removeAttribute(z)}catch{}}},Br=function(w){qi(w);const L=P(w);if(L){const H=[];ns(L,Z=>{Pa(H,Z)}),ns(H,Z=>{try{I(Z)}catch{}})}const z=S(w);if(z)for(let H=z.length-1;H>=0;--H){const Z=z[H],oe=Z&&Z.name;typeof oe=="string"&&Fn(w,Z,oe)}},cr=function(w,L,z){if(!z)try{z=L.getAttributeNode(w)}catch{z=null}Pa(e.removed,{attribute:z||null,from:L});try{z?C(L,z):L.removeAttribute(w)}catch{try{L.removeAttribute(w)}catch{}}if(w==="is")if(sr||$i)try{zt(L)}catch{}else try{L.setAttribute(w,"")}catch{}},vu=function(w){const L=S(w);if(L)for(let z=L.length-1;z>=0;--z){const H=L[z],Z=H&&H.name;typeof Z!="string"||Ae[xe(Z)]||Fn(w,H,Z)}},qi=function(w){const L=[w];for(;L.length>0;){const z=L.pop();x(z)===Zt.element&&vu(z);const H=P(z);if(H)for(let Z=H.length-1;Z>=0;--Z)L.push(H[Z])}},ha=function(w,L){return Ve?w==="patchsrc"?!0:w==="for"&&L!=="label"&&L!=="output":!1},fa=function(w){if(!Ve)return;const L=[w];for(;L.length>0;){const z=L.pop(),H=x(z);if(H===Zt.processingInstruction||H===Zt.comment&&At(T0,z.data)){try{I(z)}catch{}continue}if(H===Zt.element){const oe=z,de=xe(y(z));try{oe.hasAttribute&&oe.hasAttribute("patchsrc")&&oe.removeAttribute("patchsrc"),oe.hasAttribute&&oe.hasAttribute("for")&&ha("for",de)&&oe.removeAttribute("for")}catch{}}const Z=P(z);if(Z)for(let oe=Z.length-1;oe>=0;--oe)L.push(Z[oe])}},$s=function(w){let L=null,z=null;if(ir)w="<remove></remove>"+w;else{const oe=f0(w,/^[\r\n\t ]+/);z=oe&&oe[0]}$r==="application/xhtml+xml"&&or===be&&(w='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+w+"</body></html>");const H=T?Xe(w):w;if(or===be)try{L=new d().parseFromString(H,$r)}catch{}if(!L||!L.documentElement){L=ee.createDocument(or,"template",null);try{L.documentElement.innerHTML=ar?A:H}catch{}}const Z=L.body||L.documentElement;return w&&z&&Z.insertBefore(n.createTextNode(z),Z.childNodes[0]||null),or===be?X.call(L,dn?"html":"body")[0]:dn?L.documentElement:Z},pa=function(w){const L=D?D(w):w.ownerDocument;return ne.call(L||w,w,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT|u.SHOW_PROCESSING_INSTRUCTION|u.SHOW_CDATA_SECTION,null)},Gi=function(w){return w=Na(w,Je," "),w=Na(w,Tn," "),w=Na(w,In," "),w},ma=function(w){var L;w.normalize();const z=D?D(w):w.ownerDocument,H=ne.call(z||w,w,u.SHOW_TEXT|u.SHOW_COMMENT|u.SHOW_CDATA_SECTION|u.SHOW_PROCESSING_INSTRUCTION,null);let Z=H.nextNode();for(;Z;)Z.data=Gi(Z.data),Z=H.nextNode();const oe=(L=w.querySelectorAll)===null||L===void 0?void 0:L.call(w,"template");oe&&ns(oe,de=>{dr(de.content)&&ma(de.content)})},Bs=function(w){const L=j?j(w):null;return typeof L!="string"||xe(L)!=="form"?!1:typeof w.nodeName!="string"||typeof w.textContent!="string"||typeof w.removeChild!="function"||w.attributes!==S(w)||typeof w.removeAttribute!="function"||typeof w.removeAttributeNode!="function"||typeof w.getAttributeNode!="function"||typeof w.setAttribute!="function"||typeof w.namespaceURI!="string"||typeof w.insertBefore!="function"||typeof w.hasChildNodes!="function"||w.nodeType!==O(w)||w.childNodes!==P(w)},dr=function(w){if(!O||typeof w!="object"||w===null)return!1;try{return O(w)===Zt.documentFragment}catch{return!1}},Wr=function(w){if(!O||typeof w!="object"||w===null)return!1;try{return typeof O(w)=="number"}catch{return!1}};function fn(B,w,L){B.length!==0&&ns(B,z=>{z.call(e,w,L,ur)})}const hr=function(w,L){return!!(Ve&&w.hasChildNodes()&&!Wr(w.firstElementChild)&&At(E0,w.textContent)&&At(E0,w.innerHTML)||Ve&&w.namespaceURI===be&&GO[L]&&(Wr(w.firstElementChild)||typeof w.textContent=="string"&&At(KO[L],w.textContent))||w.nodeType===Zt.processingInstruction||Ve&&w.nodeType===Zt.comment&&At(T0,w.data))},$t=function(w,L){if(w instanceof RegExp)return At(w,L);if(w instanceof Function){for(var z=arguments.length,H=new Array(z>2?z-2:0),Z=2;Z<z;Z++)H[Z-2]=arguments[Z];return!!w(L,...H)}return!1},Ws=function(w,L,z){if(!Fr[L]&&Hr(L)&&$t(cn.tagNameCheck,L))return!1;if(Os&&!jn[L]){const H=E(w),Z=P(w);if(Z&&H){const oe=Z.length;for(let de=oe-1;de>=0;--de){const Oe=w===z?g(Z[de],!0):Z[de];H.insertBefore(Oe,k(w))}}}return zt(w),!0},Ki=function(w,L,z,H){return w.length===0?L:L===z||L===H?tn(L):L},fr=function(w,L){return w===L||E(w)!==null?!1:(js&&qi(w),!0)},Se=function(w,L){if(fn(J.beforeSanitizeElements,w,null),fr(w,L))return!0;if(Bs(w))return zt(w),!0;const z=xe(y(w));if(Ie=Ki(J.uponSanitizeElement,Ie,Ui,zi),fn(J.uponSanitizeElement,w,{tagName:z,allowedTags:Ie}),fr(w,L))return!0;if(hr(w,z))return zt(w),!0;if(Fr[z]||!(Sn.tagCheck instanceof Function&&Sn.tagCheck(z))&&!Ie[z]){const H=Ws(w,z,L);return H===!1&&(fn(J.afterSanitizeElements,w,null),fr(w,L))?!0:H}if(x(w)===Zt.element&&!da(w)||(z==="noscript"||z==="noembed"||z==="noframes")&&At(HO,w.innerHTML))return zt(w),!0;if(Ce&&w.nodeType===Zt.text){const H=Gi(w.textContent);w.textContent!==H&&(Pa(e.removed,{element:w.cloneNode()}),w.textContent=H)}return fn(J.afterSanitizeElements,w,null),fr(w,L)},Qi=function(w,L,z){if(Cs[L]||ha(L,w)||hu&&(L==="id"||L==="name")&&(z in n||z in gu))return!1;const H=Ae[L]||Sn.attributeCheck instanceof Function&&Sn.attributeCheck(L,w);return Fi&&At(rh,L)||du&&At(ih,L)?!0:H?Bi[L]||At(Rs,Na(z,Vi,""))||(L==="src"||L==="xlink:href"||L==="href")&&w!=="script"&&p0(z,"data:")===0&&Mn[w]||Ps&&!At(bs,Na(z,Vi,""))?!0:!z:Hr(w)&&$t(cn.tagNameCheck,w)&&$t(cn.attributeNameCheck,L,w)||L==="is"&&cn.allowCustomizedBuiltInElements&&$t(cn.tagNameCheck,z)},Yi=ge({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),Hr=function(w){return!Yi[Ha(w)]&&At(na,w)},ah=function(w,L,z,H){if(T&&typeof f=="object"&&typeof f.getAttributeType=="function"&&!z)switch(f.getAttributeType(w,L)){case"TrustedHTML":return Xe(H);case"TrustedScriptURL":return Xt(H)}return H},_u=function(w,L,z,H){try{return z?w.setAttributeNS(z,L,H):w.setAttribute(L,H),Bs(w)?(zt(w),!1):!0}catch{return cr(L,w),!1}},wu=function(w,L){if(fn(J.beforeSanitizeAttributes,w,null),fr(w,L))return;const z=w.attributes;if(!z||Bs(w))return;Ae=Ki(J.uponSanitizeAttribute,Ae,ra,Ds);const H={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Ae,forceKeepAttr:void 0};let Z=z.length;const oe=xe(w.nodeName);for(;Z--;){const de=z[Z],Oe=de.name,Bt=de.namespaceURI,We=de.value,qr=xe(Oe),ya=We;let Ze=Oe==="value"?ya:kO(ya),Xi=!1;if(H.attrName=qr,H.attrValue=Ze,H.keepAttr=!0,H.forceKeepAttr=void 0,fn(J.uponSanitizeAttribute,w,H),Ze=H.attrValue,fu&&(qr==="id"||qr==="name")&&p0(Ze,Ls)!==0&&(cr(Oe,w,de),Ze=Ls+Ze,Xi=!0),Ve&&At(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,Ze)){cr(Oe,w,de);continue}if(qr==="attributename"&&f0(Ze,"href")){cr(Oe,w,de);continue}if(!H.forceKeepAttr){if(!H.keepAttr){cr(Oe,w,de);continue}if(!ia&&At(qO,Ze)){cr(Oe,w,de);continue}if(Ce&&(Ze=Gi(Ze)),!Qi(oe,qr,Ze)){cr(Oe,w,de);continue}Ze=ah(oe,qr,Bt,Ze),Ze!==ya&&_u(w,Oe,Bt,Ze)&&Xi&&h0(e.removed)}}fn(J.afterSanitizeAttributes,w,null),fr(w,L)},Hs=function(w){let L=null;const z=pa(w);for(fn(J.beforeSanitizeShadowDOM,w,null);L=z.nextNode();)if(fn(J.uponSanitizeShadowNode,L,null),Se(L,w),wu(L,w),dr(L.content)&&Hs(L.content),x(L)===Zt.element){const H=_(L);dr(H)&&(ga(H),Hs(H))}fn(J.afterSanitizeShadowDOM,w,null)},ga=function(w){const L=[{node:w,shadow:null}];for(;L.length>0;){const z=L.pop();if(z.shadow){Hs(z.shadow);continue}const H=z.node,Z=x(H)===Zt.element,oe=P(H);if(oe)for(let de=oe.length-1;de>=0;--de)L.push({node:oe[de],shadow:null});if(Z){const de=j?j(H):null;if(typeof de=="string"&&xe(de)==="template"){const Oe=H.content;dr(Oe)&&L.push({node:Oe,shadow:null})}}if(Z){const de=_(H);dr(de)&&L.push({node:null,shadow:de},{node:de,shadow:null})}}};return e.sanitize=function(B){let w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},L=null,z=null,H=null,Z=null;if(ar=!B,ar&&(B="<!-->"),typeof B!="string"&&!Wr(B)&&(B=NO(B),typeof B!="string"))throw Xr("dirty is not a string, aborting");if(!e.isSupported)return B;Ns?(Ie=zi,Ae=Ds):Hi(w),(J.uponSanitizeElement.length>0||J.uponSanitizeAttribute.length>0)&&(Ie=tn(Ie)),J.uponSanitizeAttribute.length>0&&(Ae=tn(Ae)),e.removed=[];const oe=js&&typeof B!="string"&&Wr(B);if(oe){fa(B);const Bt=y(B);if(typeof Bt=="string"){const We=xe(Bt);if(!Ie[We]||Fr[We])throw Br(B),Xr("root node is forbidden and cannot be sanitized in-place")}if(Bs(B))throw Br(B),Xr("root node is clobbered and cannot be sanitized in-place");try{ga(B)}catch(We){throw Br(B),We}}else if(Wr(B))L=$s("<!---->"),z=L.ownerDocument.importNode(B,!0),z.nodeType===Zt.element&&z.nodeName==="BODY"||z.nodeName==="HTML"?L=z:L.appendChild(z),ga(L);else{if(!sr&&!Ce&&!dn&&B.indexOf("<")===-1)return T&&zr?Xe(B):B;if(L=$s(B),!L)return sr?null:zr?A:""}L&&ir&&zt(L.firstChild);const de=oe?B:L;try{const Bt=pa(de);for(;H=Bt.nextNode();)Se(H,de),wu(H,de),dr(H.content)&&Hs(H.content)}catch(Bt){throw oe&&(Br(B),ns(e.removed,We=>{We.element&&qi(We.element)})),Bt}if(oe){let Bt=!1;if(ns(e.removed,We=>{We.element&&(We.element===B&&(Bt=!0),qi(We.element))}),Bt)throw Xr("a node selected for removal could not be safely returned; refusing to sanitize in place");return Ce&&ma(B),B}if(sr){if(Ce&&ma(L),$i)for(Z=we.call(L.ownerDocument);L.firstChild;)Z.appendChild(L.firstChild);else Z=L;return(Ae.shadowroot||Ae.shadowrootmode)&&(Z=pe.call(r,Z,!0)),Z}let Oe=dn?L.outerHTML:L.innerHTML;return dn&&Ie["!doctype"]&&L.ownerDocument&&L.ownerDocument.doctype&&L.ownerDocument.doctype.name&&At(BO,L.ownerDocument.doctype.name)&&(Oe="<!DOCTYPE "+L.ownerDocument.doctype.name+`>
`+Oe),Ce&&(Oe=Gi(Oe)),T&&zr?Xe(Oe):Oe},e.setConfig=function(){let B=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Hi(B),Ns=!0,zi=Ie,Ds=Ae},e.clearConfig=function(){ur=null,Ns=!1,zi=null,Ds=null,T=N,A=""},e.isValidAttribute=function(B,w,L){ur||Hi({});const z=xe(B),H=xe(w);return Qi(z,H,L)},e.addHook=function(B,w){typeof w=="function"&&Wt(J,B)&&Pa(J[B],w)},e.removeHook=function(B,w){if(Wt(J,B)){if(w!==void 0){const L=SO(J[B],w);return L===-1?void 0:AO(J[B],L,1)[0]}return h0(J[B])}},e.removeHooks=function(B){Wt(J,B)&&(J[B]=[])},e.removeAllHooks=function(){J=I0()},e}var hI=dI();function XO(){var A,N,M,b,Ke,Xe,Xt,ht,q,ee,ne,we,X,pe;const{id:t}=eE(),e=jr(),{user:n}=rr(),[r,i]=R.useState(null),[s,o]=R.useState(!0),[a,u]=R.useState(null),[d,f]=R.useState(!1),[m,g]=R.useState(!1),[I,C]=R.useState(!1),[k,P]=R.useState(!1),[E,_]=R.useState(!1);if(R.useEffect(()=>{let J=!0;return o(!0),u(null),Fg(t,{onImporting:Je=>J&&_(Je)}).then(Je=>{J&&(i(Je),o(!1))}).catch(Je=>{J&&(u(Je),o(!1))}),()=>{J=!1}},[t]),R.useEffect(()=>{!n||!r||qT(n.uid,r.id).then(f).catch(()=>{})},[n,r]),s)return c.jsxs("div",{className:"container page",children:[c.jsx(xn,{className:"spin",size:32}),E&&c.jsx("p",{className:"muted",children:"Adding this anime to YumeList… this can take a few seconds."})]});if(a)return c.jsx("div",{className:"container page",children:c.jsxs("div",{className:"empty-state",children:["Failed to load anime: ",a.message]})});if(!r)return null;const S=((A=r.title)==null?void 0:A.english)||((N=r.title)==null?void 0:N.userPreferred)||((M=r.title)==null?void 0:M.romaji),O=r.bannerImage||((b=r.coverImage)==null?void 0:b.extraLarge),j=hI.sanitize(r.description||"<p>No description available.</p>"),D=(((Ke=r.recommendations)==null?void 0:Ke.nodes)||[]).map(J=>J.mediaRecommendation).filter(Boolean),x=(((Xe=r.relations)==null?void 0:Xe.edges)||[]).map(J=>J.node).filter(Boolean),y=async()=>{if(!n)return C(!0);P(!0);try{d?(await $g(n.uid,r.id),f(!1)):(await zg(n.uid,r,"PLANNED"),f(!0))}catch(J){console.warn(J)}P(!1)},T=async()=>{if(!n)return C(!0);P(!0);try{m?(await KT(n.uid,r.id),g(!1)):(await GT(n.uid,r),g(!0))}catch(J){console.warn(J)}P(!1)};return(Xt=r.externalLinks)==null||Xt.find(J=>J.site==="MyAnimeList"),c.jsxs("div",{className:"page details",children:[c.jsxs("div",{className:"details-hero",style:{backgroundImage:`url(${O})`},children:[c.jsx("div",{className:"details-overlay"}),c.jsxs("div",{className:"container details-hero-inner",children:[c.jsx("div",{className:"details-cover",children:c.jsx("img",{src:(ht=r.coverImage)==null?void 0:ht.extraLarge,alt:S})}),c.jsxs("div",{className:"details-info",children:[c.jsx("h1",{children:S}),((q=r.title)==null?void 0:q.native)&&c.jsx("p",{className:"native",children:r.title.native}),c.jsxs("div",{className:"details-meta",children:[r.format&&c.jsx("span",{className:"pill",children:r.format}),r.seasonYear&&c.jsxs("span",{className:"pill",children:[r.season," ",r.seasonYear]}),r.averageScore&&c.jsxs("span",{className:"pill gold",children:[c.jsx(Lm,{size:12})," ",r.averageScore]}),r.episodes&&c.jsxs("span",{className:"pill",children:[r.episodes," Episodes"]}),r.status&&c.jsx("span",{className:"pill",children:r.status.replace("_"," ")}),fd(r)&&c.jsx("span",{className:"pill gold",children:fd(r)})]}),c.jsx("div",{className:"genre-list",children:(r.genres||[]).map(J=>c.jsx("span",{className:"chip",children:J},J))}),c.jsx("div",{className:"description",dangerouslySetInnerHTML:{__html:j}}),c.jsxs("div",{className:"details-actions",children:[c.jsxs("button",{className:"btn primary",onClick:()=>e(`/watch/${r.id}`),children:[c.jsx(Dm,{size:16})," Watch Now"]}),c.jsxs("button",{className:"btn",onClick:y,disabled:k,children:[c.jsx(pE,{size:16})," ",d?"In Watchlist":"Add to Watchlist"]}),c.jsxs("button",{className:"btn",onClick:T,disabled:k,children:[c.jsx(cb,{size:16,fill:m?"currentColor":"none"})," ",m?"Favorited":"Favorite"]}),((ee=r.trailer)==null?void 0:ee.id)&&r.trailer.site==="youtube"&&c.jsxs("a",{className:"btn",href:`https://www.youtube.com/watch?v=${r.trailer.id}`,target:"_blank",rel:"noreferrer",children:[c.jsx(cE,{size:16})," Trailer"]})]})]})]})]}),c.jsx("div",{className:"container details-body",children:c.jsxs("div",{className:"details-main",children:[c.jsxs("div",{className:"info-grid",children:[c.jsx($n,{label:"Format",value:r.format}),c.jsx($n,{label:"Status",value:(ne=r.status)==null?void 0:ne.replace("_"," ")}),c.jsx($n,{label:"Episodes",value:r.episodes}),c.jsx($n,{label:"Duration",value:r.duration?`${r.duration} min`:null}),c.jsx($n,{label:"Start Date",value:S0(r.startDate)}),c.jsx($n,{label:"End Date",value:S0(r.endDate)}),c.jsx($n,{label:"Studios",value:(((we=r.studios)==null?void 0:we.nodes)||[]).map(J=>J.name).join(", ")}),c.jsx($n,{label:"Country",value:r.countryOfOrigin}),c.jsx($n,{label:"Popularity",value:(X=r.popularity)==null?void 0:X.toLocaleString()}),c.jsx($n,{label:"Favorites",value:(pe=r.favourites)==null?void 0:pe.toLocaleString()})]}),(D.length>0||x.length>0)&&c.jsxs("section",{style:{marginTop:32},children:[c.jsx("div",{className:"section-head",children:c.jsx("h2",{children:"Recommendations"})}),c.jsx(nh,{anime:[...D,...x].slice(0,12)})]})]})}),c.jsx(cu,{open:I,onClose:()=>C(!1)}),c.jsx("style",{children:`
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
      `})]})}function $n({label:t,value:e}){return c.jsxs("div",{className:"info-cell",children:[c.jsx("span",{className:"lbl",children:t}),c.jsx("span",{className:"val",children:e||"—"})]})}function S0(t){return!t||!t.year?null:`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][(t.month||1)-1]} ${t.day||1}, ${t.year}`}function JO({url:t,title:e,onProgress:n,onComplete:r,onError:i}){const s=R.useRef(null),[o,a]=R.useState(!0),[u,d]=R.useState(null),f=R.useRef(Date.now()),m=R.useRef(0);return R.useEffect(()=>{a(!0),d(null),f.current=Date.now(),m.current=0},[t]),R.useEffect(()=>{const g=I=>{const C=/^https:\/\/([a-z0-9-]+\.)*megaplay\.buzz$/.test(I.origin),k=/^https:\/\/([a-z0-9-]+\.)*filmu\.in$/.test(I.origin);if(!C&&!k)return;let P=I.data;if(typeof P=="string")try{P=JSON.parse(P)}catch{return}!P||typeof P!="object"||(P.event==="time"&&typeof P.time=="number"&&(n&&n(P.time,P.duration||0),m.current=Date.now()),P.event==="complete"&&r&&r(),P.event==="error"&&(d("The player reported a playback error."),i&&i(P)),P.type==="watching-log"&&typeof P.currentTime=="number"&&(n&&n(P.currentTime,P.duration||0),m.current=Date.now()))};return window.addEventListener("message",g),()=>window.removeEventListener("message",g)},[n,r,i]),R.useEffect(()=>{const g=setInterval(()=>{if(!n)return;if(Date.now()-m.current>15e3){const C=Math.floor((Date.now()-f.current)/1e3);n(C,0)}},2e4);return()=>clearInterval(g)},[n]),t?c.jsxs("div",{className:"embed-player",children:[o&&c.jsxs("div",{className:"player-overlay",children:[c.jsx(xn,{size:40,className:"spin"}),c.jsx("p",{children:"Loading stream…"})]}),u&&c.jsxs("div",{className:"player-overlay error",children:[c.jsx(Nv,{size:36}),c.jsx("p",{children:u}),c.jsxs("button",{className:"btn sm",onClick:()=>window.location.reload(),children:[c.jsx(_b,{size:14})," Reload"]})]}),c.jsx("iframe",{ref:s,src:t,title:e||"Anime stream",onLoad:()=>a(!1),frameBorder:"0",scrolling:"no",allowFullScreen:!0,allow:"autoplay; encrypted-media; picture-in-picture; fullscreen; clipboard-write"}),c.jsx("style",{children:`
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
      `})]}):c.jsxs("div",{className:"player-empty",children:[c.jsx(Nv,{size:36}),c.jsx("h3",{children:"No stream available for this episode"}),c.jsx("p",{className:"muted",children:"Try switching servers above, or pick a different episode."}),c.jsx("style",{children:`
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
        `})]})}const ZO="https://anikotoapi.site",Lp=new Map,A0=1e3*60*60;function Op(t){return`anikoto:${t}`}function ej(t){const e=Op(t),n=Lp.get(e);if(n&&Date.now()-n.t<A0)return n.v;try{const r=sessionStorage.getItem(e);if(!r)return null;const i=JSON.parse(r);return Date.now()-i.t>A0?(sessionStorage.removeItem(e),null):(Lp.set(e,i),i.v)}catch{return null}}function tj(t,e){const n={t:Date.now(),v:e};Lp.set(Op(t),n);try{sessionStorage.setItem(Op(t),JSON.stringify(n))}catch{}}async function nj(t,{signal:e}={}){const n=ej(t);if(n)return n;const r=await fetch(`${ZO}${t}`,{signal:e,headers:{Accept:"application/json"}});if(r.status===429)throw new Error("Anikoto rate limit reached. Try again shortly.");if(r.status===403)throw new Error("Anikoto blocked this request.");if(!r.ok)throw new Error(`Anikoto request failed (${r.status})`);const i=await r.json();return tj(t,i),i}async function rj(t,e){if(!t)throw new Error("Series id is required");return nj(`/series/${encodeURIComponent(t)}`,e)}function k0(t,e){var s,o,a;const n=(t==null?void 0:t.episodes)||((s=t==null?void 0:t.data)==null?void 0:s.episodes)||((o=t==null?void 0:t.series)==null?void 0:o.episodes)||((a=t==null?void 0:t.result)==null?void 0:a.episodes)||[];if(!Array.isArray(n)||n.length===0)return null;const r=Number(e),i=n.find(u=>Number(u.episode)===r||Number(u.number)===r||Number(u.ep)===r);return i||(r>=1&&r<=n.length?n[r-1]:null)}function ij(t){if(!t)return null;const e=t.episode_embed_id||t.embed_id||t.embedId||t.id||t.episodeId;return e?String(e).replace(/^ep_/,""):null}const Si=[{id:"megaplay",label:"MegaPlay",languages:["sub","dub"],buildUrl({anilistId:t,episode:e,language:n,anikotoEpisode:r}){const i=ij(r);return i?`https://megaplay.buzz/stream/s-2/${i}/${n}`:t&&e?`https://megaplay.buzz/stream/ani/${t}/${e}/${n}`:null}},{id:"filmu",label:"FilmU",languages:["sub","dub"],buildUrl({anilistId:t,episode:e,language:n}){return!t||!e?null:`https://embed.filmu.in/anime/${t}/1/${e}`}}],sj=Object.fromEntries(Si.map(t=>[t.id,t]));function oj(t){return sj[t]||Si[0]}function aj({providerId:t,language:e,onProviderChange:n,onLanguageChange:r,status:i}){const[s,o]=R.useState(!1),a=R.useRef(null);R.useEffect(()=>{const d=f=>{a.current&&!a.current.contains(f.target)&&o(!1)};return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[]);const u=Si.find(d=>d.id===t)||Si[0];return c.jsxs("div",{className:"server-selector",ref:a,children:[c.jsxs("button",{className:"server-btn",onClick:()=>o(d=>!d),"aria-haspopup":"listbox","aria-expanded":s,children:[c.jsx(Eb,{size:14}),c.jsx("span",{className:"label",children:u.label}),c.jsx("span",{className:"status-dot","data-status":i||"idle"}),c.jsx(Od,{size:14,className:s?"rot":""})]}),c.jsx("div",{className:"language-toggle",role:"group","aria-label":"Language",children:u.languages.map(d=>c.jsxs("button",{className:d===e?"active":"",onClick:()=>r(d),children:[c.jsx(fb,{size:12}),d.toUpperCase()]},d))}),s&&c.jsxs("div",{className:"server-menu glass",role:"listbox",children:[c.jsx("div",{className:"menu-head",children:"Servers"}),Si.map(d=>c.jsxs("button",{className:`server-item ${d.id===u.id?"active":""}`,role:"option","aria-selected":d.id===u.id,onClick:()=>{n(d.id),o(!1)},children:[c.jsxs("div",{className:"item-info",children:[c.jsx("span",{className:"item-label",children:d.label}),c.jsx("span",{className:"item-langs",children:d.languages.map(f=>f.toUpperCase()).join(" · ")})]}),d.id===u.id&&c.jsx(ib,{size:14})]},d.id)),c.jsx("div",{className:"menu-foot",children:"Both servers are third-party embeds. Hoshii does not host video."})]}),c.jsx("style",{children:`
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
      `})]})}const lj="modulepreload",uj=function(t){return"/"+t},b0={},R0=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=uj(u),u in b0)return;b0[u]=!0;const d=u.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":lj,d||(m.as="script"),m.crossOrigin="",m.href=u,a&&m.setAttribute("nonce",a),document.head.appendChild(m),d)return new Promise((g,I)=>{m.addEventListener("load",g),m.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};function fI({comment:t,animeId:e,user:n,onLike:r,onEdit:i,onDelete:s,depth:o=0}){const[a,u]=R.useState(o===0),[d,f]=R.useState([]),[m,g]=R.useState(""),[I,C]=R.useState(!1),[k,P]=R.useState(!1),[E,_]=R.useState(t.text),[S,O]=R.useState(!1);R.useEffect(()=>{if(!a)return;const y=sI(e,t.id,f);return()=>y()},[a,e,t.id]),R.useEffect(()=>{if(!n){O(!1);return}oI({animeId:e,commentId:t.id,uid:n.uid}).then(O).catch(()=>{})},[n,e,t.id]);const j=async()=>{if(n&&m.trim()){C(!0);try{await rI({animeId:e,commentId:t.id,user:n,text:m.trim()}),g("")}catch(y){console.warn(y)}finally{C(!1)}}},D=async()=>{E.trim()&&(await i(E.trim()),P(!1))},x=n&&t.authorId===n.uid;return c.jsxs("div",{className:`comment ${o>0?"nested":""}`,children:[c.jsxs("div",{className:"comment-head",children:[c.jsx("div",{className:"avatar-sm",children:t.authorAvatar?c.jsx("img",{src:t.authorAvatar,alt:""}):(t.authorName||"U")[0].toUpperCase()}),c.jsxs("div",{className:"name-row",children:[c.jsx("span",{className:"name",children:t.authorName||"Anonymous"}),c.jsx("span",{className:"dot",children:"•"}),c.jsx("span",{className:"time",children:cj(t.createdAt)})]})]}),c.jsx("div",{className:"comment-body",children:k?c.jsxs("div",{className:"edit-wrap",children:[c.jsx("textarea",{value:E,onChange:y=>_(y.target.value),rows:3}),c.jsxs("div",{className:"edit-actions",children:[c.jsx("button",{className:"btn ghost",onClick:()=>P(!1),children:"Cancel"}),c.jsx("button",{className:"btn primary",onClick:D,children:"Save"})]})]}):c.jsx("p",{className:"text",children:t.text})}),c.jsxs("div",{className:"comment-actions",children:[c.jsxs("button",{className:`action ${S?"active":""}`,onClick:async()=>{if(!n){r==null||r();return}await(r==null?void 0:r()),O(y=>!y)},children:[c.jsx(Ib,{size:13})," ",t.likeCount||0]}),c.jsx("button",{className:"action",disabled:!0,children:c.jsx(Tb,{size:13})}),o<2&&c.jsxs("button",{className:"action",onClick:()=>u(y=>!y),children:[c.jsx(wb,{size:13})," Reply"]}),x&&!k&&c.jsxs(c.Fragment,{children:[c.jsxs("button",{className:"action",onClick:()=>P(!0),children:[c.jsx(vb,{size:12})," Edit"]}),c.jsxs("button",{className:"action danger",onClick:s,children:[c.jsx(gE,{size:12})," Delete"]})]})]}),o<2&&a&&c.jsxs("div",{className:"replies-wrap",children:[d.length>0&&c.jsx("div",{className:"replies",children:d.map(y=>c.jsx(fI,{comment:y,animeId:e,user:n,depth:o+1,onLike:async()=>{if(n)try{await Wg({animeId:e,commentId:y.id,uid:n.uid})}catch(T){console.warn(T)}},onEdit:async T=>{const{editComment:A}=await R0(async()=>{const{editComment:N}=await Promise.resolve().then(()=>s0);return{editComment:N}},void 0);await A(e,y.id,T)},onDelete:async()=>{const{deleteComment:T}=await R0(async()=>{const{deleteComment:A}=await Promise.resolve().then(()=>s0);return{deleteComment:A}},void 0);confirm("Delete this reply?")&&await T(e,y.id)}},y.id))}),n&&c.jsxs("div",{className:"reply-editor",children:[c.jsx("input",{value:m,onChange:y=>g(y.target.value),placeholder:"Write a reply...",onKeyDown:y=>y.key==="Enter"&&j()}),c.jsxs("button",{className:"btn primary sm",onClick:j,disabled:I,children:[I&&c.jsx(xn,{size:12,className:"spin"})," Reply"]})]})]}),c.jsx("style",{children:`
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
      `})]})}function cj(t){if(!t)return"just now";const e=t.seconds?new Date(t.seconds*1e3):new Date(t),n=Math.floor((Date.now()-e.getTime())/1e3);return n<60?"just now":n<3600?`${Math.floor(n/60)} minutes ago`:n<86400?`${Math.floor(n/3600)} hours ago`:n<2592e3?`${Math.floor(n/86400)} days ago`:n<31536e3?`${Math.floor(n/2592e3)} months ago`:`${Math.floor(n/31536e3)} years ago`}function dj({animeId:t,episode:e,animeTitle:n}){const{user:r}=rr(),[i,s]=R.useState([]),[o,a]=R.useState(!0),[u,d]=R.useState("newest"),[f,m]=R.useState(""),[g,I]=R.useState(!1),[C,k]=R.useState(""),[P,E]=R.useState(!1);R.useEffect(()=>{if(!tr){a(!1);return}a(!0);const j=iI(t,D=>{s(D),a(!1)});return()=>j()},[t]);const _=R.useMemo(()=>{const j=[...i];return u==="newest"&&j.sort((D,x)=>{var y,T;return(((y=x.createdAt)==null?void 0:y.seconds)||0)-(((T=D.createdAt)==null?void 0:T.seconds)||0)}),u==="oldest"&&j.sort((D,x)=>{var y,T;return(((y=D.createdAt)==null?void 0:y.seconds)||0)-(((T=x.createdAt)==null?void 0:T.seconds)||0)}),u==="top"&&j.sort((D,x)=>(x.likeCount||0)-(D.likeCount||0)),j},[i,u]),S=async()=>{if(!r){E(!0);return}if(f.trim()){I(!0),k("");try{await eI({animeId:t,episode:e,user:r,text:f.trim()}),m("")}catch(j){k(j.message||"Failed to post comment.")}finally{I(!1)}}},O=i.length+i.reduce((j,D)=>j+(D.replyCount||0),0);return c.jsxs("section",{className:"comments",children:[c.jsxs("div",{className:"comments-head",children:[c.jsxs("div",{children:[c.jsx("h2",{children:"The Anime Community"}),c.jsxs("p",{className:"muted",children:["Discuss ",n,e?` — Episode ${e}`:""]})]}),c.jsxs("span",{className:"chip",children:[c.jsx(yb,{size:14})," ",O," Comments"]})]}),c.jsxs("div",{className:"comments-toolbar",children:[c.jsxs("button",{className:"ghost-link",type:"button",children:[c.jsx(ob,{size:14})," Rules"]}),c.jsx("button",{className:"ghost-link",type:"button",children:"FAQ"}),c.jsx("div",{className:"spacer"}),c.jsxs("label",{className:"sort-label",children:["Sort by:",c.jsxs("select",{value:u,onChange:j=>d(j.target.value),children:[c.jsx("option",{value:"newest",children:"Newest"}),c.jsx("option",{value:"oldest",children:"Oldest"}),c.jsx("option",{value:"top",children:"Top"})]})]})]}),!tr&&c.jsxs("div",{className:"notice",children:["Firebase isn't configured. Add your keys to ",c.jsx("code",{children:".env"})," to enable comments."]}),c.jsx("div",{className:"comment-editor glass",children:r?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"editor-user",children:[c.jsx("div",{className:"avatar-sm",children:r.photoURL?c.jsx("img",{src:r.photoURL,alt:""}):(r.displayName||"U")[0].toUpperCase()}),c.jsx("span",{children:r.displayName||"User"})]}),c.jsx("textarea",{placeholder:"Share your thoughts...",value:f,onChange:j=>m(j.target.value),rows:3,maxLength:3e3}),C&&c.jsx("div",{className:"error",children:C}),c.jsxs("div",{className:"editor-actions",children:[c.jsxs("span",{className:"muted-2",children:[f.length," / 3000"]}),c.jsxs("button",{className:"btn primary",onClick:S,disabled:g||!f.trim(),children:[g&&c.jsx(xn,{size:14,className:"spin"})," Post Comment"]})]})]}):c.jsxs("div",{className:"logged-out",children:[c.jsx("p",{children:"Log in to comment"}),c.jsxs("div",{className:"btn-row",children:[c.jsxs("button",{className:"btn",onClick:()=>E(!0),children:[c.jsx(hE,{size:14})," Log In"]}),c.jsxs("button",{className:"btn primary",onClick:()=>E(!0),children:[c.jsx(yE,{size:14})," Sign Up"]})]})]})}),o?c.jsxs("div",{className:"loading-row",children:[c.jsx(xn,{size:20,className:"spin"})," Loading comments…"]}):_.length===0?c.jsx("div",{className:"empty-state",children:"No comments yet. Be the first to share your thoughts."}):c.jsx("div",{className:"comment-list",children:_.map(j=>c.jsx(fI,{comment:j,animeId:t,user:r,onLike:async()=>{if(!r){E(!0);return}try{await Wg({animeId:t,commentId:j.id,uid:r.uid})}catch(D){console.warn(D)}},onEdit:async D=>{await tI(t,j.id,D)},onDelete:async()=>{confirm("Delete this comment?")&&await nI(t,j.id)}},j.id))}),c.jsx(cu,{open:P,onClose:()=>E(!1)}),c.jsx("style",{children:`
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
      `})]})}function hj({animeId:t,totalEpisodes:e,currentEpisode:n}){const[r,i]=R.useState(""),s=R.useMemo(()=>{const a=Number(e)||0;return a?Array.from({length:a},(u,d)=>d+1):[]},[e]),o=R.useMemo(()=>r.trim()?s.filter(a=>String(a).includes(r.trim())):s,[s,r]);return c.jsxs("div",{className:"episode-sidebar glass",children:[c.jsx("div",{className:"ep-header",children:c.jsxs("div",{className:"ep-range",children:[c.jsx(mb,{size:13}),c.jsx("span",{children:s.length?`1 – ${s.length}`:"No episodes"})]})}),c.jsxs("div",{className:"ep-search",children:[c.jsx(Qc,{size:14}),c.jsx("input",{value:r,onChange:a=>i(a.target.value),placeholder:"Filter episodes…","aria-label":"Filter episodes"})]}),s.length===0?c.jsx("p",{className:"ep-empty muted",children:"YumeList doesn't have an episode count for this title yet."}):c.jsxs("div",{className:"ep-grid",role:"list",children:[o.map(a=>c.jsx(Ne,{to:`/watch/${t}/${a}`,role:"listitem",className:`ep-btn ${a===Number(n)?"active":""}`,"aria-current":a===Number(n)?"page":void 0,children:a},a)),o.length===0&&c.jsx("p",{className:"ep-empty muted",children:"No matching episodes."})]}),c.jsx("style",{children:`
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
      `})]})}function fj({providerId:t,anilistId:e,episode:n,language:r}){const[i,s]=R.useState({url:null,status:"idle",error:null,source:null}),o=R.useRef(null),a=R.useRef(new Map);return R.useEffect(()=>{if(!e||!n)return;o.current&&o.current.abort();const u=new AbortController;o.current=u;const d=oj(t);return s({url:null,status:"loading",error:null,source:null}),(async()=>{try{let f=null;if(d.id==="megaplay"){const g=a.current.get(String(e));if(g)f=k0(g,n);else try{const I=await rj(e,{signal:u.signal});a.current.set(String(e),I),f=k0(I,n)}catch(I){console.warn("Anikoto lookup failed:",I.message)}}if(u.signal.aborted)return;const m=d.buildUrl({anilistId:e,episode:n,language:r,anikotoEpisode:f});if(!m){s({url:null,status:"error",error:`No source available on ${d.label} for episode ${n}. Try the other server.`,source:d.id});return}s({url:m,status:"ready",error:null,source:d.id})}catch(f){if(f.name==="AbortError")return;s({url:null,status:"error",error:f.message,source:d.id})}})(),()=>u.abort()},[t,e,n,r]),i}const Ju={accent:"#a78bfa",reducedMotion:!1,autoplay:!0,autoNext:!0,subtitleLang:"en",streamProvider:"megaplay",streamLanguage:"sub"},pI=R.createContext(null);function pj({children:t}){const[e,n]=R.useState(()=>{try{const s=localStorage.getItem("hoshii:settings");return s?{...Ju,...JSON.parse(s)}:Ju}catch{return Ju}});R.useEffect(()=>{localStorage.setItem("hoshii:settings",JSON.stringify(e)),document.documentElement.style.setProperty("--accent",e.accent),document.documentElement.style.setProperty("--accent-soft",mj(e.accent,.15))},[e]);const r=s=>n(o=>({...o,...s})),i=()=>n(Ju);return c.jsx(pI.Provider,{value:{settings:e,update:r,reset:i},children:t})}function mj(t,e){const n=t.replace("#",""),r=parseInt(n.length===3?n.split("").map(a=>a+a).join(""):n,16),i=r>>16&255,s=r>>8&255,o=r&255;return`rgba(${i},${s},${o},${e})`}function mI(){const t=R.useContext(pI);if(!t)throw new Error("useSettings must be used within SettingsProvider");return t}function C0(){var N,M,b,Ke,Xe,Xt,ht,q,ee,ne,we;const{animeId:t,episode:e}=eE(),n=jr(),{user:r}=rr(),{settings:i,update:s}=mI(),{addEntry:o}=Hg(),[a,u]=R.useState(null),[d,f]=R.useState(!0),[m,g]=R.useState(null),[I,C]=R.useState(!1),k=Number(e||1),P=i.streamLanguage||"sub",E=i.streamProvider||"megaplay";R.useEffect(()=>{let X=!0;return f(!0),g(null),Fg(t,{onImporting:pe=>X&&C(pe)}).then(pe=>{X&&(u(pe),f(!1))}).catch(pe=>{X&&(g(pe),f(!1))}),()=>{X=!1}},[t]);const _=fj({providerId:E,anilistId:a==null?void 0:a.anilistId,episode:k,language:P});if(d)return c.jsxs("div",{className:"container page",children:[c.jsx(xn,{size:32,className:"spin"}),I&&c.jsx("p",{className:"muted",children:"Adding this anime to YumeList… this can take a few seconds."})]});if(m)return c.jsx("div",{className:"container page",children:c.jsxs("div",{className:"empty-state",children:["Failed to load: ",m.message]})});if(!a)return null;const S=((N=a.title)==null?void 0:N.english)||((M=a.title)==null?void 0:M.userPreferred)||((b=a.title)==null?void 0:b.romaji),O=a.episodes||0,j=hI.sanitize(a.description||""),D=(((Ke=a.recommendations)==null?void 0:Ke.nodes)||[]).map(X=>X.mediaRecommendation).filter(Boolean),x=(((Xe=a.relations)==null?void 0:Xe.edges)||[]).map(X=>X.node).filter(Boolean),y=(Xt=a.externalLinks)==null?void 0:Xt.find(X=>X.site==="MyAnimeList"),T=async(X,pe)=>{var J,Je;X&&await o({animeId:a.id,title:S,episode:k,position:X,duration:pe||0,image:((J=a.coverImage)==null?void 0:J.extraLarge)||((Je=a.coverImage)==null?void 0:Je.large),provider:E,language:P})},A=()=>{i.autoNext&&(!O||k<O)&&n(`/watch/${a.id}/${k+1}`)};return c.jsxs("div",{className:"page watch",children:[c.jsxs("div",{className:"container watch-grid",children:[c.jsxs("div",{className:"watch-main",children:[c.jsxs("div",{className:"watch-title-bar",children:[c.jsxs("div",{children:[c.jsx("h1",{children:S}),c.jsxs("p",{className:"muted",children:["Episode ",k,O?` of ${O}`:""]})]}),c.jsx(aj,{providerId:E,language:P,status:_.status,onProviderChange:X=>s({streamProvider:X}),onLanguageChange:X=>s({streamLanguage:X})})]}),c.jsx(JO,{url:_.url,title:`${S} — Episode ${k}`,onProgress:T,onComplete:A}),_.error&&_.status==="error"&&c.jsxs("div",{className:"stream-warning",children:[c.jsx(sb,{size:16}),c.jsx("span",{children:_.error})]}),c.jsxs("div",{className:"ep-nav-bar",children:[c.jsxs("button",{className:"btn ghost sm",disabled:k<=1,onClick:()=>n(`/watch/${a.id}/${k-1}`),children:[c.jsx(Bl,{size:14})," Previous Episode"]}),c.jsxs("button",{className:"btn ghost sm",disabled:O?k>=O:!1,onClick:()=>n(`/watch/${a.id}/${k+1}`),children:["Next Episode ",c.jsx(Go,{size:14})]})]}),c.jsxs("div",{className:"anime-info-card glass",children:[c.jsx("img",{src:(ht=a.coverImage)==null?void 0:ht.extraLarge,alt:S}),c.jsxs("div",{className:"anime-info-body",children:[c.jsx("h2",{children:S}),((q=a.title)==null?void 0:q.native)&&c.jsx("p",{className:"native",children:a.title.native}),c.jsx("div",{className:"genre-list",children:(a.genres||[]).map(X=>c.jsx("span",{className:"chip",children:X},X))}),c.jsx("div",{className:"description",dangerouslySetInnerHTML:{__html:j}}),c.jsxs("div",{className:"info-grid",children:[c.jsx(Zr,{label:"Format",value:a.format}),c.jsx(Zr,{label:"Season",value:a.season&&a.seasonYear?`${a.season} ${a.seasonYear}`:null}),c.jsx(Zr,{label:"Status",value:(ee=a.status)==null?void 0:ee.replace("_"," ")}),c.jsx(Zr,{label:"Episodes",value:a.episodes}),c.jsx(Zr,{label:"Score",value:a.averageScore?`${a.averageScore} / 100`:null}),c.jsx(Zr,{label:"Duration",value:a.duration?`${a.duration} min`:null}),c.jsx(Zr,{label:"Studios",value:(((ne=a.studios)==null?void 0:ne.nodes)||[]).map(X=>X.name).join(", ")}),c.jsx(Zr,{label:"Country",value:a.countryOfOrigin})]}),c.jsxs("div",{className:"actions-row",children:[((we=a.trailer)==null?void 0:we.id)&&a.trailer.site==="youtube"&&c.jsxs("a",{className:"btn sm",href:`https://www.youtube.com/watch?v=${a.trailer.id}`,target:"_blank",rel:"noreferrer",children:[c.jsx(cE,{size:14})," Trailer"]}),c.jsxs("button",{className:"btn sm",onClick:()=>r?zg(r.uid,a,"WATCHING"):null,disabled:!r,children:[c.jsx(pE,{size:14})," Watchlist"]}),y&&c.jsxs("a",{className:"btn sm",href:y.url,target:"_blank",rel:"noreferrer",children:[c.jsx(Ab,{size:14})," MyAnimeList"]})]})]})]}),c.jsx(dj,{animeId:a.id,episode:k,animeTitle:S})]}),c.jsxs("aside",{className:"watch-side",children:[c.jsx(hj,{animeId:a.id,totalEpisodes:O,currentEpisode:k}),c.jsx(P0,{title:"Related Anime",children:(x.length?x:D).slice(0,8).map(X=>c.jsx(md,{anime:X,showMeta:!1},X.id))}),c.jsx(P0,{title:"Recommendations",children:D.slice(0,8).map(X=>c.jsx(md,{anime:X,showMeta:!1},X.id))})]})]}),c.jsx("style",{children:`
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
      `})]})}function Zr({label:t,value:e}){return c.jsxs("div",{className:"info-cell",children:[c.jsx("span",{className:"lbl",children:t}),c.jsx("span",{className:"val",children:e||"—"})]})}function P0({title:t,children:e}){return c.jsxs("div",{className:"side-panel glass",children:[c.jsx("h3",{children:t}),c.jsx("div",{className:"side-grid",children:e}),c.jsx("style",{children:`
        .side-panel { border-radius: var(--radius); padding: 14px; }
        .side-panel h3 {
          margin: 0 0 12px; font-size: 13px; letter-spacing: 0.05em;
          text-transform: uppercase; color: var(--text-dim);
        }
        .side-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
      `})]})}const N0=[{key:"TRENDING",label:"Trending",fn:pd},{key:"POPULAR",label:"Popular",fn:zT},{key:"TOP",label:"Highest Rated",fn:$T},{key:"NEWEST",label:"Newest",fn:BT}];function gj(){var m;const[t,e]=sE(),[n,r]=R.useState(t.get("sort")||"TRENDING"),[i,s]=R.useState(Number(t.get("page")||1)),[o,a]=R.useState(null),[u,d]=R.useState(!0);R.useEffect(()=>{const g=new URLSearchParams;n!=="TRENDING"&&g.set("sort",n),i>1&&g.set("page",String(i)),e(g)},[n,i]),R.useEffect(()=>{var C;let g=!0;return d(!0),(((C=N0.find(k=>k.key===n))==null?void 0:C.fn)||pd)(i,30).then(k=>{g&&(a(k),d(!1))}).catch(()=>{g&&d(!1)}),()=>{g=!1}},[n,i]);const f=((m=o==null?void 0:o.pageInfo)==null?void 0:m.lastPage)||1;return c.jsxs("div",{className:"page",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"search-head",children:[c.jsx("h1",{children:"Trending"}),c.jsx("div",{className:"tabs",children:N0.map(g=>c.jsx("button",{className:g.key===n?"active":"",onClick:()=>{r(g.key),s(1)},children:g.label},g.key))})]}),c.jsx(nh,{anime:(o==null?void 0:o.media)||[],loading:u}),f>1&&c.jsxs("div",{className:"pagination",children:[c.jsxs("button",{className:"btn ghost",disabled:i<=1,onClick:()=>s(g=>g-1),children:[c.jsx(Bl,{size:14})," Prev"]}),c.jsxs("span",{className:"muted",children:["Page ",i," / ",f]}),c.jsxs("button",{className:"btn ghost",disabled:i>=f,onClick:()=>s(g=>g+1),children:["Next ",c.jsx(Go,{size:14})]})]})]}),c.jsx("style",{children:`
        .search-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; margin-bottom: 20px; }
        .search-head h1 { margin: 0; font-size: 28px; }
        .pagination { display: flex; align-items: center; justify-content: center; gap: 14px; margin-top: 32px; }
      `})]})}const La=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function yj(){const[t,e]=R.useState(null),[n,r]=R.useState(!0),[i,s]=R.useState(new Date().getDay());R.useEffect(()=>{let a=!0;r(!0);const u=Math.floor(Date.now()/1e3),d=u+60*60*24*7;return tO({perPage:100,airingAtGreater:u,airingAtLesser:d}).then(f=>{a&&(e(f),r(!1))}).catch(()=>{a&&r(!1)}),()=>{a=!1}},[]);const o=R.useMemo(()=>{const a=new Map;return La.forEach(u=>a.set(u,[])),((t==null?void 0:t.airingSchedules)||[]).forEach(u=>{const d=new Date(u.airingAt*1e3),f=La[d.getDay()];a.get(f).push(u)}),a},[t]);return c.jsxs("div",{className:"page",children:[c.jsxs("div",{className:"container",children:[c.jsx("div",{className:"search-head",children:c.jsxs("div",{children:[c.jsx("h1",{children:"Airing Schedule"}),c.jsx("p",{className:"muted",children:"Times shown in your local timezone."})]})}),c.jsx("div",{className:"day-tabs",children:La.map((a,u)=>c.jsxs("button",{className:u===i?"active":"",onClick:()=>s(u),children:[a,c.jsx("span",{className:"count",children:(o.get(a)||[]).length})]},a))}),n?c.jsxs("div",{className:"loading-row",children:[c.jsx(xn,{size:24,className:"spin"})," Loading schedule…"]}):c.jsxs("div",{className:"schedule-list",children:[(o.get(La[i])||[]).map(a=>{var f;const u=new Date(a.airingAt*1e3).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),d=a.media.title.english||a.media.title.userPreferred||a.media.title.romaji;return c.jsxs(Ne,{to:`/anime/${a.media.id}`,className:"schedule-row",children:[c.jsxs("span",{className:"time",children:[c.jsx(uE,{size:12})," ",u]}),c.jsx("img",{src:(f=a.media.coverImage)==null?void 0:f.large,alt:"",loading:"lazy"}),c.jsxs("div",{className:"info",children:[c.jsx("span",{className:"title",children:d}),c.jsxs("span",{className:"muted",children:["Episode ",a.episode," · ",a.media.format]})]}),c.jsxs("span",{className:"ep-badge",children:["EP ",a.episode]})]},a.id)}),(o.get(La[i])||[]).length===0&&c.jsx("div",{className:"empty-state",children:"No airings this day."})]})]}),c.jsx("style",{children:`
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
      `})]})}function vj(){var O,j;const{user:t}=rr(),[e,n]=R.useState(null),[r,i]=R.useState([]),[s,o]=R.useState([]),[a,u]=R.useState(!0),[d,f]=R.useState(!1),[m,g]=R.useState(!1),[I,C]=R.useState(""),[k,P]=R.useState(""),[E,_]=R.useState(!1);if(R.useEffect(()=>{if(!t){u(!1);return}u(!0),Promise.all([kL(t.uid),Bg(t.uid).catch(()=>[]),QT(t.uid).catch(()=>[])]).then(([D,x,y])=>{n(D),i(x),o(y),C(t.displayName||""),P(t.photoURL||"")}).finally(()=>u(!1))},[t]),!t)return c.jsxs("div",{className:"page container",children:[c.jsxs("div",{className:"empty-state",children:[c.jsx("h2",{children:"Profile"}),c.jsx("p",{children:"Sign in to view your profile."}),c.jsx("button",{className:"btn primary",onClick:()=>f(!0),children:"Sign In"})]}),c.jsx(cu,{open:d,onClose:()=>f(!1)})]});const S=async()=>{_(!0);try{await AL(t,{displayName:I,photoURL:k||null}),g(!1)}catch(D){console.warn(D)}_(!1)};return c.jsxs("div",{className:"page container",children:[a?c.jsxs("div",{className:"loading-row",children:[c.jsx(xn,{size:24,className:"spin"})," Loading profile…"]}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"profile-head glass",children:[c.jsx("div",{className:"avatar-lg",children:t.photoURL?c.jsx("img",{src:t.photoURL,alt:""}):(t.displayName||"U")[0].toUpperCase()}),c.jsx("div",{className:"profile-info",children:m?c.jsxs(c.Fragment,{children:[c.jsx("input",{value:I,onChange:D=>C(D.target.value),placeholder:"Display name"}),c.jsx("input",{value:k,onChange:D=>P(D.target.value),placeholder:"Avatar image URL"}),c.jsxs("div",{className:"btn-row",children:[c.jsxs("button",{className:"btn primary",onClick:S,disabled:E,children:[E&&c.jsx(xn,{size:14,className:"spin"})," ",c.jsx(xb,{size:14})," Save"]}),c.jsx("button",{className:"btn ghost",onClick:()=>g(!1),children:"Cancel"})]})]}):c.jsxs(c.Fragment,{children:[c.jsx("h1",{children:t.displayName||"User"}),c.jsx("p",{className:"muted",children:t.email}),(e==null?void 0:e.createdAt)&&c.jsxs("p",{className:"muted-2",children:["Joined ",((j=(O=e.createdAt).toDate)==null?void 0:j.call(O).toLocaleDateString())||"recently"]}),c.jsx("button",{className:"btn ghost sm",onClick:()=>g(!0),children:"Edit Profile"})]})})]}),c.jsxs("section",{style:{marginTop:32},children:[c.jsx("div",{className:"section-head",children:c.jsx("h2",{children:"Favorites"})}),s.length===0?c.jsx("div",{className:"empty-state",children:"No favorites yet."}):c.jsx("div",{className:"mini-grid",children:s.map(D=>c.jsxs(Ne,{to:`/anime/${D.id}`,className:"mini-card",children:[c.jsx("img",{src:D.coverImage,alt:D.title}),c.jsx("span",{children:D.title})]},D.id))})]}),c.jsxs("section",{style:{marginTop:32},children:[c.jsx("div",{className:"section-head",children:c.jsx("h2",{children:"Watchlist"})}),r.length===0?c.jsx("div",{className:"empty-state",children:"Your watchlist is empty."}):c.jsx("div",{className:"mini-grid",children:r.map(D=>c.jsxs(Ne,{to:`/anime/${D.id}`,className:"mini-card",children:[c.jsx("img",{src:D.coverImage,alt:D.title}),c.jsx("span",{children:D.title})]},D.id))})]})]}),c.jsx("style",{children:`
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
      `})]})}function _j(){const{user:t}=rr(),[e,n]=R.useState([]),[r,i]=R.useState(!0),[s,o]=R.useState(!1);if(R.useEffect(()=>{if(!t){i(!1);return}i(!0),Bg(t.uid).then(n).catch(()=>{}).finally(()=>i(!1))},[t]),!t)return c.jsxs("div",{className:"page container",children:[c.jsxs("div",{className:"empty-state",children:[c.jsx("h2",{children:"Your Watchlist"}),c.jsx("p",{children:"Sign in to save and track anime."}),c.jsx("button",{className:"btn primary",onClick:()=>o(!0),children:"Sign In"})]}),c.jsx(cu,{open:s,onClose:()=>o(!1)})]});const a=async u=>{await $g(t.uid,u),n(d=>d.filter(f=>f.id!==u))};return c.jsxs("div",{className:"page container",children:[c.jsx("h1",{children:"Your Watchlist"}),r?c.jsxs("div",{className:"loading-row",children:[c.jsx(xn,{size:24,className:"spin"})," Loading…"]}):e.length===0?c.jsxs("div",{className:"empty-state",children:[c.jsx("p",{children:"Your watchlist is empty."}),c.jsx(Ne,{className:"btn primary",to:"/search",children:"Browse Anime"})]}):c.jsx("div",{className:"watchlist-grid",children:e.map(u=>c.jsxs("div",{className:"watchlist-card",children:[c.jsxs(Ne,{to:`/anime/${u.id}`,children:[c.jsx("img",{src:u.coverImage,alt:u.title,loading:"lazy"}),c.jsxs("div",{className:"wc-info",children:[c.jsx("span",{className:"wc-title",children:u.title}),c.jsxs("span",{className:"muted",children:[u.format," · ",u.seasonYear," · ",u.status]})]})]}),c.jsx("button",{className:"wc-remove",onClick:()=>a(u.id),"aria-label":"Remove",children:c.jsx(gE,{size:14})})]},u.id))}),c.jsx("style",{children:`
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
      `})]})}function wj(){const{history:t,loading:e,removeEntry:n}=Hg();return c.jsxs("div",{className:"page container",children:[c.jsx("h1",{children:"Watch History"}),e?c.jsxs("div",{className:"loading-row",children:[c.jsx(xn,{size:24,className:"spin"})," Loading…"]}):t.length===0?c.jsxs("div",{className:"empty-state",children:[c.jsx("p",{children:"No watch history yet."}),c.jsx(Ne,{className:"btn primary",to:"/",children:"Browse Anime"})]}):c.jsx("div",{className:"history-grid",children:t.map(r=>{const i=r.duration?Math.min(100,r.position/r.duration*100):0;return c.jsxs("div",{className:"history-card",children:[c.jsxs(Ne,{to:`/watch/${r.animeId}/${r.episode}`,children:[c.jsxs("div",{className:"thumb",style:{backgroundImage:`url(${r.image})`},children:[c.jsxs("span",{className:"ep-badge",children:["EP ",r.episode]}),c.jsx("div",{className:"progress",children:c.jsx("div",{className:"progress-fill",style:{width:`${i}%`}})})]}),c.jsx("p",{className:"title",children:r.title}),c.jsxs("p",{className:"meta",children:[D0(r.position)," / ",D0(r.duration)]})]}),c.jsx("button",{className:"remove",onClick:()=>n(r.animeId,r.episode),"aria-label":"Remove",children:c.jsx(Wl,{size:14})})]},r.id||`${r.animeId}-${r.episode}`)})}),c.jsx("style",{children:`
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
      `})]})}function D0(t){if(!t||!isFinite(t))return"0:00";const e=Math.floor(t/60),n=Math.floor(t%60).toString().padStart(2,"0");return`${e}:${n}`}const xj=[{name:"Lavender",value:"#a78bfa"},{name:"Cyan",value:"#67e8f9"},{name:"Blue",value:"#60a5fa"},{name:"Pink",value:"#f472b6"},{name:"Green",value:"#4ade80"},{name:"Orange",value:"#fb923c"}];function Ej(){const{settings:t,update:e,reset:n}=mI(),{user:r,signOut:i}=rr(),s=jr(),o=Array.from(new Set(Si.flatMap(a=>a.languages)));return c.jsxs("div",{className:"page container settings",children:[c.jsx("h1",{children:"Settings"}),c.jsxs("section",{className:"settings-card glass",children:[c.jsx("h2",{children:"Appearance"}),c.jsxs("div",{className:"setting-row",children:[c.jsxs("div",{children:[c.jsx("label",{children:"Accent color"}),c.jsx("p",{className:"muted",children:"Choose the highlight color used throughout Hoshii."})]}),c.jsx("div",{className:"accent-swatches",children:xj.map(a=>c.jsx("button",{className:`swatch ${t.accent===a.value?"active":""}`,style:{background:a.value},onClick:()=>e({accent:a.value}),"aria-label":a.name},a.value))})]}),c.jsxs("div",{className:"setting-row",children:[c.jsxs("div",{children:[c.jsx("label",{children:"Reduced motion"}),c.jsx("p",{className:"muted",children:"Disable animations and transitions."})]}),c.jsx(uf,{checked:t.reducedMotion,onChange:a=>e({reducedMotion:a})})]})]}),c.jsxs("section",{className:"settings-card glass",children:[c.jsx("h2",{children:"Playback"}),c.jsxs("div",{className:"setting-row",children:[c.jsxs("div",{children:[c.jsx("label",{children:"Autoplay"}),c.jsx("p",{className:"muted",children:"Start playing as soon as the page loads."})]}),c.jsx(uf,{checked:t.autoplay,onChange:a=>e({autoplay:a})})]}),c.jsxs("div",{className:"setting-row",children:[c.jsxs("div",{children:[c.jsx("label",{children:"Auto Next"}),c.jsx("p",{className:"muted",children:"Automatically continue to the next episode."})]}),c.jsx(uf,{checked:t.autoNext,onChange:a=>e({autoNext:a})})]}),c.jsxs("div",{className:"setting-row",children:[c.jsxs("div",{children:[c.jsx("label",{children:"Subtitle Language"}),c.jsx("p",{className:"muted",children:"Default subtitle track when available."})]}),c.jsxs("select",{value:t.subtitleLang,onChange:a=>e({subtitleLang:a.target.value}),children:[c.jsx("option",{value:"en",children:"English"}),c.jsx("option",{value:"es",children:"Spanish"}),c.jsx("option",{value:"fr",children:"French"}),c.jsx("option",{value:"off",children:"Off"})]})]})]}),c.jsxs("section",{className:"settings-card glass",children:[c.jsx("h2",{children:"Streaming"}),c.jsxs("div",{className:"setting-row",children:[c.jsxs("div",{children:[c.jsx("label",{children:"Default server"}),c.jsx("p",{className:"muted",children:"Preferred embed provider on the watch page."})]}),c.jsx("select",{value:t.streamProvider||"megaplay",onChange:a=>e({streamProvider:a.target.value}),children:Si.map(a=>c.jsx("option",{value:a.id,children:a.label},a.id))})]}),c.jsxs("div",{className:"setting-row",children:[c.jsxs("div",{children:[c.jsx("label",{children:"Default language"}),c.jsx("p",{className:"muted",children:"Sub or dub, when the selected server supports it."})]}),c.jsx("select",{value:t.streamLanguage||"sub",onChange:a=>e({streamLanguage:a.target.value}),children:o.map(a=>c.jsx("option",{value:a,children:a.charAt(0).toUpperCase()+a.slice(1)},a))})]}),c.jsxs("div",{className:"setting-row",children:[c.jsxs("div",{children:[c.jsx("label",{children:"Available servers"}),c.jsx("p",{className:"muted",children:"Hoshii embeds third-party players. It never hosts or proxies video."})]}),c.jsx("div",{className:"server-pills",children:Si.map(a=>c.jsxs("span",{className:"chip",children:[a.label,c.jsx("span",{className:"langs",children:a.languages.map(u=>u.toUpperCase()).join(" · ")})]},a.id))})]})]}),c.jsxs("section",{className:"settings-card glass",children:[c.jsx("h2",{children:"Data"}),c.jsxs("div",{className:"setting-row",children:[c.jsxs("div",{children:[c.jsx("label",{children:"Clear anime data cache"}),c.jsx("p",{className:"muted",children:"Forces the next page load to re-fetch all anime data from YumeList. Cached entries are otherwise refreshed automatically in the background."})]}),c.jsxs("button",{className:"btn",onClick:()=>{OL(),alert("Anime data cache cleared. Reload to fetch fresh data.")},children:[c.jsx(Pv,{size:14})," Clear"]})]}),c.jsxs("div",{className:"setting-row",children:[c.jsxs("div",{children:[c.jsx("label",{children:"Clear local cache"}),c.jsx("p",{className:"muted",children:"Removes locally stored settings, cache, and logged-out watch history."})]}),c.jsxs("button",{className:"btn",onClick:()=>{confirm("Clear local cache and preferences?")&&(localStorage.clear(),n())},children:[c.jsx(Pv,{size:14})," Clear"]})]}),r&&c.jsxs("div",{className:"setting-row",children:[c.jsxs("div",{children:[c.jsx("label",{children:"Log out"}),c.jsx("p",{className:"muted",children:"Sign out of your Hoshii account."})]}),c.jsxs("button",{className:"btn",onClick:async()=>{await i(),s("/")},children:[c.jsx(fE,{size:14})," Log Out"]})]})]}),c.jsx("style",{children:`
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
      `})]})}function uf({checked:t,onChange:e}){return c.jsxs("button",{className:`toggle ${t?"on":""}`,onClick:()=>e(!t),role:"switch","aria-checked":t,children:[c.jsx("span",{className:"knob"}),c.jsx("style",{children:`
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
      `})]})}class Tj extends R.Component{constructor(){super(...arguments);fy(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}componentDidCatch(n,r){console.error("ErrorBoundary",n,r)}render(){var n;return this.state.error?c.jsxs("div",{className:"container",style:{padding:80},children:[c.jsx("h1",{children:"Something went wrong"}),c.jsx("p",{className:"muted",children:String(((n=this.state.error)==null?void 0:n.message)||this.state.error)}),c.jsx("button",{className:"btn primary",onClick:()=>location.reload(),children:"Reload"})]}):this.props.children}}function Ij(){return c.jsx(Tj,{children:c.jsx(cO,{children:c.jsxs(Uk,{children:[c.jsx(en,{path:"/",element:c.jsx(pO,{})}),c.jsx(en,{path:"/search",element:c.jsx(gO,{})}),c.jsx(en,{path:"/anime/:id",element:c.jsx(XO,{})}),c.jsx(en,{path:"/watch/:animeId",element:c.jsx(C0,{})}),c.jsx(en,{path:"/watch/:animeId/:episode",element:c.jsx(C0,{})}),c.jsx(en,{path:"/trending",element:c.jsx(gj,{})}),c.jsx(en,{path:"/schedule",element:c.jsx(yj,{})}),c.jsx(en,{path:"/profile",element:c.jsx(vj,{})}),c.jsx(en,{path:"/watchlist",element:c.jsx(_j,{})}),c.jsx(en,{path:"/history",element:c.jsx(wj,{})}),c.jsx(en,{path:"/settings",element:c.jsx(Ej,{})}),c.jsx(en,{path:"*",element:c.jsx(Mk,{to:"/",replace:!0})})]})})})}cf.createRoot(document.getElementById("root")).render(c.jsx(W0.StrictMode,{children:c.jsx(Kk,{children:c.jsx(pj,{children:c.jsx(RL,{children:c.jsx(Ij,{})})})})}));
