<template>
<div>
    <div class="place" v-if="product">
      <router-link to="/"><i class="fas fa-arrow-left"></i></router-link>

      <div class="centrerad">
          <img class="unikimg" :src="(product.imgurl)" alt="">
          <div class="produktbeskrivning">
              <p>{{product.longDescription}}</p>
              <h1>{{product.name}}</h1>
              <p>{{product.shortDescription}}</p>
              <h3>{{product.price}}kr</h3>
          </div>

            <section class="color">
                <div class="mt-5">

                    <div class="row mt-3">
                        <div class="col-md-12 text-center text-md-left text-md-right">
                            <button class="btn btn-primary btn-rounded" @click="addProductToCart({ product, quantity })">Add to cart</button>
                        </div>
                    </div>
                </div>
            </section>
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
.fa-arrow-left {
    font-size: 20pt;
    color: black;
    padding: 2rem;
    margin-left: 10rem;
}

.fa-arrow-left:hover {
    color: rgb(253, 200, 209);
}

.place {
    margin: auto;
    width: 80%;
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