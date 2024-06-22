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
            <div class="flex gap-2 mt-4">
      <svg class="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />  <path d="M15 6l2 2l4 -4" /></svg>
      <tel class="font-bold text-gray-600">0123569512</tel>
    </div>

    <div class="flex gap-2 mt-4">
      <svg class="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="5 12 3 12 12 3 21 12 19 12" />  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />  <rect x="10" y="12" width="4" height="4" /></svg>
          <p class="font-bold text-gray-600">Egypt ,Cairo</p>
    </div>

    <div class="flex gap-2 mt-4">
      <svg class="h-8 w-8 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />  <polyline points="22,6 12,13 2,6" /></svg>
      <p class="font-bold text-gray-600">Company@test.com</p>
    </div>

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
