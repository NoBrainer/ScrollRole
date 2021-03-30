import {Grid, Paper, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {PAPER_STYLES} from "common/Defaults";
import BasicWrapper from "components/rules/BasicWrapper";
import Class from "components/rules/Class";
import React from "react";
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
	paper: PAPER_STYLES,
}));

function RulesForClasses() {
	const classes = useStyles();
	const rulesList = useSelector((state) => state.rules.rulesList);
	const currentRules = rulesList.length > 0 ? rulesList[0] : {};
	const {classes: currentClasses} = currentRules;

	const renderClasses = () => {
		if (!currentClasses) return renderLoadingPlaceholder();
		return currentClasses.map(renderClass);
	};
	const renderClass = (clazz, i) => {
		return (<Class key={i} clazz={clazz} summaryId={`class-panel-header-${i}`}/>);
	};
	const renderLoadingPlaceholder = () => {
		return (<Paper className={classes.paper}>[Loading Classes...]</Paper>);
	};

	return (
		<Grid container direction="column">
			<Paper className={classes.paper}>
				<Typography component="h1" variant="h1" display="block">Classes</Typography>
			</Paper>
			<BasicWrapper margin="bottom">
				{renderClasses()}
			</BasicWrapper>
		</Grid>
	);
}

export default RulesForClasses