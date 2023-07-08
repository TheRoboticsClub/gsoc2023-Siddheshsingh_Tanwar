"use strict";
(self["webpackChunkreact_frontend"] = self["webpackChunkreact_frontend"] || []).push([["exercises_static_exercises_python_web_ide_react-components_TestShowScreen_js"],{

/***/ "../exercises/static/exercises/python_web_ide/react-components/TestShowScreen.js":
/*!***************************************************************************************!*\
  !*** ../exercises/static/exercises/python_web_ide/react-components/TestShowScreen.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../../node_modules/react/index.js");
/* harmony import */ var _css_TestShowScreen_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/TestShowScreen.css */ "../exercises/static/exercises/python_web_ide/react-components/css/TestShowScreen.css");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../../../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "../../../../node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var TestShowScreen = function TestShowScreen(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    image = _React$useState2[0],
    setImage = _React$useState2[1];
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(""),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    code = _React$useState4[0],
    setCode = _React$useState4[1];
  var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    "test-show-screen": true
  });
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    console.log("TestShowScreen subscribing to ['update'] events");
    setImage("https://via.placeholder.com/800x600.png?text=No%20image%20received%20from%20exercise");
    var callback = function callback(message) {
      var update = message.data.update;
      if (update.image) {
        var _image = JSON.parse(update.image);
        setImage("data:image/png;base64,".concat(_image.image));
      } else {
        setImage("https://via.placeholder.com/800x600.png?text=No%20image%20received%20from%20exercise");
      }
    };
    RoboticsExerciseComponents.commsManager.subscribe([RoboticsExerciseComponents.commsManager.events.UPDATE], callback);
    return function () {
      console.log("TestShowScreen unsubscribing from ['state-changed'] events");
      RoboticsExerciseComponents.commsManager.unsubscribe([RoboticsExerciseComponents.commsManager.events.UPDATE], callback);
    };
  }, []);
  var changeCode = function changeCode(event) {
    setCode(event.target.value);
  };
  var sendCode = function sendCode(event) {
    RoboticsExerciseComponents.commsManager.send("load", {
      code: code
    }).then(function (message) {
      console.log("code loaded");
    })["catch"](function (response) {
      console.error(response);
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "panel-parent",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "panel",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("textarea", {
        value: code,
        onChange: changeCode,
        cols: 80
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: classes,
        onClick: sendCode,
        children: "Load code"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "panel",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
        src: image,
        alt: "Exercise screen",
        className: classes
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestShowScreen);

/***/ }),

/***/ "../exercises/static/exercises/python_web_ide/react-components/css/TestShowScreen.css":
/*!********************************************************************************************!*\
  !*** ../exercises/static/exercises/python_web_ide/react-components/css/TestShowScreen.css ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvZXhlcmNpc2VzX3N0YXRpY19leGVyY2lzZXNfcHl0aG9uX3dlYl9pZGVfcmVhY3QtY29tcG9uZW50c19UZXN0U2hvd1NjcmVlbl9qcy5iNzM1NTI0My5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDSjtBQUNFO0FBQUE7QUFBQTtBQUVwQyxJQUFNRyxjQUFjLEdBQUcsU0FBakJBLGNBQWMsQ0FBSUMsS0FBSyxFQUFLO0VBQzlCLHNCQUEwQkosMkNBQWMsQ0FBQyxJQUFJLENBQUM7SUFBQTtJQUF2Q00sS0FBSztJQUFFQyxRQUFRO0VBQ3RCLHVCQUF3QlAsMkNBQWMsQ0FBQyxFQUFFLENBQUM7SUFBQTtJQUFuQ1EsSUFBSTtJQUFFQyxPQUFPO0VBRXBCLElBQU1DLE9BQU8sR0FBR1IsaURBQVUsQ0FBQztJQUN2QixrQkFBa0IsRUFBRTtFQUN4QixDQUFDLENBQUM7RUFFRkYsNENBQWUsQ0FBQyxZQUFNO0lBQ2xCWSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpREFBaUQsQ0FBQztJQUM5RE4sUUFBUSxDQUFDLHNGQUFzRixDQUFDO0lBRWhHLElBQU1PLFFBQVEsR0FBRyxTQUFYQSxRQUFRLENBQUlDLE9BQU8sRUFBSztNQUMxQixJQUFNQyxNQUFNLEdBQUdELE9BQU8sQ0FBQ0UsSUFBSSxDQUFDRCxNQUFNO01BQ2xDLElBQUlBLE1BQU0sQ0FBQ1YsS0FBSyxFQUFFO1FBQ2QsSUFBTUEsTUFBSyxHQUFHWSxJQUFJLENBQUNDLEtBQUssQ0FBQ0gsTUFBTSxDQUFDVixLQUFLLENBQUM7UUFDdENDLFFBQVEsaUNBQTBCRCxNQUFLLENBQUNBLEtBQUssRUFBRztNQUNwRCxDQUFDLE1BQU07UUFDSEMsUUFBUSxDQUFDLHNGQUFzRixDQUFDO01BQ3BHO0lBQ0osQ0FBQztJQUVEYSwwQkFBMEIsQ0FBQ0MsWUFBWSxDQUFDQyxTQUFTLENBQUMsQ0FDMUNGLDBCQUEwQixDQUFDQyxZQUFZLENBQUNFLE1BQU0sQ0FBQ0MsTUFBTSxDQUN4RCxFQUNEVixRQUFRLENBQUM7SUFFYixPQUFPLFlBQU07TUFDVEYsT0FBTyxDQUFDQyxHQUFHLENBQUMsNERBQTRELENBQUM7TUFDekVPLDBCQUEwQixDQUFDQyxZQUFZLENBQUNJLFdBQVcsQ0FBQyxDQUM1Q0wsMEJBQTBCLENBQUNDLFlBQVksQ0FBQ0UsTUFBTSxDQUFDQyxNQUFNLENBQ3hELEVBQ0RWLFFBQVEsQ0FBQztJQUNqQixDQUFDO0VBQ0wsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLElBQU1ZLFVBQVUsR0FBRyxTQUFiQSxVQUFVLENBQUlDLEtBQUssRUFBSztJQUMxQmxCLE9BQU8sQ0FBQ2tCLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7RUFDL0IsQ0FBQztFQUVELElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFRLENBQUlILEtBQUssRUFBSztJQUN4QlAsMEJBQTBCLENBQUNDLFlBQVksQ0FBQ1UsSUFBSSxDQUFDLE1BQU0sRUFBRTtNQUNqRHZCLElBQUksRUFBRUE7SUFDVixDQUFDLENBQUMsQ0FBQ3dCLElBQUksQ0FBQyxVQUFBakIsT0FBTyxFQUFJO01BQ2ZILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUM5QixDQUFDLENBQUMsU0FBTSxDQUFDLFVBQUFvQixRQUFRLEVBQUk7TUFDakJyQixPQUFPLENBQUNzQixLQUFLLENBQUNELFFBQVEsQ0FBQztJQUMzQixDQUFDLENBQUM7RUFDTixDQUFDO0VBRUQsb0JBQ0k7SUFBSyxTQUFTLEVBQUUsY0FBZTtJQUFBLHdCQUMzQjtNQUFLLFNBQVMsRUFBRSxPQUFRO01BQUEsd0JBQ3BCO1FBQVUsS0FBSyxFQUFFekIsSUFBSztRQUFDLFFBQVEsRUFBRWtCLFVBQVc7UUFBQyxJQUFJLEVBQUU7TUFBRyxFQUFFLGVBQ3hEO1FBQUssU0FBUyxFQUFFaEIsT0FBUTtRQUFDLE9BQU8sRUFBRW9CLFFBQVM7UUFBQSxVQUFDO01BQVMsRUFBTTtJQUFBLEVBQ3pELGVBQ047TUFBSyxTQUFTLEVBQUUsT0FBUTtNQUFBLHVCQUNwQjtRQUFLLEdBQUcsRUFBRXhCLEtBQU07UUFBQyxHQUFHLEVBQUUsaUJBQWtCO1FBQUMsU0FBUyxFQUFFSTtNQUFRO0lBQUUsRUFDNUQ7RUFBQSxFQUNKO0FBRWQsQ0FBQztBQUVELGlFQUFlUCxjQUFjOzs7Ozs7Ozs7OztBQ25FN0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdF9mcm9udGVuZC8uLi9leGVyY2lzZXMvc3RhdGljL2V4ZXJjaXNlcy9weXRob25fd2ViX2lkZS9yZWFjdC1jb21wb25lbnRzL1Rlc3RTaG93U2NyZWVuLmpzIiwid2VicGFjazovL3JlYWN0X2Zyb250ZW5kLy4uL2V4ZXJjaXNlcy9zdGF0aWMvZXhlcmNpc2VzL3B5dGhvbl93ZWJfaWRlL3JlYWN0LWNvbXBvbmVudHMvY3NzL1Rlc3RTaG93U2NyZWVuLmNzcz80YjBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0ZyYWdtZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAnLi9jc3MvVGVzdFNob3dTY3JlZW4uY3NzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbmNvbnN0IFRlc3RTaG93U2NyZWVuID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbY29kZSwgc2V0Q29kZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICAgICAgXCJ0ZXN0LXNob3ctc2NyZWVuXCI6IHRydWUsXG4gICAgfSk7XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRlc3RTaG93U2NyZWVuIHN1YnNjcmliaW5nIHRvIFsndXBkYXRlJ10gZXZlbnRzXCIpO1xuICAgICAgICBzZXRJbWFnZShcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS84MDB4NjAwLnBuZz90ZXh0PU5vJTIwaW1hZ2UlMjByZWNlaXZlZCUyMGZyb20lMjBleGVyY2lzZVwiKTtcblxuICAgICAgICBjb25zdCBjYWxsYmFjayA9IChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cGRhdGUgPSBtZXNzYWdlLmRhdGEudXBkYXRlO1xuICAgICAgICAgICAgaWYgKHVwZGF0ZS5pbWFnZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gSlNPTi5wYXJzZSh1cGRhdGUuaW1hZ2UpO1xuICAgICAgICAgICAgICAgIHNldEltYWdlKGBkYXRhOmltYWdlL3BuZztiYXNlNjQsJHtpbWFnZS5pbWFnZX1gKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0SW1hZ2UoXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vODAweDYwMC5wbmc/dGV4dD1ObyUyMGltYWdlJTIwcmVjZWl2ZWQlMjBmcm9tJTIwZXhlcmNpc2VcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgUm9ib3RpY3NFeGVyY2lzZUNvbXBvbmVudHMuY29tbXNNYW5hZ2VyLnN1YnNjcmliZShbXG4gICAgICAgICAgICAgICAgUm9ib3RpY3NFeGVyY2lzZUNvbXBvbmVudHMuY29tbXNNYW5hZ2VyLmV2ZW50cy5VUERBVEVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBjYWxsYmFjayk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGVzdFNob3dTY3JlZW4gdW5zdWJzY3JpYmluZyBmcm9tIFsnc3RhdGUtY2hhbmdlZCddIGV2ZW50c1wiKTtcbiAgICAgICAgICAgIFJvYm90aWNzRXhlcmNpc2VDb21wb25lbnRzLmNvbW1zTWFuYWdlci51bnN1YnNjcmliZShbXG4gICAgICAgICAgICAgICAgICAgIFJvYm90aWNzRXhlcmNpc2VDb21wb25lbnRzLmNvbW1zTWFuYWdlci5ldmVudHMuVVBEQVRFXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBjaGFuZ2VDb2RlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldENvZGUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2VuZENvZGUgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgUm9ib3RpY3NFeGVyY2lzZUNvbXBvbmVudHMuY29tbXNNYW5hZ2VyLnNlbmQoXCJsb2FkXCIsIHtcbiAgICAgICAgICAgIGNvZGU6IGNvZGVcbiAgICAgICAgfSkudGhlbihtZXNzYWdlID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29kZSBsb2FkZWRcIik7XG4gICAgICAgIH0pLmNhdGNoKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJwYW5lbC1wYXJlbnRcIn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJwYW5lbFwifT5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e2NvZGV9IG9uQ2hhbmdlPXtjaGFuZ2VDb2RlfSBjb2xzPXs4MH0vPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfSBvbkNsaWNrPXtzZW5kQ29kZX0+TG9hZCBjb2RlPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInBhbmVsXCJ9PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gYWx0PXtcIkV4ZXJjaXNlIHNjcmVlblwifSBjbGFzc05hbWU9e2NsYXNzZXN9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVzdFNob3dTY3JlZW47IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlJlYWN0IiwiRnJhZ21lbnQiLCJjbGFzc05hbWVzIiwiVGVzdFNob3dTY3JlZW4iLCJwcm9wcyIsInVzZVN0YXRlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImNvZGUiLCJzZXRDb2RlIiwiY2xhc3NlcyIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJjYWxsYmFjayIsIm1lc3NhZ2UiLCJ1cGRhdGUiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwiUm9ib3RpY3NFeGVyY2lzZUNvbXBvbmVudHMiLCJjb21tc01hbmFnZXIiLCJzdWJzY3JpYmUiLCJldmVudHMiLCJVUERBVEUiLCJ1bnN1YnNjcmliZSIsImNoYW5nZUNvZGUiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwic2VuZENvZGUiLCJzZW5kIiwidGhlbiIsInJlc3BvbnNlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9