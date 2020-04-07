import {setImagePath} from "../config/api.config";

export const formatImageLink = (path, transformation) => {
    return setImagePath(transformation) + path
}

export const formatFlagLink = (country) => {
    return `https://ipdata.co/flags/${country.toLowerCase()}.png`
}

export const formatIMDBLink = (id) => {
    return `https://www.imdb.com/title/${id}/`
}