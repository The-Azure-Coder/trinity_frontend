import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted = false;
  loginForm = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', [Validators.required]),
    'role': new FormControl('admin', Validators.required)
  })
  constructor(private authenticate: AuthService, private router: Router) { }

  loginIn() {
    this.submitted = true;
  }

  onSubmit(body:object):void{
    this.authenticate.loginUser(body).subscribe({
      next: (res: any) => {
          if(res && res.data['token'] && res.data.user['role']=='user'){
            alert('User Logged in successfully')
            localStorage.setItem('token',res.data.token);         
            localStorage.setItem('User-Type',res.data.user['role']);         
          }else if(res && res.data['token'] && res.data.user['role']=='admin'){
            alert('Admin Logged in successfully')
            localStorage.setItem('token',res.data.token);         
            localStorage.setItem('User-Type',res.data.user['role']);  
          }
      },
      error: () => {
        console.log(`Error occured while logging in`);
      }
    })
 }


  ngOnInit(): void {
  }

}

