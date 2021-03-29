import {HEADER_COMPONENTS} from "common/Constants";
import BasicList from "components/rules/BasicList";
import RulesSection from "components/rules/RulesSection";
import {isEmpty} from "lodash";
import PropTypes from "prop-types";
import React from "react";

function Equipment(props) {
	const {equipment, headerComponent} = props;
	if (isEmpty(equipment)) return null;

	return (
		<RulesSection headerText="Starting Equipment" headerComponent={headerComponent}>
			<BasicList items={equipment}/>
		</RulesSection>
	);
}

export const EquipmentPropType = PropTypes.string;

Equipment.propTypes = {
	equipment: PropTypes.arrayOf(EquipmentPropType),
	headerComponent: PropTypes.oneOf(HEADER_COMPONENTS),
};

export default Equipment