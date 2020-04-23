<template>
  <div>
    <div class="container-fluid header" v-if="!mobileView && !tabletView">
      <div class="row">
        <div class="col left">
          <div class="left-item">
            <p class="title1">YOUR PARTNER IN</p>
            <p class="title2">BUILDING YOUR DREAMS</p>
            <div class="btn-group">
              <b-button class="bt1" pill>Construction</b-button>
              <b-button class="bt2" pill>Material</b-button>
            </div>
          </div>
        </div>
        <div class="col right-item"></div>
      </div>
    </div>

    <div class="container-fluid header-mobile" v-if="mobileView">
      <div class="row head-mobile" >
        <div class="col right-item mobile">
          <div class="title">
            <p class="title1">YOUR PARTNER IN</p>
            <p class="title2">BUILDING YOUR DREAMS</p>
            <div class="btn-group-mbl">
              <b-button class="bt-mbl" variant="secondary" pill
                >Construction</b-button
              >
              <b-button class="bt-mbl bt2mbl" pill
                ><span style="color:black;">
                  Material
                  </span> </b-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid header-mobile" v-if="tabletView">
      <div class="row head-mobile">
        <div class="col right-item mobile">
          <div class="title">
            <p class="title1">YOUR PARTNER IN</p>
            <p class="title2">BUILDING YOUR DREAMS</p>
            <div class="btn-group-mbl">
              <b-button class="bt-mbl" variant="outline-secondary" pill
                >Construction</b-button
              >
              <b-button class="bt-mbl" variant="outline-secondary" pill
                >Material</b-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Jumbotron",
  data: () => {
    return {};
  },
  methods: {},
  computed: {
    mobileView() {
      return this.$mq == "mobile" ? true : false;
    },
    tabletView() {
      return this.$mq == "tablet" ? true : false;
    },
  },
  created() {
    this.handleView();
  },
};
</script>

<style lang="scss" scoped>
.header {
  margin-top: -12vh;
  position: relative;
  z-index: 1;
}

.row {
  height: 70vh;
  background-color: grey;
}
.left {
  background-color: #1b2733;
  display: flex;
  justify-content: center;
  align-items: center;
  .left-item {
    margin-left: 5vw;
    .title1 {
      color: white;
      text-align: start;
      font-size: 3vw;
    }
    .title2 {
      color: #f1e960;
      font-size: 3vw;
      text-align: start;
      margin-top: -2vh;
    }
    .btn-group {
      position: absolute;
      left: 0;
      margin-left: 11vw;
      .bt1 {
        width: 12vw;
        margin-right: 2vw;
        color: black;
        background-color: white;
        font-size: 1.2vw;
      }
      .bt2 {
        color: black;
        width: 12vw;
        background-color: #f1e960;
        font-size: 1.2vw;
      }
    }
  }
}
.right-item {
  background-image: url("https://i.ibb.co/SyCVT6L/header.jpg");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
}

.mobile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -18vh;
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    .title1 {
      color: white;
      text-align: start;
      font-size: 5vw;
      text-shadow: 2px 2px #2f3131;
    }
    .title2 {
      color: #f1e960;
      font-size: 5vw;
      text-align: start;
      margin-top: -2vh;
      text-shadow: 2px 2px #2f3131;
    }
  }
}

.btn-group-mbl {
  display: flex;
  flex-direction: column;
  .bt-mbl {
    margin-bottom: 1vh;
    color: white;
  }
  .bt2mbl {
    color: black;
        background-color: #f1e960;
  }
}

</style>
