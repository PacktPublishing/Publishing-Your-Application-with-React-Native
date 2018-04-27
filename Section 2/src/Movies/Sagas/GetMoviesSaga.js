/* @flow */

import { call, put, takeLatest } from 'redux-saga/effects'
import { getMoviesSuccess, getMoviesError } from '../Actions/GetMoviesActions'
import { getMoviesAPI } from '../API/MoviesAPI'

const movies = [
  {
    image: 'http://www.jellypedia.com/pictures/m020565_small.jpg',
    title: 'Blade Runner 2049',
    year: 2017,
    plot:
      "Thirty years after the events of the first film, a new blade runner, LAPD Officer K (Ryan Gosling), unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard (Harrison Ford), a former LAPD blade runner who has been missing for 30 years."
  },
  {
    image: 'http://www.dvdizzy.com/images/d/dunkirk-film-poster.jpg',
    title: 'Dunkirk',
    year: 2017,
    plot:
      "WWII. The enemy forces have cornered hundreds of thousands of British and French soldiers on the French coast at Dunkirk. A small number of primarily-French soldiers are guarding the perimeter, where the British and French soldiers are amassed, which is getting increasingly smaller as enemy forces advance. Most of those British and French soldiers are now on the beach waiting for destroyers to come and take them back to Britain. Each of the countries are taking care of their own. The British are leaving first and among those the wounded get first priority despite their taking up seven times the space of the able-bodied soldiers. An issue with Dunkirk is that there is only one dock the destroyers can access, which needs to be protected from the enemy bombs. As such, Churchill, newly elected, has put out a call for civilian watercraft to head to Dunkirk both to transport supplies and to transport soldiers from the beach to the destroyers or back to Britain if at all possible. Within this situation, four general stories are told. In one, Commander Bolton, the top British naval officer on the ground, knows deep in his heart that the soldiers are largely sitting ducks on the beach as the enemy planes fly over. He knows that the situation is a Catch-22 for the British in that they need to bring as many soldiers safely home as possible at the depletion of their military resources, which in turn they need to preserve for the day if, but more likely when, the enemies make their way onto British soil. In the second story, a squadron of three RAF spitfires are among those limited air resources that are embarking in dog fights with enemy planes, while protecting the soldiers on the ground. In the process, they have to ensure their own safety in order to provide what is needed for the ground soldiers, which includes knowing about things like fuel levels and having enough to make their way back to home base whenever required. In the third story, two soldiers meet on the beach, the two of them knowing that the longer they remain on the beach, the likelier they are not to survive this skirmish. As such, they try to do whatever they need to to make it onto one of those destroyers or any other watercraft making its way back to Britain. However, making it aboard a ship does not necessarily ensure their survival. And in the final story, Mr. Dawson, his young-adult son Peter and their 17-year-old friend George are on Dawson's pleasure craft making its way to Dunkirk to do their part in the war effort, all realizing the dangers involved. They have to decide at each step along the way if they will focus on personal problems or if they will continue on to assist in the war, as was their first priority when they left Britain."
  },
  {
    image:
      'https://images.fandango.com/r1.0.40/ImageRenderer/131/200/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/189929/last-jedi-poster-full.jpg',
    title: 'Star Wars: The Last Jedi',
    year: 2017,
    plot:
      'Having taken her first steps into the Jedi world, Rey joins Luke Skywalker on an adventure with Leia, Finn and Poe that unlocks mysteries of the Force and secrets of the past.'
  }
]

function getMovies(): Promise {
  return new Promise((resolve: Function) => {
    setTimeout(() => {
      resolve(movies)
    }, 1000)
  })
}

function* fetchMovies(action) {
  // INITIAL VERSION
  // const movies = yield call(getMoviesAPI); //getMovies
  // yield put(getMoviesSuccess(movies));

  // ERROR VERSION
  try {
    const movies = yield call(getMoviesAPI) //getMovies
    yield put(getMoviesSuccess(movies))
  } catch (e) {
    yield put(getMoviesError(e))
  }
}

function* getMoviesSaga() {
  yield takeLatest('GET_MOVIES', fetchMovies)
}

export default getMoviesSaga
