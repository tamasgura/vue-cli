<template>
	
	<div class="col-xl-4 ">

		<h3>Inventory levels</h3>
		<div class="columnChart mx-auto p-3 container-fluid">
	
			<div class="row">
		
				<div class="amountAxis col-1 pt-1 mr-1 pr-0">
					<p class="d-block text-right pt-1 my-0" v-for="n in 8">{{ 40 - (n * 5) }}</p>
				</div>

				<app-column v-for="(day, index) in inventoryLevels" :day="day" :key="index"></app-column>

			</div>
		</div>
	</div>

</template>

<script type="text/javascript">

	import Column from './Column.vue';

	export default {
		data: function() {
			return {
				inventoryLevels: 
				[
					{
						date: '02 09',
						amount: 4
					},
					{
						date: '03 09',
						amount: 7
					},
					{
						date: '04 09',
						amount: 8
					},
					{
						date: '05 09',
						amount: 12
					},
					{
						date: '06 09',
						amount: 14
					},
					{
						date: '07 09',
						amount: 17
					},
					{
						date: '08 09',
						amount: 18
					},
					{
						date: '09 09',
						amount: 24
					},
					{
						date: '10 09',
						amount: 28
					},
					{
						date: '11 09',
						amount: 36
					},
					{
						date: '12 09',
						amount: 40
					}
				]
			}
		},
		components: {
			'app-column': Column
		}
	}

</script>

<style type="text/css">
	
.columnChart {
	height: 16rem;
}
.barsContainer {
	height: 14rem;
}
p {
	font-size: .875rem;
}
</style>