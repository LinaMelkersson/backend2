<template>
<div>
    <div class="place" v-if="product">

      <div class="centrerad">
          <img class="unikimg" :src="(product.imgurl)" alt="">
          <div class="produktbeskrivning">
              <h1>{{product.name}}</h1>
              <br>
              <p>{{product.shortDescription}}</p>
              <p>{{product.longDescription}}</p>
              <br>
              <h3>{{product.price}}kr</h3>
          </div>

          <div class="mt-5">
            <div class="row mt-3">
                <div class="col-md-12 text-center text-md-left text-md-right">
                  <button class="btn btn-primary btn-rounded" @click="addProductToCart({ product, quantity })">Add to cart</button>
                </div>
            </div>
          </div>
      </div>
    </div>
</div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
  props:['id'],
  data() {
    return {
      quantity: 1
    }
  },
  methods: {
    ...mapActions(['getProduct', 'addProductToCart'])
  },
  computed: {
    ...mapGetters(['product'])
  },
  created() {
    this.getProduct(this.id)
  }
}



</script>

<style>


.place {
    margin: auto;
    width: 80%;
    padding-top: 5rem;
}


.btn {
  background-color: black;
  border: none;
  margin-bottom: 3rem;
}

.btn:hover {
  background-color: white;
  color: black;
}

.centrerad {
    display: grid;
    grid-template-columns: 1fr 1fr ;
    justify-content: center;
    margin: auto;
    width: 80%;
}

.unikimg {
    width: 20rem;
    margin: auto;
}




</style>