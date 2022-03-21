import React from './react';

import './product.css';

function Product() {
	return <div>Helloo</div>;
}
export default Product;

import React, { Component } from './react';

class Product extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <div> hey</div>;
	}
}
