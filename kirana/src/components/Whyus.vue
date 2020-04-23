<template>
  <div class="cont">
      <p>KENAPA MEMILIH <span>KAMI ?</span> </p>
      <div>
          <div class="col" data-aos="zoom-in">
              <img src="https://i.ibb.co/FXxmmDd/insurance.png" alt="">
              <p>TERLAHIR MEWUJUDKAN IMPIAN ANDA</p>
          </div>
          <div class="col" data-aos="zoom-in">
              <img src="https://i.ibb.co/Cty6YTx/green-house.png" alt="">
              <p>LINGKUNGAN HIDUP YANG BERKELANJUTAN</p>
          </div>
          <div class="col" data-aos="zoom-in">
              <img src="https://i.ibb.co/ZVY1fPZ/innovation.png" alt="">
              <p>INOVASI TERBAIK BAGI BANGUNAN ANDA</p>
          </div>

      </div>
  </div>
</template>

<script>
export default {
    name: "Whyus",
}
</script>

<style lang="scss" scoped>
.cont{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    padding: 1vh;
    background-color: #485975;
    p{
        font-size: 2.5vw;
        span{
            color: #F1E960;
        }
    }
    div{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            height: auto;
            width: 16vw;
        }
        div{
            display: flex;
            flex-direction: column;
        }
        p{
            margin-top: 2vh;
            font-size: 1.8vw;
        }
    }
}


</style>