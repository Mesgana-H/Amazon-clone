import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

import Subtotal from './Subtotal';
import { getBasketTotal } from './Reducer';

function Checkout() {
	const [ { basket, user }, dispatch ] = useStateValue();

	const costSaving = () => {
		let cost = getBasketTotal(basket).toFixed(2);
		let costAfterSaving = 0;
		let remaining = 0;
		if (cost > 70) {
			costAfterSaving = cost - 70;
		} else if (cost <= 70) {
			costAfterSaving = 0;
			remaining = 70 - cost;
		}
		return [ remaining, costAfterSaving ];
	};
	const [ remaining, costAfterSaving ] = costSaving();
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
								<strong>{costAfterSaving.toFixed(2)}</strong>
							</p>
						</div>
						<div className="indent">
							<p>
								<strong>Savings Remaining: </strong>
							</p>
							<p>
								<strong>${remaining.toFixed(2)}</strong>
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
				<h3>Hello, {user.email}</h3>
				<h2>Your shopping Basket</h2>
				<hr className="checkout__title_hr" />

				{basket.map((item) => (
					<CheckoutProduct
						// {...item}
						id={item.id}
						title={item.title}
						img={item.img}
						price={item.price}
						rating={item.rating}
					/>
				))}
			</div>
		</div>
	);
}

export default Checkout;