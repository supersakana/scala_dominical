/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildContact)
/* harmony export */ });
function buildContact() {
    const content = document.getElementById('content')
    content.append(contactPage())
  }

function contactPage(){
  const container = document.createElement('div')
  container.classList.add('elements','flex', 'flex-col', 'lg:flex-row', 'items-center', 'justify-center', 'h-[80vh]', 'gap-x-10', 'gap-y-6', 'mx-4')

  container.append(contactText(), contactImg())

  return container
}

function contactText(){
  const textBlock = document.createElement('div')
  textBlock.classList.add('flex', 'flex-col', 'gap-y-3')

  const header = document.createElement('h1')
  header.innerText = "Contact us"
  header.classList.add('text-6xl', 'font-logo')

  const phone = document.createElement('p')
  phone.innerText = "+(506) 1234 5678"
  phone.classList.add('text-xl', 'font-logo')

  const email = document.createElement('p')
  email.innerText = "therealemailgoes@here.com"
  email.classList.add('text-xl', 'font-logo')

  textBlock.append(header, email, phone)

  return textBlock
}

function contactImg(){
  const img = document.createElement('img')
  img.src = "../src/img/four.jpg"
  img.alt = "view"
  img.classList.add('w-[30rem]', 'lg:w-[35rem]', 'rounded-md')

  return img
}

/***/ }),

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
  container.classList.add('elements','flex', 'flex-col', 'lg:flex-row', 'items-center', 'justify-center', 'h-[80vh]', 'gap-x-10', 'gap-y-6', 'mx-4')

  container.append(homeText(), homeImg())

  return container
}

