import React from 'react'
import Search from './Search';
import MoviesTable from './MoviesTable';
import Pagination from './Pagination';

function MoviesSec(props) {
  let [searchText, setSearchText] = React.useState("");
  let [displayMovieCounter, setdisplayMovieCounter]=React.useState(9);

  function textSearchHandler(searchedText){
    setSearchText(searchedText);
  }

  function displayMovieCountHandler(count){
    setdisplayMovieCounter(count);
  }
  return (
    <div>
        <Search textSearchFunction={(searchedText)=>textSearchHandler(searchedText)} displayMovieCount={(count)=>displayMovieCountHandler(count)}/>
        <MoviesTable searchText={searchText} displayMovieCounter={displayMovieCounter} genreFilter={props.genre}/>
        <Pagination/>
    </div>
    

  )
}

export default MoviesSec