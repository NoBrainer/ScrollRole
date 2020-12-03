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

	if (ordered) {
		return (<ol className={classes.list}>
			{items.map((item, i) => {
				return (<li key={i}>{item}</li>);
			})}
		</ol>);
	} else {
		return (<ul className={classes.list}>
			{items.map((item, i) => {
				return (<li key={i}>{item}</li>);
			})}
		</ul>);
	}
}

BasicList.propTypes = {
	items: PropTypes.arrayOf(PropTypes.string),
	ordered: PropTypes.bool,
};

export default BasicList