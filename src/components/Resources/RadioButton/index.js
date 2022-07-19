import "./index.css";

function RadioButton({ category, categorySearch, handleChange }) {
  const renderedValue = category.charAt(0).toUpperCase() + category.slice(1);
  //Due to the nature of PostgreSql and the Backend API, all the categories come in all lowercase
  //for better visuals we capitalise the first letter of the category and display that
  return (
    <div className="radiospace">
      <input
        type="radio"
        id={category}
        name="category"
        value={renderedValue}
        checked={categorySearch === renderedValue}
        onChange={handleChange}
      ></input>
      <label forhtml={category}>{renderedValue}</label>
    </div>
  );
}

export default RadioButton;
