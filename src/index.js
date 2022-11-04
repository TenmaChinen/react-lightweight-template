// REACT 18

import { createRoot } from "react-dom/client";
import React, { Fragment } from "react";
import { NavBar } from "./components/NavBar";
import "./index.css";

function App() {
	return (
		<Fragment>
			<NavBar />
			<main>
				<h1>React Template</h1>
			</main>
		</Fragment>
	);
}

const app = document.getElementById("app");
const root = createRoot(app);

root.render(<App />);
