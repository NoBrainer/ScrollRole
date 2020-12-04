import {Grid, Typography} from "@material-ui/core";
import BasicWrapper from "components/rules/BasicWrapper";
import PropTypes from "prop-types";
import React from "react";

function RulesSection(props) {
	const {headerText, children} = props;

	return (
		<BasicWrapper margin="bottom">
			<Grid container direction="row">
				<Grid item xs={12}>
					<Typography component="h3" variant="h6">{headerText}</Typography>
				</Grid>
				<Grid item xs={12} children={children}/>
			</Grid>
		</BasicWrapper>
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