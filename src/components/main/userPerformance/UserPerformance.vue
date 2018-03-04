<template>

	<section class="container-fluid userPerformance">
		
		<h3>User performance</h3>
		<div class="row no-gutters justify-content-around">
			
			<app-user v-if="photos.length !== 0" v-for="(user, index) in userList" :key="index" :user="user" :photo="photos[index]"></app-user>
		
		</div>
		
	</section>

</template>

<script type="text/javascript">
	
	import User from './User.vue';

	export default {
		data: function() {
			return {
				userList: [],
				photos: []
			}
		},
		components: {
			'app-user': User
		},
		created() {
			// fetch users data
			this.$http.get('https://jsonplaceholder.typicode.com/users')
				.then(response => {
					return response.json();
				})
				.then(data => {
					
					const resultArray = [];

					for (let i in data) {
						resultArray.push(data[i]);
						if (i==5) {break;}
					};

					this.userList = resultArray;
				});
			// fetch photos
			this.$http.get('https://jsonplaceholder.typicode.com/photos')
				.then(response => {
					return response.json();
				})
				.then(data => {
					
					const photosArray = [];

					for (let i in data) {
						photosArray.push(data[i]);
						if (i==5) {break;}
					};

					this.photos = photosArray;
				});
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