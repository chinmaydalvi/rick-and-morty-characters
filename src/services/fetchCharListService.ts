
class FetchCharListServiceSingleton {

	public static getInstance() {
		if (!FetchCharListServiceSingleton.instance) {
			FetchCharListServiceSingleton.instance = new FetchCharListServiceSingleton();
			// ... any one time initialization goes here ...
		}
		return FetchCharListServiceSingleton.instance;
	}

	public async getCharData(pageNo:number){
		return fetch(`https://rickandmortyapi.com/api/character/?page=${pageNo}`, { method: 'GET'})
				.then((response)=>{
					return response
				}).catch((response)=>{
					return response
				})
	}

	public sanitizeData(response:any, pageNo:number){
		response.results = response.results.map(({id, name, status, species, gender, image, created, origin, location}:any)=>{
			return { id, name, status, species, gender, image, created, origin, location}
		})
		response.currentPageNo = pageNo;
		return response;
	}

	public async getCharList(pageNo: number = 1) {
		let response =  await this.getCharData(pageNo);
		if(response.ok){
			response = await response.json();
			return this.sanitizeData(response, pageNo);
		}
		return Promise.reject(response)
	}

	private static instance: FetchCharListServiceSingleton;
	private constructor() {
		// do something construct...
	}
}

export const FetchCharListService = FetchCharListServiceSingleton.getInstance();
