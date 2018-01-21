import Ember from 'ember';
import markdownit from 'markdown-it';
import hljs from './-utils/highlight';

const MarkdownIt = markdownit({
  highlight(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class="hljs"><code>${hljs.highlight(lang, str, true).value}</code></pre>`;
      } catch (err) {
        console.log('Error highlighting', lang, err);
      }
    }

    return ''; // use external default escaping
  }
});

export default Ember.Component.extend({
  renderedText: Ember.computed('text', function(){
    return MarkdownIt.render(this.get('text'));
  })
});
