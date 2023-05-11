import { ref } from "vue"
import { defineStore } from "pinia"
import api from '../axios'


export const useCartStore = defineStore('cart', () => {

  // cart container
  const myCart = ref([])
  // all products container
  const products = ref([])
  // loading indicator
  const isFetching = ref(false)


  // this method will store single product
  // to `myCart()`
  const addToCart = (product) => {
    myCart.value.push(product)
    console.log(myCart.value)

  }

  // this method will retrieve all products
  // from our api
  const getAllProducts = async () => {


    try {
      isFetching.value = true;
      const response = await api.get('/api/products');
      isFetching.value = false;
      // const { products } = response.data;

      if (response.status == 200) {
        products.value = response.data.products;
      }

    } catch (error) {
      isFetching.value = false;

    }

  }





  return { myCart, products, isFetching, addToCart, getAllProducts }
})