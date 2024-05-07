/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --primary-color: #ffffff;
  --secondary-color: #451757;
  --critical-color: #9e5651;
  --urgent-color: #a78b54;
  --routine-color: #4c7a4a;
  --text-color: #000000;
  --nav-text-color: #dfa553;
  --form-color: #dff3e4;
  --deleteBtn-border: rgb(201, 97, 97);
}
* {
  padding: 0px;
  margin: 0px;
  min-width: 0;
}
.body {
  background-color: black;
}
button {
  width: 30px;
  height: 30px;
  border-radius: 8px;
  flex-shrink: 0;
  border-width: 2px;
  border-color: var(--nav-text-color);
}
.deleteBtn {
  border-radius: 8px;
  border-width: 2px;
  width: 20px;
  height: 20px;
  border-color: var(--deleteBtn-border);
  background-color: rgb(190, 81, 81);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  position: absolute;
  outline: inherit;
  top: 8px;
  right: 8px;
}
.mainWrapper {
  display: flex;
  height: 100vh;
  width: 100vw;
}
.navWrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 6px;
  width: 15%;
  background-color: var(--secondary-color);
  color: var(--nav-text-color);
}
.NavProjPanelWrapper {
  gap: 6px;
}
.navItem {
  padding-left: 8px;
}
.projBodyWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  background-color: var(--primary-color);
}
.taskWrapper,
.projWrapper,
.todayWrapper {
  display: flex;
  gap: 6px;
  color: var(--text-color);
}
.projWrapper {
  flex-direction: column;
  position: relative;
  min-height: 150px;
  width: 100%;
  justify-content: space-between;
}
.projName {
  font-size: 36px;
  font-weight: 600;
}
.projDate {
  font-size: 24px;
}
.projDesc {
  font-size: 18px;
  padding: 18px;
}
.projItem {
}
.taskWrapper {
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  border-radius: 12px;
  margin-left: 16px;
}
.taskName {
}

.taskItem {
  width: 100px;
  height: 25px;
  margin: 12px;
}
.taskDesc {
  width: 50%;
}
.taskDue {
  width: 15%;
}
.taskCircle {
  width: 25px;
  height: 25px;
  margin-left: 16px;
  border-radius: 50%;
}
.taskCheckMark {
  height: 20px;
  width: 20px;
  opacity: 10%;
}
.taskCheckMark:hover {
  opacity: 100%;
}
.todayWrapper {
  flex-direction: column;
  width: 100%;
}
.formWrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--text-color);
  width: 400px;
  border-radius: 8px;
  background-color: var(--form-color);
  border-width: 2px;
  border-color: var(--text-color);
  border-style: solid;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  box-shadow: rgba(0, 0, 0, 0.89) 0px 5px 15px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 12px;
  border-radius: 0px;
}
.addFormName {
  height: 50px;
  font-size: 20px;
  border-style: none;
  background-color: var(--form-color);
}
.addFormDesc {
  height: 40px;
  font-size: 12px;
  border-style: none;
  display: inline-block;
  background-color: var(--form-color);
}
.addFormDate {
  border-radius: 4px;
  height: 20px;
  width: 150px;
  border-style: solid;
  border-width: 1px;
  background-color: var(--form-color);
}
.addFormPrio {
  border-radius: 4px;
  height: 20px;
  width: 150px;
  border-style: solid;
  border-width: 1px;
  background-color: var(--form-color);
}
.dateFormWrapper {
  display: flex;
  gap: 8px;
}
.Critical {
  background-color: var(--critical-color);
}
.Urgent {
  background-color: var(--urgent-color);
}
.Routine {
  background-color: var(--routine-color);
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,0BAA0B;EAC1B,yBAAyB;EACzB,uBAAuB;EACvB,wBAAwB;EACxB,qBAAqB;EACrB,yBAAyB;EACzB,qBAAqB;EACrB,oCAAoC;AACtC;AACA;EACE,YAAY;EACZ,WAAW;EACX,YAAY;AACd;AACA;EACE,uBAAuB;AACzB;AACA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,cAAc;EACd,iBAAiB;EACjB,mCAAmC;AACrC;AACA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,WAAW;EACX,YAAY;EACZ,qCAAqC;EACrC,kCAAkC;EAClC;uCACqC;EACrC,kBAAkB;EAClB,gBAAgB;EAChB,QAAQ;EACR,UAAU;AACZ;AACA;EACE,aAAa;EACb,aAAa;EACb,YAAY;AACd;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,QAAQ;EACR,UAAU;EACV,wCAAwC;EACxC,4BAA4B;AAC9B;AACA;EACE,QAAQ;AACV;AACA;EACE,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;EACb,UAAU;EACV,iBAAiB;EACjB,kBAAkB;EAClB,sCAAsC;AACxC;AACA;;;EAGE,aAAa;EACb,QAAQ;EACR,wBAAwB;AAC1B;AACA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,iBAAiB;EACjB,WAAW;EACX,8BAA8B;AAChC;AACA;EACE,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;EACf,aAAa;AACf;AACA;AACA;AACA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;EACnB,8BAA8B;EAC9B,aAAa;EACb,mBAAmB;EACnB,iBAAiB;AACnB;AACA;AACA;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,YAAY;AACd;AACA;EACE,UAAU;AACZ;AACA;EACE,UAAU;AACZ;AACA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,WAAW;EACX,YAAY;AACd;AACA;EACE,aAAa;AACf;AACA;EACE,sBAAsB;EACtB,WAAW;AACb;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,wBAAwB;EACxB,YAAY;EACZ,kBAAkB;EAClB,mCAAmC;EACnC,iBAAiB;EACjB,+BAA+B;EAC/B,mBAAmB;EACnB,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,aAAa;EACb,4CAA4C;AAC9C;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,mCAAmC;AACrC;AACA;EACE,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,qBAAqB;EACrB,mCAAmC;AACrC;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;EACjB,mCAAmC;AACrC;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;EACjB,mCAAmC;AACrC;AACA;EACE,aAAa;EACb,QAAQ;AACV;AACA;EACE,uCAAuC;AACzC;AACA;EACE,qCAAqC;AACvC;AACA;EACE,sCAAsC;AACxC","sourcesContent":[":root {\n  --primary-color: #ffffff;\n  --secondary-color: #451757;\n  --critical-color: #9e5651;\n  --urgent-color: #a78b54;\n  --routine-color: #4c7a4a;\n  --text-color: #000000;\n  --nav-text-color: #dfa553;\n  --form-color: #dff3e4;\n  --deleteBtn-border: rgb(201, 97, 97);\n}\n* {\n  padding: 0px;\n  margin: 0px;\n  min-width: 0;\n}\n.body {\n  background-color: black;\n}\nbutton {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  border-width: 2px;\n  border-color: var(--nav-text-color);\n}\n.deleteBtn {\n  border-radius: 8px;\n  border-width: 2px;\n  width: 20px;\n  height: 20px;\n  border-color: var(--deleteBtn-border);\n  background-color: rgb(190, 81, 81);\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,\n    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n  position: absolute;\n  outline: inherit;\n  top: 8px;\n  right: 8px;\n}\n.mainWrapper {\n  display: flex;\n  height: 100vh;\n  width: 100vw;\n}\n.navWrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  gap: 6px;\n  width: 15%;\n  background-color: var(--secondary-color);\n  color: var(--nav-text-color);\n}\n.NavProjPanelWrapper {\n  gap: 6px;\n}\n.navItem {\n  padding-left: 8px;\n}\n.projBodyWrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n  width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: var(--primary-color);\n}\n.taskWrapper,\n.projWrapper,\n.todayWrapper {\n  display: flex;\n  gap: 6px;\n  color: var(--text-color);\n}\n.projWrapper {\n  flex-direction: column;\n  position: relative;\n  min-height: 150px;\n  width: 100%;\n  justify-content: space-between;\n}\n.projName {\n  font-size: 36px;\n  font-weight: 600;\n}\n.projDate {\n  font-size: 24px;\n}\n.projDesc {\n  font-size: 18px;\n  padding: 18px;\n}\n.projItem {\n}\n.taskWrapper {\n  position: relative;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  height: 100px;\n  border-radius: 12px;\n  margin-left: 16px;\n}\n.taskName {\n}\n\n.taskItem {\n  width: 100px;\n  height: 25px;\n  margin: 12px;\n}\n.taskDesc {\n  width: 50%;\n}\n.taskDue {\n  width: 15%;\n}\n.taskCircle {\n  width: 25px;\n  height: 25px;\n  margin-left: 16px;\n  border-radius: 50%;\n}\n.taskCheckMark {\n  height: 20px;\n  width: 20px;\n  opacity: 10%;\n}\n.taskCheckMark:hover {\n  opacity: 100%;\n}\n.todayWrapper {\n  flex-direction: column;\n  width: 100%;\n}\n.formWrapper {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  color: var(--text-color);\n  width: 400px;\n  border-radius: 8px;\n  background-color: var(--form-color);\n  border-width: 2px;\n  border-color: var(--text-color);\n  border-style: solid;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 9999;\n  box-shadow: rgba(0, 0, 0, 0.89) 0px 5px 15px;\n}\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin: 12px;\n  border-radius: 0px;\n}\n.addFormName {\n  height: 50px;\n  font-size: 20px;\n  border-style: none;\n  background-color: var(--form-color);\n}\n.addFormDesc {\n  height: 40px;\n  font-size: 12px;\n  border-style: none;\n  display: inline-block;\n  background-color: var(--form-color);\n}\n.addFormDate {\n  border-radius: 4px;\n  height: 20px;\n  width: 150px;\n  border-style: solid;\n  border-width: 1px;\n  background-color: var(--form-color);\n}\n.addFormPrio {\n  border-radius: 4px;\n  height: 20px;\n  width: 150px;\n  border-style: solid;\n  border-width: 1px;\n  background-color: var(--form-color);\n}\n.dateFormWrapper {\n  display: flex;\n  gap: 8px;\n}\n.Critical {\n  background-color: var(--critical-color);\n}\n.Urgent {\n  background-color: var(--urgent-color);\n}\n.Routine {\n  background-color: var(--routine-color);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DomManip.js":
/*!*************************!*\
  !*** ./src/DomManip.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DomController: () => (/* binding */ DomController)
/* harmony export */ });
/* harmony import */ var _taskModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskModule.js */ "./src/taskModule.js");
/* harmony import */ var _projectModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectModule.js */ "./src/projectModule.js");
/* harmony import */ var _images_Checkmark_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/Checkmark.png */ "./src/images/Checkmark.png");
/* harmony import */ var _localStorageHandler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorageHandler.js */ "./src/localStorageHandler.js");





//
//Controls the dom for the project
//
class DomController {
  constructor() {
    this.storageHandler = new _localStorageHandler_js__WEBPACK_IMPORTED_MODULE_3__.StorageHandler();
  }
  //
  //Handle the setup of the page pre-project injection
  //
  GenerateDomStructure(defaultProj) {
    const mainProjPanelWrapper = document.createElement("div");
    mainProjPanelWrapper.classList.add("mainWrapper");
    document.body.appendChild(mainProjPanelWrapper);

    const loadedProjs = this.storageHandler.loadFromLocalStorage();

    this.GenerateNavPanel(mainProjPanelWrapper, loadedProjs);
    this.GenerateBodyPanel(mainProjPanelWrapper);
    this.GenerateTodayPanel(loadedProjs);
  }

