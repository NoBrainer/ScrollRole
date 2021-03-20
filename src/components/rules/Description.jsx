import Paragraphs from "components/rules/Paragraphs";
import RulesSection from "components/rules/RulesSection";
import {isEmpty} from "lodash";
import PropTypes from "prop-types";
import React from "react";

function Description(props) {
	const {description, titleOverride} = props;
	if (isEmpty(description)) return null;

	return (
		<RulesSection headerText={titleOverride || "Description"}>
			<Paragraphs paragraphs={description}/>
		</RulesSection>
	);
}

export const DescriptionPropType = PropTypes.arrayOf(PropTypes.string);

Description.propTypes = {
	description: DescriptionPropType,
	titleOverride: PropTypes.string,
};

export default Description