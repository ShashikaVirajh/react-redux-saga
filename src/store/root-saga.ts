import { all, AllEffect, ForkEffect } from 'redux-saga/effects';

import { cocktailSagas } from './cocktail/cocktail.saga';

export function* rootSaga(): RootSaga {
  yield all([cocktailSagas()]);
}

type RootSaga = Generator<AllEffect<Generator<ForkEffect<never>>>>;
