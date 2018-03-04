<template>

	<header>

		<app-searchbar></app-searchbar>
		<app-accounts></app-accounts>
		<ul>
			<li>app notification</li>
			<li>app addnew</li>
			<li><a href="#">Logout</a></li>
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
		}

	}

</script>

<style type="text/css">
	


</style>