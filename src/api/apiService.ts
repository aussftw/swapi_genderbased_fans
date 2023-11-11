import {FetchHeroesResponse} from '../types';

const ITEMS_PER_PAGE: number = 10;

export const fetchHeroes = async (page = 0): Promise<FetchHeroesResponse> => {
  const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  const data = await response.json();
  const totalPages = Math.ceil(data.count / ITEMS_PER_PAGE);

  return {
    data: data.results,
    totalPages,
  };
};
