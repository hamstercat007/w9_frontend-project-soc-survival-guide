//render search results
import ResultItem from "../ResultItem";
import "./index.css";
import {useState} from "react";

function SearchResults({ searchResults }) {
  const [position, setPosition] = useState(0)

  let displayedArray = searchResults.slice(position,position+7)

  function nextButton(){
    if (position < searchResults.length){
      setPosition(position+7)
    } else{
      return
    }
  }

  function previousButton(){
    if (position > 0){
      setPosition(position-7)
    } else{
      return
    }
  }

  function createResultItem(item, index){
    return<ResultItem properties={item} key={index} />
  }
  return (
    <div className="searchResults">
    {displayedArray.map(createResultItem)}
    <button type="button" onClick={previousButton}>Previous</button>
    <button type="button" onClick={nextButton}>Next</button>
    </div>
 
  );
}

export default SearchResults;


//Take in an array of objects
//it maps out a componenet for each object
//Make a new array which is a slice of the original array
//map that array 
//change the slice index via state vairable, which is controlled by buttons