import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {ExpandMore} from "@material-ui/icons";
import {PAPER_STYLES} from "common/Defaults";
import Description from "components/rules/Description";
import Equipment from "components/rules/Equipment";
import Features from "components/rules/Features";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
	details: {
		flexDirection: "column",
	},
	paper: PAPER_STYLES,
}));

function Background(props) {
	const classes = useStyles();
	const {background, summaryId} = props;
	const {description, equipment, features, name} = background;

	//TODO: populate the entire structure
	console.log(background);

	return (
		<Accordion>
			<AccordionSummary expandIcon={<ExpandMore/>} aria-controls="background-panel-content" id={summaryId}>
				<Typography component="h2" variant="h5">{name}</Typography>
			</AccordionSummary>
			<AccordionDetails className={classes.details}>
				<Description description={description}/>
				<Features features={features}/>
				<Equipment equipment={equipment}/>
			</AccordionDetails>
		</Accordion>
	);
}

Background.propTypes = {
	background: PropTypes.object.isRequired,
	summaryId: PropTypes.string.isRequired,
};

export default Background