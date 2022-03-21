const functions = require('firebase-functions');

const express = require('express');
const cors = require('cors');

const stripe = require('stripe')(
	'sk_test_51KdGJGD6wclVzyMJjFDLE5kXrsngkXnBJEJUlDu0R6tbxfDh3EgNeOCwDGvn2wVMfkU75SJKwheRgo0D0WKSpPGN00scOyVlp8'
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('Bum chaka..chaka..'));

app.post('/payments/create', async (request, response) => {
	const total = request.query.total;

	console.log('Payment Request Recieved BOOM!!! for this amount >>> ', total);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total, // subunits of the currency
		currency: 'usd'
	});
	console.log('jjj');
	// OK - Created
	response.status(201).send({
		clientSecret: paymentIntent.client_secret
	});
});

exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-f433a/us-central1/api
