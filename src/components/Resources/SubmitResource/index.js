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
    setSubmission({ ...submission, [e.target.name]: e.target.value });
  };

  async function handleSubmit() {
    let entries = Object.values(submission);
    for (let i = 0; i < entries.length; i++){
      if(entries[i] === "" || entries[i] === undefined){
        return alert("Error: Missing input field")
      }
    } 
    await fetch(`http://localhost:3001/api/v1/resources`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submission),
    }
    );
    setSubmission({
      headline: "",
      description: "",
      url: "",
      category: "",
      format: "",
    })
  }
  return (
      <form method="POST" className="submitFlex">
        <label htmlFor="headline" className="inputFields">
          Headline
        </label>
        <input
          type="text"
          id="headline"
          name="headline"
          placeholder="Name"
          value={submission.headline}
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
          value={submission.description}
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
          value={submission.url}
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
          value={submission.category}
          className="inputFields"
          onChange={handleChange}
        ></input>
        </div>
        <div>
        <label htmlFor="format" className="inputFields">
          Format
        </label>
        <input
          type="text"
          id="format"
          name="format"
          placeholder="Video or document?"
          value={submission.format}
          className="inputFields"
          onChange={handleChange}
        ></input>
        </div>
        <button type="button" onClick={handleSubmit} className="inputFields">
          Submit
        </button>
      </form>
  );
}

export default SubmitResource;
