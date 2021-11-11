/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/country-list.tsx":
/*!*****************************************!*\
  !*** ./src/components/country-list.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CountryList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _error_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-message */ \"./src/components/error-message.tsx\");\n\n\nvar _jsxFileName = \"/home/alireza/Work/Github/nextjs-graphql/src/components/country-list.tsx\";\n\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({\n  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache(),\n  uri: 'https://countries.trevorblades.com'\n});\nconst LIST_COUNTRIES = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n  {\n    countries {\n      name\n      code\n    }\n  }\n`;\nfunction CountryList() {\n  const {\n    data,\n    loading,\n    error\n  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(LIST_COUNTRIES, {\n    client\n  });\n\n  if (loading || error) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_error_message__WEBPACK_IMPORTED_MODULE_2__.default, {\n        message: error.message\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 28\n      }, this) : 'Loading...'\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 16\n    }, this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: data.countries.map(country => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n              children: [country.code, \". \"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 33\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              children: country.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 33\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 29\n          }, this)\n        }, country.code, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 25\n        }, this))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }, this)\n  }, void 0, false);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb3VudHJ5LWxpc3QudHN4PzdkYzciXSwibmFtZXMiOlsiY2xpZW50IiwiQXBvbGxvQ2xpZW50IiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwidXJpIiwiTElTVF9DT1VOVFJJRVMiLCJncWwiLCJDb3VudHJ5TGlzdCIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJ1c2VRdWVyeSIsIm1lc3NhZ2UiLCJjb3VudHJpZXMiLCJtYXAiLCJjb3VudHJ5IiwiY29kZSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNQSxNQUFNLEdBQUcsSUFBSUMsd0RBQUosQ0FBaUI7QUFDNUJDLE9BQUssRUFBRSxJQUFJQyx5REFBSixFQURxQjtBQUU1QkMsS0FBRyxFQUFFO0FBRnVCLENBQWpCLENBQWY7QUFLQSxNQUFNQyxjQUFjLEdBQUdDLCtDQUFJO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUEE7QUFjZSxTQUFTQyxXQUFULEdBQXVCO0FBQ2xDLFFBQU07QUFBQ0MsUUFBRDtBQUFPQyxXQUFQO0FBQWdCQztBQUFoQixNQUF5QkMsd0RBQVEsQ0FBQ04sY0FBRCxFQUFpQjtBQUFDTDtBQUFELEdBQWpCLENBQXZDOztBQUVBLE1BQUlTLE9BQU8sSUFBSUMsS0FBZixFQUFzQjtBQUNsQix3QkFBTztBQUFBLGdCQUFJQSxLQUFLLGdCQUFHLDhEQUFDLG1EQUFEO0FBQWMsZUFBTyxFQUFFQSxLQUFLLENBQUNFO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBSCxHQUE2QztBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDSDs7QUFFRCxzQkFDSTtBQUFBLDJCQUNJO0FBQUEsNkJBQ0k7QUFBQSxrQkFDS0osSUFBSSxDQUFDSyxTQUFMLENBQWVDLEdBQWYsQ0FBb0JDLE9BQUQsaUJBQ2hCO0FBQUEsaUNBQ0k7QUFBQSxvQ0FDSTtBQUFBLHlCQUFPQSxPQUFPLENBQUNDLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUk7QUFBQSx3QkFBSUQsT0FBTyxDQUFDRTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosV0FBU0YsT0FBTyxDQUFDQyxJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURIO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQWdCSCIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2NvdW50cnktbGlzdC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Fwb2xsb0NsaWVudCwgSW5NZW1vcnlDYWNoZSwgZ3FsLCB1c2VRdWVyeX0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuL2Vycm9yLW1lc3NhZ2UnXG5cbmNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxuICAgIHVyaTogJ2h0dHBzOi8vY291bnRyaWVzLnRyZXZvcmJsYWRlcy5jb20nXG59KTtcblxuY29uc3QgTElTVF9DT1VOVFJJRVMgPSBncWxgXG4gIHtcbiAgICBjb3VudHJpZXMge1xuICAgICAgbmFtZVxuICAgICAgY29kZVxuICAgIH1cbiAgfVxuYDtcblxuaW50ZXJmYWNlIENvdW50cnkge1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIGNvZGU6IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3VudHJ5TGlzdCgpIHtcbiAgICBjb25zdCB7ZGF0YSwgbG9hZGluZywgZXJyb3J9ID0gdXNlUXVlcnkoTElTVF9DT1VOVFJJRVMsIHtjbGllbnR9KTtcblxuICAgIGlmIChsb2FkaW5nIHx8IGVycm9yKSB7XG4gICAgICAgIHJldHVybiA8cD57ZXJyb3IgPyA8RXJyb3JNZXNzYWdlIG1lc3NhZ2U9e2Vycm9yLm1lc3NhZ2V9Lz4gOiAnTG9hZGluZy4uLid9PC9wPjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5jb3VudHJpZXMubWFwKChjb3VudHJ5OiBDb3VudHJ5KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjb3VudHJ5LmNvZGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntjb3VudHJ5LmNvZGV9LiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntjb3VudHJ5Lm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/country-list.tsx\n");

