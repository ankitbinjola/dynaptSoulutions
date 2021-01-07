import { ToastrService } from 'ngx-toastr';
import { SignupService } from './../services/signup.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  name = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  disable: boolean = true;
  // reactiveForm: FormGroup;

  constructor(private signupservice : SignupService, private router : Router, private builder: FormBuilder, private toastr : ToastrService) {
    // this.reactiveForm = new FormGroup({
    //   name:  new FormControl("", Validators.required),
    //   email: new FormControl("", Validators.required),
    //   password:   new FormControl("", Validators.required)
    // });
  }

  ngOnInit(): void {

  }

  postDetails(){
    const data = {
      "name" : this.name.value,
      "email" : this.email.value,
      "password": this.password.value
    }

    console.log("data===" , JSON.stringify(data));

    this.signupservice.registerUser(data).subscribe(res => {
      console.log("this is  user signup==" , JSON.stringify(res));
      this.toastr.success("hurray Success")
      this.router.navigateByUrl('/login');
    }, err => {
      console.log(err);
      this.toastr.error("something went wrong");
    })


    console.log(data);

  }

}
