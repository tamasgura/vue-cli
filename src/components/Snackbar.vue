<template>
<div class="fixed-bottom" v-if="snackbar.show">
	<div class="snackbar regSuccess alert text-center container col-xl-6 offset-xl-4 p-2">
		<div class="text-center col align-self-center">
			
			<p class="text-center">Sikeres regisztráció</p>
			<span class="closeBtn border border-light rounded-circle d-inline-block" aria-label="Close">&times;</span>

		</div>
	</div>
</div>
</template>

<script type="text/javascript">
	export default {

		data: function() {
			return {
				snackbar: {
					registrationCompleted: false,
					show: true 
				}
			}
		}
	}

</script>

<style type="text/css">
	.snackbar * {
		color: #fff;
	}

	.snackbar {	
		height: 4rem;
	}
	
	.regSuccess {
		background-color: #a8cda7;		
	}

	.regFail {
		background-color: #f09e88;
	}

	.closeBtn {
		width: 1.25rem;
		height: 1.25rem;
		font-size: .6785rem;
		line-height: 1.25rem;
		position: absolute;
		top: 0;
		right: 0;
	}
	
</style>