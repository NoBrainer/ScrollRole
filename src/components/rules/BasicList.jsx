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
	const {items, ordered} = props;
	if (isEmpty(items)) return null;

	const renderItems = () => items.map((item, i) => (<li key={i}>{item}</li>));

	if (ordered) {
		return (<ol className={classes.list} children={renderItems()}/>);
	} else {
		return (<ul className={classes.list} children={renderItems()}/>);
	}
}

BasicList.propTypes = {
	items: PropTypes.arrayOf(PropTypes.string),
	ordered: PropTypes.bool,
};

export default BasicList