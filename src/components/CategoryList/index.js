import CategoryItem from "../CategoryItem";
import "./style.css";
import mindset from "./mindsetSmal.jpeg";
import { useNavigate } from "react-router-dom";
import resource from "./resource.jpg";
import selfcare from "./selfcare.jpg";

function CategoryList() {
  const navigate = useNavigate();
  const navigateToResources = () => {
    navigate("/resources");
  };

  const navigateToMindset = function () {
    navigate("/mindset");
  };

  const navigateToSelfCare = () => {
    navigate("/selfcare");
  };

  const categoryArray = [
    {
      title: "Resources",
      description:
        "Find videos and technical guidance on SoC topics, bookmark and add your own",
      buttonText: "Resources",
      linkTo: navigateToResources,
      imageURL: resource,
    },
    {
      title: "Mindset",
      description:
        "Keep your goals in mind, creating a positive mindset and belief in yourself",
      buttonText: "Mindset",
      linkTo: navigateToMindset,
      imageURL: mindset,
    },
    {
      title: "Self Care",
      description:
        "Advice and guidance into looking after your mental and physcial health",
      buttonText: "Self Care",
      imageURL: selfcare,
      linkTo: navigateToSelfCare,
    },
  ];

  return (
    <div>
      <h1>SoC Survival Guide</h1>
      <p>Helping bootcampers get through the journey</p>
      <div className="flexCategory">
        {categoryArray.map(function (item, index) {
          return <CategoryItem category={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default CategoryList;
