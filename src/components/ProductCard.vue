<template>
<div class="grid grid-cols-4 gap-14 px-20 m-5">

<div class="grid-cols-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-sm" src="../assets/Images/card1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-orange-600 dark:text-white">Blue T-Shirt</h5>
            <RatingStar/>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">model 2021 for all ages</p>
        <p class="text-orange-600 font-bold">20$</p>
        <CustomButton label="Read More" />
        
    </div>
</div>
<div class="grid-cols-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-sm" src="../assets/Images/card1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-orange-600 dark:text-white">Blue T-Shirt</h5>
            <RatingStar/>

        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">model 2021 for all ages</p>
        <p class="text-orange-600 font-bold">20$</p>

        <CustomButton label="Read More" />

    </div>
</div>
<div class="grid-cols-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-sm" src="../assets/Images/card1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-orange-600 dark:text-white">Blue T-Shirt</h5>
            <RatingStar/>

        </a>
        <p class="mb-3 font text-gray-700 dark:text-gray-400">model 2021 for all ages</p>
        <p class="text-orange-600 font-bold">20$</p>
        <CustomButton label="Read More" />

    </div>
</div>
<div class="grid-cols-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-sm" src="../assets/Images/card1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-orange-600 dark:text-white">Blue T-Shirt</h5>
            <RatingStar/>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">model 2021 for all ages</p>
        <p class="text-orange-600 font-bold">20$</p>

        <CustomButton label="Read More" />

    </div>
</div>
</div>
</template>
<script>
  import CustomButton from './CustomButton';
  import RatingStar from './RatingStar';

export default {
  name: 'ProductCard', 
components:{
   CustomButton,
   RatingStar,
}, 
}
</script>