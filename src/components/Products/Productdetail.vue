<template>
    <router-link class="productcard" style="text-decoration:none;" :to="'/UnikProduct/' + product.id">
    <img class="imgcard" :src="(product.imgurl)" alt="Card image cap">
    <h2 class="textcard">{{product.name}}</h2>
    </router-link>
</template>

<script>
export default {
  props: ['product']

}
</script>

<style>

.productcard {
  margin-top: 4rem;
  width: 20vw;
  display: grid;
  justify-content: center;
  background: white;
  border-radius: 5px;
  height: 20rem;
}

.imgcard {
  margin-top: 1rem;
  height: 12rem;
  width: 85%;
  justify-self: center;
}

.textcard {
  text-align: center;
  font-family: roboto;
  color: black;
  margin-bottom: 1rem;
}



</style>