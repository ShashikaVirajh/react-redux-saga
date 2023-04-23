import { call, put, takeLeading } from 'typed-redux-saga';

import { fetchRandomCocktailFailed, fetchRandomCocktailSuccess } from './cocktail.actions';
import { CocktailService } from './cocktail.service';
import { COCKTAIL_ACTION_TYPES } from './types/cocktail-action.types';
import { CocktailSagas, TFetchRandomCocktailSaga } from './types/cocktail-saga.types';
import { normalizeFetchRandomCocktailsResponse } from '../../normalizers/cocktail.normalizer';
import { TCustomError } from './types/cocktail-payload.types';

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
