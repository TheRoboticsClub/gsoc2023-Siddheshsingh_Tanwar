"use strict";
(self["webpackChunkreact_frontend"] = self["webpackChunkreact_frontend"] || []).push([["exercises_static_exercises_python_web_ide_react-components_TestLoader_js"],{

/***/ "../exercises/static/exercises/python_web_ide/react-components/TestLoader.js":
/*!***********************************************************************************!*\
  !*** ../exercises/static/exercises/python_web_ide/react-components/TestLoader.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../../node_modules/react/index.js");
/* harmony import */ var _css_TestLoader_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/TestLoader.css */ "../exercises/static/exercises/python_web_ide/react-components/css/TestLoader.css");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../../../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "../../../../node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var TestLoader = function TestLoader(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("idle"),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    waiting = _useState4[0],
    setWaiting = _useState4[1];
  var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    "test-loader": true,
    "disabled": waiting
  });
  var spinnerClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    "lds-ring": true,
    "hidden": !waiting
  });
  var buttonClick = function buttonClick(event) {
    if (state === 'idle') {
      doConnect();
    } else if (state === 'connected') {
      doLaunch();
    } else if (state === 'ready') {
      doTerminate();
    }
  };
  var doConnect = function doConnect() {
    setWaiting(true);
    RoboticsExerciseComponents.commsManager.connect().then(function (message) {
      setState('connected');
    })["catch"](function (response) {})["finally"](function () {
      setWaiting(false);
    });
  };
  var doLaunch = function doLaunch() {
    setWaiting(true);
    var config = JSON.parse(document.getElementById("exercise-config").textContent);

    // Setting up circuit name into configuration
    config.application.params = {
      circuit: "default"
    };
    var launch_file = config.launch['0'].launch_file.interpolate({
      circuit: 'default'
    });
    config.launch['0'].launch_file = launch_file;
    RoboticsExerciseComponents.commsManager.launch(config).then(function (message) {
      setState('ready');
    })["catch"](function (response) {})["finally"](function () {
      setWaiting(false);
    });
  };
  var doTerminate = function doTerminate() {
    setWaiting(true);
    RoboticsExerciseComponents.commsManager.terminate().then(function (message) {
      setState('connected');
    })["catch"](function (response) {})["finally"](function () {
      setWaiting(false);
    });
  };
  var buttonText = function buttonText() {
    if (state === 'idle') {
      return "Connect";
    } else if (state === 'connected') {
      return "Launch";
    } else if (state === 'ready') {
      return "Terminate";
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: 'parent-block',
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: classes,
      onClick: buttonClick,
      children: buttonText()
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: spinnerClasses,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {})]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestLoader);

/***/ }),

