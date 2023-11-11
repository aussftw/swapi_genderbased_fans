import React from 'react';
import {FlatList, View, Text, Button, ActivityIndicator} from 'react-native';

import {Hero} from '../../types';
import {Card} from '../Card/Card';

type PaginatedListViewProps = {
  data: Hero[];
  isFetching: boolean;
  isError: boolean;
  setPage: (page: number | ((prevPage: number) => number)) => void;
  currentPage: number;
  totalPages: number;
  isLoading: boolean;
  handleFans: (hero: Hero) => void;
};

export const PaginatedListView = ({
  data,
  isLoading,
  isFetching,
  isError,
  setPage,
  currentPage,
  totalPages,
  handleFans,
}: PaginatedListViewProps) => {
  const goToNextPage = () => setPage(old => old + 1);
  const goToPreviousPage = () => setPage(old => Math.max(old - 1, 1));

  console.log(totalPages, data);

  if (isLoading) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }

  if (isError) {
    return <Text>Something went wrong</Text>;
  }

  return (
    <>
      <FlatList
        data={data}
        keyExtractor={item => item.url}
        renderItem={({item}) => <Card hero={item} handleFans={handleFans} />}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10,
        }}>
        <Button
          title="Previous"
          onPress={goToPreviousPage}
          disabled={isLoading || isFetching || currentPage <= 1}
        />
        <Button
          title="Next"
          onPress={goToNextPage}
          disabled={isLoading || isFetching || currentPage >= totalPages}
        />
      </View>
    </>
  );
};
