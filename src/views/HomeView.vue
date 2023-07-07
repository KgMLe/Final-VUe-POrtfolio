<template>
  <div>
  <div class="row" >
    <section id="landingpage">
      <MainPage/>
    </section>
    <!-- <section id="aboutpage">
      <div class="about">
        <About/>
      </div>
    </section>
    <section id="myProjects">
      <div class="projects" style="padding-top: 5%;">
        <Projects/>
      </div>
    </section> 
    <section id="testimonialspage">
      <div class="mytestimonials">
        <MyTestimonials/>
      </div>
    </section>  
    <section id="getintouch">
      <div class="contactme">
      <ContactMe/>
     </div>
    </section>      -->
    </div>
  </div>
</template>

<script>
// import About from './AboutView.vue';
import MainPage from '@/components/MainPage.vue';
// import Projects from './ProjectsView.vue';
// import MyTestimonials from './TestimonialsView.vue';
// import ContactMe from './ContactView.vue'
export default {
 
  components: {
    MainPage
  }
}
</script>
<style scoped>

</style>
