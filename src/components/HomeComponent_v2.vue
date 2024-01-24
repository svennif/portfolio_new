<template lang="">
	<div class="blinker text-white">
		<span class="text-secondary">Svenni </span>
		<span class="text-background">~/portfolio/ </span>
		<span class="cursor">$ </span>
		me -h
	</div>
</template>
<script>
export default {

}
</script>
<style>
.blinker {
  width: 30ch;
  animation: typing 2s steps(25), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 10px solid #f2d5cf;
}
</style>
