<template>
  <div class="bg-midnight text-white-200 flex flex-col justify-center m-0 p-0">
  <Home />
  <!-- <Projects /> -->
  </div>
</template>

<script>
import Home from '@/components/HomeComponent.vue';
// import Projects from './components/ProjectComponent.vue';

export default {
  name: 'App',
  components: {
    Home,
    // Projects
}
}
</script>

<style>
  @import '@/assets/styles/style.css';
</style>
