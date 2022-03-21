import React from 'react';
import './CheckoutProduct.css';

function CheckoutProduct(props) {
	const { title, price, id, img, rating } = props;
	return (
		<div className="checkoutProduct">
			<img className="checkoutProduct__image" src={img} alt="product img" />
			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">{title}</p>
				<p className="checkoutProduct__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="checkoutProduct__rating">{Array(rating).fill().map((_, i) => <p>🌟</p>)}</div>
				<button onClick={removeFromBasket}>Remove from Basket</button>
				{/* {!hideButton && <button onClick={removeFromBasket}>Remove from Basket</button>} */}
				<hr className="checkout__title_hr" />
			</div>
		</div>
	);
}

export default CheckoutProduct;
