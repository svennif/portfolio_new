<template>
    <Navbar />
    <router-view />
    <!-- <Home id="home" /> -->
    <!-- <hr />
    <About id="about"  />
    <hr />
    <Projects id="projects" /> -->
    <!-- <Contact id="contact"  /> -->
</template>

<script>
// import Home from "@/components/HomeComponent.vue";
// import Projects from "@/components/ProjectComponent.vue";
// import About from "@/components/AboutComponent.vue";
// import Contact from "@/components/ContactComponent.vue";
import Navbar from "@/components/common/NavbarComponent.vue";

export default {
    name: "App",
    components: {
        // Home,
        // Projects,
        // About,
        // Contact,
        Navbar,
    },
};
</script>

<style>
@import "@/assets/styles/style.css";
</style>
