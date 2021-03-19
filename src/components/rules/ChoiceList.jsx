import {makeStyles} from "@material-ui/core/styles";
import {LIST_STYLES} from "common/Defaults";
import {isEmpty} from "lodash";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
	list: LIST_STYLES,
}));

function ChoiceList(props) {
	const classes = useStyles();
	const {items, ordered} = props;
	if (isEmpty(items)) return null;

	const renderItem = (item, i) => {
		const {name, type} = item;
		const text = type ? `${type}: ${name}` : name;
		return (<li key={i}>{text}</li>)
	};
	const renderItems = () => items.map((item, i) => renderItem(item, i));

	if (ordered) {
		return (<ol className={classes.list} children={renderItems()}/>);
	} else {
		return (<ul className={classes.list} children={renderItems()}/>);
	}
}

ChoiceList.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		type: PropTypes.string,
	})).isRequired,
	ordered: PropTypes.bool,
};

export default ChoiceList