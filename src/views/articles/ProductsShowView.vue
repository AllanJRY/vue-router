<template>
  <div v-if="null !== product" class="product-show">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <table class="table-dark">
            <tbody>
            <tr>
              <th>Nom</th>
              <td>{{ product.name }}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{{ product.description }}</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="col-12 d-flex justify-content-center p-3">
          <a href="#" class="link-btn">Éditer</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {products} from "@/main";

export default {
  name: "ProductsShowView",
  data() {
    return {
      product: null,
    }
  },
  mounted() {
    products.forEach(storeProduct => {
      if (storeProduct.id === this.$route.params.id) {
        this.product = storeProduct;
      }
    });
  },
}
</script>

<style lang="scss" scoped>
.product-show {
  padding: 1rem;

  table {
    background-color: var(--app-secondary-color);

    th,
    td {
      text-align: start;
      padding: 1rem;
    }

    th {
      background-color: var(--app-primary-color);
    }
  }
}
</style>