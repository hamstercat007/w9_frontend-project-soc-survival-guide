import "./index.css";

function CategoryItem({ category }) {
  return (
    <div className="itemAlign">
      <h1>{category.title}</h1>
      <p>{category.description}</p>
      <button onClick={category.linkTo}>{category.buttonText}</button>
      <img src={category.imageURL} alt={category.title + " image"} />
    </div>
  );
}

export default CategoryItem;
