<template>
  <div>
    <span>
      <h1>
     HELLO WORLD 
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
      <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
     </svg>
   </h1>
    </span>
  
   <h4>I'M KGODISHO</h4>
   <p>An aspiring <span>Cloud Developer</span></p>

   <aside class="sidebar">
    <nav class="nav">
      <ul>
        <li class="active"><a href="#">Home</a></li>
        <li><a href="#">About Me</a></li>
        <li><a href="#">Projetcs</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">Get In Touch</a></li>
      </ul>
    </nav>
  </aside>
   
  
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.sidebar {
  position: fixed;
  width: 25%;
  height: 90vh;
  font-size: 0.65em;
}

.nav {
  position: relative;
  margin: 0 15%;
  text-align: right;
  top: 50%;
  transform: translateY(-50%);
  font-weight: bold;
}

.nav ul {
  list-style: none;
}
  
  li {
    position: relative;
    margin: 3.2em 0;
  }
    
  a{
      line-height: 5em;
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: 0.4em;
      color: rgba(#FFF, 0.35);
      display: block;
      transition: all ease-out 300ms;
    }
    
    /* &.active a {
      color: white;
    }
    
    &:not(.active)::after {
      opacity: 0.2;
    }
    
    &:not(.active):hover a {
      color: rgba(#FFF, 0.75);
    }
    
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 0.2em;
      background: black;
      left: 0;
      bottom: 0;
      background-image: linear-gradient(to right, #5e42a6, #b74e91)
    } */


</style>