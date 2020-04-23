<template>
  <div>
    <div class="header"></div>
    <div class="title mx-auto">
      <img
        src="https://kiranaconstruction.files.wordpress.com/2018/05/lambang-kirana2.jpg?w=748"
        alt=""
      />
      <hr />
      <p style="font-size:2vw">TERLAHIR UNTUK MEWUJUDKAN IMPIAN ANDA</p>
      <p class="sub">
        <span class="bold">KIRANA CONSTRUCTION</span> adalah konsultan perencana
        dan sekaligus pelaksana konstruksi yang berdiri secara mandiri,
        bermarkas di Surakarta, Indonesia. Berdiri sejak 2017, usia muda tidak
        menjadi halangan kami untuk memberikan anda sebuah perencanaan yang
        matang dan presisi.
      </p>
      <hr />
      <p class="sub">
        REPUTASI KAMI untuk sebuah perencanaan yang sempurna dan innovatif
        berasal dari filosofi kami yang sederhana :<span class="bold">
          A GOAL WITHOUT A PLAN IS JUST A WISH AND A PLAN WITHOUT ACTION IS JUST
          A DREAM.</span
        >
        Sebagaimana kami melayani anda, kami selalu melayani anda dengan desain
        yang innovatif, perencanaan visioner, manajemen dan rekayasa teknik
        berkualitas tinggi semua di bawah satu nama yaitu KIRANA CONSTRUCTION.
      </p>
      <hr />
      <p style="font-size:2vw">VISI</p>
      <p class="sub">
        Menjadi konsultan perencana dan pelaksana konstruksi terbaik di Indonesia yang mengedepankan lingkungan hidup yang berkelanjutan.
      </p>
      <p style="font-size:2vw">MISI</p>
      <p class="sub">Berinovasi dalam perencanaan untuk lingkungan hidup dan kesejahteraan manusia.</p>
      <p style="font-size:2vw">NILAI</p>
      <p class="sub">Berkerja jujur dengan profesionalisme dan antusias tinggi.

</p>
    </div>
    <div></div>
    <Footer class="foot" />
  </div>
</template>

<script>
import Footer from "../components/Footer";
export default {
  name: "portofolio",
  components: {
    Footer,
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
.foot {
  position: static;
  bottom: 0;
  right: 0;
  left: 0;
}
.title {
  width: 80%;
  margin-top: 5vh;
}
img {
  height: 20vw;
}
.bold {
  font-weight: bold;
}
.sub {
  font-size: 1.2vw;
}
</style>
