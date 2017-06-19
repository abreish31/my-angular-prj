import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }
  cars = ['Ford', 'BMW', 'VW'];
  mydata() {
  	return "this is my data!";
  }
}
