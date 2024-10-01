import React from "react";
import {Rows} from "./Rows";

export const Table: React.FC = () => {

	return (
		<table className="uk-table">
			<thead>
				<tr>
					<th>
						Name <span className={'filter name-filter'}></span>
					</th>
					<th>
						Category <span className={'filter category-filter'}></span>
					</th>
					<th>
						Connector <span className={'filter connector-filter'}></span>
					</th>
				</tr>
			</thead>
			<tbody>
				<Rows itemsToShow={} sortBy={}>

				</Rows>
			</tbody>
		</table>
	)
}
