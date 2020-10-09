import {AppBar, IconButton, Toolbar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Menu} from "@material-ui/icons";
import logo from "assets/logo.svg";
import clsx from "clsx";
import {APP_BAR_HEIGHT, APP_DRAWER_WIDTH} from "common/Constants";
import PropTypes from "prop-types";
import React from "react";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	appBar: {
		height: `${APP_BAR_HEIGHT}px`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: APP_DRAWER_WIDTH,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		width: `calc(100% - ${APP_DRAWER_WIDTH}px)`,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	logo: {
		flexBasis: '215px',
		flexDirection: 'column',
		flexGrow: 0,
		flexShrink: 0,
		justifyContent: 'center',
		margin: 'auto 0',
		padding: '0 10px',
		'img': {
			height: '70px',
		},
	},
	hide: {
		display: 'none',
	},
}));

function AppHeader(props) {
	const classes = useStyles();
	return (
		<AppBar position="fixed" className={clsx(classes.appBar, {[classes.appBarShift]: props.isDrawerOpen,})}>
			<Toolbar>
				<IconButton color="inherit" aria-label="open drawer" onClick={props.handleDrawerOpen} edge="start"
							className={clsx(classes.menuButton, props.isDrawerOpen && classes.hide)}>
					<Menu/>
				</IconButton>
				<Link className={classes.logo} to="/">
					<img src={logo} alt="ScrollRole logo"/>
				</Link>
			</Toolbar>
		</AppBar>
	);
}

AppHeader.propTypes = {
	isDrawerOpen: PropTypes.bool,
	handleDrawerOpen: PropTypes.func.isRequired,
};

export default AppHeader