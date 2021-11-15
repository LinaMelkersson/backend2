import axios from 'axios'

export default {
    state: {
        products: [],
        product: null,
        Categoryes: [],
        SubCategoryes: []
    },
    getters: {
        products: state => state.products,
        product: state => state.product,
        Categoryes: state => state.Categoryes,
        SubCategoryes: state => state.SubCategoryes
        
    },
    mutations: {
        GET_PRODUCTS: (state, products) => {
            state.products = products
        },
        GET_PRODUCT: (state, product) => {
            state.product = product
        },
        GET_CAT: (state, Categoryes) => {
            state.Categoryes = Categoryes
        },
        GET_SUB: (state, SubCategoryes) => {
            state.SubCategoryes = SubCategoryes
        }
    },
    actions: {
        getProducts: async ({commit}) => {
            const res = await axios.get('https://localhost:44394/api/Products')
            commit('GET_PRODUCTS', res.data)
        },
        getProduct: async ({commit}, id) => {
            const res = await axios.get('https://localhost:44394/api/Products/' + id)
            commit('GET_PRODUCT', res.data)
        },
        getCat: async ({commit}) => {
            const res = await axios.get('https://localhost:44394/api/Categoryes')
            commit('GET_CAT', res.data)
            console.log(res.data)
        },
        getSub: async ({commit}) => {
            const res = await axios.get('https://localhost:44394/api/SubCategoryes')
            commit('GET_SUB', res.data)
        },
        register: async (context, product) => {
            await axios.post('https://localhost:44394/api/Products', product)
            console.log(product)
        },
        addCat: async (context, Categoryes) => {
            await axios.post('https://localhost:44394/api/Categoryes', Categoryes)
            console.log(Categoryes)
        },
        addSub: async (context,Subcategory ) => {
            await axios.post('https://localhost:44394/api/SubCategoryes', Subcategory)
            console.log(Subcategory)
        },
    }
  }
  