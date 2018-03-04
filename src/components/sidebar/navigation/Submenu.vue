<template>

	<div class="tab-content col-5 submenu text-uppercase px-1" id="v-pills-tabContent">

		<div class="tab-pane fade" id="v-pills-dashboard" role="tabpanel" aria-labelledby="v-pills-dashboard-tab">Dashboard submenu</div>
		<div class="tab-pane fade" id="v-pills-inventory" role="tabpanel" aria-labelledby="v-pills-inventory-tab">Inventory submenu</div>
		<div class="tab-pane fade" id="v-pills-listings" role="tabpanel" aria-labelledby="v-pills-listings-tab">Listings submenu</div>
		<div class="tab-pane fade" id="v-pills-images" role="tabpanel" aria-labelledby="v-pills-images-tab">Images submenu</div>

		<div class="tab-pane fade show active" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
			
			<a href="#" class="nav-link px-2">Company Account</a>
			<a href="#" class="nav-link px-2">Profile Settings</a>
			<a href="#" class="nav-link px-2">Ebay Accounts</a>
			<a href="#" class="nav-link px-2">Team Members</a>
			<a href="#" class="nav-link px-2">Plan &amp; Payment</a>
			<a href="#" class="nav-link px-2">Inventory Settings</a>
		
		</div>
	</div>


</template>

<script type="text/javascript">
	
	export default {
		props: ['submenu']
	}

</script>

<style type="text/css">

	.submenu {
		position: absolute;
		right: 0;
		top: 0;
		height: 100%;
		background-color: #3d4d67;
		padding-top: 7.4rem;
	}
	.submenu .nav-link {
		border-bottom: 1px solid gray;
	}

</style>