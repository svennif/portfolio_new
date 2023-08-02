<template>
    <div id="home" class="mx-auto h-screen">
        <p class="text-center mt-24 text-red-500 text-xl" ><i>This website is still under construction so changes will be coming in near future!</i></p>
        <div class="mt-24 md:mt-20">
            <img class="mx-auto w-52" :src="portrait_image" alt="Portrait of Sven Ingar" />
            <div class="text-center">
                <h1 class="text-neutral-200 font-main text-3xl md:text-4xl font-bold mt-4">Hello, I'm</h1>
                <h2 class="text-highlight font-hightlight text-5xl/[1.3] md:text-7xl mt-2 font-bold">Sven Ingar Frantzen</h2>
                <p class="text-neutral-200 font-main  text-3xl/[1.4] md:text-4xl mt-8 p-2">
                    Frontend developer
                    <span class="text-highlight font-hightlight">and</span>
                    UX/UI Designer,
                </p>
                <p class="text-neutral-200 font-main  text-3xl/[1.4] md:text-3xl p-2">currently located in Copenhagen, Denmark</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import portrait_image from "@/assets/images/portrait.webp";
</script>

<style ></style>
