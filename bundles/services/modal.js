/*!
 * @momentum-ui/angularjs v13.2.2 (http://momentum.design)
 * Cisco Momentum UI AngularJS 1.X components
 * Copyright 2013-2023 Cisco Systems, Inc.
 */
(function webpackUniversalModuleDefinition(root,factory){if(typeof exports==="object"&&typeof module==="object")module.exports=factory(require("angular"));else if(typeof define==="function"&&define.amd)define(["angular"],factory);else{var a=typeof exports==="object"?factory(require("angular")):factory(root["angular"]);for(var i in a)(typeof exports==="object"?exports:root)[i]=a[i]}})(window,function(__WEBPACK_EXTERNAL_MODULE__0__){return function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=176)}({0:function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE__0__},123:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.mdModal=exports.mdModalStack=exports.mdModalTransclude=exports.mdModalAnimationClass=exports.mdModalWindow=exports.mdModalBackdrop=void 0;var angular=__webpack_require__(0);var keyCodes_1=__webpack_require__(4);mdModalBackdrop.$inject=["$animate","$injector","$modalStack"];function mdModalBackdrop($animate,$injector,$modalStack){return{replace:true,template:'\n      <div\n        class="md-modal-bg"\n        modal-animation-class="fade"\n        modal-in-class="in"\n        ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n        ng-click="close($event)"\n        style="display: block;">\n      </div>\n    ',compile:function(tElement,tAttrs){tElement.addClass(tAttrs.backdropClass);return linkFn}};function linkFn(scope,element,attrs){if(attrs.modalInClass){$animate.addClass(element,attrs.modalInClass);scope.$on($modalStack.NOW_CLOSING_EVENT,function(e,setIsAsync){var done=setIsAsync();if(scope.modalOptions.animation){$animate.removeClass(element,attrs.modalInClass).then(done)}else{done()}})}}}exports.mdModalBackdrop=mdModalBackdrop;var modalTemplate='\n  <div\n    class="md-modal__backdrop fade in"\n    ng-style="{\'z-index\': 1051 + index*10}">\n    <div\n      role="dialog"\n      class="md-modal in"\n      tabindex="-1"\n      ng-class="modalClass"\n      id="{{modalId}}">\n      <div class="md-modal__content">\n        <div class="md-modal__flex-container" modal-transclude></div>\n      </div>\n    </div>\n  </div>\n';mdModalWindow.$inject=["$modalStack","$q","$animate","$animateCss","$document"];function mdModalWindow($modalStack,$q,$animate,$animateCss,$document){return{scope:{index:"@"},replace:true,transclude:true,template:function(tElement,tAttrs){return tAttrs.template||modalTemplate},link:function(scope,element,attrs){element.addClass(attrs.windowClass||"");element.addClass(attrs.windowTopClass||"");scope.modalId=attrs.modalId;scope.modalClass=attrs.modalClass;scope.close=function(evt){var modal=$modalStack.getTop();if(modal&&modal.value.backdrop&&modal.value.backdrop!=="static"&&evt.target===evt.currentTarget){evt.preventDefault();evt.stopPropagation();$modalStack.dismiss(modal.key,"backdrop click")}};element.on("click",scope.close);scope.$isRendered=true;var modalRenderDeferObj=$q.defer();attrs.$observe("modalRender",function(value){if(value==="true"){modalRenderDeferObj.resolve()}});modalRenderDeferObj.promise.then(function(){var animationPromise=null;if(attrs.modalInClass){animationPromise=$animateCss(element,{addClass:attrs.modalInClass}).start();scope.$on($modalStack.NOW_CLOSING_EVENT,function(e,setIsAsync){var done=setIsAsync();if($animateCss){$animateCss(element,{removeClass:attrs.modalInClass}).start().then(done)}else{$animate.removeClass(element,attrs.modalInClass).then(done)}})}$q.when(animationPromise).then(function(){var modal=$modalStack.getTop();if(modal){$modalStack.modalRendered(modal.key)}if(!($document[0].activeElement&&element[0].contains($document[0].activeElement))){var inputWithAutofocus=element[0].querySelector("[autofocus]");if(inputWithAutofocus){inputWithAutofocus.focus()}else{element[0].focus()}$(".md-modal").on("scroll touchmove",function(e){var _initialScrollDiff=80;var _finalScrollDiff=10;var _diffScroll=_initialScrollDiff-_finalScrollDiff;var _scrollTop=$(".md-modal").scrollTop();if(_scrollTop<=_initialScrollDiff+4){$(".md-modal__title").css({"margin-top":_diffScroll-_scrollTop})}else{$(".md-modal__title").css({"margin-top":4})}})}})})}}}exports.mdModalWindow=mdModalWindow;function mdModalAnimationClass(){return{compile:function(tElement,tAttrs){if(tAttrs.modalAnimation){tElement.addClass(tAttrs.modalAnimationClass)}}}}exports.mdModalAnimationClass=mdModalAnimationClass;function mdModalTransclude(){return{link:function(scope,element,attrs,controller,transclude){transclude(scope.$parent,function(clone){element.empty();element.append(clone)})}}}exports.mdModalTransclude=mdModalTransclude;mdModalStack.$inject=["$animate","$animateCss","$compile","$document","$rootScope","$q","$$multiMap","$$stackedMap"];function mdModalStack($animate,$animateCss,$compile,$document,$rootScope,$q,$$multiMap,$$stackedMap){var OPENED_MODAL_CLASS="modal-open";var backdropDomEl,backdropScope;var openedWindows=$$stackedMap.createNew();var openedClasses=$$multiMap.createNew();var $modalStack={NOW_CLOSING_EVENT:"modal.stack.now-closing",open:open,close:close,dismiss:dismiss,dismissAll:dismissAll,getTop:getTop,modalRendered:modalRendered,focusFirstFocusableElement:focusFirstFocusableElement,focusLastFocusableElement:focusLastFocusableElement,isModalFocused:isModalFocused,isFocusInFirstItem:isFocusInFirstItem,isFocusInLastItem:isFocusInLastItem,clearFocusListCache:clearFocusListCache,loadFocusElementList:loadFocusElementList};var focusableElementList;var focusIndex=0;var tabbableSelector="a[href], area[href], input:not([disabled]):visible, "+"button:not([disabled]):visible, select:not([disabled]), textarea:not([disabled]), "+"iframe, object, embed, *[tabindex], *[contenteditable=true]";function backdropIndex(){var topBackdropIndex=-1;var opened=openedWindows.keys();for(var i=0;i<opened.length;i++){if(openedWindows.get(opened[i]).value.backdrop){topBackdropIndex=i}}return topBackdropIndex}$rootScope.$watch(backdropIndex,function(newBackdropIndex){if(backdropScope){backdropScope.index=newBackdropIndex}});function removeModalWindow(modalInstance,elementToReceiveFocus){var modalWindow=openedWindows.get(modalInstance).value;var appendToElement=modalWindow.appendTo;openedWindows.remove(modalInstance);removeAfterAnimate(modalWindow.modalDomEl,modalWindow.modalScope,function(){var modalBodyClass=modalWindow.openedClass||OPENED_MODAL_CLASS;openedClasses.remove(modalBodyClass,modalInstance);appendToElement.toggleClass(modalBodyClass,openedClasses.hasKey(modalBodyClass));toggleTopWindowClass(true)},modalWindow.closedDeferred);checkRemoveBackdrop();if(elementToReceiveFocus&&elementToReceiveFocus.focus){elementToReceiveFocus.focus()}else if(appendToElement.focus){appendToElement.focus()}}function toggleTopWindowClass(toggleSwitch){var modalWindow;if(openedWindows.length()>0){modalWindow=openedWindows.top().value;modalWindow.modalDomEl.toggleClass(modalWindow.windowTopClass||"",toggleSwitch)}}function checkRemoveBackdrop(){if(backdropDomEl&&backdropIndex()===-1){var backdropScopeRef_1=backdropScope;removeAfterAnimate(backdropDomEl,backdropScope,function(){backdropScopeRef_1=null},null);backdropDomEl=undefined;backdropScope=undefined}}function removeAfterAnimate(domEl,scope,done,closedDeferred){var asyncDeferred;var doneAnimating;var asyncPromise=null;var setIsAsync=function(){if(!asyncDeferred){asyncDeferred=$q.defer();asyncPromise=asyncDeferred.promise}return function asyncDone(){asyncDeferred.resolve()}};scope.$broadcast($modalStack.NOW_CLOSING_EVENT,setIsAsync);return $q.when(asyncPromise).then(afterAnimating);function afterAnimating(){if(doneAnimating){return}doneAnimating=true;$animateCss(domEl,{event:"leave"}).start().then(function(){domEl.remove();if(closedDeferred){closedDeferred.resolve()}});scope.$destroy();if(done){done()}}}$document.on("keydown",keydownListener);$rootScope.$on("$destroy",function(){$document.off("keydown",keydownListener)});function keydownListener(evt){if(evt.isDefaultPrevented()){return evt}var modal=openedWindows.top();if(modal){switch(evt.which){case keyCodes_1.KeyCodes.ESCAPE:{if(modal.value.keyboard){evt.preventDefault();$rootScope.$apply(function(){$modalStack.dismiss(modal.key,"escape key press")})}break}case keyCodes_1.KeyCodes.TAB:{$modalStack.clearFocusListCache();$modalStack.loadFocusElementList();var focusChanged=false;if(evt.shiftKey){if($modalStack.isFocusInFirstItem(evt)||!$modalStack.isModalFocused(evt)){focusChanged=$modalStack.focusLastFocusableElement()}}else{if($modalStack.isFocusInLastItem(evt)||!$modalStack.isModalFocused(evt)){focusChanged=$modalStack.focusFirstFocusableElement()}}if(focusChanged){evt.preventDefault();evt.stopPropagation()}break}}}}function open(modalInstance,modal){var modalOpener=$document[0].activeElement,modalBodyClass=modal.openedClass||OPENED_MODAL_CLASS;toggleTopWindowClass(false);openedWindows.add(modalInstance,{deferred:modal.deferred,renderDeferred:modal.renderDeferred,closedDeferred:modal.closedDeferred,modalScope:modal.scope,backdrop:modal.backdrop,keyboard:modal.keyboard,openedClass:modal.openedClass,windowTopClass:modal.windowTopClass,animation:modal.animation,appendTo:modal.appendTo});openedClasses.put(modalBodyClass,modalInstance);var appendToElement=modal.appendTo,currBackdropIndex=backdropIndex();if(!appendToElement.length){throw new Error("appendTo element not found. Make sure that the element passed is in DOM.")}if(currBackdropIndex>=0&&!backdropDomEl){backdropScope=$rootScope.$new(true);backdropScope.modalOptions=modal;backdropScope.index=currBackdropIndex;backdropDomEl=angular.element('<div modal-backdrop="modal-backdrop"></div>');backdropDomEl.attr("backdrop-class",modal.backdropClass);if(modal.animation){backdropDomEl.attr("modal-animation","true")}$compile(backdropDomEl)(backdropScope);$animate.enter(backdropDomEl,appendToElement)}var angularDomEl=angular.element('<div modal-window="modal-window"></div>');var modalType=modal.type?"md-modal--"+modal.type:"md-modal--large";angularDomEl.attr({template:modal.windowTemplate,"window-class":modal.windowClass,"window-top-class":modal.windowTopClass,index:openedWindows.length()-1,animate:"animate","modal-id":modal.modalId,"modal-class":modal.modalClass+" "+modalType}).html(modal.content);if(modal.animation){angularDomEl.attr("modal-animation","true")}$animate.enter($compile(angularDomEl)(modal.scope),appendToElement).then(function(){$animate.addClass(appendToElement,modalBodyClass)});openedWindows.top().value.modalDomEl=angularDomEl;openedWindows.top().value.modalOpener=modalOpener;$modalStack.clearFocusListCache()}function broadcastClosing(modalWindow,resultOrReason,closing){return!modalWindow.value.modalScope.$broadcast("modal.closing",resultOrReason,closing).defaultPrevented}function close(modalInstance,result){var modalWindow=openedWindows.get(modalInstance);if(modalWindow&&broadcastClosing(modalWindow,result,true)){modalWindow.value.modalScope.$$uibDestructionScheduled=true;modalWindow.value.deferred.resolve(result);removeModalWindow(modalInstance,modalWindow.value.modalOpener);return true}return!modalWindow}function dismiss(modalInstance,reason){var modalWindow=openedWindows.get(modalInstance);if(modalWindow&&broadcastClosing(modalWindow,reason,false)){modalWindow.value.modalScope.$$uibDestructionScheduled=true;modalWindow.value.deferred.reject(reason);removeModalWindow(modalInstance,modalWindow.value.modalOpener);return true}return!modalWindow}function dismissAll(reason){var topModal=this.getTop();while(topModal&&this.dismiss(topModal.key,reason)){topModal=this.getTop()}}function getTop(){return openedWindows.top()}function modalRendered(modalInstance){var modalWindow=openedWindows.get(modalInstance);if(modalWindow){modalWindow.value.renderDeferred.resolve()}}function focusFirstFocusableElement(){if(focusableElementList.length>0){focusableElementList[0].focus();return true}return false}function focusLastFocusableElement(){if(focusableElementList.length>0){focusableElementList[focusableElementList.length-1].focus();return true}return false}function isModalFocused(evt){if(evt){return focusableElementList.index(evt.target)>-1}return false}function isFocusInFirstItem(evt){if(focusableElementList.length>0){return(evt.target||evt.srcElement)===focusableElementList[0]}return false}function isFocusInLastItem(evt){if(focusableElementList.length>0){return(evt.target||evt.srcElement)===focusableElementList[focusableElementList.length-1]}return false}function clearFocusListCache(){focusableElementList=[];focusIndex=0}function loadFocusElementList(){if(focusableElementList===undefined||!focusableElementList.length){var modalWindow=$(".md-modal__content:visible").first();focusableElementList=modalWindow?modalWindow.find(tabbableSelector):[]}}return $modalStack}exports.mdModalStack=mdModalStack;function mdModal(){var $modalProvider={options:{animation:true,backdrop:"static",keyboard:true},$get:["$rootScope","$q","$document","$templateRequest","$controller","$mdResolve","$modalStack",function($rootScope,$q,$document,$templateRequest,$controller,$mdResolve,$modalStack){var $modal={getPromiseChain:getPromiseChain,open:open};function getTemplatePromise(options){return options.template?$q.when(options.template):$templateRequest(angular.isFunction(options.templateUrl)?options.templateUrl():options.templateUrl)}var promiseChain=null;function getPromiseChain(){return promiseChain}function open(modalOptions){var modalResultDeferred=$q.defer();var modalOpenedDeferred=$q.defer();var modalClosedDeferred=$q.defer();var modalRenderDeferred=$q.defer();var modalInstance={result:modalResultDeferred.promise,opened:modalOpenedDeferred.promise,closed:modalClosedDeferred.promise,rendered:modalRenderDeferred.promise,close:function(result){return $modalStack.close(modalInstance,result)},dismiss:function(reason){return $modalStack.dismiss(modalInstance,reason)}};modalOptions=angular.extend({},$modalProvider.options,modalOptions);modalOptions.resolve=modalOptions.resolve||{};modalOptions.appendTo=modalOptions.appendTo||$document.find("body").eq(0);if(!modalOptions.template&&!modalOptions.templateUrl){throw new Error("One of template or templateUrl options is required.")}var templateAndResolvePromise=$q.all([getTemplatePromise(modalOptions),$mdResolve.resolve(modalOptions.resolve,{},null,null)]);function resolveWithTemplate(){return templateAndResolvePromise}var samePromise;samePromise=promiseChain=$q.all([promiseChain]).then(resolveWithTemplate,resolveWithTemplate).then(function resolveSuccess(tplAndVars){var providedScope=modalOptions.scope||$rootScope;var modalScope=providedScope.$new();modalScope.$close=modalInstance.close;modalScope.$dismiss=modalInstance.dismiss;modalScope.$on("$destroy",function(){if(!modalScope.$$uibDestructionScheduled){modalScope.$dismiss("$uibUnscheduledDestruction")}});var ctrlInstance;if(modalOptions.controller){var ctrlLocals_1={$scope:modalScope,$modalInstance:modalInstance};angular.forEach(tplAndVars[1],function(value,key){ctrlLocals_1[key]=value});ctrlInstance=$controller(modalOptions.controller,ctrlLocals_1);if(modalOptions.controllerAs){if(modalOptions.bindToController){ctrlInstance.$close=modalScope.$close;ctrlInstance.$dismiss=modalScope.$dismiss;angular.extend(ctrlInstance,providedScope)}modalScope[modalOptions.controllerAs]=ctrlInstance}}$modalStack.open(modalInstance,{scope:modalScope,deferred:modalResultDeferred,renderDeferred:modalRenderDeferred,closedDeferred:modalClosedDeferred,content:tplAndVars[0],animation:modalOptions.animation,backdrop:modalOptions.backdrop,keyboard:modalOptions.keyboard,backdropClass:modalOptions.backdropClass,windowTopClass:modalOptions.windowTopClass,windowClass:modalOptions.windowClass,windowTemplate:modalOptions.windowTemplate,openedClass:modalOptions.openedClass,appendTo:modalOptions.appendTo,modalId:modalOptions.modalId,modalClass:modalOptions.modalClass,type:modalOptions.type});modalOpenedDeferred.resolve(true)},function resolveError(reason){modalOpenedDeferred.reject(reason);modalResultDeferred.reject(reason)})["finally"](function(){if(promiseChain===samePromise){promiseChain=null}});return modalInstance}return $modal}]};return $modalProvider}exports.mdModal=mdModal},14:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var angular=__webpack_require__(0);var stackedmap_service_1=__webpack_require__(68);exports.default=angular.module("momentum.ui.stackedmap",[]).factory("$$stackedMap",stackedmap_service_1.MdStackedMap).name},15:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var angular=__webpack_require__(0);var multimap_service_1=__webpack_require__(69);exports.default=angular.module("momentum.ui.multimap",[]).factory("$$multiMap",multimap_service_1.MdMultiMap).name},16:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var angular=__webpack_require__(0);var resolve_service_1=__webpack_require__(70);exports.default=angular.module("momentum.ui.resolve",[]).provider("$mdResolve",resolve_service_1.MdResolve).name},176:function(module,exports,__webpack_require__){module.exports=__webpack_require__(66)},4:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.KeyCodes=void 0;exports.KeyCodes={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}},66:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var angular=__webpack_require__(0);var multimap_1=__webpack_require__(15);var stackedmap_1=__webpack_require__(14);var resolve_1=__webpack_require__(16);var modal_component_1=__webpack_require__(123);exports.default=angular.module("momentum.ui.modal",[multimap_1.default,stackedmap_1.default,resolve_1.default]).directive("modalBackdrop",modal_component_1.mdModalBackdrop).directive("modalWindow",modal_component_1.mdModalWindow).directive("modalAnimationClass",modal_component_1.mdModalAnimationClass).directive("modalTransclude",modal_component_1.mdModalTransclude).factory("$modalStack",modal_component_1.mdModalStack).provider("$modal",modal_component_1.mdModal).name},68:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.MdStackedMap=void 0;function MdStackedMap(){return{createNew:function(){var stack=[];return{add:function(key,value){stack.push({key:key,value:value})},get:function(key){for(var i=0;i<stack.length;i++){if(key===stack[i].key){return stack[i]}}},keys:function(){var keys=[];for(var i=0;i<stack.length;i++){keys.push(stack[i].key)}return keys},top:function(){return stack[stack.length-1]},remove:function(key){var idx=-1;for(var i=0;i<stack.length;i++){if(key===stack[i].key){idx=i;break}}return stack.splice(idx,1)[0]},removeTop:function(){return stack.splice(stack.length-1,1)[0]},length:function(){return stack.length}}}}}exports.MdStackedMap=MdStackedMap},69:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.MdMultiMap=void 0;function MdMultiMap(){return{createNew:function(){var map={};return{entries:function(){return Object.keys(map).map(function(key){return{key:key,value:map[key]}})},get:function(key){return map[key]},hasKey:function(key){return!!map[key]},keys:function(){return Object.keys(map)},put:function(key,value){if(!map[key]){map[key]=[]}map[key].push(value)},remove:function(key,value){var values=map[key];if(!values){return}var idx=values.indexOf(value);if(idx!==-1){values.splice(idx,1)}if(!values.length){delete map[key]}}}}}}exports.MdMultiMap=MdMultiMap},70:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.MdResolve=void 0;var angular=__webpack_require__(0);var MdResolve=function(){function MdResolve(){var _this=this;this.resolver=null;this.setResolver=function(resolver){_this.resolver=resolver};this.$get=["$injector","$q",function($injector,$q){var resolver=_this.resolver?$injector.get(_this.resolver):null;return{resolve:function(invocables,locals,parent,self){if(resolver){return resolver.resolve(invocables,locals,parent,self)}var promises=[];angular.forEach(invocables,function(value){if(angular.isFunction(value)||angular.isArray(value)){promises.push($q.resolve($injector.invoke(value)))}else if(angular.isString(value)){promises.push($q.resolve($injector.get(value)))}else{promises.push($q.resolve(value))}});return $q.all(promises).then(function(resolves){var resolveObj={};var resolveIter=0;angular.forEach(invocables,function(value,key){resolveObj[key]=resolves[resolveIter++]});return resolveObj})}}}]}return MdResolve}();exports.MdResolve=MdResolve}})});