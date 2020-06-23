import {shallowMount, createLocalVue} from '@vue/test-utils';
import {toBeVisible} from '@testing-library/jest-dom/matchers';
import CardsList from "../src/components/CardsList";
import Card from "../src/components/Card";
import Error from "../src/components/Error";
import Vuex from 'vuex'

const localVue = createLocalVue();
localVue.use(Vuex);


describe('Cards list', () => {
  let options, store;

  beforeEach(() => {
    options = {
      stubs: ['tmp-component'],
      computed: {
        error() {
          return ''
        },
        cards() {
          return [{
            tournamentData: {
              cardImage: '',
              startedAt: Date.now(),
              paymentType: '',
              name: '',
              participateCount: 0,
              maxUsers: 100,
              prizeTable: [100],
              tournamentType: {
                gameMode: 'test'
              }
            }
          }]
        },
        loadingStatus() {
          return false
        },
        gotError() {
          return false
        }
      }
    }

    store = new Vuex.Store({
      modules: {
        cards: {
          namespaced: true,
          actions: {
            loadCards: jest.fn()
          }
        }
      }
    })
  })

  it('right number of cards', () => {
    const wrapper = shallowMount(CardsList, {
      ...options,
      store,
      localVue
    });

    expect(wrapper.findAllComponents(Card)).toHaveLength(options.computed.cards().length)
  })

  it('Is error showed', () => {
    expect.extend({toBeVisible})

    options.computed.gotError = function () {
      return true
    }

    const wrapper = shallowMount(CardsList, {
      ...options,
      store,
      localVue
    });

    expect(wrapper.findComponent(Error).element).toBeVisible()
  })
})
