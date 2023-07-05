<template>
<div class="container">
  <span>Portfolio</span>
  <div class="row">
    
  <div id="carouselExampleCaptions" class="carousel slide" v-for="item in projects" :key="item.id">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner" >
    <div class="carousel-item">
      <img src="" class="d-block w-100" alt="">
      <div class="carousel-caption d-none d-md-block">
        <h5>{{item.name}}</h5>
        <p>{{item.describe}}</p>
      </div>
    </div>
  </div>
  </div>
 

  <!-- <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
  <div class="card" style="width: 18rem;" v-for="item in projects" :key="item.id">
  <img :src="item.image" class="card-img-top" alt="image">
  <div class="card-body">
    <h5 class="card-title">{{item.name}}</h5>
    <p class="card-text">{{item.describe}}</p>
  </div>
  <div class="card-body">
    <a href={{item.github}} class="card-link">Github Repo</a>
    <a href= {{item.netlify}} class="card-link">Hosted Site</a>
  </div>
</div>
</div>
</div> -->
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
            projects(){
                return this.$store.state.projects
               
            }
        },
        mounted(){
            this.$store.dispatch('fetchProjects')
        }
        
        
    }
</script>
<style scoped>
.card{
  border: 0px 0px 0px 3px solid black;
  background-color: transparent !important;
}

span{
  font-size: 2.5em;
  font-weight: bolder;
}

</style>