<template>
 <NavBar/>
  <main class="container-fluid">
    <router-view/>
  </main>
 <FooTer/>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import FooTer from './components/FooTer.vue';
export default{
components: {
  NavBar, FooTer
}
}
</script>

<style>
#app {
  font-family: Poppins, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}



section {
  width: 100vh;
}

nav {
  padding: 30px;

}


</style>
