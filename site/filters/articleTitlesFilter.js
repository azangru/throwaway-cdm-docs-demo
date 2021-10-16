module.exports = function (collection) {
  const result = collection.reduce((acc, item) => {
    const { url, data: { title } } = item;
    acc[url] = title;
    return acc;
  }, {});
  return result;
};
