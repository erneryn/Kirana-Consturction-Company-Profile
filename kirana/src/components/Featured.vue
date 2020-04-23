<template>
<div class="top">
  <div class="container-fluid">
    <div class="row">
      <div class="col one bg"><p>KONSULTAN PERENCANA</p></div>
      <div class="col two bg"><p>DESAIN 2D dan 3D</p></div>
      <div class="col three bg"><p>PERHITUNGAN RAB</p></div>
      <div class="col four bg"><p>KONSTRUKSI</p></div>
    </div>
  </div>
  <div class="cont"></div>
</div>
</template>

<script>
export default {
  name: "Featured",
};
</script>

<style lang="scss" scoped>
.top{
    margin-top: 5vh;
}
.col {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  border: 1px solid white;
}
.one {
  background-image: url("https://i.ibb.co/8bP4xWg/Sleeping1.jpg");
}
.two{
  background-image: url("https://i.ibb.co/5hKh3pX/topview.jpg");
  
}
.three{
  background-image: url("https://i.ibb.co/FnXLrHV/Renderrev-2.jpg");
}
.four{
  background-image: url("https://i.ibb.co/NmRTjYW/cons.jpg");
}
.bg{
 -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.cont{
    position: relative;
    z-index: 1;
    width: 100%;
    margin-top: -20vh;
    background-color: rgba($color: #070707, $alpha: 0.8) ;
    height: 20vh;
}
p{
    position: relative;
    z-index: 3;
    color: white;
    font-size: 1.7vw;
}
</style>
