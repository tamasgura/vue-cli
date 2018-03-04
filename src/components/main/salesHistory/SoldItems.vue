<template>

	<section>
		
		<h3>Sold items in last 24 hrs</h3>
		<a href="#">see full list</a>
		<ul>
			<li v-for="(item, index) in soldItems" :key="index">
				<app-sales-item :item="item"></app-sales-item>
			</li>
		</ul>
	
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