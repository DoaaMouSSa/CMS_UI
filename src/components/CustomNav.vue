
<template>
    <div>

<nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img :src="this.info.imagePath" class="h-6" alt="Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{{ this.info.heading }}</span>
        </a>
        <div class="flex items-center space-x-6 rtl:space-x-reverse">
            <a href="tel:5541251234" class="text-sm  text-gray-500 dark:text-white hover:underline">{{ this.info.text }}</a>
            <router-link to="/Login" class="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</router-link>             
        </div>
    </div>
</nav>
<nav class="bg-gray-50 dark:bg-gray-700">
    <div class="max-w-screen-xl px-4 py-3 mx-auto">
        <div class="flex items-center justify-center">
            <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                <li>
                    <router-link to="/" class="text-gray-900 dark:text-white hover:underline">Home</router-link>
                </li>
                <li>
                    <router-link to="/contact" class="text-gray-900 dark:text-white hover:underline">Contact Us</router-link>
                </li>
                <li>
                    <router-link to="/about" class="text-gray-900 dark:text-white hover:underline">About</router-link>
                </li>
                <li>
                    <router-link to="/products" class="text-gray-900 dark:text-white hover:underline">Products</router-link>                </li>
            </ul>
        </div>
    </div>
</nav>
</div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'CustomNav',
  data () {
    return {
      info: null
    }
  },
  methods:{
    get(){
        console.log(this.info);
    }
  },
  beforeCreate () {
    axios.get('http://localhost:4220/api/Content/GetHeadeContent')
      .then(response => (this.info = response.data.payload))
     
  }
}
</script>