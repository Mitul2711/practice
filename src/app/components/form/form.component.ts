import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userForm: FormGroup;

  constructor(private fb : FormBuilder) {
    this.userForm = fb.group({
      firstName: [''],
      lastName: [''],

      authForm: fb.group({
        email: [''],
        password: ['']
      })
    })
  }

  ngOnInit(): void {
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success"
    });
  }

  onSubmit(){
    console.log(this.userForm.value);
  }


}
