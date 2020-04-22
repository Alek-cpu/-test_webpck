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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/contact.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_collapseMnu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/collapseMnu.js */ \"./src/js/collapseMnu.js\");\n/* harmony import */ var _js_collapseMnu_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_collapseMnu_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_ToDo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/ToDo.js */ \"./src/js/ToDo.js\");\n/* harmony import */ var _js_ToDo_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_ToDo_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/js/ToDo.js":
/*!************************!*\
  !*** ./src/js/ToDo.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const mainCheckbox = document.querySelector('#checkbox');\nconst childCheckbox = document.querySelectorAll('.chield');\nconst listInfo = document.querySelectorAll('.hideElement');\nconst listInfoHide = document.querySelectorAll('.hide');\nconst selectedInfo = document.querySelector('.selectedInfo');\nlet countChecked = 0;\n\nconst checkAllSelected = e => {\n  countChecked = 0;\n\n  if (mainCheckbox.checked) {\n    childCheckbox.forEach(checkbox => {\n      checkbox.checked = true;\n      countChecked++;\n    });\n    console.log(countChecked);\n  } else {\n    childCheckbox.forEach(checkbox => {\n      checkbox.checked = false;\n      countChecked = 0;\n    });\n    console.log(countChecked);\n  }\n\n  selectedInfo.innerHTML = `${countChecked} selected`;\n  hideElements();\n};\n\nconst checkboxSelect = function () {\n  if (this.checked) {\n    countChecked++;\n  } else {\n    countChecked--;\n  }\n\n  selectedInfo.innerHTML = `${countChecked} selected`;\n  hideElements();\n};\n\nconst hideElements = function () {\n  listInfo.forEach(element => {\n    if (countChecked) {\n      element.classList.add('hide');\n      listInfoHide.forEach(elementhide => {\n        elementhide.classList.remove('hide');\n      });\n    } else {\n      element.classList.remove('hide');\n      listInfoHide.forEach(elementhide => {\n        elementhide.classList.add('hide');\n      });\n    }\n  });\n};\n\nchildCheckbox.forEach((checkbox, i) => {\n  checkbox.addEventListener('change', checkboxSelect);\n});\nmainCheckbox.addEventListener('change', checkAllSelected);\n\n//# sourceURL=webpack:///./src/js/ToDo.js?");

/***/ }),

/***/ "./src/js/collapseMnu.js":
/*!*******************************!*\
  !*** ./src/js/collapseMnu.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const sidebar = document.querySelector('.sidebar');\nconst toggleSidebar = document.querySelector('.toggle-wrap .toggle');\nconst svgColor = document.querySelector('.toggle .fil__svg');\nconst profileMnuItem = document.querySelector('nav.mnu');\nconst items = profileMnuItem.querySelectorAll('nav.mnu > a > div.mnu-item > div.mnu-item__name');\nconst profileContainer = document.querySelector('div.sidebar-container');\nconst SetItems = profileContainer.querySelectorAll('.setItem > .mnu-item > .mnu-item__name');\nconst profileInfoDiv = document.querySelector('.profile-block');\nconst profileInfoElem = profileInfoDiv.querySelectorAll('.profile-block > .profileTxtElem');\nconst containerSwitch = document.querySelector('.container');\nconst sidebarInner = document.querySelector('.profile, .mnu-item');\nconst shortName = document.querySelector('div.name span.kit');\nconst sidebarInnerCheck = document.querySelector('.sidebar-name-inner');\ntoggleSidebar.addEventListener('click', toggleChecked);\n\nfunction toggleChecked(e) {\n  svgColor.classList.toggle('checkedToggle');\n  sidebar.classList.toggle('goSidebar');\n  items.forEach(elem => {\n    elem.classList.toggle('profileMnuItem');\n  });\n  SetItems.forEach(elemSetItem => {\n    elemSetItem.classList.toggle('profileMnuItem');\n  });\n  profileInfoElem.forEach(txtElem => {\n    txtElem.classList.toggle('profileMnuItem');\n  });\n  containerSwitch.classList.toggle('containerToggle');\n  sidebarInner.classList.toggle('sidebarInner');\n  shortName.classList.toggle('clearkit');\n  sidebarInnerCheck.classList.toggle('sidebarInnerCheck');\n}\n\n//# sourceURL=webpack:///./src/js/collapseMnu.js?");

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