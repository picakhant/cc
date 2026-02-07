import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css"; // or any theme you like
import "github-markdown-css/github-markdown.css";

// /images/1.jpg
const MarkDown = ({file}) => {
    const [content, setContent] = useState("");

    useEffect(() => {
      fetch(file)
        .then((res) => res.text())
        .then((text) => setContent(text));
    }, [file]);

  return (
    <div className="markdown-body py-5">
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      />
    </div>
  );
};

export default MarkDown;
