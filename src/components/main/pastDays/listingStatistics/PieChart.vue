<template>

		<canvas id="pieChart" width="160" height="160"></canvas>

</template>

<script type="text/javascript">
	
	export default {
		mounted() {
			var canv=document.getElementById("pieChart");
			var ctx=canv.getContext("2d");

// calculate endpoints
			var activeEndpoint = (2.5*Math.PI) * (this.data[0].percentage / 100);
			var activeEndpointX = 80 + Math.cos(activeEndpoint) * 72;
			var activeEndpointY = 80 + Math.sin(activeEndpoint) * 72;

			var soldEndpoint = (2.5*Math.PI - activeEndpoint) * (this.data[1].percentage / 100);
			var soldEndpointX = 80 + Math.cos(soldEndpoint) * 72;
			var soldEndpointY = 80 + Math.sin(soldEndpoint) * 72;

// draw unsold
			ctx.beginPath();
			ctx.arc(80,80,72,1.5,2.5*Math.PI);
			ctx.lineWidth=16;
			ctx.strokeStyle="#e9e9e9";
			ctx.stroke();
			ctx.closePath();

// draw sold items
			// starting dot
			ctx.beginPath();
			ctx.arc(activeEndpointX,activeEndpointY,8,1.5,2.5*Math.PI);
			ctx.fillStyle="#199ed9";
			ctx.fill();
			ctx.closePath();
			// line
			ctx.beginPath();
			ctx.arc(80,80,72,activeEndpoint,soldEndpoint);
			ctx.strokeStyle="#199ed9";
			ctx.stroke();
			ctx.closePath();
			// end dot
			ctx.beginPath();
			ctx.arc(soldEndpointX,soldEndpointY,8,1.5,2.5*Math.PI);
			ctx.fillStyle="#199ed9"
			ctx.fill();
			ctx.closePath();

// draw active items
			// starting dot
			ctx.beginPath();
			ctx.arc(80,152,8,1.5,2.5*Math.PI);
			ctx.fillStyle="#a8cda7";
			ctx.fill();
			ctx.closePath();
			// line
			ctx.beginPath();
			ctx.arc(80,80,72,1.6,activeEndpoint);
			ctx.strokeStyle="#a8cda7";
			ctx.stroke();
			ctx.closePath();
			// end dot
			ctx.beginPath();
			ctx.arc(activeEndpointX,activeEndpointY,8,1.5,2.5*Math.PI);
			ctx.fill();
			ctx.closePath();

		},
		props: ['data', 'totalListings']
}

</script>

<style type="text/css">


</style>