<template lang="pug">
  .navbar.navbar-default.navbar-fixed-top
    .navbar-header
        a.navbar-brand(href="#home") {{ products.name }}
</template>

<script>
export default {
  vuex: {
    getters: {
      products: ({ products }) => products.all
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
.navbar
  background-color: #282828
  border-bottom: 1px solid #555
  display: flex
.navbar-header
  width: 250px
  border-radius: 0px
</style>
