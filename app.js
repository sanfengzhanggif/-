/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _app = __webpack_require__(0);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $hanzi = document.querySelector('#inpName');
var $surname = document.querySelector('#surname');
var $pinyin = document.querySelector('#theNmae');
// var upperCaseStr ;

if (!Pinyin.isSupported()) {
  $hanzi.remove();
  $pinyin.remove();
  document.querySelector('#not-support').className = '';
} else {
  $hanzi.onkeyup = onChange;
  $hanzi.onchange = onChange;
  $hanzi.oncopy = onChange;
}

function onChange() {
  var value = $hanzi.value;
  var pinyin = '';
  if (value) {
    var tokens = Pinyin.parse($hanzi.value);
    var lastToken;
    tokens.forEach(function (v, i) {
      if (v.type === 2) {
        pinyin += pinyin && !/\n|\s/.test(lastToken.target) ? ' ' + format(v.target) : format(v.target);
      } else {
        pinyin += (lastToken && lastToken.type === 2 ? ' ' : '') + v.target;
      }
      lastToken = v;
    });

    if (pinyin.indexOf(" ") == -1) {
        var englishName = pinyin.split("");
        $pinyin.value = pinyin;
        $surname.value = englishName.shift();
        $pinyin.value = englishName.slice(0).join(""); 
    } else {  
        var chineseName = pinyin.split(" ");
        $pinyin.value = pinyin;
        $surname.value = chineseName.shift();
        $pinyin.value = chineseName.slice(0).join(" "); 
    } 
  }
  if(!value){
      $surname.value = "";
      $pinyin.value = ""; 
  }
  
}
//首字母换成大写
// console.log(firstUpperCase2("xiao dan"));

// console.log(("xiao dan").firstUpperCase());

// function upperCase(pmram){
//     var upperCaseStr;
//     pmram.replace(/\b\w+\b/g, function(word){
//         upperCaseStr = word.substring(0,1).toUpperCase();
//     });
//     return upperCaseStr;
// }
// function firstUpperCase2(str) {
//   return str.toLowerCase().replace(/^\S/g,function(s){return s.toUpperCase();});
// }

//   String.prototype.firstUpperCase = function(){
//       return this.replace(/^\S/,function(s){return s.toUpperCase();});
//   }
//   console.log(("xiao dan").firstUpperCase());




function format(str) {
  if (str) {
    return str.toLowerCase();
  }
  return '';
}

/***/ })
/******/ ]);