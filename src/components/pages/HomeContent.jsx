import {Link as ExternalLink, Paper, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {EXTERNAL_LINK_PROPS, PAPER_STYLES} from "common/Defaults";
import React from "react";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	paper: PAPER_STYLES,
	link: {
		color: 'inherit',
	},
}));

function HomeContent() {
	const classes = useStyles();
	return (<Paper className={classes.paper}>
		<Typography component="h1" variant="h4">Welcome to ScrollRole!</Typography>
		<Typography paragraph={true}>
			ScrollRole is a website for building fifth edition (5e) Dungeons and Dragons characters while following
			all terms of the Open Gaming License in the System Reference Document
			(<ExternalLink {...EXTERNAL_LINK_PROPS} href="http://dnd.wizards.com/articles/features/systems-reference-document-srd">SRD</ExternalLink>).
		</Typography>
		<Typography paragraph={true}>
			To prevent the stale experience of only using the limited content in the SRD, you will have two options:
		</Typography>
		<ul>
			<li>
				Disable rules restrictions in the <Link className={classes.link} to="/characters">Character Builder</Link>, so you can make whatever
				changes you want; Or
			</li>
			<li>
				<Link className={classes.link} to="/rules">Customize your own rules</Link> and use them in the Character Builder.
			</li>
		</ul>
	</Paper>);
}

export default HomeContent