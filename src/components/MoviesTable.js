import React from 'react'

function MoviesTable(props) {
  let [isLoading, setLoaded] = React.useState(true);
  let [content, setContent] = React.useState("");
  
  React.useEffect(async function(){
    // let response = await fetch('https://react-backend101.herokuapp.com/movies')
    // let responseJson = await response.json();
    let movies =[
      {"_id":"5b21ca3eeb7f6fbccd471815","title":"Terminator", "genre":{"_id":"5b21ca3eeb7f6fbccd471818","name":"Action"}, "numberInStock": 6, "dailyRentalRate":2.5},
      
      {"_id":"5b21ca3eeb7f6fbccd471816","title":"Die Hard", "genre":{"_id":"5b21ca3eeb7f6fbccd471818","name":"Action"}, "numberInStock": 5, "dailyRentalRate":3.0 },
      
      {"_id":"5b21ca3eeb7f6fbccd471817","title":"Get Out", "genre":{"_id":"5b21ca3eeb7f6fbccd471820", "name": "Thriller"},"numberInStock": 8, "dailyRentalRate":3.5},
      
      {"_id":"5b21ca3eeb7f6fbccd471819","title":"Trip to Italy", "genre":{"_id":"5b21ca3eeb7f6fbccd471814", "name": "Comedy"}, "numberInStock": 7, "dailyRentalRate":3.5},
      
      {"_id":"5b21ca3eeb7f6fbccd47181a","title":"Airplane", "genre": {"_id":"5b21ca3eeb7f6fbccd471814","name":"Comedy"}, "numberInStock": 7, "dailyRentalRate":3.5},
      
      {"_id":"5b21ca3eeb7f6fbccd47181b","title":"Wedding Crashers", "genre": {"_id":"5b21ca3eeb7f6fbccd471814","name":"Comedy"}, "numberInStock":7,"dailyRentalRate":3.5},
      
      {"_id":"5b21ca3eeb7f6fbccd47181e","title":"Gone Girl", "genre": {"_id":"5b21ca3eeb7f6fbccd471820", "name": "Thriller"},"numberInStock": 7, "dailyRentalRate":4.5},
      
      {"_id":"5b21ca3eeb7f6fbccd47181f","title":"The Sixth Sense", "genre": {"_id":"5b21ca3eeb7f6fbccd471820", "name": "Thriller"}, "numberInStock": 4, "dailyRentalRate":3.5},
      
      {"_id":"5b21ca3eeb7f6fbccd471821","title":"The Avengers", "genre": {"_id":"5b21ca3eeb7f6fbccd471818","name":"Action"}, "numberInStock":7,"dailyRentalRate":3.5}
      ]
    setContent(movies);
    setLoaded(false);
    
  },[])

  function deleteClickHandler(Key){
    let movies = content.filter((movie)=>movie._id!=Key);
    setContent(movies);
  }

  let filteredContent = [];
  if(props.searchText){
    filteredContent = content.filter((movie)=>movie.title.toLowerCase().includes(props.searchText.toLowerCase()));
  }
  else{
    filteredContent = content;
  }
  if(props.genreFilter){
    filteredContent = filteredContent.filter((movie)=>movie.genre.name==props.genreFilter);
  }
  if(props.displayMovieCounter<9){
      filteredContent = filteredContent.slice(0,props.displayMovieCounter);
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


