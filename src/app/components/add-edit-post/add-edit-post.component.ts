import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { StoreService } from 'src/app/services/store.service';

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

  constructor(private router: Router, public storeService: StoreService) {
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
      id: this.storeService.arrayPost.length + 1,
    };
    console.log('ON SUBMIT: ', this.addEditForm);
    console.log('POSTMODEL: ', POSTMODEL);
    // emmiting the created object

    this.storeService.arrayPost.push(POSTMODEL);

    console.log('STORE SERVICE CHECK_:', this.storeService.arrayPost);

    this.backToHome();
  }

  // Method to navigate back to home
  backToHome(): void {
    this.router.navigate(['/home']);
  }
}
