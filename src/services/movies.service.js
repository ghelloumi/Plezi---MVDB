import { headers, URI } from '../config/api.config'

import {
  movieDetailsActions,
  moviesActions,
  moviesSearchActions,
} from '../redux/actions'

export const getMovies = (page) => async (dispatch) => {
  dispatch(moviesActions.fetchMoviesPending())
  try {
    const res = await fetch(`${ URI }/movie/popular?page=${ page }&language=en_US`, {
      method: 'GET',
      headers,
    })
    const resJson = await res.json()
    if (resJson.error) {
      throw resJson.error
    }
    dispatch(moviesActions.fetchMoviesSuccess(resJson))
    return resJson
  } catch (e) {
    dispatch(moviesActions.fetchMoviesError(e))
  }
}

export const getMovieDetails = (movieId) => async (dispatch) => {
  dispatch(movieDetailsActions.fetchMovieDetailsPending())
  try {
    const res = await fetch(`${ URI }/movie/${ movieId }?language=en_US`, {
      method: 'GET',
      headers,
    })
    const resJson = await res.json()
    if (resJson.error) {
      throw resJson.error
    }
    dispatch(movieDetailsActions.fetchMovieDetailsSuccess(resJson))
    return resJson
  } catch (e) {
    dispatch(movieDetailsActions.fetchMovieDetailsError(e))
  }
}

export const getSearchResults = (page, query) => async (dispatch) => {
  if (query.length > 0) {
    dispatch(moviesSearchActions.fetchMoviesSearchPending())
    try {
      const res = await fetch(
        `${ URI }/search/movie?query=${ query }&page=${ page }&language=en_US`,
        {
          method: 'GET',
          headers,
        }
      )
      const resJson = await res.json()
      if (resJson.error) {
        throw resJson.error
      }
      dispatch(moviesSearchActions.fetchMoviesSearchSuccess(resJson, query))
      return resJson
    } catch (e) {
      dispatch(moviesSearchActions.fetchMoviesSearchError(e))
    }
  } else {
    dispatch(moviesSearchActions.resetSearchAction({}))
  }
}
