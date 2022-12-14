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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Contact)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/components/utils.js\");\n\nfunction Contact() {\n  var wrapper = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"section\",\n    elClasses: [\"main-wrapper\", \"main-wrapper--contact\"]\n  });\n  var contactHeading = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"div\",\n    elClasses: \"contact-heading\"\n  });\n  contactHeading.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"h2\",\n    elTxt: \"Contact Us\",\n    dataAttr: {\n      key: \"contact--header\"\n    }\n  }));\n  contactHeading.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"p\",\n    elTxt: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem at cupiditate cumque aperiam \\\r\n        eum aspernatur culpa deleniti, velit quaerat expedita quos. Distinctio quasi qui eveniet?\",\n    dataAttr: {\n      key: \"contact--paragraph\"\n    }\n  }));\n  var container = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"div\",\n    elClasses: \"contact-container\"\n  });\n  var contactInfo = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"div\",\n    elClasses: \"contact-info\"\n  });\n  contactInfo.appendChild(createBox(\"Address\", \"1520  Av. Paulista,<br>S??o Paulo, S??o Paulo<br>01310-200\", '<i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>', \"contact--address\"));\n  contactInfo.appendChild(createBox(\"Phone\", \"+55 (11)98765-4321\", '<i class=\"fa fa-phone\" aria-hidden=\"true\"></i>', \"contact--phone\"));\n  contactInfo.appendChild(createBox(\"Email\", \"sushi@oasis.com\", '<i class=\"fa-regular fa-envelope\" aria-hidden=\"true\"></i>', \"contact--email\"));\n  var formContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"div\",\n    elClasses: \"contact-form\"\n  });\n  formContainer.appendChild(createForm());\n  container.appendChild(contactInfo);\n  container.appendChild(formContainer);\n  wrapper.append(contactHeading, container);\n  return wrapper;\n}\n\nfunction createBox(hText, pText, iContent, dAttr) {\n  var box = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    eltag: \"div\",\n    elClasses: \"contact--box\"\n  });\n  var icon = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"div\",\n    elClasses: \"contact--icon\"\n  });\n  icon.innerHTML = iContent;\n  var text = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"div\",\n    elClasses: \"contact--text\"\n  });\n  text.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"h3\",\n    elTxt: \"\".concat(hText),\n    dataAttr: {\n      key: \"\".concat(dAttr)\n    }\n  }));\n  text.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"p\",\n    elHTML: \"\".concat(pText)\n  }));\n  box.append(icon, text);\n  return box;\n}\n\nfunction createForm() {\n  var form = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"form\"\n  });\n  var h = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"h2\",\n    elTxt: \"Send Message\",\n    dataAttr: {\n      key: \"contact--send-msg\"\n    }\n  });\n  var field1 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"div\",\n    elClasses: \"inputBox\"\n  });\n  var field2 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"div\",\n    elClasses: \"inputBox\"\n  });\n  var field3 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"div\",\n    elClasses: \"inputBox\"\n  });\n  var field4 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"div\",\n    elClasses: \"inputBox\"\n  });\n  var input;\n  input = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"input\"\n  });\n  input.setAttribute(\"type\", \"text\");\n  input.setAttribute(\"required\", \"required\");\n  field1.appendChild(input);\n  field1.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"span\",\n    elTxt: \"Full Name\",\n    dataAttr: {\n      key: \"contact--full-name\"\n    }\n  }));\n  input = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"input\"\n  });\n  input.setAttribute(\"type\", \"text\");\n  input.setAttribute(\"required\", \"required\");\n  field2.appendChild(input);\n  field2.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"span\",\n    elTxt: \"Email\"\n  }));\n  input = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"textarea\"\n  });\n  input.setAttribute(\"required\", \"required\");\n  field3.appendChild(input);\n  field3.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"span\",\n    elTxt: \"Enter your message\",\n    dataAttr: {\n      key: \"contact--enter-msg\"\n    }\n  }));\n  input = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"input\",\n    elClasses: \"form-btn\",\n    dataAttr: {\n      key: \"contact--btn-txt\"\n    }\n  });\n  input.setAttribute(\"type\", \"submit\");\n  input.setAttribute(\"value\", \"send\");\n  field4.appendChild(input);\n  form.append(h, field1, field2, field3, field4);\n  return form;\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/components/contact.js?");

/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/components/utils.js\");\n/* harmony import */ var _images_pic1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/pic1.png */ \"./src/images/pic1.png\");\n\n\nfunction Home() {\n  var wrapper = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"section\",\n    elClasses: [\"main-wrapper\", \"main-wrapper--home\"]\n  });\n  var hero = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"div\",\n    elClasses: [\"hero\", \"hero-special\"]\n  });\n  var header = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"h3\",\n    elClasses: \"header\",\n    elTxt: \"The paradise for sushi lovers.\",\n    dataAttr: {\n      key: \"hero-header\"\n    }\n  });\n  var paragraph = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"p\",\n    elClasses: \"txt\",\n    elTxt: \"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error est\\n    sit aliquid? Quibusdam, assumenda? Voluptatem cumque et nesciunt.\\n    Expedita, praesentium sequi. Doloribus reprehenderit consequuntur\\n    soluta.\",\n    dataAttr: {\n      key: \"hero-paragraph\"\n    }\n  });\n  var btn = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"button\",\n    elClasses: \"btn\",\n    elTxt: \"View Menu\",\n    dataAttr: {\n      key: \"menu-btn\"\n    }\n  });\n  btn.addEventListener(\"click\", function () {\n    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.changeMainContent)(\"Menu\");\n  });\n  var img = createPicture();\n  hero.append(header, paragraph, btn);\n  wrapper.append(hero, img);\n  return wrapper;\n}\n\nvar createPicture = function createPicture() {\n  var img = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"img\",\n    elClasses: \"image\"\n  });\n  img.src = _images_pic1_png__WEBPACK_IMPORTED_MODULE_1__;\n  img.alt = \"japanese food picture\";\n  return img;\n};\n\n//# sourceURL=webpack://odin-restaurant/./src/components/home.js?");

