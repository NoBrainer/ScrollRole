import Paragraphs from "components/rules/Paragraphs";
import RulesSection from "components/rules/RulesSection";
import PropTypes from "prop-types";
import React from "react";

function AbilityScoreAdjustment(props) {
	const {abilityScoreAdjustments} = props;

	const renderAbilityScoreAdjustment = (abilityScoreAdjustment) => {
		const sign = abilityScoreAdjustment.modifier > 0 ? "+" : "";
		return `${abilityScoreAdjustment.ability} ${sign}${abilityScoreAdjustment.modifier}`;
	};

	return (
		<RulesSection headerText={"Ability Score Adjustment"}>
			<Paragraphs paragraphs={abilityScoreAdjustments.map(renderAbilityScoreAdjustment)}/>
		</RulesSection>
	);
}

export const AbilityScoreAdjustmentPropType = PropTypes.shape({
	ability: PropTypes.string.isRequired,
	modifier: PropTypes.number.isRequired,
});

export default AbilityScoreAdjustment;