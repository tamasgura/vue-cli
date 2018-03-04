<template>

	<li class="col-1 notification d-flex">
	
		<a href="" class="d-flex align-items-center px-0 mx-auto w-100" role="button" id="dropdownNotificationsLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">			
			<img src="../../../assets/icons/notification.svg" class="mx-auto">
			<span class="indicator badge rounded-circle" v-if="notifications.list.length">{{ notifications.list.length }}</span>
		</a>
		
		<div class="dropdown-menu dropdown-menu-right py-0 my-0" aria-labelledby="dropdownNotificationsLink">

		    <div class="notificationDD row no-gutters border border-light align-items-center justify-content-between p-3 dropdown-item" v-for="n in notifications.list">

				<a href="#" class="d-flex align-items-center col">{{ n.text }}<span class="notificationTime d-flex justify-content-end col">{{ n.time }}</span></a>
				
				
			</div>

		</div>
			
			
	</li>

</template>

<script type="text/javascript">
	export default {
		data: function() {
			return {
				notifications: {
					show: false,
					list:
					[
						{
							text: 'eBay order job finished successfully',
							time: '07:25'
						},
						{
							text: 'eBay order job finished successfully',
							time: '07:25'
						},
						{
							text: 'eBay order job finished successfully',
							time: '07:25'
						},
						{
							text: 'eBay order job finished successfully',
							time: '07:25'
						},
						{
							text: 'eBay order job finished successfully',
							time: '07:25'
						},
						{
							text: 'eBay order job finished successfully',
							time: '07:25'
						},
						{
							text: 'eBay order job finished successfully',
							time: '07:25'
						}
					]
				},
			}
		}
	}
</script>
<style type="text/css" scoped>

.notificationDD * {
	font-size: .75rem;
	color: #a1a1a1; 
	font-size: .6785rem;
}

.notificationTime {
	color: #a8cda7;
}
img {
	height: 1.5rem;
	opacity: .3;
}
.indicator {
	background-color: #199ed9;
	color: #fff;
	position: absolute;
	top: 60%;
	left: 60%;
	font-size: .6785rem;
}
.dropdown-menu {
	width: 20rem;
}
</style>