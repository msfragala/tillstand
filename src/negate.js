import __assess__ from './assess';
export default function(target, states) {
  if (__assess__(target, states)) {
    target.className = target.className.replace(states.affirmative, states.negative);
  }
}
