import React, { useEffect } from 'react'
import { getMovies } from '../../services/movies.service'
import { TEXTS } from '../../utils/contants'
import { useDispatch, useSelector } from 'react-redux'
import MovieCard from '../molecules/MovieCard'
import Loader from '../atoms/Loader'
import { loadMoreAction } from '../../redux/actions'

const MoviesList = () => {
  const { pending, moviesRes, error, query, page } = useSelector(
    (state) => state.moviesData
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (!query.length) {
      dispatch(getMovies(page))
    }
  }, [ page, query ])

  const handleLoadMore = () => {
    dispatch(loadMoreAction())
  }

  if (pending && page === 1) {
    return <Loader />
  }

  if (error) {
    return (
        <div className="movies__list error">
            <span>Error Loading content: {error.message}</span>
        </div>
    )
  }

  return (
      <>
          <div className="movies__list">
              {moviesRes &&
          moviesRes.map((movie, i) => <MovieCard key={ i } movie={ movie } />)}
          </div>
          {!query &&
        (pending && page > 1 ? (
            <Loader />
        ) : (
            <div className="movies__list__loadMore">
                <button onClick={ () => handleLoadMore(page + 1) }>
                    {TEXTS.LOAD_MORE_BUTTON} {TEXTS.MOVIES}
                </button>
            </div>
        ))}
      </>
  )
}

export default MoviesList
