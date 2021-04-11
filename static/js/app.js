// from data.js
var tableData = data;

// get reference to table body
var tbody = d3.select("tbody");

// loop through data.js and move data into table
data.forEach((sightingReport) => {
    var row = tbody.append("tr");
    Object.entries(sightingReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});