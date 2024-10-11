<script setup lang="ts">
import Facebooklogo from './icons/Facebooklogo.vue';
import Insta from './icons/Insta.vue';
import Twitter from './icons/Twitter.vue';


</script>

<template>
  <div class="app">
    <header>
      <div class="container">
        <div class="content">
          <router-link to="/"><img src="/src/assets/images/logo.svg" alt=""></router-link>
          <nav>
            <ul class="menu">
              <li><router-link to="/feature">Features</router-link></li>
              <li><router-link to="/team">Team</router-link></li>
              <li><router-link to="/sign">Sign in</router-link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <div class="container">
        <div class="content_foot">
          <div class="logo">
            <img src="/src/assets/images/logo.svg" alt="">
          </div>
          <div class="log_loc">
            <div class="local">
              <img src="/src/assets/images/icon-location.svg" alt="" class="ico">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua</p>
            </div>
            <div class="contact">
              <div class="moyen_contact">
                <img src="/src/assets/images/icon-phone.svg" alt="">
                <p>+1-543-123-4567</p>
              </div>
              <div class="moyen_contact">
                <img src="/src/assets/images/icon-email.svg" alt="">
                <p>example@fylo.com</p>
              </div>
            </div>
            <div class="foot_menu">
              <nav>
                <ul>
                  <li>About Us</li>
                  <li>Jobs</li>
                  <li>Press</li>
                  <li>Blog</li>
                </ul>
              </nav>
            </div>
            <div class="foot_menu">
              <nav>
                <ul>
                  <li>Contact Us</li>
                  <li>Terms</li>
                  <li>Privacy</li>
                </ul>
              </nav>
            </div>
            <div class="social_icon">
              <Facebooklogo></Facebooklogo>
              <Twitter></Twitter>
              <Insta></Insta>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@font-face {
  font-family: "Raleway", sans-serif;
  src: url(/src/assets/Raleway/Raleway-VariableFont_wght.ttf);
}

@font-face {
  font-family: "Open Sans", sans-serif;
  src: url(/src/assets/Open_Sans/OpenSans-VariableFont_wdth\,wght.ttf);
}

.app {
  width: 100%;
  padding: 0;
  margin: 0;
}

header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}

.container {
  max-width: 1044px;
  margin: 0 auto;
}

.content {
  width: 100%;
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.content a img {
  height: 100%;
  width: 60%;
}

.menu {
  display: flex;
  align-items: center;
  gap: 20px;
}

li {
  list-style: none;
  font-family: "Raleway", sans-serif;
}

main {
  width: 100%;
  padding-top: 120px;
  font-family: "Open Sans", sans-serif;
  margin: 0;
}

footer {
  width: 100%;
  height: 200px;
  background-color: hsl(216, 53%, 9%);
  margin: 0;
  color: hsla(0, 0%, 100%, 0.863);
  font-family: "Raleway", sans-serif;
}

.content_foot {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.log_loc{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  /* background-color: aqua; */
}
.logo img {
  width: 10%;
  /* height: 100%; */
}

.local {
  width: 305px;
  display: flex;
  align-items: start;
  gap: 15px;
  padding-top: 10px;
}

.local img {
  width: 10%;
}

p {
  margin: 0;
}

.moyen_contact {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 5px 0;
}

.foot_menu nav ul {
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
}
.social_icon{
  display: flex;
  align-items: center;
}
</style>
