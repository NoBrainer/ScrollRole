import {Typography} from "@material-ui/core";
import {isEmpty} from "lodash";
import PropTypes from "prop-types";
import React from "react";

function Paragraphs(props) {
	const {paragraphs} = props;
	if (isEmpty(paragraphs)) return null;

	return paragraphs.map((paragraph, i) => {
		const isLastParagraph = (i === paragraphs.length - 1);
		return (<Typography key={i} paragraph={!isLastParagraph}>{paragraph}</Typography>);
	});
}

Paragraphs.propTypes = {
	paragraphs: PropTypes.arrayOf(PropTypes.string),
};

export default Paragraphs