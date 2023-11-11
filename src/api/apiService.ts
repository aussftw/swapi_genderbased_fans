import {FetchHeroesResponse} from '../types';

const ITEMS_PER_PAGE: number = 10;
const BASE_URL: string = 'https://swapi.dev/api/people/?page=';

export const fetchHeroes = async (page = 0): Promise<FetchHeroesResponse> => {
  const response = await fetch(`${BASE_URL}${page}`);
  const data = await response.json();
  const totalPages = Math.ceil(data.count / ITEMS_PER_PAGE);

  return {
    data: data.results,
    totalPages,
  };
};
