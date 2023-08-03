"use strict";
(self["webpackChunkreact_frontend"] = self["webpackChunkreact_frontend"] || []).push([["src_hooks_useWindowDimensions_js"],{

/***/ "./src/hooks/useWindowDimensions.js":
/*!******************************************!*\
  !*** ./src/hooks/useWindowDimensions.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useWindowDimensions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function getWindowDimensions() {
  var _window = window,
    width = _window.innerWidth,
    height = _window.innerHeight;
  return {
    width: width,
    height: height
  };
}
function useWindowDimensions() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getWindowDimensions()),
    _useState2 = _slicedToArray(_useState, 2),
    windowDimensions = _useState2[0],
    setWindowDimensions = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return function () {
      return window.removeEventListener("resize", handleResize);
    };
  }, []);
  return windowDimensions;
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvc3JjX2hvb2tzX3VzZVdpbmRvd0RpbWVuc2lvbnNfanMuZjk2YzBkOWMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBRTVDLFNBQVNFLG1CQUFtQixHQUFHO0VBQzdCLGNBQW1EQyxNQUFNO0lBQXJDQyxLQUFLLFdBQWpCQyxVQUFVO0lBQXNCQyxNQUFNLFdBQW5CQyxXQUFXO0VBQ3RDLE9BQU87SUFDTEgsS0FBSyxFQUFMQSxLQUFLO0lBQ0xFLE1BQU0sRUFBTkE7RUFDRixDQUFDO0FBQ0g7QUFFZSxTQUFTRSxtQkFBbUIsR0FBRztFQUM1QyxnQkFBZ0RSLCtDQUFRLENBQ3RERSxtQkFBbUIsRUFBRSxDQUN0QjtJQUFBO0lBRk1PLGdCQUFnQjtJQUFFQyxtQkFBbUI7RUFJNUNULGdEQUFTLENBQUMsWUFBTTtJQUNkLFNBQVNVLFlBQVksR0FBRztNQUN0QkQsbUJBQW1CLENBQUNSLG1CQUFtQixFQUFFLENBQUM7SUFDNUM7SUFFQUMsTUFBTSxDQUFDUyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVELFlBQVksQ0FBQztJQUMvQyxPQUFPO01BQUEsT0FBTVIsTUFBTSxDQUFDVSxtQkFBbUIsQ0FBQyxRQUFRLEVBQUVGLFlBQVksQ0FBQztJQUFBO0VBQ2pFLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixPQUFPRixnQkFBZ0I7QUFDekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdF9mcm9udGVuZC8uL3NyYy9ob29rcy91c2VXaW5kb3dEaW1lbnNpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gZ2V0V2luZG93RGltZW5zaW9ucygpIHtcbiAgY29uc3QgeyBpbm5lcldpZHRoOiB3aWR0aCwgaW5uZXJIZWlnaHQ6IGhlaWdodCB9ID0gd2luZG93O1xuICByZXR1cm4ge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlV2luZG93RGltZW5zaW9ucygpIHtcbiAgY29uc3QgW3dpbmRvd0RpbWVuc2lvbnMsIHNldFdpbmRvd0RpbWVuc2lvbnNdID0gdXNlU3RhdGUoXG4gICAgZ2V0V2luZG93RGltZW5zaW9ucygpXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XG4gICAgICBzZXRXaW5kb3dEaW1lbnNpb25zKGdldFdpbmRvd0RpbWVuc2lvbnMoKSk7XG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiB3aW5kb3dEaW1lbnNpb25zO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZ2V0V2luZG93RGltZW5zaW9ucyIsIndpbmRvdyIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwidXNlV2luZG93RGltZW5zaW9ucyIsIndpbmRvd0RpbWVuc2lvbnMiLCJzZXRXaW5kb3dEaW1lbnNpb25zIiwiaGFuZGxlUmVzaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9