<template>
  <section
     id='home'
     class='w-full flex flex-row gap-1 max-container'>
     <div class='flex justify-between
    items-center max-lg:flex-col'>
  <img 
        src="../assets/Images/carosol4.jpg"
         alt="arrow right icon"
         class="rounded-sm object-contain"
         width="800"
         height="500"
         />
</div>
     <div class='relative xl:w-2/5 flex flex-col p-10'>
       <p class='text-xl text-red-500 mb-4'>
         Our collections
       </p>

       <h1 class='font-palanquin text-4xl max-sm:text-[50px] max-sm:leading-[60px] font-bold mb-4'>
         <span class='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
           The New Arrival
         </span>
         <br />
         <span class='text-red-600 inline-block'>New</span> Collection
       </h1>
       <p class='text-slate-600 text-lg leading-8  sm:max-w-sm mb-4'>
         Discover stylish Outfits arrivals, quality comfort, and innovation for
         your active life.
       </p>
       <p class='text-slate-600 text-lg leading-8  sm:max-w-sm mb-4'>
       This incredible sale won't last long. Shop now to take advantage of these amazing prices!
      </p>
      <p class='text-slate-600 text-lg leading-8  sm:max-w-sm mb-4'>

      Shop with confidence knowing you're getting high-quality products at unbeatable prices.
    </p>
       <CustomButton label='Shop now'/>
     
</div>

   </section>
</template>
<script>
import CustomButton from './CustomButton';
export default {
  name: 'CustomHero',
 
components:{
   CustomButton
},  

}
</script>
<style>
.max-container{
    max-width:1440px;
    margin:0 auto;
} 
</style>