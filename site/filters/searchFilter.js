const { convert } = require('html-to-text');

const lunr = require("lunr");

module.exports = function (collection) {
  // what fields we'd like our index to consist of
  const index = lunr(function () {
    this.field("title");
    this.field("content");
    this.ref('id');

    // loop through each page and add it to the index
    collection.forEach((page) => {
      const plainTextContent = convert(page.templateContent, {
        wordwrap: false
      });
      
      this.add({
        id: page.url,
        title: page.data.title,
        content: plainTextContent,
      });
    });

  });

  return index.toJSON();
};
