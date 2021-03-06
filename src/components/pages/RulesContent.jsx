import {Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {PAPER_STYLES} from "common/Defaults";
import {usePageState} from "common/PageState";
import React from "react";
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
	paper: PAPER_STYLES,
}));

function RulesContent() {
	const classes = useStyles();
	const [pageState] = usePageState();
	const rulesList = useSelector((state) => state.rules.rulesList);

	//TODO: Use these rules
	console.log(rulesList);

	const renderPaperContent = () => {
		if (!rulesList) return `[Loading...]`;
		if (pageState.sectionId) return `[Rules Customizer - ${pageState.sectionId} - UNDER CONSTRUCTION]`;
		return `[Rules Customizer - UNDER CONSTRUCTION]`;
	};

	return (<Paper className={classes.paper}>{renderPaperContent()}</Paper>);
}

export default RulesContent