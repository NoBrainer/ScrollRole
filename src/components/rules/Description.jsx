import {Typography} from "@material-ui/core";
import RulesSection from "components/rules/RulesSection";
import {isEmpty} from "lodash";
import PropTypes from "prop-types";
import React from "react";

function Description(props) {
	const {description} = props;

	if (isEmpty(description)) return null;

	const renderDescription = () => {
		return description.map((paragraph, i) => {
			return (<Typography key={i} paragraph={true}>{paragraph}</Typography>);
		});
	};

	return (
		<RulesSection headerText="Description" children={renderDescription()}/>
	);
}

Description.propTypes = {
	description: PropTypes.arrayOf(PropTypes.string),
};

export default Description