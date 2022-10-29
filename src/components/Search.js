import React from 'react'

function Search(props) {
  let [searchInput, setSearchInput]=React.useState("");
  let [displayMovieCounter, setDisplayMovieCounter]=React.useState("");

  function searchInputHandler(e){
    setSearchInput(e.target.value);
    props.textSearchFunction(e.target.value);
  }
  function DisplayMovieCounterHandler(e){
    setDisplayMovieCounter(e.target.value);
    props.displayMovieCount(e.target.value);
  }

  return (
    <div class="flex">
        <input value={searchInput} onChange={(e)=>searchInputHandler(e)}  class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2" id="username" type="text" placeholder="Movie Name" ></input>
        <input value={displayMovieCounter} onChange={(e)=>DisplayMovieCounterHandler(e)}  class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"  type="number" placeholder="Select" min="1" ></input>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded focus:outline-none focus:shadow-outline" >New</button>
    </div>
  )
}

export default Search