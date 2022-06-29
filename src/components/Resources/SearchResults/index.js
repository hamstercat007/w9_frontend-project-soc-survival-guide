//render search results
import ResultItem from "../ResultItem";
import "./index.css";
import { useState } from "react";

function SearchResults({ searchResults }) {
  const [position, setPosition] = useState(0);
  let cardsDisplayed = 8;//For a desktop screen, we could fit 4 cards on a line, so 8 at a time seemed the most aesthetically pleasing
  //In the future, might make this a dynamic variable depending on screen size
  let displayedArray = searchResults.slice(position, position + cardsDisplayed);

  function nextButton() {
    if (position < searchResults.length) {
      setPosition(position + cardsDisplayed);
    } else {
      return;
    }
  }

  function previousButton() {
    if (position > 0) {
      setPosition(position - cardsDisplayed);
    } else {
      return;
    }
  }

  function createResultItem(item, index) {
    return (
      <div className="searchResults">
        <ResultItem properties={item} key={index} />
      </div>
    );
  }
  return (
    <div>
      <div className="viewbox">{displayedArray.map(createResultItem)}</div>
      <button
        type="button"
        onClick={previousButton}
        className="inputButtons"
        style={{ width: "7rem" }}
      >
        Previous
      </button>
      <button
        type="button"
        onClick={nextButton}
        className="inputButtons"
        style={{ width: "7rem" }}
      >
        Next
      </button>
    </div>
  );
}

export default SearchResults;

//Take in an array of objects
//it maps out a componenet for each object
//Make a new array which is a slice of the original array
//map that array
//change the slice index via state vairable, which is controlled by buttons
