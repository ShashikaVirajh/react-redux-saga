import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const setMiddleware = (getDefaultMiddleware: any): any =>
  getDefaultMiddleware({
    thunk: false
  }).concat(middlewares);

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: setMiddleware
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export { store };
