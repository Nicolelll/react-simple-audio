(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
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

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n\n  return arr2;\n}\n\nmodule.exports = _arrayLikeToArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\n\nmodule.exports = _arrayWithHoles;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/arrayWithHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/defineProperty.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _extends() {\n  module.exports = _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  return _extends.apply(this, arguments);\n}\n\nmodule.exports = _extends;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/extends.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArrayLimit(arr, i) {\n  if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return;\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _e = undefined;\n\n  try {\n    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\nmodule.exports = _iterableToArrayLimit;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\nmodule.exports = _nonIterableRest;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/nonIterableRest.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js\");\n\nfunction _objectWithoutProperties(source, excluded) {\n  if (source == null) return {};\n  var target = objectWithoutPropertiesLoose(source, excluded);\n  var key, i;\n\n  if (Object.getOwnPropertySymbols) {\n    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n\n    for (i = 0; i < sourceSymbolKeys.length; i++) {\n      key = sourceSymbolKeys[i];\n      if (excluded.indexOf(key) >= 0) continue;\n      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n      target[key] = source[key];\n    }\n  }\n\n  return target;\n}\n\nmodule.exports = _objectWithoutProperties;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/objectWithoutProperties.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _objectWithoutPropertiesLoose(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key, i;\n\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n\n  return target;\n}\n\nmodule.exports = _objectWithoutPropertiesLoose;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ \"./node_modules/@babel/runtime/helpers/arrayWithHoles.js\");\n\nvar iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ \"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\");\n\nvar unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ \"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\");\n\nvar nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ \"./node_modules/@babel/runtime/helpers/nonIterableRest.js\");\n\nfunction _slicedToArray(arr, i) {\n  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();\n}\n\nmodule.exports = _slicedToArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/slicedToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    module.exports = _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    module.exports = _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nmodule.exports = _typeof;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ \"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return arrayLikeToArray(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);\n}\n\nmodule.exports = _unsupportedIterableToArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js?");

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2017 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg) && arg.length) {\n\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\tif (inner) {\n\t\t\t\t\tclasses.push(inner);\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif ( true && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n\n\n//# sourceURL=webpack:///./node_modules/classnames/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/audioTime.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/audioTime.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".timeContainer {\\n  font-size: 12px;\\n  color: #666;\\n  padding: 10px;\\n  padding-left: 0;\\n  margin-top: 12px;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles/audioTime.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/basicAudio.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/basicAudio.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".basicContainer {\\n  min-width: 200px;\\n  min-height: 50px;\\n  box-shadow: 1px 1px 16px 6px rgba(219,219,219,0.8);\\n  width: 700px;\\n}\\n.baseAudio {\\n  display: flex;\\n  padding: 20px;\\n  justify-content: space-between;\\n}\\n.flex {\\n  display: flex;\\n}\\n.flex-center {\\n  align-items: center;\\n  display: flex;\\n}\\n.flex-baseline {\\n  align-items: baseline;\\n}\\n.playBtn {\\n  background: transparent;\\n  height: 50px;\\n  line-height: 50px;\\n  padding-top: 35px;\\n}\\n.iconStyle {\\n  color: #4FCAA4;\\n}\\n.img {\\n  width: 100px;\\n  height: 100px;\\n  /* margin: 20px; */\\n}\\n.img > img {\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n}\\n.info {\\n  width: 150px;\\n  padding-top: 15px;\\n  padding-left: 15px;\\n}\\n.title {\\n  font-size: 15px;\\n  color: #333;\\n}\\n.author {\\n  font-size: 12px;\\n  color: #ccc;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles/basicAudio.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/controls.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/controls.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".control-container {\\n  align-items: flex-end;\\n  display: flex;\\n  margin-bottom: 15px;\\n}\\n\\n.control-icon {\\n  font-size: 22px;\\n  color: #333;\\n}\\n.volume-box {\\n  position: relative;\\n  height: 15px;\\n  width: 70px;\\n  border-radius: 3px;\\n  box-shadow: 0px -1px 3px #ccc;\\n  transform: rotateX(180deg);\\n  padding: 5px;\\n  opacity: 1;\\n  left: 8px;\\n  top: 4px;\\n}\\n.vloume-line {\\n  width: 100%;\\n  height: 2px;\\n  background: #4FCAA4;\\n  position: relative;\\n  bottom: -5px;\\n}\\n.volume-point {\\n  width: 7px;\\n  height: 7px;\\n  position: absolute;\\n  border-radius: 50%;\\n  background: #4FCAA4;\\n  bottom: -3px;\\n  right: 0;\\n  transition: '';\\n  transform: '';\\n}\\n/* .volume-box:after {\\n\\ttop: 100%;\\n\\tleft: 50%;\\n\\tborder: solid transparent;\\n\\tcontent: \\\" \\\";\\n\\theight: 0;\\n\\twidth: 0;\\n\\tposition: absolute;\\n\\tpointer-events: none;\\n\\tborder-color: rgba(136, 183, 213, 0);\\n\\tborder-bottom-color: #ccc;\\n\\tborder-width: 13px;\\n  margin-left: -13px;\\n} */\\n.hidden {\\n  opacity: 0;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles/controls.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/icon/iconfont.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/icon/iconfont.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./iconfont.eot?t=1595475206530 */ \"./src/styles/icon/iconfont.eot?t=1595475206530\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./iconfont.woff?t=1595475206530 */ \"./src/styles/icon/iconfont.woff?t=1595475206530\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ./iconfont.ttf?t=1595475206530 */ \"./src/styles/icon/iconfont.ttf?t=1595475206530\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ./iconfont.svg?t=1595475206530 */ \"./src/styles/icon/iconfont.svg?t=1595475206530\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___, { hash: \"#iefix\" });\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___, { hash: \"#iconfont\" });\n// Module\nexports.push([module.i, \"@font-face {font-family: \\\"iconfont\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \"); /* IE9 */\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('embedded-opentype'), \\n  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAS0AAsAAAAACvQAAARkAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDfgqHFIYPATYCJAMsCxgABCAFhG0HgVcbjgkRFZztyX4m2LYO1irhjWo4UHWV0BbaeBM88O/5dS7SRg8qhmAxAtKBtZKKFbP0VwOAwbjzGPad62cPSLgIM5Rn0d8H33XJqARv//8xX5fHB5bXng1pYlGtFQE0G+hsVvEjiiysBb+Yf5Pw7HVSniXTUadDADbVaILo029IDBMNLROAWDB39lTMhBZdQRKYikDBrhpxCANT7pavAwe9txc/0kqYIDEUtHbErL4z6OF/4v+ovLzHBIOBx2cGpnuBApoAGsSqQusSVOBtgsJeh2v6AKYIkeB/5ZP7x3yeVfZNwD8Xr0k5IfyTJ1FoDAIEMbGwQQQgqQv5rpHEvn48hSDA/xRBgv8ZggL/cwQN/hcIBvhfagjcER7UBDeyb4Bggu8jWOD/mIUNgGMWh4Ao8J9Y4hJjVo28i1g5QSEQSNfVhHMlKlQXWmZrJFRaODWbTeRyyUwmnk777DgLohjc4x1pJxVlsqPt+WVN3t2kE9eQ3vVw8mQq1HVt/LhXHjt2Q6jUTcunyekzwpCQcfKmipl5h04W4KoiClUJxUuVgy3PpdPZbI5GxW66LXXrnpu9Wxjd86SjHHXx2bNPXq/Qx66FZknv5j23CiN19qa910+zvN9olbpt7y3oCvd0+8atImWv7yTbHDI56rZc9QvZTqPfyOCl843u17/9pu8X6t9+0yVRyIhD8umnJUSHJmwIR+HF78SJ35qHi/yt8cRSHEdPMHynv3ZbEbFDdmTFW3tWlK5gIG38hy7sEXe0nkc3Fz2w4ODV55ucGO+Oc8ef8MfsCBHbfFv8Ni9BLHWzeCKzI5iJe43t5j1GRIdEW/YRI1v1HhoSdxevriNqGz6sTV3iJFw/sbP31+Jm+R9TVLq6zs7ShHO1U7jTVYdbpxdPKN1ZZ3Up69I3iu3fKF1dfOOLh26a595w59300oXX/63ZL1jQaHC/j3W7ed06t5jB5s8B8pm8TTUGUMjbkqVFpL7yReb/C5mVNAa3C8+ze/KnD+/v0Gf1uO6Ti7r83Y4G4KPu9QIw5zPVUQefQF5j3keV17BFbwTE5WiImoEAHOpgrN0SsIUBPq5BKOVTfnlF43gQmFREIAlSFRQmdbCa2AQMHNpAAJPuYNOY/ns7lLEMhdAW0IjtDgiKuQskhTwFimLewGriJ2AQ4mcIUCwU2CRE2SEd6gnpvH84ZAEH6DeYuVYkDWHvJ35xjIK5uMAj/6PzswPaqkkHPqjQcWzwaexCICCnJbyds6EQGozTC/JQTSGYe11T0QtVXMtiHw+HLOAA9Bswc63I9A/7zOt/cYyCuYqKa8Z/dH4eHmipaBpgP1LVqOKxTPZp7AiBRovIaQm8EY5C6I3UFIsXRPNQMXVwmzu16ERNpdX+5fLxFvwnqtCjPEMq07K143p+3Jaw6LHks+PC+sSscJ/hhIGrEWwrHqRZiBSnEr/jBMSz1od4BU5Otxlnv86m7BlfXfwtmrTLzA2LmdekRZRYDjqrsaYoAAAAAA==') format('woff2'),\\n  url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format('woff'),\\n  url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") format('truetype'), \\n  url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \") format('svg'); /* iOS 4.1- */\\n}\\n\\n.iconfont {\\n  font-family: \\\"iconfont\\\" !important;\\n  font-size: 16px;\\n  font-style: normal;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\n.icon-pause-circle-line:before {\\n  content: \\\"\\\\e6dd\\\";\\n}\\n\\n.icon-pause-line:before {\\n  content: \\\"\\\\e6de\\\";\\n}\\n\\n.icon-play-circle-fill:before {\\n  content: \\\"\\\\e6df\\\";\\n}\\n\\n.icon-play-circle-line:before {\\n  content: \\\"\\\\e6e0\\\";\\n}\\n\\n.icon-play-line:before {\\n  content: \\\"\\\\e6e1\\\";\\n}\\n\\n.icon-play-list-line:before {\\n  content: \\\"\\\\e6e2\\\";\\n}\\n\\n.icon-pause-circle-fill:before {\\n  content: \\\"\\\\e6e3\\\";\\n}\\n\\n.icon-skip-back-fill:before {\\n  content: \\\"\\\\e6e5\\\";\\n}\\n\\n.icon-skip-forward-fill:before {\\n  content: \\\"\\\\e6e6\\\";\\n}\\n\\n.icon-volume-down-fill:before {\\n  content: \\\"\\\\e6eb\\\";\\n}\\n\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles/icon/iconfont.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/playingButton.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/playingButton.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".playingButton {\\n  width: 100px;\\n  height: 100px;\\n  text-align: center;\\n  line-height: 100px;\\n  cursor: pointer;\\n  background: #588b90;\\n}\\n.icon {\\n  font-size: 65px;\\n  color: #fff;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles/playingButton.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/progress.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/progress.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".container {\\n  height: 3px;\\n  width: 100%;\\n  background: #eee;\\n  position: relative;\\n}\\n.basePointer {\\n  width: 5px;\\n  height: 5px;\\n  border-radius: 50%;\\n  box-shadow: 1px 1px 6px 2px #588b90;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles/progress.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/components/AudioTime.js":
/*!*************************************!*\
  !*** ./src/components/AudioTime.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.js\");\n/* harmony import */ var _utils_commonContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/commonContext */ \"./src/utils/commonContext.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_audioTime_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/audioTime.css */ \"./src/styles/audioTime.css\");\n/* harmony import */ var _styles_audioTime_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_audioTime_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar AudioTime = function AudioTime(props) {\n  var className = props.className,\n      handleRenderTime = props.handleRenderTime;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      total = _useState2[0],\n      setTotal = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),\n      cur = _useState4[0],\n      setCur = _useState4[1];\n\n  var audioInfo = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_utils_commonContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n  var classNames = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(function () {\n    return classnames__WEBPACK_IMPORTED_MODULE_4___default()('timeContainer', className);\n  }, [className]);\n\n  var renderAudioTime = function renderAudioTime() {\n    return handleRenderTime({\n      currentTime: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__[\"formatTime\"])(audioInfo.currentTime),\n      duration: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__[\"formatTime\"])(audioInfo.duration)\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setTotal(audioInfo.duration);\n  }, [audioInfo.duration]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setCur(audioInfo.currentTime);\n  }, [audioInfo.currentTime]);\n  var renderTime = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n    if (typeof handleRenderTime === 'function') {\n      return renderAudioTime();\n    }\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      style: {\n        minWidth: 90\n      }\n    }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__[\"formatTime\"])(cur), \"/\", Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__[\"formatTime\"])(total));\n  }, [cur, total]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: classNames\n  }, renderTime());\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AudioTime);\n\n//# sourceURL=webpack:///./src/components/AudioTime.js?");

/***/ }),

