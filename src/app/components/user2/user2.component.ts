import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.css']
})
export class User2Component {

  tableValue: any;

  parentFunction(data: any) {
    this.tableValue = data;
  }
  
}