  GenerateNavPanel(mainWrapper, loadedProjs) {
    //
    // Handle the generation of the nav panel and all its components.
    //
    const navPanelWrapper = document.createElement("div");
    navPanelWrapper.classList.add("nav");
    navPanelWrapper.classList.add("navWrapper");

    //Title and time panel

    const navPanelMainTitle = document.createElement("div");
    navPanelMainTitle.classList.add("navTitle", "navItem");
    navPanelMainTitle.textContent = "Today";
    navPanelWrapper.appendChild(navPanelMainTitle);

    navPanelMainTitle.addEventListener("click", () =>
      this.GenerateTodayPanel(loadedProjs)
    );

    // const navPanelMainDate = document.createElement("div");
    // navPanelMainDate.classList.add("navDate", "navItem");

    // const currentDate = new Date();
    // const formattedDate = format(currentDate, "yyyy-MM-dd");
    // navPanelMainDate.textContent = formattedDate;
    //navPanelMainTitle.appendChild(navPanelMainDate);

    //Project panels

    const navNewProjectPanelWrapper = document.createElement("div");
    navNewProjectPanelWrapper.classList.add(
      "navNewProjectPanelWrapper",
      "navItem"
    );
    navNewProjectPanelWrapper.textContent = "Add New Project";
    //this.GenerateAddButton(navNewProjectPanelWrapper);
    navNewProjectPanelWrapper.addEventListener("click", () =>
      this.GenerateAddForm(mainWrapper)
    );

    navPanelWrapper.appendChild(navNewProjectPanelWrapper);

    const navProjectPanelWrapper = document.createElement("div");
    navProjectPanelWrapper.classList.add("NavProjPanelWrapper");
    navPanelWrapper.appendChild(navProjectPanelWrapper);

    //Options panel > includes help and settings

    const navOptionsWrapper = document.createElement("div");
    navOptionsWrapper.classList.add("optionsWrapper");

    //Generate the setting banner in the nav bar

    const navSettingsWrapper = document.createElement("div");
    navSettingsWrapper.classList.add("navItem");

    const navSettings = document.createElement("div");
    navSettings.textContent = "Settings";
    navSettingsWrapper.appendChild(navSettings);

    const navSettingsIcon = document.createElement("img");
    navSettingsIcon.src = "";
    navSettingsIcon.classList.add("navIcon");
    navSettingsWrapper.appendChild(navSettingsIcon);

    navOptionsWrapper.appendChild(navSettingsWrapper);

    //Generate the help banner in the nav bar

    const navHelpWrapper = document.createElement("div");
    navHelpWrapper.classList.add("navItem");

    const navHelp = document.createElement("div");
    navHelp.textContent = "Help";
    navHelpWrapper.appendChild(navHelp);

    const navHelpIcon = document.createElement("img");
    navHelpIcon.src = "";
    navHelpIcon.classList.add("navIcon");
    navHelpWrapper.appendChild(navHelpIcon);

    navOptionsWrapper.appendChild(navHelpWrapper);

    navPanelWrapper.appendChild(navOptionsWrapper);

    mainWrapper.appendChild(navPanelWrapper);

    //Load the saved projects, and add them to the nav bar

    this.LoadProjsToNavPanel(loadedProjs);
  }

  LoadProjsToNavPanel(loadedProjs) {
    if (loadedProjs) {
      loadedProjs.forEach((proj) => {
        this.AddNewNavPanelProj(proj);
      });
    }
  }

  AddNewNavPanelProj(project) {
    //This eventually should allow you to open specific projects onclick.
    const navProjectPanelWrapper = document.querySelector(
      ".NavProjPanelWrapper"
    );
    const ExistsInNav = navProjectPanelWrapper.querySelector(
      ".proj" + project.projectId
    );
    if (!ExistsInNav) {
      const navDefProj = document.createElement("div");

      navDefProj.textContent = project.projectName;
      navDefProj.classList.add(
        "navItem",
        "proj" + project.projectId,
        project.projectPrio
      );

      navDefProj.addEventListener("click", () => {
        const bodyProjWrapper = document.querySelector(".projBodyWrapper");
        this.GenerateProjectPanel(bodyProjWrapper, project);
      });

      navProjectPanelWrapper.appendChild(navDefProj);
    }
  }

  DeleteNavPanelProj(projectName) {
    // const navProjectPanelWrapper = document.querySelector(
    //   ".NavProjPanelWrapper"
    // );
    const navProjectToDelete = document.querySelector(
      `.${projectName}.navItem`
    );
    if (navProjectToDelete) {
      navProjectToDelete.parentNode.removeChild(navProjectToDelete);
    }
  }

  GenerateBodyPanel(mainWrapper) {
    const AddNewProjWrapper = document.createElement("div");
    AddNewProjWrapper.classList.add("projBodyWrapper");
    mainWrapper.appendChild(AddNewProjWrapper);
  }

  GenerateTodayPanel(projectStorage) {
    const mainWrapper = document.querySelector(".projBodyWrapper");
    if (!projectStorage || mainWrapper.querySelector(".todayWrapper")) {
      //this.GenerateSplashPanel();
    } else {
      const projWrapper = mainWrapper.querySelector(".projWrapper");
      if (projWrapper) {
        this.RemovePanel(projWrapper);
      }
      const todayWrapper = document.createElement("div");
      todayWrapper.classList.add("todayWrapper");
      const today = new Date();
      //
      projectStorage.forEach((proj) => {
        if (proj.projectTasks.length > 0) {
          //
          //Check if there are tasks due today
          //
          const tasksDueToday = proj.projectTasks.some((task) => {
            return (
              task.dueDate.getDate() === today.getDate() &&
              task.dueDate.getMonth() === today.getMonth() &&
              task.dueDate.getFullYear() === today.getFullYear()
            );
          });
          //Add a project header
          if (tasksDueToday) {
            const projName = document.createElement("div");
            projName.textContent = proj.projectName;
            projName.classList.add("projName", "projItem");
            todayWrapper.appendChild(projName);
            proj.projectTasks.forEach((task) => {
              if (
                task.dueDate.getDate() === today.getDate() &&
                task.dueDate.getMonth() === today.getMonth() &&
                task.dueDate.getFullYear() === today.getFullYear()
              ) {
                const taskWrapper = document.createElement("div");
                this.GenerateTaskPanel(taskWrapper, task, true);
                todayWrapper.appendChild(taskWrapper);
              }
            });
          }
        }
      });
      mainWrapper.appendChild(todayWrapper);
    }
  }

  GenerateProjectPanel(Wrapper, Project) {
    const projOpen = document.querySelector(".projWrapper");
    const todayWrapperOpen = document.querySelector(".todayWrapper");
    if (todayWrapperOpen) {
      this.RemovePanel(todayWrapperOpen);
    }
    if (!projOpen) {
      const projWrapper = document.createElement("div");
      projWrapper.classList.add("projWrapper");
      projWrapper.setAttribute("data-project-id", Project.projectId);

      const projName = document.createElement("div");
      projName.textContent = Project.projectName;
      projName.classList.add("projName", "projItem");
      projWrapper.appendChild(projName);

      const projDate = document.createElement("div");
      projDate.textContent =
        "Due Date: " + Project.projectDue.toLocaleDateString();
      projDate.classList.add("projDate", "projItem");
      projWrapper.appendChild(projDate);

      const projectDesc = document.createElement("div");
      projectDesc.textContent = Project.projectDesc;
      projectDesc.classList.add("projDesc", "projItem");
      projWrapper.appendChild(projectDesc);

      const projButtonWrapper = document.createElement("div");

      this.GenerateAddButton(projButtonWrapper, Project);
      this.GenerateDeleteButton(projWrapper, undefined, true);

      projWrapper.appendChild(projButtonWrapper);

      if (Project.projectTasks.length === 0) {
      } else {
        Project.projectTasks.forEach((element) => {
          const taskWrapper = document.createElement("div");
          this.GenerateTaskPanel(taskWrapper, element);

          projWrapper.appendChild(taskWrapper);
        });
      }
      this.AddNewNavPanelProj(Project);

      Wrapper.appendChild(projWrapper);
    }
  }

  // extractProjectInfo(projectWrapper) {
  //   // Retrieve project name from the data attribute
  //   const projectName = projectWrapper.getAttribute("data-project-name");

  //   // Find the Project instance associated with the project name
  //   return projects.find((project) => project.name === projectName);
  // }

  GenerateTaskPanel(Wrapper, task, todayPanelFlag = false) {
    //
    //Given a task and a wrapper, generate a panel that handles info about the task.
    //
    Wrapper.classList.add("taskWrapper");

    if (!todayPanelFlag)
      this.GenerateDeleteButton(Wrapper, task.taskPrio, true);

    const taskName = document.createElement("div");
    taskName.textContent = task.taskName;
    taskName.classList.add("taskName", "taskItem");

    const taskDate = document.createElement("div");
    taskDate.textContent = task.taskDue.toLocaleDateString();
    taskDate.classList.add("taskDate", "taskItem");

    const taskDesc = document.createElement("div");
    taskDesc.textContent = task.taskDesc;
    taskDesc.classList.add("taskDesc", "taskItem");

    Wrapper.appendChild(taskName);
    Wrapper.appendChild(taskDate);
    Wrapper.appendChild(taskDesc);
  }

  AddNewTask(id, name, description, dueDate, priority, project) {
    // Create a new Task object
    const newTask = new _taskModule_js__WEBPACK_IMPORTED_MODULE_0__.Task(id, name, description, dueDate, priority, project);

    // Generate a new task panel for the new task
    const taskWrapper = document.createElement("div");
    this.GenerateTaskPanel(taskWrapper, newTask);

    // Append the task panel to the appropriate location in the DOM
    project.tasks.push(newTask);
    const projWrapper = document.querySelector(
      `[data-project-id="${project.id}"]`
    );

    this.storageHandler.saveToLocalStorage(project);

    //Check to see if we need to enlarge the project container
    //this.ModifyTaskHeight(projWrapper, project);

    projWrapper.appendChild(taskWrapper);
  }

  AddNewProject(id, name, description, dueDate, priority) {
    // Create a new proj object
    const newProject = new _projectModule_js__WEBPACK_IMPORTED_MODULE_1__.Project(id, name, description, dueDate, priority);
    this.storageHandler.saveToLocalStorage(newProject);
    const projWrapper = document.querySelector(".projBodyWrapper");

    this.GenerateProjectPanel(projWrapper, newProject);
  }

  GenerateDeleteButton(wrapper, taskPrio, deleteDataFlag = false) {
    const Delete = document.createElement("button");

    Delete.addEventListener("click", () =>
      this.RemovePanel(wrapper, deleteDataFlag)
    );

    if (taskPrio !== undefined && taskPrio !== null) {
      Delete.classList.add("taskCircle", taskPrio, "taskItem");
      const deleteCheckMark = new Image();
      deleteCheckMark.classList.add("taskCheckMark");
      deleteCheckMark.src = _images_Checkmark_png__WEBPACK_IMPORTED_MODULE_2__;
      Delete.appendChild(deleteCheckMark);
    } else {
      Delete.classList.add("deleteBtn");
      Delete.textContent = " X ";
    }

    wrapper.appendChild(Delete);
  }

