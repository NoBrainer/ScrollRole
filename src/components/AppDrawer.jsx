import {Collapse, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {ChevronLeft, Home, MenuBook, People} from "@material-ui/icons";
import {APP_BAR_HEIGHT, APP_DRAWER_WIDTH} from "common/Constants";
import {buildUrl, usePageState} from "common/State";
import PropTypes from "prop-types";
import React from "react";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	drawer: {
		flexShrink: 0,
		width: APP_DRAWER_WIDTH,
	},
	drawerPaper: {
		width: APP_DRAWER_WIDTH,
	},
	drawerHeader: {
		alignItems: 'center',
		display: 'flex',
		height: `${APP_BAR_HEIGHT}px`,
		justifyContent: 'flex-end',
		padding: theme.spacing(0, 1),
	},
}));

function AppDrawer(props) {
	const classes = useStyles();
	const [pageState] = usePageState();

	const renderListItem = (text, pageId, IconEle) => {
		const url = buildUrl(pageId);
		const isSelected = pageState.pageId === pageId;
		return (
			<ListItem button key={pageId} component={Link} to={url} selected={isSelected}>
				<ListItemIcon>
					<IconEle/>
				</ListItemIcon>
				<ListItemText primary={text}/>
			</ListItem>
		);
	};
	const renderSubListItem = (text, pageId, sectionId, isDefault) => {
		const url = buildUrl(pageId, sectionId);
		const isSelected = pageState.sectionId === sectionId || (isDefault && !sectionId);
		return (
			<ListItem button key={url} component={Link} to={url} selected={isSelected}>
				<ListItemText inset primary={text}/>
			</ListItem>
		);
	};
	const renderSubListForCharacters = () => {
		//TODO: under construction
		return (<Collapse in={pageState.pageId === 'characters'}/>);
	};
	const renderSubListForRules = () => {
		return (
			<Collapse in={pageState.pageId === 'rules'}>
				<List>
					{renderSubListItem("Introduction", 'rules', 'introduction', true)}
					{renderSubListItem("Backgrounds", 'rules', 'backgrounds')}
					{renderSubListItem("Classes", 'rules', 'classes')}
					{renderSubListItem("Races", 'rules', 'races')}
				</List>
			</Collapse>
		);
	};

	return (
		<Drawer className={classes.drawer} variant="persistent" anchor="left" open={props.isDrawerOpen}
				classes={{paper: classes.drawerPaper}}>
			<div className={classes.drawerHeader}>
				<IconButton onClick={props.handleDrawerClose}>
					<ChevronLeft/>
				</IconButton>
			</div>
			<Divider/>
			<List>
				{renderListItem("Home", 'home', Home)}
				<Divider/>
				{renderListItem("Character Builder", 'characters', People)}
				{renderSubListForCharacters()}
				<Divider/>
				{renderListItem("Rules Customizer", 'rules', MenuBook)}
				{renderSubListForRules()}
			</List>
		</Drawer>
	);
}

AppDrawer.propTypes = {
	isDrawerOpen: PropTypes.bool,
	handleDrawerClose: PropTypes.func.isRequired,
};

export default AppDrawer