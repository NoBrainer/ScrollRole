import {Typography} from "@material-ui/core";
import RulesSection from "components/rules/RulesSection";
import {isEmpty} from "lodash";
import PropTypes from "prop-types";
import React from "react";

function Features(props) {
	const {features} = props;

	if (isEmpty(features)) return null;

	const renderParagraphs = (description) => {
		return description.map((paragraph, i) => {
			const isLastParagraph = (i === description.length - 1);
			return (<Typography key={i} paragraph={!isLastParagraph}>{paragraph}</Typography>);
		});
	}

	const renderFeatures = () => {
		return features.map((feature, i) => {
			return (<RulesSection key={i} headerText={feature.name} children={renderParagraphs(feature.description)}/>);
		});
	};

	return (
		<RulesSection headerText="Features" children={renderFeatures()}/>
	);

	// TODO: replace above with this
	// const renderFeatures = () => {
	// 	return features.map((feature, i) => {
	// 		return (<RulesSection key={i} headerText={`Feature: ${feature.name}`} children={renderParagraphs(feature.description)}/>);
	// 	});
	// };
	//
	// return renderFeatures();
}

Features.propTypes = {
	features: PropTypes.array,
};

export default Features