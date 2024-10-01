import React from "react";
import logo from './logo.svg';
import {MenuItem} from "./MenuItem";

const types: Record<string, string> = {
	simple: 'simple',
	dropdown: 'dropdown'
}

const itemsList = [
	{url: '#', name: 'Apps'},
	{url: '#', name: 'Data'},
	{url: '#', name: 'Identities'},
	{url: '#', name: 'Alerts'},
	{url: '#', name: 'Investigation Center'},
	{url: '#', name: 'Configurations'},
	{url: '#', name: 'Security-Demo 2'}
]

export const MenuItemsList: React.FC = () => {

	return (
		<div>
			<div className="uk-navbar-left">

				<a className="uk-navbar-item uk-logo" href="#" aria-label="Back to Home">{logo}</a>

				<MenuItem url={} name={} type={}></MenuItem>

			</div>

			<div className="uk-navbar-right">

				<ul className="uk-navbar-nav">
					<li>
						<a href="#"><span className={'avatar'}></span> Security-Demo 2 <span uk-navbar-parent-icon></span></a>
						<div className="uk-navbar-dropdown">
							<ul className="uk-nav uk-navbar-dropdown-nav">
							</ul>
						</div>
					</li>
				</ul>

			</div>
		</div>
	)
}
