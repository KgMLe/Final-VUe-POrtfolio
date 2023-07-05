<template>
    <div class="container" style="padding-top: 10%; ">

<form action="">
    <div class="row">
    <div class="col-sm-6" id="contactme" style="padding-left: 7%;">
        <span>
            <p>GET IN<br>TOUCH</p> 
        </span>
  
    </div>
    <div class="col-sm-6">
    <div class="mb-3">
    <input type="text" class="form-control" placeholder="First name" aria-label="First and Last Name">
  </div>
  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"></label>
  <input type="email" class="form-control" id="exampleFormControlInput1"  placeholder="Enter email address" >
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label"></label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Leave a message"></textarea>
</div>
<button class="btn">Submit</button>
    </div>
</div>

</form>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.container{
    padding-bottom: 5%;
}
span{
    font-size: 5rem;
    justify-content: end;
}

input, textarea{
    background-color: transparent !important;
    display: block;
  border-width: 0 0 2px 0;
  border-color: black;

}

.btn{
    width: 50%;
    border-radius: 1rem;
    padding: 1.5%;
    color: #fff;
    background-color: black;
    border: none;
    cursor: pointer;
}

</style>