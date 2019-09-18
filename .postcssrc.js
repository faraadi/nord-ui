const postcss = require("postcss");
module.exports = postcss([require('postcss-prefixer')({ "prefix": "nui-" })]);