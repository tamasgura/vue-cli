<template>

<section class="accountInfo container-fluid">

	<h3 v-if="accountStatusComplete">Account Complete</h3>
	<h3 v-else>Your account is not yet complete</h3>

	<div class="row justify-content-between align-items-start col-xl-11 mx-auto">

		<div class="milestoneComponent text-center col flex-column">
			<div class="accountStatusIndicator rounded-circle mx-auto" 
				:class="{regSuccess: accountMilestones.companyAccData.completed}"></div>
			<p class="text-nowrap">Set up your companies<span class="d-block"> account data</span></p>
		</div>
		<div class="divider col align-self-start"></div>

		<div class="milestoneComponent text-center col flex-column">
			<div class="accountStatusIndicator rounded-circle mx-auto" 
				:class="{regSuccess: accountMilestones.joinEbayAcc.completed}"></div>
			<p class="text-nowrap">Join an eBay account<span class="d-block"> to your profile</span></p>
		</div>
		<div class="divider col align-self-start"></div>

		<div class="milestoneComponent text-center col flex-column" 
			:class="{regSuccess: accountMilestones.inviteColleague.completed}">
			<div class="accountStatusIndicator rounded-circle mx-auto"></div>
			<p class="">Invite your colleagues</p>		
		</div>
		<div class="divider col align-self-start"></div>

		<div class="milestoneComponent text-center col flex-column" 
			:class="{regSuccess: accountMilestones.createItem.completed}">
			<div class="accountStatusIndicator rounded-circle mx-auto"></div>
			<p>Create an inventory item</p>		
		</div>
		<div class="divider col align-self-start"></div>

		<div class="milestoneComponent text-center col flex-column">
			<div class="accountStatusIndicator rounded-circle mx-auto" 
				:class="{regSuccess: accountMilestones.listItem.completed}"></div>
			<p>List an item<span class="d-block"> on eBay</span></p>	
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
		background-color: #199ed9;
		margin-top: 1.75rem;
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
