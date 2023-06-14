<template>
    <div class="home max-w-7xl mx-auto h-screen">
        <div class="mt-40">
            <img class="home__image mx-auto w-52" :src="portrait_image" alt="Portrait of Sven Ingar" />
            <div class="home-wrapper text-center">
                <h1 class="home__heading text-neutral-200 font-main text-5xl font-bold mt-4">Hello, I'm</h1>
                <h2 class="home__subheading text-highlight font-hightlight text-8xl mt-2 font-bold">Sven Ingar Frantzen</h2>
                <p class="home__description text-neutral-200 font-main text-4xl mt-8">
                    Frontend developer
                    <span class="home__description-highlight text-highlight font-hightlight">and</span>
                    UX/UI Designer.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import portrait_image from "@/assets/images/portrait.png";
</script>

<style lang="scss"></style>
