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

/***/ "./src/js/togglerCloseOpen.js":
/*!************************************!*\
  !*** ./src/js/togglerCloseOpen.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_content_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/content.css */ \"./src/css/content.css\");\n\nvar t1 = new TimelineMax({\n  paused: true\n});\nt1.to(\".one\", 0.5, {\n  y: 5,\n  rotation: 45,\n  ease: Power1.easeInOut // Smoother easing function\n});\nt1.to(\".two\", 0.5, {\n  y: -25,\n  rotation: -45,\n  ease: Power1.easeInOut,\n  // Smoother easing function\n  delay: -0.5\n});\nt1.to(\".hidden-window\", 1.2, {\n  top: \"0%\",\n  ease: Power1.easeInOut,\n  delay: -0\n});\nt1.reverse();\n$(document).on(\"click\", \".toggle-btn\", function () {\n  var hiddenWindow = $(\".hidden-window\");\n  if (t1.reversed()) {\n    hiddenWindow.addClass(\"visible\");\n    $(\"body\").css(\"overflow\", \"hidden\");\n    t1.play();\n  } else {\n    t1.reverse().eventCallback(\"onReverseComplete\", function () {\n      hiddenWindow.removeClass(\"visible\");\n      $(\"body\").css(\"overflow\", \"auto\");\n    });\n  }\n});\n$(document).on(\"click\", \".links-header-active a\", function () {\n  var hiddenWindow = $(\".hidden-window\");\n  var targetClass;\n  switch ($(this).text().trim()) {\n    case \"Einloggen\":\n      targetClass = \".page-login\";\n      break;\n    case \"Konto anfragen\":\n      targetClass = \".page-request-login\";\n      break;\n    case \"Besucher\":\n      targetClass = \".page-visitor\";\n      break;\n    default:\n      targetClass = \".page-login\";\n  }\n  $(\".page-login, .page-request-login, .page-visitor\").removeClass(\"shown-content\").addClass(\"hidden-content\"); // Hide all\n  $(targetClass).removeClass(\"hidden-content\").addClass(\"shown-content\"); // Show the target section\n\n  if (t1.reversed()) {\n    hiddenWindow.addClass(\"visible\");\n    $(\"body\").css(\"overflow\", \"hidden\");\n    t1.play();\n  } else {\n    t1.reverse().eventCallback(\"onReverseComplete\", function () {\n      hiddenWindow.removeClass(\"visible\");\n      $(\"body\").css(\"overflow\", \"auto\");\n    });\n  }\n});\n\n//# sourceURL=webpack://untitled/./src/js/togglerCloseOpen.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/content.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/content.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Michroma&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n\r\n.loading-page {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    background: linear-gradient(to right, #141414, #000000, #141414);;\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1.5rem;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: #191654;\r\n}\r\n\r\n#svg {\r\n    height: 150px;\r\n    width: 150px;\r\n    stroke: white;\r\n    fill-opacity: 0;\r\n    stroke-width: 3px;\r\n    stroke-dasharray: 4500;\r\n    animation: draw 8s ease;\r\n}\r\n\r\n@keyframes draw {\r\n    0% {\r\n        stroke-dashoffset: 4500;\r\n    }\r\n    100% {\r\n        stroke-dashoffset: 0;\r\n    }\r\n}\r\n\r\n.name-container {\r\n    height: 30px;\r\n    overflow: hidden;\r\n}\r\n\r\n.logo-name {\r\n    color: #fff;\r\n    font-size: 20px;\r\n    letter-spacing: 12px;\r\n    text-transform: uppercase;\r\n    margin-left: 20px;\r\n    font-weight: bolder;\r\n}\r\n\r\n\r\n.loading{\r\n\r\n    position: relative;\r\n\r\n\r\n\r\n}\r\n\r\n.text{\r\n\r\n    font-size: 80px;\r\n\r\n    font-weight: 400;\r\n\r\n    text-align: center;\r\n\r\n    color: #999;\r\n\r\n    margin-bottom: 25px;\r\n\r\n}\r\n\r\n.add{\r\n\r\n    animation: animate .7s ease-in-out .1s;\r\n\r\n}\r\n\r\n@keyframes animate {\r\n\r\n    0%{\r\n\r\n        opacity: 1;\r\n\r\n    }\r\n\r\n    50%{\r\n\r\n        opacity: 0.2;\r\n\r\n    }\r\n\r\n    100%{\r\n\r\n        opacity: 1;\r\n\r\n    }\r\n\r\n}\r\n\r\n.progress-bar{\r\n\r\n    width: 406px;\r\n\r\n    height: 22px;\r\n\r\n    background: #111;\r\n\r\n    border-radius: 13px;\r\n\r\n    padding: 3px;\r\n\r\n    box-sizing: border-box;\r\n\r\n}\r\n\r\n.progress{\r\n\r\n    width: 203px;\r\n\r\n    height: 16px;\r\n\r\n    background: #dbdbdb;\r\n\r\n    border-radius: 13px;\r\n\r\n}\r\n\r\n.percent{\r\n\r\n    position: absolute;\r\n\r\n    left: 45%;\r\n\r\n    color: #000000;\r\n\r\n    font-size: 15px;\r\n\r\n    font-weight: bold;\r\n\r\n    letter-spacing: 1px;\r\n\r\n    line-height: 23px;\r\n\r\n}\r\n\r\n\r\n\r\n.material-icons-outlined {\r\n    vertical-align: middle;\r\n    line-height: 1px;\r\n    font-size: 35px;\r\n  }\r\n  \r\n  .grid-container {\r\n    display: grid;\r\n    grid-template-columns: 260px 1fr 1fr 1fr;\r\n    grid-template-rows: 0.2fr 3fr;\r\n    grid-template-areas:\r\n      'sidebar header header header'\r\n      'sidebar main main main';\r\n    height: 100vh;\r\n    width: 100vw;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  /* ---------- HEADER ---------- */\r\n  .header {\r\n    grid-area: header;\r\n    height: 70px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 10px 30px 0 30px;\r\n    box-shadow: 0 6px 7px -3px rgba(0, 0, 0, 0.35);\r\n    border-radius: 30px;\r\n    margin: 1rem;\r\n  }\r\n  \r\n  .menu-icon {\r\n    display: none;\r\n  }\r\n  \r\n  /* ---------- SIDEBAR ---------- */\r\n  \r\n  #sidebar {\r\n \r\n    grid-area: sidebar;\r\n    height: 97vh;\r\n    background-color: #00000010;\r\n    backdrop-filter: blur(100px);\r\n    overflow-y: auto;\r\n    font-size: 0.4em;\r\n    border-radius: 30px;\r\n    margin: 1rem;\r\n    \r\n  }\r\n  .sidebar-responsive {\r\n    display: inline !important;\r\n    position: absolute;\r\n    z-index: 12 !important;\r\n  }\r\n  \r\n  .close-sidebar {\r\n    display: none;\r\n  }\r\n  lord-icon {\r\n    cursor: pointer;\r\n  }\r\n\r\n  .sidebar-title {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 30px 30px 60px 30px\r\n\r\n  }\r\n\r\n  .sidebar-title > span {\r\n    display: none;\r\n  }\r\n  \r\n  .sidebar-brand {\r\n    margin-top: 15px;\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n    padding-right: 0.5rem;\r\n  }\r\n  \r\n  .sidebar-list {\r\n    padding: 0;\r\n    margin-top: 15px;\r\n    list-style-type: none;\r\n  }\r\n  \r\n  .sidebar-list-item, .sidebar-list-item-noncklickable {\r\n    padding: 40px 20px 40px 20px ;\r\n    font-size: 18px; \r\n  }\r\n  \r\n  .sidebar-list-item:hover {\r\n    background-color: rgba(255, 255, 255, 0.103);\r\n    cursor: pointer;\r\n    border-radius: 30px;\r\n  }\r\n  \r\n  .sidebar-list-item > a {\r\n    text-decoration: none;\r\n    color: #9e9ea4;\r\n  }\r\n  \r\n\r\n  /* ---------- MAIN ---------- */\r\n  \r\n  .main-container {\r\n    grid-area: main;\r\n    overflow-y: auto;\r\n    padding: 20px 20px;\r\n    color: rgba(255, 255, 255, 0.95);\r\n    backdrop-filter: blur(100px);\r\n    border-radius: 30px;\r\n    margin: 1rem;\r\n  }\r\n  \r\n  .main-title {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding-top: 2em;\r\n  }\r\n  \r\n  .main-cards {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr;\r\n    gap: 20px;\r\n    margin: 20px 0;\r\n  }\r\n  \r\n  .card {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    padding: 25px;\r\n    border-radius: 30px;\r\n    backdrop-filter: blur(100px);\r\n\r\n  }\r\n  \r\n  .card:first-child {\r\n    background-color: #00000020;\r\n  }\r\n  \r\n  .card:nth-child(2) {\r\n    background-color: #00000020;\r\n  }\r\n  \r\n  .card:nth-child(3) {\r\n    background-color: #00000020;\r\n  }\r\n  \r\n  .card:nth-child(4) {\r\n    background-color: #00000020;\r\n  }\r\n  \r\n  .card-inner {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n  }\r\n  \r\n  .card-inner > .material-icons-outlined {\r\n    font-size: 45px;\r\n  }\r\n  \r\n  .charts {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 20px;\r\n    margin-top: 60px;\r\n  }\r\n  \r\n  .charts-card {\r\n    background-color: #00000020;\r\n    margin-bottom: 20px;\r\n    padding: 25px;\r\n    height: 100vh;\r\n    box-sizing: border-box;\r\n    -webkit-column-break-inside: avoid;\r\n    border-radius: 30px;\r\n    box-shadow: 0 6px 7px -4px rgba(0, 0, 0, 0.2);\r\n    backdrop-filter: blur(100px);\r\n  }\r\n  \r\n  .chart-title {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  \r\n  /* ---------- MEDIA QUERIES ---------- */\r\n  \r\n  /* Medium <= 992px */\r\n  \r\n  @media screen and (max-width: 992px) {\r\n    .grid-container {\r\n      grid-template-columns: 1fr;\r\n      grid-template-rows: 0.2fr 3fr;\r\n      grid-template-areas:\r\n        'header'\r\n        'main';\r\n    }\r\n    .sidebar-title:hover {\r\n      background-color: rgba(255, 255, 255, 0.103);\r\n      cursor: auto;\r\n      padding: 30px 30px 30px 30px;\r\n      border-radius: 30px;\r\n    }\r\n    \r\n  \r\n    #sidebar {\r\n      display: none;\r\n    }\r\n    .close-sidebar {\r\n      display: block;\r\n    }\r\n    .menu-icon {\r\n      display: inline;\r\n    }\r\n  \r\n    .sidebar-title > span {\r\n      display: inline;\r\n    }\r\n  }\r\n  \r\n  /* Small <= 768px */\r\n  \r\n  @media screen and (max-width: 768px) {\r\n    .main-cards {\r\n      grid-template-columns: 1fr;\r\n      gap: 10px;\r\n      margin-bottom: 0;\r\n    }\r\n  \r\n    .charts {\r\n      grid-template-columns: 1fr;\r\n      margin-top: 30px;\r\n    }\r\n  }\r\n  \r\n  /* Extra Small <= 576px */\r\n  \r\n  @media screen and (max-width: 576px) {\r\n    .hedaer-left {\r\n      display: none;\r\n    }\r\n  }\r\n  `, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://untitled/./src/css/content.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://untitled/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://untitled/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/content.css":
/*!*****************************!*\
  !*** ./src/css/content.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./content.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/content.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://untitled/./src/css/content.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://untitled/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://untitled/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://untitled/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://untitled/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://untitled/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://untitled/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/togglerCloseOpen.js");
/******/ 	
/******/ })()
;