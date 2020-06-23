import * as mutations from '@/store/cards/mut.js';
import * as getters from '@/store/cards/getters.js';
import state from '@/store/cards/state.js';

export default {
  modules: {
    cards: {
      namespaced: true,
      mutations,
      getters,
      state
    }
  }
}