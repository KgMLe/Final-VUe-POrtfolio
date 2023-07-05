<template>
   <div class="container" style="padding-top: 10%; padding-bottom: 20%;" >
  <div class="row">
    <!-- <div class="col-sm-8" > -->
        
      <h1 id="landing">
     HELLO WORLD...<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
</svg>
   </h1>
  
   
     <p>
    I'm <span>Kgodisho</span>, an aspiring <span>Solutions Architect</span> 
   </p>
  <!-- </div> -->
  <!-- <div class="col-sm-4"> -->
    <!-- <img alt="Kgodisho" src="https://i.postimg.cc/qMs31zzG/aremojikg.gif"> -->
  <!-- </div> -->
  </div>
  </div>
  
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
    
/* img{
  border-radius: 50%;
  height: 350px;
  width: 350px;
  padding-top: 7%;
  padding-left: 5%;
} */

#landing {
  width: 22ch;
  animation: typing 4s steps(22) infinite, blink .5s step-end infinite alternate !important;
  white-space: nowrap;
  overflow: hidden;
  font-size: 7rem;
  padding-top: 15%;
  /* mix-blend-mode: screen; */
  padding-left: 10%;
}

p{
  font-size: 2rem;
  text-transform: capitalize;
  padding-left: 20%;
}

span{
  color: black;
  /* text-decoration: underline; */

}


@keyframes typing {
  from {
    width: 0
  }
}
    
@keyframes blink {
  50% {
    border-color: transparent
  }  
}





</style>