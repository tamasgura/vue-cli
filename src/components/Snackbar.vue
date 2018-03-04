<template>
<div class="fixed-bottom" v-if="snackbar.show">
	<div class="snackbar alert text-center container col-xl-6 offset-xl-4 p-2" :class="snackbar.attachClass">
		<div class="text-center col align-self-center">
			
			<p class="text-center">{{ snackbar.text }}</p>
			<a aria-label="Close" role="button">
				<img class="closeBtn" src="../assets/icons/close.svg" @click="snackbar.show=false">
			</a>
		</div>
	</div>
</div>
</template>

<script type="text/javascript">
	export default {

		data: function() {
			return {
				snackbar: {
					registrationCompleted: true,
					show: true,
					text: '',
					attachClass: ''
				}
			}
		},
		created() {
			if (this.snackbar.registrationCompleted) {
				this.snackbar.text = 'Sikeres regisztráció';
				this.snackbar.attachClass = 'regCompleted';
			}
			else {
				this.snackbar.text = 'Sikertelen regisztráció';
				this.snackbar.attachClass = 'regFail';
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
	
	.regCompleted {
		background-color: #a8cda7;		
	}

	.regFail {
		background-color: #f09e88;
	}

	.closeBtn {
		height: 1.25rem;
		cursor: pointer;
		position: absolute;
		top: 0;
		right: 0;
		
	}
	
</style>