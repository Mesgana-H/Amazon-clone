import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
	return (
		<div className="checkout">
			<div className="checkout__left">
				<img
					className="checkout__ad"
					src="data:image/png;base64,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"
					alt=""
				/>
				<div className="checkout_summary">
					<h5 className="checkout__greeting">
						Hello, get <span className="checkout__gift">$60 Amazon Gift Card instantly</span> upon approval
						for the <span className="checkout__prime">Amazon Prime Rewards Visa Card</span>
					</h5>
					<div className="indent">
						<p>Current Total:</p> <p>$50.00</p>
					</div>
					<div className="indent ">
						<p>
							{' '}
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
							<strong>$0.00</strong>
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
					{/* <h2 className="checkout_tittle">Your shopping cart</h2> */}
				</div>
				<div className="checkout__apply">
					<button className="checkout__apply_btn">Apply Now</button>
				</div>
			</div>

			<div className="checkout__right">
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;
