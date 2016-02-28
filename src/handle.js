export default function (stateName) {
  return {
    affirmative: `is-${stateName}`,
    negative: `not-${stateName}`
  }
}
