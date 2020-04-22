/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_collapseMnu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/collapseMnu.js */ \"./src/js/collapseMnu.js\");\n/* harmony import */ var _js_collapseMnu_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_collapseMnu_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_dragAndDrop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/dragAndDrop.js */ \"./src/js/dragAndDrop.js\");\n/* harmony import */ var _js_dragAndDrop_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_dragAndDrop_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_datePicker_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/datePicker.js */ \"./src/js/datePicker.js\");\n/* harmony import */ var _js_datePicker_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_datePicker_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _js_testDrop_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/testDrop.js */ \"./src/js/testDrop.js\");\n/* harmony import */ var _js_testDrop_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_testDrop_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/collapseMnu.js":
/*!*******************************!*\
  !*** ./src/js/collapseMnu.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const sidebar = document.querySelector('.sidebar');\nconst toggleSidebar = document.querySelector('.toggle-wrap .toggle');\nconst svgColor = document.querySelector('.toggle .fil__svg');\nconst profileMnuItem = document.querySelector('nav.mnu');\nconst items = profileMnuItem.querySelectorAll('nav.mnu > a > div.mnu-item > div.mnu-item__name');\nconst profileContainer = document.querySelector('div.sidebar-container');\nconst SetItems = profileContainer.querySelectorAll('.setItem > .mnu-item > .mnu-item__name');\nconst profileInfoDiv = document.querySelector('.profile-block');\nconst profileInfoElem = profileInfoDiv.querySelectorAll('.profile-block > .profileTxtElem');\nconst containerSwitch = document.querySelector('.container');\nconst sidebarInner = document.querySelector('.profile, .mnu-item');\nconst shortName = document.querySelector('div.name span.kit');\nconst sidebarInnerCheck = document.querySelector('.sidebar-name-inner');\ntoggleSidebar.addEventListener('click', toggleChecked);\n\nfunction toggleChecked(e) {\n  svgColor.classList.toggle('checkedToggle');\n  sidebar.classList.toggle('goSidebar');\n  items.forEach(elem => {\n    elem.classList.toggle('profileMnuItem');\n  });\n  SetItems.forEach(elemSetItem => {\n    elemSetItem.classList.toggle('profileMnuItem');\n  });\n  profileInfoElem.forEach(txtElem => {\n    txtElem.classList.toggle('profileMnuItem');\n  });\n  containerSwitch.classList.toggle('containerToggle');\n  sidebarInner.classList.toggle('sidebarInner');\n  shortName.classList.toggle('clearkit');\n  sidebarInnerCheck.classList.toggle('sidebarInnerCheck');\n}\n\n//# sourceURL=webpack:///./src/js/collapseMnu.js?");

/***/ }),

/***/ "./src/js/datePicker.js":
/*!******************************!*\
  !*** ./src/js/datePicker.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const datePicker = document.querySelector('.calendar');\nconst dateElement = document.querySelector('.nameMonthWrapper');\nconst mthElements = document.querySelector('.nameMonth');\nconst nextMthElement = document.querySelector('.rightArrow');\nconst preMthElement = document.querySelector('.leftArrow');\nconst daysElements = document.querySelector('.days');\nconst months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\nlet date = new Date();\nlet day = date.getDate();\nlet month = date.getMonth();\nlet year = date.getFullYear();\nconst selectedDay = day;\nconst selectedMonth = month;\nconst selectedYear = year;\nmthElements.textContent = months[month] + ' ' + year;\ncountDayMonth();\ndatePicker.addEventListener('click', toggleDatePicker);\nnextMthElement.addEventListener('click', toggleNextMonth);\npreMthElement.addEventListener('click', togglePreMonth);\n\nfunction toggleDatePicker(e) {\n  dateElement.classList.toggle('active');\n}\n\nfunction toggleNextMonth(e) {\n  month++;\n\n  if (month > 11) {\n    month = 0;\n    year++;\n  }\n\n  mthElements.textContent = months[month] + ' ' + year;\n  countDayMonth();\n}\n\nfunction togglePreMonth(e) {\n  month--;\n\n  if (month < 0) {\n    month = 11;\n    year--;\n  }\n\n  mthElements.textContent = months[month] + ' ' + year;\n  countDayMonth();\n}\n\nfunction countDayMonth(e) {\n  daysElements.innerHTML = '';\n  let i = 0;\n  let countDays = 31;\n\n  if (month % 2 !== 0) {\n    countDays = 30;\n  }\n\n  if (month === 1) countDays = 28;\n  if (month === 11) countDays = 31;\n\n  while (i < countDays) {\n    const dayElement = document.createElement('div');\n    dayElement.classList.add('day');\n    dayElement.textContent = i + 1;\n\n    if (selectedDay === i + 1 && selectedYear === year && selectedMonth === month) {\n      dayElement.classList.add('blue');\n    }\n\n    daysElements.appendChild(dayElement);\n    i++;\n  }\n}\n\n//# sourceURL=webpack:///./src/js/datePicker.js?");

/***/ }),

/***/ "./src/js/dragAndDrop.js":
/*!*******************************!*\
  !*** ./src/js/dragAndDrop.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const dragNDrop = () => {\n  const cards = document.querySelectorAll('.card');\n  const baskets = document.querySelectorAll('.deleted');\n\n  function removeCard() {\n    baskets.forEach((basket, i) => {\n      cards.forEach((card, j) => {\n        basket.addEventListener('click', function (e) {\n          if (i === j) {\n            cards[i].remove();\n          }\n        });\n      });\n    });\n  }\n\n  removeCard();\n};\n\ndragNDrop();\n\n//# sourceURL=webpack:///./src/js/dragAndDrop.js?");

/***/ }),

/***/ "./src/js/testDrop.js":
/*!****************************!*\
  !*** ./src/js/testDrop.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const cards = document.querySelectorAll('.card');\nconst cell = document.querySelector('.drag-drop-wrapper');\n\nconst dragStart = function () {\n  setTimeout(() => {\n    this.classList.add('hide');\n  }, 0);\n};\n\nconst dragEnd = function () {\n  this.classList.remove('hide');\n};\n\nconst dragOver = function (e) {\n  e.preventDefault();\n  console.log('over');\n};\n\nconst dragEnter = function () {\n  console.log('enter');\n};\n\nconst dragLeave = function () {\n  console.log('leave');\n  this.classList.remove('hovered');\n};\n\nconst dragDrop = function () {\n  console.log('drop');\n  cell.classList.remove('hide');\n  cell.appendChild(this);\n};\n\ncell.addEventListener('dragover', dragOver);\ncell.addEventListener('dragenter', dragEnter);\ncell.addEventListener('dragleave', dragLeave);\ncards.forEach(card => {\n  card.addEventListener('dragstart', dragStart);\n  card.addEventListener('dragend', dragEnd);\n  card.addEventListener('drop', dragDrop);\n});\n\n//# sourceURL=webpack:///./src/js/testDrop.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ })

/******/ });