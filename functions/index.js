const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51HkbEXGYxOSRojkB2zitDzxR54agFheuAqGxvmU9c7WxgkyrUFlK9uivgpfcUhiyZFy4XVf1Bpncq3LvFueTMyfs00dthpUcVm'
);

// API setup

//1. App config
const app = express();

//2. Middle wares
app.use(cors({ origin: true }));
app.use(express.json());

//3. API routes
// This is a test route.
app.get('/', (request, response) => response.status(200).send('hello world'));

// '/payments/create' is from PaymentPage.js of the project
// The total const is a query and it comes from the PaymentPage.js of the project after the ? mark
app.post(
  'http://localhost:5001/amz-e-commerce-full-clone/us-central1/api/payments/create',
  async (request, response) => {
    const total = request.query.total;
    console.log('Payment request received for this amount', total);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits fo the currency
      currency: 'usd',
    });

    // OK - Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  }
);

//4. Listen commands
exports.api = functions.https.onRequest(app);

// Example endpoints
// functions[api]: http function initialized (http://localhost:5001/amz-e-commerce-full-clone/us-central1/api).
