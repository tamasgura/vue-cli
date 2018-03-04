<template>
	<section>
		<h1>Rapidlisting</h1>
		<app-account-owner></app-account-owner>

		<app-navigation></app-navigation>
		
		<div class="quickLinksContainer">
			<h4>Quick links</h4>
			<ul>
				<li><a href="#">Add new item</a></li>
				<li><a href="#">Create new list</a></li>
			</ul>
		</div>
	<small>All rights reserved for World of Books Lts. 2017</small>
	</section>
	
</template>

<script type="text/javascript">
	import AccountOwner from './AccountOwner.vue';
	import Navigation from './navigation/Navigation.vue';
	export default {

		components: {
			'app-account-owner': AccountOwner,
			'app-navigation': Navigation
		}

	}

</script>

<style type="text/css">
	

	
</style>