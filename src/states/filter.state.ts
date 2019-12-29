export const FILTER_INITIAL_STATE:IFilterState = {
	order: "asc",
	filters: {
		gender: "",
		species: "",
		status: ""
	}
}

export interface IFilterState {
	order: string;
	filters: IFiltersParams;
}

export interface IFiltersParams {
	gender: string;
	species: string;
	status: string;
}
