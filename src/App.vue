<template>
        <Home />
        <Projects />
        <About />
        <Contact />
</template>

<script>
import Home from "@/components/HomeComponent.vue";
import Projects from "./components/ProjectComponent.vue";
import About from "./components/AboutComponent.vue";
import Contact from "./components/ContactComponent.vue";

export default {
    name: "App",
    components: {
    Home,
    Projects,
    About,
    Contact
},
};
</script>

<style>
@import "@/assets/styles/style.css";
</style>
