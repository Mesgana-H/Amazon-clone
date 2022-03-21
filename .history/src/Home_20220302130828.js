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
						img="https://m.media-amazon.com/images/I/71sk7tlmkeL._AC_SX679_.jpg"
					/>
					<Product
						id="123"
						title="Wurmenin Pet Clothes Hoodie Cute Frog Shape Dog Basic Sweater Coat Cat Warm Jacket Puppy Costume Winter Fleece Outfit"
						price="9.99"
						rating={5}
						img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPjJHLsyaHQ0zzwfmxGtia9N8WCiogSVbeIw&usqp=CAU"
					/>
				</div>

				<div className="home__row">
					<Product
						id="2234"
						title="I Love You to the Moon and Back"
						price="4.31"
						rating={5}
						img="https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg"
					/>
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
