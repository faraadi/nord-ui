const path = require('path');
const fs = require("fs");

const srcPath = path.resolve(__dirname, "../", "src");

const components = {};
const additionalComponents = {
	base: [path.resolve(srcPath, "variables.css"), path.resolve(srcPath, "default.css")],
	helper: path.resolve(srcPath, "helper.css")
};

function readPath(p) {
    const res = fs.readdirSync(p).map(function(filename) {
        if(filename.endsWith(".css")) {
        	if(filename !== "index.css") components[filename.substr(0, filename.indexOf(".css"))] = path.resolve(p, filename);
        }
        else readPath(p+"/"+filename);
    });
};

module.exports = function(basePath) {
	readPath(basePath);
	return {...components, ...additionalComponents};
};