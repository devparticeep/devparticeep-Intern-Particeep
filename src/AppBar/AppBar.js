import React from "react";
import PropTypes from "prop-types";
import {
	AppBar,
	Toolbar,
	Typography,
	CssBaseline,
	useScrollTrigger,
	Slide,
} from "@mui/material";
import { pink } from "@mui/material/colors";

function HideOnScroll(props) {
	const { children, window } = props;
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
	});

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}

HideOnScroll.propTypes = {
	children: PropTypes.element.isRequired,
	window: PropTypes.func,
};

export function HideAppBar({ children }, props) {
	return (
		<React.Fragment>
			<CssBaseline />
			<HideOnScroll {...props}>
				<AppBar enableColorOnDark sx={{ bgcolor: pink[900] }}>
					<Toolbar>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							Aymane REIDA
						</Typography>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							Particeep
						</Typography>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Toolbar />
			{children}
		</React.Fragment>
	);
}
