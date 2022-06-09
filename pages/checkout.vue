<template>
  <main class="pattern_2">
    <div class="container margin_60_40">
      <div class="row justify-content-center">
        <div class="col-xl-6 col-lg-8">
          <!-- /box_booking -->

          <div class="box_booking_2 pb-4 style_2">
            <div class="head">
              <div class="title">
                <h3>Checkout</h3>
              </div>
            </div>
            <!-- /head -->
            <form>
              <div class="main">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Full Nmae"
                  />
                </div>

                <div id="card-element" class="p-2 h-10 mb-4 form-control"></div>

                <div
                  id="card-errors"
                  role="alert"
                  class="contactinput"
                  style="background: none; color: red"
                ></div>

                <button class="btn_1 mb_5">Order Now</button>
                <!--End row -->
              </div>
            </form>
          </div>
          <!-- /box_booking -->
        </div>
        <!-- /col -->
        <div class="col-xl-4 col-lg-4" id="sidebar_fixed">
          <div class="box_booking">
            <div class="head">
              <h3>Order Summary</h3>
            </div>
            <!-- /head -->
            <div class="main">
              <ul>
                <li>Date<span>Today 23/11/2019</span></li>
                <li>Hour<span>08.30pm</span></li>
                <li>Type<span>Delivery</span></li>
              </ul>
              <hr />
              <ul class="clearfix">
                <li><a href="#0">1x Enchiladas</a><span>$11</span></li>
                <li><a href="#0">2x Burrito</a><span>$14</span></li>
                <li><a href="#0">1x Chicken</a><span>$18</span></li>
                <li><a href="#0">2x Corona Beer</a><span>$9</span></li>
                <li><a href="#0">2x Cheese Cake</a><span>$11</span></li>
              </ul>
              <ul class="clearfix">
                <li>Subtotal<span>$56</span></li>
                <li>Delivery fee<span>$10</span></li>
                <li class="total">Total<span>$66</span></li>
              </ul>
            </div>
          </div>
          <!-- /box_booking -->
        </div>
      </div>
      <!-- /row -->
    </div>
    <!-- /container -->
  </main>
</template>

<script setup>
import axios from "axios";
onMounted(() => {
  if (process.client) {
    const stripe = Stripe("pk_test_6D9Nwy7GrtNagdku5QKtuS0500HuAdHmkj"); // Your Publishable Key
    const elements = stripe.elements();

    // Create our card inputs
    var style = {
      base: {
        color: "#000",
      },
    };

    const card = elements.create("card", { style });
    card.mount("#card-element");

    const form = document.querySelector("form");
    const errorEl = document.querySelector("#card-errors");

    // Give our token to our form
    const stripeTokenHandler = (token) => {
      axios({
        method: "post",
        url: "/api/stripe",
        data: {
          stripeToken: token.id,
          type: "subscribe",
        },
        headers: { "Content-Type": "application/json" },
      })
        .then(function (response) {
          //handle success
          console.log(response);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
    };

    // Create token from card data
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      stripe.createToken(card).then((res) => {
        if (res.error) errorEl.textContent = res.error.message;
        else stripeTokenHandler(res.token);
      });
    });
  }
});
</script>
