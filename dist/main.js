/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("var canvas = document.createElement('canvas'); // canvas.classList.add('canvas')\n\ndocument.body.appendChild(canvas);\nvar context = canvas.getContext('2d');\nvar x = 0;\nvar y = 0;\nwindow.requestAnimationFrame(function loop() {\n  y += 1;\n  context.clearRect(0, 0, canvas.width, canvas.height);\n  context.fillStyle = 'red';\n  context.fillRect(100, y, 100, 100); // context.fill()\n\n  context.fillStyle = 'blue';\n  context.fillRect(200, y, 100, 100);\n  window.requestAnimationFrame(loop);\n}); // document.addEventListener('DOMContentLoaded', )//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXBlci1wbGFuZS1nYW1lLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY29udGV4dCIsImdldENvbnRleHQiLCJ4IiwieSIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImxvb3AiLCJjbGVhclJlY3QiLCJ3aWR0aCIsImhlaWdodCIsImZpbGxTdHlsZSIsImZpbGxSZWN0Il0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFiLEMsQ0FDQTs7QUFDQUQsUUFBUSxDQUFDRSxJQUFULENBQWNDLFdBQWQsQ0FBMEJKLE1BQTFCO0FBRUEsSUFBSUssT0FBTyxHQUFHTCxNQUFNLENBQUNNLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBZDtBQUlBLElBQUlDLENBQUMsR0FBRyxDQUFSO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHLENBQVI7QUFDQUMsTUFBTSxDQUFDQyxxQkFBUCxDQUE2QixTQUFTQyxJQUFULEdBQWdCO0FBQzdDSCxFQUFBQSxDQUFDLElBQUksQ0FBTDtBQUVBSCxFQUFBQSxPQUFPLENBQUNPLFNBQVIsQ0FBa0IsQ0FBbEIsRUFBb0IsQ0FBcEIsRUFBdUJaLE1BQU0sQ0FBQ2EsS0FBOUIsRUFBcUNiLE1BQU0sQ0FBQ2MsTUFBNUM7QUFFQVQsRUFBQUEsT0FBTyxDQUFDVSxTQUFSLEdBQW9CLEtBQXBCO0FBQ0FWLEVBQUFBLE9BQU8sQ0FBQ1csUUFBUixDQUFpQixHQUFqQixFQUFzQlIsQ0FBdEIsRUFBeUIsR0FBekIsRUFBOEIsR0FBOUIsRUFONkMsQ0FPN0M7O0FBRUFILEVBQUFBLE9BQU8sQ0FBQ1UsU0FBUixHQUFvQixNQUFwQjtBQUNBVixFQUFBQSxPQUFPLENBQUNXLFFBQVIsQ0FBaUIsR0FBakIsRUFBc0JSLENBQXRCLEVBQXlCLEdBQXpCLEVBQThCLEdBQTlCO0FBR0FDLEVBQUFBLE1BQU0sQ0FBQ0MscUJBQVAsQ0FBNkJDLElBQTdCO0FBQ0MsQ0FkRCxFLENBZ0JBIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4vLyBjYW52YXMuY2xhc3NMaXN0LmFkZCgnY2FudmFzJylcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKVxuXG52YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG5cblxuXG52YXIgeCA9IDBcbnZhciB5ID0gMFxud2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiBsb29wKCkge1xueSArPSAxXG5cbmNvbnRleHQuY2xlYXJSZWN0KDAsMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuXG5jb250ZXh0LmZpbGxTdHlsZSA9ICdyZWQnXG5jb250ZXh0LmZpbGxSZWN0KDEwMCwgeSwgMTAwLCAxMDApXG4vLyBjb250ZXh0LmZpbGwoKVxuXG5jb250ZXh0LmZpbGxTdHlsZSA9ICdibHVlJ1xuY29udGV4dC5maWxsUmVjdCgyMDAsIHksIDEwMCwgMTAwKVxuXG5cbndpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcClcbn0pXG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCApIl0sImZpbGUiOiIuL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXBlci1wbGFuZS1nYW1lLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEiLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;