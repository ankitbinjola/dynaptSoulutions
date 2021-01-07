
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})



export class SignupService {
  baseurl = 'http://localhost:3000';

  constructor(private http: HttpClient) {

  }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  httpOptions2 = {
    headers: new HttpHeaders({
      'Content-Type': 'text/html'
    })
  }


registerUser(data: any){
return this.http.post(`${this.baseurl}/posts/register`, JSON.stringify(data), this.httpOptions)
}



loginUser(data: any){
  return this.http.post(`${this.baseurl}/posts/login`, JSON.stringify(data), this.httpOptions)
}


}
