<script setup>
import { SpeedInsights } from "@vercel/speed-insights/vue"
import HomeComponent from "./components/HomeComponent_v2.vue";
</script>

<template>
	<div class="macchiato bg-base h-screen p-6">
		<HomeComponent />
	</div>
	<SpeedInsights />
</template>

<script></script>

<style>
@import "@/assets/styles/style.css";
</style>
