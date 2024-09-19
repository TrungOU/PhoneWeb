/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/CartContext.tsx":
/*!*********************************!*\
  !*** ./context/CartContext.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartProvider: () => (/* binding */ CartProvider),\n/* harmony export */   useCart: () => (/* binding */ useCart)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nfunction CartProvider({ children }) {\n    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const addToCart = (item)=>{\n        setItems((prevItems)=>{\n            const existingItem = prevItems.find((i)=>i.id === item.id);\n            if (existingItem) {\n                return prevItems.map((i)=>i.id === item.id ? {\n                        ...i,\n                        quantity: i.quantity + 1\n                    } : i);\n            }\n            return [\n                ...prevItems,\n                {\n                    ...item,\n                    quantity: 1\n                }\n            ];\n        });\n    };\n    const removeFromCart = (id)=>{\n        setItems((prevItems)=>prevItems.filter((item)=>item.id !== id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            items,\n            addToCart,\n            removeFromCart\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\phone-store\\\\context\\\\CartContext.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\nfunction useCart() {\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartContext);\n    if (context === undefined) {\n        throw new Error(\"useCart must be used within a CartProvider\");\n    }\n    return context;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0NhcnRDb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtFO0FBZWxFLE1BQU1JLDRCQUFjSCxvREFBYUEsQ0FBOEJJO0FBRXhELFNBQVNDLGFBQWEsRUFBRUMsUUFBUSxFQUFpQztJQUN0RSxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQWEsRUFBRTtJQUVqRCxNQUFNUSxZQUFZLENBQUNDO1FBQ2pCRixTQUFTRyxDQUFBQTtZQUNQLE1BQU1DLGVBQWVELFVBQVVFLElBQUksQ0FBQ0MsQ0FBQUEsSUFBS0EsRUFBRUMsRUFBRSxLQUFLTCxLQUFLSyxFQUFFO1lBQ3pELElBQUlILGNBQWM7Z0JBQ2hCLE9BQU9ELFVBQVVLLEdBQUcsQ0FBQ0YsQ0FBQUEsSUFDbkJBLEVBQUVDLEVBQUUsS0FBS0wsS0FBS0ssRUFBRSxHQUFHO3dCQUFFLEdBQUdELENBQUM7d0JBQUVHLFVBQVVILEVBQUVHLFFBQVEsR0FBRztvQkFBRSxJQUFJSDtZQUU1RDtZQUNBLE9BQU87bUJBQUlIO2dCQUFXO29CQUFFLEdBQUdELElBQUk7b0JBQUVPLFVBQVU7Z0JBQUU7YUFBRTtRQUNqRDtJQUNGO0lBRUEsTUFBTUMsaUJBQWlCLENBQUNIO1FBQ3RCUCxTQUFTRyxDQUFBQSxZQUFhQSxVQUFVUSxNQUFNLENBQUNULENBQUFBLE9BQVFBLEtBQUtLLEVBQUUsS0FBS0E7SUFDN0Q7SUFFQSxxQkFDRSw4REFBQ1osWUFBWWlCLFFBQVE7UUFBQ0MsT0FBTztZQUFFZDtZQUFPRTtZQUFXUztRQUFlO2tCQUM3RFo7Ozs7OztBQUdQO0FBRU8sU0FBU2dCO0lBQ2QsTUFBTUMsVUFBVXJCLGlEQUFVQSxDQUFDQztJQUMzQixJQUFJb0IsWUFBWW5CLFdBQVc7UUFDekIsTUFBTSxJQUFJb0IsTUFBTTtJQUNsQjtJQUNBLE9BQU9EO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waG9uZS1zdG9yZS8uL2NvbnRleHQvQ2FydENvbnRleHQudHN4P2MzMjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcblxyXG50eXBlIENhcnRJdGVtID0ge1xyXG4gIGlkOiBzdHJpbmdcclxuICBuYW1lOiBzdHJpbmdcclxuICBwcmljZTogbnVtYmVyXHJcbiAgcXVhbnRpdHk6IG51bWJlclxyXG59XHJcblxyXG50eXBlIENhcnRDb250ZXh0VHlwZSA9IHtcclxuICBpdGVtczogQ2FydEl0ZW1bXVxyXG4gIGFkZFRvQ2FydDogKGl0ZW06IENhcnRJdGVtKSA9PiB2b2lkXHJcbiAgcmVtb3ZlRnJvbUNhcnQ6IChpZDogc3RyaW5nKSA9PiB2b2lkXHJcbn1cclxuXHJcbmNvbnN0IENhcnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxDYXJ0Q29udGV4dFR5cGUgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZClcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDYXJ0UHJvdmlkZXIoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkge1xyXG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGU8Q2FydEl0ZW1bXT4oW10pXHJcblxyXG4gIGNvbnN0IGFkZFRvQ2FydCA9IChpdGVtOiBDYXJ0SXRlbSkgPT4ge1xyXG4gICAgc2V0SXRlbXMocHJldkl0ZW1zID0+IHtcclxuICAgICAgY29uc3QgZXhpc3RpbmdJdGVtID0gcHJldkl0ZW1zLmZpbmQoaSA9PiBpLmlkID09PSBpdGVtLmlkKVxyXG4gICAgICBpZiAoZXhpc3RpbmdJdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIHByZXZJdGVtcy5tYXAoaSA9PiBcclxuICAgICAgICAgIGkuaWQgPT09IGl0ZW0uaWQgPyB7IC4uLmksIHF1YW50aXR5OiBpLnF1YW50aXR5ICsgMSB9IDogaVxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gWy4uLnByZXZJdGVtcywgeyAuLi5pdGVtLCBxdWFudGl0eTogMSB9XVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbW92ZUZyb21DYXJ0ID0gKGlkOiBzdHJpbmcpID0+IHtcclxuICAgIHNldEl0ZW1zKHByZXZJdGVtcyA9PiBwcmV2SXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCAhPT0gaWQpKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJ0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBpdGVtcywgYWRkVG9DYXJ0LCByZW1vdmVGcm9tQ2FydCB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9DYXJ0Q29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VDYXJ0KCkge1xyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENhcnRDb250ZXh0KVxyXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcigndXNlQ2FydCBtdXN0IGJlIHVzZWQgd2l0aGluIGEgQ2FydFByb3ZpZGVyJylcclxuICB9XHJcbiAgcmV0dXJuIGNvbnRleHRcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJDYXJ0Q29udGV4dCIsInVuZGVmaW5lZCIsIkNhcnRQcm92aWRlciIsImNoaWxkcmVuIiwiaXRlbXMiLCJzZXRJdGVtcyIsImFkZFRvQ2FydCIsIml0ZW0iLCJwcmV2SXRlbXMiLCJleGlzdGluZ0l0ZW0iLCJmaW5kIiwiaSIsImlkIiwibWFwIiwicXVhbnRpdHkiLCJyZW1vdmVGcm9tQ2FydCIsImZpbHRlciIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VDYXJ0IiwiY29udGV4dCIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/CartContext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_CartContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/CartContext */ \"./context/CartContext.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_CartContext__WEBPACK_IMPORTED_MODULE_1__.CartProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"D:\\\\phone-store\\\\pages\\\\_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\phone-store\\\\pages\\\\_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ3FEO0FBQ3ZCO0FBRTlCLFNBQVNDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDL0MscUJBQ0UsOERBQUNILDhEQUFZQTtrQkFDWCw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QjtBQUVBLGlFQUFlRixLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGhvbmUtc3RvcmUvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcclxuaW1wb3J0IHsgQ2FydFByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dC9DYXJ0Q29udGV4dCdcclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJ0UHJvdmlkZXI+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvQ2FydFByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHAiXSwibmFtZXMiOlsiQ2FydFByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();