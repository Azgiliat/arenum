export function addCards (state, payload) {
  state.cards.push(...payload);
  state.currentNumberOfCards += payload.length;
}

export function setLoadingStatus (state, payload) {
  state.loadingStatus = payload;
}

export function setInitialLoading (state, payload) {
  state.initialLoading = payload;
}

export function setError (state, payload) {
  state.error = payload;
}

export function setInitialError(state, payload) {
  state.initialError = payload;
}
