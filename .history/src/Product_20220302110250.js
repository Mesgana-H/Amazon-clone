import React from 'react';

import './Product.css';

function Product(props) {
	const { id, title, img, rating, price } = props;
	return (
		<div className="product">
			<img src={img} alt="" />
			<div className="product__info">
				<p>{title}</p>
				<div className="product__rating">🌟</div>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
			</div>

			<button> Add to Cart</button>
		</div>
	);
}
export default Product;
