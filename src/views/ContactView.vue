<template>
    <div class="container" style="padding-top: 10%; ">

<form action="https://formspree.io/f/mjvqvkoe"
  method="POST">
    <div class="row">
    <div class="col-sm-6" id="contactme" style="padding-left: 7%;">
        <span>
            <p>GET IN<br>TOUCH</p> 
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
</svg>  Email: kgodisholebopa@gmail.com <br>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>  Contact: 0762508161 <br>
   
    </div>
    <div class="col-sm-6">
    <div class="mb-3">
    <input type="text" class="form-control" placeholder="Name and Surname" aria-label="name" name="nameandsurname" required oninvalid="this.setCustomValidity('Please Enter Your Name')"
            oninput="this.setCustomValidity('')">
  </div>
  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"></label>
  <input type="email" class="form-control" id="exampleFormControlInput1"  placeholder="Enter email address" name="email" required oninvalid="this.setCustomValidity('Please Enter Email')"
            oninput="this.setCustomValidity('')">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label"></label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Leave a message" name="message" required oninvalid="this.setCustomValidity('Please Enter Message')"
            oninput="this.setCustomValidity('')"></textarea>
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

button:hover {
  color: white;
  box-shadow: 0 5px 15px black;
}

</style>