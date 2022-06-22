import { Fragment } from "react";
import "./index.css"

function RadioButton({category, categorySearch, handleChange }) {

    const  renderedValue = category.charAt(0).toUpperCase() + category.slice(1);
    return(
    <div className="radiospace">
    <input type="radio" id={category} name="category" value={renderedValue} checked={{categorySearch} === {renderedValue}} onChange={handleChange}></input>   
    <label forhtml={category} >{renderedValue}</label>
    </div>
    )
}

export default RadioButton;