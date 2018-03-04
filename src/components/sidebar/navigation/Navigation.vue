<template>

	<div class="row no-gutters pt-0">
	
		<div class="nav flex-column col pt-0">
<!-- dropright shown on small screens -->			
			<div class="dropright d-lg-none">

				<a href="#" class="nav-link d-flex align-items-center justify-content-center mx-0 pr-2 mb-3 border-bottom border-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<img src="../../../assets/icons/list-menu.svg" class="">
				</a>
				<div class="dropdown-menu">Dropdown menu</div>

			</div>
<!-- main navigation -->
			<div class="btn-group dropright" v-for="menuitem in nav" :menuitem="menuitem">

				<a class="menuItem nav-link d-flex align-items-center justify-content-around p-0 w-100" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
					<img :src="menuitem.iconSource" class="px-1 my-1">
					<span class="border-bottom border-secondary w-50 py-2 d-none d-lg-inline-block">{{ menuitem.name }}</span>
				</a>

				<div class="dropdown-menu col p-0 submenu m-0" v-if="menuitem.submenu">
					
					<a href="#" class="nav-link px-2" v-for="submenuItem in menuitem.submenu">{{ submenuItem.name }}</a>
				
				</div>
			</div>
		</div>
	</div>


</template>

<script type="text/javascript">
	export default {
		data: function() {
			return {
				nav: 
				[	
					{
						name: 'Dashboard',
						link: '#',
						iconSource: './src/assets/icons/dashboard.svg',
						submenu: []
					},
					{
						name: 'Inventory',
						link: '#',
						iconSource: './src/assets/icons/inventory.svg',
						submenu: []
					},
					{
						name: 'Listings',
						link: '#',
						iconSource: './src/assets/icons/listings.svg',
						submenu: []
					},
					{
						name: 'Images',
						link: '#',
						iconSource: './src/assets/icons/images.svg',
						submenu: []
					},
					{
						name: 'Settings',
						link: '#',
						iconSource: './src/assets/icons/settings.svg',
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
			}
		}
	}

</script>

<style type="text/css" scoped>
	
	img {
		height: 1rem;
		opacity: .6;
	}
	a span {
		color: #fff;
	}
	.active {		
		border-radius: 0 !important;
	}
	.nav-link span:hover {
		color: #ebebeb !important;
		text-decoration: none;
		text-shadow: -2px 2px 5px rgba(160,160,160,.3);
		transition: all ease-in-out .35s;
	}
	.submenu {
		min-width: 9rem;
		max-width: 50%;
		z-index: 4;
		left: -10% !important;
		top:-250% !important;
	}
	.submenu .nav-link {
		border-bottom: 1px solid #ebebeb;
		background-color: #3d4d67 !important;
	}
	.show {
		background-color: #3d4d67 !important;
	}
	@media(min-width: 992px) {
		
		.menuItem {
			justify-content: start !important;
		}
		.menuItem img {
			padding: 0 1rem !important;
		}
		.submenu {
			left: -20% !important;
		}
	}
	@media(min-width: 1400px) {
		.submenu {
			left: -50% !important;
			width: 50% !important;		
		}
	}
</style>