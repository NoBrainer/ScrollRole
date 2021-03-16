import {Typography} from "@material-ui/core";
import {AbilityScoreAdjustmentPropType} from "components/rules/AbilityScoreAdjustment";
import BasicWrapper from "components/rules/BasicWrapper";
import ChoiceList from "components/rules/ChoiceList";
import {FeaturePropType} from "components/rules/Features";
import Paragraphs from "components/rules/Paragraphs";
import {ProficiencyPropType} from "components/rules/Proficiencies";
import RulesSection from "components/rules/RulesSection";
import {chain, includes, isEmpty, isObject} from "lodash";
import PropTypes from "prop-types";
import React from "react";
import {useSelector} from "react-redux";

function Choices(props) {
	const rulesList = useSelector((state) => state.rules.rulesList);

	const {choices} = props;
	if (isEmpty(choices)) return null;
	const currentRules = rulesList.length > 0 ? rulesList[0] : {};
	const lists = currentRules.lists;
	console.log(lists);

	const renderChoice = (choice, i) => {
		const {name, description, type, pick, options, from, allowDuplicates} = choice;
		if (pick < 1) {
			console.log(`Ignoring 'choice' without a 'pick' attribute with a 1+ value`);
			return null;
		} else if (isEmpty(options) && isEmpty(from)) {
			console.log(`Ignoring 'choice' without either an 'options' or 'from' attribute [${name}]`);
			return null;
		}
		const items = generateItems(choice);
		console.log(items);
		return (<div key={i}>
			<Typography component="h4" variant="h6">{name}</Typography>
			<Paragraphs paragraphs={description}/>
			<Typography>Type: {type}</Typography>
			{allowDuplicates && <Typography>Allow Duplicates: yes</Typography>}
			<Typography>Pick: {pick}</Typography>
			<ChoiceList items={[`TODO: Generate items for [${name}]`]}/>
		</div>);
	};

	const generateItems = (choice) => {
		//TODO: support allowDuplicate
		//TODO: support use
		const {type, options, from, allowDuplicate, use} = choice;
		let items = options;
		if (!items || isEmpty(items)) {
			const {name, levels, types} = from;
			const filterByType = (item) => includes(types, item.type);
			const filterByLevel = (item) => includes(levels, item.level);
			if (isObject(from)) {
				const list = lists[name];
				if (!isEmpty(types) && !isEmpty(levels)) {
					items = chain(list).filter(filterByType).filter(filterByLevel).value();
				} else if (!isEmpty(types)) {
					items = chain(list).filter(filterByType).value();
				} else if (!isEmpty(levels)) {
					items = chain(list).filter(filterByLevel).value();
				} else {
					items = list;
				}
			} else {
				console.log(`Unable to determine items for 'choice' attribute`);
				items = [];
			}
			return items;
		}
		return items;
	};

	return (
		<RulesSection headerText="Choices">
			<BasicWrapper margin="left" children={choices.map(renderChoice)}/>
		</RulesSection>
	);
}

Choices.propTypes = {
	choices: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		description: PropTypes.arrayOf(PropTypes.string),
		type: PropTypes.string.isRequired,
		pick: PropTypes.number.isRequired,
		options: PropTypes.oneOf([
			PropTypes.arrayOf(AbilityScoreAdjustmentPropType),
			PropTypes.arrayOf(FeaturePropType),
			PropTypes.arrayOf(ProficiencyPropType),
			PropTypes.string,
		]),
		from: PropTypes.shape({
			name: PropTypes.string.isRequired,
			levels: PropTypes.arrayOf(PropTypes.number),
			types: PropTypes.arrayOf(PropTypes.string),
		}),
		allowDuplicate: PropTypes.bool,
		use: PropTypes.string,
	})),
};

export default Choices