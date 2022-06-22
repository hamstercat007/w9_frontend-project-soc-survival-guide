import { useState } from "react";
import "./index.css";

function SubmitResource() {
  const [submission, setSubmission] = useState(
    Object.freeze({
      headline: "",
      description: "",
      url: "",
      category: "",
      format: "",
    })
  );

  const handleChange = (e) => {
    setSubmission({ ...submission, [e.target.name]: e.target.value.trim() });
  };

  async function handleSubmit() {
    await fetch(`http://localhost:3001/resources`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submission),
    });
  }
  return (
      <form method="POST" className="flexed">
        <label htmlFor="headline" className="inputFields">
          Headline
        </label>
        <input
          type="text"
          id="headline"
          name="headline"
          placeholder="Name"
          onChange={handleChange}
          className="inputFields"
        ></input>
        <label htmlFor="description" className="inputFields">
          Description
        </label>
        <input
          type="text"
          id="description"
          name="description"
          size="50"
          placeholder="Brief Description"
          className="inputFields"
          onChange={handleChange}
        ></input>
        <label htmlFor="url" className="inputFields">
          URL
        </label>
        <input
          type="text"
          id="url"
          name="url"
          size="50"
          placeholder="link goes here"
          className="inputFields"
          onChange={handleChange}
        ></input>
        <div>
        <label htmlFor="category" className="inputFields">
          Category
        </label>
        <input
          type="text"
          id="category"
          name="category"
          size="28"
          placeholder="Main topic of resource"
          className="inputFields"
          onChange={handleChange}
        ></input>
        </div>
        <label htmlFor="format" className="inputFields">
          Format
        </label>
        <input
          type="text"
          id="format"
          name="format"
          placeholder="Video or document?"
          className="inputFields"
          onChange={handleChange}
        ></input>
        <button type="button" onClick={handleSubmit} className="inputFields">
          Submit
        </button>
      </form>
  );
}

export default SubmitResource;
