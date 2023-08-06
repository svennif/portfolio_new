<template>
    <section class="mx-auto h-auto max-w-[107rem] px-4 md:px-16 flex flex-col mb-20">
        <div class="container">
            <div class="flex flex-col w-full">
                <h1 id="project" class="text-2xl text-neutral-200 text-center m-4 uppercase mt-28"><i>Selected work</i></h1>
                <div class="grid grid-cols-1 h-auto max-w-7xl w-full gap-5 md:gap-20 mt-5">
                    <div class="flex flex-col md:flex-row gap-12 md:gap-32 w-full h-full p-4 md:p-8 shadow-custom-1 rounded-3xl bg-midnight" v-for="project in projects" :key="project.id">
                        <div class="w-full md:w-[53rem] overflow-hidden h-auto shadow-custom-2 rounded-xl md:rounded-3xl">
                            <a :href="project.url">
                                <img class="h-full w-full" :src="project.image" :alt="project.name" />
                            </a>
                        </div>
                        <div class="flex flex-col h-auto justify-center text-center w-full md:w-[30rem]">
                            <h2 class="text-3xl mb-8 relative uppercase text-highlight">{{ project.title }}</h2>
                            <p class="text-3xl font-medium text-center text-neutral-200">{{ project.description }}</p>
                            <div class="grid grid-cols-2 mx-auto md:flex gap-4 justify-center mt-6">
                                <p class="px-4 py-3 font-semibold shadow-custom-1 text-lg text-center bg-highlight rounded-xl" v-for="tag in project.tags" :key="tag">{{ tag }}</p>
                            </div>
                            <div class="flex items-center justify-evenly mt-12">
                                <a target="_blank" rel="noreferrer" :href="project.gh" class="text-neutral-200 hover:text-highlight text-xl items-center flex gap-2 transition-all duration-[0.3s]">
                                    Code
                                    <font-awesome-icon class="mx-auto" icon="fa-brands fa-github" size="xl" title="GitHub link icon" />
                                </a>
                                <a target="_blank" rel="noreferrer" :href="project.url" class="text-neutral-200 hover:text-highlight text-xl items-center flex gap-2 transition-all duration-[0.3s]">
                                    Live demo
                                    <font-awesome-icon class="mx-auto" size="xl" icon="fa-solid fa-arrow-up-right-from-square" title="Go to external url" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                    image: require("@/assets/images/cs-smokes.webp"),
                    tags: ["HTML", "CSS", "JavaScript"],
                    description: "Website to teach smokes in CS:GO.",
                    gh: "https://github.com/svennif/cs-smokes",
                },
                {
                    id: 2,
                    title: "Holidaze",
                    url: "https://svennif.github.io/holidaze/",
                    image: require("@/assets/images/holidaze.webp"),
                    tags: ["React", "Sass"],
                    description: "School project for showing hotels.",
                    gh: "https://github.com/svennif/holidaze",
                },
                {
                    id: 3,
                    title: "Nasa Site",
                    url: "https://svennif.github.io/nasa/",
                    tags: ["HTML", "CSS", "JavaScript"],
                    image: require("@/assets/images/nasa-site.webp"),
                    description: "School project for displaying NASA technologies.",
                    gh: "https://github.com/svennif/nasa",
                },
            ],
        };
    },
    mounted() {},
};
</script>

<style></style>
