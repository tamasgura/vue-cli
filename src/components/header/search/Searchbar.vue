<template>
	
	<li class="searchbar d-flex align-items-center justify-content-start col dropdown">
		<a href="#" class="row no-gutters px-auto my-0" id="searchResultsDropdown" @click.prevent="">
			<form id="searchForm" class="row no-gutters" @submit.prevent="submitForm">
				
				<a href="#" @click.prevent="submitForm" role="button" class="col-2 d-flex align-items-center justify-content-around"><img src="../../../assets/icons/search.svg" class="searchImg"></a>
				<input type="text" class="form-control col " id="searchbar"  name="searchbar" placeholder="SEARCH IN RAPIDLISTING">

			</form>

		</a>
		
		<a aria-label="Close" class="closeBtn d-flex justify-content-around align-items-center" role="button" @click.prevent="toggleSearchResults" v-if="searchResults.expanded">
			<img src="../../../assets/icons/close-gray.svg">
		</a>

		<app-search-results  v-if="searchResults.expanded"></app-search-results>

	</li >

</template>

<script type="text/javascript">
	import SearchResults from './searchResults/SearchResults.vue';
	export default {

		data: function() {
			return {
				searchResults: {
					expanded: false
				}
			}
		},
		components: {
			'app-search-results': SearchResults
		},
		props: ['quickLinks'],
		methods: {
			submitForm(event) {
				//$('searchForm').submit();
				this.searchResults.expanded = !this.searchResults.expanded;
			},
			toggleSearchResults() {
				event.preventDefault();		
				this.searchResults.expanded = !this.searchResults.expanded;
			}
		}

	}
</script>

<style type="text/css" scoped>

	input {
		border: none;
	}
	.searchImg {
		height: 1.5rem;
		opacity: .3;
	}
	input::placeholder {
   		color: #a1a1a1;
   		font-size: .875rem;
   	}
   	.closeBtn {
   		height: 100%;
   		width: 2rem;
   	}
   	.closeBtn img {
   		height: 1rem;
		cursor: pointer;
   	}
</style>