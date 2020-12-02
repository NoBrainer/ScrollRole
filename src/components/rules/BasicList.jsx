import {makeStyles} from "@material-ui/core/styles";
import {LIST_STYLES} from "common/Defaults";
import {isEmpty} from "lodash";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
	list: LIST_STYLES,
}));

function BasicList(props) {
	const classes = useStyles();
	const {items} = props;

	if (isEmpty(items)) return null;

	return (<ul className={classes.list}>
		{items.map((item, i) => {
			return (<li key={i}>{item}</li>);
		})}
	</ul>);
}

BasicList.propTypes = {
	items: PropTypes.arrayOf(PropTypes.string),
};

export default BasicList