/***/ "./src/components/BaseAudio.js":
/*!*************************************!*\
  !*** ./src/components/BaseAudio.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_commonContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/commonContext */ \"./src/utils/commonContext.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.js\");\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar BaseAudio = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (props, ref) {\n  var src = props.src,\n      playing = props.playing,\n      children = props.children,\n      className = props.className;\n  var audioRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({}),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),\n      audioInfo = _useState2[0],\n      setAudioInfo = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(1),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),\n      VOL = _useState4[0],\n      setVOL = _useState4[1]; // 无效\n\n\n  var handleControlVolume = function handleControlVolume(vol) {\n    if (typeof vol === 'number') {\n      // console.log('v', vol)\n      setVOL(vol);\n      audioRef.current.volume = vol;\n    }\n  }; // 无效\n\n\n  var handleSetCurrentTime = function handleSetCurrentTime(cur) {\n    console.log('curbase', cur);\n\n    if (typeof cur === 'number') {\n      handlePause(); // setAudioInfo(\n      //   changeAudioInfo({\n      //     ...audioInfo,\n      //     currentTime: cur,\n      //   })\n      // )\n      // audioRef.current.currentTime = cur\n    }\n  };\n\n  var changeAudioInfo = function changeAudioInfo(info) {\n    return _objectSpread({\n      currentTime: 0,\n      duration: 0,\n      volume: 100,\n      handleControlVolume: handleControlVolume,\n      handleSetCurrentTime: handleSetCurrentTime\n    }, info);\n  };\n\n  var handlePlayer = function handlePlayer() {\n    setAudioInfo(changeAudioInfo(_objectSpread(_objectSpread({}, audioInfo), {}, {\n      duration: Math.ceil(audioRef.current.duration),\n      volume: audioRef.current.volume\n    })));\n  };\n\n  var handlePlay = function handlePlay() {\n    audioRef.current.play();\n  };\n\n  var handlePause = function handlePause() {\n    audioRef.current.pause();\n  };\n\n  var handleTimeUpdate = function handleTimeUpdate(vol) {\n    setAudioInfo(changeAudioInfo(_objectSpread(_objectSpread({}, audioInfo), {}, {\n      currentTime: Math.ceil(audioRef.current.currentTime),\n      volume: audioRef.current.volume\n    }))); // console.log('audio base', audioRef.current.volume, VOL)\n  };\n\n  var handleVolume = function handleVolume() {// console.log('change', audioRef.current.volume, VOL)\n    // setVOL(audioRef.current.volume)\n    // audioRef.current.volume = .4\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useImperativeHandle\"])(ref, function () {\n    return {\n      handlePlay: handlePlay,\n      handlePause: handlePause,\n      handleControlVolume: handleControlVolume\n    };\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    audioRef.current.addEventListener(\"canplay\", handlePlayer);\n    audioRef.current.addEventListener(\"timeupdate\", handleTimeUpdate);\n    audioRef.current.addEventListener(\"volumechange\", handleVolume);\n    return function () {\n      audioRef.current.removeEventListener(\"canplay\", handlePlayer);\n      audioRef.current.removeEventListener(\"timeupdate\", handleTimeUpdate);\n      audioRef.current.removeEventListener(\"volumechange\", handleVolume);\n    };\n  }, [audioRef.current]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    playing ? handlePlay() : handlePause();\n  }, [playing]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: className\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_utils_commonContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Provider, {\n    value: audioInfo\n  }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"audio\", {\n    ref: audioRef,\n    src: src,\n    preload: \"auto\"\n  })));\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (BaseAudio);\n\n//# sourceURL=webpack:///./src/components/BaseAudio.js?");

