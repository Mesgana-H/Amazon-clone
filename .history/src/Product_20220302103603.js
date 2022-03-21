import React from 'react';

import './Product.css';

function Product() {
	return (
		<div className="product">
			<img
				src="https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg"
				alt=""
			/>
			<div className="product__info">
				<p>title</p>
				<div className="product__rating">🌟</div>
				<p className="product__price">
					<small>$</small>
					<strong>price</strong>
				</p>
			</div>

			<button> Add to Cart</button>
		</div>
	);
}
export default Product;
