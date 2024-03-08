import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {
  userForm: FormGroup;
  details: FormArray;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      details: new FormArray([])
    })
  }

  ngOnInit(): void {

  }

  createItem() {
    return this.fb.group({
      name: [''],
      email:['']
    })
  }

  addForm() {
    this.details = this.userForm.get('details') as FormArray;
    this.details.push(this.createItem());
  }

}
