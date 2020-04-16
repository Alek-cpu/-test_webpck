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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_collapse_mnu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/collapse_mnu.js */ \"./src/js/collapse_mnu.js\");\n/* harmony import */ var _js_collapse_mnu_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_collapse_mnu_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_datepicker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/datepicker.js */ \"./src/js/datepicker.js\");\n/* harmony import */ var _js_datepicker_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_datepicker_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/collapse_mnu.js":
/*!********************************!*\
  !*** ./src/js/collapse_mnu.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _createForOfIteratorHelper(o) { if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar sidebar = document.querySelector('.sidebar');\nvar toggleSidebar = document.querySelector('.toggle-wrap .toggle');\nvar svgColor = document.querySelector('.toggle .fil__svg');\nvar profileMnuItem = document.querySelector('nav.mnu');\nvar items = profileMnuItem.querySelectorAll('nav.mnu > a > div.mnu-item > div.mnu-item__name');\nvar profileContainer = document.querySelector('div.sidebar-container');\nvar SetItems = profileContainer.querySelectorAll('div.sidebar-container > div.setItem > div.mnu-item > div.mnu-item__name');\nvar profileInfoDiv = document.querySelector('.profile-block');\nvar profileInfoElem = profileInfoDiv.querySelectorAll('.profile-block > .profileTxtElem');\nvar containerSwitch = document.querySelector('.container');\nvar sidebarInner = document.querySelector('.profile, .mnu-item');\nvar shortName = document.querySelector('div.name span.kit');\nvar sidebarInnerCheck = document.querySelector('.sidebar-name-inner');\ntoggleSidebar.addEventListener('click', toggleChecked);\n\nfunction toggleChecked(e) {\n  svgColor.classList.toggle('checkedToggle');\n  sidebar.classList.toggle('goSidebar');\n\n  var _iterator = _createForOfIteratorHelper(items),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var elem = _step.value;\n      elem.classList.toggle('profileMnuItem');\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  var _iterator2 = _createForOfIteratorHelper(SetItems),\n      _step2;\n\n  try {\n    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n      var elemSetItem = _step2.value;\n      elemSetItem.classList.toggle('profileMnuItem');\n    }\n  } catch (err) {\n    _iterator2.e(err);\n  } finally {\n    _iterator2.f();\n  }\n\n  var _iterator3 = _createForOfIteratorHelper(profileInfoElem),\n      _step3;\n\n  try {\n    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n      var txtElem = _step3.value;\n      txtElem.classList.toggle('profileMnuItem');\n    }\n  } catch (err) {\n    _iterator3.e(err);\n  } finally {\n    _iterator3.f();\n  }\n\n  containerSwitch.classList.toggle('containerToggle');\n  sidebarInner.classList.toggle('sidebarInner');\n  shortName.classList.toggle('clearkit');\n  sidebarInnerCheck.classList.toggle('sidebarInnerCheck');\n}\n\n//# sourceURL=webpack:///./src/js/collapse_mnu.js?");

/***/ }),

/***/ "./src/js/datepicker.js":
/*!******************************!*\
  !*** ./src/js/datepicker.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//DOM переменные\nvar datePicker = document.querySelector('.calendar');\nvar dateElement = document.querySelector('.nameMonthWrapper');\nvar mthElements = document.querySelector('.nameMonth');\nvar nextMthElement = document.querySelector('.rightArrow');\nvar preMthElement = document.querySelector('.leftArrow');\nvar daysElements = document.querySelector('.days'); //Переменная массив - месец\n\nvar months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; // дата\n\nvar date = new Date();\nvar day = date.getDate();\nvar month = date.getMonth();\nvar year = date.getFullYear(); // let selectedDate = date;\n\nvar selectedDay = day;\nvar selectedMonth = month;\nvar selectedYear = year;\nmthElements.textContent = months[month] + ' ' + year;\ncountDayMonth(); //Слушатель событий - calendar\n\ndatePicker.addEventListener('click', toggleDatePicker);\nnextMthElement.addEventListener('click', toggleNextMonth);\npreMthElement.addEventListener('click', togglePreMonth); //function\n\nfunction toggleDatePicker(e) {\n  // console.log(e.path);\n  dateElement.classList.toggle('active');\n}\n\nfunction toggleNextMonth(e) {\n  month++;\n\n  if (month > 11) {\n    month = 0;\n    year++;\n  }\n\n  mthElements.textContent = months[month] + ' ' + year;\n  countDayMonth();\n}\n\nfunction togglePreMonth(e) {\n  month--;\n\n  if (month < 0) {\n    month = 11;\n    year--;\n  }\n\n  mthElements.textContent = months[month] + ' ' + year;\n  countDayMonth();\n}\n\nfunction countDayMonth(e) {\n  daysElements.innerHTML = '';\n  var countDays = 31;\n\n  if (month == 1) {\n    countDays = 28;\n  }\n\n  for (var i = 0; i < countDays; i++) {\n    var dayElement = document.createElement('div');\n    dayElement.classList.add('day');\n    dayElement.textContent = i + 1;\n\n    if (selectedDay == i + 1 && selectedYear == year && selectedMonth == month) {\n      dayElement.classList.add('blue');\n    }\n\n    daysElements.appendChild(dayElement);\n  }\n} // function checkEventPathClass(path, selector) {\n//     for (let i = 0; i < path; i++) {\n//         if ( path[i].classList && path[i].classList.contains(selector) ) {\n//             return true;\n//         }\n//     }\n//     return false;\n// }\n\n//# sourceURL=webpack:///./src/js/datepicker.js?");

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