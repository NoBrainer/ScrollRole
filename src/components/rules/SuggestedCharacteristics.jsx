import {Typography} from "@material-ui/core";
import BasicList from "components/rules/BasicList";
import BasicWrapper from "components/rules/BasicWrapper";
import Paragraphs from "components/rules/Paragraphs";
import RulesSection from "components/rules/RulesSection";
import {isEmpty} from "lodash";
import PropTypes from "prop-types";
import React from "react";

function SuggestedCharacteristics(props) {
	const {suggestedCharacteristics} = props;
	if (isEmpty(suggestedCharacteristics)) return null;

	const {description, personalityTraits, ideals, bonds, flaws} = suggestedCharacteristics;

	const renderSection = (title, items) => {
		if (isEmpty(items)) return null;
		return (
			<BasicWrapper margin="top">
				<Typography component="h4" variant="h4">{title}</Typography>
				<BasicList items={items} ordered={true}/>
			</BasicWrapper>
		);
	};

	return (
		<RulesSection headerText="Suggested Characteristics">
			<Paragraphs paragraphs={description}/>
			<BasicWrapper margin="left">
				{renderSection("Personality Traits", personalityTraits)}
				{renderSection("Ideals", ideals)}
				{renderSection("Bonds", bonds)}
				{renderSection("Flaws", flaws)}
			</BasicWrapper>
		</RulesSection>
	);
}

export const SuggestedCharacteristicsPropType = PropTypes.shape({
	bonds: PropTypes.arrayOf(PropTypes.string).isRequired,
	description: PropTypes.arrayOf(PropTypes.string).isRequired,
	flaws: PropTypes.arrayOf(PropTypes.string).isRequired,
	ideals: PropTypes.arrayOf(PropTypes.string).isRequired,
	personalityTraits: PropTypes.arrayOf(PropTypes.string).isRequired,
});

SuggestedCharacteristics.propTypes = {
	suggestedCharacteristics: SuggestedCharacteristicsPropType,
};

export default SuggestedCharacteristics