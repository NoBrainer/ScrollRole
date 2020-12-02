import {makeStyles} from "@material-ui/core/styles";
import {LIST_STYLES} from "common/Defaults";
import RulesSection from "components/rules/RulesSection";
import {isEmpty} from "lodash";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
	list: LIST_STYLES,
}));

function Equipment(props) {
	const classes = useStyles();
	const {equipment} = props;

	if (isEmpty(equipment)) return null;

	const renderEquipment = () => {
		return (<ul className={classes.list}>
			{equipment.map((item, i) => {
				return (<li key={i}>{item}</li>);
			})}
		</ul>);
	};

	return (
		<RulesSection headerText="Starting Equipment" children={renderEquipment()}/>
	);
}

Equipment.propTypes = {
	equipment: PropTypes.arrayOf(PropTypes.string),
};

export default Equipment