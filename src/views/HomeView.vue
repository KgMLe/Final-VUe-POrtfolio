<template>
  <div class="container">
  <div class="row">
       <MainPage/>
   
      <div class="about">
        <AbOut/>
      </div>
      <div class="projects" style="padding-top: 5%;">
        <MyProjects/>
      </div>
      <div class="mytestimonials">
        <MyTestimonials/>
      </div>
     
    </div>
  </div>
</template>

<script>
import AbOut from '@/components/AbOut.vue';
import MainPage from '@/components/MainPage.vue';
import MyProjects from '@/components/MyProjects.vue';
import MyTestimonials from '@/components/MyTestimonials.vue';
export default {
 
  components: {
    MainPage, AbOut, MyProjects, MyTestimonials
  }
}
</script>
<style scoped>

</style>
