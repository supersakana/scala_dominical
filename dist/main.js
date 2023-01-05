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
    const icon = document.createElement('ion-icon')
    icon.classList.add('text-3xl', 'cursor-pointer', 'hover:text-[#d8a126]', 'duration-500')
    icon.name = "restaurant-outline"

    const list = document.createElement('ul')
    list.classList.add('flex', 'items-center', 'justify-center', 'gap-x-4', 'text-lg', 'md:text-xl', 'font-logo', 'cursor-pointer')
    const links = ['Home', 'About', 'Menu']

    links.forEach((link) => {
        const li = document.createElement('li')
        li.id = link
        li.classList.add('hover:text-[#d8a126]', 'duration-500')
        li.innerText = link
        list.append(li)
    })

    return [icon, list]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqRGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7Ozs7O1VDOUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmtDO0FBQ0Y7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsbURBQVE7QUFDVixFQUFFLHFEQUFTO0FBQ1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY2FsYV9kb21pbmljYWwvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9zY2FsYV9kb21pbmljYWwvLi9zcmMvbmF2LmpzIiwid2VicGFjazovL3NjYWxhX2RvbWluaWNhbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zY2FsYV9kb21pbmljYWwvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NjYWxhX2RvbWluaWNhbC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NjYWxhX2RvbWluaWNhbC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NjYWxhX2RvbWluaWNhbC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEhvbWUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcbiAgICBcbiAgICBjb250ZW50LmFwcGVuZChob21lUGFnZSgpKVxuICB9XG5cbmZ1bmN0aW9uIGhvbWVQYWdlKCl7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmbGV4JywgJ2ZsZXgtY29sJywgJ2xnOmZsZXgtcm93JywgJ2l0ZW1zLWNlbnRlcicsICdqdXN0aWZ5LWNlbnRlcicsICdoLVs4MHZoXScsICdnYXAteC0xMCcsICdnYXAteS02JywgJ214LTQnKVxuICBjb25zdCBlbGVtZW50cyA9IGhvbWVFbGVtZW50cygpXG5cbiAgZWxlbWVudHMuZm9yRWFjaCgoZSkgPT57XG4gICAgY29udGFpbmVyLmFwcGVuZChlKVxuICB9KVxuXG4gIHJldHVybiBjb250YWluZXJcbn1cblxuZnVuY3Rpb24gaG9tZUVsZW1lbnRzKCl7XG4gIGNvbnN0IHRleHQgPSBob21lVGV4dCgpXG4gIGNvbnN0IGltZyA9IGhvbWVJbWcoKVxuXG4gIHJldHVybiBbdGV4dCwgaW1nXVxufVxuXG5mdW5jdGlvbiBob21lVGV4dCgpe1xuICBjb25zdCB0ZXh0QmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB0ZXh0QmxvY2suY2xhc3NMaXN0LmFkZCgndGV4dC1jZW50ZXInLCAnbGc6dGV4dC1sZWZ0JylcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgdGl0bGUuaW5uZXJUZXh0ID0gXCJTQ0FMQVwiXG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RleHQtN3hsJywgJ2xnOnRleHQtOHhsJywgJ2ZvbnQtbG9nbycsICd0cmFja2luZy13aWRlc3QnKVxuXG4gIGNvbnN0IHN1YlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIHN1YlRpdGxlLmlubmVyVGV4dCA9IFwiUmVzdHVyYXVudCBhbmQgQmFyXCJcbiAgc3ViVGl0bGUuY2xhc3NMaXN0LmFkZCgndGV4dC0yeGwnLCAnZm9udC1sb2dvJylcblxuICB0ZXh0QmxvY2suYXBwZW5kKHRpdGxlLCBzdWJUaXRsZSlcblxuICByZXR1cm4gdGV4dEJsb2NrXG59XG5cbmZ1bmN0aW9uIGhvbWVJbWcoKXtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgaW1nLnNyYyA9IFwiLi4vc3JjL2ltZy90aHJlZS5qcGdcIlxuICBpbWcuYWx0ID0gXCJ2aWV3XCJcbiAgaW1nLmNsYXNzTGlzdC5hZGQoJ3ctWzMwcmVtXScsICdsZzp3LVszNXJlbV0nLCAncm91bmRlZC1tZCcpXG5cbiAgcmV0dXJuIGltZ1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTmF2KCkge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpXG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoJ2ZsZXgnLCAnanVzdGlmeS1iZXR3ZWVuJywgJ3B4LTYnLCAncHktNCcpXG4gICAgXG4gICAgY29uc3QgZWxlbWVudHMgPSBuYXZFbGVtZW50cygpXG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICBuYXYuYXBwZW5kKGUpXG4gICAgfSlcblxuICAgIGRvY3VtZW50LmJvZHkucHJlcGVuZChuYXYpXG4gIH1cblxuICBmdW5jdGlvbiBuYXZFbGVtZW50cygpe1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpb24taWNvbicpXG4gICAgaWNvbi5jbGFzc0xpc3QuYWRkKCd0ZXh0LTN4bCcsICdjdXJzb3ItcG9pbnRlcicsICdob3Zlcjp0ZXh0LVsjZDhhMTI2XScsICdkdXJhdGlvbi01MDAnKVxuICAgIGljb24ubmFtZSA9IFwicmVzdGF1cmFudC1vdXRsaW5lXCJcblxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgbGlzdC5jbGFzc0xpc3QuYWRkKCdmbGV4JywgJ2l0ZW1zLWNlbnRlcicsICdqdXN0aWZ5LWNlbnRlcicsICdnYXAteC00JywgJ3RleHQtbGcnLCAnbWQ6dGV4dC14bCcsICdmb250LWxvZ28nLCAnY3Vyc29yLXBvaW50ZXInKVxuICAgIGNvbnN0IGxpbmtzID0gWydIb21lJywgJ0Fib3V0JywgJ01lbnUnXVxuXG4gICAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgbGkuaWQgPSBsaW5rXG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ2hvdmVyOnRleHQtWyNkOGExMjZdJywgJ2R1cmF0aW9uLTUwMCcpXG4gICAgICAgIGxpLmlubmVyVGV4dCA9IGxpbmtcbiAgICAgICAgbGlzdC5hcHBlbmQobGkpXG4gICAgfSlcblxuICAgIHJldHVybiBbaWNvbiwgbGlzdF1cbiAgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGJ1aWxkSG9tZSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IGJ1aWxkTmF2IGZyb20gJy4vbmF2LmpzJztcblxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSAnSGVsbG8gV2VicGFjayc7XG4gIFxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgYnVpbGROYXYoKVxuICBidWlsZEhvbWUoKVxuICAvLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==