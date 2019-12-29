import {IFilterState} from "../states/filter.state";
import {store} from "../store";
import {ICharInfo} from "../states/char-list.state";

class FetchCharListServiceSingleton {

	public static getInstance() {
		if (!FetchCharListServiceSingleton.instance) {
			FetchCharListServiceSingleton.instance = new FetchCharListServiceSingleton();
			// ... any one time initialization goes here ...
		}
		return FetchCharListServiceSingleton.instance;
	}

	public getQueryString(filters: IFilterState):string{
		let query = "";
		const totalPages = store.getState().characters.totalPages;
		query = `page=${filters.currentPageNo}`;
		if(filters.order === "desc" && totalPages > 1){
			query = `page=${totalPages - filters.currentPageNo - 1}`
		}

		if(filters.filters.status){
			query+=`&status=${filters.filters.status}`
		}

		if(filters.filters.species){
			query+=`&species=${filters.filters.species}`
		}

		if(filters.filters.gender){
			query+=`&gender=${filters.filters.gender}`
		}

		return query;
	}

	public async getCharData(filters: IFilterState){
		const queryString = this.getQueryString(filters);
		return fetch(`https://rickandmortyapi.com/api/character/?${queryString}`, { method: 'GET'})
				.then((response)=>{
					return response
				}).catch((response)=>{
					return response
				})
	}

	public sanitizeData(response:any, filters: IFilterState){
		response.results = response.results.map(({id, name, status, species, gender, image, created, origin, location}:ICharInfo)=>{
			return { id, name, status, species, gender, image, created, origin, location};
		})
		response.filters = filters;
		return response;
	}

	public async getCharList(filters: IFilterState) {
		let response =  await this.getCharData(filters);
		if(response.ok){
			response = await response.json();
			return this.sanitizeData(response, filters);
		}
		return Promise.reject(response)
	}

	private static instance: FetchCharListServiceSingleton;
	private constructor() {
		// do something construct...
	}
}

export const FetchCharListService = FetchCharListServiceSingleton.getInstance();
