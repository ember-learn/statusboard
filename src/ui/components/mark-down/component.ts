import Component from '@glimmer/component';

const hljs = window.hljs;
const MarkdownIt = window.markdownit({
  highlight(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }

    return ''; // use external default escaping
  }
});

export default class MarkDown extends Component {
  /**
   * Renders the Markdown text with syntax highlighting for code blocks.
   */
  get renderedText() {
    return MarkdownIt.render(this.args.text);
  }
};