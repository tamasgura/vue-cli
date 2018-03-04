<template>

	<section class="col-12 col-md-6 px-3">
		
		<div class="row no-gutters align-items-end mb-5">
			<h3 class="col-10 text-left">Sold items in last 24 hrs</h3>
			<a href="#" class="col-12 col-lg-2 align-text-bottom text-right pr-2">see full list</a>
	
		</div>

		<table class="table" v-if="listLoaded">
			<app-sales-item v-for="i in 5" :key="i" :item='soldItems[soldItems.length-(i)]'></app-sales-item>
		</table>

	</section>

</template>

<script type="text/javascript">
	import {eventBus} from '../../../main';
	import SalesItem from './SalesItem.vue';

	export default {

		data: function() {
			return {
				listLoaded: false,
				soldItems: 
				[
					{
						userId: 0,
						id: 0,
						title: ''
					}
				]
			}
		},
		props: ['itemList'],
		components: {
			'app-sales-item': SalesItem
		},
		created() {

			eventBus.$on('itemListLoaded', (list)=> {
				this.soldItems = list;
				this.listLoaded = true;	
			});
		}
	}

</script>

<style type="text/css" scoped>

</style>