self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-i18next */ "./node_modules/next-i18next/dist/esm/index.js");
/* harmony import */ var _components_country_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/country-list */ "./src/components/country-list.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\work\\github\\nextjs-graphql\\src\\pages\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var Index = function Index() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  var _useTranslation = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)('common'),
      t = _useTranslation.t;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: t('title')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/",
        locale: router.locale === 'en' ? 'fa' : 'en',
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          children: t('change-locale')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_country_list__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, _this);
};

_s(Index, "NdqdaJwMqFfs5S+Ki97dajZX8zI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter, next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation];
});

_c = Index;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJJbmRleCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVRyYW5zbGF0aW9uIiwidCIsImxvY2FsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUlBOztBQUlBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDaEIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFEZ0Isd0JBRUpDLDREQUFjLENBQUMsUUFBRCxDQUZWO0FBQUEsTUFFVEMsQ0FGUyxtQkFFVEEsQ0FGUzs7QUFJaEIsc0JBQ0k7QUFBQSw0QkFDSTtBQUFBLGdCQUFLQSxDQUFDLENBQUMsT0FBRDtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUEsNkJBQ0ksOERBQUMsa0RBQUQ7QUFDSSxZQUFJLEVBQUMsR0FEVDtBQUVJLGNBQU0sRUFBRUgsTUFBTSxDQUFDSSxNQUFQLEtBQWtCLElBQWxCLEdBQXlCLElBQXpCLEdBQWdDLElBRjVDO0FBQUEsK0JBR0k7QUFBQSxvQkFDS0QsQ0FBQyxDQUFDLGVBQUQ7QUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQVdJLDhEQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWVILENBbkJEOztHQUFNSixLO1VBQ2FFLGtELEVBQ0hDLHdEOzs7S0FGVkgsSzs7QUFpQ04sK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODBkMGNkM2Q2ZGM3NGY5N2E2NjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQge3VzZVRyYW5zbGF0aW9ufSBmcm9tICduZXh0LWkxOG5leHQnXHJcbmltcG9ydCB7c2VydmVyU2lkZVRyYW5zbGF0aW9uc30gZnJvbSAnbmV4dC1pMThuZXh0L3NlcnZlclNpZGVUcmFuc2xhdGlvbnMnXHJcbmltcG9ydCB7IGluaXRpYWxpemVBcG9sbG8gfSBmcm9tICcuLi9hcG9sbG8vY2xpZW50J1xyXG5cclxuaW1wb3J0IENvdW50cnlMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvY291bnRyeS1saXN0J1xyXG5pbXBvcnQgVGhlbWUgZnJvbSAnLi4vY29tcG9uZW50cy9jb3VudHJ5LWxpc3QnXHJcblxyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3Qge3R9ID0gdXNlVHJhbnNsYXRpb24oJ2NvbW1vbicpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgPGgxPnt0KCd0aXRsZScpfTwvaDE+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9Jy8nXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlPXtyb3V0ZXIubG9jYWxlID09PSAnZW4nID8gJ2ZhJyA6ICdlbid9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdjaGFuZ2UtbG9jYWxlJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Q291bnRyeUxpc3QvPlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgbG9jYWxlIH06IHtsb2NhbGU6IHN0cmluZ30pID0+IHtcclxuICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gYXdhaXQgc2VydmVyU2lkZVRyYW5zbGF0aW9ucyhsb2NhbGUsIFsnY29tbW9uJ10pO1xyXG4gICAgY29uc3QgYXBvbGxvQ2xpZW50ID0gaW5pdGlhbGl6ZUFwb2xsbygpXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBpbml0aWFsQXBvbGxvU3RhdGU6IGFwb2xsb0NsaWVudC5jYWNoZS5leHRyYWN0KCksXHJcbiAgICAgICAgICAgIC4uLnRyYW5zbGF0aW9uLFxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=