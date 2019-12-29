import {CHAR_LIST_INITIAL_STATE, ICharacters} from "../states/char-list.state";
import {FETCH_CHARACTER_LIST_SUCCESS} from "../action_constants/char-list.constants";

export default function charactersReducer(state:ICharacters = CHAR_LIST_INITIAL_STATE, action:any) {
	switch (action.type) {
		case "":
			return {
				...state,
			};
		case FETCH_CHARACTER_LIST_SUCCESS:
			return {
				...state,
				totalPages: action.payload.response.info.pages,
				currentPage: action.payload.response.currentPageNo,
				charList: [...state.charList, ...action.payload.response.results]
			}
		default:
			return state
	}
}
