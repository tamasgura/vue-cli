<template>

	<div class="salesHistory row no-gutters"> 
		
		<app-sold-items :itemList="itemList"></app-sold-items>
		<app-unsold-items :itemList="itemList"></app-unsold-items>
		
	</div>

</template>

<script type="text/javascript">

	import {eventBus} from '../../../main';
	import SoldItems from './SoldItems.vue';
	import UnsoldItems from './UnsoldItems.vue';

	export default {
		data: function() {
			return {
				itemList: []
			}
		},
		components: {
			'app-sold-items': SoldItems,
			'app-unsold-items': UnsoldItems
		},
		created() {
			// fetch sales history data
			this.$http.get('https://jsonplaceholder.typicode.com/albums')
				.then(response => {
					return response.json();
				})
				.then(data => {
					
					const itemArray = [];

					for (let i in data) {
						itemArray.push(data[i]);
					};

					this.itemList = itemArray;
					eventBus.$emit('itemListLoaded', this.itemList);					
				});
		}
	}

</script>

<style type="text/css">

.salesHistory {
	padding-bottom: 5rem;
}

.salesHistory a {
	color: #199ed9;
	text-align: right;
}
.salesHistory table tr:first-child td {
	border-top:none !important;
}

</style>