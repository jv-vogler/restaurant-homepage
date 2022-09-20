/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/contact.js":
/*!***********************************!*\
  !*** ./src/components/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Contact)\n/* harmony export */ });\nfunction Contact() {\r\n  const h = document.createElement('div');\r\n  h.textContent = 'Contact content'\r\n  return h;\r\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/components/contact.js?");

/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\nfunction Home() {\r\n  const h = document.createElement('div');\r\n  h.textContent = 'Home content'\r\n  return h;\r\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/components/home.js?");

/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Menu)\n/* harmony export */ });\nfunction Menu() {\r\n  const h = document.createElement('div');\r\n  h.textContent = 'Menu content'\r\n  return h;\r\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/components/menu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home */ \"./src/components/home.js\");\n/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menu */ \"./src/components/menu.js\");\n/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/contact */ \"./src/components/contact.js\");\n\r\n\r\n\r\n\r\nconst CONTENT = document.querySelector(\"#content\");\r\n\r\nconst loadPage = () => {\r\n  createNav();\r\n  createMain();\r\n  createFooter();\r\n};\r\n\r\n// NAV Setup\r\nconst NAV = document.createElement(\"nav\");\r\nNAV.classList.add(\"nav-wrapper\");\r\n\r\nconst createNav = () => {\r\n  NAV.append(\r\n    createLogo(),\r\n    createNavMenu(\"Home\", \"Menu\", \"Contact\"),\r\n    createSocialMenu(\"facebook\", \"instagram\", \"twitter\")\r\n  );\r\n  CONTENT.appendChild(NAV);\r\n};\r\n\r\nconst createLogo = () => {\r\n  const logo = document.createElement(\"h1\");\r\n  logo.classList.add(\"logo\");\r\n  logo.append(firstLetter(\"S\"), \"ushi \", firstLetter(\"O\"), \"asis\");\r\n  return logo;\r\n};\r\n\r\nconst createNavMenu = (...menuItems) => {\r\n  const menu = document.createElement(\"ul\");\r\n  menu.classList.add(\"nav-menu\");\r\n  for (const item of menuItems) {\r\n    const i = document.createElement(\"li\");\r\n    i.classList.add(\"item\");\r\n    i.textContent = item;\r\n    menu.appendChild(i);\r\n  }\r\n  return menu;\r\n};\r\n\r\nconst createSocialMenu = (...brandName) => {\r\n  const menu = document.createElement(\"section\");\r\n  menu.classList.add(\"social-icons\");\r\n  for (const item of brandName) {\r\n    const i = document.createElement(\"i\");\r\n    i.classList.add(\"fa-brands\", `fa-${item.toLowerCase()}`);\r\n    menu.appendChild(i);\r\n  }\r\n  return menu;\r\n};\r\n\r\n// MAIN Setup\r\nconst MAIN = document.createElement(\"div\");\r\nMAIN.classList.add(\"main\");\r\n\r\nconst createMain = () => {\r\n  MAIN.appendChild((0,_components_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n  CONTENT.appendChild(MAIN);\r\n};\r\n\r\n// FOOTER Setup\r\nconst FOOTER = document.createElement(\"footer\");\r\nFOOTER.classList.add(\"footer\");\r\n\r\nconst createFooter = () => {\r\n  const foo = document.createElement(\"small\");\r\n  foo.textContent = \"\\u00A9 2022 Sushi Oasis. All rights reserved.\";\r\n  FOOTER.appendChild(foo);\r\n  CONTENT.appendChild(FOOTER);\r\n};\r\n\r\n// Utility\r\nconst firstLetter = (letter) => {\r\n  const sp = document.createElement(\"span\");\r\n  sp.textContent = letter.toUpperCase();\r\n  return sp;\r\n};\r\n\r\nloadPage();\r\n\n\n//# sourceURL=webpack://odin-restaurant/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;