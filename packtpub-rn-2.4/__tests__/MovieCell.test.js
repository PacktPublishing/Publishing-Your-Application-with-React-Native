import 'react-native'
import React from 'react'
import MovieCell from '../src/Movies/Components/MovieCell'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MovieCell
        image={require('../src/Movies/Components/img/disc.png')}
        title="Testing"
        year={2020}
        plot="Bla bla blabla bla bla"
        onPress={() => null}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
