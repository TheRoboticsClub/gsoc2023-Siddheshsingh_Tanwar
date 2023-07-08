"use strict";
(self["webpackChunkreact_frontend"] = self["webpackChunkreact_frontend"] || []).push([["exercises_static_exercises_python_web_ide_react-components_Test2ExerciseManager_js"],{

/***/ "../exercises/static/exercises/python_web_ide/react-components/Test2ExerciseManager.js":
/*!*********************************************************************************************!*\
  !*** ../exercises/static/exercises/python_web_ide/react-components/Test2ExerciseManager.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../../node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_TestExerciseManager2_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/TestExerciseManager2.css */ "../exercises/static/exercises/python_web_ide/react-components/css/TestExerciseManager2.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "../../../../node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Test2ExerciseManager = function Test2ExerciseManager() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState("No responses received"),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    message = _React$useState2[0],
    setMessage = _React$useState2[1];
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    iserror = _React$useState4[0],
    setIsError = _React$useState4[1];
  var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    "test-exercise-manager-message": true,
    "error": iserror
  });
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    console.log("Test2ExerciseManager subscribing to ['ack','error'] events");
    var callback = function callback(message) {
      setIsError(message.command === 'error');
      setMessage(message.data.message);
      console.log(message.data.message);
    };
    RoboticsExerciseComponents.commsManager.subscribe(['ack', 'error'], callback);
    return function () {
      console.log("Test2ExerciseManager unsubscribing from ['ack','error'] events");
      RoboticsExerciseComponents.commsManager.unsubscribe(['ack', 'error'], callback);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: classes,
      children: message
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Test2ExerciseManager);

/***/ }),

