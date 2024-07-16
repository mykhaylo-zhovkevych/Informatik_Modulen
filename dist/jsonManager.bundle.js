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

/***/ "./src/js/jsonManager.js":
/*!*******************************!*\
  !*** ./src/js/jsonManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadPage: () => (/* binding */ loadPage)\n/* harmony export */ });\nfunction loadPage(page) {\n  fetch(\"../html/modulen/\".concat(page, \".json\")).then(function (response) {\n    if (!response.ok) {\n      throw new Error('Network response was not ok');\n    }\n    return response.json();\n  }).then(function (data) {\n    document.title = data.title;\n\n    // Update main title\n    document.querySelector('.main-title h2').textContent = data.mainTitle;\n\n    // Clear existing content\n    var cardsContainer = document.querySelector('.main-cards');\n    var chartsContainer = document.querySelector('.charts');\n    var additionalContentContainer = document.querySelector('.main-text-content');\n    cardsContainer.innerHTML = '';\n    chartsContainer.innerHTML = '';\n    additionalContentContainer.innerHTML = '';\n\n    // Update cards\n    data.cards.forEach(function (cardData) {\n      var card = document.createElement('div');\n      card.className = 'card';\n      var cardInner = document.createElement('div');\n      cardInner.className = 'card-inner';\n      var cardTitle = document.createElement('h3');\n      cardTitle.textContent = cardData.title;\n      cardInner.appendChild(cardTitle);\n      var cardValue = document.createElement('h1');\n      cardValue.textContent = cardData.value;\n      card.appendChild(cardInner);\n      card.appendChild(cardValue);\n      cardsContainer.appendChild(card);\n    });\n\n    // Update charts\n    data.charts.forEach(function (chartData) {\n      var chartCard = document.createElement('div');\n      chartCard.className = 'charts-card';\n      var chartTitle = document.createElement('h2');\n      chartTitle.className = 'verzeichnis';\n      chartTitle.textContent = chartData.title;\n      chartCard.appendChild(chartTitle);\n\n      // Add links for each item in the verzeichnis\n      var list = document.createElement('ul');\n      chartData.items.forEach(function (item) {\n        var listItem = document.createElement('li');\n        var link = document.createElement('a');\n        link.href = \"#\".concat(item.id);\n        link.textContent = item.label;\n        listItem.appendChild(link);\n        list.appendChild(listItem);\n      });\n      chartCard.appendChild(list);\n      chartsContainer.appendChild(chartCard);\n    });\n\n    // Function to create elements\n    var createElement = function createElement(content) {\n      var element;\n      if (content.type === 'text') {\n        element = document.createElement('div');\n        element.className = 'text';\n        if (content.id) {\n          element.id = content.id; // Set the ID for the section\n        }\n        element.textContent = content.content;\n\n        // Append sub-content if any\n        if (content.subContent) {\n          content.subContent.forEach(function (subContent) {\n            element.appendChild(createElement(subContent));\n          });\n        }\n      } else if (content.type === 'sub-text') {\n        element = document.createElement('div');\n        element.className = 'sub-text';\n        element.textContent = content.content;\n      } else if (content.type === 'sub-container') {\n        element = document.createElement('div');\n        element.className = 'sub-container';\n        element.textContent = content.content;\n      } else if (content.type === 'sub-container-code') {\n        element = document.createElement('pre');\n        var codeElement = document.createElement('code');\n        codeElement.textContent = content.content.join('\\n');\n        element.appendChild(codeElement);\n      } else if (content.type === 'image') {\n        element = document.createElement('img');\n        element.src = content.src;\n        element.alt = content.alt;\n        element.className = 'full-width-image';\n      } else if (content.type === 'sub-layout') {\n        element = document.createElement('div');\n        element.className = 'sub-layout';\n        element.textContent = content.content;\n\n        // Append sub-content\n        content.subContent.forEach(function (subContent) {\n          element.appendChild(createElement(subContent));\n        });\n      } else if (content.type === 'HandlungsZiele') {\n        element = handleHandlungsZiele(content);\n      } else if (content.type === 'chart') {\n        element = document.createElement('div');\n        element.className = 'charts-card';\n        var chartTitle = document.createElement('h2');\n        chartTitle.className = 'chart-title';\n        chartTitle.textContent = content.title;\n        element.appendChild(chartTitle);\n      }\n      return element;\n    };\n\n    // Process HandlungsZiele\n    var handleHandlungsZiele = function handleHandlungsZiele(HandlungsZieleData) {\n      var handlungszielContainer = document.createElement('div');\n      handlungszielContainer.className = 'handlungsziel-container';\n      var handlungszielTitle = document.createElement('h2');\n      handlungszielTitle.className = 'handlungsziel-title';\n      handlungszielTitle.textContent = HandlungsZieleData.ziel;\n      handlungszielContainer.appendChild(handlungszielTitle);\n      var knowledgeList = document.createElement('ul');\n      knowledgeList.className = 'knowledge-list';\n      HandlungsZieleData.HandlungsnotwendigeKenntnisse.forEach(function (knowledgeItem) {\n        var listItem = document.createElement('li');\n        listItem.className = 'knowledge-item';\n        listItem.textContent = knowledgeItem;\n        knowledgeList.appendChild(listItem);\n      });\n      handlungszielContainer.appendChild(knowledgeList);\n      return handlungszielContainer;\n    };\n\n    // Add main text content\n    data.mainTextContent.forEach(function (content) {\n      additionalContentContainer.appendChild(createElement(content));\n      console.log(\"Added element:\", content); // Log the added element for debugging\n    });\n\n    // Highlight code blocks\n    document.querySelectorAll('pre code').forEach(function (block) {\n      hljs.highlightBlock(block);\n    });\n  })[\"catch\"](function (error) {\n    return console.error('Error loading page:', error);\n  });\n}\n\n// Make the function globally accessible\nwindow.loadPage = loadPage;\n\n//# sourceURL=webpack://untitled/./src/js/jsonManager.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/jsonManager.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;