<template>

	<section>
		
		<h3>User performance</h3>
		<app-user v-for="(user, index) in userList" :key="index" :user="user"></app-user>

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
	

	
</style>