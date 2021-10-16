const util = require('util');
// const yaml = require('js-yaml');

const searchFilter = require('./filters/searchFilter');
const articleTitlesFilter = require('./filters/articleTitlesFilter');

module.exports = function(config) {

  // don't look in gitignore to determine which paths to ignore
  config.setUseGitIgnore(false);

  // watch for changes in css files (to re-run the postcss pipeline)
  config.addWatchTarget('css/*.css');

  // Add support for yaml files as data source
  // config.addDataExtension('yaml', contents => yaml.safeLoad(contents));

  // Add aliases (aliases are in relation to the _includes folder)
  // Aliases to layouts
  // config.addLayoutAlias('projects', 'layouts/projects.njk');
  // config.addLayoutAlias('default', 'layouts/default.njk');

  config.addFilter('search', searchFilter);
  config.addFilter('articleTitles', articleTitlesFilter);

  // Add contents of the _projects folder to the projects collection
  config.addCollection('articles', (collection) => {
    const articlesCollection = collection
      .getFilteredByGlob('docs/*.md')
      .map(item => {
        const title = item.template.frontMatter.content.match(/#(.+)/)[1].trim();
        // console.log(item.template.frontMatter.content);
        item.data.title = title; // FIXME: this is hackery!
        return item;
      });
    articlesCollection.sort((item1, item2) => {
      const title1 = item1.data.title;
      const title2 = item2.data.title;
      const charCode1 = title1.toLowerCase().charCodeAt(0);
      const charCode2 = title2.toLowerCase().charCodeAt(0);

      if (title1.startsWith(title2)) {
        return 1;
      } else if (title2.startsWith(title1)) {
        return -1;
      } else {
        return charCode1 - charCode2;
      }
    })
    return articlesCollection;
  });

  // Copy files and folders unchanged to output folder
  config.addPassthroughCopy("css");
  config.addPassthroughCopy("js");
  config.addPassthroughCopy('images');
  // config.addPassthroughCopy('CNAME');
  // config.addPassthroughCopy('.nojekyll');

  return {
    dir: {
      output: './build',
      layouts: "_includes/layouts"
    },
    pathPrefix: "/throwaway-cdm-docs-demo/" // FIXME for real deployment
  };
};
