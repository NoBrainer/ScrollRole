import _ from "lodash";

const defaultCookieOptions = {expires: 7, path: "/"};

export function deleteCookie(name) {
	document.cookie = `${name}=; expires=${getCookieExpiration(-1)}`;
}

export function setCookie(name, value, options) {
	options = _.extend(defaultCookieOptions, options);
	document.cookie = `${name}=${encodeURIComponent(value)}; expires=${getCookieExpiration(options.expires)}; path=${options.path}`;
}

export function getCookie(name) {
	const cookies = document.cookie.split("; ");
	return _.reduce(cookies, (result, cookie) => {
		const parts = cookie.split('=');
		return parts[0] === name ? decodeURIComponent(parts[1]) : result;
	}, "");
}

function getCookieExpiration(days) {
	return new Date(Date.now() + days * 86400000).toUTCString();
}