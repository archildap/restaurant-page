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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/pizza-icon.png */ "./images/pizza-icon.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/pizza-image.jpg */ "./images/pizza-image.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Courgette&family=Roboto:ital,wght@0,400;0,700;1,400&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Courgette', cursive;
    text-align: center;
    line-height: 1.6;
    letter-spacing: 1px;

}

#content {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
}

/* Header */

#header {
    width: 100%;
    background: rgb(248, 243, 243);
    color: black;
    position: absolute;
    z-index: 10;
    height: 12%;
    padding: 1.5rem 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 5px inset rgb(230, 149, 0);
    box-shadow: 0px 10px 20px rgba(128, 128, 128, 0.217);
    ;
}

#header h3 {
    height: 100%;
    padding-right: 4rem;
    font-size: 1.7rem;
    font-size: 2vw;
    cursor: pointer;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat;
    background-size: 20%;
    background-position: right;
    display: flex;
    align-items: center;
}

#header ul {
    list-style: none;
    display: flex;
    gap: 2rem;
}

#header li {
    cursor: pointer;
    font-size: 1.2rem;
    font-size: 1.4vw;
}

#header li:hover {
    color: rgb(104, 104, 104);
}

#header li:active {
    color: black;
}

/* home page */
.bg-image {
    position: relative;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) no-repeat;
    background-size: cover;
    background-position: bottom;
    width: 100%;
    height: 100vh;
}

#home-section {
    padding-top: 20vh;
    position: absolute;
    color: white;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    top: 0;
    left: 0;
    right: 0;
}

#home-section p {
    font-size: 1.5rem;
    font-size: 1.4vw;
    width: 40%;
}

#home-section h1 {
    font-size: 3.8rem;
    font-size: 3.5vw;
}

.btn {
    font-family: 'Courgette', cursive;
    padding: 10px 20px;
    background: rgb(239, 148, 1);
    border: none;
    border-radius: 15px;
    color: white;
    font-size: 1rem;
    font-size: 1.2vw;
}

.btn:hover {
    background: rgb(221, 136, 0);
}

.btn:active {
    background: rgb(239, 148, 1);
}

.bg-image::after {
    content: ' ';
    z-index: 0;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
}

/* Menu section */

#menu-section {
    padding-top: 20vh;
    background: linear-gradient(to top, #e2fffd 0%, #ffe7f0 100%);
    position: absolute;
    width: 100%;
    min-height: calc(100vh - 150px);
    top: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    font-size: 1rem;
    font-size: 1vw;
}

.menu-card {
    width: 30%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.menu-card .btn {
    width: 70%;
}

.menu-card img {
    height: 150px;
    width: 150px;
    border-radius: 50px;
}

/* about section */

#about-section {
    color: black;
    padding-top: 20vh;
    width: 80%;
    min-height: 100vh;
    display: grid;
    grid-template-columns: minmax(300px, 1.2fr) 1fr;
    grid-template-rows: auto 1fr;
    justify-content: center;
    gap: 20px;
}

#about-section h3 {
    align-self: start;
    grid-area: 1 / 2 / 2 / 3;
    font-size: 2.3rem;
    font-size: 2.5vw;
}

#about-section p {
    width: 100%;
    grid-area: 2 / 2 / 3 / 3;
    align-self: start;
    justify-self: center;
    font-size: 1.5rem;
    font-size: 1.5vw;
}

#about-section img {
    align-self: start;
    grid-area: 1 / 1 / 3 / 2;
    width: 100%;
    border-radius: 10px;
}

#about-section::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%);
}

/* contact section */

#contact-section {
    width: 80%;
    min-width: 1000px;
    min-height: 600px;
    color: black;
    padding-top: 20vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
}

#contact-section::after {
    content: '';
    position: absolute;
    min-height: 100vh;
    min-width: 100vw;
    top: 0;
    left: 0;
    z-index: -1;
    background: rgba(11, 182, 168, 0.1);
}

.img-section {
    width: 100%;
    height: 100%;
}

.img-section img {
    width: 100%;
    height: 100%;
}

#contact-section ul {
    text-align: start;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-content: center;
    width: 100%;
    gap: 5%;
}

#contact-section li {
    display: flex;
    flex-direction: column;
}

.submit {
    width: 20%;
    border-radius: 5px;
    background: rgb(17, 252, 221);
}


#contact-section form {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: white;
    width: 100%;
    height: 100%;
    padding: 20px;
}

#contact-section input {
    font-family: inherit;
    border: solid 1px #d6d7db;
    height: 30px;
    min-width: 250px;
    max-width: 350px;
    font-size: 1rem;
    padding: 10px;
    border-radius: 3px;
}

#contact-section input:focus {
    border: 2px solid black;
    outline: none;
}

