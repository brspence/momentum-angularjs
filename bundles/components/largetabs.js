/*!
 * @momentum-ui/angularjs v13.2.2 (http://momentum.design)
 * Cisco Momentum UI AngularJS 1.X components
 * Copyright 2013-2023 Cisco Systems, Inc.
 */
(function webpackUniversalModuleDefinition(root,factory){if(typeof exports==="object"&&typeof module==="object")module.exports=factory(require("angular"));else if(typeof define==="function"&&define.amd)define(["angular"],factory);else{var a=typeof exports==="object"?factory(require("angular")):factory(root["angular"]);for(var i in a)(typeof exports==="object"?exports:root)[i]=a[i]}})(window,function(__WEBPACK_EXTERNAL_MODULE__0__){return function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=136)}({0:function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE__0__},136:function(module,exports,__webpack_require__){module.exports=__webpack_require__(47)},47:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var angular=__webpack_require__(0);var largetabs_component_1=__webpack_require__(99);exports.default=angular.module("momentum.ui.largetabs",[]).controller("mdLargeTabsetCtrl",largetabs_component_1.mdLargeTabsetCtrl).directive("mdLargeTabset",largetabs_component_1.mdLargeTabset).directive("mdLargeTab",largetabs_component_1.mdLargeTab).directive("mdLargeTabHeadingTransclude",largetabs_component_1.mdLargeTabHeadingTransclude).directive("mdLargeTabContentTransclude",largetabs_component_1.mdLargeTabContentTransclude).name},99:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.mdLargeTabContentTransclude=exports.mdLargeTabHeadingTransclude=exports.mdLargeTab=exports.mdLargeTabset=exports.mdLargeTabsetCtrl=void 0;var angular=__webpack_require__(0);mdLargeTabsetCtrl.$inject=["$scope"];function mdLargeTabsetCtrl($scope){var vm=this;vm.tabs=[];vm.destroyed=false;vm.select=select;vm.addTab=addTab;vm.removeTab=removeTab;function select(selectedTab){angular.forEach(vm.tabs,function(tab){if(tab.active&&tab!==selectedTab){tab.active=false;tab.onDeselect()}});selectedTab.active=true;selectedTab.onSelect()}function addTab(tab){vm.tabs.push(tab);if(vm.tabs.length===1){tab.active=true}else if(tab.active){select(tab)}}function removeTab(tab){var index=vm.tabs.indexOf(tab);if(tab.active&&vm.tabs.length>1&&!vm.destroyed){var newActiveIndex=index===vm.tabs.length-1?index-1:index+1;select(vm.tabs[newActiveIndex])}vm.tabs.splice(index,1)}$scope.$on("$destroy",function(){vm.destroyed=true})}exports.mdLargeTabsetCtrl=mdLargeTabsetCtrl;function mdLargeTabset(){var mdLargeTabsetDirective={restrict:"EA",transclude:true,replace:true,scope:{type:"@",large:"=large",graytab:"=graytab"},controller:"mdLargeTabsetCtrl",controllerAs:"mdLargeTabset",bindToController:true,template:'\n      <div class="md-tab--mdLargeTabs"\n        ng-class="{\'md-tab--graytab\': mdLargeTabset.graytab, \'md-tab--largetabs\': mdLargeTabset.large, \'md-tab--justified\': justified}">\n        <ul class="md-tab__list" ng-transclude></ul>\n        <div class="md-tab__content">\n          <div class="md-tab__pane" ng-repeat="tab in mdLargeTabset.tabs" ng-class="{active: tab.active}" md-tab-content-transclude="tab">\n          </div>\n        </div>\n      </div>\n    ',link:link};function link(scope,element,attrs){scope.vertical=angular.isDefined(attrs.vertical)?scope.$parent.$eval(attrs.vertical):false;scope.justified=angular.isDefined(attrs.justified)?scope.$parent.$eval(attrs.justified):false}return mdLargeTabsetDirective}exports.mdLargeTabset=mdLargeTabset;mdLargeTab.$inject=["$parse"];function mdLargeTab($parse){var mdLargeTabDirective={require:"^mdLargeTabset",restrict:"EA",replace:true,template:'\n      <li class="md-tab__item" ng-class="{active: active, disabled: disabled}">\n        <a href ng-click="select()" md-tab-heading-transclude>{{mdLargeTabset.heading}}</a>\n      </li>\n    ',transclude:true,scope:{active:"=?",heading:"@",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},compile:function(elm,attrs,transclude){return function postLink(scope,elm,attrs,mdLargeTabset){scope.$watch("active",function(active){if(active){mdLargeTabset.select(scope)}});scope.disabled=false;if(attrs.disabled){scope.$parent.$watch($parse(attrs.disabled),function(value){scope.disabled=!!value})}scope.select=function(){if(!scope.disabled){scope.active=true}};mdLargeTabset.addTab(scope);scope.$on("$destroy",function(){mdLargeTabset.removeTab(scope)});scope.$transcludeFn=transclude}}};return mdLargeTabDirective}exports.mdLargeTab=mdLargeTab;function mdLargeTabHeadingTransclude(){var mdLargeTabHeadingTranscludeDirective={restrict:"A",require:"^mdLargeTab",link:link};function link(scope,elm,attrs,tabCtrl){scope.$watch("headingElement",function updateHeadingElement(heading){if(heading){elm.html("");elm.append(heading)}})}return mdLargeTabHeadingTranscludeDirective}exports.mdLargeTabHeadingTransclude=mdLargeTabHeadingTransclude;function mdLargeTabContentTransclude(){var mdLargeTabContentTranscludeDirective={restrict:"A",require:"^mdLargeTabset",link:link};function link(scope,elm,attrs){var tab=scope.$eval(attrs.mdLargeTabContentTransclude);tab.$transcludeFn(tab.$parent,function(contents){angular.forEach(contents,function(node){if(isTabHeading(node)){tab.headingElement=node}else{elm.append(node)}})})}function isTabHeading(node){return node.tagName&&(node.hasAttribute("md-tab-heading")||node.hasAttribute("data-md-tab-heading")||node.tagName.toLowerCase()==="md-tab-heading"||node.tagName.toLowerCase()==="data-md-tab-heading")}return mdLargeTabContentTranscludeDirective}exports.mdLargeTabContentTransclude=mdLargeTabContentTransclude}})});