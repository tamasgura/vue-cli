<template>

	<div class="salesHistory row no-gutters"> 
		
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