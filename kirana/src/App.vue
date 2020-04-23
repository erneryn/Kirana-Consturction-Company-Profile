<template>
  <div id="app">
    <Navbar />
    <router-view />
    
  </div>
</template>
<script>
import Navbar from "./components/Navbar";

export default {
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600&display=swap');
#app {
  font-family: 'Titillium Web', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
  
</style>
