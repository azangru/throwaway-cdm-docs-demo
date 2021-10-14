const lunr = require("lunr");

module.exports = function (collection) {
  // what fields we'd like our index to consist of
  const index = lunr(function () {
    // this.field("title");
    this.field("content");
    this.ref('id');

    // loop through each page and add it to the index
    collection.forEach((page) => {
      this.add({
        id: page.url,
        // title: page.template.frontMatter.data.title,
        content: page.templateContent,
      });
    });

  });
  
  function squash(text) {
    // all lower case, please
    const content = text.toLowerCase();
  
    // remove all html elements and new lines
    const re = /(.*?&lt;.*?&gt;)/gi;
    const plain = content.replace(re, '');
  
    // remove duplicated words
    const words = plain.split(' ');
    const deduped = [...(new Set(words))];
    const dedupedStr = deduped.join(' ')
  
    // remove short and less meaningful words
    let result = dedupedStr.replace(/\b(\.|\,|\<;|the|a|an|and|am|you|I|to|if|of|off|me|my|on|in|it|is|at|as|we|do|be|has|but|was|so|no|not|or|up|for)\b/gi, '');
    //remove newlines, and punctuation
    result = result.replace(/\.|\,|\?|<p>|-|—|\n/g, '');
    //remove repeated spaces
    result = result.replace(/[ ]{2,}/g, ' ');
  
    return result;
  }

  return index.toJSON();
};
