<template>
    <div>
        <h1>products</h1>
        <h2>test</h2>
        <button class="border-t-pink-500 border px-5 rounded-md text-pink-700 font-bold"
        v-on:click="getDetails()">More</button>
<router-view/>
    </div>
</template>
<script>
import router from '../router'

export default{
    methods:{
        getDetails(){
            router.push({ name: 'ProductDetail', params: { name: 'blue blouse' } })
        }
    }
}
</script>
