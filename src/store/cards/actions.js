function createURL(start = 0) {
  return `?start=${start}&gameCode=f533d4be-5b8e-11e9-8647-d663bd873d93&max=15&includePaid=true`
}

export function loadCards({state, commit}, payload = true) {
  if (payload) {
    commit('setLoadingStatus', true);
  } else {
    commit('setInitialLoading', true);
  }
  this.$axios.get(createURL(state.currentNumberOfCards))
    .then(response => {
      //throw new Error('test err');
      // if (payload) {
      //   throw new Error('test err')
      // }
      commit('addCards', response.data);
      commit('setError', '');
      if (payload) {
        commit('setError', '');
      } else {
        commit('setInitialError', '');
      }
      if (payload) {
        commit('setLoadingStatus', false);
      } else {
        commit('setInitialLoading', false);
      }
    })
    .catch(err => {
      console.error(err);
      if (payload) {
        commit('setError', 'Возникла ошибка при загрузке данных');
      } else {
        commit('setInitialError', 'Возникла ошибка при загрузке данных');
      }
      if (payload) {
        commit('setLoadingStatus', false);
      } else {
        commit('setInitialLoading', false);
      }
    })
}