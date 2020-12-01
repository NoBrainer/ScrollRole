import {Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {PAPER_STYLES} from "common/Defaults";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
	paper: PAPER_STYLES,
}));

function Background(props) {
	const classes = useStyles();

	//TODO: populate the entire structure

	return (<Paper className={classes.paper}>{props.background.name}</Paper>);
}

Background.propTypes = {
	background: PropTypes.object.isRequired,
};

export default Background