import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NewsapiservicesService} from '../service/newsapiservices.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  emailFormGroup : FormGroup;

  constructor( private _services:NewsapiservicesService ) { 
    this.emailFormGroup = new FormGroup({
      email: new FormControl("", Validators.required)
    })
  }
  
  technewsDisplay:any =[]

  ngOnInit(): void {
    this._services.techNews().subscribe((result)=>{
      console.log(result);
      
      this.technewsDisplay = result.articles;
      
    })

  }

  get a(){return this.emailFormGroup.controls}
  save(){console.log(this.emailFormGroup.value)}
    
  }


