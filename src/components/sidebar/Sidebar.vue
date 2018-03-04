<template>
	<section class="sidebar container-fluid mx-0 px-0 col-12">

<!-- heading -->			
		<div class="heading row no-gutters justify-content-around pt-4 d-none d-lg-flex">
			
			<img class="logo px-2" src="../../assets/icons/logo.png">
			<h1 class="col d-inline-block">Rapid<span class="font-weight-normal">listing</span></h1>
		
		</div>

<!-- account owner -->	
		<app-account-owner></app-account-owner>

<!-- navigation -->		
		<nav class="text-uppercase d-flex flex-column col-12 justify-content-around px-0" role="navigation">

			<app-navigation></app-navigation>

<!-- quick links -->		
			<div class="mt-5 row no-gutters d-none d-lg-flex">

				<ul class="pl-5">
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

		<small class="copyright d-none d-lg-flex">All rights reserved for World of Books Lts. 2017</small>
	
	</section>
	
</template>

<script type="text/javascript">

	import AccountOwner from './AccountOwner.vue';
	import Navigation from './navigation/Navigation.vue';

	export default {
		data: function() {
			return {
				
			}
		},
		components: {
			'app-account-owner': AccountOwner,
			'app-navigation': Navigation
		}

	}

</script>

<style type="text/css">
	h1, h1 span {
		color: #fff;
	}
	.sidebar {
		background-color: #31425c;
		color: #fff;
		font-size: .675rem;
		height: 100%;
	}
	nav a, .submenu * {
		color: #fff;
		font: bold .875rem 'Open Sans Condensed';
	}
	.logo {
		height: 2rem;
	}
	.copyright {
		position: absolute;
		bottom: 1rem;
		left: 1rem;
	}
</style>