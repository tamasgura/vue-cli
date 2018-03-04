<template>
		
	<tr>
		<td class="pl-0">{{ item.name }}</td>
		<td class="pl-0">{{ item.attr }}</td>
		<td class="pl-0">{{ item.price }}&pound;</td>
	</tr>

</template>

<script type="text/javascript">
	export default {

		props: ['item']

	}

</script>

<style type="text/css" scoped>
	
	
</style>