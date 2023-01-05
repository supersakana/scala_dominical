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
    console.log('werk')
    
    // content.append(homePage())
  }

function contentPage(){
  const container = document.createElement('div')
  container.classList.add('elements','flex', 'flex-col', 'lg:flex-row', 'items-center', 'justify-center', 'h-[80vh]', 'gap-x-10', 'gap-y-6', 'mx-4')

  const elements = contactElements()
  elements.forEach((e) =>{
    container.append(e)
  })

  return container
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
    container.classList.add('elements', 'flex', 'flex-col', 'lg:flex-row', 'items-center', 'justify-center', 'h-full', 'mx-4', 'my-4', 'gap-x-4', 'gap-y-3')

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
    ;(0,_contact_js__WEBPACK_IMPORTED_MODULE_3__["default"])()

    const navItems = document.querySelectorAll('.item')

    navItems.forEach(item => {
      item.addEventListener('click', () => {
        const elements = document.querySelector('.elements')
        elements.remove()

        if(item.id == 'menu'){
          (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2pCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2pEZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsUUFBUTtBQUMzQjtBQUNBLG9DQUFvQyxFQUFFO0FBQ3RDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNuQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOzs7Ozs7VUMxQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05rQztBQUNGO0FBQ0U7QUFDTTs7QUFFeEM7QUFDQSxJQUFJLG1EQUFRO0FBQ1osSUFBSSxxREFBUztBQUNiLElBQUksd0RBQVk7O0FBRWhCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSxvREFBUztBQUNuQixVQUFVO0FBQ1YsVUFBVSxvREFBUztBQUNuQjtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY2FsYV9kb21pbmljYWwvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9zY2FsYV9kb21pbmljYWwvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9zY2FsYV9kb21pbmljYWwvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9zY2FsYV9kb21pbmljYWwvLi9zcmMvbmF2LmpzIiwid2VicGFjazovL3NjYWxhX2RvbWluaWNhbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zY2FsYV9kb21pbmljYWwvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NjYWxhX2RvbWluaWNhbC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NjYWxhX2RvbWluaWNhbC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NjYWxhX2RvbWluaWNhbC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZENvbnRhY3QoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcbiAgICBjb25zb2xlLmxvZygnd2VyaycpXG4gICAgXG4gICAgLy8gY29udGVudC5hcHBlbmQoaG9tZVBhZ2UoKSlcbiAgfVxuXG5mdW5jdGlvbiBjb250ZW50UGFnZSgpe1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZWxlbWVudHMnLCdmbGV4JywgJ2ZsZXgtY29sJywgJ2xnOmZsZXgtcm93JywgJ2l0ZW1zLWNlbnRlcicsICdqdXN0aWZ5LWNlbnRlcicsICdoLVs4MHZoXScsICdnYXAteC0xMCcsICdnYXAteS02JywgJ214LTQnKVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gY29udGFjdEVsZW1lbnRzKClcbiAgZWxlbWVudHMuZm9yRWFjaCgoZSkgPT57XG4gICAgY29udGFpbmVyLmFwcGVuZChlKVxuICB9KVxuXG4gIHJldHVybiBjb250YWluZXJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEhvbWUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcbiAgICBcbiAgICBjb250ZW50LmFwcGVuZChob21lUGFnZSgpKVxuICB9XG5cbmZ1bmN0aW9uIGhvbWVQYWdlKCl7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdlbGVtZW50cycsJ2ZsZXgnLCAnZmxleC1jb2wnLCAnbGc6ZmxleC1yb3cnLCAnaXRlbXMtY2VudGVyJywgJ2p1c3RpZnktY2VudGVyJywgJ2gtWzgwdmhdJywgJ2dhcC14LTEwJywgJ2dhcC15LTYnLCAnbXgtNCcpXG4gIFxuICBjb25zdCBlbGVtZW50cyA9IGhvbWVFbGVtZW50cygpXG4gIGVsZW1lbnRzLmZvckVhY2goKGUpID0+e1xuICAgIGNvbnRhaW5lci5hcHBlbmQoZSlcbiAgfSlcblxuICByZXR1cm4gY29udGFpbmVyXG59XG5cbmZ1bmN0aW9uIGhvbWVFbGVtZW50cygpe1xuICBjb25zdCB0ZXh0ID0gaG9tZVRleHQoKVxuICBjb25zdCBpbWcgPSBob21lSW1nKClcblxuICByZXR1cm4gW3RleHQsIGltZ11cbn1cblxuZnVuY3Rpb24gaG9tZVRleHQoKXtcbiAgY29uc3QgdGV4dEJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgdGV4dEJsb2NrLmNsYXNzTGlzdC5hZGQoJ3RleHQtY2VudGVyJywgJ2xnOnRleHQtbGVmdCcpXG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gIHRpdGxlLmlubmVyVGV4dCA9IFwiU0NBTEFcIlxuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0ZXh0LTd4bCcsICdsZzp0ZXh0LTh4bCcsICdmb250LWxvZ28nLCAndHJhY2tpbmctd2lkZXN0JylcblxuICBjb25zdCBzdWJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBzdWJUaXRsZS5pbm5lclRleHQgPSBcIlJlc3R1cmF1bnQgYW5kIEJhclwiXG4gIHN1YlRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RleHQtMnhsJywgJ2ZvbnQtbG9nbycpXG5cbiAgdGV4dEJsb2NrLmFwcGVuZCh0aXRsZSwgc3ViVGl0bGUpXG5cbiAgcmV0dXJuIHRleHRCbG9ja1xufVxuXG5mdW5jdGlvbiBob21lSW1nKCl7XG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gIGltZy5zcmMgPSBcIi4uL3NyYy9pbWcvdGhyZWUuanBnXCJcbiAgaW1nLmFsdCA9IFwidmlld1wiXG4gIGltZy5jbGFzc0xpc3QuYWRkKCd3LVszMHJlbV0nLCAnbGc6dy1bMzVyZW1dJywgJ3JvdW5kZWQtbWQnKVxuXG4gIHJldHVybiBpbWdcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1lbnUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcbiAgICBcbiAgICBjb250ZW50LmFwcGVuZChtZW51UGFnZSgpKVxuICB9XG5cbiAgZnVuY3Rpb24gbWVudVBhZ2UoKXtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdlbGVtZW50cycsICdmbGV4JywgJ2ZsZXgtY29sJywgJ2xnOmZsZXgtcm93JywgJ2l0ZW1zLWNlbnRlcicsICdqdXN0aWZ5LWNlbnRlcicsICdoLWZ1bGwnLCAnbXgtNCcsICdteS00JywgJ2dhcC14LTQnLCAnZ2FwLXktMycpXG5cbiAgICBmb3IobGV0IGkgPSAxOyBpIDw9IDI7IGkrKyl7XG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgIGltZy5zcmMgPSBgLi4vc3JjL2ltZy9tZW51JHtpfS5qcGdgXG4gICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKCd3LVszMHJlbV0nLCAnbGc6dy1bMzByZW1dJylcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kKGltZylcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGFpbmVyXG4gIH0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE5hdigpIHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKVxuICAgIG5hdi5jbGFzc0xpc3QuYWRkKCdmbGV4JywgJ2p1c3RpZnktYmV0d2VlbicsICdweC02JywgJ3B5LTQnKVxuICAgIFxuICAgIGNvbnN0IGVsZW1lbnRzID0gbmF2RWxlbWVudHMoKVxuICAgIGVsZW1lbnRzLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgbmF2LmFwcGVuZChlKVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5ib2R5LnByZXBlbmQobmF2KVxuICB9XG5cbiAgZnVuY3Rpb24gbmF2RWxlbWVudHMoKXtcbiAgICBjb25zdCBpY29uID0gbmF2SWNvbigpXG4gICAgY29uc3QgbGlzdCA9IG5hdkxpc3QoKVxuXG4gICAgcmV0dXJuIFtpY29uLCBsaXN0XVxuICB9XG5cbiAgZnVuY3Rpb24gbmF2SWNvbigpe1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpb24taWNvbicpXG4gICAgaWNvbi5jbGFzc0xpc3QuYWRkKCd0ZXh0LTN4bCcsICdjdXJzb3ItcG9pbnRlcicsICdob3Zlcjp0ZXh0LVsjZDhhMTI2XScsICdkdXJhdGlvbi01MDAnKVxuICAgIGljb24ubmFtZSA9IFwicmVzdGF1cmFudC1vdXRsaW5lXCJcblxuICAgIHJldHVybiBpY29uXG4gIH1cblxuICBmdW5jdGlvbiBuYXZMaXN0KCl7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICBsaXN0LmNsYXNzTGlzdC5hZGQoJ2ZsZXgnLCAnaXRlbXMtY2VudGVyJywgJ2p1c3RpZnktY2VudGVyJywgJ2dhcC14LTQnLCAndGV4dC1sZycsICdtZDp0ZXh0LXhsJywgJ2ZvbnQtbG9nbycsICdjdXJzb3ItcG9pbnRlcicpXG5cbiAgICBjb25zdCBsaW5rcyA9IFsnSG9tZScsICdNZW51JywgJ0NvbnRhY3QnXVxuXG4gICAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgbGkuaWQgPSBsaW5rLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgnaG92ZXI6dGV4dC1bI2Q4YTEyNl0nLCAnZHVyYXRpb24tNTAwJywgJ2l0ZW0nKVxuICAgICAgICBsaS5pbm5lclRleHQgPSBsaW5rXG4gICAgICAgIGxpc3QuYXBwZW5kKGxpKVxuICAgIH0pXG5cbiAgICByZXR1cm4gbGlzdFxuICB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgYnVpbGRIb21lIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgYnVpbGROYXYgZnJvbSAnLi9uYXYuanMnO1xuaW1wb3J0IGJ1aWxkTWVudSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IGJ1aWxkQ29udGFjdCBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG5mdW5jdGlvbiBkaXNwbGF5KCkge1xuICAgIGJ1aWxkTmF2KClcbiAgICBidWlsZEhvbWUoKVxuICAgIGJ1aWxkQ29udGFjdCgpXG5cbiAgICBjb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtJylcblxuICAgIG5hdkl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50cycpXG4gICAgICAgIGVsZW1lbnRzLnJlbW92ZSgpXG5cbiAgICAgICAgaWYoaXRlbS5pZCA9PSAnbWVudScpe1xuICAgICAgICAgIGJ1aWxkTWVudSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnVpbGRIb21lKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KTtcbiAgfVxuXG5kaXNwbGF5KClcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==