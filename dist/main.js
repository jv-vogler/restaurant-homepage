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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/us.svg */ \"./src/images/us.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/br.svg */ \"./src/images/br.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\r\\n*::before,\\r\\n*::after {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nli {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n/* KEYFRAMES */\\r\\n@keyframes move-to-right {\\r\\n  0% {\\r\\n    opacity: 0;\\r\\n    transform: translateX(-100px);\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    opacity: 1;\\r\\n    transform: translateX(0);\\r\\n  }\\r\\n}\\r\\n\\r\\n/* SETUP */\\r\\n:root {\\r\\n  --accent: #cc0025;\\r\\n  --black: #1e1e1e;\\r\\n  --white: #f5f5f5;\\r\\n  --nav-inactive: #afafaf;\\r\\n  --nav-active: #ffffff;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: Poppins, sans-serif;\\r\\n  color: var(--white);\\r\\n  background-color: var(--black);\\r\\n}\\r\\n\\r\\n#content {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  height: 100vh;\\r\\n}\\r\\n\\r\\n/* NAV */\\r\\n.nav-wrapper {\\r\\n  display: grid;\\r\\n  grid-template-columns: auto 1fr auto;\\r\\n  align-items: center;\\r\\n  width: 100%;\\r\\n  position: fixed;\\r\\n  padding: 25px 75px;\\r\\n  border-bottom: 1px solid var(--white);\\r\\n  background-color: var(--black);\\r\\n  z-index: 100;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  font-family: Knewave;\\r\\n  font-size: 64px;\\r\\n  transform: translateY(-8px);\\r\\n  user-select: none;\\r\\n}\\r\\n\\r\\n.first-letter {\\r\\n  color: var(--accent);\\r\\n}\\r\\n\\r\\n.nav-menu {\\r\\n  display: flex;\\r\\n  gap: 30px;\\r\\n  justify-self: center;\\r\\n  font-weight: 600;\\r\\n  color: var(--nav-inactive);\\r\\n  transform: translateX(-100px);\\r\\n}\\r\\n\\r\\n.active {\\r\\n  position: relative;\\r\\n  color: var(--nav-active);\\r\\n  pointer-events: none;\\r\\n  text-shadow: 0 0 8px rgba(255, 255, 255, 0.25);\\r\\n}\\r\\n\\r\\n.active::after {\\r\\n  content: \\\"\\\";\\r\\n  height: 5px;\\r\\n  width: 100%;\\r\\n  left: 0;\\r\\n  bottom: -10px;\\r\\n  position: absolute;\\r\\n  background-color: var(--accent);\\r\\n  transition: 0.4s;\\r\\n}\\r\\n\\r\\n.active:hover::after {\\r\\n  width: 0;\\r\\n}\\r\\n\\r\\n.item {\\r\\n  text-transform: uppercase;\\r\\n  cursor: pointer;\\r\\n  user-select: none;\\r\\n  transition: all 0.4s;\\r\\n}\\r\\n\\r\\n.item:hover {\\r\\n  color: var(--nav-active);\\r\\n}\\r\\n\\r\\n.social-icons {\\r\\n  display: flex;\\r\\n  gap: 20px;\\r\\n}\\r\\n\\r\\n.fa-brands {\\r\\n  font-size: 25px;\\r\\n  cursor: pointer;\\r\\n  transition: all 0.4s;\\r\\n  color: var(--nav-inactive);\\r\\n}\\r\\n\\r\\n.fa-brands:hover {\\r\\n  transform: translateY(-5px);\\r\\n  color: var(--nav-active);\\r\\n}\\r\\n\\r\\n.toggle__input {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  position: relative;\\r\\n  width: 20px;\\r\\n  height: 10px;\\r\\n  appearance: none;\\r\\n  background: linear-gradient(to right, rgb(255, 190, 201) 30%, green);\\r\\n  outline: none;\\r\\n  box-shadow: inset 0 0 5px rgba(0, 0, 0, .2);\\r\\n  transition: .5s;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.toggle {\\r\\n  position: relative;\\r\\n  width: 50px;\\r\\n}\\r\\n\\r\\n.toggle__input::before {\\r\\n  content: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  position: absolute;\\r\\n  left: -30px;\\r\\n  width: 30px;\\r\\n  opacity: 1;\\r\\n  z-index: 50;\\r\\n  transition: .4s;\\r\\n  box-shadow: 0px 0px 5px 2px white;\\r\\n}\\r\\n\\r\\n.toggle__input:checked::before {\\r\\n  opacity: .5;\\r\\n  box-shadow: none;\\r\\n}\\r\\n\\r\\n.toggle__input::after {\\r\\n  content: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n  position: absolute;\\r\\n  right: -30px;\\r\\n  width: 30px;\\r\\n  opacity: .5;\\r\\n  z-index: 50;\\r\\n  transition: .4s;\\r\\n}\\r\\n\\r\\n.toggle__input:checked::after {\\r\\n  opacity: 1;\\r\\n  box-shadow: 0px 0px 5px 2px greenyellow;\\r\\n}\\r\\n\\r\\n\\r\\n/* MAIN */\\r\\n.main {\\r\\n  flex: 1;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.main-wrapper {\\r\\n  flex: 1;\\r\\n}\\r\\n\\r\\n/* HOME */\\r\\n.main-wrapper--home {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  padding-top: 11rem;\\r\\n  overflow-y: auto;\\r\\n  overflow-x: hidden;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.hero {\\r\\n  margin-left: 8rem;\\r\\n  flex: 1;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  font-size: 61px;\\r\\n  font-weight: normal;\\r\\n  line-height: 1.1;\\r\\n  margin-bottom: 40px;\\r\\n  max-width: 600px;\\r\\n  animation: move-to-right 1.8s;\\r\\n}\\r\\n\\r\\n.txt {\\r\\n  font-size: 20px;\\r\\n  margin-bottom: 41px;\\r\\n  max-width: 600px;\\r\\n  animation: move-to-right 1.8s .1s backwards;\\r\\n}\\r\\n\\r\\n.btn {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  position: relative;\\r\\n  width: 200px;\\r\\n  height: 70px;\\r\\n  border: none;\\r\\n  font-size: 22px;\\r\\n  font-weight: 600;\\r\\n  letter-spacing: 5px;\\r\\n  text-transform: uppercase;\\r\\n  color: inherit;\\r\\n  background-color: var(--accent);\\r\\n  cursor: pointer;\\r\\n  transition: all 0.4s;\\r\\n  z-index: 1;\\r\\n  animation: move-to-right 1s .5s backwards;\\r\\n}\\r\\n\\r\\n.btn::before {\\r\\n  content: \\\"\\\";\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  bottom: 0;\\r\\n  right: 0;\\r\\n  z-index: -1;\\r\\n  background-color: var(--white);\\r\\n  transform: scaleX(0);\\r\\n  transition: all 0.4s;\\r\\n  transform-origin: left;\\r\\n}\\r\\n\\r\\n.btn:hover,\\r\\n.btn:focus {\\r\\n  color: var(--accent);\\r\\n}\\r\\n\\r\\n.btn:hover::before,\\r\\n.btn:focus::before {\\r\\n  transform: scaleX(1);\\r\\n}\\r\\n\\r\\n.image {\\r\\n  flex: 1;\\r\\n  width: 50%;\\r\\n}\\r\\n\\r\\n/* MENU */\\r\\n.main-wrapper--menu {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n/* CONTACT */\\r\\n\\r\\n\\r\\n/* FOOTER */\\r\\n.footer {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  position: relative;\\r\\n  margin-top: auto;\\r\\n  padding: 20px 0;\\r\\n  flex-shrink: 0;\\r\\n  font-size: 16px;\\r\\n  background-color: rgba(0, 0, 0, 0.4);\\r\\n}\\r\\n\\r\\n.attribution {\\r\\n  position: absolute;\\r\\n  right: 2%;\\r\\n  color: var(--nav-inactive);\\r\\n  font-size: 0.65rem;\\r\\n  text-decoration: none;\\r\\n  transition: all 0.4s;\\r\\n}\\r\\n\\r\\n.attribution:hover {\\r\\n  color: var(--nav-active);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/contact.js":
/*!***********************************!*\
  !*** ./src/components/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Contact)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/components/utils.js\");\n\r\n\r\nfunction Contact() {\r\n  const wrapper = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\r\n    elTag: \"section\",\r\n    elClasses: [\"main-wrapper\", \"main-wrapper--contact\"],\r\n  });\r\n\r\n  const contactHeading = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\r\n    elTag: \"div\",\r\n    elClasses: \"contact-heading\",\r\n  });\r\n\r\n  contactHeading.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({ elTag: \"h2\", elTxt: \"Contact Us\" }));\r\n  contactHeading.appendChild(\r\n    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\r\n      elTag: \"p\",\r\n      elTxt:\r\n        \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem at cupiditate cumque aperiam \\\r\n        eum aspernatur culpa deleniti, velit quaerat expedita quos. Distinctio quasi qui eveniet?\",\r\n    })\r\n  );\r\n\r\n  const container = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({ elTag: \"div\", elClasss: \"contact-container\" });\r\n  const contactInfo = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({ elTag: \"div\", elClasses: \"contact-info\" });\r\n  contactInfo.appendChild(\r\n    createBox(\r\n      \"Address\",\r\n      \"4671  Sugar Camp Road,<br>Owatonna,Minnesota,<br>55060\",\r\n      '<i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>'\r\n    )\r\n  );\r\n  contactInfo.appendChild(\r\n    createBox(\r\n      \"Phone\",\r\n      \"507-475-6094\",\r\n      '<i class=\"fa fa-phone\" aria-hidden=\"true\"></i>'\r\n    )\r\n  );\r\n  contactInfo.appendChild(\r\n    createBox(\r\n      \"Email\",\r\n      \"testmail@jsadiafs.com\",\r\n      '<i class=\"fa-regular fa-envelope\" aria-hidden=\"true\"></i>'\r\n    )\r\n  );\r\n\r\n  const formContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({ elTag: \"div\", elClasses: \"contact-form\" });\r\n  formContainer.appendChild(createForm());\r\n\r\n  container.appendChild(contactInfo);\r\n  container.appendChild(formContainer);\r\n  wrapper.append(contactHeading, container);\r\n  return wrapper;\r\n}\r\n\r\nfunction createBox(hText, pText, iContent) {\r\n  const box = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({ eltag: \"div\", elClasses: \"contact--box\" });\r\n\r\n  const icon = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({ elTag: \"div\", elClasses: \"contact--icon\" });\r\n  icon.innerHTML = iContent;\r\n\r\n  const text = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({ elTag: \"div\", elClasses: \"contact--text\" });\r\n  text.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({ elTag: \"h3\", elTxt: `${hText}` }));\r\n  text.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({ elTag: \"p\", elHTML: `${pText}` }));\r\n\r\n  box.append(icon, text);\r\n  return box;\r\n}\r\n\r\nfunction createForm() {\r\n  const form = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({ elTag: \"form\" });\r\n  const h = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({ elTag: \"h2\", elTxt: \"Send Message\" });\r\n  const field1 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({ elTag: \"div\", elClasses: \"inputBox\" });\r\n  const field2 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({ elTag: \"div\", elClasses: \"inputBox\" });\r\n  const field3 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({ elTag: \"div\", elClasses: \"inputBox\" });\r\n  const field4 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({ elTag: \"div\", elClasses: \"inputBox\" });\r\n  let input;\r\n\r\n  input = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({ elTag: \"input\" });\r\n  input.setAttribute(\"type\", \"text\");\r\n  input.setAttribute(\"required\", \"required\");\r\n  // input.setAttribute(\"name\", \"\")\r\n  field1.appendChild(input);\r\n  field1.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({ elTag: \"span\", elTxt: \"Full Name\" }));\r\n\r\n  input = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({ elTag: \"input\" });\r\n  input.setAttribute(\"type\", \"text\");\r\n  input.setAttribute(\"required\", \"required\");\r\n  // input.setAttribute(\"name\", \"\")\r\n  field2.appendChild(input);\r\n  field2.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({ elTag: \"span\", elTxt: \"Email\" }));\r\n\r\n  input = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({ elTag: \"textarea\" });\r\n  input.setAttribute(\"required\", \"required\");\r\n  field3.appendChild(input);\r\n  field3.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({ elTag: \"span\", elTxt: \"Enter your message\" }));\r\n\r\n  input = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({ elTag: \"input\" });\r\n  input.setAttribute(\"type\", \"submit\");\r\n  input.setAttribute(\"value\", \"send\");\r\n  input.classList.add(\"form-btn\");\r\n  // input.setAttribute(\"name\", \"\")\r\n  field4.appendChild(input);\r\n\r\n  form.append(h, field1, field2, field3, field4);\r\n  return form;\r\n}\r\n\n\n//# sourceURL=webpack://odin-restaurant/./src/components/contact.js?");

/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/components/utils.js\");\n\r\n\r\nfunction Home() {\r\n  const wrapper = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\r\n    elTag: \"section\",\r\n    elClasses: [\"main-wrapper\", \"main-wrapper--home\"],\r\n  });\r\n\r\n  const hero = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\r\n    elTag: \"div\",\r\n    elClasses: [\"hero\", \"hero-special\"],\r\n  });\r\n\r\n  const header = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\r\n    elTag: \"h3\",\r\n    elClasses: \"header\",\r\n    elTxt: \"The paradise for sushi lovers.\",\r\n    dataAttr: { key: \"hero-header\" },\r\n  });\r\n\r\n  const paragraph = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\r\n    elTag: \"p\",\r\n    elClasses: \"txt\",\r\n    elTxt: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error est\r\n    sit aliquid? Quibusdam, assumenda? Voluptatem cumque et nesciunt.\r\n    Expedita, praesentium sequi. Doloribus reprehenderit consequuntur\r\n    soluta.`,\r\n    dataAttr: { key: \"hero-paragraph\" },\r\n  });\r\n\r\n  const btn = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\r\n    elTag: \"button\",\r\n    elClasses: \"btn\",\r\n    elTxt: \"View Menu\",\r\n    dataAttr: { key: \"menu-btn\" },\r\n  });\r\n  btn.addEventListener(\"click\", () => (0,_utils__WEBPACK_IMPORTED_MODULE_0__.changeMainContent)(\"Menu\"));\r\n\r\n  const img = createPicture();\r\n\r\n  hero.append(header, paragraph, btn);\r\n  wrapper.append(hero, img);\r\n\r\n  return wrapper;\r\n}\r\n\r\nconst createPicture = () => {\r\n  const img = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\r\n    elTag: \"img\",\r\n    elClasses: \"image\",\r\n  });\r\n  img.src = \"../src/images/pic1.png\";\r\n  img.alt = \"japanese food picture\";\r\n\r\n  return img;\r\n};\r\n\n\n//# sourceURL=webpack://odin-restaurant/./src/components/home.js?");

/***/ }),