function homeText(){
  const textBlock = document.createElement('div')
  textBlock.classList.add('text-center', 'lg:text-left')

  const header = document.createElement('h1')
  header.innerText = "SCALA"
  header.classList.add('text-7xl', 'lg:text-8xl', 'font-logo', 'tracking-widest')

  const subHeader = document.createElement('p')
  subHeader.innerText = "Resturaunt and Bar"
  subHeader.classList.add('text-2xl', 'font-logo')

  textBlock.append(header, subHeader)

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
    container.classList.add('elements', 'flex', 'flex-col', 'lg:flex-row', 'items-center', 'justify-center', 'h-full', 'mx-4', 'my-4', 'gap-x-4', 'gap-y-3')

    for(let i = 1; i <= 2; i++){
        const img = document.createElement('img')
        img.src = `../src/img/menu${i}.jpg`
        img.classList.add('w-[25rem]', 'lg:w-[26rem]')

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

    nav.append(navIcon(), navList())

    document.body.prepend(nav)
  }

  function navIcon(){
    const icon = document.createElement('ion-icon')
    icon.classList.add('text-3xl', 'cursor-pointer', 'hover:text-[#d8a126]', 'duration-500', 'item')
    icon.name = "restaurant-outline"

    return icon
  }

  function navList(){
    const list = document.createElement('ul')
    list.classList.add('flex', 'items-center', 'justify-center', 'gap-x-4', 'text-lg', 'md:text-xl', 'font-logo', 'cursor-pointer')

    const links = ['Home', 'Menu', 'Contact']

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
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");





function display() {
    (0,_nav_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
    ;(0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])()

    const navItems = document.querySelectorAll('.item')

    navItems.forEach(item => {
      item.addEventListener('click', () => {
        const elements = document.querySelector('.elements')
        elements.remove()

        if(item.id == 'menu'){
          (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])()
        } else if(item.id == 'contact'){
          (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__["default"])()
        } else {
          (0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
        }
      })
    });
  }

display()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMxQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN2Q2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLFFBQVE7QUFDM0I7QUFDQSxvQ0FBb0MsRUFBRTtBQUN0Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbkJlO0FBQ2Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7Ozs7O1VDaENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOa0M7QUFDRjtBQUNFO0FBQ007O0FBRXhDO0FBQ0EsSUFBSSxtREFBUTtBQUNaLElBQUkscURBQVM7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLG9EQUFTO0FBQ25CLFVBQVU7QUFDVixVQUFVLHVEQUFZO0FBQ3RCLFVBQVU7QUFDVixVQUFVLG9EQUFTO0FBQ25CO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NjYWxhX2RvbWluaWNhbC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3NjYWxhX2RvbWluaWNhbC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3NjYWxhX2RvbWluaWNhbC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3NjYWxhX2RvbWluaWNhbC8uL3NyYy9uYXYuanMiLCJ3ZWJwYWNrOi8vc2NhbGFfZG9taW5pY2FsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NjYWxhX2RvbWluaWNhbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2NhbGFfZG9taW5pY2FsL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2NhbGFfZG9taW5pY2FsL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2NhbGFfZG9taW5pY2FsLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkQ29udGFjdCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuICAgIGNvbnRlbnQuYXBwZW5kKGNvbnRhY3RQYWdlKCkpXG4gIH1cblxuZnVuY3Rpb24gY29udGFjdFBhZ2UoKXtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2VsZW1lbnRzJywnZmxleCcsICdmbGV4LWNvbCcsICdsZzpmbGV4LXJvdycsICdpdGVtcy1jZW50ZXInLCAnanVzdGlmeS1jZW50ZXInLCAnaC1bODB2aF0nLCAnZ2FwLXgtMTAnLCAnZ2FwLXktNicsICdteC00JylcblxuICBjb250YWluZXIuYXBwZW5kKGNvbnRhY3RUZXh0KCksIGNvbnRhY3RJbWcoKSlcblxuICByZXR1cm4gY29udGFpbmVyXG59XG5cbmZ1bmN0aW9uIGNvbnRhY3RUZXh0KCl7XG4gIGNvbnN0IHRleHRCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHRleHRCbG9jay5jbGFzc0xpc3QuYWRkKCdmbGV4JywgJ2ZsZXgtY29sJywgJ2dhcC15LTMnKVxuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgaGVhZGVyLmlubmVyVGV4dCA9IFwiQ29udGFjdCB1c1wiXG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCd0ZXh0LTZ4bCcsICdmb250LWxvZ28nKVxuXG4gIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIHBob25lLmlubmVyVGV4dCA9IFwiKyg1MDYpIDEyMzQgNTY3OFwiXG4gIHBob25lLmNsYXNzTGlzdC5hZGQoJ3RleHQteGwnLCAnZm9udC1sb2dvJylcblxuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBlbWFpbC5pbm5lclRleHQgPSBcInRoZXJlYWxlbWFpbGdvZXNAaGVyZS5jb21cIlxuICBlbWFpbC5jbGFzc0xpc3QuYWRkKCd0ZXh0LXhsJywgJ2ZvbnQtbG9nbycpXG5cbiAgdGV4dEJsb2NrLmFwcGVuZChoZWFkZXIsIGVtYWlsLCBwaG9uZSlcblxuICByZXR1cm4gdGV4dEJsb2NrXG59XG5cbmZ1bmN0aW9uIGNvbnRhY3RJbWcoKXtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgaW1nLnNyYyA9IFwiLi4vc3JjL2ltZy9mb3VyLmpwZ1wiXG4gIGltZy5hbHQgPSBcInZpZXdcIlxuICBpbWcuY2xhc3NMaXN0LmFkZCgndy1bMzByZW1dJywgJ2xnOnctWzM1cmVtXScsICdyb3VuZGVkLW1kJylcblxuICByZXR1cm4gaW1nXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRIb21lKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG4gICAgXG4gICAgY29udGVudC5hcHBlbmQoaG9tZVBhZ2UoKSlcbiAgfVxuXG5mdW5jdGlvbiBob21lUGFnZSgpe1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZWxlbWVudHMnLCdmbGV4JywgJ2ZsZXgtY29sJywgJ2xnOmZsZXgtcm93JywgJ2l0ZW1zLWNlbnRlcicsICdqdXN0aWZ5LWNlbnRlcicsICdoLVs4MHZoXScsICdnYXAteC0xMCcsICdnYXAteS02JywgJ214LTQnKVxuXG4gIGNvbnRhaW5lci5hcHBlbmQoaG9tZVRleHQoKSwgaG9tZUltZygpKVxuXG4gIHJldHVybiBjb250YWluZXJcbn1cblxuZnVuY3Rpb24gaG9tZVRleHQoKXtcbiAgY29uc3QgdGV4dEJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgdGV4dEJsb2NrLmNsYXNzTGlzdC5hZGQoJ3RleHQtY2VudGVyJywgJ2xnOnRleHQtbGVmdCcpXG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICBoZWFkZXIuaW5uZXJUZXh0ID0gXCJTQ0FMQVwiXG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCd0ZXh0LTd4bCcsICdsZzp0ZXh0LTh4bCcsICdmb250LWxvZ28nLCAndHJhY2tpbmctd2lkZXN0JylcblxuICBjb25zdCBzdWJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgc3ViSGVhZGVyLmlubmVyVGV4dCA9IFwiUmVzdHVyYXVudCBhbmQgQmFyXCJcbiAgc3ViSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3RleHQtMnhsJywgJ2ZvbnQtbG9nbycpXG5cbiAgdGV4dEJsb2NrLmFwcGVuZChoZWFkZXIsIHN1YkhlYWRlcilcblxuICByZXR1cm4gdGV4dEJsb2NrXG59XG5cbmZ1bmN0aW9uIGhvbWVJbWcoKXtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgaW1nLnNyYyA9IFwiLi4vc3JjL2ltZy90aHJlZS5qcGdcIlxuICBpbWcuYWx0ID0gXCJ2aWV3XCJcbiAgaW1nLmNsYXNzTGlzdC5hZGQoJ3ctWzMwcmVtXScsICdsZzp3LVszNXJlbV0nLCAncm91bmRlZC1tZCcpXG5cbiAgcmV0dXJuIGltZ1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWVudSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuICAgIFxuICAgIGNvbnRlbnQuYXBwZW5kKG1lbnVQYWdlKCkpXG4gIH1cblxuICBmdW5jdGlvbiBtZW51UGFnZSgpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2VsZW1lbnRzJywgJ2ZsZXgnLCAnZmxleC1jb2wnLCAnbGc6ZmxleC1yb3cnLCAnaXRlbXMtY2VudGVyJywgJ2p1c3RpZnktY2VudGVyJywgJ2gtZnVsbCcsICdteC00JywgJ215LTQnLCAnZ2FwLXgtNCcsICdnYXAteS0zJylcblxuICAgIGZvcihsZXQgaSA9IDE7IGkgPD0gMjsgaSsrKXtcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgICAgaW1nLnNyYyA9IGAuLi9zcmMvaW1nL21lbnUke2l9LmpwZ2BcbiAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoJ3ctWzI1cmVtXScsICdsZzp3LVsyNnJlbV0nKVxuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoaW1nKVxuICAgIH1cblxuICAgIHJldHVybiBjb250YWluZXJcbiAgfSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTmF2KCkge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpXG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoJ2ZsZXgnLCAnanVzdGlmeS1iZXR3ZWVuJywgJ3B4LTYnLCAncHktNCcpXG5cbiAgICBuYXYuYXBwZW5kKG5hdkljb24oKSwgbmF2TGlzdCgpKVxuXG4gICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKG5hdilcbiAgfVxuXG4gIGZ1bmN0aW9uIG5hdkljb24oKXtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW9uLWljb24nKVxuICAgIGljb24uY2xhc3NMaXN0LmFkZCgndGV4dC0zeGwnLCAnY3Vyc29yLXBvaW50ZXInLCAnaG92ZXI6dGV4dC1bI2Q4YTEyNl0nLCAnZHVyYXRpb24tNTAwJywgJ2l0ZW0nKVxuICAgIGljb24ubmFtZSA9IFwicmVzdGF1cmFudC1vdXRsaW5lXCJcblxuICAgIHJldHVybiBpY29uXG4gIH1cblxuICBmdW5jdGlvbiBuYXZMaXN0KCl7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICBsaXN0LmNsYXNzTGlzdC5hZGQoJ2ZsZXgnLCAnaXRlbXMtY2VudGVyJywgJ2p1c3RpZnktY2VudGVyJywgJ2dhcC14LTQnLCAndGV4dC1sZycsICdtZDp0ZXh0LXhsJywgJ2ZvbnQtbG9nbycsICdjdXJzb3ItcG9pbnRlcicpXG5cbiAgICBjb25zdCBsaW5rcyA9IFsnSG9tZScsICdNZW51JywgJ0NvbnRhY3QnXVxuXG4gICAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgbGkuaWQgPSBsaW5rLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgnaG92ZXI6dGV4dC1bI2Q4YTEyNl0nLCAnZHVyYXRpb24tNTAwJywgJ2l0ZW0nKVxuICAgICAgICBsaS5pbm5lclRleHQgPSBsaW5rXG4gICAgICAgIGxpc3QuYXBwZW5kKGxpKVxuICAgIH0pXG5cbiAgICByZXR1cm4gbGlzdFxuICB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgYnVpbGRIb21lIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgYnVpbGROYXYgZnJvbSAnLi9uYXYuanMnO1xuaW1wb3J0IGJ1aWxkTWVudSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IGJ1aWxkQ29udGFjdCBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG5mdW5jdGlvbiBkaXNwbGF5KCkge1xuICAgIGJ1aWxkTmF2KClcbiAgICBidWlsZEhvbWUoKVxuXG4gICAgY29uc3QgbmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaXRlbScpXG5cbiAgICBuYXZJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudHMnKVxuICAgICAgICBlbGVtZW50cy5yZW1vdmUoKVxuXG4gICAgICAgIGlmKGl0ZW0uaWQgPT0gJ21lbnUnKXtcbiAgICAgICAgICBidWlsZE1lbnUoKVxuICAgICAgICB9IGVsc2UgaWYoaXRlbS5pZCA9PSAnY29udGFjdCcpe1xuICAgICAgICAgIGJ1aWxkQ29udGFjdCgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnVpbGRIb21lKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KTtcbiAgfVxuXG5kaXNwbGF5KClcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==