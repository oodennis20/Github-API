import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  userName: string;
  apiUrl: string = "https://api.github.com/users/";

  constructor() { }
}
