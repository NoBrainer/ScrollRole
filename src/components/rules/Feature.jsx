import {HEADER_COMPONENTS} from "common/Constants";
import {DescriptionPropType} from "components/rules/Description";
import Paragraphs from "components/rules/Paragraphs";
import RulesSection from "components/rules/RulesSection";
import PropTypes from "prop-types";
import React from "react";

function Feature(props) {
	const {name, description, headerComponent, key} = props;
	const otherProps = {headerComponent, key};

	return (
		<RulesSection headerText={name} {...otherProps}>
			<Paragraphs paragraphs={description}/>
		</RulesSection>
	);
}

export const FeaturePropType = PropTypes.shape({
	name: PropTypes.string.isRequired,
	description: DescriptionPropType,
	shortDescription: PropTypes.string,
	headerComponent: PropTypes.oneOf(HEADER_COMPONENTS),
	key: PropTypes.string,
});

Feature.propTypes = FeaturePropType;

export default Feature