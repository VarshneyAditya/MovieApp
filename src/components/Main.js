import React from 'react'
import Genre from './Genre'
import MoviesSec from './MoviesSec'
function Main() {
  let [genre, setGenre] = React.useState("");
  function genreClickHanndler(genre){
    setGenre(genre);
  }
  return (
    <div class="flex">
      <Genre clickGenre={(genre)=>genreClickHanndler(genre)}/>
      <MoviesSec genre={genre}/>
    </div>
  )
}

export default Main