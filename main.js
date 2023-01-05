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

  const elements = contactElements()
  elements.forEach((e) =>{
    container.append(e)
  })

  return container
}

function contactElements(){
    const text = contactText()
    const img = contactImg()

    return [text, img]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3BEZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDakRlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixRQUFRO0FBQzNCO0FBQ0Esb0NBQW9DLEVBQUU7QUFDdEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25CZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7Ozs7OztVQzFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTmtDO0FBQ0Y7QUFDRTtBQUNNOztBQUV4QztBQUNBLElBQUksbURBQVE7QUFDWixJQUFJLHFEQUFTOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSxvREFBUztBQUNuQixVQUFVO0FBQ1YsVUFBVSx1REFBWTtBQUN0QixVQUFVO0FBQ1YsVUFBVSxvREFBUztBQUNuQjtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY2FsYV9kb21pbmljYWwvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9zY2FsYV9kb21pbmljYWwvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9zY2FsYV9kb21pbmljYWwvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9zY2FsYV9kb21pbmljYWwvLi9zcmMvbmF2LmpzIiwid2VicGFjazovL3NjYWxhX2RvbWluaWNhbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zY2FsYV9kb21pbmljYWwvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NjYWxhX2RvbWluaWNhbC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NjYWxhX2RvbWluaWNhbC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NjYWxhX2RvbWluaWNhbC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZENvbnRhY3QoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcbiAgICBjb250ZW50LmFwcGVuZChjb250YWN0UGFnZSgpKVxuICB9XG5cbmZ1bmN0aW9uIGNvbnRhY3RQYWdlKCl7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdlbGVtZW50cycsJ2ZsZXgnLCAnZmxleC1jb2wnLCAnbGc6ZmxleC1yb3cnLCAnaXRlbXMtY2VudGVyJywgJ2p1c3RpZnktY2VudGVyJywgJ2gtWzgwdmhdJywgJ2dhcC14LTEwJywgJ2dhcC15LTYnLCAnbXgtNCcpXG5cbiAgY29uc3QgZWxlbWVudHMgPSBjb250YWN0RWxlbWVudHMoKVxuICBlbGVtZW50cy5mb3JFYWNoKChlKSA9PntcbiAgICBjb250YWluZXIuYXBwZW5kKGUpXG4gIH0pXG5cbiAgcmV0dXJuIGNvbnRhaW5lclxufVxuXG5mdW5jdGlvbiBjb250YWN0RWxlbWVudHMoKXtcbiAgICBjb25zdCB0ZXh0ID0gY29udGFjdFRleHQoKVxuICAgIGNvbnN0IGltZyA9IGNvbnRhY3RJbWcoKVxuXG4gICAgcmV0dXJuIFt0ZXh0LCBpbWddXG59XG5cbmZ1bmN0aW9uIGNvbnRhY3RUZXh0KCl7XG4gIGNvbnN0IHRleHRCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHRleHRCbG9jay5jbGFzc0xpc3QuYWRkKCdmbGV4JywgJ2ZsZXgtY29sJywgJ2dhcC15LTMnKVxuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgaGVhZGVyLmlubmVyVGV4dCA9IFwiQ29udGFjdCB1c1wiXG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCd0ZXh0LTZ4bCcsICdmb250LWxvZ28nKVxuXG4gIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIHBob25lLmlubmVyVGV4dCA9IFwiKyg1MDYpIDEyMzQgNTY3OFwiXG4gIHBob25lLmNsYXNzTGlzdC5hZGQoJ3RleHQteGwnLCAnZm9udC1sb2dvJylcblxuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBlbWFpbC5pbm5lclRleHQgPSBcInRoZXJlYWxlbWFpbGdvZXNAaGVyZS5jb21cIlxuICBlbWFpbC5jbGFzc0xpc3QuYWRkKCd0ZXh0LXhsJywgJ2ZvbnQtbG9nbycpXG5cbiAgdGV4dEJsb2NrLmFwcGVuZChoZWFkZXIsIGVtYWlsLCBwaG9uZSlcblxuICByZXR1cm4gdGV4dEJsb2NrXG59XG5cbmZ1bmN0aW9uIGNvbnRhY3RJbWcoKXtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgaW1nLnNyYyA9IFwiLi4vc3JjL2ltZy9mb3VyLmpwZ1wiXG4gIGltZy5hbHQgPSBcInZpZXdcIlxuICBpbWcuY2xhc3NMaXN0LmFkZCgndy1bMzByZW1dJywgJ2xnOnctWzM1cmVtXScsICdyb3VuZGVkLW1kJylcblxuICByZXR1cm4gaW1nXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRIb21lKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG4gICAgXG4gICAgY29udGVudC5hcHBlbmQoaG9tZVBhZ2UoKSlcbiAgfVxuXG5mdW5jdGlvbiBob21lUGFnZSgpe1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZWxlbWVudHMnLCdmbGV4JywgJ2ZsZXgtY29sJywgJ2xnOmZsZXgtcm93JywgJ2l0ZW1zLWNlbnRlcicsICdqdXN0aWZ5LWNlbnRlcicsICdoLVs4MHZoXScsICdnYXAteC0xMCcsICdnYXAteS02JywgJ214LTQnKVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gaG9tZUVsZW1lbnRzKClcbiAgZWxlbWVudHMuZm9yRWFjaCgoZSkgPT57XG4gICAgY29udGFpbmVyLmFwcGVuZChlKVxuICB9KVxuXG4gIHJldHVybiBjb250YWluZXJcbn1cblxuZnVuY3Rpb24gaG9tZUVsZW1lbnRzKCl7XG4gIGNvbnN0IHRleHQgPSBob21lVGV4dCgpXG4gIGNvbnN0IGltZyA9IGhvbWVJbWcoKVxuXG4gIHJldHVybiBbdGV4dCwgaW1nXVxufVxuXG5mdW5jdGlvbiBob21lVGV4dCgpe1xuICBjb25zdCB0ZXh0QmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB0ZXh0QmxvY2suY2xhc3NMaXN0LmFkZCgndGV4dC1jZW50ZXInLCAnbGc6dGV4dC1sZWZ0JylcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gIGhlYWRlci5pbm5lclRleHQgPSBcIlNDQUxBXCJcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3RleHQtN3hsJywgJ2xnOnRleHQtOHhsJywgJ2ZvbnQtbG9nbycsICd0cmFja2luZy13aWRlc3QnKVxuXG4gIGNvbnN0IHN1YkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBzdWJIZWFkZXIuaW5uZXJUZXh0ID0gXCJSZXN0dXJhdW50IGFuZCBCYXJcIlxuICBzdWJIZWFkZXIuY2xhc3NMaXN0LmFkZCgndGV4dC0yeGwnLCAnZm9udC1sb2dvJylcblxuICB0ZXh0QmxvY2suYXBwZW5kKGhlYWRlciwgc3ViSGVhZGVyKVxuXG4gIHJldHVybiB0ZXh0QmxvY2tcbn1cblxuZnVuY3Rpb24gaG9tZUltZygpe1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICBpbWcuc3JjID0gXCIuLi9zcmMvaW1nL3RocmVlLmpwZ1wiXG4gIGltZy5hbHQgPSBcInZpZXdcIlxuICBpbWcuY2xhc3NMaXN0LmFkZCgndy1bMzByZW1dJywgJ2xnOnctWzM1cmVtXScsICdyb3VuZGVkLW1kJylcblxuICByZXR1cm4gaW1nXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNZW51KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG4gICAgXG4gICAgY29udGVudC5hcHBlbmQobWVudVBhZ2UoKSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG1lbnVQYWdlKCl7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZWxlbWVudHMnLCAnZmxleCcsICdmbGV4LWNvbCcsICdsZzpmbGV4LXJvdycsICdpdGVtcy1jZW50ZXInLCAnanVzdGlmeS1jZW50ZXInLCAnaC1mdWxsJywgJ214LTQnLCAnbXktNCcsICdnYXAteC00JywgJ2dhcC15LTMnKVxuXG4gICAgZm9yKGxldCBpID0gMTsgaSA8PSAyOyBpKyspe1xuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICAgICBpbWcuc3JjID0gYC4uL3NyYy9pbWcvbWVudSR7aX0uanBnYFxuICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZCgndy1bMjVyZW1dJywgJ2xnOnctWzI2cmVtXScpXG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChpbWcpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRhaW5lclxuICB9IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGROYXYoKSB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2JylcbiAgICBuYXYuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdqdXN0aWZ5LWJldHdlZW4nLCAncHgtNicsICdweS00JylcbiAgICBcbiAgICBjb25zdCBlbGVtZW50cyA9IG5hdkVsZW1lbnRzKClcbiAgICBlbGVtZW50cy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIG5hdi5hcHBlbmQoZSlcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKG5hdilcbiAgfVxuXG4gIGZ1bmN0aW9uIG5hdkVsZW1lbnRzKCl7XG4gICAgY29uc3QgaWNvbiA9IG5hdkljb24oKVxuICAgIGNvbnN0IGxpc3QgPSBuYXZMaXN0KClcblxuICAgIHJldHVybiBbaWNvbiwgbGlzdF1cbiAgfVxuXG4gIGZ1bmN0aW9uIG5hdkljb24oKXtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW9uLWljb24nKVxuICAgIGljb24uY2xhc3NMaXN0LmFkZCgndGV4dC0zeGwnLCAnY3Vyc29yLXBvaW50ZXInLCAnaG92ZXI6dGV4dC1bI2Q4YTEyNl0nLCAnZHVyYXRpb24tNTAwJylcbiAgICBpY29uLm5hbWUgPSBcInJlc3RhdXJhbnQtb3V0bGluZVwiXG5cbiAgICByZXR1cm4gaWNvblxuICB9XG5cbiAgZnVuY3Rpb24gbmF2TGlzdCgpe1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgbGlzdC5jbGFzc0xpc3QuYWRkKCdmbGV4JywgJ2l0ZW1zLWNlbnRlcicsICdqdXN0aWZ5LWNlbnRlcicsICdnYXAteC00JywgJ3RleHQtbGcnLCAnbWQ6dGV4dC14bCcsICdmb250LWxvZ28nLCAnY3Vyc29yLXBvaW50ZXInKVxuXG4gICAgY29uc3QgbGlua3MgPSBbJ0hvbWUnLCAnTWVudScsICdDb250YWN0J11cblxuICAgIGxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgIGxpLmlkID0gbGluay50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ2hvdmVyOnRleHQtWyNkOGExMjZdJywgJ2R1cmF0aW9uLTUwMCcsICdpdGVtJylcbiAgICAgICAgbGkuaW5uZXJUZXh0ID0gbGlua1xuICAgICAgICBsaXN0LmFwcGVuZChsaSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIGxpc3RcbiAgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGJ1aWxkSG9tZSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IGJ1aWxkTmF2IGZyb20gJy4vbmF2LmpzJztcbmltcG9ydCBidWlsZE1lbnUgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBidWlsZENvbnRhY3QgZnJvbSAnLi9jb250YWN0LmpzJztcblxuZnVuY3Rpb24gZGlzcGxheSgpIHtcbiAgICBidWlsZE5hdigpXG4gICAgYnVpbGRIb21lKClcblxuICAgIGNvbnN0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLml0ZW0nKVxuXG4gICAgbmF2SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRzJylcbiAgICAgICAgZWxlbWVudHMucmVtb3ZlKClcblxuICAgICAgICBpZihpdGVtLmlkID09ICdtZW51Jyl7XG4gICAgICAgICAgYnVpbGRNZW51KClcbiAgICAgICAgfSBlbHNlIGlmKGl0ZW0uaWQgPT0gJ2NvbnRhY3QnKXtcbiAgICAgICAgICBidWlsZENvbnRhY3QoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJ1aWxkSG9tZSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSk7XG4gIH1cblxuZGlzcGxheSgpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=