export const URI = process.env.REACT_APP_URI;
export const setImagePath = (transformation) => (`https://image.tmdb.org/t/p/${transformation}`)

export const transformations = {
    MOVIES_POSTER: 'w220_and_h330_face',
    PROD_COMPANIES: 'w200',
    ORIGINAL: 'original'
}

export const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'Authorization': `Bearer ${process.env.REACT_APP_API_READ_ACCESS_TOKEN}`
};
