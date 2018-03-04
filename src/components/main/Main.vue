<template>

	<main>
		<app-account-info></app-account-info>
 		<app-past-days></app-past-days>
		<app-sales-history></app-sales-history>
		<app-user-performance></app-user-performance>
	</main>

</template>

<script type="text/javascript">
	import AccountInfo from './accountInfo/AccountInfo.vue';
	import PastDays from './pastDays/PastDays.vue';
	import SalesHistory from './salesHistory/SalesHistory.vue';
	import UserPerformance from './userPerformance/UserPerformance.vue';
	
	export default {

		components: {
			'app-account-info': AccountInfo,
			'app-past-days': PastDays,
			'app-sales-history': SalesHistory,
			'app-user-performance': UserPerformance
		}
	}

</script>

<style type="text/css">

h1, h2, h3, h4, h5, h6 {
	text-transform: uppercase;
	font: bold 1.5rem 'Open Sans Condensed';
}
a:hover  {

	color: #000;
	text-decoration: none;
	text-shadow: -3px 3px 7px rgba(0,0,0,.15);
	transition: all ease-in-out .35s;
}

</style>