function addRows() {
    
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    // var cell2 = row.insertCell(1);
    // var cell3 = row.insertCell(2);
    cell1.innerHTML = "New Col";
    // cell2.innerHTML = "New Col1";
    // cell3.innerHTML = "New Col2";
    var x = document.getElementById("myTable").rows.length;
    //document.getElementById("demo").innerHTML = "Found " + x + " tr elements in the table.";
    // var table = document.getElementById("myTable"); //Table ID
    // var rowCount = table.rows.length;
    // var row = table.insertRow(rowCount);
    // var colCount = table.rows[1].cells.length;

    // for (var i = 0; i < colCount; i++) {
    //     var newcell = row.insertCell(i);
    //     newcell.innerHTML = table.rows[1].cells[i].innerHTML;
    //     //alert(newcell.childNodes);
    //     switch (newcell.childNodes[0].type) {
    //         case "Comment":
    //             newcell.childNodes[i].value = "";
    //             break;
    //         case "DropDownList2":
    //             newcell.childNodes[i].selectedIndex = 0;
    //             break;
    //         case "DropDownList1":
    //             newcell.childNodes[i].selectedIndex = 0;
    //             break;
    //     }
    // }
}
function addColumn() {
    var row = document.getElementById("myRow");
    var x = row.insertCell(-1);
    x.innerHTML = "New Row";
    var row = document.getElementById("myRow1");
    var x = row.insertCell(-1);
    x.innerHTML = "New Row1";
    var row = document.getElementById("myRow2");
    var x = row.insertCell(-1);
    x.innerHTML = "New Row2";    
    var table = document.getElementById("myTable"); //Table ID
    var colCount = table.cells.length;
    var column = table.insertCell(colCount);
    var rowCount = table.cells[1].rows.length;

    // for (var i = 0; i < rowCount; i++) {
    //     var newcell = column.insertRow(i);
    //     newcell.innerHTML = table.cells[1].rows[i].innerHTML;
    //     //alert(newcell.childNodes);
    //     switch (newcell.childNodes[0].type) {
    //         case "Comment":
    //             newcell.childNodes[i].value = "";
    //             break;
    //         case "DropDownList2":
    //             newcell.childNodes[i].selectedIndex = 0;
    //             break;
    //         case "DropDownList1":
    //             newcell.childNodes[i].selectedIndex = 0;
    //             break;
    //     }
    // }
}