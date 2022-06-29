import ResourcesSearchForm from "./ResourcesSearchForm";
import { useEffect, useState } from "react";
import SearchResults from "./SearchResults";
import SubmitResource from "./SubmitResource";
import "./index.css";

function Resources() {
  const [searchResults, setSearchResults] = useState([]);
  const [categorySearch, setCategorySearch] = useState("Html");

  useEffect(() => {
    async function getAllResources() {
      const response = await fetch(`http://localhost:3001/api/v1/resources`);
      const data = await response.json();
      setSearchResults(data.payload);
    }
    getAllResources();
  }, []);

  async function handleClick() {
    const response = await fetch(
      `http://localhost:3001/api/v1/resources?category=${categorySearch}`
    );
    const data = await response.json();
    console.log("data.payload");
    console.log(data.payload);
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
    <div>
      <h1>Brush up on your tech skills</h1>
      <div className="flex-container">
        <ResourcesSearchForm
          searchResults={searchResults}
          handleClick={handleClick}
          categorySearch={categorySearch}
          handleChange={handleChange}
        />
        <SubmitResource />
      </div>
      <SearchResults searchResults={searchResults} />
    </div>
  );
}

export default Resources;
