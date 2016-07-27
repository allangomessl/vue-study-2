<template lang="pug">
.sidebar.col-fixed-250
  .bs-component
    ul.nav.nav-pills.nav-stacked
      li(v-for="(index, obj) in items" v-bind:class="{ active: index == current }")
        a(@click="select(index)") {{ obj.label }}
</template>



<style lang="stylus">
.sidebar
  padding: 5px;
  overflow: auto;
  width: 250px;
  border-right: 1px #282828 solid;
</style>
