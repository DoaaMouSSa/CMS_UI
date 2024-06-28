<template>
    <div class="p-10 m-11">
      <p class='text-xl text-red-500 mb-4 uppercase text-center font-bold text-3xl'>
           Update Content
         </p>
   <form class="space-y-4 font-[sans-serif] text-[#333] max-w-md mx-auto">
        <div class="relative flex items-center">
          <input type="text"  :value="this.info.heading" v-on:change="getHeadingValue($event)"
            class="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border outline-[#007bff] rounded transition-all" />
        </div>
          <p>{{this.newHeading}}</p>

        <div class="relative flex items-center">
          <textarea type="text" :value="this.info.text" v-on:change="getTextValue($event)"
            class="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border outline-[#007bff] rounded transition-all" ></textarea>
        </div>
        <div class="relative flex items-center">
          <input
              type="file"
              accept="image/*"
              ref="file"
              @change="selectImage"
            />
          </div>
          <div v-if="previewImage">
        <div>
          <img class="preview my-3" :src="previewImage" alt="" />
        </div>
      </div>
          <button type="button" v-on:click="updateContent()" 
          class="px-6 py-2.5 w-full !mt-8 text-sm bg-red-700 hover:bg-red-600 text-white rounded">Save</button>
      </form>
    </div>
  </template>
  <script>
   import UploadService from "../services/UploadFilesService";
   import axios from 'axios';
  export default {
    name: "upload-image",
    data() {
      return {
        currentImage: undefined,
        previewImage: undefined,
        newHeading:'test',
        newText:'',
        message: "",
        imageInfos: [],
        info:null,
        isSuccess:false,
      };
    },beforeCreate(){
     axios.get('http://localhost:4220/api/Content/GetHeroContent')
     .then(response =>(this.info = response.data.payload))
  },
    methods: {
      selectImage() {
        this.currentImage = this.$refs.file.files.item(0);
        this.previewImage = URL.createObjectURL(this.currentImage);
        this.progress = 0;
        this.message = "";
      },
      getHeadingValue(event) {
            this.newHeading=event.target.value
        },
        getTextValue(event) {
            this.newText=event.target.value
        },
      updateContent() {
  
        UploadService.upload(this.currentImage,this.newHeading,this.newText)
          .then((response) => {
            this.message = response.data.message;
            this.isSuccess=response.data.isSuccess;
            if(this.isSuccess==true)
            {alert('changes updated successfully')}
            else{
              alert('error');

            }
          })
          .then((images) => {
            this.imageInfos = images.data;
          })
          .catch((err) => {
            this.message = "Could not upload the image! " + err;
            this.currentImage = undefined;
          });
      },

    },
  };
  </script>
  
  <style scoped>
  .preview {
    max-width: 200px;
  }
  </style>

  
  