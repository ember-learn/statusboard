// import MarkdownIt from 'markdown-it'

// const markdown = new MarkdownIt();
const markdown = window.markdownit();

export default function md([text]) {
  // debugger;
  return markdown.render(text);
};
