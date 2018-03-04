<template>

	<header class="row no-gutters">

		<ul class="col-xl-12 row no-gutters my-0 justify-content-end">

<!-- searchbar -->
			<app-searchbar v-if='!quickLinks.visible'></app-searchbar>

<!--eBay account-->
			<app-accounts-dropdown v-if="!quickLinks.visible"></app-accounts-dropdown>

<!-- add new quick links -->	
			<li class="col d-flex align-items-center justify-content-end mx-0 px-0" v-if="quickLinks.visible">
				<a href="" class="blueText col offset-9 px-0">Add new inventory item</a>
				<a href="" class="blueText col px-0">Create new listing</a>
			</li>

<!--Notification-->		
			<app-notifications-dropdown v-if="!quickLinks.visible"></app-notifications-dropdown>

<!--addnew-->
			<li class="col addNew d-flex">		
				<a href="" class="d-flex align-items-center col px-0 mx-auto" @click.prevent="quickLinks.visible=!quickLinks.visible">
					
					<img src="../../assets/icons/add.svg" class="mx-auto">
						
				</a>		
			</li>

<!--Logout-->
			<li class="col d-flex logout">
				<a href="#" class="d-flex align-items-center col px-0">
					
					<img src="../../assets/icons/logout.svg" class="mx-auto">

				</a>
			</li>
		</ul>

	</header>

</template>

<script type="text/javascript">

	import Searchbar from './search/Searchbar.vue';
	import AccountsDropdown from './accounts/AccountsDropdown.vue';
	import NotificationsDropdown from './notifications/NotificationsDropdown.vue';
	
	export default {

		components: {
			'app-searchbar': Searchbar,
			'app-accounts-dropdown': AccountsDropdown,
			'app-notifications-dropdown': NotificationsDropdown
		},
		data: function() {
			return {
				quickLinks: {
					visible: false
				}
			}
		}
	}

</script>

<style type="text/css" scoped>

	img {
		opacity: .3;
		height: 1.5rem;
	}
	header * {
		font-size: .6875rem;
	}
	ul > li:not(:last-child) {
		border-right: 1px solid #a1a1a1;
	}
	.addNew {
		background-color: #a8cda7;
	}
	.addNew img {
		color: #fff;
	}

	a {
		display: block;
		font-size: .6785rem;
   	}

	li {
		height: 3.25rem;
		display: inline-block;
	}
	.searchbar input {
		border: none;
	}
	::placeholder {
   		color: #a1a1a1;
   		font-size: .6785rem;
   	}
   	.notification, .addNew, .logout {
   		max-width: 3.25rem;
   	}
</style>