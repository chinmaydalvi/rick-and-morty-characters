import {CHAR_LIST_INITIAL_STATE, ICharacters} from "../states/char-list.state";
import {FETCH_CHARACTER_LIST, FETCH_CHARACTER_LIST_FAILED, FETCH_CHARACTER_LIST_SUCCESS} from "../action_constants/char-list.constants";
import {APPLY_SEARCHING_SORTING} from "../action_constants/filter.constants";

export default function charactersReducer(state:ICharacters = CHAR_LIST_INITIAL_STATE, action:any) {
	switch (action.type) {
		case FETCH_CHARACTER_LIST_SUCCESS:
			return {
				...state,
				loading: false,
				totalPages: action.payload.response.info.pages,
				charList: [...state.charList, ...action.payload.response.results]
			};
		case FETCH_CHARACTER_LIST:
			return {
				...state,
				loading: true
			};
		case APPLY_SEARCHING_SORTING:
			return {
				...CHAR_LIST_INITIAL_STATE,
				loading: true
			};
		case FETCH_CHARACTER_LIST_FAILED:
			debugger
			return {
				...state,
				errorResponse: action.payload.error,
				loading: false
			};
		default:
			return state
	}
}
