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
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CountryList; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _error_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-message */ "./src/components/error-message.tsx");


var _jsxFileName = "C:\\work\\github\\nextjs-graphql\\src\\components\\country-list.tsx";


const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({
  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache(),
  uri: 'https://countries.trevorblades.com'
});
const LIST_COUNTRIES = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  {
    countries {
      name
      code
    }
  }
`;
function CountryList() {
  const {
    data,
    loading,
    error
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(LIST_COUNTRIES, {
    client
  });

  if (loading || error) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_error_message__WEBPACK_IMPORTED_MODULE_2__.default, {
        message: error.message
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 28
      }, this) : 'Loading...'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 16
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        children: data.countries.map(country => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: [country.code, ". "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: country.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 29
          }, this)
        }, country.code, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 25
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./src/components/error-message.tsx":
/*!******************************************!*\
  !*** ./src/components/error-message.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ErrorMessage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\work\\github\\nextjs-graphql\\src\\components\\error-message.tsx";

function ErrorMessage({
  message
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("aside", {
    className: "jsx-3868056592",
    children: [message, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "3868056592",
      children: "aside.jsx-3868056592{padding:1.5em;font-size:14px;color:white;background-color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx3b3JrXFxnaXRodWJcXG5leHRqcy1ncmFwaHFsXFxzcmNcXGNvbXBvbmVudHNcXGVycm9yLW1lc3NhZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUl3QixBQUcrQixjQUNDLGVBQ0gsWUFDUyxxQkFDdkIiLCJmaWxlIjoiQzpcXHdvcmtcXGdpdGh1YlxcbmV4dGpzLWdyYXBocWxcXHNyY1xcY29tcG9uZW50c1xcZXJyb3ItbWVzc2FnZS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFcnJvck1lc3NhZ2Uoe21lc3NhZ2V9OiB7IG1lc3NhZ2U6IHN0cmluZyB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxhc2lkZT5cclxuICAgICAgICAgICAge21lc3NhZ2V9XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICBhc2lkZSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxLjVlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2FzaWRlPlxyXG4gICAgKVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\work\\\\github\\\\nextjs-graphql\\\\src\\\\components\\\\error-message.tsx */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/components/theme-changer.tsx":
/*!******************************************!*\
  !*** ./src/components/theme-changer.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-themes */ "next-themes");
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\work\\github\\nextjs-graphql\\src\\components\\theme-changer.tsx";


const ThemeChanger = () => {
  const {
    theme,
    setTheme
  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
      children: theme === 'dark' ? 'Light Mode' : ' Mode'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ThemeChanger);

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-i18next */ "next-i18next");
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-i18next/serverSideTranslations */ "next-i18next/serverSideTranslations");
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../apollo/client */ "./src/apollo/client.js");
/* harmony import */ var _components_country_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/country-list */ "./src/components/country-list.tsx");
/* harmony import */ var _components_theme_changer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/theme-changer */ "./src/components/theme-changer.tsx");

var _jsxFileName = "C:\\work\\github\\nextjs-graphql\\src\\pages\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const Index = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)('common');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: t('title')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/",
        locale: router.locale === 'en' ? 'fa' : 'en',
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          children: t('change-locale')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_theme_changer__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_country_list__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, undefined);
};

const getStaticProps = async ({
  locale
}) => {
  const translation = await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_4__.serverSideTranslations)(locale, ['common']);
  const apolloClient = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.initializeApollo)();
  return {
    props: _objectSpread({
      initialApolloState: apolloClient.cache.extract()
    }, translation)
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Index);

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

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-themes");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb3VudHJ5LWxpc3QudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Vycm9yLW1lc3NhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RoZW1lLWNoYW5nZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudC9saW5rL3NjaGVtYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtdG9vbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWkxOG5leHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWkxOG5leHQvc2VydmVyU2lkZVRyYW5zbGF0aW9uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtdGhlbWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiLCJ3ZWJwYWNrOi8vL2lnbm9yZWR8QzpcXHdvcmtcXGdpdGh1YlxcbmV4dGpzLWdyYXBocWxcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJjbGllbnQiLCJBcG9sbG9DbGllbnQiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJ1cmkiLCJMSVNUX0NPVU5UUklFUyIsImdxbCIsIkNvdW50cnlMaXN0IiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsInVzZVF1ZXJ5IiwibWVzc2FnZSIsImNvdW50cmllcyIsIm1hcCIsImNvdW50cnkiLCJjb2RlIiwibmFtZSIsIkVycm9yTWVzc2FnZSIsIlRoZW1lQ2hhbmdlciIsInRoZW1lIiwic2V0VGhlbWUiLCJ1c2VUaGVtZSIsIkluZGV4Iiwicm91dGVyIiwidXNlUm91dGVyIiwidCIsInVzZVRyYW5zbGF0aW9uIiwibG9jYWxlIiwiZ2V0U3RhdGljUHJvcHMiLCJ0cmFuc2xhdGlvbiIsInNlcnZlclNpZGVUcmFuc2xhdGlvbnMiLCJhcG9sbG9DbGllbnQiLCJpbml0aWFsaXplQXBvbGxvIiwicHJvcHMiLCJpbml0aWFsQXBvbGxvU3RhdGUiLCJleHRyYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1BLE1BQU0sR0FBRyxJQUFJQyx3REFBSixDQUFpQjtBQUM1QkMsT0FBSyxFQUFFLElBQUlDLHlEQUFKLEVBRHFCO0FBRTVCQyxLQUFHLEVBQUU7QUFGdUIsQ0FBakIsQ0FBZjtBQUtBLE1BQU1DLGNBQWMsR0FBR0MsK0NBQUk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FQQTtBQWNlLFNBQVNDLFdBQVQsR0FBdUI7QUFDbEMsUUFBTTtBQUFDQyxRQUFEO0FBQU9DLFdBQVA7QUFBZ0JDO0FBQWhCLE1BQXlCQyx3REFBUSxDQUFDTixjQUFELEVBQWlCO0FBQUNMO0FBQUQsR0FBakIsQ0FBdkM7O0FBRUEsTUFBSVMsT0FBTyxJQUFJQyxLQUFmLEVBQXNCO0FBQ2xCLHdCQUFPO0FBQUEsZ0JBQUlBLEtBQUssZ0JBQUcsOERBQUMsbURBQUQ7QUFBYyxlQUFPLEVBQUVBLEtBQUssQ0FBQ0U7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFILEdBQTZDO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNIOztBQUVELHNCQUNJO0FBQUEsMkJBQ0k7QUFBQSw2QkFDSTtBQUFBLGtCQUNLSixJQUFJLENBQUNLLFNBQUwsQ0FBZUMsR0FBZixDQUFvQkMsT0FBRCxpQkFDaEI7QUFBQSxpQ0FDSTtBQUFBLG9DQUNJO0FBQUEseUJBQU9BLE9BQU8sQ0FBQ0MsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSTtBQUFBLHdCQUFJRCxPQUFPLENBQUNFO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixXQUFTRixPQUFPLENBQUNDLElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREg7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBZ0JILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q2MsU0FBU0UsWUFBVCxDQUFzQjtBQUFDTjtBQUFELENBQXRCLEVBQXNEO0FBQ2pFLHNCQUNJO0FBQUE7QUFBQSxlQUNLQSxPQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBYUgsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEQ7O0FBRUEsTUFBTU8sWUFBWSxHQUFHLE1BQU07QUFDekIsUUFBTTtBQUFFQyxTQUFGO0FBQVNDO0FBQVQsTUFBc0JDLHFEQUFRLEVBQXBDO0FBRUEsc0JBQ0U7QUFBQSwyQkFDRTtBQUFRLGFBQU8sRUFBRSxNQUFNRCxRQUFRLENBQUNELEtBQUssS0FBRyxNQUFSLEdBQWUsT0FBZixHQUF1QixNQUF4QixDQUEvQjtBQUFBLGdCQUNHQSxLQUFLLEtBQUcsTUFBUixHQUFlLFlBQWYsR0FBNEI7QUFEL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU9ELENBVkQ7O0FBWUEsK0RBQWVELFlBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUdBLE1BQU1JLEtBQUssR0FBRyxNQUFNO0FBQ2hCLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxRQUFNO0FBQUNDO0FBQUQsTUFBTUMsNERBQWMsQ0FBQyxRQUFELENBQTFCO0FBRUEsc0JBQ0k7QUFBQSw0QkFDSTtBQUFBLGdCQUFLRCxDQUFDLENBQUMsT0FBRDtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFBLDhCQUNJLDhEQUFDLGtEQUFEO0FBQ0ksWUFBSSxFQUFDLEdBRFQ7QUFFSSxjQUFNLEVBQUVGLE1BQU0sQ0FBQ0ksTUFBUCxLQUFrQixJQUFsQixHQUF5QixJQUF6QixHQUFnQyxJQUY1QztBQUFBLCtCQUdJO0FBQUEsb0JBQ0tGLENBQUMsQ0FBQyxlQUFEO0FBRE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFRSSw4REFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQVlJLDhEQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFnQkgsQ0FwQkQ7O0FBc0JPLE1BQU1HLGNBQWMsR0FBRyxPQUFPO0FBQUVEO0FBQUYsQ0FBUCxLQUF3QztBQUNsRSxRQUFNRSxXQUFXLEdBQUcsTUFBTUMsMkZBQXNCLENBQUNILE1BQUQsRUFBUyxDQUFDLFFBQUQsQ0FBVCxDQUFoRDtBQUNBLFFBQU1JLFlBQVksR0FBR0MsZ0VBQWdCLEVBQXJDO0FBRUEsU0FBTztBQUNIQyxTQUFLO0FBQ0RDLHdCQUFrQixFQUFFSCxZQUFZLENBQUM5QixLQUFiLENBQW1Ca0MsT0FBbkI7QUFEbkIsT0FFRU4sV0FGRjtBQURGLEdBQVA7QUFNSCxDQVZNO0FBWVAsK0RBQWVQLEtBQWYsRTs7Ozs7Ozs7Ozs7QUM1Q0EsNEM7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsaUU7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUsIGdxbCwgdXNlUXVlcnl9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuL2Vycm9yLW1lc3NhZ2UnXHJcblxyXG5jb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxyXG4gICAgdXJpOiAnaHR0cHM6Ly9jb3VudHJpZXMudHJldm9yYmxhZGVzLmNvbSdcclxufSk7XHJcblxyXG5jb25zdCBMSVNUX0NPVU5UUklFUyA9IGdxbGBcclxuICB7XHJcbiAgICBjb3VudHJpZXMge1xyXG4gICAgICBuYW1lXHJcbiAgICAgIGNvZGVcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgQ291bnRyeSB7XHJcbiAgICBuYW1lOiBzdHJpbmdcclxuICAgIGNvZGU6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3VudHJ5TGlzdCgpIHtcclxuICAgIGNvbnN0IHtkYXRhLCBsb2FkaW5nLCBlcnJvcn0gPSB1c2VRdWVyeShMSVNUX0NPVU5UUklFUywge2NsaWVudH0pO1xyXG5cclxuICAgIGlmIChsb2FkaW5nIHx8IGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIDxwPntlcnJvciA/IDxFcnJvck1lc3NhZ2UgbWVzc2FnZT17ZXJyb3IubWVzc2FnZX0vPiA6ICdMb2FkaW5nLi4uJ308L3A+O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEuY291bnRyaWVzLm1hcCgoY291bnRyeTogQ291bnRyeSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjb3VudHJ5LmNvZGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y291bnRyeS5jb2RlfS4gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntjb3VudHJ5Lm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXJyb3JNZXNzYWdlKHttZXNzYWdlfTogeyBtZXNzYWdlOiBzdHJpbmcgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YXNpZGU+XHJcbiAgICAgICAgICAgIHttZXNzYWdlfVxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgYXNpZGUge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMS41ZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9hc2lkZT5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ25leHQtdGhlbWVzJ1xyXG5cclxuY29uc3QgVGhlbWVDaGFuZ2VyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgdGhlbWUsIHNldFRoZW1lIH0gPSB1c2VUaGVtZSgpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFRoZW1lKHRoZW1lPT09J2RhcmsnPydsaWdodCc6J2RhcmsnKX0+XHJcbiAgICAgICAge3RoZW1lPT09J2RhcmsnPydMaWdodCBNb2RlJzonIE1vZGUnfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaGVtZUNoYW5nZXIiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHt1c2VUcmFuc2xhdGlvbn0gZnJvbSAnbmV4dC1pMThuZXh0J1xyXG5pbXBvcnQge3NlcnZlclNpZGVUcmFuc2xhdGlvbnN9IGZyb20gJ25leHQtaTE4bmV4dC9zZXJ2ZXJTaWRlVHJhbnNsYXRpb25zJ1xyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBvbGxvIH0gZnJvbSAnLi4vYXBvbGxvL2NsaWVudCdcclxuXHJcbmltcG9ydCBDb3VudHJ5TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2NvdW50cnktbGlzdCdcclxuaW1wb3J0IFRoZW1lQ2hhbmdlciBmcm9tICcuLi9jb21wb25lbnRzL3RoZW1lLWNoYW5nZXInXHJcblxyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3Qge3R9ID0gdXNlVHJhbnNsYXRpb24oJ2NvbW1vbicpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgPGgxPnt0KCd0aXRsZScpfTwvaDE+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9Jy8nXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlPXtyb3V0ZXIubG9jYWxlID09PSAnZW4nID8gJ2ZhJyA6ICdlbid9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdjaGFuZ2UtbG9jYWxlJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8VGhlbWVDaGFuZ2VyLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxDb3VudHJ5TGlzdC8+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBsb2NhbGUgfToge2xvY2FsZTogc3RyaW5nfSkgPT4ge1xyXG4gICAgY29uc3QgdHJhbnNsYXRpb24gPSBhd2FpdCBzZXJ2ZXJTaWRlVHJhbnNsYXRpb25zKGxvY2FsZSwgWydjb21tb24nXSk7XHJcbiAgICBjb25zdCBhcG9sbG9DbGllbnQgPSBpbml0aWFsaXplQXBvbGxvKClcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGluaXRpYWxBcG9sbG9TdGF0ZTogYXBvbGxvQ2xpZW50LmNhY2hlLmV4dHJhY3QoKSxcclxuICAgICAgICAgICAgLi4udHJhbnNsYXRpb24sXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50L2xpbmsvc2NoZW1hXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRvb2xzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWkxOG5leHRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtaTE4bmV4dC9zZXJ2ZXJTaWRlVHJhbnNsYXRpb25zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXRoZW1lc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9