/***/ }),

/***/ "./src/components/language.js":
/*!************************************!*\
  !*** ./src/components/language.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setLanguage\": () => (/* binding */ setLanguage)\n/* harmony export */ });\n/* harmony import */ var _languages_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./languages.json */ \"./src/components/languages.json\");\n\nvar pageLang = document.querySelector(\"html\").getAttribute(\"lang\");\nfunction setLanguage() {\n  var locale = navigator.language.substring(0, 2);\n  var toggleBtn = document.querySelector(\"#langToggle\");\n\n  if (locale === \"pt\") {\n    document.querySelector(\"html\").setAttribute(\"lang\", \"pt\");\n    pageLang = \"pt\";\n    applyLanguage();\n    toggleBtn.click();\n    toggleBtn.addEventListener(\"change\", toggleLanguage);\n  } else {\n    document.querySelector(\"html\").setAttribute(\"lang\", \"en\");\n    pageLang = \"en\";\n    applyLanguage();\n    toggleBtn.addEventListener(\"change\", toggleLanguage);\n  }\n\n  document.addEventListener(\"reload\", applyLanguage);\n}\n\nfunction toggleLanguage() {\n  if (pageLang === \"pt\") {\n    pageLang = \"en\";\n    document.querySelector(\"html\").setAttribute(\"lang\", pageLang);\n    applyLanguage();\n  } else if (pageLang === \"en\") {\n    pageLang = \"pt\";\n    document.querySelector(\"html\").setAttribute(\"lang\", pageLang);\n    applyLanguage();\n  }\n}\n\nfunction applyLanguage() {\n  document.querySelectorAll(\"[data-key]\").forEach(function (element) {\n    var key = element.getAttribute(\"data-key\");\n    var lang = pageLang;\n\n    if (key) {\n      element.textContent = _languages_json__WEBPACK_IMPORTED_MODULE_0__.languages[lang].strings[key];\n      if (element.getAttribute(\"value\")) element.setAttribute(\"value\", _languages_json__WEBPACK_IMPORTED_MODULE_0__.languages[lang].strings[key]);\n    }\n  });\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/components/language.js?");

/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Menu)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/components/utils.js\");\n\nfunction Menu() {\n  var wrapper = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"section\",\n    elClasses: [\"main-wrapper\", \"main-wrapper--menu\"]\n  });\n  var swiperEl = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"div\",\n    elClasses: [\"swiper\", \"menuSwiper\"]\n  });\n  var swiperWrapper = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"div\",\n    elClasses: \"swiper-wrapper\"\n  });\n  var swiperPrev = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"div\",\n    elClasses: \"swiper-button-prev\"\n  });\n  var swiperNext = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"div\",\n    elClasses: \"swiper-button-next\"\n  });\n  var swiperPagination = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"div\",\n    elClasses: \"swiper-pagination\"\n  }); // SLIDE 1\n\n  var slide1 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"div\",\n    elClasses: \"swiper-slide\"\n  });\n  var card1 = createCard(\"Uramaki\");\n  card1.append(createDish(\"Green Roll\", \"Seaweed/Avocado/Cucumber/Tobiko/Wasabi Mayo\", \"8.50\", {\n    name: \"\",\n    description: \"dish-dsc--uramaki1\"\n  }), createDish(\"Spicy Tuna Roll\", \"Seaweed/Avocado/Chilli Powder/Tuna/Spicy Mayo\", \"10.50\", {\n    name: \"\",\n    description: \"dish-dsc--uramaki2\"\n  }), createDish(\"Salmon Cream Cheese Roll\", \"Seaweed/Salmon/Cream Cheese/Seaweed Powder/ Wasabi Mayo\", \"10.50\", {\n    name: \"\",\n    description: \"dish-dsc--uramaki3\"\n  }), createDish(\"California Roll\", \"Seaweed/Avocado/Sesame/Crab/Tobiko/Chef's Special Mayo\", \"10.50\", {\n    name: \"\",\n    description: \"dish-dsc--uramaki4\"\n  }));\n  slide1.append(card1); // SLIDE 2\n\n  var slide2 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"div\",\n    elClasses: \"swiper-slide\"\n  });\n  var card2 = createCard(\"Nigiri\");\n  card2.append(createDish(\"Shake Hamachi\", \"Hamachi/Salty Soy Sauce/Wasabi\", \"8.50\", {\n    name: \"\",\n    description: \"dish-dsc--nigiri1\"\n  }), createDish(\"Tuna\", \"Tuna/Salty Soy Sauce/Wasabi\", \"8.50\", {\n    name: \"\",\n    description: \"dish-dsc--nigiri2\"\n  }), createDish(\"Ebi\", \"Prawn/Seaweed/Salty Soy Sauce/Wasabi\", \"8.50\", {\n    name: \"\",\n    description: \"dish-dsc--nigiri3\"\n  }), createDish(\"Octopus\", \"Octopus/Salty Soy Sauce/ Wasabi\", \"10.50\", {\n    name: \"\",\n    description: \"dish-dsc--nigiri4\"\n  }));\n  slide2.append(card2); // SLIDE 3\n\n  var slide3 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"div\",\n    elClasses: \"swiper-slide\"\n  });\n  var card3 = createCard(\"Hosomaki\");\n  card3.append(createDish(\"Kappa Maki\", \"Veggie Cucumber\", \"4.50\", {\n    name: \"\",\n    description: \"dish-dsc--hosomaki1\"\n  }), createDish(\"Cheese Maki\", \"Cream Cheese\", \"4.50\", {\n    name: \"\",\n    description: \"dish-dsc--hosomaki2\"\n  }), createDish(\"Spicy Tuna Maki\", \"Tuna\", \"6.50\", {\n    name: \"\",\n    description: \"dish-dsc--hosomaki3\"\n  }), createDish(\"Salmon Maki\", \"Salmon\", \"6.50\", {\n    name: \"\",\n    description: \"dish-dsc--hosomaki4\"\n  }));\n  slide3.append(card3); // SLIDE 4\n\n  var slide4 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"div\",\n    elClasses: \"swiper-slide\"\n  });\n  var card4 = createCard(\"Sashimi\");\n  card4.append(createDish(\"Salmon Sashimi\", \"Salmon/Salty Soy Sauce/Wasabi\", \"9.50\", {\n    name: \"\",\n    description: \"dish-dsc--sashimi1\"\n  }), createDish(\"Tuna Sashimi\", \"Tuna/Salty Soy Sauce/Wasabi\", \"10.50\", {\n    name: \"\",\n    description: \"dish-dsc--sashimi2\"\n  }), createDish(\"Sashimi Mix\", \"Salmon/Tuna/Hamachi/Salty Soy Sauce/Wasabi\", \"15.50\", {\n    name: \"\",\n    description: \"dish-dsc--sashimi3\"\n  }));\n  slide4.append(card4);\n  swiperWrapper.append(slide1, slide2, slide3, slide4);\n  swiperEl.append(swiperWrapper, swiperPagination, swiperPrev, swiperNext);\n  wrapper.appendChild(swiperEl);\n  return wrapper;\n}\n\nfunction createCard(title) {\n  var card = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"div\",\n    elClasses: \"card\"\n  });\n  var cardTitle = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"h1\",\n    elClasses: \"card-title\",\n    elTxt: \"\".concat(title)\n  });\n  card.append(cardTitle);\n  return card;\n}\n\nfunction createDish(dishName, dishDescription, dishPrice, data) {\n  var dish = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"div\",\n    elClasses: \"dish\"\n  });\n  var name = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"h3\",\n    elClasses: \"dish-name\",\n    elTxt: \"\".concat(dishName),\n    dataAttr: data.name\n  });\n  var price = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"p\",\n    elClasses: \"dish-price\",\n    elHTML: \"<span class=\\\"currency\\\">R$</span> \".concat(dishPrice)\n  });\n  var description = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createEl)({\n    elTag: \"p\",\n    elClasses: \"dish-description\",\n    elTxt: \"\".concat(dishDescription),\n    dataAttr: {\n      key: data.description\n    }\n  });\n  dish.append(name, price, description);\n  return dish;\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/components/menu.js?");

