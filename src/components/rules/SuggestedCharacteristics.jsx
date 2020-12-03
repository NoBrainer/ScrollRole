import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {MARGIN_LEFT_STYLES, MARGIN_TOP_STYLES} from "common/Defaults";
import BasicList from "components/rules/BasicList";
import Paragraphs from "components/rules/Paragraphs";
import RulesSection from "components/rules/RulesSection";
import {isEmpty} from "lodash";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
	marginLeft: MARGIN_LEFT_STYLES,
	marginTop: MARGIN_TOP_STYLES,
}));

function SuggestedCharacteristics(props) {
	const classes = useStyles();
	const {suggestedCharacteristics} = props;
	if (isEmpty(suggestedCharacteristics)) return null;

	const {description, personalityTraits, ideals, bonds, flaws} = suggestedCharacteristics;

	const renderSection = (title, items) => {
		if (isEmpty(items)) return null;
		return (
			<div className={classes.marginTop}>
				<Typography component="h4" variant="h6">{title}</Typography>
				<BasicList items={items} ordered={true}/>
			</div>
		);
	};

	return (
		<RulesSection headerText="Suggested Characteristics" children={
			<>
				<Paragraphs paragraphs={description}/>
				<div className={classes.marginLeft}>
					{renderSection("Personality Traits", personalityTraits)}
					{renderSection("Ideals", ideals)}
					{renderSection("Bonds", bonds)}
					{renderSection("Flaws", flaws)}
				</div>
			</>
		}/>
	);
}

SuggestedCharacteristics.propTypes = {
	suggestedCharacteristics: PropTypes.shape({
		bonds: PropTypes.arrayOf(PropTypes.string).isRequired,
		description: PropTypes.arrayOf(PropTypes.string).isRequired,
		flaws: PropTypes.arrayOf(PropTypes.string).isRequired,
		ideals: PropTypes.arrayOf(PropTypes.string).isRequired,
		personalityTraits: PropTypes.arrayOf(PropTypes.string).isRequired,
	}),
};

export default SuggestedCharacteristics