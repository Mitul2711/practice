import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

interface formData {
  name: string | undefined | null,
  email: string | undefined | null
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userData: formData[] = [];

  constructor(private user: UsersService) {}
  
  ngOnInit(): void {
    // console.log(this.userData);
    
  }

  onSubmit(data: any) {
    this.userData = data;
    console.log(this.userData);
    
  }

}
