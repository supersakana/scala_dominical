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

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMenu)
/* harmony export */ });
function buildMenu() {
    const content = document.getElementById('content')
    
    content.append(menuPage())
  }

  function menuPage(){
    const container = document.createElement('div')
    container.classList.add('flex', 'flex-col', 'lg:flex-row', 'items-center', 'justify-center', 'h-full', 'mx-4', 'my-4', 'gap-x-4', 'gap-y-3')

    for(let i = 1; i <= 2; i++){
        const img = document.createElement('img')
        img.src = `../src/img/menu${i}.jpg`
        img.classList.add('w-[30rem]', 'lg:w-[30rem]')

        container.append(img)
    }

    return container
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
        li.id = link.toLowerCase()
        li.classList.add('hover:text-[#d8a126]', 'duration-500', 'item')
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
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");




function display() {
    (0,_nav_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
    ;(0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
    // buildMenu()

    const items = document.querySelectorAll('.item')
    items.forEach(item => {
      item.addEventListener('click', () => {
        console.log(item.id)
      })
    });
  }

display()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqRGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLFFBQVE7QUFDM0I7QUFDQSxvQ0FBb0MsRUFBRTtBQUN0Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbkJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7Ozs7O1VDMUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05rQztBQUNGO0FBQ0U7O0FBRWxDO0FBQ0EsSUFBSSxtREFBUTtBQUNaLElBQUkscURBQVM7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY2FsYV9kb21pbmljYWwvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9zY2FsYV9kb21pbmljYWwvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9zY2FsYV9kb21pbmljYWwvLi9zcmMvbmF2LmpzIiwid2VicGFjazovL3NjYWxhX2RvbWluaWNhbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zY2FsYV9kb21pbmljYWwvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NjYWxhX2RvbWluaWNhbC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NjYWxhX2RvbWluaWNhbC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NjYWxhX2RvbWluaWNhbC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEhvbWUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcbiAgICBcbiAgICBjb250ZW50LmFwcGVuZChob21lUGFnZSgpKVxuICB9XG5cbmZ1bmN0aW9uIGhvbWVQYWdlKCl7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmbGV4JywgJ2ZsZXgtY29sJywgJ2xnOmZsZXgtcm93JywgJ2l0ZW1zLWNlbnRlcicsICdqdXN0aWZ5LWNlbnRlcicsICdoLVs4MHZoXScsICdnYXAteC0xMCcsICdnYXAteS02JywgJ214LTQnKVxuICBjb25zdCBlbGVtZW50cyA9IGhvbWVFbGVtZW50cygpXG5cbiAgZWxlbWVudHMuZm9yRWFjaCgoZSkgPT57XG4gICAgY29udGFpbmVyLmFwcGVuZChlKVxuICB9KVxuXG4gIHJldHVybiBjb250YWluZXJcbn1cblxuZnVuY3Rpb24gaG9tZUVsZW1lbnRzKCl7XG4gIGNvbnN0IHRleHQgPSBob21lVGV4dCgpXG4gIGNvbnN0IGltZyA9IGhvbWVJbWcoKVxuXG4gIHJldHVybiBbdGV4dCwgaW1nXVxufVxuXG5mdW5jdGlvbiBob21lVGV4dCgpe1xuICBjb25zdCB0ZXh0QmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB0ZXh0QmxvY2suY2xhc3NMaXN0LmFkZCgndGV4dC1jZW50ZXInLCAnbGc6dGV4dC1sZWZ0JylcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgdGl0bGUuaW5uZXJUZXh0ID0gXCJTQ0FMQVwiXG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RleHQtN3hsJywgJ2xnOnRleHQtOHhsJywgJ2ZvbnQtbG9nbycsICd0cmFja2luZy13aWRlc3QnKVxuXG4gIGNvbnN0IHN1YlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIHN1YlRpdGxlLmlubmVyVGV4dCA9IFwiUmVzdHVyYXVudCBhbmQgQmFyXCJcbiAgc3ViVGl0bGUuY2xhc3NMaXN0LmFkZCgndGV4dC0yeGwnLCAnZm9udC1sb2dvJylcblxuICB0ZXh0QmxvY2suYXBwZW5kKHRpdGxlLCBzdWJUaXRsZSlcblxuICByZXR1cm4gdGV4dEJsb2NrXG59XG5cbmZ1bmN0aW9uIGhvbWVJbWcoKXtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgaW1nLnNyYyA9IFwiLi4vc3JjL2ltZy90aHJlZS5qcGdcIlxuICBpbWcuYWx0ID0gXCJ2aWV3XCJcbiAgaW1nLmNsYXNzTGlzdC5hZGQoJ3ctWzMwcmVtXScsICdsZzp3LVszNXJlbV0nLCAncm91bmRlZC1tZCcpXG5cbiAgcmV0dXJuIGltZ1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWVudSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuICAgIFxuICAgIGNvbnRlbnQuYXBwZW5kKG1lbnVQYWdlKCkpXG4gIH1cblxuICBmdW5jdGlvbiBtZW51UGFnZSgpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZsZXgnLCAnZmxleC1jb2wnLCAnbGc6ZmxleC1yb3cnLCAnaXRlbXMtY2VudGVyJywgJ2p1c3RpZnktY2VudGVyJywgJ2gtZnVsbCcsICdteC00JywgJ215LTQnLCAnZ2FwLXgtNCcsICdnYXAteS0zJylcblxuICAgIGZvcihsZXQgaSA9IDE7IGkgPD0gMjsgaSsrKXtcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgICAgaW1nLnNyYyA9IGAuLi9zcmMvaW1nL21lbnUke2l9LmpwZ2BcbiAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoJ3ctWzMwcmVtXScsICdsZzp3LVszMHJlbV0nKVxuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoaW1nKVxuICAgIH1cblxuICAgIHJldHVybiBjb250YWluZXJcbiAgfSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTmF2KCkge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpXG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoJ2ZsZXgnLCAnanVzdGlmeS1iZXR3ZWVuJywgJ3B4LTYnLCAncHktNCcpXG4gICAgXG4gICAgY29uc3QgZWxlbWVudHMgPSBuYXZFbGVtZW50cygpXG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICBuYXYuYXBwZW5kKGUpXG4gICAgfSlcblxuICAgIGRvY3VtZW50LmJvZHkucHJlcGVuZChuYXYpXG4gIH1cblxuICBmdW5jdGlvbiBuYXZFbGVtZW50cygpe1xuICAgIGNvbnN0IGljb24gPSBuYXZJY29uKClcbiAgICBjb25zdCBsaXN0ID0gbmF2TGlzdCgpXG5cbiAgICByZXR1cm4gW2ljb24sIGxpc3RdXG4gIH1cblxuICBmdW5jdGlvbiBuYXZJY29uKCl7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lvbi1pY29uJylcbiAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ3RleHQtM3hsJywgJ2N1cnNvci1wb2ludGVyJywgJ2hvdmVyOnRleHQtWyNkOGExMjZdJywgJ2R1cmF0aW9uLTUwMCcpXG4gICAgaWNvbi5uYW1lID0gXCJyZXN0YXVyYW50LW91dGxpbmVcIlxuXG4gICAgcmV0dXJuIGljb25cbiAgfVxuXG4gIGZ1bmN0aW9uIG5hdkxpc3QoKXtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgIGxpc3QuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdpdGVtcy1jZW50ZXInLCAnanVzdGlmeS1jZW50ZXInLCAnZ2FwLXgtNCcsICd0ZXh0LWxnJywgJ21kOnRleHQteGwnLCAnZm9udC1sb2dvJywgJ2N1cnNvci1wb2ludGVyJylcblxuICAgIGNvbnN0IGxpbmtzID0gWydIb21lJywgJ0Fib3V0JywgJ01lbnUnXVxuXG4gICAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgbGkuaWQgPSBsaW5rLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgnaG92ZXI6dGV4dC1bI2Q4YTEyNl0nLCAnZHVyYXRpb24tNTAwJywgJ2l0ZW0nKVxuICAgICAgICBsaS5pbm5lclRleHQgPSBsaW5rXG4gICAgICAgIGxpc3QuYXBwZW5kKGxpKVxuICAgIH0pXG5cbiAgICByZXR1cm4gbGlzdFxuICB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgYnVpbGRIb21lIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgYnVpbGROYXYgZnJvbSAnLi9uYXYuanMnO1xuaW1wb3J0IGJ1aWxkTWVudSBmcm9tICcuL21lbnUuanMnO1xuXG5mdW5jdGlvbiBkaXNwbGF5KCkge1xuICAgIGJ1aWxkTmF2KClcbiAgICBidWlsZEhvbWUoKVxuICAgIC8vIGJ1aWxkTWVudSgpXG5cbiAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtJylcbiAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coaXRlbS5pZClcbiAgICAgIH0pXG4gICAgfSk7XG4gIH1cblxuZGlzcGxheSgpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=