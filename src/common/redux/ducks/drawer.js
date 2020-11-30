import {COOKIES} from "common/Constants";
import {deleteCookie, getCookie, setCookie} from "common/Cookies";

// Action constants
const CLOSE = "scrollrole/drawer/close";
const OPEN = "scrollrole/drawer/open";

// Actions
export const closeDrawer = () => {
	return {type: CLOSE};
};
export const openDrawer = () => {
	return {type: OPEN};
};

// Default state
const initialState = {
	isOpen: getCookie(COOKIES.DRAWER) === "o",
};

// Reducer
const reducer = (state = initialState, action) => {
	switch(action.type) {
		case CLOSE:
			if (!state.isOpen) return state; //unchanged
			deleteCookie(COOKIES.DRAWER);
			return {...state, isOpen: false};
		case OPEN:
			if (state.isOpen) return state; //unchanged
			setCookie(COOKIES.DRAWER, "o");
			return {...state, isOpen: true};
		default:
			return state; //unchanged
	}
};

export default reducer