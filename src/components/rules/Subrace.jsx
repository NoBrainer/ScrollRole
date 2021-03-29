import AbilityScoreAdjustments, {AbilityScoreAdjustmentsPropType} from "components/rules/AbilityScoreAdjustments";
import BasicWrapper from "components/rules/BasicWrapper";
import Choices, {ChoicesPropType} from "components/rules/Choices";
import Description, {DescriptionPropType} from "components/rules/Description";
import Features, {FeaturesPropType} from "components/rules/Features";
import Proficiencies, {ProficienciesPropType} from "components/rules/Proficiencies";
import RulesSection from "components/rules/RulesSection";
import PropTypes from "prop-types";
import React from "react";

function Subrace(props) {
	const {name, description, abilityScoreAdjustments, features, proficiencies, choices, key} = props;
	const otherProps = {key};

	return (
		<RulesSection headerText={`Subrace Option: ${name}`} {...otherProps}>
			<BasicWrapper margin={'left'}>
				<Description description={description} headerComponent={"h4"}/>
				<AbilityScoreAdjustments abilityScoreAdjustments={abilityScoreAdjustments} headerComponent={"h4"}/>
				<Features features={features} headerComponent={"h4"}/>
				<Proficiencies proficiencies={proficiencies} headerComponent={"h4"}/>
				<Choices choices={choices} headerComponent={"h4"}/>
			</BasicWrapper>
		</RulesSection>
	);
}

export const SubracePropType = PropTypes.shape({
	name: PropTypes.string.isRequired,
	description: DescriptionPropType,
	abilityScoreAdjustments: AbilityScoreAdjustmentsPropType,
	features: FeaturesPropType,
	proficiencies: ProficienciesPropType,
	choices: ChoicesPropType,
	key: PropTypes.string,
});

Subrace.propTypes = {
	subrace: SubracePropType,
	summaryId: PropTypes.string.isRequired,
};

export default Subrace