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
    const [searchResults, setSearchResults] = useState({payload:[{headline:"Hi There"}]})

    const handleChange = e => {
        const target = e.target;
        if (target.checked) {
          setCategorySearch(target.value);
        }
     };

    async function handleClick() {
        console.log("Button CLicked")
        const response = await fetch(`http://localhost:3001/resources?category=${categorySearch}`);
        const data = await response.json();
        console.log(data)
        setSearchResults(data)
    }

    return(
        <section>
            <RadioCategorySection categoryArray={categoryArray} categorySearch={categorySearch} handleChange={handleChange}/>
            <button onClick={handleClick}>Search</button>
            <h2>{categorySearch}</h2>
            <p>{searchResults.payload[0].headline}</p>
        </section>

    )

}

export default ResourcesSearchForm;