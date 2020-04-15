<template>
  <div class="home">
    <Jumbotron />
    <Intro />
  </div>
</template>

<script>
import Jumbotron from "@/components/Jumbotron.vue";
import Intro from "../components/Intro";

export default {
  name: "Home",
  components: {
    Jumbotron,
    Intro
  }
};
</script>
