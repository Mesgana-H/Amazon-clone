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
						price="9.99"
						rating={5}
						img="https://www.amazon.com/Fitwarm-Lightweight-Turtleneck-One-Piece-Birthday/dp/B09CYKPGXJ?ref_=ast_sto_dp&th=1&psc=1"
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
