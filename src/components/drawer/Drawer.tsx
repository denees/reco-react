import React from "react";
import {Header} from "./Header";
import {UsersList} from "./UsersList";

export const Drawer: React.FC = () => {

	return (
		<div>

			<div id="offcanvas-overlay" uk-offcanvas="overlay: true">
				<div className="uk-offcanvas-bar">

					<button className="uk-offcanvas-close" type="button" uk-close></button>

					<h4>App overview</h4>

					<Header></Header>

					<h4>Username</h4>

					<UsersList></UsersList>

				</div>
			</div>

		</div>
	)
}
