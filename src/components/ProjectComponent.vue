<template>
    <div class="mx-auto h-full">
        <h1 class="text-4xl text-highlight text-center mt-6 md:mt-24">Selected work</h1>
        <section id="projects" class="mx-auto p-6 lg:p-8 mt-2">
            <div class="grid grid-cols-1 md:grid-cols-1">
                <a :href="project.url" target="_blank" class="scale-100 p-5 via-transparent shadow-2xl shadow-gray-500/20 dark:shadow-none flex focus:outline focus:outline-2 focus:outline-red-500" v-for="project in projects" :key="project.id">
                    <div class="flex flex-row text-left align-bottom">
                        <div>
                            <img class="block m-auto h-[240px] w-[480px] object-cover" :src="project.image" v-bind:alt="project.name" />
                        </div>
                        <div class="ml-4">
                            <h2 class="text-xl font-bold text-highlight mt-2">{{ project.title }}</h2>
                            <p class="pb-4 text-sm text-neutral-200 leading-relaxed mt-2 h-14">{{ project.description }}</p>
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
