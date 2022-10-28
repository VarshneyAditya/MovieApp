import React from 'react'

function Genre(props) {
  let [isLoading, setLoaded]= React.useState(true);
  let [genre, setGenre] = React.useState("");
  React.useEffect(async function(){
    // let response = await fetch('https://react-backend101.herokuapp.com/genres')
    // let responseJson = await response.json();
    // setGenre(responseJson.genres);

    let genres =[{"_id":"5621ca3eeb7f6fbccd471818","name":"Action"},{"_id":"5b21ca3eeb7f6fbccd471814","name":"Comedy"},{"_id":"5621ca3eeb7f6fbccd471820","name":"Thriller"}]
    setGenre(genres);
    setLoaded(false);
  },[])

  function genreClickHandler(e){
    if(e.target.outerText=="All Genres"){
      props.clickGenre("");
    }
    else{
      props.clickGenre(e.target.outerText);
    }
  }

  return (
    <div class="mr-6">
      {isLoading==true?<div>isLoading...</div>:
          
          <div >
              <div class="py-3 px-6 border-solid border-2 border-black-700 font-bold" onClick={(e)=>genreClickHandler(e)}>All Genres</div>
              {genre.map((genre)=><div class="py-3 px-6 border-solid border-2 border-black-700  font-bold" onClick={(e)=>genreClickHandler(e)}>{genre.name}</div>)}
          </div>
      
      }
    </div>
  )
}

export default Genre