<template>
    <div class="container">
        <nav class="navbar bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img id ="logo" src="https://i.postimg.cc/RZhXBz7Z/Pink-and-Beige-Web-Projects-Computer-Logo-removebg-preview.png" alt="logo" loading="lazy"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="material-symbols-outlined">
menu_open
</span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><img id ="logo" src="https://i.postimg.cc/RZhXBz7Z/Pink-and-Beige-Web-Projects-Computer-Logo-removebg-preview.png" alt="logo" loading="lazy"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3" id="list">
          <li class="nav-item" >
            <router-link to="/" class="links_nav">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="links_nav">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/projects" class="links_nav">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/testimonials" class="links_nav">Testiomonials</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/getintouch" class="links_nav">Get in Touch</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

img{
width: 65px;
height: 65px;
border-radius: 50%;
}

button{
  background-color: #FF8422;
}

.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 55;
  
}

nav ul {
  text-align: center;
}

.links_nav {

  text-decoration: none !important;
  font-size: 20px;
  color: orangered;
  display: block;
  transition: 0.8s;
  transition: 1s;
  padding: 5%;
}

.links_nav:hover{
  color: #fff;
  box-shadow: inset 600px 0 0 0 orangered;;
  width: 100%;

}

nav{
  background-color: black !important;
  
}

.navbar-toggler-icon{
background-color: #FF8422;
}


.offcanvas{
  background-color: black;
}

.btn-close{
  background-color: orangered;
}


button:hover {
  color: white;
  box-shadow: 0 5px 15px #FF8422;
}

</style>