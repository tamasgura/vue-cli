<template>

	<div> 
		
		<app-sold-items></app-sold-items>
		<app-unsold-items></app-unsold-items>
		
	</div>

</template>

<script type="text/javascript">

	import SoldItems from './SoldItems.vue';
	import UnsoldItems from './UnsoldItems.vue';
	export default {
		components: {
			'app-sold-items': SoldItems,
			'app-unsold-items': UnsoldItems
		}

	}

</script>

<style type="text/css">
	

	
</style>