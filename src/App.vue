<template>
    <Navbar />
    <router-view />
    <Footer />
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
