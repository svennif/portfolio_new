<template>
    <section class="mx-auto h-auto max-w-[107rem] px-4 md:px-16 flex flex-col mb-20">
        <div class="container">
            <div id="about" class="mx-auto h-auto md:h-screen">
                <h1 class="text-2xl text-neutral-200 text-center m-4 uppercase mt-28"><i>Who is Sven Ingar?</i></h1>
                <div class="flex flex-col md:flex-row justify-center mt-5">
                    <div class="md:object-right md:ml-auto md:mr-6 md:mt-6 mx-5">
                        <img class="text-right" :src="portrait_image" alt="Portrait of Sven Ingar" />
                    </div>
                    <div class="text-neutral-200 mx-5 w-100 md:w-1/2">
                        <h2 class="text-2xl text-highlight mb-4 mt-6 font-bold">Summary</h2>
                        <div class="mr-5 md:w-3/4">
                            <p class="leading-relaxed">I am an experienced Frontend Developer, transitioning from a decade in retail management at Coop Obs Bryne to IT consultancy and currently frontend development. During my time as an IT Consultant at Front Software, I mastered skills including project management and development in React and worked extensively on digital control systems for Pizzabakeren, one of Norway's leading pizza chains. Currently, I'm a Junior Integration Specialist at Clerk.io, creating recommendation sliders for various webshops.</p>
                            <p class="leading-relaxed mt-2">
                                <span class="text-highlight">Skills acquired:</span>
                                <i>HTML, CSS, JavaScript, Git, PHP, Smarty, Liquid, Wordpress, Shopify, Prestashop, Magento 1 & 2, DanDomain</i>
                            </p>
                            <p class="leading-relaxed mt-5">Outside work, I maintain a keen interest in technology advancements and UX design trends, alongside my love for outdoor activities. I enthusiastically look forward to overcoming new challenges and opportunities in frontend development.</p>
                        </div>
                        <div class="">
                            <h2 class="text-2xl text-highlight my-4 font-bold h-auto">Education</h2>
                            <ul class="leading-relaxed">
                                <li class="text-xl flex flex-col">
                                    <span class="text-neutral-200">2015 - 2018</span>
                                    <span class="text-neutral-200">
                                        Bsc.
                                        <i>New Media</i>
                                        ,
                                    </span>
                                    <span class="text-highlight">
                                        <i><strong>University of Bergen</strong></i>
                                    </span>
                                </li>
                                <li class="text-xl flex flex-col mt-4">
                                    <span class="text-neutral-200">2019 - 2021</span>
                                    <span class="text-neutral-200">Higher Professional Degree</span>
                                    <span class="text-neutral-200">
                                        <i>Frontend Development</i>
                                        ,
                                    </span>
                                    <span class="text-highlight">
                                        <i><strong>Noroff, School of technology and digital media</strong></i>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <p class="leading-relaxed mt-2">
                            <span class="text-highlight">Skills acquired:</span>
                            <i>React, Vue, Git, SCSS, Tailwind, Bootstrap, Nodejs, UX/UI, Premiere Pro, Photoshop, SQL</i>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
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
