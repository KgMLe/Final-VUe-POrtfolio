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
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  color: white;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: orangered;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto minmax(100vh, 1fr) auto;
}

#app > *{
    grid-column: 1/-1;
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

body{
  background-color: orangered;
}


</style>
