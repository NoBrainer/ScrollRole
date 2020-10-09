import {Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {PAPER_STYLES} from "common/Defaults";
import {usePageState} from "common/State";
import React from "react";

const useStyles = makeStyles((theme) => ({
	paper: PAPER_STYLES,
}));

function CharactersContent() {
	const classes = useStyles();
	const [pageState] = usePageState();

	const renderPaperContent = () => {
		if (pageState.sectionId) return `[Character Builder - ${pageState.sectionId} - UNDER CONSTRUCTION]`;
		return `[Character Builder - UNDER CONSTRUCTION]`;
	};

	return (<Paper className={classes.paper}>{renderPaperContent()}</Paper>);
}

export default CharactersContent