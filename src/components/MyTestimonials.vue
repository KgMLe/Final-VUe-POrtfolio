
<template>
    <div style="padding-top: 10%;">
      <div class="row" id="testimonials">
        <h1><span>Testiomonials</span></h1>
        
        <div class="col-lg-4" v-for="item in testimonials" :key="item.id" style="padding-top: 5%;">
                  <div class="card" style="padding-top: 5px;">
                      <div class="face front-face" style="padding-top: 5%;">
                          <img :src= "item.image"
                              alt="image" >
                          <div class="pt-3 text-uppercase name">
                           {{item.name}}
                          </div>
                          <div class="designation">{{ item.who }}</div>
                      </div>
                      <div class="face back-face">
                          <span class="fas fa-quote-left"></span>
                          <div class="testimonial">
                            {{ item.describe }} 
                          </div>
                          <span class="fas fa-quote-right"></span>
                      </div>
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
              testimonials(){
                  return this.$store.state.testimonials
              },
          },
          mounted(){
              this.$store.dispatch('fetchTestimonials')
          }
    }
  </script>
  
  <style scoped>

  #testimonials{
    background-color: black;
    padding-bottom: 7%;
    padding-top: 3%;
  }

  span{
    color: #FF8422;
    padding-top: 3%;
    text-align: center;
    padding-left: 3%;
  }
  .col-lg-4 {
      display: flex;
      justify-content: center;
  }
  .card {
      width: 300px;
      height: 300px;
      transform-style: preserve-3d;
      perspective: 500px;
      border: none;
      background-color: inherit;
  }
  
  .card .face {
      position: absolute;
      color: white;
      width: 100%;
      height: 110%;
      overflow: hidden;
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
      border-radius: 15px;
      background: rgba(255, 255, 255, 0.06);
      transform-style: preserve-3d;
      transition: 0.5s;
      backface-visibility: hidden;
      border-top: 1px solid #FF8422;
      border-left: 1px solid #FF8422;
    
  }
  
  .card .face.front-face img{
      width: 150px;
      height: 150px;
      border-radius: 50%;
      object-fit: cover;
  }
  
  .card .face.front-face,.card .face.back-face {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }
  
  .card .face.front-face .name {
      letter-spacing: 2px;
  }
  
  .card .face.front-face .designation {
      font-size: 0.8rem;
      color: white;
      letter-spacing: 0.8px;
  }
  
  .card:hover .face.front-face {
      transform: rotateY(180deg);
  }
  
  .card .face.back-face {
      position: absolute;
      background: rgba(255, 255, 255, 0.06);
      transform: rotateY(180deg);
      padding: 20px 30px;
      text-align: center;
      user-select: none;
  }
  
  .card .face.back-face .fa-quote-left {
      position: absolute;
      top: 25px;
      left: 25px;
      font-size: 1.2rem;
  }
  
  .card .face.back-face .fa-quote-right {
      position: absolute;
      bottom: 35px;
      right: 25px;
      font-size: 1.2rem;
  }
  
  .card:hover .face.back-face {
      transform: rotateY(360deg);
  }
  
  /* @media(max-width: 991.5px) {
      .col-lg-4 {
          margin-top: 40px;
          margin-bottom: 20px;
      } */
  </style>
  
  