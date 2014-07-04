/**
 * New node file
 */


fs = require('fs')
fs.readFile('./config/testcsv', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var jsondata = convert(data);
  //console.log(jsondata);
  for(var i=0; i< jsondata.length;i++){
	    console.log(jsondata[i]);
	}
});

convert = function(csvString) {
    var json = [];
    var csvArray = csvString.split("\n");
    
    // Remove the column names from csvArray into csvColumns.
    // Also replace single quote with double quote (JSON needs double).
    
    var csvColumns = JSON
            .parse("[" + csvArray.shift().replace(/'/g, '"') + "]");
    console.log("csvcolumns:"+csvColumns);
    csvArray.forEach(function(csvRowString) {
    	console.log(csvRowString);

        var csvRow = csvRowString.split(",");

        // Here we work on a single row.
        // Create an object with all of the csvColumns as keys.
        jsonRow = new Object();
        for ( var colNum = 0; colNum < csvRow.length; colNum++) {
            // Remove beginning and ending quotes since stringify will add them.
            var colData = csvRow[colNum].replace(/^['"]|['"]$/g, "");
            jsonRow[csvColumns[colNum]] = colData;
        }
        json.push(jsonRow);
    });

    return JSON.stringify(json);
};