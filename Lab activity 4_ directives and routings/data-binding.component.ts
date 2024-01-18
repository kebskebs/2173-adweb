import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

//Interpolation
title = 'Your title here';
name: string = 'Your name here';
appName = 'ADWEB Interpolation Demonstration!'; 

//Numeric 
num1=9
num2=30 
sum=0 
diff=0 
quo=0 
prod=0 


//Property Binding 
isRaining:boolean = false;
isDisabled=true;
allowNewServer = false;


//Style Binding 
appliedCSSClass="green"; 
nonappliedCSSClass="false"; 
myColor='red'; 

//Two-way data binding demo 
showData($event:any){ 
  console.log("Button is Clicked!"); 
} 

// Functions and using alert 
getMessage(msg:any) 
{ 
  alert(msg) 
} 

//Console Warning 
  getMessage2(msg2:any) { 
    console.warn(msg2) 
  } 

//Console Warning 
  getData(data:any) 
  { 
  console.warn(data) 
  } 
  
//Two way data binding using ngModel (you will need to import FormsModule)
studName="" 
prelim=0 
midterm=0 
final=0 
average = (this.prelim + this.midterm +this.final)/3 
  
itemList: string[] = ['item1', 'item2', 'item3', 'item4'];
grade1: number = 0;
grade2: number = 0;
grade3: number = 0;
average2: number = 0;


calculateAverage() {
  this.average = (this.grade1 + this.grade2 + this.grade3) / 3;
}

searchValue: string = '';

//Event binding
clickCount=0
  clickMe() {
    this.clickCount++;
  }

  resetClickCount() {
    this.clickCount = 0;
  }

}
