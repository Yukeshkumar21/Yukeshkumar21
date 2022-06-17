function addColumn() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "New Col";
    cell2.innerHTML = "New Col1";
    cell3.innerHTML = "New Col2";
    
}
function addRows() {
    var row = document.getElementById("myRow");
    var x = row.insertCell(-1);
    x.innerHTML = "New Row";
    var row = document.getElementById("myRow1");
    var x = row.insertCell(-1);
    x.innerHTML = "New Row1";
    var row = document.getElementById("myRow2");
    var x = row.insertCell(-1);
    x.innerHTML = "New Row2";
}

