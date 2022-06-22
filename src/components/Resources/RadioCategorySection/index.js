import RadioButton from "../RadioButton";

function RadioCategorySection({categoryArray}) {
    return (
        <form>
        <legend>Category</legend>
        {categoryArray.map(function(topic){
            return (<RadioButton category={topic} />)
        })}
        </form>
        )
}

export default RadioCategorySection;