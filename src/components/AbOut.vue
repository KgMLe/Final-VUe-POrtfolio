<template>
    <div class="aboutMe" style="padding-top: 20px;">
    <p>Hi, I'm Kgodisho, an aspiring Cloud Developer. I am currently a student at Life Choices coding academy gaining skills in full stack web development. I enjoy creating beautiful, responsive websites that provide an excellent user experience. I am fueled by my passion for understanding the nuances of the advancing world of Technology and knowing I have the ability to contribute to that gives me great joy. I considers myself a "forever student," eager to build on the skills and knowledge I have acquired on software development, by staying in tune with the latest tech trends through continued coursework and professional development.
        <br><br>
In my free time, I enjoy both abstract and street photography and all things that involve art and being creative.

</p>
    </div>
    <div class="skills" style="padding-top: 20px;">
     <div class="container">
        <div class="row">
            <h1 class="mySkills">
            My Skills 
            </h1>
       <div class="card">
       <div class="card-body">
        <div class="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="height: 20px">
  <div class="progress-bar" style="width: 25%"></div>
</div>
       </div>
</div>
        </div>
     </div>
    </div>
    <!-- RESUME -->
    <div class="resume" style="padding-top: 5%;">
   <div class="row">
    <!-- EDUCATION -->
  <div class="col-sm-6 mb-3 mb-sm-0">

    <h2>Education</h2>
    <div class="education" v-for="item in data" :key="item.ID" >
        <p>
        {{education.years}} <br>
        {{education.where}}<br><br>
        {{education.describe}}
    </p>
    <hr>
    </div>
    

  </div>
  <!-- EXPERIENCE -->
  <div class="col-sm-6">
    <h2>Experience</h2>
  </div>
</div>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                data: []
            }
        },
        computed:{
            education(){
                return this.$store.state.education
            }
        },
        mounted(){
            this.$store.dispatch('fetchEducation')
        }
    }
</script>

<style scoped>

</style>