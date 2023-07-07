<template>
   <div class="container" style="padding-top: 6.5%; padding-bottom: 20%;" >
  <div>
    <!-- <div class="col-sm-8" > -->
        
      <h1 id="landing" class="typewrite">
     HELLO WORLD...<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
</svg>
   </h1>
  
   
     <p>
    I'm <span>Kgodisho</span>, an aspiring <span>Solutions Architect</span> 
   </p>
  </div>
  </div>
  
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

   

#landing {
    width: 3em;
    margin: 0 auto;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    font-size: 9rem;
    padding-top: 15%;
    font-weight: bold;
}

.typewrite{
  animation:  blinkTextCursor 4s steps(44) 1s 1 normal both,
   typewriter 4s steps(44) infinite normal;
}

@keyframes typewriter{
  from{width: 0;}
  to{width: 8.5em;}
}
@keyframes blinkTextCursor{
  from{border-right-color: rgba(255,255,255,.75);}
  to{border-right-color: transparent;}
}

p{
  font-size: 2rem;
  text-transform: capitalize;
  padding-left: 37%;
}

span{
  color: black;

}

@media(max-width: 1024px) {
    #landing{
      margin-top: 40px;
      margin-bottom: 20px;
      /* padding-top: 30%;
      padding-left: 20%; */
      font-size: 3.5rem;
      
      }
    p{
    font-size: 1em;
    text-transform: capitalize;
      }
  
    }

    @media(max-width: 567px) {

      #landing{
        margin-top: 150px;
         word-break: break-all;
         word-wrap: break-word;
         font-size: 2.5rem;
      }
      p {
        padding-left: 15%;
      }

      svg{
        display: none;
      }

    }   
    
    @media (width < 408px) {
      #landing{
      margin-top: 200px;
      margin-bottom: 20px;
      padding-top: 15%;
      font-size: 2rem;
      word-wrap: break-all;
      }
      svg{
        display: none;
      }

    }
    


</style>