<template>
    

<div class="w-full max-w-xs m-auto">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="HandleLogin()">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input value="doaa@test.com" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="email" v-model="email">
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input value="1234" class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="****" v-model="password">
        <p class="text-red-500 text-xs italic">Please choose a password.</p>
      </div>
      <div class="flex items-center justify-center">
        <button v-on:click="HandleLogin()" class="bg-orange-700 hover:bg-orange-600 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline" type="button">
          Sign In
        </button>
      
      </div>
    </form>
    <p class="text-center text-gray-500 text-xs">
      &copy;2020 Acme Corp. All rights reserved.
    </p>
  </div>
</template>
<script>
//import axios from 'axios';
export default{
data(){
  return{
    email:'',
    password:''
  }
},methods:{
 async HandleLogin(){

  }
}
}
</script>
