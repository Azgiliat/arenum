import {shallowMount, createLocalVue} from '@vue/test-utils'
import Cards from "../src/pages/Cards";
import Error from "../src/components/Error";
import Loader from "../src/components/Loader";
import CardsList from "../src/components/CardsList";
import Vuex from 'vuex'

const localVue = createLocalVue();
localVue.use(Vuex);


describe('Right component in Cards', () => {
  let state, getters, actions;

  beforeEach(() => {
    state = {
      initialError: '',
      initialLoading: false
    }
    getters = {
      gotInitialError() {
        return false
      },
      gotError() {
        return false
      }
    }
    actions = {
      loadCards: jest.fn()
    }
  })

  it('data load finished without errors', () => {
    const store = new Vuex.Store({
      modules: {
        cards: {
          namespaced: true,
          state,
          getters,
          actions
        }
      }
    })

    const wrapper = shallowMount(Cards, {
      localVue,
      store
    })

    expect(wrapper.findComponent(CardsList).exists()).toBe(true)
  })

  it('initialLoading === true => loader exist', () => {
    state.initialLoading = true

    const store = new Vuex.Store({
      modules: {
        cards: {
          namespaced: true,
          state,
          getters,
          actions
        }
      }
    })

    const wrapper = shallowMount(Cards, {
      localVue,
      store
    })

    expect(wrapper.findComponent(Loader).exists()).toBe(true)
  })

  it('gotError => Error component exist', () => {
    {
      getters.gotInitialError = function () {
        return true
      }

      const store = new Vuex.Store({
        modules: {
          cards: {
            namespaced: true,
            state,
            getters,
            actions
          }
        }
      })

      const wrapper = shallowMount(Cards, {
        localVue,
        store
      })

      expect(wrapper.findComponent(Error).exists()).toBe(true);
    }
  })
})
