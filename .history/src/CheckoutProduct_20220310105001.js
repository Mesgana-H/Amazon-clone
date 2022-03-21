import React from 'react';
import './CheckoutProduct.css';

function CheckoutProduct() {
	return (
		<div className="background-color: whitesmoke;t">
			<div className="checkoutProduct_container">
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
					<div className="checkoutProduct__rating">{Array(5).fill().map((_, i) => <p>🌟</p>)}</div>
					<button>Remove from Basket</button>
					{/* {!hideButton && <button onClick={removeFromBasket}>Remove from Basket</button>} */}
				</div>
			</div>
		</div>
	);
}

export default CheckoutProduct;
