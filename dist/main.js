/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <title>Studio</title>\r\n    <script\r\n      src=\"https://kit.fontawesome.com/4481fae25d.js\"\r\n      crossorigin=\"anonymous\"\r\n    ></script>\r\n    <link\r\n      href=\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap\"\r\n      rel=\"stylesheet\"\r\n    />\r\n  </head>\r\n  <body>\r\n    <header class=\"header\">\r\n      <div class=\"header__top\">\r\n        <div class=\"container\">\r\n          <div class=\"header__left-block\">\r\n            <img\r\n              src=\"images/studio_logo.png\"\r\n              alt=\"studio-logo\"\r\n              class=\"header__logo\"\r\n            />\r\n            <nav class=\"header__nav\">\r\n              <a href=\"#\" class=\"header__nav-item\">Individuals</a>\r\n              <a href=\"#\" class=\"header__nav-item\">Companies</a>\r\n              <a href=\"#\" class=\"header__nav-item\">The Studio</a>\r\n              <a href=\"#\" class=\"header__nav-item\">About Us</a>\r\n              <a href=\"#\" class=\"header__nav-item\">Blog</a>\r\n            </nav>\r\n          </div>\r\n          <div class=\"header__right-block\">\r\n            <a href=\"\" class=\"header__book-btn orange-btn\">Book Now</a>\r\n            <nav class=\"header__social\">\r\n              <a href=\"#\" class=\"header__social-item\">\r\n                <i class=\"fab fa-facebook-f\"></i>\r\n              </a>\r\n              <a href=\"#\" class=\"header__social-item\">\r\n                <i class=\"fab fa-instagram\"></i>\r\n              </a>\r\n              <a href=\"#\" class=\"header__social-item\">\r\n                <i class=\"fab fa-linkedin-in\"></i>\r\n              </a>\r\n              <a href=\"#\" class=\"header__social-item\">\r\n                <i class=\"fab fa-yelp\"></i>\r\n              </a>\r\n              <a href=\"#\" class=\"header__social-item\">\r\n                <i class=\"fab fa-google\"></i>\r\n              </a>\r\n            </nav>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"header__banner\">\r\n        <div class=\"container\">\r\n          <div class=\"header__banner-content\">\r\n            <h1 class=\"header__banner-title\">\r\n              Fast. Simple. Professional Headshots.\r\n            </h1>\r\n            <p>#1 Rated Headshot Photographers.</p>\r\n            <a href=\"#\" class=\"header__banner-btn orange-btn\"\r\n              >Browse Sessions</a\r\n            >\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </header>\r\n    <div class=\"content\">\r\n      <div class=\"content__services\">\r\n        <article class=\"content__services-item\">\r\n          <div class=\"content__services-title\">\r\n            <i class=\"far fa-user\"></i>\r\n            <span>Individual Sessions</span>\r\n          </div>\r\n          <ul class=\"content__services-list\">\r\n            <div class=\"content__services-list-item\">\r\n              <li><span class=\"big-number\">1</span>Studio Sessions</li>\r\n            </div>\r\n            <div class=\"content__services-list-item\">\r\n              <li><span class=\"big-number\">2</span>Outdoor Sessions</li>\r\n            </div>\r\n            <div class=\"content__services-list-item\">\r\n              <li><span class=\"big-number\">3</span>In-Office Sessions</li>\r\n            </div>\r\n          </ul>\r\n          <a href=\"#\" class=\"content__services-btn orange-btn\">See More</a>\r\n        </article>\r\n        <article class=\"content__services-item content__services-item_grey-bg\">\r\n          <div class=\"content__services-title\">\r\n            <i class=\"fas fa-users\"></i>\r\n            <span>Companies Sessions</span>\r\n          </div>\r\n          <ul class=\"content__services-list\">\r\n            <div class=\"content__services-list-item\">\r\n              <li><span class=\"big-number\">1</span>Group On-Sites</li>\r\n            </div>\r\n            <div class=\"content__services-list-item\">\r\n              <li><span class=\"big-number\">2</span>Corporate Accounts</li>\r\n            </div>\r\n          </ul>\r\n          <a href=\"#\" class=\"content__services-btn orange-btn\">See More</a>\r\n        </article>\r\n      </div>\r\n    </div>\r\n    <div class=\"map\">\r\n      <iframe\r\n        src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8799.715140741093!2d30.546411379037803!3d50.428185597343656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf0b9936e5d3%3A0x46d4b72e00ca7335!2z0KfQvtGA0L3QtSDQnNC-0YDQtQ!5e0!3m2!1sru!2sua!4v1602510045261!5m2!1sru!2sua\"\r\n        height=\"560\"\r\n        frameborder=\"0\"\r\n        style=\"border: 0\"\r\n        allowfullscreen=\"\"\r\n        aria-hidden=\"false\"\r\n        tabindex=\"0\"\r\n      ></iframe>\r\n      <div class=\"map__search-banner\">\r\n        <h2>Studio Near Me</h2>\r\n        <p>Search for your professional by zip code:</p>\r\n        <form action=\"#\">\r\n          <input type=\"text\" name=\"map-search\" />\r\n          <input type=\"submit\" value=\"Search\" class=\"orange-btn\" />\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <div class=\"services\">\r\n      <h2 class=\"services__title\">Our professional services</h2>\r\n      <div class=\"services__body\">\r\n        <nav class=\"services__nav\">\r\n          <a class=\"services__nav-item active\" href=\"##\">All</a>\r\n          <a class=\"services__nav-item\" href=\"##\">Modeling</a>\r\n          <a class=\"services__nav-item\" href=\"##\">Acting</a>\r\n          <a class=\"services__nav-item\" href=\"##\">Corporate</a>\r\n          <a class=\"services__nav-item\" href=\"##\">Business</a>\r\n          <a class=\"services__nav-item\" href=\"##\">Professional</a>\r\n          <a class=\"services__nav-item\" href=\"##\">Group</a>\r\n          <a class=\"services__nav-item\" href=\"##\">Company</a>\r\n          <a class=\"services__nav-item\" href=\"##\">Officer</a>\r\n        </nav>\r\n        <div class=\"services__gallery\">\r\n          <div class=\"services__gallery-body\">\r\n            <div class=\"services__slider\">\r\n              <div class=\"services__slider-item\">\r\n                <img src=\"images/service-1.png\" alt=\"\" />\r\n                <div class=\"services__slider-hidden\">\r\n                  <a href=\"##\">Company</a>\r\n                  <a href=\"##\">Check Service <span>&rarr;</span></a>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"services__slider-item\">\r\n                <img src=\"images/service-2.png\" alt=\"\" />\r\n                <div class=\"services__slider-hidden\">\r\n                  <a href=\"##\">Company</a>\r\n                  <a href=\"##\">Check Service <span>&rarr;</span></a>\r\n                </div>\r\n              </div>\r\n              <div class=\"services__slider-item\">\r\n                <img src=\"images/service-3.png\" alt=\"\" />\r\n                <div class=\"services__slider-hidden\">\r\n                  <a href=\"##\">Company</a>\r\n                  <a href=\"##\">Check Service <span>&rarr;</span></a>\r\n                </div>\r\n              </div>\r\n              <div class=\"services__slider-item\">\r\n                <img src=\"images/service-4.png\" alt=\"\" />\r\n                <div class=\"services__slider-hidden\">\r\n                  <a href=\"##\">Company</a>\r\n                  <a href=\"##\">Check Service <span>&rarr;</span></a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <button class=\"services__arrow left-arrow\">&larr;</button>\r\n            <button class=\"services__arrow right-arrow\">&rarr;</button>\r\n          </div>\r\n\r\n          <div class=\"services__big-slider\">\r\n            <img src=\"images/service-1.png\" alt=\"\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <section class=\"headshots\">\r\n      <div class=\"headshots__content\">\r\n        <div class=\"headshots__wrap\">\r\n          <div class=\"headshots__important\">\r\n            <h1 class=\"headshots__important-title\">\r\n              Why are headshots important?\r\n            </h1>\r\n            <p>\r\n              It may not seem indispensable, but lorem ipsum dolor sit amet,\r\n              consectetur adipiscing elit. Donec nisi enim, finibus non\r\n              malesuada vitae, porttitor vitae enim. Nulla eget fringilla\r\n              libero, ut ultricies neque. Morbi id aliquet sem. Ut mattis diam\r\n              sit amet orci faucibus dignissim. Aliquam erat volutpat. Curabitur\r\n              eu efficitur quam.\r\n            </p>\r\n          </div>\r\n          <div class=\"headshots__tips\">\r\n            <h1 class=\"headshots__tips-title\">5 Useful Tips</h1>\r\n            <div class=\"headshots__tips-body\">\r\n              <div class=\"headshots__tips-item\">\r\n                <div class=\"headshots__tips-svg\">\r\n                  <svg>\r\n                    <use xlink:href=\"images/sprite.svg#mirror\"></use>\r\n                  </svg>\r\n                </div>\r\n                <p>Make sure it looks like you, not like you want to be.</p>\r\n              </div>\r\n              <div class=\"headshots__tips-item\">\r\n                <div class=\"headshots__tips-svg\">\r\n                  <svg>\r\n                    <use xlink:href=\"images/sprite.svg#camera\"></use>\r\n                  </svg>\r\n                </div>\r\n                <p>\r\n                  Go professional, it’s worth it, because cheap looks cheap.\r\n                </p>\r\n              </div>\r\n              <div class=\"headshots__tips-item\">\r\n                <div class=\"headshots__tips-svg\">\r\n                  <svg>\r\n                    <use xlink:href=\"images/sprite.svg#studio\"></use>\r\n                  </svg>\r\n                </div>\r\n                <p>Control framing, lighting & background.</p>\r\n              </div>\r\n              <div class=\"headshots__tips-item\">\r\n                <div class=\"headshots__tips-svg\">\r\n                  <svg>\r\n                    <use xlink:href=\"images/sprite.svg#eye\"></use>\r\n                  </svg>\r\n                  <svg>\r\n                    <use xlink:href=\"images/sprite.svg#eye\"></use>\r\n                  </svg>\r\n                </div>\r\n                <p>It’s all about the eyes and what’s behind them.</p>\r\n              </div>\r\n              <div class=\"headshots__tips-item\">\r\n                <div class=\"headshots__tips-svg\">\r\n                  <svg>\r\n                    <use xlink:href=\"images/sprite.svg#tshirt\"></use>\r\n                  </svg>\r\n                </div>\r\n                <p>Stay chill with clothing & makeup, you must be you.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"headshots__services\">\r\n          <h3>Professional Headshot Services</h3>\r\n          <br />\r\n          <p>\r\n            Studio Inc is maecenas vulputate, sem at auctor vulputate, elit nunc\r\n            sagittis ligula, vitae pulvinar metus elit in ante. Aenean tincidunt\r\n            erat ac ante placerat facilisis. Fusce sed ligula tortor. Quisque\r\n            non dignissim erat. Vestibulum ante ipsum primis in faucibus.\r\n          </p>\r\n          <br />\r\n          <p>\r\n            Covid-19 Update: We are open for studio, office, and outdoor\r\n            sessions. For more information on our safety procedures, visit\r\n            <a href=\"##\">Studio Covid-19 Guidelines.</a>\r\n          </p>\r\n          <img\r\n            class=\"headshots__arrow\"\r\n            src=\"images/Arrow_icon.png\"\r\n            alt=\"arrow\"\r\n          />\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"clients\">\r\n      <h1>Clients love us</h1>\r\n      <h3>We have formed true friendships.</h3>\r\n      <div class=\"clients__reviews\">\r\n        <div class=\"clients__slider\">\r\n          <div class=\"clients__slider-item\">\r\n            <img src=\"images/client-1.png\" alt=\"client-1\" />\r\n            <div class=\"clients__slider-mark\">\r\n              <span>Andrea Mcconnell1 </span>\r\n              <div class=\"clients__slider-rating\">\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"clients__slider-feedback\">\r\n              <p>\r\n                Studio is exactly what our business has been lacking. I will\r\n                recommend them to everyone.\r\n              </p>\r\n              <span class=\"clients__slider-quotes\">&ldquo;</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"clients__slider-item\">\r\n            <img src=\"images/client-2.png\" alt=\"client-2\" />\r\n            <div class=\"clients__slider-mark\">\r\n              <span>Marvin Luna1 </span>\r\n              <div class=\"clients__slider-rating\">\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"clients__slider-feedback\">\r\n              <p>\r\n                Studio impressed me on multiple levels. Studio is worth much\r\n                more than offered.\r\n              </p>\r\n              <span class=\"clients__slider-quotes\">&ldquo;</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"clients__slider-item\">\r\n            <img src=\"images/client-3.png\" alt=\"client-3\" />\r\n            <div class=\"clients__slider-mark\">\r\n              <span>Shanai Haas1 </span>\r\n              <div class=\"clients__slider-rating\">\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"clients__slider-feedback\">\r\n              <p>\r\n                Studio saved my job interview. Keep up with the excellent work!\r\n              </p>\r\n              <span class=\"clients__slider-quotes\">&ldquo;</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"clients__slider-item\">\r\n            <img src=\"images/client-1.png\" alt=\"client-1\" />\r\n            <div class=\"clients__slider-mark\">\r\n              <span>Andrea Mcconnell2 </span>\r\n              <div class=\"clients__slider-rating\">\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"clients__slider-feedback\">\r\n              <p>\r\n                Studio is exactly what our business has been lacking. I will\r\n                recommend them to everyone.\r\n              </p>\r\n              <span class=\"clients__slider-quotes\">&ldquo;</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"clients__slider-item\">\r\n            <img src=\"images/client-2.png\" alt=\"client-2\" />\r\n            <div class=\"clients__slider-mark\">\r\n              <span>Marvin Luna2 </span>\r\n              <div class=\"clients__slider-rating\">\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"clients__slider-feedback\">\r\n              <p>\r\n                Studio impressed me on multiple levels. Studio is worth much\r\n                more than offered.\r\n              </p>\r\n              <span class=\"clients__slider-quotes\">&ldquo;</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"clients__slider-item\">\r\n            <img src=\"images/client-3.png\" alt=\"client-3\" />\r\n            <div class=\"clients__slider-mark\">\r\n              <span>Shanai Haas2 </span>\r\n              <div class=\"clients__slider-rating\">\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"clients__slider-feedback\">\r\n              <p>\r\n                Studio saved my job interview. Keep up with the excellent work!\r\n              </p>\r\n              <span class=\"clients__slider-quotes\">&ldquo;</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"clients__slider-item\">\r\n            <img src=\"images/client-1.png\" alt=\"client-1\" />\r\n            <div class=\"clients__slider-mark\">\r\n              <span>Andrea Mcconnell3 </span>\r\n              <div class=\"clients__slider-rating\">\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"clients__slider-feedback\">\r\n              <p>\r\n                Studio is exactly what our business has been lacking. I will\r\n                recommend them to everyone.\r\n              </p>\r\n              <span class=\"clients__slider-quotes\">&ldquo;</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"clients__slider-item\">\r\n            <img src=\"images/client-2.png\" alt=\"client-2\" />\r\n            <div class=\"clients__slider-mark\">\r\n              <span>Marvin Luna3 </span>\r\n              <div class=\"clients__slider-rating\">\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"clients__slider-feedback\">\r\n              <p>\r\n                Studio impressed me on multiple levels. Studio is worth much\r\n                more than offered.\r\n              </p>\r\n              <span class=\"clients__slider-quotes\">&ldquo;</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"clients__slider-item\">\r\n            <img src=\"images/client-3.png\" alt=\"client-3\" />\r\n            <div class=\"clients__slider-mark\">\r\n              <span>Shanai Haas3 </span>\r\n              <div class=\"clients__slider-rating\">\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n                <div class=\"clients__slider-rating-item\">★</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"clients__slider-feedback\">\r\n              <p>\r\n                Studio saved my job interview. Keep up with the excellent work!\r\n              </p>\r\n              <span class=\"clients__slider-quotes\">&ldquo;</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <div class=\"banner\">\r\n      <div class=\"banner__body\">\r\n        <h2>Fast, convenient & friendly professional headshot sessions.</h2>\r\n        <a href=\"##\" class=\"banner__btn orange-btn\">About Us</a>\r\n      </div>\r\n    </div>\r\n    <section class=\"blog\">\r\n      <h1 class=\"blog__title\">Our Blog</h1>\r\n      <h3 class=\"blog__subtitle\">Check our latest news.</h3>\r\n      <div class=\"blog__content\">\r\n        <article class=\"blog__item\">\r\n          <img src=\"images/blog-1.png\" alt=\"blog-img\" class=\"blog__item-img\" />\r\n          <h3 class=\"blog__item-title\">\r\n            all about headshots inside professional studios\r\n          </h3>\r\n          <div class=\"blog__meta\">\r\n            <a href=\"##\" class=\"blog__comments\">\r\n              <svg>\r\n                <use xlink:href=\"images/sprite.svg#comment\"></use>\r\n              </svg>\r\n              <span>15 Comments</span>\r\n            </a>\r\n            <span class=\"blog__date\">June, 2020</span>\r\n          </div>\r\n        </article>\r\n        <article class=\"blog__item\">\r\n          <img src=\"images/blog-2.png\" alt=\"blog-2\" class=\"blog__item-img\" />\r\n          <h3 class=\"blog__item-title\">\r\n            How do professionals edit their photos and What photo editing\r\n            software they use\r\n          </h3>\r\n          <div class=\"blog__meta\">\r\n            <a href=\"##\" class=\"blog__comments\">\r\n              <svg>\r\n                <use xlink:href=\"images/sprite.svg#comment\"></use>\r\n              </svg>\r\n              <span>9 Comments</span>\r\n            </a>\r\n            <span class=\"blog__date\">July, 2020</span>\r\n          </div>\r\n        </article>\r\n        <article class=\"blog__item\">\r\n          <img src=\"images/blog-3.png\" alt=\"blog-3\" class=\"blog__item-img\" />\r\n          <h3 class=\"blog__item-title\">\r\n            best Courses In Photography from home\r\n          </h3>\r\n          <div class=\"blog__meta\">\r\n            <a href=\"##\" class=\"blog__comments\">\r\n              <svg>\r\n                <use xlink:href=\"images/sprite.svg#comment\"></use>\r\n              </svg>\r\n              <span>17 Comments</span>\r\n            </a>\r\n            <span class=\"blog__date\">August, 2020</span>\r\n          </div>\r\n        </article>\r\n      </div>\r\n      <a href=\"##\" class=\"blog__btn orange-btn\">See All Posts</a>\r\n    </section>\r\n    <footer class=\"footer\">\r\n      <div class=\"footer__content\">\r\n        <div class=\"footer__row\">\r\n          <img src=\"images/studio_logo_white.png\" class=\"footer__logo\" />\r\n          <div class=\"footer__links\">\r\n            <span class=\"footer__title\">Links</span>\r\n            <ul>\r\n              <li class=\"footer__links-item\">\r\n                <a href=\"##\">Individuals</a>\r\n              </li>\r\n              <li class=\"footer__links-item\">\r\n                <a href=\"##\">Companies</a>\r\n              </li>\r\n              <li class=\"footer__links-item\">\r\n                <a href=\"##\">The Studio</a>\r\n              </li>\r\n              <li class=\"footer__links-item\">\r\n                <a href=\"##\">About Us</a>\r\n              </li>\r\n              <li class=\"footer__links-item\">\r\n                <a href=\"##\">Blog</a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"footer__resources\">\r\n            <span class=\"footer__title\">Resources</span>\r\n            <ul>\r\n              <li class=\"footer__resources-item\">\r\n                <a href=\"##\">Lorem ipsum dolor sit amet, consectetur adipis.</a>\r\n              </li>\r\n              <li class=\"footer__resources-item\">\r\n                <a href=\"##\">Donec nisi enim, finibus non malesuada vitae.</a>\r\n              </li>\r\n              <li class=\"footer__resources-item\">\r\n                <a href=\"##\"\r\n                  >Nulla eget fringilla libero, ut ultricies neque.</a\r\n                >\r\n              </li>\r\n              <li class=\"footer__resources-item\">\r\n                <a href=\"##\">Morbi id aliquet sem. Ut mattis diam sit amet.</a>\r\n              </li>\r\n              <li class=\"footer__resources-item\">\r\n                <a href=\"##\"\r\n                  >Curabitur eu efficitur quam. Fusce interdum sem.</a\r\n                >\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <div class=\"footer__row\">\r\n          <div class=\"footer__address\">\r\n            <span class=\"footer__title\">Studio Inc</span>\r\n            <ul>\r\n              <li class=\"footer__address-item\">125 Southern Way</li>\r\n              <li class=\"footer__address-item\">EH23 1SZ</li>\r\n              <li class=\"footer__address-item\">North Middelton, UK</li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"footer__contact\">\r\n            <span class=\"footer__title\">Contact</span>\r\n            <ul>\r\n              <li class=\"footer__contact-item\">(123) 345 3781</li>\r\n              <li class=\"footer__contact-item\">smile@studio-inc.com</li>\r\n            </ul>\r\n          </div>\r\n          <ul class=\"footer__social\">\r\n            <li class=\"footer__social-item\">\r\n              <a href=\"##\">Facebook</a>\r\n            </li>\r\n            <li class=\"footer__social-item\">\r\n              <a href=\"##\">Instagram</a>\r\n            </li>\r\n            <li class=\"footer__social-item\">\r\n              <a href=\"##\">Linkedin</a>\r\n            </li>\r\n            <li class=\"footer__social-item\">\r\n              <a href=\"##\">Google Rating</a>\r\n            </li>\r\n            <li class=\"footer__social-item\">\r\n              <a href=\"##\">Yelp</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"footer__bottom\">\r\n        <div class=\"footer__rights\">\r\n          <span>© 2020. All rights reserved.</span>\r\n          <a href=\"##\">Privacy Policy</a>\r\n        </div>\r\n      </div>\r\n    </footer>\r\n  </body>\r\n</html>\r\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_2__);