#contact-section input:valid {
    border: solid 1px green;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Courgette&family=Roboto:ital,wght@0,400;0,700;1,400&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: 'Courgette', cursive;\r\n    text-align: center;\r\n    line-height: 1.6;\r\n    letter-spacing: 1px;\r\n\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    min-height: 100vh;\r\n}\r\n\r\n/* Header */\r\n\r\n#header {\r\n    width: 100%;\r\n    background: rgb(248, 243, 243);\r\n    color: black;\r\n    position: absolute;\r\n    z-index: 10;\r\n    height: 12%;\r\n    padding: 1.5rem 5rem;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border-bottom: 5px inset rgb(230, 149, 0);\r\n    box-shadow: 0px 10px 20px rgba(128, 128, 128, 0.217);\r\n    ;\r\n}\r\n\r\n#header h3 {\r\n    height: 100%;\r\n    padding-right: 4rem;\r\n    font-size: 1.7rem;\r\n    font-size: 2vw;\r\n    cursor: pointer;\r\n    background: url('../images/pizza-icon.png') no-repeat;\r\n    background-size: 20%;\r\n    background-position: right;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n#header ul {\r\n    list-style: none;\r\n    display: flex;\r\n    gap: 2rem;\r\n}\r\n\r\n#header li {\r\n    cursor: pointer;\r\n    font-size: 1.2rem;\r\n    font-size: 1.4vw;\r\n}\r\n\r\n#header li:hover {\r\n    color: rgb(104, 104, 104);\r\n}\r\n\r\n#header li:active {\r\n    color: black;\r\n}\r\n\r\n/* home page */\r\n.bg-image {\r\n    position: relative;\r\n    background: url('../images/pizza-image.jpg') no-repeat;\r\n    background-size: cover;\r\n    background-position: bottom;\r\n    width: 100%;\r\n    height: 100vh;\r\n}\r\n\r\n#home-section {\r\n    padding-top: 20vh;\r\n    position: absolute;\r\n    color: white;\r\n    width: 100%;\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 2rem;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n#home-section p {\r\n    font-size: 1.5rem;\r\n    font-size: 1.4vw;\r\n    width: 40%;\r\n}\r\n\r\n#home-section h1 {\r\n    font-size: 3.8rem;\r\n    font-size: 3.5vw;\r\n}\r\n\r\n.btn {\r\n    font-family: 'Courgette', cursive;\r\n    padding: 10px 20px;\r\n    background: rgb(239, 148, 1);\r\n    border: none;\r\n    border-radius: 15px;\r\n    color: white;\r\n    font-size: 1rem;\r\n    font-size: 1.2vw;\r\n}\r\n\r\n.btn:hover {\r\n    background: rgb(221, 136, 0);\r\n}\r\n\r\n.btn:active {\r\n    background: rgb(239, 148, 1);\r\n}\r\n\r\n.bg-image::after {\r\n    content: ' ';\r\n    z-index: 0;\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 100vh;\r\n    background: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n/* Menu section */\r\n\r\n#menu-section {\r\n    padding-top: 20vh;\r\n    background: linear-gradient(to top, #e2fffd 0%, #ffe7f0 100%);\r\n    position: absolute;\r\n    width: 100%;\r\n    min-height: calc(100vh - 150px);\r\n    top: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    gap: 20px;\r\n    font-size: 1rem;\r\n    font-size: 1vw;\r\n}\r\n\r\n.menu-card {\r\n    width: 30%;\r\n    height: 30%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 10px;\r\n}\r\n\r\n.menu-card .btn {\r\n    width: 70%;\r\n}\r\n\r\n.menu-card img {\r\n    height: 150px;\r\n    width: 150px;\r\n    border-radius: 50px;\r\n}\r\n\r\n/* about section */\r\n\r\n#about-section {\r\n    color: black;\r\n    padding-top: 20vh;\r\n    width: 80%;\r\n    min-height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: minmax(300px, 1.2fr) 1fr;\r\n    grid-template-rows: auto 1fr;\r\n    justify-content: center;\r\n    gap: 20px;\r\n}\r\n\r\n#about-section h3 {\r\n    align-self: start;\r\n    grid-area: 1 / 2 / 2 / 3;\r\n    font-size: 2.3rem;\r\n    font-size: 2.5vw;\r\n}\r\n\r\n#about-section p {\r\n    width: 100%;\r\n    grid-area: 2 / 2 / 3 / 3;\r\n    align-self: start;\r\n    justify-self: center;\r\n    font-size: 1.5rem;\r\n    font-size: 1.5vw;\r\n}\r\n\r\n#about-section img {\r\n    align-self: start;\r\n    grid-area: 1 / 1 / 3 / 2;\r\n    width: 100%;\r\n    border-radius: 10px;\r\n}\r\n\r\n#about-section::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: -1;\r\n    height: 100%;\r\n    width: 100%;\r\n    background-image: linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%);\r\n}\r\n\r\n/* contact section */\r\n\r\n#contact-section {\r\n    width: 80%;\r\n    min-width: 1000px;\r\n    min-height: 600px;\r\n    color: black;\r\n    padding-top: 20vh;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#contact-section::after {\r\n    content: '';\r\n    position: absolute;\r\n    min-height: 100vh;\r\n    min-width: 100vw;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: -1;\r\n    background: rgba(11, 182, 168, 0.1);\r\n}\r\n\r\n.img-section {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.img-section img {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n#contact-section ul {\r\n    text-align: start;\r\n    list-style: none;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    justify-content: center;\r\n    align-content: center;\r\n    width: 100%;\r\n    gap: 5%;\r\n}\r\n\r\n#contact-section li {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.submit {\r\n    width: 20%;\r\n    border-radius: 5px;\r\n    background: rgb(17, 252, 221);\r\n}\r\n\r\n\r\n#contact-section form {\r\n    font-family: 'Roboto', sans-serif;\r\n    font-weight: 700;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    background: white;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 20px;\r\n}\r\n\r\n#contact-section input {\r\n    font-family: inherit;\r\n    border: solid 1px #d6d7db;\r\n    height: 30px;\r\n    min-width: 250px;\r\n    max-width: 350px;\r\n    font-size: 1rem;\r\n    padding: 10px;\r\n    border-radius: 3px;\r\n}\r\n\r\n#contact-section input:focus {\r\n    border: 2px solid black;\r\n    outline: none;\r\n}\r\n\r\n#contact-section input:valid {\r\n    border: solid 1px green;\r\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ about)
/* harmony export */ });
/* harmony import */ var _images_rest_background_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/rest-background.jpg */ "./images/rest-background.jpg");




function about() {
    const aboutPage = document.createElement('div');
    const title = document.createElement('h3');
    const aboutPar = document.createElement('p');
    const restImg = new Image();

    restImg.src = _images_rest_background_jpg__WEBPACK_IMPORTED_MODULE_0__;

    title.textContent = 'Crust & Craft';
    aboutPar.textContent = 'At Crust & Craft, we believe that the foundation of an exceptional pizza lies in its crust. Our expert chefs meticulously handcraft each pizza crust using only the finest, high-quality ingredients. We take pride in our commitment to authenticity, using traditional methods to create a crust that is both crisp and chewy, providing the perfect canvas for our flavorful toppings.';

    aboutPage.setAttribute('id', 'about-section');

    aboutPage.appendChild(title);
    aboutPage.appendChild(aboutPar);
    aboutPage.appendChild(restImg);

    return aboutPage;
}

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });
/* harmony import */ var _images_contact_img_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/contact-img.jpg */ "./images/contact-img.jpg");


