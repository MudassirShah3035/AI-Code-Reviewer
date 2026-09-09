import { useState, useEffect } from "react"
import EditorModule from "react-simple-code-editor"
import prism from "prismjs"
import "prismjs/themes/prism-tomorrow.css"
import Markdown from 'react-markdown'
import axios from 'axios'
import "./App.css"


const Editor = EditorModule.default || EditorModule

function App() {
  const [code, setCode] = useState(`function sum() {
  return 1 + 1
}`)
  const [review, setReview] = useState(``)

  useEffect(() => {
    prism.highlightAll()
  }, [])

  const codeReview = async(e)=>{
    e.preventDefault()
    try {
      const result = await axios.post('http://localhost:4008/ai/get-response', {code})
      setReview(result.data.response)
    } catch (error) {
      console.error("Error details:", error);
    }
  }

  return (
    <main>
      <h1>AI Code Reviewer</h1>
      <div className="left">
        <Editor
          value={code}
          onValueChange={setCode}
          highlight={(code) =>
            prism.highlight(
              code,
              prism.languages.javascript,
              "javascript"
            )
          }
          padding={20}
          style={{
            fontFamily: '"Fira Code", monospace',
            fontSize: 14,
            minHeight: "400px",
            width: "100%",
            background: "#1e293b",
            color: "white",
          }}
        />

        <button className="review" onClick={codeReview}>
          Review Code
        </button>
      </div>

      <div className="right">
        <h2>AI Review</h2>
        <Markdown>{review}</Markdown>
      </div>
    </main>
  )
}

export default App
