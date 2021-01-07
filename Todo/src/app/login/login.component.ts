import { SignupService } from './../services/signup.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = new FormControl('');
  password = new FormControl('');

  constructor(private loginservice : SignupService, private toastr: ToastrService, private router : Router) { }

  ngOnInit(): void {
  }

  login(){
    const data = {
      "email" : this.email.value,
      "password" : this.password.value
    }
    // console.log(data.password)
    this.loginservice.loginUser(data).subscribe(res => {
      console.log("response of logi==" , res);
      this.router.navigateByUrl('/dashboard');
      this.toastr.success("hurray Login ")
    }, err => {
      this.toastr.error("failed to Login")
    })
  console.log("login values==" + (data));



  }

}
