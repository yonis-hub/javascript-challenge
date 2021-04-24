console.log('loading app.js')

// from data.js
var tableData = data;

// get reference to the button on the page
var button = d3.select("#filter-btn");

//select the form
var form = d3.select("#form-control")

//select table body
var tbody = d3.select('tbody');

// test the click function 
button.on('click', filterTable);
form.on('submit', filterTable);

// forEach loop the data and add it the table
tableData.forEach(function(ufoSightings) {
    
    // console.log(ufoSightings);
    
    var row = tbody.append("tr")

    Object.entries(ufoSightings).forEach(function([key, value]){
        
        //appending the table 
        var cell = row.append("td")
        cell.text(value);

    });
});


// this function is triggered when the filter table 
function filterTable() {

    // prevent the page from refreshing
    d3.event.preventDefault();

    //select input element and convert input lowercase
    var inputDate = d3.select('#Date').property("value");
    var inputCity = d3.select("#City").property("value").toLowerCase().trim();
    var inputState = d3.select("#State").property("value").toLowerCase().trim();
    var inputCountry = d3.select("#Country").property("value").toLowerCase().trim();
    var inputShape = d3.select("#Shape").property("value").toLowerCase().trim();

    //filter based on `date, city, state, country and shape
    var dataFilter = tableData;
    
    if (inputDate) {
        dataFilter = dataFilter.filter(tableData => tableData.datetime === inputDate);
    }

    if (inputCity) {
        dataFilter = dataFilter.filter(tableData => tableData.datetime === inputCity);
    }
    
    if (inputState) {
        dataFilter = dataFilter.filter(tableData => tableData.datetime === inputState);
    }

    if (inputCountry) {
        dataFilter = dataFilter.filter(tableData => tableData.datetime === inputCountry);
    }

    if (inputShape) {
        dataFilter = dataFilter.filter(tableData => tableData.datetime === inputShape);
    }

    //clear the table body with empyt string
    tbody.html("");


    // forEach loop the data and add it the table
    dataFilter.forEach((ufoSightings) => {
        var row = tbody.append('tr');
        Object.entries(ufoSightings).forEach(function([key, value]){
        
        //appending the table 
        var cell = row.append("td")
        cell.text(value);
        });
    });
};


