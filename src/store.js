
import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
    state: {
        searchResult: null,
    },
    mutations: {
        setSearchResult(state, result) {
            state.searchResult = result;
        },
    },
    actions: {
        fetchSearchResults({ commit }, { clientId, query, limit, page }) {
            const apiUrl = 'https://aix.salesfire.co.uk/api/searcha';
            axios
                .get(apiUrl, {
                    params: {
                        client_id: clientId,
                        query: query,
                        limit: limit,
                        page: page,
                    },
                })
                .then(response => {
                    commit('setSearchResult', response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        },
    },
});
