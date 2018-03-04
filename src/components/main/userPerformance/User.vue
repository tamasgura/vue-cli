<template>

	<div>
		<div><p>*initials*</p></div>
		<p>{{ user.firstName }} <span>{{ user.lastName }}</span></p>
		<a href="">{{ user.itemsListed }} items listed</a>
	</div>

</template>

<script type="text/javascript">
	export default {

		props: ['user']

	}

</script>

<style type="text/css">
	

	
</style>