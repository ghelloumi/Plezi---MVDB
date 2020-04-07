import {ACTIONS} from "../utils/contants";
import {combineReducers} from "redux";

const initialMoviesState = {
    pending: false,
    moviesRes: [],
    error: null,
    query: "",
    page: 1
}

const initialMovieDetailsState = {
    pending: false,
    movieDetailsRes: {},
    error: null
}

const moviesData = (state = initialMoviesState, action) => {
    switch (action.type) {
        case ACTIONS.FETCH_MOVIES_PENDING:
            return {
                ...state,
                pending: true
            }
        case ACTIONS.FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                pending: false,
                moviesRes: [...state.moviesRes, ...action.moviesRes.results]
            }
        case ACTIONS.FETCH_MOVIES_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case ACTIONS.FETCH_MOVIE_SEARCH_PENDING:
            return {
                ...state,
                pending: true,
                page: 1
            }
        case ACTIONS.FETCH_MOVIE_SEARCH_SUCCESS:
            return {
                ...state,
                pending: false,
                moviesRes: action.moviesSearchRes.results,
                query: action.query
            }
        case ACTIONS.FETCH_MOVIE_SEARCH_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case ACTIONS.RESET_MOVIE_SEARCH:
            return {
                ...state,
                moviesRes: [],
                query: ''
            }
        case ACTIONS.LOAD_MORE:
            return {
                ...state,
                page: state.page + 1
            }
        default:
            return state;
    }
}

const movieDetailsData = (state = initialMovieDetailsState, action) => {
    switch (action.type) {
        case ACTIONS.FETCH_MOVIE_DETAILS_PENDING:
            return {
                ...state,
                pending: true
            }
        case ACTIONS.FETCH_MOVIE_DETAILS_SUCCESS:
            return {
                ...state,
                pending: false,
                movieDetailsRes: action.movieDetailsRes
            }
        case ACTIONS.FETCH_MOVIE_DETAILS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}

const reducers = combineReducers({
    moviesData,
    movieDetailsData
})

export default reducers
