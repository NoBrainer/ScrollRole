import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {ExpandMore} from "@material-ui/icons";
import Choices from "components/rules/Choices";
import Description from "components/rules/Description";
import Equipment from "components/rules/Equipment";
import Features from "components/rules/Features";
import Proficiencies from "components/rules/Proficiencies";
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
	const {
		name, hitDice, baseHitPoints, proficiencies, equipment, proficiencyBonus, spellCasting,
		abilityScoreImprovementLevels, features, choices, unlockables
	} = clazz;

	return (
		<Accordion>
			<AccordionSummary expandIcon={<ExpandMore/>} aria-controls="class-panel-content" id={summaryId}>
				<Typography component="h2" variant="h2">{name}</Typography>
			</AccordionSummary>
			<AccordionDetails className={classes.details}>
				<Description headerText={"Hit Dice"} description={[hitDice]}/>
				<Description headerText={"Base Hit Points"} description={[baseHitPoints]}/>
				<Proficiencies proficiencies={proficiencies}/>
				<Equipment equipment={equipment}/>
				<Description headerText={"Proficiency Bonus"} description={[proficiencyBonus]}/>
				<Description headerText={"Ability Score Improvement Levels"} description={["[UNDER CONSTRUCTION]"]}/>
				<Features features={features}/>
				<Choices choices={choices}/>
				<Description headerText={"Unlockables"} description={["[UNDER CONSTRUCTION]"]}/>
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