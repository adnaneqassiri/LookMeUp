<template>
    <div class="">
      <div class="our-mession">
        <h1 class="heading">Payment Options</h1>
        <div class="row">
          <div class="col-sm-6">
            <ul class="lis">
              <li>Flat Service Rate: $100 USD</li>
              <li>Payments will be accepted using PayPal, Cash App, Venmo, Apple Pay and Bitcoin for right now</li>
              <li>BEFORE sending payment to us, you must put your first/last/business name in the subject or text message if it is Apple Pay</li>
              <li>Lookmeup.io BTC Wallet Address: <br><span>3G8Bagh8SbtigBUor9gfFwLVQW7FVef1uU</span></li>
              <li>We are in the process of getting our company merchant/payment accounts set up so payment as of now will be sent to the owner and founder of Lookmeup.io, which is Oyetunde Fakeye</li>
              <li>Venmo: @Oye-Fakeye</li>
              <li>Cash App: $Ollie20</li>
              <li>PayPal: rcksmith10@gmail.com</li>
              <li>Apple Pay phone # : 267-340-4521 </li>
            </ul>
          </div>
          <div class="col-sm-6">
            <ul class="uls">
                <li><img src="../assets/paypal1.png" alt=""></li>
                <li><img src="../assets/applepay.png" alt=""></li>
            </ul> 
            <ul class="uls">
                <li><img src="../assets/bitcoin.png" alt=""></li>
                <li><img src="../assets/Cash-App-logo.png" alt=""></li>
            </ul>
            <ul class="uls">
                <li><img src="../assets/vanmo.png" alt=""></li>
            </ul>
            </div>
          </div>
        </div>
      </div>
</template>
<style scoped>
.our-mession{
  padding: 50px 0px;
  margin: auto;
  width: 90%;
}

img{
    width: 200px;
    margin: 20px;
}
@media (max-width: 400px) {
img{
    width: 100px;
    margin: 10px;
}
}
.lis li{
    font-size: 16px;
}
.nested{
    display: inline;
}
span{
    font-size: 16px
}
.our-mession h1{
  font-size: 40px;
  color: #e91e63;
  font-weight: 600;
  text-align: center;
  padding-bottom: 30px;
}
.uls{
    display: flex;
    list-style: none;
    text-align: center;
    justify-content: center;
    padding: 0;
    margin: 0;
}

</style>
