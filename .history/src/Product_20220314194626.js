import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, img, price, rating }) {
	const [ { basket }, dispatch ] = useStateValue(); //this is the value it has => useReducer(reducer, initialState)
	// console.log(`content of basket=>`, basket);

	const addToBasket = () => {
		dispatch({
			type: 'ADD_TO_BASKET',
			item: {
				id: id,
				title: title,
				img: img,
				price: price,
				rating: rating
			}
		});
	};
	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>{' '}
				[7,7,7]
				<div className="product__rating">{Array(rating).fill().map((_, i) => <p>🌟</p>)}</div>
			</div>

			<img src={img} alt="" height="200px" />

			<button onClick={addToBasket}>Add to Basket</button>
		</div>
	);
}

export default Product;
