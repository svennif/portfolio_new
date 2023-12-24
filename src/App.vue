<script setup>
import { SpeedInsights } from "@vercel/speed-insights/vue"
</script>

<template>
    <Navbar />
    <router-view />
    <Footer />
    <SpeedInsights />
</template>

<script>
import Navbar from "@/components/common/NavbarComponent.vue";
import Footer from "@/components/common/FooterComponent.vue";

export default {
    name: "App",
    components: {
        Navbar,
        Footer,
    },
};
</script>

<style>
@import "@/assets/styles/style.css";
</style>
