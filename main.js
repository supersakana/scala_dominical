/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildPage)
/* harmony export */ });
function buildPage() {
    const content = document.getElementById('content')
    
    content.append(homePage())
  }

function homePage(){
  const container = document.createElement('div')
  container.classList.add('flex', 'flex-col', 'lg:flex-row', 'items-center', 'justify-center', 'h-[92vh]', 'gap-x-10', 'gap-y-6', 'mx-4')
  const elements = homeElements()

  elements.forEach((e) =>{
    container.append(e)
  })

  return container
}

function homeElements(){
  // container for header text
  const titleBlock = document.createElement('div')
  titleBlock.classList.add('text-center', 'lg:text-left')

  // title
  const title = document.createElement('h1')
  title.innerText = "SCALA"
  title.classList.add('text-7xl', 'lg:text-8xl', 'font-logo', 'tracking-widest')

  // sub title
  const subTitle = document.createElement('p')
  subTitle.innerText = "Resturaunt and Bar"
  subTitle.classList.add('text-2xl', 'font-logo')

  titleBlock.append(title, subTitle)

  // home image
  const homeImg = document.createElement('img')
  homeImg.src = "../src/img/three.jpg"
  homeImg.alt = "view"
  homeImg.classList.add('w-[30rem]', 'lg:w-[35rem]', 'rounded-md', 'shadow-xl')

  return [titleBlock, homeImg]
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
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print.js */ "./src/print.js");


function component() {
    const element = document.createElement('div');
  
    element.innerHTML = 'Hello Webpack';
  
    return element;
  }

  (0,_print_js__WEBPACK_IMPORTED_MODULE_0__["default"])()

  // document.body.appendChild(component());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7OztVQzFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm1DOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLHFEQUFTOztBQUVYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2NhbGFfZG9taW5pY2FsLy4vc3JjL3ByaW50LmpzIiwid2VicGFjazovL3NjYWxhX2RvbWluaWNhbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zY2FsYV9kb21pbmljYWwvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NjYWxhX2RvbWluaWNhbC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NjYWxhX2RvbWluaWNhbC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NjYWxhX2RvbWluaWNhbC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZFBhZ2UoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcbiAgICBcbiAgICBjb250ZW50LmFwcGVuZChob21lUGFnZSgpKVxuICB9XG5cbmZ1bmN0aW9uIGhvbWVQYWdlKCl7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmbGV4JywgJ2ZsZXgtY29sJywgJ2xnOmZsZXgtcm93JywgJ2l0ZW1zLWNlbnRlcicsICdqdXN0aWZ5LWNlbnRlcicsICdoLVs5MnZoXScsICdnYXAteC0xMCcsICdnYXAteS02JywgJ214LTQnKVxuICBjb25zdCBlbGVtZW50cyA9IGhvbWVFbGVtZW50cygpXG5cbiAgZWxlbWVudHMuZm9yRWFjaCgoZSkgPT57XG4gICAgY29udGFpbmVyLmFwcGVuZChlKVxuICB9KVxuXG4gIHJldHVybiBjb250YWluZXJcbn1cblxuZnVuY3Rpb24gaG9tZUVsZW1lbnRzKCl7XG4gIC8vIGNvbnRhaW5lciBmb3IgaGVhZGVyIHRleHRcbiAgY29uc3QgdGl0bGVCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHRpdGxlQmxvY2suY2xhc3NMaXN0LmFkZCgndGV4dC1jZW50ZXInLCAnbGc6dGV4dC1sZWZ0JylcblxuICAvLyB0aXRsZVxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgdGl0bGUuaW5uZXJUZXh0ID0gXCJTQ0FMQVwiXG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RleHQtN3hsJywgJ2xnOnRleHQtOHhsJywgJ2ZvbnQtbG9nbycsICd0cmFja2luZy13aWRlc3QnKVxuXG4gIC8vIHN1YiB0aXRsZVxuICBjb25zdCBzdWJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBzdWJUaXRsZS5pbm5lclRleHQgPSBcIlJlc3R1cmF1bnQgYW5kIEJhclwiXG4gIHN1YlRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RleHQtMnhsJywgJ2ZvbnQtbG9nbycpXG5cbiAgdGl0bGVCbG9jay5hcHBlbmQodGl0bGUsIHN1YlRpdGxlKVxuXG4gIC8vIGhvbWUgaW1hZ2VcbiAgY29uc3QgaG9tZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gIGhvbWVJbWcuc3JjID0gXCIuLi9zcmMvaW1nL3RocmVlLmpwZ1wiXG4gIGhvbWVJbWcuYWx0ID0gXCJ2aWV3XCJcbiAgaG9tZUltZy5jbGFzc0xpc3QuYWRkKCd3LVszMHJlbV0nLCAnbGc6dy1bMzVyZW1dJywgJ3JvdW5kZWQtbWQnLCAnc2hhZG93LXhsJylcblxuICByZXR1cm4gW3RpdGxlQmxvY2ssIGhvbWVJbWddXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgYnVpbGRQYWdlIGZyb20gJy4vcHJpbnQuanMnO1xuXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBcbiAgICBlbGVtZW50LmlubmVySFRNTCA9ICdIZWxsbyBXZWJwYWNrJztcbiAgXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBidWlsZFBhZ2UoKVxuXG4gIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9