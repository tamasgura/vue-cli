<template>

	<ul class="nav flex-column">
		<!--<li v-for="menuItem in navigationMenu">
			<a :href="menuItem.link">{{ menuItem.name }}</a>
			<ul v-if="menuItem.submenu && menuItem.submenu.show">
				<li v-for="submenuItem in menuItem.submenu.submenuItems">
					<a :href="submenuItem.link"></a>{{ submenuItem.name }}</li>
			</ul>
		</li>-->

		<li class="nav-item">
			
			<a href="#" class="nav-link row">
				<span class="col"><img src="../../../assets/icons/dashboard.svg"></span>
				<span class="d-inline-block col-xl-6 pl-0 border-bottom border-light">Dashboard</span>
			</a>

		</li>

		<li class="nav-item">
			
			<a href="#" class="nav-link row">
				<span class="col"><img src="../../../assets/icons/inventory.svg"></span>
				<span class="d-inline-block col-xl-6 pl-0 border-bottom border-light">Inventory</span>
			</a>

		</li>

		<li class="nav-item">
			
			<a href="#" class="nav-link row">
				<span class="col"><img src="../../../assets/icons/listings.svg"></span>
				<span class="d-inline-block col-xl-6 pl-0 border-bottom border-light">Listings</span>
			</a>

		</li>

		<li class="nav-item">
			
			<a href="#" class="nav-link row">
				<span class="col"><img src="../../../assets/icons/images.svg"></span>
				<span class="d-inline-block col-xl-6 pl-0 border-bottom border-light">Images</span>
			</a>

		</li>

		<li class="nav-item">
			
			<a href="#" class="nav-link row">
				<span class="col"><img src="../../../assets/icons/settings.svg"></span>
				<span class="d-inline-block col-xl-6 pl-0 border-bottom border-light">Settings</span>
			</a>

		</li>
	</ul>
</template>

<script type="text/javascript">
	export default {

		data: function() {
			return {
				navigationMenu: 
				[
					{
						name: 'Dashboard',
						link: '#'
					},
					{
						name: 'Inventory',
						link: '#'
					},
					{
						name: 'Listings',
						link: '#'
					},
					{
						name: 'Images',
						link: '#'
					},
					{
						name: 'Settings',
						link: '#',
						submenu: {
							show: false,
							submenuItems: [
								
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
								}
							]

						}
					},




				]
			}
		}

	}

</script>

<style type="text/css" scoped>
	
	img {
		height: .675rem;
	}
	li a span {
		color: #fff;
	}
	li {
		height: 2rem;
	}
	
</style>