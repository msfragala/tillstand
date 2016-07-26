/**
 * @param {(HTMLElement[]|string}) target - The elements to assess the `stateName` state for (can be an element, list of elements, or a selector to query)
 * @param {string} stateName - The basename of the state class to check
 * @returns {boolean} Whether all targets are affirmed for the `stateName` state
 */
module.exports.check = function __check(target, stateName) {
  if (typeof target === 'string') {
    target = document.querySelectorAll(target);
  }
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
 * @param {(HTMLElement[]|string}) target - The elements to toggle the `stateName` state for (can be an element, list of elements, or a selector to query)
 * @param {string} stateName - The basename of the state class to check
 */
module.exports.toggle = function __toggle(target, stateName) {
  if (typeof target === 'string') {
    target = document.querySelectorAll(target);
  }
  if (typeof stateName === 'string') {
    stateName = generateNames(stateName);
  }
  switch (true) {
    case (target instanceof HTMLElement):
      if (!assessState(target, stateName)) {
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
 * @param {(HTMLElement[]|string}) target - The elements to affirm the `stateName` state for (can be an element, list of elements, or a selector to query)
 * @param {string} stateName - The basename of the state class to check
 */
module.exports.affirm = function __affirm(target, stateName) {
  if (typeof target === 'string') {
    target = document.querySelectorAll(target);
  }
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
 * @param {(HTMLElement[]|string}) target - The elements to negate the `stateName` state for (can be an element, list of elements, or a selector to query)
 * @param {string} stateName - The basename of the state class to check
 */
module.exports.negate = function __negate(target, stateName) {
  if (typeof target === 'string') {
    target = document.querySelectorAll(target);
  }
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