/***/ }),

/***/ "./src/components/error-message.tsx":
/*!******************************************!*\
  !*** ./src/components/error-message.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ErrorMessage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/alireza/Work/Github/nextjs-graphql/src/components/error-message.tsx\";\n\nfunction ErrorMessage({\n  message\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n    className: \"jsx-3868056592\",\n    children: [message, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n      id: \"3868056592\",\n      children: \"aside.jsx-3868056592{padding:1.5em;font-size:14px;color:white;background-color:red;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsaXJlemEvV29yay9HaXRodWIvbmV4dGpzLWdyYXBocWwvc3JjL2NvbXBvbmVudHMvZXJyb3ItbWVzc2FnZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSXdCLEFBRytCLGNBQ0MsZUFDSCxZQUNTLHFCQUN2QiIsImZpbGUiOiIvaG9tZS9hbGlyZXphL1dvcmsvR2l0aHViL25leHRqcy1ncmFwaHFsL3NyYy9jb21wb25lbnRzL2Vycm9yLW1lc3NhZ2UudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXJyb3JNZXNzYWdlKHttZXNzYWdlfTogeyBtZXNzYWdlOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxhc2lkZT5cbiAgICAgICAgICAgIHttZXNzYWdlfVxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICBhc2lkZSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMS41ZW07XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9hc2lkZT5cbiAgICApXG59XG4iXX0= */\\n/*@ sourceURL=/home/alireza/Work/Github/nextjs-graphql/src/components/error-message.tsx */\"\n    }, void 0, false, void 0, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lcnJvci1tZXNzYWdlLnRzeD9mNTg1Il0sIm5hbWVzIjpbIkVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWUsU0FBU0EsWUFBVCxDQUFzQjtBQUFDQztBQUFELENBQXRCLEVBQXNEO0FBQ2pFLHNCQUNJO0FBQUE7QUFBQSxlQUNLQSxPQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBYUgiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9lcnJvci1tZXNzYWdlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVycm9yTWVzc2FnZSh7bWVzc2FnZX06IHsgbWVzc2FnZTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8YXNpZGU+XG4gICAgICAgICAgICB7bWVzc2FnZX1cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgYXNpZGUge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEuNWVtO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvYXNpZGU+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/error-message.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_country_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/country-list */ \"./src/components/country-list.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apollo/client */ \"./src/apollo/client.js\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-i18next */ \"next-i18next\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-i18next/serverSideTranslations */ \"next-i18next/serverSideTranslations\");\n/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _jsxFileName = \"/home/alireza/Work/Github/nextjs-graphql/src/pages/index.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nconst Index = () => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  const {\n    t\n  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)('common');\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: t('title')\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/\",\n        locale: router.locale === 'en' ? 'fa' : 'en',\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          children: t('change-locale')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 21\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_country_list__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 9\n  }, undefined);\n};\n\nconst getStaticProps = async ({\n  locale\n}) => {\n  const translation = await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_6__.serverSideTranslations)(locale, ['common']);\n  const apolloClient = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.initializeApollo)();\n  return {\n    props: _objectSpread({\n      initialApolloState: apolloClient.cache.extract()\n    }, translation)\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiSW5kZXgiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJsb2NhbGUiLCJnZXRTdGF0aWNQcm9wcyIsInRyYW5zbGF0aW9uIiwic2VydmVyU2lkZVRyYW5zbGF0aW9ucyIsImFwb2xsb0NsaWVudCIsImluaXRpYWxpemVBcG9sbG8iLCJwcm9wcyIsImluaXRpYWxBcG9sbG9TdGF0ZSIsImNhY2hlIiwiZXh0cmFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxLQUFLLEdBQUcsTUFBTTtBQUNoQixRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFDQztBQUFELE1BQU1DLDREQUFjLENBQUMsUUFBRCxDQUExQjtBQUVBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBQSxnQkFBS0QsQ0FBQyxDQUFDLE9BQUQ7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBQSw2QkFDSSw4REFBQyxrREFBRDtBQUNJLFlBQUksRUFBQyxHQURUO0FBRUksY0FBTSxFQUFFRixNQUFNLENBQUNJLE1BQVAsS0FBa0IsSUFBbEIsR0FBeUIsSUFBekIsR0FBZ0MsSUFGNUM7QUFBQSwrQkFHSTtBQUFBLG9CQUNLRixDQUFDLENBQUMsZUFBRDtBQUROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQVdJLDhEQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFlSCxDQW5CRDs7QUFxQk8sTUFBTUcsY0FBYyxHQUFHLE9BQU87QUFBRUQ7QUFBRixDQUFQLEtBQXdDO0FBQ2xFLFFBQU1FLFdBQVcsR0FBRyxNQUFNQywyRkFBc0IsQ0FBQ0gsTUFBRCxFQUFTLENBQUMsUUFBRCxDQUFULENBQWhEO0FBQ0EsUUFBTUksWUFBWSxHQUFHQyxnRUFBZ0IsRUFBckM7QUFFQSxTQUFPO0FBQ0hDLFNBQUs7QUFDREMsd0JBQWtCLEVBQUVILFlBQVksQ0FBQ0ksS0FBYixDQUFtQkMsT0FBbkI7QUFEbkIsT0FFRVAsV0FGRjtBQURGLEdBQVA7QUFNSCxDQVZNO0FBWVAsK0RBQWVQLEtBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IENvdW50cnlMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvY291bnRyeS1saXN0J1xuXG5pbXBvcnQgeyBpbml0aWFsaXplQXBvbGxvIH0gZnJvbSAnLi4vYXBvbGxvL2NsaWVudCdcbmltcG9ydCB7dXNlVHJhbnNsYXRpb259IGZyb20gJ25leHQtaTE4bmV4dCdcbmltcG9ydCB7c2VydmVyU2lkZVRyYW5zbGF0aW9uc30gZnJvbSAnbmV4dC1pMThuZXh0L3NlcnZlclNpZGVUcmFuc2xhdGlvbnMnXG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3Qge3R9ID0gdXNlVHJhbnNsYXRpb24oJ2NvbW1vbicpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgIDxoMT57dCgndGl0bGUnKX08L2gxPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICBocmVmPScvJ1xuICAgICAgICAgICAgICAgICAgICBsb2NhbGU9e3JvdXRlci5sb2NhbGUgPT09ICdlbicgPyAnZmEnIDogJ2VuJ30+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dCgnY2hhbmdlLWxvY2FsZScpfVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb3VudHJ5TGlzdC8+XG4gICAgICAgIDwvbWFpbj5cbiAgICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IGxvY2FsZSB9OiB7bG9jYWxlOiBzdHJpbmd9KSA9PiB7XG4gICAgY29uc3QgdHJhbnNsYXRpb24gPSBhd2FpdCBzZXJ2ZXJTaWRlVHJhbnNsYXRpb25zKGxvY2FsZSwgWydjb21tb24nXSk7XG4gICAgY29uc3QgYXBvbGxvQ2xpZW50ID0gaW5pdGlhbGl6ZUFwb2xsbygpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgaW5pdGlhbEFwb2xsb1N0YXRlOiBhcG9sbG9DbGllbnQuY2FjaGUuZXh0cmFjdCgpLFxuICAgICAgICAgICAgLi4udHJhbnNsYXRpb24sXG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "@apollo/client/link/schema":
/*!*********************************************!*\
  !*** external "@apollo/client/link/schema" ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client/link/schema");;

/***/ }),

/***/ "graphql-tools":
/*!********************************!*\
  !*** external "graphql-tools" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tools");;

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-i18next");;

/***/ }),

/***/ "next-i18next/serverSideTranslations":
/*!******************************************************!*\
  !*** external "next-i18next/serverSideTranslations" ***!
  \******************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-i18next/serverSideTranslations");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","src_apollo_client_js"], function() { return __webpack_exec__("./src/pages/index.tsx"); });
module.exports = __webpack_exports__;

})();