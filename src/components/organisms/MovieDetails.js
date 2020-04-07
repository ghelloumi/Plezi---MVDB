import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMovieDetails} from "../../services/movies.service";
import Loader from "../atoms/Loader";
import Image from "../atoms/Image";
import {ALTS, IMAGES, TEXTS} from "../../utils/contants";
import {formatFlagLink, formatImageLink, formatIMDBLink} from "../../utils/functions";
import {transformations} from "../../config/api.config";

const MovieDetails = ({movieId}) => {
    const {pending, movieDetailsRes, error} = useSelector(state => state.movieDetailsData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieDetails(movieId))
    }, [dispatch]);

    if (pending) {
        return <Loader/>
    }

    if (error) {
        return (
            <div className="movies__list error">
                <span>Error Loading content: {error}</span>
            </div>
        )
    }

    return (
        <div className="movie__details">
            {movieDetailsRes &&
            <>
                <div className="movie__details__main">
                    <div className="poster">
                        <a href={movieDetailsRes.homepage}>
                            <Image alt={ALTS.MOVIE_CARD_ALT}
                               src={formatImageLink(movieDetailsRes.poster_path, transformations.MOVIES_POSTER)}/>
                        </a>
                    </div>
                    <div className="main__details">
                        <span>{movieDetailsRes.status}: {movieDetailsRes.release_date}</span>
                        <span>{TEXTS.VOTE_AVERAGE}: {movieDetailsRes.vote_average}</span>
                        <div className="main__details__productionCountries">
                            {movieDetailsRes.production_countries && movieDetailsRes.production_countries.map(e => (
                                <Image key={e.iso_3166_1} alt={ALTS.PROD_COUNTRY_FLAG_ALT}
                                       src={formatFlagLink(e.iso_3166_1)}/>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="movie__details__content">
                    <div>
                        <h5>{TEXTS.GENRES}</h5>
                        <p>
                            {movieDetailsRes.genres && movieDetailsRes.genres.map((e,i) => (
                                <span key={i}>{e.name}, </span>
                            ))}
                        </p>
                    </div>
                    <div>
                        <h5>{TEXTS.OVERVIEW}</h5>
                        <p>{movieDetailsRes.overview}</p>
                    </div>
                    <div>
                        <h5>{TEXTS.PROD_COMPANIES}</h5>
                        <div>
                            {movieDetailsRes.production_companies && movieDetailsRes.production_companies.map(e => (
                                <Image key={e.id} src={formatImageLink(e.logo_path, transformations.PROD_COMPANIES)}
                                       alt={ALTS.PROD_COMPANIE_LOGO}/>
                            ))}
                        </div>
                    </div>
                    <div className="imdb">
                        <a href={formatIMDBLink(movieDetailsRes.imdb_id)}>
                            <Image src={IMAGES.imdb} alt={ALTS.IMDB_ICON_ALT}/>
                        </a>
                    </div>
                </div>
            </>
            }
        </div>
    );
}

export default MovieDetails;
