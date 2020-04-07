import logo from "../assets/logo.png"
import loader from "../assets/loader.gif"
import imageNotFound from "../assets/imageNotFound.png"
import close from "../assets/close.jpg"
import age from "../assets/age.png"
import imdb from "../assets/imdb.png"

export const ACTIONS = {
    FETCH_MOVIES_PENDING: 'FETCH_MOVIES_PENDING',
    FETCH_MOVIES_SUCCESS: 'FETCH_MOVIES_SUCCESS',
    FETCH_MOVIES_ERROR: 'FETCH_MOVIES_ERROR',
    FETCH_MOVIE_DETAILS_PENDING: 'FETCH_MOVIE_DETAILS_PENDING',
    FETCH_MOVIE_DETAILS_SUCCESS: 'FETCH_MOVIE_DETAILS_SUCCESS',
    FETCH_MOVIE_DETAILS_ERROR: 'FETCH_MOVIE_DETAILS_ERROR',
    FETCH_MOVIE_SEARCH_PENDING: 'FETCH_MOVIE_SEARCH_PENDING',
    FETCH_MOVIE_SEARCH_SUCCESS: 'FETCH_MOVIE_SEARCH_SUCCESS',
    FETCH_MOVIE_SEARCH_ERROR: 'FETCH_MOVIE_SEARCH_ERROR',
    LOAD_MORE: 'LOAD_MORE',
    RESET_MOVIE_SEARCH: 'RESET_MOVIE_SEARCH'
}

export const TEXTS = {
    APP_TITLE: "Plezi App For theMovieDb",
    LOAD_MORE_BUTTON: "Load more",
    MOVIES: "movies",
    LATEST: "Latest",
    TOP_RATED: "Top rated",
    GENRES: "Genres",
    OVERVIEW: "Overview",
    PROD_COMPANIES: "Production Companies",
    VOTE_AVERAGE: "Vote Average",
    SEARCH: "Type to search..."
}

export const ALTS = {
    LOGO_ALT: "Logo picture for the app",
    LOADING_ALT: "Loader animation",
    MOVIE_CARD_ALT: "Movie Poster",
    CLOSE_MODEL_ALT: "Close the model button",
    PROD_COUNTRY_FLAG_ALT: "Production Country Flag",
    PROD_COMPANIE_LOGO: "Production company logo",
    AGE_ADULT: "Adult age restriction",
    IMDB_ICON_ALT: "Imdb link"
}

export const IMAGES = {
    logo, loader, imageNotFound, close, age, imdb
}
