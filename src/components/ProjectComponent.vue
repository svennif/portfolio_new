<template>
    <h1 class="project__heading text-4xl text-center">Selected work</h1>
    <section id="projects" class="max-w-7xl mx-auto p-6 lg:p-8 mt-2">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-4">
            <a :href="project.url" target="_blank" class="project__wrapper scale-100 p-5 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/20 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500 hover:shadow-offset-x-6 hover:shadow-offset-y-6 hover:shadow-blur-15 hover:shadow-spread-0 hover:text-black" v-for="project in projects" :key="project.id">
                <div class="flex-col text-center project__information">
                    <img class="project__information--image block m-auto" :src="project.image" v-bind:alt="project.description" />
                    <h2 class="project__information--title text-xl font-semibold text-gray-900 mt-2 text-white-200">{{ project.title }}</h2>
                    <p class="project__information--description pb-4 text-sm leading-relaxed mt-2 h-14">{{ project.description }}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="self-center shrink-0 stroke-red-500 w-7 h-7 m-auto project__information--arrow mt-3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                </div>
            </a>
        </div>
    </section>
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
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
                {
                    id: 2,
                    title: "Holidaze",
                    url: "https://svennif.github.io/holidaze/",
                    image: require("@/assets/images/holidaze.png"),
                    description: "Pellentesque ac metus semper, mollis est quis, rhoncus erat.",
                },
                {
                    id: 3,
                    title: "Nasa Site",
                    url: "https://svennif.github.io/nasa/",
                    image: require("@/assets/images/nasa-site.png"),
                    description: "Integer a sem ullamcorper, bibendum ipsum sit amet, blandit nisi.",
                },
            ],
        };
    },
    mounted() {},
};
</script>

<style>

</style>
