let fs = require('fs');

module.exports = function (api) {
  api.cache(true);

  // Support absolute imports from src like
  // https://create-react-app.dev/docs/importing-a-component/#absolute-imports
  let alias = {};
  fs.readdirSync('./src').forEach((item) => {
    alias[item] = `./src/${item}`;
  });

  return {
    presets: ['babel-preset-expo'],
    plugins: [['module-resolver', { alias }]],
  };
};
