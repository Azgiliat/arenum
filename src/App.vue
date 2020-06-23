<template lang="pug">
  div
    router-view
</template>
<script>
  export default {
    name: 'App',
    data() {
      return {
        asd: 'asd'
      }
    }
  }
</script>

<style lang="stylus">
  *,
  *::after,
  *::before
    box-sizing: inherit;

  html
    box-sizing: border-box;

  body
    font-family: main-font;
</style>
