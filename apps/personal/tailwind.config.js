// tailwind config is required for editor support
const ui = require('ui/tailwind')
const sharedConfig = require("tailwind-config/tailwind.config.js");

module.exports = {
  presets: [sharedConfig],
  content: ui.content.concat([
    './src/**/*.{js,ts,jsx,tsx}'
  ]),
};