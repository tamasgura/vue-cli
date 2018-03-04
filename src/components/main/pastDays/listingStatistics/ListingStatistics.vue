<template>

	<div class="listingStatistics col-xl-8">
		<h3 class="">Listing statistics</h3>
		<div class="row no-gutters">

			<div class="bg-info col-xl-2 pieChart">

				<app-pie-chart></app-pie-chart>

			</div>
			<div class="flex-column col-xl-10">
				
				<div class="row no-gutters col-xl-12 totalListings">

					<p class="statisticsNr col-xl-12 mb-0">{{ listingStatistics.total }}</p>
					<p>total listing</p>

				</div>
		
				<div class="row no-gutters col">
					<app-statistics-component></app-statistics-component>
					<app-statistics-component></app-statistics-component>
					<app-statistics-component></app-statistics-component>
					<app-statistics-component></app-statistics-component>
				</div>
				
			</div>
			

		</div>
		
		<p class="dates text-center">13.09.2017-20.09.2017</p>
		
	</div>


</template>

<script type="text/javascript">
	import StatisticsComponent from './StatisticsComponent.vue';
	import PieChart from './PieChart.vue';

	export default {

		data: function() {
			return {
				listingStatistics: {
						active: 3260,
						sold: 1149,
						unsold: 8547,
						scheduled: 0,
						total: 	12956
					}
			}
		},
		components: {
			'app-statistics-component': StatisticsComponent,
			'app-pie-chart': PieChart
		}

	}
</script>

<style type="text/css" scoped>

p {
	font-size: 0.6875rem;
	padding: 0;
}
.listingStatistics h3 {
	margin-bottom: 1rem;
}
.statisticsNr {
	font-family: 'Open Sans Condensed';
	font-weight: bold;
}

.totalListings p {
	color: #a8cda7;
}
.totalListings > .statisticsNr{
	font-size: 2.5rem;
}
.dates {
	font-size: 0.875rem;
	margin:2.5rem 0 3.325rem;
}
.pieChart {
	height:11rem; 
}
	
</style>