<template>
	
	<div class="day px-2 col">

		<div class="barHolder mx-auto progress align-items-end w-50">
			
			<div class="bar progress-bar w-100" role="progressbar"
				:style="{height: day.amount/(40/100) + '%'}" data-html="true" :title="tooltipText" data-toggle="tooltip" data-placement="top">
			</div>		

		</div>

		<p class="text-center">{{ day.date }}</p>
		
	</div>

</template>

<script type="text/javascript">

	export default {

		data: function() {
			return {
				hovered: false,
				tooltipText: ''
			}
		},
		props: ['day'],
		created() {
		
// enable tooltips
			$(function () {
			  $('[data-toggle="tooltip"]').tooltip()
			});
// set tooltipText
			
				let m = this.day.date.slice(-2);
				let d = this.day.date.slice(0,2).replace('0','') +'th';

				switch(m){
					case '01': m = "January";
					    break;
					case '02': m = "February";
					    break;
					case '03': m = "March";
					    break;
					case '04': m = "April";
					    break;
					case '05': m = "May";
					    break;
					case '06': m = "June"; 
					    break;
					case '07': m = "July";
					    break;
					case '08': m = "August";
					    break;
					case '09': m = "September";
					    break;
					case '10': m = "October";
					    break;
					case '11': m = "November";
					    break;
					case '12': m = "December";
					    break;
				};
				this.tooltipText = d + ' ' + m  + '<br>' + this.day.amount + ' listed items on eBay'
				
			
		}
	}

</script>

<style type="text/css">

	.barHolder {
		height: 12.5rem;
		background-color: #e9e9e9;
	}
	.bar {
		background-color: #a8cda7;
		border-radius: .18rem;
	}
	.tooltip {
		font-size: .6875rem;
	}
</style>