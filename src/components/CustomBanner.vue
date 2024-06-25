<template>


<section class="bg-center bg-no-repeat bg-[url('../assets/Images/banner2.jpg')] bg-gray-700 bg-blend-multiply">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-5xl">{{ this.info.heading }}</h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">{{ this.info.text }}</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
        
            <a href="#" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Learn more
            </a>  
        </div>
    </div>
</section>

</template>
<script>
import axios from 'axios';
export default {
    name: 'CustomBanner',
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
    axios.get('http://localhost:4220/api/Content/GetBannerContent')
      .then(response => (this.info = response.data.payload))
     
  }
  }
  </script>
