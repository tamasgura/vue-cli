<template>

	<section class="col px-3">
		
		<div class="row no-gutters align-items-end mb-5">
			<h3 class="col-xl-10 text-left">Sold items in last 24 hrs</h3>
			<a href="#" class="col align-text-bottom">see full list</a>
	
		</div>

		<table class="table">
			<app-sales-item v-for="(item, index) in soldItems" :key="index" :item="item"></app-sales-item>
		</table>

	</section>

</template>

<script type="text/javascript">
	
	import SalesItem from './SalesItem.vue';

	export default {

		data: function() {
			return {
				soldItems: 
				[
					{
						name: 'iPhone 6S 32GB Space gray',
						attr: 'JH18276',
						price: 180
					},					{
						name: 'iPhone 6S 32GB Space gray',
						attr: 'JH18276',
						price: 180
					},					{
						name: 'iPhone 6S 32GB Space gray',
						attr: 'JH18276',
						price: 180
					},					{
						name: 'iPhone 6S 32GB Space gray',
						attr: 'JH18276',
						price: 180
					},					{
						name: 'iPhone 6S 32GB Space gray',
						attr: 'JH18276',
						price: 180
					},

				]
			}
		},
		components: {
			'app-sales-item': SalesItem
		}

	}

</script>

<style type="text/css">



</style>