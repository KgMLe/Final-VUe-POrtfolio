<template>
    <div>
        <nav class="navbar bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/projects">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/testimonials">Testiomonials</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact">Get in Touch</router-link>
          </li>
        </ul>
        
        <p id="moreinfo" style="padding-top: 20%;">Name: Kgodisho Lebopa<br>  
                  Date of Birth: 19/03/1999 <br> 
                  Email: kgodisholebopa@gmail.com <br>
                  Contact: 0762508161 <br>
                  Address: Wynberg <br>
                  Language(s):English, Sepedi, TshiVenda
          </p>
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
nav ul {
  text-align: center;
}

nav ul li {
  position: relative;
  width: 70px;
  cursor: pointer;
  background: crimson;
  text-transform: uppercase;
  transition:all .4s ease-out;
}

nav ul li:after {
  position: absolute;
  background: white;
  color: crimson;
  top:0;
  left: 70px;
  width: 70px; height: 100%;
  opacity:.5;
  transform: perspective(400px) rotateY(90deg);
  transform-origin: 0 100%;
  transition:all .4s ease-out;
}

</style>