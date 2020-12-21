import { Component } from "@angular/core";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent {
  //Submit Data to the Table
  submit() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(2);
    var colCount = table.rows[0].cells.length;
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = document.getElementById("fname").value;
    cell2.innerHTML = document.getElementById("city").value;

    for (var i = 0; i < colCount; i++) {
      var newcell = row.insertCell(i);
      newcell.innerHTML = table.rows[1].cells[i].innerHTML;
      newcell.cell2.innerHTML = cell1.innerHTML;
      newcell.cells.interHTML = cell2.innerHTML;
    }
  }

  //Delete Data from Table
  deleteRow() {
    try {
      var table = document.getElementById("myTable");
      var rowCount = table.rows.length;

      for (var i = 0; i < rowCount; i++) {
        var row = table.rows[i];
        var chkbox = row.cells[0].childNodes[0];
        if (null != chkbox && true == chkbox.checked) {
          if (rowCount <= 2) {
            alert("Can not delete all data.");
            break;
          }
          table.deleteRow(i);
          rowCount--;
          i--;
        }
      }
    } catch (e) {
      alert(e);
    }
  }
}
