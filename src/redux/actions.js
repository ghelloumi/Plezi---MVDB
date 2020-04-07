import { ACTIONS } from '../utils/contants'

// Movies Actions
export const moviesActions = {
  fetchMoviesPending: () => {
    return {
      type: ACTIONS.FETCH_MOVIES_PENDING,
    }
  },
  fetchMoviesSuccess: (moviesRes) => {
    return {
      type: ACTIONS.FETCH_MOVIES_SUCCESS,
      moviesRes,
    }
  },
  fetchMoviesError: (error) => {
    return {
      type: ACTIONS.FETCH_MOVIES_ERROR,
      error,
    }
  },
}

// Movie Details Actions
export const movieDetailsActions = {
  fetchMovieDetailsPending: () => {
    return {
      type: ACTIONS.FETCH_MOVIE_DETAILS_PENDING,
    }
  },
  fetchMovieDetailsSuccess: (movieDetailsRes) => {
    return {
      type: ACTIONS.FETCH_MOVIE_DETAILS_SUCCESS,
      movieDetailsRes,
    }
  },
  fetchMovieDetailsError: (error) => {
    return {
      type: ACTIONS.FETCH_MOVIE_DETAILS_ERROR,
      error,
    }
  },
}

// Movie Search Actions
export const moviesSearchActions = {
  fetchMoviesSearchPending: () => {
    return {
      type: ACTIONS.FETCH_MOVIE_SEARCH_PENDING,
    }
  },
  fetchMoviesSearchSuccess: (moviesSearchRes, query) => {
    return {
      type: ACTIONS.FETCH_MOVIE_SEARCH_SUCCESS,
      moviesSearchRes,
      query,
    }
  },
  fetchMoviesSearchError: (error) => {
    return {
      type: ACTIONS.FETCH_MOVIE_SEARCH_ERROR,
      error,
    }
  },
  resetSearchAction: () => {
    return {
      type: ACTIONS.RESET_MOVIE_SEARCH,
    }
  },
}

export const loadMoreAction = () => {
  return {
    type: ACTIONS.LOAD_MORE,
  }
}
