import React from 'react'
import Search from './Search';
import MoviesTable from './MoviesTable';
import Pagination from './Pagination';

function MoviesSec(props) {
  let [searchText, setSearchText] = React.useState("");
  let [displayMovieCounter, setdisplayMovieCounter]=React.useState(4);
  let [isLoading, setLoaded] = React.useState(true);
  let [content, setContent] = React.useState("");
  let {cpage, setCPage} =props;

  


  function textSearchHandler(searchedText){
    setSearchText(searchedText);
  }

  function displayMovieCountHandler(count){
    setdisplayMovieCounter(count);
  }

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

  // function pageClickHandler(pageNo){
  //   setCPage(pageNo);
  // }

    
  let fiteredContentForPagination;
  let filteredContent=[];
  
  if(searchText){
    filteredContent = content.filter((movie)=>movie.title.toLowerCase().includes(searchText.toLowerCase()));
  }
  else{
    filteredContent = content;
  }
  if(props.genre){
    filteredContent = filteredContent.filter((movie)=>movie.genre.name==props.genre);
  }
  fiteredContentForPagination=filteredContent;
  
  let sidx = (cpage-1)*displayMovieCounter;
  let eidx=  sidx+displayMovieCounter;
  filteredContent = filteredContent.slice(sidx,eidx);
  

  return (
    <div>
        <Search textSearchFunction={(searchedText)=>textSearchHandler(searchedText)} displayMovieCount={(count)=>displayMovieCountHandler(count)}/>
        <MoviesTable isLoading={isLoading}  
                     searchText={searchText} 
                     displayMovieCounter={displayMovieCounter} 
                     filteredContent={filteredContent}
                     content={content}
                     setContent={setContent}
                     cpage={cpage}
                    />

        <Pagination  displayMovieCounter={displayMovieCounter} 
                     content={content}
                     fiteredContentForPagination={fiteredContentForPagination}
                    //  pageClickHandler={(pageNo)=>pageClickHandler(pageNo)
                      cpage={cpage}
                      setCPage={setCPage}
                      
                     />
    </div>
    

  )
}

export default MoviesSec