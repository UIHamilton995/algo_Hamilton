const API_KEY = "e1418ed303be1ad223118f27eb235764"
const BASE_URL = "https://api.themoviedb.org/3" 

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
  const data = await response.json()
  return data.results
}

export const searchPopularMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
  const data = await response.json()
  return data.results
}