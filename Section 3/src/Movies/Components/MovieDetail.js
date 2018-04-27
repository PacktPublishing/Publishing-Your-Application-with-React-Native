/* @flow */

import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import MoviePoster from './MoviePoster';
import MovieTitle from './MovieTitle';
import MovieYear from './MovieYear';
import MoviePlot from './MoviePlot';

class MovieDetail extends React.Component<{}> {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: navigation.state.params.title
  });

  render() {
    return (
      <ScrollView style={styles.container}>
        <MoviePoster source={this.props.navigation.state.params.image} />
        <MovieTitle title={this.props.navigation.state.params.title} />
        <MovieYear year={this.props.navigation.state.params.year} />
        <MoviePlot plot={this.props.navigation.state.params.plot} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  }
});

export default MovieDetail;
