import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userData: any;

  constructor(private user: UsersService) {}
  
  ngOnInit(): void {
    this.user.getData().subscribe(data => {
      this.userData = data;
      // console.log(this.userData);
    })
  }

  onSubmit(data: any) {
    console.log(data);
    
  }

}
