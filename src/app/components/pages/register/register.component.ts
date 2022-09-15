import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Validation from 'src/app/directives/custom.validator';
import { UserService } from 'src/app/services/user.service';
import { Users } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  submitted = false;
  users: Users[] = [];
  emailMatch = false;

  registerForm = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', [Validators.required]),
    'cpassword': new FormControl('', [Validators.required]),
    'role': new FormControl('user', Validators.required)
  },
    { validators: [Validation.match('password', 'cpassword')] }
  )
  constructor(private userService: UserService, private router: Router) { }

  register(body: object) {
    if (this.registerForm?.valid) {
      this.userService.createUser(body).subscribe({
        next: () => {
          alert('Registration Successful')
        },
        error: (err) => {
          console.log(err);
        }
      })
    } else {
      alert('This form is invalid')
    }
  }

  ngOnInit(): void {
  }


}
