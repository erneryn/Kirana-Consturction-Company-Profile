<template>
<div class="side">

  <Carousel :navigationEnabled="true" :perPage="3" :autoplay="true">
    <Slide>
      <img src="https://i.ibb.co/sQ8R83n/RE1.jpg" alt="">
      <p>New Concept Cafe</p>
    </Slide>
    <Slide>
      <img src="https://i.ibb.co/09QZSy5/Kitchenchamz2.jpg" alt="">
      <p>Kitchen Room</p>
    </Slide>
    <Slide>
      <img src="https://i.ibb.co/BnHv8V4/interiorfix.jpg" alt="">
      <p>Living Room</p>
    </Slide>
     <Slide>
      <img src="https://i.ibb.co/r6vM5qC/R2.jpg" alt="">
            <p>Top View House Design</p>
    </Slide>
  </Carousel>
        <router-link to="/portofolio" style="width: 100%; text-decoration:none">
      <b-button block  pill class="btn" v-if="mobileView">
        Selengkapnya
        </b-button>
        </router-link>
</div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
    name: "CarouselComp",
    components:{
      Carousel,
      Slide
    },
    computed: {
    mobileView() {
      return this.$mq == "mobile" ? true : false;
    }
  }
}
</script>

<style lang="scss" scoped>
.side{
  margin-left: 10vw;
  margin-right: 10vw;
  margin-top: 5vh;
}
 img{
   border: 0.6vw solid #485975 !important;
   width: 20vw;
   height: 20vw;
   object-fit: cover; }
 .container{
   margin-left: 20vw;
   margin-right: 20vw;
 }
 p{
   text-decoration: none;
   font-weight:500;
   font-size: 1.2vw;
   margin-top: 1vh;
 }
 .btn{
    background-color: #f32929;
        font-size: 4vw;
 }

</style>