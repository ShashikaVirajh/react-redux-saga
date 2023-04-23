import { COCKTAIL_LIST_LENGTH } from '@constants/app.constants';
import axios from 'axios';

import { COCKTAIL_ENDPOINTS } from './cocktail.endpoints';

export class CocktailService {
  static FetchRandomCocktails = async (): Promise<any> => {
    const proms = [];

    try {
      for (let i = 1; i <= COCKTAIL_LIST_LENGTH; i++) {
        proms.push(
          axios.get(COCKTAIL_ENDPOINTS.FETCH_RANDOM_COCKTAIL_REQUEST, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
        );
      }
      return await Promise.all(proms);
    } catch (error) {
      return error;
    }
  };

  static fetchCocktailById = async (id: string): Promise<any> => {
    try {
      const response = await axios.get(COCKTAIL_ENDPOINTS.FETCH_COCKTAIL_BY_ID(id), {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      return response;
    } catch (error) {
      return error;
    }
  };

  static SearchCocktail = async (serachQuery: string): Promise<any> => {
    try {
      const response = await axios.get(COCKTAIL_ENDPOINTS.SEARCH_COCKTAIL_BY_NAME(serachQuery), {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      return response;
    } catch (error) {
      return error;
    }
  };
}
