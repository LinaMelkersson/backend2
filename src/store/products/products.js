import axios from 'axios'

export default {
    state: {
        products: [],
        product: null
    },
    getters: {
        products: state => state.products,
        product: state => state.product
    },
    mutations: {
        GET_PRODUCTS: (state, products) => {
            state.products = products
        },
        GET_PRODUCT: (state, product) => {
            state.product = product
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
        register: async (context, product) => {
            await axios.post('https://localhost:44394/api/Products', product)
            console.log(product)
        },
    }
  }
  