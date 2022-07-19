import { useEffect, useState } from "react";
import "./index.css";

function Quote() {
  const [quote, setQuote] = useState();

  async function getQuotefetch() {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        let randomIndex = Math.floor(Math.random() * data.length);
        const dailyQuote = data[randomIndex];
        setQuote(dailyQuote);
      });
  }

  useEffect(() => {
    getQuotefetch();
  }, []);

  if (quote === undefined) {
    return <p>Loading</p>;
  }
  return (
    <div className="quote">
      <h3>{quote.author}</h3>
      <quote className="quote">{quote.text}</quote>
    </div>
  );
}

export default Quote;