/***/ }),

/***/ "./src/components/utils.js":
/*!*********************************!*\
  !*** ./src/components/utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeMainContent\": () => (/* binding */ changeMainContent),\n/* harmony export */   \"createEl\": () => (/* binding */ createEl),\n/* harmony export */   \"firstLetter\": () => (/* binding */ firstLetter)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/components/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/components/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/components/contact.js\");\n/* harmony import */ var _images_pic1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/pic1.png */ \"./src/images/pic1.png\");\n/* harmony import */ var _images_pic2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/pic2.png */ \"./src/images/pic2.png\");\n/* harmony import */ var _images_pic3_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/pic3.png */ \"./src/images/pic3.png\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n\n\nvar timeline = null;\nvar changeMainContent = function changeMainContent(page) {\n  var MAIN = document.querySelector(\".main\");\n  var nav = document.querySelector(\".nav-menu\");\n  var reload = new Event(\"reload\");\n  page = page.toUpperCase();\n\n  if (document.querySelector(\".active\")) {\n    document.querySelector(\".active\").classList.remove(\"active\");\n  }\n\n  MAIN.firstChild.remove();\n\n  if (page === \"HOME\") {\n    MAIN.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n    animate();\n    nav.childNodes[0].classList.add(\"active\");\n  } else if (page === \"MENU\") {\n    MAIN.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n    setupSwiper();\n    nav.childNodes[1].classList.add(\"active\");\n  } else if (page === \"CONTACT\") {\n    MAIN.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n    nav.childNodes[2].classList.add(\"active\");\n  }\n\n  document.dispatchEvent(reload);\n};\nvar createEl = function createEl(arg) {\n  /**\r\n   * Returns an HTML Element with specified params.\r\n   * @param {Object}       arg             Object container.\r\n   * @param {String}       arg.elTag       If not specified creates a <div> as default.\r\n   * @param {String/Array} arg.ElClasses   If specified adds one or more classes to the element.\r\n   * @param {String}       arg.elTxt       If specified adds it as textContent to the element.\r\n   * @param {Object}       arg.dataAttr    If specified adds data attributes based on keys:values passed.\r\n   *                                       e.g. dataAttr: { name: value } => data-name=\"value\"\r\n   */\n  var tag = arg.elTag ? arg.elTag : \"div\";\n  var element = document.createElement(tag); // Checks for Classes\n\n  if (arg.elClasses) {\n    if (typeof arg.elClasses === \"string\") {\n      element.classList.add(arg.elClasses);\n    } else if (Array.isArray(arg.elClasses)) {\n      var _element$classList;\n\n      (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(arg.elClasses));\n    }\n  } // Checks for Text\n\n\n  if (arg.elTxt) element.textContent = arg.elTxt; // Checks for Data Attributes\n\n  if (arg.dataAttr) {\n    var keys = Object.keys(arg.dataAttr);\n    var values = Object.values(arg.dataAttr);\n\n    for (var i = 0; i < keys.length; i++) {\n      element.setAttribute(\"data-\" + keys[i], values[i]);\n    }\n  }\n\n  if (arg.elHTML) {\n    element.innerHTML = arg.elHTML;\n  }\n\n  return element;\n};\nvar firstLetter = function firstLetter(letter) {\n  var sp = createEl({\n    elTag: \"span\",\n    elClasses: \"first-letter\"\n  });\n  sp.textContent = letter.toUpperCase();\n  return sp;\n};\n\nvar animate = function animate() {\n  timeline = gsap.timeline({\n    repeat: -1\n  });\n  timeline.from(\".image\", {\n    duration: 2,\n    x: 1000,\n    ease: \"circ\"\n  });\n  timeline.from(\".image\", {\n    duration: 2,\n    x: 0,\n    ease: \"expo.in\"\n  }, \"+=3\");\n  timeline.set(\".image\", {\n    attr: {\n      src: _images_pic2_png__WEBPACK_IMPORTED_MODULE_4__\n    }\n  });\n  timeline.from(\".image\", {\n    duration: 2,\n    x: 1000,\n    ease: \"circ\"\n  });\n  timeline.from(\".image\", {\n    duration: 2,\n    x: 0,\n    ease: \"expo.in\"\n  }, \"+=3\");\n  timeline.set(\".image\", {\n    attr: {\n      src: _images_pic3_png__WEBPACK_IMPORTED_MODULE_5__\n    }\n  });\n  timeline.from(\".image\", {\n    duration: 2,\n    x: 1000,\n    ease: \"circ\"\n  });\n  timeline.from(\".image\", {\n    duration: 2,\n    x: 0,\n    ease: \"expo.in\"\n  }, \"+=3\");\n  timeline.set(\".image\", {\n    attr: {\n      src: _images_pic1_png__WEBPACK_IMPORTED_MODULE_3__\n    }\n  });\n};\n\nvar setupSwiper = function setupSwiper() {\n  var swiper = new Swiper(\".menuSwiper\", {\n    slidesPerView: 1,\n    spaceBetween: 30,\n    loop: true,\n    pagination: {\n      el: \".swiper-pagination\",\n      clickable: true\n    },\n    navigation: {\n      nextEl: \".swiper-button-next\",\n      prevEl: \".swiper-button-prev\"\n    }\n  });\n};\n\n//# sourceURL=webpack://odin-restaurant/./src/components/utils.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home */ \"./src/components/home.js\");\n/* harmony import */ var _components_language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/language */ \"./src/components/language.js\");\n/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/utils */ \"./src/components/utils.js\");\n\n\n\n\nvar CONTENT = document.querySelector(\"#content\");\nvar NAV = (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__.createEl)({\n  elTag: \"nav\",\n  elClasses: \"nav-wrapper\"\n});\nvar MAIN = (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__.createEl)({\n  elTag: \"div\",\n  elClasses: \"main\"\n});\nvar FOOTER = (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__.createEl)({\n  elTag: \"footer\",\n  elClasses: \"footer\"\n});\n\nvar loadPage = function loadPage() {\n  createNav();\n  createMain();\n  createFooter();\n  (0,_components_language__WEBPACK_IMPORTED_MODULE_2__.setLanguage)();\n}; // Nav Setup\n\n\nvar createNav = function createNav() {\n  NAV.append(createLogo(), createNavMenu(\"Home\", \"Menu\", \"Contact\"), createSocialMenu(\"facebook\", \"instagram\", \"twitter\"), createLangToggle());\n  CONTENT.appendChild(NAV);\n};\n\nvar createLogo = function createLogo() {\n  var logo = (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__.createEl)({\n    elTag: \"h1\",\n    elClasses: \"logo\"\n  });\n  logo.append((0,_components_utils__WEBPACK_IMPORTED_MODULE_3__.firstLetter)(\"S\"), \"ushi \", (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__.firstLetter)(\"O\"), \"asis\");\n  return logo;\n};\n\nvar createNavMenu = function createNavMenu() {\n  var menu = (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__.createEl)({\n    elTag: \"ul\",\n    elClasses: \"nav-menu\"\n  });\n\n  for (var _len = arguments.length, menuItems = new Array(_len), _key = 0; _key < _len; _key++) {\n    menuItems[_key] = arguments[_key];\n  }\n\n  var _loop = function _loop() {\n    var item = _menuItems[_i];\n    var i = (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__.createEl)({\n      elTag: \"li\",\n      elClasses: \"item\",\n      elTxt: item,\n      dataAttr: {\n        key: item.toLowerCase()\n      }\n    });\n    i.addEventListener(\"click\", function (e) {\n      return (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__.changeMainContent)(item);\n    });\n    menu.appendChild(i);\n  };\n\n  for (var _i = 0, _menuItems = menuItems; _i < _menuItems.length; _i++) {\n    _loop();\n  }\n\n  return menu;\n};\n\nvar createSocialMenu = function createSocialMenu() {\n  var menu = (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__.createEl)({\n    elTag: \"section\",\n    elClasses: \"social-icons\"\n  });\n\n  for (var _len2 = arguments.length, brandName = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n    brandName[_key2] = arguments[_key2];\n  }\n\n  for (var _i2 = 0, _brandName = brandName; _i2 < _brandName.length; _i2++) {\n    var item = _brandName[_i2];\n    var i = (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__.createEl)({\n      elType: \"i\",\n      elClasses: [\"fa-brands\", \"fa-\".concat(item.toLowerCase())]\n    });\n    menu.appendChild(i);\n  }\n\n  return menu;\n};\n\nvar createLangToggle = function createLangToggle() {\n  var label = (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__.createEl)({\n    elTag: \"label\",\n    elClasses: \"toggle\"\n  });\n  label.setAttribute(\"for\", \"langToggle\");\n  var checkbox = (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__.createEl)({\n    elTag: \"input\",\n    elClasses: \"toggle__input\"\n  });\n  checkbox.setAttribute(\"type\", \"checkbox\");\n  checkbox.setAttribute(\"id\", \"langToggle\");\n  label.appendChild(checkbox);\n  return label;\n}; // Main Setup\n\n\nvar createMain = function createMain() {\n  MAIN.appendChild((0,_components_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n  CONTENT.appendChild(MAIN);\n  (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__.changeMainContent)(\"Home\");\n}; // Footer Setup\n\n\nvar createFooter = function createFooter() {\n  var foo = (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__.createEl)({\n    elTag: \"small\",\n    elTxt: \"\\xA9 2022 Sushi Oasis. All rights reserved.\",\n    dataAttr: {\n      key: \"copyright\"\n    }\n  });\n  FOOTER.appendChild(foo);\n  var attribution = (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__.createEl)({\n    elTag: \"a\",\n    elClasses: \"attribution\",\n    elTxt: \"Images by luis_molinero on Freepik\",\n    dataAttr: {\n      key: \"picAttr\"\n    }\n  });\n  attribution.setAttribute(\"href\", \"https://www.freepik.com/free-photo/hand-holding-sushi-with-chopsticks_1198655.htm#&position=0&from_view=detail#&position=0&from_view=detail\");\n  attribution.setAttribute(\"target\", \"_blank\");\n  FOOTER.appendChild(attribution);\n  CONTENT.appendChild(FOOTER);\n};\n\nloadPage();\n\n//# sourceURL=webpack://odin-restaurant/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/us.svg */ \"./src/images/us.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/br.svg */ \"./src/images/br.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\r\\n*::before,\\r\\n*::after {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nli {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n/* KEYFRAMES */\\r\\n@keyframes move-to-right {\\r\\n  0% {\\r\\n    opacity: 0;\\r\\n    transform: translateX(-100px);\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    opacity: 1;\\r\\n    transform: translateX(0);\\r\\n  }\\r\\n}\\r\\n\\r\\n@keyframes move-to-left {\\r\\n  0% {\\r\\n    opacity: 0;\\r\\n    transform: translateX(100px);\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    opacity: 1;\\r\\n    transform: translateX(0);\\r\\n  }\\r\\n}\\r\\n\\r\\n/* SETUP */\\r\\n:root {\\r\\n  --accent: #cc0025;\\r\\n  --black: #1e1e1e;\\r\\n  --white: #f5f5f5;\\r\\n  --nav-inactive: #afafaf;\\r\\n  --nav-active: #ffffff;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: Poppins, sans-serif;\\r\\n  color: var(--white);\\r\\n  background-color: var(--black);\\r\\n  overflow-y: hidden;\\r\\n}\\r\\n\\r\\n#content {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  height: 100vh;\\r\\n}\\r\\n\\r\\n/* NAV */\\r\\n.nav-wrapper {\\r\\n  display: grid;\\r\\n  grid-template-columns: auto 1fr auto;\\r\\n  align-items: center;\\r\\n  width: 100%;\\r\\n  /* position: fixed; */\\r\\n  padding: 25px 75px;\\r\\n  border-bottom: 1px solid var(--white);\\r\\n  background-color: var(--black);\\r\\n  z-index: 100;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  font-family: Knewave;\\r\\n  font-size: 64px;\\r\\n  transform: translateY(-8px);\\r\\n  user-select: none;\\r\\n}\\r\\n\\r\\n.first-letter {\\r\\n  color: var(--accent);\\r\\n}\\r\\n\\r\\n.nav-menu {\\r\\n  display: flex;\\r\\n  gap: 30px;\\r\\n  justify-self: center;\\r\\n  font-weight: 600;\\r\\n  color: var(--nav-inactive);\\r\\n  transform: translateX(-100px);\\r\\n}\\r\\n\\r\\n.active {\\r\\n  position: relative;\\r\\n  color: var(--nav-active);\\r\\n  pointer-events: none;\\r\\n  text-shadow: 0 0 8px rgba(255, 255, 255, 0.25);\\r\\n}\\r\\n\\r\\n.active::after {\\r\\n  content: \\\"\\\";\\r\\n  height: 5px;\\r\\n  width: 100%;\\r\\n  left: 0;\\r\\n  bottom: -10px;\\r\\n  position: absolute;\\r\\n  background-color: var(--accent);\\r\\n  transition: 0.4s;\\r\\n}\\r\\n\\r\\n.active:hover::after {\\r\\n  width: 0;\\r\\n}\\r\\n\\r\\n.item {\\r\\n  text-transform: uppercase;\\r\\n  cursor: pointer;\\r\\n  user-select: none;\\r\\n  transition: all 0.4s;\\r\\n}\\r\\n\\r\\n.item:hover {\\r\\n  color: var(--nav-active);\\r\\n}\\r\\n\\r\\n.social-icons {\\r\\n  display: flex;\\r\\n  gap: 20px;\\r\\n}\\r\\n\\r\\n.fa-brands {\\r\\n  font-size: 25px;\\r\\n  cursor: pointer;\\r\\n  transition: all 0.4s;\\r\\n  color: var(--nav-inactive);\\r\\n}\\r\\n\\r\\n.fa-brands:hover {\\r\\n  transform: translateY(-5px);\\r\\n  color: var(--nav-active);\\r\\n}\\r\\n\\r\\n.toggle__input {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  position: relative;\\r\\n  width: 20px;\\r\\n  height: 10px;\\r\\n  appearance: none;\\r\\n  background: linear-gradient(to right, rgb(255, 190, 201) 30%, green);\\r\\n  outline: none;\\r\\n  box-shadow: inset 0 0 5px rgba(0, 0, 0, .2);\\r\\n  transition: .5s;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.toggle {\\r\\n  position: relative;\\r\\n  width: 50px;\\r\\n}\\r\\n\\r\\n.toggle__input::before {\\r\\n  content: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  position: absolute;\\r\\n  left: -30px;\\r\\n  width: 30px;\\r\\n  opacity: 1;\\r\\n  z-index: 50;\\r\\n  transition: .4s;\\r\\n  box-shadow: 0px 0px 5px 2px white;\\r\\n}\\r\\n\\r\\n.toggle__input:checked::before {\\r\\n  opacity: .5;\\r\\n  box-shadow: none;\\r\\n}\\r\\n\\r\\n.toggle__input::after {\\r\\n  content: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n  position: absolute;\\r\\n  right: -30px;\\r\\n  width: 30px;\\r\\n  opacity: .5;\\r\\n  z-index: 50;\\r\\n  transition: .4s;\\r\\n}\\r\\n\\r\\n.toggle__input:checked::after {\\r\\n  opacity: 1;\\r\\n  box-shadow: 0px 0px 5px 2px greenyellow;\\r\\n}\\r\\n\\r\\n\\r\\n/* MAIN */\\r\\n.main {\\r\\n  flex: 1;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.main-wrapper {\\r\\n  flex: 1;\\r\\n}\\r\\n\\r\\n/* HOME */\\r\\n.main-wrapper--home {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  /* padding-top: 11rem; */\\r\\n  overflow-y: hidden;\\r\\n  overflow-x: hidden;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.hero {\\r\\n  margin-left: 8rem;\\r\\n  flex: 1;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  font-size: 61px;\\r\\n  font-weight: normal;\\r\\n  line-height: 1.1;\\r\\n  margin-bottom: 40px;\\r\\n  max-width: 600px;\\r\\n  animation: move-to-right 1.8s;\\r\\n}\\r\\n\\r\\n.txt {\\r\\n  font-size: 20px;\\r\\n  margin-bottom: 41px;\\r\\n  max-width: 600px;\\r\\n  animation: move-to-right 1.8s .1s backwards;\\r\\n}\\r\\n\\r\\n.btn {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  position: relative;\\r\\n  width: 200px;\\r\\n  height: 70px;\\r\\n  border: none;\\r\\n  font-size: 22px;\\r\\n  font-weight: 600;\\r\\n  letter-spacing: 5px;\\r\\n  text-transform: uppercase;\\r\\n  color: inherit;\\r\\n  background-color: var(--accent);\\r\\n  cursor: pointer;\\r\\n  transition: all 0.4s;\\r\\n  z-index: 1;\\r\\n  animation: move-to-right 1s .5s backwards;\\r\\n}\\r\\n\\r\\n.btn::before {\\r\\n  content: \\\"\\\";\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  bottom: 0;\\r\\n  right: 0;\\r\\n  z-index: -1;\\r\\n  background-color: var(--white);\\r\\n  transform: scaleX(0);\\r\\n  transition: all 0.4s;\\r\\n  transform-origin: left;\\r\\n}\\r\\n\\r\\n.btn:hover,\\r\\n.btn:focus {\\r\\n  color: var(--accent);\\r\\n}\\r\\n\\r\\n.btn:hover::before,\\r\\n.btn:focus::before {\\r\\n  transform: scaleX(1);\\r\\n}\\r\\n\\r\\n.image {\\r\\n  flex: 1;\\r\\n  width: 50%;\\r\\n}\\r\\n\\r\\n/* MENU */\\r\\n.main-wrapper--menu {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  display: grid;\\r\\n  gap: 15px;\\r\\n  padding: 0 50px;\\r\\n}\\r\\n\\r\\n.card-title {\\r\\n  display: flex;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n  position: relative;\\r\\n  width: min-content;\\r\\n  font-size: 48px;\\r\\n  text-transform: uppercase;\\r\\n  margin-bottom: 25px;\\r\\n  animation: move-to-right 1.6s\\r\\n}\\r\\n\\r\\n.card-title::after {\\r\\n  content: \\\"\\\";\\r\\n  position: absolute;\\r\\n  bottom: 0;\\r\\n  width: 100%;\\r\\n  height: 8px;\\r\\n  background-color: var(--accent);\\r\\n  animation: move-to-left 1.2s .3s backwards\\r\\n}\\r\\n\\r\\n.dish {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 90px;\\r\\n}\\r\\n\\r\\n.dish-name {\\r\\n  color: var(--accent);\\r\\n  font-size: 22px;\\r\\n  font-weight: 700;\\r\\n  text-transform: uppercase;\\r\\n  animation: move-to-right 1.2s\\r\\n}\\r\\n\\r\\n.dish-price {\\r\\n  font-size: 20px;\\r\\n  font-weight: 700;\\r\\n  justify-self: end;\\r\\n  animation: move-to-right 1.2s .5s backwards\\r\\n}\\r\\n\\r\\n.dish-description {\\r\\n  animation: move-to-left 1.2s\\r\\n}\\r\\n\\r\\n.currency {\\r\\n  color: var(--accent);\\r\\n}\\r\\n\\r\\n.swiper {\\r\\n  width: 100vw;\\r\\n}\\r\\n\\r\\n.swiper-slide {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.swiper-button-next,\\r\\n.swiper-button-prev {\\r\\n  color: var(--white);\\r\\n  transition: .4s;\\r\\n}\\r\\n\\r\\n.swiper-button-next:hover,\\r\\n.swiper-button-prev:hover {\\r\\n  color: var(--accent);\\r\\n}\\r\\n\\r\\n.swiper-pagination-bullet {\\r\\n  background-color: var(--white);\\r\\n}\\r\\n\\r\\n.swiper-pagination-bullet-active {\\r\\n  background-color: var(--accent);\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n/* CONTACT */\\r\\n.main-wrapper--contact {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  flex-direction: column;\\r\\n  padding: 50px 100px;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.contact-heading {\\r\\n  max-width: 800px;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.contact-heading h2 {\\r\\n  font-size: 36px;\\r\\n  font-weight: 500;\\r\\n  animation: move-to-right 1.2s\\r\\n}\\r\\n\\r\\n.contact-heading p {\\r\\n  font-weight: 300;\\r\\n  animation: move-to-left 1.2s\\r\\n}\\r\\n\\r\\n.contact-container {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  margin-top: 30px;\\r\\n}\\r\\n\\r\\n.contact-info {\\r\\n  display: flex;\\r\\n  width: 35%;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.contact--box:nth-child(1) {\\r\\n  animation: move-to-right 1.5s;\\r\\n}\\r\\n.contact--box:nth-child(2) {\\r\\n  animation: move-to-right 1.5s .2s backwards;\\r\\n}\\r\\n.contact--box:nth-child(3) {\\r\\n  animation: move-to-right 1.5s .4s backwards;\\r\\n}\\r\\n\\r\\n.contact--box {\\r\\n  display: flex;\\r\\n  position: relative;\\r\\n  padding: 20px 0;\\r\\n}\\r\\n\\r\\n.contact--icon {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  min-width: 60px;\\r\\n  height: 60px;\\r\\n  background: var(--accent);\\r\\n  border-radius: 50%;\\r\\n  font-size: 22px;\\r\\n}\\r\\n\\r\\n.contact--text {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  margin-left: 20px;\\r\\n  font-size: 16px;\\r\\n  font-weight: 300;\\r\\n}\\r\\n\\r\\n.contact--text h3 {\\r\\n  color: var(--accent);\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n.contact-form {\\r\\n  width: 40%;\\r\\n  padding: 40px;\\r\\n  color: var(--black);\\r\\n  background: var(--white);\\r\\n  animation: move-to-left 1.5s\\r\\n}\\r\\n\\r\\n.contact-form h2 {\\r\\n  font-size: 30px;\\r\\n  font-weight: 500;\\r\\n}\\r\\n\\r\\n.inputBox {\\r\\n  position: relative;\\r\\n  width: 100%;\\r\\n  margin-top: 10px;\\r\\n}\\r\\n\\r\\n.inputBox input,\\r\\n.inputBox textarea {\\r\\n  width: 100%;\\r\\n  padding: 5px 0; margin: 10px 0;\\r\\n  border: none; outline: none;\\r\\n  border-bottom: 2px solid var(--black);\\r\\n  background-color: var(--white);\\r\\n  font-size: 16px;\\r\\n  resize: none;\\r\\n}\\r\\n\\r\\n.inputBox span {\\r\\n  position: absolute;\\r\\n  left: 0;\\r\\n  padding: 5px 0; margin: 10px 0;\\r\\n  font-size: 16px;\\r\\n  pointer-events: none;\\r\\n  transition: .4s;\\r\\n  color: var(--nav-inactive);\\r\\n}\\r\\n\\r\\n.inputBox input:focus ~ span,\\r\\n.inputBox input:valid ~ span,\\r\\n.inputBox textarea:focus ~ span,\\r\\n.inputBox textarea:valid ~ span {\\r\\n  color: var(--accent);\\r\\n  font-size: 12px;\\r\\n  transform: translateY(-20px);\\r\\n}\\r\\n\\r\\n.contact-form .inputBox input[type=\\\"submit\\\"] {\\r\\n  width: 100px;\\r\\n  background-color: var(--accent);\\r\\n  color: var(--white);\\r\\n  border: none; \\r\\n  cursor: pointer;\\r\\n  padding: 10px;\\r\\n  font-size: 16px;\\r\\n  transition: .4s;\\r\\n}\\r\\n\\r\\n.contact-form .inputBox input[type=\\\"submit\\\"]:hover {\\r\\n  color: var(--accent);\\r\\n  background-color: var(--white);\\r\\n  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.3);\\r\\n}\\r\\n\\r\\n/* FOOTER */\\r\\n.footer {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  position: relative;\\r\\n  margin-top: auto;\\r\\n  padding: 20px 0;\\r\\n  flex-shrink: 0;\\r\\n  font-size: 16px;\\r\\n  background-color: rgba(0, 0, 0, 0.4);\\r\\n}\\r\\n\\r\\n.attribution {\\r\\n  position: absolute;\\r\\n  right: 2%;\\r\\n  color: var(--nav-inactive);\\r\\n  font-size: 0.65rem;\\r\\n  text-decoration: none;\\r\\n  transition: all 0.4s;\\r\\n}\\r\\n\\r\\n.attribution:hover {\\r\\n  color: var(--nav-active);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/images/br.svg":
