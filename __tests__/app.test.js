import {mount, createLocalVue} from '@vue/test-utils';
import TestRouter from "../src/components/TestRouter.vue";
import App from '@/App.vue';
import Cards from "../src/pages/Cards";
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import {routes} from '@/router/index.js';

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);

describe('App', () => {
  let state, getters, actions, store;
  const router = new VueRouter({
    routes: [
      ...routes,
      {
        path: '/test-router',
        component: TestRouter
      }
    ]
  })

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
    store = new Vuex.Store({
      modules: {
        cards: {
          namespaced: true,
          state,
          getters,
          actions
        }
      }
    })
  })

  it('right router-view', async () => {
    const wrapper = mount(App, {
      localVue,
      router,
      store
    })

    expect(wrapper.findComponent(Cards).exists()).toBe(true);

    await router.push('/test-router');
    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent(TestRouter).exists()).toBe(true)
  })
})
