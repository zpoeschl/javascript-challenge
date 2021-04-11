// from data.js
var tableData = data;

// get reference to table body
var tbody = d3.select("tbody");

// ---- TABLE DATA ----
// loop through data.js and move data into table
data.forEach((sightingReport) => {
    var row = tbody.append("tr");
    Object.entries(sightingReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});


// ---- FORM ----
// select button
var button = d3.select("#filter-btn");

// select form
var form = d3.select("#form");

// create event handlers for clicking button or pressing enter
button.on("click", runEnter);
form.on("submit", runEnter);

// create function to run for both events
function runEnter() {

    // prevent page refresh
    d3.event.preventDefault();

    // select input element and get raw html node
    var inputElement = d3.select("#datetime");

    // get value property of the input element
    var inputValue = inputElement.property("value");

    // print value to the console
    console.log(inputValue);

    // filter table based on input
    var filteredData = tableData.filter(sightingReport => sightingReport.datetime === inputValue);

    console.log(filteredData);
};