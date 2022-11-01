// REACT 18

import { createRoot } from "react-dom/client";
import React, { Component } from "react";

// Class Based Component

class App extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
				<h1>Class Based Component</h1>
		);
	}
}

// Function Based Component
/*function App(){
	return (
		<h1>Function Based Component</h1>
		);
}*/

const app = document.getElementById("app");
const root = createRoot(app);

root.render(<ClassComponent />);
//root.render(<FunctionComponent />);