/***/ }),

/***/ "./src/components/BasicAudio.js":
/*!**************************************!*\
  !*** ./src/components/BasicAudio.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _PlayingButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlayingButton */ \"./src/components/PlayingButton.js\");\n/* harmony import */ var _Progress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Progress */ \"./src/components/Progress.js\");\n/* harmony import */ var _styles_basicAudio_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/basicAudio.css */ \"./src/styles/basicAudio.css\");\n/* harmony import */ var _styles_basicAudio_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_basicAudio_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _AudioTime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AudioTime */ \"./src/components/AudioTime.js\");\n/* harmony import */ var _BaseAudio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BaseAudio */ \"./src/components/BaseAudio.js\");\n/* harmony import */ var _Controls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Controls */ \"./src/components/Controls.js\");\n\n\n\n\n\n\n\n\n\n\n\nvar BasicAudio = function BasicAudio(_ref) {\n  var className = _ref.className,\n      playButtonClassName = _ref.playButtonClassName,\n      iconClassName = _ref.iconClassName,\n      src = _ref.src,\n      onClick = _ref.onClick,\n      _ref$playing = _ref.playing,\n      playing = _ref$playing === void 0 ? false : _ref$playing,\n      customIcon = _ref.customIcon,\n      _ref$showTime = _ref.showTime,\n      showTime = _ref$showTime === void 0 ? true : _ref$showTime,\n      audioInfo = _ref.audioInfo,\n      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, [\"className\", \"playButtonClassName\", \"iconClassName\", \"src\", \"onClick\", \"playing\", \"customIcon\", \"showTime\", \"audioInfo\"]);\n\n  var basicClass = classnames__WEBPACK_IMPORTED_MODULE_6___default()('basicContainer', className);\n  var playBtnClass = classnames__WEBPACK_IMPORTED_MODULE_6___default()('playBtn', playButtonClassName);\n  var playIconClass = classnames__WEBPACK_IMPORTED_MODULE_6___default()('iconStyle', iconClassName);\n  var commonProps = {\n    onClick: onClick,\n    // playing,\n    src: src\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: basicClass\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_BaseAudio__WEBPACK_IMPORTED_MODULE_8__[\"default\"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, commonProps, {\n    playing: playing\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Progress__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    playing: playing\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"baseAudio\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"img\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n    src: audioInfo.img\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"info\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"title\"\n  }, audioInfo.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"author\"\n  }, audioInfo.author), showTime && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_AudioTime__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Controls__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    type: ['toLast']\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_PlayingButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n    className: playBtnClass,\n    iconClassName: playIconClass,\n    customIcon: customIcon,\n    playing: playing\n  }, commonProps)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Controls__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    type: ['toNext', 'volume']\n  })))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BasicAudio);\n\n//# sourceURL=webpack:///./src/components/BasicAudio.js?");

