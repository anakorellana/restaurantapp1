webpackHotUpdate_N_E("pages/login",{

/***/ "./components/popuptwo.js":
/*!********************************!*\
  !*** ./components/popuptwo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Modal */ \"./node_modules/react-bootstrap/esm/Modal.js\");\nvar _jsxFileName = \"/Users/anakarinaorellana/Documents/MIT_First/restap1/components/popuptwo.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction Popuptwo(props) {\n  console.log('hello');\n  return props.trigger ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    variant: \"primary\",\n    onClick: handleShow,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, \"Launch demo modal\"), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    show: show,\n    onHide: handleClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 3\n    }\n  }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Header, {\n    closeButton: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Title, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, \"Modal heading\")), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Body, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, \"Woohoo, you're reading this text in a modal!\"), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Footer, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    variant: \"secondary\",\n    onClick: handleClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, \"Close\"), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    variant: \"primary\",\n    onClick: handleClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, \"Save Changes\")))) : \"\";\n} //    <div className=\"popup\">\n//         <div className=\"popup-inner\">\n//         <h2>\n//            You have succesfully logged in!\n//          </h2>\n//        <button className='close-btn'>close</button>\n//          {props.children}\n//   //     </div>\n//    </div>\n// ) : \"\";\n// </>\n// }\n\n\n_c = Popuptwo;\n\n__jsx(\"style\", {\n  jsx: true,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 2\n  }\n}, \"\\n.popup {\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100vh;\\n    height: 100vh;\\n    background-color: black;\\n\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.popup-inner {\\n\\n    position: relative;\\n    padding: 32px;\\n    width: 100%;\\n    background-color: green;\\n\\n}\\n\\n.popup-inner .close-btn {\\n    position: absolute;\\n    top: 16px;\\n    right: 16px;\\n}\\n\\n\\n\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Popuptwo);\n\nvar _c;\n\n$RefreshReg$(_c, \"Popuptwo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3B1cHR3by5qcz8xNGUzIl0sIm5hbWVzIjpbIlBvcHVwdHdvIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwidHJpZ2dlciIsImhhbmRsZVNob3ciLCJzaG93IiwiaGFuZGxlQ2xvc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7O0FBSUEsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDdkJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDQSxTQUFRRixLQUFLLENBQUNHLE9BQVAsR0FDUCxtRUFFRSxNQUFDLDhEQUFEO0FBQVEsV0FBTyxFQUFDLFNBQWhCO0FBQTBCLFdBQU8sRUFBRUMsVUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRixFQU1BLE1BQUMsNkRBQUQ7QUFBTyxRQUFJLEVBQUVDLElBQWI7QUFBbUIsVUFBTSxFQUFFQyxXQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRCxDQUFPLE1BQVA7QUFBYyxlQUFXLE1BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFELENBQU8sS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLENBREYsRUFJRSxNQUFDLDZEQUFELENBQU8sSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9EQUpGLEVBS0UsTUFBQyw2REFBRCxDQUFPLE1BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFBUSxXQUFPLEVBQUMsV0FBaEI7QUFBNEIsV0FBTyxFQUFFQSxXQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFJRSxNQUFDLDhEQUFEO0FBQVEsV0FBTyxFQUFDLFNBQWhCO0FBQTBCLFdBQU8sRUFBRUEsV0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKRixDQUxGLENBTkEsQ0FETyxHQXNCSixFQXRCSDtBQXdCQyxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7S0F2Q09QLFE7O0FBeUNSO0FBQU8sS0FBRyxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBb0NjQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvcG9wdXB0d28uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnO1xuXG4gIFxuXG5mdW5jdGlvbiBQb3B1cHR3byhwcm9wcykge1xuICBjb25zb2xlLmxvZygnaGVsbG8nKVxuICByZXR1cm4gKHByb3BzLnRyaWdnZXIpID8gXG4gIDw+XG5cbiAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlU2hvd30+XG4gICAgTGF1bmNoIGRlbW8gbW9kYWxcbiAgPC9CdXR0b24+XG5cbiAgPE1vZGFsIHNob3c9e3Nob3d9IG9uSGlkZT17aGFuZGxlQ2xvc2V9PlxuICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG4gICAgICA8TW9kYWwuVGl0bGU+TW9kYWwgaGVhZGluZzwvTW9kYWwuVGl0bGU+XG4gICAgPC9Nb2RhbC5IZWFkZXI+XG4gICAgPE1vZGFsLkJvZHk+V29vaG9vLCB5b3UncmUgcmVhZGluZyB0aGlzIHRleHQgaW4gYSBtb2RhbCE8L01vZGFsLkJvZHk+XG4gICAgPE1vZGFsLkZvb3Rlcj5cbiAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cbiAgICAgICAgQ2xvc2VcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cbiAgICAgICAgU2F2ZSBDaGFuZ2VzXG4gICAgICA8L0J1dHRvbj5cbiAgICA8L01vZGFsLkZvb3Rlcj5cbiAgPC9Nb2RhbD5cbiAgPC8+XG4gICA6IFwiXCI7XG4gIFxuICB9XG4gIFxuICAvLyAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwXCI+XG4gIC8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cC1pbm5lclwiPlxuICAvLyAgICAgICAgIDxoMj5cbiAgLy8gICAgICAgICAgICBZb3UgaGF2ZSBzdWNjZXNmdWxseSBsb2dnZWQgaW4hXG4gIC8vICAgICAgICAgIDwvaDI+XG4gIC8vICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nY2xvc2UtYnRuJz5jbG9zZTwvYnV0dG9uPlxuICAvLyAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gIC8vICAgLy8gICAgIDwvZGl2PlxuICAvLyAgICA8L2Rpdj5cbiAgLy8gKSA6IFwiXCI7XG4gIC8vIDwvPlxuICAvLyB9XG5cbiA8c3R5bGUganN4PlxuICAgICAgICB7YFxuLnBvcHVwIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucG9wdXAtaW5uZXIge1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDMycHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG5cbn1cblxuLnBvcHVwLWlubmVyIC5jbG9zZS1idG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE2cHg7XG4gICAgcmlnaHQ6IDE2cHg7XG59XG5cblxuYH1cbiAgICAgIDwvc3R5bGU+IFxuXG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVwdHdvOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/popuptwo.js\n");

/***/ })

})