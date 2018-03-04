<template>
	<section class="sidebar container-fluid pt-4 h-100">
		
		<div class="row no-gutters justify-content-around heading">
			
			<span class="d-flex text-center"><img class="logo" src="../../assets/icons/logo.png"></span>
			<h1 class="col-xl-10 d-inline-block">Rapid<span class="font-weight-normal">listing</span></h1>
		
		</div>

		<app-account-owner></app-account-owner>
		
		<nav class="text-uppercase ">
			<app-navigation></app-navigation>
			
			<div class="mt-5">

				<ul>
					<p class="text-secondary">Quick links</p>
					<li class="nav-item">
						<a href="#">Add new item</a>
					</li>
					<li class="nav-item">
						<a href="#">Create new list</a>
					</li>
				</ul>

			</div>	
		</nav>
		
		<small class="copyright">All rights reserved for World of Books Lts. 2017</small>
	
	
	</section>
	
</template>

<script type="text/javascript">
	import AccountOwner from './AccountOwner.vue';
	import Navigation from './navigation/Navigation.vue';
	export default {

		components: {
			'app-account-owner': AccountOwner,
			'app-navigation': Navigation
		}

	}

</script>

<style type="text/css">
	
	.sidebar {
		background-color: #31425c;
		color: #fff;
		font-size: .675rem;
	}
	nav a {
		color: #fff;
		font-weight: bold;
		font: bold .875rem 'Open Sans Condensed';
	}
	.logo {
		height: 2rem;
	}
	.copyright {
		position: absolute;
		bottom: 1rem;
	}
</style>