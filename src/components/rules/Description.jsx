import Paragraphs from "components/rules/Paragraphs";
import RulesSection from "components/rules/RulesSection";
import {isEmpty} from "lodash";
import PropTypes from "prop-types";
import React from "react";

function Description(props) {
	const {description} = props;

	if (isEmpty(description)) return null;

	return (
		<RulesSection headerText="Description" children={
			<Paragraphs paragraphs={description}/>
		}/>
	);
}

Description.propTypes = {
	description: PropTypes.arrayOf(PropTypes.string),
};

export default Description