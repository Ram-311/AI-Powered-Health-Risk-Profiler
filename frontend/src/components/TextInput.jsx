import React, { useState } from "react";

function TextInput() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async () => {
    try {
      const jsonData = JSON.parse(text);
      const res = await fetch("http://localhost:5000/analyze-text", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jsonData),
      });
      const data = await res.json();
      setResult(JSON.stringify(data, null, 2));
    } catch {
      alert("Invalid JSON");
    }
  };

  return (
    <div>
      <h2>Enter Typed Form (JSON)</h2>
      <textarea
        rows="5"
        cols="40"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='{"age":42,"smoker":true,"exercise":"rarely","diet":"high sugar"}'
      />
      <br />
      <button onClick={handleSubmit}>Analyze</button>
      <pre>{result}</pre>
    </div>
  );
}

export default TextInput;
