import React from 'react';
import './CheckoutProduct.css';

function CheckoutProduct() {
	return (
		<div>
			<img
				className="checkoutProduct__image"
				src="https://m.media-amazon.com/images/I/41UILzPeHGL._AC_UL640_FMwebp_QL65_.jpg"
			/>
			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">title</p>
				<p className="checkoutProduct__price">
					<small>$</small>
					<strong>price</strong>
				</p>
				<div className="checkoutProduct__rating">{Array(rating).fill().map((_, i) => <p>🌟</p>)}</div>
				{!hideButton && <button onClick={removeFromBasket}>Remove from Basket</button>}
			</div>
		</div>
	);
}

export default CheckoutProduct;
