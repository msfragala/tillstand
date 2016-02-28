import __assess__ from './assess';
export default function(target, states) {
  switch (__assess__(target, states)) {
    case false:
      target.className = target.className.replace(states.negative, states.affirmative);
      break;
    case null:
      target.className += states.affirmative;
  }
}
