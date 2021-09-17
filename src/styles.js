import { createUseStyles } from "react-jss";

export const useDarkStyles = createUseStyles({
	"@global": {
		body: {
			backgroundColor: "#343a40 !important",
		},
	},
});

export const useLightStyles = createUseStyles({
	"@global": {
		body: {
			backgroundColor: "white !important",
		},
	},
});

export function Dark() {
	useDarkStyles();
}

export function Light() {
	useLightStyles();
}
