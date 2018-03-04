<template>

	<div class="col-xl-2 text-center">
		<div class="rounded-circle border border-info profileImage mx-auto mb-3">
			<img src="ati.jpg" class="img-fluid">
		</div>
		<p class="mb-0">{{ user.firstName }} <span class="text-uppercase">{{ user.lastName }}</span></p>
		<a href="">{{ user.itemsListed }} items listed</a>
	</div>

</template>

<script type="text/javascript">
	export default {

		props: ['user']

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