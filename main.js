/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildHome)
/* harmony export */ });
function buildHome() {
    const content = document.getElementById('content')
    
    content.append(homePage())
  }

function homePage(){
  const container = document.createElement('div')
  container.classList.add('flex', 'flex-col', 'lg:flex-row', 'items-center', 'justify-center', 'h-[80vh]', 'gap-x-10', 'gap-y-6', 'mx-4')
  const elements = homeElements()

  elements.forEach((e) =>{
    container.append(e)
  })

  return container
}

function homeElements(){
  const text = homeText()
  const img = homeImg()

  return [text, img]
}

function homeText(){
  const textBlock = document.createElement('div')
  textBlock.classList.add('text-center', 'lg:text-left')

  const title = document.createElement('h1')
  title.innerText = "SCALA"
  title.classList.add('text-7xl', 'lg:text-8xl', 'font-logo', 'tracking-widest')

  const subTitle = document.createElement('p')
  subTitle.innerText = "Resturaunt and Bar"
  subTitle.classList.add('text-2xl', 'font-logo')

  textBlock.append(title, subTitle)

  return textBlock
}

function homeImg(){
  const img = document.createElement('img')
  img.src = "../src/img/three.jpg"
  img.alt = "view"
  img.classList.add('w-[30rem]', 'lg:w-[35rem]', 'rounded-md')

  return img
}

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildNav)
/* harmony export */ });
function buildNav() {
    const nav = document.createElement('nav')
    nav.classList.add('flex', 'justify-between', 'px-6', 'py-4')
    
    const elements = navElements()
    elements.forEach((e) => {
        nav.append(e)
    })

    document.body.prepend(nav)
  }

  function navElements(){
    const icon = navIcon()
    const list = navList()

    return [icon, list]
  }

  function navIcon(){
    const icon = document.createElement('ion-icon')
    icon.classList.add('text-3xl', 'cursor-pointer', 'hover:text-[#d8a126]', 'duration-500')
    icon.name = "restaurant-outline"

    return icon
  }

  function navList(){
    const list = document.createElement('ul')
    list.classList.add('flex', 'items-center', 'justify-center', 'gap-x-4', 'text-lg', 'md:text-xl', 'font-logo', 'cursor-pointer')
    const links = ['Home', 'About', 'Menu']

    links.forEach((link) => {
        const li = document.createElement('li')
        // li.id = link
        li.classList.add('hover:text-[#d8a126]', 'duration-500')
        li.innerText = link
        list.append(li)
    })

    return list
  }

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav.js */ "./src/nav.js");



