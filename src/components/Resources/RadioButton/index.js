import { Fragment } from "react";


function RadioButton({category}) {
    return(
    <>
    <input type="radio" id={category} name="category" value={category.toUpperCase()}></input>   
    <label forhtml={category} >{category.toUpperCase()}</label>
    </>
    )
}

export default RadioButton;