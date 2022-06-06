// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var catagory = [];


// 3. Use this function to update the filters. 

function updatefilters() {
  

            // console.log(id);
            // console.log(value);
            // if (d3.select("#datetime").property("value") !== ""){
            //   catagory["date"] = d3.select("#datetime").property("value");
            // } else { 
            //   delete catagory['date'];
            // }
              
            // if (d3.select("#city").property("value") !== "")
            //   catagory["city"] = d3.select("#city").property("value");
            // if (d3.select("#state").property("value") !== "")
            //   catagory["state"] = d3.select("#state").property("value");
            // if (d3.select("#country").property("value") !== "")
            //   catagory["country"] = d3.select("#country").property("value");
            // if (d3.select("#shape").property("value") !== "")
            //   catagory["shape"] = d3.select("#shape").property("value");
            //console.log(catagory)
  
  

    // 4a. Save the element that was changed as a variable.
    var changeElement = d3.select(this);

    

    // 4b. Save the value that was changed as a variable.
    var value = changeElement.property("value");

    // 4c. Save the id of the filter that was changed as a variable.
    var id = changeElement.attr("id");
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (value !== "") {
    catagory[id] = value;
    } else {
      delete catagory[id];
    };
    //console.log(catagory);
   // 6. Call function to apply all filters and rebuild the table
   filterTable();
  //};
  
   // 7. Use this function to filter the table when data is entered.
  function filterTable() {
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;
    //console.log(Object.entries(catagory)[1][1]);
    //catagory.forEach(i)
   // title = (JSON.stringify(Object.keys(catagory)));
    //val = (JSON.stringify(Object.values(catagory)));
    console.log(catagory);
    //console.log(title);
// 9. Loop through all of the filters and keep any data that
     // matches the filter values
    for([key, value] of Object.entries(catagory)) {
      filteredData = filteredData.filter(row => row[key] === value);
    };
        
     
    // 10. Finally, rebuild the table using the filtered data
  buildTable(filteredData);
  };
};

  

  


  



  
  
  
  
  //Build the table when the page loads
// 2. Attach an event to listen for changes to each filter
d3.selectAll("input").on("change", updatefilters);
//handleClick()

buildTable(data);