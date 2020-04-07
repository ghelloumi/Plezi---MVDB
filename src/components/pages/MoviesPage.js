import React from 'react'
import Search from '../organisms/Search'
import MoviesList from '../organisms/MoviesList'

const MoviesPage = () => {
  return (
      <div className="movies__page">
          <div className="movies__page__tools">
              <Search />
          </div>
          <div className="movies__page__content">
              <MoviesList />
          </div>
      </div>
  )
}

export default MoviesPage
