<template>

<section class="accountInfo container-fluid col-12 px-0">

	<h3 v-if="accountStatusComplete" class="col-12">Account Complete</h3>
	<h3 v-else class="col-12">Your account is not yet complete</h3>

	<div class="row no-gutters align-items-start justify-content-around">

		<div class="milestoneComponent text-center col-12 col-md-2 mb-3 px-0">
			<div class="indicatorContainer border-dark px-2 d-inline-block">
				<div class="accountStatusIndicator rounded-circle col" 
				:class="{regSuccess: accountMilestones.companyAccData.completed}"></div>
			</div>
			<p class="mx-auto col">Set up your companies
			 account data</p>
		</div>
		<div class="divider col align-self-start d-none"></div>

		<div class="milestoneComponent text-center  col-12 col-md-2 mb-3">
			<div class="indicatorContainer border-dark px-2 d-inline-block">
				<div class="accountStatusIndicator rounded-circle mx-auto" 
				:class="{regSuccess: accountMilestones.joinEbayAcc.completed}"></div>
			</div>
			<p class="">Join an eBay account 
			to your profile</p>
		</div>
		<div class="divider col align-self-start d-none d-md-flex"></div>

		<div class="milestoneComponent text-center  col-12 col-md-2 mb-3" 
			:class="{regSuccess: accountMilestones.inviteColleague.completed}">
			<div class="indicatorContainer border-dark px-2 d-inline-block">
				<div class="accountStatusIndicator rounded-circle mx-auto"></div>
			</div>
			<p class="">Invite your 
			colleagues</p>		
		</div>
		<div class="divider col align-self-start d-none"></div>

		<div class="milestoneComponent text-center  col-12 col-md-2 mb-3" 
			:class="{regSuccess: accountMilestones.createItem.completed}">
			<div class="indicatorContainer border-dark px-2 d-inline-block">
				<div class="accountStatusIndicator rounded-circle mx-auto"></div>
			</div>
			<p class="">Create an 
			inventory item</p>		
		</div>
		<div class="divider col align-self-start  d-none"></div>

		<div class="milestoneComponent text-center  col-12 col-md-2 mb-3">
			<div class="indicatorContainer border-dark px-2 d-inline-block">
				<div class="accountStatusIndicator rounded-circle mx-auto" 
				:class="{regSuccess: accountMilestones.listItem.completed}"></div>
			</div>
			<p>List an item 
			on eBay</p>	
		</div>


	</div>

</section>

</template>

<script type="text/javascript">
	import AccountMilestone from './AccountMilestone.vue';
	export default {

		data: function() {
			return {
				accountStatusComplete: false,
				accountMilestones: {

					companyAccData: {
						name: 'Set up your companies account data',
						completed: true
					},
					joinEbayAcc: {
						name: 'Join an eBay account to your profile',
						completed: true
					},
					inviteColleague: {
						name: 'Invite your colleagues',
						completed: false
					},
					createItem: {
						name: 'Create an inventory item',
						completed: false
					},
					listItem: {
						name: 'List an item on eBay',
						completed: false
					}
				}

			}
		},
		components: {
			'app-account-milestone': AccountMilestone
		}
	}

</script>

<style type="text/css">
	.test {
	}
	.accountInfo {
		background-color: #ebebeb;
	}
	.accountInfo h3 {
		margin-bottom: 2.5rem;
	}
	.divider {
		height: 1px;
		width: 75%;
		background-color: #199ed9;
		margin-top: 1.75rem;
		position: absolute;
		top: 7.2rem;
		z-index: 1
	}
	.milestoneComponent {
		z-index: 2;
	}
	.milestoneComponent p {
		white-space: pre-line;
	}
	.indicatorContainer {
		background-color: #ebebeb;
		z-index:3;
	}
	.accountStatusIndicator {
		width: 3.5rem;
		height: 3.5rem;
		border: 3px solid #fff;
		background-color: #199ed9;
	}
	.regSuccess {
		background-color: #a8cda7;
		background-image: url('../../../assets/icons/ticker.svg');
		background-position: center;
		background-size: 1.5rem;
		background-repeat: no-repeat;
	}
</style>
