<template>
    <div id="home" class="mx-auto w-100">
        <div class="mt-24 md:mt-24">
            <img class="mx-auto w-52" :src="portrait_image" alt="Portrait of Sven Ingar" />
            <div class="text-center mx-3">
                <h1 class="text-neutral-200 font-main text-3xl md:text-4xl font-bold mt-4">Hello, I'm</h1>
                <h2 class="text-highlight font-hightlight text-5xl/[1.3] md:text-7xl mt-2 font-bold">Sven Ingar Frantzen</h2>
                <p class="text-neutral-200 font-main text-3xl/[1.4] md:text-4xl mt-8 p-2">
                    Frontend developer
                    <span class="text-highlight font-hightlight">and</span>
                    UX/UI Designer,
                </p>
                <p class="text-neutral-200 font-main text-3xl/[1.4] md:text-3xl p-2">currently located in Copenhagen, Denmark</p>
            </div>
            <div class="mx-auto w-full flex mt-12 mb-10 gap-8 justify-center">
                <a href="https://github.com/svennif" target="_blank"><font-awesome-icon class="mx-auto text-neutral-200 hover:text-highlight" icon="fa-brands fa-square-github" size="4x" title="GitHub link icon" />
                    <span class="sr-only">Go to my Github</span>
                </a>
                <a href="https://www.linkedin.com/in/sven-ingar-frantzen-45bb26161/" target="_blank"><font-awesome-icon class="mx-auto text-neutral-200 hover:text-highlight" icon="fa-brands fa-linkedin" size="4x" alt="Linkedin link icon" />
                    <span class="sr-only">Go to my Linkedin</span></a>
            </div>
        </div>
    </div>
</template>

<script setup>
import portrait_image from "@/assets/images/portrait.webp";
</script>

<style></style>
