<template>
	
	<div class="col-xl-3 flex-column">
		<div class="row no-gutters d-flex align-items-center">

			<p class="statisticsNr">{{ data.value }}</p>
			<span v-if="data.color!==undefined" class="rounded-circle" :class="data.color"></span>
			
		</div>

		<p>{{ data.category }}</p>
		<p class="statisticsPerc">{{ data.percentage }}%</p>
	</div>

</template>

<script type="text/javascript">

	export default {
		props: ['data', 'total']
	}
	
</script>

<style type="text/css" scoped>
	p {
		font-size: .6875rem;
		margin: 0;
		padding: 0;
	}
	.statisticsNr {
		font-size: 1.5rem;
	}
	.statisticsPerc {
		font-size: 1.125rem;
	}
	span {
		display: inline-block;
		width: 1rem;
		height: 1rem;
		margin: .5rem;
	}
</style>