function fieldMaker(fieldLabel, inputType, idName) {
    const fieldLi = document.createElement('li');
    const label = document.createElement('label');
    const input = document.createElement('input');

    label.setAttribute('for', `${idName}`);
    input.setAttribute('id', `${idName}`);
    input.setAttribute('name', `${idName}`);
    input.setAttribute('type', `${inputType}`);
    input.setAttribute('required', '');

    label.textContent = `${fieldLabel}*`;


    fieldLi.appendChild(label);
    fieldLi.appendChild(input);

    return fieldLi;
}


function contact() {
    const contactPage = document.createElement('div');
    const form = document.createElement('form');
    const formUl = document.createElement('ul');
    const submitBtn = document.createElement('button');
    const reservationHeader = document.createElement('h2');
    const imgSection = document.createElement('div');
    const restImg = new Image();
    restImg.src = _images_contact_img_jpg__WEBPACK_IMPORTED_MODULE_0__;



    contactPage.setAttribute('id', 'contact-section');
    // form.setAttribute('method', 'post');
    submitBtn.classList.add('submit', 'btn');
    submitBtn.textContent = 'Book';
    imgSection.classList.add('img-section');
    reservationHeader.textContent = 'Book a Reservation!';


    imgSection.appendChild(restImg);
    form.appendChild(reservationHeader);
    formUl.appendChild(fieldMaker('FIRST NAME', 'text', 'first-name'));
    formUl.appendChild(fieldMaker('LAST NAME', 'text', 'last-name'));
    formUl.appendChild(fieldMaker('PHONE NUMBER', 'tel', 'phone-number'));
    formUl.appendChild(fieldMaker('RESERVATION TIME', 'datetime-local', 'res-time'));
    formUl.appendChild(fieldMaker('NUMBER OF PEOPLE', 'number', 'num-people'));


    form.appendChild(formUl);
    form.appendChild(submitBtn);
    contactPage.appendChild(imgSection);
    contactPage.appendChild(form);

    form.querySelector('input[type="number"]').setAttribute('min', '1');
    form.querySelector('input[type="number"]').setAttribute('max', '10');
    return contactPage;

}


/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ header)
/* harmony export */ });
function header() {
    const header = document.createElement('header');
    const logo = document.createElement('h3');
    const navigation = document.createElement('ul');
    const homeNav = document.createElement('li');
    const contactNav = document.createElement('li');
    const aboutNav = document.createElement('li');
    const menuNav = document.createElement('li');

    homeNav.appendChild(document.createElement('a'));
    contactNav.appendChild(document.createElement('a'));
    aboutNav.appendChild(document.createElement('a'));
    menuNav.appendChild(document.createElement('a'));

    homeNav.textContent = 'Home';
    menuNav.textContent = 'Menu';
    aboutNav.textContent = 'About';
    contactNav.textContent = 'Contact';
    logo.textContent = 'Crust & Craft';

    homeNav.classList.add('nav', 'nav-home');
    menuNav.classList.add('nav', 'nav-menu');
    aboutNav.classList.add('nav', 'nav-about');
    contactNav.classList.add('nav', 'nav-contact');
    logo.classList.add('logo');

    navigation.appendChild(homeNav);
    navigation.appendChild(menuNav);
    navigation.appendChild(aboutNav);
    navigation.appendChild(contactNav);

    header.appendChild(logo);
    header.appendChild(navigation);

    header.setAttribute('id', 'header')

    return header;
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


function home() {
    const homePage = document.createElement('div');
    const header = document.createElement('h1');
    const bio = document.createElement('p');
    const bookBtn = document.createElement('button');
    const background = document.createElement('div');

    header.textContent = "Crust & Craft";
    bio.textContent = `Welcome to "Crust & Craft Pizzeria," where passion meets perfection in every slice! Nestled in the heart
    of the city, our pizza restaurant is a culinary haven for pizza enthusiasts seeking an unforgettable
    dining experience.`;
    bookBtn.textContent = 'BOOK NOW!';

    homePage.appendChild(header);
    homePage.appendChild(bio);
    homePage.appendChild(bookBtn);
    document.querySelector('#content').appendChild(background);

    homePage.setAttribute('id', 'home-section');
    bookBtn.classList.add('btn');
    background.classList.add('bg-image');

    return homePage;
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _images_ham_pepperoni_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/ham-pepperoni.jpg */ "./images/ham-pepperoni.jpg");
/* harmony import */ var _images_cheese_pizza_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/cheese-pizza.jpg */ "./images/cheese-pizza.jpg");
/* harmony import */ var _images_hawaiian_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/hawaiian.jpg */ "./images/hawaiian.jpg");
/* harmony import */ var _images_genovese_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/genovese.jpg */ "./images/genovese.jpg");
/* harmony import */ var _images_neapolitan_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/neapolitan.jpg */ "./images/neapolitan.jpg");
/* harmony import */ var _images_veggie_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/veggie.jpg */ "./images/veggie.jpg");
/* harmony import */ var _images_margherita_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/margherita.jpg */ "./images/margherita.jpg");








function menuCard(title, price, img) {
    const menuCard = document.createElement('div');
    const dish = document.createElement('h3');
    const dishPrice = document.createElement('p');
    const orderBtn = document.createElement('button');
    const dishImg = new Image();


    menuCard.classList.add('menu-card');
    orderBtn.classList.add('btn');

    dishImg.src = img;
    dish.textContent = title;
    dishPrice.textContent = price;
    orderBtn.textContent = 'Order Now!';

    menuCard.appendChild(dishImg);
    menuCard.appendChild(dish);
    menuCard.appendChild(dishPrice)
    menuCard.appendChild(orderBtn);

    return menuCard;
}

