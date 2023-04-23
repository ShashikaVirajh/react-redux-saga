import { all, CallEffect, AllEffect, ForkEffect, PutEffect } from 'redux-saga/effects';

import { cocktailSagas } from './cocktail/cocktail.saga';

import {
  TFetchRandomCocktailFailedAction,
  TFetchRandomCocktailRequestAction,
  TFetchRandomCocktailSuccessAction
} from './cocktail/cocktail.actions';

export type TFetchRandomCocktailSaga = Generator<
  | CallEffect<TFetchRandomCocktailRequestAction>
  | PutEffect<TFetchRandomCocktailSuccessAction>
  | PutEffect<TFetchRandomCocktailFailedAction>
>;

export type CocktailSagas = Generator<ForkEffect<never>>;

export function* rootSaga(): RootSaga {
  yield all([cocktailSagas()]);
}

type RootSaga = Generator<AllEffect<Generator<ForkEffect<never>>>>;
