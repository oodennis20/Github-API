import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
// getting the info details for the repos
export class ApiService {
  userName: string;
  apiUrl: string = "https://api.github.com/users/";

  constructor(public http:HttpClient) {
    this.userName = "oodennis20"
   }

  getUserDetails(){
    return this.http.get(this.apiUrl + this.userName + "?access-token" + environment.apiKey)
  }
  getRepos() {
    return this.http.get(this.apiUrl + this.userName + "/repos?access_token=" +  environment.apiKey) 
  }
  updateUserName(userName: string) {
    this.userName = userName;
  }
}
