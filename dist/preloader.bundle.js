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

/***/ "./src/js/preloader.js":
/*!*****************************!*\
  !*** ./src/js/preloader.js ***!
  \*****************************/
/***/ (() => {

eval("gsap.fromTo(\".loading-page\", {\n  opacity: 1\n}, {\n  opacity: 0,\n  display: \"none\",\n  duration: 1.5,\n  delay: 3.5\n});\ngsap.fromTo(\".logo-name\", {\n  y: 50,\n  opacity: 0\n}, {\n  y: 0,\n  opacity: 1,\n  duration: 2,\n  delay: 0.5\n});\nvar text = document.querySelector('.text');\nvar percent = document.querySelector('.percent');\nvar progress = document.querySelector('.progress');\nvar count = 4;\nvar per = 16;\nvar loading = setInterval(animate, 20);\nfunction animate() {\n  if (count == 100 && per == 400) {\n    /* text.textContent = \"Completed\";\r\n    text.style.fontSize = \"70px\";\r\n    text.classList.add(\"add\"); */\n    clearInterval(loading);\n  } else {\n    per = per + 4;\n    count = count + 1;\n    progress.style.width = per + 'px';\n    percent.textContent = count + '%';\n  }\n}\n\n//# sourceURL=webpack://untitled/./src/js/preloader.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/preloader.js"]();
/******/ 	
/******/ })()
;