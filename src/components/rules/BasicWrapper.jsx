import {makeStyles} from "@material-ui/core/styles";
import {chain, includes, isEmpty, isString} from "lodash";
import PropTypes from "prop-types";
import React from "react";

const SPACING = "20px";

function BasicWrapper(props) {
	const {children, margin, padding} = props;

	const normalizedString = (s) => isString(s) ? s.toLowerCase().trim() : "";

	const normalizedArray = (val) => {
		const arr = normalizedString(val).split(/\s,/)
		return chain(arr).map(normalizedString).without("").value();
	};

	const buildStyles = () => {
		const styles = {};
		const normalizedMarginArr = normalizedArray(margin);
		const normalizedPaddingArr = normalizedArray(padding);
		if (isEmpty(normalizedMarginArr) && isEmpty(normalizedPaddingArr)) return styles;

		if (includes(normalizedMarginArr, "all")) {
			styles.margin = SPACING;
		} else {
			if (includes(normalizedMarginArr, "left")) styles.marginLeft = SPACING;
			if (includes(normalizedMarginArr, "right")) styles.marginRight = SPACING;
			if (includes(normalizedMarginArr, "top")) styles.marginTop = SPACING;
			if (includes(normalizedMarginArr, "bottom")) styles.marginBottom = SPACING;
		}

		if (includes(normalizedPaddingArr, "all")) {
			styles.padding = SPACING;
		} else {
			if (includes(normalizedPaddingArr, "left")) styles.paddingLeft = SPACING;
			if (includes(normalizedPaddingArr, "right")) styles.paddingRight = SPACING;
			if (includes(normalizedPaddingArr, "top")) styles.paddingTop = SPACING;
			if (includes(normalizedPaddingArr, "bottom")) styles.paddingBottom = SPACING;
		}

		return styles;
	}

	const useStyles = makeStyles((theme) => ({root: buildStyles()}));
	const classes = useStyles();

	return (<div className={classes.root} children={children}/>);
}

BasicWrapper.propTypes = {
	margin: PropTypes.string,
	padding: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

export default BasicWrapper