/***/ "../exercises/static/exercises/python_web_ide/react-components/css/TestExerciseManager2.css":
/*!**************************************************************************************************!*\
  !*** ../exercises/static/exercises/python_web_ide/react-components/css/TestExerciseManager2.css ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvZXhlcmNpc2VzX3N0YXRpY19leGVyY2lzZXNfcHl0aG9uX3dlYl9pZGVfcmVhY3QtY29tcG9uZW50c19UZXN0MkV4ZXJjaXNlTWFuYWdlcl9qcy42ZjBmM2UyYy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDSztBQUVJO0FBQ1Q7QUFBQTtBQUFBO0FBRS9CLElBQU1HLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBb0IsR0FBUztFQUMvQixzQkFBOEJILDJDQUFjLENBQUMsdUJBQXVCLENBQUM7SUFBQTtJQUE5REssT0FBTztJQUFFQyxVQUFVO0VBQzFCLHVCQUE4Qk4sMkNBQWMsQ0FBQyxLQUFLLENBQUM7SUFBQTtJQUE1Q08sT0FBTztJQUFFQyxVQUFVO0VBRTFCLElBQU1DLE9BQU8sR0FBR1IsaURBQVUsQ0FBQztJQUN2QiwrQkFBK0IsRUFBRSxJQUFJO0lBQ3JDLE9BQU8sRUFBRU07RUFDYixDQUFDLENBQUM7RUFFRlAsNENBQWUsQ0FBQyxZQUFNO0lBQ2xCVyxPQUFPLENBQUNDLEdBQUcsQ0FBQyw0REFBNEQsQ0FBQztJQUN6RSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBUSxDQUFJUixPQUFPLEVBQUs7TUFDMUJHLFVBQVUsQ0FBQ0gsT0FBTyxDQUFDUyxPQUFPLEtBQUssT0FBTyxDQUFDO01BQ3ZDUixVQUFVLENBQUNELE9BQU8sQ0FBQ1UsSUFBSSxDQUFDVixPQUFPLENBQUM7TUFDaENNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxPQUFPLENBQUNVLElBQUksQ0FBQ1YsT0FBTyxDQUFDO0lBQ3JDLENBQUM7SUFFRFcsMEJBQTBCLENBQUNDLFlBQVksQ0FBQ0MsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxFQUM5REwsUUFBUSxDQUFDO0lBRWIsT0FBTyxZQUFNO01BQ1RGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdFQUFnRSxDQUFDO01BQzdFSSwwQkFBMEIsQ0FBQ0MsWUFBWSxDQUFDRSxXQUFXLENBQUMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEVBQ2hFTixRQUFRLENBQUM7SUFDakIsQ0FBQztFQUNMLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixvQkFDSSx3REFBQywyQ0FBUTtJQUFBLHdCQUNMLGdFQUFNLGVBQ047TUFBSyxTQUFTLEVBQUVKLE9BQVE7TUFBQSxVQUFFSjtJQUFPLEVBQU87RUFBQSxFQUNqQztBQUVuQixDQUFDO0FBRUQsaUVBQWVGLG9CQUFvQjs7Ozs7Ozs7Ozs7QUN6Q25DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3RfZnJvbnRlbmQvLi4vZXhlcmNpc2VzL3N0YXRpYy9leGVyY2lzZXMvcHl0aG9uX3dlYl9pZGUvcmVhY3QtY29tcG9uZW50cy9UZXN0MkV4ZXJjaXNlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9yZWFjdF9mcm9udGVuZC8uLi9leGVyY2lzZXMvc3RhdGljL2V4ZXJjaXNlcy9weXRob25fd2ViX2lkZS9yZWFjdC1jb21wb25lbnRzL2Nzcy9UZXN0RXhlcmNpc2VNYW5hZ2VyMi5jc3M/ZDYyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0ICcuL2Nzcy9UZXN0RXhlcmNpc2VNYW5hZ2VyMi5jc3MnO1xuaW1wb3J0IHtGcmFnbWVudH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFRlc3QyRXhlcmNpc2VNYW5hZ2VyID0gKCkgPT4ge1xuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IFJlYWN0LnVzZVN0YXRlKFwiTm8gcmVzcG9uc2VzIHJlY2VpdmVkXCIpO1xuICAgIGNvbnN0IFtpc2Vycm9yLCBzZXRJc0Vycm9yXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICAgICAgXCJ0ZXN0LWV4ZXJjaXNlLW1hbmFnZXItbWVzc2FnZVwiOiB0cnVlLFxuICAgICAgICBcImVycm9yXCI6IGlzZXJyb3JcbiAgICB9KTtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGVzdDJFeGVyY2lzZU1hbmFnZXIgc3Vic2NyaWJpbmcgdG8gWydhY2snLCdlcnJvciddIGV2ZW50c1wiKTtcbiAgICAgICAgY29uc3QgY2FsbGJhY2sgPSAobWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgc2V0SXNFcnJvcihtZXNzYWdlLmNvbW1hbmQgPT09ICdlcnJvcicpO1xuICAgICAgICAgICAgc2V0TWVzc2FnZShtZXNzYWdlLmRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlLmRhdGEubWVzc2FnZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgUm9ib3RpY3NFeGVyY2lzZUNvbXBvbmVudHMuY29tbXNNYW5hZ2VyLnN1YnNjcmliZShbJ2FjaycsICdlcnJvciddLFxuICAgICAgICAgICAgY2FsbGJhY2spO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRlc3QyRXhlcmNpc2VNYW5hZ2VyIHVuc3Vic2NyaWJpbmcgZnJvbSBbJ2FjaycsJ2Vycm9yJ10gZXZlbnRzXCIpO1xuICAgICAgICAgICAgUm9ib3RpY3NFeGVyY2lzZUNvbXBvbmVudHMuY29tbXNNYW5hZ2VyLnVuc3Vic2NyaWJlKFsnYWNrJywgJ2Vycm9yJ10sXG4gICAgICAgICAgICAgICAgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+e21lc3NhZ2V9PC9kaXY+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXN0MkV4ZXJjaXNlTWFuYWdlcjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiUmVhY3QiLCJjbGFzc05hbWVzIiwiRnJhZ21lbnQiLCJUZXN0MkV4ZXJjaXNlTWFuYWdlciIsInVzZVN0YXRlIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJpc2Vycm9yIiwic2V0SXNFcnJvciIsImNsYXNzZXMiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiY2FsbGJhY2siLCJjb21tYW5kIiwiZGF0YSIsIlJvYm90aWNzRXhlcmNpc2VDb21wb25lbnRzIiwiY29tbXNNYW5hZ2VyIiwic3Vic2NyaWJlIiwidW5zdWJzY3JpYmUiXSwic291cmNlUm9vdCI6IiJ9