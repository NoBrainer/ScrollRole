import {Typography} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

function StatVariable(props) {
	let {variable, value, perLevel, perVariable} = props;
	variable = variable.toUpperCase();

	// const otherProps = {headerComponent, key};
	//
	// const generateItems = () => {
	// 	let items = options;
	// 	if (items && !isEmpty(items)) return items;
	//
	// 	const {name, levels, types} = from;
	// 	const filterByType = (item) => includes(types, item.type);
	// 	const filterByLevel = (item) => includes(levels, item.level);
	// 	if (isObject(from)) {
	// 		const list = lists[name];
	// 		if (!isEmpty(types) && !isEmpty(levels)) {
	// 			items = chain(list).filter(filterByType).filter(filterByLevel).value();
	// 		} else if (!isEmpty(types)) {
	// 			items = chain(list).filter(filterByType).value();
	// 		} else if (!isEmpty(levels)) {
	// 			items = chain(list).filter(filterByLevel).value();
	// 		} else {
	// 			items = list;
	// 		}
	// 	} else {
	// 		console.log(`Unable to determine items for 'choice' attribute`);
	// 		items = [];
	// 	}
	// 	return allowDuplicates ? items : uniq(items);
	// };
	//
	// const items = generateItems();
	// return (
	// 	<RulesSection headerText={name} {...otherProps}>
	// 		<Paragraphs paragraphs={description}/>
	// 		<Typography>Type: {type}</Typography>
	// 		{allowDuplicates && <Typography>Allow Duplicates: yes</Typography>}
	// 		<Typography>Pick: {pick}</Typography>
	// 		<ChoiceList items={items}/>
	// 	</RulesSection>
	// );
	return (
		<Typography>[UNDER CONSTRUCTION]</Typography>
	);
}

export const StatVariablePropType = PropTypes.shape({
	variable: PropTypes.string.isRequired,
	value: PropTypes.oneOf([PropTypes.number, PropTypes.string]).isRequired,
	perLevel: PropTypes.bool,
	perVariable: PropTypes.string,
});

StatVariable.defaultProps = {
	perLevel: false,
	perVariable: null,
};

StatVariable.propTypes = StatVariablePropType;

export default StatVariable