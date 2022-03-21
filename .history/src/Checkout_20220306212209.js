import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
	return (
		<div className="checkout">
			<div className="checkout__left">
				<img
					className="checkout__ad"
					src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img13/PLCC/Hero/plcc_135x85._CB485917252_.png"
					alt=""
				/>
				<div className="checkout_summary">
					<h5 className="checkout__greeting">
						Hello, get <span className="checkout__gift">$60 Amazon Gift Card instantly</span> upon approval
						for the <span className="checkout__prime">Amazon Prime Rewards Visa Card</span>
					</h5>
					div
					<p>Current Total:</p> <p className="indent">$50.00</p>
					<p>Savings: </p>
					<p className="indent">-$70.00</p>
					<p className="red">Cost After Saving: </p>
					<p className="indent">$0.00</p>
					<p>Savings Remaining: </p>
					<p className="indent">$16.00</p>
					{/* <h2 className="checkout_tittle">Your shopping cart</h2> */}
				</div>
				<div className="checkout__apply">
					<button className="checkout__apply_btn">Apply Now</button>
				</div>
			</div>

			<div>
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;
