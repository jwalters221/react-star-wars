import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.jsx";

import { Home } from "./views/home.jsx";
import { Demo } from "./views/demo.jsx";
import { Single } from "./views/single.jsx";
import { Details } from "./views/details.jsx";
import { PlanetDetails } from "./views/planet_details.jsx";
import Store from "./store/appContext.jsx";

import { Navbar } from "./component/navbar.jsx";

//create your first component
export class Layout extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<div>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/demo" component={Demo} />
							<Route path="/single/:theid" component={Single} />
							<Route path="/details/:theid" component={Details} />
							<Route
								path="/planet_details/:theid"
								component={PlanetDetails}
							/>
							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
					</div>
				</ScrollToTop>
			</BrowserRouter>
		);
	}
}

export default Store(Layout);
