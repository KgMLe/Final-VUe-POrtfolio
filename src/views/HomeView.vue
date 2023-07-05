<template>
  <div>
  <div class="row" >
    <section id="landingpage">
      <MainPage/>
    </section>
    <section id="aboutpage">
      <div class="about">
        <AboutMe/>
      </div>
    </section>
    <section id="myProjects">
      <div class="projects" style="padding-top: 5%;">
        <MyProjects/>
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
    </section>     
    </div>
  </div>
</template>

<script>
import AboutMe from '@/components/AboutMe.vue';
import MainPage from '@/components/MainPage.vue';
import MyProjects from '@/components/MyProjects.vue';
import MyTestimonials from '@/components/MyTestimonials.vue';
import ContactMe from '@/components/ContactMe.vue'
export default {
 
  components: {
    MainPage, AboutMe, MyProjects, MyTestimonials, ContactMe 
  }
}
</script>
<style scoped>

</style>
