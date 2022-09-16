import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plumbing-repairs',
  templateUrl: './plumbing-repairs.component.html',
  styleUrls: ['./plumbing-repairs.component.scss']
})
export class PlumbingRepairsComponent implements OnInit {
  emailMatch = false;
  submitted = false;
  constructor() { }

  plumbingRepair = new FormGroup({
    'firstName':new FormControl('',[Validators.required]),
    'lastName':new FormControl('',[Validators.required]),
    'email': new FormControl('', [Validators.required, Validators.email]),
    'phoneNumber':new FormControl('',[Validators.required, Validators.pattern('(([(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{4})')]),
    'plumber':new FormControl('',[Validators.required]),
    'issue':new FormControl('',[Validators.required]),
    'description':new FormControl('', Validators.required)
  })

  submitForm(){
    this.submitted = true
  }

  ngOnInit(): void {
  }

}
