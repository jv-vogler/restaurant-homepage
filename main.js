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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\r\\n*::before,\\r\\n*::after {\\r\\n  margin: 0; padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nli {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n/* SETUP */\\r\\n:root {\\r\\n  --accent: #CC0025;\\r\\n  --black: #1E1E1E;\\r\\n  --white: #F5F5F5;\\r\\n  --nav-inactive: #afafaf;\\r\\n  --nav-active: #FFFFFF;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: Poppins, sans-serif;\\r\\n  color: var(--white);\\r\\n  background-color: var(--black);\\r\\n}\\r\\n\\r\\n#content { \\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  height: 100vh;\\r\\n}\\r\\n\\r\\n/* NAV */\\r\\n.nav-wrapper {\\r\\n  display: grid;\\r\\n  grid-template-columns: auto 1fr auto;\\r\\n  align-items: center;\\r\\n  width: 100%;\\r\\n  position: fixed;\\r\\n  padding: 25px 75px;\\r\\n  border-bottom: 1px solid var(--white);\\r\\n  background-color: var(--black);\\r\\n  z-index: 100;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  font-family: Knewave;\\r\\n  font-size: 64px;\\r\\n  transform: translateY(-8px);\\r\\n  user-select: none;\\r\\n}\\r\\n\\r\\n.first-letter {\\r\\n  color: var(--accent)\\r\\n}\\r\\n\\r\\n.nav-menu {\\r\\n  display: flex;\\r\\n  gap: 30px;\\r\\n  justify-self: center;\\r\\n  font-weight: 600;\\r\\n  color: var(--nav-inactive);\\r\\n  transform: translateX(-100px);\\r\\n}\\r\\n\\r\\n.active {\\r\\n  position: relative;\\r\\n  color: var(--nav-active);\\r\\n  pointer-events: none;\\r\\n  text-shadow: 0 0 8px rgba(255, 255, 255, .25);\\r\\n}\\r\\n\\r\\n.active::after {\\r\\n  content: \\\"\\\";\\r\\n  height: 5px;\\r\\n  width: 100%;\\r\\n  left: 0;\\r\\n  bottom: -10px;\\r\\n  position: absolute;\\r\\n  background-color: var(--accent);\\r\\n  transition: 0.4s;\\r\\n}\\r\\n\\r\\n.active:hover::after {\\r\\n  width: 0;\\r\\n}\\r\\n\\r\\n.item {\\r\\n  text-transform: uppercase;\\r\\n  cursor: pointer;\\r\\n  user-select: none;\\r\\n  transition: all .4s;\\r\\n}\\r\\n\\r\\n.item:hover {\\r\\n  color: var(--nav-active);\\r\\n}\\r\\n\\r\\n.social-icons {\\r\\n  display: flex;\\r\\n  gap: 20px;\\r\\n}\\r\\n\\r\\n.fa-brands {\\r\\n  font-size: 25px;\\r\\n  cursor: pointer;\\r\\n  transition: all .4s;\\r\\n  color: var(--nav-inactive);\\r\\n}\\r\\n\\r\\n.fa-brands:hover {\\r\\n  transform: translateY(-5px);\\r\\n  color: var(--nav-active);\\r\\n}\\r\\n\\r\\n/* MAIN */\\r\\n.main {\\r\\n  flex: 1;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.main-wrapper {\\r\\n  flex: 1;\\r\\n}\\r\\n\\r\\n.main-wrapper--home {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  margin-top: 160px;\\r\\n  overflow-y: auto;\\r\\n  overflow-x: hidden;\\r\\n}\\r\\n\\r\\n.hero {\\r\\n  margin-left: 190px;\\r\\n  flex: 1.1;\\r\\n}\\r\\n\\r\\n.header, .txt {\\r\\n  max-width: 700px;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  font-size: 86px;\\r\\n  font-weight: normal;\\r\\n  line-height: 1.1;\\r\\n  margin-bottom: 40px;\\r\\n}\\r\\n\\r\\n.txt {\\r\\n  font-size: 20px;\\r\\n  margin-bottom: 41px;\\r\\n  max-width: 600px;\\r\\n}\\r\\n\\r\\n.btn {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  position: relative;\\r\\n  width: 200px;\\r\\n  height: 70px;\\r\\n  border: none;\\r\\n  font-size: 22px;\\r\\n  font-weight: 600;\\r\\n  letter-spacing: 5px;\\r\\n  text-transform: uppercase;\\r\\n  color: inherit;\\r\\n  background-color: var(--accent);\\r\\n  cursor: pointer;\\r\\n  transition: all .4s;\\r\\n  z-index: 1;\\r\\n}\\r\\n\\r\\n.btn::before {\\r\\n  content: '';\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  bottom: 0;\\r\\n  right: 0;\\r\\n  z-index: -1;\\r\\n  background-color: var(--white);\\r\\n  transform: scaleX(0);\\r\\n  transition: all .4s;\\r\\n  transform-origin: left;\\r\\n}\\r\\n\\r\\n.btn:hover,\\r\\n.btn:focus {\\r\\n  color: var(--accent);\\r\\n}\\r\\n\\r\\n.btn:hover::before,\\r\\n.btn:focus::before {\\r\\n  transform: scaleX(1);\\r\\n}\\r\\n\\r\\n.image {\\r\\n  flex: 0.9;\\r\\n  width: 50%;\\r\\n  height: auto;\\r\\n}\\r\\n\\r\\n/* FOOTER */\\r\\n.footer {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  position: relative;\\r\\n  margin-top: auto;\\r\\n  padding: 20px 0;\\r\\n  flex-shrink: 0;\\r\\n  font-size: 16px;\\r\\n  background-color: rgba(0, 0, 0, .4);\\r\\n}\\r\\n\\r\\n.attribution {\\r\\n  position: absolute;\\r\\n  right: 2%;\\r\\n  color: var(--nav-inactive);\\r\\n  font-size: 0.65rem;\\r\\n  text-decoration: none;\\r\\n  transition: all 0.4s;\\r\\n}\\r\\n\\r\\n.attribution:hover {\\r\\n  color: var(--nav-active);\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/css-loader/dist/runtime/api.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Contact)\n/* harmony export */ });\nfunction Contact() {\r\n  const h = document.createElement('div');\r\n  h.textContent = 'Contact content'\r\n  return h;\r\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/components/contact.js?");

/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/components/utils.js\");\n\r\n\r\nfunction Home() {\r\n  const wrapper = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createContainer)(\"div\", \"main-wrapper\");\r\n  wrapper.classList.add(\"main-wrapper--home\");\r\n\r\n  const hero = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createContainer)(\"div\", \"hero\");\r\n  const header = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createTextElement)(\"h3\",\"header\",\r\n    \"Lorem ipsum dolor sit amet.\");\r\n\r\n  const paragraph = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createTextElement)(\"p\", \"txt\",\r\n    `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error est\r\n  sit aliquid? Quibusdam, assumenda? Voluptatem cumque et nesciunt.\r\n  Expedita, praesentium sequi. Doloribus reprehenderit consequuntur\r\n  soluta.`);\r\n\r\n  const btn = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createTextElement)(\"button\", \"btn\", \"View Menu\");\r\n  btn.addEventListener('click', () => (0,_utils__WEBPACK_IMPORTED_MODULE_0__.changeMainContent)(\"Menu\"));\r\n  \r\n  const img = createPicture();\r\n\r\n  hero.append(header, paragraph, btn);\r\n  wrapper.append(hero, img);\r\n  return wrapper;\r\n}\r\n\r\nconst createPicture = () => {\r\n  const img = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createContainer)(\"img\", \"image\");\r\n  img.src = \"../src/images/pic1.png\";\r\n  img.alt = \"japanese food picture\";\r\n  return img\r\n}\r\n\n\n//# sourceURL=webpack://odin-restaurant/./src/components/home.js?");

/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Menu)\n/* harmony export */ });\nfunction Menu() {\r\n  const h = document.createElement('div');\r\n  h.textContent = 'Menu content'\r\n  return h;\r\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/components/menu.js?");

/***/ }),

