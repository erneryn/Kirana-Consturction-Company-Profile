<template>
  <div class="intro">
    <div class="welcome">
      <img
        src="https://i.ibb.co/gMYdkmB/intro.png"
        alt=""
        class="image"
        data-aos="fade-right"
        v-if="!mobileView"
      />
      <img
        src="https://i.ibb.co/gMYdkmB/intro.png"
        alt=""
        class="image-mobile"
        v-if="mobileView"
      />
      <div class="desc-cont" v-bind:class="{ 'desc-mobile': mobileView }">
        <div class="intro-desc" data-aos="zoom-in">
          <p class="quote">"</p>
          <p
            class="kirana"
            v-bind:class="{ 'kirana-mobile': mobileView }"
          >
            KIRANA CONSTRUCTION . . .
          </p>
          <p v-bind:class="{ 'sub-mobile': mobileView }">
            Kirana construction terlahir dari kesadaran akan keberlangsungan
            lingkungan hidup dan pentingnya perencanaan yang baik. Sehingga
            dapat mewujudkan bangunan impian anda yang aman dan nyaman.
          </p>
          <div class="line-desc"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Intro",
  computed: {
    mobileView() {
      return this.$mq == "mobile" ? true : false;
    },
    tabletView() {
      return this.$mq == "tablet" ? true : false;
    },
    desktopView() {
      return this.$mq == "laptop" ? true : false;
    },
  },
};
</script>

<style lang="scss" scoped>
.welcome {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.intro {
  background-color: rgb(255, 255, 255);
  height: auto;
  margin-top: 1vh;
}
.image {
  margin: 2vh;
  height: auto;
  width: 50vw;
  border: 2px solid grey;
  border-radius: 30px;
  padding-right: 10vw;
  position: relative;
}
.image-mobile {
  margin-left: -1vh;
  height: auto;
  width: 50vw;
  padding: 2vw;
}
.line {
  position: relative;
  margin-top: -10px;
  width: 50%;
  border-bottom: 3px solid #f32929;
}
.desc-cont {
  height: 100%;
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: -7vw;
  position: relative;
}
.desc-mobile {
  margin-left: 1vw;
  width: 40vw;
}
.intro-desc {
  font-size: 1.5vw;
  text-align: start;
  background-color: rgb(255, 255, 255);
  padding-top: 1vh;
  padding-bottom: 1vh;
}
.kirana {
  font-weight: bold;
  font-size: 2vw;
  margin-bottom: 5px;
}
.kirana-mobile {
  font-weight: bold;
  font-size: 2.7vw;
}
.sub-mobile {
  font-size: 2vw;
}
.line-desc {
  width: 70%;
  border-top: 2px solid #f32929;
}
.quote {
  font-size: 5vh;
  margin-top: -2vh;
  margin-bottom: -2vh;
  font-family: cursive;
  color: #f32929;
}
</style>
