export const API_KEY = "6e42b0cf957ea9babb3db6ce3c173971";
export const URI = "https://api.themoviedb.org/3";
export const API_READ_ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTQyYjBjZjk1N2VhOWJhYmIzZGI2Y2UzYzE3Mzk3MSIsInN1YiI6IjVlN2ZiMjc5NjM1ZTc4MDAxNDEzMjc0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cNlJHx6kLCi1DGrGWq42dJCGKrqx74a9XHsqbYw8vgA";
export const setImagePath = (transformation) =>  (`https://image.tmdb.org/t/p/${transformation}`)

export const transformations = {
    MOVIES_POSTER: 'w220_and_h330_face',
    PROD_COMPANIES: 'w200',
    ORIGINAL: 'original'
}

export const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'Authorization': `Bearer ${API_READ_ACCESS_TOKEN}`
};
