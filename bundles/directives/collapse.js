/*!
 * @momentum-ui/angularjs v13.2.2 (http://momentum.design)
 * Cisco Momentum UI AngularJS 1.X components
 * Copyright 2013-2023 Cisco Systems, Inc.
 */
(function webpackUniversalModuleDefinition(root,factory){if(typeof exports==="object"&&typeof module==="object")module.exports=factory(require("angular"));else if(typeof define==="function"&&define.amd)define(["angular"],factory);else{var a=typeof exports==="object"?factory(require("angular")):factory(root["angular"]);for(var i in a)(typeof exports==="object"?exports:root)[i]=a[i]}})(window,function(__WEBPACK_EXTERNAL_MODULE__0__){return function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=158)}({0:function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE__0__},12:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.MdTransition=void 0;var angular=__webpack_require__(0);MdTransition.$inject=["$q","$timeout","$rootScope"];function MdTransition($q,$timeout,$rootScope){var $transition=function(element,trigger,options){options=options||{};var deferred=$q.defer();var endEventName=$transition[options.animation?"animationEndEventName":"transitionEndEventName"];var transitionEndHandler=function(event){$rootScope.$apply(function(){element.unbind(endEventName,transitionEndHandler);deferred.resolve(element)})};var transElement=document.createElement("trans");var transitionEndEventNames={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"};var animationEndEventNames={WebkitTransition:"webkitAnimationEnd",MozTransition:"animationend",OTransition:"oAnimationEnd",transition:"animationend"};function findEndEventName(endEventNames){for(var name_1 in endEventNames){if(transElement.style[name_1]!==undefined){return endEventNames[name_1]}}}this.transitionEndEventName=function(){findEndEventName(transitionEndEventNames)};this.animationEndEventName=function(){findEndEventName(animationEndEventNames)};if(endEventName){element.bind(endEventName,transitionEndHandler)}$timeout(function(){if(angular.isString(trigger)){element.addClass(trigger)}else if(angular.isFunction(trigger)){trigger(element)}else if(angular.isObject(trigger)){element.css(trigger)}if(!endEventName){deferred.resolve(element)}});deferred.promise.cancel=function(){if(endEventName){element.unbind(endEventName,transitionEndHandler)}deferred.reject("Transition cancelled")};return deferred.promise};return $transition}exports.MdTransition=MdTransition},158:function(module,exports,__webpack_require__){module.exports=__webpack_require__(8)},24:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.mdCollapse=void 0;mdCollapse.$inject=["$animate","$q","$parse","$injector"];function mdCollapse($animate,$q,$parse,$injector){var $animateCss=$injector.has("$animateCss")?$injector.get("$animateCss"):null;return{link:function(scope,element,attrs){var expandingExpr=$parse(attrs.expanding),expandedExpr=$parse(attrs.expanded),collapsingExpr=$parse(attrs.collapsing),collapsedExpr=$parse(attrs.collapsed);if(!scope.$eval(attrs.uibCollapse)){element.addClass("in").addClass("collapse").attr("aria-expanded",true).attr("aria-hidden",false).css({height:"auto"})}function expand(){if(element.hasClass("collapse")&&element.hasClass("in")){return}$q.resolve(expandingExpr(scope)).then(function(){element.removeClass("collapse").addClass("collapsing").attr("aria-expanded",true).attr("aria-hidden",false);if($animateCss){$animateCss(element,{addClass:"in",easing:"ease",to:{height:element[0].scrollHeight+"px"}}).start()["finally"](expandDone)}else{$animate.addClass(element,"in",{to:{height:element[0].scrollHeight+"px"}}).then(expandDone)}})}function expandDone(){element.removeClass("collapsing").addClass("collapse").css({height:"auto"});expandedExpr(scope)}function collapse(){if(!element.hasClass("collapse")&&!element.hasClass("in")){return collapseDone()}$q.resolve(collapsingExpr(scope)).then(function(){element.css({height:element[0].scrollHeight+"px"}).removeClass("collapse").addClass("collapsing").attr("aria-expanded",false).attr("aria-hidden",true);if($animateCss){$animateCss(element,{removeClass:"in",to:{height:"0"}}).start()["finally"](collapseDone)}else{$animate.removeClass(element,"in",{to:{height:"0"}}).then(collapseDone)}})}function collapseDone(){element.css({height:"0"});element.removeClass("collapsing").addClass("collapse");collapsedExpr(scope)}scope.$watch(attrs.collapse,function(shouldCollapse){if(shouldCollapse){collapse()}else{expand()}})}}}exports.mdCollapse=mdCollapse},6:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var angular=__webpack_require__(0);var transition_service_1=__webpack_require__(12);exports.default=angular.module("momentum.ui.transition",[]).factory("$transition",transition_service_1.MdTransition).name},8:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var angular=__webpack_require__(0);var collapse_directive_1=__webpack_require__(24);var transition_1=__webpack_require__(6);exports.default=angular.module("momentum.ui.collapse",[transition_1.default]).directive("collapse",collapse_directive_1.mdCollapse).name}})});