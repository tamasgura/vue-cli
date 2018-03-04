<template>

	<div class="listingStatistics col-xl-8 px-3">
		<h3 class="">Listing statistics</h3>
		<div class="row no-gutters">

			<div class="col-xl-2 pieChart p-0">

				<app-pie-chart :data="listingsData" :total="totalListings"></app-pie-chart>

			</div>
			<div class="flex-column col-xl-10">
				
				<div class="row no-gutters col-xl-12 totalListings">

					<p class="statisticsNr col-xl-12 mb-0 pb-0">{{ totalListings }}</p>
					<p>total listing</p>

				</div>
		
				<div class="row no-gutters col">

					<app-statistics-component v-for="(data, key) in listingsData" :key="key" :data="data" :total="totalListings"></app-statistics-component>

				</div>
				
			</div>
			

		</div>
		
		<p class="dates text-center">{{ getDateFrom(7) }}-{{ getDateFrom(0) }}</p>
		
	</div>


</template>

<script type="text/javascript">
	import StatisticsComponent from './StatisticsComponent.vue';
	import PieChart from './PieChart.vue';
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
		methods: {
			getDateFrom(daysBack) {

				let d = new Date();
				d.setDate(d.getDate() - daysBack);
				let ddStart = d.getDate();
				let mmStart = d.getMonth() + 1;
				let yyyyStart = d.getFullYear();

				if (ddStart < 10) { ddStart = '0'+ ddStart }

				if (mmStart < 10) { mmStart = '0'+ mmStart }

				d =  ddStart + '.' + mmStart + '.' + yyyyStart;

				return d;
			}
		},
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
	
</style>