import {Grid} from "@material-ui/core";
import CharactersContent from "components/pages/CharactersContent";
import HomeContent from "components/pages/HomeContent";
import RulesContent from "components/pages/RulesContent";
import React from "react";
import {Route, Switch} from "react-router-dom";

function AppContent() {
	return (
		<main>
			<Grid container direction="row">
				<Grid item xs={false} sm={1} md={2}/>
				<Grid container item xs={12} sm={10} md={8}>
					<Switch>
						<Route path="/characters" children={<CharactersContent/>}/>
						<Route path="/rules" children={<RulesContent/>}/>
						<Route children={<HomeContent/>}/>
					</Switch>
				</Grid>
				<Grid item xs={false} sm={1} md={2}/>
			</Grid>
		</main>
	);
}

export default AppContent