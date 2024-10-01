import React from "react";
import {MenuItemsList} from "./MenuItemsList";

export const Menu: React.FC = () => {

	return (
		<nav className="uk-navbar-container">
			<div className="uk-container">
				<div className={'uk-navbar'}>

					<MenuItemsList></MenuItemsList>

				</div>
			</div>
		</nav>
	)
}
