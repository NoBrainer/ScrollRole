import {HEADER_COMPONENTS} from "common/Constants";
import Paragraphs from "components/rules/Paragraphs";
import RulesSection from "components/rules/RulesSection";
import {isEmpty} from "lodash";
import PropTypes from "prop-types";
import React from "react";

function Description(props) {
	const {headerText, description, headerComponent} = props;
	if (isEmpty(description)) return null;

	return (
		<RulesSection headerText={headerText} headerComponent={headerComponent}>
			<Paragraphs paragraphs={description}/>
		</RulesSection>
	);
}

export const DescriptionPropType = PropTypes.arrayOf(PropTypes.string);

Description.defaultProps = {
	headerText: "Description",
};

Description.propTypes = {
	headerText: PropTypes.string,
	description: DescriptionPropType,
	headerComponent: PropTypes.oneOf(HEADER_COMPONENTS),
};

export default Description