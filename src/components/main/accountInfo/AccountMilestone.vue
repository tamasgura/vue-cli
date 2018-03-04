<template>

	<div>
		<div>Completed: {{ milestone.completed }}</div>
		<p>{{ milestone.name }}</p>
	</div>

</template>

<script type="text/javascript">
	export default {

		props: ['milestone']

	}

</script>

<style type="text/css" scoped>
	

	
</style>