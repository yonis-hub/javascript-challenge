console.log("index.js loaded")

// get reference to the table body

var tbody = d3.select("tbody");

// view the ufo data from data.js
console.log(data)

// forEach loop the data
data.forEach(function(ufoSightings) {
    
    console.log(ufoSightings);
    var row = tbody.append("tr")

    Object.entries(ufoSightings).forEach(function([key, value]){
        
        //at this point I have a key and value
        console.log("looking at new key-value pair")
        console.log(key,value)

        //appending the table 
        var cell = row.append("td")
        cell.text(value);

    });
});