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
				<div className="home__row__large">
					<div className="home__row__large_ext">
						<img
							src="https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/a9f986a7-51c8-49c5-af3d-97d44c26bb8c._CR0,0,1200,628_SX860_QL70_.jpg"
							alt=""
						/>
					</div>
					<div className="home__row">
						<Product
							id="4123"
							title="Furinno JAYA Large Entertainment Stand for TV Up to 55 Inch, Blackwood "
							price="43.30"
							rating={5}
							img="https://m.media-amazon.com/images/I/51BXyAlNmMS._AC_SX679_.jpg"
						/>
						<Product
							id="123"
							title="Furinno Econ TV Stand Entertainment Center, Espresso"
							price="40.13"
							rating={5}
							img="https://m.media-amazon.com/images/I/61tWhVDAOBL._AC_SL1500_.jpg"
						/>
					</div>
				</div>
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
					<Product
						id="2334"
						title="Just Go to Bed (Little Critter) (Pictureback(R))"
						price="3.99"
						rating={4}
						img="https://m.media-amazon.com/images/I/81iZ7zdaa9L._AC_UL640_FMwebp_QL65_.jpg"
					/>
					<Product
						id="2334"
						title="The Forgotten Horse - Book 1 in the Connemara Horse Adventure Series for Kids. The perfect gift for children age 8-12"
						price="11.99"
						rating={4}
						img="https://m.media-amazon.com/images/I/61RW+yY3nbL._AC_UL640_FMwebp_QL65_.jpg"
					/>
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
