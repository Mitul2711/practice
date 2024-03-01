import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit, OnInit {
  
  @ViewChild(ChildComponent) private childData: ChildComponent;

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    
    setTimeout(() => {
      this.childData.userData = 10;
    }, 1000);
  }


}
