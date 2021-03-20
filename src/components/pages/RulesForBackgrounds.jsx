import {Grid, Paper, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {PAPER_STYLES} from "common/Defaults";
import Background from "components/rules/Background";
import BasicWrapper from "components/rules/BasicWrapper";
import React from "react";
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
	paper: PAPER_STYLES,
}));

function RulesForBackgrounds() {
	const classes = useStyles();
	const rulesList = useSelector((state) => state.rules.rulesList);
	const currentRules = rulesList.length > 0 ? rulesList[0] : {};
	const currentBackgrounds = currentRules.backgrounds;

	const renderBackgrounds = () => {
		if (!currentBackgrounds) return renderLoadingPlaceholder();
		return currentBackgrounds.map(renderBackground);
	};

	const renderBackground = (background, i) => {
		return (<Background key={i} background={background} summaryId={`background-panel-header-${i}`}/>);
	};

	const renderLoadingPlaceholder = () => {
		return (<Paper className={classes.paper}>[Loading...]</Paper>);
	};

	return (
		<Grid container direction="column">
			<Paper className={classes.paper}>
				<Typography component="h1" variant="h4" display="block">Backgrounds</Typography>
			</Paper>
			<BasicWrapper margin="bottom">
				{renderBackgrounds()}
			</BasicWrapper>
		</Grid>
	);
}

export default RulesForBackgrounds