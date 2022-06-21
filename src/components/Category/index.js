//render each Category
import "./index.css";

function Category({category}) {
  return (
    <div className="item">
      <h1>{category.title}</h1>
      <p>{category.description}</p>
      <img src={category.imgUrl} alt={category.title + " image"} />
    </div>
  );
}

export default Category;
