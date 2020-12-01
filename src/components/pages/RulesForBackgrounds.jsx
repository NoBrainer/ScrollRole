import {Container, Grid, Paper, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {PAPER_STYLES, WRAPPER_STYLES} from "common/Defaults";
import Background from "components/rules/Background";
import React from "react";
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
	paper: PAPER_STYLES,
	wrapper: WRAPPER_STYLES,
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

	const renderLoadingPlaceholder = () => {
		return (<Paper className={classes.paper}>[Loading...]</Paper>);
	};

	const renderBackground = (background, i) => {
		return (<Background key={i} background={background} summaryId={`background-panel-header-${i}`}/>);
	};

	return (
		<Grid container direction="column">
			<Paper className={classes.paper}>
				<Typography component="h1" variant="h4" display="block">Backgrounds</Typography>
			</Paper>
			<Container className={classes.wrapper}>
				{renderBackgrounds()}
			</Container>
		</Grid>
	);
}

export default RulesForBackgrounds