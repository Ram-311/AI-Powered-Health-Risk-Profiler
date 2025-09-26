import React, { useState } from "react";

function TextInput() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!text) return alert("Enter JSON data first");
    setLoading(true);
    try {
      const jsonData = JSON.parse(text);
      const res = await fetch("http://localhost:5000/analyze-text", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jsonData),
      });
      const data = await res.json();
      setResult(JSON.stringify(data, null, 2));
    } catch (err) {
      alert("Invalid JSON: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Enter Typed Form (JSON)</h2>
      <label htmlFor="textInput">JSON Input:</label>
      <textarea
        id="textInput"
        rows="5"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='{"age":42,"smoker":true,"exercise":"rarely","diet":"high sugar"}'
      />
      <br />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Analyzing..." : "Analyze"}
      </button>
      <pre>{result}</pre>
    </div>
  );
}

export default TextInput;
