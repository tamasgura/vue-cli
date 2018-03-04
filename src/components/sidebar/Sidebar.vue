<template>
	<section class="sidebar container-fluid pt-4 mx-0 px-0">

<!-- heading -->			
		<div class="row no-gutters justify-content-around heading">
			
			<img class="logo px-2" src="../../assets/icons/logo.png">
			<h1 class="col d-inline-block">Rapid<span class="font-weight-normal">listing</span></h1>
		
		</div>

<!-- account owner -->	
		<app-account-owner></app-account-owner>

<!-- navigation -->		
		<nav class="text-uppercase d-flex flex-column col-12 justify-content-around px-1">

			<app-navigation></app-navigation>

<!-- quick links -->		
			<div class="mt-5 row no-gutters">

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

<!-- submenu -->
		<app-submenu></app-submenu>

		<small class="copyright">All rights reserved for World of Books Lts. 2017</small>
	
	</section>
	
</template>

<script type="text/javascript">
	import AccountOwner from './AccountOwner.vue';
	import Navigation from './navigation/Navigation.vue';
	import Submenu from './navigation/Submenu.vue';
	export default {
		data: function() {
			return {
				
			}
		},
		components: {
			'app-account-owner': AccountOwner,
			'app-navigation': Navigation,
			'app-submenu': Submenu
		}

	}

</script>

<style type="text/css">
	.sidebar {
		background-color: #31425c;
		color: #fff;
		font-size: .675rem;
		height: 100%;
		width: 100%;
	}
	nav a, .submenu * {
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
		left: 1rem;
	}
</style>