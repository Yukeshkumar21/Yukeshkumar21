var table = document.getElementById("myTable");
var rowsCount, colsCount;

function columnCount() {
    colsCount = document.getElementById("myTable").rows[0].cells.length + 1;
    return colsCount;
}

function rowCount() {
    rowsCount = table.rows.length;
    return rowsCount;
}

function addColumn() {
    var numberofCols = columnCount();
    var numberofRows = rowCount();
    var row = table.insertRow(numberofRows);
    var column = document.getElementById("myCell");
    if (rowsCount != undefined && numberofCols != rowsCount) {
        numberofCols = numberofCols - 1;
        var cell1 = column.insertCell(1);
        cell1.innerHTML = "New Cell";
        if(cell1 != undefined) {
            rowsCount = rowsCount - 1;
            //consider the particular column to add the rows
            for (i=0; i < rowsCount; i++) {
                // var cell1 = row.insertCell(i);
                // cell1.innerHTML = "New Cell";
            }
        }

    } else {
        var x = column.insertCell(-1);
        x.innerHTML = "New Cell";
    }
}

function addRow() {
    var i;
    var numberofRows = rowCount();
    var row = table.insertRow(numberofRows);
    if (colsCount != undefined && numberofRows != colsCount) {
        for (i=0; i < colsCount; i++) {
            var cell1 = row.insertCell(i);
            cell1.innerHTML = "New Cell";
        }
    } else {
        var cell1 = row.insertCell(0);
        cell1.innerHTML = "New Cell";
    }
}


