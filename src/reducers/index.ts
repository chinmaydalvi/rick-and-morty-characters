import {combineReducers} from "redux";
import myReducer from "./myReducer";
import charactersReducer from "./char-list.reducer";


const appReducer = combineReducers({
	myReducer: myReducer,
	characters: charactersReducer
});

export function rootReducer(state: any, action: any) {
	return appReducer(state, action);
}
