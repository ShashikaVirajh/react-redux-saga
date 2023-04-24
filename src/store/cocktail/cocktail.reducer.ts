import { AnyAction } from 'redux';

import {
  fetchRandomCocktailFailed,
  fetchRandomCocktailRequest,
  fetchRandomCocktailSuccess
} from './cocktail.actions';

export type TCocktailState = {
  cocktailList: TCocktail[] | [];
  loading: boolean;
  error: string | null;
};

export type TCocktail = {
  cocktailId: string;
  cocktailName: string;
  category: string;
  description: string;
  image: string;
};

const INITIAL_STATE: TCocktailState = {
  cocktailList: [],
  loading: false,
  error: null
};

export const cocktailReducer = (state = INITIAL_STATE, action: AnyAction): TCocktailState => {
  if (fetchRandomCocktailRequest.match(action)) {
    return handleFetchRandomCocktailRequest(state);
  }

  if (fetchRandomCocktailSuccess.match(action)) {
    return handleFetchRandomCocktailSuccess(state, action);
  }

  if (fetchRandomCocktailFailed.match(action)) {
    return handleFetchRandomCocktailFailed(state, action);
  }

  return state;
};

const handleFetchRandomCocktailRequest = (state: TCocktailState): TCocktailState => ({
  ...state,
  loading: true
});

const handleFetchRandomCocktailSuccess = (
  state: TCocktailState,
  action: AnyAction
): TCocktailState => ({
  ...state,
  cocktailList: action.payload,
  loading: false,
  error: null
});

const handleFetchRandomCocktailFailed = (
  state: TCocktailState,
  action: AnyAction
): TCocktailState => ({
  ...state,
  cocktailList: [],
  loading: false,
  error: action.payload
});
