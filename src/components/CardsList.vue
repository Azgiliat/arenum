<template lang="pug">
  section(class="all-tournaments" v-scroll="loadCards")
    transition-group(:name="'cards'" tag="ul" class="all-tournaments__list list")
      li(class="list__item" v-for="(card, index) in cards" :key="card.tournamentCode + index")
        Card(class="list__card" :info="card")
    transition(name="loader" duration="1500")
      p.all-tournaments__loader(v-show="loadingStatus") Загружаем следующие турниры
    transition(name="error" duration="1500")
      Error(v-show="gotError" :error="error")
</template>

<script>
  import Card from "@/components/Card.vue";
  import { mapState, mapActions, mapGetters } from "vuex";
  import Scroll from '@/directives/scroll.js';
  import Error from '@/components/Error.vue';

  export default {
    name: "CardsList",
    components: {
      Card,
      Error
    },
    directives: {
      scroll: Scroll
    },
    computed: {
      ...mapState('cards', {
        error: 'error',
        cards: 'cards',
        loadingStatus: 'loadingStatus'
      }),
      ...mapGetters('cards', {
        gotError: 'gotError'
      })
    },
    methods: {
      ...mapActions('cards', {
        loadCards: 'loadCards'
      })
    }
  }
</script>

<style lang="stylus" scoped>
  .list
    list-style: none;
    padding: 0;
    margin: 0;
</style>