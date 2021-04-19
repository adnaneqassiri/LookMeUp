<template>
<div>
    <section>
      <div class="overlay"></div>
      <div class="container">
      <h1>We help put <span>businesses</span>  on Google and Google maps within a <span>week!</span> </h1>
      <button><a href="/#/contact">Contact Us</a></button>
      </div>
    </section>
    <div class="container">
      <div class="our-mession">
        <h1 class="heading">Our Mission</h1>
        <div class="row">
          <div class="col-sm-6">
            <ul>
              <li>Our online website helps business owners put their business on Google and Google maps</li>
              <li>Help business owners add attributes, photos, and videos, along with promotions and events to their google business page in order to help them get better rank within google search and google maps SEO based platforms </li>
              <li>Helping owners build search engine relevancy by legitimizing all fronts of their business name, products, service, price, and location to the entire world on the #1 most visited online platform in the world (Google) </li>
            </ul>
          </div>
          <div class="col-sm-6">
            <div class="img">
                <img src="../assets/orm.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="random-section text-center">
        <div class="row">
          <div class="col-sm-5">
            <p class="italic">" Is it really that big of a deal if my business is on google or 
              google maps? I already have clients DM’ing me on Instagram to set appointments and purchase items "</p>
            <img src="../assets/Our Mission 2.png" alt="">
          </div>
            <div class="col-sm-7">
            <p>Yes, it is a big deal if your business is not on a  google platform. A big reason why a lot of startup businesses fail is because they don’t understand how important being searchable is and they don’t put enough info about their business online for consumers to gain familiarity with the brand or contact them if they have questions.
            To make your business and brand legitimate in 2021 it is essential to have a Google business page, business page on YouTube, and Facebook business page. It increases consumer confidence and transparency because anyone anywhere can view your business, see what you offer, and what your business does. 
            </p>
            <img src="../assets/Get Started 1.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
    </div>

</template>
<script>

</script>
<style scoped>
section{
  background-image: url('../assets/Business Growth Vector.jpg');
  background-position:center;
  min-height: 93vh;
  background-size: cover;
  padding-top: 80px;
  padding-bottom: 80px; 
  position: relative;
  display: flex;
}
section h1 {
    color: #fff;
    line-height: 1.9;
    letter-spacing: 1px;
    text-align: center;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    font-size: 50px;
}
section .overlay{
  background-color: rgba(0, 0, 0, .8);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;
}
span{
  color: #e91e63;
}
a{
  color: black;
}
a:hover{
  color: white;
}
button{
    color: #000;
    background: #fff;
    outline: none;
    border: none;
    padding: 7px 15px;
    border-radius: 3px;
    font-size: 20px;
    font-weight: 500;
    justify-content: center;
    display: flex;
    margin: auto;
    margin-top: 57vh;
}
.italic{
  font-style: italic;
  font-weight: 600;
}
button:hover{
    color: #fff;
    background:  #e91e63;
    transition: .5s ease-in;
}
@media (max-width: 400px){
  button{
    margin-top: 60vh;
  }
  section h1{
    font-size: 36px;
  }
}
.container{
   position: relative;
  z-index: 999;
}
/* Our Mession */
.our-mession{
  padding: 50px 0px;
}
.our-mession img{
  width: 360px;
}
.our-mession .img{
  align-items: center;
  justify-content: center;
  text-align: center;
}
.our-mession h1{
  font-size: 40px;
  color: #e91e63;
  font-weight: 600;
  text-align: center;
  padding-bottom: 25px;
}
.our-mession ul{
  font-size: 16px;
  font-weight: 500;
  line-height: 1.8;
}
.our-mession ul li{
  padding: 5px;
}
/* random-section */
.random-section {
  padding: 0 20px;
}
.random-section img{
  width: 250px;
  margin-bottom: 30px;
}
.random-section p{
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 30px;
  width: 90%;
}
</style>
