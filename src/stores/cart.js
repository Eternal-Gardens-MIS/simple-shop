import {ref} from "vue"
import {defineStore} from "pinia"


export const useCartStore = defineStore('cart', () => {

    
    const myCart = ref([])

    const myProducts = [
  {
    "id": 1,
    "url": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2e282edb-e916-48cb-8329-97497507ab19/air-max-pulse-shoes-QShhG8.png",
    "name": "Nike Air Max Pulse",
    "price": 8395,
    "qty": 10,
  },
  {
    "id": 2,
    "url": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/472992b2-f3e9-483c-b7af-8d138aec72cf/tech-hera-shoes-JlV5km.png",
    "name": "Nike Tech Hera",
    "price": 6195,
    "qty": 5,
  }
];

const products = ref(myProducts)

    const addToCart = (product) => {
        myCart.value.push(product)
        console.log(myCart.value)
       
    }

    return {myCart,products ,addToCart}
})