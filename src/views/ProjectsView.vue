<template>
    <div class="container" style="padding-top:10%;">
      <span style="padding-bottom:5%;">Portfolio</span>
      <br>
      <div class="row" id="cardrow">
        <!-- <ul class="cards"> -->
        <li class="card" v-for="item in projects" :key="item.id">
          <div>
            <img :src="item.image" alt="projects">
            <h3 class="card-title">{{item.name}}</h3>
            <div class="card-content">
              {{item.describe}}
            </div>
          </div>
          <div class="card-link-wrapper">
            <a :href= "item.github" target="_blank">
              <button class="btn"> Github Repo</button>
            </a>
            <a :href= "item.netlify" target="_blank">
              <button class="btn"> Hosted Site</button>
            </a>
          </div>
          </li>
     
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
    /* .card{
    
      background-color: transparent !important;
    } */
    
    span{
      font-size: 2.5em;
      font-weight: bolder;
    }
    
    .row{
      align-items: stretch;
      flex-wrap: wrap;
      flex-direction: row;
      flex-wrap: nowrap;
      display: flex;
      /* padding: 25px 0px; */
      list-style: none;
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
    }
    .card {
    
      display: flex;
      flex-direction: wrap;
      flex: 0 0 100%;
      padding: 20px;
      background-color: transparent !important; 
      border-radius: 12px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 15%);
      scroll-snap-align: start;
    }
    
    .card .card-link-wrapper {
      margin-top: auto;
    }
    
    button {
      display: inline-block;
      color: white;
    }
    
     img {
      margin-bottom: .75rem;
      width: 100%;
    }
    
    button:hover {
      color: black;
      box-shadow: 0 5px 15px black;
    }
    
    
    @media (min-width: 768px) {

    

      .card {
        flex-basis: calc(calc(100% / 3) - 20px);
      }
    
      .card:not(:last-child) {
        margin-right: 30px;
      }
    }
    
    @media (min-width: 1100px) {
      .card {
        flex-basis: calc(25% - 30px);
      }
    }
    
    </style>