/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const CONTENT = document.querySelector(\"#content\");\r\nconst NAV = document.createElement(\"nav\");\r\nNAV.classList.add(\"nav-wrapper\");\r\n\r\nconst MAIN = document.createElement(\"div\");\r\nMAIN.classList.add(\"main\");\r\n\r\nconst FOOTER = document.createElement(\"footer\");\r\nFOOTER.classList.add(\"footer\");\r\n\r\n// NAV Setup\r\nconst createNav = () => {\r\n  NAV.append(\r\n    createLogo(),\r\n    createNavMenu(\"Home\", \"Menu\", \"Contact\"),\r\n    createSocialMenu(\"facebook\", \"instagram\", \"twitter\")\r\n  );\r\n  CONTENT.appendChild(NAV);\r\n};\r\n\r\nconst createLogo = () => {\r\n  const logo = document.createElement(\"h1\");\r\n  logo.classList.add(\"logo\");\r\n  logo.append(firstLetter(\"S\"), \"ushi \", firstLetter(\"O\"), \"asis\");\r\n  return logo;\r\n};\r\n\r\nconst createNavMenu = (...menuItems) => {\r\n  const menu = document.createElement(\"ul\");\r\n  menu.classList.add(\"nav-menu\");\r\n  for (item of menuItems) {\r\n    const i = document.createElement(\"li\");\r\n    i.classList.add(\"item\");\r\n    i.textContent = item;\r\n    menu.appendChild(i);\r\n  }\r\n  return menu;\r\n};\r\n\r\nconst createSocialMenu = (...brandName) => {\r\n  const menu = document.createElement(\"section\");\r\n  menu.classList.add(\"social-icons\");\r\n  for (item of brandName) {\r\n    const i = document.createElement(\"i\");\r\n    i.classList.add(\"fa-brands\", `fa-${item.toLowerCase()}`);\r\n    menu.appendChild(i);\r\n  }\r\n  return menu;\r\n};\r\n\r\n// MAIN Setup\r\nconst createMain = () => {\r\n  MAIN.textContent = 'main placeholder'\r\n  CONTENT.appendChild(MAIN);\r\n}\r\n\r\n// FOOTER Setup\r\nconst createFooter = () => {\r\n  const foo = document.createElement(\"small\");\r\n  foo.textContent = \"\\u00A9 2022 Sushi Oasis. All rights reserved.\";\r\n  FOOTER.appendChild(foo);\r\n  CONTENT.appendChild(FOOTER);\r\n};\r\n\r\n// Utility\r\nconst firstLetter = (letter) => {\r\n  const sp = document.createElement(\"span\");\r\n  sp.textContent = letter.toUpperCase();\r\n  return sp;\r\n};\r\n\r\ncreateNav();\r\ncreateMain();\r\ncreateFooter();\r\n\n\n//# sourceURL=webpack://odin-restaurant/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;