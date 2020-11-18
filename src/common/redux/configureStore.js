import drawerReducer from "common/redux/ducks/drawer";
import {combineReducers, createStore} from "redux";

const rootReducer = combineReducers({
	drawer: drawerReducer,
});

const store = createStore(rootReducer);

export default store