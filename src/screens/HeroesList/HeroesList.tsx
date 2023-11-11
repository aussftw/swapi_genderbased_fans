import React, {useState, useCallback} from 'react';
import {useQuery} from 'react-query';

import {Hero, FetchHeroesResponse} from '../../types/';
import {Text, View} from 'react-native';
import {CountersView} from '../../components/CountersView/CountersView';
import {PaginatedListView} from '../../components/PaginatedListView/PaginatedListView';
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
  const [currentPage, setcurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = useState(0);

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
      if (hero.gender === 'male') {
        setFans({...fans, maleFan: fans.maleFan + 1});
      } else if (hero.gender === 'female') {
        setFans({...fans, femaleFan: fans.femaleFan + 1});
      } else {
        setFans({...fans, otherFan: fans.otherFan + 1});
      }
    },
    [fans],
  );

  const resetFans = useCallback(() => {
    setFans(initialFansState);
  }, []);

  return (
    <View>
      <Text style={{color: 'red'}}>Heroes List</Text>
      <CountersView
        femaleFan={0}
        maleFan={0}
        otherFan={0}
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
