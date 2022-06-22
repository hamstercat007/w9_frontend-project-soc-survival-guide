import ResourcesSearchForm from "./ResourcesSearchForm";
import { useEffect, useState } from "react";
import SearchResults from "./SearchResults";
import SubmitResource from "./SubmitResource";

function Resources() {
  const [searchResults, setSearchResults] = useState([]);
  const [categorySearch, setCategorySearch] = useState();

  useEffect(() => {
    async function getAll() {
      const response = await fetch(`http://localhost:3001/resources`);
      const data = await response.json();
      setSearchResults(data.payload);
    }
    getAll();
  }, []);

  async function handleClick() {
    const response = await fetch(
      `http://localhost:3001/resources?category=${categorySearch}`
    );
    const data = await response.json();
    console.log("data.payload")
    console.log(data.payload)
    setSearchResults(data.payload);
  }

  const handleChange = (e) => {
    const target = e.target;
    if (target.checked) {
      setCategorySearch(target.value);
    }
  };

  if (searchResults === undefined) {
    return <p>Loading - pls wait!</p>;
  }

  return (
    <main>
      <h1>Brush up on your tech skills</h1>
      <ResourcesSearchForm
        searchResults={searchResults}
        handleClick={handleClick}
        categorySearch={categorySearch}
        handleChange={handleChange}
      />
   <SearchResults searchResults={searchResults} />
   <SubmitResource />
    </main>
  );
}

export default Resources;
