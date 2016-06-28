/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path='./typings/index.d.ts'/>
	/// <reference path='../../../typings/index.d.ts'/>
	"use strict";
	var index_1 = __webpack_require__(1);
	var getQueryStringParameter = function (param) {
	    var params = document.URL.split('?')[1].split('&');
	    var strParams = '';
	    for (var i = 0; i < params.length; i = i + 1) {
	        var singleParam = params[i].split('=');
	        if (singleParam[0] === param) {
	            return decodeURIComponent(singleParam[1]);
	        }
	    }
	};
	var message = '';
	var appWebUrl = getQueryStringParameter('SPAppWebUrl');
	var hostWebUrl = getQueryStringParameter('SPHostUrl');
	var wrapper1 = index_1.contextHelper(appWebUrl);
	var wrapper2 = index_1.contextHelper(hostWebUrl, true);
	var wrapper3 = index_1.contextHelper();
	wrapper1.clientContext.load(wrapper1.web);
	wrapper1.clientContext.executeQueryAsync(function () {
	    message += 'App web title is ' + wrapper1.web.get_title() + '.';
	    wrapper2.clientContext.load(wrapper2.web);
	    wrapper2.clientContext.executeQueryAsync(function () {
	        message += ' Host web title is ' + wrapper2.web.get_title() + '.';
	        wrapper3.clientContext.load(wrapper3.web);
	        wrapper3.clientContext.executeQueryAsync(function () {
	            message += ' current web title is ' + wrapper3.web.get_title() + '.';
	            $('#message').text(message);
	        }, function (sender, args) {
	            $('#message').text(args.get_message());
	        });
	    }, function (sender, args) {
	        $('#message').text(args.get_message());
	    });
	}, function (sender, args) {
	    $('#message').text(args.get_message());
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	/// <reference path="./typings/index.d.ts"/>
	"use strict";
	function contextHelper(webUrl, isAppContextSite) {
	    var web = null;
	    var site = null;
	    var clientContext = null;
	    var appContextSite = null;
	    if (!webUrl || isAppContextSite) {
	        clientContext = SP.ClientContext.get_current();
	    }
	    else {
	        clientContext = new SP.ClientContext(webUrl);
	    }
	    if (isAppContextSite) {
	        appContextSite = new SP.AppContextSite(clientContext, webUrl);
	        web = appContextSite.get_web();
	        site = appContextSite.get_site();
	    }
	    else {
	        web = clientContext.get_web();
	        site = clientContext.get_site();
	    }
	    return {
	        web: web,
	        site: site,
	        clientContext: clientContext,
	        appContextSite: appContextSite
	    };
	}
	exports.contextHelper = contextHelper;


/***/ }
/******/ ]);