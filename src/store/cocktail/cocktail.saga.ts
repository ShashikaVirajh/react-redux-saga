import { call, put, takeLeading } from 'typed-redux-saga';

import { fetchRandomCocktailFailed, fetchRandomCocktailSuccess } from './cocktail.actions';
import { CocktailService } from './cocktail.service';
import {
  COCKTAIL_ACTION_TYPES,
  TFetchRandomCocktailFailedAction,
  TFetchRandomCocktailRequestAction,
  TFetchRandomCocktailSuccessAction
} from '../cocktail/cocktail.actions';
import { normalizeFetchRandomCocktailsResponse } from '../../normalizers/cocktail.normalizer';
import { TCustomError } from './types/cocktail-payload.types';

import { CallEffect, ForkEffect, PutEffect } from 'redux-saga/effects';

export type TFetchRandomCocktailSaga = Generator<
  | CallEffect<TFetchRandomCocktailRequestAction>
  | PutEffect<TFetchRandomCocktailSuccessAction>
  | PutEffect<TFetchRandomCocktailFailedAction>
>;

export type CocktailSagas = Generator<ForkEffect<never>>;

function* fetchRandomCocktailSaga(): TFetchRandomCocktailSaga {
  try {
    const data = yield* call(CocktailService.FetchRandomCocktails);
    const getCocktailSuccessPayload = normalizeFetchRandomCocktailsResponse(data);

    yield* put(fetchRandomCocktailSuccess(getCocktailSuccessPayload));
  } catch (error) {
    yield* put(fetchRandomCocktailFailed(error as TCustomError));
  }
}

export function* cocktailSagas(): CocktailSagas {
  yield* takeLeading(COCKTAIL_ACTION_TYPES.FETCH_RANDOM_COCKTAIL_REQUEST, fetchRandomCocktailSaga);
}
