<template>
  <div class="nav-pos">
    <b-navbar toggleable="md" type="dark" class="cont" v-bind:class="{ 'custom-bg': !open , 'bg-open': open}" >
   <b-navbar-brand href="#">
      <router-link to="/">
        <img src="../assets/logo.png" alt="" class="logo" />
      </router-link>
      </b-navbar-brand>

      <b-navbar-toggle @click="open = !open" target="nav-collapse">
      </b-navbar-toggle>
      <b-collapse id="nav-collapse" class="mx-auto" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto right">
          
          <b-nav-item >  
            Construction
            </b-nav-item>
         
          <b-nav-item href="#">Material</b-nav-item>
          <!-- <b-nav-item-dropdown text="Portofolio" class="d-down" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown> -->
          <b-nav-item href="/portofolio">Portofolio</b-nav-item>
          <b-nav-item href="/about">About Us</b-nav-item>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data(){
    return{
      open: false
    }
  }
};
</script>

<style lang="scss" scoped>
.logo {
  background-color: rgb(221, 221, 221);
  position: relative;
  margin-top: -20px;
  padding: 20px;
  height: 10vh;
  min-height: 8vh;
}
.nav-pos {
  position: relative;
  top: 0;
  z-index: 2;
}
.custom-bg {
  background-color: transparent;
}
.bg-open {
  background-color: black;
}
.cont {
  padding-right: 10vw !important;
  padding-left: 10vw !important  ;
  display: flex;
  flex-direction: row;
}

.item-nav {
  width: 30vw;
  display: flex;
  justify-content: space-around;
}

.nav-item {
  margin-right: 2vw;
  a {
    // color: !important;
    font-size: 18px;
  }
}
router-link{
  text-decoration: none;
}
</style>
