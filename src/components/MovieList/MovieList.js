import React from 'react'
import MovieCard from "../MovieCard/MovieCard"
const MovieList = ({movies,deleteMovie}) => {
  return (
    <div>{movies.map(el=><MovieCard el={el} key={el.id} deleteMovie={deleteMovie}/>)}</div>
  )
}

export default MovieList