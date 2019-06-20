const remark = require('remark');
const inlineTokenizer = require('./inline_tokenizer');

/**
 * Parse a string of Markdown into a Remark
 * abstract syntax tree.
 *
 * @param {string} string markdown text
 * @returns {Object} abstract syntax tree
 * @private
 */
function parseMarkdown(string) {
  if ('true' === process.env.PRESERVE_MARKDOWN) {
    return string;
  } else {
    return remark()
      .use(inlineTokenizer)
      .parse(string);
  }
}

module.exports = parseMarkdown;
