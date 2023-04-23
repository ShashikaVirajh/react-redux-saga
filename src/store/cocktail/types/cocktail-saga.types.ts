import { CallEffect, ForkEffect, PutEffect } from 'redux-saga/effects';

import {
  TFetchDetailedCocktailFailedAction,
  TFetchDetailedCocktailRequestAction,
  TFetchDetailedCocktailSuccessAction,
  TFetchRandomCocktailFailedAction,
  TFetchRandomCocktailRequestAction,
  TFetchRandomCocktailSuccessAction,
  TSearchCocktailFailedAction,
  TSearchCocktailRequestAction,
  TSearchCocktailSuccessAction
} from './cocktail-action.types';

export type TFetchRandomCocktailSaga = Generator<
  | CallEffect<TFetchRandomCocktailRequestAction>
  | PutEffect<TFetchRandomCocktailSuccessAction>
  | PutEffect<TFetchRandomCocktailFailedAction>
>;

export type TFetchDetailedCocktailSaga = Generator<
  | CallEffect<TFetchDetailedCocktailRequestAction>
  | PutEffect<TFetchDetailedCocktailSuccessAction>
  | PutEffect<TFetchDetailedCocktailFailedAction>
>;

export type TSearchCocktailSaga = Generator<
  | CallEffect<TSearchCocktailRequestAction>
  | PutEffect<TSearchCocktailSuccessAction>
  | PutEffect<TSearchCocktailFailedAction>
>;

export type CocktailSagas = Generator<ForkEffect<never>>;
