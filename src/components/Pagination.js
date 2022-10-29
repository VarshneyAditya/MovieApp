import React from 'react'

function Pagination(props) {
  let{content, displayMovieCounter, setCPage,fiteredContentForPagination}=props;
  let pageArray =[];
  for(let i=1;i<=Math.ceil(fiteredContentForPagination.length/displayMovieCounter);i++){
    pageArray.push(i);
  }
  
  return (

    <div >
      {pageArray.map((PageNum) => (<button class="bg-blue-200 text-blue hover:bg-blue-700 hover:text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline" onClick={(e)=>setCPage(e.target.innerText)}>{PageNum}</button>))}      
    </div>
  )
}

export default Pagination

