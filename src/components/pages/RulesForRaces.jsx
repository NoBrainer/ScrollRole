import {Grid, Paper, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {PAPER_STYLES} from "common/Defaults";
import BasicWrapper from "components/rules/BasicWrapper";
import Race from "components/rules/Race";
import React from "react";
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
	paper: PAPER_STYLES,
}));

function RulesForRaces() {
	const classes = useStyles();
	const rulesList = useSelector((state) => state.rules.rulesList);
	const currentRules = rulesList.length > 0 ? rulesList[0] : {};
	const currentRaces = currentRules.races;

	const renderRaces = () => {
		if (!currentRaces) return renderLoadingPlaceholder();
		return currentRaces.map(renderRace);
	};

	const renderRace = (race, i) => {
		return (<Race key={i} race={race} summaryId={`race-panel-header-${i}`}/>);
	};

	const renderLoadingPlaceholder = () => {
		return (<Paper className={classes.paper}>[Loading...]</Paper>);
	};

	return (
		<Grid container direction="column">
			<Paper className={classes.paper}>
				<Typography component="h1" variant="h4" display="block">Races</Typography>
			</Paper>
			<BasicWrapper margin="bottom">
				{renderRaces()}
			</BasicWrapper>
		</Grid>
	);
}

export default RulesForRaces