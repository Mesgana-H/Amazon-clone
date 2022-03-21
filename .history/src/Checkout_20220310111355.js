import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

import Subtotal from './Subtotal';
import { getBasketTotal } from './Reducer';

function Checkout() {
	const [ { basket }, dispatch ] = useStateValue();
	return (
		<div>
			<div className="checkout">
				<div className="checkout__left">
					<img
						className="checkout__ad"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI8esOeEaVPv-uH2d4YMceQLwO9jYp875dayPcVDyilAiDuz8ghu8Ga0SlOqPb4rjnKxY&usqp=CAU"
						alt=""
					/>
					<div className="checkout_summary">
						<h5 className="checkout__greeting">
							Hello, get <span className="checkout__gift">$60 Amazon Gift Card instantly</span> upon
							approval for the <span className="checkout__prime">Amazon Prime Rewards Visa Card</span>
						</h5>
						<div className="indent">
							<p>Current Total:</p> <p>${getBasketTotal(basket).toFixed(2)}</p>
						</div>
						<div className="indent ">
							<p>
								<strong>Savings: </strong>
							</p>
							<p className="savings_underline">
								<strong>-$70.00 </strong>
							</p>
						</div>
						<div className="indent">
							<p className="red">
								<strong>Cost After Saving:</strong>{' '}
							</p>
							<p className="red">
								<strong>{Math.abs(parseInt(70 - getBasketTotal(basket)))}</strong>
							</p>
						</div>
						<div className="indent">
							<p>
								<strong>Savings Remaining: </strong>
							</p>
							<p>
								<strong>$16.00</strong>
							</p>
						</div>
					</div>
					<div className="checkout__apply">
						<button className="checkout__apply_btn">Apply Now</button>
					</div>
				</div>

				<div className="checkout__right">
					<Subtotal />
				</div>
			</div>

			<div className="checkout__title">
				<h3>Hello, </h3>
				<h2>Your shopping Basket</h2>
				<hr className="checkout__title_hr" />

				{basket.map((item) => (
					<CheckoutProduct
						id={item.id}
						title={item.title}
						img={item.img}
						price={item.price}
						rating={item.rating}
					/>
					<hr></hr>
				))}
			</div>
		</div>
	);
}

export default Checkout;
