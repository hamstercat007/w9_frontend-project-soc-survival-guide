import RadioButton from "../RadioButton";
import "./index.css";

function RadioCategorySection({ categoryArray, categorySearch, handleChange }) {
  //We are splitting the categoryArray into 2 for formatting purposes,
  //origninally it would produce one long list and there were issues with flex wrap,
  //so it was easier for us to split the array here to make two columns
  let arrayOne = categoryArray.slice(0, categoryArray.length / 2);
  let arrayTwo = categoryArray.slice(
    categoryArray.length / 2,
    categoryArray.length
  );

  return (
    <form className="categoryBox">
      <legend>
        <h2>Category</h2>
      </legend>
      <div className="container">
        <div className="column">
          {arrayTwo.map(function (resourceCategory) {
            return (
              <RadioButton
                category={resourceCategory}
                categorySearch={categorySearch}
                handleChange={handleChange}
              />
            );
          })}
        </div>
        <div className="column">
          {arrayOne.map(function (resourceCategory) {
            return (
              <RadioButton
                category={resourceCategory}
                categorySearch={categorySearch}
                handleChange={handleChange}
              />
            );
          })}
        </div>
      </div>
    </form>
  );
}

export default RadioCategorySection;
