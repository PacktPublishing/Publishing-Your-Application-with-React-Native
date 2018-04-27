/* @flow */

import { StackNavigator } from 'react-navigation';
import MoviesList from '../Components/MoviesList';
import MovieDetail from '../Components/MovieDetail';

const RootNavigator = StackNavigator({
  MoviesList: {
    screen: MoviesList,
    navigationOptions: {
      headerTitle: 'Movies',
      headerTitleStyle: {
        fontFamily: 'Avenir Next'
      }
    }
  },
  MovieDetail: {
    screen: MovieDetail,
    navigationOptions: {
      headerTitleStyle: {
        fontFamily: 'Avenir Next'
      }
    }
  }
});

export default RootNavigator;
