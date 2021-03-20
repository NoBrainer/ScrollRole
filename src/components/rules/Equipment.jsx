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

export const EquipmentPropType = PropTypes.string;

Equipment.propTypes = {
	equipment: PropTypes.arrayOf(EquipmentPropType),
};

export default Equipment