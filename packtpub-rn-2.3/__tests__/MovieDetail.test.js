import 'react-native';
import React from 'react';
import MovieDetail from '../src/Movies/Components/MovieDetail';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <MovieDetail
      navigation={{
        state: {
          params: {
            title: 'AAAA',
            year: 2020,
            plot: 'Blab lab lab alb abla',
            image: { uri: '' }
          }
        }
      }}
    />
  );
});
