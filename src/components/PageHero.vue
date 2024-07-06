<script setup>
// props
const props = defineProps(["title"])

</script>

<template>
    <section class="hero">
        <h2>{{ title }}</h2>
    </section>
</template>

<style scoped>
.hero{
    background-color: aliceblue;
    height: 20vh;
    width: 60%;
    margin: auto;
    margin-bottom: 20px;
    border: 2px solid aliceblue;
    border-radius: 4px;
    color: #024959;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .hero{
        width: 100%;
    } 
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .hero{
        width: 100%;
    } 
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .hero{
        width: 90%;
    } 
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .hero{
        width: 80%;
    } 
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .hero{
        width: 70%;
    } 
}

</style>