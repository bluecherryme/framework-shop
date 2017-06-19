import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import router from './router';
import "./index.css";

import store from "./store";


import App from "./components/App";

ReactDOM.render(
	<Router>
		<Provider store={ store }>
			<App />
		</Provider>
	</Router>,
	document.getElementById( "root" )
);
