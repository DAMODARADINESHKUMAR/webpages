import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators,FormBuilder,FormArray} from '@angular/forms';
import { ValueFromArray } from 'rxjs';


@Component ({
  

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  regform: FormGroup

  constructor() {
    this.regform = new FormGroup({
      Uname: new FormControl(null,[Validators.required,Validators.minLength(5)]),
      email: new FormControl(null,[Validators.required , Validators.email]),
      password: new FormControl(null,[Validators.required,Validators.minLength(8)]),
      cpassword: new FormControl(null,[Validators.required,Validators.minLength(5)]),
      gender: new FormControl(),
      subcribe: new FormControl(),
      mobilenums : new FormArray([
        new FormControl(null,Validators.required)

     ])
      
    },this.passwordmatch);
  }
     passwordmatch (rg:any){
      let password = rg.controls['password'].value;
      let cpassword = rg.controls['cpassword'].value;
      
      if(password == cpassword){
        return null
      } else{
        return{
          'passwordmatch':true
        }
      }

     }
  show() {
    
 
    console.log(this.regform);
  }
  
}
