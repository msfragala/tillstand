(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["tillstand"] = factory();
	else
		root["tillstand"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports) {

	/**
	 *
	 */
	module.exports.check = function __check(target, stateName) {
	  if (typeof stateName === 'string') {
	    stateName = generateNames(stateName);
	  }
	  switch (true) {
	    case (target instanceof HTMLElement):
	      return assessState(target, stateName);
	    case (target instanceof NodeList):
	    case (target instanceof jQuery):
	    case (target instanceof Array):
	      for(var i = 0; i < target.length; i++) {
	        if (!assessState(target[i], stateName)) {
	          return false;
	        }
	      }
	      return true;
	    default: return;
	  }
	}

	/**
	 *
	 */
	module.exports.toggle = function __toggle(target, stateName) {
	  if (typeof stateName === 'string') {
	    stateName = generateNames(stateName);
	  }
	  switch (true) {
	    case (target instanceof HTMLElement):
	      if (!assess(target, stateName)) {
	        affirmState(target, stateName);
	        return true;
	      } else {
	        negateState(target, stateName);
	        return false;
	      }
	    case (target instanceof NodeList):
	    case (target instanceof jQuery):
	    case (target instanceof Array):
	      for(var i = 0; i < target.length; i++) {
	        __toggle(target[i], stateName);
	      }
	      break;
	    default: return;
	  }
	}

	/**
	 *
	 */
	module.exports.affirm = function __affirm(target, stateName) {
	  if (typeof stateName === 'string') {
	    stateName = generateNames(stateName);
	  }
	  switch (true) {
	    case (target instanceof HTMLElement):
	      if (!assessState(target, stateName)) {
	        affirmState(target, stateName);
	      }
	      break;
	    case (target instanceof NodeList):
	    case (target instanceof jQuery):
	    case (target instanceof Array):
	      for(var i = 0; i < target.length; i++) {
	        __affirm(target[i], stateName);
	      }
	      break;
	    default: return;
	  }
	}

	/**
	 *
	 */
	module.exports.negate = function __negate(target, stateName) {
	  if (typeof stateName === 'string') {
	    stateName = generateNames(stateName);
	  }
	  switch (true) {
	    case (target instanceof HTMLElement):
	      if (assessState(target, stateName)) {
	        negateState(target, stateName);
	      }
	      break;
	    case (target instanceof NodeList):
	    case (target instanceof jQuery):
	    case (target instanceof Array):
	      for(var i = 0; i < target.length; i++) {
	        __negate(target[i], stateName);
	      }
	      break;
	    default: return;
	  }
	}

	/**
	 *
	 */
	function affirmState(target, states) {
	  switch (assessState(target, states)) {
	    case false:
	      target.className = target.className.replace(states.negative, states.affirmative);
	      break;
	    case null:
	      target.className += states.affirmative;
	  }
	}

	/**
	 *
	 */
	function assessState(target, state) {
	  if (target.className.search(state.affirmative) > -1) {
	    return true;
	  } else if (target.className.search(state.negative) > -1) {
	    return false;
	  } else {
	    return null;
	  }
	}

	/**
	 *
	 */
	function negateState(target, states) {
	  if (assessState(target, states)) {
	    target.className = target.className.replace(states.affirmative, states.negative);
	  }
	}

	/**
	 *
	 */
	function generateNames(stateName) {
	  return {
	    affirmative: 'is-' + stateName,
	    negative: 'not-' + stateName
	  }
	}


/***/ }
/******/ ])
});
;