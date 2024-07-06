<script setup>
import PageHero from "@/components/PageHero.vue";
</script>

<template>
  <main class="main-container">
    <PageHero title="About"/> 
    <section class="about-msg">
      <p>This is a Task App built by <span class="skill">Shumie</span>. <br/> The app was built to showcase her technical skills and knowledge of
        <span class="skill"> Vue JS, </span>
        <span class="skill"> Pinia, </span>
        <span class="skill"> JavaScript, </span>
        <span class="skill"> HTML </span> and
        <span class="skill"> CSS </span>.
        Checkout the rest of her project on her <a class="link" href="https://github.com/Shumieb"> GitHub </a> page.
        <br/>
        Thank you for visiting this site.
      </p>
    </section>
  </main>
</template>

<style scoped>
.about-msg{
  background-color: #FFCB9A;
  border: 2px solid #FFCB9A;
  border-radius: 4px;
  padding: 20px 16px;
  font-size: 22px;
  margin: auto;
  margin-top: 50px;
  color: #024959;
  min-height: 40vh;
  line-height: 1.4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.skill{
  font-weight: bold;
}

.link{
  font-style: italic;
  font-weight: bold;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  section{
        width: 100%;
    } 
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  section{
        width: 100%;
    } 
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  section{
        width: 90%;
    } 
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  section{
        width: 80%;
    } 
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  section{
        width: 70%;
    } 
}
</style>
