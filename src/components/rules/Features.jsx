import BasicWrapper from "components/rules/BasicWrapper";
import Feature, {FeaturePropType} from "components/rules/Feature";
import {extendWith, isEmpty} from "lodash";
import PropTypes from "prop-types";
import React from "react";

function Features(props) {
	const {features} = props;
	if (isEmpty(features)) return null;

	return (
		<BasicWrapper children={features.map((feature, i) => {
			return Feature(extendWith(feature, {key: `feature-${i}`}));
		})}/>
	);
}

export const FeaturesPropType = PropTypes.arrayOf(FeaturePropType);

Features.propTypes = {
	features: FeaturesPropType,
};

export default Features