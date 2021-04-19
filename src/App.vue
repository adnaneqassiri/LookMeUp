<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <div class="text-center">
  <b-navbar toggleable="lg" class="nav-color" >
    <b-navbar-brand href="#"><span class="look">LookMeUp.io</span></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item><router-link to="/"><a class="nav-a">Home</a></router-link></b-nav-item>
        <b-nav-item><router-link to="/pricing"><a class="nav-a">Pricing</a></router-link></b-nav-item>
        <b-nav-item><router-link to="/getstarted"><a class="nav-a">Get Started</a></router-link></b-nav-item>
        <b-nav-item><router-link to="/payment"><a class="nav-a">Payment Options</a></router-link></b-nav-item>  
        <b-nav-item><router-link to="/contact"><a class="nav-a">Contact</a></router-link></b-nav-item>  
        <b-nav-item><router-link to="/faq"><a class="nav-a">FAQ</a></router-link></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
    </div>
    <router-view />
    
     <!-- START FOOTER -->
<div class="footer">
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-lg-4">
        <div class="info setup">
        <h2>
        <span>LookMeUp</span></h2>
        <p class="paragraph">We are here to put businesses on google and google maps within a weeks time. </p>
          <!-- <p class="paragraph">LookMeUp.io is an online business
             with one goal: To put verify and put businesses on Google and Google maps within a weeks time.</p> -->
        </div>
      </div>
      <div class="col-sm-6 col-lg-5">
        <div class="helpful-link setup">
          <h2>Useful Links</h2>
          <div class="row">
            <div class="col">
              <ul class="list-unstyled">
                <li><i class="fa fa-chevron-right"></i><a href="/"> Home</a></li>
                <li><i class="fa fa-chevron-right"></i><a href="/#/contact"> Contact Us</a></li>
                <li><i class="fa fa-chevron-right"></i><a href="/#/pricing">Pricing</a></li>
                <li><i class="fa fa-chevron-right"></i><a href="/#/payment">Payment</a></li>
                <li><i class="fa fa-chevron-right"></i><a href="https://www.instagram.com/lookmeup.io/">Instagram </a> </li>
              </ul>
            </div>
            <div class="col">
              <ul class="list-unstyled">
                <li><i class="fa fa-chevron-right"></i><a href="/#/payment"> Payment Options</a></li>
                <li><i class="fa fa-chevron-right"></i><a href="/#/faq"> FAQ</a></li>
                <li><i class="fa fa-chevron-right"></i><a href="/#/getstarted"> Get Started</a></li>
                <li><i class="fa fa-chevron-right"></i><a href="/">Facebook</a></li>
                <li><i class="fa fa-chevron-right"></i><a href="mailto:Oyetunde1@lookmeup.io?subject=Contact"> Oyetunde1@lookmeup.io</a> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3">
        <div class="contact setup">
          <h2>Contact Us</h2>
          <ul class="list-unstyled">
            <li>Our Email and Phone Number : 
            </li>
            <li >Phone : <span class="contact1">267-340-4521</span><li>
            <li>Email : <a class="contact1" href="mailto:Oyetunde1@lookmeup.io?subject=Contact">Oyetunde1@lookmeup.io</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
  <!-- END FOOTER -->
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,300&display=swap');

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  margin: 0;
}
.look {
  color: #333;
  font-size: 20px;
}
.nav-a{
   color: #333; 
   font-size: 17px;
}
.nav-a:hover{
  
color: #e91e63;
transition: .4s ease-in;
}
.nav-color{
  background: #fff;
}
/* Start Footer */
.footer {
  background-color: #333;
  color: #EEE;
  /* padding: 20px; */
  text-align: center;
  padding: 30px 0 10px 0;
  font-size: 15px;

}
.footer i{
  padding: 0px 5px;
}
.footer a {
  color: #fff;
}
.footer a:hover {
   color: #e91e63;
  text-decoration: underline;
  transition: .5s; 
}
.footer i:hover{
  color: #e91e63 ;
  text-decoration: underline;
  transition: .5s; 

}
.footer .contact1{
  color: #FFF; 
}
.footer .contact1:hover{
  color: #e91e63;
  text-decoration: underline;
  transition: .5s; 
}
.footer p {
  line-height: 1.7;
  letter-spacing: 1px;
  font-size: 15px;
  margin: 0px;
}
.footer h2{
  font-size: 25px;
  padding: 0px;
  margin-bottom: 13px;
  color: #adadad;
}
.footer h5 span {
    font-size: 28px;
    padding: 0px;
    margin-bottom: 15px;
}
.setup {
  margin-bottom: 20px;
}
.last{
  padding: 10px;
  text-align: center;

}
/* End Footer */
</style>
