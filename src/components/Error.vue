<template lang="pug">
  p.error {{error}}
</template>

<script>
  export default {
    name: "Error",
    props: {
      error: {
        type: String,
        require: true
      }
    }
  }
</script>

<style scoped>

</style>