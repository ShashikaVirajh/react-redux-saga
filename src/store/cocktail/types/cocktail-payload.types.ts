import { TCocktail, TDetailedCocktail } from './cocktail-state.types';

export type TFetchRandomCocktailSuccessPayload = TCocktail[];

export type TFetchDetailedCockatailSuccessPayload = TDetailedCocktail[];

export type TSearchCocktailSuccessPayload = TCocktail[];

export type TCustomError = {
  errorMessage: string;
};
