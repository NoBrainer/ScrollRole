import BasicWrapper from "components/rules/BasicWrapper";
import Subrace, {SubracePropType} from "components/rules/Subrace";
import {extendWith, isEmpty} from "lodash";
import PropTypes from "prop-types";
import React from "react";

function Subraces(props) {
	const {subraces} = props;
	if (isEmpty(subraces)) return null;

	return (
		<BasicWrapper children={subraces.map((subrace, i) => {
			return Subrace(extendWith(subrace, {key: `Subrace-${i}`}));
		})}/>
	);
}

export const SubracesPropType = PropTypes.arrayOf(SubracePropType);

Subraces.propTypes = {
	subraces: SubracesPropType,
};

export default Subraces