  GenerateAddButton(wrapper, project) {
    const Add = document.createElement("button");
    Add.classList.add("addBtn");
    Add.textContent = " + ";
    Add.addEventListener("click", () => this.GenerateAddForm(wrapper, project));

    wrapper.appendChild(Add);
  }

  // Remove a panel and all its children from the DOM
  //This should be checking whats the closest proj/task panel and deleting down
  RemovePanel(panel, deleteDataFlag = false) {
    if (!panel) return;
    if (panel.classList.contains("projWrapper")) {
      // Call the function to delete the corresponding navigation panel
      this.DeleteNavPanelProj("proj" + panel.dataset.projectId);
    }
    while (panel.firstChild) {
      panel.removeChild(panel.firstChild);
    }

    panel.parentNode.removeChild(panel);

    if (deleteDataFlag)
      this.storageHandler.removeProjectFromLocalStorage(
        panel.dataset.projectId
      );
  }

  //Generate a form that allows you to add a new project, or task
  //should have a submit button at the bottom, and a close button.
  GenerateAddForm(wrapper, project) {
    const addFormOpen = document.querySelector(".formWrapper");

    if (!addFormOpen) {
      const formWrapper = document.createElement("div");
      formWrapper.classList.add("formWrapper");

      const formHeaderWrapper = document.createElement("div");
      formHeaderWrapper.classList.add("formHeaderWrapper");

      // const title = document.createElement("div");
      // title.textContent = "Add a new task or project";
      // formHeaderWrapper.appendChild(title);

      this.GenerateDeleteButton(formWrapper);

      formWrapper.appendChild(formHeaderWrapper);

      const form = document.createElement("form");

      const inputName = document.createElement("input");
      inputName.classList.add("addFormName");
      inputName.setAttribute("type", "text");
      inputName.setAttribute("name", "textInput");
      inputName.setAttribute("placeholder", "Enter title of project or task");
      form.appendChild(inputName);

      const inputDesc = document.createElement("input");
      inputDesc.classList.add("addFormDesc");
      inputDesc.setAttribute("type", "text");
      inputDesc.setAttribute("desc", "textInput");
      inputDesc.setAttribute("placeholder", "Enter description");
      form.appendChild(inputDesc);

      const dateFormWrapper = document.createElement("div");
      dateFormWrapper.classList.add("dateFormWrapper");

      const inputDate = document.createElement("input");
      inputDate.classList.add("addFormDate");
      inputDate.setAttribute("type", "date");
      inputDate.setAttribute("name", "dateInput");
      dateFormWrapper.appendChild(inputDate);

      const inputPrio = document.createElement("select");
      inputPrio.classList.add("addFormPrio");
      inputPrio.name = "priority";
      const options = ["Critical", "Urgent", "Routine"];

      options.forEach((optionText) => {
        const optionElement = document.createElement("option");
        optionElement.textContent = optionText;
        inputPrio.appendChild(optionElement);
      });
      dateFormWrapper.appendChild(inputPrio);
      form.appendChild(dateFormWrapper);

      const submitButton = document.createElement("button");
      submitButton.textContent = "Submit";
      form.appendChild(submitButton);

      form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Retrieve input values
        const name = inputName.value;
        const description = inputDesc.value;
        const date = inputDate.value;
        const priority = inputPrio.value;

        this.RemovePanel(formWrapper);
        if (!project) {
          //Generate the project with a random ID number
          this.AddNewProject(
            Math.floor(Math.random() * 999999999),
            name,
            description,
            date,
            priority
          );
        } else {
          this.AddNewTask(
            Math.floor(Math.random() * 999999999),
            name,
            description,
            date,
            priority,
            project
          );
        }
      });

      formWrapper.appendChild(form);

      wrapper.appendChild(formWrapper);
    }
  }

  GenerateOnEntry(defaultProj) {
    this.GenerateDomStructure(defaultProj);
  }
}


/***/ }),

/***/ "./src/localStorageHandler.js":
/*!************************************!*\
  !*** ./src/localStorageHandler.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageHandler: () => (/* binding */ StorageHandler)
/* harmony export */ });
/* harmony import */ var _projectModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectModule.js */ "./src/projectModule.js");
/* harmony import */ var _taskModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskModule.js */ "./src/taskModule.js");
// Import necessary functions and classes



class StorageHandler {
  // Function to save projects and tasks to local storage

  saveToLocalStorage(project) {
    let projectsData = localStorage.getItem("projects");
    if (!projectsData) {
      projectsData = {};
    } else {
      projectsData = JSON.parse(projectsData);
    }

    // Serialize tasks before saving
    const serializedTasks = project.tasks.map((task) => ({
      id: task.id,
      name: task.name,
      description: task.description,
      dueDate: task.dueDate,
      priority: task.priority,
    }));

    // Add serialized tasks to the project object
    const serializedProject = {
      id: project.id,
      name: project.name,
      description: project.description,
      dueDate: project.dueDate,
      priority: project.priority,
      tasks: serializedTasks, // Save serialized tasks
    };

    projectsData[project.projectId] = serializedProject;

    localStorage.setItem("projects", JSON.stringify(projectsData));
  }

  // Function to retrieve projects and tasks from local storage
  loadFromLocalStorage() {
    const projectsData = localStorage.getItem("projects");
    if (projectsData) {
      const projects = JSON.parse(projectsData);
      if (projects) {
        const projectObjects = Object.values(projects).map((project) => {
          const tasks = project.tasks.map((taskData) => {
            return new _taskModule_js__WEBPACK_IMPORTED_MODULE_1__.Task(
              taskData.id,
              taskData.name,
              taskData.description,
              new Date(taskData.dueDate),
              taskData.priority,
              project
            );
          });
          return new _projectModule_js__WEBPACK_IMPORTED_MODULE_0__.Project(
            project.id,
            project.name,
            project.description,
            new Date(project.dueDate),
            project.priority,
            tasks
          );
        });
        return projectObjects;
      } else {
        console.error("Projects data in local storage is invalid");
        return [];
      }
    }
  }

  removeProjectFromLocalStorage(projectId) {
    // Retrieve projects data from local storage
    let projectsData = localStorage.getItem("projects");

    if (projectsData) {
      // parse the json data so we have real data
      projectsData = JSON.parse(projectsData);

      delete projectsData[projectId];

      // Update data in local storage
      localStorage.setItem("projects", JSON.stringify(projectsData));
    }
  }

  removeTaskFromLocalStorage(taskId) {
    let projectsData = localStorage.getItem("projects");
    if (projectsData) {
      projectsData = JSON.parse(projectsData);

      // Remove project with the specified id from the object
      const taskIndex = project.tasks.findIndex(
        (task) => task.taskId === taskId
      );
      //index returns -1 if not found
      if (taskIndex !== -1) {
        //remove using splice because we don't want orphan our tasks
        tasks.splice(taskIndex, 1);
      }

      // Update data in local storage
      localStorage.setItem("projects", JSON.stringify(projectsData));
    }
  }
}


/***/ }),

/***/ "./src/projectModule.js":
/*!******************************!*\
  !*** ./src/projectModule.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });

class Project {
  constructor(id, name, description, dueDate, priority, tasks) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.dueDate = new Date(dueDate);
    this.priority = priority;
    this.tasks = tasks ? tasks : [];
  }

  displayDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Description: ${this.description}`);
    console.log(`Due Date: ${this.dueDate}`);
  }

  // Getter methods
  get projectId() {
    return this.id;
  }

  get projectName() {
    return this.name;
  }

  get projectDesc() {
    return this.description;
  }

  get projectDue() {
    return this.dueDate;
  }

  get projectPrio() {
    return this.priority;
  }

  get projectTasks() {
    return this.tasks;
  }

  get DomElement() {
    return this.domElement;
  }

  // Setter methods
  set projectName(newName) {
    this.name = newName;
  }

  set projectDesc(newDesc) {
    this.description = newDesc;
  }

  set projectDue(newDate) {
    this.dueDate = new Date(newDate);
  }

  set projectPrio(newPrio) {
    this.priority = newPrio;
  }

  set projectTasks(newTasks) {
    this.tasks = newTasks;
  }

  set DomElement(element) {
    this.domElement = element;
  }
}


/***/ }),

/***/ "./src/taskModule.js":
/*!***************************!*\
  !*** ./src/taskModule.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });

class Task {
  constructor(id, name, description, dueDate, priority, project) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.dueDate = new Date(dueDate);
    this.priority = priority;
    this.project = project;
    this.domElement = null;
  }
  displayDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Description: ${this.description}`);
    console.log(`Due Date: ${this.dueDate}`);
  }
  //
  //Getters
  //
  get taskName() {
    return this.name;
  }
  get taskDesc() {
    return this.description;
  }
  get taskDue() {
    return this.dueDate;
  }
  get taskPrio() {
    return this.priority;
  }
  get taskProj() {
    return this.project;
  }
  //
  //Setters
  //
  set taskName(newName) {
    this.name = newName;
  }
  set taskDesc(newDesc) {
    this.description = newDesc;
  }
  set taskDue(newDate) {
    this.dueDate = new Date(newDate);
  }
  set taskPrio(newPrio) {
    this.priority = newPrio;
  }
  set taskProj(newProj) {
    this.project = newProj;
  }
}


/***/ }),

/***/ "./src/images/Checkmark.png":
/*!**********************************!*\
  !*** ./src/images/Checkmark.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "226e30f430261fae66b2.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _projectModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectModule.js */ "./src/projectModule.js");
/* harmony import */ var _taskModule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskModule.js */ "./src/taskModule.js");
/* harmony import */ var _DomManip_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DomManip.js */ "./src/DomManip.js");






function OnEntry() {
  const DomManip = new _DomManip_js__WEBPACK_IMPORTED_MODULE_3__.DomController();

  DomManip.GenerateOnEntry();
}

