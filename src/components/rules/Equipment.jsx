import BasicList from "components/rules/BasicList";
import RulesSection from "components/rules/RulesSection";
import {isEmpty} from "lodash";
import PropTypes from "prop-types";
import React from "react";

function Equipment(props) {
	const {equipment} = props;
	if (isEmpty(equipment)) return null;

	return (
		<RulesSection headerText="Starting Equipment">
			<BasicList items={equipment}/>
		</RulesSection>
	);
}

Equipment.propTypes = {
	equipment: PropTypes.arrayOf(PropTypes.string),
};

export default Equipment