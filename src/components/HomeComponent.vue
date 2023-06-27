<template>
    <div id="home" class="mx-auto h-screen">
        <div class="mt-24 md:mt-36">
            <img class="mx-auto w-52" :src="portrait_image" alt="Portrait of Sven Ingar" />
            <div class="text-center">
                <h1 class="text-neutral-200 font-main text-3xl md:text-5xl font-bold mt-4">Hello, I'm</h1>
                <h2 class="text-highlight font-hightlight text-5xl/[1.3] md:text-8xl mt-2 font-bold">Sven Ingar Frantzen</h2>
                <p class="text-neutral-200 font-main  text-3xl/[1.4] md:text-4xl mt-8 p-2">
                    Frontend developer
                    <span class="text-highlight font-hightlight">and</span>
                    UX/UI Designer.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import portrait_image from "@/assets/images/portrait.png";
</script>

<style ></style>
