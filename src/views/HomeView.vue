<template>
  <div class="row">
  <div class="col-3">
      
      <MainPage/>

      </div>

      <div class="col-9">
    <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" class="scrollspy-example-2" tabindex="0">
     <div id="home">
      <h1 id="landing">
        <span>
      <h1>
     HELLO WORLD 
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
      <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
     </svg>
   </h1>
    </span>
      </h1>
     </div> 
      <img alt="Kgodisho" src="https://i.postimg.cc/qMs31zzG/aremojikg.gif">

      <div class="about">
        <AbOut/>
      </div>
      <div class="projects" style="padding-top: 5%;">
        <MyProjects/>
      </div>
      
      </div>
      </div>

  </div>
</template>

<script>
import AbOut from '@/components/AbOut.vue';
import MainPage from '@/components/MainPage.vue';
import MyProjects from '@/components/MyProjects.vue';
export default {
 
  components: {
    MainPage, AbOut, MyProjects
  }
}
</script>
<style scoped>

</style>
