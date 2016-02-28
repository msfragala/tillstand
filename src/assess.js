export default function(target, state) {
  if (target.className.search(state.affirmative) > -1) {
    return true;
  } else if (target.className.search(state.negative) > -1) {
    return false;
  } else {
    return null;
  }
}
