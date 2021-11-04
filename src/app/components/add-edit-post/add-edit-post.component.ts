import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-add-edit-post',
  templateUrl: './add-edit-post.component.html',
  styleUrls: ['./add-edit-post.component.css'],
})
export class AddEditPostComponent implements OnInit {
  @Output() model = new EventEmitter<Post>();

  addEditForm: FormGroup;
  descriptionValue = '';
  labelValue = '';
  //  model: Post = { title: '', body: '' };

  constructor() {
    this.addEditForm = new FormGroup({
      descriptionValue: new FormControl(this.descriptionValue),
      labelValue: new FormControl(this.labelValue),
    });
  }

  ngOnInit(): void {}

  onSubmit(event: any): void {
    event.preventDefault();
    console.log('Event: ', event);
    this.model.emit({ title: this.labelValue, body: this.descriptionValue });
    console.log(this.model);
    // TODO: pasar this.model con un .unshift() al lugar donde se almacena el array.
  }
}
