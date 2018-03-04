<template>

<header class="row">

	<app-searchbar></app-searchbar>
	
	<ul class="col-xl-10 d-flex justify-content-end my-0">

	
<!--eBay account-->
		<li class="col-xl-3 d-flex justify-content-end mx-0 px-0">
			<a href="" class="d-flex justify-content-between align-items-center">
				
				<p class="col-xl-7 my-0">XYZ eBay account</p>

				<img src="../../assets/icons/dropdown.svg" class="col-xl-2">
				<!--<app-accounts></app-accounts>-->

			</a>
		</li>
	
<!--Notification-->
		<li class="notification d-flex">
			<a href="" class="d-flex align-items-center col">
				
				<img src="../../assets/icons/notification.svg">

				<span class="badge rounded-circle">{{ notifications }}</span>
		
			</a>
		</li>

<!--addnew-->
		<li class="addNew d-flex">		
			<a href="" class="d-flex align-items-center col">
				
				<img src="../../assets/icons/add.svg">
					
			</a>		
		</li>

<!--Logout-->
		<li class="d-flex">
			<a href="#" class="d-flex align-items-center col">
				
				<img src="../../assets/icons/logout.svg">

			</a>
		</li>
	</ul>




</header>

</template>

<script type="text/javascript">

	import Searchbar from './search/Searchbar.vue';
	import AccountsDropDown from './accounts/AccountsDropDown.vue';
	import NotificationsDropdown from './notifications/NotificationsDropdown.vue';
	import AddNew from './addNew/AddNew.vue';
	
	export default {

		components: {
			'app-searchbar': Searchbar,
			'app-accounts': AccountsDropDown,
			'app-notifications': NotificationsDropdown,
			'app-addNew': AddNew
		},
		data: function() {
			return {
				notifications: 9
			}
		}

	}

</script>

<style type="text/css" scoped>

	img {
		opacity: .3;
		height: 1.5rem;
	}
	ul {
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
   	}

	li {
		width: 3.125rem;
		height: 3.25rem;
		display: inline-block;
	}
	.notification span {
		background-color: #199ed9;
		color: #fff;
		position: relative;
		top: .8rem;
		left: -.4rem;
		font-size: .6875rem;
	}

</style>