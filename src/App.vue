<template>

	<div>

		<app-header></app-header>
		<app-sidebar></app-sidebar>
		<app-main></app-main>
		<app-snackbar></app-snackbar>
		<app-footer></app-footer>

	</div>

</template>

<script type="text/javascript">

	import Header from './components/header/Header.vue';
	import Sidebar from './components/sidebar/Sidebar.vue';
	import Main from './components/main/Main.vue';
	import Footer from './components/footer/Footer.vue';
	import Snackbar from './components/Snackbar.vue';

	export default {

		components: {
			'app-header': Header,
			'app-sidebar': Sidebar,
			'app-main': Main,
			'app-footer': Footer,
			'app-snackbar': Snackbar
		}
	};

</script>

<style type="text/css">
	* {
		box-sizing: border-box;
	}
	section, header, main, footer {
		border: 1px solid gray;
	}
</style>