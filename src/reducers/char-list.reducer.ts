import {CHAR_LIST_INITIAL_STATE, ICharacters} from "../states/char-list.state";
import {FETCH_CHARACTER_LIST_SUCCESS} from "../action_constants/char-list.constants";
import {APPLY_FILTERS} from "../action_constants/filter.constants";

export default function charactersReducer(state:ICharacters = CHAR_LIST_INITIAL_STATE, action:any) {
	switch (action.type) {
		case FETCH_CHARACTER_LIST_SUCCESS:
			return {
				...state,
				totalPages: action.payload.response.info.pages,
				charList: [...state.charList, ...action.payload.response.results]
			}
		case APPLY_FILTERS:
			return CHAR_LIST_INITIAL_STATE;
		default:
			return state
	}
}
