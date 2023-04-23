import { Action, ActionWithPayload, createAction, withMatcher } from '../../utils';

import { TCustomError, TFetchRandomCocktailSuccessPayload } from './types/cocktail-payload.types';

export enum COCKTAIL_ACTION_TYPES {
  FETCH_RANDOM_COCKTAIL_REQUEST = 'COCKTAIL/FETCH_RANDOM_COCKTAIL_REQUEST',
  FETCH_RANDOM_COCKTAIL_REQUEST_SUCCESS = 'COCKTAIL/FETCH_RANDOM_COCKTAIL_REQUEST_SUCCESS',
  FETCH_RANDOM_COCKTAIL_REQUEST_FAILED = 'COCKTAIL/FETCH_RANDOM_COCKTAIL_REQUEST_FAILED'
}

export type TFetchRandomCocktailRequestAction =
  Action<COCKTAIL_ACTION_TYPES.FETCH_RANDOM_COCKTAIL_REQUEST>;

export type TFetchRandomCocktailSuccessAction = ActionWithPayload<
  COCKTAIL_ACTION_TYPES.FETCH_RANDOM_COCKTAIL_REQUEST_SUCCESS,
  TFetchRandomCocktailSuccessPayload
>;

export type TFetchRandomCocktailFailedAction = ActionWithPayload<
  COCKTAIL_ACTION_TYPES.FETCH_RANDOM_COCKTAIL_REQUEST_FAILED,
  TCustomError
>;

export const fetchRandomCocktailRequest = withMatcher(
  (): TFetchRandomCocktailRequestAction =>
    createAction(COCKTAIL_ACTION_TYPES.FETCH_RANDOM_COCKTAIL_REQUEST)
);

export const fetchRandomCocktailSuccess = withMatcher(
  (payload: TFetchRandomCocktailSuccessPayload): TFetchRandomCocktailSuccessAction =>
    createAction(COCKTAIL_ACTION_TYPES.FETCH_RANDOM_COCKTAIL_REQUEST_SUCCESS, payload)
);

export const fetchRandomCocktailFailed = withMatcher(
  (payload: TCustomError): TFetchRandomCocktailFailedAction =>
    createAction(COCKTAIL_ACTION_TYPES.FETCH_RANDOM_COCKTAIL_REQUEST_FAILED, payload)
);
