<template>

	<section class="container-fluid userPerformance">
		
		<h3>User performance</h3>
		<div class="row no-gutters justify-content-around">
			
			<app-user v-for="(user, index) in userList" :key="index" :user="user"></app-user>


		</div>
		
	</section>

</template>

<script type="text/javascript">
	
	import User from './User.vue';

	export default {
		data: function() {
			return {
				userList: 
				[
					{
						firstName: 'János',
						lastName: 'Szabó',
						itemsListed: 29
					},
					{
						firstName: 'Ferenc',
						lastName: 'Tóth',
						itemsListed: 16
					},
					{
						firstName: 'Ferenc',
						lastName: 'Tóth',
						itemsListed: 16
					},
					{
						firstName: 'Ferenc',
						lastName: 'Tóth',
						itemsListed: 16
					},
					{
						firstName: 'Ferenc',
						lastName: 'Tóth',
						itemsListed: 16
					},
					{
						firstName: 'Ferenc',
						lastName: 'Tóth',
						itemsListed: 16
					},

				]
			}
		},
		components: {
			'app-user': User
		}

	}

</script>

<style type="text/css">
	
	.userPerformance h3 {
		margin: 2.5rem 0 2rem;
	}
	.userPerformance {
		padding-bottom: 20rem;
	}

	
</style>