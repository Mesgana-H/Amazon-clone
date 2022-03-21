import React from 'react';

const Header = () => {
	return (
		<div className="header">
			<img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />

			<div className="header__Search">
				<input className="header__searchInput" type="text" />
			</div>
			<div className="header__nav">
				<div className="header__option">
					<span className="header__optionLineOne">Hello</span>
					<span className="header__optionLineTwo">& Orders</span>
				</div>
				<div className="header__option">
					<span className="header__optionLineOne">Returns</span>
					<span className="header__optionLineTwo">& Orders</span>
				</div>
				<div className="header__option">
					<span className="header__optionLineOne">Hello</span>
					<span className="header__optionLineTwo">& Orders</span>
				</div>
			</div>
		</div>
	);
};
