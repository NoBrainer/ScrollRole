import {makeStyles} from "@material-ui/core/styles";
import {LIST_STYLES} from "common/Defaults";
import RulesSection from "components/rules/RulesSection";
import {isEmpty} from "lodash";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
	list: LIST_STYLES,
}));

function Proficiencies(props) {
	const classes = useStyles();
	const {proficiencies} = props;

	if (isEmpty(proficiencies)) return null;

	const renderProficiencies = () => {
		return (<ul className={classes.list}>
			{proficiencies.map((proficiency, i) => {
				const {name, type} = proficiency;
				return (<li key={i}>{`${name} (${type})`}</li>);
			})}
		</ul>);
	};

	return (
		<RulesSection headerText="Proficiencies" children={renderProficiencies()}/>
	);
}

Proficiencies.propTypes = {
	proficiencies: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired,
		})
	),
};

export default Proficiencies