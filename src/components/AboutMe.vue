<template>
    <div class="row" style="padding-top: 10%;" id="aboutme">
        <div class="col-sm-4" id="aboutMe">
        <div id="navbar-example3" class="h-100 flex-column align-items-stretch pe-4 border-end">
            <!-- <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top">
  Tooltip on top
</button> -->
            
      <!-- <p id="moreinfo">Name: Kgodisho Lebopa<br>  
                  Date of Birth: 19/03/1999 <br> 
                  Email: kgodisholebopa@gmail.com <br>
                  Contact: 0762508161 <br>
                  Address: Wynberg <br>
                  Language(s):English, Sepedi, TshiVenda
        </p> -->
        <img alt="Kgodisho" src="https://i.postimg.cc/qMs31zzG/aremojikg.gif">
    </div>
    </div>
    <div class="col-sm-8">
        <p>Hi, I'm Kgodisho, an aspiring <span>Cloud Developer.</span> I am currently a student at Life Choices coding academy gaining skills in full stack web development. I enjoy creating beautiful, responsive websites that provide an excellent user experience. I am fueled by my passion for understanding the nuances of the advancing world of Technology and knowing I have the ability to contribute to that gives me great joy. I considers myself a "forever student," eager to build on the skills and knowledge I have acquired on software development, by staying in tune with the latest tech trends through continued coursework and professional development.
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

        </div>
     </div>
    </div>
    <!-- RESUME -->
    <div class="resume" style="padding-top: 5%;">
   <div class="row">
    <!-- EDUCATION -->
  <div class="col-sm-3">
    <h2> <span>Education:</span></h2>
  </div>
   <div class="col-sm-9">
    <div class="education" v-for="item in education" :key="item.id">
        <p>
        {{item.years}} <br>
        {{item.where}}<br><br>
        {{item.describe}}
    </p>
    <hr>
    </div>
   </div>
</div>
    
   
    

  
  <!-- EXPERIENCE -->
  <div class="row">
    <div class="col-sm-3"> 
     <h2> <span>Experience:</span> </h2>
    </div>
    <div class="col-sm-9">
        <div class="experience" v-for="item in experience" :key="item.id" >
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
img{
  border-radius: 50%;
  height: 320px;
  width: 320px;
  padding-left: 5%;
}

h1{
    color: black;
    font-weight: bold;
}

p{
    padding-top: 7%;
    text-align: justify;
}

.resume, #aboutme{
    background-color: black !important;
    padding: 5%;
    border-top: 1px white;
}

span, hr{
    color: #FF8422;
}

.mySkills{
    padding-bottom: 8%;
}

</style>