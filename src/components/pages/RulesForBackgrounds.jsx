import {Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {PAPER_STYLES} from "common/Defaults";
import React from "react";
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
	paper: PAPER_STYLES,
}));

function RulesForBackgrounds() {
	const classes = useStyles();
	const rulesList = useSelector((state) => state.rules.rulesList);

	//TODO: Use these rules
	console.log(rulesList);

	const renderPaperContent = () => {
		if (!rulesList) return `[Loading...]`;
		return `[Rules Customizer - Backgrounds - UNDER CONSTRUCTION]`;
	};

	return (<Paper className={classes.paper}>{renderPaperContent()}</Paper>);
}

export default RulesForBackgrounds