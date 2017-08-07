import { Component, ViewChild, OnInit } from '@angular/core';
import { IgxGridComponent, IgxGridColumnInitEvent, DataContainer, IDataState } from 'igniteui-js-blocks/main';
import { IgxColumnComponent } from 'igniteui-js-blocks/grid/column.component';
import { employeesData } from '../localData';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  [x: string]: any;
  public localData: any[];
  constructor() { }
  
 @ViewChild("grid1") public grid1: IgxGridComponent;
  
  ngOnInit() {
    this.localData = employeesData;

    this.grid1.state = {
      paging: {
          index: 2,
          recordsPerPage: 10
      }
    };
  }

  public initColumns(event: IgxGridColumnInitEvent) {
    const column: IgxColumnComponent = event.column;
    if(column.field === "EmployeeID") {
      column.hidden = true;
    }
    if (column.field === "FirstName") {
      column.filtering = true;
      column.sortable = true;
      column.editable = true;
    }
  }

  public addRow() {
    if (!this.newRecord.trim()) {
    this.newRecord = "";
    return;
    }
    const record = {ID: this.grid1.data[this.grid1.data.length - 1].ID + 1, Name: this.newRecord};
    this.grid1.addRow(record);
    this.newRecord = "";
  }

  public updateRecord(event) {
      this.grid1.updateCell(this.selectedCell.rowIndex, this.selectedCell.columnField, event);
      this.grid1.getCell(this.selectedCell.rowIndex, this.selectedCell.columnField);
  }

  public deleteRow(event) {
      this.selectedRow = Object.assign({}, this.grid1.getRow(this.selectedCell.rowIndex));
      this.grid1.deleteRow(this.selectedCell.rowIndex);
      this.selectedCell = {};
      this.snax.message = `Row with ID ${this.selectedRow.record.ID} was deleted`;
      this.snax.show();
  }
}
