<template>
  <section
     id='home'
     class='w-full flex flex-row gap-1 max-container'>
     <div class='flex justify-between
    items-center max-lg:flex-col'>
  <img 
        :src="this.info.imagePath"
         alt="hero image"
         class="rounded-sm object-contain"
         width="800"
         height="500"
         />
</div>
     <div class='relative xl:w-2/5 flex flex-col p-10'>

       <h1 class='font-palanquin text-3xl max-sm:text-[50px] max-sm:leading-[60px] font-bold mb-4 text-red-500'>
          {{ this.info.heading }}
       </h1>
       <p class='text-slate-600 text-lg leading-8  sm:max-w-sm mb-4'>
        {{ this.info.text }}
        
    </p>
       <CustomButton label='Shop now'/>
     
</div>

   </section>
</template>
<script>
import CustomButton from './CustomButton';
import axios from 'axios';
export default {
  name: 'CustomHero',
 
components:{
   CustomButton
},  
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
    axios.get('http://localhost:4220/api/Content/GetHeroContent')
      .then(response => (this.info = response.data.payload))
     
  }
}
</script>
<style>
.max-container{
    max-width:1440px;
    margin:0 auto;
} 
</style>