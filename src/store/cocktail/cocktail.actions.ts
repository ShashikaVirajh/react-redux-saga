import { createAction, withMatcher } from '../../utils';
import {
  COCKTAIL_ACTION_TYPES,
  TFetchRandomCocktailFailedAction,
  TFetchRandomCocktailRequestAction,
  TFetchRandomCocktailSuccessAction
} from './types/cocktail-action.types';
import { TCustomError, TFetchRandomCocktailSuccessPayload } from './types/cocktail-payload.types';

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
