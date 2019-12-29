import {FILTER_INITIAL_STATE, IFilterState} from "../states/filter.state";

export default function filterReducer(state:IFilterState = FILTER_INITIAL_STATE, action:any) {
	switch (action.type) {
		case "MY_STATE":
			return {
				...state,
			};
		default:
			return state
	}
}
