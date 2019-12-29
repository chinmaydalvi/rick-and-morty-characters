import {APPLY_FILTERS} from "../action_constants/filter.constants";

export const applyFilter = function () {
	return{
		type: APPLY_FILTERS,
		payload: {
			gender: "",
			species: "",
			status: ""
		}
	}
}
