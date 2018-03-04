<template>

	<section class="col px-3">
		
		<div class="row no-gutters align-items-end mb-5">
			<h3 class="col-xl-10 text-left">Unsold items in last 24 hrs</h3>
			<a href="#" class="col align-text-bottom">see full list</a>
	
		</div>
		
		<table class="table" v-if="listLoaded">
			<app-sales-item v-for="i in 5" :key="i" :item="unsoldItems[i-1]"></app-sales-item>
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
				unsoldItems: 
				[
					{
						userId: 0,
						id: 0,
						title: ''
					}
				]
			}
		},
		components: {
			'app-sales-item': SalesItem
		},
		created() {

			eventBus.$on('itemListLoaded', (list)=> {
				this.unsoldItems = list;
				this.listLoaded = true;	
			});
		}

	}

</script>

<style type="text/css">
	

	
</style>