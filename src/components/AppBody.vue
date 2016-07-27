<template lang="pug">
app-sidebar(v-bind:items="sidebar.items")
app-content(v-bind:title="sidebar.current.label")
  slot
</template>

<style lang="stylus">
</style>
