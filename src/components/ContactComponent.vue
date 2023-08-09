<template>
    <div id="contact" class="mx-auto">
        <div class="flex flex-col md:flex-row justify-center">
            <div class="flex-1 mx-auto w-full">
                <h1 class="text-2xl text-neutral-200 text-center m-4 uppercase mt-28"><i>Don't be shy! Hit me up!</i></h1>
                <div class="flex flex-col md:flex-row gap-8 text-center items-center justify-evenly" >
                    <div>
                        <p class="text-highlight text-2xl font-bold my-10">Mail</p>
                        <a class="text-neutral-200 hover:text-highlight text-xl items-center flex gap-2 transition-all duration-[0.3s]" href="mailto:sven.ingar@gmail.com">
                            Send me an email!
                            <font-awesome-icon size="xl" icon="fa-solid fa-envelope-open-text" />
                        </a>
                    </div>
                    <div>
                        <p class="text-highlight text-2xl font-bold my-10">Linkedin</p>
                        <a class="text-neutral-200 hover:text-highlight text-xl items-center flex gap-2 transition-all duration-[0.3s]" href="https://www.linkedin.com/in/sven-ingar-frantzen-45bb26161/" target="_blank">Or message on LinkedIn!
                            <font-awesome-icon icon="fa-brands fa-linkedin" size="xl" alt="Linkedin link icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        return {};
    },
};
</script>

<style scoped></style>
