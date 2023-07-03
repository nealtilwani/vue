<template>
    <div class="SearchResults container">
        <div v-if="searchResult && searchResult.products.length > 0" class="product-cards row">
            <div v-for="product in searchResult.products" :key="product.id" class="card col-3 my-1">
                <img :src="product.image_url" class="card-img-top">
                <div class="card-body d-flex flex-column justify-content-center">
                    <h3 class="card-title text-center">{{ product.brand }}</h3>
                    <p class="card-text text-center">£{{ product.price.min }}</p>
                    <a href="" class="btn btn-dark">View</a>
                </div>
                <h2></h2>
                <p></p>
            </div>
        </div>
    </div>
</template>
  

  
<script>
import { mapState } from 'vuex';



export default {
    computed: {
        ...mapState(['searchResult']),
    },
};
</script>
  
  
  