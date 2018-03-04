<template>

		<div class="d-flex">
			<div class="col col-lg-2 px-0 mx-0">
				<app-sidebar></app-sidebar>
			</div>
			
			<div class="col-11 col-lg-10 px-0 mx-0">
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
	header, main > section {
		border-bottom: 1px solid #cccccc;
	}
	body {
		font-family: 'Open Sans';
		font-size: .875rem;
		height: 100%;
	}
	a {
		text-decoration: none;
		color: #a1a1a1;
	}
	h3 {
		padding-top: 2.5rem;
		text-align: center;
	}
	ul li {
		list-style-type: none;
	}
	.blue {
		background-color: #199ed9;
	}
	.gray {
		background-color: #e9e9e9;
	}
	.green {
		background-color: #a8cda7;
	}
	.red {
		background-color: #f09e88;
	}
	.blueText {
		color: #199ed9;
	}
	.icon {
		height: 1rem;
		opacity: .3rem !important;
	}	
	nav a:hover {
		color: #ebebeb;
		text-decoration: none;
		text-shadow: -2px 2px 5px rgba(160,160,160,.3);
		transition: all ease-in-out .35s;
	}
</style>