<template>
  <div class="gridproducts" >
    <productdetail v-for="product in products" :key="product.id" :product="product" />
    
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Productdetail from '../components/Products/Productdetail.vue'



export default {
  components: {
    Productdetail
  },

  methods: {
    ...mapActions(['getProducts'])
  },

  computed: {
    ...mapGetters(['products'])
  },

  mounted() {
    this.getProducts()
  }
}

</script>

<style>
.gridproducts {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 3rem;
  justify-items: center;
}
</style>