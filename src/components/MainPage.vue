<template>
   <div class="container" style="padding-top: 10%; padding-bottom: 20%;" >
  <div class="row">
    <!-- <div class="col-sm-8" > -->
        
      <h1 id="landing">
     HELLO WORLD...
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
  animation: typing 4s steps(22) infinite, blink .5s step-end infinite alternate, fadeIn 2.5s linear forwards !important;
  white-space: nowrap;
  overflow: hidden;
  font-family: monospace;
  font-size: 7rem;
  padding-top: 10%;
  text-shadow: 4px 4px 0px ;
  mix-blend-mode: screen;
  padding-left: 18%;
}

p{
  font-size: 2rem;
  text-transform: capitalize;
  padding-left: 18%;
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

@keyframes fadeIn {
    0% {
        opacity: 0
    }

    100% {
        opacity: 1;
    }
  }



</style>