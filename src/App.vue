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
 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: orangered;
}

span{
  color: black;
  font-weight: bolder;
}

section {
  width: 100vh;
}

nav {
  padding: 30px;

}




</style>
