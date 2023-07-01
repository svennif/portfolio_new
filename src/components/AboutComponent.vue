<template>
    <div id="about" class="mx-auto h-screen">
        <h1 class="text-4xl text-highlight text-center mt-10 md:mt-24">Who am I?</h1>
        <div class="columns-2 flex justify-center">
            <div class="w-1/3">
                <img class="px-10" :src="portrait_image" alt="Portrait of Sven Ingar"/>
            </div>
            <div class="w-2/3 text-neutral-200 p-10">
                <h2 class="text-2xl text-highlight mb-4">Summary</h2>
                <p class="leading-relaxed">I'm a seasoned Frontend Developer, with a diverse background in retail management and IT consulting. At Clerk.io, I design recommendation sliders for various webshops, utilizing HTML, CSS, JavaScript, PHP, Smarty, and Liquid. My education includes a Bachelor's in New Media from the University of Bergen and a Higher Professional Degree in Frontend Development from Noroff. Customer satisfaction is my priority, and I strive to provide seamless user experiences. I am always ready for new challenges and growth opportunities in frontend development.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        return {
            portrait_image: require('@/assets/images/portrait.png')
        };
    },
};
</script>

<style scoped></style>
