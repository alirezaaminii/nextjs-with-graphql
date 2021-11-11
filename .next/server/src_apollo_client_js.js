exports.id = "src_apollo_client_js";
exports.ids = ["src_apollo_client_js"];
exports.modules = {

/***/ "./src/apollo/client.js":
/*!******************************!*\
  !*** ./src/apollo/client.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeApollo": function() { return /* binding */ initializeApollo; },
/* harmony export */   "useApollo": function() { return /* binding */ useApollo; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);


let apolloClient;

function createIsomorphLink() {
  if (true) {
    const {
      SchemaLink
    } = __webpack_require__(/*! @apollo/client/link/schema */ "@apollo/client/link/schema");

    const {
      schema
    } = __webpack_require__(/*! ./schema */ "./src/apollo/schema.js");

    return new SchemaLink({
      schema
    });
  } else {}
}

function createApolloClient() {
  return new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({
    ssrMode: true,
    link: createIsomorphLink(),
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache()
  });
}

function initializeApollo(initialState = null) {
  var _apolloClient2;

  const _apolloClient = (_apolloClient2 = apolloClient) !== null && _apolloClient2 !== void 0 ? _apolloClient2 : createApolloClient(); // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here


  if (initialState) {
    _apolloClient.cache.restore(initialState);
  } // For SSG and SSR always create a new Apollo Client


  if (true) return _apolloClient; // Create the Apollo Client once in the client

  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}
function useApollo(initialState) {
  const store = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => initializeApollo(initialState), [initialState]);
  return store;
}

/***/ }),

/***/ "./src/apollo/schema.js":
/*!******************************!*\
  !*** ./src/apollo/schema.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "schema": function() { return /* binding */ schema; }
/* harmony export */ });
/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tools */ "graphql-tools");
/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tools__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _type_defs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type-defs */ "./src/apollo/type-defs.js");


const schema = (0,graphql_tools__WEBPACK_IMPORTED_MODULE_0__.makeExecutableSchema)({
  typeDefs: _type_defs__WEBPACK_IMPORTED_MODULE_1__.typeDefs
});

/***/ }),

/***/ "./src/apollo/type-defs.js":
/*!*********************************!*\
  !*** ./src/apollo/type-defs.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "typeDefs": function() { return /* binding */ typeDefs; }
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const typeDefs = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  type Country {
    name: String!
    code: String!
  }

  type Query {
    viewer: Country
  }
