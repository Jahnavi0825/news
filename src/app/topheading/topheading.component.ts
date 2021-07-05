import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import{NewsapiservicesService} from '../service/newsapiservices.service'

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {
  emailFormGroup : FormGroup;

  constructor(private _services:NewsapiservicesService ) { 
    this.emailFormGroup = new FormGroup({
      email: new FormControl("", Validators.required)
    })
  }
  
  topheadingDisplay:any =[];



  ngOnInit(): void {

    this._services.topHeading().subscribe((result)=>{
      console.log(result);
      
      this.topheadingDisplay = result.articles;
      
    })

  }

  get a(){return this.emailFormGroup.controls}
  save(){console.log(this.emailFormGroup.value)}

}
