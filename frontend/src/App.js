import React from "react";
import FileUpload from "./components/FileUpload";
import TextInput from "./components/TextInput";
import './App.css';

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>AI-Powered Health Risk Profiler</h1>
      <FileUpload />
      <hr />
      <TextInput />
    </div>
  );
}

export default App;
