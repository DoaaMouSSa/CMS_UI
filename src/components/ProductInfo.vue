<template>
  <section
     id='about-us'
     class='w-full flex flex-row gap-1 max-container'>
   
     <div class='relative xl:w-2/5 flex flex-col p-10'>
       <p class='text-xl text-red-500 mb-4'>
        Special Features
       </p>
       <h1 class='font-palanquin text-4xl max-sm:text-[50px] max-sm:leading-[60px] font-bold mb-4'>
         <span class='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
           The New <span class="text-red-600">Arrival</span>
         </span>
         <br />
       </h1>
       <p class='text-slate-600 text-lg leading-8  sm:max-w-sm mb-4'>
        <b>Free Shipping:</b> On all orders over $50.
       </p>
       <p class='text-slate-600 text-lg leading-8  sm:max-w-sm mb-4'>
        <b>Buy One, Get One Free:</b> Select items in store and online.
      </p>
       <p class='text-slate-600 text-lg leading-8  sm:max-w-sm mb-4'>
        <b>Exclusive Members-Only Deals:</b> Sign up for our loyalty program to access even more savings.
      </p>
      <p class='text-slate-600 text-lg leading-8  sm:max-w-sm mb-4'>
        <b>Quality Guaranteed:</b> Shop with confidence knowing you're getting high-quality products at unbeatable prices.

      </p>
       <CustomButton label='Shop now'/>
     
</div>
<div class='flex justify-between
    items-center max-lg:flex-col'>
  <img 
        src="../assets/Images/banner.jpg"
         alt="arrow right icon"
         class="rounded-sm object-contain"
         width="800"
         height="500"
         />
</div>
   </section>
</template>
<script>
import CustomButton from './CustomButton';

export default{
  name:'ProductInfo',
    components:{
        CustomButton,
    }
}


</script>
