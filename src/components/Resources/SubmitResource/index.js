import {useState} from "react"

function SubmitResource() {

    const [submission, setSubmission] = useState(Object.freeze({
        headline: "",
        description: "",
        url: "",
        category: "",
        format: ""
    }))

    const handleChange = (e) => {
        setSubmission({...submission, [e.target.name]: e.target.value.trim()})
    }

    async function handleSubmit(){
        await fetch(`http://localhost:3001/resources`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(submission)
        })
    }
    return(
        <form method="POST">
            <label forhtml="headline">Headline</label>
            <input type="text" id="headline" name="headline" placeholder="Name" onChange={handleChange}></input>
            <label forhtml="description">Description</label>
            <input type="text" id="description" name="description" placeholder="Brief Description" onChange={handleChange}></input>
            <label forhtml="url">URL</label>
            <input type="text" id="url" name="url" placeholder="link goes here" onChange={handleChange}></input>
            <label forhtml="category">Category</label>
            <input type="text" id="category" name="category" placeholder="Main topic resource is about" onChange={handleChange}></input>
            <label forhtml="format">Formate</label>
            <input type="text" id="format" name="format" placeholder="Video or document?" onChange={handleChange}></input>
            <button type="button" onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default SubmitResource