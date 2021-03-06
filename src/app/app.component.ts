import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailAvailabilityValidator } from './email-availability.validator/email-availability.validator';
import { emails$ } from './emails.service/emails.service';

export const signupFormGroup = {
  name: ['', [Validators.required, Validators.minLength(2)]],
  email: [
    '',
    [Validators.required, Validators.email],
    emailAvailabilityValidator(emails$),
  ],
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group(signupFormGroup);
  }

  submit() {
    console.log(this.myForm.value);
  }

  getName() {
    return this.myForm.get('name');
  }

  getEmail() {
    return this.myForm.get('email');
  }
}
