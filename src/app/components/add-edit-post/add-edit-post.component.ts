import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-add-edit-post',
  templateUrl: './add-edit-post.component.html',
  styleUrls: ['./add-edit-post.component.css'],
})
export class AddEditPostComponent implements OnInit {
  // this is the new object created in the component, the output method will send it to the parent component.
  @Output() createdModel = new EventEmitter<Post>();

  title: string = 'New Post';
  addEditForm: FormGroup;
  descriptionValue = '';
  labelValue = '';

  postModel: Post = { title: '', body: '' };

  constructor() {
    this.addEditForm = new FormGroup({
      descriptionValue: new FormControl(this.descriptionValue),
      labelValue: new FormControl(this.labelValue),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    // saving the created object

    const POSTMODEL = {
      title: this.labelValue,
      body: this.descriptionValue,
      id: 1,
    };
    console.log('ON SUBMIT: ', this.addEditForm);
    console.log('POSTMODEL: ', POSTMODEL);
    // emmiting the created object
    this.createdModel.emit(POSTMODEL);
    // TODO: pasar this.postModel con un .unshift() al lugar donde se almacena el array.
  }
  formCheck(): void {
    // preventDefault();

    this.postModel = { title: this.labelValue, body: this.descriptionValue };

    console.log('POST MODEL PRINT: ', this.postModel);
  }
}
