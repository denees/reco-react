import React from "react";

export type MenuItemTypes = {
	type: string;
}

export type MenuItemProps = {
	url: string,
	name: string,
	type: MenuItemTypes
}

export const MenuItem: React.FC<MenuItemProps> = ({url, name, type}) => {

	return (
		<div>
			) if (type == 'simple') {
			<li>
				<a href={url}>{name}</a>
			</li>
		} else if (type == 'dropdown')
			(
			<ul className="uk-navbar-nav">
				<li>
					<a href={url}>{name} <span className={'uk-navbar-parent-icon'}></span></a>
					<div className="uk-navbar-dropdown">
						<ul className="uk-nav uk-navbar-dropdown-nav"></ul>
					</div>
				</li>
			</ul>
		</div>
	)
}
