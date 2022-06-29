import "./index.css";

function ResultItem({ properties }) {
  return (
    <div className="resultSpace">
      <a href={properties.url} target="_blank" rel="noreferrer">
        {properties.headline}
      </a>
      <p>{properties.description}</p>
      <p>{properties.category}</p>
      <p>{properties.format}</p>
    </div>
  );
}

export default ResultItem;