/***/ }),

/***/ "./src/components/Controls.js":
/*!************************************!*\
  !*** ./src/components/Controls.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_commonContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/commonContext */ \"./src/utils/commonContext.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.js\");\n/* harmony import */ var _styles_controls_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/controls.css */ \"./src/styles/controls.css\");\n/* harmony import */ var _styles_controls_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_controls_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar Controls = function Controls(_ref) {\n  var className = _ref.className,\n      type = _ref.type;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(100),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      vol = _useState2[0],\n      setVol = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),\n      volWidth = _useState4[0],\n      setWidth = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),\n      volRate = _useState6[0],\n      setVolRate = _useState6[1];\n\n  var audioInfo = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_utils_commonContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  var volClassNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()(\"iconfont control-icon\", className);\n  var lineStyle = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(function () {\n    return {\n      width: volWidth > 0 ? volRate * vol : \"100%\"\n    };\n  }, [volWidth, vol]);\n  console.log(vol);\n  var handleChangeVol = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__[\"throttle\"])(function () {\n    // event.preventDefault()\n    if (vol + event.offsetX <= 0) {\n      setVol(0);\n    } else if (vol + event.offsetXol >= 100) {\n      setVol(100);\n    } else {\n      // console.log('happen', vol + event.offsetX)\n      setVol(vol + event.offsetX);\n    }\n\n    audioInfo.handleControlVolume(parseFloat((vol / 100).toFixed(2)));\n  }, 100);\n\n  var handleLastOne = function handleLastOne() {};\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setVol(audioInfo.volume * 100);\n    console.log(\"con\", audioInfo.volume);\n  }, [audioInfo.volume]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (ref.current && ref.current.offsetWidth > 0) {\n      setWidth(ref.current.offsetWidth);\n      setVolRate(ref.current.offsetWidth / (audioInfo.volume * 100));\n    }\n  }, [ref.current && ref.current.offsetWidth]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"control-container\"\n  }, type.includes(\"toLast\") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", {\n    onClick: handleLastOne,\n    className: \"\".concat(volClassNames, \" icon-skip-back-fill\")\n  }), type.includes(\"toNext\") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", {\n    onClick: handleLastOne,\n    className: \"\".concat(volClassNames, \" icon-skip-forward-fill\")\n  }), type.includes(\"volume\") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"flex flex-baseline\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", {\n    className: \"\".concat(volClassNames, \" icon-volume-down-fill\")\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"volume-box\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"vloume-line\",\n    style: lineStyle,\n    ref: ref\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"volume-point\",\n    draggable: true,\n    onDrag: handleChangeVol\n  })))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Controls);\n\n//# sourceURL=webpack:///./src/components/Controls.js?");

/***/ }),

