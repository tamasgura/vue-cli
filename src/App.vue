<template>

		<div class="row no-gutters">
			<div class="col-xl-2">
				<app-sidebar></app-sidebar>
			</div>
			
			<div class="col-xl-10">
				<app-header></app-header>
				<app-main></app-main>
				<app-snackbar></app-snackbar>
				<app-footer></app-footer>
			</div>
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
		color: #a1a1a1;
	}
	main > section, header, main, footer {
		/*outline: 1px solid gray;*/
	}
	body {
		font-family: 'Open Sans';
		font-size: .87rem;
	}
	a {text-decoration: none;
		color: #a1a1a1;
	}
	h3 {
		padding-top: 2.5rem;
		text-align: center;
	}
	ul li {
		list-style-type: none;
	}
	/*
	g: #a8cda7
	b: #199ed9
	.6875
	.875
	1
	1.5
	*/
</style>