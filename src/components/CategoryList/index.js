/*
1. create our array of objects, that we will map over.
category compenent - list component
function that gives us a button that we can reuse
return into a div container
*/
import CategoryItem from "../CategoryItem";
import "./style.css";
import mindSet from "./mindset.jpeg";

const categoryArray = [
  {
    title: "Resources",
    description:
      "Find videos and technical guidance on SoC topics, bookmark and add your own",
    buttonText: "Resources",
    imageURL: mindSet,
  },
  {
    title: "Mindset",
    description:
      "Keep your goals in mind, creating a positive mindset and belief in yourself",
    buttonText: "Mindset",
    imageURL: mindSet,
  },
  {
    title: "Self Care",
    description:
      "Advice and guidance into looking after your mental and physcial health",
    buttonText: "Self Care",
    imageURL: mindSet,
  },
];

function CategoryList() {
  return (
    <div className="flexed">
      {categoryArray.map(function (item, index) {
        return <CategoryItem category={item} key={index} />;
      })}
    </div>
  );
}

export default CategoryList;
