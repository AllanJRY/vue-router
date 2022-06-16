<template>
  <div id="app">
    <TheHeader />
  </div>
</template>

<script>
import HomeView from "@/views/HomeView";
import TheHeader from "@/components/TheHeader";

export default {
  components: {TheHeader, HomeView},

}
</script>

<style lang="scss">
:root {
  --app-primary-color: #736F72;
  --app-secondary-color: #9A8F97;
  --app-tertiary-color: #C3BABA;
  --app-text-color: #E9E3E6;
}

body {
  background-color: var(--app-tertiary-color);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.link-btn,
button,
input[type="submit"]{
  padding: 1rem 2rem;
  background-color: var(--app-primary-color);
  color: var(--app-text-color);
  text-decoration: none;
  transition-duration: 0.3s;
  border: 1px solid var(--app-primary-color);

  &:hover {
    background-color: var(--app-secondary-color);
    color: var(--app-text-color);
    border-color: var(--app-secondary-color);
  }
}

label {
  color: var(--app-primary-color);
  font-weight: bold;
}
</style>
