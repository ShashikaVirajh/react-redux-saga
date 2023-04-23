import { TCustomError } from '@custom-types/error.types';

export type TCocktailState = {
  data: {
    cocktailList: TCocktail[] | [];
    favouriteList: TCocktail[] | [];
    selectedCocktail: TDetailedCocktail | null;
    searchQuery: string | null;
  };
  ui: {
    fetchRandomCocktail: {
      isLoading: boolean;
      errorMessage: TCustomError | null;
      successMessage: string | null;
    };
    fetchDetailedCocktail: {
      isLoading: boolean;
      errorMessage: TCustomError | null;
      successMessage: string | null;
    };
    searchCocktail: {
      isLoading: boolean;
      errorMessage: TCustomError | null;
      successMessage: string | null;
    };
  };
};

export type TCocktail = {
  cocktailId: string;
  cocktailName: string;
  category: string;
  description: string;
  image: string;
};

export type TDetailedCocktail = {
  cocktailId: string;
  cocktailName: string;
  category: string;
  description: string;
  image: string;
  glass: string;
  ingredients: string[];
  isAlcoholic: boolean;
};
