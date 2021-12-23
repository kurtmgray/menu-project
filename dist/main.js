/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aboutpage": () => (/* binding */ aboutpage)
/* harmony export */ });
const aboutpage = function(){
    console.log('aboutpage')
}



/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactpage": () => (/* binding */ contactpage)
/* harmony export */ });
const contactpage = function(){
    console.log('contactpage')
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homepage": () => (/* binding */ homepage)
/* harmony export */ });
const homepage = function(){
    const contentDiv = document.querySelector('#content')
    //if(document.querySelectorAll('.container').length  === 0){    
        const homeContainerDiv = document.createElement('div')
        homeContainerDiv.classList.add('container')
        homeContainerDiv.id = 'home'
        homeContainerDiv.innerHTML = '<h1>This is an h1 in the home container</h1>'
        contentDiv.appendChild(homeContainerDiv)
    //}    
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuPage": () => (/* binding */ menuPage)
/* harmony export */ });
let menuItems = [
    {
        type: 'menu',
        title: 'Bacon & Eggs',
        price: '11',
        description: 'Good, old fashioned thick cut, hickory smoked bacon, and farm fresh eggs any way you like it. Served with your choice of toast or hash browns.'
    },
    {
        type: 'menu',
        title: 'Biscuits & Gravy',
        price: '10',
        description: 'Fluffy buttermilk biscuits with our homemade sausage gravy. Served with your choice of toast or hash browns.'
    },
    {
        type: 'menu',
        title: 'Bullshit Salad',
        price: '15',
        description: 'Some unnecessarily long description. Many more words to fill up the space.'
    },
    {
        type: 'menu',
        title: 'Chicken Sando',
        price: '10',
        description: "Another long description, giving the reader of the menu some mouthwatering poetry, so they'll feel better spending their money."
    },
]

const menuPage = function(){    
    if(document.querySelectorAll('.container').length  === 0){    
        const contentDiv = document.querySelector('#content')

        const menuH1 = document.createElement('h1')
        menuH1.innerText = 'This is our Menu'
        contentDiv.appendChild(menuH1)

        const menuContainerDiv = document.createElement('div')
        menuContainerDiv.classList.add('container')
        menuContainerDiv.id = 'menu'
        contentDiv.appendChild(menuContainerDiv)

        const menuHolderDiv = document.createElement('div')
        menuHolderDiv.classList.add('menu-holder')
        menuContainerDiv.appendChild(menuHolderDiv)    
        
        menuItems.forEach(item => {
            if(item.type === 'menu'){
                const itemCardDiv = document.createElement('div')
                itemCardDiv.classList.add('item-card')
                menuHolderDiv.appendChild(itemCardDiv)

                const itemTitleDiv = document.createElement('div')
                itemTitleDiv.classList.add('item-title')
                itemTitleDiv.innerHTML = `
                    <h2>${item.title}</h2>
                    <h2>${item.price}</h2>`
                itemCardDiv.appendChild(itemTitleDiv)
                
                const itemDescriptionDiv = document.createElement('div')
                itemDescriptionDiv.classList.add('item-description')
                itemDescriptionDiv.innerHTML = `
                    <p>${item.description}</p>`
                itemCardDiv.appendChild(itemDescriptionDiv)
            }    
        })
    }
}



// const createDOMNode = (type, className, contents) => {
//   const element = document.createElement(type);
//   element.setAttribute('class', className);

// };

// const iContent = createDOMNode('p','','this is an ice cream test')
// const iceCream = createDOMNode('div', 'ice-cream', iContent)

// console.log(iContent)

/*


  contentDiv.appendChild(
    createDOMNode(
      'div', 
      'menu-container', 
      createDOMNode(
          'div',
          'breakfast-holder',
        createDOMNode(
          'div',
          'item-card',
          createDOMNode(
            'div',
            'item-title',
            [
              createDOMNode('h2',,item.title),
              createDOMNode('h2',,item.price)
            ]
          )
        )
      )
    )
  );

const itemDescriptionDiv = document.createElement('div')
itemDescriptionDiv.classList.add('item-description')
itemDescriptionDiv.innerHTML = `<p>${item.description}</p>`
itemCardDiv.appendChild(itemDescriptionDiv)

// vs
const itemContent = createDOMNode('p', ,item.description)
const itemDescriptionDiv = createDOMNode('div', 'item.description', itemContent)
*/

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
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





