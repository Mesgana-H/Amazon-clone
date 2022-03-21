import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct(props) {
	const { title, price, id, img, rating } = props;

	const [ { basket }, dispatch ] = useStateValue();

	const removeFromBasket = () => {
		// remove the item from the basket
		dispatch({
			type: 'REMOVE_FROM_BASKET',
			id: 
		});
	};
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

// const a = [ 1, 2, 2, 3, 3, 4 ];
// let a = a.splice(1, 1);
// console.log(x);
