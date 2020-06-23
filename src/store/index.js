import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
import cards from './cards/index';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    cards
  }
});

store.$axios = Axios.create({
  baseURL: 'https://app.msrvbattle.ru/tournaments/games/v2/'
});

export default store
