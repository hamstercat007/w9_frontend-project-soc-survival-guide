//render search results
import ResultItem from "../ResultItem";
import "./index.css"

function SearchResults({ searchResults }) {
  return searchResults.map(function (item, index) {
    return (
      <div className="searchResults" >
    <ResultItem properties={item} key={index} />
    </div>
    )
  });
}

export default SearchResults;
