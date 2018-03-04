<template>

	<section>
		<p class="">Your account is not yet complete</p>
		<app-account-milestone v-for="(milestone, index) in accountMilestones" :key="index" :milestone="milestone"></app-account-milestone>
	</section>

</template>

<script type="text/javascript">
	import AccountMilestone from './AccountMilestone.vue';
	export default {

		data: function() {
			return {
				accountStatusComplete: false,
				accountMilestones: 
				[
					{
						name: 'Set up your companies account data',
						completed: true
					},
					{
						name: 'Join an eBay account to your profile',
						completed: true
					},
					{
						name: 'Invite your colleagues',
						completed: false
					},
					{
						name: 'Create an inventory item',
						completed: false
					},
					{
						name: 'List an item on eBay',
						completed: false
					}
				]

			}
		},
		components: {
			'app-account-milestone': AccountMilestone
		}

	}

</script>

<style type="text/css">
	

	
</style>