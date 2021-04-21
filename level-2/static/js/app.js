console.log('loading app.js')
// from data.js
var tableData = data;

// console.log(tableData)


// view the ufo data from data.js
// console.log(data)

// get reference to the table body
var tbody = d3.select("tbody");

// get reference to the button on the page
var button = d3.select("#filter-btn");

// get reference tot he input element on the page
var inputField = d3.select("#form-control");

// Select the form
var form = d3.select('#form')

// this function is triggered when the filter table 
function filterTable() {

    //prevent the page from refreshing
    d3.event.preventDefault();

    console.log('filterTable button was Clicked!');

    // Select the input element 
    var inputElement = d3.select("#datetime");

    //get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue)

    d3.select("h1>span").text(inputValue)

    // use d3 to see the object that dispatched 
    console.log(d3.event.target);
}

// test the click function 
button.on('click', filterTable);




// view the ufo data from data.js
// console.log(data)

// forEach loop the data and add it the table
tableData.forEach(function(ufoSightings) {
    
    // console.log(ufoSightings);
    
    var row = tbody.append("tr")

    Object.entries(ufoSightings).forEach(function([key, value]){
        
        //at this point I have a key and value
        // console.log("looking at new key-value pair")
        // console.log(key,value)

        //appending the table 
        var cell = row.append("td")
        cell.text(value);

    });
});