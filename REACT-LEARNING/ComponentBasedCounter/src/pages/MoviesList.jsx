import React from 'react'
import MovieCard from '../components/MovieCard'
import { movies } from '../data/movies'

const MoviesList = () => {
  return (
    <div>
        {movies.map((movie, index) => 
            (<MovieCard key={index} movie={movie} />)
        )}
    </div>
  )
}

export default MoviesList
