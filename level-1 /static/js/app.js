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

    //select input element
    var inputElement =d3.select('#Date');

    //get the value property of the input element
    var inputValue = inputElement.property('value');

    //view in the input log
    console.log('input', inputValue);

    //filter based on `date/time` 
    var dataFilter = tableData.filter(tableData => tableData.datetime === inputValue);
    console.log(dataFilter)

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
