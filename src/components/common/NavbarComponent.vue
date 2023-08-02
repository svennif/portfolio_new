<template>
    <header class="header bg-midnight bg-opacity-80 z-50 fixed top-0 mx-auto inset-x-0 p-4">
        <nav id="navbar" class="w-full z-50 mt-3 shadow-sm transform">
            <div class="flex justify-center items-center right-0">
                <ul class="flex">
                    <li>
                        <RouterLink class="menu-link mr-5 text-lg/8 text-neutral-200 hover:text-highlight" to="/">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="menu-link mr-5 text-lg/8 text-neutral-200 hover:text-highlight" to="/about">About</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="menu-link mr-5 text-lg/8 text-neutral-200 hover:text-highlight" to="/projects">Projects</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="menu-link mr-5 text-lg/8 text-neutral-200 hover:text-highlight" to="/contact">Contact</RouterLink>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {};
</script>

<style>
.menu-link {
    background-image: linear-gradient(#91b5ef, #3c5376);
    background-size: 0% 0.1em;
    background-position-y: 100%;
    background-position-x: 100%;
    background-repeat: no-repeat;
    transition: background-size 0.3s ease-in-out;
}

.menu-link:hover {
    background-size: 100% 0.1em;
    background-position-x: 0%;
}
</style>
