<template>
  <div class="home">
    <custom-nav/>
    <CustomBanner/>
    <CustomHero/>
    <ProductCard/>
    <ProductInfo/>
    <InfoCard/>
     <HorizontalCard/>
     <CustomFooter/>
  </div>
</template>

<script>
 import CustomNav from '../components/CustomNav';
 import CustomBanner from '../components/CustomBanner';
 import CustomHero from '../components/CustomHero';
 import ProductCard from '../components/ProductCard';
 import ProductInfo from '../components/ProductInfo';
 import InfoCard from '../components/InfoCard';
import HorizontalCard from '../components/HorizontalCard';
import CustomFooter from '../components/CustomFooter';
export default {
  name: 'HomeView',
  components:{
  CustomNav,
  CustomBanner,
  CustomHero,
  ProductCard,
  ProductInfo,
  InfoCard,
  HorizontalCard,
  CustomFooter,
  }
}
</script>
