import { useState } from "react";
import RadioCategorySection from "../RadioCategorySection";
import "./index.css";

function ResourcesSearchForm({
  handleClick,
  searchResults,
  categorySearch,
  handleChange,
}) {
  let initialArray = [
    "html",
    "css",
    "javascript",
    "nodejs",
    "react",
    "figma",
    "testing",
  ];

  const [categoryArray, setCategoryArray] = useState(initialArray);//Future plans to not hard code category to search by displayed

  return (
    <div>
      <RadioCategorySection
        categoryArray={categoryArray}
        categorySearch={categorySearch}
        handleChange={handleChange}
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
}

export default ResourcesSearchForm;
