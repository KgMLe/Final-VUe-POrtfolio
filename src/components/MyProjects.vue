<template>

<div class="card" style="width: 18rem;"  v-for="item in projects" :key="item.id">
  <img :src="item.image" class="card-img-top" alt="image">
  <div class="card-body">
    <h5 class="card-title">{{item.name}}</h5>
    <p class="card-text">{{item.describe}}</p>
  </div>
  <div class="card-body">
    <a href={{item.github}} class="card-link">Card link</a>
    <a href= {{item.netlify}} class="card-link">Another link</a>
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
</style>