/***/ "./src/components/PlayingButton.js":
/*!*****************************************!*\
  !*** ./src/components/PlayingButton.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _BaseAudio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BaseAudio */ \"./src/components/BaseAudio.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_playingButton_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/playingButton.css */ \"./src/styles/playingButton.css\");\n/* harmony import */ var _styles_playingButton_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_playingButton_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar PlayingButton = function PlayingButton(_ref) {\n  var className = _ref.className,\n      iconClassName = _ref.iconClassName,\n      src = _ref.src,\n      _ref$playing = _ref.playing,\n      playing = _ref$playing === void 0 ? false : _ref$playing,\n      customIcon = _ref.customIcon,\n      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, [\"className\", \"iconClassName\", \"src\", \"playing\", \"customIcon\"]);\n\n  var classname = classnames__WEBPACK_IMPORTED_MODULE_4___default()(\"playingButton\", className);\n\n  var iconClass = function iconClass(styles) {\n    return classnames__WEBPACK_IMPORTED_MODULE_4___default()('iconfont', 'icon', styles, iconClassName);\n  };\n\n  var audioRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  var audio = audioRef.current;\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (audio) {\n      playing ? audio.handlePlay() : audio.handlePause();\n    }\n  }, [playing]);\n  var renderIcon = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (customIcon) {\n      return playing ? customIcon.pauseIcon : customIcon.playIcon;\n    }\n\n    return playing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", {\n      className: iconClass('icon-pause-circle-fill')\n    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", {\n      className: iconClass('icon-play-circle-fill')\n    });\n  }, [playing]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n    className: classname\n  }, props), renderIcon(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_BaseAudio__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    ref: audioRef,\n    src: src\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayingButton);\n\n//# sourceURL=webpack:///./src/components/PlayingButton.js?");

