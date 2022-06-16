<template>
  <div class="products-new">
    <form @submit.prevent class="container">
      <div class="row g-3">
        <div class="col-12">
          <label for="name" class="form-label">Nom</label>
          <input type="text" class="form-control" id="name" placeholder="Nom du produit" v-model="product.name">
        </div>
        <div class="col-12">
          <label for="description" class="form-label">Description</label>
          <textarea id="description" class="form-control" v-model="product.description" placeholder="Description du produit..."></textarea>
        </div>
        <div class="col-12 d-flex justify-content-center p-3">
          <input type="submit" value="Sauvegarder" @click.prevent="handleProductCreation">
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {products} from "@/main";

export default {
  name: "ProductsNewView",
  data() {
    return {
      product: {
        id: null,
        name: '',
        description: '',
      },
    }
  },
  methods: {
    handleProductCreation() {
      this.product.id = Math.floor(Math.random() * 50000) + 1;
      products.push(this.product);
    }
  },
}
</script>

<style lang="scss" scoped>
.products-new {
  padding: 2rem;
}
</style>