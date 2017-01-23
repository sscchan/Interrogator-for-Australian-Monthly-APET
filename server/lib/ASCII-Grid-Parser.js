var fs = require('fs');

function parseASCIIGrid(filepath) {
  var gridReference = {};
  var gridData = {};


  var fileContent = fs.readFileSync(filepath, 'utf8');

  // Remove any \r in case new line is representd by \r\n
  fileContent = fileContent.replace('\r', '');

  // Split file into lines
  var fileLines = fileContent.split('\n');
  // console.log(fileLines);

  // Parse first 6 lines, which is the ASCII gird reference data
  for (let i = 0; i < 6; i++) {
    let line = fileLines[i];
    let tokenValues = line.split(/\s+/);
    let key = tokenValues[0];
    let value = tokenValues[1];

    gridReference[key] = value;
  }

  // Parse the rest of the data, and put them into gridData with key as the coorindate


  console.log(JSON.stringify(gridReference));
  return fileContent;
}

module.exports = parseASCIIGrid;