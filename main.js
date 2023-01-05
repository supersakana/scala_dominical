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
    icon.classList.add('text-4xl', 'cursor-pointer', 'hover:text-[#d8a126]', 'duration-500', 'item')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMxQ2U7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdENlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixRQUFRO0FBQzNCO0FBQ0Esb0NBQW9DLEVBQUU7QUFDdEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25CZTtBQUNmO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7Ozs7OztVQ2hDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTmtDO0FBQ0Y7QUFDRTtBQUNNOztBQUV4QztBQUNBLElBQUksbURBQVE7QUFDWixJQUFJLHFEQUFTOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSxvREFBUztBQUNuQixVQUFVO0FBQ1YsVUFBVSx1REFBWTtBQUN0QixVQUFVO0FBQ1YsVUFBVSxvREFBUztBQUNuQjtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY2FsYV9kb21pbmljYWwvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9zY2FsYV9kb21pbmljYWwvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9zY2FsYV9kb21pbmljYWwvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9zY2FsYV9kb21pbmljYWwvLi9zcmMvbmF2LmpzIiwid2VicGFjazovL3NjYWxhX2RvbWluaWNhbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zY2FsYV9kb21pbmljYWwvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NjYWxhX2RvbWluaWNhbC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NjYWxhX2RvbWluaWNhbC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NjYWxhX2RvbWluaWNhbC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZENvbnRhY3QoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcbiAgICBjb250ZW50LmFwcGVuZChjb250YWN0UGFnZSgpKVxuICB9XG5cbmZ1bmN0aW9uIGNvbnRhY3RQYWdlKCl7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdlbGVtZW50cycsJ2ZsZXgnLCAnZmxleC1jb2wnLCAnbGc6ZmxleC1yb3cnLCAnaXRlbXMtY2VudGVyJywgJ2p1c3RpZnktY2VudGVyJywgJ2gtWzgwdmhdJywgJ2dhcC14LTEwJywgJ2dhcC15LTYnLCAnbXgtNCcpXG5cbiAgY29udGFpbmVyLmFwcGVuZChjb250YWN0VGV4dCgpLCBjb250YWN0SW1nKCkpXG5cbiAgcmV0dXJuIGNvbnRhaW5lclxufVxuXG5mdW5jdGlvbiBjb250YWN0VGV4dCgpe1xuICBjb25zdCB0ZXh0QmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB0ZXh0QmxvY2suY2xhc3NMaXN0LmFkZCgnZmxleCcsICdmbGV4LWNvbCcsICdnYXAteS0zJylcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gIGhlYWRlci5pbm5lclRleHQgPSBcIkNvbnRhY3QgdXNcIlxuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgndGV4dC02eGwnLCAnZm9udC1sb2dvJylcblxuICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBwaG9uZS5pbm5lclRleHQgPSBcIisoNTA2KSAxMjM0IDU2NzhcIlxuICBwaG9uZS5jbGFzc0xpc3QuYWRkKCd0ZXh0LXhsJywgJ2ZvbnQtbG9nbycpXG5cbiAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgZW1haWwuaW5uZXJUZXh0ID0gXCJ0aGVyZWFsZW1haWxnb2VzQGhlcmUuY29tXCJcbiAgZW1haWwuY2xhc3NMaXN0LmFkZCgndGV4dC14bCcsICdmb250LWxvZ28nKVxuXG4gIHRleHRCbG9jay5hcHBlbmQoaGVhZGVyLCBlbWFpbCwgcGhvbmUpXG5cbiAgcmV0dXJuIHRleHRCbG9ja1xufVxuXG5mdW5jdGlvbiBjb250YWN0SW1nKCl7XG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gIGltZy5zcmMgPSBcIi4uL3NyYy9pbWcvZm91ci5qcGdcIlxuICBpbWcuYWx0ID0gXCJ2aWV3XCJcbiAgaW1nLmNsYXNzTGlzdC5hZGQoJ3ctWzMwcmVtXScsICdsZzp3LVszNXJlbV0nLCAncm91bmRlZC1tZCcpXG5cbiAgcmV0dXJuIGltZ1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkSG9tZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuICAgIGNvbnRlbnQuYXBwZW5kKGhvbWVQYWdlKCkpXG4gIH1cblxuZnVuY3Rpb24gaG9tZVBhZ2UoKXtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2VsZW1lbnRzJywnZmxleCcsICdmbGV4LWNvbCcsICdsZzpmbGV4LXJvdycsICdpdGVtcy1jZW50ZXInLCAnanVzdGlmeS1jZW50ZXInLCAnaC1bODB2aF0nLCAnZ2FwLXgtMTAnLCAnZ2FwLXktNicsICdteC00JylcblxuICBjb250YWluZXIuYXBwZW5kKGhvbWVUZXh0KCksIGhvbWVJbWcoKSlcblxuICByZXR1cm4gY29udGFpbmVyXG59XG5cbmZ1bmN0aW9uIGhvbWVUZXh0KCl7XG4gIGNvbnN0IHRleHRCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHRleHRCbG9jay5jbGFzc0xpc3QuYWRkKCd0ZXh0LWNlbnRlcicsICdsZzp0ZXh0LWxlZnQnKVxuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgaGVhZGVyLmlubmVyVGV4dCA9IFwiU0NBTEFcIlxuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgndGV4dC03eGwnLCAnbGc6dGV4dC04eGwnLCAnZm9udC1sb2dvJywgJ3RyYWNraW5nLXdpZGVzdCcpXG5cbiAgY29uc3Qgc3ViSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIHN1YkhlYWRlci5pbm5lclRleHQgPSBcIlJlc3R1cmF1bnQgYW5kIEJhclwiXG4gIHN1YkhlYWRlci5jbGFzc0xpc3QuYWRkKCd0ZXh0LTJ4bCcsICdmb250LWxvZ28nKVxuXG4gIHRleHRCbG9jay5hcHBlbmQoaGVhZGVyLCBzdWJIZWFkZXIpXG5cbiAgcmV0dXJuIHRleHRCbG9ja1xufVxuXG5mdW5jdGlvbiBob21lSW1nKCl7XG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gIGltZy5zcmMgPSBcIi4uL3NyYy9pbWcvdGhyZWUuanBnXCJcbiAgaW1nLmFsdCA9IFwidmlld1wiXG4gIGltZy5jbGFzc0xpc3QuYWRkKCd3LVszMHJlbV0nLCAnbGc6dy1bMzVyZW1dJywgJ3JvdW5kZWQtbWQnKVxuXG4gIHJldHVybiBpbWdcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1lbnUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcbiAgICBcbiAgICBjb250ZW50LmFwcGVuZChtZW51UGFnZSgpKVxuICB9XG5cbiAgZnVuY3Rpb24gbWVudVBhZ2UoKXtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdlbGVtZW50cycsICdmbGV4JywgJ2ZsZXgtY29sJywgJ2xnOmZsZXgtcm93JywgJ2l0ZW1zLWNlbnRlcicsICdqdXN0aWZ5LWNlbnRlcicsICdoLWZ1bGwnLCAnbXgtNCcsICdteS00JywgJ2dhcC14LTQnLCAnZ2FwLXktMycpXG5cbiAgICBmb3IobGV0IGkgPSAxOyBpIDw9IDI7IGkrKyl7XG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgIGltZy5zcmMgPSBgLi4vc3JjL2ltZy9tZW51JHtpfS5qcGdgXG4gICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKCd3LVsyNXJlbV0nLCAnbGc6dy1bMjZyZW1dJylcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kKGltZylcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGFpbmVyXG4gIH0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE5hdigpIHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKVxuICAgIG5hdi5jbGFzc0xpc3QuYWRkKCdmbGV4JywgJ2p1c3RpZnktYmV0d2VlbicsICdweC02JywgJ3B5LTQnKVxuXG4gICAgbmF2LmFwcGVuZChuYXZJY29uKCksIG5hdkxpc3QoKSlcblxuICAgIGRvY3VtZW50LmJvZHkucHJlcGVuZChuYXYpXG4gIH1cblxuICBmdW5jdGlvbiBuYXZJY29uKCl7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lvbi1pY29uJylcbiAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ3RleHQtNHhsJywgJ2N1cnNvci1wb2ludGVyJywgJ2hvdmVyOnRleHQtWyNkOGExMjZdJywgJ2R1cmF0aW9uLTUwMCcsICdpdGVtJylcbiAgICBpY29uLm5hbWUgPSBcInJlc3RhdXJhbnQtb3V0bGluZVwiXG5cbiAgICByZXR1cm4gaWNvblxuICB9XG5cbiAgZnVuY3Rpb24gbmF2TGlzdCgpe1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgbGlzdC5jbGFzc0xpc3QuYWRkKCdmbGV4JywgJ2l0ZW1zLWNlbnRlcicsICdqdXN0aWZ5LWNlbnRlcicsICdnYXAteC00JywgJ3RleHQtbGcnLCAnbWQ6dGV4dC14bCcsICdmb250LWxvZ28nLCAnY3Vyc29yLXBvaW50ZXInKVxuXG4gICAgY29uc3QgbGlua3MgPSBbJ0hvbWUnLCAnTWVudScsICdDb250YWN0J11cblxuICAgIGxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgIGxpLmlkID0gbGluay50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ2hvdmVyOnRleHQtWyNkOGExMjZdJywgJ2R1cmF0aW9uLTUwMCcsICdpdGVtJylcbiAgICAgICAgbGkuaW5uZXJUZXh0ID0gbGlua1xuICAgICAgICBsaXN0LmFwcGVuZChsaSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIGxpc3RcbiAgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGJ1aWxkSG9tZSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IGJ1aWxkTmF2IGZyb20gJy4vbmF2LmpzJztcbmltcG9ydCBidWlsZE1lbnUgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBidWlsZENvbnRhY3QgZnJvbSAnLi9jb250YWN0LmpzJztcblxuZnVuY3Rpb24gZGlzcGxheSgpIHtcbiAgICBidWlsZE5hdigpXG4gICAgYnVpbGRIb21lKClcblxuICAgIGNvbnN0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLml0ZW0nKVxuXG4gICAgbmF2SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRzJylcbiAgICAgICAgZWxlbWVudHMucmVtb3ZlKClcblxuICAgICAgICBpZihpdGVtLmlkID09ICdtZW51Jyl7XG4gICAgICAgICAgYnVpbGRNZW51KClcbiAgICAgICAgfSBlbHNlIGlmKGl0ZW0uaWQgPT0gJ2NvbnRhY3QnKXtcbiAgICAgICAgICBidWlsZENvbnRhY3QoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJ1aWxkSG9tZSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSk7XG4gIH1cblxuZGlzcGxheSgpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=