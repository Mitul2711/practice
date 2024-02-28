import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  tableValue: any;

  parentFunction(data: any) {
    this.tableValue = data
  }

}