/***/ "../exercises/static/exercises/python_web_ide/react-components/css/TestLoader.css":
/*!****************************************************************************************!*\
  !*** ../exercises/static/exercises/python_web_ide/react-components/css/TestLoader.css ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvZXhlcmNpc2VzX3N0YXRpY19leGVyY2lzZXNfcHl0aG9uX3dlYl9pZGVfcmVhY3QtY29tcG9uZW50c19UZXN0TG9hZGVyX2pzLmY3YzNmYmVjLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUVaO0FBQ087QUFBQTtBQUFBO0FBRXBDLElBQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFVLENBQUlDLEtBQUssRUFBSztFQUMxQixnQkFBMEJILCtDQUFRLENBQUMsTUFBTSxDQUFDO0lBQUE7SUFBbkNJLEtBQUs7SUFBRUMsUUFBUTtFQUN0QixpQkFBOEJMLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUE7SUFBdENNLE9BQU87SUFBRUMsVUFBVTtFQUUxQixJQUFNQyxPQUFPLEdBQUdQLGlEQUFVLENBQUM7SUFDdkIsYUFBYSxFQUFFLElBQUk7SUFDbkIsVUFBVSxFQUFFSztFQUNoQixDQUFDLENBQUM7RUFFRixJQUFNRyxjQUFjLEdBQUdSLGlEQUFVLENBQUM7SUFDOUIsVUFBVSxFQUFFLElBQUk7SUFDaEIsUUFBUSxFQUFFLENBQUNLO0VBQ2YsQ0FBQyxDQUFDO0VBRUYsSUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQVcsQ0FBSUMsS0FBSyxFQUFLO0lBQzNCLElBQUlQLEtBQUssS0FBSyxNQUFNLEVBQUU7TUFDbEJRLFNBQVMsRUFBRTtJQUNmLENBQUMsTUFBTSxJQUFJUixLQUFLLEtBQUssV0FBVyxFQUFFO01BQzlCUyxRQUFRLEVBQUU7SUFDZCxDQUFDLE1BQU0sSUFBSVQsS0FBSyxLQUFLLE9BQU8sRUFBRTtNQUMxQlUsV0FBVyxFQUFFO0lBQ2pCO0VBQ0osQ0FBQztFQUVELElBQU1GLFNBQVMsR0FBRyxTQUFaQSxTQUFTLEdBQVM7SUFDcEJMLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFFaEJRLDBCQUEwQixDQUFDQyxZQUFZLENBQUNDLE9BQU8sRUFBRSxDQUM1Q0MsSUFBSSxDQUFDLFVBQUNDLE9BQU8sRUFBSztNQUNmZCxRQUFRLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxTQUFNLENBQUMsVUFBQ2UsUUFBUSxFQUFLLENBRXZCLENBQUMsQ0FBQyxXQUFRLENBQUMsWUFBTTtNQUNiYixVQUFVLENBQUMsS0FBSyxDQUFDO0lBQ3JCLENBQUMsQ0FBQztFQUNWLENBQUM7RUFFRCxJQUFNTSxRQUFRLEdBQUcsU0FBWEEsUUFBUSxHQUFTO0lBQ25CTixVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ2hCLElBQU1jLE1BQU0sR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUNDLFdBQVcsQ0FBQzs7SUFFakY7SUFDQUwsTUFBTSxDQUFDTSxXQUFXLENBQUNDLE1BQU0sR0FBRztNQUFFQyxPQUFPLEVBQUU7SUFBVSxDQUFDO0lBQ2xELElBQUlDLFdBQVcsR0FBR1QsTUFBTSxDQUFDVSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNELFdBQVcsQ0FBQ0UsV0FBVyxDQUFDO01BQUVILE9BQU8sRUFBRTtJQUFVLENBQUMsQ0FBQztJQUNwRlIsTUFBTSxDQUFDVSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNELFdBQVcsR0FBR0EsV0FBVztJQUU1Q2YsMEJBQTBCLENBQUNDLFlBQVksQ0FBQ2UsTUFBTSxDQUFDVixNQUFNLENBQUMsQ0FDakRILElBQUksQ0FBQyxVQUFDQyxPQUFPLEVBQUs7TUFDZmQsUUFBUSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDLENBQUMsU0FBTSxDQUFDLFVBQUNlLFFBQVEsRUFBSyxDQUV2QixDQUFDLENBQUMsV0FBUSxDQUFDLFlBQU07TUFDYmIsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUNyQixDQUFDLENBQUM7RUFDVixDQUFDO0VBRUQsSUFBTU8sV0FBVyxHQUFHLFNBQWRBLFdBQVcsR0FBUztJQUN0QlAsVUFBVSxDQUFDLElBQUksQ0FBQztJQUVoQlEsMEJBQTBCLENBQUNDLFlBQVksQ0FBQ2lCLFNBQVMsRUFBRSxDQUM5Q2YsSUFBSSxDQUFDLFVBQUNDLE9BQU8sRUFBSztNQUNmZCxRQUFRLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxTQUFNLENBQUMsVUFBQ2UsUUFBUSxFQUFLLENBRXZCLENBQUMsQ0FBQyxXQUFRLENBQUMsWUFBTTtNQUNiYixVQUFVLENBQUMsS0FBSyxDQUFDO0lBQ3JCLENBQUMsQ0FBQztFQUNWLENBQUM7RUFFRCxJQUFNMkIsVUFBVSxHQUFHLFNBQWJBLFVBQVUsR0FBUztJQUNyQixJQUFJOUIsS0FBSyxLQUFLLE1BQU0sRUFBRTtNQUNsQixPQUFPLFNBQVM7SUFDcEIsQ0FBQyxNQUFNLElBQUlBLEtBQUssS0FBSyxXQUFXLEVBQUU7TUFDOUIsT0FBTyxRQUFRO0lBQ25CLENBQUMsTUFBTSxJQUFJQSxLQUFLLEtBQUssT0FBTyxFQUFFO01BQzFCLE9BQU8sV0FBVztJQUN0QjtFQUNKLENBQUM7RUFFRCxvQkFDSTtJQUFLLFNBQVMsRUFBRSxjQUFlO0lBQUEsd0JBQzNCO01BQUssU0FBUyxFQUFFSSxPQUFRO01BQUMsT0FBTyxFQUFFRSxXQUFZO01BQUEsVUFBRXdCLFVBQVU7SUFBRSxFQUFPLGVBQ25FO01BQUssU0FBUyxFQUFFekIsY0FBZTtNQUFBLHdCQUMzQixpRUFBVyxlQUNYLGlFQUFXLGVBQ1gsaUVBQVcsZUFDWCxpRUFBVztJQUFBLEVBQ1Q7RUFBQSxFQUNKO0FBRWQsQ0FBQztBQUVELGlFQUFlUCxVQUFVOzs7Ozs7Ozs7OztBQ2pHekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdF9mcm9udGVuZC8uLi9leGVyY2lzZXMvc3RhdGljL2V4ZXJjaXNlcy9weXRob25fd2ViX2lkZS9yZWFjdC1jb21wb25lbnRzL1Rlc3RMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vcmVhY3RfZnJvbnRlbmQvLi4vZXhlcmNpc2VzL3N0YXRpYy9leGVyY2lzZXMvcHl0aG9uX3dlYl9pZGUvcmVhY3QtY29tcG9uZW50cy9jc3MvVGVzdExvYWRlci5jc3M/ZWI4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZyYWdtZW50LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBcIi4vY3NzL1Rlc3RMb2FkZXIuY3NzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbmNvbnN0IFRlc3RMb2FkZXIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKFwiaWRsZVwiKTtcbiAgICBjb25zdCBbd2FpdGluZywgc2V0V2FpdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcyh7XG4gICAgICAgIFwidGVzdC1sb2FkZXJcIjogdHJ1ZSxcbiAgICAgICAgXCJkaXNhYmxlZFwiOiB3YWl0aW5nXG4gICAgfSk7XG5cbiAgICBjb25zdCBzcGlubmVyQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgICAgICBcImxkcy1yaW5nXCI6IHRydWUsXG4gICAgICAgIFwiaGlkZGVuXCI6ICF3YWl0aW5nXG4gICAgfSlcblxuICAgIGNvbnN0IGJ1dHRvbkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChzdGF0ZSA9PT0gJ2lkbGUnKSB7XG4gICAgICAgICAgICBkb0Nvbm5lY3QoKTtcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gJ2Nvbm5lY3RlZCcpIHtcbiAgICAgICAgICAgIGRvTGF1bmNoKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09ICdyZWFkeScpIHtcbiAgICAgICAgICAgIGRvVGVybWluYXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZG9Db25uZWN0ID0gKCkgPT4ge1xuICAgICAgICBzZXRXYWl0aW5nKHRydWUpO1xuXG4gICAgICAgIFJvYm90aWNzRXhlcmNpc2VDb21wb25lbnRzLmNvbW1zTWFuYWdlci5jb25uZWN0KClcbiAgICAgICAgICAgIC50aGVuKChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoJ2Nvbm5lY3RlZCcpO1xuICAgICAgICAgICAgfSkuY2F0Y2goKHJlc3BvbnNlKSA9PiB7XG5cbiAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFdhaXRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZG9MYXVuY2ggPSAoKSA9PiB7XG4gICAgICAgIHNldFdhaXRpbmcodHJ1ZSk7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IEpTT04ucGFyc2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleGVyY2lzZS1jb25maWdcIikudGV4dENvbnRlbnQpO1xuXG4gICAgICAgIC8vIFNldHRpbmcgdXAgY2lyY3VpdCBuYW1lIGludG8gY29uZmlndXJhdGlvblxuICAgICAgICBjb25maWcuYXBwbGljYXRpb24ucGFyYW1zID0geyBjaXJjdWl0OiBcImRlZmF1bHRcIiB9O1xuICAgICAgICBsZXQgbGF1bmNoX2ZpbGUgPSBjb25maWcubGF1bmNoWycwJ10ubGF1bmNoX2ZpbGUuaW50ZXJwb2xhdGUoeyBjaXJjdWl0OiAnZGVmYXVsdCcgfSk7XG4gICAgICAgIGNvbmZpZy5sYXVuY2hbJzAnXS5sYXVuY2hfZmlsZSA9IGxhdW5jaF9maWxlO1xuXG4gICAgICAgIFJvYm90aWNzRXhlcmNpc2VDb21wb25lbnRzLmNvbW1zTWFuYWdlci5sYXVuY2goY29uZmlnKVxuICAgICAgICAgICAgLnRoZW4oKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZSgncmVhZHknKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChyZXNwb25zZSkgPT4ge1xuXG4gICAgICAgICAgICB9KS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRXYWl0aW5nKGZhbHNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGRvVGVybWluYXRlID0gKCkgPT4ge1xuICAgICAgICBzZXRXYWl0aW5nKHRydWUpO1xuXG4gICAgICAgIFJvYm90aWNzRXhlcmNpc2VDb21wb25lbnRzLmNvbW1zTWFuYWdlci50ZXJtaW5hdGUoKVxuICAgICAgICAgICAgLnRoZW4oKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZSgnY29ubmVjdGVkJyk7XG4gICAgICAgICAgICB9KS5jYXRjaCgocmVzcG9uc2UpID0+IHtcblxuICAgICAgICAgICAgfSkuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0V2FpdGluZyhmYWxzZSlcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1dHRvblRleHQgPSAoKSA9PiB7XG4gICAgICAgIGlmIChzdGF0ZSA9PT0gJ2lkbGUnKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJDb25uZWN0XCI7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09ICdjb25uZWN0ZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJMYXVuY2hcIjtcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gJ3JlYWR5Jykge1xuICAgICAgICAgICAgcmV0dXJuIFwiVGVybWluYXRlXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3BhcmVudC1ibG9jayd9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9IG9uQ2xpY2s9e2J1dHRvbkNsaWNrfT57YnV0dG9uVGV4dCgpfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3NwaW5uZXJDbGFzc2VzfT5cbiAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3RMb2FkZXI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkZyYWdtZW50IiwidXNlU3RhdGUiLCJjbGFzc05hbWVzIiwiVGVzdExvYWRlciIsInByb3BzIiwic3RhdGUiLCJzZXRTdGF0ZSIsIndhaXRpbmciLCJzZXRXYWl0aW5nIiwiY2xhc3NlcyIsInNwaW5uZXJDbGFzc2VzIiwiYnV0dG9uQ2xpY2siLCJldmVudCIsImRvQ29ubmVjdCIsImRvTGF1bmNoIiwiZG9UZXJtaW5hdGUiLCJSb2JvdGljc0V4ZXJjaXNlQ29tcG9uZW50cyIsImNvbW1zTWFuYWdlciIsImNvbm5lY3QiLCJ0aGVuIiwibWVzc2FnZSIsInJlc3BvbnNlIiwiY29uZmlnIiwiSlNPTiIsInBhcnNlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRleHRDb250ZW50IiwiYXBwbGljYXRpb24iLCJwYXJhbXMiLCJjaXJjdWl0IiwibGF1bmNoX2ZpbGUiLCJsYXVuY2giLCJpbnRlcnBvbGF0ZSIsInRlcm1pbmF0ZSIsImJ1dHRvblRleHQiXSwic291cmNlUm9vdCI6IiJ9