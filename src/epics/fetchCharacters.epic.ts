

import {from, of} from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';

export const fetchCharacters = (action$: any) => {
	return action$.pipe(
			ofType("FETCH_CHARACTERS"),
			mergeMap((action: any) => {
				return from(Promise.resolve("hello")).pipe(
						map((response: any) => {
							return {
								type: "MY_FETCH_ACTION",
								payload: {response},
							};
						}),
						catchError((error: any) => {
							return of({
								type: "MY_FETCH_ACTION",
								payload: { error },
							});
						}),
				);
			}),
	);
};