/***/ "./src/components/language.js":
/*!************************************!*\
  !*** ./src/components/language.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setLanguage\": () => (/* binding */ setLanguage)\n/* harmony export */ });\n/* harmony import */ var _languages_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./languages.json */ \"./src/components/languages.json\");\n\r\n\r\nlet pageLang = document.querySelector(\"html\").getAttribute(\"lang\");\r\n\r\nfunction setLanguage() {\r\n  let locale = navigator.language.substring(0, 2);\r\n  const toggleBtn = document.querySelector(\"#langToggle\");\r\n  if (locale === \"pt\") {\r\n    document.querySelector(\"html\").setAttribute(\"lang\", \"pt\");\r\n    pageLang = \"pt\";\r\n    applyLanguage();\r\n\r\n    toggleBtn.click();\r\n    toggleBtn.addEventListener(\"change\", toggleLanguage);\r\n  } else {\r\n    document.querySelector(\"html\").setAttribute(\"lang\", \"en\");\r\n    pageLang = \"en\";\r\n    applyLanguage();\r\n\r\n    toggleBtn.addEventListener(\"change\", toggleLanguage);\r\n  }\r\n  document.addEventListener(\"reload\", applyLanguage);\r\n}\r\n\r\nfunction toggleLanguage() {\r\n  if (pageLang === \"pt\") {\r\n    pageLang = \"en\";\r\n    document.querySelector(\"html\").setAttribute(\"lang\", pageLang);\r\n    applyLanguage();\r\n  } else if (pageLang === \"en\") {\r\n    pageLang = \"pt\";\r\n    document.querySelector(\"html\").setAttribute(\"lang\", pageLang);\r\n    applyLanguage();\r\n  }\r\n}\r\n\r\nfunction applyLanguage() {\r\n  document.querySelectorAll(\"[data-key]\").forEach((element) => {\r\n    const key = element.getAttribute(\"data-key\");\r\n    const lang = pageLang;\r\n    if (key) {\r\n      element.textContent = _languages_json__WEBPACK_IMPORTED_MODULE_0__.languages[lang].strings[key];\r\n    }\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://odin-restaurant/./src/components/language.js?");

