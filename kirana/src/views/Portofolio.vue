<template>
  <div>
    <div class="header"></div>
    <div class="title mx-auto">
      <p>Our Collections</p>
      <img src=" " alt="" />
    </div>
    <div>
      <gallery :images="images" :index="index" @close="index = null"></gallery>
      <div
        class="image"
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{
          backgroundImage: 'url(' + image + ')',
          width: '300px',
          height: '200px',
        }"
      ></div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import VueGallery from "vue-gallery";
import Footer from '../components/Footer'
export default {
  name: "portofolio",
  components: {
    gallery: VueGallery,
    Footer
  },
  data: () => {
    return {
      images: [
        "https://drive.google.com/uc?export=view&id=1oy95mWtBF1Mi__HHKqWSclHUuaBhPQKa",
        "https://drive.google.com/uc?export=view&id=11nA643jDYCoiV_DVekr4nNI5NVmIGrG8",
        "https://drive.google.com/uc?export=view&id=1UfgXOkc2DYpPxZ9one5OEtSeokDPFxcD",
        "https://drive.google.com/uc?export=view&id=1Q88aLg5DE2VgnJb-lqx4aWstx8moOw1b",
        "https://drive.google.com/uc?export=view&id=1gwdo_b-BwKxFh8q8ceyRMLi72s0Kn7rR",
        "https://drive.google.com/uc?export=view&id=1VY4wVAAl9ua9QjBQA737yUv61IESnAlu",
      ],
      index: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 12vh;
  background-color: #1b2733;
  margin-top: -12vh;
  position: relative;
  z-index: 1;
}
.title {
  width: 80%;
  margin-top: 5vh;
  border-bottom: 2px solid rgb(23, 14, 66);
  p {
    font-size: 2vw;
  }
}
.image {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
    display: inline-block;
  }
.cont {
  text-align: center;
}
</style>
