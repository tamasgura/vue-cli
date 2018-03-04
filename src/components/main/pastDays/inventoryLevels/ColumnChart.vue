<template>
	
	<div class="col-12 col-md-6 col-xl-4">

		<h3>Inventory levels</h3>
		<div class="columnChart mx-auto px-0 container-fluid row no-gutters" v-if="inventoryLevels.length" role="table" aria-label="Inventory levels">
	
			<div class="amountAxis col-1 mx-0 px-0 mt-2">
				<p class="d-block text-right pt-1 m-0" v-for="n in 8">{{ 40 - (n * 5) }}</p>
			</div>

			<app-column v-for="(day, index) in inventoryLevels" :day="day" :key="index"></app-column>

		</div>
	</div>

</template>

<script type="text/javascript">

	import Column from './Column.vue';
	import {dateMixin} from '../../../dateMixin.js';

	export default {
		data: function() {
			return {
				inventoryLevels: 
				[
				]
			}
		},
		components: {
			'app-column': Column
		},
		mixins: [dateMixin],
		created() {
// load inventory levels and dates
			for (var n = 0; n < 11; n++) {
				this.inventoryLevels.push(
				{
					date: this.getDateFrom(10-n).slice(0,5).replace('.', ' '),
					amount:  Math.floor(Math.random() * (40 - 10 + 1)) + 10
				});
			}
		}
	}

</script>

<style type="text/css">
	
.columnChart {
	height: 16rem;
	max-width: 25rem;
}
.barsContainer {
	height: 14rem;
}
p {
	font-size: .875rem;
}
</style>