import {FILTER_INITIAL_STATE, IFilterState} from "../states/filter.state";
import {FETCH_CHARACTER_LIST_SUCCESS} from "../action_constants/char-list.constants";

export default function filterReducer(state:IFilterState = FILTER_INITIAL_STATE, action:any) {
	switch (action.type) {
		case FETCH_CHARACTER_LIST_SUCCESS:
			const filters = action.payload.response.filters;
			return {
				...state,
				currentPageNo: filters.currentPageNo || state.currentPageNo,
				order: filters.order || state.order,
				filters: {
					gender: filters.filters.gender || state.filters.gender,
					species: filters.filters.species || state.filters.species,
					status: filters.filters.status|| state.filters.status
				}
			};
		default:
			return state
	}
}
