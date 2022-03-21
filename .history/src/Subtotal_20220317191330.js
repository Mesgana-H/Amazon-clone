import React from 'react';
import './Subtotal.css';

import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './Reducer';
// import { useHistory } from "react-router-dom";
import { Link, useNavigate } from 'react-router-dom';

function Subtotal() {
	const navigate = useNavigate();
	const [ { basket }, dispatch ] = useStateValue();
	// const getBasketTotal = (basket) =>
	// basket?.reduce((amount, item) => item.price + amount, 0);

	// console.log(basket[0]?.price + basket[1]?.price);

	// function getBasketTotal(basket) {
	//   let sum = 0;
	//   for (let i = 0; i < basket?.length; i++) {
	//     sum += parseInt(basket[i]?.price);
	//   }
	//   console.log(sum);
	//   return sum;
	// }
	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<div>
						{console.log(value)}
						<p>
							Subtotal ({basket.length} items): <strong>{value}</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" /> This order contains a gift
						</small>
					</div>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'$'}
			/>

			<button onClick={(e) => navigate('/payment')}>Proceed to Checkout</button>
		</div>
	);
}

export default Subtotal;
