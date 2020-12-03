import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {MARGIN_RIGHT_STYLES} from "common/Defaults";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
	wrapper: MARGIN_RIGHT_STYLES,
}));

function RulesSection(props) {
	const classes = useStyles();
	const {headerText, children} = props;

	return (
		<Grid container direction="row" className={classes.wrapper}>
			<Grid item xs={12}>
				<Typography component="h3" variant="h6">{headerText}</Typography>
			</Grid>
			<Grid item xs={12}>
				{children}
			</Grid>
		</Grid>
	);
}

RulesSection.propTypes = {
	headerText: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
};

export default RulesSection