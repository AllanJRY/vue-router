<template>
  <header>
    <router-link :to="{name: 'home'}" class="link" active-class="active" exact>Accueil</router-link>
    <router-link :to="{name: 'products'}" class="link" active-class="active">Produits</router-link>
  </header>
</template>

<script>
export default {
  name: "TheHeader"
}
</script>

<style lang="scss" scoped>
header {
  height: 70px;
  display: flex;
  background-color: var(--app-primary-color);

  .link {
    padding: 0 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--app-text-color);
    text-decoration: none;
    transition-duration: 0.3s;

    &.active,
    &:hover {
      background-color: var(--app-secondary-color);
    }
  }
}
</style>