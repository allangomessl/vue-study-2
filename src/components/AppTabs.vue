<template lang="pug">
  ul.app-tabs.nav.nav-tabs
    li(v-for="item in items")
      a(v-bind:href="item.url" data-toggle="tab") {{ item.label }}
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.nav
  align-self: flex-end
  margin-bottom: -1px
  > :first-child
    border-left: 1px solid
  li
    border-top: 1px solid
    border-right: 1px solid
  li a
    margin: 0
  li.active a
    background-color: #000
  li:not(.active) a
    border-bottom: 1px solid #555;
</style>