function component() {
    const element = document.createElement('div');
  
    element.innerHTML = 'Hello Webpack';
  
    return element;
  }

  (0,_nav_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
  ;(0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
  // document.body.appendChild(component());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqRGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7Ozs7OztVQ3pDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05rQztBQUNGOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLG1EQUFRO0FBQ1YsRUFBRSxxREFBUztBQUNYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2NhbGFfZG9taW5pY2FsLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vc2NhbGFfZG9taW5pY2FsLy4vc3JjL25hdi5qcyIsIndlYnBhY2s6Ly9zY2FsYV9kb21pbmljYWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2NhbGFfZG9taW5pY2FsL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zY2FsYV9kb21pbmljYWwvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zY2FsYV9kb21pbmljYWwvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zY2FsYV9kb21pbmljYWwvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRIb21lKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG4gICAgXG4gICAgY29udGVudC5hcHBlbmQoaG9tZVBhZ2UoKSlcbiAgfVxuXG5mdW5jdGlvbiBob21lUGFnZSgpe1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdmbGV4LWNvbCcsICdsZzpmbGV4LXJvdycsICdpdGVtcy1jZW50ZXInLCAnanVzdGlmeS1jZW50ZXInLCAnaC1bODB2aF0nLCAnZ2FwLXgtMTAnLCAnZ2FwLXktNicsICdteC00JylcbiAgY29uc3QgZWxlbWVudHMgPSBob21lRWxlbWVudHMoKVxuXG4gIGVsZW1lbnRzLmZvckVhY2goKGUpID0+e1xuICAgIGNvbnRhaW5lci5hcHBlbmQoZSlcbiAgfSlcblxuICByZXR1cm4gY29udGFpbmVyXG59XG5cbmZ1bmN0aW9uIGhvbWVFbGVtZW50cygpe1xuICBjb25zdCB0ZXh0ID0gaG9tZVRleHQoKVxuICBjb25zdCBpbWcgPSBob21lSW1nKClcblxuICByZXR1cm4gW3RleHQsIGltZ11cbn1cblxuZnVuY3Rpb24gaG9tZVRleHQoKXtcbiAgY29uc3QgdGV4dEJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgdGV4dEJsb2NrLmNsYXNzTGlzdC5hZGQoJ3RleHQtY2VudGVyJywgJ2xnOnRleHQtbGVmdCcpXG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gIHRpdGxlLmlubmVyVGV4dCA9IFwiU0NBTEFcIlxuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0ZXh0LTd4bCcsICdsZzp0ZXh0LTh4bCcsICdmb250LWxvZ28nLCAndHJhY2tpbmctd2lkZXN0JylcblxuICBjb25zdCBzdWJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBzdWJUaXRsZS5pbm5lclRleHQgPSBcIlJlc3R1cmF1bnQgYW5kIEJhclwiXG4gIHN1YlRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RleHQtMnhsJywgJ2ZvbnQtbG9nbycpXG5cbiAgdGV4dEJsb2NrLmFwcGVuZCh0aXRsZSwgc3ViVGl0bGUpXG5cbiAgcmV0dXJuIHRleHRCbG9ja1xufVxuXG5mdW5jdGlvbiBob21lSW1nKCl7XG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gIGltZy5zcmMgPSBcIi4uL3NyYy9pbWcvdGhyZWUuanBnXCJcbiAgaW1nLmFsdCA9IFwidmlld1wiXG4gIGltZy5jbGFzc0xpc3QuYWRkKCd3LVszMHJlbV0nLCAnbGc6dy1bMzVyZW1dJywgJ3JvdW5kZWQtbWQnKVxuXG4gIHJldHVybiBpbWdcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE5hdigpIHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKVxuICAgIG5hdi5jbGFzc0xpc3QuYWRkKCdmbGV4JywgJ2p1c3RpZnktYmV0d2VlbicsICdweC02JywgJ3B5LTQnKVxuICAgIFxuICAgIGNvbnN0IGVsZW1lbnRzID0gbmF2RWxlbWVudHMoKVxuICAgIGVsZW1lbnRzLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgbmF2LmFwcGVuZChlKVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5ib2R5LnByZXBlbmQobmF2KVxuICB9XG5cbiAgZnVuY3Rpb24gbmF2RWxlbWVudHMoKXtcbiAgICBjb25zdCBpY29uID0gbmF2SWNvbigpXG4gICAgY29uc3QgbGlzdCA9IG5hdkxpc3QoKVxuXG4gICAgcmV0dXJuIFtpY29uLCBsaXN0XVxuICB9XG5cbiAgZnVuY3Rpb24gbmF2SWNvbigpe1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpb24taWNvbicpXG4gICAgaWNvbi5jbGFzc0xpc3QuYWRkKCd0ZXh0LTN4bCcsICdjdXJzb3ItcG9pbnRlcicsICdob3Zlcjp0ZXh0LVsjZDhhMTI2XScsICdkdXJhdGlvbi01MDAnKVxuICAgIGljb24ubmFtZSA9IFwicmVzdGF1cmFudC1vdXRsaW5lXCJcblxuICAgIHJldHVybiBpY29uXG4gIH1cblxuICBmdW5jdGlvbiBuYXZMaXN0KCl7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICBsaXN0LmNsYXNzTGlzdC5hZGQoJ2ZsZXgnLCAnaXRlbXMtY2VudGVyJywgJ2p1c3RpZnktY2VudGVyJywgJ2dhcC14LTQnLCAndGV4dC1sZycsICdtZDp0ZXh0LXhsJywgJ2ZvbnQtbG9nbycsICdjdXJzb3ItcG9pbnRlcicpXG4gICAgY29uc3QgbGlua3MgPSBbJ0hvbWUnLCAnQWJvdXQnLCAnTWVudSddXG5cbiAgICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICAvLyBsaS5pZCA9IGxpbmtcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgnaG92ZXI6dGV4dC1bI2Q4YTEyNl0nLCAnZHVyYXRpb24tNTAwJylcbiAgICAgICAgbGkuaW5uZXJUZXh0ID0gbGlua1xuICAgICAgICBsaXN0LmFwcGVuZChsaSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIGxpc3RcbiAgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGJ1aWxkSG9tZSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IGJ1aWxkTmF2IGZyb20gJy4vbmF2LmpzJztcblxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSAnSGVsbG8gV2VicGFjayc7XG4gIFxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgYnVpbGROYXYoKVxuICBidWlsZEhvbWUoKVxuICAvLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==