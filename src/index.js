import React, { Component } from "react";
import { createRoot } from "react-dom/client";

// Class Based Component

class ClassComponent extends Component{
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
function FunctionComponent(){
	return (
		<h1>Function Based Component</h1>
		);
}

const app = document.getElementById("app");
const root = createRoot(app);

root.render(<ClassComponent />); // OK
// root.render(ClassComponent()); // NO ( it's a class )

// root.render(<FunctionComponent />); // OK
// root.render(FunctionComponent()); // OK
