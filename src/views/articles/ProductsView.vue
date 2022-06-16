<template>
  <div class="container">
    <div class="row g-3">
      <div class="col-12 d-flex align-items-center justify-content-between py-3">
        <h2 class="page-title">Les produits</h2>
        <router-link :to="{name: 'products_new'}" class="link-btn">Créer un produit</router-link>
      </div>
      <div class="col-12 col-sm-6 col-md-4" v-for="product in products" :key="product.id">
        <div class="card">
          <img class="card-img-top" src="http://tsr-industrie.fr/wp-content/uploads/2016/04/ef3-placeholder-image.jpg"
               alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <router-link :to="{name: 'products_show', params: {id: product.id}}" class="link">Voir plus</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {products} from "@/main";

export default {
  name: "ProductsView",
  data() {
    return {
      products: products,
    };
  },
}
</script>

<style lang="scss" scoped>
.page-title {
  color: var(--app-text-color);
}



.card-body {
  background-color: var(--app-primary-color);
  color: var(--app-text-color);


  .link {
    color: var(--app-text-color);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>