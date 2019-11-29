webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: PAGE_QUERY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_QUERY", function() { return PAGE_QUERY; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/apollo */ "./lib/apollo.tsx");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/header */ "./components/header.tsx");



var _jsxFileName = "/Users/alexeiaccio/Github/next-ts/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3__["createElement"];

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n query pageQuery($uid: String!, $lang: String!) {\n  page(uid: $uid, lang: $lang) {\n    title\n    body {\n      ...on PageBodyWorks {\n        fields {\n          work {\n            __typename\n            ...on Work {\n              title\n              theme\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


// import { useQuery } from '@apollo/react-hooks'
// import { NetworkStatus } from 'apollo-client'

 // import { RichText } from 'prismic-reactjs';



var PAGE_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());

var Index = function Index(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      _ref$body = _ref.body,
      body = _ref$body === void 0 ? [] : _ref$body;
  // const { data } = useQuery(ABOUT_QUERY)
  // const title = get(data, 'allAbouts.edges.0.node.title.0.text', '') as string;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, title), body.map(function (_ref2, idx) {
    var fields = _ref2.fields;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
      key: idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, fields.map(function (_ref3) {
      var work = _ref3.work,
          __typename = _ref3.__typename;

      if (__typename === 'PageBodyWorksFields') {
        return __jsx("div", {
          key: Object(lodash__WEBPACK_IMPORTED_MODULE_5__["get"])(work, 'theme'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, Object(lodash__WEBPACK_IMPORTED_MODULE_5__["get"])(work, 'title.text'));
      }
    }));
  }));
};

Index.getInitialProps =
/*#__PURE__*/
function () {
  var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref4) {
    var apolloClient, _ref6, data, title, body;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            apolloClient = _ref4.apolloClient;
            _context.next = 3;
            return apolloClient.query({
              query: PAGE_QUERY,
              variables: {
                uid: 'index',
                lang: 'ru'
              }
            });

          case 3:
            _ref6 = _context.sent;
            data = _ref6.data;
            title = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["get"])(data, 'page.title.0.text', '');
            body = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["get"])(data, 'page.body', []);
            return _context.abrupt("return", {
              title: title,
              body: body
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref5.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_apollo__WEBPACK_IMPORTED_MODULE_6__["withApollo"])(Index));

/***/ })

})
//# sourceMappingURL=index.js.0cb7a9e3857134cdc34c.hot-update.js.map