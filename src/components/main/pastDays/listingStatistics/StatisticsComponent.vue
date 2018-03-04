<template>
	
		<div class="col-3 col-md-6 col-lg-3 flex-row">

			<p class="statisticsNr">{{ data.value.toLocaleString('en-GB-boont-r-extended-sequence-x-private') }} <span v-if="data.color!==undefined" class="rounded-circle mx-1" :class="data.color"></span></p>
	
			<p class="">{{ data.category }}</p>
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
		margin-top: -.2rem;
		margin-bottom:0;
		padding: 0;
	}
	.statisticsNr {
	font: bold 1.5rem 'Open Sans Condensed';
	}
	.statisticsPerc {
		font: 1rem 'Open Sans';
	}
	span {
		display: inline-block;
		width: 1rem;
		height: 1rem;
	}
</style>