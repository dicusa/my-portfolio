import { marked } from "marked";
import "highlight.js/styles/default.css";

marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return require("highlight.js").highlightAuto(code).value;
  },
});

const getMarkdownText = (markdown) => {
  return { __html: marked(markdown) };
};
export default getMarkdownText;
