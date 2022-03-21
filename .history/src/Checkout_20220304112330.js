import React from 'react';
import './Checkout.css';

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
					<h4 className="checkout__greeting">
						Hello, get <span className="checkout__gift">$60 Amazon Gift Card instantly</span> upon approval
						for the <bold>Amazon Prime Rewards Visa Card</bold>
					</h4>
					<h2 className="checkout_tittle">Your shopping cart</h2>
				</div>
			</div>
		</div>
	);
}

export default Checkout;
