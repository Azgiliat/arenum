<template lang="pug">
  div(class="tournaments")
    transition(name="loading" mode="out-in" :duration="2000")
      component(:is="currentComponent" :error="currentComponent === 'Error' && error")
</template>

<script>
  import { mapActions, mapState, mapGetters } from 'vuex';
  import Loader from "@/components/Loader.vue";
  import CardsList from "@/components/CardsList.vue";
  import Error from '@/components/Error.vue';
  export default {
    name: "Cards",
    components: {
      Loader,
      CardsList,
      Error
    },
    methods: {
      ...mapActions('cards', {
        loadCards: 'loadCards'
      })
    },
    computed: {
      ...mapState('cards', {
        error: 'initialError',
        initialLoading: 'initialLoading'
      }),
      ...mapGetters('cards', {
        gotError: 'gotInitialError'
      }),
      currentComponent() {
        if (this.initialLoading) {
          return 'Loader'
        }
        if (this.gotError) {
          return 'Error'
        }
        return 'CardsList'
      }
    },
    created() {
      this.loadCards(false)
    }
  }
</script>

<style lang="stylus" scoped>
.tournaments
  width: 768px;
  margin: 0 auto;
</style>