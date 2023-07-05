<template>
    <div class="container">
        <nav class="navbar bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img id ="logo" src="https://i.postimg.cc/RZhXBz7Z/Pink-and-Beige-Web-Projects-Computer-Logo-removebg-preview.png" alt="logo" loading="lazy"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><img id ="logo" src="https://i.postimg.cc/RZhXBz7Z/Pink-and-Beige-Web-Projects-Computer-Logo-removebg-preview.png" alt="logo" loading="lazy"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <router-link to="/landingpage">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/aboutpage">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/myProjects">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/testimonialspage">Testiomonials</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/getintouch">Get in Touch</router-link>
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
nav ul {
  text-align: center;
}

.nav-item, ul{

  text-decoration: none;
  font-size: 20px;
  color: black;
  display: block;
  transition: 0.3s;
  transition: 1s;
  padding: 5%;
}

nav{
  background-color: black !important;
}

/* .navbar{
  background-color: black;
} */

.offcanvas{
  background-color: black;
}

.btn-close{
  background-color: orangered;
}

button{
  color: white;

}

</style>