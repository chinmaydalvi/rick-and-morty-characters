export const CHAR_LIST_INITIAL_STATE:ICharacters = {
	totalPages: 1,
	currentPage: 1,
	charList: []
}

export interface ICharacters {
	totalPages: number,
	currentPage: number,
	charList: any[];
}


