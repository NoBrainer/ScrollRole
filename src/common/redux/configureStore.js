import drawerReducer from "common/redux/ducks/drawer";
import rulesReducer, {loadRules} from "common/redux/ducks/rules";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";

//https://github.com/dfahlander/Dexie.js/tree/master/samples/react-redux/src

const rootReducer = combineReducers({
	drawer: drawerReducer,
	rules: rulesReducer,
});

const initialState = {rules: []};

const store = createStore(rootReducer, initialState, compose(applyMiddleware(thunk)));

export const initializeStore = () => {
	store.dispatch(loadRules());
}

export default store