import React from 'react';
import './Product.css';

function Product({ id, title, img, price, rating }) {
	const addToBasket
	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">{Array(rating).fill().map((_, i) => <p>🌟</p>)}</div>
			</div>

			<img src={img} alt="" height="200px" />

			<button onClick={addToBasket}>Add to Basket</button>
		</div>
	);
}

export default Product;
