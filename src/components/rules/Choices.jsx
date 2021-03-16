import {Typography} from "@material-ui/core";
import {AbilityScoreAdjustmentPropType} from "components/rules/AbilityScoreAdjustment";
import BasicList from "components/rules/BasicList";
import BasicWrapper from "components/rules/BasicWrapper";
import {FeaturePropType} from "components/rules/Features";
import Paragraphs from "components/rules/Paragraphs";
import {ProficiencyPropType} from "components/rules/Proficiencies";
import RulesSection from "components/rules/RulesSection";
import {isEmpty} from "lodash";
import PropTypes from "prop-types";
import React from "react";

function Choices(props) {
	const {choices} = props;
	if (isEmpty(choices)) return null;

	const renderChoice = (choice, i) => {
		const {name, description, type, pick, options, from} = choice;
		if (isEmpty(options) && isEmpty(from)) {
			console.log(`Ignoring 'choice' without either an 'options' or 'from' attribute [${name}]`);
			return null;
		}
		return (<div key={i}>
			<Typography component="h4" variant="h6">{name}</Typography>
			<Paragraphs paragraphs={description}/>
			<Typography>Type: {type}</Typography>
			<Typography>Pick: {pick}</Typography>
			<BasicList items={generateItems(choice)}/>
		</div>);
	};

	const generateItems = (choice) => {
		const {type, pick, options, from, allowDuplicate, use} = choice;
		//TODO: generate items
		return ["currently", "in progress"];
	};

	return (
		<RulesSection headerText="Choices">
			<BasicWrapper margin="left" children={choices.map(renderChoice)}/>
		</RulesSection>
	);
}

Choices.propTypes = {
	choices: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string,
		description: PropTypes.arrayOf(PropTypes.string),
		type: PropTypes.string.isRequired,
		pick: PropTypes.number.isRequired,
		options: PropTypes.oneOf([
			PropTypes.oneOf([AbilityScoreAdjustmentPropType, FeaturePropType, ProficiencyPropType]),
			PropTypes.string,
		]),
		from: PropTypes.object,
		allowDuplicate: PropTypes.bool,
		use: PropTypes.string,
	})),
};

export default Choices