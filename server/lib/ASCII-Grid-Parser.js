var fs = require('fs');

function parseASCIIGrid(filepath) {
  var gridReference = {};
  var gridData = {};


  var fileContent = fs.readFileSync(filepath, 'utf8');

  // Remove any \r in case new line is representd by \r\n
  fileContent = fileContent.replace('\r', '');

  // Split file into lines
  var fileLines = fileContent.split('\n');

  // Parse first 6 lines, which is the ASCII gird reference data
  for (let i = 0; i < 6; i++) {
    let line = fileLines[i];
    let tokenValues = line.split(/\s+/);
    let key = tokenValues[0];
    let value = tokenValues[1];

    gridReference[key] = value;
  }

  gridReference['ncols'] = parseInt(gridReference['ncols'], 10);
  gridReference['nrows'] = parseInt(gridReference['nrows'], 10);
  gridReference['xllcorner'] = parseFloat(gridReference['xllcorner']);
  gridReference['yllcorner'] = parseFloat(gridReference['yllcorner']);
  gridReference['cellsize'] = parseFloat(gridReference['cellsize']);
  gridReference['NODATA_value'] = parseFloat(gridReference['NODATA_value']);  


  // Parse the rest of the data, and put them into gridData with key as the coorindate
  for (let i = 6; i < fileLines.length; i++) {
    var row = fileLines[i];
    let ncols = gridReference['ncols'];
    let nrows = gridReference['nrows'];
    let xllcorner = gridReference['xllcorner'];
    let yllcorner = gridReference['yllcorner'];
    let cellsize = gridReference['cellsize'];

    let rowIndex = i - 6;
    let yCoordinate = yllcorner + ((nrows - rowIndex) * cellsize) - (0.5 * cellsize);

    // Split the lines into columns, denoting each value
    var col = row.split(' ');
    // console.log(col);
    for (let j = 0; j < col.length; j++) {
      let cellValue = parseFloat(col[j]);

      // Do not parse any NaN values
      if (isNaN(cellValue)) {
        continue;
      }

      // Do not enter any NO_DATA value into our data storage
      if (cellValue === gridReference['NODATA_value']) {
        continue;
      }

      let colIndex = j;

      let xCoordinate = xllcorner + (colIndex * cellsize) + (0.5 * cellsize);

      // Save it into our storage
      gridData[xCoordinate.toFixed(1) + ',' + yCoordinate.toFixed(2)] = cellValue;
    }
  }

  return {reference: gridReference, data: gridData};
}

module.exports = parseASCIIGrid;