/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Menu)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/components/utils.js\");\n\r\n\r\nfunction Menu() {\r\n  const wrapper = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\r\n    elTag: \"section\",\r\n    elClasses: [\"main-wrapper\", \"main-wrapper--menu\"],\r\n    elTxt: \"Menu\"\r\n  });\r\n\r\n\r\n  \r\n  return wrapper\r\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/components/menu.js?");

/***/ }),

/***/ "./src/components/utils.js":
/*!*********************************!*\
  !*** ./src/components/utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeMainContent\": () => (/* binding */ changeMainContent),\n/* harmony export */   \"createEl\": () => (/* binding */ createEl),\n/* harmony export */   \"firstLetter\": () => (/* binding */ firstLetter)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/components/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/components/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/components/contact.js\");\n\r\n\r\n\r\n\r\nlet timeline = null;\r\n\r\nconst changeMainContent = (page) => {\r\n  const MAIN = document.querySelector(\".main\");\r\n  const nav = document.querySelector(\".nav-menu\");\r\n  const reload = new Event(\"reload\");\r\n  page = page.toUpperCase();\r\n\r\n  if (document.querySelector(\".active\")) {\r\n    document.querySelector(\".active\").classList.remove(\"active\");\r\n  }\r\n\r\n  MAIN.firstChild.remove();\r\n  if (page === \"HOME\") {\r\n    MAIN.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n    animate();\r\n    nav.childNodes[0].classList.add(\"active\");\r\n  } else if (page === \"MENU\") {\r\n    MAIN.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n    nav.childNodes[1].classList.add(\"active\");\r\n  } else if (page === \"CONTACT\") {\r\n    MAIN.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\r\n    nav.childNodes[2].classList.add(\"active\");\r\n  }\r\n  document.dispatchEvent(reload);\r\n};\r\n\r\nconst createEl = (arg) => {\r\n  /**\r\n   * Returns an HTML Element with specified params.\r\n   * @param {Object}       arg             Object container.\r\n   * @param {String}       arg.elTag       If not specified creates a <div> as default.\r\n   * @param {String/Array} arg.ElClasses   If specified adds one or more classes to the element.\r\n   * @param {String}       arg.elTxt       If specified adds it as textContent to the element.\r\n   * @param {Object}       arg.dataAttr    If specified adds data attributes based on keys:values passed.\r\n   *                                       e.g. dataAttr: { name: value } => data-name=\"value\"\r\n   */\r\n  const tag = arg.elTag ? arg.elTag : \"div\";\r\n  const element = document.createElement(tag);\r\n\r\n  // Checks for Classes\r\n  if (arg.elClasses) {\r\n    if (typeof arg.elClasses === \"string\") {\r\n      element.classList.add(arg.elClasses);\r\n    } else if (Array.isArray(arg.elClasses)) {\r\n      element.classList.add(...arg.elClasses);\r\n    }\r\n  }\r\n\r\n  // Checks for Text\r\n  if (arg.elTxt) element.textContent = arg.elTxt;\r\n\r\n  // Checks for Data Attributes\r\n  if (arg.dataAttr) {\r\n    const keys = Object.keys(arg.dataAttr);\r\n    const values = Object.values(arg.dataAttr);\r\n    for (let i = 0; i < keys.length; i++) {\r\n      element.setAttribute(\"data-\" + keys[i], values[i]);\r\n    }\r\n  }\r\n\r\n  if (arg.elHTML) {\r\n    element.innerHTML = arg.elHTML;\r\n  }\r\n\r\n  return element;\r\n};\r\n\r\nconst firstLetter = (letter) => {\r\n  const sp = createEl({ elTag: \"span\", elClasses: \"first-letter\" });\r\n  sp.textContent = letter.toUpperCase();\r\n  return sp;\r\n};\r\n\r\nconst animate = function () {\r\n  timeline = gsap.timeline({ repeat: -1 });\r\n  \r\n  timeline.from(\".image\", { duration: 2, x: 1000, ease: \"circ\" });\r\n  timeline.from(\".image\", { duration: 2, x: 0, ease: \"expo.in\" }, \"+=3\");\r\n\r\n  timeline.set(\".image\", { attr: { src: \"../src/images/pic2.png\" } });\r\n  timeline.from(\".image\", { duration: 2, x: 1000, ease: \"circ\" });\r\n  timeline.from(\".image\", { duration: 2, x: 0, ease: \"expo.in\" }, \"+=3\");\r\n\r\n  timeline.set(\".image\", { attr: { src: \"../src/images/pic3.png\" } });\r\n  timeline.from(\".image\", { duration: 2, x: 1000, ease: \"circ\" });\r\n  timeline.from(\".image\", { duration: 2, x: 0, ease: \"expo.in\" }, \"+=3\");\r\n  timeline.set(\".image\", { attr: { src: \"../src/images/pic1.png\" } });\r\n};\r\n\n\n//# sourceURL=webpack://odin-restaurant/./src/components/utils.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home */ \"./src/components/home.js\");\n/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu */ \"./src/components/menu.js\");\n/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contact */ \"./src/components/contact.js\");\n/* harmony import */ var _components_language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/language */ \"./src/components/language.js\");\n/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/utils */ \"./src/components/utils.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst CONTENT = document.querySelector(\"#content\");\r\nconst NAV = (0,_components_utils__WEBPACK_IMPORTED_MODULE_5__.createEl)({ elTag: \"nav\", elClasses: \"nav-wrapper\" });\r\nconst MAIN = (0,_components_utils__WEBPACK_IMPORTED_MODULE_5__.createEl)({ elTag: \"div\", elClasses: \"main\" });\r\nconst FOOTER = (0,_components_utils__WEBPACK_IMPORTED_MODULE_5__.createEl)({ elTag: \"footer\", elClasses: \"footer\" });\r\n\r\nconst loadPage = () => {\r\n  createNav();\r\n  createMain();\r\n  createFooter();\r\n  (0,_components_language__WEBPACK_IMPORTED_MODULE_4__.setLanguage)();\r\n};\r\n\r\n// Nav Setup\r\nconst createNav = () => {\r\n  NAV.append(\r\n    createLogo(),\r\n    createNavMenu(\"Home\", \"Menu\", \"Contact\"),\r\n    createSocialMenu(\"facebook\", \"instagram\", \"twitter\"),\r\n    createLangToggle()\r\n  );\r\n  CONTENT.appendChild(NAV);\r\n};\r\n\r\nconst createLogo = () => {\r\n  const logo = (0,_components_utils__WEBPACK_IMPORTED_MODULE_5__.createEl)({\r\n    elTag: \"h1\",\r\n    elClasses: \"logo\",\r\n  });\r\n  logo.append((0,_components_utils__WEBPACK_IMPORTED_MODULE_5__.firstLetter)(\"S\"), \"ushi \", (0,_components_utils__WEBPACK_IMPORTED_MODULE_5__.firstLetter)(\"O\"), \"asis\");\r\n\r\n  return logo;\r\n};\r\n\r\nconst createNavMenu = (...menuItems) => {\r\n  const menu = (0,_components_utils__WEBPACK_IMPORTED_MODULE_5__.createEl)({\r\n    elTag: \"ul\",\r\n    elClasses: \"nav-menu\",\r\n  });\r\n\r\n  for (const item of menuItems) {\r\n    const i = (0,_components_utils__WEBPACK_IMPORTED_MODULE_5__.createEl)({\r\n      elTag: \"li\",\r\n      elClasses: \"item\",\r\n      elTxt: item,\r\n      dataAttr: { key: item.toLowerCase() },\r\n    });\r\n    i.addEventListener(\"click\", (e) => (0,_components_utils__WEBPACK_IMPORTED_MODULE_5__.changeMainContent)(item));\r\n    menu.appendChild(i);\r\n  }\r\n\r\n  return menu;\r\n};\r\n\r\nconst createSocialMenu = (...brandName) => {\r\n  const menu = (0,_components_utils__WEBPACK_IMPORTED_MODULE_5__.createEl)({\r\n    elTag: \"section\",\r\n    elClasses: \"social-icons\",\r\n  });\r\n  for (const item of brandName) {\r\n    const i = (0,_components_utils__WEBPACK_IMPORTED_MODULE_5__.createEl)({\r\n      elType: \"i\",\r\n      elClasses: [\"fa-brands\", `fa-${item.toLowerCase()}`],\r\n    });\r\n    menu.appendChild(i);\r\n  }\r\n\r\n  return menu;\r\n};\r\n\r\nconst createLangToggle = () => {\r\n  const label = (0,_components_utils__WEBPACK_IMPORTED_MODULE_5__.createEl)({ elTag: \"label\", elClasses: \"toggle\" });\r\n  label.setAttribute(\"for\", \"langToggle\");\r\n\r\n  const checkbox = (0,_components_utils__WEBPACK_IMPORTED_MODULE_5__.createEl)({ elTag: \"input\", elClasses: \"toggle__input\" });\r\n  checkbox.setAttribute(\"type\", \"checkbox\");\r\n  checkbox.setAttribute(\"id\", \"langToggle\");\r\n  \r\n  label.appendChild(checkbox);\r\n  return label;\r\n};\r\n\r\n// Main Setup\r\nconst createMain = () => {\r\n  MAIN.appendChild((0,_components_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n  CONTENT.appendChild(MAIN);\r\n  (0,_components_utils__WEBPACK_IMPORTED_MODULE_5__.changeMainContent)(\"Home\");\r\n};\r\n\r\n// Footer Setup\r\nconst createFooter = () => {\r\n  const foo = (0,_components_utils__WEBPACK_IMPORTED_MODULE_5__.createEl)({\r\n    elTag: \"small\",\r\n    elTxt: \"\\u00A9 2022 Sushi Oasis. All rights reserved.\",\r\n    dataAttr: { key: \"copyright\" },\r\n  });\r\n  FOOTER.appendChild(foo);\r\n\r\n  const attribution = (0,_components_utils__WEBPACK_IMPORTED_MODULE_5__.createEl)({\r\n    elTag: \"a\",\r\n    elClasses: \"attribution\",\r\n    elTxt: \"Images by luis_molinero on Freepik\",\r\n    dataAttr: { key: \"picAttr\" }\r\n  });\r\n  attribution.setAttribute(\r\n    \"href\",\r\n    \"https://www.freepik.com/free-photo/hand-holding-sushi-with-chopsticks_1198655.htm#&position=0&from_view=detail#&position=0&from_view=detail\"\r\n  );\r\n  attribution.setAttribute(\"target\", \"_blank\");\r\n\r\n  FOOTER.appendChild(attribution);\r\n  CONTENT.appendChild(FOOTER);\r\n};\r\n\r\nloadPage();\r\n\n\n//# sourceURL=webpack://odin-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/images/br.svg":
