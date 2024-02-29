import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs';
import {interval} from 'rxjs';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template:`
<div style="text-align:center">
<h3>Decimal Pipe</h3>
<p> {{decimalNum1 | number: '3.1'}} </p>
<p> {{decimalNum2 | number: '2.1-4'}} </p>
`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'midterms1';
  project = 'angular pipes'
  presentDate = new Date();
  time$: Observable<Date>; 

  price: number = 20000; 
  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;
  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
  a: number = 0.259;
  b: number = 1.3495;

  ngOnInit() {}
  constructor() { 
    this.time$= interval(1000).pipe(map(()=> new Date()))
  }


  
}
