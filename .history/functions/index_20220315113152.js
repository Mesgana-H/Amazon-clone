const functions = require('firebase-functions');

const express = require('express');
const cors = require('cors');

const stripe = require('stripe')(
	'sk_test_51KdGJGD6wclVzyMJjFDLE5kXrsngkXnBJEJUlDu0R6tbxfDh3EgNeOCwDGvn2wVMfkU75SJKwheRgo0D0WKSpPGN00scOyVlp8'
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('Bum c'));

exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-f433a/us-central1/api
