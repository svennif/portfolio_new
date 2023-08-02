<template>
    <div class="mx-auto h-full">
        <h1 id="project" class="text-4xl text-highlight text-center mt-24 md:mt-24">Selected work</h1>
        <section id="projects" class="mx-auto p-6 lg:p-8 mt-2">
            <div class="grid grid-cols-1 md:grid-cols-1">
                <a :href="project.url" target="_blank" class="scale-100 p-5 via-transparent shadow-2xl shadow-gray-500/20 dark:shadow-none flex focus:outline focus:outline-2 focus:outline-red-500" v-for="project in projects" :key="project.id">
                    <div class="flex flex-col md:flex-row text-left align-bottom">
                        <div>
                            <img class="block m-auto h-[200px] w-full md:w-[480px] md:h-[240px] object-cover" :src="project.image" v-bind:alt="project.name" />
                        </div>
                        <div class="md:ml-4">
                            <h2 class="text-xl font-bold text-highlight mt-2">{{ project.title }}</h2>
                            <p class="pb-4 text-sm text-neutral-200 mt-2">{{ project.description }}</p>
                            <p class="text-neutral-200">{{ project.tags }}</p>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {
                    id: 1,
                    title: "CS Smokes",
                    url: "https://svennif.github.io/cs-smokes/",
                    image: require("@/assets/images/cs-smokes.webp"),
                    tags: "HTML, CSS, Javascript",
                    description: "Website to teach smokes in CS:GO.",
                },
                {
                    id: 2,
                    title: "Holidaze",
                    url: "https://svennif.github.io/holidaze/",
                    image: require("@/assets/images/holidaze.webp"),
                    tags: "React, Sass",
                    description: "School project for showing hotels.",
                },
                {
                    id: 3,
                    title: "Nasa Site",
                    url: "https://svennif.github.io/nasa/",
                    tags: "HTML, CSS, JS",
                    image: require("@/assets/images/nasa-site.webp"),
                    description: "School project for displaying NASA technologies.",
                },
            ],
        };
    },
    mounted() {},
};
</script>

<style></style>
