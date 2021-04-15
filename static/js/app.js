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

    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("datetime");
    filter = input.value.toUpperCase();
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
              } else {
                tr[i].style.display = "none";
            }
        }
    }
}