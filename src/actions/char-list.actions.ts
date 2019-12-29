import {FETCH_CHARACTER_LIST} from "../action_constants/char-list.constants";
import {IFilterState} from "../states/filter.state";

export function fetchCharList(filters:IFilterState) {
	return {
		type: FETCH_CHARACTER_LIST,
		payload: { filters }
	}
}
