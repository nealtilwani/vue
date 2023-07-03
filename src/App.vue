<template>
  <div id="app">
    <SearchBar />
    <SearchResults />
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue';
import SearchResults from './components/SearchResults.vue';

export default {
  name: 'App',
  components: {
    SearchBar,
    SearchResults,
  },
};
</script>