const header = function(){
    const body = document.querySelector('body')
    const navbarDiv = document.createElement('div')
    navbarDiv.classList.add('navbar')
    body.prepend(navbarDiv)

        const navtopDiv = document.createElement('div')
        navtopDiv.classList.add('navtop')
        navbarDiv.appendChild(navtopDiv)

        const navbarImg = document.createElement('img')
        navbarImg.src = 'https://via.placeholder.com/50'
        navtopDiv.appendChild(navbarImg)

        const naviButtonsDiv = document.createElement('div')
        naviButtonsDiv.classList.add('navi-buttons')
        navtopDiv.appendChild(naviButtonsDiv)

        //should make a button factory
            const homeButton = document.createElement('button')
            homeButton.id = 'home'
            homeButton.innerText = 'Home'
            naviButtonsDiv.appendChild(homeButton)

            const menuButton = document.createElement('button')
            menuButton.id = 'menu'
            menuButton.innerText = 'Menu'
            naviButtonsDiv.appendChild(menuButton)

            const aboutButton = document.createElement('button')
            aboutButton.id = 'about'
            aboutButton.innerText = 'About'
            naviButtonsDiv.appendChild(aboutButton)

            const contactButton = document.createElement('button')
            contactButton.id = 'contact'
            contactButton.innerText = 'Contact'
            naviButtonsDiv.appendChild(contactButton)

        const navbtmDiv = document.createElement('div')
        navbtmDiv.classList.add('navbtm')
        navbtmDiv.innerHTML = `
            <h1>Restaurant Title</h1>`
        navbarDiv.appendChild(navbtmDiv)
}


const removeAllChildNodes = function() {
    const contentDiv = document.querySelector('#content')
    while(contentDiv.firstChild){
        contentDiv.removeChild(contentDiv.firstChild)
    }
}
const navEvents = function() {
    const naviButtons =  document.querySelector('.navi-buttons')
    naviButtons.addEventListener('click', e => {
        console.log(e)
        if(e.target.id === 'home'){
            removeAllChildNodes()
            ;(0,_home__WEBPACK_IMPORTED_MODULE_0__.homepage)()
        }
        if(e.target.id === 'menu'){
            removeAllChildNodes()
            ;(0,_menu__WEBPACK_IMPORTED_MODULE_1__.menuPage)()
        }
        if(e.target.id === 'about'){
            removeAllChildNodes()
            ;(0,_about__WEBPACK_IMPORTED_MODULE_2__.aboutpage)()
        }
        if(e.target.id === 'contact'){
            removeAllChildNodes()
            ;(0,_contact__WEBPACK_IMPORTED_MODULE_3__.contactpage)()
        }
    })
}

const init = function() {
    header()
    ;(0,_home__WEBPACK_IMPORTED_MODULE_0__.homepage)()
    navEvents()
}    

