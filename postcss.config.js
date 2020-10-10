const postcssNormalize = require("postcss-normalize");

const config = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("postcss-flexbugs-fixes"),
    require("postcss-preset-env")({
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
    }),
    // Adds PostCSS Normalize as the reset css with default options,
    // so that it honors browserslist config in package.json
    // which in turn let's users customize the target behavior as per their needs.
    postcssNormalize(),
    // require("autoprefixer"),
  ],
};
// console.log('postcss ----> ', config);
module.exports = config;
