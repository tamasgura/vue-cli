<template>
	
	<select>
		<option v-for="account in accounts">
			<app-account :account="account"></app-account>
		</option>
	</select>


</template>

<script type="text/javascript">
	
	import AppAccount from './Account.vue'
	export default {

		data: function() {
			return {
				accounts: [
					{
						name: 'account1',
						status: 'ok'
					},
					{
						name: 'account2',
						status: 'ok'
					},
					{
						name: 'account3',
						status: 'ok'
					},
					{
						name: 'account4',
						status: 'ok'
					},
				]
			}
		},
		components: {
			'app-account': AppAccount
		}
	}

</script>

<style type="text/css">
	

	
</style>