if (true) {
  __webpack_require__(/*! ./index.html */ "./src/index.html");
}

jquery__WEBPACK_IMPORTED_MODULE_1___default()(".right-arrow").on("click", function () {
  var imgs = ["images/service-1.png", "images/service-2.png", "images/service-3.png", "images/service-4.png"];
  var big = jquery__WEBPACK_IMPORTED_MODULE_1___default()(".services__big-slider img");
  var index = imgs.indexOf(jquery__WEBPACK_IMPORTED_MODULE_1___default()(big).attr("src"));
  console.log(index);

  if (index !== -1) {
    if (index + 1 > 3) {
      index = -1;
    }
  }

  jquery__WEBPACK_IMPORTED_MODULE_1___default()(big).attr("src", imgs[index + 1]);
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()(".left-arrow").on("click", function () {
  var imgs = ["images/service-1.png", "images/service-2.png", "images/service-3.png", "images/service-4.png"];
  var big = jquery__WEBPACK_IMPORTED_MODULE_1___default()(".services__big-slider img");
  var index = imgs.indexOf(jquery__WEBPACK_IMPORTED_MODULE_1___default()(big).attr("src"));
  console.log(index);

  if (index !== -1) {
    if (index - 1 < 0) {
      index = 4;
    }
  }

  jquery__WEBPACK_IMPORTED_MODULE_1___default()(big).attr("src", imgs[index - 1]);
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()(".services__nav-item").on("click", function () {
  if (!jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).hasClass("active")) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(".services__nav-item").removeClass("active");
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).addClass("active");
  }
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()(".clients__slider").slick({
  arrows: false,
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi @babel/polyfill ./src/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"./node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map