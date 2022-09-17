import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Plumbers } from 'src/app/models/plumber';
import { PlumberService } from 'src/app/services/plumber.service';
@Component({
  selector: 'app-plumbing-repairs',
  templateUrl: './plumbing-repairs.component.html',
  styleUrls: ['./plumbing-repairs.component.scss']
})
export class PlumbingRepairsComponent implements OnInit {
  emailMatch = false;
  submitted = false;
  plumbers!: Plumbers[];

  constructor(private plumberService:PlumberService) { }

  plumbingRepair = new FormGroup({
    'firstName':new FormControl('',[Validators.required]),
    'lastName':new FormControl('',[Validators.required]),
    'email': new FormControl('', [Validators.required, Validators.email]),
    'phoneNumber':new FormControl('',[Validators.required, Validators.pattern('(([(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{4})')]),
    'plumber':new FormControl('',[Validators.required]),
    'issue':new FormControl('',[Validators.required]),
    'description':new FormControl('', Validators.required)
  })

  getAllPlumbers(){
    this.plumberService.getAllPlumbers().subscribe({
      next:(res:any)=>{
        this.plumbers = res.data        
      },error:(err)=>{
        console.log(`Error occured while retrieving plumbers: ${err}`);
      }
    })
  }

  submitForm(){
    this.submitted = true
  }

  ngOnInit(): void {
    this.getAllPlumbers();
  }

}
