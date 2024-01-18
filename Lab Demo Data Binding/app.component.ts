import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is a statement';
  clientName = 'CJ Ocampo';
  appliedCSS = 'green ';
  notAppliedCSS = false;
  myColor = 'blue';

  showData($event: any){
    console.log("Button is clicked!");
    if($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }
  clickCount = 0;
  clickMe(){
    this.clickCount+=1;
  }

}