OnEntry();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxPQUFPLGFBQWEsYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxPQUFPLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFlBQVk7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixnREFBSTs7QUFFNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixXQUFXO0FBQ3RDOztB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QUE2QixhQUFhO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcERBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3dCO0FBQ047QUFDTztBQUNaOztBQUVsQztBQUNBLHVCQUF1Qix1REFBYTs7QUFFcEM7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvRG9tTWFuaXAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2xvY2FsU3RvcmFnZUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3Byb2plY3RNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3Rhc2tNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLXByaW1hcnktY29sb3I6ICNmZmZmZmY7XG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjNDUxNzU3O1xuICAtLWNyaXRpY2FsLWNvbG9yOiAjOWU1NjUxO1xuICAtLXVyZ2VudC1jb2xvcjogI2E3OGI1NDtcbiAgLS1yb3V0aW5lLWNvbG9yOiAjNGM3YTRhO1xuICAtLXRleHQtY29sb3I6ICMwMDAwMDA7XG4gIC0tbmF2LXRleHQtY29sb3I6ICNkZmE1NTM7XG4gIC0tZm9ybS1jb2xvcjogI2RmZjNlNDtcbiAgLS1kZWxldGVCdG4tYm9yZGVyOiByZ2IoMjAxLCA5NywgOTcpO1xufVxuKiB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIG1pbi13aWR0aDogMDtcbn1cbi5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5idXR0b24ge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1uYXYtdGV4dC1jb2xvcik7XG59XG4uZGVsZXRlQnRuIHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kZWxldGVCdG4tYm9yZGVyKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MCwgODEsIDgxKTtcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggMnB4IDVweCAtMXB4LFxuICAgIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMXB4IDNweCAtMXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG91dGxpbmU6IGluaGVyaXQ7XG4gIHRvcDogOHB4O1xuICByaWdodDogOHB4O1xufVxuLm1haW5XcmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xufVxuLm5hdldyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZ2FwOiA2cHg7XG4gIHdpZHRoOiAxNSU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1uYXYtdGV4dC1jb2xvcik7XG59XG4uTmF2UHJvalBhbmVsV3JhcHBlciB7XG4gIGdhcDogNnB4O1xufVxuLm5hdkl0ZW0ge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cbi5wcm9qQm9keVdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cbi50YXNrV3JhcHBlcixcbi5wcm9qV3JhcHBlcixcbi50b2RheVdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDZweDtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xufVxuLnByb2pXcmFwcGVyIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5wcm9qTmFtZSB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5wcm9qRGF0ZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5wcm9qRGVzYyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogMThweDtcbn1cbi5wcm9qSXRlbSB7XG59XG4udGFza1dyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG4udGFza05hbWUge1xufVxuXG4udGFza0l0ZW0ge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgbWFyZ2luOiAxMnB4O1xufVxuLnRhc2tEZXNjIHtcbiAgd2lkdGg6IDUwJTtcbn1cbi50YXNrRHVlIHtcbiAgd2lkdGg6IDE1JTtcbn1cbi50YXNrQ2lyY2xlIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi50YXNrQ2hlY2tNYXJrIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgb3BhY2l0eTogMTAlO1xufVxuLnRhc2tDaGVja01hcms6aG92ZXIge1xuICBvcGFjaXR5OiAxMDAlO1xufVxuLnRvZGF5V3JhcHBlciB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZvcm1XcmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgd2lkdGg6IDQwMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm0tY29sb3IpO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgei1pbmRleDogOTk5OTtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjg5KSAwcHggNXB4IDE1cHg7XG59XG5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMnB4O1xuICBtYXJnaW46IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cbi5hZGRGb3JtTmFtZSB7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm0tY29sb3IpO1xufVxuLmFkZEZvcm1EZXNjIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtLWNvbG9yKTtcbn1cbi5hZGRGb3JtRGF0ZSB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtLWNvbG9yKTtcbn1cbi5hZGRGb3JtUHJpbyB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtLWNvbG9yKTtcbn1cbi5kYXRlRm9ybVdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbn1cbi5Dcml0aWNhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNyaXRpY2FsLWNvbG9yKTtcbn1cbi5VcmdlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11cmdlbnQtY29sb3IpO1xufVxuLlJvdXRpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yb3V0aW5lLWNvbG9yKTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG1DQUFtQztBQUNyQztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHFDQUFxQztFQUNyQyxrQ0FBa0M7RUFDbEM7dUNBQ3FDO0VBQ3JDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsUUFBUTtFQUNSLFVBQVU7QUFDWjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLFFBQVE7RUFDUixVQUFVO0VBQ1Ysd0NBQXdDO0VBQ3hDLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsUUFBUTtBQUNWO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixzQ0FBc0M7QUFDeEM7QUFDQTs7O0VBR0UsYUFBYTtFQUNiLFFBQVE7RUFDUix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7RUFDZixhQUFhO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7QUFDQTtBQUNBOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQyxpQkFBaUI7RUFDakIsK0JBQStCO0VBQy9CLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLDRDQUE0QztBQUM5QztBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1DQUFtQztBQUNyQztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixtQ0FBbUM7QUFDckM7QUFDQTtFQUNFLGFBQWE7RUFDYixRQUFRO0FBQ1Y7QUFDQTtFQUNFLHVDQUF1QztBQUN6QztBQUNBO0VBQ0UscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSxzQ0FBc0M7QUFDeENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1wcmltYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1zZWNvbmRhcnktY29sb3I6ICM0NTE3NTc7XFxuICAtLWNyaXRpY2FsLWNvbG9yOiAjOWU1NjUxO1xcbiAgLS11cmdlbnQtY29sb3I6ICNhNzhiNTQ7XFxuICAtLXJvdXRpbmUtY29sb3I6ICM0YzdhNGE7XFxuICAtLXRleHQtY29sb3I6ICMwMDAwMDA7XFxuICAtLW5hdi10ZXh0LWNvbG9yOiAjZGZhNTUzO1xcbiAgLS1mb3JtLWNvbG9yOiAjZGZmM2U0O1xcbiAgLS1kZWxldGVCdG4tYm9yZGVyOiByZ2IoMjAxLCA5NywgOTcpO1xcbn1cXG4qIHtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIG1hcmdpbjogMHB4O1xcbiAgbWluLXdpZHRoOiAwO1xcbn1cXG4uYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuYnV0dG9uIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbmF2LXRleHQtY29sb3IpO1xcbn1cXG4uZGVsZXRlQnRuIHtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRlbGV0ZUJ0bi1ib3JkZXIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MCwgODEsIDgxKTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDJweCA1cHggLTFweCxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAxcHggM3B4IC0xcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBvdXRsaW5lOiBpbmhlcml0O1xcbiAgdG9wOiA4cHg7XFxuICByaWdodDogOHB4O1xcbn1cXG4ubWFpbldyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcbi5uYXZXcmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBnYXA6IDZweDtcXG4gIHdpZHRoOiAxNSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLW5hdi10ZXh0LWNvbG9yKTtcXG59XFxuLk5hdlByb2pQYW5lbFdyYXBwZXIge1xcbiAgZ2FwOiA2cHg7XFxufVxcbi5uYXZJdGVtIHtcXG4gIHBhZGRpbmctbGVmdDogOHB4O1xcbn1cXG4ucHJvakJvZHlXcmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuLnRhc2tXcmFwcGVyLFxcbi5wcm9qV3JhcHBlcixcXG4udG9kYXlXcmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDZweDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuLnByb2pXcmFwcGVyIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtaW4taGVpZ2h0OiAxNTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ucHJvak5hbWUge1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLnByb2pEYXRlIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuLnByb2pEZXNjIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHBhZGRpbmc6IDE4cHg7XFxufVxcbi5wcm9qSXRlbSB7XFxufVxcbi50YXNrV3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XFxufVxcbi50YXNrTmFtZSB7XFxufVxcblxcbi50YXNrSXRlbSB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBtYXJnaW46IDEycHg7XFxufVxcbi50YXNrRGVzYyB7XFxuICB3aWR0aDogNTAlO1xcbn1cXG4udGFza0R1ZSB7XFxuICB3aWR0aDogMTUlO1xcbn1cXG4udGFza0NpcmNsZSB7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4udGFza0NoZWNrTWFyayB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIG9wYWNpdHk6IDEwJTtcXG59XFxuLnRhc2tDaGVja01hcms6aG92ZXIge1xcbiAgb3BhY2l0eTogMTAwJTtcXG59XFxuLnRvZGF5V3JhcHBlciB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5mb3JtV3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogOHB4O1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9ybS1jb2xvcik7XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHotaW5kZXg6IDk5OTk7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuODkpIDBweCA1cHggMTVweDtcXG59XFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTJweDtcXG4gIG1hcmdpbjogMTJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcXG59XFxuLmFkZEZvcm1OYW1lIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm0tY29sb3IpO1xcbn1cXG4uYWRkRm9ybURlc2Mge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9ybS1jb2xvcik7XFxufVxcbi5hZGRGb3JtRGF0ZSB7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMTUwcHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtLWNvbG9yKTtcXG59XFxuLmFkZEZvcm1QcmlvIHtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm0tY29sb3IpO1xcbn1cXG4uZGF0ZUZvcm1XcmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDhweDtcXG59XFxuLkNyaXRpY2FsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNyaXRpY2FsLWNvbG9yKTtcXG59XFxuLlVyZ2VudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11cmdlbnQtY29sb3IpO1xcbn1cXG4uUm91dGluZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yb3V0aW5lLWNvbG9yKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2tNb2R1bGUuanNcIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0TW9kdWxlLmpzXCI7XG5pbXBvcnQgQ2hlY2ttYXJrIGZyb20gXCIuL2ltYWdlcy9DaGVja21hcmsucG5nXCI7XG5pbXBvcnQgeyBTdG9yYWdlSGFuZGxlciB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZUhhbmRsZXIuanNcIjtcbi8vXG4vL0NvbnRyb2xzIHRoZSBkb20gZm9yIHRoZSBwcm9qZWN0XG4vL1xuZXhwb3J0IGNsYXNzIERvbUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnN0b3JhZ2VIYW5kbGVyID0gbmV3IFN0b3JhZ2VIYW5kbGVyKCk7XG4gIH1cbiAgLy9cbiAgLy9IYW5kbGUgdGhlIHNldHVwIG9mIHRoZSBwYWdlIHByZS1wcm9qZWN0IGluamVjdGlvblxuICAvL1xuICBHZW5lcmF0ZURvbVN0cnVjdHVyZShkZWZhdWx0UHJvaikge1xuICAgIGNvbnN0IG1haW5Qcm9qUGFuZWxXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluUHJvalBhbmVsV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwibWFpbldyYXBwZXJcIik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluUHJvalBhbmVsV3JhcHBlcik7XG5cbiAgICBjb25zdCBsb2FkZWRQcm9qcyA9IHRoaXMuc3RvcmFnZUhhbmRsZXIubG9hZEZyb21Mb2NhbFN0b3JhZ2UoKTtcblxuICAgIHRoaXMuR2VuZXJhdGVOYXZQYW5lbChtYWluUHJvalBhbmVsV3JhcHBlciwgbG9hZGVkUHJvanMpO1xuICAgIHRoaXMuR2VuZXJhdGVCb2R5UGFuZWwobWFpblByb2pQYW5lbFdyYXBwZXIpO1xuICAgIHRoaXMuR2VuZXJhdGVUb2RheVBhbmVsKGxvYWRlZFByb2pzKTtcbiAgfVxuXG4gIEdlbmVyYXRlTmF2UGFuZWwobWFpbldyYXBwZXIsIGxvYWRlZFByb2pzKSB7XG4gICAgLy9cbiAgICAvLyBIYW5kbGUgdGhlIGdlbmVyYXRpb24gb2YgdGhlIG5hdiBwYW5lbCBhbmQgYWxsIGl0cyBjb21wb25lbnRzLlxuICAgIC8vXG4gICAgY29uc3QgbmF2UGFuZWxXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuYXZQYW5lbFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIm5hdlwiKTtcbiAgICBuYXZQYW5lbFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIm5hdldyYXBwZXJcIik7XG5cbiAgICAvL1RpdGxlIGFuZCB0aW1lIHBhbmVsXG5cbiAgICBjb25zdCBuYXZQYW5lbE1haW5UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmF2UGFuZWxNYWluVGl0bGUuY2xhc3NMaXN0LmFkZChcIm5hdlRpdGxlXCIsIFwibmF2SXRlbVwiKTtcbiAgICBuYXZQYW5lbE1haW5UaXRsZS50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcbiAgICBuYXZQYW5lbFdyYXBwZXIuYXBwZW5kQ2hpbGQobmF2UGFuZWxNYWluVGl0bGUpO1xuXG4gICAgbmF2UGFuZWxNYWluVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XG4gICAgICB0aGlzLkdlbmVyYXRlVG9kYXlQYW5lbChsb2FkZWRQcm9qcylcbiAgICApO1xuXG4gICAgLy8gY29uc3QgbmF2UGFuZWxNYWluRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgLy8gbmF2UGFuZWxNYWluRGF0ZS5jbGFzc0xpc3QuYWRkKFwibmF2RGF0ZVwiLCBcIm5hdkl0ZW1cIik7XG5cbiAgICAvLyBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgLy8gY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGZvcm1hdChjdXJyZW50RGF0ZSwgXCJ5eXl5LU1NLWRkXCIpO1xuICAgIC8vIG5hdlBhbmVsTWFpbkRhdGUudGV4dENvbnRlbnQgPSBmb3JtYXR0ZWREYXRlO1xuICAgIC8vbmF2UGFuZWxNYWluVGl0bGUuYXBwZW5kQ2hpbGQobmF2UGFuZWxNYWluRGF0ZSk7XG5cbiAgICAvL1Byb2plY3QgcGFuZWxzXG5cbiAgICBjb25zdCBuYXZOZXdQcm9qZWN0UGFuZWxXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuYXZOZXdQcm9qZWN0UGFuZWxXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICBcIm5hdk5ld1Byb2plY3RQYW5lbFdyYXBwZXJcIixcbiAgICAgIFwibmF2SXRlbVwiXG4gICAgKTtcbiAgICBuYXZOZXdQcm9qZWN0UGFuZWxXcmFwcGVyLnRleHRDb250ZW50ID0gXCJBZGQgTmV3IFByb2plY3RcIjtcbiAgICAvL3RoaXMuR2VuZXJhdGVBZGRCdXR0b24obmF2TmV3UHJvamVjdFBhbmVsV3JhcHBlcik7XG4gICAgbmF2TmV3UHJvamVjdFBhbmVsV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cbiAgICAgIHRoaXMuR2VuZXJhdGVBZGRGb3JtKG1haW5XcmFwcGVyKVxuICAgICk7XG5cbiAgICBuYXZQYW5lbFdyYXBwZXIuYXBwZW5kQ2hpbGQobmF2TmV3UHJvamVjdFBhbmVsV3JhcHBlcik7XG5cbiAgICBjb25zdCBuYXZQcm9qZWN0UGFuZWxXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuYXZQcm9qZWN0UGFuZWxXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJOYXZQcm9qUGFuZWxXcmFwcGVyXCIpO1xuICAgIG5hdlBhbmVsV3JhcHBlci5hcHBlbmRDaGlsZChuYXZQcm9qZWN0UGFuZWxXcmFwcGVyKTtcblxuICAgIC8vT3B0aW9ucyBwYW5lbCA+IGluY2x1ZGVzIGhlbHAgYW5kIHNldHRpbmdzXG5cbiAgICBjb25zdCBuYXZPcHRpb25zV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmF2T3B0aW9uc1dyYXBwZXIuY2xhc3NMaXN0LmFkZChcIm9wdGlvbnNXcmFwcGVyXCIpO1xuXG4gICAgLy9HZW5lcmF0ZSB0aGUgc2V0dGluZyBiYW5uZXIgaW4gdGhlIG5hdiBiYXJcblxuICAgIGNvbnN0IG5hdlNldHRpbmdzV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmF2U2V0dGluZ3NXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJuYXZJdGVtXCIpO1xuXG4gICAgY29uc3QgbmF2U2V0dGluZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5hdlNldHRpbmdzLnRleHRDb250ZW50ID0gXCJTZXR0aW5nc1wiO1xuICAgIG5hdlNldHRpbmdzV3JhcHBlci5hcHBlbmRDaGlsZChuYXZTZXR0aW5ncyk7XG5cbiAgICBjb25zdCBuYXZTZXR0aW5nc0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIG5hdlNldHRpbmdzSWNvbi5zcmMgPSBcIlwiO1xuICAgIG5hdlNldHRpbmdzSWNvbi5jbGFzc0xpc3QuYWRkKFwibmF2SWNvblwiKTtcbiAgICBuYXZTZXR0aW5nc1dyYXBwZXIuYXBwZW5kQ2hpbGQobmF2U2V0dGluZ3NJY29uKTtcblxuICAgIG5hdk9wdGlvbnNXcmFwcGVyLmFwcGVuZENoaWxkKG5hdlNldHRpbmdzV3JhcHBlcik7XG5cbiAgICAvL0dlbmVyYXRlIHRoZSBoZWxwIGJhbm5lciBpbiB0aGUgbmF2IGJhclxuXG4gICAgY29uc3QgbmF2SGVscFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5hdkhlbHBXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJuYXZJdGVtXCIpO1xuXG4gICAgY29uc3QgbmF2SGVscCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmF2SGVscC50ZXh0Q29udGVudCA9IFwiSGVscFwiO1xuICAgIG5hdkhlbHBXcmFwcGVyLmFwcGVuZENoaWxkKG5hdkhlbHApO1xuXG4gICAgY29uc3QgbmF2SGVscEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIG5hdkhlbHBJY29uLnNyYyA9IFwiXCI7XG4gICAgbmF2SGVscEljb24uY2xhc3NMaXN0LmFkZChcIm5hdkljb25cIik7XG4gICAgbmF2SGVscFdyYXBwZXIuYXBwZW5kQ2hpbGQobmF2SGVscEljb24pO1xuXG4gICAgbmF2T3B0aW9uc1dyYXBwZXIuYXBwZW5kQ2hpbGQobmF2SGVscFdyYXBwZXIpO1xuXG4gICAgbmF2UGFuZWxXcmFwcGVyLmFwcGVuZENoaWxkKG5hdk9wdGlvbnNXcmFwcGVyKTtcblxuICAgIG1haW5XcmFwcGVyLmFwcGVuZENoaWxkKG5hdlBhbmVsV3JhcHBlcik7XG5cbiAgICAvL0xvYWQgdGhlIHNhdmVkIHByb2plY3RzLCBhbmQgYWRkIHRoZW0gdG8gdGhlIG5hdiBiYXJcblxuICAgIHRoaXMuTG9hZFByb2pzVG9OYXZQYW5lbChsb2FkZWRQcm9qcyk7XG4gIH1cblxuICBMb2FkUHJvanNUb05hdlBhbmVsKGxvYWRlZFByb2pzKSB7XG4gICAgaWYgKGxvYWRlZFByb2pzKSB7XG4gICAgICBsb2FkZWRQcm9qcy5mb3JFYWNoKChwcm9qKSA9PiB7XG4gICAgICAgIHRoaXMuQWRkTmV3TmF2UGFuZWxQcm9qKHByb2opO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgQWRkTmV3TmF2UGFuZWxQcm9qKHByb2plY3QpIHtcbiAgICAvL1RoaXMgZXZlbnR1YWxseSBzaG91bGQgYWxsb3cgeW91IHRvIG9wZW4gc3BlY2lmaWMgcHJvamVjdHMgb25jbGljay5cbiAgICBjb25zdCBuYXZQcm9qZWN0UGFuZWxXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLk5hdlByb2pQYW5lbFdyYXBwZXJcIlxuICAgICk7XG4gICAgY29uc3QgRXhpc3RzSW5OYXYgPSBuYXZQcm9qZWN0UGFuZWxXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5wcm9qXCIgKyBwcm9qZWN0LnByb2plY3RJZFxuICAgICk7XG4gICAgaWYgKCFFeGlzdHNJbk5hdikge1xuICAgICAgY29uc3QgbmF2RGVmUHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgIG5hdkRlZlByb2oudGV4dENvbnRlbnQgPSBwcm9qZWN0LnByb2plY3ROYW1lO1xuICAgICAgbmF2RGVmUHJvai5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBcIm5hdkl0ZW1cIixcbiAgICAgICAgXCJwcm9qXCIgKyBwcm9qZWN0LnByb2plY3RJZCxcbiAgICAgICAgcHJvamVjdC5wcm9qZWN0UHJpb1xuICAgICAgKTtcblxuICAgICAgbmF2RGVmUHJvai5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBib2R5UHJvaldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2pCb2R5V3JhcHBlclwiKTtcbiAgICAgICAgdGhpcy5HZW5lcmF0ZVByb2plY3RQYW5lbChib2R5UHJvaldyYXBwZXIsIHByb2plY3QpO1xuICAgICAgfSk7XG5cbiAgICAgIG5hdlByb2plY3RQYW5lbFdyYXBwZXIuYXBwZW5kQ2hpbGQobmF2RGVmUHJvaik7XG4gICAgfVxuICB9XG5cbiAgRGVsZXRlTmF2UGFuZWxQcm9qKHByb2plY3ROYW1lKSB7XG4gICAgLy8gY29uc3QgbmF2UHJvamVjdFBhbmVsV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgLy8gICBcIi5OYXZQcm9qUGFuZWxXcmFwcGVyXCJcbiAgICAvLyApO1xuICAgIGNvbnN0IG5hdlByb2plY3RUb0RlbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLiR7cHJvamVjdE5hbWV9Lm5hdkl0ZW1gXG4gICAgKTtcbiAgICBpZiAobmF2UHJvamVjdFRvRGVsZXRlKSB7XG4gICAgICBuYXZQcm9qZWN0VG9EZWxldGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuYXZQcm9qZWN0VG9EZWxldGUpO1xuICAgIH1cbiAgfVxuXG4gIEdlbmVyYXRlQm9keVBhbmVsKG1haW5XcmFwcGVyKSB7XG4gICAgY29uc3QgQWRkTmV3UHJvaldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIEFkZE5ld1Byb2pXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qQm9keVdyYXBwZXJcIik7XG4gICAgbWFpbldyYXBwZXIuYXBwZW5kQ2hpbGQoQWRkTmV3UHJvaldyYXBwZXIpO1xuICB9XG5cbiAgR2VuZXJhdGVUb2RheVBhbmVsKHByb2plY3RTdG9yYWdlKSB7XG4gICAgY29uc3QgbWFpbldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2pCb2R5V3JhcHBlclwiKTtcbiAgICBpZiAoIXByb2plY3RTdG9yYWdlIHx8IG1haW5XcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXlXcmFwcGVyXCIpKSB7XG4gICAgICAvL3RoaXMuR2VuZXJhdGVTcGxhc2hQYW5lbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcm9qV3JhcHBlciA9IG1haW5XcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXCIucHJvaldyYXBwZXJcIik7XG4gICAgICBpZiAocHJvaldyYXBwZXIpIHtcbiAgICAgICAgdGhpcy5SZW1vdmVQYW5lbChwcm9qV3JhcHBlcik7XG4gICAgICB9XG4gICAgICBjb25zdCB0b2RheVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdG9kYXlXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RheVdyYXBwZXJcIik7XG4gICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAvL1xuICAgICAgcHJvamVjdFN0b3JhZ2UuZm9yRWFjaCgocHJvaikgPT4ge1xuICAgICAgICBpZiAocHJvai5wcm9qZWN0VGFza3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgIC8vXG4gICAgICAgICAgLy9DaGVjayBpZiB0aGVyZSBhcmUgdGFza3MgZHVlIHRvZGF5XG4gICAgICAgICAgLy9cbiAgICAgICAgICBjb25zdCB0YXNrc0R1ZVRvZGF5ID0gcHJvai5wcm9qZWN0VGFza3Muc29tZSgodGFzaykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgdGFzay5kdWVEYXRlLmdldERhdGUoKSA9PT0gdG9kYXkuZ2V0RGF0ZSgpICYmXG4gICAgICAgICAgICAgIHRhc2suZHVlRGF0ZS5nZXRNb250aCgpID09PSB0b2RheS5nZXRNb250aCgpICYmXG4gICAgICAgICAgICAgIHRhc2suZHVlRGF0ZS5nZXRGdWxsWWVhcigpID09PSB0b2RheS5nZXRGdWxsWWVhcigpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIC8vQWRkIGEgcHJvamVjdCBoZWFkZXJcbiAgICAgICAgICBpZiAodGFza3NEdWVUb2RheSkge1xuICAgICAgICAgICAgY29uc3QgcHJvak5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgcHJvak5hbWUudGV4dENvbnRlbnQgPSBwcm9qLnByb2plY3ROYW1lO1xuICAgICAgICAgICAgcHJvak5hbWUuY2xhc3NMaXN0LmFkZChcInByb2pOYW1lXCIsIFwicHJvakl0ZW1cIik7XG4gICAgICAgICAgICB0b2RheVdyYXBwZXIuYXBwZW5kQ2hpbGQocHJvak5hbWUpO1xuICAgICAgICAgICAgcHJvai5wcm9qZWN0VGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdGFzay5kdWVEYXRlLmdldERhdGUoKSA9PT0gdG9kYXkuZ2V0RGF0ZSgpICYmXG4gICAgICAgICAgICAgICAgdGFzay5kdWVEYXRlLmdldE1vbnRoKCkgPT09IHRvZGF5LmdldE1vbnRoKCkgJiZcbiAgICAgICAgICAgICAgICB0YXNrLmR1ZURhdGUuZ2V0RnVsbFllYXIoKSA9PT0gdG9kYXkuZ2V0RnVsbFllYXIoKVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5HZW5lcmF0ZVRhc2tQYW5lbCh0YXNrV3JhcHBlciwgdGFzaywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdG9kYXlXcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tXcmFwcGVyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIG1haW5XcmFwcGVyLmFwcGVuZENoaWxkKHRvZGF5V3JhcHBlcik7XG4gICAgfVxuICB9XG5cbiAgR2VuZXJhdGVQcm9qZWN0UGFuZWwoV3JhcHBlciwgUHJvamVjdCkge1xuICAgIGNvbnN0IHByb2pPcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qV3JhcHBlclwiKTtcbiAgICBjb25zdCB0b2RheVdyYXBwZXJPcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheVdyYXBwZXJcIik7XG4gICAgaWYgKHRvZGF5V3JhcHBlck9wZW4pIHtcbiAgICAgIHRoaXMuUmVtb3ZlUGFuZWwodG9kYXlXcmFwcGVyT3Blbik7XG4gICAgfVxuICAgIGlmICghcHJvak9wZW4pIHtcbiAgICAgIGNvbnN0IHByb2pXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHByb2pXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qV3JhcHBlclwiKTtcbiAgICAgIHByb2pXcmFwcGVyLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiLCBQcm9qZWN0LnByb2plY3RJZCk7XG5cbiAgICAgIGNvbnN0IHByb2pOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHByb2pOYW1lLnRleHRDb250ZW50ID0gUHJvamVjdC5wcm9qZWN0TmFtZTtcbiAgICAgIHByb2pOYW1lLmNsYXNzTGlzdC5hZGQoXCJwcm9qTmFtZVwiLCBcInByb2pJdGVtXCIpO1xuICAgICAgcHJvaldyYXBwZXIuYXBwZW5kQ2hpbGQocHJvak5hbWUpO1xuXG4gICAgICBjb25zdCBwcm9qRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwcm9qRGF0ZS50ZXh0Q29udGVudCA9XG4gICAgICAgIFwiRHVlIERhdGU6IFwiICsgUHJvamVjdC5wcm9qZWN0RHVlLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuICAgICAgcHJvakRhdGUuY2xhc3NMaXN0LmFkZChcInByb2pEYXRlXCIsIFwicHJvakl0ZW1cIik7XG4gICAgICBwcm9qV3JhcHBlci5hcHBlbmRDaGlsZChwcm9qRGF0ZSk7XG5cbiAgICAgIGNvbnN0IHByb2plY3REZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHByb2plY3REZXNjLnRleHRDb250ZW50ID0gUHJvamVjdC5wcm9qZWN0RGVzYztcbiAgICAgIHByb2plY3REZXNjLmNsYXNzTGlzdC5hZGQoXCJwcm9qRGVzY1wiLCBcInByb2pJdGVtXCIpO1xuICAgICAgcHJvaldyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdERlc2MpO1xuXG4gICAgICBjb25zdCBwcm9qQnV0dG9uV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgIHRoaXMuR2VuZXJhdGVBZGRCdXR0b24ocHJvakJ1dHRvbldyYXBwZXIsIFByb2plY3QpO1xuICAgICAgdGhpcy5HZW5lcmF0ZURlbGV0ZUJ1dHRvbihwcm9qV3JhcHBlciwgdW5kZWZpbmVkLCB0cnVlKTtcblxuICAgICAgcHJvaldyYXBwZXIuYXBwZW5kQ2hpbGQocHJvakJ1dHRvbldyYXBwZXIpO1xuXG4gICAgICBpZiAoUHJvamVjdC5wcm9qZWN0VGFza3MubGVuZ3RoID09PSAwKSB7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBQcm9qZWN0LnByb2plY3RUYXNrcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgdGFza1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIHRoaXMuR2VuZXJhdGVUYXNrUGFuZWwodGFza1dyYXBwZXIsIGVsZW1lbnQpO1xuXG4gICAgICAgICAgcHJvaldyYXBwZXIuYXBwZW5kQ2hpbGQodGFza1dyYXBwZXIpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuQWRkTmV3TmF2UGFuZWxQcm9qKFByb2plY3QpO1xuXG4gICAgICBXcmFwcGVyLmFwcGVuZENoaWxkKHByb2pXcmFwcGVyKTtcbiAgICB9XG4gIH1cblxuICAvLyBleHRyYWN0UHJvamVjdEluZm8ocHJvamVjdFdyYXBwZXIpIHtcbiAgLy8gICAvLyBSZXRyaWV2ZSBwcm9qZWN0IG5hbWUgZnJvbSB0aGUgZGF0YSBhdHRyaWJ1dGVcbiAgLy8gICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3RXcmFwcGVyLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1uYW1lXCIpO1xuXG4gIC8vICAgLy8gRmluZCB0aGUgUHJvamVjdCBpbnN0YW5jZSBhc3NvY2lhdGVkIHdpdGggdGhlIHByb2plY3QgbmFtZVxuICAvLyAgIHJldHVybiBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09IHByb2plY3ROYW1lKTtcbiAgLy8gfVxuXG4gIEdlbmVyYXRlVGFza1BhbmVsKFdyYXBwZXIsIHRhc2ssIHRvZGF5UGFuZWxGbGFnID0gZmFsc2UpIHtcbiAgICAvL1xuICAgIC8vR2l2ZW4gYSB0YXNrIGFuZCBhIHdyYXBwZXIsIGdlbmVyYXRlIGEgcGFuZWwgdGhhdCBoYW5kbGVzIGluZm8gYWJvdXQgdGhlIHRhc2suXG4gICAgLy9cbiAgICBXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrV3JhcHBlclwiKTtcblxuICAgIGlmICghdG9kYXlQYW5lbEZsYWcpXG4gICAgICB0aGlzLkdlbmVyYXRlRGVsZXRlQnV0dG9uKFdyYXBwZXIsIHRhc2sudGFza1ByaW8sIHRydWUpO1xuXG4gICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tOYW1lLnRleHRDb250ZW50ID0gdGFzay50YXNrTmFtZTtcbiAgICB0YXNrTmFtZS5jbGFzc0xpc3QuYWRkKFwidGFza05hbWVcIiwgXCJ0YXNrSXRlbVwiKTtcblxuICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrRGF0ZS50ZXh0Q29udGVudCA9IHRhc2sudGFza0R1ZS50b0xvY2FsZURhdGVTdHJpbmcoKTtcbiAgICB0YXNrRGF0ZS5jbGFzc0xpc3QuYWRkKFwidGFza0RhdGVcIiwgXCJ0YXNrSXRlbVwiKTtcblxuICAgIGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrRGVzYy50ZXh0Q29udGVudCA9IHRhc2sudGFza0Rlc2M7XG4gICAgdGFza0Rlc2MuY2xhc3NMaXN0LmFkZChcInRhc2tEZXNjXCIsIFwidGFza0l0ZW1cIik7XG5cbiAgICBXcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcbiAgICBXcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcbiAgICBXcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tEZXNjKTtcbiAgfVxuXG4gIEFkZE5ld1Rhc2soaWQsIG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICAgIC8vIENyZWF0ZSBhIG5ldyBUYXNrIG9iamVjdFxuICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhpZCwgbmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KTtcblxuICAgIC8vIEdlbmVyYXRlIGEgbmV3IHRhc2sgcGFuZWwgZm9yIHRoZSBuZXcgdGFza1xuICAgIGNvbnN0IHRhc2tXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLkdlbmVyYXRlVGFza1BhbmVsKHRhc2tXcmFwcGVyLCBuZXdUYXNrKTtcblxuICAgIC8vIEFwcGVuZCB0aGUgdGFzayBwYW5lbCB0byB0aGUgYXBwcm9wcmlhdGUgbG9jYXRpb24gaW4gdGhlIERPTVxuICAgIHByb2plY3QudGFza3MucHVzaChuZXdUYXNrKTtcbiAgICBjb25zdCBwcm9qV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtcHJvamVjdC1pZD1cIiR7cHJvamVjdC5pZH1cIl1gXG4gICAgKTtcblxuICAgIHRoaXMuc3RvcmFnZUhhbmRsZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKHByb2plY3QpO1xuXG4gICAgLy9DaGVjayB0byBzZWUgaWYgd2UgbmVlZCB0byBlbmxhcmdlIHRoZSBwcm9qZWN0IGNvbnRhaW5lclxuICAgIC8vdGhpcy5Nb2RpZnlUYXNrSGVpZ2h0KHByb2pXcmFwcGVyLCBwcm9qZWN0KTtcblxuICAgIHByb2pXcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tXcmFwcGVyKTtcbiAgfVxuXG4gIEFkZE5ld1Byb2plY3QoaWQsIG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIC8vIENyZWF0ZSBhIG5ldyBwcm9qIG9iamVjdFxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChpZCwgbmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICB0aGlzLnN0b3JhZ2VIYW5kbGVyLnNhdmVUb0xvY2FsU3RvcmFnZShuZXdQcm9qZWN0KTtcbiAgICBjb25zdCBwcm9qV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvakJvZHlXcmFwcGVyXCIpO1xuXG4gICAgdGhpcy5HZW5lcmF0ZVByb2plY3RQYW5lbChwcm9qV3JhcHBlciwgbmV3UHJvamVjdCk7XG4gIH1cblxuICBHZW5lcmF0ZURlbGV0ZUJ1dHRvbih3cmFwcGVyLCB0YXNrUHJpbywgZGVsZXRlRGF0YUZsYWcgPSBmYWxzZSkge1xuICAgIGNvbnN0IERlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBEZWxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XG4gICAgICB0aGlzLlJlbW92ZVBhbmVsKHdyYXBwZXIsIGRlbGV0ZURhdGFGbGFnKVxuICAgICk7XG5cbiAgICBpZiAodGFza1ByaW8gIT09IHVuZGVmaW5lZCAmJiB0YXNrUHJpbyAhPT0gbnVsbCkge1xuICAgICAgRGVsZXRlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQ2lyY2xlXCIsIHRhc2tQcmlvLCBcInRhc2tJdGVtXCIpO1xuICAgICAgY29uc3QgZGVsZXRlQ2hlY2tNYXJrID0gbmV3IEltYWdlKCk7XG4gICAgICBkZWxldGVDaGVja01hcmsuY2xhc3NMaXN0LmFkZChcInRhc2tDaGVja01hcmtcIik7XG4gICAgICBkZWxldGVDaGVja01hcmsuc3JjID0gQ2hlY2ttYXJrO1xuICAgICAgRGVsZXRlLmFwcGVuZENoaWxkKGRlbGV0ZUNoZWNrTWFyayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIERlbGV0ZS5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlQnRuXCIpO1xuICAgICAgRGVsZXRlLnRleHRDb250ZW50ID0gXCIgWCBcIjtcbiAgICB9XG5cbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKERlbGV0ZSk7XG4gIH1cblxuICBHZW5lcmF0ZUFkZEJ1dHRvbih3cmFwcGVyLCBwcm9qZWN0KSB7XG4gICAgY29uc3QgQWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBBZGQuY2xhc3NMaXN0LmFkZChcImFkZEJ0blwiKTtcbiAgICBBZGQudGV4dENvbnRlbnQgPSBcIiArIFwiO1xuICAgIEFkZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5HZW5lcmF0ZUFkZEZvcm0od3JhcHBlciwgcHJvamVjdCkpO1xuXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChBZGQpO1xuICB9XG5cbiAgLy8gUmVtb3ZlIGEgcGFuZWwgYW5kIGFsbCBpdHMgY2hpbGRyZW4gZnJvbSB0aGUgRE9NXG4gIC8vVGhpcyBzaG91bGQgYmUgY2hlY2tpbmcgd2hhdHMgdGhlIGNsb3Nlc3QgcHJvai90YXNrIHBhbmVsIGFuZCBkZWxldGluZyBkb3duXG4gIFJlbW92ZVBhbmVsKHBhbmVsLCBkZWxldGVEYXRhRmxhZyA9IGZhbHNlKSB7XG4gICAgaWYgKCFwYW5lbCkgcmV0dXJuO1xuICAgIGlmIChwYW5lbC5jbGFzc0xpc3QuY29udGFpbnMoXCJwcm9qV3JhcHBlclwiKSkge1xuICAgICAgLy8gQ2FsbCB0aGUgZnVuY3Rpb24gdG8gZGVsZXRlIHRoZSBjb3JyZXNwb25kaW5nIG5hdmlnYXRpb24gcGFuZWxcbiAgICAgIHRoaXMuRGVsZXRlTmF2UGFuZWxQcm9qKFwicHJvalwiICsgcGFuZWwuZGF0YXNldC5wcm9qZWN0SWQpO1xuICAgIH1cbiAgICB3aGlsZSAocGFuZWwuZmlyc3RDaGlsZCkge1xuICAgICAgcGFuZWwucmVtb3ZlQ2hpbGQocGFuZWwuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgcGFuZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwYW5lbCk7XG5cbiAgICBpZiAoZGVsZXRlRGF0YUZsYWcpXG4gICAgICB0aGlzLnN0b3JhZ2VIYW5kbGVyLnJlbW92ZVByb2plY3RGcm9tTG9jYWxTdG9yYWdlKFxuICAgICAgICBwYW5lbC5kYXRhc2V0LnByb2plY3RJZFxuICAgICAgKTtcbiAgfVxuXG4gIC8vR2VuZXJhdGUgYSBmb3JtIHRoYXQgYWxsb3dzIHlvdSB0byBhZGQgYSBuZXcgcHJvamVjdCwgb3IgdGFza1xuICAvL3Nob3VsZCBoYXZlIGEgc3VibWl0IGJ1dHRvbiBhdCB0aGUgYm90dG9tLCBhbmQgYSBjbG9zZSBidXR0b24uXG4gIEdlbmVyYXRlQWRkRm9ybSh3cmFwcGVyLCBwcm9qZWN0KSB7XG4gICAgY29uc3QgYWRkRm9ybU9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1XcmFwcGVyXCIpO1xuXG4gICAgaWYgKCFhZGRGb3JtT3Blbikge1xuICAgICAgY29uc3QgZm9ybVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZm9ybVdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImZvcm1XcmFwcGVyXCIpO1xuXG4gICAgICBjb25zdCBmb3JtSGVhZGVyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBmb3JtSGVhZGVyV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiZm9ybUhlYWRlcldyYXBwZXJcIik7XG5cbiAgICAgIC8vIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIC8vIHRpdGxlLnRleHRDb250ZW50ID0gXCJBZGQgYSBuZXcgdGFzayBvciBwcm9qZWN0XCI7XG4gICAgICAvLyBmb3JtSGVhZGVyV3JhcHBlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgIHRoaXMuR2VuZXJhdGVEZWxldGVCdXR0b24oZm9ybVdyYXBwZXIpO1xuXG4gICAgICBmb3JtV3JhcHBlci5hcHBlbmRDaGlsZChmb3JtSGVhZGVyV3JhcHBlcik7XG5cbiAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblxuICAgICAgY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgaW5wdXROYW1lLmNsYXNzTGlzdC5hZGQoXCJhZGRGb3JtTmFtZVwiKTtcbiAgICAgIGlucHV0TmFtZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICAgIGlucHV0TmFtZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGV4dElucHV0XCIpO1xuICAgICAgaW5wdXROYW1lLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRW50ZXIgdGl0bGUgb2YgcHJvamVjdCBvciB0YXNrXCIpO1xuICAgICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dE5hbWUpO1xuXG4gICAgICBjb25zdCBpbnB1dERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBpbnB1dERlc2MuY2xhc3NMaXN0LmFkZChcImFkZEZvcm1EZXNjXCIpO1xuICAgICAgaW5wdXREZXNjLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgICAgaW5wdXREZXNjLnNldEF0dHJpYnV0ZShcImRlc2NcIiwgXCJ0ZXh0SW5wdXRcIik7XG4gICAgICBpbnB1dERlc2Muc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJFbnRlciBkZXNjcmlwdGlvblwiKTtcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXREZXNjKTtcblxuICAgICAgY29uc3QgZGF0ZUZvcm1XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRhdGVGb3JtV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiZGF0ZUZvcm1XcmFwcGVyXCIpO1xuXG4gICAgICBjb25zdCBpbnB1dERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBpbnB1dERhdGUuY2xhc3NMaXN0LmFkZChcImFkZEZvcm1EYXRlXCIpO1xuICAgICAgaW5wdXREYXRlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICAgICAgaW5wdXREYXRlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkYXRlSW5wdXRcIik7XG4gICAgICBkYXRlRm9ybVdyYXBwZXIuYXBwZW5kQ2hpbGQoaW5wdXREYXRlKTtcblxuICAgICAgY29uc3QgaW5wdXRQcmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgIGlucHV0UHJpby5jbGFzc0xpc3QuYWRkKFwiYWRkRm9ybVByaW9cIik7XG4gICAgICBpbnB1dFByaW8ubmFtZSA9IFwicHJpb3JpdHlcIjtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBbXCJDcml0aWNhbFwiLCBcIlVyZ2VudFwiLCBcIlJvdXRpbmVcIl07XG5cbiAgICAgIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uVGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgb3B0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IG9wdGlvblRleHQ7XG4gICAgICAgIGlucHV0UHJpby5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KTtcbiAgICAgIH0pO1xuICAgICAgZGF0ZUZvcm1XcmFwcGVyLmFwcGVuZENoaWxkKGlucHV0UHJpbyk7XG4gICAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGVGb3JtV3JhcHBlcik7XG5cbiAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICAgICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuXG4gICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gUmV0cmlldmUgaW5wdXQgdmFsdWVzXG4gICAgICAgIGNvbnN0IG5hbWUgPSBpbnB1dE5hbWUudmFsdWU7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gaW5wdXREZXNjLnZhbHVlO1xuICAgICAgICBjb25zdCBkYXRlID0gaW5wdXREYXRlLnZhbHVlO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGlucHV0UHJpby52YWx1ZTtcblxuICAgICAgICB0aGlzLlJlbW92ZVBhbmVsKGZvcm1XcmFwcGVyKTtcbiAgICAgICAgaWYgKCFwcm9qZWN0KSB7XG4gICAgICAgICAgLy9HZW5lcmF0ZSB0aGUgcHJvamVjdCB3aXRoIGEgcmFuZG9tIElEIG51bWJlclxuICAgICAgICAgIHRoaXMuQWRkTmV3UHJvamVjdChcbiAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5OTk5OTk5OSksXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBkYXRlLFxuICAgICAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuQWRkTmV3VGFzayhcbiAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5OTk5OTk5OSksXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBkYXRlLFxuICAgICAgICAgICAgcHJpb3JpdHksXG4gICAgICAgICAgICBwcm9qZWN0XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGZvcm1XcmFwcGVyLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGZvcm1XcmFwcGVyKTtcbiAgICB9XG4gIH1cblxuICBHZW5lcmF0ZU9uRW50cnkoZGVmYXVsdFByb2opIHtcbiAgICB0aGlzLkdlbmVyYXRlRG9tU3RydWN0dXJlKGRlZmF1bHRQcm9qKTtcbiAgfVxufVxuIiwiLy8gSW1wb3J0IG5lY2Vzc2FyeSBmdW5jdGlvbnMgYW5kIGNsYXNzZXNcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0TW9kdWxlLmpzXCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza01vZHVsZS5qc1wiO1xuXG5leHBvcnQgY2xhc3MgU3RvcmFnZUhhbmRsZXIge1xuICAvLyBGdW5jdGlvbiB0byBzYXZlIHByb2plY3RzIGFuZCB0YXNrcyB0byBsb2NhbCBzdG9yYWdlXG5cbiAgc2F2ZVRvTG9jYWxTdG9yYWdlKHByb2plY3QpIHtcbiAgICBsZXQgcHJvamVjdHNEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKTtcbiAgICBpZiAoIXByb2plY3RzRGF0YSkge1xuICAgICAgcHJvamVjdHNEYXRhID0ge307XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2plY3RzRGF0YSA9IEpTT04ucGFyc2UocHJvamVjdHNEYXRhKTtcbiAgICB9XG5cbiAgICAvLyBTZXJpYWxpemUgdGFza3MgYmVmb3JlIHNhdmluZ1xuICAgIGNvbnN0IHNlcmlhbGl6ZWRUYXNrcyA9IHByb2plY3QudGFza3MubWFwKCh0YXNrKSA9PiAoe1xuICAgICAgaWQ6IHRhc2suaWQsXG4gICAgICBuYW1lOiB0YXNrLm5hbWUsXG4gICAgICBkZXNjcmlwdGlvbjogdGFzay5kZXNjcmlwdGlvbixcbiAgICAgIGR1ZURhdGU6IHRhc2suZHVlRGF0ZSxcbiAgICAgIHByaW9yaXR5OiB0YXNrLnByaW9yaXR5LFxuICAgIH0pKTtcblxuICAgIC8vIEFkZCBzZXJpYWxpemVkIHRhc2tzIHRvIHRoZSBwcm9qZWN0IG9iamVjdFxuICAgIGNvbnN0IHNlcmlhbGl6ZWRQcm9qZWN0ID0ge1xuICAgICAgaWQ6IHByb2plY3QuaWQsXG4gICAgICBuYW1lOiBwcm9qZWN0Lm5hbWUsXG4gICAgICBkZXNjcmlwdGlvbjogcHJvamVjdC5kZXNjcmlwdGlvbixcbiAgICAgIGR1ZURhdGU6IHByb2plY3QuZHVlRGF0ZSxcbiAgICAgIHByaW9yaXR5OiBwcm9qZWN0LnByaW9yaXR5LFxuICAgICAgdGFza3M6IHNlcmlhbGl6ZWRUYXNrcywgLy8gU2F2ZSBzZXJpYWxpemVkIHRhc2tzXG4gICAgfTtcblxuICAgIHByb2plY3RzRGF0YVtwcm9qZWN0LnByb2plY3RJZF0gPSBzZXJpYWxpemVkUHJvamVjdDtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNEYXRhKSk7XG4gIH1cblxuICAvLyBGdW5jdGlvbiB0byByZXRyaWV2ZSBwcm9qZWN0cyBhbmQgdGFza3MgZnJvbSBsb2NhbCBzdG9yYWdlXG4gIGxvYWRGcm9tTG9jYWxTdG9yYWdlKCkge1xuICAgIGNvbnN0IHByb2plY3RzRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIik7XG4gICAgaWYgKHByb2plY3RzRGF0YSkge1xuICAgICAgY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKHByb2plY3RzRGF0YSk7XG4gICAgICBpZiAocHJvamVjdHMpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdE9iamVjdHMgPSBPYmplY3QudmFsdWVzKHByb2plY3RzKS5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgICAgICBjb25zdCB0YXNrcyA9IHByb2plY3QudGFza3MubWFwKCh0YXNrRGF0YSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBUYXNrKFxuICAgICAgICAgICAgICB0YXNrRGF0YS5pZCxcbiAgICAgICAgICAgICAgdGFza0RhdGEubmFtZSxcbiAgICAgICAgICAgICAgdGFza0RhdGEuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgIG5ldyBEYXRlKHRhc2tEYXRhLmR1ZURhdGUpLFxuICAgICAgICAgICAgICB0YXNrRGF0YS5wcmlvcml0eSxcbiAgICAgICAgICAgICAgcHJvamVjdFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb2plY3QoXG4gICAgICAgICAgICBwcm9qZWN0LmlkLFxuICAgICAgICAgICAgcHJvamVjdC5uYW1lLFxuICAgICAgICAgICAgcHJvamVjdC5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG5ldyBEYXRlKHByb2plY3QuZHVlRGF0ZSksXG4gICAgICAgICAgICBwcm9qZWN0LnByaW9yaXR5LFxuICAgICAgICAgICAgdGFza3NcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHByb2plY3RPYmplY3RzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlByb2plY3RzIGRhdGEgaW4gbG9jYWwgc3RvcmFnZSBpcyBpbnZhbGlkXCIpO1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlUHJvamVjdEZyb21Mb2NhbFN0b3JhZ2UocHJvamVjdElkKSB7XG4gICAgLy8gUmV0cmlldmUgcHJvamVjdHMgZGF0YSBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgICBsZXQgcHJvamVjdHNEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKTtcblxuICAgIGlmIChwcm9qZWN0c0RhdGEpIHtcbiAgICAgIC8vIHBhcnNlIHRoZSBqc29uIGRhdGEgc28gd2UgaGF2ZSByZWFsIGRhdGFcbiAgICAgIHByb2plY3RzRGF0YSA9IEpTT04ucGFyc2UocHJvamVjdHNEYXRhKTtcblxuICAgICAgZGVsZXRlIHByb2plY3RzRGF0YVtwcm9qZWN0SWRdO1xuXG4gICAgICAvLyBVcGRhdGUgZGF0YSBpbiBsb2NhbCBzdG9yYWdlXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzRGF0YSkpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVRhc2tGcm9tTG9jYWxTdG9yYWdlKHRhc2tJZCkge1xuICAgIGxldCBwcm9qZWN0c0RhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpO1xuICAgIGlmIChwcm9qZWN0c0RhdGEpIHtcbiAgICAgIHByb2plY3RzRGF0YSA9IEpTT04ucGFyc2UocHJvamVjdHNEYXRhKTtcblxuICAgICAgLy8gUmVtb3ZlIHByb2plY3Qgd2l0aCB0aGUgc3BlY2lmaWVkIGlkIGZyb20gdGhlIG9iamVjdFxuICAgICAgY29uc3QgdGFza0luZGV4ID0gcHJvamVjdC50YXNrcy5maW5kSW5kZXgoXG4gICAgICAgICh0YXNrKSA9PiB0YXNrLnRhc2tJZCA9PT0gdGFza0lkXG4gICAgICApO1xuICAgICAgLy9pbmRleCByZXR1cm5zIC0xIGlmIG5vdCBmb3VuZFxuICAgICAgaWYgKHRhc2tJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgLy9yZW1vdmUgdXNpbmcgc3BsaWNlIGJlY2F1c2Ugd2UgZG9uJ3Qgd2FudCBvcnBoYW4gb3VyIHRhc2tzXG4gICAgICAgIHRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICAgICAgfVxuXG4gICAgICAvLyBVcGRhdGUgZGF0YSBpbiBsb2NhbCBzdG9yYWdlXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzRGF0YSkpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgcGFyc2UgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IoaWQsIG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgdGFza3MpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gbmV3IERhdGUoZHVlRGF0ZSk7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMudGFza3MgPSB0YXNrcyA/IHRhc2tzIDogW107XG4gIH1cblxuICBkaXNwbGF5RGV0YWlscygpIHtcbiAgICBjb25zb2xlLmxvZyhgTmFtZTogJHt0aGlzLm5hbWV9YCk7XG4gICAgY29uc29sZS5sb2coYERlc2NyaXB0aW9uOiAke3RoaXMuZGVzY3JpcHRpb259YCk7XG4gICAgY29uc29sZS5sb2coYER1ZSBEYXRlOiAke3RoaXMuZHVlRGF0ZX1gKTtcbiAgfVxuXG4gIC8vIEdldHRlciBtZXRob2RzXG4gIGdldCBwcm9qZWN0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWQ7XG4gIH1cblxuICBnZXQgcHJvamVjdE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldCBwcm9qZWN0RGVzYygpIHtcbiAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGdldCBwcm9qZWN0RHVlKCkge1xuICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gIH1cblxuICBnZXQgcHJvamVjdFByaW8oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XG4gIH1cblxuICBnZXQgcHJvamVjdFRhc2tzKCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzO1xuICB9XG5cbiAgZ2V0IERvbUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIC8vIFNldHRlciBtZXRob2RzXG4gIHNldCBwcm9qZWN0TmFtZShuZXdOYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgfVxuXG4gIHNldCBwcm9qZWN0RGVzYyhuZXdEZXNjKSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IG5ld0Rlc2M7XG4gIH1cblxuICBzZXQgcHJvamVjdER1ZShuZXdEYXRlKSB7XG4gICAgdGhpcy5kdWVEYXRlID0gbmV3IERhdGUobmV3RGF0ZSk7XG4gIH1cblxuICBzZXQgcHJvamVjdFByaW8obmV3UHJpbykge1xuICAgIHRoaXMucHJpb3JpdHkgPSBuZXdQcmlvO1xuICB9XG5cbiAgc2V0IHByb2plY3RUYXNrcyhuZXdUYXNrcykge1xuICAgIHRoaXMudGFza3MgPSBuZXdUYXNrcztcbiAgfVxuXG4gIHNldCBEb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG59XG4iLCJpbXBvcnQgeyBwYXJzZSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuZXhwb3J0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3RvcihpZCwgbmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IG5ldyBEYXRlKGR1ZURhdGUpO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IG51bGw7XG4gIH1cbiAgZGlzcGxheURldGFpbHMoKSB7XG4gICAgY29uc29sZS5sb2coYE5hbWU6ICR7dGhpcy5uYW1lfWApO1xuICAgIGNvbnNvbGUubG9nKGBEZXNjcmlwdGlvbjogJHt0aGlzLmRlc2NyaXB0aW9ufWApO1xuICAgIGNvbnNvbGUubG9nKGBEdWUgRGF0ZTogJHt0aGlzLmR1ZURhdGV9YCk7XG4gIH1cbiAgLy9cbiAgLy9HZXR0ZXJzXG4gIC8vXG4gIGdldCB0YXNrTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG4gIGdldCB0YXNrRGVzYygpIHtcbiAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgfVxuICBnZXQgdGFza0R1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xuICB9XG4gIGdldCB0YXNrUHJpbygpIHtcbiAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcbiAgfVxuICBnZXQgdGFza1Byb2ooKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdDtcbiAgfVxuICAvL1xuICAvL1NldHRlcnNcbiAgLy9cbiAgc2V0IHRhc2tOYW1lKG5ld05hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICB9XG4gIHNldCB0YXNrRGVzYyhuZXdEZXNjKSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IG5ld0Rlc2M7XG4gIH1cbiAgc2V0IHRhc2tEdWUobmV3RGF0ZSkge1xuICAgIHRoaXMuZHVlRGF0ZSA9IG5ldyBEYXRlKG5ld0RhdGUpO1xuICB9XG4gIHNldCB0YXNrUHJpbyhuZXdQcmlvKSB7XG4gICAgdGhpcy5wcmlvcml0eSA9IG5ld1ByaW87XG4gIH1cbiAgc2V0IHRhc2tQcm9qKG5ld1Byb2opIHtcbiAgICB0aGlzLnByb2plY3QgPSBuZXdQcm9qO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdE1vZHVsZS5qc1wiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2tNb2R1bGUuanNcIjtcbmltcG9ydCB7IERvbUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9Eb21NYW5pcC5qc1wiO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmZ1bmN0aW9uIE9uRW50cnkoKSB7XG4gIGNvbnN0IERvbU1hbmlwID0gbmV3IERvbUNvbnRyb2xsZXIoKTtcblxuICBEb21NYW5pcC5HZW5lcmF0ZU9uRW50cnkoKTtcbn1cblxuT25FbnRyeSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9