`;

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBvbGxvL2NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBvbGxvL3NjaGVtYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBvbGxvL3R5cGUtZGVmcy5qcyJdLCJuYW1lcyI6WyJhcG9sbG9DbGllbnQiLCJjcmVhdGVJc29tb3JwaExpbmsiLCJTY2hlbWFMaW5rIiwicmVxdWlyZSIsInNjaGVtYSIsImNyZWF0ZUFwb2xsb0NsaWVudCIsIkFwb2xsb0NsaWVudCIsInNzck1vZGUiLCJsaW5rIiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwiaW5pdGlhbGl6ZUFwb2xsbyIsImluaXRpYWxTdGF0ZSIsIl9hcG9sbG9DbGllbnQiLCJyZXN0b3JlIiwidXNlQXBvbGxvIiwic3RvcmUiLCJ1c2VNZW1vIiwibWFrZUV4ZWN1dGFibGVTY2hlbWEiLCJ0eXBlRGVmcyIsImdxbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBSUEsWUFBSjs7QUFFQSxTQUFTQyxrQkFBVCxHQUE4QjtBQUM1QixZQUFtQztBQUNqQyxVQUFNO0FBQUVDO0FBQUYsUUFBaUJDLG1CQUFPLENBQUMsOERBQUQsQ0FBOUI7O0FBQ0EsVUFBTTtBQUFFQztBQUFGLFFBQWFELG1CQUFPLENBQUMsd0NBQUQsQ0FBMUI7O0FBQ0EsV0FBTyxJQUFJRCxVQUFKLENBQWU7QUFBRUU7QUFBRixLQUFmLENBQVA7QUFDRCxHQUpELE1BSU8sRUFNTjtBQUNGOztBQUVELFNBQVNDLGtCQUFULEdBQThCO0FBQzVCLFNBQU8sSUFBSUMsd0RBQUosQ0FBaUI7QUFDdEJDLFdBQU8sTUFEZTtBQUV0QkMsUUFBSSxFQUFFUCxrQkFBa0IsRUFGRjtBQUd0QlEsU0FBSyxFQUFFLElBQUlDLHlEQUFKO0FBSGUsR0FBakIsQ0FBUDtBQUtEOztBQUVNLFNBQVNDLGdCQUFULENBQTBCQyxZQUFZLEdBQUcsSUFBekMsRUFBK0M7QUFBQTs7QUFDcEQsUUFBTUMsYUFBYSxxQkFBR2IsWUFBSCwyREFBbUJLLGtCQUFrQixFQUF4RCxDQURvRCxDQUdwRDtBQUNBOzs7QUFDQSxNQUFJTyxZQUFKLEVBQWtCO0FBQ2hCQyxpQkFBYSxDQUFDSixLQUFkLENBQW9CSyxPQUFwQixDQUE0QkYsWUFBNUI7QUFDRCxHQVBtRCxDQVFwRDs7O0FBQ0EsWUFBbUMsT0FBT0MsYUFBUCxDQVRpQixDQVVwRDs7QUFDQSxNQUFJLENBQUNiLFlBQUwsRUFBbUJBLFlBQVksR0FBR2EsYUFBZjtBQUVuQixTQUFPQSxhQUFQO0FBQ0Q7QUFFTSxTQUFTRSxTQUFULENBQW1CSCxZQUFuQixFQUFpQztBQUN0QyxRQUFNSSxLQUFLLEdBQUdDLDhDQUFPLENBQUMsTUFBTU4sZ0JBQWdCLENBQUNDLFlBQUQsQ0FBdkIsRUFBdUMsQ0FBQ0EsWUFBRCxDQUF2QyxDQUFyQjtBQUNBLFNBQU9JLEtBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Q0Q7QUFDQTtBQUVPLE1BQU1aLE1BQU0sR0FBR2MsbUVBQW9CLENBQUM7QUFDekNDLFVBQVFBO0FBRGlDLENBQUQsQ0FBbkMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIUDtBQUVPLE1BQU1BLFFBQVEsR0FBR0MsK0NBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBVE8sQyIsImZpbGUiOiJzcmNfYXBvbGxvX2NsaWVudF9qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXHJcblxyXG5sZXQgYXBvbGxvQ2xpZW50XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVJc29tb3JwaExpbmsoKSB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBjb25zdCB7IFNjaGVtYUxpbmsgfSA9IHJlcXVpcmUoJ0BhcG9sbG8vY2xpZW50L2xpbmsvc2NoZW1hJylcclxuICAgIGNvbnN0IHsgc2NoZW1hIH0gPSByZXF1aXJlKCcuL3NjaGVtYScpXHJcbiAgICByZXR1cm4gbmV3IFNjaGVtYUxpbmsoeyBzY2hlbWEgfSlcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgeyBIdHRwTGluayB9ID0gcmVxdWlyZSgnQGFwb2xsby9jbGllbnQvbGluay9odHRwJylcclxuICAgIHJldHVybiBuZXcgSHR0cExpbmsoe1xyXG4gICAgICB1cmk6ICcvYXBpL2dyYXBocWwnLFxyXG4gICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBcG9sbG9DbGllbnQoKSB7XHJcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gICAgc3NyTW9kZTogdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcsXHJcbiAgICBsaW5rOiBjcmVhdGVJc29tb3JwaExpbmsoKSxcclxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQXBvbGxvKGluaXRpYWxTdGF0ZSA9IG51bGwpIHtcclxuICBjb25zdCBfYXBvbGxvQ2xpZW50ID0gYXBvbGxvQ2xpZW50ID8/IGNyZWF0ZUFwb2xsb0NsaWVudCgpXHJcblxyXG4gIC8vIElmIHlvdXIgcGFnZSBoYXMgTmV4dC5qcyBkYXRhIGZldGNoaW5nIG1ldGhvZHMgdGhhdCB1c2UgQXBvbGxvIENsaWVudCwgdGhlIGluaXRpYWwgc3RhdGVcclxuICAvLyBnZXRzIGh5ZHJhdGVkIGhlcmVcclxuICBpZiAoaW5pdGlhbFN0YXRlKSB7XHJcbiAgICBfYXBvbGxvQ2xpZW50LmNhY2hlLnJlc3RvcmUoaW5pdGlhbFN0YXRlKVxyXG4gIH1cclxuICAvLyBGb3IgU1NHIGFuZCBTU1IgYWx3YXlzIGNyZWF0ZSBhIG5ldyBBcG9sbG8gQ2xpZW50XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gX2Fwb2xsb0NsaWVudFxyXG4gIC8vIENyZWF0ZSB0aGUgQXBvbGxvIENsaWVudCBvbmNlIGluIHRoZSBjbGllbnRcclxuICBpZiAoIWFwb2xsb0NsaWVudCkgYXBvbGxvQ2xpZW50ID0gX2Fwb2xsb0NsaWVudFxyXG5cclxuICByZXR1cm4gX2Fwb2xsb0NsaWVudFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXBvbGxvKGluaXRpYWxTdGF0ZSkge1xyXG4gIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplQXBvbGxvKGluaXRpYWxTdGF0ZSksIFtpbml0aWFsU3RhdGVdKVxyXG4gIHJldHVybiBzdG9yZVxyXG59XHJcbiIsImltcG9ydCB7IG1ha2VFeGVjdXRhYmxlU2NoZW1hIH0gZnJvbSAnZ3JhcGhxbC10b29scydcclxuaW1wb3J0IHsgdHlwZURlZnMgfSBmcm9tICcuL3R5cGUtZGVmcydcclxuXHJcbmV4cG9ydCBjb25zdCBzY2hlbWEgPSBtYWtlRXhlY3V0YWJsZVNjaGVtYSh7XHJcbiAgdHlwZURlZnMsXHJcbn0pXHJcbiIsImltcG9ydCB7IGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xyXG5cclxuZXhwb3J0IGNvbnN0IHR5cGVEZWZzID0gZ3FsYFxyXG4gIHR5cGUgQ291bnRyeSB7XHJcbiAgICBuYW1lOiBTdHJpbmchXHJcbiAgICBjb2RlOiBTdHJpbmchXHJcbiAgfVxyXG5cclxuICB0eXBlIFF1ZXJ5IHtcclxuICAgIHZpZXdlcjogQ291bnRyeVxyXG4gIH1cclxuYFxyXG4iXSwic291cmNlUm9vdCI6IiJ9