<template>
  <header>
    <a href="#" class="link">Accueil</a>
    <a href="#" class="link">Produits</a>
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

    &.router-link-active,
    &:hover {
      background-color: var(--app-secondary-color);
    }
  }
}
</style>