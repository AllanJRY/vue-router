<template>
  <div class="products-edit">
    <form v-if="null !== product" @submit.prevent class="container">
      <div class="row g-3">
        <div class="col-12">
          <label for="name" class="form-label">Nom</label>
          <input type="text" class="form-control" id="name" placeholder="Nom du produit" v-model="formName">
        </div>
        <div class="col-12">
          <label for="description" class="form-label">Description</label>
          <textarea id="description" class="form-control" v-model="formDescription" placeholder="Description du produit..."></textarea>
        </div>
        <div class="col-12 d-flex justify-content-center p-3">
          <input type="submit" value="Sauvegarder" @click.prevent="handleSave">
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {products} from "@/main";

export default {
  name: "ProductsEditView",
  data() {
    return {
      product: null,
      formName: '',
      formDescription: '',
    };
  },
  mounted() {
    products.forEach(storeProduct => {
      if (storeProduct.id === this.$route.params.id) {
        this.product = storeProduct;
        this.formName = this.product.name;
        this.formDescription = this.product.description;
      }
    });
  },
  methods: {
    handleSave() {
      this.product.name = this.formName;
      this.product.description = this.formDescription;
    }
  }
}
</script>

<style lang="scss" scoped>
.products-edit {
  padding: 2rem;
}
</style>