import React, { useState } from "react";

function FileUpload() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert("Select a file first");
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file); // Use 'file' key for clarity



    try {
      const res = await fetch("/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setResult(JSON.stringify(data, null, 2));
    } catch (err) {
      alert("Upload failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Upload Scanned Form</h2>
      <label htmlFor="fileUpload">Choose file:</label>
      <input
        id="fileUpload"
        type="file"
        accept=".pdf,.jpg,.png"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <br />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Uploading..." : "Upload"}
      </button>
      <pre>{result}</pre>
    </div>
  );
}

export default FileUpload;
