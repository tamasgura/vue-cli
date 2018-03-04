<template>

	<div class="listingStatistics col-11 col-md-5 col-xl-7 px-0">
		<h3 class="">Listing statistics</h3>
		<div class="row no-gutters d-flex justify-content-start">

			<div class="col-12 col-md-5 col-lg-4 col-xl-2 pieChart p-0 mr-4">

				<app-pie-chart :data="listingsData" :total="totalListings"></app-pie-chart>

			</div>
			<div class="flex-column col-12 col-lg-12 col-xl-8">
				
				<div class="d-flex flex-column col-12 col-xl-12 justify-content-center totalListings">
					
					<p class="totalListingsNr d-flex col-12 mb-0 pb-0">{{ totalListings.toLocaleString('en-GB-boont-r-extended-sequence-x-private') }}</p>
					<p class="totalListingsText col-12">total listing</p>

				</div>
		
				<div class="row no-gutters col-12 p-0 d-flex flex-row justify-content-center">

					<app-statistics-component v-for="(data, key) in listingsData" :key="key" :data="data" :total="totalListings"></app-statistics-component>

				</div>
				
			</div>
			

		</div>
		
		<p class="dates text-center col-12 col-7 col-md-12">{{ getDateFrom(7) }}-{{ getDateFrom(0) }}</p>
		
	</div>


</template>

<script type="text/javascript">
	import StatisticsComponent from './StatisticsComponent.vue';
	import PieChart from './PieChart.vue';
	import { dateMixin } from '../../../dateMixin.js';
	export default {

		data: function() {
			return {
				listingsData: [
					{
						category: 'active',
						value: 8454,
						percentage: 0,
						color: 'green'
					},
					{
						category: 'sold',
						value: 3578,
						percentage: 0,
						color: 'blue'
					},
					{
						category: 'unsold',
						value: 1456,
						percentage: 0,
						color: 'gray'
					},
					{
						category: 'scheduled',
						value: 0,
						percentage: 0,
					}
				],
				totalListings: 12488,

			}
		},
		components: {
			'app-statistics-component': StatisticsComponent,
			'app-pie-chart': PieChart
		},
		mixins: [dateMixin],
		created() {
// calculate percentages
			var self=this;
			this.listingsData.forEach(function(el) {
			  el.percentage = Math.round(el.value / (self.totalListings/100));
			  
			});
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
	font: bold 1.5rem 'Open Sans Condensed';
}

.totalListingsNr{
	font: bold 2.5rem 'Open Sans Condensed';
	color: #a8cda7;
}
.dates {
	font-size: 0.875rem;
	margin: .5rem 0 0;
}
.pieChart {
	min-width: 160px;
}

	@media (min-width: 768px) {
		.totalListings {
			text-align: left !important;
			padding-left: 0;
		}
	}
</style>