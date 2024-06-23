<template>
    <div class="p-10 m-11">
      <p class='text-xl text-red-500 mb-4 uppercase text-center font-bold text-3xl'>
           Update Header
         </p>
   <form class="space-y-4 font-[sans-serif] text-[#333] max-w-md mx-auto">
        <div class="relative flex items-center">
          <input type="text"  :value="this.info.logoName"
            class="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border outline-[#007bff] rounded transition-all" />
        </div>
        <div class="relative flex items-center">
          <input type="text" :value="this.info.phone"
            class="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border outline-[#007bff] rounded transition-all" />
        </div>
        <div class="relative flex items-center">
          <input type="file" @change="onFileChange" accept=".png,.jpg,.jpeg" id="uploadFile"
            class="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border outline-[#007bff] rounded transition-all" />
        </div>
<button v-on:click=" get()">test</button>
        <button type="button" v-on:click="updateLogoName()" 
          class="px-6 py-2.5 w-full !mt-8 text-sm bg-red-700 hover:bg-red-600 text-white rounded">Save</button>
      </form>
    </div>
  </template>
  <script>
  import axios from 'axios';
  export default{
  data(){
    return{
      newLogoName:'testLogoName',
      newPhone:'',
      url:'',
      info:null,
    }
  },beforeCreate(){
     axios.get('http://localhost:4220/api/Header/GetData')
     .then(response => (this.info = response.data.payload))
  },
  created(){
       this.newLogoName=this.info.logoName
  },
  methods:{
    onFileChange(e){
        const file=e.target.files[0];
        this.url=URL.createObjectURL(file);
        var imageFile=document.querySelector('#uploadFile')
        console.log(file);
        console.log(imageFile.files[0]);
        const formData = new FormData()
        formData.append('id', 1)

    formData.append('Imagefile', this.file)
    console.log(formData)
    },
     updateLogoName(){
        axios.post("http://localhost:4220/api/Header/ChangeLogoName",{
          id:1,
          data:this.newLogoName,
        }).then(res=>console.log(res));
    }, updateLogoImage(){
       
        axios.post("http://localhost:4220/api/Header/ChangeLogoImage")
        .then(res=>console.log(res))
        .catch((e) => {
            console.log(e)
        });
       
      
    }
  }
  }
  </script>
  