/*!***************************!*\
  !*** ./src/images/br.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3a2215d3fc104755ace4.svg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/images/br.svg?");

/***/ }),

/***/ "./src/images/us.svg":
/*!***************************!*\
  !*** ./src/images/us.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a53c1cce40c62cb7a9d9.svg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/images/us.svg?");

/***/ }),

/***/ "./src/components/languages.json":
/*!***************************************!*\
  !*** ./src/components/languages.json ***!
  \***************************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"languages\":{\"en\":{\"strings\":{\"home\":\"Home\",\"menu\":\"Menu\",\"contact\":\"Contact\",\"copyright\":\"© 2022 Sushi Oasis. All rights reserved.\",\"menu-btn\":\"View Menu\",\"picAttr\":\"Images by luis_molinero on Freepik\",\"hero-header\":\"The paradise for sushi lovers.\",\"hero-paragraph\":\"The Sushi Oasis delivers food prepared with fresh and high-quality ingredients made by Japanese cuisine lovers. Our mission is to provide the most genuine experience you have ever tasted!\"}},\"pt\":{\"strings\":{\"home\":\"Início\",\"menu\":\"Menu\",\"contact\":\"Contato\",\"copyright\":\"© 2022 Sushi Oasis. Todos os direitos reservados.\",\"menu-btn\":\"Ver Menu\",\"picAttr\":\"Imagens por luis_molinero em Freepik\",\"hero-header\":\"O paraíso para amantes de sushi.\",\"hero-paragraph\":\"O Sushi Oasis entrega comida preparada com ingredientes frescos e de alta qualidade, feita por apaixonados pela culinária Japonesa. Nossa missão é proporcionar a experiência mais genuína que você já experimentou!\"}}}}');\n\n//# sourceURL=webpack://odin-restaurant/./src/components/languages.json?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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