/*
MVP
Radio buttons for the categories
    -Each radio button will have a value of a cateogry, which ever is pressed, will change a state variable to that value
Submit Button
    -Makes a get fetch request with a query of category="State Variable"
State variable can be kept local
*/

import {useState} from "react"
import RadioCategorySection from "../RadioCategorySection"

function ResourcesSearchForm() {
    let initialArray = ["html","css","javascript","nodejs","react","figma","testing"]
    const [categorySearch, setCategorySearch] = useState()
    const [categoryArray, setCategoryArray] = useState(initialArray)

    const handleChange = e => {
        const target = e.target;
        if (target.checked) {
          setCategorySearch(target.value);
        }
     };

    return(
        <section>
            <RadioCategorySection categoryArray={categoryArray} categorySearch={categorySearch} handleChange={handleChange}/>
            <button type="button">Search</button>
            <h2>{categorySearch}</h2>
        </section>

    )

}

export default ResourcesSearchForm;