import Paragraphs from "components/rules/Paragraphs";
import {ProficiencyPropType} from "components/rules/Proficiencies";
import RulesSection from "components/rules/RulesSection";
import PropTypes from "prop-types";
import React from "react";

function Condition(props) {
	const {level, feature, proficiency} = props;
	//TODO: implement
	return (
		<RulesSection headerText={"Condition"}>
			<Paragraphs paragraphs={"[Condition Placeholder]"}/>
		</RulesSection>
	);
}

export const ConditionPropType = PropTypes.shape({
	level: PropTypes.number,
	feature: PropTypes.string,
	proficiency: ProficiencyPropType,
});

Condition.propTypes = ConditionPropType;

export default Condition