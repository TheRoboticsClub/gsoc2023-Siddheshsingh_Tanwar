"use strict";
(self["webpackChunkreact_frontend"] = self["webpackChunkreact_frontend"] || []).push([["exercises_static_exercises_python_web_ide_react-components_Test3ExerciseManager_js"],{

/***/ "../exercises/static/exercises/python_web_ide/react-components/Test3ExerciseManager.js":
/*!*********************************************************************************************!*\
  !*** ../exercises/static/exercises/python_web_ide/react-components/Test3ExerciseManager.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../../node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_TestExerciseManager3_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/TestExerciseManager3.css */ "../exercises/static/exercises/python_web_ide/react-components/css/TestExerciseManager3.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "../../../../node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Test3ExerciseManager = function Test3ExerciseManager() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState("Idle"),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    state = _React$useState2[0],
    setState = _React$useState2[1];
  var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    "test-exercise-manager-state": true
  });
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    console.log("Test3ExerciseManager subscribing to ['state-change'] events");
    var callback = function callback(message) {
      setState(message.data.state);
      console.log(message);
    };
    RoboticsExerciseComponents.commsManager.subscribe([RoboticsExerciseComponents.commsManager.events.STATE_CHANGED], callback);
    return function () {
      console.log("Test2ExerciseManager unsubscribing from ['state-changed'] events");
      RoboticsExerciseComponents.commsManager.unsubscribe([RoboticsExerciseComponents.commsManager.events.STATE_CHANGED], callback);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: classes,
      children: ["CURRENT STATE: ", state]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Test3ExerciseManager);

/***/ }),

