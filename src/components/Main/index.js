//render h1 and description
//render all of the categories
//export
import Category from "../Category";
import mindset from "./mindset.jpeg";
import "./index.css";

const categoryList = [
  {
    title: "Resources",
    description:
      "Find videos and technical guidance on SoC topics, bookmark and add your own",
    imgUrl: "https://placekitten.com/408/287",
  },
  {
    title: "Mindset",
    description:
      "Keep your goals in mind, creating a positive mindset and belief in yourself",
    imgUrl: mindset,
  },
  {
    title: "Resources",
    description:
      "Find videos and technical guidance on SoC topics, bookmark and add your own",
    imgUrl: "https://placekitten.com/408/287",
  },
];

function Main() {
  return (
    <div className="flexed">
      {categoryList.map(function (categoryItem, index) {
        console.log(categoryItem);
        return <Category category={categoryItem} key={index} />;
      })}
    </div>
  );
}

export default Main;
