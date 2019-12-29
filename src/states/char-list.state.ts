import {INITIAL_TOTAL_NO_OF_PAGES} from "../constants/common.constants";

export const CHAR_LIST_INITIAL_STATE:ICharacters = {
	totalPages: INITIAL_TOTAL_NO_OF_PAGES,
	currentPage: 1,
	charList: []
}

export interface ICharacters {
	totalPages: number,
	currentPage: number,
	charList: any[];
}


