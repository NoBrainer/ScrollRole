import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {ExpandMore} from "@material-ui/icons";
import {PAPER_STYLES} from "common/Defaults";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
	accordion: {},
	paper: PAPER_STYLES,
}));

function Background(props) {
	const classes = useStyles();

	//TODO: populate the entire structure
	return (
		<Accordion className={classes.accordion}>
			<AccordionSummary expandIcon={<ExpandMore/>} aria-controls="background-panel-content" id={props.summaryId}>
				<Typography component="h2" variant="h5">{props.background.name}</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography>[UNDER CONSTRUCTION]</Typography>
			</AccordionDetails>
		</Accordion>
	);
}

Background.propTypes = {
	background: PropTypes.object.isRequired,
	summaryId: PropTypes.string.isRequired,
};

export default Background