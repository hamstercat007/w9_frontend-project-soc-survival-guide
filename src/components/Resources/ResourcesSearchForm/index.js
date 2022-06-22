/*
MVP
Radio buttons for the categories
    -Each radio button will have a value of a cateogry, which ever is pressed, will change a state variable to that value
Submit Button
    -Makes a get fetch request with a query of category="State Variable"
State variable can be kept local
*/

import { useState } from "react";
import RadioCategorySection from "../RadioCategorySection";

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

  const [categoryArray, setCategoryArray] = useState(initialArray);

  return (
    <section>
      <RadioCategorySection
        categoryArray={categoryArray}
        categorySearch={categorySearch}
        handleChange={handleChange}
      />
      <button onClick={handleClick}>Search</button>
      <h2>{categorySearch}</h2>
      <p>{searchResults.payload[0].headline}</p>
    </section>
  );
}

export default ResourcesSearchForm;
