//load the page
console.log("index.js loaded")

// view the ufo data from data.js
// console.log(data)

// get reference to the table body
var tbody = d3.select("tbody");

// get reference to the button on the page
var button = d3.select("#filter-btn");

// get reference tot he input element on the page
var inputField = d3.select("#form-control");

// this function is triggered when the button is clicked
function handleClick() {
    console.log('Filter button was Clicked!');

    // use d3 to see the object that dispatched 
    console.log(d3.event.target);
}

// test the click function 
button.on('click', handleClick);




// view the ufo data from data.js
// console.log(data)

// forEach loop the data
data.forEach(function(ufoSightings) {
    
    console.log(ufoSightings);
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