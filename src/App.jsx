import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages";
import ReactGa from "react-ga";
import { useEffect } from "react";

function App() {
	useEffect(() => {
		ReactGa.initialize("UA-205495522-2");

		ReactGa.pageview("/");
	}, []);

	return (
		<Router>
			<Route path="/" component={Home} exact />
		</Router>
	);
}

export default App;
