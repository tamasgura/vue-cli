<template>

	<section class="pastDays row no-gutters">
		<app-column-chart></app-column-chart>
		<app-listing-statistics></app-listing-statistics>
	</section>

</template>

<script type="text/javascript">
	import ColumnChart from './inventoryLevels/ColumnChart.vue';
	import ListingStatistics from './listingStatistics/ListingStatistics.vue';
	
	export default {
		
		components: {	
			'app-column-chart': ColumnChart,
			'app-listing-statistics': ListingStatistics
		}
	}

</script>

<style type="text/css">
	
	.pastDays h3 {
		margin-bottom: 1rem;
	}
	
</style>

	