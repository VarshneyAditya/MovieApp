import React from 'react'
import Genre from './Genre'
import MoviesSec from './MoviesSec'
function Main() {
  let [genre, setGenre] = React.useState("");
  let [cpage, setCPage] =React.useState(1);
  function genreClickHanndler(genre){
    setGenre(genre);
  }
  return (
    <div class="flex">
      <Genre clickGenre={(genre)=>genreClickHanndler(genre)}
              setCPage={setCPage}
              cpage={cpage}
              />
      <MoviesSec genre={genre}
              setCPage={setCPage}
              cpage={cpage}/>
    </div>
  )
}

export default Main