/*!***************************!*\
  !*** ./src/images/br.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3a2215d3fc104755ace4.svg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/images/br.svg?");

/***/ }),

/***/ "./src/images/pic1.png":
/*!*****************************!*\
  !*** ./src/images/pic1.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"43bcc9637bc903b51b7c.png\";\n\n//# sourceURL=webpack://odin-restaurant/./src/images/pic1.png?");

/***/ }),

/***/ "./src/images/pic2.png":
/*!*****************************!*\
  !*** ./src/images/pic2.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"272932eefefecee8e8f2.png\";\n\n//# sourceURL=webpack://odin-restaurant/./src/images/pic2.png?");

/***/ }),

/***/ "./src/images/pic3.png":
/*!*****************************!*\
  !*** ./src/images/pic3.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3a102d3a35b15763468c.png\";\n\n//# sourceURL=webpack://odin-restaurant/./src/images/pic3.png?");

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

eval("module.exports = JSON.parse('{\"languages\":{\"en\":{\"strings\":{\"home\":\"Home\",\"menu\":\"Menu\",\"contact\":\"Contact\",\"copyright\":\"?? 2022 Sushi Oasis. All rights reserved.\",\"menu-btn\":\"View Menu\",\"picAttr\":\"Images by luis_molinero on Freepik\",\"hero-header\":\"The paradise for sushi lovers.\",\"hero-paragraph\":\"The Sushi Oasis delivers food prepared with fresh and high-quality ingredients made by Japanese cuisine lovers. Our mission is to provide the most genuine experience you have ever tasted!\",\"contact--header\":\"Contact Us\",\"contact--paragraph\":\"Would like to send a suggestion or have any questions about Sushi Oasis? Contact us right now using the form below!\",\"contact--address\":\"Address\",\"contact--phone\":\"Phone\",\"contact--email\":\"Email\",\"contact--send-msg\":\"Send Message\",\"contact--full-name\":\"Full Name\",\"contact--enter-msg\":\"Enter your message\",\"contact--btn-txt\":\"Send\",\"dish-dsc--uramaki1\":\"Seaweed/Avocado/Cucumber/Tobiko/Wasabi Mayo\",\"dish-dsc--uramaki2\":\"Seaweed/Avocado/Chilli Powder/Tuna/Spicy Mayo\",\"dish-dsc--uramaki3\":\"Seaweed/Salmon/Cream Cheese/Seaweed Powder/ Wasabi Mayo\",\"dish-dsc--uramaki4\":\"Seaweed/Avocado/Sesame/Tobiko/Chef\\'s Special Mayo\",\"dish-dsc--nigiri1\":\"Hamachi/Salty Soy Sauce/Wasabi\",\"dish-dsc--nigiri2\":\"Tuna/Salty Soy Sauce/Wasabi\",\"dish-dsc--nigiri3\":\"Prawn/Seaweed/Salty Soy Sauce/Wasabi\",\"dish-dsc--nigiri4\":\"Octopus/Salty Soy Sauce/ Wasabi\",\"dish-dsc--hosomaki1\":\"Veggie Cucumber\",\"dish-dsc--hosomaki2\":\"Cream Cheese\",\"dish-dsc--hosomaki3\":\"Tuna\",\"dish-dsc--hosomaki4\":\"Salmon\",\"dish-dsc--sashimi1\":\"Salmon/Salty Soy Sauce/Wasabi\",\"dish-dsc--sashimi2\":\"Tuna/Salty Soy Sauce/Wasabi\",\"dish-dsc--sashimi3\":\"Salmon/Tuna/Hamachi/Salty Soy Sauce/Wasabi\"}},\"pt\":{\"strings\":{\"home\":\"In??cio\",\"menu\":\"Menu\",\"contact\":\"Contato\",\"copyright\":\"?? 2022 Sushi Oasis. Todos os direitos reservados.\",\"menu-btn\":\"Ver Menu\",\"picAttr\":\"Imagens por luis_molinero em Freepik\",\"hero-header\":\"O para??so para amantes de sushi.\",\"hero-paragraph\":\"O Sushi Oasis entrega comida preparada com ingredientes frescos e de alta qualidade, feita por apaixonados pela culin??ria Japonesa. Nossa miss??o ?? proporcionar a experi??ncia mais genu??na que voc?? j?? experimentou!\",\"contact--header\":\"Contate-nos\",\"contact--paragraph\":\"Gostaria de enviar alguma sugest??o ou tem alguma d??vida sobre o Sushi Oasis? Entre em contato conosco agora mesmo usando o formul??rio abaixo!\",\"contact--address\":\"Endere??o\",\"contact--phone\":\"Telefone\",\"contact--email\":\"Email\",\"contact--send-msg\":\"Enviar Mensagem\",\"contact--full-name\":\"Nome Completo\",\"contact--enter-msg\":\"Digite sua mensagem\",\"contact--btn-txt\":\"Enviar\",\"dish-dsc--uramaki1\":\"Alga/Abacate/Pepino/Maionese de Wasabi\",\"dish-dsc--uramaki2\":\"Alga/Abacate/Pimenta em p??/Atum/Maionese apimentada\",\"dish-dsc--uramaki3\":\"Alga/Salm??o/Cream Cheese/Alga em p??/Maionese de Wasabi\",\"dish-dsc--uramaki4\":\"Alga/Abacate/Gergelim/Tobiko/Maionese especial do Chefe\",\"dish-dsc--nigiri1\":\"Hamachi/Molho Shoyu/Wasabi\",\"dish-dsc--nigiri2\":\"Atum/Molho Shoyu/Wasabi\",\"dish-dsc--nigiri3\":\"Camar??o/Alga/Molho Shoyu/Wasabi\",\"dish-dsc--nigiri4\":\"Polvo/Molho Shoyu/Wasabi\",\"dish-dsc--hosomaki1\":\"Pepino Vegetariano\",\"dish-dsc--hosomaki2\":\"Cream Cheese\",\"dish-dsc--hosomaki3\":\"Atum\",\"dish-dsc--hosomaki4\":\"Salm??o\",\"dish-dsc--sashimi1\":\"Salm??o/Molho Shoyu/Wasabi\",\"dish-dsc--sashimi2\":\"Atum/Molho Shoyu/Wasabi\",\"dish-dsc--sashimi3\":\"Salm??o/Atum/Hamachi/Molho Shoyu/Wasabi\"}}}}');\n\n//# sourceURL=webpack://odin-restaurant/./src/components/languages.json?");

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