/***/ }),

/***/ "./src/components/Pointer.js":
/*!***********************************!*\
  !*** ./src/components/Pointer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Pointer(_ref) {\n  var className = _ref.className,\n      _ref$type = _ref.type,\n      type = _ref$type === void 0 ? 'line' : _ref$type,\n      x = _ref.x,\n      _ref$visible = _ref.visible,\n      visible = _ref$visible === void 0 ? false : _ref$visible,\n      isDrag = _ref.isDrag,\n      onDrag = _ref.onDrag;\n  var pointerClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()('basePointer', className);\n  var progressStyle = {\n    position: 'absolute',\n    left: x,\n    top: -3,\n    display: visible ? 'block' : 'none',\n    cursor: 'pointer'\n  }; // const onDrag = () => {\n  //   // if (!canDrag) return \n  //   console.log('offsetY', event.offsetY, 'width', size.width)\n  // }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: pointerClassName,\n    style: progressStyle,\n    draggable: true,\n    onDrag: onDrag\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pointer);\n\n//# sourceURL=webpack:///./src/components/Pointer.js?");

/***/ }),

/***/ "./src/components/Progress.js":
/*!************************************!*\
  !*** ./src/components/Progress.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"./node_modules/@babel/runtime/helpers/typeof.js\");\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_progress_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/progress.css */ \"./src/styles/progress.css\");\n/* harmony import */ var _styles_progress_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_progress_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Pointer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Pointer */ \"./src/components/Pointer.js\");\n/* harmony import */ var _utils_commonContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/commonContext */ \"./src/utils/commonContext.js\");\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar changeSize = function changeSize(size) {\n  return _objectSpread({\n    width: 0,\n    height: 0\n  }, size);\n};\n\nvar Progress = function Progress(_ref) {\n  var className = _ref.className,\n      _ref$showPointer = _ref.showPointer,\n      showPointer = _ref$showPointer === void 0 ? false : _ref$showPointer,\n      _ref$canDrag = _ref.canDrag,\n      canDrag = _ref$canDrag === void 0 ? false : _ref$canDrag,\n      pointer = _ref.pointer;\n  var audioInfo = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(_utils_commonContext__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n  var progressClass = classnames__WEBPACK_IMPORTED_MODULE_5___default()('container', className);\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(changeSize()),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),\n      size = _useState2[0],\n      setSize = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(0),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),\n      baseScale = _useState4[0],\n      setBaseScale = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),\n      pointerVisible = _useState6[0],\n      setVisible = _useState6[1];\n\n  var progressStyle = {\n    width: baseScale * audioInfo.currentTime,\n    background: '#4FCAA4',\n    height: 2\n  };\n\n  var onMouseIn = function onMouseIn() {\n    if (!canDrag || !showPinter) return;\n    setVisible(true);\n  };\n\n  var onMouseOut = function onMouseOut() {\n    return setVisible(false);\n  };\n\n  var onDrag = function onDrag() {\n    if (!canDrag) return; // current: baseScale / (size.width - event.offsetY)\n\n    audioInfo.handleSetCurrentTime(event.offsetX / baseScale);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    setSize(changeSize({\n      width: ref.current.offsetWidth,\n      height: ref.current.offsetHeight\n    }));\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    if (!isNaN(size.width / audioInfo.duration)) {\n      setBaseScale((size.width / audioInfo.duration).toFixed(2));\n    }\n  }, [audioInfo.duration]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", {\n    className: progressClass,\n    ref: ref,\n    onMouseOver: onMouseIn,\n    onMouseOut: onMouseOut\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", {\n    style: progressStyle\n  }), typeof pointer === 'function' ? pointer() : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Pointer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    x: baseScale * audioInfo.currentTime,\n    visible: pointerVisible,\n    isDrag: canDrag,\n    onDrag: onDrag,\n    style: _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(pointer) === 'object' && pointer\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Progress);\n\n//# sourceURL=webpack:///./src/components/Progress.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Pointer, PlayingButton, BasicAudio, AudioTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_icon_iconfont_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/icon/iconfont.css */ \"./src/styles/icon/iconfont.css\");\n/* harmony import */ var _styles_icon_iconfont_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_icon_iconfont_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Pointer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Pointer.js */ \"./src/components/Pointer.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Pointer\", function() { return _components_Pointer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _components_PlayingButton_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/PlayingButton.js */ \"./src/components/PlayingButton.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PlayingButton\", function() { return _components_PlayingButton_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _components_BasicAudio_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/BasicAudio.js */ \"./src/components/BasicAudio.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"BasicAudio\", function() { return _components_BasicAudio_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _components_AudioTime_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/AudioTime.js */ \"./src/components/AudioTime.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AudioTime\", function() { return _components_AudioTime_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/styles/audioTime.css":
/*!**********************************!*\
  !*** ./src/styles/audioTime.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./audioTime.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/audioTime.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/styles/audioTime.css?");

/***/ }),

