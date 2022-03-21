const functions = require('firebase-functions');

const express = require('express');
const cors = require('cors');

const stripe = require('stripe')(
	'sk_test_51KdGJGD6wclVzyMJjFDLE5kXrsngkXnBJEJUlDu0R6tbxfDh3EgNeOCwDGvn2wVMfkU75SJKwheRgo0D0WKSpPGN00scOyVlp8'
);
