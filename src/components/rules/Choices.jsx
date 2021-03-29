import {HEADER_COMPONENTS} from "common/Constants";
import BasicWrapper from "components/rules/BasicWrapper";
import Choice, {ChoicePropType} from "components/rules/Choice";
import {extendWith, isEmpty} from "lodash";
import PropTypes from "prop-types";
import React from "react";

function Choices(props) {
	const {choices, headerComponent} = props;
	if (isEmpty(choices)) return null;

	return (
		<BasicWrapper children={choices.map((choice, i) => {
			return Choice(extendWith(choice, {key: `Choice-${i}`, headerComponent}));
		})}/>
	);
}

export const ChoicesPropType = PropTypes.arrayOf(ChoicePropType);

Choices.propTypes = {
	choices: ChoicesPropType,
	headerComponent: PropTypes.oneOf(HEADER_COMPONENTS),
};

export default Choices