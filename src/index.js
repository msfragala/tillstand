import __handle__ from './handle';
import __affirm__ from './affirm';
import __negate__ from './negate';
import __assess__ from './assess';

export function check(target, stateName) {
  if (typeof stateName === 'string') {
    stateName = __handle__(stateName);
  }
  switch (true) {
    case (target instanceof HTMLElement):
      return __assess__(target, stateName);
    case (target instanceof NodeList):
    case (target instanceof jQuery):
    case (target instanceof Array):
      for(let i = 0; i < target.length; i++) {
        if (!__assess__(target[i], stateName)) {
          return false;
        }
      }
      return true;
    default: return;
  }
}

export function toggle(target, stateName) {
  if (typeof stateName === 'string') {
    stateName = __handle__(stateName);
  }
  switch (true) {
    case (target instanceof HTMLElement):
      if (!__assess__(target, stateName)) {
        __affirm__(target, stateName);
        return true;
      } else {
        __negate__(target, stateName);
        return false;
      }
    case (target instanceof NodeList):
    case (target instanceof jQuery):
    case (target instanceof Array):
      for(let i = 0; i < target.length; i++) {
        toggle(target[i], stateName);
      }
      break;
    default: return;
  }
}

export function affirm(target, stateName) {
  if (typeof stateName === 'string') {
    stateName = __handle__(stateName);
  }
  switch (true) {
    case (target instanceof HTMLElement):
      if (!__assess__(target, stateName)) {
        __affirm__(target, stateName);
      }
      break;
    case (target instanceof NodeList):
    case (target instanceof jQuery):
    case (target instanceof Array):
      for(let i = 0; i < target.length; i++) {
        affirm(target[i], stateName);
      }
      break;
    default: return;
  }
}

export function negate(target, stateName) {
  if (typeof stateName === 'string') {
    stateName = __handle__(stateName);
  }
  switch (true) {
    case (target instanceof HTMLElement):
      if (__assess__(target, stateName)) {
        __negate__(target, stateName);
      }
      break;
    case (target instanceof NodeList):
    case (target instanceof jQuery):
    case (target instanceof Array):
      for(let i = 0; i < target.length; i++) {
        negate(target[i], stateName);
      }
      break;
    default: return;
  }
}