function menu() {
    const menuPage = document.createElement('div');
    menuPage.setAttribute('id', 'menu-section');
    menuPage.appendChild(menuCard('Pepperoni, Ham & Mushrooms', '$16.25', _images_ham_pepperoni_jpg__WEBPACK_IMPORTED_MODULE_0__));
    menuPage.appendChild(menuCard('Cheese  & Tomato', '$15.00', _images_cheese_pizza_jpg__WEBPACK_IMPORTED_MODULE_1__));
    menuPage.appendChild(menuCard('Hawaiian', '$17.50', _images_hawaiian_jpg__WEBPACK_IMPORTED_MODULE_2__));
    menuPage.appendChild(menuCard('Genovese', '$18.25', _images_genovese_jpg__WEBPACK_IMPORTED_MODULE_3__));
    menuPage.appendChild(menuCard('Neapolitan Pizza', '$16.50', _images_neapolitan_jpg__WEBPACK_IMPORTED_MODULE_4__));
    menuPage.appendChild(menuCard('Veggie', '$20.00', _images_veggie_jpg__WEBPACK_IMPORTED_MODULE_5__));
    menuPage.appendChild(menuCard('Margherita', '$22.00', _images_margherita_jpg__WEBPACK_IMPORTED_MODULE_6__));

    return menuPage;
}

/***/ }),

/***/ "./images/cheese-pizza.jpg":
/*!*********************************!*\
  !*** ./images/cheese-pizza.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bd5aef7f2789090ccbb9.jpg";

/***/ }),

/***/ "./images/contact-img.jpg":
/*!********************************!*\
  !*** ./images/contact-img.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5ad3efac30f680168ec5.jpg";

/***/ }),

/***/ "./images/genovese.jpg":
/*!*****************************!*\
  !*** ./images/genovese.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "daddf150a376d572a331.jpg";

/***/ }),

/***/ "./images/ham-pepperoni.jpg":
/*!**********************************!*\
  !*** ./images/ham-pepperoni.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f4b73d6f3e559e847b78.jpg";

/***/ }),

/***/ "./images/hawaiian.jpg":
/*!*****************************!*\
  !*** ./images/hawaiian.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "07f7d3c3d77ea404d127.jpg";

/***/ }),

/***/ "./images/margherita.jpg":
/*!*******************************!*\
  !*** ./images/margherita.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "15056c9db7e20d44b2cf.jpg";

/***/ }),

/***/ "./images/neapolitan.jpg":
/*!*******************************!*\
  !*** ./images/neapolitan.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d72cd79b2ab08ab6e857.jpg";

/***/ }),

/***/ "./images/pizza-icon.png":
/*!*******************************!*\
  !*** ./images/pizza-icon.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1a1d127746e8d2402346.png";

/***/ }),

/***/ "./images/pizza-image.jpg":
/*!********************************!*\
  !*** ./images/pizza-image.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eb1af90cc8d12e080622.jpg";

/***/ }),

/***/ "./images/rest-background.jpg":
/*!************************************!*\
  !*** ./images/rest-background.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2f53ded74aa73f1ac823.jpg";

/***/ }),

