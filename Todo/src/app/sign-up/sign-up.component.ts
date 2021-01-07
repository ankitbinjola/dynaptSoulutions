import { SignupService } from './../services/signup.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  name = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');

  constructor(private signupservice : SignupService, private router : Router) { }

  ngOnInit(): void {
  }

  postDetails(){
    const data = {
      "name" : this.name.value,
      "email" : this.email.value,
      "password": this.password.value
    }

    this.signupservice.registerUser(data).subscribe(res => {
      console.log("this is  user signup==" , JSON.stringify(res));
      this.router.navigateByUrl('/login');
    }, err => {
      console.log(err)
    })


    console.log(data);

  }

}
