import {INITIAL_TOTAL_NO_OF_PAGES} from "../common/common.constants";

export const CHAR_LIST_INITIAL_STATE:ICharacters = {
	totalPages: INITIAL_TOTAL_NO_OF_PAGES,
	charList: []
}

export interface ICharacters {
	totalPages: number,
	charList: ICharInfo[];
}

export interface ICharInfo {
	id: string;
	name:string;
	status:string;
	species:string;
	gender:string;
	image:string;
	created:string,
	origin: IOriginLastAndLocation;
	location: IOriginLastAndLocation;
}

export interface IOriginLastAndLocation {
	name:string;
	url:string;
}

