<template>
    <div class="row" style="padding-top: 10%;">
        <div class="col-sm-4" id="aboutMe">
        <div id="navbar-example3" class="h-100 flex-column align-items-stretch pe-4 border-end">
            <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top">
  Tooltip on top
</button>
    <!-- <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-file-earmark-person-fill"  viewBox="0 0 16 16"> <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755z"/>
             </svg> 
            </button>    -->
            
      <p id="moreinfo">Name: Kgodisho Lebopa<br>  
                  Date of Birth: 19/03/1999 <br> 
                  Email: kgodisholebopa@gmail.com <br>
                  Contact: 0762508161 <br>
                  Address: Wynberg <br>
                  Language(s):English, Sepedi, TshiVenda
                </p>
    </div>
    </div>
    <div class="col-sm-8">
        <p>Hi, I'm Kgodisho, an aspiring Cloud Developer. I am currently a student at Life Choices coding academy gaining skills in full stack web development. I enjoy creating beautiful, responsive websites that provide an excellent user experience. I am fueled by my passion for understanding the nuances of the advancing world of Technology and knowing I have the ability to contribute to that gives me great joy. I considers myself a "forever student," eager to build on the skills and knowledge I have acquired on software development, by staying in tune with the latest tech trends through continued coursework and professional development.
        <br><br>
        In my free time, I enjoy both abstract and street photography and all things that involve art and being creative.
        </p>
    </div> 
    </div>
   

   
    <div class="skills" style="padding-top: 7%;">
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
    <div class="education" v-for="item in education" :key="item.id" style="padding-top: 5%">
        <p>
        {{item.years}} <br>
        {{item.where}}<br><br>
        {{item.describe}}
    </p>
    <hr>
    </div>
    

  </div>
  <!-- EXPERIENCE -->
  <div class="col-sm-6">
    <h2>Experience</h2>
    <div class="experience" v-for="item in experience" :key="item.id" style="padding-top: 5%">
        <p>
        {{item.years}} <br>
        {{item.where}}<br><br>
        {{item.describe}}
    </p>
    <hr>
    </div>
    

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
               
            },
            experience(){
                return this.$store.state.experience
            }
        },
        mounted(){
            this.$store.dispatch('fetchEducation'),
            this.$store.dispatch ('fetchExperience')
        },
        
        
    }
</script>

<style scoped>

p{
    text-align: justify;
    
}

</style>