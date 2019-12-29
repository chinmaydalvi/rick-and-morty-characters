import {FETCH_CHARACTER_LIST} from "../action_constants/char-list.constants";

export function fetchCharList(pageNo:number = 1) {
	return {
		type: FETCH_CHARACTER_LIST,
		payload: { pageNo }
	}
}
