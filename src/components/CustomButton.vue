<template>
  <div>
    {{ name }}
    <button class="flex justify-center items-center
    gap-1 px-6 py-2 border-orange-700
    rounded-sm text-white
    text-lg leading-0 bg-orange-500"
    >
        {{ label }}
        <img 
        :src=linkArrowIcon
         alt="arrow right icon"
         class="ml-2 rounded-full
         w-5 h-5"
         />
    </button>
   
  </div>
</template>
<script>
export default {
  name: 'CustomButton',
  props:{
    label:String,
  },data(){
    return{
      linkArrowIcon:require("../assets/Icons/test2.webp"),
    }
  },
}

</script>
