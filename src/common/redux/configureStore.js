import {PRELOADED_STATE} from "common/Defaults";
import drawerReducer from "common/redux/ducks/drawer";
import rulesReducer, {loadRules} from "common/redux/ducks/rules";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
	drawer: drawerReducer,
	rules: rulesReducer,
});
const enhancer = compose(applyMiddleware(thunk));

const store = createStore(rootReducer, PRELOADED_STATE, enhancer);

export const initializeStore = () => {
	store.dispatch(loadRules());
};

export default store