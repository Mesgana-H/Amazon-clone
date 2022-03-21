import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://m.media-amazon.com/images/I/611w8CPT7GL._SX3000_.jpg"
					alt=""
				/>
				<div className="home__row">
					<Product
						id="123"
						title="Wurmenin Pet Clothes Hoodie Cute Frog Shape Dog Basic Sweater Coat Cat Warm Jacket Puppy Costume Winter Fleece Outfit"
						price=""
					/>
				</div>
				<div className="home__row">
					<Product />
					<Product />
				</div>
				<div className="home__row">
					<Product />
					<Product />
					<Product />
				</div>
				<div className="home__row">
					<Product />
					<Product />
					<Product />
					<Product />
				</div>
			</div>
		</div>
	);
}

export default Home;
