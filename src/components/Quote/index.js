//Quote function component, and within it fetch request
//Create async function with fetch api https://zenquotes.io/api/today/[your_key]
//unpack this with json and render it in usable format
//call it
import { useEffect, useState } from "react";

function Quote() {
  const [quote, setQuote] = useState();
  let randomIndex = Math.floor(Math.random() * 1000 + 1);

  async function getQuotefetch() {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // console.log("randomIndex", randomIndex)
        const dailyQuote = data[randomIndex];
        console.log("-------------");
        console.log(dailyQuote);
        console.log("-------------");
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
    <div>
  <h3>{quote.author}</h3>
  <h2>{quote.text}</h2>;
  </div>
  )
}

export default Quote;
