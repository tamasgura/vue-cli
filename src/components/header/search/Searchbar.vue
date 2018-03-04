<template>
	
	<li class="searchbar d-flex align-items-center dropdown col">
		<a href="#" class="col-12 px-0 my-0" id="searchResultsDropdown"> 
			<form id="searchForm" class="row no-gutters mx-0 px-0 col-12" @submit.prevent="submitForm" role="search">
				
				<a href="#" @click.prevent="submitForm" role="button" class="d-flex align-items-center justify-content-start d-none d-md-flex col-md-1"><img src="../../../assets/icons/search.svg" class="searchImg d-none d-md-flex col-md-12"></a>
				<input type="text" class="form-control col-12 col-md-10" id="searchbar"  name="searchbar" placeholder="SEARCH IN RAPIDLISTING" aria-label="Search through RAPIDLISTING">

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
   		font-size: .6785rem;
   	}
   	.searchform input:hover {
   		text-shadow: none !important;
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