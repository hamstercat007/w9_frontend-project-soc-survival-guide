import RadioButton from "../RadioButton";
import "./index.css";

function RadioCategorySection({ categoryArray, categorySearch, handleChange }) {
  let arrayOne = categoryArray.slice(0, categoryArray.length / 2);
  let arrayTwo = categoryArray.slice(
    categoryArray.length / 2,
    categoryArray.length
  );

  return (
    <form className="categoryBox">
      <legend><h2>Category</h2></legend>
      <div className="container">
        <div className="column">
          {arrayTwo.map(function (topic) {
            return (
              <RadioButton
                category={topic}
                categorySearch={categorySearch}
                handleChange={handleChange}
              />
            );
          })}
        </div>
        <div className="column">
          {arrayOne.map(function (topic) {
            return (
              <RadioButton
                category={topic}
                categorySearch={categorySearch}
                handleChange={handleChange}
              />
            );
          })}
        </div>
      </div>
      {/* {categoryArray.map(function(topic){
            return (<RadioButton category={topic} />)
        })} */}
    </form>
  );
}

export default RadioCategorySection;
