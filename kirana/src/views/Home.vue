<template>
  <div class="home">
    <Jumbotron />
    <Intro />
    <Whyus />
    <Product />
    <CarouselComp />
    <Featured/>
    <Footer />
   
  </div>
</template>

<script>
import Jumbotron from "@/components/Jumbotron.vue";
import Intro from "../components/Intro";
import Whyus from "../components/Whyus";
import Product from "../components/Product"
import CarouselComp from "../components/CarouselComp"
import Featured from "../components/Featured"
import Footer from "../components/Footer"

export default {
  name: "Home",
  components: {
    Jumbotron,
    Intro,
    Whyus,
    Product,
    CarouselComp,
    Featured,
    Footer
  }
};
</script>
