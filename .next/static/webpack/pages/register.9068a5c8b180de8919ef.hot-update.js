webpackHotUpdate_N_E("pages/register",{

/***/ "./components/popUp.js":
/*!*****************************!*\
  !*** ./components/popUp.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Modal */ \"./node_modules/react-bootstrap/esm/Modal.js\");\nvar _jsxFileName = \"/Users/anakarinaorellana/Documents/MIT_First/restap1/components/popUp.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction Examplepopup(_ref) {\n  var showModal = _ref.showModal,\n      setShow = _ref.setShow,\n      parent = _ref.parent;\n  console.log(parent);\n  var body = parent === 'register' ? \"registered\" : 'logged in';\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    show: showModal,\n    onHide: function onHide() {\n      return setShow(false);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Header, {\n    closeButton: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Title, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 11\n    }\n  }, \"Welcome\")), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Body, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, \"You have succesfully \", body, \"!\"), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Footer, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    variant: \"secondary\",\n    onClick: function onClick() {\n      return setShow(false);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 11\n    }\n  }, \"Close\"))));\n}\n\n_c = Examplepopup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Examplepopup);\n\nvar _c;\n\n$RefreshReg$(_c, \"Examplepopup\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3BVcC5qcz80MjAwIl0sIm5hbWVzIjpbIkV4YW1wbGVwb3B1cCIsInNob3dNb2RhbCIsInNldFNob3ciLCJwYXJlbnQiLCJjb25zb2xlIiwibG9nIiwiYm9keSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxZQUFULE9BQWtEO0FBQUEsTUFBM0JDLFNBQTJCLFFBQTNCQSxTQUEyQjtBQUFBLE1BQWpCQyxPQUFpQixRQUFqQkEsT0FBaUI7QUFBQSxNQUFUQyxNQUFTLFFBQVRBLE1BQVM7QUFDbERDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaO0FBQ0EsTUFBTUcsSUFBSSxHQUFHSCxNQUFNLEtBQUcsVUFBVCxHQUFzQixZQUF0QixHQUFvQyxXQUFqRDtBQUNFLFNBQ0UsbUVBR0UsTUFBQyw2REFBRDtBQUFPLFFBQUksRUFBRUYsU0FBYjtBQUF3QixVQUFNLEVBQUU7QUFBQSxhQUFNQyxPQUFPLENBQUMsS0FBRCxDQUFiO0FBQUEsS0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQsQ0FBTyxNQUFQO0FBQWMsZUFBVyxNQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRCxDQUFPLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLENBREYsRUFJRSxNQUFDLDZEQUFELENBQU8sSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUFrQ0ksSUFBbEMsTUFKRixFQUtFLE1BQUMsNkRBQUQsQ0FBTyxNQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQVEsV0FBTyxFQUFDLFdBQWhCO0FBQTRCLFdBQU8sRUFBRTtBQUFBLGFBQU1KLE9BQU8sQ0FBQyxLQUFELENBQWI7QUFBQSxLQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsQ0FMRixDQUhGLENBREY7QUFpQkQ7O0tBcEJRRixZO0FBc0JNQSwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvcG9wVXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCc7XG5cbmZ1bmN0aW9uIEV4YW1wbGVwb3B1cCh7c2hvd01vZGFsLHNldFNob3cscGFyZW50fSkge1xuY29uc29sZS5sb2cocGFyZW50KVxuY29uc3QgYm9keSA9IHBhcmVudD09PSdyZWdpc3RlcicgPyBcInJlZ2lzdGVyZWRcIjogJ2xvZ2dlZCBpbidcbiAgcmV0dXJuIChcbiAgICA8PlxuICBcblxuICAgICAgPE1vZGFsIHNob3c9e3Nob3dNb2RhbH0gb25IaWRlPXsoKSA9PiBzZXRTaG93KGZhbHNlKX0+XG4gICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG4gICAgICAgICAgPE1vZGFsLlRpdGxlPldlbGNvbWU8L01vZGFsLlRpdGxlPlxuICAgICAgICA8L01vZGFsLkhlYWRlcj5cbiAgICAgICAgPE1vZGFsLkJvZHk+WW91IGhhdmUgc3VjY2VzZnVsbHkge2JvZHl9ITwvTW9kYWwuQm9keT5cbiAgICAgICAgPE1vZGFsLkZvb3Rlcj5cbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93KGZhbHNlKX0+XG4gICAgICAgICAgICBDbG9zZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L01vZGFsLkZvb3Rlcj5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4YW1wbGVwb3B1cDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/popUp.js\n");

/***/ })

})