import BasicList from "components/rules/BasicList";
import RulesSection from "components/rules/RulesSection";
import {isEmpty} from "lodash";
import PropTypes from "prop-types";
import React from "react";

function Proficiencies(props) {
	const {proficiencies} = props;
	if (isEmpty(proficiencies)) return null;

	const renderProficiency = (proficiency) => {
		const {name, type} = proficiency;
		return `${type}: ${name}`;
	};

	return (
		<RulesSection headerText="Proficiencies">
			<BasicList items={proficiencies.map(renderProficiency)}/>
		</RulesSection>
	);
}

export const ProficiencyPropType = PropTypes.shape({
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
});

export const ProficienciesPropType = PropTypes.arrayOf(ProficiencyPropType);

Proficiencies.propTypes = {
	proficiencies: ProficienciesPropType,
};

export default Proficiencies