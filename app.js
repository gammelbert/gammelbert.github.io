(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "+EN/":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--4-1!../node_modules/sass-loader/lib/loader.js!./styles.scss */ \"VIbs\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"aET+\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(true) {\n\tmodule.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--4-1!../node_modules/sass-loader/lib/loader.js!./styles.scss */ \"VIbs\", function() {\n\t\tvar newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--4-1!../node_modules/sass-loader/lib/loader.js!./styles.scss */ \"VIbs\");\n\n\t\tif(typeof newContent === 'string') newContent = [[module.i, newContent, '']];\n\n\t\tvar locals = (function(a, b) {\n\t\t\tvar key, idx = 0;\n\n\t\t\tfor(key in a) {\n\t\t\t\tif(!b || a[key] !== b[key]) return false;\n\t\t\t\tidx++;\n\t\t\t}\n\n\t\t\tfor(key in b) idx--;\n\n\t\t\treturn idx === 0;\n\t\t}(content.locals, newContent.locals));\n\n\t\tif(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');\n\n\t\tupdate(newContent);\n\t});\n\n\tmodule.hot.dispose(function() { update(); });\n}\n\n//# sourceURL=webpack:///./src/styles.scss?");

/***/ }),

/***/ "VIbs":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/sass-loader/lib/loader.js!./src/styles.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"JPst\")(false);\n// Module\nexports.push([module.i, \"div {\\n  color: #0f0; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/styles.scss?./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "dZ6P":
/*!*********************!*\
  !*** ./src/docs.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return docs; });\nfunction docs() {\n  const that = {};\n\n  function sayHello() {\n    console.log('hi!');\n  }\n\n  function sayBye() {\n    console.log('bye');\n  }\n\n  that.sayHello = sayHello;\n  that.sayBye = sayBye;\n\n  return that;\n}\n\n\n//# sourceURL=webpack:///./src/docs.js?");

/***/ }),

/***/ "tjUo":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(_, $) {/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ \"+EN/\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _docs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./docs */ \"dZ6P\");\n\n\n\nfunction component() {\n  const element = document.createElement('div');\n\n  element.innerHTML = _.join(['Hello', 'webpack', '!!!', '?'], ' ');\n\n  return element;\n}\n\n$('body').append(component());\n\n_docs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sayHello();\n_docs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sayBye();\n\nif (true) {\n  module.hot.accept(/*! ./docs.js */ \"dZ6P\", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _docs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./docs.js */ \"dZ6P\");\n(() => console.log('docs changed'))(__WEBPACK_OUTDATED_DEPENDENCIES__); });\n}\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! lodash */ \"LvDl\"), __webpack_require__(/*! jquery */ \"EVdn\")))\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

},[["tjUo","runtime","vendors"]]]);