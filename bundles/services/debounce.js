/*!
 * @momentum-ui/angularjs v13.2.2 (http://momentum.design)
 * Cisco Momentum UI AngularJS 1.X components
 * Copyright 2013-2023 Cisco Systems, Inc.
 */
(function webpackUniversalModuleDefinition(root,factory){if(typeof exports==="object"&&typeof module==="object")module.exports=factory(require("angular"));else if(typeof define==="function"&&define.amd)define(["angular"],factory);else{var a=typeof exports==="object"?factory(require("angular")):factory(root["angular"]);for(var i in a)(typeof exports==="object"?exports:root)[i]=a[i]}})(window,function(__WEBPACK_EXTERNAL_MODULE__0__){return function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=173)}({0:function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE__0__},10:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var angular=__webpack_require__(0);var debounce_service_1=__webpack_require__(25);exports.default=angular.module("momentum.ui.debounce",[]).factory("$$debounce",debounce_service_1.$$debounce).name},173:function(module,exports,__webpack_require__){module.exports=__webpack_require__(10)},25:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.$$debounce=void 0;$$debounce.$inject=["$timeout"];function $$debounce($timeout){return function(callback,debounceTime){var timeoutPromise;return function(){var self=this;var args=Array.prototype.slice.call(arguments);if(timeoutPromise){$timeout.cancel(timeoutPromise)}timeoutPromise=$timeout(function(){callback.apply(self,args)},debounceTime)}}}exports.$$debounce=$$debounce}})});