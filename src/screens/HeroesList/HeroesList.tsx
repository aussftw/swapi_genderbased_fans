import React, {useState, useCallback} from 'react';
import {useQuery} from 'react-query';
import {View} from 'react-native';

import {PaginatedListView} from '../../components/PaginatedListView/PaginatedListView';
import {CountersView} from '../../components/CountersView/CountersView';
import {Hero, FetchHeroesResponse} from '../../types/';
import {fetchHeroes} from '../../api/apiService';

type Fans = {
  maleFan: number;
  femaleFan: number;
  otherFan: number;
};
const initialFansState: Fans = {
  maleFan: 0,
  femaleFan: 0,
  otherFan: 0,
};

export const HeroesList = (): JSX.Element => {
  const [currentPage, setcurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [countedHeroes, setCountedHeroes] = useState(new Set());

  const {isLoading, isError, data, isFetching} = useQuery<
    FetchHeroesResponse,
    Error
  >(['projects', currentPage], () => fetchHeroes(currentPage), {
    keepPreviousData: true,
    onSuccess: data => {
      setTotalPages(data.totalPages);
    },
  });

  const [fans, setFans] = useState<Fans>({
    maleFan: 0,
    femaleFan: 0,
    otherFan: 0,
  });

  const handleFans = useCallback(
    (hero: Hero) => {
      if (countedHeroes.has(hero.name)) {
        setCountedHeroes(prevCountedHeroes => {
          const newCountedHeroes = new Set(prevCountedHeroes);
          newCountedHeroes.delete(hero.name);
          return newCountedHeroes;
        });

        if (hero.gender === 'male') {
          setFans(prevFans => ({...prevFans, maleFan: prevFans.maleFan - 1}));
        } else if (hero.gender === 'female') {
          setFans(prevFans => ({
            ...prevFans,
            femaleFan: prevFans.femaleFan - 1,
          }));
        } else {
          setFans(prevFans => ({...prevFans, otherFan: prevFans.otherFan - 1}));
        }
      } else {
        setCountedHeroes(prevCountedHeroes =>
          new Set(prevCountedHeroes).add(hero.name),
        );

        if (hero.gender === 'male') {
          setFans(prevFans => ({...prevFans, maleFan: prevFans.maleFan + 1}));
        } else if (hero.gender === 'female') {
          setFans(prevFans => ({
            ...prevFans,
            femaleFan: prevFans.femaleFan + 1,
          }));
        } else {
          setFans(prevFans => ({...prevFans, otherFan: prevFans.otherFan + 1}));
        }
      }
    },
    [countedHeroes],
  );

  const resetFans = useCallback(() => {
    setFans(initialFansState);
    setCountedHeroes(new Set());
  }, []);

  return (
    <View>
      <CountersView
        femaleFan={fans.femaleFan}
        maleFan={fans.maleFan}
        otherFan={fans.otherFan}
        clearFans={resetFans}
      />
      <PaginatedListView
        totalPages={totalPages}
        isLoading={isLoading}
        data={data?.data || []}
        isFetching={isFetching}
        isError={isError}
        setPage={setcurrentPage}
        currentPage={currentPage}
        handleFans={handleFans}
      />
    </View>
  );
};
