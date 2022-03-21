import React from 'react';

import './Product.css';

function Product() {
	return (
		<div className="product">
			<div className="product__info">
				<p>title</p>
				<p className="product__price">
					<small>$</small>
					<strong>price</strong>
				</p>
				<div className="product_rating">h</div>
			</div>
		</div>
	);
}
export default Product;
