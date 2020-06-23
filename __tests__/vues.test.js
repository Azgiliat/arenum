import conf from './store.config.js';
import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';

describe('store test', () => {
  const localVue = createLocalVue();
  let store;
  localVue.use(Vuex);

  beforeEach(() => {
    store = new Vuex.Store(conf);
  })

  it('increment number of cards and push new cards to store', () => {
    expect(store.state.cards.currentNumberOfCards).toBe(0);
    store.commit('cards/addCards', [{}, {}]);

    expect(store.state.cards.currentNumberOfCards).toBe(2);
  })

  it('error state getter change when error change', () => {
    expect(store.getters['cards/gotError']).toBe(false);
    store.commit('cards/setError', 'some error');
    expect(store.getters['cards/gotError']).toBe(true);
  })
})