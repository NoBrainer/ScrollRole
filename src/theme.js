import {createMuiTheme} from "@material-ui/core/styles";

const theme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#000000',
		},
		secondary: {
			main: '#2e6e3f'
		},
	},
	typography: {
		h1: {fontSize: "2.5rem"},
		h2: {fontSize: "2.1rem"},
		h3: {fontSize: "1.7rem"},
		h4: {fontSize: "1.5rem"},
		h5: {fontSize: "1.3rem"},
		h6: {fontSize: "1.1rem"},
	},
});

export default theme