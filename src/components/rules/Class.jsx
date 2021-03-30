import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {ExpandMore} from "@material-ui/icons";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
	details: {
		flexDirection: "column",
	},
}));

function Class(props) {
	const classes = useStyles();
	const {clazz, summaryId} = props;
	const {name} = clazz; //TODO: implement other fields

	return (
		<Accordion>
			<AccordionSummary expandIcon={<ExpandMore/>} aria-controls="class-panel-content" id={summaryId}>
				<Typography component="h2" variant="h2">{name}</Typography>
			</AccordionSummary>
			<AccordionDetails className={classes.details}>
				<Typography>[UNDER CONSTRUCTION]</Typography>
			</AccordionDetails>
		</Accordion>
	);
}

export const ClassPropType = PropTypes.shape({
	name: PropTypes.string.isRequired,
	description: PropTypes.arrayOf(PropTypes.string),
});

Class.propTypes = {
	clazz: ClassPropType.isRequired,
	summaryId: PropTypes.string.isRequired,
};

export default Class