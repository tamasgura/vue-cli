<template>

	<div class="milestoneComponent text-center col flex-column">
		<div class="accountStatusIndicator rounded-circle mx-auto" :class="{regSuccess: milestone.completed}"></div>
		<p>{{ milestone.name }}</p>
		<div class="divider col align-self-start"></div>
	</div>
	
</template>

<script type="text/javascript">
	export default {
		props: ['milestone']
	}
</script>

<style type="text/css">
	


</style>