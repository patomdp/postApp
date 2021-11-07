import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-add-edit-post',
  templateUrl: './add-edit-post.component.html',
  styleUrls: ['./add-edit-post.component.css'],
})
export class AddEditPostComponent implements OnInit {
  // this is the new object created in the component, the output method will send it to the parent component.
  @Output() createdModel = new EventEmitter<Post>();
  @Input()
  title: string = 'New Post';
  addEditForm: FormGroup;
  descriptionValue = '';
  labelValue = '';

  postModel: Post = { title: '', body: '' };

  constructor(private router: Router) {
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
      // TODO: id: que venga con el array.lenght ,
    };
    console.log('ON SUBMIT: ', this.addEditForm);
    console.log('POSTMODEL: ', POSTMODEL);
    // emmiting the created object
    this.createdModel.emit(POSTMODEL);
    // TODO: pasar this.postModel con un .unshift() al lugar donde se almacena el array.
    this.backToHome();
  }
  formCheck(): void {
    // preventDefault();

    this.postModel = { title: this.labelValue, body: this.descriptionValue };

    console.log('POST MODEL PRINT: ', this.postModel);
  }

  // Method to navigate back to home
  backToHome(): void {
    this.router.navigate(['/home']);
  }
}