init()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixXQUFXO0FBQ3JDLDBCQUEwQixXQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsaUJBQWlCO0FBQzFDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDLGlCQUFpQjtBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDbEhBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOa0M7QUFDQTtBQUNFO0FBQ0k7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0RBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnREFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtEQUFTO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0RBQVc7QUFDdkI7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLElBQUksZ0RBQVE7QUFDWjtBQUNBOztBQUVBLE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZW51LXByb2plY3QvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vbWVudS1wcm9qZWN0Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vbWVudS1wcm9qZWN0Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vbWVudS1wcm9qZWN0Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vbWVudS1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21lbnUtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWVudS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWVudS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWVudS1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFib3V0cGFnZSA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc29sZS5sb2coJ2Fib3V0cGFnZScpXG59XG5cbmV4cG9ydCB7YWJvdXRwYWdlfSIsImNvbnN0IGNvbnRhY3RwYWdlID0gZnVuY3Rpb24oKXtcbiAgICBjb25zb2xlLmxvZygnY29udGFjdHBhZ2UnKVxufVxuXG5leHBvcnQge2NvbnRhY3RwYWdlfSIsImNvbnN0IGhvbWVwYWdlID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuICAgIC8vaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRhaW5lcicpLmxlbmd0aCAgPT09IDApeyAgICBcbiAgICAgICAgY29uc3QgaG9tZUNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGhvbWVDb250YWluZXJEaXYuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJylcbiAgICAgICAgaG9tZUNvbnRhaW5lckRpdi5pZCA9ICdob21lJ1xuICAgICAgICBob21lQ29udGFpbmVyRGl2LmlubmVySFRNTCA9ICc8aDE+VGhpcyBpcyBhbiBoMSBpbiB0aGUgaG9tZSBjb250YWluZXI8L2gxPidcbiAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChob21lQ29udGFpbmVyRGl2KVxuICAgIC8vfSAgICBcbn1cblxuZXhwb3J0IHtob21lcGFnZX0iLCJsZXQgbWVudUl0ZW1zID0gW1xuICAgIHtcbiAgICAgICAgdHlwZTogJ21lbnUnLFxuICAgICAgICB0aXRsZTogJ0JhY29uICYgRWdncycsXG4gICAgICAgIHByaWNlOiAnMTEnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0dvb2QsIG9sZCBmYXNoaW9uZWQgdGhpY2sgY3V0LCBoaWNrb3J5IHNtb2tlZCBiYWNvbiwgYW5kIGZhcm0gZnJlc2ggZWdncyBhbnkgd2F5IHlvdSBsaWtlIGl0LiBTZXJ2ZWQgd2l0aCB5b3VyIGNob2ljZSBvZiB0b2FzdCBvciBoYXNoIGJyb3ducy4nXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHR5cGU6ICdtZW51JyxcbiAgICAgICAgdGl0bGU6ICdCaXNjdWl0cyAmIEdyYXZ5JyxcbiAgICAgICAgcHJpY2U6ICcxMCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRmx1ZmZ5IGJ1dHRlcm1pbGsgYmlzY3VpdHMgd2l0aCBvdXIgaG9tZW1hZGUgc2F1c2FnZSBncmF2eS4gU2VydmVkIHdpdGggeW91ciBjaG9pY2Ugb2YgdG9hc3Qgb3IgaGFzaCBicm93bnMuJ1xuICAgIH0sXG4gICAge1xuICAgICAgICB0eXBlOiAnbWVudScsXG4gICAgICAgIHRpdGxlOiAnQnVsbHNoaXQgU2FsYWQnLFxuICAgICAgICBwcmljZTogJzE1JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdTb21lIHVubmVjZXNzYXJpbHkgbG9uZyBkZXNjcmlwdGlvbi4gTWFueSBtb3JlIHdvcmRzIHRvIGZpbGwgdXAgdGhlIHNwYWNlLidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdHlwZTogJ21lbnUnLFxuICAgICAgICB0aXRsZTogJ0NoaWNrZW4gU2FuZG8nLFxuICAgICAgICBwcmljZTogJzEwJyxcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQW5vdGhlciBsb25nIGRlc2NyaXB0aW9uLCBnaXZpbmcgdGhlIHJlYWRlciBvZiB0aGUgbWVudSBzb21lIG1vdXRod2F0ZXJpbmcgcG9ldHJ5LCBzbyB0aGV5J2xsIGZlZWwgYmV0dGVyIHNwZW5kaW5nIHRoZWlyIG1vbmV5LlwiXG4gICAgfSxcbl1cblxuY29uc3QgbWVudVBhZ2UgPSBmdW5jdGlvbigpeyAgICBcbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGFpbmVyJykubGVuZ3RoICA9PT0gMCl7ICAgIFxuICAgICAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuXG4gICAgICAgIGNvbnN0IG1lbnVIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICAgICAgbWVudUgxLmlubmVyVGV4dCA9ICdUaGlzIGlzIG91ciBNZW51J1xuICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1lbnVIMSlcblxuICAgICAgICBjb25zdCBtZW51Q29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbWVudUNvbnRhaW5lckRpdi5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKVxuICAgICAgICBtZW51Q29udGFpbmVyRGl2LmlkID0gJ21lbnUnXG4gICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lckRpdilcblxuICAgICAgICBjb25zdCBtZW51SG9sZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbWVudUhvbGRlckRpdi5jbGFzc0xpc3QuYWRkKCdtZW51LWhvbGRlcicpXG4gICAgICAgIG1lbnVDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQobWVudUhvbGRlckRpdikgICAgXG4gICAgICAgIFxuICAgICAgICBtZW51SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmKGl0ZW0udHlwZSA9PT0gJ21lbnUnKXtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtQ2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgaXRlbUNhcmREaXYuY2xhc3NMaXN0LmFkZCgnaXRlbS1jYXJkJylcbiAgICAgICAgICAgICAgICBtZW51SG9sZGVyRGl2LmFwcGVuZENoaWxkKGl0ZW1DYXJkRGl2KVxuXG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbVRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICBpdGVtVGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgnaXRlbS10aXRsZScpXG4gICAgICAgICAgICAgICAgaXRlbVRpdGxlRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICAgICAgPGgyPiR7aXRlbS50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICA8aDI+JHtpdGVtLnByaWNlfTwvaDI+YFxuICAgICAgICAgICAgICAgIGl0ZW1DYXJkRGl2LmFwcGVuZENoaWxkKGl0ZW1UaXRsZURpdilcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtRGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgIGl0ZW1EZXNjcmlwdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdpdGVtLWRlc2NyaXB0aW9uJylcbiAgICAgICAgICAgICAgICBpdGVtRGVzY3JpcHRpb25EaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgICAgICA8cD4ke2l0ZW0uZGVzY3JpcHRpb259PC9wPmBcbiAgICAgICAgICAgICAgICBpdGVtQ2FyZERpdi5hcHBlbmRDaGlsZChpdGVtRGVzY3JpcHRpb25EaXYpXG4gICAgICAgICAgICB9ICAgIFxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IHttZW51UGFnZX1cblxuLy8gY29uc3QgY3JlYXRlRE9NTm9kZSA9ICh0eXBlLCBjbGFzc05hbWUsIGNvbnRlbnRzKSA9PiB7XG4vLyAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuLy8gICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzc05hbWUpO1xuXG4vLyB9O1xuXG4vLyBjb25zdCBpQ29udGVudCA9IGNyZWF0ZURPTU5vZGUoJ3AnLCcnLCd0aGlzIGlzIGFuIGljZSBjcmVhbSB0ZXN0Jylcbi8vIGNvbnN0IGljZUNyZWFtID0gY3JlYXRlRE9NTm9kZSgnZGl2JywgJ2ljZS1jcmVhbScsIGlDb250ZW50KVxuXG4vLyBjb25zb2xlLmxvZyhpQ29udGVudClcblxuLypcblxuXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlRE9NTm9kZShcbiAgICAgICdkaXYnLCBcbiAgICAgICdtZW51LWNvbnRhaW5lcicsIFxuICAgICAgY3JlYXRlRE9NTm9kZShcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAnYnJlYWtmYXN0LWhvbGRlcicsXG4gICAgICAgIGNyZWF0ZURPTU5vZGUoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgJ2l0ZW0tY2FyZCcsXG4gICAgICAgICAgY3JlYXRlRE9NTm9kZShcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgJ2l0ZW0tdGl0bGUnLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBjcmVhdGVET01Ob2RlKCdoMicsLGl0ZW0udGl0bGUpLFxuICAgICAgICAgICAgICBjcmVhdGVET01Ob2RlKCdoMicsLGl0ZW0ucHJpY2UpXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xuXG5jb25zdCBpdGVtRGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuaXRlbURlc2NyaXB0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ2l0ZW0tZGVzY3JpcHRpb24nKVxuaXRlbURlc2NyaXB0aW9uRGl2LmlubmVySFRNTCA9IGA8cD4ke2l0ZW0uZGVzY3JpcHRpb259PC9wPmBcbml0ZW1DYXJkRGl2LmFwcGVuZENoaWxkKGl0ZW1EZXNjcmlwdGlvbkRpdilcblxuLy8gdnNcbmNvbnN0IGl0ZW1Db250ZW50ID0gY3JlYXRlRE9NTm9kZSgncCcsICxpdGVtLmRlc2NyaXB0aW9uKVxuY29uc3QgaXRlbURlc2NyaXB0aW9uRGl2ID0gY3JlYXRlRE9NTm9kZSgnZGl2JywgJ2l0ZW0uZGVzY3JpcHRpb24nLCBpdGVtQ29udGVudClcbiovIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBob21lcGFnZSB9IGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgeyBtZW51UGFnZSB9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgeyBhYm91dHBhZ2UgfSBmcm9tICcuL2Fib3V0JztcbmltcG9ydCB7IGNvbnRhY3RwYWdlIH0gZnJvbSAnLi9jb250YWN0JztcblxuY29uc3QgaGVhZGVyID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gICAgY29uc3QgbmF2YmFyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBuYXZiYXJEaXYuY2xhc3NMaXN0LmFkZCgnbmF2YmFyJylcbiAgICBib2R5LnByZXBlbmQobmF2YmFyRGl2KVxuXG4gICAgICAgIGNvbnN0IG5hdnRvcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG5hdnRvcERpdi5jbGFzc0xpc3QuYWRkKCduYXZ0b3AnKVxuICAgICAgICBuYXZiYXJEaXYuYXBwZW5kQ2hpbGQobmF2dG9wRGl2KVxuXG4gICAgICAgIGNvbnN0IG5hdmJhckltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgIG5hdmJhckltZy5zcmMgPSAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzUwJ1xuICAgICAgICBuYXZ0b3BEaXYuYXBwZW5kQ2hpbGQobmF2YmFySW1nKVxuXG4gICAgICAgIGNvbnN0IG5hdmlCdXR0b25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbmF2aUJ1dHRvbnNEaXYuY2xhc3NMaXN0LmFkZCgnbmF2aS1idXR0b25zJylcbiAgICAgICAgbmF2dG9wRGl2LmFwcGVuZENoaWxkKG5hdmlCdXR0b25zRGl2KVxuXG4gICAgICAgIC8vc2hvdWxkIG1ha2UgYSBidXR0b24gZmFjdG9yeVxuICAgICAgICAgICAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICAgICBob21lQnV0dG9uLmlkID0gJ2hvbWUnXG4gICAgICAgICAgICBob21lQnV0dG9uLmlubmVyVGV4dCA9ICdIb21lJ1xuICAgICAgICAgICAgbmF2aUJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbilcblxuICAgICAgICAgICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICAgICBtZW51QnV0dG9uLmlkID0gJ21lbnUnXG4gICAgICAgICAgICBtZW51QnV0dG9uLmlubmVyVGV4dCA9ICdNZW51J1xuICAgICAgICAgICAgbmF2aUJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbilcblxuICAgICAgICAgICAgY29uc3QgYWJvdXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAgICAgYWJvdXRCdXR0b24uaWQgPSAnYWJvdXQnXG4gICAgICAgICAgICBhYm91dEJ1dHRvbi5pbm5lclRleHQgPSAnQWJvdXQnXG4gICAgICAgICAgICBuYXZpQnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChhYm91dEJ1dHRvbilcblxuICAgICAgICAgICAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICAgICBjb250YWN0QnV0dG9uLmlkID0gJ2NvbnRhY3QnXG4gICAgICAgICAgICBjb250YWN0QnV0dG9uLmlubmVyVGV4dCA9ICdDb250YWN0J1xuICAgICAgICAgICAgbmF2aUJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbilcblxuICAgICAgICBjb25zdCBuYXZidG1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBuYXZidG1EaXYuY2xhc3NMaXN0LmFkZCgnbmF2YnRtJylcbiAgICAgICAgbmF2YnRtRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxoMT5SZXN0YXVyYW50IFRpdGxlPC9oMT5gXG4gICAgICAgIG5hdmJhckRpdi5hcHBlbmRDaGlsZChuYXZidG1EaXYpXG59XG5cblxuY29uc3QgcmVtb3ZlQWxsQ2hpbGROb2RlcyA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG4gICAgd2hpbGUoY29udGVudERpdi5maXJzdENoaWxkKXtcbiAgICAgICAgY29udGVudERpdi5yZW1vdmVDaGlsZChjb250ZW50RGl2LmZpcnN0Q2hpbGQpXG4gICAgfVxufVxuY29uc3QgbmF2RXZlbnRzID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbmF2aUJ1dHRvbnMgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmktYnV0dG9ucycpXG4gICAgbmF2aUJ1dHRvbnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgaWYoZS50YXJnZXQuaWQgPT09ICdob21lJyl7XG4gICAgICAgICAgICByZW1vdmVBbGxDaGlsZE5vZGVzKClcbiAgICAgICAgICAgIGhvbWVwYWdlKClcbiAgICAgICAgfVxuICAgICAgICBpZihlLnRhcmdldC5pZCA9PT0gJ21lbnUnKXtcbiAgICAgICAgICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoKVxuICAgICAgICAgICAgbWVudVBhZ2UoKVxuICAgICAgICB9XG4gICAgICAgIGlmKGUudGFyZ2V0LmlkID09PSAnYWJvdXQnKXtcbiAgICAgICAgICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoKVxuICAgICAgICAgICAgYWJvdXRwYWdlKClcbiAgICAgICAgfVxuICAgICAgICBpZihlLnRhcmdldC5pZCA9PT0gJ2NvbnRhY3QnKXtcbiAgICAgICAgICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoKVxuICAgICAgICAgICAgY29udGFjdHBhZ2UoKVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuY29uc3QgaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIGhlYWRlcigpXG4gICAgaG9tZXBhZ2UoKVxuICAgIG5hdkV2ZW50cygpXG59ICAgIFxuXG5pbml0KCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=