/***/ "./src/styles/basicAudio.css":
/*!***********************************!*\
  !*** ./src/styles/basicAudio.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./basicAudio.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/basicAudio.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/styles/basicAudio.css?");

/***/ }),

/***/ "./src/styles/controls.css":
/*!*********************************!*\
  !*** ./src/styles/controls.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./controls.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/controls.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/styles/controls.css?");

/***/ }),

/***/ "./src/styles/icon/iconfont.css":
/*!**************************************!*\
  !*** ./src/styles/icon/iconfont.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./iconfont.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/icon/iconfont.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/styles/icon/iconfont.css?");

/***/ }),

/***/ "./src/styles/icon/iconfont.eot?t=1595475206530":
/*!******************************************************!*\
  !*** ./src/styles/icon/iconfont.eot?t=1595475206530 ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/iconfont.eot\");\n\n//# sourceURL=webpack:///./src/styles/icon/iconfont.eot?");

/***/ }),

/***/ "./src/styles/icon/iconfont.svg?t=1595475206530":
/*!******************************************************!*\
  !*** ./src/styles/icon/iconfont.svg?t=1595475206530 ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/iconfont.svg\");\n\n//# sourceURL=webpack:///./src/styles/icon/iconfont.svg?");

/***/ }),

/***/ "./src/styles/icon/iconfont.ttf?t=1595475206530":
/*!******************************************************!*\
  !*** ./src/styles/icon/iconfont.ttf?t=1595475206530 ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/iconfont.ttf\");\n\n//# sourceURL=webpack:///./src/styles/icon/iconfont.ttf?");

/***/ }),

