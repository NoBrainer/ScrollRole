import {makeStyles} from "@material-ui/core/styles";
import {LIST_STYLES} from "common/Defaults";
import {AbilityScoreAdjustmentsPropType} from "components/rules/AbilityScoreAdjustments";
import {FeaturesPropType} from "components/rules/Features";
import {ProficienciesPropType} from "components/rules/Proficiencies";
import {isEmpty} from "lodash";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
	list: LIST_STYLES,
}));

function ChoiceList(props) {
	const classes = useStyles();
	const {items, ordered} = props;
	if (isEmpty(items)) return null;

	const renderAbilityScoreAdjustmentItem = (item, i) => {
		const {ability, modifier} = item;
		const sign = modifier > 0 ? "+" : "";
		const text = `${ability} ${sign}${modifier}`;
		return renderStringItem(text, `AbilityScoreAdjustment-${i}`);
	};
	const renderFeatureItem = (item, i) => {
		const {name, description} = item;
		if (!description) return renderStringItem(name, `Feature-${i}`);
		return (
			<li key={`ChoiceList-Feature-${i}`}>
				<div className={"ChoiceList-FeatureText"}>{name}</div>
				<div className={"ChoiceList-FeatureDescription"}>
					{description.map((paragraph, i) => <p key={`ChoiceList-FeatureDescription-${i}`}>{paragraph}</p>)}
				</div>
			</li>
		);
	};
	const renderProficiencyItem = (item, i) => {
		const {name, type} = item;
		const text = `${type}: ${name}`;
		return renderStringItem(text, `Proficiency-${i}`);
	};
	const renderStringItem = (text, i) => {
		return (<li key={`ChoiceList-${i}`}>{text}</li>);
	};
	const renderItem = (item, i) => {
		if (typeof item === 'string') {
			return renderStringItem(item, i);
		}
		const {name, type, ability, modifier} = item;
		if (ability && modifier) {
			return renderAbilityScoreAdjustmentItem(item, i);
		} else if (name && type) {
			return renderProficiencyItem(item, i);
		} else {
			return renderFeatureItem(item, i);
		}
	};
	const renderItems = () => items.map((item, i) => renderItem(item, i));

	if (ordered) {
		return (<ol className={classes.list} children={renderItems()}/>);
	} else {
		return (<ul className={classes.list} children={renderItems()}/>);
	}
}

ChoiceList.propTypes = {
	items: PropTypes.oneOfType([
		AbilityScoreAdjustmentsPropType,
		FeaturesPropType,
		ProficienciesPropType,
		PropTypes.arrayOf(PropTypes.string),
	]).isRequired,
	ordered: PropTypes.bool,
};

export default ChoiceList