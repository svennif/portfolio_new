<template>
    <div id="about" class="mx-auto h-screen">
        <h1 class="text-4xl text-highlight text-center mt-10 md:mt-24">Who am I?</h1>
        <div class="columns-2 flex justify-center p-20">
            <div class="w-1/2">
                <img class="px-10 mx-auto" :src="portrait_image" alt="Portrait of Sven Ingar" />
                <div class="px-10 mx-auto w-1/2">
                    <h2 class="text-2xl text-highlight my-4 font-bold">Education</h2>
                    <ul class="leading-relaxed">
                        <li class="text-xl flex flex-col">
                            <span class="text-neutral-200">2015 - 2018</span>
                            <span class="text-neutral-200">Bsc. <i>New Media</i>, </span>
                            <span class="text-highlight">
                                <i><strong>University of Bergen</strong></i>
                            </span>
                        </li>
                        <li class="text-xl flex flex-col mt-4">
                            <span class="text-neutral-200">2019 - 2021</span>
                            <span class="text-neutral-200">Higher Professional Degree - <i>Frontend Development</i>, </span>
                            <span class="text-highlight">
                                <i><strong>Noroff, School of technology and digital media</strong></i>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="w-1/2 mx-auto text-neutral-200">
                <h2 class="text-2xl text-highlight mb-4 mt-6 font-bold">Summary</h2>
                <p class="leading-relaxed">I am an experienced Frontend Developer, transitioning from a decade in retail management at Coop Obs Bryne to IT consultancy and currently frontend development. During my time as an IT Consultant at Front Software, I mastered skills including project management and development in React and worked extensively on digital control systems for Pizzabakeren, one of Norway's leading pizza chains. Currently, I'm a Junior Integration Specialist at Clerk.io, creating recommendation sliders for various webshops.</p>
                <p class="leading-relaxed mt-2">
                    <span class="text-highlight">Skills accuired: </span>
                    <i>HTML, CSS, JavaScript, PHP, Smarty, Liquid, Wordpress, Shopify, Prestashop, Magento 1 & 2, DanDomain</i>
                </p>
                <p class="leading-relaxed mt-5">In terms of academics, I earned a Bachelor's degree in New Media from the University of Bergen, followed by a Higher Professional Degree in Frontend Development from Noroff. These qualifications equipped me with a comprehensive understanding of application development, from ideation to publication.</p>
                <p class="leading-relaxed mt-2">
                    <span class="text-highlight">Skills accuired: </span>
                    <i>React, Vue, Git, SCSS, Nodejs, UX/UI, Premiere Pro, Photoshop, SQL</i>
                </p>
                <p class="leading-relaxed mt-5">Outside work, I maintain a keen interest in technology advancements and UX design trends, alongside my love for outdoor activities. I enthusiastically look forward to overcoming new challenges and opportunities in frontend development.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        return {
            portrait_image: require("@/assets/images/portrait.webp"),
        };
    },
};
</script>

<style scoped></style>
