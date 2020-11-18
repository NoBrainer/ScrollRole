import {CssBaseline} from "@material-ui/core";
import {makeStyles, ThemeProvider} from "@material-ui/core/styles";
import clsx from "clsx";
import {APP_BAR_HEIGHT, APP_DRAWER_WIDTH} from "common/Constants";
import AppContent from "components/AppContent";
import AppDrawer from "components/AppDrawer";
import AppFooter from "components/AppFooter";
import AppHeader from "components/AppHeader";
import React from "react";
import {useSelector} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import theme from "theme";

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	wrapper: {
		flexGrow: 1,
		marginLeft: -APP_DRAWER_WIDTH,
		marginTop: `${APP_BAR_HEIGHT}px`,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	wrapperShift: {
		marginLeft: 0,
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
}));

function App() {
	const classes = useStyles();
	const isDrawerOpen = useSelector((state) => state.drawer.isOpen);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline/>
			<BrowserRouter>
				<div className={classes.root}>
					<AppHeader/>
					<AppDrawer/>
					<div className={clsx(classes.wrapper, {[classes.wrapperShift]: isDrawerOpen,})}>
						<AppContent/>
						<AppFooter/>
					</div>
				</div>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App