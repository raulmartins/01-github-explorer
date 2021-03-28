const plugins = ["@babel/plugin-proposal-class-properties"];
const presets = [
  "@babel/preset-env",
  ["@babel/preset-react", { runtime: "automatic" }],
];

module.exports = { presets, plugins };
