import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  }

  onSubmit(){
    console.log(this.userForm.value);
  }


}
