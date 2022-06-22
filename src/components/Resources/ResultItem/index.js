//display each result item

function ResultItem({ properties }) {
  return (
    <div>
      <a href={properties.url}>{properties.headline}</a>
      <p>{properties.description}</p>
      <p>{properties.category}</p>
      <p>{properties.format}</p>
    </div>
  );
}

export default ResultItem
