const functions = require('firebase-functions');

const express = require('express');
const cors = require('cors');

const stripe = require('stripe')(
	'pk_test_51KdGJGD6wclVzyMJ71mCNwfFxjgmcCsE4akUHZ4axThytZJAPqyHA1w9BwDsQOCInTHjqzwjW482PXFLIDACjsVe00L2jLJtrc'
);
