<template>
    <section>    <!-- Start Contact Us -->
    <div class="contact">
      <div class="overlay"></div>
      <div class="container">
        <h2>Contact Us</h2>
        <form action="mailto:Oyetunde1@lookmeup.io?subject=Contact" name="yourForm" id="theForm" method="post">
          <div class="left">
            <input type="text" placeholder="Your Name" name="username">
            <input type="text" placeholder="Your Phone" name="phone">
            <input type="email" placeholder="Your Email" name="email">
            <input type="text" placeholder="Subject" name="subject">
          </div>
          <div class="right">
            <textarea name="message" placeholder="Your Message"></textarea>
            <input type="text" placeholder="Your Business Name" name="Your Business Name">

            <!-- <input type="submit" value="Send"> -->
          </div>
            <input type="submit" value="Send">

        </form>
      </div>
    </div>
    <!-- End Contact Us --></section>
</template>
<script>
</script>
<style scoped>
/* Start Contact Us */
.contact {
  min-height: 600px;
  background-image: url('../assets/contact.png');
  background-size: cover;
  padding-top: 80px;
  padding-bottom: 80px;
  position: relative;
}
.contact .overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, .5);
  /* background-color: rgb(255 255 255 / 60%); */
}
.contact .container {
  position: relative;
  z-index: 2;
}
.contact h2 {
  font-weight: bold;
  font-size: 30px;
  color: #e91e63;
  margin: 0 0 60px;
  text-align: center; 
}
.contact form {
  overflow: hidden;
  max-width: 800px;
  margin: auto;
}
.contact form .left {
  float: left;
  width: 49%;
}
.contact form .right {
  float: right;
  width: 49%;
}
@media (max-width: 767px) {
  .contact form .left,
  .contact form .right {
    float: none;
    width: 100%;
  }
}
.contact form input:not([type="submit"]),
.contact form textarea {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #CCC;
  background-color: rgba(218, 218, 218, 0.19);
}
.contact form input:not([type="submit"]):focus,
.contact form textarea:focus { 
  outline: 2px solid #e91e63;
}
.contact form input {
  height: 40px;
}
.contact form textarea {
  height: 150px;
}
.contact form input[type="submit"] {
  padding: 10px;
  width: 100%;
  border-color: transparent;
  background-color: #e91e63;
  color: #FFF;
  cursor: pointer;
}
.contact form textarea:focus::-webkit-input-placeholder,
.contact form input:not([type="submit"]):focus::-webkit-input-placeholder {
  opacity: 0;
  transition: .4s;
}
.contact form textarea:focus:-ms-input-placeholder,
.contact form input:not([type="submit"]):focus:-ms-input-placeholder {
  opacity: 0;
  transition: .4s;
}
.contact form textarea:focus::placeholder,
.contact form input:not([type="submit"]):focus::placeholder {
  opacity: 0;
  transition: .4s;
}
/* End Contact Us */
</style>