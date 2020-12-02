import Paragraphs from "components/rules/Paragraphs";
import RulesSection from "components/rules/RulesSection";
import {isEmpty} from "lodash";
import PropTypes from "prop-types";
import React from "react";

function Features(props) {
	const {features} = props;

	if (isEmpty(features)) return null;

	const renderFeatures = () => {
		return features.map((feature, i) => {
			const {description, name} = feature;
			return (<RulesSection key={i} headerText={name} children={
				<Paragraphs paragraphs={description}/>
			}/>);
		});
	};

	return (
		<RulesSection headerText="Features" children={renderFeatures()}/>
	);

	// TODO: replace above with this
	// return features.map((feature, i) => {
	// 	const {description, name} = feature;
	// 	return (<RulesSection key={i} headerText={`Feature: ${name}`} children={
	// 		<Paragraphs paragraphs={description}/>
	// 	}/>);
	// });
}

Features.propTypes = {
	features: PropTypes.arrayOf(
		PropTypes.shape({
			description: PropTypes.arrayOf(PropTypes.string),
			name: PropTypes.string.isRequired,
			shortDescription: PropTypes.string,
		})
	),
};

export default Features