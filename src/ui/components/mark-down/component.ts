import Component, { tracked } from '@glimmer/component';

const hljs = window.hljs;
const MarkdownIt = window.markdownit({
  highlight(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class="hljs"><code>${hljs.highlight(lang, str, true).value}</code></pre>`;
      } catch (__) {}
    }

    return ''; // use external default escaping
  }
});

export default class MarkDown extends Component {
  /**
   * Renders the Markdown text with syntax highlighting for code blocks.
   */
  @tracked('args')
  get renderedText() {
    return MarkdownIt.render(this.args.text);
  }
};