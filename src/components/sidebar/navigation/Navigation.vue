<template>

	<ul>
		<li v-for="menuItem in navigationMenu">
			<a :href="menuItem.link">{{ menuItem.name }}</a>
			<ul v-if="menuItem.submenu && menuItem.submenu.show">
				<li v-for="submenuItem in menuItem.submenu.submenuItems">
					<a :href="submenuItem.link"></a>{{ submenuItem.name }}</li>
			</ul>
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

<style type="text/css">
	

	
</style>