import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState<string>();
  const [files, setFiles] = useState<FileList>();

  const onFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (e.target.files) {
      setFiles(e.target.files);
    }
  };

  return (
    <div className="App">
      <div>
        <input
          type="file"
          name="file[]"
          multiple={true}
          onChange={onFileSelected}
          accept="image/*,video/*"
        />
      </div>
      <div className="data">
        <h4 style={{ marginTop: "10px" }}>Files</h4>
        <ol style={{ marginTop: "10px" }}>
          {files &&
            files.length > 0 &&
            Object.values(files).map((file) => <li>{file.name}</li>)}
        </ol>
        <h4 style={{ marginTop: "10px" }}>Event Value</h4>
        <div style={{ marginTop: "10px" }}>{value}</div>
      </div>
    </div>
  );
}

export default App;
