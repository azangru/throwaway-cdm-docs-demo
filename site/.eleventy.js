const util = require('util');
// const yaml = require('js-yaml');

const searchFilter = require('./filters/searchFilter');

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

  // Add contents of the _projects folder to the projects collection
  config.addCollection('articles', (collection) => collection
    .getFilteredByGlob('docs/*.md')
    // .map(item => {
    //   // console.log('item', item);
    //   return Promise.resolve(item);
    // })
  );

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
    }
  };
};
