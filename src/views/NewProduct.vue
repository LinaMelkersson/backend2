<template>
  <div class="container mt-5">
    <form class="text-center p-5" @submit.prevent="onAdd">
      <p class="h4 mb-4">New Category</p>
      <!-- 2 column grid layout with text inputs for the first and last names -->
      <div class="row mb-4">
        <div class="col">
          <div class="form-outline">
            <input type="text" id="form3Example1" class="form-control border-bottom" v-model="_Categoryes.name"/>
            <label class="form-label" for="form3Example1">Name of the category:</label>
          </div>
        </div>
      </div>
      <!-- Submit button -->
      <button type="submit" class="btn btn-primary btn-block mb-4">Add</button>
    </form>




    <div>
      <h4>Existing Categories</h4>
      <ul>
        <li v-for="Categorey in Categoryes" :key="Categorey.id" :Categorey="Categorey">
          {{Categorey.id}}
          {{Categorey.name}}
        </li>
      </ul>
    </div>





    <form class="text-center p-5" @submit.prevent="onPlus">
      <p class="h4 mb-4">New Subcategory</p>
      <!-- 2 column grid layout with text inputs for the first and last names -->
      <div class="row mb-4">
        <div class="col">
          <div class="form-outline">
            <input type="text" id="form3Example1" class="form-control border-bottom" v-model="_Subcategory.name"/>
            <label class="form-label" for="form3Example1">Name of the product:</label>
          </div>
        </div>
        <div class="col">
          <div class="form-outline">
            <input type="number" id="form3Example1" class="form-control border-bottom" v-model="_Subcategory.categoryesId"/>
            <label class="form-label" for="form3Example1">Category ID:</label>
          </div>
        </div>
      </div>
      <!-- Submit button -->
      <button type="submit" class="btn btn-primary btn-block mb-4">Add</button>
    </form>

    
    <div>
      <h4>Existing Subcatergories</h4>
      <ul>
        <li v-for="SubCategorey in SubCategoryes" :key="SubCategorey.id" :SubCategorey="SubCategorey">
          {{SubCategorey.id}}
          {{SubCategorey.name}}
        </li>
      </ul>
    </div>



    <form class="text-center p-5" @submit.prevent="onSubmit">
      <p class="h4 mb-4">New Product</p>
      <!-- 2 column grid layout with text inputs for the first and last names -->
      <div class="row mb-4">
        <div class="col">
          <div class="form-outline">
            <input type="text" id="form3Example1" class="form-control border-bottom" v-model="product.name"/>
            <label class="form-label" for="form3Example1">Name of the product:</label>
          </div>
        </div>
        <div class="col">
          <div class="form-outline">
            <input type="text" id="form3Example2" class="form-control border-bottom" v-model="product.shortDescription"/>
            <label class="form-label" for="form3Example2">Short description:</label>
          </div>
        </div>
        <div class="col">
          <div class="form-outline">
            <input type="text" id="form3Example2" class="form-control border-bottom" v-model="product.longDescription"/>
            <label class="form-label" for="form3Example2">Long description:</label>
          </div>
        </div>
        <div class="col">
          <div class="form-outline">
            <input type="number" id="form3Example2" class="form-control border-bottom" v-model="product.price"/>
            <label class="form-label" for="form3Example2">Price:</label>
          </div>
        </div>
        <div class="col">
          <div class="form-outline">
            <input type="number" id="form3Example2" class="form-control border-bottom" v-model="product.subCategoryesId"/>
            <label class="form-label" for="form3Example2">Subcategoryes Id:</label>
          </div>
        </div>
        <div class="col">
          <div class="form-outline">
            <input type="text" id="form3Example2" class="form-control border-bottom" v-model="product.imgurl"/>
            <label class="form-label" for="form3Example2">Image url:</label>
          </div>
        </div>

      </div>
      


      <!-- Submit button -->
      <button type="submit" class="btn btn-primary btn-block mb-4">Add</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      product: {
        name: '',
        shortDescription: '',
        longDescription: '',
        price: '',
        subCategoryesId: '',
        imgurl: ''
      },
      _Categoryes: {
        name: ''
      },
      _Subcategory: {
        name: '',
        categoryesId: ''

      }
    }
  },
  methods: {
    ...mapActions(['register', 'addCat', 'addSub', 'getCat', 'getSub']),
    onSubmit(){
      if(this.product.name !== '' && this.product.shortDescription !== '' && this.product.longDescription !== '' && this.product.price !== '' && this.product.subCategoryesId !== '' && this.product.imgurl !== '') {
        this.register(this.product)
        console.log(this.product)
      }
    },
      onAdd(){
      if(this._Categoryes.name !== ''){
        this.addCat(this._Categoryes)
        console.log(this._Categoryes) 
      }
      },
      onPlus(){
      if(this._Subcategory.name !== '' && this._Subcategory.categoryesId !== ''){
        this.addSub(this._Subcategory)
        console.log(this._Subcategory) 
      }
      }
  },
  computed: {
    ...mapGetters(['Categoryes', 'SubCategoryes'])
  },

  mounted() {
    this.getCat(),
    this.getSub()
  }
}
</script>

<style>

</style>
