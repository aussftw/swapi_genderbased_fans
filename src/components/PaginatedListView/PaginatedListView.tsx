import React, {useCallback} from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import {Hero} from '../../types';
import {Card, NavButton} from '../';

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
  const goToNextPage = useCallback(() => setPage(old => old + 1), [setPage]);
  const goToPreviousPage = useCallback(
    () => setPage(old => Math.max(old - 1, 1)),
    [setPage],
  );

  if (isLoading) {
    return <ActivityIndicator size="large" color="brown" />;
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
      <View style={styles.controlsContainer}>
        <NavButton
          text="Previous"
          onPress={goToPreviousPage}
          disabled={isLoading || isFetching || currentPage <= 1}
        />
        <ActivityIndicator size="large" color="brown" animating={isFetching} />
        <NavButton
          text="Next"
          onPress={goToNextPage}
          disabled={isLoading || isFetching || currentPage >= totalPages}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 15,
  },
});