/***/ "./src/components/utils.js":
/*!*********************************!*\
  !*** ./src/components/utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeMainContent\": () => (/* binding */ changeMainContent),\n/* harmony export */   \"createContainer\": () => (/* binding */ createContainer),\n/* harmony export */   \"createTextElement\": () => (/* binding */ createTextElement),\n/* harmony export */   \"firstLetter\": () => (/* binding */ firstLetter)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/components/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/components/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/components/contact.js\");\n\r\n\r\n\r\n\r\nlet timeline = null;\r\n\r\nconst changeMainContent = (page) => {\r\n  const MAIN = document.querySelector('.main');\r\n  const nav = document.querySelector(\".nav-menu\");\r\n  page = page.toUpperCase();\r\n\r\n  if (document.querySelector(\".active\")) {\r\n    document.querySelector(\".active\").classList.remove(\"active\");\r\n  }\r\n\r\n  MAIN.firstChild.remove();\r\n  if (page === \"HOME\") {\r\n    MAIN.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n    animate();\r\n    nav.childNodes[0].classList.add(\"active\");\r\n  } else if (page === \"MENU\") {\r\n    MAIN.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n    nav.childNodes[1].classList.add(\"active\");\r\n  } else if (page === \"CONTACT\") {\r\n    MAIN.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\r\n    nav.childNodes[2].classList.add(\"active\");\r\n  }\r\n};\r\n\r\nconst createContainer = (elType, elClass) => {\r\n  const element = document.createElement(`${elType}`);\r\n  element.classList.add(`${elClass}`);\r\n  return element;\r\n};\r\n\r\nconst createTextElement = (elType, elClass, elText) => {\r\n  const element = createContainer(elType, elClass);\r\n  element.textContent = elText;\r\n  return element;\r\n};\r\n\r\nconst firstLetter = (letter) => {\r\n  const sp = createContainer(\"span\", \"first-letter\");\r\n  sp.textContent = letter.toUpperCase();\r\n  return sp;\r\n};\r\n\r\nconst animate = function() {\r\n  timeline = gsap.timeline({repeat: -1});\r\n  timeline.set(\".image\", {attr: { src: \"../src/images/pic1.png\" }})\r\n  timeline.from(\".image\", {duration: 2, x: 1000, ease: \"circ\"})\r\n  timeline.from(\".image\", {duration: 2, x: 0, ease: \"expo.in\"}, \"+=3\")\r\n\r\n  timeline.set(\".image\", {attr: { src: \"../src/images/pic2.png\" }})\r\n  timeline.from(\".image\", {duration: 2, x: 1000, ease: \"circ\"})\r\n  timeline.from(\".image\", {duration: 2, x: 0, ease: \"expo.in\"}, \"+=3\")\r\n\r\n  timeline.set(\".image\", {attr: { src: \"../src/images/pic3.png\" }})\r\n  timeline.from(\".image\", {duration: 2, x: 1000, ease: \"circ\"})\r\n  timeline.from(\".image\", {duration: 2, x: 0, ease: \"expo.in\"}, \"+=3\")\r\n};\n\n//# sourceURL=webpack://odin-restaurant/./src/components/utils.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home */ \"./src/components/home.js\");\n/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu */ \"./src/components/menu.js\");\n/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contact */ \"./src/components/contact.js\");\n/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/utils */ \"./src/components/utils.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst CONTENT = document.querySelector(\"#content\");\r\nconst NAV = (0,_components_utils__WEBPACK_IMPORTED_MODULE_4__.createContainer)(\"nav\", \"nav-wrapper\");\r\nconst MAIN = (0,_components_utils__WEBPACK_IMPORTED_MODULE_4__.createContainer)(\"div\", \"main\");\r\nconst FOOTER = (0,_components_utils__WEBPACK_IMPORTED_MODULE_4__.createContainer)(\"footer\", \"footer\");\r\n\r\nconst loadPage = () => {\r\n  createNav();\r\n  createMain();\r\n  createFooter();\r\n};\r\n\r\n// Nav Setup\r\nconst createNav = () => {\r\n  NAV.append(\r\n    createLogo(),\r\n    createNavMenu(\"Home\", \"Menu\", \"Contact\"),\r\n    createSocialMenu(\"facebook\", \"instagram\", \"twitter\")\r\n  );\r\n  CONTENT.appendChild(NAV);\r\n};\r\n\r\nconst createLogo = () => {\r\n  const logo = (0,_components_utils__WEBPACK_IMPORTED_MODULE_4__.createContainer)(\"h1\", \"logo\");\r\n  logo.append((0,_components_utils__WEBPACK_IMPORTED_MODULE_4__.firstLetter)(\"S\"), \"ushi \", (0,_components_utils__WEBPACK_IMPORTED_MODULE_4__.firstLetter)(\"O\"), \"asis\");\r\n  return logo;\r\n};\r\n\r\nconst createNavMenu = (...menuItems) => {\r\n  const menu = (0,_components_utils__WEBPACK_IMPORTED_MODULE_4__.createContainer)(\"ul\", \"nav-menu\");\r\n  for (const item of menuItems) {\r\n    const i = document.createElement(\"li\");\r\n    i.classList.add(\"item\");\r\n    i.textContent = item;\r\n    i.addEventListener(\"click\", (e) => (0,_components_utils__WEBPACK_IMPORTED_MODULE_4__.changeMainContent)(e.target.innerText));\r\n    menu.appendChild(i);\r\n  }\r\n  return menu;\r\n};\r\n\r\nconst createSocialMenu = (...brandName) => {\r\n  const menu = (0,_components_utils__WEBPACK_IMPORTED_MODULE_4__.createContainer)(\"section\", \"social-icons\");\r\n  for (const item of brandName) {\r\n    const i = document.createElement(\"i\");\r\n    i.classList.add(\"fa-brands\", `fa-${item.toLowerCase()}`);\r\n    menu.appendChild(i);\r\n  }\r\n  return menu;\r\n};\r\n\r\n// Main Setup\r\nconst createMain = () => {\r\n  MAIN.appendChild((0,_components_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n  CONTENT.appendChild(MAIN);\r\n  (0,_components_utils__WEBPACK_IMPORTED_MODULE_4__.changeMainContent)(\"Home\");\r\n};\r\n\r\n// Footer Setup\r\nconst createFooter = () => {\r\n  const foo = document.createElement(\"small\");\r\n  foo.textContent = \"\\u00A9 2022 Sushi Oasis. All rights reserved.\";\r\n  FOOTER.appendChild(foo);\r\n\r\n  const attribution = (0,_components_utils__WEBPACK_IMPORTED_MODULE_4__.createTextElement)(\"a\", \"attribution\", \"Images by luis_molinero on Freepik\");\r\n  attribution.setAttribute('href', \r\n  \"https://www.freepik.com/free-photo/hand-holding-sushi-with-chopsticks_1198655.htm#&position=0&from_view=detail#&position=0&from_view=detail\")\r\n  attribution.setAttribute('target', '_blank');\r\n  \r\n  FOOTER.appendChild(attribution);\r\n  CONTENT.appendChild(FOOTER);\r\n};\r\n\r\n\r\nloadPage();\r\n\n\n//# sourceURL=webpack://odin-restaurant/./src/index.js?");

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