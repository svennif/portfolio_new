<template>
    <div class="max-w-7xl mx-auto h-full md:h-screen snap-start snap-always">
        <h1 class="text-4xl text-highlight text-center mt-6 md:mt-24">Selected work</h1>
        <section id="projects" class="max-w-7xl mx-auto p-6 lg:p-8 mt-2">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-3">
                <a :href="project.url" target="_blank" class="scale-100 p-5 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/20 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500 hover:shadow-xl hover:shadow-offset-x-2 hover:shadow-offset-y-2" v-for="project in projects" :key="project.id">
                    <div class="flex-col text-left">
                        <img class="block m-auto h-[200px] w-full object-cover" :src="project.image" v-bind:alt="project.name" />
                        <h2 class="text-xl font-bold text-highlight mt-2">{{ project.title }}</h2>
                        <p class="pb-4 text-sm text-neutral-200 leading-relaxed mt-2 h-14">{{ project.description }}</p>
                        <p class="text-neutral-200">{{ project.tags }}</p>
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
                    image: require("@/assets/images/cs-smokes.png"),
                    tags: "HTML, CSS, Javascript",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
                {
                    id: 2,
                    title: "Holidaze",
                    url: "https://svennif.github.io/holidaze/",
                    image: require("@/assets/images/holidaze.png"),
                    tags: "React, Sass",
                    description: "Pellentesque ac metus semper, mollis est quis, rhoncus erat.",
                },
                {
                    id: 3,
                    title: "Nasa Site",
                    url: "https://svennif.github.io/nasa/",
                    tags: "HTML, CSS, JS",
                    image: require("@/assets/images/nasa-site.png"),
                    description: "Integer a sem ullamcorper, bibendum ipsum sit amet, blandit nisi.",
                },
            ],
        };
    },
    mounted() {},
};
</script>

<style></style>