/***/ "./src/styles/icon/iconfont.woff?t=1595475206530":
/*!*******************************************************!*\
  !*** ./src/styles/icon/iconfont.woff?t=1595475206530 ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/iconfont.woff\");\n\n//# sourceURL=webpack:///./src/styles/icon/iconfont.woff?");

/***/ }),

/***/ "./src/styles/playingButton.css":
/*!**************************************!*\
  !*** ./src/styles/playingButton.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./playingButton.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/playingButton.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/styles/playingButton.css?");

/***/ }),

/***/ "./src/styles/progress.css":
/*!*********************************!*\
  !*** ./src/styles/progress.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./progress.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/progress.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/styles/progress.css?");

/***/ }),

/***/ "./src/utils/commonContext.js":
/*!************************************!*\
  !*** ./src/utils/commonContext.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar myContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])(null);\n/* harmony default export */ __webpack_exports__[\"default\"] = (myContext);\n\n//# sourceURL=webpack:///./src/utils/commonContext.js?");

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! exports provided: formatTime, throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatTime\", function() { return formatTime; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return throttle; });\nvar formatTime = function formatTime(s) {\n  var hours = Math.floor(s / (60 * 60));\n  var minutes = Math.floor((s - hours * 3600) / 60);\n  var second = s - (hours * 3600 + minutes * 60);\n  return \"\".concat(hours > 0 ? hours > 9 ? hours : \"0\".concat(hours, \" :\") : '').concat(minutes > 9 ? minutes : \"0\".concat(minutes), \":\").concat(second > 9 ? second : \"0\".concat(second));\n};\nfunction throttle(fn, threshold, scope) {\n  var timer;\n  var prev = Date.now();\n  return function () {\n    var context = scope || this,\n        args = arguments;\n    var now = Date.now();\n\n    if (now - prev > threshold) {\n      prev = now;\n      fn.apply(context, args);\n    }\n  };\n}\n\n//# sourceURL=webpack:///./src/utils/utils.js?");

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack:///external_%7B%22root%22:%22React%22,%22commonjs2%22:%22react%22,%22commonjs%22:%22react%22,%22amd%22:%22react%22%7D?");

/***/ })

/******/ });
});