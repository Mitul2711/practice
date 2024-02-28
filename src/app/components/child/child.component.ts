import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  // @Input() data: any[];
  
  
  // @Output() parentFunction: EventEmitter<any> = new EventEmitter();
  
  ngOnInit(): void {
    // this.parentFunction.emit(this.tableData);
  }

  tableValue: any;

  parentFunction(data: any) {
    this.tableValue = data;
  }

  

}
