import {combineReducers} from "redux";
import myReducer from "./myReducer/myReducer";


const appReducer = combineReducers({
	myReducer: myReducer
});

export function rootReducer(state: any, action: any) {
	return appReducer(state, action);
}
