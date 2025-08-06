import { useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css"

const Home = () => {

  const movies = [
    {id: 1, title: 'Lord Hamilton', releaseDate: '2025'},
    {id: 2, title: 'Man Hamilton', releaseDate: '1995'},
    {id: 3, title: 'Egbonstic', releaseDate: '2025'}
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    alert(searchQuery )
  }

  const [searchQuery, setSearchQuery] = useState('')

  return (
    <>
      <div className="home">
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Type in to search a movie..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value )}
          />
          <button type="submit" className="search-button">Search</button>
        </form>
        <div className="movies-grid">
          {movies.map(
            (movie) => 
              movie.title.toLowerCase().includes(searchQuery.toLowerCase()) && (
              <MovieCard movie={movie} key={movie.id} />
            )
          )}
        </div>
      </div>
    </>
  )
}

export default Home;



// When a state change occurs, the entire component is re-ran or re-rendered