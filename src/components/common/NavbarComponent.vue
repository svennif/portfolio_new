<template>
    <header class="header bg-midnight bg-opacity-70 z-50 fixed top-0 inset-x-0 p-4" :class="{ 'is-hidden': !showHeader }">
        <nav id="navbar" :class="{ 'is-hidden': !showHeader }" class="w-full z-50 shadow-sm transform">
            <div class="flex justify-center items-center right-0">
                <ul class="flex">
                    <li class="menu-link mr-5 text-lg/8 text-neutral-200 hover:text-highlight"><a href="#">Home</a></li>
                    <li class="menu-link mr-5 text-lg/8 text-neutral-200 hover:text-highlight"><a href="#">About</a></li>
                    <li class="menu-link mr-5 text-lg/8 text-neutral-200 hover:text-highlight"><a href="#">Projects</a></li>
                    <li class="menu-link mr-5 text-lg/8 text-neutral-200 hover:text-highlight"><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            showHeader: true,
            lastScrollPosition: 0,
            scrollOffset: 40,
        };
    },
    mounted() {
        this.lastScrollPosition = window.scrollY;
        window.addEventListener("scroll", this.onScroll);
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.onScroll);
    },
    methods: {
        // Toggle if navigation is shown or hidden
        onScroll() {
            if (window.scrollY < 0) {
                return;
            }
            if (Math.abs(window.scrollY - this.lastScrollPosition) < this.scrollOffset) {
                return;
            }
            this.showHeader = window.scrollY < this.lastScrollPosition;
            this.lastScrollPosition = window.scrollY;
        },
    },
};
</script>

<style lang="scss">
@mixin hover-in {
    background-image: linear-gradient(#91b5ef, #3c5376);
    background-size: 0% 0.1em;
    background-position-y: 100%;
    background-position-x: 100%;
    background-repeat: no-repeat;
    transition: background-size 0.3s ease-in-out;
}

@mixin hover-out {
    background-size: 100% 0.1em;
    background-position-x: 0%;
}

.menu-link {
    @include hover-in;
    &:hover {
        @include hover-out;
    }
}

.header {
    transform: translateY(0);
    transition: transform 300ms linear;
}

.header.is-hidden {
    transform: translateY(-100%);
}
</style>
