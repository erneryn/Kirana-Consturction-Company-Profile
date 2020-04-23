<template>
<div>

  <div class="cont" v-if="!mobileView">
    <div class="left">
      <p class="title">Product Kami</p>
      <p class="sub">Hasil Karya Design Kirana Construction</p>
    </div>
    <div class="right">
      <router-link to="/portofolio" style="width: 100%; text-decoration:none">
  <b-button block  pill class="btn">Selengkapnya</b-button>
      </router-link>
    </div>
  </div>

   <div class="cont-mobile" v-if="mobileView">
    <div class="left">
      <p class="title">Product Kami</p>
    </div>
    <div class="right">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Product",
  computed: {
    mobileView() {
      return this.$mq == "mobile" ? true : false;
    },
  },
};
</script>

<style lang="scss" scoped>
.cont {
  display: flex;
  align-items: center;
  justify-content: space-around;
  .left {
    border-left: 10px solid #f32929;
    margin-top: 3vh;
    text-align: start;
    .title {
      padding-left: 1vw;
      margin-bottom: 0.8vw;
      font-size: 2.5vw;
    }
    .sub {
      padding-left: 1vw;
      font-size: 1.7vw;
    }
  }
  .right{
      margin-top: 2vw;
      display: flex;
      align-items: center;
      width: 40vw;
      .btn{
          background-color: #f32929;
          font-size: 1.6vw;
      }
      .btn:hover{
          background-color: #ac3333;
      }
  }
}
.cont-mobile{
    display: flex;
    flex-direction: column;
    margin-top: 1vh;
    .btn{
        background-color: #f32929;
        height: 8vw;
        font-size: 4vw;
    }
}
</style>
