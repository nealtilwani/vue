<template>
    <div class="SearchBar d-flex justify-content-center">
        <input class="w-75 my-5" type="text" v-model="searchQuery" @keyup="handleKeyUp"
            placeholder="Enter your search query">
    </div>
</template>
  
  
<script>
import { mapActions, mapState } from 'vuex';

export default {
    name: 'SearchBar',
    computed: {
        ...mapState(['searchResult']),
    },
    data() {
        return {
            searchQuery: '',
        };
    },
    methods: {
        ...mapActions(['fetchSearchResults']),
        handleKeyUp() {
            const clientId = '3f32397c-21c6-47e5-9ebd-e9865ea03470';
            const limit = 10;
            const page = 1;

            if (this.searchQuery === '') {
                this.$store.commit('setSearchResult', null);
            } else {

                this.fetchSearchResults({
                    clientId: clientId,
                    query: this.searchQuery,
                    limit: limit,
                    page: page,
                });
            }
        },
    },
};
</script>

<style>
.SearchBar input[type="text"] {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 50px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    outline: none;
}
</style>
  