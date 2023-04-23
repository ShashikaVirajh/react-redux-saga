import { Action, ActionWithPayload } from '../../../utils';
import { TCustomError, TFetchRandomCocktailSuccessPayload } from './cocktail-payload.types';

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
