import React from "react";

export const Row: React.FC = () => {

	return (
		<tr>
			<td onClick={openDrawer}>
				<span className={'app-logo'}></span> {/*Name*/}
			</td>
			<td>
				{/*Category*/}
			</td>
			<td>
				{/*Connector*/}
			</td>
		</tr>
)
}