/***/ "../exercises/static/exercises/python_web_ide/react-components/css/TestExerciseManager3.css":
/*!**************************************************************************************************!*\
  !*** ../exercises/static/exercises/python_web_ide/react-components/css/TestExerciseManager3.css ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvZXhlcmNpc2VzX3N0YXRpY19leGVyY2lzZXNfcHl0aG9uX3dlYl9pZGVfcmVhY3QtY29tcG9uZW50c19UZXN0M0V4ZXJjaXNlTWFuYWdlcl9qcy4zMzc1YTExYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDSztBQUVJO0FBQ1Q7QUFBQTtBQUFBO0FBRS9CLElBQU1HLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBb0IsR0FBUztFQUNqQyxzQkFBMEJILDJDQUFjLENBQUMsTUFBTSxDQUFDO0lBQUE7SUFBekNLLEtBQUs7SUFBRUMsUUFBUTtFQUV0QixJQUFNQyxPQUFPLEdBQUdOLGlEQUFVLENBQUM7SUFDekIsNkJBQTZCLEVBQUU7RUFDakMsQ0FBQyxDQUFDO0VBRUZELDRDQUFlLENBQUMsWUFBTTtJQUNwQlMsT0FBTyxDQUFDQyxHQUFHLENBQUMsNkRBQTZELENBQUM7SUFFMUUsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVEsQ0FBSUMsT0FBTyxFQUFLO01BQ3hCTixRQUFRLENBQUNNLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDUixLQUFLLENBQUM7TUFDNUJJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxPQUFPLENBQUM7SUFDMUIsQ0FBQztJQUVERSwwQkFBMEIsQ0FBQ0MsWUFBWSxDQUFDQyxTQUFTLENBQUMsQ0FDNUNGLDBCQUEwQixDQUFDQyxZQUFZLENBQUNFLE1BQU0sQ0FBQ0MsYUFBYSxDQUM3RCxFQUNEUCxRQUFRLENBQUM7SUFFYixPQUFPLFlBQU07TUFDWEYsT0FBTyxDQUFDQyxHQUFHLENBQUMsa0VBQWtFLENBQUM7TUFDL0VJLDBCQUEwQixDQUFDQyxZQUFZLENBQUNJLFdBQVcsQ0FBQyxDQUM5Q0wsMEJBQTBCLENBQUNDLFlBQVksQ0FBQ0UsTUFBTSxDQUFDQyxhQUFhLENBQzdELEVBQ0hQLFFBQVEsQ0FBQztJQUNiLENBQUM7RUFDSCxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sb0JBQ0Usd0RBQUMsMkNBQVE7SUFBQSx3QkFDTCxnRUFBTSxlQUNOO01BQUssU0FBUyxFQUFFSixPQUFRO01BQUEsV0FBQyxpQkFBZSxFQUFDRixLQUFLO0lBQUEsRUFBTztFQUFBLEVBQzlDO0FBRWYsQ0FBQztBQUVELGlFQUFlRixvQkFBb0I7Ozs7Ozs7Ozs7O0FDM0NuQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0X2Zyb250ZW5kLy4uL2V4ZXJjaXNlcy9zdGF0aWMvZXhlcmNpc2VzL3B5dGhvbl93ZWJfaWRlL3JlYWN0LWNvbXBvbmVudHMvVGVzdDNFeGVyY2lzZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vcmVhY3RfZnJvbnRlbmQvLi4vZXhlcmNpc2VzL3N0YXRpYy9leGVyY2lzZXMvcHl0aG9uX3dlYl9pZGUvcmVhY3QtY29tcG9uZW50cy9jc3MvVGVzdEV4ZXJjaXNlTWFuYWdlcjMuY3NzP2NhM2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCAnLi9jc3MvVGVzdEV4ZXJjaXNlTWFuYWdlcjMuY3NzJztcbmltcG9ydCB7RnJhZ21lbnR9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBUZXN0M0V4ZXJjaXNlTWFuYWdlciA9ICgpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZShcIklkbGVcIik7XG5cbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgIFwidGVzdC1leGVyY2lzZS1tYW5hZ2VyLXN0YXRlXCI6IHRydWUsXG4gIH0pO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJUZXN0M0V4ZXJjaXNlTWFuYWdlciBzdWJzY3JpYmluZyB0byBbJ3N0YXRlLWNoYW5nZSddIGV2ZW50c1wiKTtcblxuICAgIGNvbnN0IGNhbGxiYWNrID0gKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICBzZXRTdGF0ZShtZXNzYWdlLmRhdGEuc3RhdGUpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgIH07XG5cbiAgICBSb2JvdGljc0V4ZXJjaXNlQ29tcG9uZW50cy5jb21tc01hbmFnZXIuc3Vic2NyaWJlKFtcbiAgICAgICAgICBSb2JvdGljc0V4ZXJjaXNlQ29tcG9uZW50cy5jb21tc01hbmFnZXIuZXZlbnRzLlNUQVRFX0NIQU5HRURcbiAgICAgICAgXSxcbiAgICAgICAgY2FsbGJhY2spO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiVGVzdDJFeGVyY2lzZU1hbmFnZXIgdW5zdWJzY3JpYmluZyBmcm9tIFsnc3RhdGUtY2hhbmdlZCddIGV2ZW50c1wiKTtcbiAgICAgIFJvYm90aWNzRXhlcmNpc2VDb21wb25lbnRzLmNvbW1zTWFuYWdlci51bnN1YnNjcmliZShbXG4gICAgICAgICAgICBSb2JvdGljc0V4ZXJjaXNlQ29tcG9uZW50cy5jb21tc01hbmFnZXIuZXZlbnRzLlNUQVRFX0NIQU5HRURcbiAgICAgICAgICBdLFxuICAgICAgICBjYWxsYmFjayk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxociAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+Q1VSUkVOVCBTVEFURToge3N0YXRlfTwvZGl2PlxuICAgIDwvRnJhZ21lbnQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVzdDNFeGVyY2lzZU1hbmFnZXI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlJlYWN0IiwiY2xhc3NOYW1lcyIsIkZyYWdtZW50IiwiVGVzdDNFeGVyY2lzZU1hbmFnZXIiLCJ1c2VTdGF0ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJjbGFzc2VzIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImNhbGxiYWNrIiwibWVzc2FnZSIsImRhdGEiLCJSb2JvdGljc0V4ZXJjaXNlQ29tcG9uZW50cyIsImNvbW1zTWFuYWdlciIsInN1YnNjcmliZSIsImV2ZW50cyIsIlNUQVRFX0NIQU5HRUQiLCJ1bnN1YnNjcmliZSJdLCJzb3VyY2VSb290IjoiIn0=