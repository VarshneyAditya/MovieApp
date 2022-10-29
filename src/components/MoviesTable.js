import React from 'react'

function MoviesTable(props) {
  let {isLoading,content,setContent, cpage,displayMovieCounter, filteredContent}=props;

  function deleteClickHandler(Key){
    let movies = content.filter((movie)=>movie._id!=Key);
    setContent(movies);
  }
  

  return (
    <div>{isLoading == true?<div>"Loading..."</div> :
    <table class="table-auto">
      <thead>
        <tr>
          <th class="w-1/6 text-center	">#</th>
          <th class="w-1/6 text-center	">Title</th>
          <th class="w-1/6 text-center	">Genre</th>
          <th class="w-1/6 text-center	">Views</th>
          <th class="w-1/6 text-center	">Rating</th>
          <th class="w-1/6 text-center	"></th>
        </tr>
      </thead>  
      <tbody>
        {filteredContent.map((movie,idx)=>(
          <tr key={movie._id}>
            <td class="text-center">{idx+1}</td>
            <td class="text-center"	>{movie.title}</td>
            <td class="text-center"	>	{movie.genre.name}</td>
            <td class="text-center"	>{movie.numberInStock}</td>
            <td class="text-center"	>{movie.dailyRentalRate}</td>
            <td><button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"  onClick={()=>deleteClickHandler(movie._id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
      
    </table>
    }</div>
  )
}

export default MoviesTable


