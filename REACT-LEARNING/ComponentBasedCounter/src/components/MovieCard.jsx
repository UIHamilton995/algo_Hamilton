import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContexts"

const MovieCard = ({ movie }) => {
  const { isFavorites, addToFavorites, removeFromFavorites } = useMovieContext()
  const favorite = isFavorites(movie.id)

  const onFavouriteClick = (e) => {
    e.preventDefault()
    if (favorite) removeFromFavorites(movie.id)
    else addToFavorites(movie)
  }
  
  return (
      <div className="movie-card">
        <div className="movie-poster">
          <img src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <div className="movie-overlay">
            <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavouriteClick}>
              ♥
            </button>
          </div>
        </div>
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.release_date}</p>
        </div>
      </div>
  )
}

export default MovieCard;