/***/ "./images/veggie.jpg":
/*!***************************!*\
  !*** ./images/veggie.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5445bfbf3f5119b503d7.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");







function displayController() {
    const content = document.querySelector('#content');

    const initialLoad = () => {
        content.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_1__["default"])());
        content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])());
    }

    initialLoad();

    const nav = [...document.querySelectorAll('.nav')];

    const clearPage = () => {
        while (content.firstChild.nextSibling) {
            content.removeChild(content.firstChild.nextSibling);
        }
    };

    const handleLoad = (e) => {
        clearPage();
        if (e.target.textContent === 'Home') {
            content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])());
        } else if (e.target.textContent === 'Menu') {
            content.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])());
        } else if (e.target.textContent === 'About') {
            content.appendChild((0,_about__WEBPACK_IMPORTED_MODULE_3__["default"])());
        } else if (e.target.textContent === 'Contact') {
            content.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_4__["default"])());
        } else content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])());
    };

    nav.map(item => {
        item.addEventListener('click', (e) => handleLoad(e));
    });
    document.querySelector('.logo').addEventListener('click', (e) => handleLoad(e));

}

displayController();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHdIQUEyQztBQUN2Riw0Q0FBNEMsMEhBQTRDO0FBQ3hGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsdUlBQXVJLE1BQU0sb0JBQW9CO0FBQ2pLLCtHQUErRyxrQkFBa0I7QUFDakkseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxh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QUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0EwQjtBQUNJO0FBQ0o7QUFDRTtBQUNJO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtREFBTTtBQUNsQyw0QkFBNEIsaURBQUk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGlEQUFJO0FBQ3BDLFVBQVU7QUFDVixnQ0FBZ0MsaURBQUk7QUFDcEMsVUFBVTtBQUNWLGdDQUFnQyxrREFBSztBQUNyQyxVQUFVO0FBQ1YsZ0NBQWdDLG9EQUFPO0FBQ3ZDLFVBQVUseUJBQXlCLGlEQUFJO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3BpenphLWljb24ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3BpenphLWltYWdlLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q291cmdldHRlJmZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNDAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyZ2V0dGUnLCBjdXJzaXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcblxyXG59XHJcblxyXG4jY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLyogSGVhZGVyICovXHJcblxyXG4jaGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI0OCwgMjQzLCAyNDMpO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBoZWlnaHQ6IDEyJTtcclxuICAgIHBhZGRpbmc6IDEuNXJlbSA1cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOiA1cHggaW5zZXQgcmdiKDIzMCwgMTQ5LCAwKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjIxNyk7XHJcbiAgICA7XHJcbn1cclxuXHJcbiNoZWFkZXIgaDMge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZy1yaWdodDogNHJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gICAgZm9udC1zaXplOiAydnc7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4jaGVhZGVyIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAycmVtO1xyXG59XHJcblxyXG4jaGVhZGVyIGxpIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjR2dztcclxufVxyXG5cclxuI2hlYWRlciBsaTpob3ZlciB7XHJcbiAgICBjb2xvcjogcmdiKDEwNCwgMTA0LCAxMDQpO1xyXG59XHJcblxyXG4jaGVhZGVyIGxpOmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi8qIGhvbWUgcGFnZSAqL1xyXG4uYmctaW1hZ2Uge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbiNob21lLXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZy10b3A6IDIwdmg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMnJlbTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxufVxyXG5cclxuI2hvbWUtc2VjdGlvbiBwIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjR2dztcclxuICAgIHdpZHRoOiA0MCU7XHJcbn1cclxuXHJcbiNob21lLXNlY3Rpb24gaDEge1xyXG4gICAgZm9udC1zaXplOiAzLjhyZW07XHJcbiAgICBmb250LXNpemU6IDMuNXZ3O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmdldHRlJywgY3Vyc2l2ZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMzksIDE0OCwgMSk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjJ2dztcclxufVxyXG5cclxuLmJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjIxLCAxMzYsIDApO1xyXG59XHJcblxyXG4uYnRuOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjM5LCAxNDgsIDEpO1xyXG59XHJcblxyXG4uYmctaW1hZ2U6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcgJztcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuXHJcbi8qIE1lbnUgc2VjdGlvbiAqL1xyXG5cclxuI21lbnUtc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjB2aDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNlMmZmZmQgMCUsICNmZmU3ZjAgMTAwJSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCk7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBnYXA6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXNpemU6IDF2dztcclxufVxyXG5cclxuLm1lbnUtY2FyZCB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMTBweDtcclxufVxyXG5cclxuLm1lbnUtY2FyZCAuYnRuIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbi5tZW51LWNhcmQgaW1nIHtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcblxyXG4vKiBhYm91dCBzZWN0aW9uICovXHJcblxyXG4jYWJvdXQtc2VjdGlvbiB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nLXRvcDogMjB2aDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgzMDBweCwgMS4yZnIpIDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMjBweDtcclxufVxyXG5cclxuI2Fib3V0LXNlY3Rpb24gaDMge1xyXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XHJcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XHJcbiAgICBmb250LXNpemU6IDIuM3JlbTtcclxuICAgIGZvbnQtc2l6ZTogMi41dnc7XHJcbn1cclxuXHJcbiNhYm91dC1zZWN0aW9uIHAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XHJcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcclxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LXNpemU6IDEuNXZ3O1xyXG59XHJcblxyXG4jYWJvdXQtc2VjdGlvbiBpbWcge1xyXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XHJcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMyAvIDI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbiNhYm91dC1zZWN0aW9uOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2Q1ZDRkMCAwJSwgI2Q1ZDRkMCAxJSwgI2VlZWVlYyAzMSUsICNlZmVlZWMgNzUlLCAjZTllOWU3IDEwMCUpO1xyXG59XHJcblxyXG4vKiBjb250YWN0IHNlY3Rpb24gKi9cclxuXHJcbiNjb250YWN0LXNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1pbi13aWR0aDogMTAwMHB4O1xyXG4gICAgbWluLWhlaWdodDogNjAwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nLXRvcDogMjB2aDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNjb250YWN0LXNlY3Rpb246OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMSwgMTgyLCAxNjgsIDAuMSk7XHJcbn1cclxuXHJcbi5pbWctc2VjdGlvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmltZy1zZWN0aW9uIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI2NvbnRhY3Qtc2VjdGlvbiB1bCB7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGdhcDogNSU7XHJcbn1cclxuXHJcbiNjb250YWN0LXNlY3Rpb24gbGkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5zdWJtaXQge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxNywgMjUyLCAyMjEpO1xyXG59XHJcblxyXG5cclxuI2NvbnRhY3Qtc2VjdGlvbiBmb3JtIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4jY29udGFjdC1zZWN0aW9uIGlucHV0IHtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2Q2ZDdkYjtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuI2NvbnRhY3Qtc2VjdGlvbiBpbnB1dDpmb2N1cyB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbiNjb250YWN0LXNlY3Rpb24gaW5wdXQ6dmFsaWQge1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggZ3JlZW47XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUEsV0FBVzs7QUFFWDtJQUNJLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQix5Q0FBeUM7SUFDekMsb0RBQW9EOztBQUV4RDs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsNkRBQXFEO0lBQ3JELG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBLGNBQWM7QUFDZDtJQUNJLGtCQUFrQjtJQUNsQiw2REFBc0Q7SUFDdEQsc0JBQXNCO0lB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akMsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvdXJnZXR0ZSZmYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDQwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogJ0NvdXJnZXR0ZScsIGN1cnNpdmU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLyogSGVhZGVyICovXFxyXFxuXFxyXFxuI2hlYWRlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ4LCAyNDMsIDI0Myk7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG4gICAgaGVpZ2h0OiAxMiU7XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbSA1cmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDVweCBpbnNldCByZ2IoMjMwLCAxNDksIDApO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yMTcpO1xcclxcbiAgICA7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXIgaDMge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDRyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbiAgICBmb250LXNpemU6IDJ2dztcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy9waXp6YS1pY29uLnBuZycpIG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMCU7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyIHVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyIGxpIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjR2dztcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciBsaTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTA0LCAxMDQsIDEwNCk7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXIgbGk6YWN0aXZlIHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBob21lIHBhZ2UgKi9cXHJcXG4uYmctaW1hZ2Uge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vaW1hZ2VzL3BpenphLWltYWdlLmpwZycpIG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWUtc2VjdGlvbiB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyMHZoO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbiNob21lLXNlY3Rpb24gcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuNHZ3O1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jaG9tZS1zZWN0aW9uIGgxIHtcXHJcXG4gICAgZm9udC1zaXplOiAzLjhyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMy41dnc7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgICBmb250LWZhbWlseTogJ0NvdXJnZXR0ZScsIGN1cnNpdmU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiKDIzOSwgMTQ4LCAxKTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJ2dztcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYigyMjEsIDEzNiwgMCk7XFxyXFxufVxcclxcblxcclxcbi5idG46YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiKDIzOSwgMTQ4LCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJnLWltYWdlOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6ICcgJztcXHJcXG4gICAgei1pbmRleDogMDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNZW51IHNlY3Rpb24gKi9cXHJcXG5cXHJcXG4jbWVudS1zZWN0aW9uIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDIwdmg7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNlMmZmZmQgMCUsICNmZmU3ZjAgMTAwJSk7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCk7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMXZ3O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1jYXJkIHtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgaGVpZ2h0OiAzMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWNhcmQgLmJ0biB7XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWNhcmQgaW1nIHtcXHJcXG4gICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBhYm91dCBzZWN0aW9uICovXFxyXFxuXFxyXFxuI2Fib3V0LXNlY3Rpb24ge1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyMHZoO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMzAwcHgsIDEuMmZyKSAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNhYm91dC1zZWN0aW9uIGgzIHtcXHJcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcXHJcXG4gICAgZm9udC1zaXplOiAyLjNyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41dnc7XFxyXFxufVxcclxcblxcclxcbiNhYm91dC1zZWN0aW9uIHAge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xcclxcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuNXZ3O1xcclxcbn1cXHJcXG5cXHJcXG4jYWJvdXQtc2VjdGlvbiBpbWcge1xcclxcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDMgLyAyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2Fib3V0LXNlY3Rpb246OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogJyc7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2Q1ZDRkMCAwJSwgI2Q1ZDRkMCAxJSwgI2VlZWVlYyAzMSUsICNlZmVlZWMgNzUlLCAjZTllOWU3IDEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjb250YWN0IHNlY3Rpb24gKi9cXHJcXG5cXHJcXG4jY29udGFjdC1zZWN0aW9uIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgbWluLXdpZHRoOiAxMDAwcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyMHZoO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFjdC1zZWN0aW9uOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHotaW5kZXg6IC0xO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDExLCAxODIsIDE2OCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmltZy1zZWN0aW9uIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmltZy1zZWN0aW9uIGltZyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0LXNlY3Rpb24gdWwge1xcclxcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZ2FwOiA1JTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3Qtc2VjdGlvbiBsaSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQge1xcclxcbiAgICB3aWR0aDogMjAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYigxNywgMjUyLCAyMjEpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jY29udGFjdC1zZWN0aW9uIGZvcm0ge1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3Qtc2VjdGlvbiBpbnB1dCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZDZkN2RiO1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIG1pbi13aWR0aDogMjUwcHg7XFxyXFxuICAgIG1heC13aWR0aDogMzUwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFjdC1zZWN0aW9uIGlucHV0OmZvY3VzIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0LXNlY3Rpb24gaW5wdXQ6dmFsaWQge1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDFweCBncmVlbjtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgcmVzdGF1cmFudEltZyBmcm9tICcuLi9pbWFnZXMvcmVzdC1iYWNrZ3JvdW5kLmpwZyc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFib3V0KCkge1xyXG4gICAgY29uc3QgYWJvdXRQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBjb25zdCBhYm91dFBhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IHJlc3RJbWcgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbiAgICByZXN0SW1nLnNyYyA9IHJlc3RhdXJhbnRJbWc7XHJcblxyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnQ3J1c3QgJiBDcmFmdCc7XHJcbiAgICBhYm91dFBhci50ZXh0Q29udGVudCA9ICdBdCBDcnVzdCAmIENyYWZ0LCB3ZSBiZWxpZXZlIHRoYXQgdGhlIGZvdW5kYXRpb24gb2YgYW4gZXhjZXB0aW9uYWwgcGl6emEgbGllcyBpbiBpdHMgY3J1c3QuIE91ciBleHBlcnQgY2hlZnMgbWV0aWN1bG91c2x5IGhhbmRjcmFmdCBlYWNoIHBpenphIGNydXN0IHVzaW5nIG9ubHkgdGhlIGZpbmVzdCwgaGlnaC1xdWFsaXR5IGluZ3JlZGllbnRzLiBXZSB0YWtlIHByaWRlIGluIG91ciBjb21taXRtZW50IHRvIGF1dGhlbnRpY2l0eSwgdXNpbmcgdHJhZGl0aW9uYWwgbWV0aG9kcyB0byBjcmVhdGUgYSBjcnVzdCB0aGF0IGlzIGJvdGggY3Jpc3AgYW5kIGNoZXd5LCBwcm92aWRpbmcgdGhlIHBlcmZlY3QgY2FudmFzIGZvciBvdXIgZmxhdm9yZnVsIHRvcHBpbmdzLic7XHJcblxyXG4gICAgYWJvdXRQYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWJvdXQtc2VjdGlvbicpO1xyXG5cclxuICAgIGFib3V0UGFnZS5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICBhYm91dFBhZ2UuYXBwZW5kQ2hpbGQoYWJvdXRQYXIpO1xyXG4gICAgYWJvdXRQYWdlLmFwcGVuZENoaWxkKHJlc3RJbWcpO1xyXG5cclxuICAgIHJldHVybiBhYm91dFBhZ2U7XHJcbn0iLCJpbXBvcnQgcmVzdEltYWdlIGZyb20gJy4uL2ltYWdlcy9jb250YWN0LWltZy5qcGcnO1xyXG5cclxuZnVuY3Rpb24gZmllbGRNYWtlcihmaWVsZExhYmVsLCBpbnB1dFR5cGUsIGlkTmFtZSkge1xyXG4gICAgY29uc3QgZmllbGRMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblxyXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBgJHtpZE5hbWV9YCk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aWROYW1lfWApO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgYCR7aWROYW1lfWApO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgYCR7aW5wdXRUeXBlfWApO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcclxuXHJcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGAke2ZpZWxkTGFiZWx9KmA7XHJcblxyXG5cclxuICAgIGZpZWxkTGkuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gICAgZmllbGRMaS5hcHBlbmRDaGlsZChpbnB1dCk7XHJcblxyXG4gICAgcmV0dXJuIGZpZWxkTGk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWN0KCkge1xyXG4gICAgY29uc3QgY29udGFjdFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBjb25zdCBmb3JtVWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb25zdCByZXNlcnZhdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBjb25zdCBpbWdTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCByZXN0SW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICByZXN0SW1nLnNyYyA9IHJlc3RJbWFnZTtcclxuXHJcblxyXG5cclxuICAgIGNvbnRhY3RQYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1zZWN0aW9uJyk7XHJcbiAgICAvLyBmb3JtLnNldEF0dHJpYnV0ZSgnbWV0aG9kJywgJ3Bvc3QnKTtcclxuICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdzdWJtaXQnLCAnYnRuJyk7XHJcbiAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAnQm9vayc7XHJcbiAgICBpbWdTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2ltZy1zZWN0aW9uJyk7XHJcbiAgICByZXNlcnZhdGlvbkhlYWRlci50ZXh0Q29udGVudCA9ICdCb29rIGEgUmVzZXJ2YXRpb24hJztcclxuXHJcblxyXG4gICAgaW1nU2VjdGlvbi5hcHBlbmRDaGlsZChyZXN0SW1nKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb25IZWFkZXIpO1xyXG4gICAgZm9ybVVsLmFwcGVuZENoaWxkKGZpZWxkTWFrZXIoJ0ZJUlNUIE5BTUUnLCAndGV4dCcsICdmaXJzdC1uYW1lJykpO1xyXG4gICAgZm9ybVVsLmFwcGVuZENoaWxkKGZpZWxkTWFrZXIoJ0xBU1QgTkFNRScsICd0ZXh0JywgJ2xhc3QtbmFtZScpKTtcclxuICAgIGZvcm1VbC5hcHBlbmRDaGlsZChmaWVsZE1ha2VyKCdQSE9ORSBOVU1CRVInLCAndGVsJywgJ3Bob25lLW51bWJlcicpKTtcclxuICAgIGZvcm1VbC5hcHBlbmRDaGlsZChmaWVsZE1ha2VyKCdSRVNFUlZBVElPTiBUSU1FJywgJ2RhdGV0aW1lLWxvY2FsJywgJ3Jlcy10aW1lJykpO1xyXG4gICAgZm9ybVVsLmFwcGVuZENoaWxkKGZpZWxkTWFrZXIoJ05VTUJFUiBPRiBQRU9QTEUnLCAnbnVtYmVyJywgJ251bS1wZW9wbGUnKSk7XHJcblxyXG5cclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVVsKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcclxuICAgIGNvbnRhY3RQYWdlLmFwcGVuZENoaWxkKGltZ1NlY3Rpb24pO1xyXG4gICAgY29udGFjdFBhZ2UuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcblxyXG4gICAgZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwibnVtYmVyXCJdJykuc2V0QXR0cmlidXRlKCdtaW4nLCAnMScpO1xyXG4gICAgZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwibnVtYmVyXCJdJykuc2V0QXR0cmlidXRlKCdtYXgnLCAnMTAnKTtcclxuICAgIHJldHVybiBjb250YWN0UGFnZTtcclxuXHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVhZGVyKCkge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGNvbnN0IG5hdmlnYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgY29uc3QgaG9tZU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBjb25zdCBjb250YWN0TmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IGFib3V0TmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IG1lbnVOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG5cclxuICAgIGhvbWVOYXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpKTtcclxuICAgIGNvbnRhY3ROYXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpKTtcclxuICAgIGFib3V0TmF2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKSk7XHJcbiAgICBtZW51TmF2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKSk7XHJcblxyXG4gICAgaG9tZU5hdi50ZXh0Q29udGVudCA9ICdIb21lJztcclxuICAgIG1lbnVOYXYudGV4dENvbnRlbnQgPSAnTWVudSc7XHJcbiAgICBhYm91dE5hdi50ZXh0Q29udGVudCA9ICdBYm91dCc7XHJcbiAgICBjb250YWN0TmF2LnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xyXG4gICAgbG9nby50ZXh0Q29udGVudCA9ICdDcnVzdCAmIENyYWZ0JztcclxuXHJcbiAgICBob21lTmF2LmNsYXNzTGlzdC5hZGQoJ25hdicsICduYXYtaG9tZScpO1xyXG4gICAgbWVudU5hdi5jbGFzc0xpc3QuYWRkKCduYXYnLCAnbmF2LW1lbnUnKTtcclxuICAgIGFib3V0TmF2LmNsYXNzTGlzdC5hZGQoJ25hdicsICduYXYtYWJvdXQnKTtcclxuICAgIGNvbnRhY3ROYXYuY2xhc3NMaXN0LmFkZCgnbmF2JywgJ25hdi1jb250YWN0Jyk7XHJcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcclxuXHJcbiAgICBuYXZpZ2F0aW9uLmFwcGVuZENoaWxkKGhvbWVOYXYpO1xyXG4gICAgbmF2aWdhdGlvbi5hcHBlbmRDaGlsZChtZW51TmF2KTtcclxuICAgIG5hdmlnYXRpb24uYXBwZW5kQ2hpbGQoYWJvdXROYXYpO1xyXG4gICAgbmF2aWdhdGlvbi5hcHBlbmRDaGlsZChjb250YWN0TmF2KTtcclxuXHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2aWdhdGlvbik7XHJcblxyXG4gICAgaGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyJylcclxuXHJcbiAgICByZXR1cm4gaGVhZGVyO1xyXG59IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lKCkge1xyXG4gICAgY29uc3QgaG9tZVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBjb25zdCBiaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCBib29rQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJDcnVzdCAmIENyYWZ0XCI7XHJcbiAgICBiaW8udGV4dENvbnRlbnQgPSBgV2VsY29tZSB0byBcIkNydXN0ICYgQ3JhZnQgUGl6emVyaWEsXCIgd2hlcmUgcGFzc2lvbiBtZWV0cyBwZXJmZWN0aW9uIGluIGV2ZXJ5IHNsaWNlISBOZXN0bGVkIGluIHRoZSBoZWFydFxyXG4gICAgb2YgdGhlIGNpdHksIG91ciBwaXp6YSByZXN0YXVyYW50IGlzIGEgY3VsaW5hcnkgaGF2ZW4gZm9yIHBpenphIGVudGh1c2lhc3RzIHNlZWtpbmcgYW4gdW5mb3JnZXR0YWJsZVxyXG4gICAgZGluaW5nIGV4cGVyaWVuY2UuYDtcclxuICAgIGJvb2tCdG4udGV4dENvbnRlbnQgPSAnQk9PSyBOT1chJztcclxuXHJcbiAgICBob21lUGFnZS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgaG9tZVBhZ2UuYXBwZW5kQ2hpbGQoYmlvKTtcclxuICAgIGhvbWVQYWdlLmFwcGVuZENoaWxkKGJvb2tCdG4pO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kKTtcclxuXHJcbiAgICBob21lUGFnZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUtc2VjdGlvbicpO1xyXG4gICAgYm9va0J0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcclxuICAgIGJhY2tncm91bmQuY2xhc3NMaXN0LmFkZCgnYmctaW1hZ2UnKTtcclxuXHJcbiAgICByZXR1cm4gaG9tZVBhZ2U7XHJcbn0iLCJpbXBvcnQgaGFtUGVwcGVyb25pIGZyb20gJy4uL2ltYWdlcy9oYW0tcGVwcGVyb25pLmpwZyc7XHJcbmltcG9ydCBjaGVlc2VQaXp6YSBmcm9tICcuLi9pbWFnZXMvY2hlZXNlLXBpenphLmpwZyc7XHJcbmltcG9ydCBoYXdhaWlhbiBmcm9tICcuLi9pbWFnZXMvaGF3YWlpYW4uanBnJztcclxuaW1wb3J0IGdlbm92ZXNlIGZyb20gJy4uL2ltYWdlcy9nZW5vdmVzZS5qcGcnO1xyXG5pbXBvcnQgbmVhcG9saXRhbiBmcm9tICcuLi9pbWFnZXMvbmVhcG9saXRhbi5qcGcnO1xyXG5pbXBvcnQgdmVnZ2llIGZyb20gJy4uL2ltYWdlcy92ZWdnaWUuanBnJztcclxuaW1wb3J0IG1hcmdoZXJpdGEgZnJvbSAnLi4vaW1hZ2VzL21hcmdoZXJpdGEuanBnJztcclxuXHJcbmZ1bmN0aW9uIG1lbnVDYXJkKHRpdGxlLCBwcmljZSwgaW1nKSB7XHJcbiAgICBjb25zdCBtZW51Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgZGlzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBjb25zdCBkaXNoUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCBvcmRlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uc3QgZGlzaEltZyA9IG5ldyBJbWFnZSgpO1xyXG5cclxuXHJcbiAgICBtZW51Q2FyZC5jbGFzc0xpc3QuYWRkKCdtZW51LWNhcmQnKTtcclxuICAgIG9yZGVyQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xyXG5cclxuICAgIGRpc2hJbWcuc3JjID0gaW1nO1xyXG4gICAgZGlzaC50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgZGlzaFByaWNlLnRleHRDb250ZW50ID0gcHJpY2U7XHJcbiAgICBvcmRlckJ0bi50ZXh0Q29udGVudCA9ICdPcmRlciBOb3chJztcclxuXHJcbiAgICBtZW51Q2FyZC5hcHBlbmRDaGlsZChkaXNoSW1nKTtcclxuICAgIG1lbnVDYXJkLmFwcGVuZENoaWxkKGRpc2gpO1xyXG4gICAgbWVudUNhcmQuYXBwZW5kQ2hpbGQoZGlzaFByaWNlKVxyXG4gICAgbWVudUNhcmQuYXBwZW5kQ2hpbGQob3JkZXJCdG4pO1xyXG5cclxuICAgIHJldHVybiBtZW51Q2FyZDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudSgpIHtcclxuICAgIGNvbnN0IG1lbnVQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51UGFnZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUtc2VjdGlvbicpO1xyXG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQobWVudUNhcmQoJ1BlcHBlcm9uaSwgSGFtICYgTXVzaHJvb21zJywgJyQxNi4yNScsIGhhbVBlcHBlcm9uaSkpO1xyXG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQobWVudUNhcmQoJ0NoZWVzZSAgJiBUb21hdG8nLCAnJDE1LjAwJywgY2hlZXNlUGl6emEpKTtcclxuICAgIG1lbnVQYWdlLmFwcGVuZENoaWxkKG1lbnVDYXJkKCdIYXdhaWlhbicsICckMTcuNTAnLCBoYXdhaWlhbikpO1xyXG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQobWVudUNhcmQoJ0dlbm92ZXNlJywgJyQxOC4yNScsIGdlbm92ZXNlKSk7XHJcbiAgICBtZW51UGFnZS5hcHBlbmRDaGlsZChtZW51Q2FyZCgnTmVhcG9saXRhbiBQaXp6YScsICckMTYuNTAnLCBuZWFwb2xpdGFuKSk7XHJcbiAgICBtZW51UGFnZS5hcHBlbmRDaGlsZChtZW51Q2FyZCgnVmVnZ2llJywgJyQyMC4wMCcsIHZlZ2dpZSkpO1xyXG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQobWVudUNhcmQoJ01hcmdoZXJpdGEnLCAnJDIyLjAwJywgbWFyZ2hlcml0YSkpO1xyXG5cclxuICAgIHJldHVybiBtZW51UGFnZTtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGhvbWUgZnJvbSAnLi9ob21lJztcclxuaW1wb3J0IGhlYWRlciBmcm9tICcuL2hlYWRlcic7XHJcbmltcG9ydCBtZW51IGZyb20gJy4vbWVudSc7XHJcbmltcG9ydCBhYm91dCBmcm9tICcuL2Fib3V0JztcclxuaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9jb250YWN0JztcclxuXHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5Q29udHJvbGxlcigpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxMb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKCkpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsTG9hZCgpO1xyXG5cclxuICAgIGNvbnN0IG5hdiA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2JyldO1xyXG5cclxuICAgIGNvbnN0IGNsZWFyUGFnZSA9ICgpID0+IHtcclxuICAgICAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkLm5leHRTaWJsaW5nKSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkLm5leHRTaWJsaW5nKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUxvYWQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNsZWFyUGFnZSgpO1xyXG4gICAgICAgIGlmIChlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gJ0hvbWUnKSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZSgpKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSAnTWVudScpIHtcclxuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51KCkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09ICdBYm91dCcpIHtcclxuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChhYm91dCgpKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSAnQ29udGFjdCcpIHtcclxuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0KCkpO1xyXG4gICAgICAgIH0gZWxzZSBjb250ZW50LmFwcGVuZENoaWxkKGhvbWUoKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIG5hdi5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBoYW5kbGVMb2FkKGUpKTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ28nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBoYW5kbGVMb2FkKGUpKTtcclxuXHJcbn1cclxuXHJcbmRpc3BsYXlDb250cm9sbGVyKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9