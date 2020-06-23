export function gotError (state) {
  return !!state.error.length
}

export function gotInitialError (state) {
  return !!state.initialError.length
}