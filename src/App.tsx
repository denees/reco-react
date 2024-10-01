import React from 'react';
import './styles/uikit.min.css';
import './App.css';
import { Menu } from "./components/menu/Menu";
import { Table } from "./components/table/Table";
import { Drawer } from './components/drawer/Drawer';


function App() {
	return (
		<div className="reco-app">

			<h3>App Inventory</h3>

			<Menu></Menu>

			<Table></Table>

			<Drawer></Drawer>

		</div>
	);
}

export default App;
