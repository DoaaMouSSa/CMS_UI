<template>
  <div class="about">
    <custom-nav/>
    <div class="font-[sans-serif] bg-white my-5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-y-10 md:grid-cols-2 gap-x-12">
          <div class="text-right">
            <img src="../assets/Images/carosol5.jpg" alt="" class="inline rounded-lg lg:w-10/12 w-full object-cover" />
          </div>
          <div>
            <h2 class="text-red-600 text-3xl font-extrabold mb-6">Welcome to Our Website</h2>
            <p class="text-base text-gray-500 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac enim velit. Donec iaculis, dui sed auctor ultricies, eros enim faucibus nisl, ac semper eros eros vitae nulla. Donec non quam in enim semper dignissim.</p>
            <p class="text-base text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam, ipsum vel iaculis bibendum, justo turpis ullamcorper mauris, non aliquam nisi purus vel nisl. Integer efficitur turpis in bibendum tincidunt. Nulla facilisi. Vestibulum fringilla leo et purus consectetur, vel tincidunt dolor rhoncus.</p>
            <a href="javascript:void(0);" class="inline-block mt-6 px-6 py-2.5 bg-red-600 text-white text-base font-medium rounded-md hover:bg-green-500">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
 import CustomNav from '../components/CustomNav';
 export default {
  components:{
  CustomNav,
  }
}
</script>
