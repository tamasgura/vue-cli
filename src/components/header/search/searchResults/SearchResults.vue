<template>

	<div class="searchResults bg-white border border-light col-12">
		
		<div class="row py-4 pl-4">
			<div class="flex-column col-8">

				<div class="inventoryResults mb-4">
					
					<div class="row no-gutters justify-content-between">
						<h4 class="blueText mb-1">Inventory Items</h4>
						<a href="#" class="blueText">show all results</a>
					</div>

					
					<ul class="list-group list-group-flush">
						<li v-for="n in 4" class="list-group-item py-1 px-0">
							<p class="my-0">Lorem ipsum dolor sit am</p>
						</li>
					</ul>	

				
				</div>

				<div class="listingsResults">

					<div class="row no-gutters justify-content-between">
						<h4 class="blueText mb-1">Listings</h4>
						<a href="#" class="blueText">show all results</a>
					</div>

					<ul class="list-group list-group-flush">
						<li v-for="n in 4" class="list-group-item py-1 d-flex align-items-center justify-content-between px-0">
							<p class="my-0 px-0 col-11">iPhoneX</p>
							<span class="rounded-circle red statusIndicator border"></span>
						</li>
					</ul>		

				</div>
			</div>

			<div class="flex-column col-4 py-0 my-0">
				<div class="recentSearches">
					<h4 class="blueText">Recent searches</h4>

					<ul class="list-group list-group-flush">
						<li v-for="n in 3" class="list-group-item py-1 px-0"><p class="my-0">star wars episode {{n}}</p></li>
					</ul>	

				</div>
				
			</div>
		</div>

	</div>

</template>

<script type="text/javascript">
	

	export default {
		data: function() {}
}
</script>
<style type="text/css" scoped>

.searchResults {
	position: absolute; top: 3.2rem;
	z-index: 4;
}
.searchResults * {
	font-size: .875rem;
}
.searchResults a {
	font-size: .6785rem;
}
.statusIndicator {
	width: 1rem;
	height: 1rem;
	display: inline-block;
}
</style>