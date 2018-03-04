<template>

	<div class="col-12 col-sm-6 col-md-4 col-lg-2 text-center mb-4">
		<div class="rounded-circle profileImage mx-auto mb-3">
			<img :src="photoUrl" class="img-fluid">
		</div>
		<p class="mb-0">{{ firstName }} <span class="text-uppercase">{{ lastName }}</span></p>
		<a href="">{{ itemsListed }} items listed</a>
	</div>

</template>

<script type="text/javascript">
	export default {

		props: ['user', 'photo'],
		data: function() {
			return {
				firstName: '',
				lastName: '',
				itemsListed: 0,
				photoUrl: ''
			}
		},
		created() {

			let name = this.user.name.split(' ');
			this.lastName = name.pop();
			this.firstName = name.join(' ');
			this.itemsListed = this.user.id;
			
			this.photoUrl = this.photo.url;
		}

	}

</script>

<style type="text/css" scoped>
	
	.profileImage {
		width: 4.5rem;
		height: 4.5rem;
		background-color: #eee;
		overflow: hidden;
	}
	a {
		color: #a8cda7;
	}
	
</style>