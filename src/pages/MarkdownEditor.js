import React, { useState } from "react";

import "highlight.js/styles/default.css";
import "../component/MarkdownEditor.css";
import getMarkdownText from "../util/MarkdownFileReader";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("");

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="markdown-editor">
      <textarea
        value={markdown}
        onChange={handleChange}
        placeholder="Enter Markdown here..."
      />
      <div
        className="preview"
        dangerouslySetInnerHTML={getMarkdownText(markdown)}
      />
    </div>
  );
};

export default MarkdownEditor;
