<template>
 <NavBar/>
  <main class="container-fluid">
    <router-view/>
  </main>
 
</template>

<script>
import NavBar from '@/components/NavBar.vue';
export default{
components: {
  NavBar
}
}
</script>

<style>
#app {
  font-family: Poppins, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: black;
}

/* nav a.router-link-exact-active {
  color: orangered;
  padding: 10px;
} */
</style>
