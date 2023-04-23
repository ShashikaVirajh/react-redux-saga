import { CallEffect, ForkEffect, PutEffect } from 'redux-saga/effects';

import {
  TFetchRandomCocktailFailedAction,
  TFetchRandomCocktailRequestAction,
  TFetchRandomCocktailSuccessAction
} from '../cocktail.actions';

export type TFetchRandomCocktailSaga = Generator<
  | CallEffect<TFetchRandomCocktailRequestAction>
  | PutEffect<TFetchRandomCocktailSuccessAction>
  | PutEffect<TFetchRandomCocktailFailedAction>
>;

export type CocktailSagas = Generator<ForkEffect<never>>;
