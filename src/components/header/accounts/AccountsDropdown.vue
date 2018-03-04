<template>
	
	<li class="col-xl-2 d-flex justify-content-end mx-0 px-0">
			<a href="" class="d-flex justify-content-between align-items-center dropdown-toggle col text-uppercase" role="button" id="dropdownAccountsLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			 	{{ accounts.list[accounts.selected].name }} eBay Account
			 </a>
			
			 <div class="accountsDD container-fluid col-xl-12 bg-white px-0 dropdown-menu py-0 my-0" aria-labelledby="dropdownAccountsLink">

				<div class="row no-gutters border border-light align-items-center py-3 px-2" v-for="(acc, index) in accounts.list" :key="index" @click="accountSelected(index)">

					<span class="col">{{ acc.name }} eBay Account</span>
					<span class="rounded-circle accStatusIndicator" :class="acc.color"></span>
		
				</div>

			</div>
	</li>

</template>

<script type="text/javascript" scoped>
	
	export default {

		data: function() {
			return {
				color: 'gray',
				accounts: {
					show: true,
					selected: 1,
					list: 
					[
						{
							name: 'XYZ',
							status: 'completed',
							color: 'green'
						},
						{
							name: 'Luke Skywalker',
							status: 'completed',
							color: 'green'
						},
						{
							name: 'Hahn Solo 1978t',
							status: 'suspended',
							color: 'red'
						},
						{
							name: 'Anakin Skywalker',
							status: 'incomplete',
							color: 'gray'
						}
					]
				}
			}
		},
		methods: {
			accountSelected(index) {
				this.accounts.selected = index;

			}
		}
	}

</script>

<style type="text/css">
	
.accountsDD {
	font-size: .6785rem;
}
.accStatusIndicator {
	height: .6785rem; width: .6785rem;
}
	
</style>
