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
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");




function component() {
    const element = document.createElement('div');
  
    element.innerHTML = 'Hello Webpack';
  
    return element;
  }

  (0,_nav_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
  // buildHome()
  ;(0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])()
  // document.body.appendChild(component());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqRGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLFFBQVE7QUFDM0I7QUFDQSxvQ0FBb0MsRUFBRTtBQUN0Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbkJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7Ozs7O1VDMUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05rQztBQUNGO0FBQ0U7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsbURBQVE7QUFDVjtBQUNBLEVBQUUscURBQVM7QUFDWCIsInNvdXJjZXMiOlsid2VicGFjazovL3NjYWxhX2RvbWluaWNhbC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3NjYWxhX2RvbWluaWNhbC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3NjYWxhX2RvbWluaWNhbC8uL3NyYy9uYXYuanMiLCJ3ZWJwYWNrOi8vc2NhbGFfZG9taW5pY2FsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NjYWxhX2RvbWluaWNhbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2NhbGFfZG9taW5pY2FsL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2NhbGFfZG9taW5pY2FsL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2NhbGFfZG9taW5pY2FsLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkSG9tZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuICAgIFxuICAgIGNvbnRlbnQuYXBwZW5kKGhvbWVQYWdlKCkpXG4gIH1cblxuZnVuY3Rpb24gaG9tZVBhZ2UoKXtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZsZXgnLCAnZmxleC1jb2wnLCAnbGc6ZmxleC1yb3cnLCAnaXRlbXMtY2VudGVyJywgJ2p1c3RpZnktY2VudGVyJywgJ2gtWzgwdmhdJywgJ2dhcC14LTEwJywgJ2dhcC15LTYnLCAnbXgtNCcpXG4gIGNvbnN0IGVsZW1lbnRzID0gaG9tZUVsZW1lbnRzKClcblxuICBlbGVtZW50cy5mb3JFYWNoKChlKSA9PntcbiAgICBjb250YWluZXIuYXBwZW5kKGUpXG4gIH0pXG5cbiAgcmV0dXJuIGNvbnRhaW5lclxufVxuXG5mdW5jdGlvbiBob21lRWxlbWVudHMoKXtcbiAgY29uc3QgdGV4dCA9IGhvbWVUZXh0KClcbiAgY29uc3QgaW1nID0gaG9tZUltZygpXG5cbiAgcmV0dXJuIFt0ZXh0LCBpbWddXG59XG5cbmZ1bmN0aW9uIGhvbWVUZXh0KCl7XG4gIGNvbnN0IHRleHRCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHRleHRCbG9jay5jbGFzc0xpc3QuYWRkKCd0ZXh0LWNlbnRlcicsICdsZzp0ZXh0LWxlZnQnKVxuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICB0aXRsZS5pbm5lclRleHQgPSBcIlNDQUxBXCJcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGV4dC03eGwnLCAnbGc6dGV4dC04eGwnLCAnZm9udC1sb2dvJywgJ3RyYWNraW5nLXdpZGVzdCcpXG5cbiAgY29uc3Qgc3ViVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgc3ViVGl0bGUuaW5uZXJUZXh0ID0gXCJSZXN0dXJhdW50IGFuZCBCYXJcIlxuICBzdWJUaXRsZS5jbGFzc0xpc3QuYWRkKCd0ZXh0LTJ4bCcsICdmb250LWxvZ28nKVxuXG4gIHRleHRCbG9jay5hcHBlbmQodGl0bGUsIHN1YlRpdGxlKVxuXG4gIHJldHVybiB0ZXh0QmxvY2tcbn1cblxuZnVuY3Rpb24gaG9tZUltZygpe1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICBpbWcuc3JjID0gXCIuLi9zcmMvaW1nL3RocmVlLmpwZ1wiXG4gIGltZy5hbHQgPSBcInZpZXdcIlxuICBpbWcuY2xhc3NMaXN0LmFkZCgndy1bMzByZW1dJywgJ2xnOnctWzM1cmVtXScsICdyb3VuZGVkLW1kJylcblxuICByZXR1cm4gaW1nXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNZW51KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG4gICAgXG4gICAgY29udGVudC5hcHBlbmQobWVudVBhZ2UoKSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG1lbnVQYWdlKCl7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdmbGV4LWNvbCcsICdsZzpmbGV4LXJvdycsICdpdGVtcy1jZW50ZXInLCAnanVzdGlmeS1jZW50ZXInLCAnaC1mdWxsJywgJ214LTQnLCAnbXktNCcsICdnYXAteC00JywgJ2dhcC15LTMnKVxuXG4gICAgZm9yKGxldCBpID0gMTsgaSA8PSAyOyBpKyspe1xuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICAgICBpbWcuc3JjID0gYC4uL3NyYy9pbWcvbWVudSR7aX0uanBnYFxuICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZCgndy1bMzByZW1dJywgJ2xnOnctWzMwcmVtXScpXG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChpbWcpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRhaW5lclxuICB9IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGROYXYoKSB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2JylcbiAgICBuYXYuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdqdXN0aWZ5LWJldHdlZW4nLCAncHgtNicsICdweS00JylcbiAgICBcbiAgICBjb25zdCBlbGVtZW50cyA9IG5hdkVsZW1lbnRzKClcbiAgICBlbGVtZW50cy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIG5hdi5hcHBlbmQoZSlcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKG5hdilcbiAgfVxuXG4gIGZ1bmN0aW9uIG5hdkVsZW1lbnRzKCl7XG4gICAgY29uc3QgaWNvbiA9IG5hdkljb24oKVxuICAgIGNvbnN0IGxpc3QgPSBuYXZMaXN0KClcblxuICAgIHJldHVybiBbaWNvbiwgbGlzdF1cbiAgfVxuXG4gIGZ1bmN0aW9uIG5hdkljb24oKXtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW9uLWljb24nKVxuICAgIGljb24uY2xhc3NMaXN0LmFkZCgndGV4dC0zeGwnLCAnY3Vyc29yLXBvaW50ZXInLCAnaG92ZXI6dGV4dC1bI2Q4YTEyNl0nLCAnZHVyYXRpb24tNTAwJylcbiAgICBpY29uLm5hbWUgPSBcInJlc3RhdXJhbnQtb3V0bGluZVwiXG5cbiAgICByZXR1cm4gaWNvblxuICB9XG5cbiAgZnVuY3Rpb24gbmF2TGlzdCgpe1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgbGlzdC5jbGFzc0xpc3QuYWRkKCdmbGV4JywgJ2l0ZW1zLWNlbnRlcicsICdqdXN0aWZ5LWNlbnRlcicsICdnYXAteC00JywgJ3RleHQtbGcnLCAnbWQ6dGV4dC14bCcsICdmb250LWxvZ28nLCAnY3Vyc29yLXBvaW50ZXInKVxuXG4gICAgY29uc3QgbGlua3MgPSBbJ0hvbWUnLCAnQWJvdXQnLCAnTWVudSddXG5cbiAgICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICAvLyBsaS5pZCA9IGxpbmtcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgnaG92ZXI6dGV4dC1bI2Q4YTEyNl0nLCAnZHVyYXRpb24tNTAwJylcbiAgICAgICAgbGkuaW5uZXJUZXh0ID0gbGlua1xuICAgICAgICBsaXN0LmFwcGVuZChsaSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIGxpc3RcbiAgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGJ1aWxkSG9tZSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IGJ1aWxkTmF2IGZyb20gJy4vbmF2LmpzJztcbmltcG9ydCBidWlsZE1lbnUgZnJvbSAnLi9tZW51LmpzJztcblxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSAnSGVsbG8gV2VicGFjayc7XG4gIFxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgYnVpbGROYXYoKVxuICAvLyBidWlsZEhvbWUoKVxuICBidWlsZE1lbnUoKVxuICAvLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==