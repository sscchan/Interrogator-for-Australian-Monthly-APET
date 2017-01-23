var fs = require('fs');

function parseASCIIGrid(filepath) {
  var fileContent = fs.readFileSync(filepath, 'utf8')
  return fileContent;
};

module.exports = parseASCIIGrid;