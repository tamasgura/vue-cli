<template>

	<div class="row no-gutters">
	
		<div class="nav flex-column nav-pills col-7" id="v-pills-tab" role="tablist" aria-orientation="vertical">

		  
			<a class="nav-link d-flex align-items-center p-0" id="v-pills-dashboard-tab" data-toggle="pill" href="#v-pills-dashboard" role="tab" aria-controls="v-pills-dashboard" aria-selected="false">
				<img src="../../../assets/icons/dashboard.svg" class="px-3">
				<span class=" border-bottom border-secondary d-inline-block w-75 py-2">Dashboard</span>
			</a>
			<a class="nav-link d-flex align-items-center p-0" id="v-pills-inventory-tab" data-toggle="pill" href="#v-pills-inventory" role="tab" aria-controls="v-pills-inventory" aria-selected="false">
				<img src="../../../assets/icons/inventory.svg" class="px-3">
				<span class=" border-bottom border-secondary d-inline-block w-75 py-2">Inventory</span>
			</a>
			<a class="nav-link d-flex align-items-center p-0" id="v-pills-listings-tab" data-toggle="pill" href="#v-pills-listings" role="tab" aria-controls="v-pills-listings" aria-selected="false">
				<img src="../../../assets/icons/listings.svg" class="px-3">
				<span class=" border-bottom border-secondary d-inline-block w-75 py-2">Listings</span>
			</a>
			<a class="nav-link d-flex align-items-center p-0" id="v-pills-images-tab" data-toggle="pill" href="#v-pills-images" role="tab" aria-controls="v-pills-images" aria-selected="false">
				<img src="../../../assets/icons/images.svg" class="px-3">
				<span class=" border-bottom border-secondary d-inline-block w-75 py-2">Images</span>
			</a>
			<a class="nav-link d-flex align-items-center p-0 active" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="true">
				<img src="../../../assets/icons/settings.svg" class="px-3">
				<span class=" border-bottom border-secondary d-inline-block w-75 py-2">Settings</span>
			</a>

		</div>

	</div>
<!--
nav: 
[	
	{
		name: 'Dashboard',
		link: '#',
		iconSrc: './src/assets/icons/dashboard.svg',
		submenu: []
	},
	{
		name: 'Inventory',
		link: '#',
		iconSrc: './src/assets/icons/inventory.svg',
		submenu: []
	},
	{
		name: 'Listings',
		link: '#',
		iconSrc: './src/assets/icons/listings.svg',
		submenu: []
	},
	{
		name: 'Images',
		link: '#',
		iconSrc: './src/assets/icons/images.svg',
		submenu: []
	},
	{
		name: 'Settings',
		link: '#',
		iconSrc: './src/assets/icons/settings.svg',
		showSubMenu: true,
		submenu: 
		[
			{
				name: 'Company Account',
				link: '#'
			},
			{
				name: 'Profile Settings',
				link: '#'
			},
			{
				name: 'Ebay Accounts',
				link: '#'
			},
			{
				name: 'Team Members',
				link: '#'
			},
			{
				name: 'Plan & Payment',
				link: '#'
			},
			{
				name: 'Inventory Settings',
				link: '#'
			},
		]
	}
]
-->

</div>


</template>

<script type="text/javascript">
	export default {}

</script>

<style type="text/css" scoped>
	
	img {
		height: .675rem;
	}
	a span {
		color: #fff;
	}
	li {
		height: 2rem;
		box-sizing: content-box;
	}
	.active {
		background-color: #3d4d67 !important;
		border-radius: 0 !important;
	}


</style>