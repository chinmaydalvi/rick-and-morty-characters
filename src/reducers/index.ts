import {combineReducers} from "redux";
import myReducer from "./myReducer";
import charactersReducer from "./char-list.reducer";
import filterReducer from "./filters.reducer";


const appReducer = combineReducers({
	myReducer: myReducer,
	characters: charactersReducer,
	filters: filterReducer
});

export function rootReducer(state: any, action: any) {
	return appReducer(state, action);
}
