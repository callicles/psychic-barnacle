const path = require('path')
const sharedConfig = require("tailwind-config/tailwind.config.js");

module.exports = {
  // prefix ui lib classes to avoid conflicting with the app
  prefix: "ui-",
  presets: [sharedConfig],
  content: [path.join(path.dirname(require.resolve('ui')), '**/*.{js,ts,jsx,tsx}')],
};