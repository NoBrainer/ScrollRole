import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {ExpandMore} from "@material-ui/icons";
import Choices, {ChoicesPropType} from "components/rules/Choices";
import Description from "components/rules/Description";
import Equipment, {EquipmentPropType} from "components/rules/Equipment";
import Features, {FeaturesPropType} from "components/rules/Features";
import Proficiencies, {ProficiencyPropType} from "components/rules/Proficiencies";
import SuggestedCharacteristics, {SuggestedCharacteristicsPropType} from "components/rules/SuggestedCharacteristics";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
	details: {
		flexDirection: "column",
	},
}));

function Background(props) {
	const classes = useStyles();
	const {background, summaryId} = props;
	const {choices, description, equipment, features, name, proficiencies, suggestedCharacteristics} = background;

	return (
		<Accordion>
			<AccordionSummary expandIcon={<ExpandMore/>} aria-controls="background-panel-content" id={summaryId}>
				<Typography component="h2" variant="h5">{name}</Typography>
			</AccordionSummary>
			<AccordionDetails className={classes.details}>
				<Description description={description}/>
				<Features features={features}/>
				<SuggestedCharacteristics suggestedCharacteristics={suggestedCharacteristics}/>
				<Equipment equipment={equipment}/>
				<Proficiencies proficiencies={proficiencies}/>
				<Choices choices={choices}/>
			</AccordionDetails>
		</Accordion>
	);
}

export const BackgroundPropType = PropTypes.shape({
	name: PropTypes.string.isRequired,
	description: PropTypes.arrayOf(PropTypes.string),
	features: FeaturesPropType,
	suggestedCharacteristics: SuggestedCharacteristicsPropType,
	equipment: PropTypes.arrayOf(EquipmentPropType),
	proficiencies: PropTypes.arrayOf(ProficiencyPropType),
	choices: ChoicesPropType,
});

Background.propTypes = {
	background: BackgroundPropType.isRequired,
	summaryId: PropTypes.string.isRequired,
};

export default Background