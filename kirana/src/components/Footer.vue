<template>
<div>
  <div class="container- bg">
    <div class="rows">
      <div class="col">
        <div>
          <p>OUR OFFICE</p>
          <p class="sub">
           Jln kalingga utara VII, kadipiro, banjarsari, surakarta, jawa tengah.
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3955.328398984516!2d110.8142379!3d-7.5391177!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a16a5f6c41575%3A0x57afad8c0b6aa4c0!2sJl.%20Kalingga%20Utara%20VI%2C%20Kadipiro%2C%20Kec.%20Banjarsari%2C%20Kota%20Surakarta%2C%20Jawa%20Tengah%2057136!5e0!3m2!1sen!2sid!4v1587532810288!5m2!1sen!2sid"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
      <div class="col">
        <div>
          <p>Follow US</p>
          <img src="../assets/facebook.png" alt="" />
          <a href="https://www.instagram.com/kiranaconstruction/?hl=en" target="blank">
          <img src="../assets/instagram-sketched.png" alt="" />
          </a>
        </div>
      </div>
      <div class="col">
        <div>
          <p>Contact</p>
          <p class="sub">
            Phone : 081548433499 <br />
            Email : kiranaconstruction@gmail.com
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="license">
    <p class="text">©2020 Kirana Construction, All Rights Reserved.</p>
    </div>
    </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.bg {
  background-color: #485975;
}
.col {
  text-align: start;
  div {
    color: white;
    padding: 3vw;
  }
}
.rows {
  display: flex;
}
.sub {
  font-size: 1.2vw;
}
img {
  height: 4vh;
  margin: 0.3vw;
}
p {
  font-size: 1.6vw;
}
iframe {
  width: 20vw;
  height: 10vw;
}
.license{
  background-color: #1b2733;
  display: flex;
  flex-direction: column;
  justify-content: end;
  color: white;
  p{
    font-size: 1.2vw;
  }
}
</style>
