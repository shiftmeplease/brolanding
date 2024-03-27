/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 25:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_css_loader_6_10_0_webpack_5_91_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(246);
/* harmony import */ var _node_modules_pnpm_css_loader_6_10_0_webpack_5_91_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_webpack_5_91_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_10_0_webpack_5_91_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(143);
/* harmony import */ var _node_modules_pnpm_css_loader_6_10_0_webpack_5_91_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_webpack_5_91_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_10_0_webpack_5_91_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_10_0_webpack_5_91_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  background-color: rgb(65, 218, 154);
   /* background-color: rgb(34, 14, 0); */
  font-family: "Teko", sans-serif;
  font-size: 2em;
  color: white;
  font-weight: 400;

}

main {
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

a {
  text-decoration: none;
  color: white;
  font-weight: 400;
  transition: color 150ms;
}

.image {
  margin: auto;
  display: flex;
  flex-direction: column;
  margin: 0;
  align-items: center;
  opacity: 0%;
}

img {
  /* width: 756px; */
  height: 500px;
}

.content {
  margin: auto;
  display: flex;
  flex-direction: column;
  margin: 0;
}

.trade {
  display: flex;
  flex-direction: column;
  gap: 0.2em;
}

h1 {
  font-size: 7em;
  font-weight: 600;
  opacity: 0%;
}

section {
  margin-bottom: 1em;
  opacity: 0%;
  /* transform: translateX(-50px); */
  max-width: 400px;
}

.ico-sol {
  display: inline;
  height: 0.7em;
  margin: auto;
  /* filter: contrast(1.5); */
  margin: 0 0.2em;
  -webkit-filter: drop-shadow(1px 1px 1px #222222);
  filter: drop-shadow(1px 1px 1px #8b8b8b);
}

.addy {
  display: flex;
  gap: 0.5em;
}

b {
  font-weight: 500;
  letter-spacing: 0.03em;
}

button {
  border-radius: 0.3em;
  width: 4em;
  font-family: "Teko", sans-serif;
  font-size: 0.5em;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: white;
  background-color: rgba(0, 156, 34, 0.11);
  border: 0.5px solid rgba(255, 255, 255, 0.37);
  transition: border-color 150ms;
  transition: background-color 150ms;
}
button:hover {
  background-color: #9ce3ff;
  border-color: 0.5px solid rgb(255, 255, 255);
}
.rainbow {
  letter-spacing: 5px;
}
.rainbow_text_animated {
  background: linear-gradient(to right, #6666ff, #0099ff, #ff3399, #6666ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: rainbow_animation 1s ease-in-out infinite;
  background-size: 400% 100%;
}

@keyframes rainbow_animation {
  0%,
  100% {
    background-position: 0 0;
  }

  50% {
    background-position: 100% 0;
  }
}

.links {
  display: flex;
  flex-direction: row;
  font-size: 1.5em;
  height: 1.5em;
}
.links a {
  position: relative;
  width: 1.4em;
  transition: font-size 140ms;
}

.links a:hover {
  color: #9ce3ff;
  font-size: 1.4em;
}


.addyText{
  letter-spacing: -0.02em;
  font-size: 0.8em;
}
.addyText:hover {
  color: #9ce3ff;
}

@media only screen and (max-width: 1270px) {
  body {
    font-size: 1.7em;
  }
  img{
    height: 400px;
  }
  .addyText {
    text-decoration: underline;
  }
}

@media only screen and (max-width: 430px) {
  body {
    font-size: 1.2em;
  }
  main{
    align-content: center;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: start;
  }
  section{
    max-width: 350px;
    margin-bottom: 0.5em;
  }
  .description{
    max-width: 270px;
  }
  img{
    height: 300px;
  }
}

`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 143:
/***/ ((module) => {

"use strict";


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

/***/ 246:
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 880:
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }
  if (!url) {
    return url;
  }

  // eslint-disable-next-line no-underscore-dangle, no-param-reassign
  url = String(url.__esModule ? url.default : url);
  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }
  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }
  return url;
};

/***/ }),

/***/ 960:
/***/ ((module) => {

"use strict";


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

/***/ 443:
/***/ ((module) => {

"use strict";


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

/***/ 628:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 120:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 81:
/***/ ((module) => {

"use strict";


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

/***/ 849:
/***/ ((module) => {

"use strict";


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

/***/ 230:
/***/ (() => {

window.addEventListener("load", (event) => {
  const addy = "ABY5ninccQKJJG9t3mFkaL9QTvAuL3zBamkjn1uAnT7K";

  document.getElementById("copyButton").addEventListener("click", function () {
    navigator.clipboard.writeText(addy);
  });

  const timeline = anime.timeline({
    easing: "easeInSine",
    // duration: 750,
  });

  timeline.add({
    targets: "section",
    keyframes: [{ translateX: 75 }, { translateX: 0 }],
    duration: 500,
    // direction: "reverse",
    delay: anime.stagger(100),
  });
  timeline.add(
    {
      targets: "section",
      opacity: "100%",
      duration: 1000,
      delay: anime.stagger(100),
    },
    100
  );

  //   timeline.add(
  //     {
  //       targets: ".image",
  //       keyframes: [{ translateX: -300 }, { translateX: 0 }],
  //       duration: 300,
  //       // direction: "reverse",
  //     },
  //     100
  //   );

  timeline.add(
    {
      targets: ".image",
      opacity: "100%",
      duration: 750,
    },
    25
  );
  timeline.add(
    {
      targets: "h1",
      opacity: "100%",
      duration: 750,
    },
    25
  );
});


/***/ }),

/***/ 300:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "599e309e2aa3ea7898a4.png";

/***/ }),

/***/ 587:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e915911ea83ca26fd224.png";

/***/ }),

/***/ 545:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "816c4a4413c5d1c88fe4.png";

/***/ }),

/***/ 453:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "43a0081432a2d86ab717.css";

/***/ }),

/***/ 465:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e4230bac1839bd2e6ad4.js";

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
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
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
/******/ 			792: 0
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.4_webpack@5.91.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(960);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.4_webpack@5.91.0/node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(81);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.4_webpack@5.91.0/node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(443);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.4_webpack@5.91.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(120);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.4_webpack@5.91.0/node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(628);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.4_webpack@5.91.0/node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(849);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.10.0_webpack@5.91.0/node_modules/css-loader/dist/cjs.js!./public/styles.css
var styles = __webpack_require__(25);
;// CONCATENATED MODULE: ./public/styles.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(styles/* default */.A, options);




       /* harmony default export */ const public_styles = (styles/* default */.A && styles/* default */.A.locals ? styles/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./public/main.js
var main = __webpack_require__(230);
// EXTERNAL MODULE: ./public/images/pepecook.png
var pepecook = __webpack_require__(587);
// EXTERNAL MODULE: ./public/images/sol.png
var sol = __webpack_require__(545);
// EXTERNAL MODULE: ./node_modules/.pnpm/html-loader@5.0.0_webpack@5.91.0/node_modules/html-loader/dist/runtime/getUrl.js
var getUrl = __webpack_require__(880);
var getUrl_default = /*#__PURE__*/__webpack_require__.n(getUrl);
;// CONCATENATED MODULE: ./public/index.html
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(300), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(453), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(465), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(587), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(545), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = getUrl_default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = getUrl_default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = getUrl_default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = getUrl_default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = getUrl_default()(___HTML_LOADER_IMPORT_4___);
var code = "<!DOCTYPE html> <html lang=\"en\"> <head> <meta charset=\"UTF-8\"/> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"/> <title>$BRO Coin</title> <meta name=\"description\" content=\"Memecoin on Solana: $BRO is cooking something...\"/> <link rel=\"icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"/> <meta property=\"og:title\" content=\"$BRO Coin\"/> <meta property=\"og:description\" content=\"$BRO is cooking something...\"/> <meta property=\"og:url\" content=\"https://justbro.xyz\"/> <meta property=\"og:type\" content=\"website\"/> <meta property=\"og:image\" content=\"https://justbro.xyz/pepeog.png\"/> <meta name=\"twitter:card\" content=\"summary_large_image\"/> <meta name=\"twitter:title\" content=\"$BRO Coin\"/> <meta name=\"twitter:description\" content=\"Memecoin on Solana: $BRO is cooking something...\"/> <meta name=\"twitter:image\" content=\"https://justbro.xyz/pepeog.png\"/> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"/> <meta charset=\"UTF-8\"/> <meta name=\"robots\" content=\"index, follow\"/> <link href=\"https://cdn.jsdelivr.net/npm/reset-css@5.0.2/reset.min.css\" rel=\"stylesheet\"/> <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css\" integrity=\"sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==\" crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\"/> <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\"/> <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin/> <link href=\"https://fonts.googleapis.com/css2?family=Inter:wght@800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Teko:wght@300..700&display=swap\" rel=\"stylesheet\"/> <" + "script src=\"https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.2/anime.min.js\" integrity=\"sha512-aNMyYYxdIxIaot0Y1/PLuEu3eipGCmsEUBrUq+7aVyPGMFH8z0eTP0tkqAvv34fzN6z+201d3T8HPb1svWSKHQ==\" crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\"><" + "/script> <link href=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" rel=\"stylesheet\"/> <" + "script defer=\"defer\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"><" + "/script> </head> <body> <main> <div class=\"image\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"Pepe frog cooking something\"/>$BRO is cookin </div> <div class=\"content\"> <h1 class=\"rainbow rainbow_text_animated\">$BRO</h1> <section class=\"description\"> <b>Chef memecoin</b> to understand flavors and cooking techniques. </section> <section> Min: <b>0.25</b>/Max: <b>10</b> <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" class=\"ico-sol\"/> </section> <section><b>50%</b> Presale : <b>50%</b> LP</section> <section> BUY <b>$BRO</b> SEND <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" class=\"ico-sol\" alt=\"$SOL\"/> TO <section class=\"addy\"> <a class=\"addyText\" href=\"https://explorer.solana.com/address/ABY5ninccQKJJG9t3mFkaL9QTvAuL3zBamkjn1uAnT7K\">ABY5ninccQKJJG9t3mFkaL9QTvAuL3zBamkjn1uAnT7K</a> <button id=\"copyButton\"><i class=\"fa-solid fa-copy\"></i></button> </section> </section> <section class=\"trade\"> Socials: <div class=\"links\"> <a class=\"fa-brands fa-x-twitter\" href=\"https://twitter.com/BroskiWeb3\"></a> <a class=\"fa-brands fa-telegram\" href=\"https://t.me/+m103BZ6tIxc1ZjJk\"></a> </div> </section> </div> </main> </body> </html> ";
// Exports
/* harmony default export */ const public_0 = ((/* unused pure expression or super */ null && (code)));
;// CONCATENATED MODULE: ./public/images/pepeog.png
const pepeog_namespaceObject = __webpack_require__.p + "c1455d8c38bbc2dac11f.png";
// EXTERNAL MODULE: ./public/images/icon.png
var icon = __webpack_require__(300);
;// CONCATENATED MODULE: ./public/entry.js







// import sol from './images/sol.png'

})();

/******/ })()
;