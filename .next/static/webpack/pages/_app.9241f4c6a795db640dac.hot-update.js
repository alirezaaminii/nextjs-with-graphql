self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_work_github_nextjs_graphql_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-i18next */ "./node_modules/next-i18next/dist/esm/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apollo/client */ "./src/apollo/client.js");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\work\\github\\nextjs-graphql\\src\\pages\\_app.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_work_github_nextjs_graphql_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




//import styles


var MyApp = function MyApp(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  var apolloClient = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useApollo)(pageProps.initialApolloState);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_5__.ApolloProvider, {
    client: apolloClient,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, _this);
};

_s(MyApp, "tbJ3b4FkvMzOUeZ/NFKWbtTZZvM=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useApollo];
});

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.appWithTranslation)(MyApp));

var _c, _c2;

$RefreshReg$(_c, "MyApp");
$RefreshReg$(_c2, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiYXBvbGxvQ2xpZW50IiwidXNlQXBvbGxvIiwiaW5pdGlhbEFwb2xsb1N0YXRlIiwiYXBwV2l0aFRyYW5zbGF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOztBQU1BLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQXNDO0FBQUE7O0FBQUEsTUFBcENDLFNBQW9DLFFBQXBDQSxTQUFvQztBQUFBLE1BQXpCQyxTQUF5QixRQUF6QkEsU0FBeUI7QUFDaEQsTUFBTUMsWUFBWSxHQUFHQyx5REFBUyxDQUFDRixTQUFTLENBQUNHLGtCQUFYLENBQTlCO0FBRUEsc0JBQ0ksOERBQUMsMERBQUQ7QUFBZ0IsVUFBTSxFQUFFRixZQUF4QjtBQUFBLDJCQUNJLDhEQUFDLFNBQUQsb0JBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQUtILENBUkQ7O0dBQU1GLEs7VUFDbUJJLHFEOzs7S0FEbkJKLEs7QUFVTiwrREFBZSxNQUFBTSxnRUFBa0IsQ0FBQ04sS0FBRCxDQUFqQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjkyNDFmNGM2YTc5NWRiNjQwZGFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7QXBwUHJvcHMgYXMgTmV4dEFwcFByb3BzfSBmcm9tIFwibmV4dC9hcHBcIjtcclxuaW1wb3J0IHthcHBXaXRoVHJhbnNsYXRpb259IGZyb20gJ25leHQtaTE4bmV4dCdcclxuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcclxuaW1wb3J0IHsgdXNlQXBvbGxvIH0gZnJvbSAnLi4vYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICduZXh0LXRoZW1lcydcclxuXHJcbi8vaW1wb3J0IHN0eWxlc1xyXG5pbXBvcnQgJy4uL2Nzcy9tYWluLmNzcyc7XHJcblxyXG50eXBlIEFwcFByb3BzPFAgPSBhbnk+ID0ge1xyXG4gICAgcGFnZVByb3BzOiBQO1xyXG59ICYgT21pdDxOZXh0QXBwUHJvcHM8UD4sIFwicGFnZVByb3BzXCI+O1xyXG5cclxuY29uc3QgTXlBcHAgPSAoe0NvbXBvbmVudCwgcGFnZVByb3BzfTogQXBwUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGFwb2xsb0NsaWVudCA9IHVzZUFwb2xsbyhwYWdlUHJvcHMuaW5pdGlhbEFwb2xsb1N0YXRlKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17YXBvbGxvQ2xpZW50fT5cclxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwcFdpdGhUcmFuc2xhdGlvbihNeUFwcClcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==