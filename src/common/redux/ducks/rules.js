import defaultConfig from "assets/config/default.yaml";
import db from "common/db";
import {PRELOADED_STATE} from "common/Defaults";
import yaml from "js-yaml";
import _ from "lodash";

// Action constants
const ADD_RULES = "scrollrole/rules/add";
const DELETE_RULES = "scrollrole/rules/delete";
const LOAD_RULES = "scrollrole/rules/load";
const UPDATE_RULES = "scrollrole/rules/update";

// Actions
export const addRules = (name) => {
	return (dispatch) => {
		const rulesToAdd = {name};
		db.table('rules')
			.add(rulesToAdd)
			.then((id) => {
				const addedRules = Object.assign({}, rulesToAdd, {id});
				dispatch({type: ADD_RULES, payload: addedRules});
			});
	};
};
export const addDefaultRules = () => {
	return (dispatch) => {
		loadDefaultRules().then((defaultRules) => {
			const rulesToAdd = Object.assign({}, defaultRules);
			db.table('rules')
				.add(rulesToAdd)
				.then((id) => {
					const addedRules = Object.assign({}, rulesToAdd, {id});
					dispatch({type: ADD_RULES, payload: addedRules});
				});
		});
	};
};
export const loadRules = () => {
	return (dispatch) => {
		loadDefaultRules().then((defaultRules) => {
			db.table('rules')
				.toArray()
				.then((rulesList) => {
					if (_.isEmpty(rulesList)) {
						// Add default rules to an empty rules list
						const rulesToAdd = Object.assign({}, defaultRules);
						db.table('rules')
							.add(rulesToAdd)
							.then((id) => {
								rulesToAdd.id = id;
								dispatch({type: LOAD_RULES, payload: [rulesToAdd]});
							});
					} else {
						dispatch({type: LOAD_RULES, payload: rulesList});
					}
				});
		});
	};
};
export const updateRules = (id, name, config) => {
	return (dispatch) => {
		db.table('rules')
			.update(id, {name, config})
			.then(() => {
				const updatedRules = {id, name, config};
				dispatch({type: UPDATE_RULES, payload: updatedRules});
			});
	};
};
export const deleteRules = (id) => {
	return (dispatch) => {
		db.table('rules')
			.delete(id)
			.then(() => {
				dispatch({type: DELETE_RULES, payload: id});
			});
	};
};

function loadDefaultRules() {
	return new Promise((resolve, reject) => {
		try {
			fetch(defaultConfig)
				.then((r) => r.text())
				.then((yamlText) => {
					const json = yaml.safeLoad(yamlText);
					resolve(json);
				})
				.catch(reject);
		} catch(e) {
			reject(e);
		}
	});
}

const initialState = PRELOADED_STATE.rules;

// Reducer
const reducer = (state = initialState, {type, payload}) => {
	switch(type) {
		case LOAD_RULES:
			return {...state, rulesList: payload};
		case ADD_RULES:
			return {...state, rulesList: [...state.rulesList, payload]};
		case UPDATE_RULES:
			const rulesToUpdate = state.rulesList.find((rules) => rules.id === payload.id);
			const updatedRules = Object.assign({}, rulesToUpdate, {name: payload.name, config: payload.config});
			return {
				...state,
				rulesList: [
					...state.rulesList.filter((rules) => rules.id !== payload.id),
					updatedRules,
				]
			};
		case DELETE_RULES:
			return {...state, rulesList: state.rulesList.filter((rules) => rules.id !== payload)}
		default:
			return state; //unchanged
	}
};

export default reducer