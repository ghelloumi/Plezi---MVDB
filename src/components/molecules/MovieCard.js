import React, {useState} from 'react';
import Image from "../atoms/Image";
import {ALTS, IMAGES} from "../../utils/contants";
import Modal from "../atoms/Modal";
import MovieDetails from "../organisms/MovieDetails";
import {formatImageLink} from "../../utils/functions";
import {transformations} from "../../config/api.config";

const MovieCard = ({movie}) => {
    const [modal, setModal] = useState(false)

    return (
        <div className="movie__card" onClick={() => setModal(true)}>
            <Image alt={ALTS.MOVIE_CARD_ALT} src={formatImageLink(movie.poster_path, transformations.MOVIES_POSTER)}/>
            <div className="movie__card__info">
                <span>
                    {movie.vote_average}
                    {movie.adult && <Image alt={ALTS.AGE_ADULT} src={IMAGES.age}/>}
                </span>
                <span>{movie.original_title}</span>
                <span>{movie.release_date}</span>
            </div>
            {modal && <Modal close={() => setModal(false)}>
                <span>{movie.original_title}</span>
                <MovieDetails movieId={movie.id}/>
            </Modal>}
        </div>
    );
}

export default MovieCard;
