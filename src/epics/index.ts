/**
 * @module Epics/Root
 * @desc Root Epics
 */

import { combineEpics } from 'redux-observable';
import {fetchCharacters} from "./fetchCharacters.epic";

export const rootEpic:any = combineEpics(fetchCharacters);
