import { TCocktail } from '../cocktail.reducer';

export type TFetchRandomCocktailSuccessPayload = TCocktail[];

export type TCustomError = {
  errorMessage: string;
};
