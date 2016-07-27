<template lang="pug">
ul
  li(v-for="product in products") {{ product.name }}
input(type="text" v-model="product.name" placeholder="edit me")
button(@click="insert(product)") Inserir
</template>

<script>
import { Products } from '../product.actions'

export default {
  vuex: {
    getters: {
      products: ({ products }) => products.all
    },
    actions: {
      repository: ({ dispatch }) => new Products(dispatch)
    }
  },
  data () {
    return {
      product: { }
    }
  },
  methods: {
    insert: () => {
      this.repository().insert(this.product)
      this.product = {}
    }
  },
  created () {
  }
}
</script>

<style lang="sass">
</style>
