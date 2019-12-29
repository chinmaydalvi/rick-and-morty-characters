export default function myReducer(state = {ready: false}, action:any) {
	switch (action.type) {
		case "MY_STATE":
			return {
				...state,
				ready: action.payload
			};
		default:
			return state
	}
}
