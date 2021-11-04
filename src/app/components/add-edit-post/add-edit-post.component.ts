import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-post',
  templateUrl: './add-edit-post.component.html',
  styleUrls: ['./add-edit-post.component.css']
})
export class AddEditPostComponent implements OnInit {
  addEditForm: FormGroup;
   descriptionValue: string = '';
   labelValue: string = '';

  constructor() {
    this.addEditForm = new FormGroup({
      descriptionValue: new FormControl(''),
      labelValue: new FormControl('')

    });
   }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('Description and label values: ' , this.addEditForm.value);
  }


}
