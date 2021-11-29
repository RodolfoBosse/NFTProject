"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7627);
/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4526);
/* harmony import */ var _hooks_use_wallet_balance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3924);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



let WALLETS = {
  getPhantomWallet: () => ({
    name: 'Phantom'
  }),
  getSolflareWallet: () => ({
    name: 'Solflare'
  }),
  getSolletWallet: () => ({
    name: 'Sollet'
  }),
  getLedgerWallet: () => ({
    name: 'Ledger'
  }),
  getSlopeWallet: () => ({
    name: 'Slope'
  }),
  getSolletExtensionWallet: () => ({
    name: 'SolletExtension'
  })
};

if (false) {}






const network = "devnet";

const App = ({
  Component,
  pageProps
}) => {
  const endpoint = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => 'https://solana-api.projectserum.com', []);
  const wallets = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [WALLETS.getPhantomWallet(), WALLETS.getSolflareWallet(), WALLETS.getSolletWallet({
    network
  }), WALLETS.getLedgerWallet(), WALLETS.getSlopeWallet(), WALLETS.getSolletExtensionWallet({
    network
  })], []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__/* .ConnectionProvider */ .U, {
    endpoint: endpoint,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__/* .WalletProvider */ .nS, {
      wallets: wallets,
      autoConnect: true,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__/* .WalletModalProvider */ .sR, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_hooks_use_wallet_balance__WEBPACK_IMPORTED_MODULE_3__/* .WalletBalanceProvider */ .P, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(Component, _objectSpread({}, pageProps))
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ 6391:
/***/ ((module) => {

module.exports = require("@project-serum/anchor");

/***/ }),

/***/ 5681:
/***/ ((module) => {

module.exports = require("@solana/web3.js");

/***/ }),

/***/ 9553:
/***/ ((module) => {

module.exports = require("eventemitter3");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2268:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [526,924], () => (__webpack_exec__(9064)));
module.exports = __webpack_exports__;

})();